import { LitElement, html } from 'lit-element';
import { pbMixin } from './pb-mixin';
import { pbLightDom } from './pb-light-dom';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

/**
 * A simple dialog component using the HTML5 <dialog> element (no shadow DOM).
 *
 * @slot - Content of the dialog
 * @slot title - Title of the dialog
 * @fires pb-dialog-opened - Fired when the dialog is opened
 * @fires pb-dialog-closed - Fired when the dialog is closed
 */
export class PbDialog extends pbLightDom(pbMixin(LitElement)) {

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
            <dialog @click="${(e) => e.target === this._dialog && this.modal && this.closeDialog()}" ?modal="${this.modal}">
                <article>
                    <header>
                        ${ this.title ? unsafeHTML(this.title) : this.fillSlot('title') }
                        <button rel="prev" aria-label="Close" @click="${this.closeDialog}">&times;</button>
                    </header>
                    ${ this.message ? unsafeHTML(this.message) : this.fillSlot() }
                    <footer>
                        ${ this.fillSlot('footer') }
                    </footer>
                </article>
            </dialog>
        `;
    }

    firstUpdated() {
        this._dialog = this.querySelector('dialog');
    }
}

customElements.define('pb-dialog', PbDialog);
