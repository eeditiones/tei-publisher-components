import { LitElement } from 'lit';
import 'tify';
import { pbMixin, waitOnce, defaultChannel, getEmittedChannels } from './pb-mixin.js';
import { resolveURL } from './utils.js';
import { registry } from './urls.js';

function _injectStylesheet(path) {
  const style = document.querySelector(`link#pb-tify`);
  if (!style) {
    const elem = document.createElement('link');
    elem.type = 'text/css';
    elem.rel = 'stylesheet';
    elem.id = `pb-tify`;
    elem.href = `${resolveURL(path)}/tify.css`;
    document.head.appendChild(elem);
  }
}

/**
 * Viewer for IIIF presentation manifests based on https://tify.rocks/.
 * Requires a proper manifest listing the resources to show. `pb-facs-link`
 * can be used to navigate to a page.
 *
 * @fires pb-refresh - fired if user navigates to another page within the viewer. Parameters to be passed
 * with the event will be copied from the `@id` URL declared in the `rendering` property of the canvas.
 * @fires pb-show-annotation - when received, opens the the manifest given in `file` and the page denoted by the
 * `order` property in the event (see `pb-facs-link`). Page counts start at 1.
 */
export class PbTify extends pbMixin(LitElement) {
  static get properties() {
    return {
      /**
       * URL pointing to a IIIF presentation manifest. Relative paths
       * are interpreted relative to the API endpoint.
       */
      manifest: {
        type: String,
      },
      /**
       * If true, pb-tify will respond to pb-navigate events to synchronize
       * with navigation buttons. Defaults to true.
       */
      enableNavigation: {
        type: Boolean,
        attribute: 'enable-navigation',
        reflect: true,
      },
      /**
       * The initial view to display. Can be 'toc' (table of contents),
       * 'thumbnails', 'text', 'info', 'help', 'export', or null for media only.
       * Defaults to null (media view only).
       */
      initialView: {
        type: String,
        attribute: 'initial-view',
        reflect: true,
      },
      /**
       * If set, do not update browser history when navigating.
       * Defaults to false (history is enabled).
       */
      disableHistory: {
        type: Boolean,
        attribute: 'disable-history',
        reflect: true,
      },
      ...super.properties,
    };
  }

