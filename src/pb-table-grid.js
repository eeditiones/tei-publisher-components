import { LitElement, html, css } from 'lit-element';
import { Grid, PluginPosition } from 'gridjs';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { resolveURL } from './utils.js';
import { importStyles, loadStylesheets, themableMixin } from './theming.js';
import '@polymer/paper-input/paper-input';
import '@polymer/iron-icons';
import '@polymer/iron-form';
import '@polymer/paper-icon-button';
import './pb-table-column.js';
import { registry } from './urls.js';
import { get as i18n } from './pb-i18n.js';

/**
 * A table grid based on [gridjs](https://gridjs.io/), which loads its data from a server endpoint
 * specified in `source`. If `source` is a relative URI, it will be resolved relative to the
 * TEI Publisher endpoint.
 *
 * The JSON data returned by the endpoint should be an object with two properties:
 *
 * * `count`: the overall number of rows available on the server
 * * `results`: an array containing each record as an object
 *
 * The parameters send to the server are as follows:
 *
 *
 * Parameter | Description
 * ---------|----------
 * limit | number of records to return for each page
 * start | start offset from which to return records
 * order | the id of the column to sort by
 * dir | sort direction: either 'asc' or 'desc'
 * search | an optional search string entered by the user
 *
 * Table columns are configured via nested `<pb-table-column>` elements:
 *
 * ```html
 * <pb-table-column label="Name" property="name" sort width="33%"></pb-table-column>
 * <pb-table-column label="Born" property="birth"></pb-table-column>
 * <pb-table-column label="Died" property="death"></pb-table-column>
 * ```
 */
export class PbTableGrid extends themableMixin(pbMixin(LitElement)) {
  static get properties() {
    return {
      /**
       * URI of the server-side endpoint to retrieve data from.
       * Relative URIs are resolved relative to the configured TEI Publisher endpoint.
       */
      source: {
        type: String,
      },
      /**
       * Path to the gridjs theme CSS files.
       */
      cssPath: {
        type: String,
        attribute: 'css-path',
      },
      /**
       * If specified, columns (without a fixed width) will be resizable.
       */
      resizable: {
        type: Boolean,
      },
      subforms: {
        type: String,
      },
      perPage: {
        type: Number,
        attribute: 'per-page',
      },
      height: {
        type: String,
      },
      /**
       * If specified, enable server-side search.
       */
      search: {
        type: Boolean,
      },
      /**
       * If specified, render the pagination controls above the table instead of below.
       */
      paginationTop: {
        type: Boolean,
        attribute: 'pagination-top',
      },
      /**
       * Optional list of column ids/properties to show. If empty or undefined, all columns are visible.
       */
      visibleColumns: {
        type: Array,
        attribute: 'visible-columns',
      },
      _params: {
        type: Object,
      },
      ...super.properties,
    };
  }

  constructor() {
    super();
    this.cssPath = '../css/gridjs';
    this._params = {};
    this.resizable = false;
    this.search = false;
    this.paginationTop = false;
    this.perPage = 10;
    this.height = null;
    this.fixedHeader = false;
    this.visibleColumns = null;
    this._pbColumns = [];
    this._columns = [];
    this._selectedRow = null;
    this._gridI18nInitialized = false;
    this._onTableClick = this._onTableClick.bind(this);
    this._onDocumentClick = this._onDocumentClick.bind(this);
  }

  _applyPaginationPosition() {
    if (!this.grid || !this.grid.plugin) {
      return;
    }
    const paginationPlugin = this.grid.plugin.get('pagination');
    if (!paginationPlugin) {
      return;
    }
    paginationPlugin.position = this.paginationTop
      ? PluginPosition.Header
      : PluginPosition.Footer;
  }

