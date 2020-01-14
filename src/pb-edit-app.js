import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import './pb-select-odd.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox';
import '@polymer/paper-dialog';
import '@polymer/paper-dialog-scrollable';
import '@polymer/iron-ajax';
import '@polymer/iron-form';

/**
 * Editor component for the App Generator. Allows to edit all settings for an application.
 *
 * @customElement  pb-edit-app
 * @polymer
 * @demo demo/pb-edit-app.html
 * @appliesMixin pbMixin
 */
export class PbEditApp extends pbMixin(LitElement) {
    static get properties() {
        return {
            error: {
                type: String
            },
            url: {
                type: String
            },
            templates: {
                type: Array
            },
            ...super.properties
        };
    }

    constructor() {
        super();
        this.templates = [];
    }

    connectedCallback() {
        super.connectedCallback();
    }

    firstUpdated() {
        const form = this.shadowRoot.getElementById('form');
        const defaultView = this.shadowRoot.getElementById('defaultView');
        const index = this.shadowRoot.getElementById('index');
        const odd = this.shadowRoot.getElementById('odd');
        const template = this.shadowRoot.getElementById('template');
        const getTemplates = this.shadowRoot.getElementById('getTemplates');
        PbEditApp.waitOnce('pb-page-ready', (detail) => {
            getTemplates.url = `${detail.endpoint}/modules/lib/components-list-templates.xql`;
            getTemplates.generateRequest();

            const htmlForm = this.shadowRoot.querySelector('form');
            htmlForm.action = `${detail.endpoint}/modules/components-generate.xql`;
        });
        form.addEventListener('iron-form-presubmit', function() {
            const view = defaultView.selectedItem.getAttribute('value');
            this.request.body['default-view'] = view;
            this.request.body.index = index.selectedItem.getAttribute('value');
            this.request.body.odd = odd.odd;
            this.request.body.template = template.selectedItem.getAttribute('value');
        });
        form.addEventListener('iron-form-response', (event) =>
            event.detail.completes.then((r) => {
                this.emitTo('pb-end-update');
                const result = r.parseResponse();
                console.log('<pb-edit-app> Received response: %o', result);
                if (result.result === 'ok') {
                    const baseURL = window.location.href.replace(/^(.*)\/tei-publisher\/.*/, "$1");
                    this.url = baseURL + '/' + this.shadowRoot.querySelector('paper-input[name=abbrev]').value;
                    this.error = null;
                } else {
                    this.error = result.message;
                }
                this.shadowRoot.getElementById('dialog').open();
            })
        );
        form.addEventListener('iron-form-invalid', () =>
            this.emitTo('pb-end-update')
        );
    }

    _doSubmit() {
        console.log('submit');
        this.emitTo('pb-start-update');
        const form = this.shadowRoot.getElementById('form');
        form.submit();
    }

    _handleTemplatesResponse() {
        this.templates = this.shadowRoot.getElementById('getTemplates').lastResponse;
    }

    render() {
        return html`
            <iron-form id="form">
                <form action="modules/components-generate.xql" method="POST" accept="application/json" enctype="application/json">
                    <pb-select-odd id="odd" name="odd" label="ODD" odd="teipublisher"></pb-select-odd>
                    <paper-input name="uri" type="url" required placeholder="http://exist-db.org/apps/my-simple-app"
                        label="URL to uniquely identify the app" auto-validate></paper-input>
                    <paper-input id="abbrev" name="abbrev" pattern="[a-zA-Z0-9-_]+" required placeholder="Short name"
                        label="Short name to be used in URLs and file names" auto-validate></paper-input>
                    <paper-input name="data-collection" pattern="[a-zA-Z0-9-_/]+" placeholder="data"
                        label="Name of subcollection to hold TEI documents" auto-validate></paper-input>
                    <paper-input name="title" required placeholder="Title of the app"
                        label="Title of the app which will be shown e.g. in the dashboard"></paper-input>
                    <fieldset>
                        <legend>Choose the HTML template to be used as default</legend>
                        <paper-dropdown-menu id="template" label="HTML Template" name="template">
                            <paper-listbox slot="dropdown-content" class="dropdown-content" attr-for-selected="value" selected="view.html">
                            ${this.templates.map(t => html`<paper-item value="${t.name}">${t.title}</paper-item>`)}
                            </paper-listbox>
                        </paper-dropdown-menu>
                    </fieldset>
                    <fieldset>
                        <legend>Choose what is shown by default when browsing text: a single page
                        or an entire division. Display by page requires that the TEI is properly marked up
                        with &lt;tei:pb&gt; tags.</legend>
                        <paper-dropdown-menu id="defaultView" label="Default View" name="default-view">
                            <paper-listbox slot="dropdown-content" class="dropdown-content" selected="div" attr-for-selected="value">
                                <paper-item value="div">By division (chapter/section...)</paper-item>
                                <paper-item value="page">By page</paper-item>
                            </paper-listbox>
                        </paper-dropdown-menu>
                    </fieldset>
                    <fieldset>
                        <legend>Define the smallest block on which a full text index is created. For documents
                        organized into divisions, choosing 'Create on division' is usually best. If there are no divisions,
                        choose 'Create on text'.</legend>
                        <paper-dropdown-menu id="index" label="Default Full Text Index" name="index">
                            <paper-listbox slot="dropdown-content" class="dropdown-content" selected="tei:div" attr-for-selected="value">
                                <paper-item value="tei:div">Create on division</paper-item>
                                <paper-item value="tei:text">Create on text</paper-item>
                            </paper-listbox>
                        </paper-dropdown-menu>
                    </fieldset>
                    <fieldset>
                        <legend>User account for administrative tasks. The user will be created if it does not yet exist.</legend>
                        <paper-input name="owner" required placeholder="Username"
                            label="The user account who will own the app." auto-validate></paper-input>
                        <paper-input name="password" type="password" required placeholder="Password"
                            label="Password for the user owning this app." auto-validate></paper-input>
                    </fieldset>
                    <paper-button id="submit" @click="${this._doSubmit}"><iron-icon icon="save"></iron-icon> Save/Generate</paper-button>
                </form>
            </iron-form>
            <paper-dialog id="dialog">
                <h2>App generated</h2>
                <div id="dialogContent">
                ${
                    this.error ?
                        html`<a href="${this.url}" target="_blank">
                            <paper-button><iron-icon icon="icons:open-in-new"></iron-icon> Open</paper-button>
                        </a>
                        <p>Your app has been successfully generated!</p>` :
                        html`<div id="error">${this.error}</div>`
                }
                </div>
                <div class="buttons">
                    <paper-button dialog-dismiss autofocus>Close</paper-button>
                </div>
            </paper-dialog>

            <iron-ajax id="getTemplates"
                handle-as="json" @response="${this._handleTemplatesResponse}"
                method="GET"></iron-ajax>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
        `;
    }
}
customElements.define('pb-edit-app', PbEditApp);