import { LitElement, html, css } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { translate } from './pb-i18n.js';
import './pb-dialog.js';
import { themableMixin } from './theming.js';

/**
 * Show a dialog with buttons. Used by ODD editor.
 */
export class PbMessage extends themableMixin(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
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
      open: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.title = '';
    this.message = '';
    this.type = 'message'; // defaults to 'message'
    this.open = false;
  }

  render() {
    return html`
      <pb-dialog>
        <h2 id="title" slot="title">${unsafeHTML(this.title)}</h2>
        <div id="message" class="message" tabindex="0">
          ${this.message ? unsafeHTML(this.message) : html`<slot></slot>`}
        </div>

        <div class="buttons" slot="footer">
          ${this.isMessage()
            ? html`<button class="close" autofocus="autofocus">
                ${translate('dialogs.close')}
              </button>`
            : html`
                <button class="confirm" autofocus="autofocus">${translate('dialogs.yes')}</button>
                <button class="reject" autofocus="autofocus">${translate('dialogs.no')}</button>
              `}
        </div>
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
    this.set(title, message);
    this.open = true;
    this.modal.openDialog();

    return new Promise((resolve, reject) => {
      // Wait for the next render cycle to ensure elements are available
      requestAnimationFrame(() => {
        const close = this.renderRoot.querySelector('.close');
        close.addEventListener('click', () => {
          this.open = false;
          this.modal.closeDialog();
          resolve({ once: true });
        });
      });
    });
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
    this.open = true;
    this.modal.openDialog();

    return new Promise((resolve, reject) => {
      // Wait for the next render cycle to ensure elements are available
      requestAnimationFrame(() => {
        const confirm = this.renderRoot.querySelector('.confirm');
        const cancel = this.renderRoot.querySelector('.reject');
        confirm.addEventListener('click', () => {
          this.open = false;
          this.modal.closeDialog();
          resolve({ once: true });
        });
        cancel.addEventListener('click', () => {
          this.open = false;
          this.modal.closeDialog();
          reject({ once: true });
        });
      });
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
