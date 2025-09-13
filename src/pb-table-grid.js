import { LitElement, html, css } from 'lit';
import { Grid } from 'gridjs';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { resolveURL } from './utils.js';
import { loadStylesheets, importStyles } from './theming.js';
import '@polymer/paper-input/paper-input';
import '@polymer/iron-icons';
import '@polymer/iron-form';
import '@polymer/paper-icon-button';
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
    const table = this.shadowRoot.getElementById('table');

    const pbColumns = this.querySelectorAll('pb-table-column');
    const columns = [];
    pbColumns.forEach(column => columns.push(column.data()));
    waitOnce('pb-page-ready', data => {
      if (data && data.language) {
        this.language = data.language;
      }
      this._params = registry.state;
      const url = this.toAbsoluteURL(this.source);
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
      this.grid.on('load', () => {
        this.emitTo('pb-results-received', {
          params: this._params,
        });
      });

      this.grid.render(table);
    });
  }

  _submit() {
    this.grid.forceRender();
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
                  label="Search"
                  value="${this._params.search || ''}"
                  @keyup="${e => (e.keyCode == 13 ? this._submit() : null)}"
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
      button {
        border: 0;
      }
    `;
  }
}
customElements.define('pb-table-grid', PbTableGrid);
