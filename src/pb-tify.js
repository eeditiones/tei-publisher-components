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
      ...super.properties,
    };
  }

  constructor() {
    super();
    this.cssPath = '../css/tify';
    this._initialPages = null;
    this._currentPage = null;
  }
  /**
   * Ensure a mount container exists and is attached.
   * Idempotent: safe to call multiple times.
   */
  _ensureContainer () {
    if (!this._container) {
      this._container = document.createElement('div')
      this._container.style.height = '100%'
      this._container.style.width = '100%'
      this.appendChild(this._container)
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
    this._ensureContainer()
    
    if (!this.manifest) {
      return;
    }

    if (this._tify) {
      this._tify.destroy();
    }

    this._tify = new Tify({
      manifestUrl: this.toAbsoluteURL(this.manifest, this.getEndpoint()),
    });
    this._tify.ready.then(() => {
      // open initial page if set earlier via pb-load-facsimile event
      if (this._initialPages) {
        this._tify.setPage(this._initialPages);
      }

      // extend tify's setPage function to allow emitting an event
      const { app } = this._tify;
      const originalSetPage = app.setPage;

      app.setPage = pages => {
        const page = Array.isArray(pages) ? pages[0] : pages;
        if (this._currentPage === page) {
          return;
        }

        const canvas = app.$root.canvases[page - 1];

        this._switchPage(canvas);
        originalSetPage(pages);
        this._currentPage = page;
      };

      this._setPage = app.setPage;
    });

    this._tify.mount(this._container);
  }

  _switchPage(canvas) {
    const { rendering } = canvas;
    if (rendering && rendering.length > 0) {
      const url = new URL(rendering[0]['@id']);
      const params = {};
      url.searchParams.forEach((value, key) => {
        params[key] = value;
      });
      console.log('<pb-tify> page changed, emitting refresh with params %o', params);
      this.emitTo('pb-refresh', params);
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
