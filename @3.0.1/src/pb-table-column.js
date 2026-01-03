import { LitElement } from 'lit-element';
import { html } from 'gridjs';
import './pb-popover.js';

/**
 * Defines a column within `pb-table-grid`.
 */
export class PbTableColumn extends LitElement {
  static get properties() {
    return {
      /**
       * Column heading to display
       */
      label: {
        type: String,
      },
      /**
       * Name of the JSON property containing the data
       */
      property: {
        type: String,
      },
      /**
       * Should the column support sorting?
       */
      sort: {
        type: Boolean,
      },
      /**
       * Optional fixed width of the column (e.g. '200px' or '30%')
       */
      width: {
        type: String,
      },
      ...super.properties,
    };
  }

  constructor() {
    super();
    this.label = 'no-label';
    this.property = null;
    this.sort = false;
    this.width = null;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  data() {
    const config = {
      name: html(`<pb-i18n key="${this.label}">${this.label}</pb-i18n>`),
      sort: { enabled: this.sort },
      formatter: cell => html(cell),
    };
    if (this.property) {
      config.id = this.property;
    }
    if (this.width) {
      config.width = this.width;
    }
    return config;
  }
}
customElements.define('pb-table-column', PbTableColumn);
