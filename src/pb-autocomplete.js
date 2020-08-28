import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin';
import { translate } from './pb-i18n';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-ajax';
import '@polymer/iron-icon';
import '@cwmr/paper-autocomplete/paper-autocomplete-suggestions.js';

/**
 * Provides an input with attached autocomplete. The autocomplete suggestions can be read
 * either from a static list or a remote endpoint to which the current user input is sent.
 * 
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
            /**
             * Name of the form field which will be submitted
             */
            name: {
                type: String
            },
            /**
             * Value of the form field which will be submitted
             */
            value: {
                type: String
            },
            /**
             * Placeholder to display if field is empty
             */
            placeholder: {
                type: String,
                attribute: 'placeholder'
            },
            /**
             * Optional URL to query for suggestions. If relative, it is interpreted
             * relative to the endpoint defined on a surrounding `pb-page`.
             * 
             * Upon autocomplete, the current input by the user will be sent with a query parameter
             * `query`. The name/values of form controls nested within `pb-autocomplete` will also be
             * appended to the request as parameters. This allows the server side code to distinguish
             * different states.
             */
            source: {
                type: String
            },
            /**
             * A static list of suggestions. Use instead of `source`. May either be a flat array of strings,
             * or an array containing objects of the form `{"text": "", "value": ""}, in which case "value" denotes
             * the value to be used when the enclosing form is submitted, and "text" is the label to be displayed.
             */
            suggestions: {
                type: Array
            },
            /**
             * An icon to display next to the input.
             */
            icon: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.placeholder = 'search.placeholder';
        this.suggestions = [];
        this.lastSelected = null;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    firstUpdated() {
        const autocomplete = this.shadowRoot.getElementById('autocomplete'); 
        autocomplete.addEventListener('autocomplete-change', this._autocomplete.bind(this));

        if (this.value) {
            if (this.source) {
                PbAutocomplete.waitOnce('pb-page-ready', () => {
                    this._sendRequest(this.value);
                });
            } else {
                const input = this.shadowRoot.getElementById('search');
                const value = this.suggestions.find((suggestion) => {
                    if (suggestion.text) {
                        return suggestion.value === this.value;
                    }
                    return suggestion === this.value;
                });
                if (value) {
                    input.value = value.text || value;
                }
            }
        }
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
                        };
                    }
                </style>
            </custom-style>
            <slot></slot>
            <paper-input id="search" type="search" name="query" @keyup="${this._handleEnter}" label="${translate(this.placeholder)}"
                always-float-label>
                ${ this.icon ? html`<iron-icon icon="${this.icon}" @click="${this._doSearch}" slot="prefix"></iron-icon>` : null}
            </paper-input>
            <paper-autocomplete-suggestions id="autocomplete" for="search" .source="${this.suggestions}" ?remote-source="${this.source}"
                @autocomplete-selected="${this._autocompleteSelected}"></paper-autocomplete-suggestions>
          
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
        this._sendRequest(search.value);
    }

    _sendRequest(query) {
        const loader = this.shadowRoot.getElementById('autocompleteLoader');
        const base = this.getEndpoint() === '.' ? window.location.href : `${this.getEndpoint()}/`;
        loader.url = new URL(this.source, base).toString();

        const params = this._getParameters();
        params['query'] = query;
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

    _autocompleteSelected(ev) {
        this.lastSelected = ev.detail.text;
        const input = this.shadowRoot.getElementById('search');
        console.log('autocomplete selected %s', ev.detail.text);
        input.value = ev.detail.text;
        this.value = input.value;
    }

   
}
customElements.define('pb-autocomplete', PbAutocomplete);