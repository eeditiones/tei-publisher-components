import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin';


/**
 *
 *
 * @customElement pb-facs-link
 * @polymer
 * @demo demo/pb-facsimile.html
 * @appliesMixin pbMixin
 */
export class PbFacsLink extends pbMixin(LitElement) {
    static get properties() {
        const props = {
            /** URL pointing to the facsimile image to load */
            facs: {
                type: String
            },
            /** An array of coordinates describing a rectangle to highlight */
            coordinates: {
                type: Array
            },
            emitOnLoad: {
                type: Boolean
            }
        };
        return Object.assign(props, super.properties);
    }

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
    }

    firstUpdated() {
        if (this.emitOnLoad) {
            this._trigger();
        }
    }

    render() {
        return html`<a href="#" @mouseover="${this._mouseoverListener}" @click="${(ev) => ev.preventDefault()}"><slot></slot></a>`;
    }

    static get styles() {
        return css`
            :host {
            }

            a, a:link {
                text-decoration: none;
                color: inherit;
            }
        `;
    }

    _mouseoverListener(ev) {
        ev.preventDefault();
        this._trigger();
    }

    _trigger() {
        console.log("<facs-link> %s %o", this.facs, this.coordinates);
        this.emitTo('pb-show-annotation', {
            file: this.facs,
            coordinates: this.coordinates
        });
    }

    /**
     * Fires when mouse hovers a pb-facs-link
     *
     * @event pb-show-annotation
     * @param {String} file - reference to facsimile file
     * @param {String} coordinates to highlight
     */
}
customElements.define('pb-facs-link', PbFacsLink);