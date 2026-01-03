import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin';

/**
 * @slot - unnamed default slot for link text
 * @fires pb-show-annotation - Fires when mouse hovers over a pb-facs-link, passing image reference and coordinates that pb-facsimile reacts to
 */
export class PbFacsLink extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      /** URL pointing to the facsimile image to load */
      facs: {
        type: String,
      },
      /** An array of coordinates describing a rectangle to highlight */
      coordinates: {
        type: Array,
      },
      label: {
        type: String,
      },
      order: {
        type: Number,
      },
      /**
       * Type of event which should trigger the facsimile to display.
       * Either 'click' or 'mouseover' (default). */
      trigger: {
        type: String,
      },
      /**
       * If set, trigger a `pb-show-annotation` event as soon as the element is initialized.
       * Use this to make `pb-facsimile` or `pb-svg` switch to the given image/coordinates upon
       * load.
       */
      emitOnLoad: {
        type: Boolean,
        attribute: 'emit-on-load',
      },
    };
  }

  constructor() {
    super();
    this.trigger = 'mouseover';
    this.label = '';
    this.order = Number.POSITIVE_INFINITY;
    this.waitFor = 'pb-facsimile,pb-image-strip,pb-tify';
    this.default = '';
  }

  connectedCallback() {
    super.connectedCallback();

    this.wait(() => {
      this.emitTo('pb-load-facsimile', {
        url: this.getImage(),
        order: this.getOrder(),
        element: this,
      });
    });
  }

  getImage() {
    return this.facs;
  }

  getLabel() {
    return this.label;
  }

  getOrder() {
    return this.order;
  }

  firstUpdated() {
    const link = this.shadowRoot.querySelector('a');
    link.addEventListener(this.trigger, this._linkListener.bind(this));
    if (this.emitOnLoad) {
      this.wait(() => {
        this._trigger();
      });
    }
  }

  render() {
    return html`<a href="javascript:;"><slot>${this.default}</slot></a>`;
  }

  static get styles() {
    return css`
      :host {
      }

      a,
      a:link {
        text-decoration: none;
        color: inherit;
      }
    `;
  }

  _linkListener(ev) {
    ev.preventDefault();
    this._trigger();
  }

  _trigger() {
    console.log('<facs-link> %s %o', this.facs, this.coordinates);
    this.emitTo('pb-show-annotation', {
      element: this,
      file: this.facs,
      order: this.getOrder(),
      coordinates: this.coordinates,
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
