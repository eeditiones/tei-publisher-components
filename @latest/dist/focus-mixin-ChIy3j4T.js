import{E as t,p as e,a as s,x as n,i,T as o,w as r,f as a,S as l}from"./pb-mixin-B7EAqf7q.js";import{t as c}from"./pb-dialog-D-mutKSS.js";import{e as d,i as h,t as u,o as p}from"./unsafe-html-C7vzzZJI.js";import{t as g}from"./pb-i18n-Dne_FgGK.js";const f=e=>e??t;class m extends(c(e(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{noAnimation:{type:Boolean,attribute:"no-animation"},opened:{type:Boolean},toggles:{type:Boolean},expandIcon:{type:String,attribute:"expand-icon"},collapseIcon:{type:String,attribute:"collapse-icon"},iconSprite:{type:String,attribute:"icon-sprite"},noIcons:{type:Boolean,attribute:"no-icons"}})}constructor(){super(),this.horizontal=!1,this.noAnimation=!1,this.opened=!1,this.expandIcon="icons:expand-more",this.collapseIcon="icons:expand-less",this.noIcons=!1,this.toggles=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("pb-collapse-open",()=>{this.open()}),this.toggles&&this.subscribeTo("pb-collapse-open",t=>{if(t.detail&&t.detail._source!==this){for(const e of this.querySelectorAll("pb-collapse"))if(e===t.detail._source)return;this.close()}})}updated(t){if(super.updated(t),t.has("opened")){const t=this.shadowRoot.querySelector("details");t&&(t.open=this.opened)}}open(){this.opened||(this.opened=!0,this.emitTo("pb-collapse-open",this))}close(){this.opened&&(this.opened=!1)}toggle(){this.opened=!this.opened,this.opened&&this.emitTo("pb-collapse-open",this.data)}_handleToggle(t){t.preventDefault(),this.toggle()}render(){return n`
      <details ?open="${this.opened}" class="${this.horizontal?"horizontal":""}">
        <summary
          @click="${this._handleToggle}"
          class="collapse-trigger"
          aria-expanded="${this.opened?"true":"false"}"
        >
          ${this._renderIcon({position:"left"})}
          <slot id="collapseTrigger" name="collapse-trigger"></slot>
          ${this._renderIcon({position:"right"})}
        </summary>
        <div class="collapse-content ${this.noAnimation?"no-animation":""}">
          <slot name="collapse-content"></slot>
        </div>
      </details>
    `}_renderIcon({position:t}){if(this.noIcons)return null;const e=this.classList&&this.classList.contains("icon-right");if("left"===t&&e||"right"===t&&!e)return null;const s=this._customIconImage(),i=s&&"none"!==s,o=this.opened?this.collapseIcon:this.expandIcon,r=this.iconSprite||null;return n`
      <span class="collapse-icon" data-custom="${i?"true":"false"}">
        <pb-icon icon="${o}" sprite=${f(r||void 0)} decorative></pb-icon>
      </span>
    `}_customIconImage(){return"undefined"==typeof window||"function"!=typeof getComputedStyle?"none":getComputedStyle(this).getPropertyValue("--pb-collapse-icon-image").trim()||"none"}static get styles(){return i`
      :host {
        display: block;
        position: relative;
        --pb-collapse-icon-image: none;
        --pb-collapse-icon-size: 0.75rem;
        --pb-collapse-icon-padding: 0.5rem;
      }

      details {
        display: block;
      }

      summary {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        list-style: none;
        outline: none;
        cursor: pointer;
        user-select: none;
        gap: var(--pb-collapse-icon-padding);
      }

      .collapse-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--pb-collapse-icon-size);
        height: var(--pb-collapse-icon-size);
        flex: none;
      }

      .collapse-icon pb-icon {
        --pb-icon-size: var(--pb-collapse-icon-size);
      }

      .collapse-icon[data-custom='true'] {
        background-image: var(--pb-collapse-icon-image);
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }

      .collapse-icon[data-custom='true'] pb-icon {
        display: none;
      }

      .collapse-content {
        overflow: hidden;
        transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
      }

      .collapse-content.no-animation {
        transition: none;
      }

      details[open] .collapse-content {
        animation: slideDown 0.3s ease-in-out;
      }

      details:not([open]) .collapse-content {
        animation: slideUp 0.3s ease-in-out;
      }

      .horizontal .collapse-content {
        transition: max-width 0.3s ease-in-out, opacity 0.3s ease-in-out;
      }

      @keyframes slideDown {
        from {
          opacity: 0;
          max-height: 0;
        }
        to {
          opacity: 1;
          max-height: 1000px;
        }
      }

      @keyframes slideUp {
        from {
          opacity: 1;
          max-height: 1000px;
        }
        to {
          opacity: 0;
          max-height: 0;
        }
      }
    `}}customElements.get("pb-collapse")||customElements.define("pb-collapse",m);class v extends HTMLElement{static get observedAttributes(){return["handle-as","method","with-credentials","content-type"]}constructor(){super(),this._url="",this._method="GET",this._handleAs="json",this._withCredentials=!1,this._contentType=null,this.params={},this.headers={},this.body=void 0,this.loading=!1,this.lastResponse=null,this.lastRequest=null,this.lastError=null,this._controller=null}connectedCallback(){this.hasAttribute("method")&&this.attributeChangedCallback("method",null,this.getAttribute("method")),this.hasAttribute("handle-as")&&this.attributeChangedCallback("handle-as",null,this.getAttribute("handle-as")),this.hasAttribute("with-credentials")&&this.attributeChangedCallback("with-credentials",null,this.getAttribute("with-credentials")),this.hasAttribute("content-type")&&this.attributeChangedCallback("content-type",null,this.getAttribute("content-type"))}attributeChangedCallback(t,e,s){switch(t){case"handle-as":this._handleAs=(s||"json").toLowerCase();break;case"method":this._method=(s||"GET").toUpperCase();break;case"with-credentials":this._withCredentials=null!==s;break;case"content-type":this._contentType=s||null}}set url(t){this._url=t||""}get url(){return this._url}set method(t){const e=(t||"GET").toUpperCase();this._method!==e&&(this._method=e,null==t?this.removeAttribute("method"):this.setAttribute("method",t))}get method(){return this._method}set handleAs(t){const e=(t||"json").toLowerCase();this._handleAs!==e&&(this._handleAs=e,null==t?this.removeAttribute("handle-as"):this.setAttribute("handle-as",t))}get handleAs(){return this._handleAs}set withCredentials(t){const e=Boolean(t);this._withCredentials!==e&&(this._withCredentials=e,e?this.setAttribute("with-credentials",""):this.removeAttribute("with-credentials"))}get withCredentials(){return this._withCredentials}set contentType(t){this._contentType!==t&&(this._contentType=t||null,null==t?this.removeAttribute("content-type"):this.setAttribute("content-type",t))}get contentType(){return this._contentType}abort(){this._controller&&(this._controller.abort(),this._controller=null,this.loading=!1)}async generateRequest(){if(!this._url)return null;this.abort(),this._controller=new AbortController;const t=this._buildRequestInit();t.signal=this._controller.signal,this.loading=!0;try{const e=this._buildUrlWithParams(),s=await fetch(e,t),{parsed:n,rawText:i}=await this._parseBody(s);if(this.lastRequest={url:e,method:this._method,params:this.params,headers:t.headers},!s.ok){const t={status:s.status,statusText:s.statusText,response:i,xhr:this._createXhrShim(s)};return this.lastError=t,this.lastResponse=null,this.loading=!1,this.dispatchEvent(new CustomEvent("error",{detail:t})),null}this.lastError=null,this.lastResponse=n,this.loading=!1;const o={response:n,status:s.status,xhr:this._createXhrShim(s),request:this.lastRequest};return this.dispatchEvent(new CustomEvent("response",{detail:o})),n}catch(t){if("AbortError"===t.name)return null;if(!this.lastError){const e={status:t.status||0,statusText:t.statusText||t.message,response:t.response||null,xhr:t.xhr||null};this.lastError=e,this.lastResponse=null,this.dispatchEvent(new CustomEvent("error",{detail:e}))}return this.loading=!1,null}finally{this._controller=null}}_buildUrlWithParams(){if(!this.params||0===Object.keys(this.params).length)return this._url;const t=[];if(Object.entries(this.params).forEach(([e,s])=>{null!=s&&(Array.isArray(s)?s.forEach(s=>{t.push(`${encodeURIComponent(e)}=${encodeURIComponent(s)}`)}):t.push(`${encodeURIComponent(e)}=${encodeURIComponent(s)}`))}),0===t.length)return this._url;const e=this._url.includes("?")?"&":"?";return`${this._url}${e}${t.join("&")}`}_buildRequestInit(){const t=this.headers&&"function"==typeof this.headers.entries?Object.fromEntries(this.headers.entries()):this.headers||{},e=new Headers(t),s={method:this._method||"GET",headers:e,credentials:this._withCredentials?"include":"same-origin"},n=this._prepareBody(e);return void 0!==n&&(s.body=n),s}_prepareBody(t){if(null==this.body)return;if(this.body instanceof FormData||this.body instanceof Blob||this.body instanceof ArrayBuffer)return this.body;if("string"==typeof this.body)return this._contentType&&!t.has("Content-Type")&&t.set("Content-Type",this._contentType),this.body;if(this.body instanceof URLSearchParams)return t.has("Content-Type")||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),this.body.toString();if("application/x-www-form-urlencoded"===this._contentType)return t.has("Content-Type")||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),this._encodeFormBody(this.body);const e=this._contentType||"application/json";return t.has("Content-Type")||t.set("Content-Type",e),e.includes("json")?JSON.stringify(this.body):this.body}async _parseBody(t){const e=t.clone();let s="";try{s=await e.text()}catch(t){s=""}if(204===t.status||205===t.status)return{parsed:null,rawText:""};switch(this._handleAs){case"text":return{parsed:s,rawText:s};case"json":if(!s)return{parsed:null,rawText:s};try{return{parsed:JSON.parse(s),rawText:s}}catch(t){return{parsed:null,rawText:s}}case"blob":return{parsed:await t.blob(),rawText:s};case"arraybuffer":return{parsed:await t.arrayBuffer(),rawText:s};default:return{parsed:s,rawText:s}}}_createXhrShim(t){return{status:t.status,statusText:t.statusText,responseURL:t.url,getResponseHeader:e=>t.headers.get(e),getAllResponseHeaders:()=>[...t.headers.entries()].map(([t,e])=>`${t}: ${e}`).join("\r\n")}}_encodeFormBody(t){if(t instanceof URLSearchParams)return t.toString();if("string"==typeof t)return t;if(!t||"object"!=typeof t)return"";const e=new URLSearchParams;return Object.entries(t).forEach(([t,s])=>{Array.isArray(s)?s.forEach(s=>e.append(t,s)):null!=s&&e.append(t,s)}),e.toString()}}customElements.get("pb-fetch")||customElements.define("pb-fetch",v);const b=d(class extends h{constructor(t){var e;if(super(t),t.type!==u.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e){var s;e[t]&&(null===(s=this.nt)||void 0===s||!s.has(t))&&this.st.add(t)}return this.render(e)}const n=t.element.classList;for(const t of this.st)t in e||(n.remove(t),this.st.delete(t));for(const t in e){var i;const s=!!e[t];s===this.st.has(t)||(null===(i=this.nt)||void 0===i?void 0:i.has(t))||(s?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return o}});let y=0;const _={ENTER:"Enter",ESC:"Escape",ARROW_UP:"ArrowUp",ARROW_DOWN:"ArrowDown"},w=200;function x(t){if("object"==typeof t&&t){const e=t.text??t.value??"",s=t.value??t.text??"";return{text:String(e),value:String(s)}}const e=null==t?"":String(t);return{text:e,value:e}}function k(t=[]){return Array.isArray(t)?t.map(x):[]}class C extends(e(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{name:{type:String},value:{type:String},placeholder:{type:String,attribute:"placeholder"},label:{type:String},source:{type:String},preload:{type:Boolean},suggestions:{type:Array},substring:{type:Boolean},icon:{type:String},helperText:{type:String,attribute:"helper-text"},alwaysFloatLabel:{type:Boolean,attribute:"always-float-label"},disabled:{type:Boolean,reflect:!0},requestParams:{type:Object,attribute:!1}})}constructor(){super(),this.placeholder="search.placeholder",this.label="",this.suggestions=[],this.substring=!1,this.preload=!1,this.icon="",this.helperText="",this.alwaysFloatLabel=!1,this.disabled=!1,this.lastSelected=null,this.value="",this.name="",this._hiddenInput=null,this._initialized=!1,this._menuOpen=!1,this._isFocused=!1,this._inputValue="",this._filteredSuggestions=[],this._highlightedIndex=-1,this._loading=!1,this._pointerSelecting=!1,this._fetchTimeout=null,this._abortController=null,this.requestParams={},this._inputId="pb-autocomplete-input-"+ ++y}_resolveLabelText(){return this.label?g(this.label):this.placeholder?g(this.placeholder):""}_resolveHelperText(){return this.helperText?g(this.helperText):""}get _input(){var t;return(null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById(this._inputId))??null}connectedCallback(){super.connectedCallback(),this._inputValue=this.value||""}firstUpdated(){!this._hiddenInput&&this.name&&(this._hiddenInput=document.createElement("input"),this._hiddenInput.type="hidden",this._hiddenInput.name=this.name,this._hiddenInput.value=this.value||"",this.appendChild(this._hiddenInput)),r("pb-page-ready",()=>{this.preload&&this.source?this._sendRequest():this.value&&this.source?this._sendRequest(this.value):(this._syncInputValueFromSuggestions(),this._filterSuggestions())}),this.source||(this._syncInputValueFromSuggestions(),this._filterSuggestions())}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this._fetchTimeout),this._abortController&&(this._abortController.abort(),this._abortController=null)}updated(t){t.has("suggestions")&&(this._filterSuggestions(),this._syncInputValueFromSuggestions()),t.has("value")&&(this._syncInputValueFromSuggestions(),this._hiddenInput&&(this._hiddenInput.value=this.value??"")),t.has("name")&&(!this._hiddenInput&&this.name?(this._hiddenInput=document.createElement("input"),this._hiddenInput.type="hidden",this._hiddenInput.name=this.name,this._hiddenInput.value=this.value||"",this._hiddenInput.disabled=this.disabled,this.appendChild(this._hiddenInput)):this._hiddenInput&&(this._hiddenInput.name=this.name)),t.has("disabled")&&(this.disabled&&this._closeMenu(),this._hiddenInput&&(this._hiddenInput.disabled=this.disabled))}render(){const e=this._resolveLabelText(),s=this._resolveHelperText(),i={"pb-input-container":!0,"pb-input-container--focused":this._isFocused,"pb-input-container--filled":!!this._inputValue,"pb-input-container--has-prefix":!!this.icon,"pb-input-container--always-float":this.alwaysFloatLabel,"pb-input-container--disabled":this.disabled},o=this._menuOpen&&this._highlightedIndex>=0?`pb-autocomplete-option-${this._highlightedIndex}`:void 0,r=this._filteredSuggestions,a=this._menuOpen&&(r.length>0||this._loading),l=e?`${this._inputId}-label`:void 0,c=s?`${this._inputId}-helper`:void 0,d=!l&&e?e:void 0,h=l||!this.placeholder?"":g(this.placeholder);return n`
      <div class="autocomplete">
        <slot></slot>
        <div class="${b(i)}">
          ${this.icon?n`<pb-icon class="pb-input-prefix" icon="${this.icon}" decorative></pb-icon>`:t}
          <input
            id="${this._inputId}"
            class="pb-input"
            type="search"
            part="input"
            name="query"
            autocomplete="off"
            .value=${this._inputValue}
            placeholder="${h}"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded="${this._menuOpen?"true":"false"}"
            aria-controls="pb-autocomplete-list"
            aria-activedescendant=${f(o)}
            aria-labelledby=${f(l)}
            aria-describedby=${f(c)}
            aria-label=${f(d)}
            ?disabled=${this.disabled}
            @input=${this._handleInput}
            @keydown=${this._handleKeydown}
            @focus=${this._handleFocus}
            @blur=${this._handleBlur}
          />
          ${e?n`<label class="pb-input-label" id="${l}" for="${this._inputId}">
                ${e}
              </label>`:t}
        </div>
        ${s?n`<div class="pb-input-helper" id="${c}">${s}</div>`:t}
        ${a?n`
              <ul
                id="pb-autocomplete-list"
                class="suggestions"
                part="suggestions"
                role="listbox"
                @mousedown=${this._handleSuggestionsPointerDown}
                @mouseup=${this._handleSuggestionsPointerUp}
              >
                ${this._loading?n`<li class="suggestion suggestion--status" role="status">Loading…</li>`:t}
                ${this._loading||0!==r.length?r.map((t,e)=>this._renderSuggestion(t,e)):n`<li class="suggestion suggestion--status" role="status">No results</li>`}
              </ul>
            `:t}
      </div>
    `}_renderSuggestion(t,e){const s=e===this._highlightedIndex;return n`
      <li
        id="pb-autocomplete-option-${e}"
        class=${b({suggestion:!0,"suggestion--active":s})}
        role="option"
        aria-selected="${s?"true":"false"}"
        @click=${()=>this._selectSuggestion(t)}
        @mouseenter=${()=>this._setHighlightedIndex(e)}
      >
        ${t.text}
      </li>
    `}_handleInput(t){if(this.disabled)return void t.preventDefault();const e=t.currentTarget;this._inputValue=e.value,this.value=e.value,this._hiddenInput&&(this._hiddenInput.value=this.value),this._filterSuggestions(),this._menuOpen=!0,this._highlightedIndex=this._filteredSuggestions.length?0:-1,this.requestUpdate(),this.source&&!this.preload&&this._scheduleFetch(this.value),this.emitTo("pb-autocomplete-input",{text:this._inputValue,value:this.value})}_handleFocus(){this.disabled||(this._isFocused=!0,this._filteredSuggestions.length&&(this._menuOpen=!0))}_handleBlur(){this._isFocused=!1,this._pointerSelecting||window.setTimeout(()=>{this._isFocused||this._pointerSelecting||this._closeMenu()},100)}_handleSuggestionsPointerDown(t){this.disabled||(t.preventDefault(),this._pointerSelecting=!0)}_handleSuggestionsPointerUp(){var t;this.disabled||(this._pointerSelecting=!1,null===(t=this._input)||void 0===t||t.focus())}_handleKeydown(t){if(this.disabled)return;const{key:e}=t;switch(e){case _.ARROW_DOWN:t.preventDefault(),this._openMenu(),this._moveHighlight(1);break;case _.ARROW_UP:t.preventDefault(),this._openMenu(),this._moveHighlight(-1);break;case _.ENTER:this._menuOpen&&t.preventDefault(),this._handleEnter();break;case _.ESC:this._closeMenu()}}_handleEnter(){if(this.disabled)return;if(this._menuOpen&&this._highlightedIndex>=0){const t=this._filteredSuggestions[this._highlightedIndex];if(t)return void this._selectSuggestion(t)}if(!this.value)return;const t=this._findSuggestionByValue(this.value);t&&this._selectSuggestion(t)}_openMenu(){this.disabled||this._menuOpen||(this._menuOpen=!0,this.requestUpdate())}_closeMenu(){this._menuOpen&&(this._menuOpen=!1,this._highlightedIndex=-1,this.requestUpdate())}_moveHighlight(t){if(this.disabled)return;const e=this._filteredSuggestions;if(!e.length)return this._highlightedIndex=-1,void this.requestUpdate();let s=this._highlightedIndex+t;s<0?s=e.length-1:s>=e.length&&(s=0),this._setHighlightedIndex(s)}_setHighlightedIndex(t){this._highlightedIndex=t,this.requestUpdate(),this.updateComplete.then(()=>{var e;const s=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById(`pb-autocomplete-option-${t}`);null==s||s.scrollIntoView({block:"nearest"})})}_selectSuggestion(t){if(this.disabled)return;const{text:e,value:s}=x(t);this.lastSelected=e,this.value=s,this._inputValue=e,this._hiddenInput&&(this._hiddenInput.value=s);const n=this._input;n&&(n.value=e),this._closeMenu(),this.emitTo("pb-autocomplete-selected",{text:e,value:s}),this.emitTo("pb-autocomplete-input",{text:e,value:s})}_filterSuggestions(){const t=k(this.suggestions);if(!t.length)return void(this._filteredSuggestions=[]);const e=(this._inputValue||"").trim().toLowerCase();if(!e)return void(this._filteredSuggestions=t);const s=this.substring?t=>t.text.toLowerCase().includes(e):t=>t.text.toLowerCase().startsWith(e);this._filteredSuggestions=t.filter(s)}_findSuggestionByValue(t){if(!t)return null;const e=k(this.suggestions),s=String(t).toLowerCase();return e.find(t=>t.value.toLowerCase()===s||t.text.toLowerCase()===s)??null}_syncInputValueFromSuggestions(){if(!this.value)return void(this._inputValue="");const t=this._findSuggestionByValue(this.value);this._inputValue=t?t.text:this.value}_scheduleFetch(t){window.clearTimeout(this._fetchTimeout),this._fetchTimeout=window.setTimeout(()=>{this._fetchTimeout=null,this._sendRequest(t)},w)}async _sendRequest(t){if(!this.source)return;const e=this.toAbsoluteURL(this.source);let s;try{s=new URL(e)}catch(t){s=new URL(e,window.location.href)}const n=Object.assign(Object.assign({},this.requestParams||{}),this._getParameters());null!=t&&(n.query=t),Object.entries(n).forEach(([t,e])=>{null!=e&&(Array.isArray(e)?e.forEach(e=>s.searchParams.append(t,e)):s.searchParams.set(t,e))}),this._abortController&&this._abortController.abort(),this._abortController=new AbortController,this._loading=!0,this._menuOpen=!0,this.requestUpdate();try{const t=await fetch(s.href,{method:"GET",credentials:"include",signal:this._abortController.signal,headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`Request failed with status ${t.status}`);const e=await t.json();this._applyRemoteSuggestions(e)}catch(t){"AbortError"!==t.name&&console.error("pb-autocomplete: request failed",t)}finally{var i;if(null!==(i=this._abortController)&&void 0!==i&&i.signal.aborted)return void(this._loading=!1);this._loading=!1,this._abortController=null,this.requestUpdate()}}_applyRemoteSuggestions(t){if(!Array.isArray(t))return this.suggestions=[],this._filteredSuggestions=[],this._highlightedIndex=-1,this._menuOpen=!1,void this.requestUpdate();this._initialized=!0,this.suggestions=[...t],this._filteredSuggestions=k(t),this._highlightedIndex=this._filteredSuggestions.length?0:-1,this._menuOpen=!0,this._syncInputValueFromSuggestions(),this.requestUpdate()}_getParameters(){const t={};return this.querySelectorAll("[name]").forEach(e=>{t[e.name]=e.value}),t}static get styles(){return i`
      :host {
        display: inline-flex;
        flex-direction: column;
        position: relative;
        min-width: 240px;
        color: inherit;
      }

      .autocomplete {
        position: relative;
        width: 100%;
      }

      ::slotted(*) {
        display: block;
        margin-left: 10px;
      }

      .pb-input-container {
        position: relative;
        display: flex;
        align-items: center;
        gap: var(--pb-input-gap, 0.5rem);
        min-height: var(--pb-input-height, 56px);
        padding: 0 var(--pb-input-padding, 0.75rem);
        border-radius: var(--pb-input-radius, 8px);
        border: 1px solid var(--pb-input-border-color, rgba(0, 0, 0, 0.24));
        background: var(--pb-input-background, #fff);
        transition: border-color 120ms ease, box-shadow 120ms ease, background-color 120ms ease;
      }

      .pb-input-container--focused {
        border-color: var(--pb-primary-color, #1976d2);
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.16);
      }

      .pb-input-container--disabled {
        background: var(--pb-input-disabled-background, rgba(0, 0, 0, 0.04));
        border-color: var(--pb-input-disabled-border-color, rgba(0, 0, 0, 0.12));
        color: rgba(0, 0, 0, 0.38);
      }

      .pb-input-container--disabled .pb-input {
        cursor: not-allowed;
      }

      .pb-input-container--disabled .pb-input-label {
        color: rgba(0, 0, 0, 0.38);
      }

      .pb-input-prefix {
        color: rgba(0, 0, 0, 0.54);
      }

      .pb-input {
        flex: 1 1 auto;
        width: 100%;
        height: 100%;
        border: none;
        background: transparent;
        outline: none;
        font: inherit;
        color: inherit;
        padding: 0;
      }

      .pb-input::placeholder {
        color: var(--pb-input-placeholder-color, rgba(0, 0, 0, 0.4));
      }

      .pb-input-label {
        position: absolute;
        top: 50%;
        left: var(--pb-input-label-left, 0.75rem);
        transform: translateY(-50%);
        font-size: 0.95rem;
        color: var(--pb-input-label-color, rgba(0, 0, 0, 0.54));
        pointer-events: none;
        transition: transform 120ms ease, font-size 120ms ease, color 120ms ease, top 120ms ease;
        padding: 0 4px;
        background: var(--pb-input-background, #fff);
        line-height: 1;
      }

      .pb-input-container--has-prefix .pb-input-label {
        left: var(--pb-input-label-left-with-prefix, 2.5rem);
      }

      .pb-input-container--filled .pb-input-label,
      .pb-input-container--focused .pb-input-label,
      .pb-input-container--always-float .pb-input-label {
        top: 0;
        transform: translateY(-50%) scale(0.88);
        font-size: 0.75rem;
        color: var(--pb-primary-color, #1976d2);
      }

      .pb-input-helper {
        margin-top: 0.35rem;
        font-size: 0.8rem;
        color: rgba(0, 0, 0, 0.6);
      }

      .suggestions {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        right: 0;
        z-index: 10;
        margin: 0;
        padding: 4px 0;
        list-style: none;
        max-height: 240px;
        overflow-y: auto;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        background: var(--pb-search-suggestions-background, #fff);
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
      }

      .suggestion {
        padding: 0.5rem 0.75rem;
        cursor: pointer;
        font-size: 0.95rem;
        line-height: 1.2;
        color: var(--pb-search-suggestions-color, rgba(0, 0, 0, 0.8));
        transition: background-color 120ms ease, color 120ms ease;
      }

      .suggestion:hover,
      .suggestion--active {
        background-color: rgba(25, 118, 210, 0.12);
        color: #0d47a1;
      }

      .suggestion--status {
        cursor: default;
        color: rgba(0, 0, 0, 0.54);
      }

      .suggestion--status:hover,
      .suggestion--status.suggestion--active {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.54);
      }
    `}}customElements.get("pb-autocomplete")||customElements.define("pb-autocomplete",C);const S="undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function E(t,e,s,n){t.addEventListener?t.addEventListener(e,s,n):t.attachEvent&&t.attachEvent(`on${e}`,s)}function T(t,e,s,n){t&&(t.removeEventListener?t.removeEventListener(e,s,n):t.detachEvent&&t.detachEvent(`on${e}`,s))}function A(t,e){const s=e.slice(0,e.length-1),n=[];for(let e=0;e<s.length;e++)n.push(t[s[e].toLowerCase()]);return n}function O(t){"string"!=typeof t&&(t="");const e=(t=t.replace(/\s/g,"")).split(",");let s=e.lastIndexOf("");for(;s>=0;)e[s-1]+=",",e.splice(s,1),s=e.lastIndexOf("");return e}function I(t,e){const s=t.length>=e.length?t:e,n=t.length>=e.length?e:t;let i=!0;for(let t=0;t<s.length;t++)-1===n.indexOf(s[t])&&(i=!1);return i}function M(t){let e=t.keyCode||t.which||t.charCode;return t.code&&/^Key[A-Z]$/.test(t.code)&&(e=t.code.charCodeAt(3)),e}const j={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":S?173:189,"=":S?61:187,";":S?59:186,"'":222,"{":219,"}":221,"[":219,"]":221,"\\":220},$={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,meta:91,command:91},P={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},L={16:!1,18:!1,17:!1,91:!1},N={};for(let t=1;t<20;t++)j[`f${t}`]=111+t;let B=[],R=null,D="all";const U=new Map,V=t=>j[t.toLowerCase()]||$[t.toLowerCase()]||t.toUpperCase().charCodeAt(0),F=t=>Object.keys(j).find(e=>j[e]===t),q=t=>Object.keys($).find(e=>$[e]===t),z=t=>{D=t||"all"},K=()=>D||"all",X=()=>B.map(t=>F(t)||q(t)||String.fromCharCode(t)),H=()=>{const t=[];return Object.keys(N).forEach(e=>{N[e].forEach(({key:e,scope:s,mods:n,shortcut:i})=>{t.push({scope:s,shortcut:i,mods:n,keys:e.split("+").map(t=>V(t))})})}),t},W=t=>{const e=t.target||t.srcElement,{tagName:s}=e;let n=!0;const i="INPUT"===s&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(e.type);return(e.isContentEditable||(i||"TEXTAREA"===s||"SELECT"===s)&&!e.readOnly)&&(n=!1),n},Y=t=>("string"==typeof t&&(t=V(t)),-1!==B.indexOf(t)),Z=(t,e)=>{let s,n;t||(t=K());for(const e in N)if(Object.prototype.hasOwnProperty.call(N,e))for(s=N[e],n=0;n<s.length;)s[n].scope===t?s.splice(n,1).forEach(({element:t})=>it(t)):n++;K()===t&&z(e||"all")};function G(t){let e=M(t);t.key&&"capslock"===t.key.toLowerCase()&&(e=V(t.key));const s=B.indexOf(e);if(s>=0&&B.splice(s,1),t.key&&"meta"===t.key.toLowerCase()&&B.splice(0,B.length),(93===e||224===e)&&(e=91),e in L){L[e]=!1;for(const t in $)$[t]===e&&(st[t]=!1)}}const J=(t,...e)=>{if(void 0===t)Object.keys(N).forEach(t=>{Array.isArray(N[t])&&N[t].forEach(t=>Q(t)),delete N[t]}),it(null);else if(Array.isArray(t))t.forEach(t=>{t.key&&Q(t)});else if("object"==typeof t)t.key&&Q(t);else if("string"==typeof t){let[s,n]=e;"function"==typeof s&&(n=s,s=""),Q({key:t,scope:s,method:n,splitKey:"+"})}},Q=({key:t,scope:e,method:s,splitKey:n="+"})=>{O(t).forEach(t=>{const i=t.split(n),o=i.length,r=i[o-1],a="*"===r?"*":V(r);if(!N[a])return;e||(e=K());const l=o>1?A($,i):[],c=[];N[a]=N[a].filter(t=>{const n=(!s||t.method===s)&&t.scope===e&&I(t.mods,l);return n&&c.push(t.element),!n}),c.forEach(t=>it(t))})};function tt(t,e,s,n){if(e.element!==n)return;let i;if(e.scope===s||"all"===e.scope){i=e.mods.length>0;for(const t in L)Object.prototype.hasOwnProperty.call(L,t)&&(!L[t]&&e.mods.indexOf(+t)>-1||L[t]&&-1===e.mods.indexOf(+t))&&(i=!1);(0===e.mods.length&&!L[16]&&!L[18]&&!L[17]&&!L[91]||i||"*"===e.shortcut)&&(e.keys=[],e.keys=e.keys.concat(B),!1===e.method(t,e)&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0)))}}function et(t,e){const s=N["*"];let n=M(t);if(t.key&&"capslock"===t.key.toLowerCase()||!(st.filter||W).call(this,t))return;if((93===n||224===n)&&(n=91),-1===B.indexOf(n)&&229!==n&&B.push(n),["metaKey","ctrlKey","altKey","shiftKey"].forEach(e=>{const s=P[e];t[e]&&-1===B.indexOf(s)?B.push(s):!t[e]&&B.indexOf(s)>-1?B.splice(B.indexOf(s),1):"metaKey"===e&&t[e]&&(B=B.filter(t=>t in P||t===n))}),n in L){L[n]=!0;for(const e in $)if(Object.prototype.hasOwnProperty.call($,e)){const s=P[$[e]];st[e]=t[s]}if(!s)return}for(const e in L)Object.prototype.hasOwnProperty.call(L,e)&&(L[e]=t[P[e]]);t.getModifierState&&(!t.altKey||t.ctrlKey)&&t.getModifierState("AltGraph")&&(-1===B.indexOf(17)&&B.push(17),-1===B.indexOf(18)&&B.push(18),L[17]=!0,L[18]=!0);const i=K();if(s)for(let n=0;n<s.length;n++)s[n].scope===i&&("keydown"===t.type&&s[n].keydown||"keyup"===t.type&&s[n].keyup)&&tt(t,s[n],i,e);if(!(n in N))return;const o=N[n],r=o.length;for(let s=0;s<r;s++)if(("keydown"===t.type&&o[s].keydown||"keyup"===t.type&&o[s].keyup)&&o[s].key){const n=o[s],{splitKey:r}=n,a=n.key.split(r),l=[];for(let t=0;t<a.length;t++)l.push(V(a[t]));l.sort().join("")===B.sort().join("")&&tt(t,n,i,e)}}const st=function(t,e,s){B=[];const n=O(t);let i=[],o="all",r=document,a=0,l=!1,c=!0,d="+",h=!1,u=!1;if(void 0===s&&"function"==typeof e&&(s=e),"[object Object]"===Object.prototype.toString.call(e)){const t=e;t.scope&&(o=t.scope),t.element&&(r=t.element),t.keyup&&(l=t.keyup),void 0!==t.keydown&&(c=t.keydown),void 0!==t.capture&&(h=t.capture),"string"==typeof t.splitKey&&(d=t.splitKey),!0===t.single&&(u=!0)}for("string"==typeof e&&(o=e),u&&J(t,o);a<n.length;a++){const t=n[a].split(d);i=[],t.length>1&&(i=A($,t));let e=t[t.length-1];e="*"===e?"*":V(e),e in N||(N[e]=[]),N[e].push({keyup:l,keydown:c,scope:o,mods:i,shortcut:n[a],method:s,key:n[a],splitKey:d,element:r})}if(void 0!==r&&"undefined"!=typeof window){if(!U.has(r)){const t=(t=window.event)=>et(t,r),e=(t=window.event)=>{et(t,r),G(t)};U.set(r,{keydownListener:t,keyupListenr:e,capture:h}),E(r,"keydown",t,h),E(r,"keyup",e,h)}if(!R){const t=()=>{B=[]};R={listener:t,capture:h},E(window,"focus",t,h)}}};function nt(t,e="all"){Object.keys(N).forEach(s=>{N[s].filter(s=>s.scope===e&&s.shortcut===t).forEach(t=>{t&&t.method&&t.method({},t)})})}function it(t){const e=Object.values(N).flat();if(e.findIndex(({element:e})=>e===t)<0&&t){const{keydownListener:e,keyupListenr:s,capture:n}=U.get(t)||{};e&&s&&(T(t,"keyup",s,n),T(t,"keydown",e,n),U.delete(t))}if((e.length<=0||U.size<=0)&&(Array.from(U.keys()).forEach(t=>{const{keydownListener:e,keyupListenr:s,capture:n}=U.get(t)||{};e&&s&&(T(t,"keyup",s,n),T(t,"keydown",e,n),U.delete(t))}),U.clear(),Object.keys(N).forEach(t=>delete N[t]),R)){const{listener:t,capture:e}=R;T(window,"focus",t,e),R=null}}const ot={getPressedKeyString:X,setScope:z,getScope:K,deleteScope:Z,getPressedKeyCodes:()=>B.slice(0),getAllKeyCodes:H,isPressed:Y,filter:W,trigger:nt,unbind:J,keyMap:j,modifier:$,modifierMap:P};for(const t in ot){const e=t;Object.prototype.hasOwnProperty.call(ot,e)&&(st[e]=ot[e])}if("undefined"!=typeof window){const t=window.hotkeys;st.noConflict=e=>(e&&window.hotkeys===st&&(window.hotkeys=t),st),window.hotkeys=st}const rt=new Set(["INPUT","SELECT","TEXTAREA","PAPER-INPUT","PAPER-TEXTAREA","PB-SEARCH"]);let at=!0;at&&(st.filter=t=>{const{tagName:e}=t.target||t.srcElement;return!(e.isContentEditable||rt.has(e))},at=!1);const lt=t=>class extends t{static get properties(){return Object.assign(Object.assign({},super.properties),{},{hotkeys:{type:Object}})}constructor(){super(),this.hotkeys={}}registerHotkey(t,e,s){t&&this.hotkeys[t]&&(s?st(this.hotkeys[t],{element:s},e):st(this.hotkeys[t],e))}display(t){if(t&&this.hotkeys[t]){const e=[];return this.hotkeys[t].split(/\s*,\s*/).forEach(t=>{e.push(t.replace("+","-"))}),e.join(", ")}return""}};function ct(t,e,s){s?st(t,{element:s},e):st(t,e)}window.pbKeyboard=ct;const dt=(t="")=>t.replace(/[-_]/g," ").trim();class ht extends s{static properties={icon:{type:String},disabled:{type:Boolean,reflect:!0},label:{type:String},toggles:{type:Boolean},active:{type:Boolean,reflect:!0}};constructor(){super(),this.icon="",this.disabled=!1,this.label="",this.toggles=!1,this.active=!1}render(){const t=this.title||"",e=this.icon?dt(this.icon.includes(":")?this.icon.split(":").pop():this.icon):"",s=this.label||t||e;return n`
      <button
        class="pb-button pb-button--icon"
        type="button"
        title=${t}
        aria-label=${s}
        ?disabled=${this.disabled}
        aria-pressed=${this.toggles?String(this.active):void 0}
        @click=${this._handleClick}
      >
        ${this.icon?n`<pb-icon icon="${this.icon}" decorative></pb-icon>`:n`<slot></slot>`}
      </button>
    `}_handleClick(t){if(this.disabled)return t.preventDefault(),void t.stopImmediatePropagation();this.toggles&&(this.active=!this.active,this.dispatchEvent(new CustomEvent("active-changed",{detail:{value:this.active},bubbles:!0,composed:!0})))}static styles=i`
    :host {
      display: inline-flex;
      box-sizing: border-box;
      --pb-icon-button-size: 40px;
    }

    button {
      width: var(--pb-icon-button-size);
      height: var(--pb-icon-button-size);
      border-radius: 999px;
      border: none;
      background: transparent;
      color: inherit;
      padding: 0;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s ease-in-out;
    }

    button:hover:not(:disabled),
    button:focus-visible {
      background: var(--pb-icon-button-hover-background, rgba(0, 0, 0, 0.05));
      outline: none;
    }

    button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    :host([active]) button {
      background: var(--pb-icon-button-active-background, rgba(0, 0, 0, 0.08));
    }
  `}customElements.get("pb-icon-button")||customElements.define("pb-icon-button",ht);class ut extends(c(s)){static get styles(){return i`
      :host {
        display: block;
      }
    `}static get properties(){return{title:{type:String,reflect:!0},type:{type:String},message:{type:String,reflect:!0},open:{type:Boolean,reflect:!0}}}constructor(){super(),this.title="",this.message="",this.type="message",this.open=!1}render(){return n`
      <pb-dialog>
        <h2 id="title" slot="title">${p(this.title)}</h2>
        <div id="message" class="message" tabindex="0">
          ${this.message?p(this.message):n`<slot></slot>`}
        </div>

        <div class="buttons" slot="footer">
          ${this.isMessage()?n`<button class="close" autofocus="autofocus" type="button">
                ${g("dialogs.close")}
              </button>`:n`
                <button class="confirm" autofocus="autofocus" type="button">
                  ${g("dialogs.yes")}
                </button>
                <button class="reject" autofocus="autofocus" type="button">
                  ${g("dialogs.no")}
                </button>
              `}
        </div>
      </pb-dialog>
    `}firstUpdated(){this.modal=this.renderRoot.querySelector("pb-dialog")}show(t,e){return this.type="message",this.set(t,e),this.open=!0,this.modal.openDialog(),new Promise((t,e)=>{requestAnimationFrame(()=>{this.renderRoot.querySelector(".close").addEventListener("click",()=>{this.open=!1,this.modal.closeDialog(),t({once:!0})})})})}confirm(t,e){return this.type="confirm",this.set(t,e),this.open=!0,this.modal.openDialog(),new Promise((t,e)=>{requestAnimationFrame(()=>{const s=this.renderRoot.querySelector(".confirm"),n=this.renderRoot.querySelector(".reject");s.addEventListener("click",()=>{this.open=!1,this.modal.closeDialog(),t({once:!0})}),n.addEventListener("click",()=>{this.open=!1,this.modal.closeDialog(),e({once:!0})})})})}set(t,e){(t||e)&&(t&&(this.title=t),e&&(this.message=e))}isMessage(){return"message"===this.type}isConfirm(){return"confirm"===this.type}}customElements.define("pb-message",ut);class pt extends(c(e(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{path:{type:String},src:{type:String},title:{type:String},_href:{type:String}})}constructor(){super(),this.title=""}connectedCallback(){super.connectedCallback(),r("pb-page-ready",t=>{if("."===t.endpoint)this._href="/exist/apps/eXide/";else{const e=/^(.*:\/+[^/]+)\/.*$/.exec(t.endpoint);this._href=e?`${e[1]}/exist/apps/eXide/`:"/exist/apps/eXide/"}})}render(){return new URL(this._href,window.location.href).origin===this.getUrl().origin?n`<a href="${this._href}" target="eXide" title="${this.title}" @click="${this.open}"
        ><slot></slot
      ></a>`:n`<a href="${this._href}/index.html?open=${this.path}" title="${this.title}"
      ><slot></slot
    ></a>`}static get styles(){return i`
      :host {
        display: inline;
      }

      a {
        text-decoration: none;
      }
    `}setPath(t){this.path=t}open(t){t.preventDefault();let e=this._href,{path:s}=this;if(this.src){const t=document.getElementById(this.src);s=t.getFullPath(),e=t.sourceView}const n=window.open("","eXide");if(n&&!n.closed){n.eXide?(console.log("<pb-edit-xml> using existing eXide to open %s",s),n.eXide.app.findDocument(s),n.focus()):(console.log("<pb-edit-xml> opening new eXide for %s",s),window.eXide_onload=function(){n.eXide.app.findDocument(s)},n.location=e)}}}function gt(t){return t.replace(/-[a-z]/gu,t=>t[1].toUpperCase())}customElements.define("pb-edit-xml",pt),window.Vaadin||={},window.Vaadin.featureFlags||={};const ft={};function mt(t,e="25.0.1"){if(Object.defineProperty(t,"version",{get:()=>e}),t.experimental){const e="string"==typeof t.experimental?t.experimental:`${gt(t.is.split("-").slice(1).join("-"))}Component`;if(!window.Vaadin.featureFlags[e]&&!ft[e])return ft[e]=new Set,ft[e].add(t),void Object.defineProperty(window.Vaadin.featureFlags,e,{get:()=>0===ft[e].size,set(t){t&&ft[e].size>0&&(ft[e].forEach(t=>{customElements.define(t.is,t)}),ft[e].clear())}});if(ft[e])return void ft[e].add(t)}const s=customElements.get(t.is);if(s){const e=s.version;e&&t.version&&e===t.version?console.warn(`The component ${t.is} has been loaded twice`):console.error(`Tried to define ${t.is} version ${t.version} when version ${s.version} is already in use. Something will probably break.`)}else customElements.define(t.is,t)}const vt=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,bt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function yt(){function t(){return!0}return Ct(t)}function _t(){try{return!!wt()||!!xt()&&(bt?!kt():!yt())}catch(t){return!1}}function wt(){return localStorage.getItem("vaadin.developmentmode.force")}function xt(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function kt(){if(bt){if(Object.keys(bt).map(t=>bt[t]).filter(t=>t.productionMode).length>0)return!0}return!1}function Ct(t,e){if("function"!=typeof t)return;const s=vt.exec(t.toString());if(s)try{t=new Function(s[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const St=function(t,e){if(window.Vaadin.developmentMode)return Ct(t,e)};function Et(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=_t());const Tt=function(){if("function"==typeof St)return St(Et)};let At=0,Ot=0;const It=[];let Mt=!1;function jt(){Mt=!1;const t=It.length;for(let e=0;e<t;e++){const t=It[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}It.splice(0,t),Ot+=t}const $t={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},Pt={run:t=>window.requestAnimationFrame(t),cancel(t){window.cancelAnimationFrame(t)}},Lt={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},Nt={run(t){Mt||(Mt=!0,queueMicrotask(()=>jt())),It.push(t);const e=At;return At+=1,e},cancel(t){const e=t-Ot;if(e>=0){if(!It[e])throw new Error(`invalid async handle: ${t}`);It[e]=null}}},Bt=new Set;class Rt{static debounce(t,e,s){return t instanceof Rt?t._cancelAsync():t=new Rt,t.setConfig(e,s),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,Bt.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Bt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}}function Dt(t){Bt.add(t)}const Ut=[];function Vt(t,e,s=t.getAttribute("dir")){e?t.setAttribute("dir",e):null!=s&&t.removeAttribute("dir")}function Ft(){return document.documentElement.getAttribute("dir")}function qt(){const t=Ft();Ut.forEach(e=>{Vt(e,t)})}new MutationObserver(qt).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const zt=t=>class extends t{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:t=>t||"",toAttribute:t=>""===t?null:t}}}}get __isRTL(){return"rtl"===this.getAttribute("dir")}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")&&!this.__restoreSubscription||(this.__subscribe(),Vt(this,Ft(),null))}attributeChangedCallback(t,e,s){if(super.attributeChangedCallback(t,e,s),"dir"!==t)return;const n=Ft(),i=s===n&&-1===Ut.indexOf(this),o=!s&&e&&-1===Ut.indexOf(this),r=s!==n&&e===n;i||o?(this.__subscribe(),Vt(this,n,s)):r&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=Ut.includes(this),this.__unsubscribe()}_valueToNodeAttribute(t,e,s){("dir"!==s||""!==e||t.hasAttribute("dir"))&&super._valueToNodeAttribute(t,e,s)}_attributeToProperty(t,e,s){"dir"!==t||e?super._attributeToProperty(t,e,s):this.dir=""}__subscribe(){Ut.includes(this)||Ut.push(this)}__unsubscribe(){Ut.includes(this)&&Ut.splice(Ut.indexOf(this),1)}};let Kt;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations||(window.Vaadin.registrations=[]),window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={}),window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Tt()};const Xt=new Set,Ht=t=>class extends(zt(t)){static finalize(){super.finalize();const{is:t}=this;if(t&&!Xt.has(t)){window.Vaadin.registrations.push(this),Xt.add(t);const e=window.Vaadin.developmentModeCallback;e&&(Kt=Rt.debounce(Kt,Lt,()=>{e["vaadin-usage-statistics"]()}),Dt(Kt))}}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}},Wt=new WeakMap;function Yt(t,e){let s=e;for(;s;){if(Wt.get(s)===t)return!0;s=Object.getPrototypeOf(s)}return!1}function Zt(t){return e=>{if(Yt(t,e))return e;const s=t(e);return Wt.set(s,t),s}}function Gt(t,e){return t.split(".").reduce((t,e)=>t?t[e]:void 0,e)}function Jt(t,e,s){const n=t.split("."),i=n.pop();n.reduce((t,e)=>t[e],s)[i]=e}const Qt={},te=/([A-Z])/gu;function ee(t){return Qt[t]||(Qt[t]=t.replace(te,"-$1").toLowerCase()),Qt[t]}function se(t){return t[0].toUpperCase()+t.substring(1)}function ne(t){const[e,s]=t.split("(");return{method:e,observerProps:s.replace(")","").split(",").map(t=>t.trim())}}function ie(t,e){return Object.prototype.hasOwnProperty.call(t,e)||(t[e]=new Map(t[e])),t[e]}const oe=Zt(t=>{class e extends t{static enabledWarnings=[];static createProperty(t,e){[String,Boolean,Number,Array].includes(e)&&(e={type:e}),e&&e.reflectToAttribute&&(e.reflect=!0),super.createProperty(t,e)}static getOrCreateMap(t){return ie(this,t)}static finalize(){if(window.litIssuedWarnings&&(window.litIssuedWarnings.add("no-override-create-property"),window.litIssuedWarnings.add("no-override-get-property-descriptor")),super.finalize(),Array.isArray(this.observers)){const t=this.getOrCreateMap("__complexObservers");this.observers.forEach(e=>{const{method:s,observerProps:n}=ne(e);t.set(s,n)})}}static addCheckedInitializer(t){super.addInitializer(e=>{e instanceof this&&t(e)})}static getPropertyDescriptor(t,e,s){const n=super.getPropertyDescriptor(t,e,s);let i=n;if(this.getOrCreateMap("__propKeys").set(t,e),s.sync&&(i={get:n.get,set(n){const i=this[t];a(n,i)&&(this[e]=n,this.requestUpdate(t,i,s),this.hasUpdated&&this.performUpdate())},configurable:!0,enumerable:!0}),s.readOnly){const e=i.set;this.addCheckedInitializer(s=>{s[`_set${se(t)}`]=function(t){e.call(s,t)}}),i={get:i.get,set(){},configurable:!0,enumerable:!0}}if("value"in s&&this.addCheckedInitializer(e=>{const n="function"==typeof s.value?s.value.call(e):s.value;s.readOnly?e[`_set${se(t)}`](n):e[t]=n}),s.observer){const e=s.observer;this.getOrCreateMap("__observers").set(t,e),this.addCheckedInitializer(t=>{t[e]||console.warn(`observer method ${e} not defined`)})}if(s.notify){if(this.__notifyProps){if(!this.hasOwnProperty("__notifyProps")){const t=this.__notifyProps;this.__notifyProps=new Set(t)}}else this.__notifyProps=new Set;this.__notifyProps.add(t)}if(s.computed){const e=`__assignComputed${t}`,n=ne(s.computed);this.prototype[e]=function(...e){this[t]=this[n.method](...e)},this.getOrCreateMap("__computedObservers").set(e,n.observerProps)}return s.attribute||(s.attribute=ee(t)),i}static get polylitConfig(){return{asyncFirstRender:!1}}connectedCallback(){super.connectedCallback();const{polylitConfig:t}=this.constructor;this.hasUpdated||t.asyncFirstRender||this.performUpdate()}firstUpdated(){super.firstUpdated(),this.$||(this.$={}),this.renderRoot.querySelectorAll("[id]").forEach(t=>{this.$[t.id]=t})}ready(){}willUpdate(t){this.constructor.__computedObservers&&this.__runComplexObservers(t,this.constructor.__computedObservers)}updated(t){const e=this.__isReadyInvoked;this.__isReadyInvoked=!0,this.constructor.__observers&&this.__runObservers(t,this.constructor.__observers),this.constructor.__complexObservers&&this.__runComplexObservers(t,this.constructor.__complexObservers),this.__dynamicPropertyObservers&&this.__runDynamicObservers(t,this.__dynamicPropertyObservers),this.__dynamicMethodObservers&&this.__runComplexObservers(t,this.__dynamicMethodObservers),this.constructor.__notifyProps&&this.__runNotifyProps(t,this.constructor.__notifyProps),e||this.ready()}setProperties(t){Object.entries(t).forEach(([t,e])=>{const s=this.constructor.__propKeys.get(t),n=this[s];this[s]=e,this.requestUpdate(t,n)}),this.hasUpdated&&this.performUpdate()}_createMethodObserver(t){const e=ie(this,"__dynamicMethodObservers"),{method:s,observerProps:n}=ne(t);e.set(s,n)}_createPropertyObserver(t,e){ie(this,"__dynamicPropertyObservers").set(e,t)}__runComplexObservers(t,e){e.forEach((e,s)=>{e.some(e=>t.has(e))&&(this[s]?this[s](...e.map(t=>this[t])):console.warn(`observer method ${s} not defined`))})}__runDynamicObservers(t,e){e.forEach((e,s)=>{t.has(e)&&this[s]&&this[s](this[e],t.get(e))})}__runObservers(t,e){t.forEach((t,s)=>{const n=e.get(s);void 0!==n&&this[n]&&this[n](this[s],t)})}__runNotifyProps(t,e){t.forEach((t,s)=>{e.has(s)&&this.dispatchEvent(new CustomEvent(`${ee(s)}-changed`,{detail:{value:this[s]}}))})}_get(t,e){return Gt(t,e)}_set(t,e,s){Jt(t,e,s)}}return e});function re(t){return t.nodeType===Node.TEXT_NODE&&""===t.textContent.trim()}class ae{constructor(t,e){this.slot=t,this.callback=e,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const t=this.slot.assignedNodes({flatten:!0});let e=[];const s=[],n=[];t.length&&(e=t.filter(t=>!this._storedNodes.includes(t))),this._storedNodes.length&&this._storedNodes.forEach((e,i)=>{const o=t.indexOf(e);-1===o?s.push(e):o!==i&&n.push(e)}),(e.length||s.length||n.length)&&this.callback({addedNodes:e,currentNodes:t,movedNodes:n,removedNodes:s}),this._storedNodes=t}}let le=0;function ce(){return le++}class de extends EventTarget{static generateId(t,e="default"){return`${e}-${t.localName}-${ce()}`}constructor(t,e,s,n={}){super();const{initializer:i,multiple:o,observe:r,useUniqueId:a,uniqueIdPrefix:l}=n;this.host=t,this.slotName=e,this.tagName=s,this.observe="boolean"!=typeof r||r,this.multiple="boolean"==typeof o&&o,this.slotInitializer=i,o&&(this.nodes=[]),a&&(this.defaultId=this.constructor.generateId(t,l||e))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let t=this.getSlotChild();t?(this.node=t,this.initAddedNode(t)):(t=this.attachDefaultNode(),this.initNode(t))}initMultiple(){const t=this.getSlotChildren();if(0===t.length){const t=this.attachDefaultNode();t&&(this.nodes=[t],this.initNode(t))}else this.nodes=t,t.forEach(t=>{this.initAddedNode(t)})}attachDefaultNode(){const{host:t,slotName:e,tagName:s}=this;let n=this.defaultNode;return!n&&s&&(n=document.createElement(s),n instanceof Element&&(""!==e&&n.setAttribute("slot",e),this.defaultNode=n)),n&&(this.node=n,t.appendChild(n)),n}getSlotChildren(){const{slotName:t}=this;return Array.from(this.host.childNodes).filter(e=>(e.nodeType!==Node.ELEMENT_NODE||!e.hasAttribute("data-slot-ignore"))&&(e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&""===t))}getSlotChild(){return this.getSlotChildren()[0]}initNode(t){const{slotInitializer:e}=this;e&&e(t,this.host)}initCustomNode(t){}teardownNode(t){}initAddedNode(t){t!==this.defaultNode&&(this.initCustomNode(t),this.initNode(t))}observeSlot(){const{slotName:t}=this,e=""===t?"slot:not([name])":`slot[name=${t}]`,s=this.host.shadowRoot.querySelector(e);this.__slotObserver=new ae(s,({addedNodes:t,removedNodes:e})=>{const s=this.multiple?this.nodes:[this.node],n=t.filter(t=>!(re(t)||s.includes(t)||t.nodeType===Node.ELEMENT_NODE&&t.hasAttribute("data-slot-ignore")));e.length&&(this.nodes=s.filter(t=>!e.includes(t)),e.forEach(t=>{this.teardownNode(t)})),n&&n.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...s,...n].filter(t=>t!==this.defaultNode),n.forEach(t=>{this.initAddedNode(t)})):(this.node&&this.node.remove(),this.node=n[0],this.initAddedNode(this.node)))})}}class he extends de{constructor(t){super(t,"tooltip"),this.setTarget(t),this.__onContentChange=this.__onContentChange.bind(this)}initCustomNode(t){t.target=this.target,void 0!==this.ariaTarget&&(t.ariaTarget=this.ariaTarget),void 0!==this.context&&(t.context=this.context),void 0!==this.manual&&(t.manual=this.manual),void 0!==this.opened&&(t.opened=this.opened),void 0!==this.position&&(t._position=this.position),void 0!==this.shouldShow&&(t.shouldShow=this.shouldShow),this.manual||this.host.setAttribute("has-tooltip",""),this.__notifyChange(t),t.addEventListener("content-changed",this.__onContentChange)}teardownNode(t){this.manual||this.host.removeAttribute("has-tooltip"),t.removeEventListener("content-changed",this.__onContentChange),this.__notifyChange(null)}setAriaTarget(t){this.ariaTarget=t;const e=this.node;e&&(e.ariaTarget=t)}setContext(t){this.context=t;const e=this.node;e&&(e.context=t)}setManual(t){this.manual=t;const e=this.node;e&&(e.manual=t)}setOpened(t){this.opened=t;const e=this.node;e&&(e.opened=t)}setPosition(t){this.position=t;const e=this.node;e&&(e._position=t)}setShouldShow(t){this.shouldShow=t;const e=this.node;e&&(e.shouldShow=t)}setTarget(t){this.target=t;const e=this.node;e&&(e.target=t)}__onContentChange(t){this.__notifyChange(t.target)}__notifyChange(t){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:t}}))}}class ue extends EventTarget{#t;#e=new Set;#s;#n=!1;constructor(t){super(),this.#t=t,this.#s=new CSSStyleSheet}#i(t){const{propertyName:e}=t;this.#e.has(e)&&this.dispatchEvent(new CustomEvent("property-changed",{detail:{propertyName:e}}))}observe(t){this.connect(),this.#e.has(t)||(this.#e.add(t),this.#s.replaceSync(`\n      :root::before, :host::before {\n        content: '' !important;\n        position: absolute !important;\n        top: -9999px !important;\n        left: -9999px !important;\n        visibility: hidden !important;\n        transition: 1ms allow-discrete step-end !important;\n        transition-property: ${[...this.#e].join(", ")} !important;\n      }\n    `))}connect(){this.#n||(this.#t.adoptedStyleSheets.unshift(this.#s),this.#o.addEventListener("transitionstart",t=>this.#i(t)),this.#o.addEventListener("transitionend",t=>this.#i(t)),this.#n=!0)}disconnect(){this.#e.clear(),this.#t.adoptedStyleSheets=this.#t.adoptedStyleSheets.filter(t=>t!==this.#s),this.#o.removeEventListener("transitionstart",this.#i),this.#o.removeEventListener("transitionend",this.#i),this.#n=!1}get#o(){return this.#t.documentElement??this.#t.host}static for(t){return t.__cssPropertyObserver||=new ue(t),t.__cssPropertyObserver}}function pe(t){const{baseStyles:e,themeStyles:s,elementStyles:n,lumoInjector:i}=t.constructor,o=t.__lumoStyleSheet;return o&&(e||s)?[...i.includeBaseStyles?e:[],o,...s]:[o,...n].filter(Boolean)}function ge(t){l(t.shadowRoot,pe(t))}function fe(t,e){t.__lumoStyleSheet=e,ge(t)}function me(t){t.__lumoStyleSheet=void 0,ge(t)}const ve=new Set;function be(t){ve.has(t)||(ve.add(t),console.warn(t))}const ye=new WeakMap;function _e(t){try{return t.media.mediaText}catch{return be('[LumoInjector] Browser denied to access property "mediaText" for some CSS rules, so they were skipped.'),""}}function we(t){try{return t.cssRules}catch{return be('[LumoInjector] Browser denied to access property "cssRules" for some CSS stylesheets, so they were skipped.'),[]}}function xe(t,e={tags:new Map,modules:new Map}){for(const n of we(t)){if(n instanceof CSSImportRule){const t=_e(n);t.startsWith("lumo_")?e.modules.set(t,[...n.styleSheet.cssRules]):xe(n.styleSheet,e);continue}if(n instanceof CSSMediaRule){const t=_e(n);t.startsWith("lumo_")&&e.modules.set(t,[...n.cssRules]);continue}if(n instanceof CSSStyleRule&&n.cssText.includes("-inject"))for(const t of n.style){var s;const i=null===(s=t.match(/^--_lumo-(.*)-inject-modules$/u))||void 0===s?void 0:s[1];if(!i)continue;const o=n.style.getPropertyValue(t);e.tags.set(i,o.split(",").map(t=>t.trim().replace(/'|"/gu,"")))}else;}return e}function ke(t){let e=new Map,s=new Map;for(const n of t){let t=ye.get(n);t||(t=xe(n),ye.set(n,t)),e=new Map([...e,...t.tags]),s=new Map([...s,...t.modules])}return{tags:e,modules:s}}function Ce(t){return`--_lumo-${t.is}-inject`}class Se{#t;#r;#a=new Map;#l=new Map;constructor(t=document){this.#t=t,this.handlePropertyChange=this.handlePropertyChange.bind(this),this.#r=ue.for(t),this.#r.addEventListener("property-changed",this.handlePropertyChange)}disconnect(){this.#r.removeEventListener("property-changed",this.handlePropertyChange),this.#a.clear(),this.#l.values().forEach(t=>t.forEach(me))}forceUpdate(){for(const t of this.#a.keys())this.#c(t)}componentConnected(t){const{lumoInjector:e}=t.constructor,{is:s}=e;this.#l.set(s,this.#l.get(s)??new Set),this.#l.get(s).add(t);const n=this.#a.get(s);if(n)return void(n.cssRules.length>0&&fe(t,n));this.#d(s);const i=Ce(e);this.#r.observe(i)}componentDisconnected(t){var e;const{is:s}=t.constructor.lumoInjector;null===(e=this.#l.get(s))||void 0===e||e.delete(t),me(t)}handlePropertyChange(t){var e;const{propertyName:s}=t.detail,n=null===(e=s.match(/^--_lumo-(.*)-inject$/u))||void 0===e?void 0:e[1];n&&this.#c(n)}#d(t){this.#a.set(t,new CSSStyleSheet),this.#c(t)}#c(t){var e;const{tags:s,modules:n}=ke(this.#h),i=(s.get(t)??[]).flatMap(t=>n.get(t)??[]).map(t=>t.cssText).join("\n"),o=this.#a.get(t);o.replaceSync(i),null===(e=this.#l.get(t))||void 0===e||e.forEach(t=>{i?fe(t,o):me(t)})}get#h(){let t=new Set;for(const e of[this.#t,document])t=t.union(new Set(e.styleSheets)),t=t.union(new Set(e.adoptedStyleSheets));return[...t]}}const Ee=new Set;function Te(t){const e=t.getRootNode();return e.host&&e.host.constructor.version?Te(e.host):e}const Ae=t=>class extends t{static finalize(){super.finalize();const t=Ce(this.lumoInjector);this.is&&!Ee.has(t)&&(Ee.add(t),CSS.registerProperty({name:t,syntax:"<number>",inherits:!0,initialValue:"0"}))}static get lumoInjector(){return{is:this.is,includeBaseStyles:!1}}connectedCallback(){super.connectedCallback();const t=Te(this);t.__lumoInjectorDisabled||this.isConnected&&(t.__lumoInjector||=new Se(t),this.__lumoInjector=t.__lumoInjector,this.__lumoInjector.componentConnected(this))}disconnectedCallback(){super.disconnectedCallback(),this.__lumoInjector&&(this.__lumoInjector.componentDisconnected(this),this.__lumoInjector=void 0)}},Oe=t=>class extends t{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(t,e,s){super.attributeChangedCallback(t,e,s),"theme"===t&&this._set_theme(s)}},Ie=[],Me=new Set,je=new Set;function $e(t){return t&&Object.prototype.hasOwnProperty.call(t,"__themes")}function Pe(t,e){return(t||"").split(" ").some(t=>new RegExp(`^${t.split("*").join(".*")}$`,"u").test(e))}function Le(t){return t.map(t=>t.cssText).join("\n")}const Ne="vaadin-themable-mixin-style";function Be(t,e){const s=document.createElement("style");s.id=Ne,s.textContent=Le(t),e.content.appendChild(s)}function Re(t=""){let e=0;return t.startsWith("lumo-")||t.startsWith("material-")?e=1:t.startsWith("vaadin-")&&(e=2),e}function De(t){const e=[];return t.include&&[].concat(t.include).forEach(t=>{const s=Ie.find(e=>e.moduleId===t);s?e.push(...De(s),...s.styles):console.warn(`Included moduleId ${t} not found in style registry`)},t.styles),e}function Ue(t){const e=`${t}-default-theme`,s=Ie.filter(s=>s.moduleId!==e&&Pe(s.themeFor,t)).map(t=>Object.assign(Object.assign({},t),{},{styles:[...De(t),...t.styles],includePriority:Re(t.moduleId)})).sort((t,e)=>e.includePriority-t.includePriority);return s.length>0?s:Ie.filter(t=>t.moduleId===e)}const Ve=t=>class extends(Oe(t)){constructor(){super(),Me.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&je.add(this.is),this.elementStyles)return;const t=this.prototype._template;t&&!$e(this)&&Be(this.getStylesForThis(),t)}static finalizeStyles(t){return this.baseStyles=t?[t].flat(1/0):[],this.themeStyles=this.getStylesForThis(),[...this.baseStyles,...this.themeStyles]}static getStylesForThis(){const e=t.__themes||[],s=Object.getPrototypeOf(this.prototype),n=(s?s.constructor.__themes:[])||[];this.__themes=[...e,...n,...Ue(this.is)];const i=this.__themes.flatMap(t=>t.styles);return i.filter((t,e)=>e===i.lastIndexOf(t))}},Fe=(t,...e)=>{const s=document.createElement("style");s.id=t,s.textContent=e.map(t=>t.toString()).join("\n"),document.head.insertAdjacentElement("afterbegin",s)};["--vaadin-text-color","--vaadin-text-color-disabled","--vaadin-text-color-secondary","--vaadin-border-color","--vaadin-border-color-secondary","--vaadin-background-color"].forEach(t=>{CSS.registerProperty({name:t,syntax:"<color>",inherits:!0,initialValue:"light-dark(black, white)"})}),Fe("vaadin-base",i`
    @layer vaadin.base {
      html {
        /* Background color */
        --vaadin-background-color: light-dark(#fff, #222);

        /* Container colors */
        --vaadin-background-container: color-mix(in oklab, var(--vaadin-text-color) 5%, var(--vaadin-background-color));
        --vaadin-background-container-strong: color-mix(
          in oklab,
          var(--vaadin-text-color) 10%,
          var(--vaadin-background-color)
        );

        /* Border colors */
        --vaadin-border-color-secondary: color-mix(in oklab, var(--vaadin-text-color) 24%, transparent);
        --vaadin-border-color: color-mix(in oklab, var(--vaadin-text-color) 48%, transparent); /* Above 3:1 contrast */

        /* Text colors */
        /* Above 3:1 contrast */
        --vaadin-text-color-disabled: color-mix(in oklab, var(--vaadin-text-color) 48%, transparent);
        /* Above 4.5:1 contrast */
        --vaadin-text-color-secondary: color-mix(in oklab, var(--vaadin-text-color) 68%, transparent);
        /* Above 7:1 contrast */
        --vaadin-text-color: light-dark(#1f1f1f, white);

        /* Padding */
        --vaadin-padding-xs: 6px;
        --vaadin-padding-s: 8px;
        --vaadin-padding-m: 12px;
        --vaadin-padding-l: 16px;
        --vaadin-padding-xl: 24px;
        --vaadin-padding-block-container: var(--vaadin-padding-xs);
        --vaadin-padding-inline-container: var(--vaadin-padding-s);

        /* Gap/spacing */
        --vaadin-gap-xs: 6px;
        --vaadin-gap-s: 8px;
        --vaadin-gap-m: 12px;
        --vaadin-gap-l: 16px;
        --vaadin-gap-xl: 24px;

        /* Border radius */
        --vaadin-radius-s: 3px;
        --vaadin-radius-m: 6px;
        --vaadin-radius-l: 12px;

        /* Focus outline */
        --vaadin-focus-ring-width: 2px;
        --vaadin-focus-ring-color: var(--vaadin-text-color);

        /* Icons, used as mask-image */
        --_vaadin-icon-arrow-up: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>');
        --_vaadin-icon-calendar: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>');
        --_vaadin-icon-checkmark: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>');
        --_vaadin-icon-chevron-down: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>');
        --_vaadin-icon-clock: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>');
        --_vaadin-icon-cross: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>');
        --_vaadin-icon-drag: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M11 7c0 .82843-.6716 1.5-1.5 1.5C8.67157 8.5 8 7.82843 8 7s.67157-1.5 1.5-1.5c.8284 0 1.5.67157 1.5 1.5Zm0 5c0 .8284-.6716 1.5-1.5 1.5-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.6716 1.5 1.5Zm0 5c0 .8284-.6716 1.5-1.5 1.5-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.6716 1.5 1.5Zm5-10c0 .82843-.6716 1.5-1.5 1.5S13 7.82843 13 7s.6716-1.5 1.5-1.5S16 6.17157 16 7Zm0 5c0 .8284-.6716 1.5-1.5 1.5S13 12.8284 13 12s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5Zm0 5c0 .8284-.6716 1.5-1.5 1.5S13 17.8284 13 17s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5Z" fill="currentColor"/></svg>');
        --_vaadin-icon-eye: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>');
        --_vaadin-icon-eye-slash: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>');
        --_vaadin-icon-fullscreen: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>');
        --_vaadin-icon-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>');
        --_vaadin-icon-link: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>');
        --_vaadin-icon-menu: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>');
        --_vaadin-icon-minus: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>');
        --_vaadin-icon-paper-airplane: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>');
        --_vaadin-icon-pen: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>');
        --_vaadin-icon-play: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" /></svg>');
        --_vaadin-icon-plus: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>');
        --_vaadin-icon-redo: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>');
        --_vaadin-icon-refresh: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M22 10C22 10 19.995 7.26822 18.3662 5.63824C16.7373 4.00827 14.4864 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.1031 21 19.5649 18.2543 20.6482 14.5M22 10V4M22 10H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
        --_vaadin-icon-resize: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 7.46967c.2929.29289.2929.76777 0 1.06066L8.53033 18.5304c-.29289.2929-.76777.2929-1.06066 0s-.29289-.7678 0-1.0607L17.4697 7.46967c.2929-.29289.7677-.29289 1.0606 0Zm0 4.50003c.2929.2929.2929.7678 0 1.0607l-5.5 5.5c-.2929.2928-.7677.2928-1.0606 0-.2929-.2929-.2929-.7678 0-1.0607l5.4999-5.5c.2929-.2929.7678-.2929 1.0607 0Zm0 4.5c.2929.2928.2929.7677 0 1.0606l-1 1.0001c-.2929.2928-.7677.2929-1.0606 0-.2929-.2929-.2929-.7678 0-1.0607l1-1c.2929-.2929.7677-.2929 1.0606 0Z" fill="currentColor"/></svg>');
        --_vaadin-icon-sort: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none"><path d="M7.49854 6.99951C7.92795 6.99951 8.15791 7.50528 7.87549 7.82861L4.37646 11.8296C4.17728 12.0571 3.82272 12.0571 3.62354 11.8296L0.125488 7.82861C-0.157248 7.50531 0.0719873 6.99956 0.501465 6.99951H7.49854ZM3.62354 0.17041C3.82275 -0.0573875 4.17725 -0.0573848 4.37646 0.17041L7.87549 4.17041C8.15825 4.49373 7.92806 5.00049 7.49854 5.00049L0.501465 4.99951C0.0719873 4.99946 -0.157248 4.49371 0.125488 4.17041L3.62354 0.17041Z" fill="black"/></svg>');
        --_vaadin-icon-undo: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>');
        --_vaadin-icon-upload: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>');
        --_vaadin-icon-user: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>');
        --_vaadin-icon-warn: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>');

        /* Cursors for interactive elements */
        --vaadin-clickable-cursor: pointer;
        --vaadin-disabled-cursor: not-allowed;

        /* Use units so that the values can be used in calc() */
        --safe-area-inset-top: env(safe-area-inset-top, 0px);
        --safe-area-inset-right: env(safe-area-inset-right, 0px);
        --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
        --safe-area-inset-left: env(safe-area-inset-left, 0px);
      }

      @supports not (color: hsl(0 0 0)) {
        html {
          --_vaadin-safari-17-deg: 1deg;
        }
      }

      @media (forced-colors: active) {
        html {
          --vaadin-background-color: Canvas;
          --vaadin-border-color: CanvasText;
          --vaadin-border-color-secondary: CanvasText;
          --vaadin-text-color-disabled: CanvasText;
          --vaadin-text-color-secondary: CanvasText;
          --vaadin-text-color: CanvasText;
          --vaadin-icon-color: CanvasText;
          --vaadin-focus-ring-color: Highlight;
        }
      }
    }
  `);const qe=t=>t,ze="string"==typeof document.head.style.touchAction,Ke="__polymerGestures",Xe="__polymerGesturesHandled",He="__polymerGesturesTouchAction",We=25,Ye=5,Ze=2,Ge=["mousedown","mousemove","mouseup","click"],Je=[0,1,4,2],Qe=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function ts(t){return Ge.indexOf(t)>-1}let es=!1;function ss(t){ts(t)}!function(){try{const t=Object.defineProperty({},"passive",{get(){es=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();const ns=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),is={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function os(t){const e=t.type;if(!ts(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!Qe&&(e=Je[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}function rs(t){if("click"===t.type){if(0===t.detail)return!0;const e=fs(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;const s=e.getBoundingClientRect(),n=t.pageX,i=t.pageY;return!(n>=s.left&&n<=s.right&&i>=s.top&&i<=s.bottom)}return!1}const as={touch:{x:0,y:0,id:-1,scrollDecided:!1}};function ls(t){let e="auto";const s=hs(t);for(let t,n=0;n<s.length;n++)if(t=s[n],t[He]){e=t[He];break}return e}function cs(t,e,s){t.movefn=e,t.upfn=s,document.addEventListener("mousemove",e),document.addEventListener("mouseup",s)}function ds(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}const hs=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],us={},ps=[];function gs(t,e){let s=document.elementFromPoint(t,e),n=s;for(;n&&n.shadowRoot&&!window.ShadyDOM;){const i=n;if(n=n.shadowRoot.elementFromPoint(t,e),i===n)break;n&&(s=n)}return s}function fs(t){const e=hs(t);return e.length>0?e[0]:t.target}function ms(t){const e=t.type,s=t.currentTarget[Ke];if(!s)return;const n=s[e];if(!n)return;if(!t[Xe]&&(t[Xe]={},e.startsWith("touch"))){const s=t.changedTouches[0];if("touchstart"===e&&1===t.touches.length&&(as.touch.id=s.identifier),as.touch.id!==s.identifier)return;ze||"touchstart"!==e&&"touchmove"!==e||vs(t)}const i=t[Xe];if(!i.skip){for(let e,s=0;s<ps.length;s++)e=ps[s],n[e.name]&&!i[e.name]&&e.flow&&e.flow.start.indexOf(t.type)>-1&&e.reset&&e.reset();for(let s,o=0;o<ps.length;o++)s=ps[o],n[s.name]&&!i[s.name]&&(i[s.name]=!0,s[e](t))}}function vs(t){const e=t.changedTouches[0],s=t.type;if("touchstart"===s)as.touch.x=e.clientX,as.touch.y=e.clientY,as.touch.scrollDecided=!1;else if("touchmove"===s){if(as.touch.scrollDecided)return;as.touch.scrollDecided=!0;const s=ls(t);let n=!1;const i=Math.abs(as.touch.x-e.clientX),o=Math.abs(as.touch.y-e.clientY);t.cancelable&&("none"===s?n=!0:"pan-x"===s?n=o>i:"pan-y"===s&&(n=i>o)),n?t.preventDefault():Cs("track")}}function bs(t,e,s){return!!us[e]&&(ys(t,e,s),!0)}function ys(t,e,s){const n=us[e],i=n.deps,o=n.name;let r=t[Ke];r||(t[Ke]=r={});for(let e,s,n=0;n<i.length;n++)e=i[n],ns&&ts(e)&&"click"!==e||(s=r[e],s||(r[e]=s={_count:0}),0===s._count&&t.addEventListener(e,ms,ss(e)),s[o]=(s[o]||0)+1,s._count=(s._count||0)+1);t.addEventListener(e,s),n.touchAction&&xs(t,n.touchAction)}function _s(t){ps.push(t),t.emits.forEach(e=>{us[e]=t})}function ws(t){for(let e,s=0;s<ps.length;s++){e=ps[s];for(let s,n=0;n<e.emits.length;n++)if(s=e.emits[n],s===t)return e}return null}function xs(t,e){ze&&t instanceof HTMLElement&&Nt.run(()=>{t.style.touchAction=e}),t[He]=e}function ks(t,e,s){const n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=s,qe(t).dispatchEvent(n),n.defaultPrevented){const t=s.preventer||s.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function Cs(t){const e=ws(t);e.info&&(e.info.prevent=!0)}function Ss(t,e,s,n){e&&ks(e,t,{x:s.clientX,y:s.clientY,sourceEvent:s,preventer:n,prevent:t=>Cs(t)})}function Es(t,e,s){if(t.prevent)return!1;if(t.started)return!0;const n=Math.abs(t.x-e),i=Math.abs(t.y-s);return n>=Ye||i>=Ye}function Ts(t,e,s){if(!e)return;const n=t.moves[t.moves.length-2],i=t.moves[t.moves.length-1],o=i.x-t.x,r=i.y-t.y;let a,l=0;n&&(a=i.x-n.x,l=i.y-n.y),ks(e,"track",{state:t.state,x:s.clientX,y:s.clientY,dx:o,dy:r,ddx:a,ddy:l,sourceEvent:s,hover:()=>gs(s.clientX,s.clientY)})}function As(t,e,s){const n=Math.abs(e.clientX-t.x),i=Math.abs(e.clientY-t.y),o=fs(s||e);!o||is[o.localName]&&o.hasAttribute("disabled")||(isNaN(n)||isNaN(i)||n<=We&&i<=We||rs(e))&&(t.prevent||ks(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:s}))}_s({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){ds(this.info)},mousedown(t){if(!os(t))return;const e=fs(t),s=this,n=t=>{os(t)||(Ss("up",e,t),ds(s.info))},i=t=>{os(t)&&Ss("up",e,t),ds(s.info)};cs(this.info,n,i),Ss("down",e,t)},touchstart(t){Ss("down",fs(t),t.changedTouches[0],t)},touchend(t){Ss("up",fs(t),t.changedTouches[0],t)}}),_s({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(t){this.moves.length>Ze&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,ds(this.info)},mousedown(t){if(!os(t))return;const e=fs(t),s=this,n=t=>{const n=t.clientX,i=t.clientY;Es(s.info,n,i)&&(s.info.state=s.info.started?"mouseup"===t.type?"end":"track":"start","start"===s.info.state&&Cs("tap"),s.info.addMove({x:n,y:i}),os(t)||(s.info.state="end",ds(s.info)),e&&Ts(s.info,e,t),s.info.started=!0)},i=t=>{s.info.started&&n(t),ds(s.info)};cs(this.info,n,i),this.info.x=t.clientX,this.info.y=t.clientY},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove(t){const e=fs(t),s=t.changedTouches[0],n=s.clientX,i=s.clientY;Es(this.info,n,i)&&("start"===this.info.state&&Cs("tap"),this.info.addMove({x:n,y:i}),Ts(this.info,e,s),this.info.state="track",this.info.started=!0)},touchend(t){const e=fs(t),s=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:s.clientX,y:s.clientY}),Ts(this.info,e,s))}}),_s({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(t){os(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click(t){os(t)&&As(this.info,t)},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend(t){As(this.info,t.changedTouches[0],t)}});const Os=Zt(t=>class extends t{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0,sync:!0}}}_disabledChanged(t){this._setAriaDisabled(t)}_setAriaDisabled(t){t?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}}),Is=Zt(t=>class extends t{ready(){super.ready(),this.addEventListener("keydown",t=>{this._onKeyDown(t)}),this.addEventListener("keyup",t=>{this._onKeyUp(t)})}_onKeyDown(t){switch(t.key){case"Enter":this._onEnter(t);break;case"Escape":this._onEscape(t)}}_onKeyUp(t){}_onEnter(t){}_onEscape(t){}}),Ms=t=>class extends(Os(Is(t))){get _activeKeys(){return[" "]}ready(){super.ready(),bs(this,"down",t=>{this._shouldSetActive(t)&&this._setActive(!0)}),bs(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(t){return!this.disabled}_onKeyDown(t){super._onKeyDown(t),this._shouldSetActive(t)&&this._activeKeys.includes(t.key)&&(this._setActive(!0),document.addEventListener("keyup",t=>{this._activeKeys.includes(t.key)&&this._setActive(!1)},{once:!0}))}_setActive(t){this.toggleAttribute("active",t)}};let js=!1;function $s(){return js}function Ps(t){const e=t.style;if("hidden"===e.visibility||"none"===e.display)return!0;const s=window.getComputedStyle(t);return"hidden"===s.visibility||"none"===s.display}function Ls(t){return t.checkVisibility?!t.checkVisibility({visibilityProperty:!0}):null===t.offsetParent&&0===t.clientWidth&&0===t.clientHeight||Ps(t)}function Ns(t){return t.getRootNode().activeElement===t}window.addEventListener("keydown",()=>{js=!0},{capture:!0}),window.addEventListener("mousedown",()=>{js=!1},{capture:!0});const Bs=Zt(t=>class extends t{get _keyboardActive(){return $s()}ready(){this.addEventListener("focusin",t=>{this._shouldSetFocus(t)&&this._setFocused(!0)}),this.addEventListener("focusout",t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}focus(t){super.focus(t),t&&!1===t.focusVisible||this.setAttribute("focus-ring","")}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}});export{Ms as A,Os as D,Ht as E,Bs as F,Is as K,Ae as L,oe as P,de as S,Ve as T,he as a,Rt as b,Pt as c,mt as d,Ns as e,Ls as f,ae as g,Zt as h,$s as i,f as o,lt as p,$t as t};
