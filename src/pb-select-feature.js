import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox';
import '@polymer/paper-item';
import { registry } from './urls.js';
import { addSelector } from "./pb-toggle-feature.js";

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
                type: String
            },
            /**
             * The label to display on top of the drop down
             */
            label: {
                type: String
            },
            selected: {
                type: Number
            },
            items: {
                type: Array
            }
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

        PbSelectFeature.waitOnce('pb-page-ready', () => {
            registry.subscribe(this, (state) => {
                const param = state[this.name];
                if (typeof param !== 'undefined') {
                    this.selected = parseInt(param, 10);
                } else {
                    this.selected = 0;
                }
                this.shadowRoot.getElementById('list').selected = this.selected;
            });

            const param = registry.state[this.name];
            if (typeof param !== 'undefined') {
                this.selected = parseInt(param, 10);
            } else if (this.items.length > 0) {
                this.selected = 0;
            }

            this.shadowRoot.getElementById('list').selected = this.selected;

            const newState = {};
            newState[this.name] = this.selected;
            registry.replace(this, newState);

            this.signalReady();
        });
    }

    firstUpdated() {
        super.firstUpdated();

        this.shadowRoot.getElementById('menu').addEventListener('iron-select', this._selectionChanged.bind(this));
    }

    _selectionChanged() {
        const refresh = this._saveState();
        if (this.initializing) {
            this.initializing = false;
        } else {
            this.emitTo('pb-toggle', { refresh });
        }
    }

    _saveState() {
        const current = this.shadowRoot.getElementById('list').selected;

        const state = registry.getState(this);
        state[this.name] = current;
        Object.assign(state, this.items[current].properties);
        if (this.items[current].selectors) {
            if (!state.selectors) {
                state.selectors = [];
            }
            this.items[current].selectors.forEach((config) => {
                if (config.global) {
                    this.dispatchEvent(new CustomEvent('pb-global-toggle', { detail: config, bubbles: true, composed: true }));
                } else {
                    addSelector({
                        selector: config.selector,
                        state: config.state,
                        command: config.command
                    }, state.selectors);
                }
            });
        }
        return this.items[current].properties instanceof Object
    }

    render() {
        return html`
            <paper-dropdown-menu id="menu" label="${translate(this.label)}" .disabled="${this.disabled}">
                <paper-listbox id="list" slot="dropdown-content" .selected="${this.selected}">
                    ${this.items.map((item) => html`<paper-item>${item.name}</paper-item>`)}
                </paper-listbox>
            </paper-dropdown-menu>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }

            #menu {
                width: inherit;
                min-width: inherit;
                max-width: inherit;
            }
        `;
    }
}
customElements.define('pb-select-feature', PbSelectFeature);