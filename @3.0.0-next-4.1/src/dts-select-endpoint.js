import { LitElement, html, css } from 'lit';
import { pbMixin } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import { registry } from './urls.js';

/**
 * A dropdown to select a DTS endpoint from a configured list.
 * The list may either be given as a JSON-formatted string within the
 * `endpoints` property or it can be loaded from a JSON file whose path
 * is specified via the `load` property.
 *
 * The JSON should contain an array of objects, each having an `url` and
 * `title` property.
 *
 * @fires dts-endpoint - Sets the endpoint
 */
export class DtsSelectEndpoint extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      /**
       * The currently selected endpoint. Will be set from URL parameter if present.
       */
      endpoint: {
        type: String,
      },
      label: {
        type: String,
      },
      /**
       * Array of endpoints to select from, each being an object with
       * properties `url` and `title`.
       */
      endpoints: {
        type: Array,
      },
      /**
       * Set to true to automatically select the first endpoint
       */
      auto: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();
    this.endpoints = [];
    this.label = 'dts.endpoint';
  }

  connectedCallback() {
    super.connectedCallback();
    this.endpoint = registry.state.endpoint;
    if (!this.endpoint && this.auto && this.endpoints.length > 0) {
      this.endpoint = this.endpoints[0].url;
    }
  }

  updated(changed) {
    super.updated(changed);
    if (changed.has('endpoints')) {
      if (!Array.isArray(this.endpoints)) {
        this.endpoints = [];
      }
      if (!this.endpoint && this.auto && this.endpoints.length > 0) {
        this.endpoint = this.endpoints[0].url;
      }
    }
  }

  render() {
    return html`
      <label class="dts-select__label" for="dts-select"> ${translate(this.label)} </label>
      <select
        id="dts-select"
        class="dts-select__select"
        name="endpoint"
        .value=${this.endpoint || ''}
        @change=${this._selected}
      >
        ${this.endpoints.map(ep => html`<option value="${ep.url ?? ''}">${ep.title}</option>`)}
      </select>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .dts-select__label {
        display: block;
        margin-bottom: 0.35rem;
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.6);
      }

      .dts-select__select {
        width: 100%;
        min-width: inherit;
        max-width: inherit;
        height: var(--pb-input-height, 48px);
        padding: 0.5rem 0.75rem;
        border: 1px solid rgba(0, 0, 0, 0.16);
        border-radius: 8px;
        background: #fff;
        font: inherit;
        color: inherit;
        appearance: none;
        background-image: linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 0.4) 50%),
          linear-gradient(135deg, rgba(0, 0, 0, 0.4) 50%, transparent 50%),
          linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
        background-position: calc(100% - 18px) calc(0.6em + 2px),
          calc(100% - 13px) calc(0.6em + 2px), calc(100% - 2.5rem) 0.5em;
        background-size: 5px 5px, 5px 5px, 1px 2.25em;
        background-repeat: no-repeat;
        transition: border-color 120ms ease, box-shadow 120ms ease;
      }

      .dts-select__select:focus {
        outline: none;
        border-color: #1976d2;
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.16);
      }
    `;
  }

  _selected(event) {
    const newEndpoint = event.target.value;
    if (!newEndpoint) {
      return;
    }
    const endpoint = this.endpoints.find(endp => endp.url === newEndpoint);
    const committedEndpoint = endpoint ? endpoint.url : newEndpoint;
    registry.commit(this, { endpoint: committedEndpoint });
    console.log('<dts-select-endpoint> Setting endpoint to %s', newEndpoint);
    this.emitTo('dts-endpoint', {
      endpoint: committedEndpoint,
      collection: endpoint ? endpoint.collection : undefined,
      reload: !this.endpoint,
    });
    this.endpoint = committedEndpoint;
  }
}
customElements.define('dts-select-endpoint', DtsSelectEndpoint);
