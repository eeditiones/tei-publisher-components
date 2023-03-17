import { LitElement, html, css } from 'lit-element';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox';
import '@polymer/paper-checkbox';
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
                type: String
            },
            url: {
                type: String
            },
            templates: {
                type: Array
            },
            odds: {
                type: Array
            }
        };
    }

    constructor() {
        super();
        this.templates = [];
        this.odds = [];
    }

    connectedCallback() {
        super.connectedCallback();
    }

    firstUpdated() {
        const form = this.shadowRoot.getElementById('form');
        const defaultView = this.shadowRoot.getElementById('defaultView');
        const index = this.shadowRoot.getElementById('index');
        const template = this.shadowRoot.getElementById('template');
        this.subscribeTo('pb-i18n-update', (options) => {
            // clear paper-listbox selection after language updates
            const defaultViewListbox = this.shadowRoot.querySelector('#defaultView paper-listbox');
            let old = defaultViewListbox.selected;
            defaultViewListbox.selected = undefined;
            defaultViewListbox.selected = old;

            const indexListbox = this.shadowRoot.querySelector('#index paper-listbox');
            old = indexListbox.selected;
            indexListbox.selected = undefined;
            indexListbox.selected = old;
        }, []);
        waitOnce('pb-page-ready', (detail) => {
            let url;
            if (this.minApiVersion('1.0.0')) {
                url = `${detail.endpoint}/api/templates`;
            } else {
                url = `${detail.endpoint}/modules/lib/components-list-templates.xql`;
            }
            fetch(url, {
                method: 'GET',
                mode: 'cors',
                credentials: 'same-origin'
            })
            .then((response) => response.json())
            .then(json => { this.templates = json });

            if (this.minApiVersion('1.0.0')) {
                url = `${detail.endpoint}/api/odd`;
            } else {
                url = `${detail.endpoint}/modules/lib/components-list-odds.xql`;
            }
            fetch(url, {
                method: 'GET',
                mode: 'cors',
                credentials: 'same-origin'
            })
            .then((response) => response.json())
            .then(json => { this.odds = json });

            const htmlForm = this.shadowRoot.querySelector('form');
            if (this.minApiVersion('1.0.0')) {
                htmlForm.action = `${detail.endpoint}/api/apps/generate`;
            } else {
                htmlForm.action = `${detail.endpoint}/modules/components-generate.xql`;
            }
        });
        form.addEventListener('iron-form-presubmit', function () {
            const view = defaultView.selectedItem.getAttribute('value');
            this.request.body['default-view'] = view;
            this.request.body.index = index.selectedItem.getAttribute('value');
            this.request.body.template = template.selectedItem.getAttribute('value');
        });
        form.addEventListener('iron-form-response', (event) => {
            console.log(event);
            event.detail.completes.then((r) => {
                this.emitTo('pb-end-update');
                const result = r.parseResponse();
                console.log('<pb-edit-app> Received response: %o', result);
                if (result.target) {
                    const baseURL = window.location.href.replace(/^(.*)\/tei-publisher\/.*/, "$1");
                    this.url = baseURL + '/' + this.shadowRoot.querySelector('paper-input[name=abbrev]').value;
                    this.error = null;
                } else {
                    this.error = result.description;
                }
                this.shadowRoot.getElementById('dialog').open();
            });
        }
        );
        form.addEventListener('iron-form-error', (event) => {
            this.emitTo('pb-end-update');
            
            console.log('<pb-edit-app> Received response: %o', event.detail.request.response);
            this.error = event.detail.request.response.description;
            this.shadowRoot.getElementById('dialog').open();
        });
        form.addEventListener('iron-form-invalid', () =>
            this.emitTo('pb-end-update')
        );
    }

    _doSubmit() {
        this.emitTo('pb-start-update');
        const form = this.shadowRoot.getElementById('form');
        form.submit();
    }

    render() {
        return html`
            <iron-form id="form">
                <form method="POST" accept="application/json" enctype="application/json">
                    <fieldset>
                        <legend>${translate('document.selectODD')}</legend>
                        ${ this.odds.map(odd => html`<paper-checkbox name="odd" value="${odd.name}">${odd.label}</paper-checkbox>`)}
                    </fieldset>
                    <paper-input name="uri" type="url" required placeholder="https://e-editiones.org/apps/my-simple-app"
                        label="${translate('appgen.uri')}" auto-validate></paper-input>
                    <paper-input id="abbrev" name="abbrev" pattern="[a-zA-Z0-9-_]+" required placeholder="${translate('appgen.abbrev.placeholder')}"
                        label="${translate('appgen.abbrev.label')}" auto-validate></paper-input>
                    <paper-input name="data-collection" pattern="[a-zA-Z0-9-_/]+" placeholder="data"
                        label="${translate('appgen.collection')}" auto-validate></paper-input>
                    <paper-input name="title" required placeholder="${translate('appgen.title.label')}"
                        label="${translate('appgen.title.help')}"></paper-input>
                    <fieldset>
                        <legend>${translate('appgen.template.help')}</legend>
                        <paper-dropdown-menu id="template" label="${translate('appgen.template.label')}" name="template">
                            <paper-listbox slot="dropdown-content" class="dropdown-content" attr-for-selected="value" selected="view.html">
                            ${this.templates.map(t => html`<paper-item value="${t.name}">${t.title}</paper-item>`)}
                            </paper-listbox>
                        </paper-dropdown-menu>
                    </fieldset>
                    <fieldset>
                        <legend>${translate('appgen.view.help')}</legend>
                        <paper-dropdown-menu id="defaultView" label="${translate('appgen.label')}" name="default-view">
                            <paper-listbox slot="dropdown-content" class="dropdown-content" selected="div" attr-for-selected="value">
                                <paper-item value="div">${translate('appgen.view.div')}</paper-item>
                                <paper-item value="page">${translate('appgen.view.page')}</paper-item>
                            </paper-listbox>
                        </paper-dropdown-menu>
                    </fieldset>
                    <fieldset>
                        <legend>${translate('appgen.index.help')}</legend>
                        <paper-dropdown-menu id="index" label="${translate('appgen.index.label')}" name="index">
                            <paper-listbox slot="dropdown-content" class="dropdown-content" selected="tei:div" attr-for-selected="value">
                                <paper-item value="tei:div">${translate('appgen.index.index-div')}</paper-item>
                                <paper-item value="tei:text">${translate('appgen.index.index-text')}</paper-item>
                            </paper-listbox>
                        </paper-dropdown-menu>
                    </fieldset>
                    <fieldset>
                        <legend>${translate('appgen.account.user')}</legend>
                        <paper-input name="owner" required placeholder="${translate('login.user')}"
                            label="${translate('appgen.account.owner')}" auto-validate></paper-input>
                        <paper-input name="password" type="password" required placeholder="${translate('login.password')}"
                            label="${translate('appgen.account.password')}" auto-validate></paper-input>
                    </fieldset>
                    <paper-button id="submit" @click="${this._doSubmit}"><iron-icon icon="save"></iron-icon> ${translate('appgen.submit')}</paper-button>
                </form>
            </iron-form>
            <paper-dialog id="dialog">
                <h2>${translate('appgen.dialog.title')}</h2>
                <div id="dialogContent">
                ${
            this.error ?
                html`<div id="error">${this.error}</div>` :
                html`<a href="${this.url}" target="_blank">
                            <paper-button><iron-icon icon="icons:open-in-new"></iron-icon> ${translate('appgen.open')}</paper-button>
                        </a>
                        <p>${translate('appgen.success')}</p>`
            }
                </div>
                <div class="buttons">
                    <paper-button dialog-dismiss autofocus>${translate('dialogs.close')}</paper-button>
                </div>
            </paper-dialog>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
            paper-dropdown-menu {
                width: 100%;
                max-width: 864px;
            }
            fieldset {
                margin-top: 16px;
                margin-bottom: 16px;
                padding: 0;
                border: 0;
            }
            legend {
                color: #909090;
            }
            paper-checkbox {
                display: block;
                margin-left: 20px;
                margin-top: 10px;
            }
            paper-dialog {
                min-width: 420px;
                max-width: 640px;
                min-height: 128px;
            }

            paper-dialog h2 {
                background-color: #607D8B;
                padding: 16px 8px;
                margin-top: 0;
                color: #F0F0F0;
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