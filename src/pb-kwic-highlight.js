import { LitElement, html, css } from 'lit-element';
import '@polymer/iron-ajax';
import '@polymer/paper-dialog';
import '@polymer/paper-dialog-scrollable';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { pbMixin } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";

/**
 * Looks for KWIC results as produced by pb-kwic-results in sessionStorage.
 *
 * When data are present highlights are processed.
 *
 *
 */
export class PbKwicHighlight extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            /**
             * the id of the view for which highlights shall be displayed
             */
            view: {
                type: String
            },
        };
    }

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
        PbKwicHighlight.waitOnce('pb-page-ready', () => {
            console.log('page-ready');

            const kwicData = JSON.parse(localStorage.getItem('pb-kwic-doc-matches'));
            console.log('kwicData found ', kwicData);
            this.count = kwicData.hits;

            const docs = kwicData.documents;
            const hits = Object.entries(docs)[0][1].hits;
            console.log('kwicData docs ', docs);
            console.log('kwicData hits ', hits);

            if(kwicData){
                this.viewElement = document.getElementById(this.view);
                if(!this.viewElement){
                    console.error(`${this}: view element with id ${this.view} does not exist`);
                    return;
                }
                const shadow = this.viewElement.shadowRoot;
                console.log('shadow ', shadow);
            }
        });



    }

    render() {
        return html`
            ${this.count} | <a id="button" @click="${this._handleClear}" title="clear">X</a>
        `;
    }

/*
    get dialogTemplate() {
        return html`
            <paper-dialog id="messageDialog">
                <h2><slot name="title">Action</slot></h2>
                <paper-dialog-scrollable>${unsafeHTML(this._message)}</paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus">
                    ${translate('dialogs.close')}
                    </paper-button>
                </div>
            </paper-dialog>
        `;
    }
*/

    static get styles() {
        return css`
            :host {
                display: block;
            }
        `;
    }

    _handleClear(ev) {
        ev.preventDefault();
        localStorage.removeItem('pb-kwic-doc-matches');
    }

}
customElements.define('pb-kwic-highlight', PbKwicHighlight);
