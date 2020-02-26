// @ts-nocheck
import { LitElement, html, css } from 'lit-element';

import '@cwmr/paper-autocomplete/paper-autocomplete.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import '@cwmr/paper-autocomplete/paper-autocomplete';

import './pb-code-editor.js';

/**
 * represents an odd parameter element for editing
 *
 * @customElement
 *
 * @polymer
 */
export class PbOddParameterEditor extends LitElement {

    static get styles() {
        return css`
            :host {
                display: block;
            }
            .wrapper{
                display:grid;
                grid-template-columns:150px auto 50px;
                grid-column-gap:20px;
                grid-row-gap:20px;
                margin-bottom:10px;
            }
            paper-dropdown-menu{
                align-self:start;
            }
            pb-code-editor {
                height: 40px;
            }

            paper-icon-button{
                align-self:center;
            }
        `;
    }

    render() {
        return html`
        <div class="wrapper">
            
            <paper-autocomplete id="combo" text="${this.name}" placeholder="[Param name]" label="Name" 
                @focused-changed="${this._handleCodeChange}" .source="[]"></paper-autocomplete>

            <pb-code-editor id="editor"
                        label="Parameter"
                        mode="xquery"
                        code="${this.value}"
                        linter="${this.linter}"
                        @code-changed="${this._handleCodeChange}"></pb-code-editor>

            <paper-icon-button @click="${this._delete}" icon="delete" title="delete this parameter"></paper-icon-button>
        </div>

        
        `;
    }


    static get properties() {
        return {
            /**
             * the parameter name
             */
            name: {
                type: String,
                reflect: true
            },
            /**
             * the parameter value
             */
            value: {
                type: String,
                reflect: true
            },
            behaviour: {
                type: String
            },
            parameters: {
                type: Object
            },
            linter: {
                type: String
            }

        };
    }

    constructor() {
        super();
        this.name = '';
        this.value = '';
        this.behaviour = '';
        this.parameters = {
            '': [],
            alternate: ["content", "default", "alternate"],
            anchor: ["content", "id"],
            block: ["content"],
            body: ["content"],
            break: ["content", "type"],
            cell: ["content"],
            cit: ["content", "source"],
            "document": ["content"],
            figure: ["content", "title"],
            graphic: ["content", "url", "width", "height", "scale", "title"],
            heading: ["content", "level"],
            inline: ["content"],
            link: ["content", "link"],
            list: ["content"],
            listItem: ["content"],
            metadata: ["content"],
            note: ["content", "place", "label"],
            omit: ["content"],
            paragraph: ["content"],
            row: ["content"],
            section: ["content"],
            table: ["content"],
            text: ["content"],
            title: ["content"]
        };

        this.selected = '';
        this.linter = '';

    }

    connectedCallback() {
        super.connectedCallback();
        this.value = this.value.trim();
        this.dispatchEvent(new CustomEvent('parameter-connected', { composed: true, bubbles: true, detail: { target: this } }));
    }

    firstUpdated(changedProperties) {
        // console.log('parameters firstupdated ', changedProperties);
        this.selected = this.parameters[this.behaviour] || [];
        this.requestUpdate();
    }

    refreshEditor() {
        // console.log('parameters refresh');
        const editor = this.shadowRoot.getElementById('editor');
        if (!editor) { return; }
        editor.refresh();
    }


    _delete(ev) {
        console.log('parameter delete ', ev);
        ev.preventDefault();
        this.dispatchEvent(new CustomEvent('parameter-remove', {}));
    }

    /*
        _handleChange(e) {
            console.log('_handleChange ', e);
            this.value = this.shadowRoot.getElementById('editor').getSource();
            this.dispatchEvent(new CustomEvent('parameter-changed', {composed:true, bubbles:true, detail: {name: this.name, value: this.value}}));
    
        }
    */

    _handleCodeChange(e) {
        console.log('_handleCodeChange ', e);
        this.value = this.shadowRoot.getElementById('editor').getSource();
        this.name = this.shadowRoot.getElementById('combo').text;
        this.dispatchEvent(new CustomEvent('parameter-changed', { composed: true, bubbles: true, detail: { name: this.name, value: this.value } }));
    }


}
customElements.define('pb-odd-parameter-editor', PbOddParameterEditor);
