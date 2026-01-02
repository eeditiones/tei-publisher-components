import { LitElement, html, css } from 'lit-element';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/paper-listbox';
import '@polymer/paper-item';
import '@polymer/iron-label/iron-label.js';
import { translate } from './pb-i18n.js';
import { pbMixin, waitOnce } from './pb-mixin.js';

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
    this._inIronForm = false;
  }

  connectedCallback() {
    super.connectedCallback();

    this.subscribeTo('pb-i18n-update', this._refresh.bind(this));
    // in multi-select mode, copy any value set via 'value' to 'values'
    if (this.multi) {
      if (this.values.length === 0 && this.value) {
        this.values = [this.value];
      }
      // delete this.value so it is not picked up by iron-form
      this.value = undefined;
    }
  }

  firstUpdated() {
    super.firstUpdated();

    this._inIronForm = this.closest('iron-form, pb-search,pb-custom-form');

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
  }

  _refresh() {
    const listbox = this.shadowRoot.getElementById('list');
    if (listbox) {
      setTimeout(() => {
        const old = listbox.selected;
        listbox.selected = undefined;
        listbox.selected = old;
      });
    }
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
    if (this.multi) {
      return html`
        <slot name="subform"></slot>
        <iron-label for="list" part="label">${translate(this.label)}</iron-label>
        ${this.multi
          ? html`<paper-listbox
              id="list"
              slot="dropdown-content"
              class="dropdown-content"
              .selectedValues="${this.values}"
              multi
              attr-for-selected="value"
              @iron-select="${this._changed}"
              @iron-deselect="${this._changed}"
            >
              <slot></slot>
              ${this._items.map(
                item => html`<paper-item value="${item.value}">${item.label}</paper-item>`,
              )}
            </paper-listbox>`
          : html`<paper-listbox
              id="list"
              slot="dropdown-content"
              class="dropdown-content"
              .selected="${this.value}"
              attr-for-selected="value"
              @iron-select="${this._changed}"
              @iron-deselect="${this._changed}"
            >
              <slot></slot>
              ${this._items.map(
                item => html`<paper-item value="${item.value}">${item.label}</paper-item>`,
              )}
            </paper-listbox>`}
        <slot name="output"></slot>
      `;
    }
    return html`
      <slot name="subform"></slot>
      <paper-dropdown-menu label="${translate(this.label)}">
        <paper-listbox
          id="list"
          slot="dropdown-content"
          class="dropdown-content"
          .selected="${this.value}"
          attr-for-selected="value"
          @iron-select="${this._changed}"
        >
          <slot></slot>
          ${this._items.map(
            item => html`<paper-item value="${item.value}">${item.label}</paper-item>`,
          )}
        </paper-listbox>
      </paper-dropdown-menu>
      <slot name="output"></slot>
    `;
  }

  _changed() {
    const list = this.shadowRoot.getElementById('list');
    const oldSelected = Array.of(this._selected);
    if (this.multi) {
      this._selected = list.selectedValues;
      this.values = this._selected;
    } else {
      this._selected = [list.selected];
      this.value = list.selected;
    }

    // check if selected items really changed
    if (
      this._selected.length === oldSelected.length &&
      this._selected.every((val, index) => val === oldSelected[index])
    ) {
      return;
    }

    if (!this._inIronForm || this.multi) {
      this._clear('[name="output"]');

      const vals = this.multi ? this.values : [this.value];
      vals.forEach(val => {
        const hidden = document.createElement('input');
        hidden.type = 'hidden';
        hidden.name = this.name;
        hidden.value = val;
        hidden.slot = 'output';
        this.appendChild(hidden);
      });
    }
    this.dispatchEvent(new CustomEvent('change'));
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        position: relative;
        margin-top: 1rem;
      }

      iron-label {
        font: var(--pb-base-font);
        font-size: var(--pb-font-caption);
        font-weight: 400;
        color: var(--pb-color-lighter);
      }

      paper-listbox {
        overflow: auto;
      }
    `;
  }
}
customElements.define('pb-select', PbSelect);
