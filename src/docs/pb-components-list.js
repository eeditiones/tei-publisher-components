import { LitElement, html, css } from 'lit-element';
import '@polymer/paper-item';

/**
 * Displays a list of components to view.
 * 
 * @fires pb-api-component if a component name is clicked
 */
export class PbComponentsList extends LitElement {
    static get properties() {
        return {
            json: {
                type: Object
            },
            _demos: {
                type: Object
            }
        };
    }

    constructor() {
        super();
        this.json = null;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    render() {
        if (this.json) {
            const { tags } = this.json;
            tags.sort((a, b) => a.name.localeCompare(b.name));
            return html`
                ${tags.map((tag) => html`<paper-item @click="${() => PbComponentsList._viewComponent(tag)}">${tag.name}</paper-item>`)}
            `;
        }
        return html`<div>Loading ...</div>`;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
        `;
    }

    static _viewComponent(component, tab = 0) {
        document.dispatchEvent(new CustomEvent('pb-api-component', {
            detail: { component, tab }
        }));
    }
}
customElements.define('pb-components-list', PbComponentsList);