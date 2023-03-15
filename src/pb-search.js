import { LitElement, html, css } from 'lit-element';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { registry } from "./urls.js";
import { translate } from "./pb-i18n.js";
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-checkbox';
import '@polymer/iron-ajax';
import '@polymer/iron-form';
import '@polymer/paper-button';
import '@polymer/iron-icon';
import '@cwmr/paper-autocomplete';

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
 * @fires pb-search-resubmit - When received, triggers the search again
 */
export class PbSearch extends pbMixin(LitElement) {
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
            this.value = state.query;
            this.start = state.start;
            if (this.submitOnLoad) {
                this.emitTo('pb-load', {
                    "url": this.action,
                    "params": state
                });
            }
        });
    }

    firstUpdated() {
        if (!this.disableAutocomplete) {
            const autocomplete = this.shadowRoot.getElementById('autocomplete');
            autocomplete.addEventListener('autocomplete-change', this._autocomplete.bind(this));
        }
        const ironform = this.shadowRoot.getElementById('ironform');
        ironform.addEventListener('iron-form-response', (event) =>
            event.detail.completes.then((r) => this.emitTo('pb-search', r.parseResponse()))
        );
        waitOnce('pb-page-ready', (options) => {
            const loader = this.shadowRoot.getElementById('autocompleteLoader');
            if (this.minApiVersion('1.0.0')) {
                loader.url = `${options.endpoint}/api/search/autocomplete`;
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
            <iron-form id="ironform" allow-redirect="${this.redirect}">
                <form id="searchPageForm" method="get" action="${this.action}" accept="text/html">
                    <slot name="beforeInput"></slot>
                    <paper-input id="search" type="search" name="query" @keyup="${this._handleEnter}" label="${translate(this.placeHolder)}"
                        value="${this.value}" always-float-label>
                        <iron-icon icon="search" @click="${this._doSearch}" slot="prefix"></iron-icon>
                    </paper-input>
                    <paper-autocomplete-suggestions id="autocomplete" for="search" source="${this._suggestions}" remote-source></paper-autocomplete-suggestions>
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
                --paper-input-container-color: var(--pb-search-label-color, var(--paper-grey-500, #303030));
                --paper-input-container-input-color: var(--pb-search-input-color, var(--pb-color-primary, #000000));
                --paper-input-container-focus-color: var(--pb-search-focus-color, var(--paper-grey-500, #303030));
            }
            a{
                padding:1rem;
                color:var(--pb-reset-color);
            }
            .buttons{
                margin-top:1rem;
            }
        `;
    }

    _doSearch(pagination = false) {
        let json = this.shadowRoot.getElementById('ironform').serializeForm();
        json = this._paramsFromSubforms(json);
        // remove unnecessary param added by autocomplete
        delete json['autocomplete-custom-template'];
        // always start on first result after submitting new search
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

    _reset(){
        this.shadowRoot.getElementById('ironform').reset();
    }

    _autocomplete(ev) {
        const params = this.shadowRoot.getElementById('ironform').serializeForm();
        const loader = this.shadowRoot.getElementById('autocompleteLoader');
        loader.params = params;
        loader.generateRequest();
    }

    _updateSuggestions() {
        const autocomplete = this.shadowRoot.getElementById('autocomplete');
        const loader = this.shadowRoot.getElementById('autocompleteLoader');
        if (loader.lastResponse) {
            autocomplete.suggestions(loader.lastResponse);
        }
    }

}
customElements.define('pb-search', PbSearch);
