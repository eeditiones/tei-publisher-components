import { LitElement, html, css } from 'lit-element';
import '@polymer/iron-ajax';
import '@polymer/paper-dialog';
import '@polymer/paper-dialog-scrollable';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { pbMixin } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";

/**
 * Triggers an action on the server and shows a dialog
 * upon completion. Used for the "recompile ODD" and other
 * actions.
 *
 * The parameters sent to the server-side script will be copied
 * from the `pb-view` to which this component subscribes, see pb-update event.
 *
 * @slot - unnamed slot for link text
 * @slot title - dialog title
 * 
 * @fires pb-start-update - Fired before the element updates its content
 * @fires pb-end-update - Fired after the element has finished updating its content 
 * @fires pb-update - When received, copies request parameters from the event 

 */
export class PbAjax extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            /**
             * the URL to send a request to
             */
            url: {
                type: String
            },
            /**
             * Title of link that triggers the request
             */
            title: {
                type: String
            },
            /**
             * HTTP method to use, e.g. 'get', 'post', 'delete' ...
             */
            method: {
                type: String
            },
            /**
             * If set, emits an event with the given name to the channel
             * this component is subscribed to.
             */
            event: {
                type: String
            },
            _message: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.method = 'get';
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
                method="${this.method}"
                with-credentials
                @error="${this._handleError}"
                @response="${this._handleResponse}"></iron-ajax>
            ${this.dialogTemplate}
        `;
    }

    get dialogTemplate() {
        return html`
            <paper-dialog id="messageDialog">
                <slot name="title"><h2>Action</h2></slot>
                <paper-dialog-scrollable>${unsafeHTML(this._message)}</paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus">
                    ${translate('dialogs.close')}
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
            slot[name="title"] {
                margin: 0;
            }
        `;
    }

    _handleClick(ev) {
        ev.preventDefault();
        this.trigger();
    }
    
    trigger() {
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

        if (this.event) {
            this.emitTo(this.event);
        }
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