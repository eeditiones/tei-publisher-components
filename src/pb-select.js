import { LitElement, html, css } from 'lit';
import { translate } from './pb-i18n.js';
import { pbMixin, waitOnce } from './pb-mixin.js';

let elementIdCounter = 0;

/**
 * Replacement for an HTML select element with additional features:
 *
 * 1. item list can be loaded from remote endpoint via AJAX
 * 2. may contain additional nested form in the slot
 *    named `subform`, whose values will be sent with the AJAX request
 *
 * @slot - a static list of paper-item to be shown as options. each paper-item should have a value attribute
 * @slot subform - additional form controls
 * @csspart label - the label shown above a multi-selection box (does not apply to single-selection)
 */
export class PbSelect extends pbMixin(LitElement) {
  static get properties() {
    return {
      /**
       * Label to display above the select or inside if nothing is selected
       */
      label: {
        type: String,
      },
      /**
       * Initial value to select. If not set, no item will be selected
       */
      value: {
        type: String,
        reflect: true,
      },
      /**
       * If `multi` is set, specify initial values via this property
       * instead of using `value`
       */
      values: {
        type: Array,
        reflect: true,
      },
      /**
       * name used when submitted inside a form
       */
      name: {
        type: String,
      },
      /**
       * Optional URL to query for suggestions. If relative, it is interpreted
       * relative to the endpoint defined on a surrounding `pb-page`.
       */
      source: {
        type: String,
      },
      multi: {
        type: Boolean,
      },
      _items: {
        type: Array,
      },
      _selected: {
        type: Array,
      },
      ...super.properties,
    };
  }

  constructor() {
    super();
    this.value = null;
    this.values = [];
    this._items = [];
    this._selected = [];
    this._controlId = `pb-select-${++elementIdCounter}`;
  }

  connectedCallback() {
    super.connectedCallback();

    this.subscribeTo('pb-i18n-update', this._refresh.bind(this));
    // in multi-select mode, copy any value set via 'value' to 'values'
    if (this.multi) {
      if (typeof this.values === 'string') {
        try {
          this.values = JSON.parse(this.values);
        } catch (err) {
          this.values = this.values.split(',').map(item => item.trim());
        }
      }
      if (!Array.isArray(this.values)) {
        this.values = [];
      }
      if (this.values.length === 0 && this.value) {
        this.values = [this.value];
      }
      // delete this.value so it is not picked up by iron-form
      this.value = undefined;
      this._selected = [...this.values];
    }
  }

  firstUpdated() {
    super.firstUpdated();

    const slot = this.shadowRoot.querySelector('[name="subform"]');
    if (slot) {
      slot.assignedNodes().forEach(node => {
        if (this.name) {
          node.addEventListener('change', this._loadRemote.bind(this));
        }
        const inputs = node.querySelectorAll('[name]');
        inputs.forEach(input => {
          input.addEventListener('change', this._loadRemote.bind(this));
        });
      });
    }
    waitOnce('pb-page-ready', () => {
      this._loadRemote();
    });

    this._syncHiddenInputs();
  }

  updated(changedProps) {
    if (changedProps.has('value') || changedProps.has('values')) {
      if (this.multi && !Array.isArray(this.values)) {
        this.values = typeof this.values === 'string' ? [this.values] : [];
      }
      this._syncHiddenInputs();
    }
  }

  _refresh() {
    this.requestUpdate();
  }

  _clear(selector) {
    const slot = this.shadowRoot.querySelector(selector);
    if (slot) {
      slot.assignedNodes().forEach(node => {
        node.parentNode.removeChild(node);
      });
    }
  }

