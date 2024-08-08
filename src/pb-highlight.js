import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin';


/**
 * Link elements to each other: if the user moves the mouse over one element,
 * the others are highlighted by changing their background color. Which elements
 * are linked is determined by the `key` property: elements with the same key
 * are linked. If the user moves the mouse over an element, the key is sent with
 * a `pb-highlight` event. Other elements with the same key react to this event.
 *
 * `pb-highlight` should be output for relevant elements via ODD processing model.
 *
 * 
 *
 * @slot - default unnamed slot for highlight content
 * @fires pb-highlight-off - Fires removal of all highlights that might have existed before
 * @fires pb-highlight-on - Fires highlight event with a key passed to which other pb-highlight elements with the same key will react
 * @fires pb-highlight-off - When received, triggers removal of a highlight that might have been on for this element before
 * @fires pb-highlight-on - When received, switches the highlight on if the same key was received as the current element has
 * @cssprop --pb-highlight-color - Background color to highlight an element
*/
export class PbHighlight extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            /**
             * The key to which this element is connected.
             */
            key: {
                type: String
            },
            /**
             * If set to > 0, specifies a duration (in ms) after which
             * the highlighting will be removed again
             */
            duration: {
                type: Number
            },
            /**
             * Scroll this element into view when it receives a highlight event
             */
            scroll: {
                type: Boolean
            },
            highlightSelf: {
                type: Boolean,
                attribute: 'highlight-self'
            },
            _className: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.key = null;
        this.duration = 0;
        this.scroll = false;
        this.highlightSelf = false;
        this._className = 'highlight-off';
    }

    connectedCallback() {
        super.connectedCallback();
        this.subscribeTo('pb-highlight-on', this._highlightOn.bind(this));
        this.subscribeTo('pb-highlight-off', this._highlightOff.bind(this));
    }

    command(command, state) {
        super.command(command, state);
        if (this.disabled) {
            this._className = 'highlight-off';
        }
    }

    _mouseOver() {
        this.emitTo('pb-highlight-off', {
            source: this
        });
        if (this.highlightSelf) {
            this._highlightOn({ detail: { id: this.key } });
        }
        this.emitTo('pb-highlight-on', {
            id: this.key,
            source: this,
            scroll: this.scroll
        });
    }

    render() {
        if (this.disabled) {
            return html`<slot></slot>`;
        }
        return html`<span id="content" class="${this._className}" @mouseover="${this._mouseOver}"><slot></slot></span>`;
    }

    static get styles() {
        return css`
            :host {
                display: inline;
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

    _highlightOn(ev) {
        if (ev.detail.source != this && ev.detail.id === this.key) {
            this._className = 'highlight-on';
            if (ev.detail.scroll && this.disabled == false) {
                this.scrollIntoView({ block: "center", behaviour: 'smooth' });
            }
            if (this.duration > 0) {
                setTimeout(function () {
                    this._className = 'highlight-off';
                }.bind(this), this.duration);
            }
        }
    }

    _highlightOff(ev) {
        if (ev.detail.source != this) {
            this._className = 'highlight-off';
        }
    }

    /**
     * Fired if mouse pointer enters the element
     *
     * @event pb-highlight-on
     * @param {String} id key
     * @param {Object} source this element
     * @param {scroll} should target scroll to highlighted position
     */

    /**
     * Fired if mouse pointer leaves the element
     *
     * @event pb-highlight-off
     * @param {Object} source this element
     */
}
customElements.define('pb-highlight', PbHighlight);