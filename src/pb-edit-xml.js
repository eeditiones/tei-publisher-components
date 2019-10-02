import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin';


/**
 * Open eXide to edit a given source document.
 *
 * @customElement
 * @polymer
 * @demo demo/pb-edit-odd.html
 * @appliesMixin pbMixin
 */
export class PbEditXml extends pbMixin(LitElement) {
    static get properties() {
        return {
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
            },
            ...super.properties
        };
    }

    constructor() {
        super();
        this.title = '';
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        PbEditXml.waitOnce('pb-page-ready', (options) => {
            const host = /^(.*:\/+[^\/]+)\/.*$/.exec(options.endpoint);
            this._href = `${host[1]}/exist/apps/eXide/`;
        });
    }

    render() {
        return html`
            <a href="${this._href}" target="eXide" @click="${this._handleClick}" title="${this.title}"><slot></slot></a>
        `;
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

    open() {
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
                console.log("using existing eXide to open %s", path);
                // eXide is there
                exide.eXide.app.findDocument(path);
                exide.focus();
            } else {
                console.log("opening new eXide for %s", path);
                window.eXide_onload = function () {
                    exide.eXide.app.findDocument(path);
                };
                // empty page
                exide.location = href;
            }
        }
    }

    _handleClick(ev) {
        ev.preventDefault();
        this.open();
    }
}
customElements.define('pb-edit-xml', PbEditXml);