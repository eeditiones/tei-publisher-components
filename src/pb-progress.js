import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import '@polymer/paper-progress';

/**
 * A progress bar which becomes active when signal `pb-start-update` is
 * being sent and is deactivated on `pb-end-update`.
 *
 * @customElement
 * @polymer
 * @demo demo/pb-progress.html
 * @appliesMixin pbMixin
 */
export class PbProgress extends pbMixin(LitElement) {
    static get properties() {
        return {
            _disabled: {
                type: Boolean
            },
            ...super.properties
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
            <paper-progress id="progress" indeterminate ?disabled="${this._disabled}"></paper-progress>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
                visibility: hidden;
            }

            paper-progress {
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