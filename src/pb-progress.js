import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import { themableMixin } from './theming.js';

/**
 * A progress bar which becomes active when signal `pb-start-update` is
 * being sent and is deactivated on `pb-end-update`.
 * 
 * Uses a native `<progress>` element.
 *
 * @fires pb-start-update - When received, activates the progress bar
 * @fires pb-end-update - When received, disables the progress bar
 
 */
export class PbProgress extends themableMixin(pbMixin(LitElement)) {
    static get properties() {
        return {
            ...super.properties,
            _disabled: {
                type: Boolean
            }
        };
    }

    constructor() {
        super();
        this._disabled = true;
    }

    connectedCallback() {
        super.connectedCallback();

        this.subscribeTo('pb-start-update', this._startUpdate.bind(this));
        this.subscribeTo('pb-end-update', this._endUpdate.bind(this));
    }

    render() {
        this.style.visibility = this._disabled ? 'hidden' : 'visible';
        return html`
            <progress id="progress" indeterminate ?disabled="${this._disabled}"></progress>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
                visibility: hidden;
            }

            progress {
                width: 100%;
            }
        `;
    }

    _startUpdate() {
        this._disabled = false;
    }

    _endUpdate() {
        this._disabled = true;
    }
}
customElements.define('pb-progress', PbProgress);