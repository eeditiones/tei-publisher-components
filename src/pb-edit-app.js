import { LitElement, html, css, nothing } from 'lit';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import './pb-icon.js';
import '@polymer/paper-dialog';
import '@polymer/paper-dialog-scrollable';
import '@polymer/iron-form';

/**
 * Editor component for the App Generator. Allows to edit all settings for an application.
 *
 * @fires pb-start-update - Fired before the element updates its content
 * @fires pb-end-update - Fired after the element has finished updating its content
 */
export class PbEditApp extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      error: {
        type: String,
      },
      url: {
        type: String,
      },
      templates: {
        type: Array,
      },
      odds: {
        type: Array,
      },
      _templateValue: {
        type: String,
      },
      _defaultViewValue: {
        type: String,
      },
      _indexValue: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.templates = [];
    this.odds = [];
    this._templateValue = 'view.html';
    this._defaultViewValue = 'div';
    this._indexValue = 'tei:div';
  }

  connectedCallback() {
    super.connectedCallback();
  }

  firstUpdated() {
    const form = this.shadowRoot.getElementById('form');
    waitOnce('pb-page-ready', detail => {
      let url;
      if (this.minApiVersion('1.0.0')) {
        url = `${detail.endpoint}/api/templates`;
      } else {
        url = `${detail.endpoint}/modules/lib/components-list-templates.xql`;
      }
      fetch(url, {
        method: 'GET',
        mode: 'cors',
        credentials: 'same-origin',
      })
        .then(response => response.json())
        .then(json => {
          const list = Array.isArray(json) ? json : [];
          this.templates = list;
          if (!list.find(item => item.name === this._templateValue)) {
            this._templateValue = list.length ? list[0].name : '';
          }
          this.requestUpdate();
        });

      if (this.minApiVersion('1.0.0')) {
        url = `${detail.endpoint}/api/odd`;
      } else {
        url = `${detail.endpoint}/modules/lib/components-list-odds.xql`;
      }
      fetch(url, {
        method: 'GET',
        mode: 'cors',
        credentials: 'same-origin',
      })
        .then(response => response.json())
        .then(json => {
          this.odds = Array.isArray(json) ? json : [];
          this.requestUpdate();
        });

      const htmlForm = this.shadowRoot.querySelector('form');
      if (this.minApiVersion('1.0.0')) {
        htmlForm.action = `${detail.endpoint}/api/apps/generate`;
      } else {
        htmlForm.action = `${detail.endpoint}/modules/components-generate.xql`;
      }
    });
    form.addEventListener('iron-form-response', event => {
      console.log(event);
      event.detail.completes.then(r => {
        this.emitTo('pb-end-update');
        const result = r.parseResponse();
        console.log('<pb-edit-app> Received response: %o', result);
        if (result.target) {
          const baseURL = window.location.href.replace(/^(.*)\/tei-publisher\/.*/, '$1');
          const abbrev = this.shadowRoot.querySelector('input[name=abbrev]');
          this.url = `${baseURL}/${abbrev ? abbrev.value : ''}`;
          this.error = null;
        } else {
          this.error = result.description;
        }
        this.shadowRoot.getElementById('dialog').open();
      });
    });
    form.addEventListener('iron-form-error', event => {
      this.emitTo('pb-end-update');

      console.log('<pb-edit-app> Received response: %o', event.detail.request.response);
      this.error = event.detail.request.response.description;
      this.shadowRoot.getElementById('dialog').open();
    });
    form.addEventListener('iron-form-invalid', () => this.emitTo('pb-end-update'));
  }

  _doSubmit() {
    this.emitTo('pb-start-update');
    const form = this.shadowRoot.getElementById('form');
    form.submit();
  }

  _renderTextField({ id, name, type = 'text', required = false, pattern, placeholder = '', label }) {
    return html`
      <label class="pb-field" for="${id}">
        <span class="pb-field__label">${label}</span>
        <input
          id="${id}"
          class="pb-input"
          type="${type}"
          name="${name}"
          ?required=${required}
          pattern=${pattern ? pattern : nothing}
          placeholder="${placeholder}"
        />
      </label>
    `;
  }

  _onTemplateChange(event) {
    this._templateValue = event.target.value;
  }

  _onDefaultViewChange(event) {
    this._defaultViewValue = event.target.value;
  }

  _onIndexChange(event) {
    this._indexValue = event.target.value;
  }

  render() {
    return html`
      <iron-form id="form">
        <form method="POST" accept="application/json" enctype="application/json">
          <fieldset class="pb-fieldset">
            <legend>${translate('document.selectODD')}</legend>
            ${this.odds.map(
              odd => html`
                <label class="pb-checkbox">
                  <input
                    type="checkbox"
                    name="odd"
                    value="${odd.name}"
                    ?checked=${Boolean(odd.checked)}
                  />
                  <span>${odd.label}</span>
                </label>
              `,
            )}
          </fieldset>

          ${this._renderTextField({
            id: 'uri',
            name: 'uri',
            type: 'url',
            required: true,
            placeholder: 'https://e-editiones.org/apps/my-simple-app',
            label: translate('appgen.uri'),
          })}

          ${this._renderTextField({
            id: 'abbrev',
            name: 'abbrev',
            pattern: '[a-zA-Z0-9-_]+',
            required: true,
            placeholder: translate('appgen.abbrev.placeholder'),
            label: translate('appgen.abbrev.label'),
          })}

          ${this._renderTextField({
            id: 'data-collection',
            name: 'data-collection',
            pattern: '[a-zA-Z0-9-_/]+',
            placeholder: 'data',
            label: translate('appgen.collection'),
          })}

          ${this._renderTextField({
            id: 'title',
            name: 'title',
            required: true,
            placeholder: translate('appgen.title.label'),
            label: translate('appgen.title.help'),
          })}

          <fieldset class="pb-fieldset">
            <legend>${translate('appgen.template.help')}</legend>
            <label class="pb-field" for="template">
              <span class="pb-field__label">${translate('appgen.template.label')}</span>
              <select
                id="template"
                class="pb-select"
                name="template"
                .value=${this._templateValue || ''}
                @change=${this._onTemplateChange}
              >
                ${this.templates.map(
                  t => html`<option value="${t.name}">${t.title}</option>`,
                )}
              </select>
            </label>
          </fieldset>

          <fieldset class="pb-fieldset">
            <legend>${translate('appgen.view.help')}</legend>
            <label class="pb-field" for="defaultView">
              <span class="pb-field__label">${translate('appgen.label')}</span>
              <select
                id="defaultView"
                class="pb-select"
                name="default-view"
                .value=${this._defaultViewValue || ''}
                @change=${this._onDefaultViewChange}
              >
                <option value="div">${translate('appgen.view.div')}</option>
                <option value="page">${translate('appgen.view.page')}</option>
              </select>
            </label>
          </fieldset>

          <fieldset class="pb-fieldset">
            <legend>${translate('appgen.index.help')}</legend>
            <label class="pb-field" for="index">
              <span class="pb-field__label">${translate('appgen.index.label')}</span>
              <select
                id="index"
                class="pb-select"
                name="index"
                .value=${this._indexValue || ''}
                @change=${this._onIndexChange}
              >
                <option value="tei:div">${translate('appgen.index.index-div')}</option>
                <option value="tei:text">${translate('appgen.index.index-text')}</option>
              </select>
            </label>
          </fieldset>

          <fieldset class="pb-fieldset">
            <legend>${translate('appgen.account.user')}</legend>
            ${this._renderTextField({
              id: 'owner',
              name: 'owner',
              required: true,
              placeholder: translate('login.user'),
              label: translate('appgen.account.owner'),
            })}
            ${this._renderTextField({
              id: 'password',
              name: 'password',
              type: 'password',
              required: true,
              placeholder: translate('login.password'),
              label: translate('appgen.account.password'),
            })}
          </fieldset>
          <button
            id="submit"
            class="pb-button pb-button--contained"
            type="button"
            @click="${this._doSubmit}"
          >
            <pb-icon icon="save"></pb-icon>
            ${translate('appgen.submit')}
          </button>
        </form>
      </iron-form>
      <paper-dialog id="dialog">
        <h2>${translate('appgen.dialog.title')}</h2>
        <div id="dialogContent">
          ${this.error
            ? html`<div id="error">${this.error}</div>`
            : html`<a
                  href="${this.url}"
                  target="_blank"
                  class="pb-button pb-button--text"
                >
                  <pb-icon icon="icons:open-in-new"></pb-icon>
                  ${translate('appgen.open')}
                </a>
                <p>${translate('appgen.success')}</p>`}
        </div>
        <div class="buttons">
          <button
            class="pb-button pb-button--text"
            type="button"
            dialog-dismiss
            autofocus
          >
            ${translate('dialogs.close')}
          </button>
        </div>
      </paper-dialog>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .pb-fieldset {
        margin: 16px 0;
        padding: 0;
        border: 0;
      }
      .pb-fieldset legend {
        color: #909090;
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        margin-bottom: 8px;
      }
      .pb-checkbox {
        display: block;
        margin-left: 20px;
        margin-top: 10px;
        font-size: 0.95rem;
        color: rgba(0, 0, 0, 0.87);
        cursor: pointer;
      }
      .pb-checkbox input {
        margin-right: 8px;
      }
      .pb-field {
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
        margin-bottom: 1rem;
        max-width: 864px;
      }
      .pb-field__label {
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.6);
      }
      .pb-input,
      .pb-select {
        height: var(--pb-input-height, 48px);
        padding: 0.5rem 0.75rem;
        border: 1px solid rgba(0, 0, 0, 0.16);
        border-radius: 8px;
        font: inherit;
        color: inherit;
        background: #fff;
        transition: border-color 120ms ease, box-shadow 120ms ease;
        line-height: 1.4;
      }
      .pb-input::placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
      .pb-input:focus,
      .pb-select:focus {
        outline: none;
        border-color: #1976d2;
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.16);
      }
      .pb-select {
        appearance: none;
        background-image: linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 0.4) 50%),
          linear-gradient(135deg, rgba(0, 0, 0, 0.4) 50%, transparent 50%),
          linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
        background-position: calc(100% - 18px) calc(0.6em + 2px),
          calc(100% - 13px) calc(0.6em + 2px), calc(100% - 2.5rem) 0.5em;
        background-size: 5px 5px, 5px 5px, 1px 2.25em;
        background-repeat: no-repeat;
      }
      paper-dialog {
        min-width: 420px;
        max-width: 640px;
        min-height: 128px;
      }

      paper-dialog h2 {
        background-color: #607d8b;
        padding: 16px 8px;
        margin-top: 0;
        color: #f0f0f0;
      }

      .content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .content a {
        display: block;
        flex: 1 0;
      }
    `;
  }
}
customElements.define('pb-edit-app', PbEditApp);
