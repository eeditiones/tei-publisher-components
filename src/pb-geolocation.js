import { html, css } from 'lit-element';
import { PbHighlight } from "./pb-highlight.js";


/**
 * Represents a geo location. Extends `pb-highlight`, but sends an additional `pb-geolocation` event
 * on mouseover.
 * 
 * For `pb-leaflet-map` to show markers for `pb-geolocation` elements, make sure that map subscribes to the channel
 * into which `pb-geolocation`s emit and that map is loaded before the emitting component, e.g. `pb-view`, by specifying 
 * `wait-for` property
 *
 * @slot - default unnamed slot for content. May also contain an option `<template>` element for content to be shown in a popup
 * @fires pb-geolocation - Sends geocoordinates
 * @cssprop --pb-highlight-color - Background color to highlight an element
 */
export class PbGeolocation extends PbHighlight {
    static get properties() {
        return {
            ...super.properties,
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
            event: {
                type: String
            },
            auto: {
                type: Boolean
            }
        };
    }

    constructor() {
        super();
        this.event = 'mouseover';
        this.auto = false;
    }

    connectedCallback() {
        super.connectedCallback();

        if (this.event) {
            this.addEventListener(this.event, () =>
                this.emitTo('pb-geolocation', {
                    coordinates: {
                        latitude: this.latitude,
                        longitude: this.longitude
                    },
                    label: this.label,
                    popup: this.popup,
                    element: this
                })
            );
        }
        if (this.auto) {
            this.waitForChannel(() => {
                this.emitTo('pb-geolocation', {
                    coordinates: {
                        latitude: this.latitude,
                        longitude: this.longitude
                    },
                    label: this.label,
                    popup: this.popup,
                    element: this
                });
            });
        }
    }

    render() {
        return html`<span id="content"><slot></slot></span>`;
    }

    get popup() {
        const template = this.querySelector('template');
        if (template) {
            const wrapper = document.createElement('div');
            wrapper.appendChild(template.content.cloneNode(true));
            return wrapper;
        }
        return null;
    }

    static get styles() {
        return css`
            :host {
                display: inline;
                cursor: pointer;
            }

            [name="popup"] {
                display: none;
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