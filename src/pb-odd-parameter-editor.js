// @ts-nocheck
import { LitElement, html, css } from 'lit-element';

import '@cwmr/paper-autocomplete/paper-autocomplete.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import '@cwmr/paper-autocomplete/paper-autocomplete';

import { cmpVersion } from './utils.js';
import './pb-code-editor.js';

import { get as i18n, translate } from "./pb-i18n.js";

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
                grid-template-columns:150px auto 50px 50px;
                grid-column-gap:20px;
                grid-row-gap:20px;
                margin-bottom:10px;
            }
            paper-dropdown-menu{
                align-self:start;
            }
            paper-icon-button, paper-checkbox {
                align-self: center;
                margin-top: 16px;
            }
        `;
    }

    render() {
        return html`
        <div class="wrapper">
            
            <paper-autocomplete id="combo" text="${this.name}" placeholder="${translate('odd.editor.model.param-name-placeholder')}" label="Name" 
                .source="${this._currentParameters}"></paper-autocomplete>

            <pb-code-editor id="editor"
                        label="Parameter"
                        mode="xquery"
                        code="${this.value}"
                        linter="${this.endpoint}/${cmpVersion(this.apiVersion, '1.0.0') ? 'modules/editor.xql' : 'api/lint'}"
                        apiVersion="${this.apiVersion}"></pb-code-editor>
            <paper-checkbox id="set" ?checked="${this.setParam}" @change="${this._handleCodeChange}">${translate('odd.editor.model.set-param')}</paper-checkbox>
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
            setParam: {
                type: Boolean,
                attribute: 'set'
            },
            _currentParameters: {
                type: Array
            },
            endpoint: {
                type: String
            },
            apiVersion: {
                type: String
            }

        };
    }

    constructor() {
        super();
        this.name = '';
        this.value = '';
        this.setParam = false;
        this.behaviour = '';
        this.currentParameters = [];
        this.parameters = {
            '': [],
            alternate: ["default", "alternate", "persistent"],
            anchor: ["content", "id"],
            block: ["content"],
            body: ["content"],
            break: ["content", "type", "label"],
            cell: ["content"],
            cit: ["content", "source"],
            "document": ["content"],
            figure: ["content", "title"],
            graphic: ["content", "url", "width", "height", "scale", "title"],
            heading: ["content", "level"],
            inline: ["content"],
            link: ["content", "uri", "target"],
            list: ["content", "type"],
            listItem: ["content", "n"],
            metadata: ["content"],
            note: ["content", "place", "label"],
            omit: [],
            paragraph: ["content"],
            row: ["content"],
            section: ["content"],
            table: ["content"],
            text: ["content"],
            title: ["content"],
            webcomponent: ["content", "name"]
        };

        this.selected = '';
        this.endpoint = '';

    }

    connectedCallback() {
        super.connectedCallback();
        this.value = this.value.trim();
        this.dispatchEvent(new CustomEvent('parameter-connected', { composed: true, bubbles: true, detail: { target: this } }));
    }

    attributeChangedCallback(name, old, value) {
        super.attributeChangedCallback(name, old, value);
        if (name === 'behaviour') {
            this._currentParameters = this.parameters[value];
        }
    }

    firstUpdated(changedProperties) {
        // console.log('parameters firstupdated ', changedProperties);
        this.selected = this.parameters[this.behaviour] || [];
        this.requestUpdate();

        this.shadowRoot.getElementById('combo').addEventListener('focused-changed', this._handleCodeChange.bind(this));
        this.shadowRoot.getElementById('editor').addEventListener('code-changed', this._handleCodeChange.bind(this));
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
        this.setParam = this.shadowRoot.getElementById('set').checked;
        this.dispatchEvent(new CustomEvent('parameter-changed', { composed: true, bubbles: true, detail: { name: this.name, value: this.value, set: this.setParam } }));
    }


}
customElements.define('pb-odd-parameter-editor', PbOddParameterEditor);
