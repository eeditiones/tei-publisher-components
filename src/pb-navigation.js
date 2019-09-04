import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin';

/**
 * Navigate backward/forward in a document. This component does not implement any functionality itself.
 * It just sends a `pb-navigate` event when clicked. You may also assign a shortcut key by setting property
 * `keyboard`.
 *
 * @customElement
 * @polymer
 * @appliesMixin pbMixin
 * @demo demo/pb-view.html
 */
export class PbNavigation extends pbMixin(LitElement) {

    static get properties() {
        return {
            /**
             * The direction to navigate in, either `forward` or `backward`
             */
            direction: {
                type: String
            },
            _buttonClass: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.direction = 'forward';
        this._buttonClass = '';
        this.keyPressed = (ev) => this.emitTo('pb-navigate', { direction: this.direction });
    }

    connectedCallback() {
        super.connectedCallback();

        this.subscribeTo('pb-update', this._update.bind(this));
    }

    _update(ev) {
        if (this.direction === 'forward') {
            if (ev.detail.data.next) {
                this._buttonClass = '';
            } else {
                this._buttonClass = 'inactive';
            }
        } else {
            if (ev.detail.data.previous) {
                this._buttonClass = '';
            } else {
                this._buttonClass = 'inactive';
            }
        }
        console.log('button %s: %s', this.direction, this._buttonClass);
    }

    _handleClick() {
        this.emitTo('pb-navigate', { direction: this.direction });
    }

    render() {
        return html`
            <a id="button" @click="${this._handleClick}" class="${this._buttonClass}"><slot></slot></a>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: inline;
            }
            .inactive {
                visibility: hidden;
            }
        `;
    }
}

customElements.define('pb-navigation', PbNavigation);
