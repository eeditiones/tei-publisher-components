import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import "@polymer/paper-listbox";
import "@polymer/paper-item";
import "@polymer/paper-dropdown-menu/paper-dropdown-menu.js";
import "@polymer/iron-ajax";
import "web-animations-js";
import "@polymer/neon-animation";

/**
 * `pb-select-odd`: Switch between available ODDs.
 * It loads the list of ODDs from `components-odd.xql`.
 * Emits a `pb-refresh` event to subscribed views.
 *
 * @fires pb-refresh - Fires a refresh event to subscribed views after a different ODD has been selected for display.
 * @fires pb-update - When received, resets the ODD selected to the one passed in the event
 * 
 */
export class PbSelectOdd extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            /** The label to show on top of the dropdown menu */
            label: {
                type: String
            },
            /** The ODDs to show. */
            odds: {
                type: Array
            },
            name: {
                type: String
            },
            /** Currently selected ODD. If this property is set, the component
             * will immediately load the list of ODDs from the server and select
             * the given ODD.
             */
            odd: {
                type: String,
                notify: true
            }
        };
    }

    constructor() {
        super();

        this.label = 'document.selectODD';
        this.odds = [];
    }

    connectedCallback() {
        super.connectedCallback();

        this.subscribeTo('pb-update', this._onTargetUpdate.bind(this));
    }

    firstUpdated() {
        super.firstUpdated();
        this._refresh();
    }

    render() {
        return html`
            <paper-dropdown-menu id="menu" label="${translate(this.label)}" name="${this.name}">
                <paper-listbox id="odds" slot="dropdown-content" class="dropdown-content" selected="${this.odd}" 
                    attr-for-selected="value" @selected-item-changed="${this._selected}">
                    ${this.odds.map((item) => html`<paper-item value="${item.name}">${item.label}</paper-item>`)}
                </paper-listbox>
            </paper-dropdown-menu>

            <iron-ajax
                id="load"
                verbose
                handle-as="json"
                method="get"
                with-credentials
                @response="${this._update}"></iron-ajax>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }

            paper-dropdown-menu {
                --paper-listbox-background-color: white;
                width: 100%;
            }
        `;
    }

    _selected() {
        const newOdd = this.shadowRoot.getElementById('odds').selected;
        if (newOdd === this.odd) {
            return;
        }
        this.odd = newOdd;
        console.log('<pb-select-odd> Switching to ODD %s', this.odd);
        const doc = this.getDocument();
        if (doc) {
            doc.odd = this.odd;
        }
        this.setParameter('odd', this.odd + '.odd');
        this.pushHistory('changed odd', { odd: this.odd });
        this.emitTo('pb-refresh', {
            odd: this.odd
        });
    }

    _refresh() {
        const load = this.shadowRoot.getElementById('load');
        if (this.minApiVersion('1.0.0')) {
            load.url = `${this.getEndpoint()}/api/odds`;
        } else {
            load.url = `${this.getEndpoint()}/modules/lib/components-list-odds.xql`;
        }
        load.params = { odd: this.odd };
        load.generateRequest();
    }

    _update() {
        const load = this.shadowRoot.getElementById('load');
        this.odds = load.lastResponse;
    }

    _onTargetUpdate(ev) {
        let newOdd = ev.detail.data.odd;
        if (newOdd) {
            newOdd = newOdd.replace(/^(.*?)\.[^\.]+$/, '$1');
        }
        if (newOdd !== this.odd) {
            console.log('<pb-select-odd> Set current ODD from %s to %s', this.odd, newOdd);
        }
        this.odd = newOdd;
    }

}
customElements.define('pb-select-odd', PbSelectOdd);