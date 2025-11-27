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
          this._setPage(this._initialPages);
        }

        if (ev.detail.coordinates) {
          this._addOverlay(ev.detail.coordinates);
        }
      }
    });

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
        if (!this._tify.app.$root) {
          this._pendingNavigation = direction;
          if (this._tify.ready) {
            this._tify.ready.then(() => {
              if (this._pendingNavigation) {
                const queuedDirection = this._pendingNavigation;
                this._pendingNavigation = null;
                this._handleNavigate(queuedDirection);
              }
            });
          }
          return;
        }

        this._handleNavigate(direction);
      });
    }

    this.signalReady();
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

      this._tify = new Tify({
        manifestUrl: manifestUrl,
      });

      this._tify.ready
        .then(() => {
          // Clear any previous error messages
          this._clearError();

          // extend tify's setPage function to allow emitting an event
          const { app } = this._tify;
          
          // Check if app exists and has the necessary structure
          if (!app) {
            console.error('<pb-tify> Tify app is not available');
            return;
          }

          // Use tify's setPage method directly, or app.setPage if available
          const tifySetPage = this._tify.setPage;
          const appSetPage = app.setPage;
          
          // Determine which setPage to use and wrap it
          if (typeof tifySetPage === 'function') {
            // Store original function
            const originalSetPage = (...args) => tifySetPage.apply(this._tify, args);
            
            this._tify.setPage = pages => {
              const page = Array.isArray(pages) ? pages[0] : pages;
              if (this._currentPage === page) {
                return;
              }

              // Get canvases using helper that supports both IIIF 2.0 and 3.0
              const canvases = this._getCanvases(app.$root);
              
              if (canvases.length === 0) {
                originalSetPage(pages);
                this._currentPage = page;
                return;
              }

              const canvas = canvases[page - 1];

              if (canvas) {
                this._switchPage(canvas);
              }
              
              // Call original setPage
              originalSetPage(pages);
              this._currentPage = page;
            };

            this._setPage = (pages) => this._tify.setPage(pages);
          } else if (typeof appSetPage === 'function') {
            // Store original function
            const originalSetPage = (...args) => appSetPage.apply(app, args);
            
            app.setPage = pages => {
              const page = Array.isArray(pages) ? pages[0] : pages;
              if (this._currentPage === page) {
                return;
              }

              // Get canvases using helper that supports both IIIF 2.0 and 3.0
              const canvases = this._getCanvases(app.$root);
              
              if (canvases.length === 0) {
                originalSetPage(pages);
                this._currentPage = page;
                return;
              }

              const canvas = canvases[page - 1];

              if (canvas) {
                this._switchPage(canvas);
              }
              
              // Call original setPage
              originalSetPage(pages);
              this._currentPage = page;
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
          if (this._initialPages) {
            this._setPage(this._initialPages);
          } else {
            // Initialize current page to 1 if no initial page was set
            this._currentPage = 1;
          }

          // Process any queued navigation
          if (this._pendingNavigation) {
            const queuedDirection = this._pendingNavigation;
            this._pendingNavigation = null;
            this._handleNavigate(queuedDirection);
          }
        })
        .catch(error => {
          console.error('<pb-tify> Failed to load IIIF manifest:', error);
          this._handleManifestError(error);
        });

      this._tify.mount(this._container);
    } catch (error) {
      console.error('<pb-tify> Failed to initialize Tify:', error);
      this._handleManifestError(error);
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
    // IIIF 3.0: canvases are in items (directly or in first sequence)
    if (root.items && Array.isArray(root.items)) {
      // Check if first item is a sequence or directly canvases
      if (root.items.length > 0 && root.items[0].items) {
        // Items contain sequences, get canvases from first sequence
        return root.items[0].items;
      }
      // Items are directly canvases
      return root.items;
    }
    // IIIF 2.0: canvases are in sequences[0].canvases
    if (root.sequences && Array.isArray(root.sequences) && root.sequences.length > 0) {
      return root.sequences[0].canvases || [];
    }
    // Fallback: try canvases directly (some IIIF 2.0 variants)
    if (root.canvases && Array.isArray(root.canvases)) {
      return root.canvases;
    }
    return [];
  }

  /**
   * Handle navigation to next/previous page
   * @private
   */
  _handleNavigate(direction) {
    if (!this._tify || !this._tify.app || !this._tify.app.$root) {
      return;
    }

    const canvases = this._getCanvases(this._tify.app.$root);
    const totalPages = canvases.length;
    
    if (totalPages === 0) {
      return;
    }

    // Get current page (1-indexed) - use tracked current page or default to 1
    const currentPage = this._currentPage || 1;
    
    let newPage;
    if (direction === 'forward') {
      newPage = Math.min(currentPage + 1, totalPages);
    } else if (direction === 'backward') {
      newPage = Math.max(currentPage - 1, 1);
    } else {
      return;
    }

    // Only navigate if the page actually changes and we have the setPage method
    if (newPage !== currentPage && this._setPage) {
      this._setPage(newPage);
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
