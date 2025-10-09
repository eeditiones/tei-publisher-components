import { html, css } from 'lit';
import { PbLoad } from './pb-load.js';
import { waitOnce } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import { themableMixin } from './theming.js';
import { cmpVersion } from './utils.js';
import { registry } from './urls.js';
import './pb-icon.js';
import './pb-dialog.js';
import './pb-autocomplete.js';

import './pb-fetch.js';

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
        attribute: 'sort-by',
      },
      sortOptions: {
        type: Array,
        attribute: 'sort-options',
      },
      sortLabel: {
        type: String,
      },
      filter: {
        type: String,
      },
      filterBy: {
        type: String,
        attribute: 'filter-by',
      },
      filterOptions: {
        type: Array,
        attribute: 'filter-options',
      },
      filterByLabel: {
        type: String,
      },
      filterPlaceholderLabel: {
        type: String,
      },
      collection: {
        type: String,
      },
      facets: {
        type: Object,
      },
      /** Id of the pb-login element to connect to */
      login: {
        type: String,
      },
      /**
       * If set, requires the logged in user to be member of
       * the given group.
       */
      group: {
        type: String,
      },
      subforms: {
        type: String,
      },
      /**
       * If set, rewrite URLs to load pages as static HTML files,
       * so no TEI Publisher instance is required
       */
      static: {
        type: Boolean,
      },
      _file: {
        type: String,
      },
      _selected: {
        type: Array,
      },
      _allowModification: {
        type: Boolean,
      },
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
        value: 'title',
      },
    ];
    this.filterByLabel = 'browse.filter';
    this.filterPlaceholderLabel = 'browse.filterPlaceholder';

    this.filterBy = 'title';
    this._allowModification = false;

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
      // registry get state by regex
      // this.facets = registry.getParametersMatching(this, /^facet-.*$/)
      Object.keys(registry.state).forEach(key => {
        if (/^facet-.*$/.test(key)) {
          const param = registry.state[key];
          if (this.facets[key]) {
            this.facets[key].push(param);
          } else if (Array.isArray(param)) {
            this.facets[key] = param;
          } else {
            this.facets[key] = [param];
          }
        }
      });

      this.collection = registry.state.collection;

      if (this.collection) {
        registry.replace(this, {
          collection: this.collection,
        });
      }
      registry.subscribe(this, state => {
        this.collection = state.collection;
        this.load();
      });
    });

    this.subscribeTo('pb-search-resubmit', this._facets.bind(this));
    this.subscribeTo(
      'pb-login',
      ev => {
        if (ev.detail.userChanged) {
          this._facets(ev);
        }
      },
      [],
    );
    this.subscribeTo(
      'pb-i18n-update',
      () => {
        this.requestUpdate();
      },
      [],
    );
  }

  firstUpdated() {
    waitOnce('pb-page-ready', options => {
      const autocomplete = this.shadowRoot.getElementById('filterString');
      let autocompleteUrl;
      if (cmpVersion(options.apiVersion, '1.0.0') >= 0) {
        autocompleteUrl = `${options.endpoint}/api/search/autocomplete`;
        if (!this.url) {
          this.url = 'api/collection';
        }
      } else {
        autocompleteUrl = `${options.endpoint}/modules/autocomplete.xql`;
        if (!this.url) {
          this.url = 'collection/';
        }
      }
      if (autocomplete) {
        autocomplete.source = autocompleteUrl;
        autocomplete.substring = true;
        autocomplete.requestParams = { field: this.filterBy };
      }
    });

    const autocomplete = this.shadowRoot.getElementById('filterString');
    if (autocomplete) {
      autocomplete.addEventListener('pb-autocomplete-selected', this._handleAutocompleteSelected.bind(this));
      autocomplete.addEventListener('pb-autocomplete-input', this._handleAutocompleteInput.bind(this));
    }

    const sortSelect = this.shadowRoot.getElementById('sortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', this._sort.bind(this));
    }

    if (this.login) {
      const login = document.getElementById(this.login);
      if (!login) {
        console.error('<pb-browse-docs> connected pb-login element not found!');
      } else {
        this.subscribeTo(
          'pb-login',
          ev => {
            this._allowModification = this._loggedIn(ev.detail.user, ev.detail.group);
          },
          [],
        );
        this._allowModification = login.loggedIn && this._loggedIn(login.user, login.groups);
      }
    }
    this.shadowRoot
      .getElementById('delete')
      .addEventListener('click', this._handleDelete.bind(this));
    super.firstUpdated();
  }

  render() {
    return html`
      <slot name="header"></slot>
      <div class="toolbar toolbar--primary">
        <div class="toolbar__group">
          <label class="field">
            <span class="field__label">${translate(this.sortLabel)}</span>
            <select
              id="sortSelect"
              class="field__select"
              @change="${this._sort}"
              .value=${this.sortBy || ''}
            >
              ${this.sortOptions.map(
                option => html`<option value="${option.value}">${translate(option.label)}</option>`,
              )}
            </select>
          </label>
        </div>
        <div class="toolbar__group toolbar__group--filter">
          <label class="field">
            <span class="field__label">${translate(this.filterByLabel)}</span>
            <select
              id="filterSelect"
              class="field__select"
              @change="${this._filterChanged}"
              .value=${this.filterBy || ''}
            >
              ${this.filterOptions.map(
                option => html`<option value="${option.value}">${translate(option.label)}</option>`,
              )}
            </select>
          </label>
          <div class="filter-control">
            <pb-autocomplete
              id="filterString"
              class="filter-control__input"
              name="filter"
              .value=${this.filter || ''}
              placeholder="${translate(this.filterPlaceholderLabel)}"
              icon="search"
              @keydown=${this._handleEnter}
            ></pb-autocomplete>
            <button
              class="pb-button pb-button--icon filter-control__submit"
              type="button"
              @click=${this._filter}
              aria-label="${translate('browse.filter')}"
              title="${translate('browse.filter')}"
            >
              <pb-icon icon="search" decorative></pb-icon>
            </button>
          </div>
        </div>
      </div>
      <div class="toolbar toolbar--secondary">
        <slot name="toolbar"></slot>
        <button
          id="delete"
          part="delete-button"
          type="button"
          class="pb-button pb-button--text ${this._canModify(this._allowModification)}"
          title="${translate('browse.delete')}"
        >
          <pb-icon icon="delete" decorative></pb-icon>
          <span class="label">${translate('browse.delete')}</span>
        </button>
      </div>
      <slot></slot>
      <slot name="footer"></slot>

      <pb-fetch
        id="loadContent"
        verbose
        handle-as="text"
        method="get"
        with-credentials
        @response="${this._handleContent}"
        @error="${this._handleError}"
      ></pb-fetch>
      <pb-dialog id="deleteDialog" title="${translate('browse.delete')}">
        <p>
          ${translate('browse.confirmDeletion', {
            count: this._selected ? this._selected.length : 0,
          })}
        </p>
        <div slot="footer" class="buttons">
          <button
            class="pb-button pb-button--text"
            type="button"
            autofocus
            @click="${this._confirmDelete}"
          >
            ${translate('dialogs.yes')}
          </button>
          <button
            class="pb-button pb-button--text"
            type="button"
            rel="prev"
          >
            ${translate('dialogs.no')}
          </button>
        </div>
      </pb-dialog>
      <pb-dialog id="errorDialog" title="${translate('dialogs.error')}">
        <p id="errorMessage"></p>
        <div slot="footer">
          <button class="pb-button pb-button--text" type="button" rel="prev">
            ${translate('dialogs.close')}
          </button>
        </div>
      </pb-dialog>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .toolbar {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: flex-end;
        justify-content: var(--pb-browse-toolbar-justify-content, space-between);
        margin-bottom: 1rem;
      }

      .toolbar--secondary {
        align-items: center;
      }

      .toolbar__group {
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .toolbar__group--filter {
        flex: 1 1 320px;
        justify-content: flex-end;
      }

      .field {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        min-width: 160px;
      }

      .field__label {
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.6);
      }

      .field__select {
        appearance: none;
        min-width: 160px;
        padding: 0.45rem 2.25rem 0.45rem 0.75rem;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.16);
        background-image: linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 0.5) 50%),
          linear-gradient(135deg, rgba(0, 0, 0, 0.5) 50%, transparent 50%),
          linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
        background-position: calc(100% - 18px) calc(1em + 2px),
          calc(100% - 13px) calc(1em + 2px), calc(100% - 2.5rem) 0.5em;
        background-size: 5px 5px, 5px 5px, 1px 2.25em;
        background-repeat: no-repeat;
        font: inherit;
        color: inherit;
        line-height: 1.2;
      }

      .field__select:focus {
        outline: none;
        border-color: #1976d2;
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.16);
      }

      .filter-control {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1 1 280px;
      }

      .filter-control__input {
        flex: 1 1 auto;
      }

      .filter-control__submit {
        margin-bottom: 4px;
      }

      .filter-control__submit pb-icon {
        --pb-icon-size: 1.25rem;
      }

      [name='toolbar'] {
        flex: 1 0;
      }

      .hidden {
        display: none !important;
      }
    `;
  }

  getURL(params) {
    if (this.static) {
      // use a static URL
      return `collections/${this.collection ? `${this.collection}/` : ''}${
        params.start || '1'
      }.html`;
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
      document.querySelectorAll(this.subforms).forEach(form => {
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
      document.querySelectorAll(this.container).forEach(container =>
        container.querySelectorAll('.document-select input[type="checkbox"]:checked').forEach(checkbox => {
          selected.push(checkbox.value);
        }),
      );
    } else {
      this.querySelectorAll('.document-select input[type="checkbox"]:checked').forEach(checkbox => {
        selected.push(checkbox.value);
      });
    }
    return selected;
  }

  _filter() {
    const filterInput = this.shadowRoot.getElementById('filterString');
    const filterSelect = this.shadowRoot.getElementById('filterSelect');
    const filter = filterInput ? filterInput.value : this.filter;
    const filterBy = filterSelect ? filterSelect.value : this.filterBy;
    if (typeof filter !== 'undefined') {
      console.log('<pb-browse-docs> Filter by %s', filter);
      this.filter = filter;
      registry.commit(this, { filter, filterBy });
      this.load();
    }
  }

  _filterChanged(ev) {
    const filterSelect = ev?.target ?? this.shadowRoot.getElementById('filterSelect');
    const filterBy = filterSelect ? filterSelect.value : null;
    if (filterBy && filterBy !== this.filterBy) {
      console.log('<pb-browse-docs> Filtering on %s', filterBy);
      this.filterBy = filterBy;
      const autocomplete = this.shadowRoot.getElementById('filterString');
      if (autocomplete) {
        autocomplete.requestParams = { field: this.filterBy };
      }
    }
  }

  _sort(ev) {
    const sortSelect = ev?.target ?? this.shadowRoot.getElementById('sortSelect');
    const sortBy = sortSelect ? sortSelect.value : null;
    if (sortBy && sortBy !== this.sortBy) {
      console.log('<pb-browse-docs> Sorting by %s', sortBy);
      this.sortBy = sortBy;
      registry.commit(this, { sort: sortBy });

      this.load();
    }
  }

  _facets(ev) {
    if (ev.detail && ev.detail.params) {
      registry.clearParametersMatching(this, /^(all-|facet-).*/);
      this.facets = ev.detail.params;
      this.start = 1;
      registry.commit(this, ev.detail.params);
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
      collection,
    });
    document.querySelectorAll('[can-write]').forEach(elem => {
      elem.disabled = !writable;
    });
    content.querySelectorAll('[data-collection]').forEach(link => {
      link.addEventListener('click', ev => {
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
      deleteDialog.openDialog();
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
      'docs[]': files,
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

  _handleAutocompleteInput(ev) {
    const detail = ev.detail || {};
    const value = detail.value ?? detail.text ?? '';
    this.filter = value;
  }

  _handleAutocompleteSelected(ev) {
    const detail = ev.detail || {};
    const value = detail.value ?? detail.text ?? '';
    this.filter = value;
    this._filter();
  }

  _handleEnter(e) {
    const key = e.key || e.code || e.keyCode;
    if (key === 'Enter' || key === 'NumpadEnter' || key === 13) {
      this._filter();
    }
  }
}
customElements.define('pb-browse-docs', PbBrowseDocs);
