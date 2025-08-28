import { LitElement, html, css } from 'lit-element';
import '@polymer/paper-dialog/paper-dialog';
import '@polymer/paper-dialog-scrollable/paper-dialog-scrollable';
import '@polymer/paper-button/paper-button';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { translate } from './pb-i18n.js';

/**
 * Show a dialog with buttons. Used by ODD editor.
 */
export class PbMessage extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      paper-dialog {
        min-width: 300px;
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
        reflect: true,
      },
      /**
       * type of message. Can be either 'message' or 'confirm'. In case of confirm the buttons 'yes' and 'no'
       * will be shown and the dialog becomes modal.
       */
      type: {
        type: String,
      },
      /**
       * main message text to be shown on dialog.
       */
      message: {
        type: String,
        reflect: true,
      },
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
      <paper-dialog id="modal">
        <h2 id="title">${unsafeHTML(this.title)}</h2>
        <paper-dialog-scrollable id="message" class="message" tabindex="0">
          ${this.message ? unsafeHTML(this.message) : html`<slot></slot>`}
        </paper-dialog-scrollable>

        <div class="buttons">
          <paper-button
            dialog-confirm="dialog-confirm"
            autofocus="autofocus"
            ?hidden="${this.isConfirm()}"
            >${translate('dialogs.close')}</paper-button
          >
          <paper-button
            id="confirm"
            dialog-confirm="dialog-confirm"
            autofocus="autofocus"
            ?hidden="${this.isMessage()}"
            >${translate('dialogs.yes')}</paper-button
          >
          <paper-button
            id="reject"
            dialog-confirm="dialog-confirm"
            autofocus="autofocus"
            ?hidden="${this.isMessage()}"
            >${translate('dialogs.no')}</paper-button
          >
        </div>
      </paper-dialog>
    `;
  }

  firstUpdated() {
    // this.shadowRoot.getElementById('modal').open();
    this.modal = this.shadowRoot.getElementById('modal');
  }

  updated() {
    if (this.modal) {
      this.modal.notifyResize();
    }
  }

  /**
   * Open a modal dialog to display a message to the user.
   *
   * @param {string} title The title of the dialog
   * @param {string} message The message to display in the dialog body
   */
  show(title, message) {
    this.type = 'message';
    this.set(title, message);
    this.modal.noCancelOnOutsideClick = false;
    this.modal.noCancelOnEscKey = false;
    this.modal.open();
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
    this.set(title, message);
    this.modal.noCancelOnOutsideClick = true;
    this.modal.noCancelOnEscKey = true;
    this.modal.open();
    const confirm = this.shadowRoot.getElementById('confirm');
    const cancel = this.shadowRoot.getElementById('reject');
    return new Promise((resolve, reject) => {
      confirm.addEventListener('click', resolve, { once: true });
      cancel.addEventListener('click', reject, { once: true });
    });
  }

  set(title, message) {
    if (title || message) {
      if (title) {
        this.title = title;
      }
      if (message) {
        this.message = message;
      }
      this.modal.notifyResize();
    }
  }

  isMessage() {
    return this.type === 'message';
  }

  isConfirm() {
    return this.type === 'confirm';
  }
}
customElements.define('pb-message', PbMessage);
