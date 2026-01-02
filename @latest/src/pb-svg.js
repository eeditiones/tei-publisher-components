import { LitElement, html, css } from 'lit-element';
import '@lrnwebcomponents/es-global-bridge';
import { pbMixin } from './pb-mixin.js';

/**
 * Show an SVG image with zoom and pan functionality. The image URL may
 * either be specified via the `url` property or an `pb-show-annotation` event
 * sent to this component. A relative URL will be resolved against the current API context.
 *
 * @fires pb-show-annotation - When received, loads the image from the URL passed in property `file`
 * within the event
 * @cssprop --pb-svg-height - Height of the SVG element
 * @cssprop --pb-svg-width - Width of the SVG element
 */
export class PbSvg extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      /**
       * The URL to load the SVG from.
       */
      url: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this._pan = null;
  }

  connectedCallback() {
    super.connectedCallback();

    window.ESGlobalBridge.requestAvailability();
    window.ESGlobalBridge.instance.load(
      'svg-pan-zoom',
      `https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js`,
    );

    this.subscribeTo('pb-show-annotation', ev => {
      if (this.url === ev.detail.file) {
        return;
      }
      this.url = ev.detail.file;
    });
  }

  firstUpdated() {
    super.firstUpdated();

    this.container = this.shadowRoot.getElementById('image');
  }

  updated(changed) {
    if (changed.has('url') && this.url && this.url !== changed.get('url')) {
      this.load();
    }
  }

  load() {
    if (!this.url) {
      return;
    }
    const uri = this.toAbsoluteURL(this.url);
    console.log('<pb-svg> Loading %s', uri);
    if (this._pan) {
      this._pan.destroy();
      this._pan = null;
      this.container.innerHTML = '';
    }
    fetch(uri)
      .then(response => response.text())
      .then(data => {
        if (!window.svgPanZoom) {
          console.error('<pb-svg> svgPanZoom not available');
          return;
        }
        const doc = new DOMParser().parseFromString(data, 'image/svg+xml');
        const svg = doc.documentElement;
        this.container.appendChild(svg);
        this._pan = window.svgPanZoom(svg, {
          controlIconsEnabled: true,
          fit: true,
          center: true,
        });
      });
  }

  render() {
    return html`<div id="image"></div>`;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      #image svg {
        height: var(--pb-svg-height, 100%);
        width: var(--pb-svg-width, 100%);
      }
    `;
  }
}
customElements.define('pb-svg', PbSvg);
