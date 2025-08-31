import { LitElement, css, html } from 'lit-element';
import { pbMixin } from './pb-mixin';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { themableMixin } from './theming.js';

/**
 * A simple dialog component using the HTML5 <dialog> element
 *
 * @slot - Content of the dialog
 * @slot title - Title of the dialog
 * @fires pb-dialog-opened - Fired when the dialog is opened
 * @fires pb-dialog-closed - Fired when the dialog is closed
 */
export class PbDialog extends themableMixin(pbMixin(LitElement)) {

    static get properties() {
        return {
            ...super.properties,
            open: { type: Boolean, reflect: true },
            modal: { type: Boolean, reflect: true },
            title: { type: String, reflect: true },
            message: { type: String, reflect: true }
        };
    }

    constructor() {
        super();
        this.open = false;
        this.modal = true;
        this._escListener = this._onEsc.bind(this);
        this.title = null;
        this.message = null;
    }

    _onEsc(e) {
        if (e.key === 'Escape' && this.open) {
            this.closeDialog();
        }
    }

    openDialog() {
        if (!this.open) {
            if (this.modal) {
                this._dialog.showModal();
            } else {
                this._dialog.show();
            }
            this.dispatchEvent(new CustomEvent('pb-dialog-opened', { bubbles: true, composed: true }));
            this.open = true;
        }
    }

    closeDialog() {
        if (this.open) {
            this._dialog.close();
            this.dispatchEvent(new CustomEvent('pb-dialog-closed', { bubbles: true, composed: true }));
            this.open = false;
        }
    }

    render() {
        return html`
            <dialog @click="${(e) => e.target === this._dialog && this.modal && this.closeDialog()}">
                <article>
                    <header>
                        ${this.title ? unsafeHTML(this.title) : html`<slot name="title"></slot>`}
                        <button rel="prev" aria-label="Close" @click="${this.closeDialog}"></button>
                    </header>
                    ${this.message ? unsafeHTML(this.message) : html`<slot></slot>`}
                    <footer>
                        <slot name="footer"></slot>
                    </footer>
                </article>
            </dialog>
        `;
    }

    firstUpdated() {
        this._dialog = this.renderRoot.querySelector('dialog');
    }

    static get styles() {
        return css`
            header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            button[rel="prev"] {
                display: block;
                height: 1rem;
                width: 1rem;
                background-image: var(--pb-dialog-background-image, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(136, 145, 164)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E"));
                background-position: center;
                background-size: auto 1rem;
                background-repeat: no-repeat;
                background-color: transparent;
                border: none;
            }
            footer {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin-top: 16px;
            }
        `;
    }
}

customElements.define('pb-dialog', PbDialog);
