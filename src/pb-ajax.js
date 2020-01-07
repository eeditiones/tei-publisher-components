import { LitElement, html, css } from 'lit-element';
import '@polymer/iron-ajax';
import '@polymer/paper-dialog';
import '@polymer/paper-dialog-scrollable';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { pbMixin } from './pb-mixin.js';

/**
 * Triggers an action on the server and shows a dialog
 * upon completion. Used for the "recompile ODD" and other
 * actions.
 *
 * The parameters sent to the server-side script will be copied
 * from the `pb-view` to which this component subscribes.
 *
 * @customElement
 * @polymer
 * @appliesMixin pbMixin
 * @demo demo/pb-download.html
 */
export class PbAjax extends pbMixin(LitElement) {
    static get properties() {
        return {
            /**
             * the URL to send a request to
             */
            url: {
                type: String
            },
            /**
             * title of link that triggers the request
             */
            title: {
                type: String
            },
            /**
             * id of a dialog component used to display the response to the request.
             */
            dialog: {
                type: String
            },
            _message: {
                type: String
            },
            ...super.properties
        };
    }

    connectedCallback() {
        super.connectedCallback();
        this.subscribeTo('pb-update', this._onUpdate.bind(this));
    }

    render() {
        return html`
            <a id="button" @click="${this._handleClick}" title="${this.title}"><slot></slot></a>

            <iron-ajax
                id="loadContent"
                verbose
                handle-as="text"
                method="get"
                @error="${this._handleError}"
                @response="${this._handleResponse}"></iron-ajax>
            <paper-dialog id="messageDialog">
                <h2><slot name="title">Action</slot></h2>
                <paper-dialog-scrollable>${unsafeHTML(this._message)}</paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus">
                        <i18n:text key="close">Close</i18n:text>
                    </paper-button>
                </div>
            </paper-dialog>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
        `;
    }

    _handleClick(ev) {
        ev.preventDefault();
        const loader = this.shadowRoot.getElementById('loadContent');
        loader.url = `${this.getEndpoint()}/${this.url}`;
        this.emitTo('pb-start-update');
        this.shadowRoot.getElementById('loadContent').generateRequest();
    }

    _handleResponse() {
        const resp = this.shadowRoot.getElementById('loadContent').lastResponse;
        this._message = resp;
        const dialog = this.shadowRoot.getElementById('messageDialog');
        dialog.open();
        this.emitTo('pb-end-update');
    }

    _handleError() {
        const loader = this.shadowRoot.getElementById('loadContent');
        const msg = loader.lastError.response;
        const parser = new DOMParser();
        const doc = parser.parseFromString(msg, "application/xml");
        const node = doc.querySelector('message');
        if (node) {
            this._message = node.textContent;
        } else {
            this._message = msg;
        }
        const dialog = this.shadowRoot.getElementById('messageDialog');
        dialog.open();
        this.emitTo('pb-end-update');
    }

    _onUpdate(ev) {
        this.shadowRoot.getElementById('loadContent').params = ev.detail.params;
    }
}
customElements.define('pb-ajax', PbAjax);