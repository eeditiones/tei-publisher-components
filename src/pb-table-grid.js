import { LitElement, html, css } from 'lit';
import { Grid } from 'gridjs';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { resolveURL } from './utils.js';
import { loadStylesheets, importStyles } from './theming.js';
import { translate } from './pb-i18n.js';
import './pb-table-column.js';
import { registry } from './urls.js';

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
export class PbTableGrid extends pbMixin(LitElement) {
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
      _params: {
        type: Object,
      },
      _initialized: {
        type: Boolean,
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
    this.perPage = 10;
    this.height = null;
    this.fixedHeader = false;
    this._initialized = false;
  }

  async connectedCallback() {
    super.connectedCallback();

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
        const needsRefresh = this.language && this.language !== ev.detail.language;
        this.language = ev.detail.language;
        if (needsRefresh) {
          this._submit();
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
    const theme = importStyles(this);
    const sheets = [...this.shadowRoot.adoptedStyleSheets];
    if (gridjsTheme) {
      sheets.push(gridjsTheme);
    }
    if (theme) {
      sheets.push(theme);
    }
    this.shadowRoot.adoptedStyleSheets = sheets;
  }

  firstUpdated() {
    // Initialize after pb-page-ready if available; otherwise fall back to immediate init
    waitOnce('pb-page-ready', data => {
      if (data && data.language) {
        this.language = data.language;
      }
      this._params = registry.state;
      this._initGrid();
    });
    // Fallback: ensure grid is initialized even if pb-page-ready never fires
    requestAnimationFrame(() => this._initGrid());
  }

  _initGrid() {
    if (this._initialized || this.grid) return;
    const table = this.shadowRoot.getElementById('table');
    if (!table) return;

    const pbColumns = this.querySelectorAll('pb-table-column');
    const columns = [];
    pbColumns.forEach(column => columns.push(column.data()));

    const server = (this.getEndpoint && this.getEndpoint()) || '.';
    const url = this.toAbsoluteURL(this.source, server);
    const config = {
      height: this.height,
      fixedHeader: true,
      columns,
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
              columns[col.index].id
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
              Object.assign(this._params, this._serializeSearchForm(form));
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
    this.grid.on('load', () => {
      this.emitTo('pb-results-received', {
        params: this._params,
      });
    });

    this.grid.render(table);
    this._initialized = true;
  }

  _submit() {
    if (this.grid) {
      this.grid.forceRender();
    }
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    this._submit();
  }

  _handleSearchKey(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this._submit();
    }
  }

  _serializeSearchForm(form) {
    const result = {};
    const elements = Array.from(form.elements || []).filter(
      el => el.name && !el.disabled && !el.closest('[disabled]'),
    );
    elements.forEach(element => {
      if (!(element.name in result)) {
        result[element.name] = null;
      }
    });
    const data = new FormData(form);
    data.forEach((value, key) => {
      if (result[key] == null) {
        result[key] = value;
      } else if (Array.isArray(result[key])) {
        result[key].push(value);
      } else {
        result[key] = [result[key], value];
      }
    });
    return result;
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
            <form id="form" action="" @submit=${this._handleFormSubmit}>
              <label class="pb-table-grid__field" for="search">
                <span class="pb-table-grid__label">${translate('search.search')}</span>
                <div class="pb-table-grid__search">
                  <input
                    id="search"
                    class="pb-table-grid__input"
                    type="search"
                    name="search"
                    .value=${this._params.search || ''}
                    placeholder="${translate('search.search')}"
                    @keydown=${this._handleSearchKey}
                  />
                  <button
                    class="pb-button pb-button--icon"
                    type="button"
                    aria-label="${translate('search.search')}"
                    title="${translate('search.search')}"
                    @click=${this._submit}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-.71.71l.27.28v.79l5 5 1.5-1.5-5-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </label>
            </form>
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
      .pb-table-grid__field {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        margin-bottom: 1rem;
      }

      .pb-table-grid__label {
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: rgba(0, 0, 0, 0.6);
      }

      .pb-table-grid__search {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .pb-table-grid__input {
        flex: 1 1 auto;
        height: var(--pb-input-height, 48px);
        padding: 0.5rem 0.75rem;
        border: 1px solid rgba(0, 0, 0, 0.16);
        border-radius: 8px;
        font: inherit;
        color: inherit;
        background: #fff;
        line-height: 1.4;
        transition: border-color 120ms ease, box-shadow 120ms ease;
      }

      .pb-table-grid__input::placeholder {
        color: rgba(0, 0, 0, 0.4);
      }

      .pb-table-grid__input:focus {
        outline: none;
        border-color: #1976d2;
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.16);
      }
    `;
  }
}
customElements.define('pb-table-grid', PbTableGrid);
