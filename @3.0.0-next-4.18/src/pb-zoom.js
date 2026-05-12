import { LitElement, html, css } from 'lit';
import { pbMixin } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import { themableMixin } from './theming.js';

/**
 * Zoom button to enlarge/shrink the font for the views. This component manages
 * the global zoom level by setting CSS custom properties on the document root.
 *
 * @fires pb-zoom - sends an event for e.g. pb-views to react to
 * @cssprop --pb-zoom-factor - the zoom factor, e.g. 1.0 for normal size, 1.5 for 150%, 0.5 for 50%
 * @cssprop --pb-min-zoom - the minimum zoom factor, e.g. 0.5 for 50%
 * @cssprop --pb-max-zoom - the maximum zoom factor, e.g. 3.0 for 300%
 */
export class PbZoom extends themableMixin(pbMixin(LitElement)) {
  static get properties() {
    return {
      ...super.properties,
      /**
       * Either 'in' or 'out'
       */
      direction: {
        type: String,
      },
      /**
       * The current zoom factor
       */
      zoomFactor: {
        type: Number,
        reflect: true,
        attribute: 'zoom-factor',
      },
    };
  }

  constructor() {
    super();
    this.direction = 'in';
    this.zoomFactor = 1.0;
  }

  connectedCallback() {
    super.connectedCallback();
    this._loadZoomPreference();
  }

  _handleClick(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    this.emitTo('pb-zoom', { direction: this.direction });
    this.zoom(this.direction);
  }

  /**
   * Zoom the displayed content by increasing or decreasing font size.
   * Sets the zoom factor on the document root so it applies globally.
   *
   * @param {string} direction either `in` or `out`
   */
  zoom(direction) {
    const currentZoom = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--pb-zoom-factor') || '1',
    );
    const step = 0.1;
    const minZoom = 0.5;
    const maxZoom = 2.0;

    let newZoom =
      direction === 'in'
        ? Math.min(currentZoom + step, maxZoom)
        : Math.max(currentZoom - step, minZoom);

    document.documentElement.style.setProperty('--pb-zoom-factor', newZoom.toString());
    this.zoomFactor = newZoom;

    // Store user preference
    localStorage.setItem('pb-zoom-preference', newZoom.toString());
  }

  /**
   * Load the user's saved zoom preference from localStorage and apply it globally.
   */
  _loadZoomPreference() {
    const savedZoom = localStorage.getItem('pb-zoom-preference');
    if (savedZoom) {
      const zoomValue = parseFloat(savedZoom);
      if (!isNaN(zoomValue)) {
        document.documentElement.style.setProperty('--pb-zoom-factor', zoomValue.toString());
        this.zoomFactor = zoomValue;
      }
    }
  }

  render() {
    return html`
      <button
        type="button"
        @click="${this._handleClick}"
        title="${this.direction === 'in'
          ? translate('toolbar.zoom.in')
          : translate('toolbar.zoom.out')} (current zoom: ${this.zoomFactor.toFixed(1)})"
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
      </button>
    `;
  }

  static get styles() {
    return css`
      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        cursor: pointer;
        min-width: 24px;
        min-height: 24px;
      }
      button:hover {
        color: inherit;
      }
      svg {
        display: block;
        width: 24px;
        height: 24px;
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
