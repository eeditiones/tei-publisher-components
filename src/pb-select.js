import { LitElement, html, css } from 'lit-element';
import "@polymer/paper-dropdown-menu/paper-dropdown-menu";
import "@polymer/paper-listbox";
import "@polymer/paper-item";
import { translate } from "./pb-i18n.js";
import { pbMixin } from './pb-mixin.js';


/**
 *
 *
 * @customElement  pb-select
 * @polymer
 * @demo demo/pb-select.html
 * @appliesMixin pbMixin
 */
export class PbSelect extends pbMixin(LitElement) {
    static get properties() {
        return {
            label: {
                type: String
            },
            value: {
                type: String,
                reflect: true
            },
            name: {
                type: String
            },
            source: {
                type: String
            },
            ...super.properties
        };
    }

    constructor() {
        super();
        this._value = null;
    }

    set value(newVal) {
        const oldVal = this._value;
        this._value = newVal;
        if (this._hidden) {
            this._hidden.value = this._value;
        }
        this.requestUpdate('value', oldVal);
    }

    get value() {
        return this._value;
    }

    connectedCallback() {
        super.connectedCallback();

        this._hidden = document.createElement('input');
        this._hidden.type = 'hidden';
        this._hidden.name = this.name;
        this._hidden.value = this.value;
        this._hidden.slot = 'output';
        this.appendChild(this._hidden);
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

    _clear() {
        const slot = this.shadowRoot.querySelector('slot:not([name])');
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
            console.log('Loading data from %s', url);
            fetch(url, {
                method: 'GET',
                mode: 'cors',
                credentials: 'same-origin'
            })
                .then((response) => response.json())
                .then((json) => {
                    this._clear();
                    json.forEach((item) => {
                        const paperItem = document.createElement('paper-item');
                        paperItem.value = item.value;
                        paperItem.innerHTML = item.text;
                        this.appendChild(paperItem);
                    });
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
        return html`
            <slot name="subform"></slot>
            <paper-dropdown-menu label="${translate(this.label)}">
                <paper-listbox id="list" slot="dropdown-content" class="dropdown-content" .selected="${this.value}"
                    attr-for-selected="value" @selected-item-changed="${this._changed}">
                    <slot></slot>
                </paper-listbox>
            </paper-dropdown-menu>
            <slot name="output"></slot>
        `;
    }

    _changed(ev) {
        ev.preventDefault();
        const list = this.shadowRoot.getElementById('list');
        if (this._hidden.value === list.selected) {
            return;
        }
        this._hidden.value = list.selected;
        console.log('selection changed to %s', list.selected);
        this.dispatchEvent(new CustomEvent('change'));
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
        `;
    }
}
customElements.define('pb-select', PbSelect);