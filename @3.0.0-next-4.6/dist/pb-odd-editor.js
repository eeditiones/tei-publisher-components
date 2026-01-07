import{Z as e,T as t,i,a as s,x as o,c as n,E as a,p as r,w as d}from"./pb-mixin-B7EAqf7q.js";import{e as l,i as c,t as p}from"./unsafe-html-C7vzzZJI.js";import{A as h,F as u,T as m,E as b,P as g,L as v,a as f,d as _,K as y,e as w,f as x,g as $,b as E,t as S,h as C,p as k}from"./focus-mixin-ChIy3j4T.js";import"./jinn-codemirror-DETLdm08.js";import{t as A,g as R}from"./pb-i18n-Dne_FgGK.js";import"./pb-dialog-D-mutKSS.js";const I=(()=>{if("undefined"==typeof self)return!1;if("top"in self&&self!==top)try{top.window.document._=0}catch(e){return!1}return"showOpenFilePicker"in self})();I?Promise.resolve().then(function(){return B}):Promise.resolve().then(function(){return F}),I?Promise.resolve().then(function(){return N}):Promise.resolve().then(function(){return K});const P=I?Promise.resolve().then(function(){return D}):Promise.resolve().then(function(){return H});async function M(...e){return(await P).default(...e)}const T=async e=>{const t=await e.getFile();return t.handle=e,t};var O=async(e=[{}])=>{Array.isArray(e)||(e=[e]);const t=[];e.forEach((e,i)=>{t[i]={description:e.description||"Files",accept:{}},e.mimeTypes?e.mimeTypes.map(s=>{t[i].accept[s]=e.extensions||[]}):t[i].accept["*/*"]=e.extensions||[]});const i=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),s=await Promise.all(i.map(T));return e[0].multiple?s:s[0]},B={__proto__:null,default:O};function j(e){function t(e){if(Object(e)!==e)return Promise.reject(new TypeError(e+" is not an object."));var t=e.done;return Promise.resolve(e.value).then(function(e){return{value:e,done:t}})}return j=function(e){this.s=e,this.n=e.next},j.prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var i=this.s.return;return void 0===i?Promise.resolve({value:e,done:!0}):t(i.apply(this.s,arguments))},throw:function(e){var i=this.s.return;return void 0===i?Promise.reject(e):t(i.apply(this.s,arguments))}},new j(e)}const z=async(e,t,i=e.name,s)=>{const o=[],n=[];var a,r=!1,d=!1;try{for(var l,c=function(e){var t,i,s,o=2;for("undefined"!=typeof Symbol&&(i=Symbol.asyncIterator,s=Symbol.iterator);o--;){if(i&&null!=(t=e[i]))return t.call(e);if(s&&null!=(t=e[s]))return new j(t.call(e));i="@@asyncIterator",s="@@iterator"}throw new TypeError("Object is not async iterable")}(e.values());r=!(l=await c.next()).done;r=!1){const a=l.value,r=`${i}/${a.name}`;"file"===a.kind?n.push(a.getFile().then(t=>(t.directoryHandle=e,t.handle=a,Object.defineProperty(t,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>r})))):"directory"!==a.kind||!t||s&&s(a)||o.push(z(a,t,r,s))}}catch(e){d=!0,a=e}finally{try{r&&null!=c.return&&await c.return()}finally{if(d)throw a}}return[...(await Promise.all(o)).flat(),...await Promise.all(n)]};var q=async(e={})=>{e.recursive=e.recursive||!1,e.mode=e.mode||"read";const t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return(await(await t.values()).next()).done?[t]:z(t,e.recursive,void 0,e.skipDirectory)},N={__proto__:null,default:q},L=async(e,t=[{}],i=null,s=!1,o=null)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";const n=[];let a=null;if(e instanceof Blob&&e.type?a=e.type:e.headers&&e.headers.get("content-type")&&(a=e.headers.get("content-type")),t.forEach((e,t)=>{n[t]={description:e.description||"Files",accept:{}},e.mimeTypes?(0===t&&a&&e.mimeTypes.push(a),e.mimeTypes.map(i=>{n[t].accept[i]=e.extensions||[]})):a?n[t].accept[a]=e.extensions||[]:n[t].accept["*/*"]=e.extensions||[]}),i)try{await i.getFile()}catch(e){if(i=null,s)throw e}const r=i||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:n,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1});!i&&o&&o(r);const d=await r.createWritable();if("stream"in e){const t=e.stream();return await t.pipeTo(d),r}return"body"in e?(await e.body.pipeTo(d),r):(await d.write(await e),await d.close(),r)},D={__proto__:null,default:L},U=async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((t,i)=>{const s=document.createElement("input");s.type="file";const o=[...e.map(e=>e.mimeTypes||[]),...e.map(e=>e.extensions||[])].join();s.multiple=e[0].multiple||!1,s.accept=o||"",s.style.display="none",document.body.append(s),s.addEventListener("cancel",()=>{s.remove(),i(new DOMException("The user aborted a request.","AbortError"))}),s.addEventListener("change",()=>{s.remove(),t(s.multiple?Array.from(s.files):s.files[0])}),"showPicker"in HTMLInputElement.prototype?s.showPicker():s.click()})),F={__proto__:null,default:U},V=async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((t,i)=>{const s=document.createElement("input");s.type="file",s.webkitdirectory=!0,s.style.display="none",document.body.append(s),s.addEventListener("cancel",()=>{s.remove(),i(new DOMException("The user aborted a request.","AbortError"))}),s.addEventListener("change",()=>{s.remove();let i=Array.from(s.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(i=i.filter(t=>t.webkitRelativePath.split("/").every(t=>!e[0].skipDirectory({name:t,kind:"directory"})))):i=i.filter(e=>2===e.webkitRelativePath.split("/").length),t(i)}),"showPicker"in HTMLInputElement.prototype?s.showPicker():s.click()})),K={__proto__:null,default:V},W=async(e,t={})=>{Array.isArray(t)&&(t=t[0]);const i=document.createElement("a");let s=e;"body"in e&&(s=await async function(e,t){const i=e.getReader(),s=new ReadableStream({start:e=>async function t(){return i.read().then(({done:i,value:s})=>{if(!i)return e.enqueue(s),t();e.close()})}()}),o=new Response(s),n=await o.blob();return i.releaseLock(),new Blob([n],{type:t})}(e.body,e.headers.get("content-type"))),i.download=t.fileName||"Untitled",i.href=URL.createObjectURL(await s);const o=()=>{"function"==typeof n&&n()},n=t.legacySetup&&t.legacySetup(o,()=>n(),i);return i.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(i.href),3e4),o()}),i.click(),null},H={__proto__:null,default:W};const{I:G}=e,J=()=>document.createComment(""),X=(e,t,i)=>{const s=e._$AA.parentNode,o=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=s.insertBefore(J(),o),n=s.insertBefore(J(),o);i=new G(t,n,e,e.options)}else{const t=i._$AB.nextSibling,r=i._$AM,d=r!==e;if(d){var n,a;let t;null!==(n=(a=i)._$AQ)&&void 0!==n&&n.call(a,e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==r._$AU&&i._$AP(t)}if(t!==o||d){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;s.insertBefore(e,o),e=t}}}return i},Q=(e,t,i=e)=>(e._$AI(t,i),e),Y={},Z=(e,t=Y)=>e._$AH=t,ee=e=>e._$AH,te=e=>{e._$AR(),e._$AA.remove()},ie=(e,t,i)=>{const s=new Map;for(let o=t;o<=i;o++)s.set(e[o],o);return s},se=l(class extends c{constructor(e){if(super(e),e.type!==p.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let s;void 0===i?i=t:void 0!==t&&(s=t);const o=[],n=[];let a=0;for(const t of e)o[a]=s?s(t,a):a,n[a]=i(t,a),a++;return{values:n,keys:o}}render(e,t,i){return this.dt(e,t,i).values}update(e,[i,s,o]){const n=ee(e),{values:a,keys:r}=this.dt(i,s,o);if(!Array.isArray(n))return this.ut=r,a;const d=this.ut??=[],l=[];let c,p,h=0,u=n.length-1,m=0,b=a.length-1;for(;h<=u&&m<=b;)if(null===n[h])h++;else if(null===n[u])u--;else if(d[h]===r[m])l[m]=Q(n[h],a[m]),h++,m++;else if(d[u]===r[b])l[b]=Q(n[u],a[b]),u--,b--;else if(d[h]===r[b])l[b]=Q(n[h],a[b]),X(e,l[b+1],n[h]),h++,b--;else if(d[u]===r[m])l[m]=Q(n[u],a[m]),X(e,n[h],n[u]),u--,m++;else if(void 0===c&&(c=ie(r,m,b),p=ie(d,h,u)),c.has(d[h]))if(c.has(d[u])){const t=p.get(r[m]),i=void 0!==t?n[t]:null;if(null===i){const t=X(e,n[h]);Q(t,a[m]),l[m]=t}else l[m]=Q(i,a[m]),X(e,n[h],i),n[t]=null;m++}else te(n[u]),u--;else te(n[h]),h++;for(;m<=b;){const t=X(e,l[b+1]);Q(t,a[m]),l[m++]=t}for(;h<=u;){const e=n[h++];null!==e&&te(e)}return this.ut=r,Z(e,l),t}}),oe=e=>class extends(h(u(e))){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged",sync:!0},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");null!==e&&(this.value=e)}focus(e){this.disabled||super.focus(e)}_shouldSetActive(e){return!(this.disabled||"keydown"===e.type&&e.defaultPrevented)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){super._disabledChanged(e),e&&(this.selected=!1,this.blur())}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this.click())}},ne=i`
  :host {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--vaadin-tab-gap, var(--vaadin-gap-s));
    padding: var(--vaadin-tab-padding, var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container));
    cursor: var(--vaadin-clickable-cursor);
    font-size: var(--vaadin-tab-font-size, 1em);
    font-weight: var(--vaadin-tab-font-weight, 500);
    line-height: var(--vaadin-tab-line-height, inherit);
    color: var(--vaadin-tab-text-color, var(--vaadin-text-color-secondary));
    background: var(--vaadin-tab-background, transparent);
    border-radius: var(--vaadin-tab-border-radius, var(--vaadin-radius-m));
    border: var(--vaadin-tab-border-width, 0) solid var(--vaadin-tab-border-color, var(--vaadin-border-color-secondary));
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    user-select: none;
    touch-action: manipulation;
    position: relative;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([orientation='vertical']) {
    justify-content: start;
  }

  :host([selected]) {
    --vaadin-tab-background: var(--vaadin-background-container);
    --vaadin-tab-text-color: var(--vaadin-text-color);
  }

  :host([disabled]) {
    cursor: var(--vaadin-disabled-cursor);
    opacity: 0.5;
  }

  :host(:is([focus-ring], :focus-visible)) {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
    outline-offset: calc(var(--vaadin-focus-ring-width) * -1);
  }

  slot {
    gap: inherit;
    align-items: inherit;
    justify-content: inherit;
  }

  ::slotted(a) {
    color: inherit !important;
    cursor: inherit !important;
    text-decoration: inherit !important;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
    gap: inherit;
  }

  ::slotted(a)::before {
    content: '';
    position: absolute;
    inset: 0;
  }

  @media (forced-colors: active) {
    :host {
      border: 1px solid Canvas;
    }

    :host([selected]) {
      color: Highlight;
      border-color: Highlight;
    }

    :host([disabled]) {
      color: GrayText;
      opacity: 1;
    }
  }
`;class ae extends(oe(m(b(g(v(s)))))){static get is(){return"vaadin-tab"}static get styles(){return ne}render(){return o`
      <slot></slot>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this.setAttribute("role","tab"),this._tooltipController=new f(this),this.addController(this._tooltipController)}_onKeyUp(e){const t=this.hasAttribute("active");if(super._onKeyUp(e),t){const e=this.querySelector("a");e&&e.click()}}}_(ae);const re=i`
  :host {
    display: flex;
    max-width: 100%;
    max-height: 100%;
    position: relative;
    box-sizing: border-box;
    padding: var(--vaadin-tabs-padding);
    background: var(--vaadin-tabs-background);
    border-radius: var(--vaadin-tabs-border-radius);
    border: var(--vaadin-tabs-border-width, 0) solid
      var(--vaadin-tabs-border-color, var(--vaadin-border-color-secondary));
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([orientation='vertical']) {
    flex-direction: column;
  }

  [part='tabs'] {
    flex: 1;
    overflow: auto;
    overscroll-behavior: contain;
    display: flex;
    flex-direction: column;
    gap: var(--vaadin-tabs-gap, var(--vaadin-gap-s));
  }

  :host([orientation='horizontal']) [part='tabs'] {
    flex-direction: row;
    scrollbar-width: none;
  }

  /* scrollbar-width is supported in Safari 18.2, use the following for earlier */
  :host([orientation='horizontal']) [part='tabs']::-webkit-scrollbar {
    display: none;
  }

  [part$='button'] {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    opacity: 0;
    cursor: var(--vaadin-clickable-cursor);
    box-sizing: border-box;
    height: 100%;
    padding: var(--vaadin-tab-padding, var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container));
    background: var(--vaadin-background-color);
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }

  [part='forward-button'] {
    inset-inline-end: 0;
  }

  :host([overflow~='start']) [part='back-button'],
  :host([overflow~='end']) [part='forward-button'] {
    pointer-events: auto;
    opacity: 1;
  }

  [part$='button']::before {
    content: '';
    display: block;
    width: var(--vaadin-icon-size, 1lh);
    height: var(--vaadin-icon-size, 1lh);
    background: currentColor;
    mask: var(--_vaadin-icon-chevron-down) 50% / var(--vaadin-icon-visual-size, 100%) no-repeat;
    rotate: 90deg;
  }

  [part='forward-button']::before {
    rotate: -90deg;
  }

  :host(:is([orientation='vertical'], [theme~='hide-scroll-buttons'])) [part$='button'] {
    display: none;
  }

  @media (pointer: coarse) {
    :host(:not([theme~='show-scroll-buttons'])) [part$='button'] {
      display: none;
    }
  }

  :host([dir='rtl']) [part$='button']::before {
    scale: 1 -1;
  }

  @media (forced-colors: active) {
    [part$='button']::before {
      background: CanvasText;
    }
  }
