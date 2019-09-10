import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-ajax';
import '@polymer/iron-form';
import '@polymer/iron-icon';
import '@cwmr/paper-autocomplete';
import '@polymer/paper-checkbox';

/**
 * Implements a basic search form, which can be extended with additional inputs.
 *
 * @customElement
 * @polymer
 * @demo demo/pb-search.html
 * @appliesMixin pbMixin
 */
export class PbSearch extends pbMixin(LitElement) {
    static get properties() {
        return {
            action: {
                type: String
            },
            value: {
                type: String
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
            ...super.properties
        };
    }

    constructor() {
        super();
        this.value = '';
        this.redirect = false;
        this.submitOnLoad = false;
    }

    connectedCallback() {
        super.connectedCallback();

        this.subscribeTo('pb-search-resubmit', this._doSearch.bind(this));
    }

    firstUpdated() {
        const autocomplete = this.shadowRoot.getElementById('autocomplete');
        autocomplete.addEventListener('autocomplete-change', this._autocomplete.bind(this));
        const ironform = this.shadowRoot.getElementById('ironform');
        ironform.addEventListener('iron-form-response', (event) =>
            event.detail.completes.then((r) => this.emitTo('pb-search', r.parseResponse()))
        );

        if (this.submitOnLoad) {
            const params = this.getParameters();
            this.emitTo('pb-load', {
                "url": this.action,
                "params": params
            });
        }
    }

    render() {
        return html`
            <iron-form id="ironform" allow-redirect="${this.redirect}">
                <form id="searchPageForm" method="get" action="${this.action}" accept="text/html">
                    <paper-input id="search" type="search" name="query" @keyup="${this._handleEnter}" label="${this.placeHolder}"
                        value="${this.value}" always-float-label>
                        <iron-icon icon="search" @click="${this._doSearch}" slot="prefix"></iron-icon>
                    </paper-input>
                    <paper-autocomplete-suggestions id="autocomplete" for="search" source="${this._suggestions}" remote-source></paper-autocomplete-suggestions>
                    <slot></slot>
                    <input type="hidden" name="doc">
                </form>
            </iron-form>
            <iron-ajax
                id="autocompleteLoader"
                url="${this.getEndpoint()}/modules/autocomplete.xql"
                verbose
                handle-as="json"
                method="get"
                @response="${this._updateSuggestions}"></iron-ajax>
        `;
    }

    static get styles() {
        return css`
            paper-input {
                --paper-input-container-input:{
                    color: var(--pb-search-input, #000000);
                    border: white;
                };
                --paper-input-container-label: {
                    color:var(--pb-search-label, --paper-grey-500);
                };
            }
            paper-autocomplete-suggestions {
                --suggestions-item: {
                    color: var(--pb-search-suggestions, #000000);
                };
            }
        `;
    }

    _doSearch(ev) {
        const json = this.shadowRoot.getElementById('ironform').serializeForm();
        // always start on first result after submitting new search
        json.start = 1;
        if (this.redirect) {
            this._doSubmit();
        } else {
            this.setParameters(json);
            this.pushHistory('search');
            this.emitTo('pb-load', {
                "url": this.action,
                "params": json
            });
        }
    }

    _handleEnter(e) {
        if (this.shadowRoot.getElementById('search').value.length != 0 && e.keyCode == 13) {
            this._doSearch();
        }
    }

    _doSubmit() {
        this.shadowRoot.getElementById('ironform').submit();
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

    /**
     * Fired to perform the actual search
     *
     * @event pb-load
     * @param {object} Parameters to be passed to the request
     */
}
customElements.define('pb-search', PbSearch);