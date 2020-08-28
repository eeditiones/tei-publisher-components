import { LitElement, html, css } from 'lit-element';
import "@polymer/paper-dropdown-menu/paper-dropdown-menu-light";
import "@polymer/paper-listbox";
import "@polymer/paper-item";
import "@polymer/iron-label";
import { translate } from "./pb-i18n.js";
import { pbMixin } from './pb-mixin.js';


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
                type: String
            },
            /**
             * Initial value to select. If not set, no item will be selected
             */
            value: {
                type: String,
                reflect: true
            },
            /**
             * If `multi` is set, specify initial values via this property
             * instead of using `value`
             */
            values: {
                type: Array,
                reflect: true
            },
            /**
             * name used when submitted inside a form
             */
            name: {
                type: String
            },
            /**
             * Optional URL to query for suggestions. If relative, it is interpreted
             * relative to the endpoint defined on a surrounding `pb-page`.
             */
            source: {
                type: String
            },
            multi: {
                type: Boolean
            },
            _items: {
                type: Array
            },
            _selected: {
                type: Array
            },
            ...super.properties
        };
    }

    constructor() {
        super();
        this.value = null;
        this.values = [];
        this._items = [];
        this._selected = [];
    }

    connectedCallback() {
        super.connectedCallback();

        this.subscribeTo('pb-i18n-update', this._refresh.bind(this));
    }

    firstUpdated() {
        super.firstUpdated();

        const slot = this.shadowRoot.querySelector('[name="subform"]');
        if (slot) {
            slot.assignedNodes().forEach((node) => {
                if (this.name) {
                    node.addEventListener('change', this._loadRemote.bind(this));
                }
                const inputs = node.querySelectorAll('[name]');
                inputs.forEach((input) => {
                    input.addEventListener('change', this._loadRemote.bind(this));
                });
            });
        }
        this._loadRemote();
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
            slot.assignedNodes().forEach((node) => {
                node.parentNode.removeChild(node);
            });
        }
    }

    _loadRemote() {
        if (this.source) {
            const base = this.getEndpoint() === '.' ? window.location.href : `${this.getEndpoint()}/`;
            let url = new URL(this.source, base).toString();
            if (url.indexOf('?') > -1) {
                url = `${url}&${this._getParameters()}`;
            } else {
                url = `${url}?${this._getParameters()}`;
            }
            console.log('<pb-select> loading items from %s', url);
            fetch(url, {
                method: 'GET',
                mode: 'cors',
                credentials: 'same-origin'
            })
                .then((response) => response.json())
                .then((json) => {
                    this._clear('slot:not([name])');
                    const items = [];
                    json.forEach((item) => {
                        items.push({label: item.text, value: item.value});
                    });
                    console.log('<pb-select> loaded %d items', items.length);
                    this._items = items;
                })
                .catch(() => {
                    console.error('<pb-select> request to %s failed', url);
                });
        }
    }

    _getParameters() {
        const slot = this.shadowRoot.querySelector('[name="subform"]');
        const params = [];
        if (slot) {
            slot.assignedNodes().forEach((node) => {
                const inputs = node.querySelectorAll('[name]');
                inputs.forEach((input) => {
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
                <paper-listbox id="list" slot="dropdown-content" class="dropdown-content" .selectedValues="${this.values}" ?multi="${this.multi}"
                    attr-for-selected="value" @iron-select="${this._changed}" @iron-deselect="${this._changed}">
                    <slot></slot>
                    ${this._items.map((item) => html`<paper-item value="${item.value}">${item.label}</paper-item>`)}
                </paper-listbox>
                <slot name="output"></slot>
            `;
        }
        return html`
            <slot name="subform"></slot>
            <paper-dropdown-menu-light label="${translate(this.label)}">
                <paper-listbox id="list" slot="dropdown-content" class="dropdown-content" .selected="${this.value}"
                    attr-for-selected="value" @iron-select="${this._changed}">
                    <slot></slot>
                    ${this._items.map((item) => html`<paper-item value="${item.value}">${item.label}</paper-item>`)}
                </paper-listbox>
            </paper-dropdown-menu-light>
            <slot name="output"></slot>
        `;
    }

    _changed() {
        const list = this.shadowRoot.getElementById('list');
        const oldSelected = Array.of(this._selected);
        if (this.multi) {
            this._selected = list.selectedValues;
            this.values = this._selected;
            this.value = undefined;
        } else {
            this._selected = [list.selected];
            this.value = list.selected;
            this.values = [];
        }

        // check if selected items really changed
        if (this._selected.length === oldSelected.length &&
            this._selected.every((val, index) => val === oldSelected[index])) {
            return;
        }
        if(this.multi){
            this._writeHidden();
        }

        this.dispatchEvent(new CustomEvent('change'));
    }

    _writeHidden() {
        this._clear('slot[name="output"]');
        this._selected.forEach((item) => {
            const input = document.createElement('input');
            input.slot = 'output';
            input.type = 'hidden';
            input.name = this.name;
            input.value = item;
            this.appendChild(input);
        });
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }

            iron-label {
                font: var(--pb-base-font);
                font-size: 12px;
                font-weight: 400;
                color: var(--pb-color-lighter);
            }
        `;
    }
}
customElements.define('pb-select', PbSelect);