`;function de(e,t){const{scrollLeft:i}=e;return"rtl"!==t?i:e.scrollWidth-e.clientWidth+i}function le(e,t,i){e.scrollLeft="rtl"!==t?i:e.clientWidth-e.scrollWidth+i}const ce=e=>class extends(y(e)){get focused(){return(this._getItems()||[]).find(w)}get _vertical(){return!0}get _tabNavigation(){return!1}focus(e){const t=this._getFocusableIndex();t>=0&&this._focus(t,e)}_getFocusableIndex(){const e=this._getItems();return Array.isArray(e)?this._getAvailableIndex(e,0,null,e=>!x(e)):-1}_getItems(){return Array.from(this.children)}_onKeyDown(e){if(super._onKeyDown(e),e.metaKey||e.ctrlKey)return;const{key:t,shiftKey:i}=e,s=this._getItems()||[],o=s.indexOf(this.focused);let n,a;const r=!this._vertical&&"rtl"===this.getAttribute("dir")?-1:1;this.__isPrevKeyPressed(t,i)?(a=-r,n=o-r):this.__isNextKeyPressed(t,i)?(a=r,n=o+r):"Home"===t?(a=1,n=0):"End"===t&&(a=-1,n=s.length-1),n=this._getAvailableIndex(s,n,a,e=>!x(e)),this._tabNavigation&&"Tab"===t&&(n>o&&e.shiftKey||n<o&&!e.shiftKey||n===o)||n>=0&&(e.preventDefault(),this._focus(n,{focusVisible:!0},!0))}__isPrevKeyPressed(e,t){return this._vertical?"ArrowUp"===e:"ArrowLeft"===e||this._tabNavigation&&"Tab"===e&&t}__isNextKeyPressed(e,t){return this._vertical?"ArrowDown"===e:"ArrowRight"===e||this._tabNavigation&&"Tab"===e&&!t}_focus(e,t,i=!1){const s=this._getItems();this._focusItem(s[e],t,i)}_focusItem(e,t){e&&e.focus(t)}_getAvailableIndex(e,t,i,s){const o=e.length;let n=t;for(let t=0;"number"==typeof n&&t<o;t+=1,n+=i||1){n<0?n=o-1:n>=o&&(n=0);const t=e[n];if(this._isItemFocusable(t)&&this.__isMatchingItem(t,s))return n}return-1}__isMatchingItem(e,t){return"function"!=typeof t||t(e)}_isItemFocusable(e){return!e.hasAttribute("disabled")}},pe=e=>class extends(ce(e)){static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0,sync:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}get _isRTL(){return!this._vertical&&"rtl"===this.getAttribute("dir")}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}get _vertical(){return"horizontal"!==this.orientation}focus(e){this._observer&&this._observer.flush();const t=Array.isArray(this.items)?this.items:[],i=this._getAvailableIndex(t,0,null,e=>0===e.tabIndex&&!x(e));i>=0?this._focus(i,e):super.focus(e)}ready(){super.ready(),this.addEventListener("click",e=>this._onClick(e));const e=this.shadowRoot.querySelector("slot:not([name])");this._observer=new $(e,()=>{this._setItems(this._filterItems([...this.children]))})}_getItems(){return this.items}_enhanceItems(e,t,i,s){if(!s&&e){this.setAttribute("aria-orientation",t||"vertical"),e.forEach(e=>{t?e.setAttribute("orientation",t):e.removeAttribute("orientation")}),this._setFocusable(i<0||!i?0:i);const s=e[i];e.forEach(e=>{e.selected=e===s}),s&&!s.disabled&&this._scrollToItem(i)}}_filterItems(e){return e.filter(e=>e._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const t=this._filterItems(e.composedPath())[0];let i;t&&!t.disabled&&(i=this.items.indexOf(t))>=0&&(this.selected=i)}_searchKey(e,t){this._searchReset=E.debounce(this._searchReset,S.after(500),()=>{this._searchBuf=""}),this._searchBuf+=t.toLowerCase(),this.items.some(e=>this.__isMatchingKey(e))||(this._searchBuf=t.toLowerCase());const i=1===this._searchBuf.length?e+1:e;return this._getAvailableIndex(this.items,i,1,e=>this.__isMatchingKey(e)&&"none"!==getComputedStyle(e).display)}__isMatchingKey(e){return e.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}_onKeyDown(e){if(e.metaKey||e.ctrlKey)return;const t=e.key,i=this.items.indexOf(this.focused);if(/[\p{L}\p{Nd}]/u.test(t)&&1===t.length){const e=this._searchKey(i,t);return void(e>=0&&this._focus(e))}super._onKeyDown(e)}_setFocusable(e){e=this._getAvailableIndex(this.items,e,1);const t=this.items[e];this.items.forEach(e=>{e.tabIndex=e===t?0:-1})}_focus(e,t){this.items.forEach((t,i)=>{t.focused=i===e}),this._setFocusable(e),this._scrollToItem(e),super._focus(e,t)}_scrollToItem(e){const t=this.items[e];if(!t)return;const i=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],s=this._scrollerElement.getBoundingClientRect(),o=(this.items[e+1]||t).getBoundingClientRect(),n=(this.items[e-1]||t).getBoundingClientRect();let a=0;!this._isRTL&&o[i[1]]>=s[i[1]]||this._isRTL&&o[i[1]]<=s[i[1]]?a=o[i[1]]-s[i[1]]:(!this._isRTL&&n[i[0]]<=s[i[0]]||this._isRTL&&n[i[0]]>=s[i[0]])&&(a=n[i[0]]-s[i[0]]),this._scroll(a)}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{const t=this.getAttribute("dir")||"ltr",i=de(this._scrollerElement,t)+e;le(this._scrollerElement,t,i)}}},he=new ResizeObserver(e=>{setTimeout(()=>{e.forEach(e=>{e.target.isConnected&&(e.target.resizables?e.target.resizables.forEach(t=>{t._onResize(e.contentRect)}):e.target._onResize(e.contentRect))})})}),ue=C(e=>class extends e{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),he.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,he.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),he.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const t=e.resizables;t&&(t.delete(this),0===t.size&&he.unobserve(e)),this.__parent=null}}_onResize(e){}}),me=e=>class extends(ue(pe(e))){static get properties(){return{orientation:{value:"horizontal",type:String,reflectToAttribute:!0,sync:!0},selected:{value:0,type:Number,reflectToAttribute:!0}}}static get observers(){return["__tabsItemsChanged(items)"]}constructor(){super(),this.__itemsResizeObserver=new ResizeObserver(()=>{setTimeout(()=>this._updateOverflow())})}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return!this._vertical&&this.__isRTL?1:-1}ready(){super.ready(),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist")}_onResize(){this._updateOverflow()}__tabsItemsChanged(e){this.__itemsResizeObserver.disconnect(),(e||[]).forEach(e=>{this.__itemsResizeObserver.observe(e)}),this._updateOverflow()}_scrollForward(){const e=this._getNavigationButtonVisibleWidth("forward-button"),t=this._getNavigationButtonVisibleWidth("back-button"),i=this._scrollerElement.getBoundingClientRect(),s=[...this.items].reverse().find(s=>this._isItemVisible(s,e,t,i)).getBoundingClientRect(),o=20+this.shadowRoot.querySelector('[part="back-button"]').clientWidth;let n;if(this.__isRTL){const e=i.right-o;n=s.right-e}else{const e=i.left+o;n=s.left-e}-this.__direction*n<1&&(n=-this.__direction*(this._scrollOffset-o)),this._scroll(n)}_scrollBack(){const e=this._getNavigationButtonVisibleWidth("forward-button"),t=this._getNavigationButtonVisibleWidth("back-button"),i=this._scrollerElement.getBoundingClientRect(),s=this.items.find(s=>this._isItemVisible(s,e,t,i)).getBoundingClientRect(),o=20+this.shadowRoot.querySelector('[part="forward-button"]').clientWidth;let n;if(this.__isRTL){const e=i.left+o;n=s.left-e}else{const e=i.right-o;n=s.right-e}this.__direction*n<1&&(n=this.__direction*(this._scrollOffset-o)),this._scroll(n)}_isItemVisible(e,t,i,s){if(this._vertical)throw new Error("Visibility check is only supported for horizontal tabs.");const o=this.__isRTL?i:t,n=this.__isRTL?t:i,a=s.right-o,r=s.left+n,d=e.getBoundingClientRect();return a>Math.floor(d.left)&&r<Math.ceil(d.right)}_getNavigationButtonVisibleWidth(e){const t=this.shadowRoot.querySelector(`[part="${e}"]`);return"0"===window.getComputedStyle(t).opacity?0:t.clientWidth}_updateOverflow(){const e=this._vertical?this._scrollerElement.scrollTop:de(this._scrollerElement,this.getAttribute("dir")),t=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let i=Math.floor(e)>1?"start":"";Math.ceil(e)<Math.ceil(t-this._scrollOffset)&&(i+=" end"),1===this.__direction&&(i=i.replace(/start|end/giu,e=>"start"===e?"end":"start")),i?this.setAttribute("overflow",i.trim()):this.removeAttribute("overflow")}};class be extends(me(b(m(g(v(s)))))){static get is(){return"vaadin-tabs"}static get styles(){return re}render(){return o`
      <div @click="${this._scrollBack}" part="back-button" aria-hidden="true"></div>

      <div id="scroll" part="tabs">
        <slot></slot>
      </div>

      <div @click="${this._scrollForward}" part="forward-button" aria-hidden="true"></div>
    `}}_(be);class ge extends s{static get styles(){return i`
      :host {
        display: block;
      }
      .wrapper {
        display: grid;
        grid-template-columns: 150px auto 50px;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        margin-bottom: 10px;
      }

      .editor label {
        margin-bottom: 5px;
        font-size: 12px;
        font-weight: 400;
        color: var(--paper-grey-500);
      }

      .pb-field {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
      }

      .pb-field__label {
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: rgba(0, 0, 0, 0.6);
      }

      .pb-select {
        height: var(--pb-input-height, 48px);
        padding: 0.5rem 0.75rem;
        border: 1px solid rgba(0, 0, 0, 0.16);
        border-radius: 8px;
        font: inherit;
        color: inherit;
        background: #fff;
        appearance: none;
        background-image: linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 0.4) 50%),
          linear-gradient(135deg, rgba(0, 0, 0, 0.4) 50%, transparent 50%),
          linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
        background-position: calc(100% - 18px) calc(0.6em + 2px),
          calc(100% - 13px) calc(0.6em + 2px), calc(100% - 2.5rem) 0.5em;
        background-size: 5px 5px, 5px 5px, 1px 2.25em;
        background-repeat: no-repeat;
        transition: border-color 120ms ease, box-shadow 120ms ease;
      }

      .pb-select:focus {
        outline: none;
        border-color: #1976d2;
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.16);
      }

      pb-icon-button {
        align-self: center;
      }
    `}render(){return o`
      <div class="wrapper">
        <div class="pb-field">
          <span class="pb-field__label">Scope</span>
          <select class="pb-select" .value=${this.scope||""} @change=${this._handleScopeChange}>
            ${this.scopes.map(e=>o`<option value="${e}">${this._displayScope(e)}</option>`)}
          </select>
        </div>
        <div class="editor">
          <label>Rendition</label>
          <jinn-codemirror
            id="editor"
            label="Rendition"
            code="${this.css||""}"
            mode="css"
            @update="${this._handleCodeChange}"
          ></jinn-codemirror>
        </div>
        <pb-icon-button
          class="icon-button"
          icon="delete"
          title="delete this rendition"
          @click="${this._remove}"
        ></pb-icon-button>
      </div>

      <slot></slot>
    `}static get properties(){return{scopes:{type:Array},css:{type:String,reflect:!0},scope:{type:String,reflect:!0},selected:{type:String}}}constructor(){super(),this.scopes=["","before","after"],this.css="";const e=this.getAttribute("scope");this.scope=null!=e?e:"",this.selected="",this._initialized=!1}connectedCallback(){super.connectedCallback(),this.css=this.css.trim(),this.dispatchEvent(new CustomEvent("rendition-connected",{composed:!0,bubbles:!0,detail:{target:this}}))}firstUpdated(e){this.refreshEditor(),this._initialized=!0}refreshEditor(){console.log("refreshEditor"),this.shadowRoot.getElementById("editor")}_remove(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("remove-rendition",{}))}_handleCodeChange(){this.css=this.shadowRoot.getElementById("editor").value,this._emitChange()}_handleScopeChange(e){this.scope=e.target.value,this._emitChange()}_emitChange(){this.dispatchEvent(new CustomEvent("rendition-changed",{composed:!0,bubbles:!0,detail:{name:this.name,css:this.css,scope:this.scope}}))}_displayScope(e){return e||"(default)"}}customElements.define("pb-odd-rendition-editor",ge);class ve extends s{static get styles(){return i`
      :host {
        display: block;
      }
      .wrapper {
        display: grid;
        grid-template-columns: 150px auto 50px 50px;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        margin-bottom: 10px;
      }
      pb-icon-button {
        align-self: center;
        margin-top: 16px;
      }

      .pb-checkbox {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        align-self: center;
        margin-top: 16px;
        font-size: 0.95rem;
        color: rgba(0, 0, 0, 0.87);
      }

      .pb-checkbox input {
        width: 16px;
        height: 16px;
      }

      .pb-field {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
      }

      .pb-field__label {
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: rgba(0, 0, 0, 0.6);
      }

      pb-autocomplete {
        width: 100%;
      }

      .editor label {
        margin-bottom: 5px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.6);
      }
    `}render(){return o`
      <div class="wrapper">
        <div class="pb-field">
          <span class="pb-field__label"
            >${A("odd.editor.model.param-name-placeholder")}</span
          >
          <pb-autocomplete
            id="combo"
            .suggestions=${this._currentParameters}
            .value=${this.name||""}
            placeholder="${A("odd.editor.model.param-name-placeholder")}"
            @pb-autocomplete-input=${this._handleNameInput}
            @pb-autocomplete-selected=${this._handleNameSelected}
          ></pb-autocomplete>
        </div>

        <div class="editor">
          <label>Parameter</label>
          <jinn-codemirror
            id="editor"
            mode="xquery"
            code="${this.value}"
            linter="${this.endpoint}/${n(this.apiVersion,"1.0.0")?"modules/editor.xql":"api/lint"}"
          ></jinn-codemirror>
        </div>
        <label class="pb-checkbox">
          <input
            id="set"
            type="checkbox"
            ?checked=${this.setParam}
            @change=${this._handleSetToggle}
          />
          <span>${A("odd.editor.model.set-param")}</span>
        </label>
        <pb-icon-button
          class="icon-button"
          icon="delete"
          title="delete this parameter"
          @click="${this._delete}"
        ></pb-icon-button>
      </div>
    `}static get properties(){return{name:{type:String,reflect:!0},value:{type:String,reflect:!0},behaviour:{type:String},parameters:{type:Object},setParam:{type:Boolean,attribute:"set"},_currentParameters:{type:Array},endpoint:{type:String},apiVersion:{type:String}}}constructor(){super(),this.name="",this.value="",this.setParam=!1,this.behaviour="",this.currentParameters=[],this.parameters={"":[],alternate:["default","alternate","persistent"],anchor:["content","id"],block:["content"],body:["content"],break:["content","type","label"],cell:["content"],cit:["content","source"],document:["content"],figure:["content","title"],graphic:["content","url","width","height","scale","title"],heading:["content","level"],inline:["content"],link:["content","uri","target"],list:["content","type"],listItem:["content","n"],metadata:["content"],note:["content","place","label"],omit:[],paragraph:["content"],row:["content"],section:["content"],table:["content"],text:["content"],title:["content"],webcomponent:["content","name"]},this.selected="",this.endpoint="",this._currentParameters=[],this.behaviour&&this.parameters[this.behaviour]&&(this._currentParameters=this.parameters[this.behaviour])}connectedCallback(){super.connectedCallback(),this.value=this.value.trim(),this.dispatchEvent(new CustomEvent("parameter-connected",{composed:!0,bubbles:!0,detail:{target:this}}))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"behaviour"===e&&(this._currentParameters=this.parameters&&this.parameters[i]||[])}updated(e){if(super.updated(e),e.has("parameters")||e.has("behaviour")){var t;this._currentParameters=this.parameters&&this.parameters[this.behaviour]||[];const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("combo");e&&(e.suggestions=this._currentParameters)}}firstUpdated(e){this.selected=this.parameters[this.behaviour]||[],this.requestUpdate(),this.shadowRoot.getElementById("editor").addEventListener("update",this._handleCodeChange.bind(this))}refreshEditor(){this.shadowRoot.getElementById("editor")}_delete(e){console.log("parameter delete ",e),e.preventDefault(),this.dispatchEvent(new CustomEvent("parameter-remove",{}))}_handleCodeChange(e){this._emitChange()}_handleNameInput(e){const{text:t,value:i}=e.detail||{};this.name=i??t??"",this._emitChange()}_handleNameSelected(e){const{text:t,value:i}=e.detail||{};this.name=i??t??"",this._emitChange()}_handleSetToggle(e){this.setParam=e.target.checked,this._emitChange()}_emitChange(){const e=this.shadowRoot.getElementById("editor");e&&(this.value=e.content||e.value||"");const t=this.shadowRoot.getElementById("combo");t&&!this.name&&(this.name=t.value||"");const i=this.shadowRoot.getElementById("set");i&&(this.setParam=i.checked),this.dispatchEvent(new CustomEvent("parameter-changed",{composed:!0,bubbles:!0,detail:{name:this.name,value:this.value,set:this.setParam}}))}}customElements.define("pb-odd-parameter-editor",ve);class fe extends s{static get styles(){return i`
      :host {
        display: flex;
        flex-direction: column;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: 'Oswald', Verdana, 'Helvetica', sans-serif;
        font-weight: 400 !important;
      }

      form {
        margin-bottom: 8px;
      }

      .pb-input,
      .pb-select,
      pb-autocomplete {
        margin-bottom: 16px;
      }

      .models {
        margin-left: 20px;
        margin-top: 10px;
      }

      .btn,
      .btn-group {
        margin-top: 0;
        margin-bottom: 0;
      }

      header {
        // background-color: #d1dae0;
        background: var(--paper-grey-300);
        margin: 0;
      }

      header div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      header h4 {
        padding: 4px 8px;
        margin: 0;
        display: grid;
        grid-template-columns: 40px 40% auto;
      }
      h4 .btn-group {
        text-align: right;
        display: none;
      }

      #toggle,
      .modelType {
        align-self: center;
      }

      header div.info {
        padding: 0 16px 4px;
        margin: 0;
        font-size: 85%;
        display: block;
        margin: 0 0 0 32px;
      }
      header div.info * {
        display: block;
        line-height: 1.2;
      }

      header .outputDisplay {
        text-transform: uppercase;
      }
      header .description {
        font-style: italic;
      }

      header .predicate {
        color: #ff5722;
      }

      .predicate label,
      .template label {
        display: block;
        font-size: 12px;
        font-weight: 300;
        color: rgb(115, 115, 115);
      }

      .model-collapse {
        color: #000000;
        cursor: pointer;
      }

      .model-collapse:hover {
        text-decoration: none;
      }

      .behaviour {
        color: #ff5722;
      }

      .behaviour:before {
        content: ' [';
      }

      .behaviour:after {
        content: ']';
      }

      .behaviourWrapper {
        display: grid;
        grid-template-columns: 140px 40px 140px auto;
      }
      .behaviourWrapper > * {
        display: inline;
        align-self: stretch;
      }

      .group {
        margin: 0;
        font-size: 16px;
        font-weight: bold;
      }

      .group .title {
        /*text-decoration: underline;*/
      }

      .renditions,
      .parameters {
        padding-left: 16px;
        border-left: 3px solid #e0e0e0;
        margin-bottom: 20px;
      }

      .renditions .group {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .predicate .form-control {
        width: 100%;
      }

      .source {
        text-decoration: none;
        margin-bottom: 8px;
      }

      .selectOutput {
        margin-right: 10px;
      }

      :host([currentselection]) > form > header {
        @apply --shadow-elevation-4dp;
        border-left: 3px solid var(--paper-blue-500);
      }

      .modelTypeMenu {
        margin-left: 8px;
        display: inline-flex;
        align-items: center;
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }

      .pb-input,
      .pb-select {
        width: 100%;
        height: var(--pb-input-height, 48px);
        padding: 0.5rem 0.75rem;
        border: 1px solid rgba(0, 0, 0, 0.16);
        border-radius: 8px;
        font: inherit;
        color: inherit;
        background: #fff;
        transition: border-color 120ms ease, box-shadow 120ms ease;
      }

      .pb-input::placeholder {
        color: rgba(0, 0, 0, 0.4);
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

      .pb-input:focus,
      .pb-select:focus {
        outline: none;
        border-color: #1976d2;
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.16);
      }

      /* need to play it save for FF */
      :host([currentselection]) > form > header > h4 > .btn-group {
        display: inline-block;
      }
      details {
        display: block;
      }

      details summary {
        display: none;
      }

      .renditions {
        margin-top: 10px;
      }

      .details {
        padding: 0px 50px 20px 20px;
        background: var(--paper-grey-200);
      }

      details:not([open]) {
        padding: 0;
      }

      .editor label {
        margin-bottom: 5px;
        font-size: 12px;
        font-weight: 400;
        color: var(--paper-grey-500);
      }

      .horizontal {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      #mode {
        min-width: 18em;
      }
    `}static get properties(){return{behaviour:{type:String},predicate:{type:String,reflect:!0,converter:(e,t)=>"null"===e.toLowerCase()?"":e},type:{type:String,reflect:!0},template:{type:String,reflect:!0,converter:(e,t)=>"null"===e.toLowerCase()?"":e},output:{type:String,reflect:!0,converter:(e,t)=>"null"===e.toLowerCase()?"":e},css:{type:String,converter:(e,t)=>"null"===e.toLowerCase()?"":e},mode:{type:String},model:{type:Object},models:{type:Array},parameters:{type:Array},renditions:{type:Array},desc:{type:String,converter:(e,t)=>"null"===e.toLowerCase()?"":e},sourcerend:{type:String},show:{type:Boolean,reflect:!0},outputs:{type:Array},behaviours:{type:Array},icon:{type:String},open:{type:String},hasCustomBehaviour:{type:Boolean},endpoint:{type:String},apiVersion:{type:String}}}constructor(){super(),this.behaviour="inline",this.predicate="",this.type="",this.template="",this.output="",this.css="",this.mode="",this.model={},this.model.models=[],this.parameters=[],this.renditions=[],this.desc="",this.sourcerend="",this.show=!1,this.outputs=["","web","print","epub","fo","latex","plain"],this.parentModel=[],this.behaviours=["alternate","anchor","block","body","break","cell","cit","document","figure","graphic","heading","inline","link","list","listItem","metadata","note","omit","paragraph","pass-through","row","section","table","text","title","webcomponent"],this.icon="expand-more",this.hasCustomBehaviour=!1}render(){let e;switch(this.output){case"web":case"epub":default:e="html";break;case"latex":e="tex";break;case"plain":e="default";break;case"fo":case"print":e="xml"}return o`
        <form>
            <header>
                <h4>
                    <pb-icon-button id="toggle"
                                       icon="${this.icon}" @click="${this.toggle}"
                                       class="model-collapse"></pb-icon-button>

                    <span class="modelType">${this.type}<span class="behaviour" ?hidden="${this._isGroupOrSequence()}">${this.behaviour}</span></span>

                    <span class="btn-group">
                        <pb-icon-button @click="${this._moveDown}" icon="arrow-downward"
                                           title="move down"></pb-icon-button>
                        <pb-icon-button @click="${this._moveUp}" icon="arrow-upward"
                                           title="move up"></pb-icon-button>
                        <pb-icon-button @click="${this._requestRemoval}" icon="delete" title="remove"></pb-icon-button>
                        <pb-icon-button @click="${this._copy}" icon="content-copy" title="copy"></pb-icon-button>
                        <pb-icon-button @click="${this._paste}" icon="content-paste"></pb-icon-button>

                        ${this._isGroupOrSequence()?o`
                                <label class="modelTypeMenu">
                                  <span class="sr-only">Add nested model</span>
                                  <select class="pb-select" @change=${this._handleAddNested}>
                                    <option value="">Add…</option>
                                    ${"modelSequence"===this.type?o`<option value="model">model</option>`:a}
                                    ${"modelGrp"===this.type?o`
                                          <option value="modelSequence">modelSequence</option>
                                          <option value="model">model</option>
                                        `:a}
                                  </select>
                                </label>
                              `:a}
                    </span>
                </h4>
                <div class="info">
                    <div class="outputDisplay">${this.output}</div>
                    <div class="description">${this.desc}</div>
                    <div class="predicate">${this.predicate}</div>
                </p>
            </header>
            <details ?open="${this.show}" class="details">
                <summary style="display: none;"></summary>
                <div class="horizontal">
                    <label class="pb-field selectOutput">
                      <span class="pb-field__label">${A("odd.editor.model.output")}</span>
                      <select
                        id="output"
                        class="pb-select"
                        .value=${this.output||""}
                        @change=${this._selectOutput}
                      >
                        ${this.outputs.map(e=>o`<option value="${e}">${e}</option>`)}
                      </select>
                    </label>
                    <label class="pb-field">
                      <span class="pb-field__label">${A("odd.editor.model.mode-placeholder")}</span>
                      <input
                        id="mode"
                        class="pb-input"
                        .value=${this.mode||""}
                        placeholder="${A("odd.editor.model.mode-placeholder")}"
                        @change=${this._inputMode}
                      />
                    </label>
                </div>
                <label class="pb-field">
                  <span class="pb-field__label">${A("odd.editor.model.description-placeholder")}</span>
                  <input
                    id="desc"
                    class="pb-input"
                    .value=${this.desc||""}
                    placeholder="${A("odd.editor.model.description-placeholder")}"
                    @change=${this._inputDesc}
                  />
                </label>

                <div class="editor">
                    <label>Predicate</label>
                    <jinn-codemirror id="predicate"
                        code="${this.predicate}"
                        mode="xquery"
                        linter="${this.endpoint}/${n(this.apiVersion,"1.0.0")<0?"modules/editor.xql":"api/lint"}"
                        placeholder="${A("odd.editor.model.predicate-placeholder")}"
                        @update="${this._updatePredicate}"></jinn-codemirror>
                </div>

                ${this._isModel()?o`
                        <div>
                          <div class="behaviourWrapper">
                            <label class="pb-field">
                              <span class="pb-field__label"
                                >${A("odd.editor.model.behaviour")}</span
                              >
                              <select
                                id="behaviour"
                                class="pb-select"
                                .value=${this.behaviour||""}
                                ?disabled=${this.hasCustomBehaviour}
                                @change=${this._selectBehaviour}
                              >
                                ${this.behaviours.map(e=>o`<option value="${e}">${e}</option>`)}
                              </select>
                            </label>
                            <span style="align-self:center;justify-self: center;">
                              ${A("odd.editor.model.link-with-or")}
                            </span>
                            <label class="pb-field">
                              <span class="pb-field__label"
                                >${A("odd.editor.model.custom-behaviour-placeholder")}</span
                              >
                              <input
                                id="custombehaviour"
                                class="pb-input"
                                @input=${this._handleCustomBehaviour}
                                placeholder="${A("odd.editor.model.custom-behaviour-placeholder")}"
                              />
                            </label>
                            <span></span>
                          </div>

                          <label class="pb-field">
                            <span class="pb-field__label">CSS Class</span>
                            <input
                              id="css"
                              class="pb-input"
                              .value=${this.css||""}
                              placeholder="${A("odd.editor.model.css-class-placeholder")}"
                              @change=${this._inputCss}
                            />
                          </label>

                          <div class="editor">
                            <label>Template</label>
                            <jinn-codemirror
                              id="template"
                              code="${this.template}"
                              mode="${e}"
                              placeholder="${A("odd.editor.model.template-placeholder")}"
                              @update="${this._updateTemplate}"
                            >
                              <div slot="toolbar">
                                <button
                                  type="button"
                                  class="pb-button pb-button--text"
                                  data-mode="xml"
                                  data-command="selectElement"
                                  data-key="mod-e mod-s"
                                  title="Select element around current cursor position"
                                >
                                  &lt;|>
                                </button>
                                <button
                                  type="button"
                                  class="pb-button pb-button--text"
                                  data-mode="xml"
                                  data-command="encloseWith"
                                  data-key="mod-e mod-e"
                                  title="Enclose selection in new element"
                                >
                                  &lt;...&gt;
                                </button>
                                <button
                                  type="button"
                                  class="pb-button pb-button--text sep"
                                  data-mode="xml"
                                  data-command="removeEnclosing"
                                  title="Remove enclosing tags"
                                  data-key="mod-e mod-r"
                                >
                                  &lt;X>
                                </button>
                                <button
                                  type="button"
                                  class="pb-button pb-button--text"
                                  data-mode="html"
                                  data-command="selectElement"
                                  data-key="mod-e mod-s"
                                  title="Select element around current cursor position"
                                >
                                  &lt;|>
                                </button>
                                <button
                                  type="button"
                                  class="pb-button pb-button--text"
                                  data-mode="html"
                                  data-command="encloseWith"
                                  data-key="mod-e mod-e"
                                  title="Enclose selection in new element"
                                >
                                  &lt;...&gt;
                                </button>
                                <button
                                  type="button"
                                  class="pb-button pb-button--text sep"
                                  data-mode="html"
                                  data-command="removeEnclosing"
                                  title="Remove enclosing tags"
                                  data-key="mod-e mod-r"
                                >
                                  &lt;X>
                                </button>
                                <button
                                  type="button"
                                  class="pb-button pb-button--text"
                                  data-key="mod-e mod-p"
                                  data-command="snippet"
                                  data-params="[[\${_}]]"
                                  title="Insert template variable"
                                >
                                  [[...]]
                                </button>
                              </div>
                            </jinn-codemirror>
                          </div>
                        </div>

                        <div class="parameters">
                          <div class="group">
                            <span class="title">Parameters</span>
                            <pb-icon-button
                              icon="add"
                              @click="${this._addParameter}"
                            ></pb-icon-button>
                          </div>
                          ${se(this.parameters||[],e=>e.name,(e,t)=>o`
                                <pb-odd-parameter-editor
                                  behaviour="${this.behaviour}"
                                  name="${e.name}"
                                  value="${e.value}"
                                  ?set="${e.set}"
                                  endpoint="${this.endpoint}"
                                  apiVersion="${this.apiVersion}"
                                  @parameter-remove="${e=>this._removeParam(e,t)}"
                                  @parameter-changed="${e=>this._updateParam(e,t)}"
                                ></pb-odd-parameter-editor>
                              `)}
                        </div>

                        <div class="renditions">
                          <div class="group">
                            <div>
                              <span class="title">Renditions</span>
                              <pb-icon-button
                                icon="add"
                                @click="${this._addRendition}"
                              ></pb-icon-button>
                            </div>
                            <div class="source">
                              <paper-checkbox ?checked="${this.sourcerend}" id="sourcerend"
                                >Use source rendition</paper-checkbox
                              >
                            </div>
                          </div>

                          ${se(this.renditions||[],e=>e.name,(e,t)=>o`
                                <pb-odd-rendition-editor
                                  scope="${e.scope}"
                                  css="${e.css}"
                                  @remove-rendition="${e=>this._removeRendition(e,t)}"
                                  @rendition-changed="${e=>this._updateRendition(e,t)}"
                                ></pb-odd-rendition-editor>
                              `)}
                        </div>
                      `:""}
            </details>

            <div class="models">
                ${se(this.model&&this.model.models||[],(e,t)=>o`
                    <pb-odd-model-editor
                      behaviour="${e.behaviour||"inline"}"
                      predicate="${e.predicate}"
                      type="${e.type}"
                      output="${e.output}"
                      css="${e.css}"
                      mode="${e.mode}"
                      .model="${e}"
                      .parameters="${e.parameters}"
                      desc="${e.desc}"
                      sourcerend="${e.sourcerend}"
                      .renditions="${e.renditions}"
                      .template="${e.template}"
                      .show="${e.show}"
                      endpoint="${this.endpoint}"
                      apiVersion="${this.apiVersion}"
                      @model-remove="${this._removeModel}"
                      @model-move-down="${this._moveModelDown}"
                      @model-move-up="${this._moveModelUp}"
                      @model-changed="${this.handleModelChanged}"
                      @click="${e=>this.setCurrentSelection(e,t)}"
                      hasParent
                    ></pb-odd-model-editor>
                  `)}

            </div>
        </form>
        <pb-message id="dialog"></pb-message>
        `}firstUpdated(){super.firstUpdated(),this.hasCustomBehaviour=this.behaviours.indexOf(this.behaviour)<0,this.hasCustomBehaviour&&(this.shadowRoot.getElementById("custombehaviour").value=this.behaviour)}updated(e){e.has("show")&&this.show&&this.refreshEditors()}refreshEditors(){if(console.log("refreshEditors"),this._isGroupOrSequence())return console.log("asfdfa");const e=this.shadowRoot.querySelectorAll("pb-odd-model-editor");for(let t=0;t<e.length;t++)e[t].refreshEditors();const t=this.shadowRoot.querySelectorAll("pb-odd-rendition-editor");for(let e=0;e<t.length;e++)t[e].refreshEditor();const i=this.shadowRoot.querySelectorAll("pb-odd-parameter-editor");for(let e=0;e<i.length;e++)i[e].refreshEditor()}toggle(e){this.show=!this.show,this.toggleButtonIcon();const t=this.model,i=Object.assign(Object.assign({},t),{},{show:this.show});this.model=i,this.refreshEditors(),this.dispatchEvent(new CustomEvent("model-changed",{composed:!0,bubbles:!0,detail:{oldModel:t,newModel:i}}))}toggleButtonIcon(){this.show?this.icon="expand-less":this.icon="expand-more"}_isModel(){return"model"===this.type}_isGroupOrSequence(){return"model"!==this.type}static _templateMode(e){return"latex"===e?"latex":"xml"}_changeSelection(e){if(e.detail.target==this)return;e.preventDefault(),e.stopPropagation(),null!=this.currentSelection&&this.currentSelection.removeAttribute("currentselection");const t=e.detail.target;t.setAttribute("currentselection","true"),this.currentSelection=t}_requestRemoval(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("model-remove"))}_moveDown(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("model-move-down",{composed:!0,bubbles:!0,detail:{model:this}}))}_moveUp(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("model-move-up"))}_addNested(e){const t={behaviour:"inline",css:"",desc:"",predicate:"",type:e instanceof Event?e.detail.item.getAttribute("value"):e,output:"",sourcerend:!1,models:[],mode:"",parameters:[],renditions:[],template:"",show:!0},i=this.model,s=Array.from(this.model.models);s.unshift(t),this.model=Object.assign(Object.assign({},i),{},{models:s});this.shadowRoot.querySelector("#modelType").select(""),this.dispatchEvent(new CustomEvent("model-changed",{composed:!0,bubbles:!0,detail:{oldModel:i,newModel:this.model}}))}_handleAddNested(e){const t=e.target.value;t&&(this._addNested(t),e.target.value="")}addModel(e){"model"===e.type?(this.model.models.unshift(e),this.requestUpdate()):console.error("only models can be added to modelSequence or modelGrp")}_removeModel(e){console.log("_removeModel ",e),e.stopPropagation();const{model:t}=e.target,i=this.model.models.indexOf(t);this.shadowRoot.getElementById("dialog").confirm(R("odd.editor.model.delete-model-label"),R("odd.editor.model.delete-model-message")).then(()=>{const e=this.model,t=Array.from(this.model.models);t.splice(i,1),this.model=Object.assign(Object.assign({},e),{},{models:t}),this.models=t,this.dispatchEvent(new CustomEvent("model-changed",{composed:!0,bubbles:!0,detail:{oldModel:e,newModel:this.model}}))},()=>null)}_moveModelDown(e){console.log("MODEL._moveModelDown ",e),e.stopPropagation();const{model:t}=e.target,i=this.model.models.indexOf(t);if(i===this.model.models.length)return;const s=this.model,o=Array.from(this.model.models);o.splice(i,1),o.splice(i+1,0,t),this.model=Object.assign(Object.assign({},s),{},{models:o});const n=this.shadowRoot.querySelectorAll("pb-odd-model-editor")[i+1];this._setCurrentSelection(i+1,n),this.dispatchEvent(new CustomEvent("model-changed",{composed:!0,bubbles:!0,detail:{oldModel:s,newModel:this.model}})),this.requestUpdate()}_moveModelUp(e){e.stopPropagation();const{model:t}=e.target,i=this.model.models.indexOf(t);if(0===i)return;const s=this.model,o=Array.from(this.model.models);o.splice(i,1),o.splice(i-1,0,t),this.model=Object.assign(Object.assign({},s),{},{models:o});const n=this.shadowRoot.querySelectorAll("pb-odd-model-editor")[i-1];this._setCurrentSelection(i-1,n),this.dispatchEvent(new CustomEvent("model-changed",{composed:!0,bubbles:!0,detail:{oldModel:s,newModel:this.model}}))}handleModelChanged(e){console.log("handleModelChanged ",e,this),e.stopPropagation();const t=this.model,i=this.model.models.indexOf(e.detail.oldModel),s=Array.from(this.model.models);s.splice(i,1,e.detail.newModel),this.model=Object.assign(Object.assign({},t),{},{models:s}),this.dispatchEvent(new CustomEvent("model-changed",{composed:!0,bubbles:!0,detail:{oldModel:t,newModel:this.model}}))}setCurrentSelection(e,t){e.preventDefault(),e.stopPropagation(),this._setCurrentSelection(t,e.target)}_setCurrentSelection(e,t){const i=this.shadowRoot.querySelectorAll("pb-odd-model-editor")[e];i&&(i.hasAttribute("currentselection")||(this.dispatchEvent(new CustomEvent("current-changed",{composed:!0,bubbles:!0,detail:{target:t}})),this.requestUpdate()))}_inputDesc(e){this.desc=e.target.value,this._fireModelChanged("desc",this.desc)}_selectOutput(e){this.output=e.target.value,this._fireModelChanged("output",this.output)}_updatePredicate(){this.predicate=this.shadowRoot.getElementById("predicate").value,console.log("_updatePredicate ",this.predicate),this._fireModelChanged("predicate",this.predicate)}_selectBehaviour(e){this.behaviour=e.target.value,this._fireModelChanged("behaviour",this.behaviour)}_inputCss(e){this.css=e.target.value,this._fireModelChanged("css",this.css)}_inputMode(e){this.mode=e.target.value,this._fireModelChanged("mode",this.mode)}_updateTemplate(e){this.template=this.shadowRoot.getElementById("template").content,this._fireModelChanged("template",this.template)}_addParameter(e){this.parameters.push({name:"",value:""}),this._fireModelChanged("parameters",this.parameters)}_updateParam(e,t){this.parameters[t].name=e.detail.name,this.parameters[t].value=e.detail.value,this.parameters[t].set=e.detail.set,this._fireModelChanged("parameters",this.parameters)}_removeParam(e,t){this.parameters.splice(t,1),this._fireModelChanged("parameters",this.parameters)}_addRendition(e){this.renditions.push({scope:"",css:""}),this._fireModelChanged("renditions",this.renditions)}_updateRendition(e,t){this.renditions[t].css=e.detail.css,this.renditions[t].scope=e.detail.scope,this._fireModelChanged("renditions",this.renditions)}_removeRendition(e,t){this.renditions.splice(t,1),this._fireModelChanged("renditions",this.renditions)}_fireModelChanged(e,t){const i=this.model;this.model=Object.assign(Object.assign({},this.model),{},{[e]:t}),console.log("model changed for %s: %o - %o",e,t,this.model),this.dispatchEvent(new CustomEvent("model-changed",{composed:!0,bubbles:!0,detail:{oldModel:i,newModel:this.model}})),this.requestUpdate()}_copy(e){e.preventDefault(),e.stopPropagation(),console.log("odd-model.copy ",e),console.log("odd-model.copy data",this.model),this.dispatchEvent(new CustomEvent("odd-copy",{composed:!0,bubbles:!0,detail:{model:this.model}}))}_paste(e){console.log("model _paste ",e),this.dispatchEvent(new CustomEvent("odd-paste",{composed:!0,bubbles:!0,detail:{target:this}}))}_handleCustomBehaviour(e){this.behaviour=e.composedPath()[0].value,this._fireModelChanged("behaviour",this.behaviour),""===this.behaviour?(this.behaviour="inline",this.hasCustomBehaviour=!1):this.hasCustomBehaviour=!0,this.requestUpdate()}}customElements.define("pb-odd-model-editor",fe);class _e extends s{static get styles(){return i`
      :host {
        display: block;
        padding: 4px 10px;
        height: auto;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: 'Oswald', Verdana, 'Helvetica', sans-serif;
        font-weight: 400 !important;
      }

      input {
        vertical-align: middle;
      }

      .ident {
        display: inline-block;
        font-size: 26px;
        position: relative;
      }
      .mode {
        font-size: 10px;
        display: inline-block;
        text-transform: uppercase;
        border-radius: 12px;
        color: #616161;
        background: var(--paper-grey-300);
        padding: 2px 6px;
        border: thin solid var(--paper-grey-500);
        margin-left: 6px;
        position: absolute;
        top: 8px;
      }

      :host([currentselection]) {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12),
          0 3px 5px -1px rgba(0, 0, 0, 0.4);
      }

      :host([currentSelection]) > h3,
      :host([currentSelection]) > header {
        border-left: thin solid var(--paper-blue-500);
      }

      h3 {
        display: grid;
        grid-template-columns: 260px auto 160px;
        align-items: center;
      }
      h3 .controls {
        text-align: right;
        margin-right: 10px;
      }

      h3 .ident {
        align-self: center;
      }

      .controls__add {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        margin-left: 8px;
      }

      .controls__add select {
        height: 36px;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.16);
        padding: 0.25rem 0.5rem;
        font: inherit;
      }

      /*todo: this does not take effect*/
      details.models {
        --details-transition-duration: 0.4s;
      }

      .models {
        padding: 10px;
      }
    `}static get properties(){return{ident:{type:String},mode:{type:String},models:{type:Array},endpoint:{type:String},apiVersion:{type:String}}}constructor(){super(),this.ident="",this.mode="",this.models=[],this.icon="expand-more"}render(){return o`
      <h3>
        <span class="ident">${this.ident}<span class="mode">mode: ${this.mode}</span></span>
        <span class="spacer"></span>

        <span class="controls">
          <pb-icon-button
            class="icon-button"
            icon="delete"
            title="${this._label("odd.editor.remove","Remove element")}"
            @click="${this._remove}"
          ></pb-icon-button>
          <pb-icon-button
            class="icon-button"
            icon="content-paste"
            title="${this._label("odd.editor.paste","Paste")}"
            @click="${this._paste}"
          ></pb-icon-button>
          <label class="controls__add">
            <span class="sr-only">${this._label("odd.editor.add","Add model")}</span>
            <select id="addModel" @change=${this._handleAddModel}>
              <option value="">${this._label("odd.editor.add","Add model")}</option>
              <option value="model">model</option>
              <option value="modelSequence">modelSequence</option>
              <option value="modelGrp">modelGrp</option>
            </select>
          </label>
        </span>
      </h3>

      <div>
        ${se(this.models||[],(e,t)=>o`
            <pb-odd-model-editor
              behaviour="${e.behaviour||""}"
              predicate="${e.predicate}"
              type="${e.type}"
              output="${e.output}"
              css="${e.css}"
              mode="${e.mode}"
              .model="${e}"
              .parameters="${e.parameters}"
              desc="${e.desc}"
              .sourcerend="${e.sourcerend}"
              .renditions="${e.renditions}"
              .template="${e.template}"
              .show="${e.show}"
              .endpoint="${this.endpoint}"
              .apiVersion="${this.apiVersion}"
              @model-remove="${this._removeModel}"
              @model-move-down="${this._moveModelDown}"
              @model-move-up="${this._moveModelUp}"
              @model-changed="${this.handleModelChanged}"
              @click="${e=>this.setCurrentSelection(e,t)}"
            ></pb-odd-model-editor>
          `)}
      </div>
      <pb-message id="dialog"></pb-message>
    `}addModel(e){this.models.unshift(e),this.requestUpdate()}_addModel(e){console.log("ELEMENTSPEC._addModel ",e);const t=this.shadowRoot.getElementById("addModel"),i={behaviour:"inline",css:"",mode:"",predicate:"",desc:"",type:t.selected,output:"",template:"",sourcerend:!1,models:[],parameters:[],renditions:[],show:!0},s=Array.from(this.models);s.unshift(i),this.models=s,this.dispatchEvent(new CustomEvent("element-spec-changed",{composed:!0,bubbles:!0,detail:{action:"models",ident:this.ident,models:this.models}})),t.selected="",this.requestUpdate()}_remove(e){this.dispatchEvent(new CustomEvent("element-spec-removed",{composed:!0,bubbles:!0,detail:{target:this}}))}_paste(e){console.log("_paste ",e),this.dispatchEvent(new CustomEvent("odd-paste",{composed:!0,bubbles:!0,detail:{target:this}}))}setCurrentSelection(e,t){e.preventDefault(),e.stopPropagation(),this._setCurrentSelection(t,e.target)}_setCurrentSelection(e,t){const i=this.shadowRoot.querySelectorAll("pb-odd-model-editor")[e];i&&(i.hasAttribute("currentselection")||(this.dispatchEvent(new CustomEvent("current-changed",{composed:!0,bubbles:!0,detail:{target:t}})),this.requestUpdate()))}_removeModel(e){console.log("_removeModel ",e),e.stopPropagation();const{model:t}=e.target,i=this.models.indexOf(t);this.shadowRoot.getElementById("dialog").confirm(R("odd.editor.model.delete-model-label"),R("odd.editor.model.delete-model-message")).then(()=>{const e=Array.from(this.models);e.splice(i,1),this.models=e,this.dispatchEvent(new CustomEvent("element-spec-changed",{composed:!0,bubbles:!0,detail:{action:"models",ident:this.ident,models:this.models}}))},()=>null)}_moveModelDown(e){console.log("ELEMENTSPEC._moveModelDown ",e),e.stopPropagation();const{model:t}=e.target,i=this.models.indexOf(t);if(i===this.models.length)return;const s=Array.from(this.models);s.splice(i,1),s.splice(i+1,0,t),this.models=s;const o=this.shadowRoot.querySelectorAll("pb-odd-model-editor")[i+1];o&&(this._setCurrentSelection(i+1,o),this.dispatchEvent(new CustomEvent("element-spec-changed",{composed:!0,bubbles:!0,detail:{action:"models",ident:this.ident,models:this.models}})))}_moveModelUp(e){e.stopPropagation();const{model:t}=e.target,i=this.models.indexOf(t);if(0===i)return;const s=Array.from(this.models);s.splice(i,1),s.splice(i-1,0,t),this.models=s;const o=this.shadowRoot.querySelectorAll("pb-odd-model-editor")[i-1];this._setCurrentSelection(i-1,o),this.dispatchEvent(new CustomEvent("element-spec-changed",{composed:!0,bubbles:!0,detail:{action:"models",ident:this.ident,models:this.models}}))}_label(e,t){const i=A(e);return i&&i!==e?i:t}handleModelChanged(e){e.stopPropagation();const t=this.models.indexOf(e.detail.oldModel),i=Array.from(this.models);i.splice(t,1,e.detail.newModel),this.models=i,this.dispatchEvent(new CustomEvent("element-spec-changed",{composed:!0,bubbles:!0,detail:{action:"models",ident:this.ident,models:this.models}})),this.requestUpdate()}}customElements.define("pb-odd-elementspec-editor",_e);class ye extends(k(r(s))){static get styles(){return i`
      :host {
        display: flex;
        /*margin: 30px 20px;*/
        margin: 0;
        padding: 0;
        height: auto;
      }

      #layout {
        width: 100%;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr;
      }

      #drawer {
        grid-column: 1 / 1;
        min-width: 320px;
      }

      #navlist {
        grid-column: 1 / 1;
        grid-row: 2 / 2;
        overflow: auto;
        height: 100%;
      }

      .nav-item {
        display: block;
        width: 100%;
        padding: 8px 16px;
        border: none;
        background: transparent;
        text-align: left;
        font: inherit;
        color: inherit;
        cursor: pointer;
        transition: background-color 120ms ease;
      }

      .nav-item:hover,
      .nav-item:focus-visible {
        background: rgba(33, 150, 243, 0.12);
        outline: none;
      }

      .nav-item--active {
        background: rgba(33, 150, 243, 0.2);
        font-weight: 600;
      }

      .specs {
        grid-column: 2 / 2;
        grid-row: 1 / span 2;
        overflow: auto;
      }

      section {
        padding: 20px;
      }

      h3,
      h4 {
        font-family: var(--pb-heading-font-family);
        font-weight: var(--pb-heading-font-weight);
        line-height: var(--pb-heading-line-height);
      }

      /* ported over but not checked yet */

      .specs {
        padding: 6px;
      }

      .metadata-card {
        display: block;
        margin-bottom: 16px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        border-radius: 12px;
        background: #fff;
        overflow: hidden;
      }

      .metadata-card div {
        padding: 0 16px 16px;
      }

      .pb-field {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        margin-bottom: 10px;
      }

      .pb-field__label {
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: rgba(0, 0, 0, 0.6);
      }

      .pb-input {
        width: 100%;
        height: var(--pb-input-height, 48px);
        padding: 0.5rem 0.75rem;
        border: 1px solid rgba(0, 0, 0, 0.16);
        border-radius: 8px;
        font: inherit;
        color: inherit;
        background: #fff;
        transition: border-color 120ms ease, box-shadow 120ms ease;
      }

      .pb-input::placeholder {
        color: rgba(0, 0, 0, 0.4);
      }

      .pb-input:focus {
        outline: none;
        border-color: #1976d2;
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.16);
      }

      .pb-checkbox {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 10px 0;
        font-size: 0.95rem;
      }

      .pb-checkbox input {
        width: 16px;
        height: 16px;
      }

      .pb-input-with-button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .pb-input-with-button pb-icon-button {
        margin: 0;
      }

      .metadata-card .extCssEdit {
        display: flex;
        align-items: center;
        padding: 0;
      }
      .metadata-card .extCssEdit .pb-input {
        flex: 2;
      }
      .metadata-card .extCssEdit pb-edit-xml {
        width: 40px;
      }

      #jump-to {
        margin-top: 1em;
      }

      odd-model {
        border-bottom: 1px solid #e0e0e0;
      }
      odd-model h4 {
        margin-top: 15px;
        padding-top: 5px;
        border-top: 1px solid #e0e0e0;
      }
      .renditions {
        margin-top: 10px;
      }
      .icons {
        display: inline-block;
        white-space: nowrap;
      }

      details {
        --details-transition-duration: 0.8s;
      }
      details[open] {
        padding: 0;
      }

      pb-message#errorMsg {
        background: var(--paper-red-500);
        color: white;
      }
      .card-content {
        height: 100%;
        overflow: auto;
      }

      .pb-tab {
        width: 100px;
      }

      .editingView {
        width: 100%;
      }

      vaadin-tabs {
        margin-top: 10px;
      }

      vaadin-tab {
        background: var(--paper-grey-200);
        padding: 0 6px;
        border: thin solid var(--paper-grey-300);
        border-bottom: none;
      }
      vaadin-tab[selected] {
        background: white;
        border-top-right-radius: 20px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
          0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }
    `}static get properties(){return Object.assign(Object.assign({},super.properties),{},{ident:{type:String},mode:{type:String},models:{type:Array},odd:{type:String,reflect:!0},elementSpecs:{type:Array},source:{type:String},title:{type:String},titleShort:{type:String,reflect:!0,attribute:"title-short"},description:{type:String},namespace:{type:String},rootPath:{type:String,attribute:"root-path"},loading:{type:Boolean},indentString:{type:String},outputPrefix:{type:String,attribute:"output-prefix"},outputRoot:{type:String,attribute:"output-root"},currentSelection:{type:Object},useNamespace:{type:Boolean},loggedIn:{type:Boolean},tabs:{type:Array},tabIndex:{type:Number,reflect:!0}})}constructor(){super(),this.ident="",this.mode="",this.models=()=>[],this.odd="",this.elementSpecs=[],this.source="",this.title="",this.titleShort="",this.description="",this.namespace="",this.rootPath="",this.loading=!1,this.indentString="    ",this.outputPrefix="",this.outputRoot="",this.currentSelection={},this.useNamespace=!1,this.loggedIn=!0,this._tabs=[],this.tabIndex=void 0,this.selectedNavIndex=0,this.cssFile="",this.hotkeys={save:"ctrl+shift+s,command+shift+s"},this._hasChanges=!1}get tabs(){return this._tabs||(this._tabs=[]),this._tabs}set tabs(e){this._tabs=Array.isArray(e)?e:[]}get safeTabs(){const e=this._tabs||[];return Array.isArray(e)?e:[]}render(){return o`
      <pb-fetch
        id="loadContent"
        handle-as="json"
        content-type="application/x-www-form-urlencoded"
        with-credentials
        method="GET"
      ></pb-fetch>

      <pb-fetch id="saveOdd" handle-as="json" with-credentials></pb-fetch>

      <div id="layout">
        <div id="drawer">
          <slot id="slot"></slot>
          <h3>
            <span>${this.odd}</span>

            <span class="icons">
              <pb-edit-xml id="editSource"
                ><pb-icon-button
                  icon="code"
                  title="${A("odd.editor.odd-source")}"
                ></pb-icon-button
              ></pb-edit-xml>
              <pb-icon-button
                @click="${()=>this.save(!0)}"
                icon="icons:cloud-download"
                title="${A(I?"odd.editor.save-as":"odd.editor.download")}"
              ></pb-icon-button>
              <pb-icon-button
                @click="${this._reload}"
                icon="refresh"
                title="${A("odd.editor.reload")}"
              ></pb-icon-button>
              <pb-icon-button
                @click="${()=>this.save(!1)}"
                icon="save"
                title="${A("odd.editor.save")} ${this.display("save")}"
                ?disabled="${!this.loggedIn}"
              ></pb-icon-button>
            </span>
          </h3>
          <div id="new-element" class="input-group">
            <label class="pb-field">
              <span class="pb-field__label">${A("odd.editor.add-element")}</span>
              <div class="pb-input-with-button">
                <input
                  id="identNew"
                  class="pb-input"
                  name="ident-new"
                  placeholder="${A("odd.editor.add-element")}"
                />
                <pb-icon-button
                  @click="${this.addElementSpec}"
                  icon="add"
                  tabindex="-1"
                ></pb-icon-button>
              </div>
            </label>
          </div>

          <div id="jump-to">
            <pb-autocomplete
              id="jumpTo"
              placeholder="${A("odd.editor.jump-to")}"
            ></pb-autocomplete>
          </div>

          <h3>${A("odd.editor.specs")}</h3>
        </div>
        <div id="navlist">
          ${se(this.elementSpecs||[],e=>e.ident,(e,t)=>o`
                <button
                  id="es_${e.ident}"
                  type="button"
                  class="nav-item ${this.selectedNavIndex===t?"nav-item--active":""}"
                  @click="${e=>this._openElementSpec(e,t)}"
                >
                  ${e.ident}
                </button>
              `)}
        </div>
        <section class="specs" id="specs">
          <div class="metadata-card">
            <pb-collapse id="meta">
              <h4 slot="collapse-trigger" class="panel-title">${this._computedTitle()}</h4>
              <div slot="collapse-content">
                <label class="pb-field">
                  <span class="pb-field__label">${A("odd.editor.title")}</span>
                  <input
                    id="title"
                    class="pb-input"
                    name="title"
                    .value=${this.title||""}
                    placeholder="[${A("odd.editor.title-placeholder")}]"
                    @change=${this._inputTitle}
                  />
                </label>
                <label class="pb-field">
                  <span class="pb-field__label">${A("odd.editor.title-short")}</span>
                  <input
                    id="titleShort"
                    class="pb-input"
                    name="short-title"
                    .value=${this.titleShort||""}
                    placeholder="[${A("odd.editor.title-short-placeholder")}]"
                    @change=${e=>this.titleShort=e.target.value}
                  />
                </label>
                <label class="pb-field">
                  <span class="pb-field__label">${A("odd.editor.description-label")}</span>
                  <input
                    id="description"
                    class="pb-input"
                    name="description"
                    .value=${this.description||""}
                    placeholder="[${A("odd.editor.description-placeholder")}]"
                    @change=${e=>this.description=e.target.value}
                  />
                </label>
                <label class="pb-field">
                  <span class="pb-field__label">${A("odd.editor.source-label")}</span>
                  <input
                    id="source"
                    class="pb-input"
                    name="source"
                    .value=${this.source||""}
                    placeholder="[${A("odd.editor.source-placeholder")}]"
                    @change=${e=>this.source=e.target.value}
                  />
                </label>
                <label class="pb-checkbox">
                  <input
                    id="useNamespace"
                    type="checkbox"
                    ?checked=${this.useNamespace}
                    @change=${this.setUseNamespace}
                  />
                  <span>${A("odd.editor.use-namespace")}</span>
                </label>
                <label class="pb-field">
                  <span class="pb-field__label">Namespace</span>
                  <input
                    id="namespace"
                    class="pb-input"
                    name="namespace"
                    .value=${this.namespace||""}
                    ?disabled=${!this.useNamespace}
                    placeholder="[${A("odd.editor.namespace-placeholder")}]"
                    @change=${e=>this.namespace=e.target.value}
                  />
                </label>
                <div class="extCssEdit">
                  <input
                    name="cssFile"
                    class="pb-input"
                    .value=${this.cssFile||""}
                    placeholder="[External CSS file with additional class definitions]"
                    @change=${this._cssFileChanged}
                  />
                  <pb-edit-xml id="editCSS"
                    ><pb-icon-button
                      icon="create"
                      title="${A("odd.editor.css-source")}"
                    ></pb-icon-button
                  ></pb-edit-xml>
                </div>
              </div>
            </pb-collapse>
          </div>

          <!-- todo: import elementspec to make it function  -->

          <div class="editingView">
            <vaadin-tabs id="tabs" selected="${this.tabIndex||0}">
              ${se(this.tabs||[],e=>e,(e,t)=>o`
                    <vaadin-tab name="${e}" @click="${t=>this._selectTab(t,e)}"
                      ><span style="padding-right:20px;">${e}</span
                      ><pb-icon-button
                        icon="close"
                        @click="${e=>this._closeTabHandler(e,t)}"
                      ></pb-icon-button
                    ></vaadin-tab>
                  `)}
            </vaadin-tabs>

            <div id="currentElement"></div>
          </div>
        </section>
      </div>

      <pb-message id="dialog" hidden></pb-message>
      <pb-message id="errorMsg"></pb-message>
    `}firstUpdated(e){this.shadowRoot.getElementById("useNamespace").checked=this.useNamespace,this.jumpCtrl=this.shadowRoot.getElementById("jumpTo"),this.jumpCtrl.addEventListener("pb-autocomplete-selected",this.jumpTo.bind(this));const t=this.querySelector("odd-selector");this.odd&&t&&(t.selected=this.odd,t.addEventListener("odd-selected",e=>{confirm("Any unsaved changes will be lost. Continue?")&&(this.odd=e.detail.odd,window.history.pushState({},"",`?odd=${this.odd}`)),t.selected=this.odd})),this.addEventListener("current-changed",this._changeSelection),this.addEventListener("odd-copy",e=>this._copy(e)),this.addEventListener("odd-paste",e=>this._paste(e)),this.addEventListener("element-spec-removed",this.removeElementSpec.bind(this)),window.addEventListener("beforeunload",()=>"Any unsaved changes will be lost. Continue?"),this.subscribeTo("pb-login",e=>{this.loggedIn=null!=e.detail.user}),this.focus(),this.loadContent=this.shadowRoot.getElementById("loadContent"),this.rootPath=this.getAttribute("root-path"),d("pb-page-ready",()=>{this.load(),this.inited=!0}),this.registerHotkey("save",()=>this.save(!1))}setUseNamespace(){this.useNamespace=this.shadowRoot.getElementById("useNamespace").checked}async load(){if(this.loading)return;if(this.loading=!0,""===this.rootPath||""===this.odd)return;this.elementSpecs=[],this._tabs=[],this.tabIndex=0,document.dispatchEvent(new CustomEvent("pb-start-update"));this.shadowRoot.getElementById("editSource").setPath(`${this.rootPath}/${this.odd}`);const e={odd:this.odd,root:this.rootPath};this.loadContent.params=e,this.loadContent.url=`${this.getEndpoint()}/${this.lessThanApiVersion("1.0.0")?"modules/editor.xql":`api/odd/${this.odd}`}`,this.loadContent.headers={Accept:"application/json"};const t=this.loadContent.generateRequest();if(this._hasChanges=!1,!t)return console.warn("pb-odd-editor: Failed to generate request - invalid URL"),this.loading=!1,void document.dispatchEvent(new CustomEvent("pb-end-update"));t.then(e=>this.handleOdd({response:e})).catch(e=>{console.warn("pb-odd-editor: Failed to load ODD data:",e),this.loading=!1,document.dispatchEvent(new CustomEvent("pb-end-update"))})}handleOdd(e){const t=e.response;if(t){if(this.loggedIn=t.canWrite,this.source=t.source,this.title=t.title,this.titleShort=t.titleShort,this.description=t.description,this.cssFile=null==t.cssFile?"":t.cssFile,this.namespace=null!=t.namespace?t.namespace:"",this.useNamespace=null!=t.namespace,this.cssFile){this.shadowRoot.getElementById("editCSS").setPath(`${this.rootPath}/${this.cssFile}`)}t.elementSpecs&&Array.isArray(t.elementSpecs)?this.elementSpecs=t.elementSpecs.map(e=>this.mapElementSpec(e)):(console.warn("pb-odd-editor: elementSpecs data is missing or invalid"),this.elementSpecs=[]),this._updateAutoComplete(),this.requestUpdate(),this.loading=!1,document.dispatchEvent(new CustomEvent("pb-end-update")),document.title=this.titleShort||this.title}else console.warn("pb-odd-editor: Failed to load ODD data")}_updateAutoComplete(){this.shadowRoot.getElementById("jumpTo").suggestions=this.elementSpecs.map(this._specMapper)}_cssFileChanged(e){if(this.cssFile=e.target.value,this.cssFile){this.shadowRoot.getElementById("editCSS").setPath(`${this.rootPath}/${this.cssFile}`)}}_navlistActiveChanged(e,t){this.selectedNavIndex=t,this.requestUpdate()}_returnTabs(){return this.tabs}_selectTab(e,t){const i=this.elementSpecs.find(e=>e.ident===t);this._updateElementspec(i)}_openElementSpec(e,t){console.log("_openElementSpec ",e,t);const i=this.elementSpecs[t];this._updateElementspec(i),this.selectedNavIndex=t,this.requestUpdate();const{ident:s}=i;if(this.tabs.indexOf(s)>=0)return this.tabIndex=this.tabs.indexOf(s),void this.requestUpdate();this.tabs.push(s),this.tabIndex=this.tabs.length-1,this.requestUpdate()}_updateElementspec(e){const t=this.shadowRoot.getElementById("currentElement");t.innerHTML="";const i=new _e;i.addEventListener("element-spec-changed",this.handleElementSpecChanged.bind(this)),i.ident=e.ident,i.models=e.models,i.mode=e.mode,i.endpoint=this._endpoint,i.apiVersion=this._apiVersion,i.hotkeys=this.hotkeys,t.appendChild(i)}_closeTabHandler(e,t){return console.log("_closeTabHandler ",t),e.preventDefault(),e.stopPropagation(),this._closeTab(t),!1}_closeTab(e){const t=[...this.tabs];if(t.splice(e,1),0===t.length)this.shadowRoot.getElementById("currentElement").innerHTML="",this.tabIndex=0,this.tabs=[];else if(this.tabIndex>0&&this.tabIndex>=e){this.tabIndex-=1,this.tabs=t;const e=this.tabs[this.tabIndex];this._selectTab(null,e)}else this.tabs=t}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"odd"==e&&t!==i&&this.inited&&this.load()}static get replaceCharMap(){return{'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"}}static get replaceCharRegexp(){return/"|&|<|>/g}static replaceChars(e){return ye.replaceCharMap[e]}jumpTo(e){var t,i,s;const o=((null==e||null===(t=e.detail)||void 0===t?void 0:t.value)||(null==e||null===(i=e.detail)||void 0===i?void 0:i.text)||(null===(s=this.jumpCtrl)||void 0===s?void 0:s.value)||"").trim();if(!o)return;const n=this.shadowRoot.querySelector(`#es_${o}`);n&&(this.jumpCtrl&&(this.jumpCtrl.value=""),n.click())}_computedTitle(){return this.odd?this.title||this.titleShort||this.odd||"Loading ...":""}_copy(e){this.clipboard=e.detail.model;const t=JSON.parse(JSON.stringify(e.detail.model));this.clipboard=t}_paste(e){if(console.log("_paste ",e),console.log("_paste clipboard",this.clipboard),this.clipboard=={}||null==this.clipboard)return;const t=e.detail.target;t.addModel(this.clipboard),t.render()}_specMapper(e){return{text:e.ident,value:e.ident}}_specObserver(e){const t=this.elementSpecs.map(this._specMapper);this.jumpCtrl.suggestions=t}mapElementSpec(e){return Object.assign(Object.assign({},e),{},{models:e.models.map(e=>this.addShowToModel(e))})}addShowToModel(e){if(e.models){const t=e.models.map(e=>this.addShowToModel(e));return Object.assign(Object.assign({},e),{},{models:t,show:!1})}return Object.assign(Object.assign({},e),{},{show:!1})}addElementSpec(e){const t=this.shadowRoot.getElementById("identNew").value;if(!t||0===t.length)return;if(this.elementSpecs.find(e=>e.ident===t)){console.log("<pb-odd-editor> element spec to be added already exists: %s",t);const e=`#es_${t}`,i=this.shadowRoot.querySelector(e);if(!i)return;return void i.click()}const i={action:"find",odd:this.odd,root:this.rootPath,ident:t},s={root:this.rootPath,ident:t},o=this.lessThanApiVersion("1.0.0")?i:s;this.loadContent.params=o,this.loadContent.url=`${this.getEndpoint()}/${this.lessThanApiVersion("1.0.0")?"modules/editor.xql":`api/odd/${this.odd}`}`;this.loadContent.generateRequest().then(e=>this._handleElementSpecResponse({response:e}))}_handleElementSpecResponse(e){const t=this.shadowRoot.getElementById("identNew"),i=e.response,s=t.value,o={ident:s,mode:"not-found"===i.status?"add":"change",models:i.models||[]};this.elementSpecs.unshift(o),t.value="",this.tabs.push(s),this.tabIndex=this.tabs.length-1,this.elementSpecs.sort((e,t)=>e.ident.localeCompare(t.ident)),this.requestUpdate().then(()=>{const e=this.shadowRoot.querySelectorAll(".nav-item"),t=this.elementSpecs.indexOf(o);this._updateAutoComplete(),e[t].click(),e[t].focus()})}removeElementSpec(e){const{ident:t}=e.detail.target;this.shadowRoot.getElementById("dialog").confirm(R("browse.delete"),R("odd.editor.delete-spec",{ident:t})).then(()=>{const e=this.elementSpecs.findIndex(e=>e.ident===t);this.elementSpecs.splice(e,1),this.requestUpdate();const i=this.shadowRoot.querySelector("vaadin-tab[selected]").getAttribute("name"),s=this.tabs.indexOf(i);this._closeTab(s)},()=>null)}serializeOdd(){const e=this.useNamespace?` ns="${this.namespace}"`:"",t=this.source?` source="${this.source}"`:"",i=this.description?` <desc>${this.description}</desc>`:"",s=`${this.indentString}<title>${this.title}${i}</title>\n`,o=this.titleShort?`${this.indentString}<title type="short">${this.titleShort}</title>\n`:"",n=this.cssFile?`${this.indentString}<rendition source="${this.cssFile}"/>\n`:"",a=this.elementSpecs.map(e=>this.serializeElementSpec(this.indentString,e)).join("");return`<schemaSpec xmlns="http://www.tei-c.org/ns/1.0" xmlns:pb="http://teipublisher.com/1.0"${e}${t}>\n${s}${o}${n}\n${a}</schemaSpec>\n`}serializeElementSpec(e,t){const i=t.mode?` mode="${t.mode}"`:"",s=e+this.indentString,o=t.models.map(e=>this.serializeModel(s,e)).join("");return`${e}<elementSpec ident="${t.ident}"${i}>\n${o}${e}</elementSpec>\n`}serializeModel(e,t){if("model"===t.type&&!t.behaviour)return"";const i=e+this.indentString,s=[this.serializeAttribute("output",t.output),this.serializeAttribute("predicate",t.predicate),"model"===t.type?this.serializeAttribute("behaviour",t.behaviour):"",this.serializeAttribute("cssClass",t.css),this.serializeAttribute("useSourceRendition",t.sourcerend),this.serializeAttribute("pb:mode",t.mode)].join(""),o=t.desc?`${i}<desc>${t.desc}</desc>\n`:"",n=t.models.map(e=>this.serializeModel(i,e)).join(""),a=t.parameters.map(e=>this.serializeParameter(i,e)).join(""),r=t.renditions.map(e=>this.serializeRendition(i,e)).join(""),d=`${o}${n}${a}${ye.serializeTemplate(i,t.template)}${r}`,l=d.length>0?`>\n${d}${e}</${t.type}`:"/";return`${e}<${t.type}${s}${l}>\n`}serializeParameter(e,t){if(!t.name)return"";const i=this.serializeAttribute("name",t.name),s=this.serializeAttribute("value",t.value);return t.set?`${e}<pb:set-param xmlns=""${i}${s}/>\n`:`${e}<param${i}${s}/>\n`}serializeRendition(e,t){return`${e}<outputRendition xml:space="preserve" ${t.scope&&"null"!==t.scope?this.serializeAttribute("scope",t.scope):""}>\n${e}${ye.escape(t.css)}\n${e}</outputRendition>\n`}static serializeTemplate(e,t){return t?`${e}<pb:template xml:space="preserve" xmlns="">${t}</pb:template>\n`:""}serializeAttribute(e,t){return t?` ${e}="${ye.escape(t)}"`:""}static escape(e){return e?"string"==typeof e?e.replace(ye.replaceCharRegexp,ye.replaceChars):e:""}save(e=!1){document.dispatchEvent(new CustomEvent("pb-start-update"));const t=this.serializeOdd();this.shadowRoot.getElementById("dialog").show(R("odd.editor.save"),R("odd.editor.saving"));const i=this.shadowRoot.getElementById("saveOdd");i.url=`${this.getEndpoint()}/${this.lessThanApiVersion("1.0.0")?"modules/editor.xql":`api/odd/${this.odd}`}`,this.lessThanApiVersion("1.0.0")?(i.contentType="application/x-www-form-urlencoded",i.method="POST",i.params=null,i.body={action:"save",root:this.rootPath,"output-prefix":this.outputPrefix,"output-root":this.outputRoot,odd:this.odd,data:t}):(i.contentType="application/xml",i.method="PUT",i.params={root:this.rootPath,"output-prefix":this.outputPrefix,"output-root":this.outputRoot},i.body=t);i.generateRequest().then(t=>{this.handleSaveComplete({response:t},e)}).catch(this.handleSaveError.bind(this))}static _renderReport(e){return e.error?`\n                        <div class="list-group-item-danger">\n                          <h4 class="list-group-item-heading">${e.file}</h4>\n                          <h5 class="list-group-item-heading">Compilation error on line ${e.line}:</h5>\n                          <pre class="list-group-item-text">${e.error}</pre>\n                          <pre class="list-group-item-text">${e.message}</pre>\n                        </div>\n                    `:`\n                    <div class="list-group-item-success">\n                      <p class="list-group-item-text">Generated ${e.file}</p>\n                    </div>\n                `}handleSaveComplete(e,t=!1){const i=e.response;if("denied"===i.status)return this.shadowRoot.getElementById("dialog").set(R("odd.editor.denied"),R("odd.editor.denied-message",{odd:this.odd})),void document.dispatchEvent(new CustomEvent("pb-end-update"));let s;if(this.lessThanApiVersion("1.0.0")){s=`<div class="list-group">${i.report.map(ye._renderReport).join("")}</div>`}else{const{report:e}=i;s=`<div class="list-group">${e}</div>`}if(this.shadowRoot.getElementById("dialog").set(R("odd.editor.saved"),s),this._hasChanges=!1,document.dispatchEvent(new CustomEvent("pb-end-update")),t){M(new Blob([i.source],{type:"application/xml"}),{fileName:this.odd,extensions:[".odd"]}).then(()=>console.log(`<pb-odd-editor> ${this.odd} exported`),()=>console.log("<pb-odd-editor> export aborted"))}}handleSaveError(e){this.shadowRoot.getElementById("dialog").set("Error",e.error),document.dispatchEvent(new CustomEvent("pb-end-update"))}_reload(){this.shadowRoot.getElementById("dialog").confirm(R("odd.editor.reload"),R("odd.editor.reload-confirm")).then(()=>{this.load(),this.tabs=[],this.tabIndex=0,this.shadowRoot.getElementById("currentElement").innerHTML=""},()=>null)}_setCurrentSelection(e){null!=this.currentSelection&&this.currentSelection.removeAttribute("currentselection"),this.currentSelection=e.target,this.currentSelection.setAttribute("currentselection","true")}_changeSelection(e){if(e.preventDefault(),e.stopPropagation(),e.detail.target===this)return;let t;this.currentSelection&&void 0!==this.currentSelection.tagName&&this.currentSelection.removeAttribute("currentselection"),t=e.detail.target?e.detail.target:e.target,t.setAttribute("currentselection","true"),this.currentSelection=t}_selectElementspec(e){this.currentElementSpec&&"PB-ODD-ELEMENTSPEC-EDITOR"===this.currentElementSpec.tagName&&this.currentElementSpec.removeAttribute("currentselection");const t=e.target;t.setAttribute("currentselection","true"),this.currentElementSpec=t}nsDisabled(){return!this.useNamespace}_handleLoadError(e){console.log("loading error occurred: ",e);const t=this.shadowRoot.getElementById("errorMsg");t.style.background="red";const{url:i}=this.shadowRoot.getElementById("loadContent");console.log("url ",i),t.show("Error: ",`ODD file could not be loaded from ${i}`)}handleElementSpecChanged(e){this._hasChanges=!0;const t=this.elementSpecs.find(t=>t.ident===e.detail.ident),i=this.elementSpecs.indexOf(t),s=Object.assign(Object.assign({},t),{},{models:e.detail.models}),o=Array.from(this.elementSpecs);o.splice(i,1,s),this.elementSpecs=o}_inputTitle(e){this.title=e.target.value}}customElements.define("pb-odd-editor",ye);export{ye as PbOddEditor};
