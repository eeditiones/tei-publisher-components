import { LitElement, html, css } from 'lit-element';
import 'js-cookie/src/js.cookie.js';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { themableMixin } from './theming.js';

/**
 * Generate a link to download a resource. Optionally shows a dialog during the download.
 * This component is mainly used for creating the links for downloading PDFs, epubs etc.
 *
 * @slot - unnamed default slot for link text
 * @fires pb-document - When received, updates the odd to the one passed from the event
 * @cssprop --pb-download-color - Color of the download title label
 * @cssprop --pb-download-text-decoration - Extra effects for the download title label
 */
export class PbDownload extends themableMixin(pbMixin(LitElement)) {
    
    static get properties() {
        return {
            ...super.properties,
            /**
             * optional id reference to a pb-document. If `url` is not specified, 
             * a correct download URL is constructed using the given document path and parameters.
             * Otherwise `url` will be used as main URL.
             */
            src: {
                type: String
            },
            /**
             * the base URL to construct the link from. If specified, only the ODD and optional parameters
             * will be appended to the URL.
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
    }

    constructor() {
        super();

        this.source = false;
        this._target = '_self';
        this.type = '';
    }

    firstUpdated() {
        if (this.src) {
            this.subscribeTo('pb-document', (ev) => {
                if (ev.detail.id === this.src) {
                    this.odd = ev.detail.odd;
                }
            });
        }
        this.subscribeTo('pb-refresh', (ev) => {
            if (ev.detail.odd) {
                this.odd = ev.detail.odd;
                this._href = this._computeURL();
            }
        });
        waitOnce('pb-page-ready', () => {
            this._target = this._computeTarget();
            this._href = this._computeURL();
        });
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
            if (this.url) {
                url = `${this.toAbsoluteURL(this.url)}?odd=${this.odd ? this.odd : doc.odd}.odd`;
            } else {
                const serverPart = `${this.getEndpoint()}/`;
                if (this.lessThanApiVersion('1.0.0')) {
                    url = `${doc.getFileName()}${this.type ? `.${this.type}` : ''}?odd=${this.odd ? this.odd : doc.odd}.odd&cache=no&token=${this._token}`;
                } else {
                    url = `${serverPart}api/document/${encodeURIComponent(doc.path)}/${this.type || 'html'}?odd=${this.odd ? this.odd : doc.odd}.odd&token=${this._token}`;
                }
            }
        } else {
            url = /^(?:[a-z]+:)?\/\//i.test(this.url) ? this.url : `${this.getEndpoint()}/${this.url}`;
            if (this.lessThanApiVersion('1.0.0')) {
                url = `${url}${this.type ? `.${this.type}` : ''}?odd=${this.odd}&cache=no&token='${this._token}`;
            } else {
                url = `${url}/${this.type}?odd=${this.odd}&token='${this._token}`;
            }
        }

        if (this.params) {
            url += `&${this.params}`;
        }
        if (this.source) {
            url += '&source=true';
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

            if (dialog) {
                dialog.openDialog();
            }

            const token = this._token;
            const downloadCheck = window.setInterval(() => {
                const cookieValue = Cookies.get("simple.token");
                if (cookieValue === token) {
                    window.clearInterval(downloadCheck);
                    Cookies.remove("simple.token");
                    if (dialog) {
                        dialog.closeDialog();
                    }
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