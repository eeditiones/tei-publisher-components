import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import { pbHotkeys } from "./pb-hotkeys.js";

/**
 * Navigate backward/forward in a document. This component does not implement any functionality itself.
 * It just sends a `pb-navigate` event when clicked. You may also assign a shortcut key by setting property
 * `keyboard`.
 *
 * @slot - default unnamed slot
 * @fires pb-navigate - Fire event indicating that listening components should navigate in the given direction
 * @fires pb-update - When received, updates the state of navigation buttons (disables when no forward/backward navigation possible)
 */
export class PbNavigation extends pbHotkeys(pbMixin(LitElement)) {

    static get properties() {
        return {
            ...super.properties,
            /**
             * The direction to navigate in, either `forward` or `backward`
             */
            direction: {
                type: String
            },
            /**
             * Register a shortcut key, e.g. 'left' or 'shift+left'
             */
            keyboard: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.direction = 'forward';
        this.disabled = true;
    }

    connectedCallback() {
        super.connectedCallback();

        if (this.keyboard) {
            this.hotkeys = {
                'next': this.keyboard
            }
        }

        this.subscribeTo('pb-update', this._update.bind(this));

        this.registerHotkey('next', () => {
            if (!this.isDisabled()) {
                this.emitTo('pb-navigate', { direction: this.direction });
            }
        });

        this.signalReady();
    }

    _update(ev) {
        if (this.direction === 'forward') {
            if (ev.detail.data.next) {
                this.disabled = false;
            } else {
                this.disabled = true;
            }
        } else if (ev.detail.data.previous) {
            this.disabled = false;
        } else {
            this.disabled = true;
        }
    }

    _handleClick(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        if (!this.isDisabled()) {
            this.emitTo('pb-navigate', { direction: this.direction });
        }
    }

    render() {
        return html`
            <a href="#" @click="${this._handleClick}"><slot></slot></a>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: inline;
            }
            :host([disabled]) {
                display: none;
            }
        `;
    }
}

customElements.define('pb-navigation', PbNavigation);
