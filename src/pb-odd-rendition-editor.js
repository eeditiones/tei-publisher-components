// @ts-nocheck
import { LitElement, html, css } from 'lit';
import { translate } from './pb-i18n.js';

import './pb-icon-button.js';

import '@jinntec/jinn-codemirror/dist/src/jinn-codemirror';

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
      .wrapper {
        display: grid;
        grid-template-columns: 150px auto 50px;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        margin-bottom: 10px;
      }

      .editor label {
        margin-bottom: 5px;
        font-size: 12px;
        font-weight: 400;
        color: var(--paper-grey-500);
      }

      .pb-field {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
      }

      .pb-field__label {
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: rgba(0, 0, 0, 0.6);
      }

      .pb-select {
        height: var(--pb-input-height, 48px);
        padding: 0.5rem 0.75rem;
        border: 1px solid rgba(0, 0, 0, 0.16);
        border-radius: 8px;
        font: inherit;
        color: inherit;
        background: #fff;
        appearance: none;
        background-image: linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 0.4) 50%),
          linear-gradient(135deg, rgba(0, 0, 0, 0.4) 50%, transparent 50%),
          linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
        background-position: calc(100% - 18px) calc(0.6em + 2px),
          calc(100% - 13px) calc(0.6em + 2px), calc(100% - 2.5rem) 0.5em;
        background-size: 5px 5px, 5px 5px, 1px 2.25em;
        background-repeat: no-repeat;
        transition: border-color 120ms ease, box-shadow 120ms ease;
      }

      .pb-select:focus {
        outline: none;
        border-color: #1976d2;
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.16);
      }

      pb-icon-button {
        align-self: center;
      }
    `;
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="pb-field">
          <span class="pb-field__label">Scope</span>
          <select class="pb-select" .value=${this.scope || ''} @change=${this._handleScopeChange}>
            ${this.scopes.map(
              scope => html`<option value="${scope}">${this._displayScope(scope)}</option>`,
            )}
          </select>
        </div>
        <div class="editor">
          <label>Rendition</label>
          <jinn-codemirror
            id="editor"
            label="Rendition"
            code="${this.css || ''}"
            mode="css"
            @update="${this._handleCodeChange}"
          ></jinn-codemirror>
        </div>
        <pb-icon-button
          class="icon-button"
          icon="delete"
          title="delete this rendition"
          @click="${this._remove}"
        ></pb-icon-button>
      </div>

      <slot></slot>
    `;
  }

  static get properties() {
    return {
      scopes: {
        type: Array,
      },
      css: {
        type: String,
        reflect: true,
      },
      scope: {
        type: String,
        reflect: true,
      },
      selected: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.scopes = ['', 'before', 'after'];
    this.css = '';
    const scopeAttr = this.getAttribute('scope');
    this.scope = scopeAttr != null ? scopeAttr : '';
    this.selected = '';
    this._initialized = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.css = this.css.trim();
    this.dispatchEvent(
      new CustomEvent('rendition-connected', {
        composed: true,
        bubbles: true,
        detail: { target: this },
      }),
    );
  }

  firstUpdated(changedProperties) {
    this.refreshEditor();
    this._initialized = true;
  }

  refreshEditor() {
    console.log('refreshEditor');
    const editor = this.shadowRoot.getElementById('editor');
    if (!editor) {
    }
    // editor.refresh();
  }

  _remove(ev) {
    ev.preventDefault();
    this.dispatchEvent(new CustomEvent('remove-rendition', {}));
  }

  _handleCodeChange() {
    this.css = this.shadowRoot.getElementById('editor').value;
    this._emitChange();
  }

  _handleScopeChange(event) {
    this.scope = event.target.value;
    this._emitChange();
  }

  _emitChange() {
    this.dispatchEvent(
      new CustomEvent('rendition-changed', {
        composed: true,
        bubbles: true,
        detail: { name: this.name, css: this.css, scope: this.scope },
      }),
    );
  }

  _displayScope(scope) {
    if (!scope) {
      return '(default)';
    }
    return scope;
  }
}
customElements.define('pb-odd-rendition-editor', PbOddRenditionEditor);
