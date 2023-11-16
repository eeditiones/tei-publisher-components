import { LitElement, html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";
import { createConnectors } from "./authority/connectors.js";
import '@polymer/paper-input/paper-input';
import '@polymer/paper-icon-button';

/**
 * Performs authority lookups via configurable connectors.
 * 
 * @fires pb-authority-select - Fired when user selects an entry from the list
 * @fires pb-authority-edit-entity - Fired when user clicks the edit button next to an entry
 * @fires pb-authority-new-entity - Fired when user clicks the add new entity button
 * @fires pb-authority-lookup - When received, starts a lookup using the passed in query string and 
 * authority type
 */
export class PbAuthorityLookup extends pbMixin(LitElement) {
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
        attribute: 'sort-by-label'
      },
      /**
       * A list of comma-separated stopwords which should be excluded
       * when searching for other occurrences of an authority in the
       * HTML text
       */
      stopwords: {
        type: String
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
  }

  connectedCallback() {
    super.connectedCallback();

    this._stopwordSet = new Set();
    if (this.stopwords) {
      this.stopwords.split(/\s*,\s*/).forEach((sw) => this._stopwordSet.add(sw.toLowerCase()));
    }

    this.subscribeTo('pb-authority-lookup', ev => {
        this.query = ev.detail.query;
        this.type = ev.detail.type;
        this._results = [];
        this._query();
    });

    waitOnce('pb-page-ready', () => {
      const connectors = createConnectors(this.getEndpoint(), this);
      connectors.forEach(connector => { this._authorities[connector.register] = connector });
    });

    console.log('<pb-authority-lookup> Registered authorities: %o', this._authorities);
  }

  render() {
    return html`
      <paper-input
        id="query"
        label="${translate('annotations.lookup')}"
        always-float-label
        value="${this.query}"
        @change="${this._queryChanged}"
      >
        <iron-icon icon="icons:search" slot="prefix"></iron-icon>
        ${
          this._authorities[this.type].editable ?
            html`<paper-icon-button icon="icons:add" @click="${this._addEntity}" slot="suffix"></paper-icon-button>` :
            null
        }
      </paper-input>
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
    console.log('<pb-authority-lookup> Retrieving info for %s from %s using %s', id, register, authority.constructor.name);
    let info = await authority.info(id, container);
    if (info.strings) {
      info = Object.assign(info, {
        strings: info.strings.filter((s) => s && !this._stopwordSet.has(s.toLowerCase()))
      });
    }
    return info;
  }

  _formatItem(item) {
    return html`
      <li>
          <div class="icons">
              <paper-icon-button
                  icon="icons:link"
                  @click="${() => this._select(item)}"
                  title="link to"
              ></paper-icon-button>
          </div>
          <div class="link">
            ${item.link
              ? html`<a target="_blank" href="${item.link}">${unsafeHTML(item.label)}</a>`
              : html`${unsafeHTML(item.label)}`
            }
          </div>
        ${item.occurrences > 0 ? html`<div><span class="occurrences" part="occurrences">${item.occurrences}</span></div>` : null}
        ${item.provider ? html`<div><span class="source" part="source">${item.provider}</span></div>` :null}
        <div><span class="register" part="register">${item.register}</span></div>

        ${ 
          this._authorities[this.type].editable ?
            html`<div class="icons">
                <paper-icon-button
                    icon="editor:mode-edit"
                    @click="${() => this._editEntity(item)}"
                ></paper-icon-button>
            </div>` : null 
        }
        ${item.details ? html`<div class="details" part="details">${item.details}</div>` : null}

      </li>
    `;
  }


  _select(item) {
    const connector = this._authorities[item.register];
    const options = {
      strings: item.strings,
      properties: {
        ref: item.id,
      }
    };
    if (connector) {
      connector
        .select(item)
        .then(() => this.emitTo('pb-authority-select', options))
        .catch((e) => this.emitTo('pb-authority-error', {status: e.message}));
    } else {
      this.emitTo('pb-authority-select', options);
    }
  }

  _editEntity(item) {
    const connector = this._authorities[item.register];
    if (connector) {
      connector
        .select(item)
        .then(() => this.emitTo('pb-authority-edit-entity', {id: item.id}));
    } else {
      this.emitTo('pb-authority-edit-entity', {id: item.id});
    }
  }

  _queryChanged() {
    this._results = [];
      this.query = this.shadowRoot.getElementById('query').value;
      this._query();
  }

  _query() {
    this.emitTo('pb-start-update');
    this._authorities[this.type].query(this.query).then(results => {
      this._occurrences(results.items)
        .then((merged) => {
          this._results = merged;
      });
      this.emitTo('pb-end-update');
      this.shadowRoot.getElementById('query').focus();
    });
  }

  _addEntity() {
    this.emitTo('pb-authority-new-entity', {query: this.query});
  }

  _occurrences(items) {
    const params = new FormData();
    params.append('register', this.type);
    items.forEach((item) => {
      params.append('id', item.id);
    });
    return new Promise((resolve) => {
      fetch(`${this.getEndpoint()}/api/annotations/occurrences`, {
        method: 'POST',
        body: params
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          items.forEach((item) => {
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

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
      }

      .link {
        flex-grow: 2;
      }
      #output {
        overflow: auto;
        /*FireFox*/
        scrollbar-width: none;
      }

      /*
      #output .icons{
          visibility: hidden;
      }
      #output .icons:hover{
          visibility: visible;
      }
      */

      #output ul {
        width: 100%;
        padding: 0;
        list-style: none;
      }
      #output li {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: center;
          border-bottom: 1px solid #efefef;
      }
        #output li:hover{
            background:#efefef;
        }
      #output td:nth-child(3), #output td:nth-child(4), #output td:nth-child(5) {
        text-align: right;
        vertical-align: middle;
      }

      .details, .source, .register, .occurrences {
        font-size: .85rem;
          width: 100%;
      }

      .source, .register, .occurrences {
        border-radius: 4px;
        padding: 4px;
        color: var(--pb-color-inverse);
      }

      .source {
        background-color: #637b8c;
      }
      .register {
        background-color: var(--pb-color-lighter);
      }
      .occurrences {
        background-color: var(--pb-color-focus);
      }
    `;
  }
}
customElements.define('pb-authority-lookup', PbAuthorityLookup);
