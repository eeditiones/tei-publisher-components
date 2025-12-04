import { LitElement } from 'lit';
import 'tify';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { resolveURL } from './utils.js';

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
      ...super.properties,
    };
  }

  constructor() {
    super();
    this.cssPath = '../css/tify';
    this._initialPages = null;
    this._currentPage = null;
    this.enableNavigation = true;
    this._pendingNavigation = null; // Queue for navigation when viewer isn't ready
    this._pendingPage = null; // Queue for page navigation when canvases aren't ready
    this._canvasWaitStart = null; // Track when we started waiting for canvases
    this._manifestUrl = null; // Store the manifest URL for fallback fetching
    this._cachedManifest = null; // Cache the fetched manifest
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

    this.subscribeTo('pb-show-annotation', ev => {
      if (ev.detail) {
        this._initialPages = ev.detail.order ? Number(ev.detail.order) : Number.POSITIVE_INFINITY;
        if (this._initialPages === Number.POSITIVE_INFINITY) {
          this._initialPages = 1;
        }
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

    // Subscribe to pb-navigate events if navigation is enabled
    if (this.enableNavigation !== false) {
      this.subscribeTo('pb-navigate', ev => {
        console.log('<pb-tify> pb-navigate event received:', ev.detail);
        if (!ev.detail || !ev.detail.direction) {
          console.warn('<pb-tify> pb-navigate event missing direction');
          return;
        }

        const direction = ev.detail.direction;
        console.log('<pb-tify> Processing pb-navigate:', direction);
        
        // Check if tify is initialized
        if (!this._tify || !this._tify.app) {
          console.warn('<pb-tify> Tify not initialized, cannot navigate');
          return;
        }

        // Wait for tify to be ready if it's not yet
        const root = this._getRootFromApp();
        if (!root) {
          console.log('<pb-tify> Tify not ready, queueing navigation:', direction);
          this._pendingNavigation = direction;
          if (this._tify.ready) {
            this._tify.ready.then(() => {
              // Wait a bit more for root to be available
              const waitForRoot = () => {
                const root = this._getRootFromApp();
                console.log('<pb-tify> [Navigation queue] Waiting for root... app exists:', !!(this._tify && this._tify.app), 'root exists:', !!root);
                if (root) {
                  if (this._pendingNavigation) {
                    const queuedDirection = this._pendingNavigation;
                    this._pendingNavigation = null;
                    console.log('<pb-tify> Processing queued navigation:', queuedDirection);
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
                    console.error('<pb-tify> Timeout waiting for root in navigation queue after 10 seconds');
                    // Try to proceed anyway
                    if (this._pendingNavigation) {
                      const queuedDirection = this._pendingNavigation;
                      this._pendingNavigation = null;
                      console.log('<pb-tify> Attempting navigation without root:', queuedDirection);
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

        console.log('<pb-tify> Calling _handleNavigate:', direction);
        this._handleNavigate(direction);
      });
    }

    this.signalReady();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Clean up page sync interval if it exists
    if (this._pageSyncInterval) {
      clearInterval(this._pageSyncInterval);
      this._pageSyncInterval = null;
    }
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

    if (this._tify) {
      this._tify.destroy();
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

      // Build tify options
      const tifyOptions = {
        manifestUrl: manifestUrl,
      };
      
      // Set initial view if specified (e.g., 'toc' to show table of contents with double pages)
      if (this.initialView) {
        tifyOptions.view = this.initialView;
      }
      
      this._tify = new Tify(tifyOptions);

      // Wait for ready, then try to get root, but proceed either way
      // The viewer should display even without root - we only need root for navigation
      if (this._tify && this._tify.ready) {
        this._tify.ready.then(() => {
          console.log('<pb-tify> Tify ready, checking for root...');
          // Try to get root, but don't wait too long
          const waitForRoot = () => {
            if (this._tify && this._tify.app) {
              // Debug: log what properties app actually has (once)
              if (!this._loggedAppProps) {
                console.log('<pb-tify> app properties:', Object.keys(this._tify.app));
                console.log('<pb-tify> app.$root:', this._tify.app.$root);
                console.log('<pb-tify> app.root:', this._tify.app.root);
                console.log('<pb-tify> app.manifest:', this._tify.app.manifest);
                console.log('<pb-tify> app.$data:', this._tify.app.$data);
                console.log('<pb-tify> app._context:', this._tify.app._context);
                if (this._tify.app._context) {
                  console.log('<pb-tify> app._context.app:', this._tify.app._context.app);
                  if (this._tify.app._context.app) {
                    const rootApp = this._tify.app._context.app;
                    console.log('<pb-tify> app._context.app properties:', Object.keys(rootApp));
                    console.log('<pb-tify> app._context.app.$root:', rootApp.$root);
                    console.log('<pb-tify> app._context.app.root:', rootApp.root);
                    console.log('<pb-tify> app._context.app.manifest:', rootApp.manifest);
                  }
                  console.log('<pb-tify> app._context.root:', this._tify.app._context.root);
                  console.log('<pb-tify> app._context.manifest:', this._tify.app._context.manifest);
                  console.log('<pb-tify> app._context keys:', Object.keys(this._tify.app._context));
                }
                console.log('<pb-tify> _tify.manifest:', this._tify.manifest);
                console.log('<pb-tify> _tify.viewer:', this._tify.viewer);
                if (this._tify.viewer) {
                  console.log('<pb-tify> _tify.viewer.manifest:', this._tify.viewer.manifest);
                }
                if (this._tify.app._instance) {
                  console.log('<pb-tify> app._instance.setupState:', this._tify.app._instance.setupState);
                  console.log('<pb-tify> app._instance.exposed:', this._tify.app._instance.exposed);
                }
                if (this._tify.store) {
                  console.log('<pb-tify> _tify.store.state:', this._tify.store.state);
                }
                this._loggedAppProps = true;
              }
              
              // Try different ways to access the manifest/root data
              const root = this._tify.app.$root || this._tify.app.root || this._tify.app.manifest || (this._tify.app.$data && this._tify.app.$data.root);
              if (root) {
                console.log('<pb-tify> Found manifest data! Calling _onTifyFullyReady');
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
              console.warn('<pb-tify> Root not found after 2 seconds, proceeding anyway');
              console.log('<pb-tify> app object:', this._tify && this._tify.app);
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
          console.error('<pb-tify> Error in ready promise:', error);
          // Still try to proceed
          this._onTifyFullyReady();
        });
      } else {
        // If ready promise not available, proceed anyway after a short delay
        console.warn('<pb-tify> ready promise not available, proceeding after delay');
        setTimeout(() => {
          this._onTifyFullyReady();
        }, 500);
      }
      
      // Mount Tify to the container
      this._tify.mount(this._container);
    } catch (error) {
      console.error('<pb-tify> Failed to initialize Tify:', error);
      this._handleManifestError(error);
    }
  }

  _onTifyFullyReady() {
    // Clear any previous error messages
    this._clearError();

    // extend tify's setPage function to allow emitting an event
    const { app } = this._tify;
    
    // Check if app exists and has the necessary structure
    if (!app) {
      console.error('<pb-tify> Tify app is not available');
      return;
    }
    
    console.log('<pb-tify> Tify fully ready - app.$root available');

    // Set up a watcher to keep _currentPage in sync with Tify's actual state
          // This ensures pb-navigate events work correctly even if Tify's internal buttons are used
          this._syncCurrentPage = () => {
            // Try to get current page from app.pages
            if (app.pages && Array.isArray(app.pages) && app.pages.length > 0) {
              const tifyPage = Number(app.pages[0]);
              if (!isNaN(tifyPage) && tifyPage >= 1) {
                if (this._currentPage !== tifyPage) {
                  console.log('<pb-tify> Syncing _currentPage from Tify state:', this._currentPage, '->', tifyPage);
                  this._currentPage = tifyPage;
                }
              }
            }
            // Also try to get from root if available
            const root = this._getRootFromApp();
            if (root) {
              const canvases = this._getCanvases(root);
              // If we have canvases but no pages info, try to infer from current state
              if (canvases.length > 0 && !app.pages) {
                // Can't infer page without pages array, so skip
              }
            }
          };

          // Watch for page changes using MutationObserver on app.pages or poll if needed
          // Try to observe app.pages if it's reactive, otherwise poll
          if (app.$watch) {
            // Vue reactivity - watch pages
            app.$watch('pages', () => {
              this._syncCurrentPage();
            }, { deep: true, immediate: true });
          } else {
            // Fallback: poll app.pages periodically to keep in sync
            this._pageSyncInterval = setInterval(() => {
              this._syncCurrentPage();
            }, 100);
          }

    // Use tify's setPage method directly, or app.setPage if available
    const tifySetPage = this._tify.setPage;
    const appSetPage = app.setPage;
    
    // Determine which setPage to use and wrap it
    if (typeof tifySetPage === 'function') {
            // Store original function
            const originalSetPage = (...args) => tifySetPage.apply(this._tify, args);
            
            this._tify.setPage = pages => {
              console.log('<pb-tify> Wrapped _tify.setPage called with:', pages);
              // Ensure pages is an array (Tify expects array format)
              const pagesArray = Array.isArray(pages) ? pages : [pages];
              const page = Number(pagesArray[0]);
              
              // Validate page number
              if (isNaN(page) || page < 1) {
                console.warn('<pb-tify> Invalid page number:', pagesArray[0]);
                return;
              }

              // Prevent duplicate navigation to the same page
              if (this._currentPage === page && this._currentPage !== null) {
                console.log('<pb-tify> Already on page', page, ', skipping navigation');
                return;
              }

              // Get canvases using helper that supports both IIIF 2.0 and 3.0
              const root = this._getRootFromApp();
              const canvases = this._getCanvases(root);
              
              console.log('<pb-tify> _tify.setPage: Found', canvases.length, 'canvases, root exists:', !!root, 'root type:', root?.type || root?.['@type']);
              
              // If canvases aren't available yet, queue the page navigation
              if (canvases.length === 0) {
                console.log('<pb-tify> No canvases yet, queueing page:', pagesArray);
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
                  console.warn('<pb-tify> Timeout waiting for canvases after 5 seconds');
                  this._pendingPage = null;
                  this._canvasWaitStart = null;
                }
                return;
              }
              
              // Reset canvas wait timer if we have canvases now
              this._canvasWaitStart = null;
              
              // Validate page is within range
              if (page > canvases.length) {
                console.warn('<pb-tify> Page number out of range:', page, 'max:', canvases.length);
                return;
              }

              // Call original setPage first to let Tify actually change the page
              try {
                console.log('<pb-tify> Calling originalSetPage with:', pagesArray);
                originalSetPage(pagesArray);
                this._currentPage = page;
                console.log('<pb-tify> Page set to:', this._currentPage);
                
                // After page is changed, emit the refresh event
                const canvas = canvases[page - 1];
                if (canvas) {
                  this._switchPage(canvas);
                }
              } catch (error) {
                console.error('<pb-tify> Error calling setPage:', error);
              }
            };

            this._setPage = (pages) => {
              console.log('<pb-tify> _setPage called with:', pages, '-> calling this._tify.setPage');
              this._tify.setPage(pages);
            };
            console.log('<pb-tify> _setPage assigned (using _tify.setPage)');
          } else if (typeof appSetPage === 'function') {
            // Store original function
            const originalSetPage = (...args) => appSetPage.apply(app, args);
            
            app.setPage = pages => {
              // Ensure pages is an array (Tify expects array format)
              const pagesArray = Array.isArray(pages) ? pages : [pages];
              const page = Number(pagesArray[0]);
              
              // Validate page number
              if (isNaN(page) || page < 1) {
                console.warn('<pb-tify> Invalid page number:', pagesArray[0]);
                return;
              }

              // Prevent duplicate navigation to the same page
              if (this._currentPage === page && this._currentPage !== null) {
                console.log('<pb-tify> Already on page', page, ', skipping navigation');
                return;
              }

              // Get canvases using helper that supports both IIIF 2.0 and 3.0
              const root = this._getRootFromApp();
              const canvases = this._getCanvases(root);
              
              console.log('<pb-tify> app.setPage: Found', canvases.length, 'canvases, root exists:', !!root, 'root type:', root?.type || root?.['@type']);
              
              // If canvases aren't available yet, queue the page navigation
              if (canvases.length === 0) {
                console.log('<pb-tify> No canvases yet, queueing page:', pagesArray);
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
                  console.warn('<pb-tify> Timeout waiting for canvases after 5 seconds');
                  this._pendingPage = null;
                  this._canvasWaitStart = null;
                }
                return;
              }
              
              // Reset canvas wait timer if we have canvases now
              this._canvasWaitStart = null;
              
              // Validate page is within range
              if (page > canvases.length) {
                console.warn('<pb-tify> Page number out of range:', page, 'max:', canvases.length);
                return;
              }

              // Call original setPage first to let Tify actually change the page
              try {
                originalSetPage(pagesArray);
                this._currentPage = page;
                
                // After page is changed, emit the refresh event
                const canvas = canvases[page - 1];
                if (canvas) {
                  this._switchPage(canvas);
                }
              } catch (error) {
                console.error('<pb-tify> Error calling setPage:', error);
              }
            };

            this._setPage = (pages) => app.setPage(pages);
          } else {
            // Fallback: create a simple wrapper that at least tracks the page
            this._setPage = (pages) => {
              const page = Array.isArray(pages) ? pages[0] : pages;
              this._currentPage = page;
            };
          }

    // open initial page if set earlier via pb-load-facsimile event
    // Do this after setting up the override so _currentPage gets tracked
    // Tify expects pages as an array, and we need to ensure manifest is loaded
    const setInitialPage = () => {
            const canvases = this._getCanvases(app.$root);
            const canvasCount = canvases.length;
            
            // Don't try to set page if there are no canvases yet
            if (canvasCount === 0) {
              // Wait a bit and try again
              setTimeout(setInitialPage, 100);
              return;
            }
            
            if (this._initialPages) {
              // Convert to array format that Tify expects
              const pagesArray = Array.isArray(this._initialPages) ? this._initialPages : [this._initialPages];
              const requestedPage = Number(pagesArray[0]);
              
              // Validate page number: must be a valid number and within range
              if (isNaN(requestedPage) || requestedPage < 1) {
                console.warn('<pb-tify> Invalid initial page number:', requestedPage);
                this._currentPage = 1;
                return;
              }
              
              // Ensure pages are valid (1-indexed, within range)
              const validPage = Math.max(1, Math.min(requestedPage, canvasCount));
              
              try {
                this._setPage([validPage]);
              } catch (error) {
                console.warn('<pb-tify> Failed to set initial page:', error);
              }
            } else {
              // Initialize current page to 1 if no initial page was set
              this._currentPage = 1;
            }
          };
          
    // Try to set initial page (will retry if canvases not ready)
    setInitialPage();

    // Process any queued navigation - $root is now available
    if (this._pendingNavigation) {
      const queuedDirection = this._pendingNavigation;
      this._pendingNavigation = null;
      console.log('<pb-tify> Processing queued navigation after $root available:', queuedDirection);
      this._handleNavigate(queuedDirection);
    }
    
    // Process any queued page navigation
    if (this._pendingPage && this._setPage) {
      const queuedPages = this._pendingPage;
      this._pendingPage = null;
      this._setPage(queuedPages);
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
    
    // Debug: log structure if no canvases found
    if (!this._loggedCanvasDebug) {
      console.log('<pb-tify> _getCanvases: No canvases found. Root structure:', {
        hasItems: !!root.items,
        itemsLength: root.items?.length,
        firstItemType: root.items?.[0]?.type || root.items?.[0]?.['@type'],
        hasSequences: !!root.sequences,
        sequencesLength: root.sequences?.length,
        hasCanvases: !!root.canvases
      });
      this._loggedCanvasDebug = true;
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
        console.log('<pb-tify> Fetched and cached manifest from URL');
        // Log manifest structure for debugging
        if (this._cachedManifest) {
          const items = this._cachedManifest.items || [];
          const itemTypes = items.slice(0, 5).map(item => ({
            type: item.type || item['@type'],
            hasItems: !!item.items,
            itemsLength: item.items?.length,
            label: item.label
          }));
          
          console.log('<pb-tify> Cached manifest structure:', {
            type: this._cachedManifest.type || this._cachedManifest['@type'],
            hasItems: !!this._cachedManifest.items,
            itemsLength: items.length,
            itemTypes: itemTypes,
            hasSequences: !!this._cachedManifest.sequences,
            sequencesLength: this._cachedManifest.sequences?.length,
            hasStructures: !!this._cachedManifest.structures,
            structuresLength: this._cachedManifest.structures?.length
          });
          
          // Check for ranges (double pages)
          const ranges = items.filter(item => 
            (item.type === 'Range' || item['@type'] === 'Range' || item['@type'] === 'sc:Range')
          );
          if (ranges.length > 0) {
            console.log('<pb-tify> Found', ranges.length, 'ranges (potential double pages):', 
              ranges.map(r => ({ label: r.label, itemsLength: r.items?.length }))
            );
          } else {
            console.log('<pb-tify> No ranges found in items - double pages may be missing');
          }
          
          // Log first item structure in detail
          if (items.length > 0) {
            const firstItem = items[0];
            console.log('<pb-tify> First item structure:', {
              type: firstItem.type || firstItem['@type'],
              label: firstItem.label,
              hasItems: !!firstItem.items,
              itemsLength: firstItem.items?.length,
              itemsTypes: firstItem.items?.slice(0, 3).map(i => i.type || i['@type'])
            });
          }
        }
        return this._cachedManifest;
      } catch (error) {
        console.warn('<pb-tify> Failed to fetch manifest as fallback:', error);
        return null;
      }
    }
    return this._cachedManifest || null;
  }

  /**
   * Handle navigation to next/previous page
   * @private
   */
  _handleNavigate(direction) {
    console.log('<pb-tify> _handleNavigate called with direction:', direction);
    const root = this._getRootFromApp();
    console.log('<pb-tify> _tify exists:', !!this._tify, 'app exists:', !!(this._tify && this._tify.app), 'root exists:', !!root);
    
    if (!this._tify || !this._tify.app) {
      console.warn('<pb-tify> Cannot navigate - Tify not initialized');
      return;
    }

    // If root is not available yet, wait for it and retry
    if (!root) {
      console.log('<pb-tify> root not available, waiting and retrying...');
      setTimeout(() => {
        this._handleNavigate(direction);
      }, 100);
      return;
    }

    // CRITICAL: Sync current page from Tify's state FIRST before calculating navigation
    // This ensures pb-navigate stays in sync with Tify's actual page
    if (this._syncCurrentPage) {
      console.log('<pb-tify> Syncing current page from Tify state');
      this._syncCurrentPage();
    } else {
      console.warn('<pb-tify> _syncCurrentPage function not available');
    }

    // root was already declared above, reuse it
    const canvases = this._getCanvases(root);
    const totalPages = canvases.length;
    console.log('<pb-tify> Total pages:', totalPages);
    
    if (totalPages === 0) {
      console.warn('<pb-tify> Cannot navigate - no canvases available');
      return;
    }

    // Get current page from Tify's state (app.pages) - this is the source of truth
    let currentPage = 1;
    console.log('<pb-tify> app.pages:', this._tify.app.pages, '_currentPage:', this._currentPage);
    if (this._tify.app.pages && Array.isArray(this._tify.app.pages) && this._tify.app.pages.length > 0) {
      // Tify stores pages as an array, get the first page number (1-indexed)
      currentPage = Number(this._tify.app.pages[0]) || 1;
      // Update our tracked page to stay in sync
      this._currentPage = currentPage;
      console.log('<pb-tify> Got current page from app.pages:', currentPage);
    } else if (this._currentPage !== null && this._currentPage !== undefined) {
      // Fall back to our tracked page if Tify's state isn't available
      currentPage = this._currentPage;
      console.log('<pb-tify> Using tracked _currentPage:', currentPage);
    } else {
      // Try to get from root/canvases if available
      const root = this._getRootFromApp();
      if (root) {
        const canvases = this._getCanvases(root);
        // If we have canvases, we can at least validate the page range
        console.log('<pb-tify> No page info available, defaulting to 1 (canvases:', canvases.length, ')');
      } else {
        console.log('<pb-tify> No page info available, defaulting to 1');
      }
    }
    
    let newPage;
    if (direction === 'forward') {
      newPage = Math.min(currentPage + 1, totalPages);
    } else if (direction === 'backward') {
      newPage = Math.max(currentPage - 1, 1);
    } else {
      console.warn('<pb-tify> Invalid direction:', direction);
      return;
    }

    console.log('<pb-tify> Navigation calculation: currentPage=', currentPage, 'direction=', direction, 'newPage=', newPage, '_setPage exists=', !!this._setPage);

    // Always navigate if we have the setPage method (let our wrapper handle duplicate prevention)
    // Tify expects pages as an array
    if (this._setPage) {
      console.log('<pb-tify> Calling _setPage with:', [newPage]);
      try {
        this._setPage([newPage]);
        console.log('<pb-tify> _setPage call completed');
      } catch (error) {
        console.error('<pb-tify> Error calling _setPage:', error);
      }
    } else {
      console.error('<pb-tify> Navigation failed - _setPage not available');
    }
  }

  _switchPage(canvas) {
    const { rendering } = canvas;
    if (rendering && rendering.length > 0) {
      // Support both IIIF 2.0 (@id) and 3.0 (id) formats
      const renderingId = rendering[0]['@id'] || rendering[0].id;
      if (renderingId) {
        const url = new URL(renderingId);
        const params = {};
        url.searchParams.forEach((value, key) => {
          params[key] = value;
        });
        console.log('<pb-tify> page changed, emitting refresh with params %o', params);
        this.emitTo('pb-refresh', params);
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
