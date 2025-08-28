import { LitElement, html } from 'lit-element';
import { pbMixin } from './pb-mixin';
import '@polymer/iron-icons';
import '@polymer/paper-icon-button';

/**
 * Zoom button to enlarge/shrink the font for the views. This component does not
 * implement any functionality itself, but just emits a `pb-zoom` event.
 *
 * @fires pb-zoom - sends an event for e.g. pb-views to react to
 */
export class PbZoom extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      /**
       * The icon to use
       */
      icon: {
        type: String,
      },
      /**
       * Either 'in' or 'out'
       */
      direction: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.icon = 'icons:zoom-in';
    this.direction = 'in';
  }

  connectedCallback() {
    super.connectedCallback();
  }

  _handleClick() {
    this.emitTo('pb-zoom', { direction: this.direction });
  }

  render() {
    return html`
      <paper-icon-button icon="${this.icon}" @click="${this._handleClick}"></paper-icon-button>
    `;
  }

  /**
   * Fired when the user clicks the element.
   *
   * @event pb-zoom
   * @param {String} direction: either 'in' or 'out'
   */
}
customElements.define('pb-zoom', PbZoom);
