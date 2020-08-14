import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin';
import { translate } from './pb-i18n';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-ajax';
import '@polymer/iron-icon';
import '@cwmr/paper-autocomplete/paper-autocomplete-suggestions.js';

/**
 * @cssprop --pb-search-label-color - Color of the label and underline
 * @cssprop --pb-search-input-color - Text color for input field
 * @cssprop --pb-search-focus-color - Color for label and underline if input has focus
 * @cssprop --pb-search-suggestions-color - Color for the labels shown in the suggestions dropdown
 * @cssprop --pb-search-suggestions-background - Background for the suggestions dropdown
 * @slot - default unnamed slot
 */

export class PbAutocomplete extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            name: {
                type: String
            },
            value: {
                type: String
            },
            placeholder: {
                type: String,
                attribute: 'placeholder'
            },
            source: {
                type: String
            },
            suggestions: {
                type: Array
            }
        };
    }

    constructor() {
        super();
        this.value = '';
        this.placeholder = 'search.placeholder';
        this.suggestions = [];
    }

    connectedCallback() {
        super.connectedCallback();
    }

    firstUpdated() {
        const autocomplete = this.shadowRoot.getElementById('autocomplete'); 
        autocomplete.addEventListener('autocomplete-change', this._autocomplete.bind(this));

        this._hiddenInput = document.createElement('input');
        this._hiddenInput.type = 'hidden';
        this._hiddenInput.name = this.name;
        this.appendChild(this._hiddenInput);
    }

    render() {
        return html`
            <custom-style>
                <style>
                    :host {
                        --suggestions-item: {
                            color: var(--pb-search-suggestions-color, black);
                        };
                        --suggestions-wrapper: {
                            background: var(--pb-search-suggestions-background, white);
                        }
                    }
                </style>
            </custom-style>
            <slot></slot>
            <paper-input id="search" type="search" name="query" @keyup="${this._handleEnter}" label="${translate(this.placeholder)}"
                value="${this.value}" always-float-label @change="${this._changed}">
                <iron-icon icon="search" @click="${this._doSearch}" slot="prefix"></iron-icon>
            </paper-input>
            <paper-autocomplete-suggestions id="autocomplete" for="search" .source="${this.suggestions}" ?remote-source="${this.source}"></paper-autocomplete-suggestions>
          
        <iron-ajax
            id="autocompleteLoader"
            verbose
            handle-as="json"
            method="get"
            with-credentials
            @response="${this._updateSuggestions}"></iron-ajax>
    `;

    }

    static get styles() {
        return css`
            :host {
                --paper-input-container-color: var(--pb-search-label-color, var(--paper-grey-500, #303030));
                --paper-input-container-input-color: var(--pb-search-input-color, var(--pb-color-primary, #000000));
                --paper-input-container-focus-color: var(--pb-search-focus-color, var(--paper-grey-500, #303030));

                display: flex;
                align-items: center;
            }

            ::slotted {
                display: block;
                margin-left: 10px;
            }
        `;
    }

    _autocomplete(ev) {
        const search = this.shadowRoot.getElementById('search');
        const loader = this.shadowRoot.getElementById('autocompleteLoader');
        const base = this.getEndpoint() === '.' ? window.location.href : `${this.getEndpoint()}/`;
        loader.url = new URL(this.source, base).toString();

        const params = this._getParameters();
        params['query'] = search.value;
        loader.params = params;
        loader.generateRequest();
    }

    _updateSuggestions() {
        const autocomplete = this.shadowRoot.getElementById('autocomplete');
        const loader = this.shadowRoot.getElementById('autocompleteLoader');
        if (loader.lastResponse) {
            this.suggestions = loader.lastResponse;
            autocomplete.suggestions(this.suggestions);
        }
    }

    _getParameters() {
        const params = {};
        const inputs = this.querySelectorAll('[name]');
        inputs.forEach((input) => {
            params[input.name] = input.value;
        });
        return params;
    }

    _changed() {
        const search = this.shadowRoot.getElementById('search');
        this._hiddenInput.value = search.value;
    }
}
customElements.define('pb-autocomplete', PbAutocomplete);