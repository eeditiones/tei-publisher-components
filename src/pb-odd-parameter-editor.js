// @ts-nocheck
import { LitElement, html, css } from 'lit';

import './pb-autocomplete.js';
import './pb-icon-button.js';
import '@jinntec/jinn-codemirror/dist/src/jinn-codemirror';

import { cmpVersion } from './utils.js';
import { get as i18n, translate } from './pb-i18n.js';

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
      .wrapper {
        display: grid;
        grid-template-columns: 150px auto 50px 50px;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        margin-bottom: 10px;
      }
      pb-icon-button {
        align-self: center;
        margin-top: 16px;
      }

      .pb-checkbox {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        align-self: center;
        margin-top: 16px;
        font-size: 0.95rem;
        color: rgba(0, 0, 0, 0.87);
      }

      .pb-checkbox input {
        width: 16px;
        height: 16px;
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

      pb-autocomplete {
        width: 100%;
      }

      .editor label {
        margin-bottom: 5px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.6);
      }
    `;
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="pb-field">
          <span class="pb-field__label">${translate('odd.editor.model.param-name-placeholder')}</span>
          <pb-autocomplete
            id="combo"
            .suggestions=${this._currentParameters}
            .value=${this.name || ''}
            placeholder="${translate('odd.editor.model.param-name-placeholder')}"
            @pb-autocomplete-input=${this._handleNameInput}
            @pb-autocomplete-selected=${this._handleNameSelected}
          ></pb-autocomplete>
        </div>

        <div class="editor">
          <label>Parameter</label>
          <jinn-codemirror
            id="editor"
            mode="xquery"
            code="${this.value}"
            linter="${this.endpoint}/${cmpVersion(this.apiVersion, '1.0.0')
              ? 'modules/editor.xql'
              : 'api/lint'}"
          ></jinn-codemirror>
        </div>
        <label class="pb-checkbox">
          <input
            id="set"
            type="checkbox"
            ?checked=${this.setParam}
            @change=${this._handleSetToggle}
          />
          <span>${translate('odd.editor.model.set-param')}</span>
        </label>
        <pb-icon-button
          class="icon-button"
          icon="delete"
          title="delete this parameter"
          @click="${this._delete}"
        ></pb-icon-button>
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
        reflect: true,
      },
      /**
       * the parameter value
       */
      value: {
        type: String,
        reflect: true,
      },
      behaviour: {
        type: String,
      },
      parameters: {
        type: Object,
      },
      setParam: {
        type: Boolean,
        attribute: 'set',
      },
      _currentParameters: {
        type: Array,
      },
      endpoint: {
        type: String,
      },
      apiVersion: {
        type: String,
      },
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
      alternate: ['default', 'alternate', 'persistent'],
      anchor: ['content', 'id'],
      block: ['content'],
      body: ['content'],
      break: ['content', 'type', 'label'],
      cell: ['content'],
      cit: ['content', 'source'],
      document: ['content'],
      figure: ['content', 'title'],
      graphic: ['content', 'url', 'width', 'height', 'scale', 'title'],
      heading: ['content', 'level'],
      inline: ['content'],
      link: ['content', 'uri', 'target'],
      list: ['content', 'type'],
      listItem: ['content', 'n'],
      metadata: ['content'],
      note: ['content', 'place', 'label'],
      omit: [],
      paragraph: ['content'],
      row: ['content'],
      section: ['content'],
      table: ['content'],
      text: ['content'],
      title: ['content'],
      webcomponent: ['content', 'name'],
    };

    this.selected = '';
    this.endpoint = '';
    this._currentParameters = [];
    if (this.behaviour && this.parameters[this.behaviour]) {
      this._currentParameters = this.parameters[this.behaviour];
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.value = this.value.trim();
    this.dispatchEvent(
      new CustomEvent('parameter-connected', {
        composed: true,
        bubbles: true,
        detail: { target: this },
      }),
    );
  }

  attributeChangedCallback(name, old, value) {
    super.attributeChangedCallback(name, old, value);
    if (name === 'behaviour') {
      this._currentParameters = (this.parameters && this.parameters[value]) || [];
    }
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('parameters') || changedProperties.has('behaviour')) {
      this._currentParameters = (this.parameters && this.parameters[this.behaviour]) || [];
      const combo = this.shadowRoot?.getElementById('combo');
      if (combo) {
        combo.suggestions = this._currentParameters;
      }
    }
  }

  firstUpdated(changedProperties) {
    // console.log('parameters firstupdated ', changedProperties);
    this.selected = this.parameters[this.behaviour] || [];
    this.requestUpdate();

    this.shadowRoot
      .getElementById('editor')
      .addEventListener('update', this._handleCodeChange.bind(this));
  }

  refreshEditor() {
    // console.log('parameters refresh');
    const editor = this.shadowRoot.getElementById('editor');
    if (!editor) {
    }
    // editor.refresh();
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
    this._emitChange();
  }

  _handleNameInput(ev) {
    const { text, value } = ev.detail || {};
    this.name = value ?? text ?? '';
    this._emitChange();
  }

  _handleNameSelected(ev) {
    const { text, value } = ev.detail || {};
    this.name = value ?? text ?? '';
    this._emitChange();
  }

  _handleSetToggle(ev) {
    this.setParam = ev.target.checked;
    this._emitChange();
  }

  _emitChange() {
    const editor = this.shadowRoot.getElementById('editor');
    if (editor) {
      this.value = editor.content || editor.value || '';
    }
    const combo = this.shadowRoot.getElementById('combo');
    if (combo && !this.name) {
      this.name = combo.value || '';
    }
    const checkbox = this.shadowRoot.getElementById('set');
    if (checkbox) {
      this.setParam = checkbox.checked;
    }
    this.dispatchEvent(
      new CustomEvent('parameter-changed', {
        composed: true,
        bubbles: true,
        detail: { name: this.name, value: this.value, set: this.setParam },
      }),
    );
  }
}
customElements.define('pb-odd-parameter-editor', PbOddParameterEditor);
