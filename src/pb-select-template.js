import { LitElement, html, css } from 'lit';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import { registry } from './urls.js';

import './pb-fetch.js';

/**
 * `pb-select-template`: Switch between available page templates.
 * It loads the list of templates from `components-list-templates.xql`.
 * Emits a page reload on selection.
 *
 */
export class PbSelectTemplate extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      /** The label to show on top of the dropdown menu */
      label: {
        type: String,
      },
      name: {
        type: String,
      },
      /** Currently selected ODD. If this property is set, the component
       * will immediately load the list of ODDs from the server and select
       * the given ODD.
       */
      template: {
        type: String,
      },
      _templates: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.label = 'document.selectTemplate';
    this.name = '';
    this._templates = [];
  }

  firstUpdated() {
    waitOnce('pb-page-ready', options => {
      this.template = options.template;
      const loader = this.shadowRoot.getElementById('getTemplates');
      if (this.minApiVersion('1.0.0')) {
        loader.url = `${options.endpoint}/api/templates`;
      } else {
        loader.url = `${options.endpoint}/modules/lib/components-list-templates.xql`;
      }

      loader.generateRequest();
    });
  }

  render() {
    return html`
      <label class="pb-select-template__label" for="template-select">
        ${translate(this.label)}
      </label>
      <select
        id="template-select"
        class="pb-select-template__select"
        name="${this.name || ''}"
        @change="${this._selected}"
        .value="${this.template || ''}"
      >
        ${this._templates.map(
          item => html`<option value="${item.name}">${item.title}</option>`,
        )}
      </select>

      <pb-fetch
        id="getTemplates"
        with-credentials
        handle-as="json"
        @response="${this._handleTemplatesResponse}"
        method="GET"
      ></pb-fetch>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .pb-select-template__label {
        display: block;
        margin-bottom: 4px;
        font-weight: 600;
        font-size: 0.95rem;
        color: var(--pb-label-color, #303030);
      }

      .pb-select-template__select {
        width: 100%;
        padding: 8px 12px;
        border-radius: 4px;
        border: 1px solid var(--pb-border-color, #c0c0c0);
        font-size: 1rem;
        background-color: #fff;
        color: inherit;
      }

      .pb-select-template__select:focus {
        outline: none;
        border-color: var(--pb-primary-color, #1976d2);
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.15);
      }
    `;
  }

  _selected() {
    const select = this.shadowRoot.getElementById('template-select');
    if (!select) return;
    const newTemplate = select.value;
    if (newTemplate === this.template) {
      return;
    }
    registry.replace(this, { template: newTemplate });
    window.location.reload();
  }

  _handleTemplatesResponse() {
    const loader = this.shadowRoot.getElementById('getTemplates');
    this._templates = loader.lastResponse || [];
    const select = this.shadowRoot.getElementById('template-select');
    if (select && this.template) {
      select.value = this.template;
    }
  }
}
customElements.define('pb-select-template', PbSelectTemplate);
