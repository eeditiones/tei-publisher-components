import { html, css } from 'lit-element';
import { PbLoad } from './pb-load.js';
import { translate } from "./pb-i18n.js";
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox';
import '@polymer/paper-dialog';
import '@polymer/paper-dialog-scrollable';
import '@polymer/iron-ajax';
import '@cwmr/paper-autocomplete/paper-autocomplete-suggestions.js';

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
                type: String
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
            filterByLabel: {
                type: String
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
        this.sortOptions = [];
        this.sortLabel = 'browse.sort';
        this.sortBy = 'default';
        this.filter = '';
        this.filterOptions = [
            {
                label: 'Title',
                value: 'title'
            }
        ];
        this.filterByLabel = 'browse.filter';
        this.filterBy = 'title';
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
        document.addEventListener('pb-i18n-update', () => {
            // clear paper-listbox selection after language updates
            const lb = this.shadowRoot.getElementById('sort-list');
            let old = lb.selected;
            lb.selected = undefined;
            lb.selected = old;

            const fl = this.shadowRoot.getElementById('filter-list');
            old = fl.selected;
            fl.selected = undefined;
            fl.selected = old;
        });
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

        this.shadowRoot.getElementById('sort-list').addEventListener('selected-item-changed', this._sort.bind(this));
        super.firstUpdated();
    }

    render() {
        return html`
            <div class="toolbar">
                <paper-dropdown-menu id="sort" label="${translate(this.sortLabel)}">
                    <paper-listbox id="sort-list" selected="${this.sortBy}" slot="dropdown-content" class="dropdown-content" attr-for-selected="value">
                    ${this.sortOptions.map(option =>
            html`<paper-item value="${option.value}">${translate(option.label)}</paper-item>`
        )}
                    </paper-listbox>
                </paper-dropdown-menu>
                <div>
                    <paper-dropdown-menu id="filterSelect" label="${translate(this.filterByLabel)}">
                        <paper-listbox id="filter-list" selected="${this.filterBy}" slot="dropdown-content" class="dropdown-content" attr-for-selected="value">
                        ${this.filterOptions.map(option =>
            html`<paper-item value="${option.value}">${translate(option.label)}</paper-item>`
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
                <paper-button id="delete" title="${translate('browse.delete')}" class="${this._canModify(this._allowModification)}">
                    <iron-icon icon="delete"></iron-icon>
                    <span class="label">${translate('browse.delete')}</span>
                </paper-button>
            </div>
            <slot></slot>
            <slot name="footer"></slot>
            
            <iron-ajax
                id="loadContent"
                verbose
                handle-as="text"
                method="get"
                withCredentials
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
                <h2>${translate('browse.delete')}</h2>
                <paper-dialog-scrollable>
                    <p>${translate('browse.confirmDeletion', { count: (this._selected ? this._selected.length : 0) })}</p>
                </paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus @click="${this._confirmDelete}">${translate('dialogs.yes')}</paper-button>
                    <paper-button dialog-confirm="dialog-cancel">${translate('dialogs.no')}</paper-button>
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

    prepareParameters(params) {
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
        const filter = this.shadowRoot.getElementById('filterString').value;
        const filterBy = this.shadowRoot.getElementById('filter-list').selected;
        if (typeof filter !== 'undefined') {
            console.log('<pb-browse-docs> Filter by %s', filter);
            this.filter = filter;
            this.setParameter('filter', filter);
            this.setParameter('filterBy', filterBy);
            this.pushHistory('filter docs');

            this.load();
        }
    }

    _sort() {
        const sortBy = this.shadowRoot.getElementById('sort-list').selected;
        if (sortBy && sortBy !== this.sortBy) {
            console.log('<pb-browse-docs> Sorting by %s', sortBy);
            this.sortBy = sortBy;
            this.setParameter('sort', sortBy);
            this.pushHistory('sort docs');

            this.load();
        }
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