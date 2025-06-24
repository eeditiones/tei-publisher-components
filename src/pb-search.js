import { LitElement, html, css } from 'lit-element';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { registry } from "./urls.js";
import { translate } from "./pb-i18n.js";
import '@polymer/iron-ajax';
import '@polymer/iron-form';
import '@polymer/iron-icon';
import {themableMixin} from "./theming.js";

/**
 * Implements a basic search form, which can be extended with additional inputs.
 *
 * @cssprop --pb-search-label-color - Color of the label and underline
 * @cssprop --pb-search-input-color - Text color for input field
 * @cssprop --pb-search-focus-color - Color for label and underline if input has focus
 * @cssprop --pb-search-suggestions-color - Color for the labels shown in the suggestions dropdown
 * @cssprop --pb-search-suggestions-background - Background for the suggestions dropdown
 * @slot - default unnamed slot
 * @slot - beforeInput renders content before the actual search input field
 * @slot - searchButton allows to plug a component that acts as submit button. Must support the 'click' event
 * @slot - resetButton allows to plug a component that acts as reset button. Must support the 'click' event
 * @fires pb-load - Fired to perform the actual search with parameters passed to the request
 * @fires pb-paginate - When received, triggers the search again with the new value of the start property
 * @fires pb-search-resubmit - When received, triggers the search again
 */
export class PbSearch extends themableMixin(pbMixin(LitElement)) {
    static get properties() {
        return {
            ...super.properties,
            action: {
                type: String
            },
            name: {
                type: String
            },
            value: {
                type: String
            },
            start: {
                type: Number
            },
            placeHolder: {
                type: String,
                attribute: 'place-holder'
            },
            redirect: {
                type: Boolean
            },
            currentDoc: {
                type: String,
                attribute: 'current-doc'
            },
            submitOnLoad: {
                type: Boolean,
                attribute: 'submit-on-load'
            },
            subforms: {
                type: String
            },
            disableAutocomplete: {
                type: Boolean,
                attribute: 'disable-autocomplete'
            },
            /**
             * Optional URL to query for suggestions. If relative, it is interpreted
             * relative to the endpoint defined on a surrounding `pb-page`.
             *
             * Upon autocomplete, the current input by the user will be sent with a query parameter
             * `query`. The name/values of form controls nested within `pb-search` or subforms will also be
             * appended to the request as parameters. This allows the server side code to distinguish
             * different states.
             */
            source: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.name = 'query';
        this.value = '';
        this.redirect = false;
        this.submitOnLoad = false;
        this.placeHolder = 'search.placeholder';
        this.disableAutocomplete = false;
        this.start = 1;
    }

    connectedCallback() {
        super.connectedCallback();

        this.subscribeTo('pb-search-resubmit', this._doSearch.bind(this));
        this.subscribeTo('pb-paginate', (ev) => {
            this.start = ev.detail.params.start;
            this._doSearch(true);
        });

        registry.subscribe(this, (state) => {
            this.value = state.query || '';
            this.start = state.start || 1;
            if (this.submitOnLoad) {
                this.emitTo('pb-load', {
                    "url": this.action,
                    "params": state
                });
            }
        });
    }

    firstUpdated() {
        const ironform = this.shadowRoot.getElementById('ironform');
        ironform.addEventListener('iron-form-response', (event) =>
            event.detail.completes.then((r) => this.emitTo('pb-search', r.parseResponse()))
        );
        waitOnce('pb-page-ready', (options) => {
            const loader = this.shadowRoot.getElementById('autocompleteLoader');
            const url = this.source || "api/search/autocomplete";
            if (this.minApiVersion('1.0.0')) {
                loader.url = `${options.endpoint}/${url}`;
            } else {
                loader.url = `${options.endpoint}/modules/autocomplete.xql`;
            }
        });

        if (this.submitOnLoad) {
            const params = registry.state;
            registry.replace(this, params);
            this.emitTo('pb-load', {
                "url": this.action,
                "params": params
            });
        }

        this.addEventListener('click', (e) => {
            const root = e.target.closest('[slot]');
            if (!root) {
                return;
            }
            if (root.slot === 'searchButton'){
                this._doSearch();
            }
            if (root.slot === 'resetButton'){
                this._reset();
            }
        });
    }

    render() {
        return html`
            <iron-form id="ironform" allow-redirect="${this.redirect}">
                <form id="searchPageForm" method="get" action="${this.action}" accept="text/html">
                    <slot name="beforeInput"></slot>
                    <div class="input-wrapper">
                        <span class="icon" @click="${this._doSearch}">&#128269;</span>
                        <input
                            id="search"
                            name="query"
                            type="search"
                            placeholder="${translate(this.placeHolder)}"
                            .value="${this.value}"
                            @keyup="${this._handleEnter}"
                            list="suggestions"
                        />
                        <datalist id="suggestions"></datalist>
                    </div>
                    <slot></slot>
                    <slot name="searchButton"></slot>
                    <slot name="resetButton"></slot>
                </form>
            </iron-form>
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
                --input-label-color: var(--pb-search-label-color, #303030);
                --input-color: var(--pb-search-input-color, #000);
                --input-focus-color: var(--pb-search-focus-color, #303030);
            }
            .input-wrapper {
                display: flex;
                align-items: center;
                border-bottom: 1px solid var(--input-label-color);
            }
            input[type="search"] {
                flex: 1;
                border: none;
                outline: none;
                font-size: 1rem;
                color: var(--input-color);
                background: transparent;
                padding: 0.5rem;
            }
            input[type="search"]:focus {
                border-bottom: 2px solid var(--input-focus-color);
            }
            .icon {
                padding: 0 0.5rem;
                cursor: pointer;
            }
        `;
    }

    _doSearch(pagination = false) {
        let json = this.shadowRoot.getElementById('ironform').serializeForm();
        json = this._paramsFromSubforms(json);
        delete json['autocomplete-custom-template'];
        json.start = pagination ? this.start : 1;
        if (this.redirect) {
            window.location.href = `${this.action}?${new URLSearchParams(json)}`;
        } else {
            registry.commit(this, json);
            this.emitTo('pb-load', {
                "url": this.action,
                "params": json
            });
        }
    }

    _paramsFromSubforms(params) {
        if (this.subforms) {
            document.querySelectorAll(this.subforms).forEach((form) => {
                if (form.serializeForm) {
                    Object.assign(params, form.serializeForm());
                }
            });
        }
        return params;
    }

    _handleEnter(e) {
        if (e.keyCode === 13) {
            this._doSearch();
        }
    }

    _doSubmit() {
        this.shadowRoot.getElementById('ironform').submit();
    }

    _reset() {
        console.log('reset')
        this.shadowRoot.getElementById('ironform').reset();
        const params = registry.state;
        console.log('reset',params)

        registry.commit(this, {},true);

    }

    _updateSuggestions() {
        const loader = this.shadowRoot.getElementById('autocompleteLoader');
        const datalist = this.shadowRoot.getElementById('suggestions');
        if (loader.lastResponse) {
            datalist.innerHTML = '';
            loader.lastResponse.forEach(item => {
                const option = document.createElement('option');
                option.value = item;
                datalist.appendChild(option);
            });
        }
    }
}
if (!customElements.get('pb-search')) {
    customElements.define('pb-search', PbSearch);
}

