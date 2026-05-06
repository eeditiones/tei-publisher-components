import { LitElement, html, css } from 'lit';
import { pbMixin } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { registry } from './urls.js';
import { addSelector } from './pb-toggle-feature.js';

/**
 * Similar to `pb-toggle-feature` but allows you to choose from a list of defined states instead of a simple
 * on/off toggle. Like `pb-toggle-feature` it can change state server-side as well as client-side.
 *
 * The list of states is passed as a JSON array to property `items`:
 *
 * # Server-side
 *
 * Properties to be passed to the server are specified as follows:
 *
 * ```javascript
 * [
 *      {"name": "Diplomatic View", "properties": {"mode": "diplomatic", "view": "page"}},
 *      {"name": "Normalized View", "properties": {"mode": "norm", "view": "single"}}
 * ]
 * ```
 *
 * If the `name` property references the path to a translated label, the translation will be used instead.
 * # Client-side
 *
 * ```javascript
 * [
 *      {"name": "Diplomatic View", "selectors": [{"selector": ".choice,.choice-alternate,br", "state": false},{"selector": ".tei-foreign,pb-highlight,pb-popover", "command": "disable"}]},
 *      {"name": "Normalized View", "selectors": [{"selector": ".choice,.choice-alternate,br", "state": true},{"selector": ".tei-foreign,pb-highlight,pb-popover", "command": "disable"}]},
 *      {"name": "Plain Reading View", "selectors": [{"selector": ".choice,.choice-alternate,br", "state": true}, {"selector": ".tei-foreign,pb-highlight,pb-popover", "command": "disable", "state": true}]}
 * ]
 * ```
 *
 * Each item in the `selectors` property above defines either a state or a command. *state* will simply add
 * a css class `.toggle` to the target element when true. If *command* is set to 'disable', it will entirely disable
 * the functionality of selected elements - provided that they are
 * publisher components implementing the corresponding `command` method of `pb-mixin`.
 *
 * Client-side you may also pass an optional property `"global": true` to toggle the state of elements which reside
 * in the surrounding HTML context below `pb-page` (means: elements which are not inside a `pb-view` or `pb-load`).
 *
 * @fires pb-toggle - Fired when a feature is selected from the dropdown and sends the selected properties
 */
export class PbSelectFeature extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      /**
       * The name of the feature (required). This will correspond to the name of the custom parameter
       * passed to the ODD.
       */
      name: {
        type: String,
      },
      /**
       * The label to display on top of the drop down
       */
      label: {
        type: String,
      },
      selected: {
        type: Number,
      },
      items: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.initializing = true;
    this.items = [];
    this.label = 'document.selectFeature';
  }

  connectedCallback() {
    super.connectedCallback();

    registry.subscribe(this, state => {
      const param = state[this.name];
      if (typeof param !== 'undefined') {
        this.selected = parseInt(param, 10);
      } else {
        this.selected = 0;
      }
      this.requestUpdate();
    });

    const param = registry.state[this.name];
    if (typeof param !== 'undefined') {
      this.selected = parseInt(param, 10);
    } else if (this.items.length > 0) {
      this.selected = 0;
    }

    const newState = {};
    newState[this.name] = this.selected;
    registry.replace(this, newState);

    this.signalReady();
  }

  updated(changed) {
    super.updated(changed);
    if (changed.has('items')) {
      if (!Array.isArray(this.items)) {
        this.items = [];
      }
      if (typeof this.selected !== 'number' || this.selected >= this.items.length) {
        this.selected = this.items.length > 0 ? 0 : null;
      }
    }
  }

  _selectionChanged(event) {
    const current = parseInt(event.target.value, 10);
    if (Number.isNaN(current)) {
      return;
    }
    this.selected = current;

    const refresh = this._saveState(current);
    if (this.initializing) {
      this.initializing = false;
    } else {
      this.emitTo('pb-toggle', { refresh });
    }
  }

  _saveState(currentIndex) {
    const current = currentIndex;

    const state = registry.getState(this);
    state[this.name] = current;
    Object.assign(state, this.items[current].properties);
    if (this.items[current].selectors) {
      if (!state.selectors) {
        state.selectors = [];
      }
      this.items[current].selectors.forEach(config => {
        if (config.global) {
          registry.commit(this, state);
          this.dispatchEvent(
            new CustomEvent('pb-global-toggle', { detail: config, bubbles: true, composed: true }),
          );
        } else {
          addSelector(
            {
              selector: config.selector,
              state: config.state,
              command: config.command,
            },
            state.selectors,
          );
        }
      });
    }
    const entry = this.items[current];
    if (!entry) {
      return false;
    }
    const props = entry.properties || {};
    Object.assign(state, props);
    if (entry.selectors) {
      if (!state.selectors) {
        state.selectors = [];
      }
      entry.selectors.forEach(config => {
        if (config.global) {
          registry.commit(this, state);
          this.dispatchEvent(
            new CustomEvent('pb-global-toggle', { detail: config, bubbles: true, composed: true }),
          );
        } else {
          addSelector(
            {
              selector: config.selector,
              state: config.state,
              command: config.command,
            },
            state.selectors,
          );
        }
      });
    }
    return props && typeof props === 'object';
  }

  render() {
    const items = Array.isArray(this.items) ? this.items : [];
    return html`
      <label class="pb-select-feature__label" for="feature-select">
        ${translate(this.label)}
      </label>
      <select
        id="feature-select"
        class="pb-select-feature__select"
        name=${ifDefined(this.name || undefined)}
        .value=${this.selected == null ? '' : String(this.selected)}
        ?disabled=${this.disabled}
        @change=${this._selectionChanged}
      >
        ${items.map(
          (item, index) => html`<option value="${index}">${translate(item.name)}</option>`,
        )}
      </select>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .pb-select-feature__label {
        display: block;
        margin-bottom: 0.35rem;
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.6);
      }

      .pb-select-feature__select {
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

      .pb-select-feature__select:focus {
        outline: none;
        border-color: #1976d2;
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.16);
      }
    `;
  }
}
customElements.define('pb-select-feature', PbSelectFeature);
