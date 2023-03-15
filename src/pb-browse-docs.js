import { html, css } from 'lit-element';
import { PbLoad } from './pb-load.js';
import { waitOnce } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";
import { themableMixin } from "./theming.js";
import { cmpVersion } from './utils.js';
import { registry } from "./urls.js";

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
 * @slot toolbar - toolbar area
 * @slot - unnamed default slot
 * @slot footer - footer area
 * 
 * @fires pb-collection - Sent to inform e.g. pb-upload about current collection
 * @fires pb-search-resubmit - When received, set facet values as received from the event
 * @fires pb-login - When received, refresh the view if the user changed
 * 
 * @cssprop --pb-search-suggestions-background - Background for the autocomplete suggestions for the filter field
 * @cssprop --pb-search-suggestions-color - Text color for the autocomplete suggestion for the filter field
 * @cssprop --pb-search-label-color - Determines the color of small label above the sort by/filter by/filter fields
 * @cssprop --pb-search-input-color - Determines the color of the text in the sort by/filter by/filter fields
 * @cssprop --pb-search-focus-color - Color of the field labels and underline when in focus
 * @cssprop --pb-browse-toolbar-justify-content - How to justify the browse toolbar content, following flexbox justify-content property e.g. center, space-evenly, start...
 * 
 * @csspart delete-button - the delete button
 * @csspart sort-dropdown - dropdown for sorting
 * @csspart filter-dropdown - dropdown for filtering
 * @csspart filter-input - input for filtering
 */
export class PbBrowseDocs extends themableMixin(PbLoad) {

