import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import "@polymer/paper-listbox";
import "@polymer/paper-item";
import "@polymer/paper-dropdown-menu/paper-dropdown-menu.js";
import "@polymer/iron-ajax";

/**
 * `pb-select-template`: Switch between available page templates.
 * It loads the list of templates from `components-list-templates.xql`.
 * Emits a page reload on selection.
 *
 */
export class PbSelectTemplate extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            /** The label to show on top of the dropdown menu */
            label: {
                type: String
            },
            /** Currently selected ODD. If this property is set, the component
             * will immediately load the list of ODDs from the server and select
             * the given ODD.
             */
            template: {
                type: String
            },
            _templates: {
                type: Array
            }
        };
    }

    constructor() {
        super();
        this.label = 'document.selectTemplate';
        this._templates = [];
    }

    firstUpdated() {
        PbSelectTemplate.waitOnce('pb-page-ready', (options) => {
            this.template = options.template;
            const loader = this.shadowRoot.getElementById('getTemplates');
            if (this.minApiVersion('1.0.0')) {
                loader.url = `${options.endpoint}/api/templates`;
            } else {
                loader.url = `${options.endpoint}/modules/lib/components-list-templates.xql`;
            }
                
            loader.generateRequest();
        });
    }

    render() {
        return html`
            <paper-dropdown-menu id="menu" label="${translate(this.label)}" name="${this.name}">
                <paper-listbox id="templates" slot="dropdown-content" class="dropdown-content" 
                    selected="${this.template}" attr-for-selected="value"
                    @selected-item-changed="${this._selected}">
                ${this._templates.map((item) => html`<paper-item value="${item.name}">${item.title}</paper-item>`)}
                </paper-listbox>
            </paper-dropdown-menu>

            <iron-ajax id="getTemplates" with-credentials
                handle-as="json" @response="${this._handleTemplatesResponse}"
                method="GET"></iron-ajax>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
            paper-dropdown-menu {
                --paper-listbox-background-color: white;
                width: 100%;
            }
        `;
    }

    _selected() {
        const newTemplate = this.shadowRoot.getElementById('templates').selected;
        if (newTemplate === this.template) {
            return;
        }
        this.setParameter('template', newTemplate);
        window.location = this.getUrl().toString();
    }

    _handleTemplatesResponse() {
        const loader = this.shadowRoot.getElementById('getTemplates');
        this._templates = loader.lastResponse;
    }
}
customElements.define('pb-select-template', PbSelectTemplate);