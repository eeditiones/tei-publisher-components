import"./paper-checkbox-c9177e35.js";import"./paper-listbox-1fc346ac.js";import{p as e,L as t,w as p,h as o,c as i}from"./pb-mixin-d61c06b6.js";import{t as a}from"./pb-i18n-375ccc5c.js";import"./iron-form-a25b58de.js";class n extends(e(t)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{error:{type:String},url:{type:String},templates:{type:Array},odds:{type:Array}})}constructor(){super(),this.templates=[],this.odds=[]}connectedCallback(){super.connectedCallback()}firstUpdated(){const e=this.shadowRoot.getElementById("form"),t=this.shadowRoot.getElementById("defaultView"),o=this.shadowRoot.getElementById("index"),i=this.shadowRoot.getElementById("template");this.subscribeTo("pb-i18n-update",e=>{const t=this.shadowRoot.querySelector("#defaultView paper-listbox");let p=t.selected;t.selected=void 0,t.selected=p;const o=this.shadowRoot.querySelector("#index paper-listbox");p=o.selected,o.selected=void 0,o.selected=p},[]),p("pb-page-ready",e=>{let t;t=this.minApiVersion("1.0.0")?e.endpoint+"/api/templates":e.endpoint+"/modules/lib/components-list-templates.xql",fetch(t,{method:"GET",mode:"cors",credentials:"same-origin"}).then(e=>e.json()).then(e=>{this.templates=e}),t=this.minApiVersion("1.0.0")?e.endpoint+"/api/odd":e.endpoint+"/modules/lib/components-list-odds.xql",fetch(t,{method:"GET",mode:"cors",credentials:"same-origin"}).then(e=>e.json()).then(e=>{this.odds=e});const p=this.shadowRoot.querySelector("form");this.minApiVersion("1.0.0")?p.action=e.endpoint+"/api/apps/generate":p.action=e.endpoint+"/modules/components-generate.xql"}),e.addEventListener("iron-form-presubmit",(function(){const e=t.selectedItem.getAttribute("value");this.request.body["default-view"]=e,this.request.body.index=o.selectedItem.getAttribute("value"),this.request.body.template=i.selectedItem.getAttribute("value")})),e.addEventListener("iron-form-response",e=>{console.log(e),e.detail.completes.then(e=>{this.emitTo("pb-end-update");const t=e.parseResponse();if(console.log("<pb-edit-app> Received response: %o",t),t.target){const e=window.location.href.replace(/^(.*)\/tei-publisher\/.*/,"$1");this.url=e+"/"+this.shadowRoot.querySelector("paper-input[name=abbrev]").value,this.error=null}else this.error=t.description;this.shadowRoot.getElementById("dialog").open()})}),e.addEventListener("iron-form-error",e=>{this.emitTo("pb-end-update"),console.log("<pb-edit-app> Received response: %o",e.detail.request.response),this.error=e.detail.request.response.description,this.shadowRoot.getElementById("dialog").open()}),e.addEventListener("iron-form-invalid",()=>this.emitTo("pb-end-update"))}_doSubmit(){this.emitTo("pb-start-update");this.shadowRoot.getElementById("form").submit()}render(){return o`
            <iron-form id="form">
                <form method="POST" accept="application/json" enctype="application/json">
                    <fieldset>
                        <legend>${a("document.selectODD")}</legend>
                        ${this.odds.map(e=>o`<paper-checkbox name="odd" value="${e.name}">${e.label}</paper-checkbox>`)}
                    </fieldset>
                    <paper-input name="uri" type="url" required placeholder="https://e-editiones.org/apps/my-simple-app"
                        label="${a("appgen.uri")}" auto-validate></paper-input>
                    <paper-input id="abbrev" name="abbrev" pattern="[a-zA-Z0-9-_]+" required placeholder="${a("appgen.abbrev.placeholder")}"
                        label="${a("appgen.abbrev.label")}" auto-validate></paper-input>
                    <paper-input name="data-collection" pattern="[a-zA-Z0-9-_/]+" placeholder="data"
                        label="${a("appgen.collection")}" auto-validate></paper-input>
                    <paper-input name="title" required placeholder="${a("appgen.title.label")}"
                        label="${a("appgen.title.help")}"></paper-input>
                    <fieldset>
                        <legend>${a("appgen.template.help")}</legend>
                        <paper-dropdown-menu id="template" label="${a("appgen.template.label")}" name="template">
                            <paper-listbox slot="dropdown-content" class="dropdown-content" attr-for-selected="value" selected="view.html">
                            ${this.templates.map(e=>o`<paper-item value="${e.name}">${e.title}</paper-item>`)}
                            </paper-listbox>
                        </paper-dropdown-menu>
                    </fieldset>
                    <fieldset>
                        <legend>${a("appgen.view.help")}</legend>
                        <paper-dropdown-menu id="defaultView" label="${a("appgen.label")}" name="default-view">
                            <paper-listbox slot="dropdown-content" class="dropdown-content" selected="div" attr-for-selected="value">
                                <paper-item value="div">${a("appgen.view.div")}</paper-item>
                                <paper-item value="page">${a("appgen.view.page")}</paper-item>
                            </paper-listbox>
                        </paper-dropdown-menu>
                    </fieldset>
                    <fieldset>
                        <legend>${a("appgen.index.help")}</legend>
                        <paper-dropdown-menu id="index" label="${a("appgen.index.label")}" name="index">
                            <paper-listbox slot="dropdown-content" class="dropdown-content" selected="tei:div" attr-for-selected="value">
                                <paper-item value="tei:div">${a("appgen.index.index-div")}</paper-item>
                                <paper-item value="tei:text">${a("appgen.index.index-text")}</paper-item>
                            </paper-listbox>
                        </paper-dropdown-menu>
                    </fieldset>
                    <fieldset>
                        <legend>${a("appgen.account.user")}</legend>
                        <paper-input name="owner" required placeholder="${a("login.user")}"
                            label="${a("appgen.account.owner")}" auto-validate></paper-input>
                        <paper-input name="password" type="password" required placeholder="${a("login.password")}"
                            label="${a("appgen.account.password")}" auto-validate></paper-input>
                    </fieldset>
                    <paper-button id="submit" @click="${this._doSubmit}"><iron-icon icon="save"></iron-icon> ${a("appgen.submit")}</paper-button>
                </form>
            </iron-form>
            <paper-dialog id="dialog">
                <h2>${a("appgen.dialog.title")}</h2>
                <div id="dialogContent">
                ${this.error?o`<div id="error">${this.error}</div>`:o`<a href="${this.url}" target="_blank">
                            <paper-button><iron-icon icon="icons:open-in-new"></iron-icon> ${a("appgen.open")}</paper-button>
                        </a>
                        <p>${a("appgen.success")}</p>`}
                </div>
                <div class="buttons">
                    <paper-button dialog-dismiss autofocus>${a("dialogs.close")}</paper-button>
                </div>
            </paper-dialog>
        `}static get styles(){return i`
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
        `}}customElements.define("pb-edit-app",n);export{n as PbEditApp};
