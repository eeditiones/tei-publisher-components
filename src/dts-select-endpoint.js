import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox';
import '@polymer/paper-item';
import {registry} from "./urls.js";

/**
 * A dropdown to select a DTS endpoint from a configured list.
 * The list may either be given as a JSON-formatted string within the
 * `endpoints` property or it can be loaded from a JSON file whose path
 * is specified via the `load` property.
 *
 * The JSON should contain an array of objects, each having an `url` and
 * `title` property.
 *
 * @fires dts-endpoint - Sets the endpoint
 */
export class DtsSelectEndpoint extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            /**
             * The currently selected endpoint. Will be set from URL parameter if present.
             */
            endpoint: {
                type: String
            },
            label: {
                type: String
            },
            /**
             * Array of endpoints to select from, each being an object with
             * properties `url` and `title`.
             */
            endpoints: {
                type: Array
            },
            /**
             * Set to true to automatically select the first endpoint
             */
            auto: {
                type: Boolean
            }
        };
    }

    constructor() {
        super();
        this.endpoints = [];
        this.label = 'dts.endpoint';
    }

    connectedCallback() {
        super.connectedCallback();

        // this.endpoint = this.getParameter('endpoint');
        this.endpoint = registry.get(decodeURI('endpoint'));
    }

    updated(changedProperties) {
        super.updated();
        if (changedProperties.has('endpoint')) {
            const item = this.shadowRoot.getElementById('endpoints').selectedItem;
            if (!item && this.auto && this.endpoints.length > 0) {
                this.endpoint = this.endpoints[0].url;
            }
        }
    }

    render() {
        return html`
            <paper-dropdown-menu id="menu" label="${translate(this.label)}">
                <paper-listbox id="endpoints" slot="dropdown-content" class="dropdown-content" selected="${this.endpoint}" attr-for-selected="value"
                    @selected-item-changed="${this._selected}">
                    ${this.endpoints.map((ep) => html`<paper-item value="${ep.url ? ep.url : ''}">${ep.title}</paper-item>`)}
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
        const item = this.shadowRoot.getElementById('endpoints').selectedItem;
        if (!item) {
            return;
        }
        const newEndpoint = item.getAttribute('value');
        if (!newEndpoint) {
            return;
        }
        const endpoint = this.endpoints.find((endp) => endp.url === newEndpoint);

        // this.setParameter('endpoint', endpoint.url);
        // this.pushHistory('dts-endpoint');
        registry.replace(this,{ endpoint:encodeURI(endpoint.url)})

        console.log('<dts-select-endpoint> Setting endpoint to %s', newEndpoint);
        this.emitTo('dts-endpoint', {
            endpoint: endpoint.url,
            collection: endpoint.collection,
            reload: !this.endpoint
        });
        this.endpoint = endpoint.url;
    }
}
customElements.define('dts-select-endpoint', DtsSelectEndpoint);