  constructor() {
    super();
    this.cssPath = '../css/tify';
    this._initialPages = null;
    this._currentPage = null;
    this.enableNavigation = true;
    this.disableHistory = false;
    this._pendingNavigation = null; // Queue for navigation when viewer isn't ready
    this._pendingPage = null; // Queue for page navigation when canvases aren't ready
    this._canvasWaitStart = null; // Track when we started waiting for canvases
    this._manifestUrl = null; // Store the manifest URL for fallback fetching
    this._cachedManifest = null; // Cache the fetched manifest
    this._lastSwitchPageTime = 0; // Track when we last called _switchPage to prevent rapid-fire events
    this._lastSwitchPageCanvasId = null; // Track the last canvas we switched to
    // Simplified state management - single object replaces multiple flags
    this._navigationState = null; // { source, targetPage, targetId, timestamp, isActive }
    
    // Initial load flag - still needed for initial page load sequence
    this._initialLoadComplete = false;
    this._lastSetPage = null; // Track last page set to prevent duplicates
    this._lastSetPageTime = 0; // Track when we last set a page
    this._pageToRootMap = null; // Cache: page number (e.g., "011") -> root (e.g., "3.5.6.1")
    this._fetchingPageToRootMap = false; // Flag to prevent concurrent fetches
  }
  /**
   * Ensure a mount container exists and is attached.
   * Idempotent: safe to call multiple times.
   */
  _ensureContainer() {
    if (!this._container) {
      this._container = document.createElement('div');
      this._container.style.height = '100%';
      this._container.style.width = '100%';
      this.appendChild(this._container);
    }
  }
  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);

    if (name === 'manifest' && newVal) {
      this.manifest = newVal;
      this._initViewer();
    }
  }

  async connectedCallback() {
    super.connectedCallback();

    _injectStylesheet(this.cssPath);

    // Ensure container exists even if _initViewer ran early
    this._ensureContainer();
    
    // Read initial URL state early (like pb-view does)
    // This ensures we know what page to load before Tify initializes
    if (!this.disableHistory) {
      const state = registry.getState(this);
      // Store whether URL has a page (id or root parameter)
      // We'll resolve the actual page number when Tify is ready
      this._hasInitialUrlPage = !!(state.id || state.root);
    }

    this.subscribeTo('pb-show-annotation', ev => {
      if (ev.detail) {
        const order = ev.detail.order ? Number(ev.detail.order) : Number.POSITIVE_INFINITY;
        const pageOrder = order === Number.POSITIVE_INFINITY ? 1 : order;
        
        // CRITICAL FIX: Filter out auto-triggered pb-show-annotation events from pb-facs-link elements
        // that don't match the current registry state. This prevents newly loaded content from
        // triggering unwanted navigation. BUT: Always allow navigation if Tify is on a different page
        // (user might be navigating) or if the event matches the registry state.
        if (!this.disableHistory && this._initialLoadComplete && this._tify && this._tify.viewer) {
          const registryState = registry.getState(this);
          
          // Check what page Tify is currently showing
          let currentTifyPage = null;
          try {
            if (typeof this._tify.viewer.currentPage === 'function') {
              const page = this._tify.viewer.currentPage();
              if (typeof page === 'number') {
                currentTifyPage = page + 1;
              }
            }
          } catch (e) {
            // Ignore
          }
          
          // If Tify is already on the target page, ignore the event (no need to navigate)
          if (currentTifyPage === pageOrder) {
            return;
          }
          
          // Try to get the page ID for this order number to compare with registry
          const root = this._getRootFromApp();
          if (root && registryState.id) {
            const canvases = this._getCanvases(root);
            if (canvases.length > 0 && pageOrder >= 1 && pageOrder <= canvases.length) {
              const canvas = canvases[pageOrder - 1];
              
              // Extract page ID from canvas (label or rendering URL)
              let pageId = null;
              
              // Try to get ID from canvas label (e.g., "003" -> "A-N-38_003.jpg")
              if (canvas.label) {
                const label = canvas.label.none || canvas.label.en || canvas.label;
                const labelStr = Array.isArray(label) ? label[0] : label;
                if (labelStr) {
                  const pathParts = window.location.pathname.split('/');
                  let docId = null;
                  for (let i = pathParts.length - 1; i >= 0; i--) {
                    if (pathParts[i] && pathParts[i] !== 'apps' && pathParts[i] !== 'exist') {
                      docId = pathParts[i];
                      break;
                    }
                  }
                  if (docId) {
                    const pageNum = String(labelStr).padStart(3, '0');
                    pageId = `${docId}_${pageNum}.jpg`;
                  }
                }
              }
              
              // Try to get ID from rendering URL
              if (!pageId && canvas.rendering && canvas.rendering.length > 0) {
                const renderingId = canvas.rendering[0]['@id'] || canvas.rendering[0].id;
                if (renderingId) {
                  try {
                    const url = new URL(renderingId, window.location.origin);
                    pageId = url.searchParams.get('id');
                  } catch (e) {
                    // Ignore
                  }
                }
              }
              
              // Only block if: event page ID doesn't match registry AND Tify is on registry page
              // This means it's a stale auto-trigger from content loading
              // If Tify is on a different page, allow it (user might be navigating)
              if (pageId && pageId !== registryState.id) {
                // Find what page order corresponds to the registry ID
                let registryPageOrder = null;
                for (let i = 0; i < canvases.length; i++) {
                  const c = canvases[i];
                  let cId = null;
                  if (c.label) {
                    const label = c.label.none || c.label.en || c.label;
                    const labelStr = Array.isArray(label) ? label[0] : label;
                    if (labelStr) {
                      const pathParts = window.location.pathname.split('/');
                      let docId = null;
                      for (let j = pathParts.length - 1; j >= 0; j--) {
                        if (pathParts[j] && pathParts[j] !== 'apps' && pathParts[j] !== 'exist') {
                          docId = pathParts[j];
                          break;
                        }
                      }
                      if (docId) {
                        const pageNum = String(labelStr).padStart(3, '0');
                        cId = `${docId}_${pageNum}.jpg`;
                      }
                    }
                  }
                  if (cId === registryState.id) {
                    registryPageOrder = i + 1;
                    break;
                  }
                }
                
                // Only ignore if Tify is on the registry page (stale auto-trigger)
                // If Tify is on a different page, allow navigation (user-initiated)
                if (currentTifyPage === registryPageOrder) {
                  return;
                }
                // Otherwise allow it - Tify is on a different page, might be user navigation
              }
            }
          }
        }
        
        this._initialPages = pageOrder;
        const url = ev.detail.file || ev.detail.url;
        if (url && url !== this.manifest) {
          this.manifest = ev.detail.file;
          this._initViewer();
          // check if tify is already initialized
        } else if (this._setPage) {
              // Convert to array format that Tify expects
              const pagesArray = Array.isArray(this._initialPages) ? this._initialPages : [this._initialPages];
              this._setPage(pagesArray);
            }

        if (ev.detail.coordinates) {
          this._addOverlay(ev.detail.coordinates);
        }
      }
    });

    // Subscribe to registry for URL changes (back/forward navigation)
    if (!this.disableHistory) {
      registry.subscribe(this, (state) => {
        // Only handle URL changes after Tify is fully ready
        // Initial load is handled in setInitialPage
        if (this._initialLoadComplete) {
          this._handleUrlChange(state);
        }
      });
      
      // Initial URL state will be handled in _onTifyFullyReady
      // to ensure Tify is fully initialized before loading from URL
    }

    // Subscribe to pb-navigate events if navigation is enabled
    if (this.enableNavigation !== false) {
      this.subscribeTo('pb-navigate', ev => {
        if (!ev.detail || !ev.detail.direction) {
          return;
        }

        const direction = ev.detail.direction;
        
        // Check if tify is initialized
        if (!this._tify || !this._tify.app) {
          return;
        }

        // Wait for tify to be ready if it's not yet
        const root = this._getRootFromApp();
        if (!root) {
          this._pendingNavigation = direction;
          if (this._tify.ready) {
            this._tify.ready.then(() => {
              // Wait a bit more for root to be available
              const waitForRoot = () => {
                const root = this._getRootFromApp();
                if (root) {
                  if (this._pendingNavigation) {
                    const queuedDirection = this._pendingNavigation;
                    this._pendingNavigation = null;
                    this._handleNavigate(queuedDirection);
                  }
                } else {
                  // Retry after a short delay (max 10 seconds)
                  if (!this._navWaitStart) {
                    this._navWaitStart = Date.now();
                  }
                  const elapsed = Date.now() - this._navWaitStart;
                  if (elapsed < 10000) {
                    setTimeout(waitForRoot, 50);
                  } else {
                    // Try to proceed anyway
                    if (this._pendingNavigation) {
                      const queuedDirection = this._pendingNavigation;
                      this._pendingNavigation = null;
                      this._handleNavigate(queuedDirection);
                    }
                  }
                }
              };
              waitForRoot();
            });
          }
          return;
        }

        this._handleNavigate(direction);
      });
    }

    this.signalReady();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    
    // Clean up Vue store watcher if it exists
    if (this._vueStoreWatcher && typeof this._vueStoreWatcher === 'function') {
      this._vueStoreWatcher();
      this._vueStoreWatcher = null;
    }
    
    // Clean up polling interval if it exists
    if (this._vueStoreWatcherInterval) {
      clearInterval(this._vueStoreWatcherInterval);
      this._vueStoreWatcherInterval = null;
    }
    
    // Clean up Tify error watcher if it exists
    if (this._tifyErrorWatcherInterval) {
      clearInterval(this._tifyErrorWatcherInterval);
      this._tifyErrorWatcherInterval = null;
    }
    
    // Cleanup is handled by registry automatically
  }

  firstUpdated() {
    super.firstUpdated();

    waitOnce('pb-page-ready', () => {
      this._initViewer();
    });
  }

  _initViewer() {
    // Make sure a mount point exists even if called before connectedCallback
    this._ensureContainer();

    // Don't initialize if no manifest is provided
    if (!this.manifest || this.manifest.trim() === '') {
      return;
    }

    // Clean up existing Tify instance and watchers before creating a new one
    if (this._tify) {
      this._tify.destroy();
    }
    
    // Clean up Vue store watcher if it exists (prevents duplicate polling)
    if (this._vueStoreWatcherInterval) {
      clearInterval(this._vueStoreWatcherInterval);
      this._vueStoreWatcherInterval = null;
    }
    if (this._vueStoreWatcher && typeof this._vueStoreWatcher === 'function') {
      this._vueStoreWatcher();
      this._vueStoreWatcher = null;
    }
    
    // Clean up Tify error watcher if it exists
    if (this._tifyErrorWatcherInterval) {
      clearInterval(this._tifyErrorWatcherInterval);
      this._tifyErrorWatcherInterval = null;
    }

    try {
      const endpoint = this.getEndpoint();

      // In component test environments, endpoint might be undefined
      // Use a default endpoint for testing purposes
      const effectiveEndpoint = endpoint || 'http://localhost:5173';

      const manifestUrl = this.toAbsoluteURL(this.manifest, effectiveEndpoint);

      // Only validate that we have a manifest URL - let Tify handle invalid URLs
      if (!manifestUrl || manifestUrl.trim() === '') {
        console.warn('<pb-tify> Invalid manifest URL:', this.manifest);
        return;
      }

      // Store manifest URL for fallback fetching
      this._manifestUrl = manifestUrl;

      // Check URL for initial page BEFORE creating Tify
      // This allows us to set the page immediately when Tify is ready
      const state = registry.getState(this);
      this._initialUrlPage = null;
      if (state.id || state.root) {
        // Store that we have a URL page - will resolve actual page number after Tify is ready
        this._hasInitialUrlPage = true;
      }
      
      // Build tify options
      const tifyOptions = {
        manifestUrl: manifestUrl,
      };
      
      // Set initial view if specified (e.g., 'toc' to show table of contents with double pages)
      if (this.initialView) {
        tifyOptions.view = this.initialView;
      }
      
      this._tify = new Tify(tifyOptions);
      
      // Try to listen to Tify's internal events if available
      // Some versions of Tify might emit custom events when pages change
      if (this._tify && this._tify.viewer && this._tify.viewer.$el) {
        // Tify events are now handled via registry subscription
        // No need to listen to individual Tify events
      }

      // Wait for ready, then try to get root, but proceed either way
      // The viewer should display even without root - we only need root for navigation
      if (this._tify && this._tify.ready) {
        this._tify.ready.then(() => {
          // Try to get root, but don't wait too long
          const waitForRoot = () => {
            if (this._tify && this._tify.app) {
              // Try different ways to access the manifest/root data
              const root = this._tify.app.$root || this._tify.app.root || this._tify.app.manifest || (this._tify.app.$data && this._tify.app.$data.root);
              if (root) {
                this._onTifyFullyReady();
                return;
              }
            }
            
            // Retry after a short delay (max 2 seconds - don't wait too long)
            if (!this._rootWaitStart) {
              this._rootWaitStart = Date.now();
            }
            const elapsed = Date.now() - this._rootWaitStart;
            if (elapsed < 2000) {
              setTimeout(waitForRoot, 50);
            } else {
              // Try to fetch manifest directly as fallback
              this._fetchAndCacheManifest().then(() => {
                // Proceed anyway - Tify should still work, we'll handle navigation differently
                this._onTifyFullyReady();
              }).catch(() => {
                // Proceed even if fetch fails
                this._onTifyFullyReady();
              });
            }
          };
          waitForRoot();
        }).catch(error => {
          // Tify's ready promise rejects when manifest loading fails
          // This is the proper way to detect manifest errors
          console.error('<pb-tify> Tify ready promise rejected:', error);
          this._handleManifestError(error);
        });
      } else {
        // If ready promise not available, proceed anyway after a short delay
        setTimeout(() => {
          this._onTifyFullyReady();
        }, 500);
      }
      
      // Also watch Tify's error store for errors that might not reject the ready promise
      // This provides additional error detection
      if (this._tify && this._tify.app) {
        // Wait a bit for Tify to initialize, then set up error watcher
        setTimeout(() => {
          this._setupTifyErrorWatcher();
        }, 100);
      }
      
      // Mount Tify to the container
      this._tify.mount(this._container);
    } catch (error) {
      console.error('<pb-tify> Failed to initialize Tify:', error);
      this._handleManifestError(error);
    }
  }

  async _onTifyFullyReady() {
    // Clear any previous error messages
    this._clearError();

    // extend tify's setPage function to allow emitting an event
    const { app } = this._tify;
    
    // Check if app exists and has the necessary structure
    if (!app) {
      console.error('<pb-tify> Tify app is not available');
      return;
    }
    
    // Check if app.pages exists - it may not be available in all Tify versions
    const hasAppPages = app.pages !== undefined && app.pages !== null;
    
    // Track the last known canvas ID for change detection
    this._lastCanvasId = null;
    
    // Also listen for clicks on thumbnail elements specifically
    if (this._tify && this._tify.viewer) {
      const viewer = this._tify.viewer;
      
      // Wait a bit for the viewer to be fully rendered
      setTimeout(() => {
        // Find thumbnail container - Tify typically uses classes like 'tify-thumbnails' or similar
        const thumbnailContainer = viewer.$el?.querySelector('.tify-thumbnails') || 
                                   viewer.$el?.querySelector('[class*="thumbnail"]') ||
                                   this._container?.querySelector('.tify-thumbnails') ||
                                   this._container?.querySelector('[class*="thumbnail"]');
        
        if (thumbnailContainer) {
          // Helper function to find thumbnail index from click event
          const findThumbnailIndex = (ev) => {
            // First, try to extract from image URL - this is the most reliable method
            if (ev.target.tagName === 'IMG' && ev.target.src) {
              const src = ev.target.src;
              // Try to match page number in URL (e.g., A-N-38_003.jpg -> page 3 -> index 2)
              const match = src.match(/_(\d+)\.jpg/);
              if (match) {
                const pageNum = parseInt(match[1], 10);
                if (!isNaN(pageNum) && pageNum > 0) {
                  // Page numbers in URLs are usually 1-indexed, convert to 0-indexed
                  return pageNum - 1;
                }
              }
            }
            
            // Fallback: find the actual list item that contains the clicked element
            // Walk up from the clicked element to find the <li> parent
            let element = ev.target;
            let listItem = null;
            
            while (element && element !== thumbnailContainer) {
              if (element.tagName === 'LI') {
                listItem = element;
                break;
              }
              element = element.parentElement;
            }
            
            if (listItem) {
              // Get all list items in the container (not the container itself)
              const allListItems = Array.from(thumbnailContainer.querySelectorAll('li'));
              const index = allListItems.indexOf(listItem);
              if (index >= 0) {
                return index;
              }
            }
            
            // Last resort: try to find by data attribute on any parent
            element = ev.target;
            while (element && element !== thumbnailContainer) {
              const dataIndex = element.getAttribute('data-index') || 
                               element.getAttribute('data-page') ||
                               element.getAttribute('data-order');
              if (dataIndex !== null) {
                const parsed = parseInt(dataIndex, 10);
                if (!isNaN(parsed) && parsed >= 0) {
                  return parsed;
                }
              }
              element = element.parentElement;
            }
            
            return -1;
          };
          
          // Listen for clicks on thumbnail items
          // Use bubble phase (not capture) so Tify handles the click first
          thumbnailContainer.addEventListener('click', (ev) => {
            const thumbnailIndex = findThumbnailIndex(ev);
            
            if (thumbnailIndex >= 0) {
              // Get the root and canvases
              const root = this._getRootFromApp();
              if (root) {
                const canvases = this._getCanvases(root);
                if (thumbnailIndex < canvases.length) {
                  const newPage = thumbnailIndex + 1; // Convert to 1-indexed
                  const canvas = canvases[thumbnailIndex];
                  
                  if (canvas) {
                    // Extract target page ID
                    const { rendering } = canvas;
                    let targetId = null;
                    if (rendering && rendering.length > 0) {
                      const renderingId = rendering[0]['@id'] || rendering[0].id;
                      if (renderingId) {
                        try {
                          const url = new URL(renderingId);
                          targetId = url.searchParams.get('id');
                        } catch (e) {
                          // Ignore
                        }
                      }
                    }
                    if (!targetId && canvas.label) {
                      const label = canvas.label.none || canvas.label.en || canvas.label;
                      const labelStr = Array.isArray(label) ? label[0] : label;
                      if (labelStr) {
                        const pathParts = window.location.pathname.split('/');
                        let docId = null;
                        for (let i = pathParts.length - 1; i >= 0; i--) {
                          if (pathParts[i] && pathParts[i] !== 'apps' && pathParts[i] !== 'exist') {
                            docId = pathParts[i];
                            break;
                          }
                        }
                        if (docId) {
                          const pageNum = String(labelStr).padStart(3, '0');
                          targetId = `${docId}_${pageNum}.jpg`;
                        }
                      }
                    }
                    
                    // Set navigation state for thumbnail navigation
                    this._setNavigationState('thumbnail', newPage, targetId);
                    
                    // Let Tify handle the click first, then wait for it to actually change pages
                    // BEFORE committing to registry. This prevents checkPageChange from seeing a mismatch.
                    let attempts = 0;
                    const maxAttempts = 10;
                    const waitForTifyThenUpdate = async () => {
                      attempts++;
                      
                      // Try to get the current page from Tify's viewer
                      let tifyCurrentPage = null;
                      if (this._tify && this._tify.viewer) {
                        const viewer = this._tify.viewer;
                        if (typeof viewer.currentPage === 'function') {
                          try {
                            const page = viewer.currentPage();
                            if (typeof page === 'number') {
                              tifyCurrentPage = page + 1; // Convert to 1-indexed
                            }
                          } catch (e) {
                            // Ignore
                          }
                        } else if (viewer._sequenceIndex !== undefined) {
                          tifyCurrentPage = viewer._sequenceIndex + 1;
                        }
                      }
                      
                      // Only proceed when Tify has actually changed to the target page
                      if (tifyCurrentPage === newPage) {
                        // Tify has changed - now it's safe to update registry
                        // Get the current canvas
                        const root = this._getRootFromApp();
                        if (root) {
                          const canvases = this._getCanvases(root);
                          const targetIndex = tifyCurrentPage - 1;
                          if (targetIndex >= 0 && targetIndex < canvases.length) {
                            const currentCanvas = canvases[targetIndex];
                            if (currentCanvas) {
                              // Extract the ID we're about to commit so _handleUrlChange can skip it
                              // This must be done BEFORE calling _updateUrlFromPage
                              let canvasId = null;
                              const { rendering } = currentCanvas;
                              if (rendering && rendering.length > 0) {
                                const renderingId = rendering[0]['@id'] || rendering[0].id;
                                if (renderingId) {
                                  try {
                                    const url = new URL(renderingId, window.location.origin);
                                    canvasId = url.searchParams.get('id');
                                  } catch (e) {
                                    // Ignore
                                  }
                                }
                              }
                              if (!canvasId && currentCanvas.label) {
                                const label = currentCanvas.label.none || currentCanvas.label.en || currentCanvas.label;
                                const labelStr = Array.isArray(label) ? label[0] : label;
                                if (labelStr) {
                                  const pathParts = window.location.pathname.split('/');
                                  let docId = null;
                                  for (let i = pathParts.length - 1; i >= 0; i--) {
                                    if (pathParts[i] && pathParts[i] !== 'apps' && pathParts[i] !== 'exist') {
                                      docId = pathParts[i];
                                      break;
                                    }
                                  }
                                  if (docId) {
                                    const pageNum = String(labelStr).padStart(3, '0');
                                    canvasId = `${docId}_${pageNum}.jpg`;
                                  }
                                }
                              }
                              // Update navigation state with actual canvas ID
                              if (canvasId) {
                                this._setNavigationState('thumbnail', tifyCurrentPage, canvasId);
                              }
                              // Now update registry - Tify is already on the correct page
                              // This prevents checkPageChange from seeing a mismatch
                              await this._updateUrlFromPage(currentCanvas, true);
                              // Also emit refresh explicitly to ensure pb-view gets notified
                              this._emitPbRefresh(currentCanvas);
                              return;
                            }
                          }
                        }
                        // Fallback: use the original canvas
                        await this._updateUrlFromPage(canvas, true);
                        this._emitPbRefresh(canvas);
                      } else if (attempts < maxAttempts) {
                        // Tify hasn't changed yet, retry after a short delay
                        setTimeout(waitForTifyThenUpdate, 100);
                      } else {
                        // Give up after max attempts - update anyway
                        console.warn('[pb-tify] thumbnail click: max attempts reached, updating registry anyway', {
                          tifyCurrentPage,
                          newPage,
                          attempts,
                          maxAttempts
                        });
                        await this._updateUrlFromPage(canvas, true);
                        this._emitPbRefresh(canvas);
                      }
                    };
                    
                    // Start checking after a short initial delay to let Tify start changing
                    setTimeout(waitForTifyThenUpdate, 150);
                    
                    // Re-enable page monitoring after a delay to let Tify settle
                    setTimeout(() => {
                      // Mark navigation complete for post-navigation protection
                      const committedId = this._navigationState?.targetId || targetId;
                      if (committedId) {
                        this._markNavigationComplete(committedId);
                      }
                      
                      // Clear navigation state after a delay
                      setTimeout(() => {
                        this._clearNavigationState();
                      }, 500);
                    }, 2000);
                  }
                }
              }
            }
          }, false); // Use bubble phase - let Tify handle click first
        }
        
        // Monitor Tify's page changes to update registry
        // This catches all navigation methods (buttons, keyboard, etc.)
        let lastPage = null;
        let lastHash = window.location.hash;
        const checkPageChange = async () => {
          // Don't monitor during initial load
          if (!this._initialLoadComplete) {
            return;
          }
          
          if (!this._tify || !this._tify.viewer) {
            return;
          }
          
          // Check if navigation is active (any source)
          if (this._isNavigationActive()) {
            return; // Navigation in progress, don't interfere
          }
          
          // Check if we recently committed (post-navigation protection)
          if (this._hasRecentCommit()) {
            return; // Recently committed, let it settle
          }
          
          let currentPage = null;
          if (typeof this._tify.viewer.currentPage === 'function') {
            try {
              const page = this._tify.viewer.currentPage();
              if (typeof page === 'number') {
                currentPage = page + 1; // Convert to 1-indexed
              }
            } catch (e) {
              // Ignore
            }
          } else if (this._tify.viewer._sequenceIndex !== undefined) {
            const seqIndex = this._tify.viewer._sequenceIndex;
            if (typeof seqIndex === 'number') {
              currentPage = seqIndex + 1; // Convert to 1-indexed
            }
          }
          
          // Also check hash change (Tify might update hash directly)
          const currentHash = window.location.hash;
          const hashChanged = currentHash !== lastHash;
          
          // If page changed or hash changed, check if URL already matches before updating
          if ((currentPage && currentPage !== lastPage) || hashChanged) {
            // Check if URL already has this page
            const state = registry.getState(this);
            const root = this._getRootFromApp();
            if (root) {
              const canvases = this._getCanvases(root);
              if (currentPage >= 1 && currentPage <= canvases.length) {
                const canvas = canvases[currentPage - 1];
                if (canvas) {
                  // Check if URL already matches this canvas
                  let urlMatches = false;
                  if (state.id) {
                    const { rendering } = canvas;
                    if (rendering && rendering.length > 0) {
                      const renderingId = rendering[0]['@id'] || rendering[0].id;
                      if (renderingId) {
                        try {
                          const url = new URL(renderingId);
                          const canvasId = url.searchParams.get('id');
                          if (canvasId === state.id) {
                            urlMatches = true;
                          }
                        } catch (e) {
                          // Ignore
                        }
                      }
                    }
                  }
                  
                  // Only update if URL doesn't match AND we're not navigating to this page
                  // Check if this is the target page we're navigating to
                  let isTargetPage = false;
                  if (this._targetPageId) {
                    const { rendering } = canvas;
                    if (rendering && rendering.length > 0) {
                      const renderingId = rendering[0]['@id'] || rendering[0].id;
                      if (renderingId) {
                        try {
                          const url = new URL(renderingId);
                          const canvasId = url.searchParams.get('id');
                          if (canvasId === this._targetPageId) {
                            isTargetPage = true;
                          }
                        } catch (e) {
                          // Ignore
                        }
                      }
                    }
                  }
                  
                  // Only update if URL doesn't match AND this isn't our target page (prevents resets)
                  // Also check if we just committed to a different page - if so, wait for Tify to catch up
                  const currentState = registry.getState(this);
                  const justCommitted = this._lastCommittedId && currentState.id === this._lastCommittedId;
                  
                  // Also check if we're in the middle of a commit (registry might not have updated yet)
                  const isCommitting = this._isCommitting;
                  
                  // Don't update if we have a target page ID set (we're navigating to it)
                  const hasTargetPage = !!this._targetPageId;
                  
                  // Don't update if thumbnail navigation is in progress (even if flag hasn't been checked yet)
                  const thumbnailNav = this._thumbnailNavigationInProgress;
                  
                  // Don't update if the current page matches what we just committed (we're navigating to it)
                  // Check if currentState.id matches _lastCommittedId - if so, we just committed this, don't reset
                  const matchesLastCommit = this._lastCommittedId && 
                                            currentState.id === this._lastCommittedId &&
                                            currentState.id !== null;
                  
                  // Also check if we're trying to update to a page that matches what we just committed
                  // This prevents checkPageChange from resetting when we just committed a page change via interception
                  let canvasMatchesLastCommit = false;
                  if (this._lastCommittedId && canvas) {
                    const { rendering } = canvas;
                    if (rendering && rendering.length > 0) {
                      const renderingId = rendering[0]['@id'] || rendering[0].id;
                      if (renderingId) {
                        try {
                          const url = new URL(renderingId, window.location.href);
                          const canvasId = url.searchParams.get('id');
                          if (canvasId === this._lastCommittedId) {
                            canvasMatchesLastCommit = true;
                          }
                        } catch (e) {
                          // Ignore
                        }
                      }
                    }
                    // Also check by generating pageId from canvas label
                    if (!canvasMatchesLastCommit && canvas.label) {
                      const label = canvas.label.none || canvas.label.en || canvas.label;
                      const labelStr = Array.isArray(label) ? label[0] : label;
                      if (labelStr) {
                        const pathParts = window.location.pathname.split('/');
                        let docId = null;
                        for (let i = pathParts.length - 1; i >= 0; i--) {
                          if (pathParts[i] && pathParts[i] !== 'apps' && pathParts[i] !== 'exist') {
                            docId = pathParts[i];
                            break;
                          }
                        }
                        if (docId) {
                          const pageNum = String(labelStr).padStart(3, '0');
                          const pageId = `${docId}_${pageNum}.jpg`;
                          if (pageId === this._lastCommittedId) {
                            canvasMatchesLastCommit = true;
                          }
                        }
                      }
                    }
                  }
                  
                  // CRITICAL: Don't commit if registry has a newer page than what Tify is showing
                  // This prevents checkPageChange from overwriting a recent commit with an older page
                  // Extract page numbers to compare
                  let registryPageNum = null;
                  let canvasPageNum = null;
                  if (currentState.id) {
                    const match = currentState.id.match(/_(\d{2,3})\./);
                    if (match) {
                      registryPageNum = parseInt(match[1], 10);
                    }
                  }
                  if (canvas && canvas.label) {
                    const label = canvas.label.none || canvas.label.en || canvas.label;
                    const labelStr = Array.isArray(label) ? label[0] : label;
                    if (labelStr) {
                      canvasPageNum = parseInt(labelStr, 10);
                    }
                  }
                  // If registry has a newer page (higher number), don't overwrite it with an older page
                  // ALSO: If _lastCommittedId exists and has a newer page, don't overwrite it
                  let wouldDowngrade = registryPageNum !== null && canvasPageNum !== null && 
                                        canvasPageNum < registryPageNum;
                  
                  // Additional check: if we recently committed a newer page, don't overwrite it
                  if (!wouldDowngrade && this._lastCommittedId) {
                    const lastCommitMatch = this._lastCommittedId.match(/_(\d{2,3})\./);
                    if (lastCommitMatch) {
                      const lastCommitPageNum = parseInt(lastCommitMatch[1], 10);
                      if (canvasPageNum !== null && canvasPageNum < lastCommitPageNum) {
                        wouldDowngrade = true;
                      }
                    }
                  }
                  
                  if (!urlMatches && !isTargetPage && !justCommitted && !isCommitting && !hasTargetPage && !thumbnailNav && !matchesLastCommit && !canvasMatchesLastCommit && !wouldDowngrade) {
                    // Extract target page ID for Tify button clicks
                    const { rendering } = canvas;
                    let targetId = null;
                    if (rendering && rendering.length > 0) {
                      const renderingId = rendering[0]['@id'] || rendering[0].id;
                      if (renderingId) {
                        try {
                          const url = new URL(renderingId);
                          targetId = url.searchParams.get('id');
                        } catch (e) {
                          // Ignore
                        }
                      }
                    }
                    
                    // Set navigation state for button/keyboard navigation
                    this._setNavigationState('user', currentPage, targetId);
                    
                    // Force update to bypass registry update check (Tify buttons are user actions)
                    await this._updateUrlFromPage(canvas, true);
                    // Also emit refresh directly to ensure transcription updates
                    this._emitPbRefresh(canvas);
                    
                    // Mark navigation complete and clear after a delay
                    setTimeout(() => {
                      if (targetId) {
                        this._markNavigationComplete(targetId);
                      }
                      setTimeout(() => {
                        this._clearNavigationState();
                      }, 500);
                    }, 300);
                  }
                }
              }
            }
            lastPage = currentPage;
            lastHash = currentHash;
          } else if (currentPage) {
            lastPage = currentPage;
            lastHash = currentHash;
          }
        };
        
        // Check for page changes more frequently to catch Tify button clicks
        setInterval(checkPageChange, 200);
        
      }, 500); // Wait 500ms for viewer to render
    }

    // Use tify's setPage method directly, or app.setPage if available
    // According to Tify API: setPage(pageOrPages) accepts 1-based integer or array
    // Returns: array of current pages or false if invalid
    // Note: Actual implementation throws RangeError for invalid pages
    const tifySetPage = this._tify.setPage;
    const appSetPage = app.setPage;
    
    // Helper function to wrap setPage with proper error handling and synchronization
    const createSetPageWrapper = (originalSetPage, context) => {
      return async (pageOrPages) => {
              // Prevent duplicate page setting (within 200ms)
        const pagesArray = Array.isArray(pageOrPages) ? pageOrPages : [pageOrPages];
        const page = Number(pagesArray[0]);
              const now = Date.now();
        
              if (this._lastSetPage === page && (now - this._lastSetPageTime) < 200) {
                return; // Skip duplicate setPage call
              }

              // Get canvases using helper that supports both IIIF 2.0 and 3.0
              const root = this._getRootFromApp();
              const canvases = this._getCanvases(root);
              
              // If canvases aren't available yet, queue the page navigation
              if (canvases.length === 0) {
                this._pendingPage = pagesArray;
                // Wait a bit and try again (max 5 seconds)
                if (!this._canvasWaitStart) {
                  this._canvasWaitStart = Date.now();
                }
                const elapsed = Date.now() - this._canvasWaitStart;
                if (elapsed < 5000) {
                  setTimeout(() => {
                    if (this._pendingPage && this._setPage) {
                      const queuedPages = this._pendingPage;
                      this._pendingPage = null;
                      this._setPage(queuedPages);
                    }
                  }, 100);
                } else {
                  this._pendingPage = null;
                  this._canvasWaitStart = null;
                }
          return false; // Return false to indicate failure (matches Tify API)
              }
              
              // Reset canvas wait timer if we have canvases now
              this._canvasWaitStart = null;
              
        // Call original setPage - let Tify validate the page number
        // Tify will throw RangeError if invalid, or return array/false per API
        try {
          const result = originalSetPage.call(context, pageOrPages);
          
          // Check return value: Tify API says it returns array or false
          if (result === false) {
            // Invalid page - Tify rejected it
            console.warn('<pb-tify> setPage returned false - invalid page:', pageOrPages);
            return false;
          }
          
          // Success - result is array of current pages
          if (Array.isArray(result) && result.length > 0) {
            const actualPage = result[0]; // Get first page from result
            
            // Check if page actually changed
            const pageChanged = this._currentPage !== actualPage;
            this._currentPage = actualPage;
            this._lastSetPage = actualPage;
                this._lastSetPageTime = now;
                
            const canvas = canvases[actualPage - 1];
                if (canvas) {
                  this._lastCanvasId = canvas.id || canvas['@id'];
                  
              // If not navigation is active for 'url' source, this is a user-initiated navigation
              // (Tify buttons, keyboard, thumbnails, etc.) - always update registry and emit refresh
              const isUrlNavigation = this._isNavigationActive('url');
              if (!isUrlNavigation && pageChanged) {
                // Update registry and emit refresh (force=true ensures commit)
                await this._updateUrlFromPage(canvas, true);
              }
              // If URL navigation is active, don't update registry (would cause loop)
            }
          }
          
          return result; // Return Tify's result (array or false)
        } catch (error) {
          // Tify throws RangeError for invalid pages
          if (error instanceof RangeError) {
            console.warn('<pb-tify> setPage RangeError - invalid page:', pageOrPages, error.message);
            return false; // Return false to match API behavior
          }
          // Other errors should be logged
          console.error('<pb-tify> Error calling setPage:', error);
          return false;
        }
      };
    };
    
    // Determine which setPage to use and wrap it
    if (typeof tifySetPage === 'function') {
      // Store original function
      const originalSetPage = tifySetPage.bind(this._tify);
      
      // Wrap Tify's setPage
      this._tify.setPage = createSetPageWrapper(originalSetPage, this._tify);

      this._setPage = (pages) => {
        // By the time _setPage is set up, Tify should already be ready
        // Call setPage directly - if Tify isn't ready, it will handle the error
        try {
          this._tify.setPage(pages);
        } catch (error) {
          // If Tify isn't ready yet, wait for it
          if (this._tify.ready) {
            this._tify.ready.then(() => {
              this._tify.setPage(pages);
            }).catch(() => {
              // Ignore errors
            });
          }
        }
      };
    } else if (typeof appSetPage === 'function') {
      // Store original function
      const originalSetPage = appSetPage.bind(app);
      
      // Wrap app's setPage
      app.setPage = createSetPageWrapper(originalSetPage, app);

      this._setPage = (pages) => {
        // By the time _setPage is set up, Tify should already be ready
        // Call setPage directly - if Tify isn't ready, it will handle the error
        try {
          app.setPage(pages);
              } catch (error) {
          // If Tify isn't ready yet, wait for it
          if (this._tify.ready) {
            this._tify.ready.then(() => {
              app.setPage(pages);
            }).catch(() => {
              // Ignore errors
            });
          }
        }
      };
          } else {
            // Fallback: create a simple wrapper that at least tracks the page
            this._setPage = (pages) => {
              const page = Array.isArray(pages) ? pages[0] : pages;
              this._currentPage = page;
            };
          }

    // Set up Vue store watcher for immediate page change detection (Option 1)
    // This provides event-driven detection instead of relying solely on polling
    this._setupVueStoreWatcher(app);

    // open initial page if set earlier via pb-load-facsimile event or from URL
    // Do this after setting up the override so _currentPage gets tracked
    // Tify expects pages as an array, and we need to ensure manifest is loaded
    const setInitialPage = () => {
            const root = this._getRootFromApp();
            if (!root) {
              setTimeout(setInitialPage, 100);
              return;
            }
            
            const canvases = this._getCanvases(root);
            const canvasCount = canvases.length;
            
            // Don't try to set page if there are no canvases yet
            if (canvasCount === 0) {
              // Wait a bit and try again
              setTimeout(setInitialPage, 100);
              return;
            }
            
            // Read initial page from registry (like pb-view does)
            const state = registry.getState(this);
            let initialPage = null;
            
            // PRIORITY 1: Check hash first (most reliable - e.g., #A-N-38_004.jpg)
            const hash = window.location.hash;
            if (hash) {
              const hashMatch = hash.match(/_(\d{2,3})\./);
              if (hashMatch) {
                const pageNum = parseInt(hashMatch[1], 10);
                if (pageNum >= 1 && pageNum <= canvasCount) {
                  initialPage = pageNum;
                }
              }
            }
            
            // PRIORITY 2: Try to find page from registry state.id
            if (!initialPage && state.id) {
              // Find canvas by id - check both rendering URL id and canvas label
              for (let i = 0; i < canvases.length; i++) {
                const canvas = canvases[i];
                
                // First check rendering URL id parameter
                const { rendering } = canvas;
                if (rendering && rendering.length > 0) {
                  const renderingId = rendering[0]['@id'] || rendering[0].id;
                  if (renderingId) {
                    try {
                      const url = new URL(renderingId);
                      const canvasId = url.searchParams.get('id');
                      if (canvasId === state.id) {
                        initialPage = i + 1;
                        break;
                      }
                    } catch (e) {
                      // Ignore
                    }
                  }
                }
                
                // Also check canvas label for id match (e.g., A-N-38_002.jpg matches A-N-38_002.jpg)
                if (canvas.label) {
                  const label = canvas.label.none || canvas.label.en || canvas.label;
                  const labelStr = Array.isArray(label) ? label[0] : label;
                  if (labelStr) {
                    // Check if state.id contains the label (e.g., "A-N-38_002.jpg" contains "002")
                    // Or if label matches the id pattern
                    if (state.id === labelStr || state.id.includes(labelStr) || labelStr.includes(state.id)) {
                      initialPage = i + 1;
                      break;
                    }
                  }
                }
              }
            }
            
            // If not in registry, check if set via pb-load-facsimile event
            if (!initialPage && this._initialPages) {
              const pagesArray = Array.isArray(this._initialPages) ? this._initialPages : [this._initialPages];
              initialPage = Number(pagesArray[0]);
              if (isNaN(initialPage) || initialPage < 1) {
                initialPage = 1;
              }
            }
            
            // Default to page 1
            if (!initialPage) {
              initialPage = 1;
            }
            
            // Ensure page is within range
            const validPage = Math.max(1, Math.min(initialPage, canvasCount));
            
            // Check if we found a page from URL (hash or state.id)
            // If hash is present OR state.id is set, we should commit to normalize the URL
            // This ensures shareable URLs have id in both query params and hash
            const hasUrlPage = (hash && initialPage === validPage) || (state.id && initialPage === validPage);
            const hasHashOrId = (hash && hash.length > 1) || (state.id && state.id.length > 0);
            
            // Always commit if we have a hash or state.id to normalize the URL
            // This ensures shareable URLs have id in both query params and hash
            // We commit even if initialPage doesn't match validPage, as long as we have a hash/id
            if (hasUrlPage || hasHashOrId) {
              // Loading from URL - set page and wait for Tify to actually change
              // Set navigation state for URL-based initial load
              this._setNavigationState('url', validPage, state.id);
              
              // Ensure URL has all three components (id, root, hash) for shareable URLs FIRST
              // Do this BEFORE setting the page so the URL is correct immediately
              // The registry may have read id from hash, but we need to commit it back
              // to ensure id is in query params AND hash
              // Use the page we calculated, or fall back to validPage
              const targetPage = initialPage > 0 ? initialPage : validPage;
              const canvas = canvases[targetPage - 1] || canvases[validPage - 1];
              if (canvas && (state.id || hash)) {
                // Directly commit to ensure id is in query params (registry will also set hash)
                // This ensures shareable URLs have id in both query params and hash
                const idToCommit = state.id || (hash ? hash.substring(1) : null);
                
                if (idToCommit) {
                  // Build commit state - only include root if it exists (don't set to null)
                  const commitState = { id: idToCommit };
                  if (state.root) {
                    commitState.root = state.root;
                  }
                  
                  // Use replace to avoid adding to history during initial load
                  // Do this IMMEDIATELY, not in a setTimeout, so the URL is correct right away
                  registry.replace(this, commitState);
                }
              }
              
              // Now set the page after URL is committed
              this._setPage([validPage]);
              this._currentPage = validPage;
              
              // Also call _updateUrlFromPage to fetch root if missing and ensure all components are present
              // This will update the URL with root if it wasn't available initially
              // Use async IIFE to properly await the async function
              (async () => {
                await this._updateUrlFromPage(canvas);
              })();
              
              // Wait for Tify to actually change pages, then emit refresh
              const verifyAndEmit = (attempts = 0) => {
                // CRITICAL: Check if user has already navigated to a different page
                // If so, skip emitting pb-refresh to prevent overwriting user navigation
                const currentRegistryState = registry.getState(this);
                if (currentRegistryState.id) {
                  // Try to extract page number from registry state
                  const registryPageMatch = currentRegistryState.id.match(/_(\d{2,3})\./);
                  if (registryPageMatch) {
                    const registryPageNum = parseInt(registryPageMatch[1], 10);
                    // If registry has a different page than what we're trying to set, user has navigated
                    if (registryPageNum !== validPage) {
                      this._clearNavigationState();
                      this._initialLoadComplete = true;
                      return; // Don't emit - user has already navigated
                    }
                  }
                }
                
                // Check if Tify is on the correct page
                let tifyPage = null;
                if (this._tify && this._tify.viewer) {
                  if (typeof this._tify.viewer.currentPage === 'function') {
                    try {
                      const page = this._tify.viewer.currentPage();
                      if (typeof page === 'number') {
                        tifyPage = page + 1;
                      }
                    } catch (e) {
                      // Ignore
                    }
                  } else if (this._tify.viewer._sequenceIndex !== undefined) {
                    const seqIndex = this._tify.viewer._sequenceIndex;
                    if (typeof seqIndex === 'number') {
                      tifyPage = seqIndex + 1;
                    }
                  }
                }
                
                if (tifyPage === validPage) {
                  // Tify is on the correct page
                  this._clearNavigationState();
                  this._initialLoadComplete = true;
                  this._emitPbRefresh(canvases[validPage - 1]);
                } else if (attempts < 20) {
                  // Not yet, retry (up to 20 attempts = 6 seconds)
                  setTimeout(() => verifyAndEmit(attempts + 1), 300);
                } else {
                  // Give up - but check registry again before emitting
                  const finalRegistryState = registry.getState(this);
                  if (finalRegistryState.id) {
                    const finalRegistryPageMatch = finalRegistryState.id.match(/_(\d{2,3})\./);
                    if (finalRegistryPageMatch) {
                      const finalRegistryPageNum = parseInt(finalRegistryPageMatch[1], 10);
                      if (finalRegistryPageNum !== validPage) {
                        this._clearNavigationState();
                        this._initialLoadComplete = true;
                        return; // Don't emit - user has navigated
                      }
                    }
                  }
                  // Registry matches or no registry state - emit refresh
                  this._clearNavigationState();
                  this._initialLoadComplete = true;
                  this._emitPbRefresh(canvases[validPage - 1]);
                }
              };
              
              // Start verification after a short delay to let Tify process
              setTimeout(() => verifyAndEmit(), 500);
            } else {
              // Not from URL - set page and update registry
              this._setPage([validPage]);
              this._currentPage = validPage;
              // Update registry after a delay
              setTimeout(async () => {
                const canvas = canvases[validPage - 1];
                if (canvas) {
                  await this._updateUrlFromPage(canvas);
                }
                this._initialLoadComplete = true;
              }, 500);
            }
          };
          
          // Try to set initial page (will retry if canvases not ready)
          // If we have a URL page, use the normal setInitialPage which will load it
          // The setInitialPage function already checks for URL page first
          setInitialPage();
          

    // Process any queued navigation - $root is now available
    if (this._pendingNavigation) {
      const queuedDirection = this._pendingNavigation;
      this._pendingNavigation = null;
      this._handleNavigate(queuedDirection);
    }
    
    // Process any queued page navigation
    if (this._pendingPage && this._setPage) {
      const queuedPages = this._pendingPage;
      this._pendingPage = null;
      this._setPage(queuedPages);
    }
  }

  /**
   * Set up Vue store watcher to detect page changes immediately
   * This provides event-driven detection for Tify's navigation (buttons, keyboard, etc.)
   * @param {Object} app - Tify's Vue app instance
   * @param {boolean} isRetry - Internal flag to prevent infinite recursion
   */
  _setupVueStoreWatcher(app, isRetry = false) {
    if (!app) {
      return;
    }
    
    // Prevent duplicate setup - check if watcher is already set up
    // This prevents multiple intervals from being created if _setupVueStoreWatcher is called multiple times
    if (this._vueStoreWatcherInterval) {
      return;
    }

    // Try to access Vue store - Tify uses Vue 3 with app.config.globalProperties.$store
    // From Tify's store.js: app.config.globalProperties.$store = new Store(options)
    let store = null;
    
    // Try app.config.globalProperties.$store first (Vue 3 - Tify's actual structure)
    if (app.config && app.config.globalProperties && app.config.globalProperties.$store && app.config.globalProperties.$store.options) {
      store = app.config.globalProperties.$store;
    }
    // Try app.$store (Vue 2 style or fallback)
    else if (app.$store && app.$store.options) {
      store = app.$store;
    }
    // Try app.$root.$store (fallback)
    else if (app.$root && app.$root.$store && app.$root.$store.options) {
      store = app.$root.$store;
    }

    if (!store || !store.options) {
      // Store not available or doesn't have options - try to set up polling anyway
      // The store might become available later, so we'll poll for it
      console.warn('[pb-tify] Vue store not available for watcher setup, will retry with polling:', {
        hasApp: !!app,
        hasAppConfig: !!(app.config),
        hasGlobalProperties: !!(app.config && app.config.globalProperties),
        hasGlobalStore: !!(app.config && app.config.globalProperties && app.config.globalProperties.$store),
        hasAppStore: !!app.$store,
        hasAppRoot: !!app.$root,
        hasAppRootStore: !!(app.$root && app.$root.$store),
        willRetry: true
      });
      
      // Set up polling that will retry to find the store
      // This handles cases where the store isn't available immediately
      // BUT: Also set up a fallback polling mechanism that works even without the store
      // by directly checking Tify's viewer state
      let retryCount = 0;
      const maxRetries = 50; // Try for 5 seconds (50 * 100ms)
      const retryPolling = setInterval(() => {
        retryCount++;
        
        // Check if watcher was already set up (e.g., by another call to _setupVueStoreWatcher)
        if (this._vueStoreWatcherInterval) {
          clearInterval(retryPolling);
          return;
        }
        
        // Try to find store again
        let retryStore = null;
        if (app.config && app.config.globalProperties && app.config.globalProperties.$store && app.config.globalProperties.$store.options) {
          retryStore = app.config.globalProperties.$store;
        } else if (app.$store && app.$store.options) {
          retryStore = app.$store;
        } else if (app.$root && app.$root.$store && app.$root.$store.options) {
          retryStore = app.$root.$store;
        }
        
        if (retryStore && retryStore.options) {
          clearInterval(retryPolling);
          // Recursively call to set up the watcher now that store is available
          // The guard at the top of _setupVueStoreWatcher will prevent duplicate setup
          this._setupVueStoreWatcher(app, true);
        } else if (retryCount >= maxRetries) {
          console.warn('[pb-tify] Store not found after retries, setting up fallback polling:', {
            retryCount,
            maxRetries,
            willUseFallback: true
          });
          clearInterval(retryPolling);
          // Set up fallback polling that checks Tify viewer directly
          // This uses the existing checkPageChange mechanism
        }
      }, 100);
      
      return;
    }

    // Track last known pages to detect changes
    let lastPages = null;

    // Helper to handle page change
    // This is called when Tify's Vue store detects a page change (Tify buttons/keyboard/thumbnails)
    // This is USER-INITIATED navigation, not programmatic, so we should always update registry
    const handlePageChange = async (newPage) => {
      // Check if another navigation source is active (not 'user')
      if (this._isNavigationActive() && this._navigationState.source !== 'user') {
        return; // Another source is navigating, skip
      }
      
      // Check if we recently committed (post-navigation protection)
      if (this._hasRecentCommit()) {
        return; // Recently committed, let it settle
      }

      // Get canvases
      const root = this._getRootFromApp();
      if (!root) {
        console.warn('[pb-tify] handlePageChange: no root found for page', newPage);
        return;
      }

      const canvases = this._getCanvases(root);
      if (newPage < 1 || newPage > canvases.length) {
        console.warn('[pb-tify] handlePageChange: invalid page', {
          newPage,
          totalCanvases: canvases.length,
          validRange: `1-${canvases.length}`
        });
        return;
      }

      // Always start with canvas from TEI Publisher manifest - it should have rendering property
      // The TEI Publisher manifest is the source of truth for rendering URLs with root/id parameters
      // This is the same manifest that _handleNavigate uses, which is why pb-navigation works!
      const canvasIndex = newPage - 1;
      let canvas = canvases[canvasIndex];
      
      // If the canvas from the TEI Publisher manifest doesn't have rendering, 
      // it means we're using the wrong manifest (external one). Try to get the TEI Publisher manifest.
      if (!canvas || !canvas.rendering || canvas.rendering.length === 0) {
        // The canvases array might be from the external manifest (without rendering)
        // Try to get the TEI Publisher manifest instead
        const teiPublisherRoot = this._getRootFromApp();
        if (teiPublisherRoot) {
          const teiPublisherCanvases = this._getCanvases(teiPublisherRoot);
          if (teiPublisherCanvases.length > 0 && newPage - 1 < teiPublisherCanvases.length) {
            const teiCanvas = teiPublisherCanvases[newPage - 1];
            // Check if this canvas has rendering (it should!)
            if (teiCanvas && teiCanvas.rendering && teiCanvas.rendering.length > 0) {
              canvas = teiCanvas;
            } else {
              // Still no rendering - try to match by label
              const label = canvas?.label?.none || canvas?.label?.en || canvas?.label;
              const labelStr = Array.isArray(label) ? label[0] : label;
              if (labelStr) {
                for (const teiCanvas of teiPublisherCanvases) {
                  const teiLabel = teiCanvas.label?.none || teiCanvas.label?.en || teiCanvas.label;
                  const teiLabelStr = Array.isArray(teiLabel) ? teiLabel[0] : teiLabel;
                  if (teiLabelStr === labelStr && teiCanvas.rendering && teiCanvas.rendering.length > 0) {
                    canvas = teiCanvas;
                    break;
                  }
                }
              }
            }
          }
        }
      }
      
      if (!canvas) {
        return;
      }

      // Always update registry when page changes, even if URL appears to match
      // This ensures the root is updated correctly (root can change even if id stays the same)
      // _updateUrlFromPage will check if commit is actually needed
      const renderingId = canvas?.rendering?.[0]?.['@id'] || canvas?.rendering?.[0]?.id;
      let canvasId = null;
      if (renderingId) {
        try {
          const url = new URL(renderingId, window.location.href);
          canvasId = url.searchParams.get('id');
        } catch (e) {
          // Ignore
        }
      }
      
      // Verify canvas label matches expected page
      const canvasLabel = canvas?.label?.none || canvas?.label?.en || canvas?.label;
      const canvasLabelStr = Array.isArray(canvasLabel) ? canvasLabel[0] : canvasLabel;
      const expectedPageNum = String(newPage).padStart(3, '0');
      const canvasPageNum = canvasLabelStr ? String(canvasLabelStr).padStart(3, '0') : null;
      
      // If canvas label doesn't match expected page, wait a bit and retry
      // This handles cases where Vue reactivity hasn't updated the canvas array yet
      if (canvasPageNum && canvasPageNum !== expectedPageNum) {
        console.warn('[pb-tify] handlePageChange: canvas label mismatch, waiting for Vue update', {
          expectedPageNum,
          canvasPageNum,
          newPage
        });
        setTimeout(() => {
          // Retry with a fresh lookup
          const retryRoot = this._getRootFromApp();
            if (retryRoot) {
              const retryCanvases = this._getCanvases(retryRoot);
              if (newPage >= 1 && newPage <= retryCanvases.length) {
                const retryCanvas = retryCanvases[newPage - 1];
                if (retryCanvas) {
                  this._updateUrlFromPage(retryCanvas, true);
                  this._emitPbRefresh(retryCanvas);
                }
              }
            }
        }, 50); // Wait 50ms for Vue to update
        return; // Exit early, retry will handle it
      }
      
      // CRITICAL: Set navigation state and flags BEFORE calling _updateUrlFromPage
      // This prevents _handleUrlChange from resetting Tify when the URL changes
      // Extract the ID we're about to commit so _handleUrlChange can skip it
      
      // Extract document ID from URL path (same logic as _updateUrlFromPage)
      let docId = null;
      const pathParts = window.location.pathname.split('/');
      for (let i = pathParts.length - 1; i >= 0; i--) {
        if (pathParts[i] && pathParts[i] !== 'apps' && pathParts[i] !== 'exist') {
          docId = pathParts[i];
          break;
        }
      }
      
      let pageId = null;
      if (canvasId) {
        pageId = canvasId;
      } else if (canvasLabelStr && docId) {
        // Generate pageId from canvas label (same logic as _updateUrlFromPage)
        const pageNum = String(canvasLabelStr).padStart(3, '0');
        pageId = `${docId}_${pageNum}.jpg`;
      }
      
      // Set navigation state for user-initiated navigation
      if (pageId && !this._isNavigationActive()) {
        this._setNavigationState('user', newPage, pageId);
      }

      // Update registry and emit refresh
      await this._updateUrlFromPage(canvas, true);
      
      // Always emit pb-refresh to ensure pb-view gets notified
      this._emitPbRefresh(canvas);

      // Mark navigation complete for post-navigation protection
      setTimeout(() => {
        if (pageId) {
          this._markNavigationComplete(pageId);
        }
        
        // Clear navigation state after a delay
        setTimeout(() => {
          this._clearNavigationState();
        }, 1500);
      }, 500);
    };

    // Watch for changes in store.options.pages
    // BEST APPROACH: Intercept both store.setPage and store.updateOptions to catch page changes immediately
    // This is more reliable than polling, especially in test environments
    
    // Validate that store methods exist before intercepting
    if (typeof store.updateOptions !== 'function') {
      console.error('[pb-tify] store.updateOptions is not a function, cannot intercept', {
        storeType: typeof store,
        storeKeys: Object.keys(store || {}),
        hasUpdateOptions: 'updateOptions' in store
      });
      return; // Can't intercept if methods don't exist
    }
    if (typeof store.setPage !== 'function') {
      console.error('[pb-tify] store.setPage is not a function, cannot intercept', {
        storeType: typeof store,
        storeKeys: Object.keys(store || {}),
        hasSetPage: 'setPage' in store
      });
      return; // Can't intercept if methods don't exist
    }
    
    // Store original methods
    const originalUpdateOptions = store.updateOptions;
    const originalSetPage = store.setPage;
    let lastWatchedPages = store.options.pages ? [...store.options.pages] : null;
    
    // Verify we can actually replace the methods (they might be read-only or bound)
    
    // Wrap store.setPage to intercept page changes (called by goToNextPage, goToPreviousPage, etc.)
    store.setPage = (pageOrPages) => {
      // Capture old pages BEFORE calling original method
      const oldPages = store.options.pages ? [...store.options.pages] : null;
      const oldPage = oldPages && Array.isArray(oldPages) 
        ? oldPages.find(page => page > 0) 
        : null;
      
      // Call original method (this calls updateOptions internally)
      const result = originalSetPage.call(store, pageOrPages);
      
      // The actual page change will be caught by updateOptions interception below
      // But we can also check here if needed
      return result;
    };
    
    // Wrap store.updateOptions to intercept page changes
    store.updateOptions = (updatedOptions) => {
      // Capture old pages BEFORE calling original method (which updates the store)
      const oldPages = store.options.pages ? [...store.options.pages] : null;
      const oldPage = oldPages && Array.isArray(oldPages) 
        ? oldPages.find(page => page > 0) 
        : null;
      
      // Call original method (this updates the store)
      const result = originalUpdateOptions.call(store, updatedOptions);
      
      // Check if pages changed - either from updatedOptions OR from store.options.pages after update
      // Tify might update pages directly on the reactive store, or call updateOptions multiple times
      // Use a small delay to ensure Vue reactivity has updated store.options.pages
      // This is especially important for the first click in test environments
      setTimeout(() => {
        const newPagesFromOptions = updatedOptions && updatedOptions.pages ? updatedOptions.pages : null;
        const newPagesFromStore = store.options.pages ? [...store.options.pages] : null;
        const newPages = newPagesFromOptions || newPagesFromStore;
        
        if (newPages) {
          const newPage = Array.isArray(newPages) ? newPages.find(page => page > 0) : null;
          const lastKnownPage = lastWatchedPages && Array.isArray(lastWatchedPages) 
            ? lastWatchedPages.find(page => page > 0) 
            : null;
          
          // Only handle if page actually changed from the last known state
          // Use lastWatchedPages (tracked across all calls) rather than oldPage (just this call)
          if (newPage && newPage !== lastKnownPage && newPage > 0) {
          // Update last watched pages immediately
          lastWatchedPages = Array.isArray(newPages) ? [...newPages] : null;
          
          // CRITICAL: Set navigation state to prevent checkPageChange from interfering while we wait for Tify
          // This prevents checkPageChange from committing page 1 while we're waiting for page 2
          // Use navigation state instead of _isCommitting to avoid conflicts with handlePageChange
          const root = this._getRootFromApp();
          const canvases = this._getCanvases(root);
          if (canvases && canvases[newPage - 1]) {
            const canvas = canvases[newPage - 1];
            const canvasLabel = canvas.label?.none || canvas.label?.en || canvas.label;
            const labelStr = Array.isArray(canvasLabel) ? canvasLabel[0] : canvasLabel;
            if (labelStr) {
              const pathParts = window.location.pathname.split('/');
              let docId = null;
              for (let i = pathParts.length - 1; i >= 0; i--) {
                if (pathParts[i] && pathParts[i] !== 'apps' && pathParts[i] !== 'exist') {
                  docId = pathParts[i];
                  break;
                }
              }
              if (docId) {
                const pageNum = String(labelStr).padStart(3, '0');
                const pageId = `${docId}_${pageNum}.jpg`;
                this._setNavigationState('user', newPage, pageId);
              }
            }
          }
          
          // Wait for Tify's viewer to actually update to the new page before calling handlePageChange
          // This ensures the canvas lookup gets the correct canvas
          const waitForTifyUpdate = (attempts = 0) => {
            const maxAttempts = 20; // Try for up to 200ms (20 * 10ms)
            
            if (!this._tify || !this._tify.viewer) {
              // Viewer not ready yet, wait a bit more
              if (attempts < maxAttempts) {
                setTimeout(() => waitForTifyUpdate(attempts + 1), 10);
              } else {
                // Give up and call handlePageChange anyway
                console.warn('[pb-tify] Viewer not ready after waiting, calling handlePageChange anyway');
                // handlePageChange will manage navigation state and _isCommitting
                handlePageChange(newPage);
              }
              return;
            }
            
            // Check Tify's internal page state
            let tifyCurrentPage = null;
            if (typeof this._tify.viewer.currentPage === 'function') {
              try {
                const page = this._tify.viewer.currentPage();
                if (typeof page === 'number') {
                  tifyCurrentPage = page + 1; // Convert to 1-indexed
                }
              } catch (e) {
                // Ignore
              }
            } else if (this._tify.viewer._sequenceIndex !== undefined) {
              tifyCurrentPage = this._tify.viewer._sequenceIndex + 1;
            }
            
            if (tifyCurrentPage === newPage) {
              // Tify has updated to the correct page, safe to call handlePageChange
              // handlePageChange will manage navigation state and _isCommitting
              handlePageChange(newPage);
            } else if (attempts < maxAttempts) {
              // Tify hasn't updated yet, wait a bit more
              setTimeout(() => waitForTifyUpdate(attempts + 1), 10);
            } else {
              // Give up after max attempts - call handlePageChange anyway
              // handlePageChange will manage navigation state and _isCommitting
              handlePageChange(newPage);
            }
          };
          
          // Start waiting for Tify to update
          waitForTifyUpdate();
        } else {
          // Update last watched pages even if page didn't change (for consistency)
          lastWatchedPages = Array.isArray(newPages) ? [...newPages] : null;
        }
      }
      }, 0); // Use setTimeout with 0ms delay to ensure Vue reactivity has updated store.options.pages
      
      return result;
    };
    
    // FALLBACK: Also use polling as backup (in case updateOptions isn't called directly)
    // This is more reliable than trying to set up a Vue watcher from outside the component tree
    
      // Poll the reactive store directly (more reliable than trying to set up Vue watcher)
    const watchStorePages = () => {
      if (!store || !store.options || !store.options.pages) {
        // Log when store is not accessible (but throttle to avoid spam)
        if (Date.now() % 1000 < 100) { // Log roughly once per second when store is inaccessible
          console.warn('[pb-tify] Store not accessible in polling:', {
            hasStore: !!store,
            hasOptions: !!(store && store.options),
            hasPages: !!(store && store.options && store.options.pages),
            timestamp: Date.now()
          });
        }
        return;
      }

      const currentPages = store.options.pages;
      const currentPage = Array.isArray(currentPages) ? currentPages.find(page => page > 0) : null;
      const lastPage = lastWatchedPages && Array.isArray(lastWatchedPages) 
        ? lastWatchedPages.find(page => page > 0) 
        : null;

      if (currentPage && currentPage !== lastPage) {
        handlePageChange(currentPage);
        lastWatchedPages = currentPages ? [...currentPages] : null;
      } else if (currentPages && !lastWatchedPages) {
        lastWatchedPages = [...currentPages];
      } else if (currentPages) {
        // Pages haven't changed, but store is accessible - polling is working
        // Don't log this - it's too verbose and creates console spam
        // The polling is working correctly, no need to log every 5 seconds
        lastWatchedPages = [...currentPages];
      } else {
        // Log if store becomes inaccessible
        if (lastWatchedPages) {
          console.warn('[pb-tify] Store pages became inaccessible (polling):', {
            hadPages: !!lastWatchedPages,
            storeAccessible: !!store,
            hasOptions: !!(store && store.options),
            hasPages: !!(store && store.options && store.options.pages)
          });
          lastWatchedPages = null;
        }
      }
    };

    // Poll the reactive store as a fallback (in case interception misses something)
    // Use a reasonable interval - 200ms is fast enough for good UX without excessive CPU usage
    // The interception of store.updateOptions should catch most changes immediately
    this._vueStoreWatcherInterval = setInterval(watchStorePages, 200);
    
    // Also try app.$watch as a backup (might work in some Vue setups)
    if (typeof app.$watch === 'function') {
      try {
        this._vueStoreWatcher = app.$watch(
          () => store.options.pages,
          (newPages, oldPages) => {
            
            // Only handle if pages actually changed
            if (!oldPages || !newPages || !Array.isArray(newPages) || newPages.length === 0) {
              return;
            }

            // Get first valid page (page > 0)
            const newPage = newPages.find(page => page > 0);
            const oldPage = oldPages && oldPages.length > 0 ? oldPages.find(page => page > 0) : null;

            // Check if page actually changed
            if (newPage && newPage !== oldPage && newPage > 0) {
              handlePageChange(newPage);
            }
          },
          { deep: true, immediate: false }
        );
      } catch (e) {
        console.warn('[pb-tify] app.$watch failed, using polling only:', e);
      }
    }
    // Fallback: Use Vue 3 watch API directly if available
    // Try to import watch from Vue if we can access it
    else if (typeof window !== 'undefined' && window.Vue && window.Vue.watch) {
      // Vue 3 watch function available globally
      this._vueStoreWatcher = window.Vue.watch(
        () => store.options.pages,
        (newPages, oldPages) => {
          
          if (!oldPages || !newPages || !Array.isArray(newPages) || newPages.length === 0) {
            return;
          }

          const newPage = newPages.find(page => page > 0);
          const oldPage = oldPages && oldPages.length > 0 ? oldPages.find(page => page > 0) : null;

          if (newPage && newPage !== oldPage && newPage > 0) {
            handlePageChange(newPage);
          }
        },
        { deep: true, immediate: false }
      );
    }
    // If neither works, fall back to polling (already set up in checkPageChange)
    else {
      console.warn('[pb-tify] Vue store watcher could not be set up - falling back to polling');
    }
  }

  _handleManifestError(error) {
    // Clear any existing error message
    this._clearError();

    // Create error message element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'pb-tify-error';
    errorDiv.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      background-color: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 4px;
      color: #6c757d;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      text-align: center;
      padding: 20px;
    `;

    // Determine error message based on error type
    let errorMessage = 'Failed to load IIIF manifest';

    // Check error message, status, and other properties
    const errorText = error.message || error.toString() || '';
    const status = error.status || error.statusCode;

    if (status === 404 || errorText.includes('404') || errorText.includes('Not Found')) {
      errorMessage = 'IIIF manifest not found';
    } else if (status === 403 || errorText.includes('403') || errorText.includes('Forbidden')) {
      errorMessage = 'Access denied to IIIF manifest';
    } else if (
      errorText.includes('NetworkError') ||
      errorText.includes('Failed to fetch') ||
      errorText.includes('network')
    ) {
      errorMessage = 'Network error loading IIIF manifest';
    } else if (
      errorText.includes('Invalid JSON') ||
      errorText.includes('SyntaxError') ||
      errorText.includes('parse') ||
      errorText.includes('Unexpected token') ||
      errorText.includes('JSON') ||
      errorText.includes('$meta') ||
      errorText.includes('manifest')
    ) {
      errorMessage = 'Invalid IIIF manifest format';
    }

    errorDiv.textContent = errorMessage;

    // Add error element to container
    if (this._container) {
      this._container.appendChild(errorDiv);
    }

    // Emit error event for parent components to handle
    this.emitTo('pb-tify-error', {
      error: error.message || 'Unknown error',
      manifest: this.manifest,
    });
  }

  _clearError() {
    if (this._container) {
      const existingError = this._container.querySelector('.pb-tify-error');
      if (existingError) {
        existingError.remove();
      }
    }
  }

  /**
   * Set up watcher for Tify's error store
   * This allows us to detect errors that Tify handles internally
   * and display them using our error handling system
   */
  _setupTifyErrorWatcher() {
    if (!this._tify || !this._tify.app) {
      return;
    }

    // Try to access Tify's store
    const store = this._tify.app.config?.globalProperties?.$store || 
                  this._tify.app.$store ||
                  (this._tify.app.$root && this._tify.app.$root.$store);

    if (!store || !store.errors) {
      return;
    }

    // Watch for errors in Tify's store
    // Use polling since we can't easily set up Vue watchers from outside
    let lastErrorCount = store.errors.size;
    this._tifyErrorWatcherInterval = setInterval(() => {
      if (!this._tify || !store || !store.errors) {
        clearInterval(this._tifyErrorWatcherInterval);
        this._tifyErrorWatcherInterval = null;
        return;
      }

      const currentErrorCount = store.errors.size;
      if (currentErrorCount > lastErrorCount) {
        // New errors were added
        const newErrors = Array.from(store.errors).slice(lastErrorCount);
        for (const errorMessage of newErrors) {
          // Create error object from Tify's error message
          const error = new Error(errorMessage);
          // Try to extract status code from error message
          if (errorMessage.includes('404') || errorMessage.includes('Not Found')) {
            error.status = 404;
          } else if (errorMessage.includes('403') || errorMessage.includes('Forbidden')) {
            error.status = 403;
          }
          this._handleManifestError(error);
        }
        lastErrorCount = currentErrorCount;
      } else if (currentErrorCount < lastErrorCount) {
        // Errors were cleared
        lastErrorCount = currentErrorCount;
        this._clearError();
      }
    }, 200); // Check every 200ms
  }


  /**
   * Navigation State Management
   * ==========================
   * 
   * pb-tify uses a single _navigationState object to track all navigation activities.
   * This replaces the previous system of 7 separate boolean flags.
   * 
   * _navigationState object structure:
   * {
   *   source: 'user' | 'thumbnail' | 'programmatic' | 'url',
   *   targetPage: number,
   *   targetId: string,
   *   timestamp: number,
   *   isActive: boolean,
   *   recentlyCommittedId: string | null,  // ID of recently committed page
   *   completedAt: number | null           // When navigation completed
   * }
   */
  _setNavigationState(source, targetPage, targetId) {
    this._navigationState = {
      source, // 'user', 'thumbnail', 'programmatic', 'url'
      targetPage,
      targetId,
      timestamp: Date.now(),
      isActive: true,
      recentlyCommittedId: null,
      completedAt: null
    };
  }

  /**
   * Mark navigation as complete, storing the committed ID for post-navigation protection
   * @param {string} committedId - The ID that was committed
   */
  _markNavigationComplete(committedId) {
    if (this._navigationState) {
      this._navigationState.isActive = false;
      this._navigationState.recentlyCommittedId = committedId;
      this._navigationState.completedAt = Date.now();
    }
  }

  _clearNavigationState() {
    this._navigationState = null;
  }

  _isNavigationActive(source = null) {
    if (!this._navigationState || !this._navigationState.isActive) {
      return false;
    }
    // If source is specified, only return true if that specific source is active
    if (source) {
      return this._navigationState.source === source;
    }
    // If no source specified, return true if any navigation is active
    return true;
  }

  _matchesNavigationTarget(id) {
    if (!this._navigationState || !this._navigationState.isActive) {
      return false;
    }
    return this._navigationState.targetId === id;
  }

  /**
   * Check if an ID was recently committed (within maxAge ms)
   * Used for post-navigation protection to prevent bounce-back
   * @param {string} id - The ID to check
   * @param {number} maxAge - Maximum age in ms (default 3000ms)
   * @returns {boolean}
   */
  _isRecentlyCommitted(id, maxAge = 3000) {
    if (!this._navigationState || !this._navigationState.recentlyCommittedId) {
      return false;
    }
    if (this._navigationState.recentlyCommittedId !== id) {
      return false;
    }
    if (!this._navigationState.completedAt) {
      return false;
    }
    return Date.now() - this._navigationState.completedAt < maxAge;
  }

  /**
   * Check if we recently committed any page (within maxAge ms)
   * @param {number} maxAge - Maximum age in ms (default 3000ms)
   * @returns {boolean}
   */
  _hasRecentCommit(maxAge = 3000) {
    if (!this._navigationState || !this._navigationState.recentlyCommittedId) {
      return false;
    }
    if (!this._navigationState.completedAt) {
      return false;
    }
    return Date.now() - this._navigationState.completedAt < maxAge;
  }

  /**
   * Get the recently committed ID (if any)
   * @returns {string|null}
   */
  _getRecentlyCommittedId() {
    if (!this._navigationState) {
      return null;
    }
    return this._navigationState.recentlyCommittedId;
  }

  /**
   * Update URL from current canvas/page.
   * Extracts root/id from canvas rendering URL and commits to registry.
   * Also updates hash fragment based on canvas label (e.g., #A-N-38_005.jpg).
   * @param {Object} canvas - The canvas object
   * @param {boolean} force - Force update even if updating from registry
   * @returns {Promise<void>} - Resolves when URL update is complete
   */
  async _updateUrlFromPage(canvas, force = false) {
    
    // CRITICAL: If we just committed a page change and we're trying to commit a different page, skip to prevent bounce-back
    // This prevents checkPageChange or _handleUrlChange from overwriting what we just committed
    // Check both _lastCommittedId AND current registry state to prevent overwriting recent commits
    const registryState = registry.getState(this);
    
    // Generate the pageId for this canvas to compare
    let canvasPageId = null;
    const canvasLabel = canvas?.label?.none || canvas?.label?.en || canvas?.label;
    const canvasLabelStr = Array.isArray(canvasLabel) ? canvasLabel[0] : canvasLabel;
    if (canvasLabelStr) {
      const pathParts = window.location.pathname.split('/');
      let docId = null;
      for (let i = pathParts.length - 1; i >= 0; i--) {
        if (pathParts[i] && pathParts[i] !== 'apps' && pathParts[i] !== 'exist') {
          docId = pathParts[i];
          break;
        }
      }
      if (docId) {
        const pageNum = String(canvasLabelStr).padStart(3, '0');
        canvasPageId = `${docId}_${pageNum}.jpg`;
      }
    }
    // Also try to extract from rendering URL
    if (!canvasPageId && canvas?.rendering && canvas.rendering.length > 0) {
      const renderingId = canvas.rendering[0]['@id'] || canvas.rendering[0].id;
      if (renderingId) {
        try {
          const url = new URL(renderingId, window.location.href);
          canvasPageId = url.searchParams.get('id');
        } catch (e) {
          // Ignore
        }
      }
    }
    
    // CRITICAL: Prevent initial load handlers from overwriting user navigation
    // If initial load is not complete AND registry already has a different page, check if we should skip
    if (!this._initialLoadComplete && registryState.id) {
      // Try to extract page numbers from both sources
      const registryPageNum = registryState.id.match(/_(\d{2,3})\./);
      let canvasPageNum = null;
      
      // Try to get page number from canvasPageId first
      if (canvasPageId) {
        const match = canvasPageId.match(/_(\d{2,3})\./);
        if (match) canvasPageNum = match;
      }
      
      // If canvasPageId extraction failed, try to extract from canvas label directly
      if (!canvasPageNum && canvasLabelStr) {
        const labelMatch = String(canvasLabelStr).match(/(\d{2,3})/);
        if (labelMatch) {
          canvasPageNum = [null, labelMatch[1]]; // Match format: [fullMatch, pageNum]
        }
      }
      
      // If we have both page numbers and registry has a newer page, skip and mark as complete
      if (registryPageNum && canvasPageNum && 
          parseInt(canvasPageNum[1], 10) < parseInt(registryPageNum[1], 10)) {
        this._initialLoadComplete = true;
        return; // Skip entirely - don't even update hash
      }
    }
    
    // Simplified state check: if another source is navigating to a different target, skip
    // BUT: If force=true (from handlePageChange), always proceed - it's an intentional navigation
    if (!force && this._navigationState && this._navigationState.isActive && canvasPageId) {
      // If navigation is active and this doesn't match the target, skip
      // Exception: if source is 'user', allow it (user navigation should proceed)
      if (!this._matchesNavigationTarget(canvasPageId) && 
          this._navigationState.source !== 'user') {
        return; // Another source is navigating to a different target
      }
    }
    
    // Skip if we're not in forced mode and another navigation is active (not ours)
    // This prevents checkPageChange from overwriting intentional navigation
    if (!force && this._isNavigationActive() && !this._matchesNavigationTarget(canvasPageId)) {
      return; // Another navigation is active, skip
    }
    
    // Skip if we recently committed and this isn't a forced update
    if (!force && this._hasRecentCommit()) {
      const recentId = this._getRecentlyCommittedId();
      // Only skip if we're trying to commit something different from what we recently committed
      if (recentId && canvasPageId && canvasPageId !== recentId) {
        // Check if we're trying to commit an older page (wouldDowngrade check)
        const recentPageNum = recentId.match(/_(\d{2,3})\./);
        const canvasPageNum = canvasPageId.match(/_(\d{2,3})\./);
        if (recentPageNum && canvasPageNum && 
            parseInt(canvasPageNum[1], 10) < parseInt(recentPageNum[1], 10)) {
          return; // Skip - would downgrade to older page
        }
      }
    }
    
    // If force=true (from handlePageChange) and state already matches, emit pb-refresh but skip commit
    if (force && this._isNavigationActive() && canvasPageId && registryState.id === canvasPageId) {
      setTimeout(() => {
        this._emitPbRefresh(canvas);
      }, 50);
      return; // Skip commit but pb-refresh was emitted
    }
    
    if (!canvas) {
      console.warn('[pb-tify] _updateUrlFromPage: skipping - no canvas provided');
      return;
    }
    
    // If canvas doesn't have rendering property, try to get it from manifest
    // The manifest canvas should always have rendering with root/id parameters
    // root should be an eXist-db node ID like "3.5.6.1" extracted from rendering URL
    if (!canvas.rendering || canvas.rendering.length === 0) {
      const root = this._getRootFromApp();
      if (root) {
        const canvases = this._getCanvases(root);
        // Try to find matching canvas in manifest by @id first (most reliable)
        if (canvas['@id']) {
          for (const manifestCanvas of canvases) {
            if (manifestCanvas['@id'] === canvas['@id']) {
              // Found matching canvas in manifest - use it for rendering
              canvas = manifestCanvas;
              break;
            }
          }
        }
        // Fallback: try matching by label if @id didn't work
        if ((!canvas.rendering || canvas.rendering.length === 0) && canvas.label) {
          const label = canvas.label.none || canvas.label.en || canvas.label;
          const labelStr = Array.isArray(label) ? label[0] : label;
          if (labelStr) {
            for (const manifestCanvas of canvases) {
              const manifestLabel = manifestCanvas.label?.none || manifestCanvas.label?.en || manifestCanvas.label;
              const manifestLabelStr = Array.isArray(manifestLabel) ? manifestLabel[0] : manifestLabel;
              if (manifestLabelStr === labelStr) {
                // Found matching canvas in manifest - use it for rendering
                canvas = manifestCanvas;
                break;
              }
            }
          }
        }
      }
      
      // If still no rendering, try to get root from page number → root lookup map
      // This map is built from the TEI Publisher manifest which includes rendering URLs with root
      if ((!canvas.rendering || canvas.rendering.length === 0) && canvas.label) {
        const label = canvas.label.none || canvas.label.en || canvas.label;
        const labelStr = Array.isArray(label) ? label[0] : label;
        if (labelStr) {
          // Ensure we have the page-to-root map
          await this._ensurePageToRootMap();
          
          // Look up root by page number (e.g., "011")
          const pageNum = String(labelStr).padStart(3, '0');
          const root = this._pageToRootMap && this._pageToRootMap[pageNum];
          
          if (root) {
            // Found root! Construct rendering URL and add it to canvas
            const pathParts = window.location.pathname.split('/');
            let docPath = null;
            for (let i = pathParts.length - 1; i >= 0; i--) {
              if (pathParts[i] && pathParts[i] !== 'apps' && pathParts[i] !== 'exist') {
                docPath = pathParts[i];
                break;
              }
            }
            
            if (docPath) {
              const endpoint = this.getEndpoint();
              const renderingUrl = `${endpoint}/api/parts/${encodeURIComponent(docPath)}/html?root=${encodeURIComponent(root)}`;
              
              if (!canvas.rendering) {
                canvas.rendering = [];
              }
              canvas.rendering.push({
                '@id': renderingUrl,
                id: renderingUrl,
                type: 'Text',
                format: 'text/html'
              });
            }
          } else {
            console.warn('[pb-tify] _updateUrlFromPage: root not found in lookup map for page', { pageNum, labelStr });
          }
        }
      }
    }
    
    // Extract document ID from URL path (e.g., /exist/apps/mf-app/A-N-38 -> A-N-38)
    // Or from manifest URL if available
    let docId = null;
    const pathParts = window.location.pathname.split('/');
    // Look for the document ID in the path (usually the last non-empty part before query)
    for (let i = pathParts.length - 1; i >= 0; i--) {
      if (pathParts[i] && pathParts[i] !== 'apps' && pathParts[i] !== 'exist') {
        docId = pathParts[i];
        break;
      }
    }
    
    // If no docId found in path, try to extract from manifest URL
    if (!docId && this.manifest) {
      try {
        const manifestUrl = new URL(this.manifest, window.location.origin);
        const manifestPath = manifestUrl.pathname.split('/');
        docId = manifestPath[manifestPath.length - 1];
      } catch (e) {
        // Ignore
      }
    }
    
    // Get canvas label for generating id and hash
    let pageId = null; // Format: A-N-38_002.jpg
    let hashFragment = null; // Format: #A-N-38_002.jpg
    
    if (canvas.label && docId) {
      const label = canvas.label.none || canvas.label.en || canvas.label;
      let labelStr = null;
      
      if (Array.isArray(label)) {
        labelStr = label[0];
      } else if (typeof label === 'string') {
        labelStr = label;
      }
      
      if (labelStr) {
        // Pad label to 3 digits (e.g., "2" -> "002", "10" -> "010")
        const pageNum = String(labelStr).padStart(3, '0');
        // Format: DOCUMENT_ID_PAGENUM.jpg (e.g., A-N-38_002.jpg)
        pageId = `${docId}_${pageNum}.jpg`;
        hashFragment = `#${pageId}`;
      }
    }
    
    // Try to extract root/id from rendering URL (may override pageId)
    // If no rendering property, we may have just fetched it above - check again
    let root = null;
    let id = null;
    const { rendering } = canvas;
    if (rendering && rendering.length > 0) {
      const renderingId = rendering[0]['@id'] || rendering[0].id;
      if (renderingId) {
        try {
          // Handle both absolute and relative URLs
          let url;
          if (renderingId.startsWith('http://') || renderingId.startsWith('https://')) {
            url = new URL(renderingId);
          } else {
            // Relative URL - convert to absolute using current origin
            url = new URL(renderingId, window.location.origin);
          }
          root = url.searchParams.get('root');
          id = url.searchParams.get('id');
        } catch (error) {
          console.warn('[pb-tify] _updateUrlFromPage: Error parsing rendering URL:', renderingId, error);
        }
      }
    }
    
    // Use id from rendering URL if available, otherwise use generated pageId
    const finalId = id || pageId;
    
    // Check if we're already on this page (prevent duplicate commits)
    const currentState = registry.getState(this);
    const idMatches = finalId && currentState.id === finalId;
    const rootMatches = root && currentState.root === root;
    const alreadyMatches = idMatches && (rootMatches || !root); // Match if id matches and (root matches or no root provided)
    
    // Check if root has changed (critical for transcription sync)
    const rootChanged = root && currentState.root !== root;
    
    // Check if URL is missing id parameter in query string (needed for shareable URLs)
    // Even if state matches, we need to ensure id is in query params AND hash
    const urlParams = new URLSearchParams(window.location.search);
    const urlHasIdParam = urlParams.has('id') && urlParams.get('id') === finalId;
    const needsIdInQuery = finalId && !urlHasIdParam;
    
    // Commit if different from current state OR if URL is missing id parameter OR if root changed
    // Root changes are critical for transcription sync, so always commit when root changes
    // CRITICAL: If force=true (from handlePageChange), always commit even if state appears to match
    // This ensures user-initiated navigation always updates the URL
    // Also commit if navigation state is active and matches target (intentional navigation)
    const isNavigationActive = this._navigationState && this._navigationState.isActive;
    const matchesNavigationTarget = this._matchesNavigationTarget(finalId);
    const shouldCommit = (finalId || root) && 
                        (!alreadyMatches || needsIdInQuery || rootChanged || force || 
                         (isNavigationActive && matchesNavigationTarget));
    
    if (shouldCommit) {
      // Check if we should skip (recently committed same ID and not intentional navigation)
      const recentId = this._getRecentlyCommittedId();
      const shouldSkip = recentId && finalId === recentId && 
                        !rootChanged && // Don't skip if root changed
                        !isNavigationActive && // Don't skip if navigation is active
                        !force; // Don't skip if force=true (intentional navigation)
      
      if (!shouldSkip) {
        // Update navigation state if not already set (for user-initiated commits)
        if (!isNavigationActive && force) {
          this._setNavigationState('user', null, finalId);
        }
        
        registry.commit(this, {
          id: finalId || null,
          root: root || null,
        });
        
        // Verify registry state was actually committed
        setTimeout(() => {
          const committedState = registry.getState(this);
          if (committedState.id !== finalId || committedState.root !== root) {
            console.warn('[pb-tify] Registry state mismatch after commit', {
              expectedId: finalId,
              expectedRoot: root,
              actualId: committedState.id,
              actualRoot: committedState.root
            });
          }
        }, 50);
      }
    }
    
    // Always update hash fragment if we have one
    // This ensures the URL always contains page information
    if (hashFragment) {
      // Update hash directly - registry doesn't handle hash updates
      const currentUrl = new URL(window.location.href);
      currentUrl.hash = hashFragment;
      // Use replaceState to update hash without adding history entry
      // This keeps the URL in sync with the page
      window.history.replaceState(window.history.state, '', currentUrl.toString());
    }
    
    // Always emit pb-refresh after updating URL (for Option 6: Hybrid approach)
    // This ensures pb-view gets notified even if it's debouncing registry changes
    // Since we now wait for Tify to change before committing, we can emit immediately
    // But still use a small delay to ensure registry state is fully updated
    setTimeout(() => {
      // Get the current canvas from Tify's viewer state to ensure accuracy
      let currentCanvas = canvas;
      
      if (this._tify && this._tify.viewer) {
        const viewer = this._tify.viewer;
        if (viewer.currentCanvas) {
          currentCanvas = viewer.currentCanvas;
        } else if (viewer.currentPage) {
          const currentPage = typeof viewer.currentPage === 'function' 
            ? viewer.currentPage() 
            : viewer.currentPage;
          if (currentPage !== undefined && currentPage !== null) {
            const root = this._getRootFromApp();
            if (root) {
              const canvases = this._getCanvases(root);
              const pageIndex = typeof currentPage === 'number' ? currentPage - 1 : currentPage;
              if (pageIndex >= 0 && pageIndex < canvases.length) {
                currentCanvas = canvases[pageIndex];
              }
            }
          }
        } else if (viewer._sequenceIndex !== undefined) {
          const root = this._getRootFromApp();
          if (root) {
            const canvases = this._getCanvases(root);
            if (viewer._sequenceIndex >= 0 && viewer._sequenceIndex < canvases.length) {
              currentCanvas = canvases[viewer._sequenceIndex];
            }
          }
        }
      }
      
      // Verify registry state matches what we're emitting
      // This ensures pb-view gets the correct state
      const registryState = registry.getState(this);
      const { rendering } = currentCanvas || canvas;
      let canvasId = null;
      if (rendering && rendering.length > 0) {
        const renderingId = rendering[0]['@id'] || rendering[0].id;
        if (renderingId) {
          try {
            const url = new URL(renderingId);
            canvasId = url.searchParams.get('id');
          } catch (e) {
            // Ignore URL parsing errors
          }
        }
      }
      
      // If registry state doesn't match yet, wait a bit more
      // This is important because pb-view prioritizes registry state over event detail
      // NOTE: With readOnlyRegistry enabled on pb-view, this should rarely happen
      // as pb-view won't reset the registry anymore
      if (canvasId && registryState.id !== canvasId) {
        // Wait a bit more for registry to stabilize
        setTimeout(() => {
          this._emitPbRefresh(currentCanvas || canvas);
        }, 150);
        return;
      }
      
      // Registry state matches - emit refresh immediately
      this._emitPbRefresh(currentCanvas || canvas);
    }, 150); // Increased delay to ensure registry commit has fully processed
  }

  /**
   * Handle URL changes (e.g., from browser back/forward).
   * Called by registry subscription when URL changes.
   * @param {Object} state - The new state from registry
   */
  _handleUrlChange(state) {
    if (!this._tify || !this._tify.app || !this._setPage) {
      return;
    }
    
    // Check if navigation is active (any source except 'url')
    if (this._isNavigationActive()) {
      // If this URL change matches our navigation target, skip (we're navigating to it)
      if (this._matchesNavigationTarget(state.id)) {
        return;
      }
      // If another source is navigating (not 'url'), skip (they control navigation)
      if (this._navigationState.source !== 'url') {
        return;
      }
    }
    
    // Check if we recently committed this page (post-navigation protection)
    if (this._isRecentlyCommitted(state.id)) {
      return; // This is our own commit, don't reset Tify
    }
    
    // CRITICAL CHECK: Verify the state hasn't changed since this callback was queued
    // Registry callbacks can be delayed, so the state might have changed
    const currentRegistryState = registry.getState(this);
    if (currentRegistryState.id !== state.id || currentRegistryState.root !== state.root) {
      // State has changed - this callback is stale, ignore it
      return;
    }
    
    const root = this._getRootFromApp();
    if (!root) {
      return;
    }
    
    const canvases = this._getCanvases(root);
    if (canvases.length === 0) {
      return;
    }
    
    // PRIORITY 1: Check hash first (most reliable - e.g., #A-N-38_004.jpg)
    let targetPage = null;
    const hash = window.location.hash;
    if (hash) {
      const hashMatch = hash.match(/_(\d{2,3})\./);
      if (hashMatch) {
        const pageNum = parseInt(hashMatch[1], 10);
        if (pageNum >= 1 && pageNum <= canvases.length) {
          targetPage = pageNum;
        }
      }
    }
    
    // PRIORITY 2: Find page from state.id (registry is single source of truth)
    if (!targetPage && state.id) {
      for (let i = 0; i < canvases.length; i++) {
        const canvas = canvases[i];
        const { rendering } = canvas;
        if (rendering && rendering.length > 0) {
          const renderingId = rendering[0]['@id'] || rendering[0].id;
          if (renderingId) {
            try {
              const url = new URL(renderingId);
              const canvasId = url.searchParams.get('id');
              if (canvasId === state.id) {
                targetPage = i + 1;
                break;
              }
            } catch (e) {
              // Ignore
            }
          }
        }
        // Also check canvas label for id match (e.g., A-N-38_002.jpg)
        if (canvas.label) {
          const label = canvas.label.none || canvas.label.en || canvas.label;
          const labelStr = Array.isArray(label) ? label[0] : label;
          if (labelStr) {
            // Exact match or substring match
            if (state.id === labelStr || state.id.includes(labelStr) || labelStr.includes(state.id)) {
              targetPage = i + 1;
              break;
            }
            // Also try extracting page number from both
            const statePageMatch = state.id.match(/_(\d{2,3})\./);
            const labelPageMatch = labelStr.match(/(\d{2,3})/);
            if (statePageMatch && labelPageMatch && statePageMatch[1] === labelPageMatch[1]) {
              targetPage = i + 1;
              break;
            }
          }
        }
      }
    }
    
    if (!targetPage) {
      return;
    }
    
    // CRITICAL: Check if Tify is already on the correct page BEFORE any other logic
    // This prevents unnecessary resets that could cause bounce-back
    let tifyCurrentPage = null;
    if (this._tify && this._tify.viewer) {
      if (typeof this._tify.viewer.currentPage === 'function') {
        try {
          const currentTifyPage = this._tify.viewer.currentPage();
          if (typeof currentTifyPage === 'number') {
            tifyCurrentPage = currentTifyPage + 1;
          }
        } catch (e) {
          // Ignore
        }
      } else if (this._tify.viewer._sequenceIndex !== undefined) {
        const seqIndex = this._tify.viewer._sequenceIndex;
        if (typeof seqIndex === 'number') {
          tifyCurrentPage = seqIndex + 1;
        }
      }
    }
    
    // If already on correct page, just emit refresh and return
    // This is a critical guardrail - don't reset Tify if it's already correct
    if (tifyCurrentPage === targetPage) {
      this._currentPage = targetPage;
      this._emitPbRefresh(canvases[targetPage - 1]);
      return;
    }
    
    // This should never be reached if _lastCommittedId matches (we return early above)
    // But add extra safety check for _targetPageId
    if (this._targetPageId && state.id === this._targetPageId) {
      // This is our target page - don't interfere, just emit refresh if needed
      this._emitPbRefresh(canvases[targetPage - 1]);
      return;
    }
    
    // EXTRA PROTECTION: Check if Tify's current canvas matches the state we're trying to navigate to
    // This prevents resetting Tify if it's already showing the correct content, even if page numbers differ
    if (tifyCurrentPage && tifyCurrentPage > 0 && tifyCurrentPage <= canvases.length) {
      const currentCanvas = canvases[tifyCurrentPage - 1];
      if (currentCanvas) {
        // Check if current canvas matches the target state
        let currentCanvasId = null;
        const { rendering } = currentCanvas;
        if (rendering && rendering.length > 0) {
          const renderingId = rendering[0]['@id'] || rendering[0].id;
          if (renderingId) {
            try {
              const url = new URL(renderingId, window.location.origin);
              currentCanvasId = url.searchParams.get('id');
            } catch (e) {
              // Ignore
            }
          }
        }
        // Also check label
        if (!currentCanvasId && currentCanvas.label) {
          const label = currentCanvas.label.none || currentCanvas.label.en || currentCanvas.label;
          const labelStr = Array.isArray(label) ? label[0] : label;
          if (labelStr && state.id) {
            const pathParts = window.location.pathname.split('/');
            let docId = null;
            for (let i = pathParts.length - 1; i >= 0; i--) {
              if (pathParts[i] && pathParts[i] !== 'apps' && pathParts[i] !== 'exist') {
                docId = pathParts[i];
                break;
              }
            }
            if (docId) {
              const pageNum = String(labelStr).padStart(3, '0');
              currentCanvasId = `${docId}_${pageNum}.jpg`;
            }
          }
        }
        
        // If current canvas matches the state, don't reset Tify
        if (currentCanvasId && state.id && currentCanvasId === state.id) {
          this._currentPage = tifyCurrentPage;
          this._emitPbRefresh(currentCanvas);
          return;
        }
      }
    }
    
    // Check if another navigation source is active
    if (this._isNavigationActive() && this._navigationState.source !== 'url') {
      return; // Another source is navigating, don't interfere
    }
    
    // Set navigation state for URL-based navigation
    this._setNavigationState('url', targetPage, state.id);
    
    // Update Tify to match registry
    this._setPage([targetPage]);
    this._currentPage = targetPage;
    
    // Wait for Tify to actually change pages before emitting refresh
    const verifyAndEmit = (attempts = 0) => {
      let tifyPage = null;
      if (this._tify && this._tify.viewer) {
        if (typeof this._tify.viewer.currentPage === 'function') {
          try {
            const page = this._tify.viewer.currentPage();
            if (typeof page === 'number') {
              tifyPage = page + 1;
            }
          } catch (e) {
            // Ignore
          }
        } else if (this._tify.viewer._sequenceIndex !== undefined) {
          const seqIndex = this._tify.viewer._sequenceIndex;
          if (typeof seqIndex === 'number') {
            tifyPage = seqIndex + 1;
          }
        }
      }
      
      if (tifyPage === targetPage) {
        // Tify is on the correct page - emit refresh
        this._clearNavigationState();
        this._emitPbRefresh(canvases[targetPage - 1]);
      } else if (attempts < 10) {
        // Not yet, retry
        setTimeout(() => verifyAndEmit(attempts + 1), 200);
      } else {
        // Give up - emit refresh anyway
        this._clearNavigationState();
        this._emitPbRefresh(canvases[targetPage - 1]);
      }
    };
    
    setTimeout(() => verifyAndEmit(), 200);
  }
  
  /**
   * Emit pb-refresh event for transcription synchronization
   * @param {Object} canvas - The canvas object
   */
  _emitPbRefresh(canvas) {
    // Get registry state first (always available and up-to-date)
    const registryState = registry.getState(this);
    
    // Try to get params from canvas rendering URL
    let params = {};
    if (canvas) {
      const { rendering } = canvas;
      if (rendering && rendering.length > 0) {
        const renderingId = rendering[0]['@id'] || rendering[0].id;
        if (renderingId) {
          try {
            // Handle both absolute and relative URLs
            let url;
            if (renderingId.startsWith('http://') || renderingId.startsWith('https://')) {
              url = new URL(renderingId);
            } else {
              // Relative URL - convert to absolute using current origin
              url = new URL(renderingId, window.location.origin);
            }
            url.searchParams.forEach((value, key) => {
              params[key] = value;
            });
          } catch (error) {
            console.warn('[pb-tify] _emitPbRefresh: Error parsing rendering URL:', renderingId, error);
          }
        }
      }
    }
    
    // ALWAYS include root from registry state, even if we got params from canvas
    // This ensures pb-view gets the correct root value, which is critical for transcription sync
    // The registry state is the source of truth after _updateUrlFromPage has committed
    if (registryState.root) {
      params.root = registryState.root;
    }
    
    // If no params from canvas, also include id from registry state
    // This is a fallback when canvas doesn't have rendering property
    if (!params.id && registryState.id) {
      params.id = registryState.id;
    }
    
    // If we still have no params, we can't emit a meaningful event
    if (Object.keys(params).length === 0) {
      return;
    }
    
    try {
      // Include registry state in event detail to ensure pb-view has the latest state
      // pb-view prioritizes registry state, so we need to make sure it's included
      
      // Get channels - use emit attribute if set, otherwise use defaultChannel
      // Application code should specify emit="transcription" (or other channel) via HTML attribute
      // This follows the pb-mixin pattern where components are generic and applications configure them
      const channels = getEmittedChannels(this);
      
      // Merge params with registry state for the event detail
      const eventDetail = Object.assign({}, params, {
        ...registryState, // Include registry state so pb-view gets the correct state
        _source: this
      });
      
      // Use emitTo which properly handles channels and ensures pb-view receives the event
      // emitTo dispatches from the element, but events bubble to document where subscribeTo listens
      // emitTo will set the correct 'key' in the event detail based on the channel
      this.emitTo('pb-refresh', eventDetail, channels);
      
      // Also dispatch directly to document to ensure it's caught by document.addEventListener
      // This is a fallback in case bubbling doesn't work as expected
      // Use the first channel from getEmittedChannels (or defaultChannel if none)
      const channelKey = channels[0] || defaultChannel;
      const directEventDetail = Object.assign({}, eventDetail, { key: channelKey });
      const directEv = new CustomEvent('pb-refresh', {
        detail: directEventDetail,
        composed: true,
        bubbles: true,
      });
      document.dispatchEvent(directEv);
    } catch (error) {
      console.error('<pb-tify> Error emitting pb-refresh:', error);
    }
  }

  /**
   * Get the canvas array from the manifest, supporting both IIIF 2.0 and 3.0 formats.
   * @param {Object} root - The root manifest object
   * @returns {Array} Array of canvases
   */
  _getCanvases(root) {
    if (!root) {
      return [];
    }
    
    // Helper to check if an item is a Canvas
    const isCanvas = (item) => {
      return item && (
        item.type === 'Canvas' || 
        item['@type'] === 'sc:Canvas' ||
        item['@type'] === 'Canvas'
      );
    };
    
    // Helper to recursively collect all canvases from items
    const collectCanvases = (items) => {
      if (!Array.isArray(items)) {
        return [];
      }
      const canvases = [];
      for (const item of items) {
        if (isCanvas(item)) {
          canvases.push(item);
        } else if (item.items && Array.isArray(item.items)) {
          // Recursively search in nested items (for sequences, ranges, etc.)
          canvases.push(...collectCanvases(item.items));
        }
      }
      return canvases;
    };
    
    // IIIF 3.0: canvases are in items (directly or nested in sequences/ranges)
    if (root.items && Array.isArray(root.items)) {
      const canvases = collectCanvases(root.items);
      if (canvases.length > 0) {
        return canvases;
      }
    }
    
    // IIIF 2.0: canvases are in sequences[0].canvases
    if (root.sequences && Array.isArray(root.sequences) && root.sequences.length > 0) {
      const canvases = root.sequences[0].canvases || [];
      if (canvases.length > 0) {
        return canvases;
      }
    }
    
    // Fallback: try canvases directly (some IIIF 2.0 variants)
    if (root.canvases && Array.isArray(root.canvases)) {
      return root.canvases;
    }
    
    return [];
  }

  _getRootFromApp() {
    // Try multiple ways to get the manifest/root data from Tify
    if (!this._tify) {
      return this._cachedManifest || null;
    }
    
    // First try to get from app object (Vue 2/3 style)
    if (this._tify.app) {
      const app = this._tify.app;
      
      // Vue 2 style: $root, $data
      const root = app.$root || app.root || app.manifest || (app.$data && app.$data.root) || (app.$data && app.$data.manifest);
      if (root) {
        return root;
      }
      
      // Vue 3: Try _context.app (root app instance)
      if (app._context && app._context.app) {
        const rootApp = app._context.app;
        const rootFromContext = rootApp.$root || rootApp.root || rootApp.manifest || 
                                (rootApp.$data && rootApp.$data.root) || 
                                (rootApp.$data && rootApp.$data.manifest);
        if (rootFromContext) {
          return rootFromContext;
        }
      }
      
      // Vue 3: Try _context directly
      if (app._context) {
        const rootFromContext = app._context.root || app._context.manifest;
        if (rootFromContext) {
          return rootFromContext;
        }
      }
      
      // Vue 3: Try from app's internal state (composition API)
      if (app._instance && app._instance.setupState) {
        const setupState = app._instance.setupState;
        if (setupState.root) return setupState.root;
        if (setupState.manifest) return setupState.manifest;
      }
      
      // Vue 3: Try _instance.exposed (exposed properties)
      if (app._instance && app._instance.exposed) {
        const exposed = app._instance.exposed;
        if (exposed.root) return exposed.root;
        if (exposed.manifest) return exposed.manifest;
      }
    }
    
    // Try direct access from Tify instance
    if (this._tify.manifest) {
      return this._tify.manifest;
    }
    
    // Try from viewer
    if (this._tify.viewer && this._tify.viewer.manifest) {
      return this._tify.viewer.manifest;
    }
    
    // Try from Tify's internal store or state
    if (this._tify.store && this._tify.store.state) {
      const state = this._tify.store.state;
      if (state.root) return state.root;
      if (state.manifest) return state.manifest;
    }
    
    // Fallback: use cached manifest if available
    return this._cachedManifest || null;
  }
  
  async _fetchAndCacheManifest() {
    // Fetch manifest directly from URL as fallback
    if (this._manifestUrl && !this._cachedManifest) {
      try {
        const response = await fetch(this._manifestUrl);
        this._cachedManifest = await response.json();
        return this._cachedManifest;
      } catch (error) {
        console.warn('<pb-tify> Failed to fetch manifest as fallback:', error);
        return null;
      }
    }
    return this._cachedManifest || null;
  }

  /**
   * Fetch the page-to-root mapping from the backend API.
   * This map allows us to get the root identifier (node ID format, e.g., "1.7.2.2.4")
   * for any page number.
   * @returns {Promise<Object>} Map of page numbers (e.g., "011") to root values (e.g., "1.7.2.2.17")
   */
  async _fetchPageToRootMap() {
    // Extract document path from URL
    const pathParts = window.location.pathname.split('/');
    let docPath = null;
    for (let i = pathParts.length - 1; i >= 0; i--) {
      if (pathParts[i] && pathParts[i] !== 'apps' && pathParts[i] !== 'exist') {
        docPath = pathParts[i];
        break;
      }
    }
    
    if (!docPath) {
      console.warn('[pb-tify] _fetchPageToRootMap: could not extract document path from URL');
      return null;
    }
    
    const endpoint = this.getEndpoint();
    // In component test environments, endpoint might be undefined
    // Use window.location.origin as fallback (same as the page's origin)
    const effectiveEndpoint = endpoint || window.location.origin;
    // Use the new dedicated roots endpoint (Option 2) - much more efficient than parsing full manifest
    const rootsUrl = `${effectiveEndpoint}/api/iiif/${encodeURIComponent(docPath)}/roots`;
    
    try {
      const response = await fetch(rootsUrl);
      if (!response.ok) {
        console.warn('[pb-tify] _fetchPageToRootMap: failed to fetch roots map', { 
          status: response.status, 
          statusText: response.statusText,
          url: rootsUrl
        });
        return null;
      }
      
      const pageToRootMap = await response.json();
      return pageToRootMap;
    } catch (error) {
      console.warn('[pb-tify] _fetchPageToRootMap: failed to fetch or parse roots map', error);
      return null;
    }
  }

  /**
   * Ensure the page-to-root lookup map is available.
   * Fetches it once and caches it for subsequent use.
   * @returns {Promise<void>}
   */
  async _ensurePageToRootMap() {
    // If already cached, return immediately
    if (this._pageToRootMap) {
      return;
    }
    
    // If already fetching, wait for it to complete
    if (this._fetchingPageToRootMap) {
      // Wait for the fetch to complete (polling)
      let attempts = 0;
      while (this._fetchingPageToRootMap && attempts < 50) {
        await new Promise(resolve => setTimeout(resolve, 100));
        attempts++;
      }
      return;
    }
    
    // Start fetching
    this._fetchingPageToRootMap = true;
    try {
      this._pageToRootMap = await this._fetchPageToRootMap();
    } finally {
      this._fetchingPageToRootMap = false;
    }
  }

  /**
   * Handle navigation to next/previous page
   * @private
   */
  async _handleNavigate(direction) {
    const root = this._getRootFromApp();
    
    if (!this._tify || !this._tify.app) {
      return;
    }

    // If root is not available yet, wait for it and retry
    if (!root) {
      setTimeout(() => {
        this._handleNavigate(direction);
      }, 100);
      return;
    }

    // root was already declared above, reuse it
    const canvases = this._getCanvases(root);
    const totalPages = canvases.length;
    
    if (totalPages === 0) {
      return;
    }

    // Get current page from registry (single source of truth)
    const state = registry.getState(this);
    let currentPage = null;
    
    // Find page from state.id
    if (state.id) {
      for (let i = 0; i < canvases.length; i++) {
        const canvas = canvases[i];
        const { rendering } = canvas;
        if (rendering && rendering.length > 0) {
          const renderingId = rendering[0]['@id'] || rendering[0].id;
          if (renderingId) {
            try {
              const url = new URL(renderingId);
              const canvasId = url.searchParams.get('id');
              if (canvasId === state.id) {
                currentPage = i + 1;
                break;
              }
            } catch (e) {
              // Ignore
            }
          }
        }
        // Also check canvas label
        if (canvas.label) {
          const label = canvas.label.none || canvas.label.en || canvas.label;
          const labelStr = Array.isArray(label) ? label[0] : label;
          if (labelStr && state.id.includes(labelStr)) {
            currentPage = i + 1;
            break;
          }
        }
      }
    }
    
    // Fallback to Tify's state or internal state
    if (!currentPage) {
      if (this._tify && this._tify.viewer) {
        if (typeof this._tify.viewer.currentPage === 'function') {
          try {
            const currentTifyPage = this._tify.viewer.currentPage();
            if (typeof currentTifyPage === 'number') {
              currentPage = currentTifyPage + 1;
            }
          } catch (e) {
            // Ignore
          }
        } else if (this._tify.viewer._sequenceIndex !== undefined) {
          const seqIndex = this._tify.viewer._sequenceIndex;
          if (typeof seqIndex === 'number') {
            currentPage = seqIndex + 1;
          }
        }
      }
    }
    
    // Final fallback
    if (!currentPage) {
      currentPage = this._currentPage || 1;
    }
    
    let newPage;
    if (direction === 'forward') {
      newPage = Math.min(currentPage + 1, totalPages);
    } else if (direction === 'backward') {
      newPage = Math.max(currentPage - 1, 1);
    } else {
      return;
    }

    // Update Tify directly, then update registry
    const canvas = canvases[newPage - 1];
    if (canvas) {
      // Extract target page ID
      const { rendering } = canvas;
      let targetId = null;
      if (rendering && rendering.length > 0) {
        const renderingId = rendering[0]['@id'] || rendering[0].id;
        if (renderingId) {
          try {
            const url = new URL(renderingId);
            targetId = url.searchParams.get('id');
          } catch (e) {
            // Ignore
          }
        }
      }
      
      // Set navigation state for programmatic navigation
      this._setNavigationState('programmatic', newPage, targetId);
      
      // Update Tify directly first, then update registry
      if (this._setPage) {
        this._setPage([newPage]);
        
        // Wait a bit for Tify to update, then update registry
        setTimeout(async () => {
          await this._updateUrlFromPage(canvas, true);
          
          // Mark navigation complete
          if (targetId) {
            this._markNavigationComplete(targetId);
          }
          setTimeout(() => {
            this._clearNavigationState();
          }, 500);
        }, 100);
      } else {
        // Fallback: just update registry
        await this._updateUrlFromPage(canvas, true);
        
        // Mark navigation complete
        if (targetId) {
          this._markNavigationComplete(targetId);
        }
        setTimeout(() => {
          this._clearNavigationState();
        }, 500);
      }
    }
  }

  async _switchPage(canvas) {
    // Update URL from canvas (single source of truth)
    // This triggers _handleUrlChange which updates Tify
    await this._updateUrlFromPage(canvas);
    
    // Emit refresh event for transcription
    const { rendering } = canvas;
    if (rendering && rendering.length > 0) {
      const renderingId = rendering[0]['@id'] || rendering[0].id;
      if (renderingId) {
        try {
          const url = new URL(renderingId);
          const params = {};
          url.searchParams.forEach((value, key) => {
            params[key] = value;
          });
          
          const channel = this.emit || this.getAttribute('emit') || 'transcription';
          const eventDetail = Object.assign({}, params, {
            key: channel,
            _source: this
          });
          
          const ev = new CustomEvent('pb-refresh', {
            detail: eventDetail,
            composed: true,
            bubbles: true,
          });
          
          document.dispatchEvent(ev);
          
          // Use getEmittedChannels to respect emit attribute or defaultChannel
          const channels = getEmittedChannels(this);
          this.emitTo('pb-refresh', params, channels);
        } catch (error) {
          console.error('<pb-tify> Error parsing rendering URL:', renderingId, error);
        }
      }
    }
  }

  _addOverlay(coordinates) {
    if (!Array.isArray(coordinates) || coordinates.length !== 4) {
      console.error('coords incomplete or missing (array of 4 numbers expected)', coordinates);
      return;
    }

    const { viewer } = this._tify;
    const { viewport } = viewer;
    const overlayId = 'runtime-overlay';

    if (this.overlay) {
      viewer.removeOverlay(this.overlay);
    }

    const viewportBounds = viewport.getBounds();

    const [x1, y1, w, h] = coordinates;
    const rect = viewport.imageToViewportRectangle(x1, y1, w, h);

    // Scroll into view if necessary
    if (!viewportBounds.containsPoint(rect.getTopLeft())) {
      viewer.viewport.panTo(rect.getCenter());
    }

    // Add overlay to viewer
    const overlay = document.createElement('div');
    this.overlay = overlay;
    overlay.id = overlayId;
    overlay.style.border = 'var(--pb-facsimile-border, none)';
    overlay.style.outline = 'var(--pb-facsimile-outline, 4px solid rgba(0, 0, 128, 0.5))';
    overlay.style.background = 'var(--pb-facsimile-background, rgba(0, 0, 128, 0.05))';
    viewer.addOverlay({
      element: overlay,
      location: rect,
    });
  }

  createRenderRoot() {
    return this;
  }
}
customElements.define('pb-tify', PbTify);
