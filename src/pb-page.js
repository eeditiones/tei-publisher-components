import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import './pb-i18n-config.js';

class PbPage extends pbMixin(LitElement) {

    static get properties() {
        return {
            ...super.properties,
            appRoot: {
                type: String,
                attribute: 'app-root'
            },
            template: {
                type: String
            },
            endpoint: {
                type: String
            },
            /**
             * Optional URL pattern for retrieving i18n language files.
             * Should be an URL of the form `/i18n/{{lng}}.json`.
             */
            locales: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.endpoint = ".";
        this.locales = '/i18n/{{lng}}.json';
    }

    connectedCallback() {
        super.connectedCallback();

        this.signalReady('pb-page-ready', {
            endpoint: this.endpoint,
            template: this.template
        });
    }

    firstUpdated() {
        super.firstUpdated();
        console.log('<pb-page> endpoint: %s; trigger window resize', this.endpoint);
        this.querySelectorAll('app-header').forEach(h => h._notifyLayoutChanged());
    }

    render() {
        return html`<pb-i18n-config path="${this.locales}"></pb-i18n-config><slot></slot>`;
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