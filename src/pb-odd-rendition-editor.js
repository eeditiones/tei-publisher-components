// @ts-nocheck
import { LitElement, html, css } from 'lit-element';

import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';

import './pb-code-editor.js';


/**
 * represents an odd parameter element for editing
 *
 * @customElement
 *
 * @polymer
 */
export class PbOddRenditionEditor extends LitElement {

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
            }
            
            paper-icon-button{
                align-self:center;
            }
        `;
    }

    render() {
        return html`
        <div class="wrapper">
            <paper-dropdown-menu label="Scope">
                <paper-listbox id="scopeList" slot="dropdown-content" selected="${this.scope}" attr-for-selected="value"
                    @iron-select="${this._listchanged}">
                      ${this.scopes.map(scope =>
            html`
                            <paper-item value="${scope}">${scope}</paper-item>
                        `)}
                </paper-listbox>
            </paper-dropdown-menu>
            <pb-code-editor
                id="editor"
                label="Rendition"
                code="${this.css}"
                mode="css"
                @code-changed="${this._handleCodeChange}"></pb-code-editor>
            <paper-icon-button @click="${this._remove}" icon="delete" title="delete this rendition"></paper-icon-button>
        </div>



        <slot></slot>

        `;
    }


    static get properties() {
        return {
            scopes: {
                type: Array
            },
            css: {
                type: String,
                reflect: true
            },
            scope: {
                type: String,
                reflect: true
            },
            selected: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.scopes = ["", "before", "after"];
        this.css = '';
        this.scope = '';
        this.selected = '';
        this._initialized = false;
    }

    connectedCallback() {
        super.connectedCallback();
        this.css = this.css.trim();
        this.dispatchEvent(new CustomEvent('rendition-connected', { composed: true, bubbles: true, detail: { target: this } }));
    }

    firstUpdated(changedProperties) {
        this.refreshEditor();
        this._initialized = true;
    }

    refreshEditor() {
        console.log('refreshEditor');
        const editor = this.shadowRoot.getElementById('editor');
        if (!editor) { return; }
        editor.refresh();
    }

    _remove(ev) {
        ev.preventDefault();
        this.dispatchEvent(new CustomEvent('remove-rendition', {}));
    }

    _handleCodeChange() {
        this.css = this.shadowRoot.getElementById('editor').getSource();
        this.dispatchEvent(new CustomEvent('rendition-changed', { composed: true, bubbles: true, detail: { name: this.name, css: this.css } }));
    }

    _listchanged(e) {
        const scopelist = this.shadowRoot.getElementById('scopeList');
        this.scope = scopelist.selected;
    }


}
customElements.define('pb-odd-rendition-editor', PbOddRenditionEditor);
