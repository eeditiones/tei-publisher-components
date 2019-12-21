import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox';
import '@polymer/paper-item';

/**
 * A dropdown to select a DTS endpoint from a configured list.
 * The list may either be given as a JSON-formatted string within the
 * `endpoints` property or it can be loaded from a JSON file whose path
 * is specified via the `load` property.
 * 
 * The JSON should contain an array of objects, each having an `url` and
 * `title` property.
 *
 * @customElement  dts-select-endpoint
 * @polymer
 * @demo demo/dts-client.html
 * @appliesMixin pbMixin
 */
export class DtsSelectEndpoint extends pbMixin(LitElement) {
    static get properties() {
        return {
            endpoint: {
                type: String
            },
            label: {
                type: String
            },
            endpoints: {
                type: Array
            },
            load: {
                type: String
            },
            ...super.properties
        };
    }

    constructor() {
        super();
        this.endpoints = [];
    }

    connectedCallback() {
        super.connectedCallback();

        this.endpoint = this.getParameter('endpoint');
        if (this.load) {
            fetch(this.load).then((body) => {
                body.json().then((data) => {
                    this.endpoints = data;
                    if (!this.endpoint) {
                        this.endpoint = this.endpoints[0].url;
                    }
                    this.waitForChannel(() => this._selected());
                });
            }).catch();
        } else {
            this.waitForChannel(() => this._selected());
        }
    }

    render() {
        return html`
            <paper-dropdown-menu id="menu" label="${this.label}">
                <paper-listbox id="endpoints" slot="dropdown-content" class="dropdown-content" selected="${this.endpoint}" attr-for-selected="value"
                    @selected-item-changed="${this._selected}">
                    ${this.endpoints.map((ep) => html`<paper-item value="${ep.url}">${ep.title}</paper-item>`)}
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

    _selected() {
        const newEndpoint = this.shadowRoot.getElementById('endpoints').selected;
        this.setParameter('endpoint', newEndpoint);
        this.pushHistory('dts-endpoint');
        console.log('<dts-select-endpoint> Setting endpoint to %s', newEndpoint);
        this.emitTo('dts-endpoint', {
            endpoint: newEndpoint,
            reload: !this.endpoint
        });
        this.endpoint = newEndpoint;
    }
}
customElements.define('dts-select-endpoint', DtsSelectEndpoint);