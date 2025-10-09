import { LitElement, html, css, nothing } from 'lit';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import './pb-icon.js';
import './pb-dialog.js';

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
      const endpoint = detail.endpoint;
      const templatesUrl = this.minApiVersion('1.0.0')
        ? `${endpoint}/api/templates`
        : `${endpoint}/modules/lib/components-list-templates.xql`;
      const oddsUrl = this.minApiVersion('1.0.0')
        ? `${endpoint}/api/odd`
        : `${endpoint}/modules/lib/components-list-odds.xql`;
      const action = this.minApiVersion('1.0.0')
        ? `${endpoint}/api/apps/generate`
        : `${endpoint}/modules/components-generate.xql`;

      if (form) {
        form.action = action;
      }

      fetch(templatesUrl, {
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
        })
        .catch(error => console.error('<pb-edit-app> Failed to load templates', error));

      fetch(oddsUrl, {
        method: 'GET',
        mode: 'cors',
        credentials: 'same-origin',
      })
        .then(response => response.json())
        .then(json => {
          this.odds = Array.isArray(json) ? json : [];
          this.requestUpdate();
        })
        .catch(error => console.error('<pb-edit-app> Failed to load odds list', error));
    });

    if (form) {
      form.addEventListener('submit', this._handleSubmit.bind(this));
    }
  }

  _doSubmit() {
    const form = this.shadowRoot.getElementById('form');
    if (!form) {
      return;
    }
    if (form.requestSubmit) {
      form.requestSubmit();
    } else {
      form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
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

  async _handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.reportValidity && !form.reportValidity()) {
      return;
    }

    this.emitTo('pb-start-update');

    const payload = this._collectFormData(form);
    const action = form.action || '';

    try {
      const response = await fetch(action, {
        method: form.method || 'POST',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify(payload),
      });

      const contentType = response.headers.get('content-type') || '';
      const isJson = contentType.includes('application/json');
      const data = isJson ? await response.json() : await response.text();

      if (!response.ok) {
        const error = data && typeof data === 'object' ? data : { description: data };
        throw Object.assign(new Error(error.description || response.statusText), { result: error });
      }

      this._handleSubmitSuccess(data, form);
    } catch (error) {
      this._handleSubmitError(error);
    }
  }

  _collectFormData(form) {
    const formData = new FormData(form);
    const payload = {};
    Array.from(form.elements || [])
      .filter(el => el.name && !el.disabled && !el.closest('[disabled]'))
      .forEach(element => {
        if (!(element.name in payload)) {
          payload[element.name] = null;
        }
      });
    formData.forEach((value, key) => {
      if (Object.prototype.hasOwnProperty.call(payload, key) && payload[key] != null) {
        if (Array.isArray(payload[key])) {
          payload[key].push(value);
        } else {
          payload[key] = [payload[key], value];
        }
      } else {
        payload[key] = value;
      }
    });
    return payload;
  }

  _handleSubmitSuccess(result, form) {
    this.emitTo('pb-end-update');

    if (result && result.target) {
      const baseURL = window.location.href.replace(/^(.*)\/tei-publisher\/.*/, '$1');
      const abbrev = form.querySelector('input[name=abbrev]');
      this.url = `${baseURL}/${abbrev ? abbrev.value : ''}`;
      this.error = null;
    } else {
      this.error = result && result.description ? result.description : 'Request failed';
      this.url = null;
    }

    this._openDialog();
  }

  _handleSubmitError(error) {
    this.emitTo('pb-end-update');
    const description = error?.result?.description || error?.message || 'Request failed';
    this.error = description;
    this.url = null;
    this._openDialog();
  }

  _openDialog() {
    const dialog = this.shadowRoot.getElementById('dialog');
    dialog?.openDialog();
  }

  render() {
    return html`
      <form id="form" method="POST" accept="application/json" enctype="application/json">
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
      <pb-dialog id="dialog" title="${translate('appgen.dialog.title')}">
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
        <div slot="footer" class="buttons">
          <button
            class="pb-button pb-button--text"
            type="button"
            rel="prev"
            autofocus
          >
            ${translate('dialogs.close')}
          </button>
        </div>
      </pb-dialog>
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
