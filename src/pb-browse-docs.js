import { LitElement, html, css } from 'lit-element';
import { PbLoad } from './pb-load';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-button';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/paper-listbox';
import '@polymer/paper-dialog';
import '@polymer/iron-ajax';
import '@cwmr/paper-autocomplete/paper-autocomplete-suggestions';

/**
 * Component to browse through a collection of documents with sorting, filtering and facets.
 *
 * @customElement
 * @polymer
 * @demo demo/pb-browse-docs.html
 */
export class PbBrowseDocs extends PbLoad {

    static get properties() {
        return {
            sortBy: {
                type: String,
                attribute: 'sort-by'
            },
            sortOptions: {
                type: Array,
                attribute: 'sort-options'
            },
            sortLabel: {
                type: String,
                attribute: 'sort-label'
            },
            filter: {
                type: String
            },
            filterBy: {
                type: String,
                attribute: 'filter-by'
            },
            filterOptions: {
                type: Array,
                attribute: 'filter-options'
            },
            facets: {
                type: Object
            },
            /** Id of the pb-login element to connect to */
            login: {
                type: String
            },
            /**
             * If set, requires the logged in user to be member of
             * the given group.
             */
            group: {
                type: String
            },
            _file: {
                type: String
            },
            _selected: {
                type: Array
            },
            _allowModification: {
                type: Boolean,
            },
            _suggestions: {
                type: Array
            },
            ...super.properties
        };
    }

    constructor() {
        super();
        this.sortBy = 'default';
        this.sortOptions = [
            {
                label: 'Modification Date',
                value: 'default'
            }
        ];
        this.sortLabel = 'Sort';
        this.filter = '';
        this.filterBy = 'title';
        this.filterOptions = [
            {
                label: 'Title',
                value: 'title'
            }
        ];
        this._allowModification = false;
        this._suggestions = [];
    }

    connectedCallback() {
        super.connectedCallback();

        const sortParam = this.getParameter('sort');
        if (sortParam) {
            this.sortBy = sortParam;
        }

        const filterParam = this.getParameter('filter');
        if (filterParam) {
            this.filter = filterParam;
            this.filterBy = this.getParameter('filterBy', this.filterBy);
        }

        this.facets = this.getParametersMatching(/^facet-.*$/);

        this.subscribeTo('pb-search-resubmit', this._facets.bind(this));
    }

    firstUpdated() {
        this.shadowRoot.getElementById('autocomplete').addEventListener('autocomplete-change', this._autocomplete.bind(this));

        const login = document.getElementById(this.login);
        if (!login) {
            console.error('<pb-browse-docs> connected pb-login element not found!');
        } else {
            this.subscribeTo('pb-login', (ev) => {
                this._allowModification = this._loggedIn(ev.detail.user, ev.detail.group);
            }, []);
            this._allowModification = login.loggedIn && this._loggedIn(login.user, login.groups);
        }
        super.firstUpdated();
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        super.attributeChangedCallback(attr, oldValue, newValue);
        switch (attr) {
            case 'sortBy':
                this._sort(newValue, oldValue);
                break;
        }
    }

    render() {
        return html`
            <div class="toolbar">
                <paper-dropdown-menu id="sort" label="${this.sortLabel}">
                    <paper-listbox selected="${this.sortBy}" slot="dropdown-content" class="dropdown-content" attr-for-selected="value">
                    ${this.sortOptions.map(option =>
            html`<paper-item value="${option.value}">${option.label}</paper-item>`
        )}
                    </paper-listbox>
                </paper-dropdown-menu>
                <div>
                    <paper-dropdown-menu id="filterSelect" label="Filter by">
                        <paper-listbox selected="${this.filterBy}" slot="dropdown-content" class="dropdown-content" attr-for-selected="value">
                        ${this.filterOptions.map(option =>
            html`<paper-item value="${option.value}">${option.label}</paper-item>`
        )}
                        </paper-listbox>
                    </paper-dropdown-menu>
                    <paper-input id="filterString" type="search" name="filter" label="Filter" value="${this.filter}"
                        @keyup="${this._handleEnter}">
                        <iron-icon icon="search" @click="${this._filter}" slot="prefix"></iron-icon>
                    </paper-input>
                    <paper-autocomplete-suggestions id="autocomplete" for="filterString" source="${this._suggestions}" remote-source></paper-autocomplete-suggestions>
                </div>
            </div>
            <div class="toolbar">
                <slot name="toolbar"></slot>
                <paper-button id="delete" title="i18n(delete)" class="${this._canModify(this._allowModification)}">
                    <iron-icon icon="delete"></iron-icon>
                    <span class="label">Delete</span>
                </paper-button>
            </div>
            <slot></slot>
            <slot name="footer"></slot>
            
            <iron-ajax
                id="loadContent"
                verbose
                handle-as="text"
                method="get"
                @response="${this._handleContent}"
                @error="${this._handleError}"></iron-ajax>
            <iron-ajax
                id="autocompleteLoader"
                url="${this.getEndpoint()}/modules/autocomplete.xql"
                verbose
                handle-as="json"
                method="get"
                @response="${this._updateSuggestions}"></iron-ajax>

            <paper-dialog id="deleteDialog">
                <h2>Delete</h2>
                <paper-dialog-scrollable>
                    ${
            this._hasMultipleSelected(this._file, this._selected) ?
                html`<p>Are you sure you want to delete ${this._selected.length} files?</p>` :
                html`<p>Are you sure you want to delete the file ${this._file}?</p>`
            }
                </paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus @click="${this._confirmDelete}">Yes</paper-button>
                    <paper-button dialog-confirm="dialog-cancel">no</paper-button>
                </div>
            </paper-dialog>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;

                --justify-toolbar-content:space-between;
                --display-toolbar:flex;
            }

            .toolbar {
                display: var(--display-toolbar);
                justify-content: var(--justify-toolbar-content);
            }

            [name="toolbar"] {
                flex: 1 0;
            }

            #sort {
                display: block;
            }

            #filterString {
                position: relative;
                display: inline-block;
                vertical-align: bottom;
            }

            .hidden {
                display: none;
            }

            paper-autocomplete-suggestions {
                --suggestions-item: {
                    color: var(--pb-search-suggestions, #000000);
                };
            }

            paper-dropdown-menu, paper-input {
                --paper-input-container-input:{
                    color: var(--pb-search-input, #000000);
                    border: white;
                };
                --paper-input-container-label: {
                    color:var(--pb-search-label, --paper-grey-500);
                };
            }
        `;
    }

