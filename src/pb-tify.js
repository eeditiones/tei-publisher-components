import { LitElement } from 'lit-element';
import "tify";
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
 * @fires pb-refresh - if user opens another page and the corresponding canvas
 * has an extension property "https://teipublisher.com/page", listing the parameters
 * to be passed to the event.
 * @fires pb-load-facsimile - when received, opens the page denoted by the
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
                type: String
            },
            ...super.properties
        };
    }

    constructor() {
        super();
        this.cssPath = '../css/tify';
        this._initialPages = null;
    }

    async connectedCallback() {
        super.connectedCallback();

        _injectStylesheet(this.cssPath);

        this.subscribeTo('pb-load-facsimile', (ev) => {
            if (ev.detail && ev.detail.order && this._tify) {
                // check if tify is already initialized
                if (this._setPage) {
                    this._setPage(parseInt(ev.detail.order, 10));
                } else {
                    // remember page and wait for tify
                    this._initialPages = parseInt(ev.detail.order, 10);
                }
            }
        });
    }

    firstUpdated() {
        super.firstUpdated();

        waitOnce('pb-page-ready', () => {
            this._tify = new Tify({
                manifestUrl: this.toAbsoluteURL(this.manifest, this.getEndpoint())
            });
            this._tify.ready.then(() => { 
                this.signalReady();
                // open initial page if set earlier via pb-load-facsimile event
                this._tify.setPage(this._initialPages);

                // extend tify's setPage function to allow emitting an event
                const {app} = this._tify;
                this._setPage = app.setPage;

                app.setPage = (pages) => {
                    const page = Array.isArray(pages) ? pages[0] : pages;
                    const canvas = app.$root.canvases[page - 1];
                    
                    this._switchPage(canvas);
                    this._setPage(pages);
                };
            });

            const container = document.createElement('div');
            container.style.height = '100%';
            container.style.width = '100%';
            this.appendChild(container);

            this._tify.mount(container);
        });
    }

    _switchPage(canvas) {
        const rendering = canvas.rendering;
        if (rendering && rendering.length > 0) {
            const url = new URL(rendering[0]['@id']);
            const params = {};
            url.searchParams.forEach((value, key) => {
                params[key] = value;
            })
            console.log('<pb-tify> page changed, emitting refresh with params %o', params);
            this.emitTo('pb-refresh', params);
        }
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define('pb-tify', PbTify);