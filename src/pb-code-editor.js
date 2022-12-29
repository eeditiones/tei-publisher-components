import { LitElement, html, css } from 'lit-element';
import "@jinntec/jinn-codemirror/dist/jinn-codemirror-bundle";
import { get as i18n, translate } from './pb-i18n.js';
import { pbMixin } from "./pb-mixin.js";


/**
 * A code editor based on codemirror 6. Provides a wrapper around
 * [@jinntec/jinn-codemirror](https://github.com/JinnElements/jinn-codemirror),
 * mainly for backwards compatibility.
 *
 * @demo demo/pb-code-editor.html
 */
export class PbCodeEditor extends pbMixin(LitElement) {

    static get properties() {
        return {
            ...super.properties,
            /**
             * the code as a string
             */
            code: {
                type: String,
                reflect: true
            },
            /**
             * the language mode e.g. 'javascript' or 'xquery'.
             */
            mode: {
                type: String
            },
            /**
             * label for the editor
             */
            label: {
                type: String
            },
            /**
             * placeholder if code is empty
             */
            placeholder: {
                type: String
            },
            /**
             * tab indent size
             */
            tabSize: {
                type: Number
            },
            linter: {
                attribute: true
            }
        };
    }

    constructor() {
        super();

        this.code = '';
        this.mode = 'xml';
        this.placeholder = 'odd.editor.model.empty';
        this.tabSize = 2;
        this.label = '';
        this.linter = '';
        this._editor = null;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    firstUpdated() {
        super.firstUpdated();

        this._editor = this.shadowRoot.getElementById('editor');
        this._editor.addEventListener('update', () => {
            this._setCode(this._editor.content);
        })
    }

    render() {
        return html`
            <div class="label">${this.label}</div>
            <jinn-codemirror id="editor" mode="${this.mode}" code="${this.code}" placeholder="${translate(this.placeholder)}"></jinn-codemirror>
        `;
    }

    getSource() {
        if (!this._editor) {
            return '';
        }
        return this._editor.value;
    }

    _setCode(value) {
        this.code = value
        this.dispatchEvent(new CustomEvent('code-changed', { composed: true, bubbles: true, detail: { code: this.code } }));
    }

    refresh() {
    }

    static get styles() {
        return css`
            :host {
                display: block;
                width: 100%;
                margin: 0;
                position: relative;
                color:inherit;
            }

            #editor {
              width: 100%;
              height: auto;
            }

            .label {
                color: var(--paper-grey-500);
                margin-bottom:5px;
            }
        `;
    }
}
customElements.define('pb-code-editor', PbCodeEditor);