  async connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._onDocumentClick);

    this.subscribeTo('pb-search-resubmit', ev => {
      this._submit();
    });

    registry.subscribe(this, state => {
      this._params = state;
      this._submit();
    });

    this.subscribeTo(
      'pb-i18n-update',
      ev => {
        const needsRefresh = this.language !== ev.detail.language;
        this.language = ev.detail.language;
        const needsInitialI18nRefresh = !this._gridI18nInitialized;
        if ((needsRefresh || needsInitialI18nRefresh) && this.grid) {
          this._gridI18nInitialized = true;
          if (needsRefresh) {
            this._applyPaginationPosition();
            this._submit();
          }
        }
      },
      [],
    );

    if (!this.height) {
      const property = getComputedStyle(this).getPropertyValue('--pb-table-grid-height');
      if (property) {
        this.height = property;
      } else {
        this.height = 'auto';
      }
    }

    const gridjsTheme = await loadStylesheets([`${resolveURL(this.cssPath)}/mermaid.min.css`]);
    const sheets = [...this.shadowRoot.adoptedStyleSheets, gridjsTheme];
    // Manually import styles for backwards compatibility with pb-components < 3 importStyles
    // extracts any relevant styling rules to this element and wraps them in `:host`. Which you can
    // (and should) do manually anyway
    const theme = importStyles(this);
    if (theme) {
      sheets.push(theme);
    }

    this.shadowRoot.adoptedStyleSheets = sheets;
  }

  disconnectedCallback() {
    document.removeEventListener('click', this._onDocumentClick);
    super.disconnectedCallback();
  }

  firstUpdated() {
    const table = this.shadowRoot.getElementById('table');
    table.addEventListener('click', this._onTableClick);

    this._pbColumns = Array.from(this.querySelectorAll('pb-table-column'));
    this._columns = this._getColumnsConfig();
    waitOnce('pb-page-ready', data => {
      if (data && data.language) {
        this.language = data.language;
      }
      this._params = registry.state;
      const url = this.toAbsoluteURL(this.source);
      const config = {
        height: this.height,
        fixedHeader: true,
        columns: this._columns,
        language: this._gridLanguageConfig(),
        resizable: this.resizable,
        server: {
          url,
          then: data => data.results,
          total: data => data.count,
        },
        sort: {
          multiColumn: false,
          enabled: true,
          server: {
            url: (prev, cols) => {
              if (!cols.length) return prev;
              const col = cols[0];
              return `${prev}${prev.indexOf('?') > -1 ? '&' : '?'}order=${
                this._columns[col.index].id
              }&dir=${col.direction === 1 ? 'asc' : 'desc'}`;
            },
          },
        },
        pagination: {
          enabled: true,
          limit: this.perPage,
          server: {
            url: (prev, page, limit) => {
              const form = this.shadowRoot.getElementById('form');
              if (form) {
                Object.assign(this._params, form.serializeForm());
              }
              this._params = this._paramsFromSubforms(this._params);
              this._params.limit = limit;
              this._params.start = page * limit + 1;
              if (this.language) {
                this._params.language = this.language;
              }
              registry.commit(this, this._params);

              // copy params and remove null values
              const urlParams = { ...this._params };
              Object.keys(urlParams).forEach(key => {
                if (urlParams[key] === null) {
                  delete urlParams[key];
                }
              });
              return `${prev}${prev.indexOf('?') > -1 ? '&' : '?'}${new URLSearchParams(
                urlParams,
              ).toString()}`;
            },
          },
        },
      };

      this.grid = new Grid(config);
      this._applyPaginationPosition();
      this.grid.on('load', () => {
        this._clearRowSelection();
        if (this.paginationTop) {
          // `forceRender()` can reset GridJS plugin state; re-apply after each load.
          this.grid.plugin.get('pagination').position = PluginPosition.Header;
        }
        this.emitTo('pb-results-received', {
          params: this._params,
        });
        this._applyColumnVisibilityToDom();
      });

      this.grid.render(table);
    });
  }

  updated(changedProperties) {
    if (changedProperties.has('visibleColumns') && this.grid) {
      this._columns = this._getColumnsConfig();
      this._applyColumnVisibilityToDom();
    }
  }

  _visibleColumnsAsSet() {
    return Array.isArray(this.visibleColumns) ? new Set(this.visibleColumns) : null;
  }

  _columnId(pbColumn, config) {
    return config.id || pbColumn.property || pbColumn.label;
  }

  _getColumnsConfig() {
    const visibleSet = this._visibleColumnsAsSet();
    return this._pbColumns.map(pbColumn => {
      const config = pbColumn.data();
      const id = this._columnId(pbColumn, config);
      return visibleSet ? { ...config, hidden: !visibleSet.has(id) } : config;
    });
  }

  _applyColumnVisibilityToDom() {
    const visibleSet = this._visibleColumnsAsSet();
    const table = this.shadowRoot.querySelector('.gridjs-table');
    if (!table) {
      return;
    }
    this._columns.forEach((column, index) => {
      const id = column.id || this._pbColumns[index]?.property || this._pbColumns[index]?.label;
      const hidden = visibleSet ? !visibleSet.has(id) : false;
      const cells = table.querySelectorAll(`th:nth-child(${index + 1}), td:nth-child(${index + 1})`);
      cells.forEach(cell => {
        cell.style.display = hidden ? 'none' : '';
      });
    });
  }

  _onTableClick(event) {
    const row = event.target.closest('tbody tr');
    if (!row) {
      return;
    }
    this._toggleRowSelection(row);
  }

  _onDocumentClick(event) {
    const path = event.composedPath();
    if (!path.includes(this)) {
      this._clearRowSelection();
    }
  }

  _toggleRowSelection(row) {
    if (this._selectedRow === row) {
      this._clearRowSelection();
      return;
    }
    this._clearRowSelection();
    this._selectedRow = row;
    this._selectedRow.classList.add('grid-row-selected');
  }

  _clearRowSelection() {
    if (this._selectedRow) {
      this._selectedRow.classList.remove('grid-row-selected');
      this._selectedRow = null;
    }
  }

  _submit() {
    this.grid.forceRender();
  }

  _gridLanguageConfig() {
    return {
      search: {
        placeholder: () => i18n('tableGrid.searchPlaceholder'),
      },
      sort: {
        sortAsc: () => i18n('tableGrid.sortAsc'),
        sortDesc: () => i18n('tableGrid.sortDesc'),
      },
      pagination: {
        previous: () => i18n('tableGrid.previous'),
        next: () => i18n('tableGrid.next'),
        navigate: (page, pages) =>
          i18n('tableGrid.navigate', {
            page,
            pages,
          }),
        page: page =>
          i18n('tableGrid.page', {
            page,
          }),
        showing: () => i18n('tableGrid.showing'),
        to: () => i18n('tableGrid.to'),
        of: () => i18n('tableGrid.of'),
        results: () => i18n('tableGrid.results'),
      },
      loading: () => i18n('tableGrid.loading'),
      noRecordsFound: () => i18n('tableGrid.noRecordsFound'),
      error: () => i18n('tableGrid.error'),
    };
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

  render() {
    return html`
      ${this.search
        ? html`
            <iron-form id="form">
              <form action="">
                <paper-input
                  id="search"
                  name="search"
                  label="${i18n('tableGrid.search')}"
                  value="${this._params.search || ''}"
                  @keyup="${e => (e.keyCode === 13 ? this._submit() : null)}"
                >
                  <paper-icon-button
                    icon="search"
                    @click="${this._submit}"
                    slot="suffix"
                  ></paper-icon-button>
                </paper-input>
              </form>
            </iron-form>
          `
        : null}
      <div id="table"></div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .grid-row-selected td.gridjs-td {
        background-color: var(--pb-table-grid-selected-row-background-color, #e8f0fe);
      }
      button {
        border: 0;
      }
    `;
  }
}
customElements.define('pb-table-grid', PbTableGrid);
