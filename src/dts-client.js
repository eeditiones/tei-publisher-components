import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";
import '@polymer/iron-ajax';
import '@polymer/iron-icon';
import '@polymer/iron-icons';

/**
 * A client for the Distributed Text Services (DTS) protocol. This defines an API
 * for working with collections of text.
 *
 * @customElement  dts-client
 * @polymer
 * @demo demo/dts-client.html
 * @appliesMixin pbMixin
 */
export class DtsClient extends pbMixin(LitElement) {
    static get properties() {
        const props = {
            baseUri: {
                type: String
            },
            data: {
                type: Object
            },
            collection: {
                type: String
            },
            page: {
                type: Number
            },
            perPage: {
                type: Number
            },
            _collectionEndpoint: {
                type: String
            }
        };
        return Object.assign(props, super.properties);
    }

    connectedCallback() {
        super.connectedCallback();

        this.collection = this.getParameter('id');
        this.page = this.getParameter('page');

        this.subscribeTo('dts-endpoint', (ev) => {
            this._setEndpoint(ev.detail.endpoint, ev.detail.reload);
        });
        this.subscribeTo('pb-load', (ev) => {
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

    _setEndpoint(endpoint, reload) {
        if (!reload) {
            this.page = null;
            this.collection = null;
        }
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

    _navigate(ev, member) {
        ev.preventDefault();
        this.collection = member['@id'];
        this.page = null;
        console.log('<dts-client> navigating to collection %s', this.collection);
        this._update();
    }

    _preview(ev, member) {
        ev.preventDefault();
        this.emitTo('pb-start-update');
        const path = member['dts:passage'] || member['dts:download'];
        const url = new URL(path, this.baseUri).toString();
        console.log('<dts-client> downloading %s', url);
        this.documentsAPI.url = `${this.getEndpoint()}/modules/lib/dts.xql`;
        this.documentsAPI.params = {
            'preview': url,
            'id': member['@id']
        };
        this.documentsAPI.generateRequest();
    }

    _download(ev, member) {
        this.emitTo('pb-start-update');
        const path = member['dts:passage'] || member['dts:download'];
        const url = new URL(path, this.baseUri).toString();
        console.log('<dts-client> importing %s', url);
        this.documentsAPI.url = `${this.getEndpoint()}/modules/lib/dts.xql`;
        this.documentsAPI.params = {
            'import': url,
            'id': member['@id']
        };
        this.documentsAPI.generateRequest();
    }

    _update() {
        this.emitTo('pb-start-update');
        const params = {};
        if (this.collection) {
            params.id = this.collection;

            this.setParameter('id', this.collection);
        };
        if (this.page) {
            params.page = this.page + 1;
            this.setParameter('page', this.page);
        }
        this.pushHistory('dts-client-navigate');

        this.queryAPI.params = params;
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
                count: json.totalItems
            });
        }
        this.emitTo('pb-end-update');
    }

    _handlePreview() {
        const json = this.documentsAPI.lastResponse;
        this.emitTo('pb-end-update');
        const url = new URL(json.path, window.location.href);
        window.location = url;
    }

    _handleError(ev) {
        this.emitTo('pb-end-update');
        const msg = ev.target.lastError.response;
        const parser = new DOMParser();
        const doc = parser.parseFromString(msg, "application/xml");
        const node = doc.querySelector('message');

        const dialog = document.getElementById('errorDialog');
        const body = dialog.querySelector("paper-dialog-scrollable");
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
                @error="${this._handleError}"></iron-ajax>
            <iron-ajax
                id="documentsAPI"
                verbose
                handle-as="json"
                method="get"
                @response="${this._handlePreview}"
                @error="${this._handleError}"></iron-ajax>
        `;
    }

    _renderClient() {
        return html`
            <div class="uri">${this.baseUri}</div>
            <h3>${this.data ? this.data.title : 'Loading ...'}</h3>
            <slot name="pagination"></slot>
            ${this.data ? this._renderMembers() : ''}
        `;
    }

    _renderMembers() {
        const members = [];
        this.data.member.forEach((member) => {
            members.push(html`<div class="member">${this._renderMember(member)}</div>`);
        });
        return members;
    }

    _renderMember(member) {
        if (member['@type'] == 'Collection') {
            return html`
                <iron-icon icon="icons:folder-open"></iron-icon>
                <div class="details">
                    <h4 class="collection">
                        <a href="#" @click="${(ev) => this._navigate(ev, member)}">${member.title}</a>
                    </h4>
                </div>
            `;
        }
        const license = DtsClient._getLicense(member);
        return html`
            <iron-icon icon="icons:code"></iron-icon>
            <div class="details">
                <div>
                    <h4>
                        <a href="#" @click="${(ev) => this._preview(ev, member)}">${member.title}</a>
                    </h4>
                    <p class="creator">${DtsClient._getCreator(member)}</p>
                    ${license ? html`<p class="license"><a href="${license}">${translate('dts.licence')}</a></p>` : ''}
                </div>
                <iron-icon title="${translate('dts.import')}" icon="icons:file-download" 
                    @click="${(ev) => this._download(ev, member)}">
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