import { LitElement, html, css } from 'lit';
import { pbMixin } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import { registry } from './urls.js';

import '@polymer/iron-ajax';
import '@polymer/iron-icon';
import '@polymer/iron-icons';

/**
 * A client for the Distributed Text Services (DTS) protocol. This defines an API
 * for working with collections of text.
 *
 *
 * @slot toolbar - toolbar area
 * @slot pagination - pagination area
 *
 * @csspart parent-link - Link to parent collection
 * @csspart collection-title - Collection title
 * @csspart title - Member title
 * @csspart author - Author
 * @csspart license - License information
 * @csspart link - Links
 *
 * @fires pb-start-update - Fired before the element updates its content
 * @fires pb-results-received - Fired when results are received from the server
 * @fires pb-end-update - Fired after the element has finished updating its content
 * @fires dts-endpoint - When received sets the endpoint to the one passed in from the event
 * @fires pb-load - When received triggers the refresh accorting to the selected page
 */
export class DtsClient extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      baseUri: {
        type: String,
      },
      data: {
        type: Object,
      },
      collection: {
        type: String,
      },
      page: {
        type: Number,
      },
      perPage: {
        type: Number,
      },
      _collectionEndpoint: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this._parentCollections = [];
    this.collection = 'default';
  }

  connectedCallback() {
    super.connectedCallback();

    this.collection = registry.state.id;
    this.page = registry.state.page;

    this.subscribeTo('dts-endpoint', ev => {
      this._setEndpoint(ev.detail.endpoint, ev.detail.collection, ev.detail.reload);
    });
    this.subscribeTo('pb-load', ev => {
      this.page = ev.detail.params.page;
      console.log('<dts-client> Loading page %d', this.page);
      this._update();
    });
  }

  firstUpdated() {
    super.firstUpdated();

    this.queryAPI = this.shadowRoot.getElementById('queryAPI');
    this.documentsAPI = this.shadowRoot.getElementById('documentsAPI');
    this.signalReady();
  }

  _setEndpoint(endpoint, collection, reload) {
    if (!reload) {
      this.page = null;
    }
    this.collection = collection;
    this._configureEndpoint(endpoint);
    this.baseUri = endpoint;
  }

  _configureEndpoint(newBaseUri) {
    if (newBaseUri) {
      console.log('<dts-client> initializing connection to endpoint %s', newBaseUri);
      this.emitTo('pb-start-update');
      this.queryAPI.url = newBaseUri;
      this.queryAPI.generateRequest();
    }
  }

  _navigate(ev, member, downwards = true) {
    ev.preventDefault();
    if (downwards) {
      this._parentCollections.push(this.collection);
    }
    this.collection = member && typeof member === 'object' ? member['@id'] : member;
    this.page = null;
    console.log('<dts-client> navigating to collection %s', this.collection);
    this._update();
  }

  _navigateUp(ev) {
    if (this._parentCollections.length === 0) {
      return;
    }
    this._navigate(ev, this._parentCollections.pop(), false);
  }

  _preview(ev, member) {
    ev.preventDefault();
    this.emitTo('pb-start-update');
    const path = member['dts:passage'] || member['dts:download'];
    const url = new URL(path, this.baseUri).toString();
    console.log('<dts-client> downloading %s', url);
    if (this.lessThanApiVersion('1.0.0')) {
      this.documentsAPI.url = `${this.getEndpoint()}/modules/lib/dts.xql`;
      this.documentsAPI.params = {
        preview: url,
        id: member['@id'],
      };
    } else {
      this.documentsAPI.url = `${this.getEndpoint()}/api/dts/import`;
      this.documentsAPI.params = {
        uri: url,
        temp: true,
      };
    }
    this.documentsAPI.generateRequest();
  }

  _download(ev, member) {
    this.emitTo('pb-start-update');
    const path = member['dts:passage'] || member['dts:download'];
    const url = new URL(path, this.baseUri).toString();
    console.log('<dts-client> importing %s', url);
    if (this.lessThanApiVersion('1.0.0')) {
      this.documentsAPI.url = `${this.getEndpoint()}/modules/lib/dts.xql`;
      this.documentsAPI.params = {
        import: url,
        id: member['@id'],
      };
    } else {
      this.documentsAPI.url = `${this.getEndpoint()}/api/dts/import`;
      this.documentsAPI.params = {
        uri: url,
        temp: false,
      };
    }
    this.documentsAPI.generateRequest();
  }

  _update() {
    this.emitTo('pb-start-update');
    const newState = {};
    if (this.collection) {
      newState.id = this.collection;
    }
    if (this.page) {
      newState.page = this.page + 1;
    }
    registry.commit(this, newState);

    this.queryAPI.params = newState;
    this.queryAPI.url = this._collectionEndpoint;
    this.queryAPI.generateRequest();
  }

  _handleResponse() {
    const json = this.queryAPI.lastResponse;
    if (json['@type'] === 'EntryPoint') {
      this._collectionEndpoint = new URL(json.collections, this.baseUri).toString();
      console.log('<dts-client> configured collection endpoint: %s', this._collectionEndpoint);

      this._update();
    } else {
      this.data = json;
      console.log('<dts-client> received collection data: %o', json);
      if (!this.page && json.totalItems > json.member.length) {
        this.perPage = json.member.length;
      }
      this.emitTo('pb-results-received', {
        start: this.page && this.page > 0 ? this.page * this.perPage + 1 : 1,
        count: json.totalItems,
      });
    }
    this.emitTo('pb-end-update');
  }

  _handlePreview() {
    const json = this.documentsAPI.lastResponse;
    this.emitTo('pb-end-update');
    const url = new URL(json.path, window.location.href);
    // use registry here?
    window.location.replace(url);
  }

  _handleError(ev) {
    this.emitTo('pb-end-update');
    const msg = ev.target.lastError.response;
    const parser = new DOMParser();
    const doc = parser.parseFromString(msg, 'application/xml');
    const node = doc.querySelector('message');

    const dialog = document.getElementById('errorDialog');
    const body = dialog.querySelector('paper-dialog-scrollable');
    if (node) {
      body.innerHTML = node.textContent;
    } else {
      body.innerHTML = ev.detail.error.message;
    }
    dialog.open();
  }

  static _getCreator(item) {
    const dc = item['dts:dublincore'];
    return dc ? dc['dc:creator'] : null;
  }

  static _getLicense(item) {
    const dc = item['dts:dublincore'];
    return dc ? dc['dc:license'] : null;
  }

  render() {
    return html`
      <slot name="toolbar"></slot>
      ${this.baseUri ? this._renderClient() : ''}

      <iron-ajax
        id="queryAPI"
        verbose
        handle-as="json"
        method="get"
        @response="${this._handleResponse}"
        @error="${this._handleError}"
      ></iron-ajax>
      <iron-ajax
        id="documentsAPI"
        verbose
        handle-as="json"
        method="get"
        @response="${this._handlePreview}"
        @error="${this._handleError}"
      ></iron-ajax>
    `;
  }

  _renderClient() {
    return html`
      <div class="uri">${this.baseUri}</div>
      <h3 part="collection-title">${this.data ? this.data.title : 'Loading ...'}</h3>
      <slot name="pagination"></slot>
      ${this._parentCollections.length > 0 || this.collection
        ? html` <button
            part="parent-link"
            class="pb-button pb-button--text"
            type="button"
            @click="${this._navigateUp}"
          >
            <iron-icon icon="icons:arrow-upward"></iron-icon>
            ${translate('browse.up')}
          </button>`
        : null}
      ${this.data ? this._renderMembers() : ''}
    `;
  }

  _renderMembers() {
    const members = [];
    this.data.member.forEach(member => {
      members.push(html`<div class="member">${this._renderMember(member)}</div>`);
    });
    return members;
  }

  _renderMember(member) {
    if (member['@type'] === 'Collection') {
      return html`
        <iron-icon icon="icons:folder-open"></iron-icon>
        <div class="details">
          <a href="#" @click="${ev => this._navigate(ev, member)}" part="link">
            <h4 class="collection" part="collection-title">${member.title}</h4>
          </a>
        </div>
      `;
    }
    const license = DtsClient._getLicense(member);
    return html`
      <iron-icon icon="icons:code"></iron-icon>
      <div class="details">
        <div>
          <a href="#" @click="${ev => this._preview(ev, member)}" part="link">
            <h4 part="title">${member.title}</h4>
          </a>
          <p part="creator" class="creator">${DtsClient._getCreator(member)}</p>
          ${license
            ? html`<p part="license" class="license">
                <a href="${license}">${translate('dts.licence')}</a>
              </p>`
            : ''}
        </div>
        <iron-icon
          title="${translate('dts.import')}"
          icon="icons:file-download"
          @click="${ev => this._download(ev, member)}"
        >
        </iron-icon>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .uri {
        color: #607d8a;
        margin-top: 12px;
        font-weight: bold;
      }
      h3 {
        margin-top: 0;
      }
      .member {
        display: flex;
      }
      .member .details {
        flex: 2;
        margin-left: 20px;
        display: flex;
        justify-content: space-between;
      }
      .member iron-icon {
        width: 24px;
      }
      .member h4 {
        margin: 0;
      }
      .member h4.collection {
        margin-bottom: 10px;
      }
      [name='toolbar'] {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #f6a622;
        font-size: 85%;
      }
    `;
  }
}
customElements.define('dts-client', DtsClient);
