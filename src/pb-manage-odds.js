import { LitElement, html, css } from 'lit-element';
import '@polymer/paper-dialog';
import '@polymer/paper-dialog-scrollable';
import '@polymer/iron-ajax';
import '@polymer/paper-checkbox';
import '@polymer/paper-button';
import '@polymer/paper-icon-button';
import '@polymer/paper-input/paper-input.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import { pbMixin } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import './pb-restricted.js';
import './pb-ajax.js';
import './pb-edit-xml.js';

/**
 * High-level component implementing the ODD management panel
 * on the start page.
 * @fires pb-start-update - Fired before the element updates its content
 * @fires pb-end-update - Fired after the element has finished updating its content
 * @fires pb-load - Sending the ODD to be used
 * @fires pb-refresh-odds When received, refresh the list of ODDs
 */
export class PbManageOdds extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            /**
             * array of ODD-files to be listed
             */
            odds: {
                type: Array
            },
            target: {
                type: String
            },
            _valid: {
                type: Boolean
            },
            _current: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.odds = [];
    }

    connectedCallback() {
        super.connectedCallback();

        this.subscribeTo('pb-login', () => this._refresh(), []);
        this.subscribeTo('pb-refresh-odds', (ev) => {
            this._refresh();

            // regenerate newly uploaded ODDs
            const regenAjax = this.shadowRoot.getElementById('regenerate');
            const params = ev.detail.odds.map(odd => `odd=${odd}`).join('&');
            if (this.getApiVersion() < 1.0) {
                regenAjax.url = `modules/lib/regenerate.xql?${params}`;
            } else {
                regenAjax.url = `api/odd?${params}`;
            }
            regenAjax.trigger();
        });
    }

    firstUpdated() {
        super.firstUpdated();

        this._loader = this.shadowRoot.getElementById('load');

        PbManageOdds.waitOnce('pb-page-ready', (options) => {
            if (options.apiVersion < 1.0) {
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
    }

    _selectODD(ev) {
        const selected = ev.model.itemsIndex;
        this.odds.forEach((odd, index) => {
            if (index !== selected && odd.current) {
                this.set('odds.' + index + '.current', false);
                this.set('odds.' + selected + '.current', true);
            }
        });
        const params = { odd: ev.model.item.name + '.odd' };
        console.log('<pb-manage-odds> selected ODD: %o', params);

        this.emitTo('pb-load', {
            "params": params
        });
    }

    _createODD() {
        const name = this.shadowRoot.querySelector('paper-input[name="new_odd"]').value;
        const title = this.shadowRoot.querySelector('paper-input[name="title"]').value;
        console.log('<pb-manage-odds> create ODD: %s, %s', name, title);
        if (this.getApiVersion() < 1.0) {
            this._refresh({ new_odd: name, title });
        } else {
            const createRequest = this.shadowRoot.getElementById('create');
            createRequest.url = `${this.getEndpoint()}/api/odd/${name}`;
            createRequest.params = {
                title
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
        const name = this.shadowRoot.querySelector('paper-input[name="new_odd"]').value;
        const title = this.shadowRoot.querySelector('paper-input[name="title"]').value;
        const params = { new_odd: name, title };
        const fileBrowser = document.getElementById(this.target);
        if (!(fileBrowser || fileBrowser.getSelected)) {
            console.error('<pb-manage-odds> target %s not found', this.target);
        }
        const selected = fileBrowser.getSelected();
        document.querySelectorAll('.document-select paper-checkbox[checked]').forEach((checkbox) => {
            selected.push(checkbox.value);
        });
        console.log('<pb-manage-odds> create ODD by example: %o', selected);
        params['byExample'] = selected;
        this._refresh(params);
    }

    _delete(odd) {
        this._current = odd;
        this.shadowRoot.getElementById('deleteDialog').open();
    }

    _confirmDelete() {
        if (this._current) {
            console.log('<pb-manage-odds> deleting ODD: %s', this._current);
            if (this.getApiVersion() < 1.0) {
                this._refresh({ 'delete': this._current });
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
        const regenUrl = this.getApiVersion() < 1.0 ? 'modules/lib/regenerate.xql' : "api/odd";
        return html`
            <pb-restricted login="login">
                <pb-ajax id="regenerateAll" url="${regenUrl}" method="post" title="${translate('odd.manage.regenerate-all')}"
                    emit="${this.emit ? this.emit : ''}" .emitConfig="${this.emitConfig}">
                    <h3 slot="title">${translate('odd.manage.regenerate-all')}</h3>
                    <a href="#">${translate('odd.manage.regenerate-all')}</a>
                </pb-ajax>
            </pb-restricted>
            ${this.odds.map((odd) =>
            html`
                <div class="odd">
                    <a href="odd-editor.html?odd=${odd.name}.odd" target="_blank">${odd.label}</a>
                    <!-- TODO this toolbar should only appear once per ODD files papercard -->
                    <app-toolbar>
                        ${
                odd.canWrite ?
                    html`
                                    <pb-restricted login="login">
                                        <pb-ajax url="${regenUrl}?odd=${odd.name}.odd" method="post" 
                                            emit="${this.emit ? this.emit : ''}" .emitConfig="${this.emitConfig}">
                                            <h2 slot="title">${translate('menu.admin.recompile')}</h2>
                                            <paper-icon-button title="Regenerate ODD" icon="update"></paper-icon-button>
                                        </pb-ajax>
                                        <paper-icon-button title="Delete ODD" icon="delete" @click="${() => this._delete(`${odd.name}.odd`)}"></paper-icon-button>
                                    </pb-restricted>
                                ` : null
                }
                        <pb-edit-xml path="${odd.path}">
                            <paper-icon-button title="Edit ODD" icon="code"></paper-icon-button>
                        </pb-edit-xml>
                    </app-toolbar>
                </div>
                <div class="odd-description">${odd.description}</div>
            `)}
            <pb-restricted login="login">
                <form action="" method="GET">
                    <paper-input name="new_odd" label="${translate('odd.manage.filename')}" required auto-validate pattern="[a-zA-Z0-9-_]+"
                        error-message="Required. Use letters, numbers, - and _"></paper-input>
                    <paper-input name="title" label="${translate('odd.manage.title')}" auto-validate required minlength="1"
                        error-message="A title is required"></paper-input>
                    <paper-button id="createBtn" @click="${this._createODD}">
                        <iron-icon icon="create"></iron-icon>${translate('odd.manage.create')}
                    </paper-button>
                    <!--paper-button id="createByEx" @click="${this._createByExample}">
                        <iron-icon icon="build"></iron-icon>
                        ${translate('odd.manage.create-from-example')}
                    </paper-button-->
                </form>
            </pb-restricted>
            <pb-ajax id="regenerate" url="${regenUrl}" method="post"></pb-ajax>
            <iron-ajax
                id="load"
                verbose
                handle-as="json"
                method="get"
                with-credentials
                @response="${this._update}">
            </iron-ajax>
            <iron-ajax id="delete" method="delete" with-credentials @error="${this._deleted}"></iron-ajax>
            <iron-ajax id="create" method="post" with-credentials @response="${this._created}" @error="${this._created}"></iron-ajax>
            <paper-dialog id="deleteDialog">
                <h2>${translate('browse.delete')}</h2>
                <paper-dialog-scrollable>
                    <p>${translate('odd.manage.delete', { file: this.file })}</p>
                </paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus @click="${this._confirmDelete}">
                        ${translate('dialogs.yes')}
                    </paper-button>
                    <paper-button dialog-confirm="dialog-cancel">
                        ${translate('dialogs.no')}
                    </paper-button>
                </div>
            </paper-dialog>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }

            .odd {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .odd paper-checkbox {
                display: block;
                flex: 0 0;
                margin-right: 1em;
            }

            .odd a {
                display: block;
                flex: 2 0;
            }

            .odd app-toolbar {
                flex: 1 0;
                justify-content: flex-end;  
                padding: 0;  
            }

            pb-restricted {
                display: flex;
            }

            .odd-description {
                color: #888888;
                font-size: 0.8em;
                margin-top: -1em;
            }

            #regenerateAll {
                display: block;
                width: 100%;
                margin-top: 10px;
                text-align: right;
            }
        `;
    }
}
customElements.define('pb-manage-odds', PbManageOdds);
