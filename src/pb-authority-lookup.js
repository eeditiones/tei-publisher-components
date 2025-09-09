import { LitElement, html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { themableMixin } from './theming.js';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import { createConnectors } from './authority/connectors.js';
import './pb-restricted.js';

/**
 * Performs authority lookups via configurable connectors.
 *
 * @fires pb-authority-select - Fired when user selects an entry from the list
 * @fires pb-authority-edit-entity - Fired when user clicks the edit button next to an entry
 * @fires pb-authority-new-entity - Fired when user clicks the add new entity button
 * @fires pb-authority-lookup - When received, starts a lookup using the passed in query string and
 * authority type
 */
export class PbAuthorityLookup extends themableMixin(pbMixin(LitElement)) {
  static get properties() {
    return {
      /**
       * The query string to be sent to the authority
       */
      query: {
        type: String,
        reflect: true,
      },
      /**
       * Enable to alphabetically reorder authority search results by label.
       * Otherwise results are shown as returned by the authority.
       */
      sortByLabel: {
        type: Boolean,
        attribute: 'sort-by-label',
      },
      /**
       * A list of comma-separated stopwords which should be excluded
       * when searching for other occurrences of an authority in the
       * HTML text
       */
      stopwords: {
        type: String,
      },
      /**
       * A list of space- or comma-separated group names, whose members will be
       * allowed to add or edit entries in the local register (if enabled).
       *
       * @default "tei"
       */
      group: {
        type: String,
      },
      /**
       * The authority type to use. Should correspond to a name defined for one of the connectors.
       */
      type: {
        type: String,
        reflect: true,
      },
      /**
       * Do not show occurrences count, which would be fetched from the server.
       */
      noOccurrences: {
        type: Boolean,
        attribute: 'no-occurrences',
      },
      /**
       * Automatically start a lookup when the query parameter is set on initialization.
       */
      autoLookup: {
        type: Boolean,
        attribute: 'auto',
      },
      _results: {
        type: Array,
      },
      ...super.properties,
    };
  }

  constructor() {
    super();
    this.query = '';
    this.type = null;
    this.sortByLabel = false;
    this._results = [];
    this._authorities = {};
    this.noOccurrences = false;
    this.group = 'tei';
  }

  connectedCallback() {
    super.connectedCallback();

    this._stopwordSet = new Set();
    if (this.stopwords) {
      this.stopwords.split(/\s*,\s*/).forEach(sw => this._stopwordSet.add(sw.toLowerCase()));
    }

    this.subscribeTo('pb-authority-lookup', ev => {
      this.query = ev.detail.query;
      this.type = ev.detail.type;
      this._results = [];
      this._query();
    });

    waitOnce('pb-page-ready', () => {
      const connectors = createConnectors(this.getEndpoint(), this);
      connectors.forEach(connector => {
        this._authorities[connector.register] = connector;
      });
      if (this.autoLookup) {
        this._query();
      }
    });

    console.log('<pb-authority-lookup> Registered authorities: %o', this._authorities);
  }

  render() {
    return html`
      <header>
        <input
          id="query"
          type="search"
          placeholder="${translate('annotations.lookup')}"
          .value="${this.query}"
          @input="${e => this._queryChanged(e)}"
          @change="${e => this._queryChanged(e)}"
          aria-label="${translate('annotations.lookup')}"
        />
        ${this._authorities[this.type] && this._authorities[this.type].editable
          ? html`
              <pb-restricted group="${this.group}">
                <button @click="${this._addEntity}" title="${translate('annotations.add-entity')}">
                  <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M256 112v288M400 256H112"
                    />
                  </svg>
                </button>
              </pb-restricted>
            `
          : null}
      </header>
      <slot name="authform"></slot>
      <div id="output">
        <ul part="output">
          ${this._results.map(item => this._formatItem(item))}
        </ul>
      </div>
    `;
  }

  async lookup(register, id, container) {
    if (!id || id === '') {
      console.log('<pb-authority-lookup> Key is empty');
      container.innerHTML = '';
      return Promise.resolve();
    }
    const authority = this._authorities[register];
    console.log(
      '<pb-authority-lookup> Retrieving info for %s from %s using %s',
      id,
      register,
      authority.constructor.name,
    );
    let info = await authority.info(id, container);
    if (info.strings) {
      info = Object.assign(info, {
        strings: info.strings.filter(s => s && !this._stopwordSet.has(s.toLowerCase())),
      });
    }
    return info;
  }

  _formatItem(item) {
    return html`
      <li>
        <div>
          <button @click="${() => this._select(item)}" title="link to">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
              <path
                d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64M163.29 256h187.42"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="36"
              />
            </svg>
          </button>
          ${item.link
            ? html`<a target="_blank" href="${item.link}">${unsafeHTML(item.label)}</a>`
            : html`${unsafeHTML(item.label)}`}
          <div class="badges">
            ${item.occurrences > 0
              ? html`<span class="occurrences badge" part="occurrences">${item.occurrences}</span>`
              : null}
            ${item.provider
              ? html`<span class="source badge" part="source">${item.provider}</span>`
              : null}
            <span class="register badge" part="register">${item.register}</span>
            ${this._authorities[this.type] && this._authorities[this.type].editable
              ? html` <pb-restricted group="${this.group}">
                  <button
                    @click="${() => this._editEntity(item)}"
                    title="${translate('annotations.edit-entity')}"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                      <path
                        d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                      />
                      <path
                        d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z"
                      />
                    </svg>
                  </button>
                </pb-restricted>`
              : null}
          </div>
        </div>
        ${item.details ? html`<div class="details" part="details">${item.details}</div>` : null}
      </li>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
      }

      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }

      header > input {
        flex-grow: 1;
      }

      .link {
        flex-grow: 2;
      }

      #output {
        overflow: auto;
        /*FireFox*/
        scrollbar-width: none;
      }

      #output > ul {
        width: 100%;
        padding: 0;
        list-style: none;
      }

      #output > ul > li {
        border-bottom: 1px solid var(--pb-color-border);
      }

      #output > ul > li > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.125rem;
      }

      #output > ul > li > div > a {
        flex-grow: 2;
      }

      .badges {
        display: inline-flex;
        gap: 0.125rem;
        align-items: center;
      }

      .badge {
        font-size: 0.75rem;
        border-radius: 4px;
        padding: 4px;
        color: var(--pb-color-inverse);
      }

      .source {
        background-color: #637b8c;
      }
      .register {
        background-color: var(--pb-color-lighter, #35424b);
      }
      .occurrences {
        background-color: var(--pb-color-focus, #f6a623);
      }
    `;
  }

  _select(item) {
    const connector = this._authorities[item.register];
    const options = {
      strings: item.strings,
      type: item.register,
      properties: {
        ref: item.id,
      },
    };
    if (connector) {
      connector
        .select(item)
        .then(() => this.emitTo('pb-authority-select', options))
        .catch(e => this.emitTo('pb-authority-error', { status: e.message }));
    } else {
      this.emitTo('pb-authority-select', options);
    }
  }

  _editEntity(item) {
    const connector = this._authorities[item.register];
    if (connector) {
      connector
        .select(item)
        .then(() => this.emitTo('pb-authority-edit-entity', { id: item.id, type: item.register }));
    } else {
      this.emitTo('pb-authority-edit-entity', { id: item.id, type: item.register });
    }
  }

  _queryChanged(e) {
    this._results = [];
    this.query = e.target.value;
    this._query();
  }

  _query() {
    this.emitTo('pb-start-update');
    this._authorities[this.type].query(this.query).then(results => {
      this._occurrences(results.items).then(merged => {
        this._results = merged;
      });
      this.emitTo('pb-end-update');
      // this.shadowRoot.getElementById('query').focus();
    });
  }

  _addEntity() {
    this.emitTo('pb-authority-new-entity', { query: this.query, type: this.type });
  }

  _occurrences(items) {
    if (this.noOccurrences) {
      return Promise.resolve(items);
    }
    const params = new FormData();
    params.append('register', this.type);
    items.forEach(item => {
      params.append('id', item.id);
    });
    return new Promise(resolve => {
      fetch(`${this.getEndpoint()}/api/annotations/occurrences`, {
        method: 'POST',
        body: params,
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          items.forEach(item => {
            if (json[item.id]) {
              item.occurrences = json[item.id];
            } else {
              item.occurrences = 0;
            }
          });
          items.sort((i1, i2) => {
            const d = i2.occurrences - i1.occurrences;
            if (d === 0) {
              if (i1.provider === 'local' && i2.provider !== 'local') {
                return -1;
              }
              if (i2.provider === 'local' && i1.provider !== 'local') {
                return 1;
              }
              return this.sortByLabel ? i1.label.localeCompare(i2.label) : 0;
            }
            return d;
          });
          resolve(items);
        });
    });
  }
}
customElements.define('pb-authority-lookup', PbAuthorityLookup);
