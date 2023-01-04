import { LitElement, html } from 'lit-element';
import { Previewer } from "pagedjs/dist/paged.esm";
import { pbMixin } from './pb-mixin.js';
import { resolveURL } from './utils.js';

/**
 *
 *
 * @customElement  pb-print-preview
 * @polymer
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
            styles: {
                type: String
            },
            ...super.properties
        };
    }

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();

        if (!document.head.querySelector('#pb-print-preview-interface')) {
            const style = document.createElement('link');
            style.id = 'pb-print-preview-interface';
            style.rel = 'Stylesheet';
            style.type = 'text/css';
            style.href = resolveURL('../css/pagedjs/interface.css');
            document.head.appendChild(style);
        }
    }

    firstUpdated() {
        super.firstUpdated();

        this._container = this.querySelector('.content');

        PbPrintPreview.waitOnce('pb-page-ready', () => {
            this.refresh();
        });
    }

    refresh() {
        this.emitTo('pb-start-update');

        const doc = this.getDocument();
        const params = new URLSearchParams();
        params.set('wc', false);
        if (doc.odd) {
            params.set('odd', `${doc.odd}.odd`);
        }
        params.set('base', `${this.getEndpoint()}/${doc.getCollection()}`);

        const url = `${this.getEndpoint()}/api/document/${encodeURIComponent(doc.path)}/print?${params.toString()}`;
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin'
        })
        .then((response) => response.text())
        .then((data) => {
            const previewer = new Previewer();
            // previewer.registerHandlers(previewHandler(this._container));
            previewer.preview(data, this._getCustomStyles(), this._container);
            this.emitTo('pb-end-update');
        });
    }

    render() {
        return html`
            <div class="content"></div>
        `;
    }

    createRenderRoot() {
        return this;
    }

    _getCustomStyles() {
        let customStyles = [];
        if (this.getEndpoint()) {
            const doc = this.getDocument();
            if (this.styles) {
                customStyles = this.styles.split(/\s*,\s*/).map((href) => 
                    this.toAbsoluteURL(href, this.getEndpoint())
                );
            }
            if (doc.odd) {
                customStyles.push(`${this.getEndpoint()}/transform/${doc.odd}.css`);
            }
            return customStyles;
        }
        return customStyles;
    }
}
customElements.define('pb-print-preview', PbPrintPreview);