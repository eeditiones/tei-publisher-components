import { LitElement, html, css } from 'lit-element';
import { Grid } from "gridjs";
import { pbMixin } from './pb-mixin.js';
import { resolveURL } from './utils.js';
import '@polymer/paper-input/paper-input';
import '@polymer/iron-icons';
import '@polymer/iron-form';
import '@polymer/paper-icon-button';
import './pb-table-column.js';

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
                type: String
            },
            /**
             * Path to the gridjs theme CSS files.
             */
            cssPath: {
                type: String,
                attribute: 'css-path'
            },
            /**
             * If specified, columns (without a fixed width) will be resizable.
             */
            resizable: {
                type: Boolean
            },
            /**
             * If specified, enable server-side search.
             */
            search: {
                type: Boolean
            },
            _params: {
                type: Object
            },
            ...super.properties
        };
    }

    constructor() {
        super();
        this.cssPath = '../css/gridjs';
        this._params = {};
        this.resizable = false;
        this.search = false;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    firstUpdated() {
        const table = this.shadowRoot.getElementById('table');

        const pbColumns = this.querySelectorAll('pb-table-column');
        const columns = [];
        pbColumns.forEach((column) => columns.push(column.data()));

        PbTableGrid.waitOnce('pb-page-ready', () => {
            const url = this.toAbsoluteURL(this.source);
            const config = {
                columns,
                resizable: this.resizable,
                server: {
                    url,
                    then: data => data.results,
                    total: data => data.count
                },
                sort: {
                    multiColumn: false,
                    server: {
                        url: (prev, cols) => {
                            if (!cols.length) return prev;
                            const col = cols[0];
                            return `${prev}${prev.indexOf('?') > -1 ? '&' : '?'}order=${columns[col.index].id}&dir=${col.direction === 1 ? 'asc' : 'desc'}`;
                        }
                    }
                },
                pagination: {
                    enabled: true,
                    limit: 10,
                    server: {
                        url: (prev, page, limit) => {
                            const params = new URLSearchParams(this._params);
                            params.append('limit', limit);
                            params.append('start', page * limit);
                            return `${prev}${prev.indexOf('?') > -1 ? '&' : '?'}${params.toString()}`;
                        }
                    }
                }
            };
            this.grid = new Grid(config);

            this.grid.render(table);
        });
    }

    _submit() {
        const form = this.shadowRoot.getElementById('form');
        this._params = form.serializeForm();
        this.grid.forceRender();
    }

    render() {
        const themes = resolveURL(this.cssPath);
        return html`
            <link href="${themes}/mermaid.min.css" rel="stylesheet">
            ${ 
                this.search ? html`
                    <iron-form id="form">
                        <form action="">
                            <paper-input id="search" name="search" label="Search" @keyup="${(e) => e.keyCode == 13 ? this._submit() : null}">
                                <paper-icon-button icon="search" @click="${this._submit}" slot="suffix"></paper-icon-button>
                            </paper-input>
                        </form>
                    </iron-form>
                ` : null 
            }
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