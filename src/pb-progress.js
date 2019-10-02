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
            ...super.properties
        };
    }

    connectedCallback() {
        super.connectedCallback();

        this.subscribeTo('pb-start-update', this._startUpdate.bind(this));
        this.subscribeTo('pb-end-update', this._endUpdate.bind(this));
    }

    firstUpdated() {
        this.shadowRoot.getElementById('progress').disabled = true;
    }

    render() {
        return html`
            <paper-progress id="progress" indeterminate></paper-progress>
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
        this.style.visibility = 'visible';
        this.shadowRoot.getElementById('progress').disabled = false;
        console.log('<pb-progress> start update');
    }

    _endUpdate() {
        this.style.visibility = 'hidden';
        this.shadowRoot.getElementById('progress').disabled = true;
    }
}
customElements.define('pb-progress', PbProgress);