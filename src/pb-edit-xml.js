import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin';


/**
 * Open eXide to edit a given source document.
 *
 * @slot - unnamed default slot for the link text
 * @slot - unnamed slot for the link text when eXide tab is already opened
 */
export class PbEditXml extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            /**
             * expects a context-absolute path to the document to edit e.g. '/db/apps/tei-publisher/mytext.xml'
             */
            path: {
                type: String
            },
            /**
             * optional id reference to a pb-document
             */
            src: {
                type: String
            },
            /**
             * HTML title to be used
             */
            title: {
                type: String
            },
            _href: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.title = '';
    }

    connectedCallback() {
        super.connectedCallback();
        PbEditXml.waitOnce('pb-page-ready', (options) => {
            if (options.endpoint === '.') {
                this._href = '/exist/apps/eXide/';
            } else {
                const host = /^(.*:\/+[^/]+)\/.*$/.exec(options.endpoint);
                this._href = `${host[1]}/exist/apps/eXide/`;
            }
        });
    }

    render() {
        // if the target is within the same origin as the current page, we can communicate with an 
        // already opened eXide, if not, only option is to open a new window.
        if (new URL(this._href, window.location.href).origin === this.getUrl().origin) {
            return html`<a href="${this._href}" target="eXide" title="${this.title}" @click="${this.open}"><slot></slot></a>`;
        }
        return html`<a href="${this._href}/index.html?open=${this.path}" title="${this.title}"><slot></slot></a>`;
    }

    static get styles() {
        return css`
            :host {
                display: inline;
            }

            a {
                color: inherit;
                text-decoration: none;
            }
        `;
    }

    setPath(path) {
        this.path = path;
    }

    open(ev) {
        ev.preventDefault();
        let href = this._href;
        let path = this.path;
        if (this.src) {
            const sourceComponent = document.getElementById(this.src);
            path = sourceComponent.getFullPath();
            href = sourceComponent.sourceView;
        }

        // try to retrieve existing eXide window
        const exide = window.open("", "eXide");
        if (exide && !exide.closed) {
            // check if eXide is really available or it's an empty page
            const app = exide.eXide;
            if (app) {
                console.log("<pb-edit-xml> using existing eXide to open %s", path);
                // eXide is there
                exide.eXide.app.findDocument(path);
                exide.focus();
            } else {
                console.log("<pb-edit-xml> opening new eXide for %s", path);
                window.eXide_onload = function () {
                    exide.eXide.app.findDocument(path);
                };
                // empty page
                exide.location = href;
            }
        }
    }
}
customElements.define('pb-edit-xml', PbEditXml);