import { LitElement, html, css } from 'lit-element';
import 'js-cookie/src/js.cookie.js';
import { pbMixin } from './pb-mixin.js';

/**
 * Generate a link to download a resource. Optionally shows a dialog during the download.
 * This component is mainly used for creating the links for downloading PDFs, epubs etc.
 *
 * @customElement
 * @polymer
 * @demo demo/pb-download.html
 * @appliesMixin pbMixin
 */
export class PbDownload extends pbMixin(LitElement) {
    static get properties() {
        const props = {
            /**
             * optional id reference to a pb-document. If present the pb-download will allow to download the
             * referenced pb-document.
             */
            src: {
                type: String
            },
            /**
             * If true, an absolute URL will be constructed using the endpoint defined by `pb-page`.
             * Otherwise only the file name of the document is used as relative URL.
             */
            full: {
                type: Boolean
            },
            /**
             * the base URL to construct the link from. If not specified, the path to the document will be used.
             */
            url: {
                type: String
            },
            /**
             * optional suffix to append to the constructed URL. Use for getting a PDF, epub or similar.
             */
            type: {
                type: String
            },
            /**
             * extra odd parameter to be added. This will correspond to the ODD used by the document, if given.
             */
            odd: {
                type: String
            },
            /**
             * id of dialog component to show when downloading. A paper-dialog component with this id must
             * exist.
             */
            dialog: {
                type: String
            },
            /**
             * title to show in the dialog while download is in progress
             */
            title: {
                type: String
            },
            /**
             * add a special parameter 'source=yes' if true. For PDF this will result
             * in generated source code to be displayed
             */
            source: {
                type: Boolean
            },
            /**
             *  extra params to be added
             */
            params: {
                type: String
            },
            _target: {
                type: String,
                reflect: true
            },
            _href: {
                type: String,
                reflect: true
            },
            _token: {
                type: String
            }
        };
        return Object.assign(props, super.properties);
    }

    constructor() {
        super();

        this.source = false;
        this.full = false;
        this._target = '_self';
    }

    firstUpdated() {
        if (this.src) {
            this.subscribeTo('pb-document', (ev) => {
                if (ev.detail.id === this.src) {
                    this.odd = ev.detail.odd;
                }
            });
        }
        this._target = this._computeTarget();
        this._href = this._computeURL();
    }

    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);

        if (!oldVal) {
            return;
        }

        switch (name) {
            case 'source':
                this._target = this._computeTarget();
                break;
            case 'src':
            case 'type':
            case 'file':
            case 'odd':
            case 'params':
            case 'url':
                this._href = this._computeURL();
                break;
            default:
        }
    }

    render() {
        return html`
            <a id="button" @click="${this._handleClick}" title="${this.title}" target="${this._target}" href="${this._href}"><slot></slot></a>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: inline-block;
            }

            a {
                text-decoration: var(--pb-download-text-decoration, none);
                color: var(--pb-download-color);
            }
        `;
    }

    _computeTarget() {
        return this.source ? '_blank' : '_self';
    }

    _computeURL() {
        this._token = new Date().getTime() * 797;
        let url;
        const doc = this.getDocument();
        if (doc) {
            let path;
            if (this.url) {
                path = this.url;
            } else if (this.full) {
                path = `${this.getEndpoint()}/${doc.path}`;
            } else {
                path = doc.getFileName();
            }
            url = `${path}${this.type ? `.${this.type}` : ''}?odd=${doc.odd}.odd&cache=no&token=${this._token}`;
        } else {
            url = /^(?:[a-z]+:)?\/\//i.test(this.url) ? this.url : `${this.getEndpoint()}/${this.url}`;
            url = `${url}${this.type ? `.${this.type}` : ''}?odd=${this.odd}&cache=no&token='${this._token}`;
        }

        if (this.params) {
            url += `&${this.params}`;
        }
        if (this.source) {
            url += '&source=yes';
        }
        return url;
    }

    /**
     *
     * triggers a document download
     *
     * @param ev
     * @private
     */
    _handleClick(ev) {
        if (this.dialog) {
            const dialog = document.getElementById(this.dialog);

            //todo: this will error when dialog is not found or defined on element.
            dialog.open();

            const token = this._token;
            const downloadCheck = window.setInterval(() => {
                const cookieValue = Cookies.get("simple.token");
                if (cookieValue === token) {
                    window.clearInterval(downloadCheck);
                    Cookies.remove("simple.token");
                    dialog.close();
                }
            });
        }
        if (this._target === '_self') {
            ev.preventDefault();
            window.location = this._href;
        }
    }
}
customElements.define('pb-download', PbDownload);