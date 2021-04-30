import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { pbMixin } from './pb-mixin.js';
import { registry } from './urls.js';

/**
 * Create an internal link: clicking it will cause connected views to
 * update and load the corresponding document fragment defined by the
 * properties.
 *
 * @fires pb-refresh - Fires when user clicks the link
 */
export class PbLink extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            /** Browse to an xml:id within the document */
            xmlId: {
                type: String,
                attribute: 'xml-id'
            },
            /** Browse to an eXist-internal node id, e.g. 3.5.6.1 */
            nodeId: {
                type: String,
                attribute: 'node-id',
                reflect: true
            },
            hash: {
                type: String,
                reflect: true
            },
            /** Browse to a different document */
            path: {
                type: String
            },
            /** Switch the ODD to use for display */
            odd: {
                type: String
            },
            view: {
                type: String
            },
            /**
             * Modify browser history: if set, clicking this
             * element will generate a new history entry in the browser's history.
             * Only use this on one element on the page.
             */
            history: {
                type: Boolean
            }
        };
    }

    constructor() {
        super();
        this.history = true;
    }

    connectedCallback() {
        super.connectedCallback();
        this._id = this.nodeId;
        this.subscribeTo('pb-visible', (ev) => {
            if (this.nodeId) {
                const [root, nodeId] = ev.detail.data.split(/\s*,\s*/);
                if (this.nodeId === root && (!this.hash || this.hash === nodeId)) {
                    this.classList.add('active');
                    this.scrollIntoView({ block: 'nearest' });
                    this.dispatchEvent(new CustomEvent('pb-collapse-open', {
                        composed: true,
                        bubbles: true
                    }));
                } else {
                    this.classList.remove('active');
                }
            }
        });
        this._content = this.innerHTML;
    }

    render() {
        return html`<a href="#" @click="${this._onClick}">${unsafeHTML(this._content)}</a>`;
    }

    createRenderRoot() {
        return this;
    }

    _onClick(ev) {
        ev.preventDefault();

        const params = {
            root: null
        };
        if (this.xmlId) {
            params.id = this.xmlId;
        } else if (this.nodeId) {
            params.root = this.nodeId;
        }
        if (this.path) {
            params.path = this.path;
        }
        if (this.odd) {
            params.odd = this.odd;
        }
        if (this.hash) {
            params.hash = this.hash;
        }
        if (this.view) {
            params.view = this.view;
        }
        if (this.history) {
            registry.commit('link click', params);
        }

        this.emitTo('pb-refresh', params);
    }

    /**
     * Fired when user clicks the link
     *
     * @event pb-refresh
     * @param {Object} Parameters as defined in properties
     */
}
customElements.define('pb-link', PbLink);