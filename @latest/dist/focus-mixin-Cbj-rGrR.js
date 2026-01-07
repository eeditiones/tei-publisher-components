import{E as t,p as e,a as s,x as n,i as o,T as i,w as r}from"./pb-mixin-DHoWQheB.js";import{t as a}from"./pb-dialog-tklYGWfc.js";import{e as l,i as c,t as h,o as d}from"./unsafe-html-D5VGo9Oq.js";import{t as u}from"./pb-i18n-C0NDma4h.js";const p=e=>e??t;class m extends(a(e(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{noAnimation:{type:Boolean,attribute:"no-animation"},opened:{type:Boolean},toggles:{type:Boolean},expandIcon:{type:String,attribute:"expand-icon"},collapseIcon:{type:String,attribute:"collapse-icon"},iconSprite:{type:String,attribute:"icon-sprite"},noIcons:{type:Boolean,attribute:"no-icons"}})}constructor(){super(),this.horizontal=!1,this.noAnimation=!1,this.opened=!1,this.expandIcon="icons:expand-more",this.collapseIcon="icons:expand-less",this.noIcons=!1,this.toggles=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("pb-collapse-open",()=>{this.open()}),this.toggles&&this.subscribeTo("pb-collapse-open",t=>{if(t.detail&&t.detail._source!==this){for(const e of this.querySelectorAll("pb-collapse"))if(e===t.detail._source)return;this.close()}})}updated(t){if(super.updated(t),t.has("opened")){const t=this.shadowRoot.querySelector("details");t&&(t.open=this.opened)}}open(){this.opened||(this.opened=!0,this.emitTo("pb-collapse-open",this))}close(){this.opened&&(this.opened=!1)}toggle(){this.opened=!this.opened,this.opened&&this.emitTo("pb-collapse-open",this.data)}_handleToggle(t){t.preventDefault(),this.toggle()}render(){return n`
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
    `}_renderIcon({position:t}){if(this.noIcons)return null;const e=this.classList&&this.classList.contains("icon-right");if("left"===t&&e||"right"===t&&!e)return null;const s=this._customIconImage(),o=s&&"none"!==s,i=this.opened?this.collapseIcon:this.expandIcon,r=this.iconSprite||null;return n`
      <span class="collapse-icon" data-custom="${o?"true":"false"}">
        <pb-icon icon="${i}" sprite=${p(r||void 0)} decorative></pb-icon>
      </span>
    `}_customIconImage(){return"undefined"==typeof window||"function"!=typeof getComputedStyle?"none":getComputedStyle(this).getPropertyValue("--pb-collapse-icon-image").trim()||"none"}static get styles(){return o`
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
    `}}customElements.get("pb-collapse")||customElements.define("pb-collapse",m);class f extends HTMLElement{static get observedAttributes(){return["handle-as","method","with-credentials","content-type"]}constructor(){super(),this._url="",this._method="GET",this._handleAs="json",this._withCredentials=!1,this._contentType=null,this.params={},this.headers={},this.body=void 0,this.loading=!1,this.lastResponse=null,this.lastRequest=null,this.lastError=null,this._controller=null}connectedCallback(){this.hasAttribute("method")&&this.attributeChangedCallback("method",null,this.getAttribute("method")),this.hasAttribute("handle-as")&&this.attributeChangedCallback("handle-as",null,this.getAttribute("handle-as")),this.hasAttribute("with-credentials")&&this.attributeChangedCallback("with-credentials",null,this.getAttribute("with-credentials")),this.hasAttribute("content-type")&&this.attributeChangedCallback("content-type",null,this.getAttribute("content-type"))}attributeChangedCallback(t,e,s){switch(t){case"handle-as":this._handleAs=(s||"json").toLowerCase();break;case"method":this._method=(s||"GET").toUpperCase();break;case"with-credentials":this._withCredentials=null!==s;break;case"content-type":this._contentType=s||null}}set url(t){this._url=t||""}get url(){return this._url}set method(t){const e=(t||"GET").toUpperCase();this._method!==e&&(this._method=e,null==t?this.removeAttribute("method"):this.setAttribute("method",t))}get method(){return this._method}set handleAs(t){const e=(t||"json").toLowerCase();this._handleAs!==e&&(this._handleAs=e,null==t?this.removeAttribute("handle-as"):this.setAttribute("handle-as",t))}get handleAs(){return this._handleAs}set withCredentials(t){const e=Boolean(t);this._withCredentials!==e&&(this._withCredentials=e,e?this.setAttribute("with-credentials",""):this.removeAttribute("with-credentials"))}get withCredentials(){return this._withCredentials}set contentType(t){this._contentType!==t&&(this._contentType=t||null,null==t?this.removeAttribute("content-type"):this.setAttribute("content-type",t))}get contentType(){return this._contentType}abort(){this._controller&&(this._controller.abort(),this._controller=null,this.loading=!1)}async generateRequest(){if(!this._url)return null;this.abort(),this._controller=new AbortController;const t=this._buildRequestInit();t.signal=this._controller.signal,this.loading=!0;try{const e=this._buildUrlWithParams(),s=await fetch(e,t),{parsed:n,rawText:o}=await this._parseBody(s);if(this.lastRequest={url:e,method:this._method,params:this.params,headers:t.headers},!s.ok){const t={status:s.status,statusText:s.statusText,response:o,xhr:this._createXhrShim(s)};return this.lastError=t,this.lastResponse=null,this.loading=!1,this.dispatchEvent(new CustomEvent("error",{detail:t})),null}this.lastError=null,this.lastResponse=n,this.loading=!1;const i={response:n,status:s.status,xhr:this._createXhrShim(s),request:this.lastRequest};return this.dispatchEvent(new CustomEvent("response",{detail:i})),n}catch(t){if("AbortError"===t.name)return null;if(!this.lastError){const e={status:t.status||0,statusText:t.statusText||t.message,response:t.response||null,xhr:t.xhr||null};this.lastError=e,this.lastResponse=null,this.dispatchEvent(new CustomEvent("error",{detail:e}))}return this.loading=!1,null}finally{this._controller=null}}_buildUrlWithParams(){if(!this.params||0===Object.keys(this.params).length)return this._url;const t=[];if(Object.entries(this.params).forEach(([e,s])=>{null!=s&&(Array.isArray(s)?s.forEach(s=>{t.push(`${encodeURIComponent(e)}=${encodeURIComponent(s)}`)}):t.push(`${encodeURIComponent(e)}=${encodeURIComponent(s)}`))}),0===t.length)return this._url;const e=this._url.includes("?")?"&":"?";return`${this._url}${e}${t.join("&")}`}_buildRequestInit(){const t=this.headers&&"function"==typeof this.headers.entries?Object.fromEntries(this.headers.entries()):this.headers||{},e=new Headers(t),s={method:this._method||"GET",headers:e,credentials:this._withCredentials?"include":"same-origin"},n=this._prepareBody(e);return void 0!==n&&(s.body=n),s}_prepareBody(t){if(null==this.body)return;if(this.body instanceof FormData||this.body instanceof Blob||this.body instanceof ArrayBuffer)return this.body;if("string"==typeof this.body)return this._contentType&&!t.has("Content-Type")&&t.set("Content-Type",this._contentType),this.body;if(this.body instanceof URLSearchParams)return t.has("Content-Type")||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),this.body.toString();if("application/x-www-form-urlencoded"===this._contentType)return t.has("Content-Type")||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),this._encodeFormBody(this.body);const e=this._contentType||"application/json";return t.has("Content-Type")||t.set("Content-Type",e),e.includes("json")?JSON.stringify(this.body):this.body}async _parseBody(t){const e=t.clone();let s="";try{s=await e.text()}catch(t){s=""}if(204===t.status||205===t.status)return{parsed:null,rawText:""};switch(this._handleAs){case"text":return{parsed:s,rawText:s};case"json":if(!s)return{parsed:null,rawText:s};try{return{parsed:JSON.parse(s),rawText:s}}catch(t){return{parsed:null,rawText:s}}case"blob":return{parsed:await t.blob(),rawText:s};case"arraybuffer":return{parsed:await t.arrayBuffer(),rawText:s};default:return{parsed:s,rawText:s}}}_createXhrShim(t){return{status:t.status,statusText:t.statusText,responseURL:t.url,getResponseHeader:e=>t.headers.get(e),getAllResponseHeaders:()=>[...t.headers.entries()].map(([t,e])=>`${t}: ${e}`).join("\r\n")}}_encodeFormBody(t){if(t instanceof URLSearchParams)return t.toString();if("string"==typeof t)return t;if(!t||"object"!=typeof t)return"";const e=new URLSearchParams;return Object.entries(t).forEach(([t,s])=>{Array.isArray(s)?s.forEach(s=>e.append(t,s)):null!=s&&e.append(t,s)}),e.toString()}}customElements.get("pb-fetch")||customElements.define("pb-fetch",f);const _=l(class extends c{constructor(t){var e;if(super(t),t.type!==h.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e){var s;e[t]&&(null===(s=this.nt)||void 0===s||!s.has(t))&&this.st.add(t)}return this.render(e)}const n=t.element.classList;for(const t of this.st)t in e||(n.remove(t),this.st.delete(t));for(const t in e){var o;const s=!!e[t];s===this.st.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(s?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return i}});let g=0;const y={ENTER:"Enter",ESC:"Escape",ARROW_UP:"ArrowUp",ARROW_DOWN:"ArrowDown"},b=200;function v(t){if("object"==typeof t&&t){const e=t.text??t.value??"",s=t.value??t.text??"";return{text:String(e),value:String(s)}}const e=null==t?"":String(t);return{text:e,value:e}}function w(t=[]){return Array.isArray(t)?t.map(v):[]}class A extends(e(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{name:{type:String},value:{type:String},placeholder:{type:String,attribute:"placeholder"},label:{type:String},source:{type:String},preload:{type:Boolean},suggestions:{type:Array},substring:{type:Boolean},icon:{type:String},helperText:{type:String,attribute:"helper-text"},alwaysFloatLabel:{type:Boolean,attribute:"always-float-label"},disabled:{type:Boolean,reflect:!0},requestParams:{type:Object,attribute:!1}})}constructor(){super(),this.placeholder="search.placeholder",this.label="",this.suggestions=[],this.substring=!1,this.preload=!1,this.icon="",this.helperText="",this.alwaysFloatLabel=!1,this.disabled=!1,this.lastSelected=null,this.value="",this.name="",this._hiddenInput=null,this._initialized=!1,this._menuOpen=!1,this._isFocused=!1,this._inputValue="",this._filteredSuggestions=[],this._highlightedIndex=-1,this._loading=!1,this._pointerSelecting=!1,this._fetchTimeout=null,this._abortController=null,this.requestParams={},this._inputId="pb-autocomplete-input-"+ ++g}_resolveLabelText(){return this.label?u(this.label):this.placeholder?u(this.placeholder):""}_resolveHelperText(){return this.helperText?u(this.helperText):""}get _input(){var t;return(null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById(this._inputId))??null}connectedCallback(){super.connectedCallback(),this._inputValue=this.value||""}firstUpdated(){!this._hiddenInput&&this.name&&(this._hiddenInput=document.createElement("input"),this._hiddenInput.type="hidden",this._hiddenInput.name=this.name,this._hiddenInput.value=this.value||"",this.appendChild(this._hiddenInput)),r("pb-page-ready",()=>{this.preload&&this.source?this._sendRequest():this.value&&this.source?this._sendRequest(this.value):(this._syncInputValueFromSuggestions(),this._filterSuggestions())}),this.source||(this._syncInputValueFromSuggestions(),this._filterSuggestions())}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this._fetchTimeout),this._abortController&&(this._abortController.abort(),this._abortController=null)}updated(t){t.has("suggestions")&&(this._filterSuggestions(),this._syncInputValueFromSuggestions()),t.has("value")&&(this._syncInputValueFromSuggestions(),this._hiddenInput&&(this._hiddenInput.value=this.value??"")),t.has("name")&&(!this._hiddenInput&&this.name?(this._hiddenInput=document.createElement("input"),this._hiddenInput.type="hidden",this._hiddenInput.name=this.name,this._hiddenInput.value=this.value||"",this._hiddenInput.disabled=this.disabled,this.appendChild(this._hiddenInput)):this._hiddenInput&&(this._hiddenInput.name=this.name)),t.has("disabled")&&(this.disabled&&this._closeMenu(),this._hiddenInput&&(this._hiddenInput.disabled=this.disabled))}render(){const e=this._resolveLabelText(),s=this._resolveHelperText(),o={"pb-input-container":!0,"pb-input-container--focused":this._isFocused,"pb-input-container--filled":!!this._inputValue,"pb-input-container--has-prefix":!!this.icon,"pb-input-container--always-float":this.alwaysFloatLabel,"pb-input-container--disabled":this.disabled},i=this._menuOpen&&this._highlightedIndex>=0?`pb-autocomplete-option-${this._highlightedIndex}`:void 0,r=this._filteredSuggestions,a=this._menuOpen&&(r.length>0||this._loading),l=e?`${this._inputId}-label`:void 0,c=s?`${this._inputId}-helper`:void 0,h=!l&&e?e:void 0,d=l||!this.placeholder?"":u(this.placeholder);return n`
      <div class="autocomplete">
        <slot></slot>
        <div class="${_(o)}">
          ${this.icon?n`<pb-icon class="pb-input-prefix" icon="${this.icon}" decorative></pb-icon>`:t}
          <input
            id="${this._inputId}"
            class="pb-input"
            type="search"
            part="input"
            name="query"
            autocomplete="off"
            .value=${this._inputValue}
            placeholder="${d}"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded="${this._menuOpen?"true":"false"}"
            aria-controls="pb-autocomplete-list"
            aria-activedescendant=${p(i)}
            aria-labelledby=${p(l)}
            aria-describedby=${p(c)}
            aria-label=${p(h)}
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
        class=${_({suggestion:!0,"suggestion--active":s})}
        role="option"
        aria-selected="${s?"true":"false"}"
        @click=${()=>this._selectSuggestion(t)}
        @mouseenter=${()=>this._setHighlightedIndex(e)}
      >
        ${t.text}
      </li>
    `}_handleInput(t){if(this.disabled)return void t.preventDefault();const e=t.currentTarget;this._inputValue=e.value,this.value=e.value,this._hiddenInput&&(this._hiddenInput.value=this.value),this._filterSuggestions(),this._menuOpen=!0,this._highlightedIndex=this._filteredSuggestions.length?0:-1,this.requestUpdate(),this.source&&!this.preload&&this._scheduleFetch(this.value),this.emitTo("pb-autocomplete-input",{text:this._inputValue,value:this.value})}_handleFocus(){this.disabled||(this._isFocused=!0,this._filteredSuggestions.length&&(this._menuOpen=!0))}_handleBlur(){this._isFocused=!1,this._pointerSelecting||window.setTimeout(()=>{this._isFocused||this._pointerSelecting||this._closeMenu()},100)}_handleSuggestionsPointerDown(t){this.disabled||(t.preventDefault(),this._pointerSelecting=!0)}_handleSuggestionsPointerUp(){var t;this.disabled||(this._pointerSelecting=!1,null===(t=this._input)||void 0===t||t.focus())}_handleKeydown(t){if(this.disabled)return;const{key:e}=t;switch(e){case y.ARROW_DOWN:t.preventDefault(),this._openMenu(),this._moveHighlight(1);break;case y.ARROW_UP:t.preventDefault(),this._openMenu(),this._moveHighlight(-1);break;case y.ENTER:this._menuOpen&&t.preventDefault(),this._handleEnter();break;case y.ESC:this._closeMenu()}}_handleEnter(){if(this.disabled)return;if(this._menuOpen&&this._highlightedIndex>=0){const t=this._filteredSuggestions[this._highlightedIndex];if(t)return void this._selectSuggestion(t)}if(!this.value)return;const t=this._findSuggestionByValue(this.value);t&&this._selectSuggestion(t)}_openMenu(){this.disabled||this._menuOpen||(this._menuOpen=!0,this.requestUpdate())}_closeMenu(){this._menuOpen&&(this._menuOpen=!1,this._highlightedIndex=-1,this.requestUpdate())}_moveHighlight(t){if(this.disabled)return;const e=this._filteredSuggestions;if(!e.length)return this._highlightedIndex=-1,void this.requestUpdate();let s=this._highlightedIndex+t;s<0?s=e.length-1:s>=e.length&&(s=0),this._setHighlightedIndex(s)}_setHighlightedIndex(t){this._highlightedIndex=t,this.requestUpdate(),this.updateComplete.then(()=>{var e;const s=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById(`pb-autocomplete-option-${t}`);null==s||s.scrollIntoView({block:"nearest"})})}_selectSuggestion(t){if(this.disabled)return;const{text:e,value:s}=v(t);this.lastSelected=e,this.value=s,this._inputValue=e,this._hiddenInput&&(this._hiddenInput.value=s);const n=this._input;n&&(n.value=e),this._closeMenu(),this.emitTo("pb-autocomplete-selected",{text:e,value:s}),this.emitTo("pb-autocomplete-input",{text:e,value:s})}_filterSuggestions(){const t=w(this.suggestions);if(!t.length)return void(this._filteredSuggestions=[]);const e=(this._inputValue||"").trim().toLowerCase();if(!e)return void(this._filteredSuggestions=t);const s=this.substring?t=>t.text.toLowerCase().includes(e):t=>t.text.toLowerCase().startsWith(e);this._filteredSuggestions=t.filter(s)}_findSuggestionByValue(t){if(!t)return null;const e=w(this.suggestions),s=String(t).toLowerCase();return e.find(t=>t.value.toLowerCase()===s||t.text.toLowerCase()===s)??null}_syncInputValueFromSuggestions(){if(!this.value)return void(this._inputValue="");const t=this._findSuggestionByValue(this.value);this._inputValue=t?t.text:this.value}_scheduleFetch(t){window.clearTimeout(this._fetchTimeout),this._fetchTimeout=window.setTimeout(()=>{this._fetchTimeout=null,this._sendRequest(t)},b)}async _sendRequest(t){if(!this.source)return;const e=this.toAbsoluteURL(this.source);let s;try{s=new URL(e)}catch(t){s=new URL(e,window.location.href)}const n=Object.assign(Object.assign({},this.requestParams||{}),this._getParameters());null!=t&&(n.query=t),Object.entries(n).forEach(([t,e])=>{null!=e&&(Array.isArray(e)?e.forEach(e=>s.searchParams.append(t,e)):s.searchParams.set(t,e))}),this._abortController&&this._abortController.abort(),this._abortController=new AbortController,this._loading=!0,this._menuOpen=!0,this.requestUpdate();try{const t=await fetch(s.href,{method:"GET",credentials:"include",signal:this._abortController.signal,headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`Request failed with status ${t.status}`);const e=await t.json();this._applyRemoteSuggestions(e)}catch(t){"AbortError"!==t.name&&console.error("pb-autocomplete: request failed",t)}finally{var o;if(null!==(o=this._abortController)&&void 0!==o&&o.signal.aborted)return void(this._loading=!1);this._loading=!1,this._abortController=null,this.requestUpdate()}}_applyRemoteSuggestions(t){if(!Array.isArray(t))return this.suggestions=[],this._filteredSuggestions=[],this._highlightedIndex=-1,this._menuOpen=!1,void this.requestUpdate();this._initialized=!0,this.suggestions=[...t],this._filteredSuggestions=w(t),this._highlightedIndex=this._filteredSuggestions.length?0:-1,this._menuOpen=!0,this._syncInputValueFromSuggestions(),this.requestUpdate()}_getParameters(){const t={};return this.querySelectorAll("[name]").forEach(e=>{t[e.name]=e.value}),t}static get styles(){return o`
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
    `}}customElements.get("pb-autocomplete")||customElements.define("pb-autocomplete",A);const P="undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function C(t,e,s,n){t.addEventListener?t.addEventListener(e,s,n):t.attachEvent&&t.attachEvent(`on${e}`,s)}function x(t,e,s,n){t&&(t.removeEventListener?t.removeEventListener(e,s,n):t.detachEvent&&t.detachEvent(`on${e}`,s))}function S(t,e){const s=e.slice(0,e.length-1),n=[];for(let e=0;e<s.length;e++)n.push(t[s[e].toLowerCase()]);return n}function E(t){"string"!=typeof t&&(t="");const e=(t=t.replace(/\s/g,"")).split(",");let s=e.lastIndexOf("");for(;s>=0;)e[s-1]+=",",e.splice(s,1),s=e.lastIndexOf("");return e}function T(t,e){const s=t.length>=e.length?t:e,n=t.length>=e.length?e:t;let o=!0;for(let t=0;t<s.length;t++)-1===n.indexOf(s[t])&&(o=!1);return o}function O(t){let e=t.keyCode||t.which||t.charCode;return t.code&&/^Key[A-Z]$/.test(t.code)&&(e=t.code.charCodeAt(3)),e}const k={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":P?173:189,"=":P?61:187,";":P?59:186,"'":222,"{":219,"}":221,"[":219,"]":221,"\\":220},N={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,meta:91,command:91},$={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},I={16:!1,18:!1,17:!1,91:!1},L={};for(let t=1;t<20;t++)k[`f${t}`]=111+t;let R=[],M=null,z="all";const U=new Map,D=t=>k[t.toLowerCase()]||N[t.toLowerCase()]||t.toUpperCase().charCodeAt(0),j=t=>Object.keys(k).find(e=>k[e]===t),B=t=>Object.keys(N).find(e=>N[e]===t),H=t=>{z=t||"all"},F=()=>z||"all",q=()=>R.map(t=>j(t)||B(t)||String.fromCharCode(t)),V=()=>{const t=[];return Object.keys(L).forEach(e=>{L[e].forEach(({key:e,scope:s,mods:n,shortcut:o})=>{t.push({scope:s,shortcut:o,mods:n,keys:e.split("+").map(t=>D(t))})})}),t},Y=t=>{const e=t.target||t.srcElement,{tagName:s}=e;let n=!0;const o="INPUT"===s&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(e.type);return(e.isContentEditable||(o||"TEXTAREA"===s||"SELECT"===s)&&!e.readOnly)&&(n=!1),n},W=t=>("string"==typeof t&&(t=D(t)),-1!==R.indexOf(t)),K=(t,e)=>{let s,n;t||(t=F());for(const e in L)if(Object.prototype.hasOwnProperty.call(L,e))for(s=L[e],n=0;n<s.length;)s[n].scope===t?s.splice(n,1).forEach(({element:t})=>st(t)):n++;F()===t&&H(e||"all")};function G(t){let e=O(t);t.key&&"capslock"===t.key.toLowerCase()&&(e=D(t.key));const s=R.indexOf(e);if(s>=0&&R.splice(s,1),t.key&&"meta"===t.key.toLowerCase()&&R.splice(0,R.length),(93===e||224===e)&&(e=91),e in I){I[e]=!1;for(const t in N)N[t]===e&&(tt[t]=!1)}}const J=(t,...e)=>{if(void 0===t)Object.keys(L).forEach(t=>{Array.isArray(L[t])&&L[t].forEach(t=>X(t)),delete L[t]}),st(null);else if(Array.isArray(t))t.forEach(t=>{t.key&&X(t)});else if("object"==typeof t)t.key&&X(t);else if("string"==typeof t){let[s,n]=e;"function"==typeof s&&(n=s,s=""),X({key:t,scope:s,method:n,splitKey:"+"})}},X=({key:t,scope:e,method:s,splitKey:n="+"})=>{E(t).forEach(t=>{const o=t.split(n),i=o.length,r=o[i-1],a="*"===r?"*":D(r);if(!L[a])return;e||(e=F());const l=i>1?S(N,o):[],c=[];L[a]=L[a].filter(t=>{const n=(!s||t.method===s)&&t.scope===e&&T(t.mods,l);return n&&c.push(t.element),!n}),c.forEach(t=>st(t))})};function Z(t,e,s,n){if(e.element!==n)return;let o;if(e.scope===s||"all"===e.scope){o=e.mods.length>0;for(const t in I)Object.prototype.hasOwnProperty.call(I,t)&&(!I[t]&&e.mods.indexOf(+t)>-1||I[t]&&-1===e.mods.indexOf(+t))&&(o=!1);(0===e.mods.length&&!I[16]&&!I[18]&&!I[17]&&!I[91]||o||"*"===e.shortcut)&&(e.keys=[],e.keys=e.keys.concat(R),!1===e.method(t,e)&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0)))}}function Q(t,e){const s=L["*"];let n=O(t);if(t.key&&"capslock"===t.key.toLowerCase()||!(tt.filter||Y).call(this,t))return;if((93===n||224===n)&&(n=91),-1===R.indexOf(n)&&229!==n&&R.push(n),["metaKey","ctrlKey","altKey","shiftKey"].forEach(e=>{const s=$[e];t[e]&&-1===R.indexOf(s)?R.push(s):!t[e]&&R.indexOf(s)>-1?R.splice(R.indexOf(s),1):"metaKey"===e&&t[e]&&(R=R.filter(t=>t in $||t===n))}),n in I){I[n]=!0;for(const e in N)if(Object.prototype.hasOwnProperty.call(N,e)){const s=$[N[e]];tt[e]=t[s]}if(!s)return}for(const e in I)Object.prototype.hasOwnProperty.call(I,e)&&(I[e]=t[$[e]]);t.getModifierState&&(!t.altKey||t.ctrlKey)&&t.getModifierState("AltGraph")&&(-1===R.indexOf(17)&&R.push(17),-1===R.indexOf(18)&&R.push(18),I[17]=!0,I[18]=!0);const o=F();if(s)for(let n=0;n<s.length;n++)s[n].scope===o&&("keydown"===t.type&&s[n].keydown||"keyup"===t.type&&s[n].keyup)&&Z(t,s[n],o,e);if(!(n in L))return;const i=L[n],r=i.length;for(let s=0;s<r;s++)if(("keydown"===t.type&&i[s].keydown||"keyup"===t.type&&i[s].keyup)&&i[s].key){const n=i[s],{splitKey:r}=n,a=n.key.split(r),l=[];for(let t=0;t<a.length;t++)l.push(D(a[t]));l.sort().join("")===R.sort().join("")&&Z(t,n,o,e)}}const tt=function(t,e,s){R=[];const n=E(t);let o=[],i="all",r=document,a=0,l=!1,c=!0,h="+",d=!1,u=!1;if(void 0===s&&"function"==typeof e&&(s=e),"[object Object]"===Object.prototype.toString.call(e)){const t=e;t.scope&&(i=t.scope),t.element&&(r=t.element),t.keyup&&(l=t.keyup),void 0!==t.keydown&&(c=t.keydown),void 0!==t.capture&&(d=t.capture),"string"==typeof t.splitKey&&(h=t.splitKey),!0===t.single&&(u=!0)}for("string"==typeof e&&(i=e),u&&J(t,i);a<n.length;a++){const t=n[a].split(h);o=[],t.length>1&&(o=S(N,t));let e=t[t.length-1];e="*"===e?"*":D(e),e in L||(L[e]=[]),L[e].push({keyup:l,keydown:c,scope:i,mods:o,shortcut:n[a],method:s,key:n[a],splitKey:h,element:r})}if(void 0!==r&&"undefined"!=typeof window){if(!U.has(r)){const t=(t=window.event)=>Q(t,r),e=(t=window.event)=>{Q(t,r),G(t)};U.set(r,{keydownListener:t,keyupListenr:e,capture:d}),C(r,"keydown",t,d),C(r,"keyup",e,d)}if(!M){const t=()=>{R=[]};M={listener:t,capture:d},C(window,"focus",t,d)}}};function et(t,e="all"){Object.keys(L).forEach(s=>{L[s].filter(s=>s.scope===e&&s.shortcut===t).forEach(t=>{t&&t.method&&t.method({},t)})})}function st(t){const e=Object.values(L).flat();if(e.findIndex(({element:e})=>e===t)<0&&t){const{keydownListener:e,keyupListenr:s,capture:n}=U.get(t)||{};e&&s&&(x(t,"keyup",s,n),x(t,"keydown",e,n),U.delete(t))}if((e.length<=0||U.size<=0)&&(Array.from(U.keys()).forEach(t=>{const{keydownListener:e,keyupListenr:s,capture:n}=U.get(t)||{};e&&s&&(x(t,"keyup",s,n),x(t,"keydown",e,n),U.delete(t))}),U.clear(),Object.keys(L).forEach(t=>delete L[t]),M)){const{listener:t,capture:e}=M;x(window,"focus",t,e),M=null}}const nt={getPressedKeyString:q,setScope:H,getScope:F,deleteScope:K,getPressedKeyCodes:()=>R.slice(0),getAllKeyCodes:V,isPressed:W,filter:Y,trigger:et,unbind:J,keyMap:k,modifier:N,modifierMap:$};for(const t in nt){const e=t;Object.prototype.hasOwnProperty.call(nt,e)&&(tt[e]=nt[e])}if("undefined"!=typeof window){const t=window.hotkeys;tt.noConflict=e=>(e&&window.hotkeys===tt&&(window.hotkeys=t),tt),window.hotkeys=tt}const ot=new Set(["INPUT","SELECT","TEXTAREA","PAPER-INPUT","PAPER-TEXTAREA","PB-SEARCH"]);let it=!0;it&&(tt.filter=t=>{const{tagName:e}=t.target||t.srcElement;return!(e.isContentEditable||ot.has(e))},it=!1);const rt=t=>class extends t{static get properties(){return Object.assign(Object.assign({},super.properties),{},{hotkeys:{type:Object}})}constructor(){super(),this.hotkeys={}}registerHotkey(t,e,s){t&&this.hotkeys[t]&&(s?tt(this.hotkeys[t],{element:s},e):tt(this.hotkeys[t],e))}display(t){if(t&&this.hotkeys[t]){const e=[];return this.hotkeys[t].split(/\s*,\s*/).forEach(t=>{e.push(t.replace("+","-"))}),e.join(", ")}return""}};function at(t,e,s){s?tt(t,{element:s},e):tt(t,e)}window.pbKeyboard=at;const lt=(t="")=>t.replace(/[-_]/g," ").trim();class ct extends s{static properties={icon:{type:String},disabled:{type:Boolean,reflect:!0},label:{type:String},toggles:{type:Boolean},active:{type:Boolean,reflect:!0}};constructor(){super(),this.icon="",this.disabled=!1,this.label="",this.toggles=!1,this.active=!1}render(){const t=this.title||"",e=this.icon?lt(this.icon.includes(":")?this.icon.split(":").pop():this.icon):"",s=this.label||t||e;return n`
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
    `}_handleClick(t){if(this.disabled)return t.preventDefault(),void t.stopImmediatePropagation();this.toggles&&(this.active=!this.active,this.dispatchEvent(new CustomEvent("active-changed",{detail:{value:this.active},bubbles:!0,composed:!0})))}static styles=o`
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
  `}customElements.get("pb-icon-button")||customElements.define("pb-icon-button",ct);class ht extends(a(s)){static get styles(){return o`
      :host {
        display: block;
      }
    `}static get properties(){return{title:{type:String,reflect:!0},type:{type:String},message:{type:String,reflect:!0},open:{type:Boolean,reflect:!0}}}constructor(){super(),this.title="",this.message="",this.type="message",this.open=!1}render(){return n`
      <pb-dialog>
        <h2 id="title" slot="title">${d(this.title)}</h2>
        <div id="message" class="message" tabindex="0">
          ${this.message?d(this.message):n`<slot></slot>`}
        </div>

        <div class="buttons" slot="footer">
          ${this.isMessage()?n`<button class="close" autofocus="autofocus" type="button">
                ${u("dialogs.close")}
              </button>`:n`
                <button class="confirm" autofocus="autofocus" type="button">
                  ${u("dialogs.yes")}
                </button>
                <button class="reject" autofocus="autofocus" type="button">
                  ${u("dialogs.no")}
                </button>
              `}
        </div>
      </pb-dialog>
    `}firstUpdated(){this.modal=this.renderRoot.querySelector("pb-dialog")}show(t,e){return this.type="message",this.set(t,e),this.open=!0,this.modal.openDialog(),new Promise((t,e)=>{requestAnimationFrame(()=>{this.renderRoot.querySelector(".close").addEventListener("click",()=>{this.open=!1,this.modal.closeDialog(),t({once:!0})})})})}confirm(t,e){return this.type="confirm",this.set(t,e),this.open=!0,this.modal.openDialog(),new Promise((t,e)=>{requestAnimationFrame(()=>{const s=this.renderRoot.querySelector(".confirm"),n=this.renderRoot.querySelector(".reject");s.addEventListener("click",()=>{this.open=!1,this.modal.closeDialog(),t({once:!0})}),n.addEventListener("click",()=>{this.open=!1,this.modal.closeDialog(),e({once:!0})})})})}set(t,e){(t||e)&&(t&&(this.title=t),e&&(this.message=e))}isMessage(){return"message"===this.type}isConfirm(){return"confirm"===this.type}}customElements.define("pb-message",ht);class dt extends(a(e(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{path:{type:String},src:{type:String},title:{type:String},_href:{type:String}})}constructor(){super(),this.title=""}connectedCallback(){super.connectedCallback(),r("pb-page-ready",t=>{if("."===t.endpoint)this._href="/exist/apps/eXide/";else{const e=/^(.*:\/+[^/]+)\/.*$/.exec(t.endpoint);this._href=e?`${e[1]}/exist/apps/eXide/`:"/exist/apps/eXide/"}})}render(){return new URL(this._href,window.location.href).origin===this.getUrl().origin?n`<a href="${this._href}" target="eXide" title="${this.title}" @click="${this.open}"
        ><slot></slot
      ></a>`:n`<a href="${this._href}/index.html?open=${this.path}" title="${this.title}"
      ><slot></slot
    ></a>`}static get styles(){return o`
      :host {
        display: inline;
      }

      a {
        text-decoration: none;
      }
    `}setPath(t){this.path=t}open(t){t.preventDefault();let e=this._href,{path:s}=this;if(this.src){const t=document.getElementById(this.src);s=t.getFullPath(),e=t.sourceView}const n=window.open("","eXide");if(n&&!n.closed){n.eXide?(console.log("<pb-edit-xml> using existing eXide to open %s",s),n.eXide.app.findDocument(s),n.focus()):(console.log("<pb-edit-xml> opening new eXide for %s",s),window.eXide_onload=function(){n.eXide.app.findDocument(s)},n.location=e)}}}customElements.define("pb-edit-xml",dt);class ut extends HTMLElement{static get version(){return"23.6.2"}}customElements.define("vaadin-lumo-styles",ut);const pt=document.createElement("template");pt.innerHTML='\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,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) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n',document.head.appendChild(pt.content);const mt=window,ft=mt.ShadowRoot&&(void 0===mt.ShadyCSS||mt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_t=Symbol(),gt=new WeakMap;let yt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==_t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ft&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=gt.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&gt.set(e,t))}return t}toString(){return this.cssText}};const bt=t=>new yt("string"==typeof t?t:t+"",void 0,_t),vt=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new yt(s,t,_t)},wt=(t,e)=>{ft?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const s=document.createElement("style"),n=mt.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,t.appendChild(s)})},At=ft?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return bt(e)})(t):t;var Pt;const Ct=window,xt=Ct.trustedTypes,St=xt?xt.emptyScript:"",Et=Ct.reactiveElementPolyfillSupport,Tt={toAttribute(t,e){switch(e){case Boolean:t=t?St:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},Ot=(t,e)=>e!==t&&(e==e||t==t),kt={attribute:!0,type:String,converter:Tt,reflect:!1,hasChanged:Ot},Nt="finalized";let $t=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const n=this._$Ep(s,e);void 0!==n&&(this._$Ev.set(n,s),t.push(n))}),t}static createProperty(t,e=kt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,s,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||kt}static finalize(){if(this.hasOwnProperty(Nt))return!1;this[Nt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(At(t))}else void 0!==t&&e.push(At(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return wt(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=kt){var n;const o=this.constructor._$Ep(t,s);if(void 0!==o&&!0===s.reflect){const i=(void 0!==(null===(n=s.converter)||void 0===n?void 0:n.toAttribute)?s.converter:Tt).toAttribute(e,s.type);this._$El=t,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$El=null}}_$AK(t,e){var s;const n=this.constructor,o=n._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=n.getPropertyOptions(o),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:Tt;this._$El=o,this[o]=i.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let n=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||Ot)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(s)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};var It;$t[Nt]=!0,$t.elementProperties=new Map,$t.elementStyles=[],$t.shadowRootOptions={mode:"open"},null==Et||Et({ReactiveElement:$t}),(null!==(Pt=Ct.reactiveElementVersions)&&void 0!==Pt?Pt:Ct.reactiveElementVersions=[]).push("1.6.3");const Lt=window,Rt=Lt.trustedTypes,Mt=Rt?Rt.createPolicy("lit-html",{createHTML:t=>t}):void 0,zt="$lit$",Ut=`lit$${(Math.random()+"").slice(9)}$`,Dt="?"+Ut,jt=`<${Dt}>`,Bt=document,Ht=()=>Bt.createComment(""),Ft=t=>null===t||"object"!=typeof t&&"function"!=typeof t,qt=Array.isArray,Vt=t=>qt(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),Yt="[ \t\n\f\r]",Wt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Kt=/-->/g,Gt=/>/g,Jt=RegExp(`>|${Yt}(?:([^\\s"'>=/]+)(${Yt}*=${Yt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Xt=/'/g,Zt=/"/g,Qt=/^(?:script|style|textarea|title)$/i,te=Symbol.for("lit-noChange"),ee=Symbol.for("lit-nothing"),se=new WeakMap,ne=Bt.createTreeWalker(Bt,129,null,!1);function oe(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Mt?Mt.createHTML(e):e}const ie=(t,e)=>{const s=t.length-1,n=[];let o,i=2===e?"<svg>":"",r=Wt;for(let e=0;e<s;e++){const s=t[e];let a,l,c=-1,h=0;for(;h<s.length&&(r.lastIndex=h,l=r.exec(s),null!==l);)h=r.lastIndex,r===Wt?"!--"===l[1]?r=Kt:void 0!==l[1]?r=Gt:void 0!==l[2]?(Qt.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=Jt):void 0!==l[3]&&(r=Jt):r===Jt?">"===l[0]?(r=null!=o?o:Wt,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?Jt:'"'===l[3]?Zt:Xt):r===Zt||r===Xt?r=Jt:r===Kt||r===Gt?r=Wt:(r=Jt,o=void 0);const d=r===Jt&&t[e+1].startsWith("/>")?" ":"";i+=r===Wt?s+jt:c>=0?(n.push(a),s.slice(0,c)+zt+s.slice(c)+Ut+d):s+Ut+(-2===c?(n.push(void 0),e):d)}return[oe(t,i+(t[s]||"<?>")+(2===e?"</svg>":"")),n]};class re{constructor({strings:t,_$litType$:e},s){let n;this.parts=[];let o=0,i=0;const r=t.length-1,a=this.parts,[l,c]=ie(t,e);if(this.el=re.createElement(l,s),ne.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=ne.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith(zt)||e.startsWith(Ut)){const s=c[i++];if(t.push(e),void 0!==s){const t=n.getAttribute(s.toLowerCase()+zt).split(Ut),e=/([.?@])?(.*)/.exec(s);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?de:"?"===e[1]?pe:"@"===e[1]?me:he})}else a.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(Qt.test(n.tagName)){const t=n.textContent.split(Ut),e=t.length-1;if(e>0){n.textContent=Rt?Rt.emptyScript:"";for(let s=0;s<e;s++)n.append(t[s],Ht()),ne.nextNode(),a.push({type:2,index:++o});n.append(t[e],Ht())}}}else if(8===n.nodeType)if(n.data===Dt)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(Ut,t+1));)a.push({type:7,index:o}),t+=Ut.length-1}o++}}static createElement(t,e){const s=Bt.createElement("template");return s.innerHTML=t,s}}function ae(t,e,s=t,n){var o,i,r,a;if(e===te)return e;let l=void 0!==n?null===(o=s._$Co)||void 0===o?void 0:o[n]:s._$Cl;const c=Ft(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,s,n)),void 0!==n?(null!==(r=(a=s)._$Co)&&void 0!==r?r:a._$Co=[])[n]=l:s._$Cl=l),void 0!==l&&(e=ae(t,l._$AS(t,e.values),l,n)),e}class le{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:Bt).importNode(s,!0);ne.currentNode=o;let i=ne.nextNode(),r=0,a=0,l=n[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new ce(i,i.nextSibling,this,t):1===l.type?e=new l.ctor(i,l.name,l.strings,this,t):6===l.type&&(e=new fe(i,this,t)),this._$AV.push(e),l=n[++a]}r!==(null==l?void 0:l.index)&&(i=ne.nextNode(),r++)}return ne.currentNode=Bt,o}v(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class ce{constructor(t,e,s,n){var o;this.type=2,this._$AH=ee,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=n,this._$Cp=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ae(this,t,e),Ft(t)?t===ee||null==t||""===t?(this._$AH!==ee&&this._$AR(),this._$AH=ee):t!==this._$AH&&t!==te&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):Vt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==ee&&Ft(this._$AH)?this._$AA.nextSibling.data=t:this.$(Bt.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=re.createElement(oe(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(s);else{const t=new le(o,this),e=t.u(this.options);t.v(s),this.$(e),this._$AH=t}}_$AC(t){let e=se.get(t.strings);return void 0===e&&se.set(t.strings,e=new re(t)),e}T(t){qt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,n=0;for(const o of t)n===e.length?e.push(s=new ce(this.k(Ht()),this.k(Ht()),this,this.options)):s=e[n],s._$AI(o),n++;n<e.length&&(this._$AR(s&&s._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class he{constructor(t,e,s,n,o){this.type=1,this._$AH=ee,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=ee}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,n){const o=this.strings;let i=!1;if(void 0===o)t=ae(this,t,e,0),i=!Ft(t)||t!==this._$AH&&t!==te,i&&(this._$AH=t);else{const n=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=ae(this,n[s+r],e,r),a===te&&(a=this._$AH[r]),i||(i=!Ft(a)||a!==this._$AH[r]),a===ee?t=ee:t!==ee&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}i&&!n&&this.j(t)}j(t){t===ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class de extends he{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ee?void 0:t}}const ue=Rt?Rt.emptyScript:"";class pe extends he{constructor(){super(...arguments),this.type=4}j(t){t&&t!==ee?this.element.setAttribute(this.name,ue):this.element.removeAttribute(this.name)}}class me extends he{constructor(t,e,s,n,o){super(t,e,s,n,o),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=ae(this,t,e,0))&&void 0!==s?s:ee)===te)return;const n=this._$AH,o=t===ee&&n!==ee||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==ee&&(n===ee||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class fe{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){ae(this,t)}}const _e=Lt.litHtmlPolyfillSupport;null==_e||_e(re,ce),(null!==(It=Lt.litHtmlVersions)&&void 0!==It?It:Lt.litHtmlVersions=[]).push("2.8.0");const ge=(t,e,s)=>{var n,o;const i=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:e;let r=i._$litPart$;if(void 0===r){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;i._$litPart$=r=new ce(e.insertBefore(Ht(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r};var ye,be;class ve extends $t{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ge(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return te}}ve.finalized=!0,ve._$litElement$=!0,null===(ye=globalThis.litElementHydrateSupport)||void 0===ye||ye.call(globalThis,{LitElement:ve});const we=globalThis.litElementPolyfillSupport;null==we||we({LitElement:ve}),(null!==(be=globalThis.litElementVersions)&&void 0!==be?be:globalThis.litElementVersions=[]).push("3.3.3");const Ae=t=>class extends t{static get properties(){return{theme:{type:String,reflectToAttribute:!0,observer:"__deprecatedThemePropertyChanged"},_theme:{type:String,readOnly:!0}}}__deprecatedThemePropertyChanged(t){this._set_theme(t)}},Pe=[];function Ce(t,e,s={}){t&&$e(t)&&console.warn(`The custom element definition for "${t}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`),e=Te(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(t,e,s):Pe.push({themeFor:t,styles:e,include:s.include,moduleId:s.moduleId})}function xe(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():Pe}function Se(t,e){return(t||"").split(" ").some(t=>new RegExp(`^${t.split("*").join(".*")}$`).test(e))}function Ee(t=""){let e=0;return t.startsWith("lumo-")||t.startsWith("material-")?e=1:t.startsWith("vaadin-")&&(e=2),e}function Te(t=[]){return[t].flat(1/0).filter(t=>t instanceof yt||(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function Oe(t){const e=[];return t.include&&[].concat(t.include).forEach(t=>{const s=xe().find(e=>e.moduleId===t);s?e.push(...Oe(s),...s.styles):console.warn(`Included moduleId ${t} not found in style registry`)},t.styles),e}function ke(t,e){const s=document.createElement("style");s.innerHTML=t.map(t=>t.cssText).join("\n"),e.content.appendChild(s)}function Ne(t){const e=`${t}-default-theme`,s=xe().filter(s=>s.moduleId!==e&&Se(s.themeFor,t)).map(t=>Object.assign(Object.assign({},t),{},{styles:[...Oe(t),...t.styles],includePriority:Ee(t.moduleId)})).sort((t,e)=>e.includePriority-t.includePriority);return s.length>0?s:xe().filter(t=>t.moduleId===e)}function $e(t){return Ie(customElements.get(t))}function Ie(t){return t&&Object.prototype.hasOwnProperty.call(t,"__themes")}const Le=t=>class extends(Ae(t)){static finalize(){if(super.finalize(),this.elementStyles)return;const t=this.prototype._template;t&&!Ie(this)&&ke(this.getStylesForThis(),t)}static finalizeStyles(t){const e=this.getStylesForThis();return t?[...super.finalizeStyles(t),...e]:e}static getStylesForThis(){const t=Object.getPrototypeOf(this.prototype),e=(t?t.constructor.__themes:[])||[];this.__themes=[...e,...Ne(this.is)];const s=this.__themes.flatMap(t=>t.styles);return s.filter((t,e)=>e===s.lastIndexOf(t))}},Re=vt`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;
  }
`,Me=document.createElement("template");Me.innerHTML=`<style>${Re.toString().replace(":host","html")}</style>`,document.head.appendChild(Me.content);const ze=vt`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;Ce("",ze,{moduleId:"lumo-color"});Ce("",[ze,vt`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`],{moduleId:"lumo-color-legacy"});const Ue=vt`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`,De=document.createElement("template");De.innerHTML=`<style>${Ue.toString().replace(":host","html")}</style>`,document.head.appendChild(De.content);const je=vt`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`,Be=document.createElement("template");Be.innerHTML=`<style>${je.toString().replace(":host","html")}</style>`,document.head.appendChild(Be.content);const He=vt`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
    --lumo-border-radius: 0.25em; /* Deprecated */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;vt`
  html {
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
  }
`;const Fe=document.createElement("template");Fe.innerHTML=`<style>${He.toString().replace(":host","html")}$</style>`,document.head.appendChild(Fe.content);const qe=vt`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`;Ce("",vt`
  html,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-top: 1.25em;
  }

  h1 {
    font-size: var(--lumo-font-size-xxxl);
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: var(--lumo-font-size-xxl);
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: var(--lumo-font-size-xl);
    margin-bottom: 0.5em;
  }

  h4 {
    font-size: var(--lumo-font-size-l);
    margin-bottom: 0.5em;
  }

  h5 {
    font-size: var(--lumo-font-size-m);
    margin-bottom: 0.25em;
  }

  h6 {
    font-size: var(--lumo-font-size-xs);
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`,{moduleId:"lumo-typography"});const Ve=document.createElement("template");Ve.innerHTML=`<style>${qe.toString().replace(":host","html")}</style>`,document.head.appendChild(Ve.content),window.JSCompiler_renameProperty=function(t,e){return t};let Ye,We,Ke=/(url\()([^)]*)(\))/g,Ge=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function Je(t,e){if(t&&Ge.test(t))return t;if("//"===t)return t;if(void 0===Ye){Ye=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",Ye="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),Ye)try{return new URL(t,e).href}catch(e){return t}return We||(We=document.implementation.createHTMLDocument("temp"),We.base=We.createElement("base"),We.head.appendChild(We.base),We.anchor=We.createElement("a"),We.body.appendChild(We.anchor)),We.base.href=e,We.anchor.href=t,We.anchor.href||t}function Xe(t,e){return t.replace(Ke,function(t,s,n,o){return s+"'"+Je(n.replace(/["']/g,""),e)+"'"+o})}function Ze(t){return t.substring(0,t.lastIndexOf("/")+1)}const Qe=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const ts=Qe&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})();let es=window.Polymer&&window.Polymer.rootPath||Ze(document.baseURI||window.location.href),ss=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let ns=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,os=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,is=window.Polymer&&window.Polymer.legacyOptimizations||!1,rs=window.Polymer&&window.Polymer.legacyWarnings||!1,as=window.Polymer&&window.Polymer.syncInitialRender||!1,ls=window.Polymer&&window.Polymer.legacyUndefined||!1,cs=window.Polymer&&window.Polymer.orderedComputed||!1,hs=window.Polymer&&window.Polymer.removeNestedTemplates||!1,ds=window.Polymer&&window.Polymer.fastDomIf||!1,us=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let ps=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,ms=0;const fs=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let s=ms++;function n(n){let o=n.__mixinSet;if(o&&o[s])return n;let i=e,r=i.get(n);if(!r){r=t(n),i.set(n,r);let e=Object.create(r.__mixinSet||o||null);e[s]=!0,r.__mixinSet=e}return r}return n};let _s={},gs={};function ys(t,e){_s[t]=gs[t.toLowerCase()]=e}function bs(t){return _s[t]||gs[t.toLowerCase()]}function vs(t){t.querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}class ws extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let s=bs(t);return s&&e?s.querySelector(e):s}return null}attributeChangedCallback(t,e,s,n){e!==s&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Je(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Ze(e)}return this.__assetpath}register(t){if(t=t||this.id){if(ns&&void 0!==bs(t))throw ys(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,ys(t,this),vs(this)}}}ws.prototype.modules=_s,customElements.define("dom-module",ws);const As="link[rel=import][type~=css]",Ps="include",Cs="shady-unscoped";function xs(t){return ws.import(t)}function Ss(t){const e=Xe((t.body?t.body:t).textContent,t.baseURI),s=document.createElement("style");return s.textContent=e,s}function Es(t){const e=t.trim().split(/\s+/),s=[];for(let t=0;t<e.length;t++)s.push(...Ts(e[t]));return s}function Ts(t){const e=xs(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...Ns(e));const s=e.querySelector("template");s&&t.push(...Os(s,e.assetpath)),e._styles=t}return e._styles}function Os(t,e){if(!t._styles){const s=[],n=t.content.querySelectorAll("style");for(let t=0;t<n.length;t++){let o=n[t],i=o.getAttribute(Ps);i&&s.push(...Es(i).filter(function(t,e,s){return s.indexOf(t)===e})),e&&(o.textContent=Xe(o.textContent,e)),s.push(o)}t._styles=s}return t._styles}function ks(t){let e=xs(t);return e?Ns(e):[]}function Ns(t){const e=[],s=t.querySelectorAll(As);for(let t=0;t<s.length;t++){let n=s[t];if(n.import){const t=n.import,s=n.hasAttribute(Cs);if(s&&!t._unscopedStyle){const e=Ss(t);e.setAttribute(Cs,""),t._unscopedStyle=e}else t._style||(t._style=Ss(t));e.push(s?t._unscopedStyle:t._style)}}return e}const $s=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;function Is(t){return t.indexOf(".")>=0}function Ls(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function Rs(t,e){return 0===t.indexOf(e+".")}function Ms(t,e){return 0===e.indexOf(t+".")}function zs(t,e,s){return e+s.slice(t.length)}function Us(t,e){return t===e||Rs(t,e)||Ms(t,e)}function Ds(t){if(Array.isArray(t)){let e=[];for(let s=0;s<t.length;s++){let n=t[s].toString().split(".");for(let t=0;t<n.length;t++)e.push(n[t])}return e.join(".")}return t}function js(t){return Array.isArray(t)?Ds(t).split("."):t.toString().split(".")}function Bs(t,e,s){let n=t,o=js(e);for(let t=0;t<o.length;t++){if(!n)return;n=n[o[t]]}return s&&(s.path=o.join(".")),n}function Hs(t,e,s){let n=t,o=js(e),i=o[o.length-1];if(o.length>1){for(let t=0;t<o.length-1;t++){if(n=n[o[t]],!n)return}n[i]=s}else n[e]=s;return o.join(".")}const Fs={},qs=/-[a-z]/g,Vs=/([A-Z])/g;function Ys(t){return Fs[t]||(Fs[t]=t.indexOf("-")<0?t:t.replace(qs,t=>t[1].toUpperCase()))}function Ws(t){return Fs[t]||(Fs[t]=t.replace(Vs,"-$1").toLowerCase())}let Ks=0,Gs=0,Js=[],Xs=0,Zs=!1,Qs=document.createTextNode("");function tn(){Zs=!1;const t=Js.length;for(let e=0;e<t;e++){let t=Js[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}Js.splice(0,t),Gs+=t}new window.MutationObserver(tn).observe(Qs,{characterData:!0});const en={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},sn={run:t=>(Zs||(Zs=!0,Qs.textContent=Xs++),Js.push(t),Ks++),cancel(t){const e=t-Gs;if(e>=0){if(!Js[e])throw new Error("invalid async handle: "+t);Js[e]=null}}},nn=sn,on=fs(t=>{class e extends t{static createProperties(t){const e=this.prototype;for(let s in t)s in e||e._createPropertyAccessor(s)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.__data[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,s){let n=this.__data[t],o=this._shouldPropertyChange(t,e,n);return o&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=n),this.__data[t]=e,this.__dataPending[t]=e),o}_isPropertyPending(t){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(t))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,nn.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const t=this.__data,e=this.__dataPending,s=this.__dataOld;this._shouldPropertiesChange(t,e,s)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,s)),this.__dataCounter--}_shouldPropertiesChange(t,e,s){return Boolean(e)}_propertiesChanged(t,e,s){}_shouldPropertyChange(t,e,s){return s!==e&&(s==s||e==e)}attributeChangedCallback(t,e,s,n){e!==s&&this._attributeToProperty(t,s),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,s,n)}_attributeToProperty(t,e,s){if(!this.__serializing){const n=this.__dataAttributes,o=n&&n[t]||t;this[o]=this._deserializeValue(e,s||this.constructor.typeForProperty(o))}}_propertyToAttribute(t,e,s){this.__serializing=!0,s=arguments.length<3?this[t]:s,this._valueToNodeAttribute(this,s,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,s){const n=this._serializeValue(e);"class"!==s&&"name"!==s&&"slot"!==s||(t=$s(t)),void 0===n?t.removeAttribute(s):t.setAttribute(s,""===n&&window.trustedTypes?window.trustedTypes.emptyScript:n)}_serializeValue(t){return"boolean"==typeof t?t?"":void 0:null!=t?t.toString():void 0}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}return e}),rn={};let an=HTMLElement.prototype;for(;an;){let t=Object.getOwnPropertyNames(an);for(let e=0;e<t.length;e++)rn[t[e]]=!0;an=Object.getPrototypeOf(an)}const ln=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;function cn(t,e){if(!rn[e]){let s=t[e];void 0!==s&&(t.__data?t._setPendingProperty(e,s):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=s))}}const hn=fs(t=>{const e=on(t);class s extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Ys(t[e]))}static attributeNameForProperty(t){return Ws(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const s=this;s.hasAttribute(t)||this._valueToNodeAttribute(s,e,t)}_serializeValue(t){if("object"==typeof t){if(t instanceof Date)return t.toString();if(t){if(ln(t))return t;try{return JSON.stringify(t)}catch(t){return""}}}return super._serializeValue(t)}_deserializeValue(t,e){let s;switch(e){case Object:try{s=JSON.parse(t)}catch(e){s=t}break;case Array:try{s=JSON.parse(t)}catch(e){s=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:s=isNaN(t)?String(t):Number(t),s=new Date(s);break;default:s=super._deserializeValue(t,e)}return s}_definePropertyAccessor(t,e){cn(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}return s}),dn={"dom-if":!0,"dom-repeat":!0};let un=!1,pn=!1;function mn(){if(!un){un=!0;const t=document.createElement("textarea");t.placeholder="a",pn=t.placeholder===t.textContent}return pn}function fn(t){mn()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const _n=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(e,s,n)=>{const o=s.getAttribute(n);t&&n.startsWith("on-")?e.setAttribute(n,t.createScript(o,n)):e.setAttribute(n,o)}})();function gn(t){let e=t.getAttribute("is");if(e&&dn[e]){let s=t;for(s.removeAttribute("is"),t=s.ownerDocument.createElement(e),s.parentNode.replaceChild(t,s),t.appendChild(s);s.attributes.length;){const{name:e}=s.attributes[0];_n(t,s,e),s.removeAttribute(e)}}return t}function yn(t,e){let s=e.parentInfo&&yn(t,e.parentInfo);if(!s)return t;for(let t=s.firstChild,n=0;t;t=t.nextSibling)if(e.parentIndex===n++)return t}function bn(t,e,s,n){n.id&&(e[n.id]=s)}function vn(t,e,s){if(s.events&&s.events.length)for(let n,o=0,i=s.events;o<i.length&&(n=i[o]);o++)t._addMethodEventListenerToNode(e,n.name,n.value,t)}function wn(t,e,s,n){s.templateInfo&&(e._templateInfo=s.templateInfo,e._parentTemplateInfo=n)}function An(t,e,s){t=t._methodHost||t;let n=function(e){t[s]?t[s](e,e.detail):console.warn("listener method `"+s+"` not defined")};return n}const Pn=fs(t=>{class e extends t{static _parseTemplate(t,e){if(!t._templateInfo){let s=t._templateInfo={};s.nodeInfoList=[],s.nestedTemplate=Boolean(e),s.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute&&t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,s,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,s){return this._parseTemplateNode(t.content,e,s)}static _parseTemplateNode(t,e,s){let n=!1,o=t;return"template"!=o.localName||o.hasAttribute("preserve-content")?"slot"===o.localName&&(e.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(o,e,s)||n,fn(o),o.firstChild&&this._parseTemplateChildNodes(o,e,s),o.hasAttributes&&o.hasAttributes()&&(n=this._parseTemplateNodeAttributes(o,e,s)||n),n||s.noted}static _parseTemplateChildNodes(t,e,s){if("script"!==t.localName&&"style"!==t.localName)for(let n,o=t.firstChild,i=0;o;o=n){if("template"==o.localName&&(o=gn(o)),n=o.nextSibling,o.nodeType===Node.TEXT_NODE){let s=n;for(;s&&s.nodeType===Node.TEXT_NODE;)o.textContent+=s.textContent,n=s.nextSibling,t.removeChild(s),s=n;if(e.stripWhiteSpace&&!o.textContent.trim()){t.removeChild(o);continue}}let r={parentIndex:i,parentInfo:s};this._parseTemplateNode(o,e,r)&&(r.infoIndex=e.nodeInfoList.push(r)-1),o.parentNode&&i++}}static _parseTemplateNestedTemplate(t,e,s){let n=t,o=this._parseTemplate(n,e);return(o.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),s.templateInfo=o,!0}static _parseTemplateNodeAttributes(t,e,s){let n=!1,o=Array.from(t.attributes);for(let i,r=o.length-1;i=o[r];r--)n=this._parseTemplateNodeAttribute(t,e,s,i.name,i.value)||n;return n}static _parseTemplateNodeAttribute(t,e,s,n,o){return"on-"===n.slice(0,3)?(t.removeAttribute(n),s.events=s.events||[],s.events.push({name:n.slice(3),value:o}),!0):"id"===n&&(s.id=o,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t,e){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let s=(e=e||this.constructor._parseTemplate(t)).nodeInfoList,n=e.content||t.content,o=document.importNode(n,!0);o.__noInsertionPoint=!e.hasInsertionPoint;let i=o.nodeList=new Array(s.length);o.$={};for(let t,n=0,r=s.length;n<r&&(t=s[n]);n++){let s=i[n]=yn(o,t);bn(this,o.$,s,t),wn(this,s,t,e),vn(this,s,t)}return o}_addMethodEventListenerToNode(t,e,s,n){let o=An(n=n||t,e,s);return this._addEventListenerToNode(t,e,o),o}_addEventListenerToNode(t,e,s){t.addEventListener(e,s)}_removeEventListenerFromNode(t,e,s){t.removeEventListener(e,s)}}return e});let Cn=0;const xn=[],Sn={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},En="__computeInfo",Tn=/[A-Z]/;function On(t,e,s){let n=t[e];if(n){if(!t.hasOwnProperty(e)&&(n=t[e]=Object.create(t[e]),s))for(let t in n){let e=n[t],s=n[t]=Array(e.length);for(let t=0;t<e.length;t++)s[t]=e[t]}}else n=t[e]={};return n}function kn(t,e,s,n,o,i){if(e){let r=!1;const a=Cn++;for(let l in s){let c=e[o?Ls(l):l];if(c)for(let e,h=0,d=c.length;h<d&&(e=c[h]);h++)e.info&&e.info.lastRun===a||o&&!$n(l,e.trigger)||(e.info&&(e.info.lastRun=a),e.fn(t,l,s,n,e.info,o,i),r=!0)}return r}return!1}function Nn(t,e,s,n,o,i,r,a){let l=!1,c=e[r?Ls(n):n];if(c)for(let e,h=0,d=c.length;h<d&&(e=c[h]);h++)e.info&&e.info.lastRun===s||r&&!$n(n,e.trigger)||(e.info&&(e.info.lastRun=s),e.fn(t,n,o,i,e.info,r,a),l=!0);return l}function $n(t,e){if(e){let s=e.name;return s==t||!(!e.structured||!Rs(s,t))||!(!e.wildcard||!Ms(s,t))}return!0}function In(t,e,s,n,o){let i="string"==typeof o.method?t[o.method]:o.method,r=o.property;i?i.call(t,t.__data[r],n[r]):o.dynamicFn||console.warn("observer method `"+o.method+"` not defined")}function Ln(t,e,s,n,o){let i,r,a=t[Sn.NOTIFY],l=Cn++;for(let r in e)e[r]&&(a&&Nn(t,a,l,r,s,n,o)||o&&Rn(t,r,s))&&(i=!0);i&&(r=t.__dataHost)&&r._invalidateProperties&&r._invalidateProperties()}function Rn(t,e,s){let n=Ls(e);if(n!==e){return Mn(t,Ws(n)+"-changed",s[e],e),!0}return!1}function Mn(t,e,s,n){let o={value:s,queueProperty:!0};n&&(o.path=n),$s(t).dispatchEvent(new CustomEvent(e,{detail:o}))}function zn(t,e,s,n,o,i){let r=(i?Ls(e):e)!=e?e:null,a=r?Bs(t,r):t.__data[e];r&&void 0===a&&(a=s[e]),Mn(t,o.eventName,a,r)}function Un(t,e,s,n,o){let i,r=t.detail,a=r&&r.path;a?(n=zs(s,n,a),i=r&&r.value):i=t.currentTarget[s],i=o?!i:i,e[Sn.READ_ONLY]&&e[Sn.READ_ONLY][n]||!e._setPendingPropertyOrPath(n,i,!0,Boolean(a))||r&&r.queueProperty||e._invalidateProperties()}function Dn(t,e,s,n,o){let i=t.__data[e];ss&&(i=ss(i,o.attrName,"attribute",t)),t._propertyToAttribute(e,o.attrName,i)}function jn(t,e,s,n){let o=t[Sn.COMPUTE];if(o)if(cs){Cn++;const i=Fn(t),r=[];for(let t in e)Hn(t,o,r,i,n);let a;for(;a=r.shift();)Vn(t,"",e,s,a)&&Hn(a.methodInfo,o,r,i,n);Object.assign(s,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let i=e;for(;kn(t,o,i,s,n);)Object.assign(s,t.__dataOld),Object.assign(e,t.__dataPending),i=t.__dataPending,t.__dataPending=null}}const Bn=(t,e,s)=>{let n=0,o=e.length-1,i=-1;for(;n<=o;){const r=n+o>>1,a=s.get(e[r].methodInfo)-s.get(t.methodInfo);if(a<0)n=r+1;else{if(!(a>0)){i=r;break}o=r-1}}i<0&&(i=o+1),e.splice(i,0,t)},Hn=(t,e,s,n,o)=>{const i=e[o?Ls(t):t];if(i)for(let e=0;e<i.length;e++){const r=i[e];r.info.lastRun===Cn||o&&!$n(t,r.trigger)||(r.info.lastRun=Cn,Bn(r.info,s,n))}};function Fn(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const s=t[Sn.COMPUTE];let n,{counts:o,ready:i,total:r}=qn(t);for(;n=i.shift();){e.set(n,e.size);const t=s[n];t&&t.forEach(t=>{const e=t.info.methodInfo;--r,0===--o[e]&&i.push(e)})}if(0!==r){const e=t;console.warn(`Computed graph for ${e.localName} incomplete; circular?`)}t.constructor.__orderedComputedDeps=e}return e}function qn(t){const e=t[En],s={},n=t[Sn.COMPUTE],o=[];let i=0;for(let t in e){const n=e[t];i+=s[t]=n.args.filter(t=>!t.literal).length+(n.dynamicFn?1:0)}for(let t in n)e[t]||o.push(t);return{counts:s,ready:o,total:i}}function Vn(t,e,s,n,o){let i=no(t,e,s,n,o);if(i===xn)return!1;let r=o.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[r]?t._setPendingProperty(r,i,!0):(t[r]=i,!1)}function Yn(t,e,s){let n=t.__dataLinkedPaths;if(n){let o;for(let i in n){let r=n[i];Ms(i,e)?(o=zs(i,r,e),t._setPendingPropertyOrPath(o,s,!0,!0)):Ms(r,e)&&(o=zs(r,i,e),t._setPendingPropertyOrPath(o,s,!0,!0))}}}function Wn(t,e,s,n,o,i,r){s.bindings=s.bindings||[];let a={kind:n,target:o,parts:i,literal:r,isCompound:1!==i.length};if(s.bindings.push(a),Zn(a)){let{event:t,negate:e}=a.parts[0];a.listenerEvent=t||Ws(o)+"-changed",a.listenerNegate=e}let l=e.nodeInfoList.length;for(let s=0;s<a.parts.length;s++){let n=a.parts[s];n.compoundIndex=s,Kn(t,e,a,n,l)}}function Kn(t,e,s,n,o){if(!n.literal)if("attribute"===s.kind&&"-"===s.target[0])console.warn("Cannot set attribute "+s.target+' because "-" is not a valid attribute starting character');else{let i=n.dependencies,r={index:o,binding:s,part:n,evaluator:t};for(let s=0;s<i.length;s++){let n=i[s];"string"==typeof n&&(n=uo(n),n.wildcard=!0),t._addTemplatePropertyEffect(e,n.rootProperty,{fn:Gn,info:r,trigger:n})}}}function Gn(t,e,s,n,o,i,r){let a=r[o.index],l=o.binding,c=o.part;if(i&&c.source&&e.length>c.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let n=s[e];e=zs(c.source,l.target,e),a._setPendingPropertyOrPath(e,n,!1,!0)&&t._enqueueClient(a)}else{let r=o.evaluator._evaluateBinding(t,c,e,s,n,i);r!==xn&&Jn(t,a,l,c,r)}}function Jn(t,e,s,n,o){if(o=Xn(e,o,s,n),ss&&(o=ss(o,s.target,s.kind,e)),"attribute"==s.kind)t._valueToNodeAttribute(e,o,s.target);else{let n=s.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[n]?e[Sn.READ_ONLY]&&e[Sn.READ_ONLY][n]||e._setPendingProperty(n,o)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,n,o)}}function Xn(t,e,s,n){if(s.isCompound){let o=t.__dataCompoundStorage[s.target];o[n.compoundIndex]=e,e=o.join("")}return"attribute"!==s.kind&&("textContent"!==s.target&&("value"!==s.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=e??"")),e}function Zn(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}function Qn(t,e){let{nodeList:s,nodeInfoList:n}=e;if(n.length)for(let e=0;e<n.length;e++){let o=n[e],i=s[e],r=o.bindings;if(r)for(let e=0;e<r.length;e++){let s=r[e];to(i,s),eo(i,t,s)}i.__dataHost=t}}function to(t,e){if(e.isCompound){let s=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),n=e.parts,o=new Array(n.length);for(let t=0;t<n.length;t++)o[t]=n[t].literal;let i=e.target;s[i]=o,e.literal&&"property"==e.kind&&("className"===i&&(t=$s(t)),t[i]=e.literal)}}function eo(t,e,s){if(s.listenerEvent){let n=s.parts[0];t.addEventListener(s.listenerEvent,function(t){Un(t,e,s.target,n.source,n.negate)})}}function so(t,e,s,n,o,i){i=e.static||i&&("object"!=typeof i||i[e.methodName]);let r={methodName:e.methodName,args:e.args,methodInfo:o,dynamicFn:i};for(let o,i=0;i<e.args.length&&(o=e.args[i]);i++)o.literal||t._addPropertyEffect(o.rootProperty,s,{fn:n,info:r,trigger:o});return i&&t._addPropertyEffect(e.methodName,s,{fn:n,info:r}),r}function no(t,e,s,n,o){let i=t._methodHost||t,r=i[o.methodName];if(r){let n=t._marshalArgs(o.args,e,s);return n===xn?xn:r.apply(i,n)}o.dynamicFn||console.warn("method `"+o.methodName+"` not defined")}const oo=[],io="(?:[a-zA-Z_$][\\w.:$\\-*]*)",ro="(?:("+io+"|"+"(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)"+"|"+("(?:"+"(?:'(?:[^'\\\\]|\\\\.)*')"+"|"+'(?:"(?:[^"\\\\]|\\\\.)*")'+")")+")\\s*)",ao=new RegExp("(\\[\\[|{{)\\s*"+"(?:(!)\\s*)?"+("("+io+"\\s*"+("(?:\\(\\s*(?:"+("(?:"+ro+"(?:,\\s*"+ro+")*)")+"?)\\)\\s*)")+"?)")+"(?:]]|}})","g");function lo(t){let e="";for(let s=0;s<t.length;s++){e+=t[s].literal||""}return e}function co(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:oo};if(e[2].trim()){return ho(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function ho(t,e){return e.args=t.map(function(t){let s=uo(t);return s.literal||(e.static=!1),s},this),e}function uo(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),s={name:e,value:"",literal:!1},n=e[0];switch("-"===n&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':s.value=e.slice(1,-1),s.literal=!0;break;case"#":s.value=Number(e),s.literal=!0}return s.literal||(s.rootProperty=Ls(e),s.structured=Is(e),s.structured&&(s.wildcard=".*"==e.slice(-2),s.wildcard&&(s.name=e.slice(0,-2)))),s}function po(t,e,s){let n=Bs(t,s);return void 0===n&&(n=e[s]),n}function mo(t,e,s,n){const o={indexSplices:n};ls&&!t._overrideLegacyUndefined&&(e.splices=o),t.notifyPath(s+".splices",o),t.notifyPath(s+".length",e.length),ls&&!t._overrideLegacyUndefined&&(o.indexSplices=[])}function fo(t,e,s,n,o,i){mo(t,e,s,[{index:n,addedCount:o,removed:i,object:e,type:"splice"}])}function _o(t){return t[0].toUpperCase()+t.substring(1)}const go=fs(t=>{const e=Pn(hn(t));class s extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Sn}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(yo.length){let t=yo[yo.length-1];t._enqueueClient(this),this.__dataHost=t}}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[Sn.READ_ONLY];for(let s in t)e&&e[s]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[s]=this.__dataPending[s]=t[s])}_addPropertyEffect(t,e,s){this._createPropertyAccessor(t,e==Sn.READ_ONLY);let n=On(this,e,!0)[t];n||(n=this[e][t]=[]),n.push(s)}_removePropertyEffect(t,e,s){let n=On(this,e,!0)[t],o=n.indexOf(s);o>=0&&n.splice(o,1)}_hasPropertyEffect(t,e){let s=this[e];return Boolean(s&&s[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,Sn.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,Sn.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,Sn.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,Sn.COMPUTE)}_setPendingPropertyOrPath(t,e,s,n){if(n||Ls(Array.isArray(t)?t[0]:t)!==t){if(!n){let s=Bs(this,t);if(!(t=Hs(this,t,e))||!super._shouldPropertyChange(t,e,s))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,s))return Yn(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,s);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,s){s===t[e]&&"object"!=typeof s||("className"===e&&(t=$s(t)),t[e]=s)}_setPendingProperty(t,e,s){let n=this.__dataHasPaths&&Is(t),o=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,o[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),n?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(n||this[Sn.NOTIFY]&&this[Sn.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=s),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let s=t[e];s.__dataEnabled?s.__dataPending&&s._flushProperties():s._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let s in t)!e&&this[Sn.READ_ONLY]&&this[Sn.READ_ONLY][s]||this._setPendingPropertyOrPath(s,t[s],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,s){let n,o=this.__dataHasPaths;this.__dataHasPaths=!1,jn(this,e,s,o),n=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(e,s,o),this._flushClients(),kn(this,this[Sn.REFLECT],e,s,o),kn(this,this[Sn.OBSERVE],e,s,o),n&&Ln(this,n,e,s,o),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,s){this[Sn.PROPAGATE]&&kn(this,this[Sn.PROPAGATE],t,e,s),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,t,e,s)}_runEffectsForTemplate(t,e,s,n){const o=(e,n)=>{kn(this,t.propertyEffects,e,s,n,t.nodeList);for(let o=t.firstChild;o;o=o.nextSibling)this._runEffectsForTemplate(o,e,s,n)};t.runEffects?t.runEffects(o,e,n):o(e,n)}linkPaths(t,e){t=Ds(t),e=Ds(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=Ds(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let s={path:""};mo(this,Bs(this,t,s),s.path,e)}get(t,e){return Bs(e||this,t)}set(t,e,s){s?Hs(s,t,e):this[Sn.READ_ONLY]&&this[Sn.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let s={path:""},n=Bs(this,t,s),o=n.length,i=n.push(...e);return e.length&&fo(this,n,s.path,o,e.length,[]),i}pop(t){let e={path:""},s=Bs(this,t,e),n=Boolean(s.length),o=s.pop();return n&&fo(this,s,e.path,s.length,0,[o]),o}splice(t,e,s,...n){let o,i={path:""},r=Bs(this,t,i);return e<0?e=r.length-Math.floor(-e):e&&(e=Math.floor(e)),o=2===arguments.length?r.splice(e):r.splice(e,s,...n),(n.length||o.length)&&fo(this,r,i.path,e,n.length,o),o}shift(t){let e={path:""},s=Bs(this,t,e),n=Boolean(s.length),o=s.shift();return n&&fo(this,s,e.path,0,0,[o]),o}unshift(t,...e){let s={path:""},n=Bs(this,t,s),o=n.unshift(...e);return e.length&&fo(this,n,s.path,0,e.length,[]),o}notifyPath(t,e){let s;if(1==arguments.length){let n={path:""};e=Bs(this,t,n),s=n.path}else s=Array.isArray(t)?Ds(t):t;this._setPendingPropertyOrPath(s,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){this._addPropertyEffect(t,Sn.READ_ONLY),e&&(this["_set"+_o(t)]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,s){let n={property:t,method:e,dynamicFn:Boolean(s)};this._addPropertyEffect(t,Sn.OBSERVE,{fn:In,info:n,trigger:{name:t}}),s&&this._addPropertyEffect(e,Sn.OBSERVE,{fn:In,info:n,trigger:{name:e}})}_createMethodObserver(t,e){let s=co(t);if(!s)throw new Error("Malformed observer expression '"+t+"'");so(this,s,Sn.OBSERVE,no,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,Sn.NOTIFY,{fn:zn,info:{eventName:Ws(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,Sn.REFLECT,{fn:Dn,info:{attrName:e}})}_createComputedProperty(t,e,s){let n=co(e);if(!n)throw new Error("Malformed computed expression '"+e+"'");const o=so(this,n,Sn.COMPUTE,Vn,t,s);On(this,En)[t]=o}_marshalArgs(t,e,s){const n=this.__data,o=[];for(let i=0,r=t.length;i<r;i++){let{name:r,structured:a,wildcard:l,value:c,literal:h}=t[i];if(!h)if(l){const t=Ms(r,e),o=po(n,s,t?e:r);c={path:t?e:r,value:o,base:t?Bs(n,r):o}}else c=a?po(n,s,r):n[r];if(ls&&!this._overrideLegacyUndefined&&void 0===c&&t.length>1)return xn;o[i]=c}return o}static addPropertyEffect(t,e,s){this.prototype._addPropertyEffect(t,e,s)}static createPropertyObserver(t,e,s){this.prototype._createPropertyObserver(t,e,s)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,s){this.prototype._createComputedProperty(t,e,s)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let s=this.constructor._parseTemplate(t),n=this.__preBoundTemplateInfo==s;if(!n)for(let t in s.propertyEffects)this._createPropertyAccessor(t);if(e)if(s=Object.create(s),s.wasPreBound=n,this.__templateInfo){const e=t._parentTemplateInfo||this.__templateInfo,n=e.lastChild;s.parent=e,e.lastChild=s,s.previousSibling=n,n?n.nextSibling=s:e.firstChild=s}else this.__templateInfo=s;else this.__preBoundTemplateInfo=s;return s}static _addTemplatePropertyEffect(t,e,s){(t.hostProps=t.hostProps||{})[e]=!0;let n=t.propertyEffects=t.propertyEffects||{};(n[e]=n[e]||[]).push(s)}_stampTemplate(t,e){e=e||this._bindTemplate(t,!0),yo.push(this);let s=super._stampTemplate(t,e);if(yo.pop(),e.nodeList=s.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=s.firstChild;e;e=e.nextSibling)t.push(e)}return s.templateInfo=e,Qn(this,e),this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients()),s}_removeBoundDom(t){const e=t.templateInfo,{previousSibling:s,nextSibling:n,parent:o}=e;s?s.nextSibling=n:o&&(o.firstChild=n),n?n.previousSibling=s:o&&(o.lastChild=s),e.nextSibling=e.previousSibling=null;let i=e.childNodes;for(let t=0;t<i.length;t++){let e=i[t];$s($s(e).parentNode).removeChild(e)}}static _parseTemplateNode(t,s,n){let o=e._parseTemplateNode.call(this,t,s,n);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,s);e&&(t.textContent=lo(e)||" ",Wn(this,s,n,"text","textContent",e),o=!0)}return o}static _parseTemplateNodeAttribute(t,s,n,o,i){let r=this._parseBindings(i,s);if(r){let e=o,i="property";Tn.test(o)?i="attribute":"$"==o[o.length-1]&&(o=o.slice(0,-1),i="attribute");let a=lo(r);return a&&"attribute"==i&&("class"==o&&t.hasAttribute("class")&&(a+=" "+t.getAttribute(o)),t.setAttribute(o,a)),"attribute"==i&&"disable-upgrade$"==e&&t.setAttribute(o,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===i&&(o=Ys(o)),Wn(this,s,n,i,o,r,a),!0}return e._parseTemplateNodeAttribute.call(this,t,s,n,o,i)}static _parseTemplateNestedTemplate(t,s,n){let o=e._parseTemplateNestedTemplate.call(this,t,s,n);const i=t.parentNode,r=n.templateInfo,a="dom-if"===i.localName,l="dom-repeat"===i.localName;hs&&(a||l)&&(i.removeChild(t),(n=n.parentInfo).templateInfo=r,n.noted=!0,o=!1);let c=r.hostProps;if(ds&&a)c&&(s.hostProps=Object.assign(s.hostProps||{},c),hs||(n.parentInfo.noted=!0));else{let t="{";for(let e in c){Wn(this,s,n,"property","_host_"+e,[{mode:t,source:e,dependencies:[e],hostProp:!0}])}}return o}static _parseBindings(t,e){let s,n=[],o=0;for(;null!==(s=ao.exec(t));){s.index>o&&n.push({literal:t.slice(o,s.index)});let i=s[1][0],r=Boolean(s[2]),a=s[3].trim(),l=!1,c="",h=-1;"{"==i&&(h=a.indexOf("::"))>0&&(c=a.substring(h+2),a=a.substring(0,h),l=!0);let d=co(a),u=[];if(d){let{args:t,methodName:s}=d;for(let e=0;e<t.length;e++){let s=t[e];s.literal||u.push(s)}let n=e.dynamicFns;(n&&n[s]||d.static)&&(u.push(s),d.dynamicFn=!0)}else u.push(a);n.push({source:a,mode:i,negate:r,customEvent:l,signature:d,dependencies:u,event:c}),o=ao.lastIndex}if(o&&o<t.length){let e=t.substring(o);e&&n.push({literal:e})}return n.length?n:null}static _evaluateBinding(t,e,s,n,o,i){let r;return r=e.signature?no(t,s,n,o,e.signature):s!=e.source?Bs(t,e.source):i&&Is(s)?Bs(t,s):t.__data[s],e.negate&&(r=!r),r}}return s}),yo=[];function bo(t){}function vo(t){const e={};for(let s in t){const n=t[s];e[s]="function"==typeof n?{type:n}:n}return e}const wo=fs(t=>{const e=on(t);function s(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof o?e:null}function n(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const s=t.properties;s&&(e=vo(s))}t.__ownProperties=e}return t.__ownProperties}class o extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){bo(this.prototype);const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(t=>this.prototype._addPropertyToAttributeMap(t)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=s(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=n(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=s(this);this.__properties=Object.assign({},t&&t._properties,n(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return o}),Ao="3.5.2",Po=window.ShadyCSS&&window.ShadyCSS.cssBuild,Co=fs(t=>{const e=wo(go(t));function s(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let s in e){let n=e[s];"value"in n&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[s]=n)}}return t.__propertyDefaults}function n(t){return t.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",t))||(t.__ownObservers=t.hasOwnProperty(JSCompiler_renameProperty("observers",t))?t.observers:null),t.__ownObservers}function o(t,e,s,n){s.computed&&(s.readOnly=!0),s.computed&&(t._hasReadOnlyEffect(e)?console.warn(`Cannot redefine computed property '${e}'.`):t._createComputedProperty(e,s.computed,n)),s.readOnly&&!t._hasReadOnlyEffect(e)?t._createReadOnlyProperty(e,!s.computed):!1===s.readOnly&&t._hasReadOnlyEffect(e)&&console.warn(`Cannot make readOnly property '${e}' non-readOnly.`),s.reflectToAttribute&&!t._hasReflectEffect(e)?t._createReflectedProperty(e):!1===s.reflectToAttribute&&t._hasReflectEffect(e)&&console.warn(`Cannot make reflected property '${e}' non-reflected.`),s.notify&&!t._hasNotifyEffect(e)?t._createNotifyingProperty(e):!1===s.notify&&t._hasNotifyEffect(e)&&console.warn(`Cannot make notify property '${e}' non-notify.`),s.observer&&t._createPropertyObserver(e,s.observer,n[s.observer]),t._addPropertyToAttributeMap(e)}function i(t,e,s,n){if(!Po){const o=e.content.querySelectorAll("style"),i=Os(e),r=ks(s),a=e.content.firstElementChild;for(let s=0;s<r.length;s++){let o=r[s];o.textContent=t._processStyleText(o.textContent,n),e.content.insertBefore(o,a)}let l=0;for(let e=0;e<i.length;e++){let s=i[e],r=o[l];r!==s?(s=s.cloneNode(!0),r.parentNode.insertBefore(s,r)):l++,s.textContent=t._processStyleText(s.textContent,n)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,s),ps&&Po&&ts){const s=e.content.querySelectorAll("style");if(s){let e="";Array.from(s).forEach(t=>{e+=t.textContent,t.parentNode.removeChild(t)}),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}}function r(t){let e=null;if(t&&(!ns||os)&&(e=ws.import(t,"template"),ns&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}class a extends e{static get polymerElementVersion(){return Ao}static _finalizeClass(){e._finalizeClass.call(this);const t=n(this);t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):is||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let e in t)o(this.prototype,e,t[e],t)}static createObservers(t,e){const s=this.prototype;for(let n=0;n<t.length;n++)s._createMethodObserver(t[n],e)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let t=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;"function"==typeof t&&(t=t()),this._template=void 0!==t?t:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&r(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=Ze(t.url);else{const t=ws.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=es,this.importPath=this.constructor.importPath;let t=s(this.constructor);if(t)for(let e in t){let s=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof s.value?s.value.call(this):s.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}_canApplyPropertyDefault(t){return!this.hasOwnProperty(t)}static _processStyleText(t,e){return Xe(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const s=this.importPath;i(this,e,t,s?Je(s):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=$s(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),as&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Je(this.importPath)),Je(t,e)}static _parseTemplateContent(t,s,n){return s.dynamicFns=s.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,s,n)}static _addTemplatePropertyEffect(t,s,n){return!rs||s in this._properties||n.info.part.signature&&n.info.part.signature.static||n.info.part.hostProp||t.nestedTemplate||console.warn(`Property '${s}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,s,n)}}return a}),xo=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});class So{constructor(t,e){ko(t,e);const s=e.reduce((e,s,n)=>e+Eo(s)+t[n+1],t[0]);this.value=s.toString()}toString(){return this.value}}function Eo(t){if(t instanceof So)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}function To(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof So)return Eo(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}const Oo=function(t,...e){ko(t,e);const s=document.createElement("template");let n=e.reduce((e,s,n)=>e+To(s)+t[n+1],t[0]);return xo&&(n=xo.createHTML(n)),s.innerHTML=n,s},ko=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")},No=Co(HTMLElement),$o=fs(t=>class extends t{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(t=>{t.hostConnected&&t.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(t=>{t.hostDisconnected&&t.hostDisconnected()})}addController(t){this.__controllers.add(t),void 0!==this.$&&this.isConnected&&t.hostConnected&&t.hostConnected()}removeController(t){this.__controllers.delete(t)}}),Io=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Lo=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Ro(){function t(){return!0}return jo(t)}function Mo(){try{return!!zo()||!!Uo()&&(Lo?!Do():!Ro())}catch(t){return!1}}function zo(){return localStorage.getItem("vaadin.developmentmode.force")}function Uo(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Do(){if(Lo){if(Object.keys(Lo).map(t=>Lo[t]).filter(t=>t.productionMode).length>0)return!0}return!1}function jo(t,e){if("function"!=typeof t)return;const s=Io.exec(t.toString());if(s)try{t=new Function(s[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const Bo=function(t,e){if(window.Vaadin.developmentMode)return jo(t,e)};function Ho(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=Mo());const Fo=function(){if("function"==typeof Bo)return Bo(Ho)};let qo=0,Vo=0;const Yo=[];let Wo=0,Ko=!1;const Go=document.createTextNode("");function Jo(){Ko=!1;const t=Yo.length;for(let e=0;e<t;e++){const t=Yo[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}Yo.splice(0,t),Vo+=t}new window.MutationObserver(Jo).observe(Go,{characterData:!0});const Xo={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},Zo={run:t=>window.requestAnimationFrame(t),cancel(t){window.cancelAnimationFrame(t)}},Qo={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},ti={run(t){Ko||(Ko=!0,Go.textContent=Wo,Wo+=1),Yo.push(t);const e=qo;return qo+=1,e},cancel(t){const e=t-Vo;if(e>=0){if(!Yo[e])throw new Error(`invalid async handle: ${t}`);Yo[e]=null}}};class ei{static debounce(t,e,s){return t instanceof ei?t._cancelAsync():t=new ei,t.setConfig(e,s),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,si.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),si.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}}let si=new Set;function ni(t){si.add(t)}class oi{static detectScrollType(){const t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);let e="reverse";return t.scrollLeft>0?e="default":(t.scrollLeft=2,t.scrollLeft<2&&(e="negative")),document.body.removeChild(t),e}static getNormalizedScrollLeft(t,e,s){const{scrollLeft:n}=s;if("rtl"!==e||!t)return n;switch(t){case"negative":return s.scrollWidth-s.clientWidth+n;case"reverse":return s.scrollWidth-s.clientWidth-n;default:return n}}static setNormalizedScrollLeft(t,e,s,n){if("rtl"===e&&t)switch(t){case"negative":s.scrollLeft=s.clientWidth-s.scrollWidth+n;break;case"reverse":s.scrollLeft=s.scrollWidth-s.clientWidth-n;break;default:s.scrollLeft=n}else s.scrollLeft=n}}const ii=[];function ri(){const t=ci();ii.forEach(e=>{li(e,t)})}let ai;function li(t,e,s=t.getAttribute("dir")){e?t.setAttribute("dir",e):null!=s&&t.removeAttribute("dir")}function ci(){return document.documentElement.getAttribute("dir")}new MutationObserver(ri).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const hi=t=>class extends t{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:t=>t||"",toAttribute:t=>""===t?null:t}}}}static finalize(){super.finalize(),ai||(ai=oi.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")&&!this.__restoreSubscription||(this.__subscribe(),li(this,ci(),null))}attributeChangedCallback(t,e,s){if(super.attributeChangedCallback(t,e,s),"dir"!==t)return;const n=ci(),o=s===n&&-1===ii.indexOf(this),i=!s&&e&&-1===ii.indexOf(this),r=s!==n&&e===n;o||i?(this.__subscribe(),li(this,n,s)):r&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=ii.includes(this),this.__unsubscribe()}_valueToNodeAttribute(t,e,s){("dir"!==s||""!==e||t.hasAttribute("dir"))&&super._valueToNodeAttribute(t,e,s)}_attributeToProperty(t,e,s){"dir"!==t||e?super._attributeToProperty(t,e,s):this.dir=""}__subscribe(){ii.includes(this)||ii.push(this)}__unsubscribe(){ii.includes(this)&&ii.splice(ii.indexOf(this),1)}__getNormalizedScrollLeft(t){return oi.getNormalizedScrollLeft(ai,this.getAttribute("dir")||"ltr",t)}__setNormalizedScrollLeft(t,e){return oi.setNormalizedScrollLeft(ai,this.getAttribute("dir")||"ltr",t,e)}};let di;window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Fo()};const ui=new Set,pi=t=>class extends(hi(t)){static get version(){return"23.6.2"}static finalize(){super.finalize();const{is:t}=this;t&&!ui.has(t)&&(window.Vaadin.registrations.push(this),ui.add(t),window.Vaadin.developmentModeCallback&&(di=ei.debounce(di,Qo,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),ni(di)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};function mi(t,e,s){return{index:t,removed:e,addedCount:s}}const fi=0,_i=1,gi=2,yi=3;function bi(t,e,s,n,o,i){let r=i-o+1,a=s-e+1,l=new Array(r);for(let t=0;t<r;t++)l[t]=new Array(a),l[t][0]=t;for(let t=0;t<a;t++)l[0][t]=t;for(let s=1;s<r;s++)for(let i=1;i<a;i++)if(xi(t[e+i-1],n[o+s-1]))l[s][i]=l[s-1][i-1];else{let t=l[s-1][i]+1,e=l[s][i-1]+1;l[s][i]=t<e?t:e}return l}function vi(t){let e=t.length-1,s=t[0].length-1,n=t[e][s],o=[];for(;e>0||s>0;){if(0==e){o.push(gi),s--;continue}if(0==s){o.push(yi),e--;continue}let i,r=t[e-1][s-1],a=t[e-1][s],l=t[e][s-1];i=a<l?a<r?a:r:l<r?l:r,i==r?(r==n?o.push(fi):(o.push(_i),n=r),e--,s--):i==a?(o.push(yi),e--,n=a):(o.push(gi),s--,n=l)}return o.reverse(),o}function wi(t,e,s,n,o,i){let r,a=0,l=0,c=Math.min(s-e,i-o);if(0==e&&0==o&&(a=Ai(t,n,c)),s==t.length&&i==n.length&&(l=Pi(t,n,c-a)),o+=a,i-=l,(s-=l)-(e+=a)==0&&i-o==0)return[];if(e==s){for(r=mi(e,[],0);o<i;)r.removed.push(n[o++]);return[r]}if(o==i)return[mi(e,[],s-e)];let h=vi(bi(t,e,s,n,o,i));r=void 0;let d=[],u=e,p=o;for(let t=0;t<h.length;t++)switch(h[t]){case fi:r&&(d.push(r),r=void 0),u++,p++;break;case _i:r||(r=mi(u,[],0)),r.addedCount++,u++,r.removed.push(n[p]),p++;break;case gi:r||(r=mi(u,[],0)),r.addedCount++,u++;break;case yi:r||(r=mi(u,[],0)),r.removed.push(n[p]),p++}return r&&d.push(r),d}function Ai(t,e,s){for(let n=0;n<s;n++)if(!xi(t[n],e[n]))return n;return s}function Pi(t,e,s){let n=t.length,o=e.length,i=0;for(;i<s&&xi(t[--n],e[--o]);)i++;return i}function Ci(t,e){return wi(t,0,t.length,e,0,e.length)}function xi(t,e){return t===e}function Si(t){return"slot"===t.localName}let Ei=class{static getFlattenedNodes(t){const e=$s(t);if(Si(t))return e.assignedNodes({flatten:!0});{const t=[];for(let s=0;s<e.childNodes.length;s++){const n=e.childNodes[s];if(Si(n)){const e=n;t.push(...$s(e).assignedNodes({flatten:!0}))}else t.push(n)}return t}}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Si(this._target)?this._listenSlots([this._target]):$s(this._target).children&&(this._listenSlots($s(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Si(this._target)?this._unlistenSlots([this._target]):$s(this._target).children&&(this._unlistenSlots($s(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,sn.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let s=t[e];s.addedNodes&&this._listenSlots(s.addedNodes),s.removedNodes&&this._unlistenSlots(s.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),s=Ci(e,this._effectiveNodes);for(let e,n=0;n<s.length&&(e=s[n]);n++)for(let s,n=0;n<e.removed.length&&(s=e.removed[n]);n++)t.removedNodes.push(s);for(let n,o=0;o<s.length&&(n=s[o]);o++)for(let s=n.index;s<n.index+n.addedCount;s++)t.addedNodes.push(e[s]);this._effectiveNodes=e;let n=!1;return(t.addedNodes.length||t.removedNodes.length)&&(n=!0,this.callback.call(this._target,t)),n}_listenSlots(t){for(let e=0;e<t.length;e++){let s=t[e];Si(s)&&s.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let s=t[e];Si(s)&&s.removeEventListener("slotchange",this._boundSchedule)}}},Ti=0;function Oi(){return Ti++}class ki extends EventTarget{static generateId(t,e){return`${t||"default"}-${e.localName}-${Oi()}`}constructor(t,e,s,n,o){super(),this.host=t,this.slotName=e,this.slotFactory=s,this.slotInitializer=n,o&&(this.defaultId=ki.generateId(e,t))}hostConnected(){if(!this.initialized){let t=this.getSlotChild();t?(this.node=t,this.initCustomNode(t)):t=this.attachDefaultNode(),this.initNode(t),this.observe(),this.initialized=!0}}attachDefaultNode(){const{host:t,slotName:e,slotFactory:s}=this;let n=this.defaultNode;return!n&&s&&(n=s(t),n instanceof Element&&(""!==e&&n.setAttribute("slot",e),this.node=n,this.defaultNode=n)),n&&t.appendChild(n),n}getSlotChild(){const{slotName:t}=this;return Array.from(this.host.childNodes).find(e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&""===t)}initNode(t){const{slotInitializer:e}=this;e&&e(this.host,t)}initCustomNode(t){}teardownNode(t){}observe(){const{slotName:t}=this,e=""===t?"slot:not([name])":`slot[name=${t}]`,s=this.host.shadowRoot.querySelector(e);this.__slotObserver=new Ei(s,t=>{const e=this.node,s=t.addedNodes.find(t=>t!==e);t.removedNodes.length&&t.removedNodes.forEach(t=>{this.teardownNode(t)}),s&&(e&&e.isConnected&&this.host.removeChild(e),this.node=s,s!==this.defaultNode&&(this.initCustomNode(s),this.initNode(s)))})}}class Ni extends ki{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,void 0!==this.context&&(t.context=this.context),void 0!==this.manual&&(t.manual=this.manual),void 0!==this.opened&&(t.opened=this.opened),void 0!==this.position&&(t._position=this.position),void 0!==this.shouldShow&&(t.shouldShow=this.shouldShow)}setContext(t){this.context=t;const e=this.node;e&&(e.context=t)}setManual(t){this.manual=t;const e=this.node;e&&(e.manual=t)}setOpened(t){this.opened=t;const e=this.node;e&&(e.opened=t)}setPosition(t){this.position=t;const e=this.node;e&&(e._position=t)}setShouldShow(t){this.shouldShow=t;const e=this.node;e&&(e.shouldShow=t)}setTarget(t){this.target=t;const e=this.node;e&&(e.target=t)}}const $i=fs(t=>class extends t{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(t){this._setAriaDisabled(t)}_setAriaDisabled(t){t?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}}),Ii=t=>t,Li="string"==typeof document.head.style.touchAction,Ri="__polymerGestures",Mi="__polymerGesturesHandled",zi="__polymerGesturesTouchAction",Ui=25,Di=5,ji=2,Bi=["mousedown","mousemove","mouseup","click"],Hi=[0,1,4,2],Fi=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function qi(t){return Bi.indexOf(t)>-1}let Vi=!1;function Yi(t){qi(t)}!function(){try{const t=Object.defineProperty({},"passive",{get(){Vi=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();const Wi=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),Ki={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Gi(t){const e=t.type;if(!qi(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!Fi&&(e=Hi[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}function Ji(t){if("click"===t.type){if(0===t.detail)return!0;const e=ir(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;const s=e.getBoundingClientRect(),n=t.pageX,o=t.pageY;return!(n>=s.left&&n<=s.right&&o>=s.top&&o<=s.bottom)}return!1}const Xi={touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Zi(t){let e="auto";const s=er(t);for(let t,n=0;n<s.length;n++)if(t=s[n],t[zi]){e=t[zi];break}return e}function Qi(t,e,s){t.movefn=e,t.upfn=s,document.addEventListener("mousemove",e),document.addEventListener("mouseup",s)}function tr(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}const er=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],sr={},nr=[];function or(t,e){let s=document.elementFromPoint(t,e),n=s;for(;n&&n.shadowRoot&&!window.ShadyDOM;){const o=n;if(n=n.shadowRoot.elementFromPoint(t,e),o===n)break;n&&(s=n)}return s}function ir(t){const e=er(t);return e.length>0?e[0]:t.target}function rr(t){const e=t.type,s=t.currentTarget[Ri];if(!s)return;const n=s[e];if(!n)return;if(!t[Mi]&&(t[Mi]={},e.startsWith("touch"))){const s=t.changedTouches[0];if("touchstart"===e&&1===t.touches.length&&(Xi.touch.id=s.identifier),Xi.touch.id!==s.identifier)return;Li||"touchstart"!==e&&"touchmove"!==e||ar(t)}const o=t[Mi];if(!o.skip){for(let e,s=0;s<nr.length;s++)e=nr[s],n[e.name]&&!o[e.name]&&e.flow&&e.flow.start.indexOf(t.type)>-1&&e.reset&&e.reset();for(let s,i=0;i<nr.length;i++)s=nr[i],n[s.name]&&!o[s.name]&&(o[s.name]=!0,s[e](t))}}function ar(t){const e=t.changedTouches[0],s=t.type;if("touchstart"===s)Xi.touch.x=e.clientX,Xi.touch.y=e.clientY,Xi.touch.scrollDecided=!1;else if("touchmove"===s){if(Xi.touch.scrollDecided)return;Xi.touch.scrollDecided=!0;const s=Zi(t);let n=!1;const o=Math.abs(Xi.touch.x-e.clientX),i=Math.abs(Xi.touch.y-e.clientY);t.cancelable&&("none"===s?n=!0:"pan-x"===s?n=i>o:"pan-y"===s&&(n=o>i)),n?t.preventDefault():mr("track")}}function lr(t,e,s){return!!sr[e]&&(cr(t,e,s),!0)}function cr(t,e,s){const n=sr[e],o=n.deps,i=n.name;let r=t[Ri];r||(t[Ri]=r={});for(let e,s,n=0;n<o.length;n++)e=o[n],Wi&&qi(e)&&"click"!==e||(s=r[e],s||(r[e]=s={_count:0}),0===s._count&&t.addEventListener(e,rr,Yi(e)),s[i]=(s[i]||0)+1,s._count=(s._count||0)+1);t.addEventListener(e,s),n.touchAction&&ur(t,n.touchAction)}function hr(t){nr.push(t);for(let e=0;e<t.emits.length;e++)sr[t.emits[e]]=t}function dr(t){for(let e,s=0;s<nr.length;s++){e=nr[s];for(let s,n=0;n<e.emits.length;n++)if(s=e.emits[n],s===t)return e}return null}function ur(t,e){Li&&t instanceof HTMLElement&&ti.run(()=>{t.style.touchAction=e}),t[zi]=e}function pr(t,e,s){const n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=s,Ii(t).dispatchEvent(n),n.defaultPrevented){const t=s.preventer||s.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function mr(t){const e=dr(t);e.info&&(e.info.prevent=!0)}function fr(t,e,s,n){e&&pr(e,t,{x:s.clientX,y:s.clientY,sourceEvent:s,preventer:n,prevent:t=>mr(t)})}function _r(t,e,s){if(t.prevent)return!1;if(t.started)return!0;const n=Math.abs(t.x-e),o=Math.abs(t.y-s);return n>=Di||o>=Di}function gr(t,e,s){if(!e)return;const n=t.moves[t.moves.length-2],o=t.moves[t.moves.length-1],i=o.x-t.x,r=o.y-t.y;let a,l=0;n&&(a=o.x-n.x,l=o.y-n.y),pr(e,"track",{state:t.state,x:s.clientX,y:s.clientY,dx:i,dy:r,ddx:a,ddy:l,sourceEvent:s,hover:()=>or(s.clientX,s.clientY)})}function yr(t,e,s){const n=Math.abs(e.clientX-t.x),o=Math.abs(e.clientY-t.y),i=ir(s||e);!i||Ki[i.localName]&&i.hasAttribute("disabled")||(isNaN(n)||isNaN(o)||n<=Ui&&o<=Ui||Ji(e))&&(t.prevent||pr(i,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:s}))}hr({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){tr(this.info)},mousedown(t){if(!Gi(t))return;const e=ir(t),s=this,n=t=>{Gi(t)||(fr("up",e,t),tr(s.info))},o=t=>{Gi(t)&&fr("up",e,t),tr(s.info)};Qi(this.info,n,o),fr("down",e,t)},touchstart(t){fr("down",ir(t),t.changedTouches[0],t)},touchend(t){fr("up",ir(t),t.changedTouches[0],t)}}),hr({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(t){this.moves.length>ji&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,tr(this.info)},mousedown(t){if(!Gi(t))return;const e=ir(t),s=this,n=t=>{const n=t.clientX,o=t.clientY;_r(s.info,n,o)&&(s.info.state=s.info.started?"mouseup"===t.type?"end":"track":"start","start"===s.info.state&&mr("tap"),s.info.addMove({x:n,y:o}),Gi(t)||(s.info.state="end",tr(s.info)),e&&gr(s.info,e,t),s.info.started=!0)},o=t=>{s.info.started&&n(t),tr(s.info)};Qi(this.info,n,o),this.info.x=t.clientX,this.info.y=t.clientY},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove(t){const e=ir(t),s=t.changedTouches[0],n=s.clientX,o=s.clientY;_r(this.info,n,o)&&("start"===this.info.state&&mr("tap"),this.info.addMove({x:n,y:o}),gr(this.info,e,s),this.info.state="track",this.info.started=!0)},touchend(t){const e=ir(t),s=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:s.clientX,y:s.clientY}),gr(this.info,e,s))}}),hr({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(t){Gi(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click(t){Gi(t)&&yr(this.info,t)},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend(t){yr(this.info,t.changedTouches[0],t)}});const br=fs(t=>class extends t{ready(){super.ready(),this.addEventListener("keydown",t=>{this._onKeyDown(t)}),this.addEventListener("keyup",t=>{this._onKeyUp(t)})}_onKeyDown(t){switch(t.key){case"Enter":this._onEnter(t);break;case"Escape":this._onEscape(t)}}_onKeyUp(t){}_onEnter(t){}_onEscape(t){}}),vr=t=>class extends($i(br(t))){get _activeKeys(){return[" "]}ready(){super.ready(),lr(this,"down",t=>{this._shouldSetActive(t)&&this._setActive(!0)}),lr(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(t){return!this.disabled}_onKeyDown(t){super._onKeyDown(t),this._shouldSetActive(t)&&this._activeKeys.includes(t.key)&&(this._setActive(!0),document.addEventListener("keyup",t=>{this._activeKeys.includes(t.key)&&this._setActive(!1)},{once:!0}))}_setActive(t){this.toggleAttribute("active",t)}};let wr=!1;function Ar(){return wr}function Pr(t){const e=t.style;if("hidden"===e.visibility||"none"===e.display)return!0;const s=window.getComputedStyle(t);return"hidden"===s.visibility||"none"===s.display}function Cr(t){return null===t.offsetParent&&0===t.clientWidth&&0===t.clientHeight||Pr(t)}function xr(t){return t.getRootNode().activeElement===t}window.addEventListener("keydown",()=>{wr=!0},{capture:!0}),window.addEventListener("mousedown",()=>{wr=!1},{capture:!0});const Sr=fs(t=>class extends t{get _keyboardActive(){return Ar()}ready(){this.addEventListener("focusin",t=>{this._shouldSetFocus(t)&&this._setFocused(!0)}),this.addEventListener("focusout",t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}});export{vr as A,$o as C,$i as D,pi as E,Sr as F,br as K,No as P,Le as T,Ni as a,go as b,is as c,fs as d,us as e,Us as f,zs as g,Oo as h,vt as i,ei as j,Zo as k,rs as l,sn as m,Cr as n,p as o,rt as p,xr as q,Ce as r,ns as s,en as t,Qe as u,Ei as v,$s as w,Xo as x,oi as y};
