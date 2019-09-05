import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin';

class PbPage extends pbMixin(LitElement) {

    static get properties() {
        return {
            appRoot: {
                type: String,
                attribute: 'app-root'
            },
            template: {
                type: String
            },
            endpoint: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.endpoint = "http://localhost:8080/exist/apps/tei-publisher";
    }

    connectedCallback() {
        super.connectedCallback();

        this.querySelectorAll('pb-view').forEach(view => {
            console.log('<pb-page> init');
            view.endpoint = this.endpoint;
        });
    }

    firstUpdated() {
        super.firstUpdated();
        console.log('<pb-page> trigger window resize');
        this.querySelectorAll('app-header').forEach(h => h._notifyLayoutChanged());


    }

    render() {
        return html`<slot></slot>`;
    }

    static get styles() {
        return css`
        :host {
            display: block;
        }
        `;
    }
}

customElements.define('pb-page', PbPage);