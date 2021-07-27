import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";
import { createConnectors } from "./authority/connectors.js";
import '@polymer/paper-input/paper-input';
import '@polymer/paper-icon-button';

/**
 * Performs authority lookups via configurable connectors.
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

    PbAuthorityLookup.waitOnce('pb-page-ready', () => {
      this._authorities = createConnectors(this.getEndpoint(), this);
    });

    console.log('<pb-authority-lookup> Registered authorities: %o', this._authorities);
  }

  render() {
    return html`
      <paper-input
        id="query"
        label="${translate('Search for')}"
        always-float-label
        value="${this.query}"
        @change="${this._queryChanged}"
      >
        <iron-icon icon="icons:search" slot="prefix"></iron-icon>
      </paper-input>
      <div id="output">
        <table part="output">
          ${this._results.map(item => this._formatItem(item))}
        </table>
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
    console.log('<pb-authority-lookup> Retrieving info for %s from %s', id, register);
    let info = await authority.info(id, container);
    if (info.strings) {
      info = Object.assign(info, {
        strings: info.strings.filter((s) => !this._stopwordSet.has(s.toLowerCase()))
      });
    }
    console.log(info);
    return info;
  }

  _formatItem(item) {
    return html`
      <tr>
        <td>
          <paper-icon-button
            icon="icons:add"
            @click="${() => this._select(item)}"
          ></paper-icon-button>
        </td>
        <td>
          <div>
            ${item.link
              ? html`<a target="_blank" href="${item.link}">${item.label}</a>`
              : item.label}
          </div>
          ${item.details ? html`<div class="details" part="details">${item.details}</div>` : null}
        </td>
        <td>${item.occurrences > 0 ? html`<span class="occurrences" part="occurrences">${item.occurrences}</span>` : null}</td>
        <td>${item.provider ? html`<div><span class="source" part="source">${item.provider}</span></div>` : null}</td>
        <td><span class="register" part="register">${item.register}</span></td>
      </tr>
    `;
  }

  _select(item) {
    const connector = this._authorities[item.register];
    if (connector) {
      connector.select(item);
    }
    const options = {
      strings: item.strings,
      properties: {
        ref: item.id,
      }
    };
    this.emitTo('pb-authority-select', options);
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
              return i1.label.localeCompare(i2.label);
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
      #output {
        overflow: auto;
      }

      #output table {
        width: 100%;
      }
      #output td {
        vertical-align: top;
        padding-bottom: 8px;
      }
      #output td:nth-child(3), #output td:nth-child(4), #output td:nth-child(5) {
        text-align: right;
        vertical-align: middle;
      }

      .details, .source, .register, .occurrences {
        font-size: .85rem;
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