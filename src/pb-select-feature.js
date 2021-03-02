import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox';
import '@polymer/paper-item';

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
 * a css class `.toggled` to the target element when true. If *command* is set to 'disable', it will entirely disable
 * the functionality of selected elements - provided that they are
 * publisher components implementing the corresponding `command` method of `pb-mixin`.
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
        const param = this.getParameter(this.name);
        if (typeof param !== 'undefined') {
            this.selected = parseInt(param, 10);
        } else if (this.items.length > 0) {
            this.selected = 0;
        }
        this.waitForChannel(() => {
            if (this.selected && this.selected < this.items.length) {
                this._emit('init', this.selected);
            }
            this.initializing = false;
            this.signalReady();
        });
    }

    firstUpdated() {
        super.firstUpdated();

        this.shadowRoot.getElementById('menu').addEventListener('selected-item-changed', this._selectionChanged.bind(this));
    }

    // updated(changedProperties) {
    //     super.updated();
    //     if (changedProperties.has('items')) {
    //         const current = this.shadowRoot.getElementById('list').selectedItem;
    //         if (!current && this.items.length > 0) {
    //             this.selected = 0;
    //             this._emit('refresh');
    //         }
    //         console.log('selected: %o', this.selected);
    //     }
    // }

    _selectionChanged() {
        const current = this.shadowRoot.getElementById('list').selected;
        this.setParameter(this.name, current);
        this.pushHistory('toggle feature ' + this.name);
        console.log('<pb-select-feature> Setting features: %o', this.items[current]);
        this._emit('refresh', current);
    }

    _emit(action, index) {
        const item = this.items[index];
        const params = {
            properties: item.properties || {},
            selectors: item.selectors,
            action
        };
        this.emitTo('pb-toggle', params);
    }

    render() {
        return html`
            <paper-dropdown-menu id="menu" label="${translate(this.label)}" .disabled="${this.disabled}">
                <paper-listbox id="list" slot="dropdown-content" selected="${this.selected}">
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
        `;
    }
}
customElements.define('pb-select-feature', PbSelectFeature);