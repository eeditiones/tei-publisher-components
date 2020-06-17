import { LitElement, html } from 'lit-element';

const PB_COMPONENTS_VERSION = null;

/**
 * Outputs the version of pb-components being used. This is injected
 * from `package.json` at build time.
 */
export class PbVersion extends LitElement {
    static get properties() {
        return {
            version: {
                type: String,
                reflect: true
            },
            ...super.properties
        };
    }

    constructor() {
        super();

        this.version = PB_COMPONENTS_VERSION;
    }

    render() {
        return html`<span>${this.version ? this.version : 'unknown' }</span>`;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define('pb-version', PbVersion);