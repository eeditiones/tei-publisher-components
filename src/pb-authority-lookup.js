import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";
import { Metagrid } from "./authority/metagrid.js";
import { GeoNames } from './authority/geonames.js';
import { GND } from "./authority/gnd.js";
import '@polymer/paper-input/paper-input';
import '@polymer/paper-icon-button';

const authorities = [
  new GND({
    name: 'person',
    tag: 'persName',
    properties: {
      ref: 'gnd:${id}'
    },
  }),
  new Metagrid({
    name: 'organisation',
    tag: 'orgName',
    properties: {
      ref: '${provider}:${id}',
    },
  }),
  new GeoNames({
    name: 'place',
    user: 'existdb',
    tag: 'placeName',
    properties: {
      ref: 'geo:${id}',
    },
  }),
  new GND({
    name: 'term',
    tag: 'term',
    properties: {
      ref: 'gnd:${id}'
    }
  }),
];

/**
 *
 *
 * @customElement  pb-authority-lookup
 * @polymer
 * @demo demo/pb-authority-lookup.html
 * @appliesMixin pbMixin
 */
export class PbAuthorityLookup extends pbMixin(LitElement) {
  static get properties() {
    return {
      query: {
        type: String,
        reflect: true,
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
    authorities.forEach((authority) => {
        this._authorities[authority.register] = authority;
    });
  }

  connectedCallback() {
    super.connectedCallback();

    this.subscribeTo('pb-authority-lookup', ev => {
        this.query = ev.detail.query;
        this.type = ev.detail.type;
        this._query();
    });
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

  _formatItem(item) {
    return html`
      <tr>
        <td>
          <paper-icon-button icon="icons:add" @click="${() => this._select(item)}"></paper-icon-button>
        </td>
        <td>
          <div>
            ${item.link
              ? html`<a target="_blank" href="${item.link}">${item.label}</a>`
              : item.label}
          </div>
          ${item.details ? html`<div class="details">${item.details}</div>` : null}
        </td>
        <td>${item.register}</td>
      </tr>
    `;
  }

  _select(item) {
        const authority = this._authorities[item.register];
        const options = authority.format(item);
        this.emitTo('pb-add-annotation', options);
  }

  _queryChanged() {
      this.query = this.shadowRoot.getElementById('query').value;
      this._query();
  }

  _query() {
    this._authorities[this.type].query(this.query).then(results => {
      this._results = results.items;
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
    `;
  }
}
customElements.define('pb-authority-lookup', PbAuthorityLookup);