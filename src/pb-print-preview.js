import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import { resolveURL } from './utils.js';

/**
 * Generates a HTML print preview of a document using the [pagedjs](https://pagedjs.org/) polyfill
 * to support CSS Paged Media.
 *
 * @demo demo/pb-print-preview.html
 * @appliesMixin pbMixin
 */
export class PbPrintPreview extends pbMixin(LitElement) {

    static get properties() {
        return {
            /** ID of the pb-document this element is connected to. The document path to
             * load will be taken from the pb-document.
             */
            src: {
                type: String
            },
            /**
             * Additional CSS stylesheets to be loaded. Relative URLs will be resolved
             * relative to the API endpoint.
             */
            styles: {
                type: String
            },
            /**
             * The generated API URL from which the HTML content will be loaded.
             * Readonly.
             */
            url: {
                type: String,
                reflect: true,
                readOnly: true
            },
            /**
             * Set to disable the pagejs polyfill, i.e. show the HTML as delivered from the server. 
             */
            raw: {
                type: Boolean
            },
            ...super.properties
        };
    }

    constructor() {
        super();

        this.url = 'about:blank';
        this.raw = false;
    }

    firstUpdated() {
        super.firstUpdated();

        this._iframe = this.shadowRoot.querySelector('iframe');
        this._iframe.addEventListener('load', () => {
            if (this._iframe.src === 'about:blank') {
                return;
            }
            this._iframe.className = '';
            this.emitTo('pb-end-update');
        });

        PbPrintPreview.waitOnce('pb-page-ready', () => {
            this.refresh();
        });
    }

    /**
     * Open the browser's print dialog.
     */
    print() {
        this._iframe.contentWindow.print();
    }

    /**
     * Refresh the displayed content.
     */
    refresh() {
        this.emitTo('pb-start-update');
        this._iframe.className = 'hidden';
        this._iframe.src = 'about:blank';

        const doc = this.getDocument();
        const params = new URLSearchParams();
        params.set('wc', 'false');
        if (doc.odd) {
            params.set('odd', `${doc.odd}.odd`);
        }
        params.set('base', `${this.getEndpoint()}/${doc.getCollection()}/`);
        if (!this.raw) {
            params.set('script', resolveURL('../lib/paged.polyfill.js'));
        }
        this._getCustomStyles().forEach((href) => params.append('style', href));
        this.url = `${this.getEndpoint()}/api/document/${encodeURIComponent(doc.path)}/print?${params.toString()}`;

        this._iframe.src = this.url;
    }

    render() {
        return html`
            <iframe title="Preview" src="about:blank"></iframe>
        `;
    }

    _getCustomStyles() {
        let customStyles = [];
        if (this.styles) {
            customStyles = this.styles.split(/\s*,\s*/);
        }

        if (!this.raw) {
            customStyles.push(resolveURL('../css/pagedjs/interface.css'));
        }
        return customStyles;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }

            iframe {
                border: 0;
                width: 100%;
                height: 100%;
                opacity: 1;
                transition: opacity 0.5s ease-out 0.5s;
            }

            .hidden {
                opacity: 0;
                transition: opacity 0.5s ease-out;
            }

        `;
    }
}
customElements.define('pb-print-preview', PbPrintPreview);