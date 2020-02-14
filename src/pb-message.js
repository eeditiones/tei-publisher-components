import { LitElement, html, css } from 'lit-element';
import '@polymer/paper-dialog/paper-dialog';
import '@polymer/paper-dialog-scrollable/paper-dialog-scrollable';
import '@polymer/paper-button/paper-button';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { translate } from "./pb-i18n.js";

/**
 * Show a dialog with buttons. Used by editor.
 *
 *
 * todo:confirmation is only partly implemented needs some method to detect which button was clicked
 * @customElement
 * @polymer
 * @demo demo/pb-message.html
 */
export class PbMessage extends LitElement {

    static get styles() {
        return css`
            :host {
                display:block;
            }
            
            paper-dialog{
                min-width:300px;
            }
        `;
    }

    static get properties() {
        return {
            /**
             * the dialog box title
             */
            title: {
                type: String,
                reflect: true
            },
            /**
             * type of message. Can be either 'message' or 'confirm'. In case of confirm the buttons 'yes' and 'no'
             * will be shown and the dialog becomes modal.
             */
            type: {
                type: String
            },
            /**
             * main message text to be shown on dialog.
             */
            message: {
                type: String,
                reflect: true
            }
        };
    }

    constructor() {
        super();
        this.title = '';
        this.message = '';
        this.type = 'message'; //defaults to 'message'
    }

    render() {
        return html`
        <paper-dialog id="modal" ?modal="${this.isConfirm()}">
            <h2 id="title">${this.title}</h2>
            <paper-dialog-scrollable id="message" class="message" tabindex="0">${unsafeHTML(this.message)}</paper-dialog-scrollable>

            <div class="buttons">
                <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus" ?hidden="${this.isConfirm()}">${translate('dialogs.close')}</paper-button>
                <paper-button id="confirm" dialog-confirm="dialog-confirm" autofocus="autofocus" ?hidden="${this.isMessage()}">${translate('dialogs.yes')}</paper-button>
                <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus" ?hidden="${this.isMessage()}">${translate('dialogs.no')}</paper-button>
            </div>
        </paper-dialog>
        `;
    }

    firstUpdated(changedProperties) {
        // this.shadowRoot.getElementById('modal').open();
        this.modal = this.shadowRoot.getElementById('modal');

    }

    show(title, message) {
        this.type = 'message';
        this.set(title, message);
        this.modal.open();
    }

    confirm(title, message) {
        this.type = 'confirm';
        this.set(title, message);
        this.modal.modal = true;
        this.modal.open();


        // don't know about the purpose of this promise in the original code.
        /*
                return new Promise(function(resolve, reject) {
                    const confirm = this.shadowRoot.getElementById('confirm');
                    confirm.addEventListener('click', resolve, { once: true });;
                    // this.$.confirm.addEventListener('click', resolve, { once: true });
                }.bind(this));
        */
    }

    set(title, message) {
        this.title = title;
        this.message = message;
    }

    isMessage() {
        return this.type === 'message'
    }

    isConfirm() {
        return this.type === 'confirm'
    }


}
customElements.define('pb-message', PbMessage);
