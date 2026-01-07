import{p as e,a as t,w as a,E as i,x as l,i as n}from"./pb-mixin-B7EAqf7q.js";import{t as s}from"./pb-i18n-Dne_FgGK.js";import"./pb-dialog-D-mutKSS.js";import"./unsafe-html-C7vzzZJI.js";class o extends(e(t)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{error:{type:String},url:{type:String},templates:{type:Array},odds:{type:Array},_templateValue:{type:String},_defaultViewValue:{type:String},_indexValue:{type:String}})}constructor(){super(),this.templates=[],this.odds=[],this._templateValue="view.html",this._defaultViewValue="div",this._indexValue="tei:div"}connectedCallback(){super.connectedCallback()}firstUpdated(){const e=this.shadowRoot.getElementById("form");a("pb-page-ready",t=>{const a=t.endpoint,i=this.minApiVersion("1.0.0")?`${a}/api/templates`:`${a}/modules/lib/components-list-templates.xql`,l=this.minApiVersion("1.0.0")?`${a}/api/odd`:`${a}/modules/lib/components-list-odds.xql`,n=this.minApiVersion("1.0.0")?`${a}/api/apps/generate`:`${a}/modules/components-generate.xql`;e&&(e.action=n),fetch(i,{method:"GET",mode:"cors",credentials:"same-origin"}).then(e=>e.json()).then(e=>{const t=Array.isArray(e)?e:[];this.templates=t,t.find(e=>e.name===this._templateValue)||(this._templateValue=t.length?t[0].name:""),this.requestUpdate()}).catch(e=>console.error("<pb-edit-app> Failed to load templates",e)),fetch(l,{method:"GET",mode:"cors",credentials:"same-origin"}).then(e=>e.json()).then(e=>{this.odds=Array.isArray(e)?e:[],this.requestUpdate()}).catch(e=>console.error("<pb-edit-app> Failed to load odds list",e))}),e&&e.addEventListener("submit",this._handleSubmit.bind(this))}_doSubmit(){const e=this.shadowRoot.getElementById("form");e&&(e.requestSubmit?e.requestSubmit():e.dispatchEvent(new Event("submit",{cancelable:!0,bubbles:!0})))}_renderTextField({id:e,name:t,type:a="text",required:n=!1,pattern:s,placeholder:o="",label:p}){return l`
      <label class="pb-field" for="${e}">
        <span class="pb-field__label">${p}</span>
        <input
          id="${e}"
          class="pb-input"
          type="${a}"
          name="${t}"
          ?required=${n}
          pattern=${s||i}
          placeholder="${o}"
        />
      </label>
    `}_onTemplateChange(e){this._templateValue=e.target.value}_onDefaultViewChange(e){this._defaultViewValue=e.target.value}_onIndexChange(e){this._indexValue=e.target.value}async _handleSubmit(e){e.preventDefault();const t=e.currentTarget;if(t.reportValidity&&!t.reportValidity())return;this.emitTo("pb-start-update");const a=this._collectFormData(t),i=t.action||"";try{const e=await fetch(i,{method:t.method||"POST",headers:{"content-type":"application/json"},credentials:"same-origin",body:JSON.stringify(a)}),l=e.headers.get("content-type")||"",n=l.includes("application/json")?await e.json():await e.text();if(!e.ok){const t=n&&"object"==typeof n?n:{description:n};throw Object.assign(new Error(t.description||e.statusText),{result:t})}this._handleSubmitSuccess(n,t)}catch(e){this._handleSubmitError(e)}}_collectFormData(e){const t=new FormData(e),a={};return Array.from(e.elements||[]).filter(e=>e.name&&!e.disabled&&!e.closest("[disabled]")).forEach(e=>{e.name in a||(a[e.name]=null)}),t.forEach((e,t)=>{Object.prototype.hasOwnProperty.call(a,t)&&null!=a[t]?Array.isArray(a[t])?a[t].push(e):a[t]=[a[t],e]:a[t]=e}),a}_handleSubmitSuccess(e,t){if(this.emitTo("pb-end-update"),e&&e.target){const e=window.location.href.replace(/^(.*)\/tei-publisher\/.*/,"$1"),a=t.querySelector("input[name=abbrev]");this.url=`${e}/${a?a.value:""}`,this.error=null}else this.error=e&&e.description?e.description:"Request failed",this.url=null;this._openDialog()}_handleSubmitError(e){var t;this.emitTo("pb-end-update");const a=(null==e||null===(t=e.result)||void 0===t?void 0:t.description)||(null==e?void 0:e.message)||"Request failed";this.error=a,this.url=null,this._openDialog()}_openDialog(){const e=this.shadowRoot.getElementById("dialog");null==e||e.openDialog()}render(){return l`
      <form id="form" method="POST" accept="application/json" enctype="application/json">
        <fieldset class="pb-fieldset">
          <legend>${s("document.selectODD")}</legend>
          ${this.odds.map(e=>l`
              <label class="pb-checkbox">
                <input
                  type="checkbox"
                  name="odd"
                  .value="${e.name}"
                  ?checked=${Boolean(e.checked)}
                />
                <span>${e.label}</span>
              </label>
            `)}
        </fieldset>

        ${this._renderTextField({id:"uri",name:"uri",type:"url",required:!0,placeholder:"https://e-editiones.org/apps/my-simple-app",label:s("appgen.uri")})}
        ${this._renderTextField({id:"abbrev",name:"abbrev",pattern:"[a-zA-Z0-9-_]+",required:!0,placeholder:s("appgen.abbrev.placeholder"),label:s("appgen.abbrev.label")})}
        ${this._renderTextField({id:"data-collection",name:"data-collection",pattern:"[a-zA-Z0-9-_/]+",placeholder:"data",label:s("appgen.collection")})}
        ${this._renderTextField({id:"title",name:"title",required:!0,placeholder:s("appgen.title.label"),label:s("appgen.title.help")})}

        <fieldset class="pb-fieldset">
          <legend>${s("appgen.template.help")}</legend>
          <label class="pb-field" for="template">
            <span class="pb-field__label">${s("appgen.template.label")}</span>
            <select
              id="template"
              class="pb-select"
              name="template"
              .value=${this._templateValue||""}
              @change=${this._onTemplateChange}
            >
              ${this.templates.map(e=>l`<option value="${e.name}">${e.title}</option>`)}
            </select>
          </label>
        </fieldset>

        <fieldset class="pb-fieldset">
          <legend>${s("appgen.view.help")}</legend>
          <label class="pb-field" for="defaultView">
            <span class="pb-field__label">${s("appgen.label")}</span>
            <select
              id="defaultView"
              class="pb-select"
              name="default-view"
              .value=${this._defaultViewValue||""}
              @change=${this._onDefaultViewChange}
            >
              <option value="div">${s("appgen.view.div")}</option>
              <option value="page">${s("appgen.view.page")}</option>
            </select>
          </label>
        </fieldset>

        <fieldset class="pb-fieldset">
          <legend>${s("appgen.index.help")}</legend>
          <label class="pb-field" for="index">
            <span class="pb-field__label">${s("appgen.index.label")}</span>
            <select
              id="index"
              class="pb-select"
              name="index"
              .value=${this._indexValue||""}
              @change=${this._onIndexChange}
            >
              <option value="tei:div">${s("appgen.index.index-div")}</option>
              <option value="tei:text">${s("appgen.index.index-text")}</option>
            </select>
          </label>
        </fieldset>

        <fieldset class="pb-fieldset">
          <legend>${s("appgen.account.user")}</legend>
          ${this._renderTextField({id:"owner",name:"owner",required:!0,placeholder:s("login.user"),label:s("appgen.account.owner")})}
          ${this._renderTextField({id:"password",name:"password",type:"password",required:!0,placeholder:s("login.password"),label:s("appgen.account.password")})}
        </fieldset>
        <button
          id="submit"
          class="pb-button pb-button--contained"
          type="button"
          @click="${this._doSubmit}"
        >
          <pb-icon icon="save"></pb-icon>
          ${s("appgen.submit")}
        </button>
      </form>
      <pb-dialog id="dialog" title="${s("appgen.dialog.title")}">
        <div id="dialogContent">
          ${this.error?l`<div id="error">${this.error}</div>`:l`<a href="${this.url}" target="_blank" class="pb-button pb-button--text">
                  <pb-icon icon="icons:open-in-new"></pb-icon>
                  ${s("appgen.open")}
                </a>
                <p>${s("appgen.success")}</p>`}
        </div>
        <div slot="footer" class="buttons">
          <button class="pb-button pb-button--text" type="button" rel="prev" autofocus>
            ${s("dialogs.close")}
          </button>
        </div>
      </pb-dialog>
    `}static get styles(){return n`
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
    `}}customElements.define("pb-edit-app",o);export{o as PbEditApp};