    static get properties() {
        return {
            ...super.properties,
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
            filterPlaceholderLabel: {
                type: String
            },
            collection: {
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
            subforms: {
                type: String
            },
            /**
             * If set, rewrite URLs to load pages as static HTML files,
             * so no TEI Publisher instance is required
             */
            static: {
                type: Boolean
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
            }
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
        this.filterPlaceholderLabel = 'browse.filterPlaceholder';

        this.filterBy = 'title';
        this._allowModification = false;
        this._suggestions = [];

        this.static = false;
    }

    connectedCallback() {
        super.connectedCallback();

        waitOnce('pb-page-ready', () => {
            if (registry.state.sort) {
                this.sortBy = registry.state.sort;
            }

            if (registry.state.filter) {
                this.filter = registry.state.filter;
                this.filterBy = registry.state.filterBy || this.filterBy;
            }

            this.facets = {};
            Object.keys(registry.state).forEach((key) => {
                if (/^facet-.*$/.test(key)) {
                    const param = registry.state[key];
                    if (param) {
                        this.facets.push(param);
                    } else {
                        this.facets[key] = [param];
                    }
                }
            });

            this.collection = registry.state.collection;

            if (this.collection) {
                registry.replace(this, {
                    collection: this.collection
                });
            }
            registry.subscribe(this, (state) => {
                this.collection = state.collection;
                this.load();
            });
        });
        
        this.subscribeTo('pb-search-resubmit', this._facets.bind(this));
        this.subscribeTo('pb-login', (ev) => {
            if (ev.detail.userChanged) {
                this._facets(ev);
            }
        }, []);
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
        waitOnce('pb-page-ready', (options) => {
            const loader = this.shadowRoot.getElementById('autocompleteLoader');
            if (cmpVersion(options.apiVersion, '1.0.0') >= 0) {
                loader.url = `${options.endpoint}/api/search/autocomplete`;
                if (!this.url) {
                    this.url = 'api/collection';
                }
            } else {
                loader.url = `${options.endpoint}/modules/autocomplete.xql`;
                if (!this.url) {
                    this.url = 'collection/';
                }
            }
        });
        this.shadowRoot.getElementById('autocomplete').addEventListener('autocomplete-change', this._autocomplete.bind(this));

        if (this.login) {
            const login = document.getElementById(this.login);
            if (!login) {
                console.error('<pb-browse-docs> connected pb-login element not found!');
            } else {
                this.subscribeTo('pb-login', (ev) => {
                    this._allowModification = this._loggedIn(ev.detail.user, ev.detail.group);
                }, []);
                this._allowModification = login.loggedIn && this._loggedIn(login.user, login.groups);
            }
        }

        this.shadowRoot.getElementById('sort-list').addEventListener('selected-item-changed', this._sort.bind(this));
        this.shadowRoot.getElementById('delete').addEventListener('click', this._handleDelete.bind(this));
        super.firstUpdated();
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
            <slot name="header"></slot>
            <div class="toolbar">
                <paper-dropdown-menu id="sort" label="${translate(this.sortLabel)}" part="sort-dropdown">
                    <paper-listbox id="sort-list" selected="${this.sortBy}" slot="dropdown-content" class="dropdown-content" attr-for-selected="value">
                    ${this.sortOptions.map(option =>
            html`<paper-item value="${option.value}">${translate(option.label)}</paper-item>`
        )}
                    </paper-listbox>
                </paper-dropdown-menu>
                <div>
                    <paper-dropdown-menu id="filterSelect" label="${translate(this.filterByLabel)}" part="filter-dropdown">
                        <paper-listbox id="filter-list" selected="${this.filterBy}" slot="dropdown-content" class="dropdown-content" attr-for-selected="value" @selected-item-changed="${this._filterChanged}">
                        ${this.filterOptions.map(option =>
            html`<paper-item value="${option.value}">${translate(option.label)}</paper-item>`
        )}
                        </paper-listbox>
                    </paper-dropdown-menu>
                    <paper-input id="filterString" type="search" name="filter" label="${translate(this.filterPlaceholderLabel)}" value="${this.filter}"
                        @keyup="${this._handleEnter}" part="filter-input">
                        <iron-icon icon="search" @click="${this._filter}" slot="prefix"></iron-icon>
                    </paper-input>
                    <paper-autocomplete-suggestions id="autocomplete" for="filterString" source="${this._suggestions}" remote-source></paper-autocomplete-suggestions>
                </div>
            </div>
            <div class="toolbar">
                <slot name="toolbar"></slot>
                <paper-button id="delete" part="delete-button" title="${translate('browse.delete')}" class="${this._canModify(this._allowModification)}">
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
                with-credentials
                @response="${this._handleContent}"
                @error="${this._handleError}"></iron-ajax>
            <iron-ajax
                id="autocompleteLoader"
                verbose
                handle-as="json"
                method="get"
                with-credentials
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
            <paper-dialog id="errorDialog">
                <h2>${translate('dialogs.error')}</h2>
                <paper-dialog-scrollable></paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus">
                    ${translate('dialogs.close')}
                    </paper-button>
                </div>
            </paper-dialog>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
                --paper-input-container-color: var(--pb-search-label-color, var(--paper-grey-500, #303030));
                --paper-input-container-input-color: var(--pb-search-input-color, var(--pb-color-primary, #000000));
                --paper-input-container-focus-color: var(--pb-search-focus-color, var(--paper-grey-500, #303030));
            }

            .toolbar {
                display: flex;
                justify-content: var(--pb-browse-toolbar-justify-content);
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
        `;
    }

    getURL(params) {
        if (this.static) {
            // use a static URL
            return `collections/${this.collection ? this.collection + '/' : ''}${params.start || '1'}.html`;
        }
        const url = super.getURL(params);
        return this.collection ? `${url}/${this.collection}` : url;
    }

    prepareParameters(params) {
        params = this._paramsFromSubforms(params);
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
            registry.commit(this, { filter, filterBy })
            this.load();
        }
    }

    _filterChanged() {
        const filterBy = this.shadowRoot.getElementById('filter-list').selected;
        if (filterBy && filterBy !== this.filterBy) {
            console.log('<pb-browse-docs> Filtering on %s', filterBy);
            this.filterBy = filterBy;
        }
    }

    _sort() {
        const sortBy = this.shadowRoot.getElementById('sort-list').selected;
        if (sortBy && sortBy !== this.sortBy) {
            console.log('<pb-browse-docs> Sorting by %s', sortBy);
            this.sortBy = sortBy;
            registry.commit(this, { sort: sortBy })

            this.load();
        }
    }

    _facets(ev) {
        if (ev.detail && ev.detail.params) {
            registry.clearParametersMatching(this, /^(all-|facet-).*/);
            this.facets = ev.detail.params;
            this.start = 1;
            registry.commit(this, ev.detail.params)
        }
        this.load();
    }

    _onLoad(content) {
        window.scrollTo(0, 0);
        const div = content.querySelector('[data-root]');
        const collection = div && div.getAttribute('data-root');
        const writable = div && div.classList.contains('writable');
        this.emitTo('pb-collection', {
            writable,
            collection
        });
        document.querySelectorAll('[can-write]').forEach((elem) => {
            elem.disabled = !writable;
        });
        content.querySelectorAll('[data-collection]').forEach(link => {
            link.addEventListener('click', (ev) => {
                ev.preventDefault();
                this.collection = link.getAttribute('data-collection');
                this.start = 1;
                registry.commit(this, { collection: this.collection });
                console.log('<pb-browse-docs> loading collection %s', this.collection);
                this.load();
            });
        });
    }

    _handleDelete(target, ev) {
        const deleteDialog = this.shadowRoot.getElementById('deleteDialog');
        const selected = this.getSelected();
        if (selected.length > 0) {
            this._selected = selected;
            deleteDialog.open();
        }
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