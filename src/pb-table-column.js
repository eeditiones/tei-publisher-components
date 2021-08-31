import { LitElement } from 'lit-element';
import { html } from "gridjs";
import './pb-popover.js';

/**
 *
 *
 */
export class PbTableColumn extends LitElement {
    static get properties() {
        return {
            label: {
                type: String
            },
            property: {
                type: String
            },
            sort: {
                type: Boolean
            },
            width: {
                type: String
            },
            ...super.properties
        };
    }

    constructor() {
        super();
        this.label = 'no-label';
        this.property = null;
        this.sort = false;
        this.width = null;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    data() {
        const config = { 
            name: this.label,
            sort: { enabled: this.sort },
            formatter: (cell) => html(cell)
        };
        if (this.property) {
            config.id = this.property;
        }
        if (this.width) {
            config.width = this.width;
        }
        return config;
    }
}
customElements.define('pb-table-column', PbTableColumn);