    getParameters(params) {
        params.sort = this.sortBy;
        if (this.filter) {
            params.filter = this.filter;
            params.browse = this.filterBy;
        }
        if (this.facets) {
            params = Object.assign(params, this.facets);
        }
        return params;
    }

    /**
     * returns selected documents.
     *
     * @returns {Array}
     */
    getSelected() {
        const selected = [];
        if (this.container) {
            document.querySelectorAll(this.container).forEach((container) =>
                container.querySelectorAll('.document-select paper-checkbox[checked]').forEach((checkbox) => {
                    selected.push(checkbox.value);
                })
            );
        } else {
            this.querySelectorAll('.document-select paper-checkbox[checked]').forEach((checkbox) => {
                selected.push(checkbox.value);
            });
        }
        return selected;
    }

    _filter() {
        this.setParameter('filter', this.filter);
        this.setParameter('filterBy', this.filterBy);
        this.pushHistory('filter docs');

        this.load();
    }

    _sort(newValue, oldValue) {
        if (typeof oldValue == 'undefined' || typeof newValue == 'undefined') {
            return;
        }

        this.setParameter('sort', this.sortBy);
        this.pushHistory('sort docs');

        this.load();
    }

    _facets(ev) {
        if (ev.detail && ev.detail.params) {
            this.clearParametersMatching(/^(all-|facet-).*/);
            for (let param in ev.detail.params) {
                this.setParameter(param, ev.detail.params[param]);
            }
            this.facets = ev.detail.params;
            this.start = 1;
            this.pushHistory('facets');
        }
        this.load();
    }

    _onLoad(content) {
        this.shadowRoot.getElementById('delete').addEventListener('click', this._handleDelete.bind(this));
    }

    _handleDelete(target, ev) {
        const deleteDialog = this.shadowRoot.getElementById('deleteDialog');
        const selected = this.getSelected();
        if (selected.length > 0) {
            this._selected = selected;
            deleteDialog.open();
        }
    }

    _hasMultipleSelected(_file, _selected) {
        return _selected && _selected.length > 0;
    }

    _hasOneSelected(_file, _selected) {
        return _file;
    }

    _confirmDelete() {
        if (!(this._file || this._selected)) {
            return;
        }

        let files;
        if (this._selected) {
            files = this._selected;
        } else {
            files = [this._file];
        }
        console.log('<pb-browse-docs> Deleting %o', this._file);
        const params = {
            action: 'delete',
            'docs[]': files
        };
        this._file = null;
        this._selected = null;
        this.load(params);
    }

    _loggedIn(user, groups) {
        if (user == null) {
            return false;
        }
        if (this.group) {
            if (!groups) {
                return false;
            }
            return groups.indexOf(this.group) > -1;
        }
        return true;
    }

    _canModify(allowModification) {
        return allowModification ? '' : 'hidden';
    }

    _autocomplete(ev) {
        const autocompleteLoader = this.shadowRoot.getElementById('autocompleteLoader');
        autocompleteLoader.params = {
            query: ev.detail.option.text,
            field: this.filterBy
        };
        autocompleteLoader.generateRequest();
    }

    _updateSuggestions() {
        const autocomplete = this.shadowRoot.getElementById('autocomplete');
        const autocompleteLoader = this.shadowRoot.getElementById('autocompleteLoader');
        autocomplete.suggestions(autocompleteLoader.lastResponse);
    }

    _handleEnter(e) {
        if (e.keyCode == 13) {
            this._filter();
        }
    }
}
customElements.define('pb-browse-docs', PbBrowseDocs);