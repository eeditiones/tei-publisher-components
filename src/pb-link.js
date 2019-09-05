import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin';


/**
 *
 *
 * @customElement
 * @polymer
 * @demo demo/pb-link.html
 * @appliesMixin pbMixin
 */
export class PbLink extends pbMixin(LitElement) {
    static get properties() {
        const superProps = super.properties;
        return {
            ...superProps,
            /** Browse to an xml:id within the document */
            xmlId: {
                type: String,
                attribute: 'xml-id'
            },
            /** Browse to an eXist-internal node id, e.g. 3.5.6.1 */
            nodeId: {
                type: String,
                attribute: 'node-id'
            },
            /** Browse to a different document */
            path: {
                type: String
            },
            /** Switch the ODD to use for display */
            odd: {
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
    }

    render() {
        return html`
            <a href="#" @click="${this._onClick}"><slot></slot></a>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: inline;
            }
        `;
    }

    _onClick(ev) {
        ev.preventDefault();
        ev.stopPropagation();

        const params = {
            position: null
        };
        if (this.xmlId) {
            params.id = this.xmlId;
            this.history && this.setParameter('id', this.xmlId);
        } else if (this.nodeId) {
            params.position = this.nodeId;
            this.history && this.setParameter('root', this.nodeId);
        }
        if (this.path) {
            params.path = this.path;
            this.history && this.setPath(this.path);
        }
        if (this.odd) {
            params.odd = this.odd;
            this.history && this.setParameter('odd', this.odd);
        }
        this.pushHistory('link click');

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