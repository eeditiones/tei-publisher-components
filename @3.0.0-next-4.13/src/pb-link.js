import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { pbMixin } from './pb-mixin.js';
import { registry } from './urls.js';

/**
 * Create an internal link: clicking it will emit a `pb-refresh`event,
 * causing connected views to update and load the corresponding document fragment defined by the
 * properties.
 *
 * @fires pb-refresh - Fires when user clicks the link
 */
export class PbLink extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      /** Browse to an xml:id within the document */
      xmlId: {
        type: String,
        attribute: 'xml-id',
      },
      /** Browse to an eXist-internal node id, e.g. 3.5.6.1 */
      nodeId: {
        type: String,
        attribute: 'node-id',
        reflect: true,
      },
      hash: {
        type: String,
        reflect: true,
      },
      xpath: {
        type: String,
        reflect: true,
      },
      /** Browse to a different document */
      path: {
        type: String,
      },
      /** Switch the ODD to use for display */
      odd: {
        type: String,
      },
      /** Control the view mode, i.e. 'page', 'div', 'single'  */
      view: {
        type: String,
      },
      /**
       * Additional parameters to be passed in the event details.
       * Should be specified as a JSON object.
       */
      params: {
        type: Object,
      },
      /**
       * Modify browser history: if set, clicking this
       * element will generate a new history entry in the browser's history.
       */
      history: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();
    this.history = true;
    this.params = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this._id = this.nodeId;
    this.subscribeTo('pb-visible', ev => {
      if (this.nodeId) {
        const [root, nodeId] = ev.detail.data.split(/\s*,\s*/);
        if (this.nodeId === root && (!this.hash || this.hash === nodeId)) {
          this.classList.add('active');
          this.scrollIntoView({ block: 'nearest' });
          this.dispatchEvent(
            new CustomEvent('pb-collapse-open', {
              composed: true,
              bubbles: true,
            }),
          );
        } else {
          this.classList.remove('active');
        }
      }
    });
    this._content = this.innerHTML;
    // Clear the original content to prevent duplication
    this.innerHTML = '';
  }

  render() {
    return html`<button @click="${this._onClick}" type="button">
      ${unsafeHTML(this._content)}
    </button>`;
  }

  createRenderRoot() {
    return this;
  }

  _onClick(ev) {
    ev.preventDefault();

    const params = {
      id: null,
      root: null,
    };
    if (this.xmlId) {
      params.id = this.xmlId;
    } else if (this.nodeId) {
      params.root = this.nodeId;
    }
    if (this.path) {
      params.path = this.path;
    }
    if (this.odd) {
      params.odd = this.odd;
    }
    if (this.hash) {
      params.hash = this.hash;
    }
    if (this.view) {
      params.view = this.view;
    }
    if (this.xpath) {
      params.xpath = this.xpath;
    }
    if (this.params) {
      Object.assign(params, this.params);
    }
    if (this.history) {
      registry.commit(this, params);
    }

    this.emitTo('pb-refresh', params);
  }

  /**
   * Fired when user clicks the link
   *
   * @event pb-refresh
   * @param {Object} Parameters as defined in properties
   */
}
customElements.define('pb-link', PbLink);
