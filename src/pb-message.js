import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { translate } from "./pb-i18n.js";
import { pbLightDom } from './pb-light-dom.js';
import './pb-dialog.js';

/**
 * Show a dialog with buttons. Used by ODD editor.
 */
export class PbMessage extends pbLightDom(LitElement) {

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
        this.type = 'message'; // defaults to 'message'
    }

    render() {
        return html`
        <pb-dialog>
            <h2 slot="title">${unsafeHTML(this.title)}</h2>
            ${ this.message ? unsafeHTML(this.message) : null }

            <button class="close" autofocus="autofocus" ?hidden="${this.isConfirm()}">${translate('dialogs.close')}</button>
            <button class="confirm" autofocus="autofocus" ?hidden="${this.isMessage()}">${translate('dialogs.yes')}</button>
            <button class="reject" autofocus="autofocus" ?hidden="${this.isMessage()}">${translate('dialogs.no')}</button>
        </pb-dialog>
        `;
    }

    firstUpdated() {
        // this.shadowRoot.getElementById('modal').open();
        this.modal = this.renderRoot.querySelector('pb-dialog');

    }

    /**
     * Open a modal dialog to display a message to the user.
     * 
     * @param {string} title The title of the dialog
     * @param {string} message The message to display in the dialog body
     */
    show(title, message) {
        this.type = 'message';
        this.set(`<h1>${title}</h1>`, `<p>${message}</p>`);
        this.modal.openDialog();
    }

    /**
     * Open a modal dialog to prompt the user for confirmation.
     * Returns a promise which will be resolved upon confirmation
     * and rejected otherwise.
     * 
     * @param {string} title The title of the dialog
     * @param {string} message The message to display in the dialog body
     * @returns {Promise} promise which will be resolved upon confirmation and rejected otherwise
     */
    confirm(title, message) {
        this.type = 'confirm';
        this.set(`<h1>${title}</h1>`, `<p>${message}</p>`);
        this.modal.openDialog();
        const confirm = this.renderRoot.querySelector('.confirm');
        const cancel = this.renderRoot.querySelector('.reject');
        return new Promise((resolve, reject) => {
            confirm.addEventListener('click', resolve, { once: true });
            cancel.addEventListener('click', reject, { once: true })
        });
    }

    set(title, message) {
        if (title || message) {
            if (title) {
                this.title = title;
                this.modal.title = this.title;
            }
            if (message) {
                this.message = message;
                this.modal.message = this.message;
            }
        }
    }

    isMessage() {
        return this.type === 'message'
    }

    isConfirm() {
        return this.type === 'confirm'
    }


}
customElements.define('pb-message', PbMessage);
