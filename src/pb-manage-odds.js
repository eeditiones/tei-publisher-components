import { LitElement, html, css } from 'lit';
import './pb-dialog.js';
import '@polymer/iron-ajax';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import './pb-restricted.js';
import './pb-ajax.js';
import './pb-edit-xml.js';
import { cmpVersion } from './utils.js';
import { themableMixin } from './theming.js';

/**
 * High-level component implementing the ODD management panel
 * on the start page.
 * @fires pb-start-update - Fired before the element updates its content
 * @fires pb-end-update - Fired after the element has finished updating its content
 * @fires pb-load - Sending the ODD to be used
 * @fires pb-refresh-odds When received, refresh the list of ODDs
 */
export class PbManageOdds extends themableMixin(pbMixin(LitElement)) {
  static get properties() {
    return {
      ...super.properties,
      /**
       * array of ODD-files to be listed
       */
      odds: {
        type: Array,
      },
      target: {
        type: String,
      },
      _valid: {
        type: Boolean,
      },
      _current: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.odds = [];
  }

  connectedCallback() {
    super.connectedCallback();

    this.subscribeTo('pb-refresh-odds', ev => {
      this._refresh();

      // regenerate newly uploaded ODDs
      const regenAjax = this.shadowRoot.getElementById('regenerate');
      const params = ev.detail.odds.map(odd => `odd=${odd}`).join('&');
      if (this.minApiVersion('1.0.0')) {
        regenAjax.url = `api/odd?${params}`;
      } else {
        regenAjax.url = `modules/lib/regenerate.xql?${params}`;
      }
      regenAjax.trigger();
    });
  }

  firstUpdated() {
    super.firstUpdated();

    this._loader = this.shadowRoot.getElementById('load');

    waitOnce('pb-page-ready', options => {
      if (cmpVersion(options.apiVersion, '1.0.0') < 0) {
        this._loader.url = `${options.endpoint}/modules/lib/components-odd.xql`;
      } else {
        this._loader.url = `${options.endpoint}/api/odd`;
      }
      this._refresh();
    });
  }

  _refresh(params) {
    this.emitTo('pb-start-update');

    this._loader.params = params;
    this._loader.generateRequest();
  }

  _update() {
    this.emitTo('pb-end-update');

    this.odds = this._loader.lastResponse;
    this.requestUpdate();
  }

  _selectODD(ev) {
    const selected = ev.model.itemsIndex;
    this.odds.forEach((odd, index) => {
      if (index !== selected && odd.current) {
        this.set(`odds.${index}.current`, false);
        this.set(`odds.${selected}.current`, true);
      }
    });
    const params = { odd: `${ev.model.item.name}.odd` };
    console.log('<pb-manage-odds> selected ODD: %o', params);

    this.emitTo('pb-load', {
      params,
    });
  }

  _createODD(ev) {
    ev.preventDefault();
    
    const name = this.shadowRoot.querySelector('input[name="new_odd"]').value;
    const title = this.shadowRoot.querySelector('input[name="title"]').value;
    console.log('<pb-manage-odds> create ODD: %s, %s', name, title);
    if (this.lessThanApiVersion('1.0.0')) {
      this._refresh({ new_odd: name, title });
    } else {
      const createRequest = this.shadowRoot.getElementById('create');
      createRequest.url = `${this.getEndpoint()}/api/odd/${name}`;
      createRequest.params = {
        title,
      };
      this.emitTo('pb-start-update');
      createRequest.generateRequest();
    }
  }

  _created(ev) {
    this.emitTo('pb-end-update');
    if (ev.detail.status === 201) {
      this._refresh();
    } else {
      console.log('<pb-manage-odds> unexpected response for create odd: %o', ev.detail);
    }
  }

  _createByExample() {
    const name = this.shadowRoot.querySelector('input[name="new_odd"]').value;
    const title = this.shadowRoot.querySelector('input[name="title"]').value;
    const params = { new_odd: name, title };
    const fileBrowser = document.getElementById(this.target);
    if (!(fileBrowser || fileBrowser.getSelected)) {
      console.error('<pb-manage-odds> target %s not found', this.target);
    }
    const selected = fileBrowser.getSelected();
    document.querySelectorAll('.document-select paper-checkbox[checked]').forEach(checkbox => {
      selected.push(checkbox.value);
    });
    console.log('<pb-manage-odds> create ODD by example: %o', selected);
    params.byExample = selected;
    this._refresh(params);
  }

  _delete(odd) {
    this._current = odd;
    this.shadowRoot.getElementById('deleteDialog').openDialog();
  }

  _confirmDelete() {
    if (this._current) {
      console.log('<pb-manage-odds> deleting ODD: %s', this._current);
      if (this.lessThanApiVersion('1.0.0')) {
        this._refresh({ delete: this._current });
      } else {
        this.emitTo('pb-start-update');
        const deleteRequest = this.shadowRoot.getElementById('delete');
        deleteRequest.url = `${this.getEndpoint()}/api/odd/${this._current}`;
        deleteRequest.generateRequest();
      }
      this._current = null;
    } else {
      console.error('<pb-manage-odds> no file marked for deletion');
    }
  }

  _deleted() {
    const deleteRequest = this.shadowRoot.getElementById('delete');
    const error = deleteRequest.lastError;
    if (error.status === 410) {
      this._refresh();
    } else {
      console.error('<pb-manage-odds> failed to delete odd: %d %o', error.status, error.response);
      this.emitTo('pb-end-update');
    }
  }

  _validate() {
    // Validate the entire form to see if we should enable the `Submit` button.
    const valid = this.shadowRoot.getElementById('ironform').validate();
    this.shadowRoot.getElementById('createBtn').disabled = !valid;
    this.shadowRoot.getElementById('createByEx').disabled = !valid;
  }

  render() {
    if (!this.odds) {
      return null;
    }
    const regenUrl = this.lessThanApiVersion('1.0.0') ? 'modules/lib/regenerate.xql' : 'api/odd';
    return html`
      ${this.odds.map(
        odd =>
          html`
            <div class="odd-container">
            <div class="odd">
              <a
                href="odd-editor.html?odd=${odd.name}.odd"
                target="_blank"
                title="edit ODD in graphical editor"
                >${odd.label}</a
              >
              <!-- TODO this toolbar should only appear once per ODD files papercard -->
              <header role="group">
                ${odd.canWrite
                  ? html`
                      <pb-restricted login="login">
                        <pb-ajax
                          url="${regenUrl}?odd=${odd.name}.odd"
                          method="post"
                          class="editor-link"
                          emit="${this.emit ? this.emit : ''}"
                          .emitConfig="${this.emitConfig}"
                        >
                          <h2 slot="title">${translate('menu.admin.recompile')}</h2>
                          <button title="Regenerate ODD">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
                                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
                            </svg>
                          </button
                        </pb-ajax>
                      </pb-restricted>
                      <pb-restricted login="login">
                        <button title="Delete ODD" @click="${() => this._delete(`${odd.name}.odd`)}">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                          </svg>
                        </button>
                      </pb-restricted>
                    `
                  : null}
                <a
                  href="odd-editor.html?odd=${odd.name}.odd"
                  target="_blank"
                  class="editor-link"
                  title="edit ODD in graphical editor"
                  >
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-heading" viewBox="0 0 16 16">
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                        <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                  </button>
                </a>
                <pb-edit-xml path="${odd.path}" class="editor-link">
                  <button title="Edit XML">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10l.293.293 6.5-6.5zm-9.761 5.175-.106.106-1.528 3.881 3.881-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg>
                  </button>
                </pb-edit-xml>
              </header>
            </div>
            <div class="odd-description">${odd.description}</div>
            </div>
          `,
      )}
      <pb-restricted login="login">
        <form action="" method="GET">
            <input
              id="new_odd"
              name="new_odd"
              type="text"
              required
              pattern="[a-zA-Z0-9-_]+"
              placeholder="${translate('odd.manage.filename')}"
            />
            <input
              id="title"
              name="title"
              type="text"
              required
              minlength="1"
              placeholder="${translate('odd.manage.title')}"
            />
          <button id="createBtn" @click="${this._createODD}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
              <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5"/>
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
            </svg>
            <span>${translate('odd.manage.create')}</span>
          </button>
        </form>
      </pb-restricted>
      <pb-ajax id="regenerate" url="${regenUrl}" method="post"></pb-ajax>
      <iron-ajax
        id="load"
        verbose
        handle-as="json"
        method="get"
        with-credentials
        @response="${this._update}"
      >
      </iron-ajax>
      <iron-ajax id="delete" method="delete" with-credentials @error="${this._deleted}"></iron-ajax>
      <iron-ajax
        id="create"
        method="post"
        with-credentials
        @response="${this._created}"
        @error="${this._created}"
      ></iron-ajax>
      <pb-dialog id="deleteDialog" title="${translate('browse.delete')}">
        <p>${translate('odd.manage.delete', { file: this.file })}</p>
        <div slot="footer">
          <button autofocus @click="${this._confirmDelete}" rel="prev">
            ${translate('dialogs.yes')}
          </button>
          <button rel="prev">
            ${translate('dialogs.no')}
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

      .odd-container {
        margin-bottom: .5rem;
        border-bottom: 1px solid var(--pb-manage-odds-border-color, #e0e0e0);
        padding-bottom: .5rem;
      }

      .odd {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: .5rem;
      }

      .odd a,
      .odd a:link,
      .odd a:visited {
        display: block;
        color: var(--pb-manage-odds-link-color);
      }

      .odd > header {
        display: inline-flex;
        column-gap: .25rem;
        justify-content: flex-end;
        align-items: center;
      }

      pb-restricted {
        display: inline-block;
      }

      .odd-description {
        color: #888888;
        font-size: 0.8em;
        margin-top: 0.5rem;
      }

      form {
        margin-top: 1rem;
      }
    `;
  }
}
if (!customElements.get('pb-manage-odds')) {
  customElements.define('pb-manage-odds', PbManageOdds);
}