  _loadRemote() {
    if (!this.source) {
      return; // nothing to do
    }

    let url = this.toAbsoluteURL(this.source);
    url += url.includes('?') ? '&' : '?';
    url += this._getParameters();

    console.log('<pb-select> loading items from %s', url);

    fetch(url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
    })
      .then(response => response.json())
      .then(json => {
        this._clear('slot:not([name])');
        const items = json.map(PbSelect.jsonEntry2item);
        console.log('<pb-select> loaded %d items', items.length);
        this._items = items;
      })
      .catch(() => console.error('<pb-select> request to %s failed', url));
  }

  static jsonEntry2item(item) {
    return {
      label: item.text,
      value: item.value,
    };
  }

  _getParameters() {
    const slot = this.shadowRoot.querySelector('[name="subform"]');
    const params = [];
    if (slot) {
      slot.assignedNodes().forEach(node => {
        const inputs = node.querySelectorAll('[name]');
        inputs.forEach(input => {
          params.push(`${input.name}=${encodeURIComponent(input.value)}`);
        });
      });
    }
    return params.join('&');
  }

  render() {
    return html`
      <slot name="subform"></slot>
      <slot hidden></slot>
      ${this.multi
        ? html`
            <label part="label" class="pb-select__label" for="${this._controlId}-multi">
              ${translate(this.label)}
            </label>
            <div class="pb-select__options" id="${this._controlId}-multi">
              ${this._renderOptionsList()}
            </div>
          `
        : html`
            <label part="label" class="pb-select__label" for="${this._controlId}-single">
              ${translate(this.label)}
            </label>
            <select
              id="${this._controlId}-single"
              class="pb-select__select"
              .value=${this.value ?? ''}
              @change=${this._changed}
            >
              ${this._renderSelectOptions()}
            </select>
          `}
      <slot name="output"></slot>
    `;
  }

  _changed(ev) {
    if (!this.multi) {
      const select = this.shadowRoot.getElementById(`${this._controlId}-single`);
      if (!select) return;
      this._selected = [select.value];
      this.value = select.value;
      this._syncHiddenInputs();
      this.dispatchEvent(new CustomEvent('change'));
      return;
    }

    const checkboxes = this.shadowRoot.querySelectorAll('.pb-select__checkbox');
    const selected = [];
    checkboxes.forEach(box => {
      if (box.checked) {
        selected.push(box.value);
      }
    });
    const oldSelected = Array.isArray(this._selected) ? Array.from(this._selected) : [];
    this._selected = selected;
    this.values = [...selected];

    if (
      this._selected.length === oldSelected.length &&
      this._selected.every((val, idx) => val === oldSelected[idx])
    ) {
      return;
    }

    this._syncHiddenInputs();
    this.dispatchEvent(new CustomEvent('change'));
  }

  _renderSelectOptions() {
    const items = [...this._getSlottedItems(), ...this._items];
    if (!items.some(item => item && item.value === '')) {
      items.unshift({ value: '', label: '' });
    }
    return items
      .filter(Boolean)
      .map(item => html`<option value="${item.value}">${item.label}</option>`);
  }

  _renderOptionsList() {
    const currentValues = Array.isArray(this.values) ? this.values : [];
    const items = [...this._getSlottedItems(), ...this._items];
    return items
      .map(item => {
        if (!item.value) {
          return null;
        }
        const checked = currentValues.includes(item.value);
        return html`
          <label class="pb-select__option">
            <input
              class="pb-select__checkbox"
              type="checkbox"
              .value="${item.value}"
              .checked=${checked}
              @change=${this._changed}
            />
            <span>${item.label}</span>
          </label>
        `;
      })
      .filter(Boolean);
  }

  _getSlottedItems() {
    const slot = this.shadowRoot.querySelector('slot:not([name])');
    if (!slot) return [];
    const nodes = slot.assignedNodes({ flatten: true });
    const items = [];
    nodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const value = node.getAttribute('value');
        const label = (node.textContent || '').trim();
        if (value !== null) {
          items.push({ value, label });
        }
      }
    });
    return items;
  }

  _syncHiddenInputs() {
    this._clear('[name="output"]');
    if (!this.name) {
      return;
    }

    const values = this.multi ? (Array.isArray(this.values) ? this.values : []) : [this.value];
    values
      .filter(val => val !== undefined && val !== null && val !== '')
      .forEach(val => {
        const hidden = document.createElement('input');
        hidden.type = 'hidden';
        hidden.name = this.name;
        hidden.value = val;
        hidden.slot = 'output';
        this.appendChild(hidden);
      });
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        position: relative;
        margin-top: 1rem;
      }

      .pb-select__label {
        font: var(--pb-base-font);
        font-size: var(--pb-font-caption);
        font-weight: 600;
        color: var(--pb-label-color, #303030);
        margin-bottom: 4px;
      }

      .pb-select__select {
        width: 100%;
        padding: 8px 12px;
        border-radius: 4px;
        border: 1px solid var(--pb-border-color, #c0c0c0);
        font-size: 1rem;
        background-color: var(--pb-field-bg, #fff);
        color: inherit;
      }

      .pb-select__select:focus {
        outline: none;
        border-color: var(--pb-primary-color, #1976d2);
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.15);
      }

      .pb-select__options {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .pb-select__option {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.95rem;
      }
    `;
  }
}
customElements.define('pb-select', PbSelect);
