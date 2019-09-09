import { html, css } from 'lit-element';
import '@polymer/iron-form';
import '@polymer/iron-ajax';
import { PbLoad } from './pb-load.js';

/**
 * A custom form element which loads the actual form from a server-side script using AJAX.
 * Emits a `pb-search-resubmit` event when the form is submitted, signalling `pb-search` that
 * a search should be redone using the parameters passed.
 *
 * The component is currently used to implement the additional search facets on the start page and
 * search result page.
 *
 * @customElement
 * @polymer
 */
export class PbCustomForm extends PbLoad {
    static get properties() {
        return {
            ...super.properties
        };
    }

    connectedCallback() {
        super.connectedCallback();

        this.shadowRoot.getElementById('ironform').addEventListener('iron-form-presubmit', (ev) => {
            ev.preventDefault();
            this._submit();
        });
    }

    render() {
        return html`
            <iron-form id="ironform">
                <form action="" accept="text/html" method="get">
                    <slot></slot>
                </form>
            </iron-form>

            <iron-ajax
                id="loadContent"
                verbose
                handle-as="text"
                method="get"
                @response="${this._handleContent}"
                @error="${this._handleError}"></iron-ajax>
            <paper-dialog id="errorDialog" style="visibility: hidden">
                <h2>Error</h2>
                <paper-dialog-scrollable></paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus">
                        Close
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
        `;
    }

    submit() {
        this.shadowRoot.getElementById('ironform').submit();
    }

    _submit() {
        const json = this.shadowRoot.getElementById('ironform').serializeForm();
        this.emitTo('pb-search-resubmit', {'params': json});
    }

    _parseHeaders(xhr) {
        // overwrite to avoid `pb-results-received` event being sent
    }

    _onLoad(content) {
        super._onLoad(content);

        this.dispatchEvent(new CustomEvent('pb-custom-form-loaded', { detail: content }));
    }

    /**
     * Fired before the element updates its content
     *
     * @event pb-custom-form-loaded
     * @param {string} the loaded content
     */

    /**
     * Fired when form is submitted
     *
     * @event pb-search-resubmit
     * @param {object} params: serialized form parameters as json object
     */
}
customElements.define('pb-custom-form', PbCustomForm);