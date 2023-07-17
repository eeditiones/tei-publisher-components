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
    }

    async connectedCallback() {
        super.connectedCallback();

        _injectStylesheet(this.cssPath);

        this.subscribeTo('pb-load-facsimile', (ev) => {
            if (ev.detail && ev.detail.order && this._tify) {
                console.log('<pb-tify> selecting page %d', ev.detail.order);
                this._tify.setPage(parseInt(ev.detail.order));
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
            });

            const container = document.createElement('div');
            container.style.height = '100%';
            container.style.width = '100%';
            this.appendChild(container);

            this._tify.mount(container);
        });
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define('pb-tify', PbTify);