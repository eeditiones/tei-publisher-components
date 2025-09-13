import { LitElement, css, html } from 'lit';
import { pbMixin } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import { themableMixin } from './theming.js';

/**
 * Zoom button to enlarge/shrink the font for the views. This component does not
 * implement any functionality itself, but just emits a `pb-zoom` event.
 *
 * @fires pb-zoom - sends an event for e.g. pb-views to react to
 */
export class PbZoom extends themableMixin(pbMixin(LitElement)) {
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
      <a
        href="#"
        @click="${this._handleClick}"
        title="${this.direction === 'in'
          ? translate('toolbar.zoom.in')
          : translate('toolbar.zoom.out')}"
      >
        <slot name="icon">
          ${this.direction === 'in'
            ? html`
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748ZM10 10V7H12V10H15V12H12V15H10V12H7V10H10Z"
                  ></path>
                </svg>
              `
            : html`
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748ZM7 10H15V12H7V10Z"
                  ></path>
                </svg>
              `}
        </slot>
      </a>
    `;
  }

  static get styles() {
    return css`
      a {
        color: inherit;
        text-decoration: none;
      }
      a:hover {
        color: inherit;
      }
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
