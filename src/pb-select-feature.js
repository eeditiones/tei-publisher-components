import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox';
import '@polymer/paper-item';

/**
 *
 *
 * @customElement  pb-select-feature
 * @polymer
 * @demo demo/pb-select-feature.html
 * @appliesMixin pbMixin
 */
export class PbSelectFeature extends pbMixin(LitElement) {
    static get properties() {
        return {
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
            },
            ...super.properties
        };
    }

    constructor() {
        super();
        this.initializing = true;
        this.items = [];
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

        this.shadowRoot.getElementById('list').addEventListener('selected-changed', this._selectionChanged.bind(this));
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
        console.log('<pb-select-feature> Setting features: %o', this.items[current].properties);
        this._emit('refresh', current);
    }

    _emit(action, index) {
        console.log('<pb-select-feature> Emitting %s', action);
        const params = {
            properties: this.items[index].properties,
            action
        };
        this.emitTo('pb-toggle', params);
    }

    render() {
        return html`
            <paper-dropdown-menu id="menu" label="${this.label}">
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