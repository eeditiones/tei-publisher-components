import { html, css } from 'lit-element';
import { PbHighlight } from "./pb-highlight.js";


/**
 * Represents a geo location. Extends `pb-highlight`, but sends an additional `pb-geolocation` event
 * on mouseover.
 *
 * @customElement  pb-geolocation
 * @polymer
 * @demo demo/pb-leaflet-map.html
 */
export class PbGeolocation extends PbHighlight {
    static get properties() {
        return {
            longitude: {
                type: Number
            },
            latitude: {
                type: Number
            },
            /**
             * Optional label for the place, e.g. to display a marker
             */
            label: {
                type: String
            },
            ...super.properties
        };
    }

    connectedCallback() {
        super.connectedCallback();

        this.addEventListener('mouseover', () =>
            this.emitTo('pb-geolocation', {
                coordinates: {
                    latitude: this.latitude,
                    longitude: this.longitude
                },
                label: this.label
            })
        );
    }

    render() {
        return html`
            <span id="content"><slot></slot></span>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }

            @keyframes keyFrameBackgroundColorIn {
                0% {
                    background-color: inherit;
                }
                100% {
                    background-color: var(--pb-highlight-color, #F9E976);
                }
            }

            #content {
                display: inline;
            }

            .highlight-on {
                background-color: var(--pb-highlight-color, #F9E976);
                animation-name: keyFrameBackgroundColorIn;
                animation-duration: 500ms;
                animation-iteration-count: 1;
                animation-timing-function: ease-in;

            }

            .highlight-off {
                background-color: inherit;
            }
        `;
    }

    /**
     * Fired on mouseover
     *
     * @event pb-geolocation
     * @param {Object} coordinates an object with two properties: latitude and longitude
     * @param {String} label an optional label for the place
     */
}
customElements.define('pb-geolocation', PbGeolocation);