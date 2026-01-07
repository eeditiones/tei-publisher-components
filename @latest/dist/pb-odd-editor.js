import{Z as e,T as t,a as o,i,x as s,c as n,E as a,p as r,w as l}from"./pb-mixin-DHoWQheB.js";import{e as d,i as c,t as p}from"./unsafe-html-D5VGo9Oq.js";import{r as h,i as m,A as u,F as b,E as g,T as v,C as f,P as y,h as _,a as w,d as x,K as $,n as E,q as S,v as k,j as C,x as A,y as R,p as I}from"./focus-mixin-Cbj-rGrR.js";import"./jinn-codemirror-DETLdm08.js";import{t as M,g as P}from"./pb-i18n-C0NDma4h.js";import"./pb-dialog-tklYGWfc.js";const O=(()=>{if("undefined"==typeof self)return!1;if("top"in self&&self!==top)try{top.window.document._=0}catch(e){return!1}return"showOpenFilePicker"in self})();O?Promise.resolve().then(function(){return q}):Promise.resolve().then(function(){return H}),O?Promise.resolve().then(function(){return U}):Promise.resolve().then(function(){return G});const z=O?Promise.resolve().then(function(){return V}):Promise.resolve().then(function(){return J});async function T(...e){return(await z).default(...e)}const j=async e=>{const t=await e.getFile();return t.handle=e,t};var B=async(e=[{}])=>{Array.isArray(e)||(e=[e]);const t=[];e.forEach((e,o)=>{t[o]={description:e.description||"Files",accept:{}},e.mimeTypes?e.mimeTypes.map(i=>{t[o].accept[i]=e.extensions||[]}):t[o].accept["*/*"]=e.extensions||[]});const o=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),i=await Promise.all(o.map(j));return e[0].multiple?i:i[0]},q={__proto__:null,default:B};function N(e){function t(e){if(Object(e)!==e)return Promise.reject(new TypeError(e+" is not an object."));var t=e.done;return Promise.resolve(e.value).then(function(e){return{value:e,done:t}})}return N=function(e){this.s=e,this.n=e.next},N.prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var o=this.s.return;return void 0===o?Promise.resolve({value:e,done:!0}):t(o.apply(this.s,arguments))},throw:function(e){var o=this.s.return;return void 0===o?Promise.reject(e):t(o.apply(this.s,arguments))}},new N(e)}const L=async(e,t,o=e.name,i)=>{const s=[],n=[];var a,r=!1,l=!1;try{for(var d,c=function(e){var t,o,i,s=2;for("undefined"!=typeof Symbol&&(o=Symbol.asyncIterator,i=Symbol.iterator);s--;){if(o&&null!=(t=e[o]))return t.call(e);if(i&&null!=(t=e[i]))return new N(t.call(e));o="@@asyncIterator",i="@@iterator"}throw new TypeError("Object is not async iterable")}(e.values());r=!(d=await c.next()).done;r=!1){const a=d.value,r=`${o}/${a.name}`;"file"===a.kind?n.push(a.getFile().then(t=>(t.directoryHandle=e,t.handle=a,Object.defineProperty(t,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>r})))):"directory"!==a.kind||!t||i&&i(a)||s.push(L(a,t,r,i))}}catch(e){l=!0,a=e}finally{try{r&&null!=c.return&&await c.return()}finally{if(l)throw a}}return[...(await Promise.all(s)).flat(),...await Promise.all(n)]};var D=async(e={})=>{e.recursive=e.recursive||!1,e.mode=e.mode||"read";const t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return(await(await t.values()).next()).done?[t]:L(t,e.recursive,void 0,e.skipDirectory)},U={__proto__:null,default:D},F=async(e,t=[{}],o=null,i=!1,s=null)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";const n=[];let a=null;if(e instanceof Blob&&e.type?a=e.type:e.headers&&e.headers.get("content-type")&&(a=e.headers.get("content-type")),t.forEach((e,t)=>{n[t]={description:e.description||"Files",accept:{}},e.mimeTypes?(0===t&&a&&e.mimeTypes.push(a),e.mimeTypes.map(o=>{n[t].accept[o]=e.extensions||[]})):a?n[t].accept[a]=e.extensions||[]:n[t].accept["*/*"]=e.extensions||[]}),o)try{await o.getFile()}catch(e){if(o=null,i)throw e}const r=o||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:n,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1});!o&&s&&s(r);const l=await r.createWritable();if("stream"in e){const t=e.stream();return await t.pipeTo(l),r}return"body"in e?(await e.body.pipeTo(l),r):(await l.write(await e),await l.close(),r)},V={__proto__:null,default:F},K=async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((t,o)=>{const i=document.createElement("input");i.type="file";const s=[...e.map(e=>e.mimeTypes||[]),...e.map(e=>e.extensions||[])].join();i.multiple=e[0].multiple||!1,i.accept=s||"",i.style.display="none",document.body.append(i),i.addEventListener("cancel",()=>{i.remove(),o(new DOMException("The user aborted a request.","AbortError"))}),i.addEventListener("change",()=>{i.remove(),t(i.multiple?Array.from(i.files):i.files[0])}),"showPicker"in HTMLInputElement.prototype?i.showPicker():i.click()})),H={__proto__:null,default:K},W=async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((t,o)=>{const i=document.createElement("input");i.type="file",i.webkitdirectory=!0,i.style.display="none",document.body.append(i),i.addEventListener("cancel",()=>{i.remove(),o(new DOMException("The user aborted a request.","AbortError"))}),i.addEventListener("change",()=>{i.remove();let o=Array.from(i.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(o=o.filter(t=>t.webkitRelativePath.split("/").every(t=>!e[0].skipDirectory({name:t,kind:"directory"})))):o=o.filter(e=>2===e.webkitRelativePath.split("/").length),t(o)}),"showPicker"in HTMLInputElement.prototype?i.showPicker():i.click()})),G={__proto__:null,default:W},X=async(e,t={})=>{Array.isArray(t)&&(t=t[0]);const o=document.createElement("a");let i=e;"body"in e&&(i=await async function(e,t){const o=e.getReader(),i=new ReadableStream({start:e=>async function t(){return o.read().then(({done:o,value:i})=>{if(!o)return e.enqueue(i),t();e.close()})}()}),s=new Response(i),n=await s.blob();return o.releaseLock(),new Blob([n],{type:t})}(e.body,e.headers.get("content-type"))),o.download=t.fileName||"Untitled",o.href=URL.createObjectURL(await i);const s=()=>{"function"==typeof n&&n()},n=t.legacySetup&&t.legacySetup(s,()=>n(),o);return o.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(o.href),3e4),s()}),o.click(),null},J={__proto__:null,default:X};const{I:Y}=e,Q=()=>document.createComment(""),Z=(e,t,o)=>{const i=e._$AA.parentNode,s=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=i.insertBefore(Q(),s),n=i.insertBefore(Q(),s);o=new Y(t,n,e,e.options)}else{const t=o._$AB.nextSibling,r=o._$AM,l=r!==e;if(l){var n,a;let t;null!==(n=(a=o)._$AQ)&&void 0!==n&&n.call(a,e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==r._$AU&&o._$AP(t)}if(t!==s||l){let e=o._$AA;for(;e!==t;){const t=e.nextSibling;i.insertBefore(e,s),e=t}}}return o},ee=(e,t,o=e)=>(e._$AI(t,o),e),te={},oe=(e,t=te)=>e._$AH=t,ie=e=>e._$AH,se=e=>{e._$AR(),e._$AA.remove()},ne=(e,t,o)=>{const i=new Map;for(let s=t;s<=o;s++)i.set(e[s],s);return i},ae=d(class extends c{constructor(e){if(super(e),e.type!==p.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let i;void 0===o?o=t:void 0!==t&&(i=t);const s=[],n=[];let a=0;for(const t of e)s[a]=i?i(t,a):a,n[a]=o(t,a),a++;return{values:n,keys:s}}render(e,t,o){return this.dt(e,t,o).values}update(e,[o,i,s]){const n=ie(e),{values:a,keys:r}=this.dt(o,i,s);if(!Array.isArray(n))return this.ut=r,a;const l=this.ut??=[],d=[];let c,p,h=0,m=n.length-1,u=0,b=a.length-1;for(;h<=m&&u<=b;)if(null===n[h])h++;else if(null===n[m])m--;else if(l[h]===r[u])d[u]=ee(n[h],a[u]),h++,u++;else if(l[m]===r[b])d[b]=ee(n[m],a[b]),m--,b--;else if(l[h]===r[b])d[b]=ee(n[h],a[b]),Z(e,d[b+1],n[h]),h++,b--;else if(l[m]===r[u])d[u]=ee(n[m],a[u]),Z(e,n[h],n[m]),m--,u++;else if(void 0===c&&(c=ne(r,u,b),p=ne(l,h,m)),c.has(l[h]))if(c.has(l[m])){const t=p.get(r[u]),o=void 0!==t?n[t]:null;if(null===o){const t=Z(e,n[h]);ee(t,a[u]),d[u]=t}else d[u]=ee(o,a[u]),Z(e,n[h],o),n[t]=null;u++}else se(n[m]),m--;else se(n[h]),h++;for(;u<=b;){const t=Z(e,d[b+1]);ee(t,a[u]),d[u++]=t}for(;h<=m;){const e=n[h++];null!==e&&se(e)}return this.ut=r,oe(e,d),t}});h("vaadin-tab",m`
    :host {
      box-sizing: border-box;
      padding: 0.5rem 0.75rem;
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-xs);
      font-weight: 500;
      opacity: 1;
      color: var(--lumo-secondary-text-color);
      transition: 0.15s color, 0.2s transform;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      position: relative;
      cursor: var(--lumo-clickable-cursor);
      transform-origin: 50% 100%;
      outline: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow: hidden;
      min-width: var(--lumo-size-m);
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    :host(:not([orientation='vertical'])) {
      text-align: center;
    }

    :host([orientation='vertical']) {
      transform-origin: 0% 50%;
      padding: 0.25rem 1rem;
      min-height: var(--lumo-size-m);
      min-width: 0;
    }

    :host(:hover),
    :host([focus-ring]) {
      color: var(--lumo-body-text-color);
    }

    :host([selected]) {
      color: var(--lumo-primary-text-color);
      transition: 0.6s color;
    }

    :host([active]:not([selected])) {
      color: var(--lumo-primary-text-color);
      transition-duration: 0.1s;
    }

    :host::before,
    :host::after {
      content: '';
      position: absolute;
      display: var(--_lumo-tab-marker-display, block);
      bottom: 0;
      left: 50%;
      width: var(--lumo-size-s);
      height: 2px;
      background-color: var(--lumo-contrast-60pct);
      border-radius: var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0 0;
      transform: translateX(-50%) scale(0);
      transform-origin: 50% 100%;
      transition: 0.14s transform cubic-bezier(0.12, 0.32, 0.54, 1);
      will-change: transform;
    }

    :host([selected])::before,
    :host([selected])::after {
      background-color: var(--lumo-primary-color);
    }

    :host([orientation='vertical'])::before,
    :host([orientation='vertical'])::after {
      left: 0;
      bottom: 50%;
      transform: translateY(50%) scale(0);
      width: 2px;
      height: var(--lumo-size-xs);
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      transform-origin: 100% 50%;
    }

    :host::after {
      box-shadow: 0 0 0 4px var(--lumo-primary-color);
      opacity: 0.15;
      transition: 0.15s 0.02s transform, 0.8s 0.17s opacity;
    }

    :host([selected])::before,
    :host([selected])::after {
      transform: translateX(-50%) scale(1);
      transition-timing-function: cubic-bezier(0.12, 0.32, 0.54, 1.5);
    }

    :host([orientation='vertical'][selected])::before,
    :host([orientation='vertical'][selected])::after {
      transform: translateY(50%) scale(1);
    }

    :host([selected]:not([active]))::after {
      opacity: 0;
    }

    :host(:not([orientation='vertical'])) ::slotted(a[href]) {
      justify-content: center;
    }

    :host ::slotted(a) {
      display: flex;
      width: 100%;
      align-items: center;
      height: 100%;
      margin: -0.5rem -0.75rem;
      padding: 0.5rem 0.75rem;
      outline: none;

      /*
          Override the CSS inherited from \`lumo-color\` and \`lumo-typography\`.
          Note: \`!important\` is needed because of the \`:slotted\` specificity.
        */
      text-decoration: none !important;
      color: inherit !important;
    }

    :host ::slotted(vaadin-icon),
    :host ::slotted(iron-icon) {
      margin: 0 4px;
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    :host ::slotted(vaadin-icon[icon^='vaadin:']),
    :host ::slotted(iron-icon[icon^='vaadin:']) {
      padding: 0.25rem;
      box-sizing: border-box !important;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:first-child),
    :host(:not([dir='rtl'])) ::slotted(iron-icon:first-child) {
      margin-left: 0;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:last-child),
    :host(:not([dir='rtl'])) ::slotted(iron-icon:last-child) {
      margin-right: 0;
    }

    :host([theme~='icon-on-top']) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      padding-bottom: 0.5rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(a) {
      flex-direction: column;
      align-items: center;
      margin-top: -0.25rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(vaadin-icon),
    :host([theme~='icon-on-top']) ::slotted(iron-icon) {
      margin: 0;
    }

    /* Disabled */

    :host([disabled]) {
      pointer-events: none;
      opacity: 1;
      color: var(--lumo-disabled-text-color);
    }

    /* Focus-ring */

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      border-radius: var(--lumo-border-radius-m);
    }

    /* RTL specific styles */

    :host([dir='rtl'])::before,
    :host([dir='rtl'])::after {
      left: auto;
      right: 50%;
      transform: translateX(50%) scale(0);
    }

    :host([dir='rtl'][selected]:not([orientation='vertical']))::before,
    :host([dir='rtl'][selected]:not([orientation='vertical']))::after {
      transform: translateX(50%) scale(1);
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:first-child),
    :host([dir='rtl']) ::slotted(iron-icon:first-child) {
      margin-right: 0;
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:last-child),
    :host([dir='rtl']) ::slotted(iron-icon:last-child) {
      margin-left: 0;
    }

    :host([orientation='vertical'][dir='rtl']) {
      transform-origin: 100% 50%;
    }

    :host([dir='rtl'][orientation='vertical'])::before,
    :host([dir='rtl'][orientation='vertical'])::after {
      left: auto;
      right: 0;
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      transform-origin: 0% 50%;
    }
  `,{moduleId:"lumo-tab"});const re=e=>class extends(u(b(e))){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");null!==e&&(this.value=e)}focus(){this.disabled||(super.focus(),this._setFocused(!0))}_shouldSetActive(e){return!(this.disabled||"keydown"===e.type&&e.defaultPrevented)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){super._disabledChanged(e),e&&(this.selected=!1,this.blur())}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this.click())}};class le extends(g(v(re(f(y))))){static get template(){return _`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot></slot>
      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-tab"}ready(){super.ready(),this.setAttribute("role","tab"),this._tooltipController=new w(this),this.addController(this._tooltipController)}_onKeyUp(e){const t=this.hasAttribute("active");if(super._onKeyUp(e),t){const e=this.querySelector("a");e&&e.click()}}}customElements.define(le.is,le),h("vaadin-tabs",m`
    :host {
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([orientation='vertical'])) {
      box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
      position: relative;
      min-height: var(--lumo-size-l);
    }

    :host([orientation='horizontal']) [part='tabs'] ::slotted(vaadin-tab:not([theme~='icon-on-top'])) {
      justify-content: center;
    }

    :host([orientation='vertical']) {
      box-shadow: -1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([orientation='horizontal']) [part='tabs'] {
      margin: 0 0.75rem;
    }

    :host([orientation='vertical']) [part='tabs'] {
      width: 100%;
      margin: 0.5rem 0;
    }

    [part='forward-button'],
    [part='back-button'] {
      position: absolute;
      z-index: 1;
      font-family: lumo-icons;
      color: var(--lumo-tertiary-text-color);
      font-size: var(--lumo-icon-size-m);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5em;
      height: 100%;
      transition: 0.2s opacity;
      top: 0;
    }

    [part='forward-button']:hover,
    [part='back-button']:hover {
      color: inherit;
    }

    :host(:not([dir='rtl'])) [part='forward-button'] {
      right: 0;
    }

    [part='forward-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    [part='back-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    /* Tabs overflow */

    [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: none;
      -webkit-mask-image: var(--_lumo-tabs-overflow-mask-image);
      mask-image: var(--_lumo-tabs-overflow-mask-image);
    }

    /* Horizontal tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em);
    }

    /* Vertical tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em, #000 calc(100% - 2em), transparent);
    }

    /* End overflowing */
    :host([overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(#000 calc(100% - 2em), transparent);
    }

    /* Start overflowing */
    :host([overflow~='start'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em);
    }

    :host [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: var(--lumo-space-m);
    }

    /* Centered */

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:first-of-type) {
      margin-inline-start: auto;
    }

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:last-of-type) {
      margin-inline-end: auto;
    }

    /* Small */

    :host([theme~='small']),
    :host([theme~='small']) [part='tabs'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='small']) [part='tabs'] ::slotted(vaadin-tab) {
      font-size: var(--lumo-font-size-s);
    }

    /* Minimal */

    :host([theme~='minimal']) {
      box-shadow: none;
      --_lumo-tab-marker-display: none;
    }

    /* Hide-scroll-buttons */

    :host([theme~='hide-scroll-buttons']) [part='back-button'],
    :host([theme~='hide-scroll-buttons']) [part='forward-button'] {
      display: none;
    }

    /* prettier-ignore */
    :host([theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em);
    }

    /* Equal-width tabs */
    :host([theme~='equal-width-tabs']) {
      flex: auto;
    }

    :host([theme~='equal-width-tabs']) [part='tabs'] ::slotted(vaadin-tab) {
      flex: 1 0 0%;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='forward-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    :host([dir='rtl']) [part='back-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    :host([orientation='vertical'][dir='rtl']) {
      box-shadow: 1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']) [part='forward-button'] {
      left: 0;
    }

    :host([dir='rtl']) [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: 0;
      margin-right: var(--lumo-space-m);
    }

    /* Both ends overflowing */
    :host([dir='rtl'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([dir='rtl'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([dir='rtl'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent 2em, #000 4em);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical']))
      [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent, #000 2em);
    }
  `,{moduleId:"lumo-tabs"});let de=!1,ce=[],pe=[];function he(){de=!0,requestAnimationFrame(function(){de=!1,me(ce),setTimeout(function(){ue(pe)})})}function me(e){for(;e.length;)be(e.shift())}function ue(e){for(let t=0,o=e.length;t<o;t++)be(e.shift())}function be(e){const t=e[0],o=e[1],i=e[2];try{o.apply(t,i)}catch(e){setTimeout(()=>{throw e})}}function ge(e,t,o){de||he(),pe.push([e,t,o])}const ve=new ResizeObserver(e=>{setTimeout(()=>{e.forEach(e=>{e.target.resizables?e.target.resizables.forEach(t=>{t._onResize(e.contentRect)}):e.target._onResize(e.contentRect)})})}),fe=x(e=>class extends e{connectedCallback(){if(super.connectedCallback(),ve.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,ve.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),ve.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const t=e.resizables;t&&(t.delete(this),0===t.size&&ve.unobserve(e)),this.__parent=null}}get _observeParent(){return!1}_onResize(e){}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}),ye=e=>class extends($(e)){focus(){const e=this._getItems();if(Array.isArray(e)){const t=this._getAvailableIndex(e,0,null,e=>!E(e));t>=0&&e[t].focus()}}get focused(){return(this._getItems()||[]).find(S)}get _vertical(){return!0}_getItems(){return Array.from(this.children)}_onKeyDown(e){if(super._onKeyDown(e),e.metaKey||e.ctrlKey)return;const{key:t}=e,o=this._getItems()||[],i=o.indexOf(this.focused);let s,n;const a=!this._vertical&&"rtl"===this.getAttribute("dir")?-1:1;this.__isPrevKey(t)?(n=-a,s=i-a):this.__isNextKey(t)?(n=a,s=i+a):"Home"===t?(n=1,s=0):"End"===t&&(n=-1,s=o.length-1),s=this._getAvailableIndex(o,s,n,e=>!E(e)),s>=0&&(e.preventDefault(),this._focus(s,!0))}__isPrevKey(e){return this._vertical?"ArrowUp"===e:"ArrowLeft"===e}__isNextKey(e){return this._vertical?"ArrowDown"===e:"ArrowRight"===e}_focus(e,t=!1){const o=this._getItems();this._focusItem(o[e],t)}_focusItem(e){e&&(e.focus(),e.setAttribute("focus-ring",""))}_getAvailableIndex(e,t,o,i){const s=e.length;let n=t;for(let t=0;"number"==typeof n&&t<s;t+=1,n+=o||1){n<0?n=s-1:n>=s&&(n=0);const t=e[n];if(!t.hasAttribute("disabled")&&this.__isMatchingItem(t,i))return n}return-1}__isMatchingItem(e,t){return"function"!=typeof t||t(e)}},_e=e=>class extends(ye(e)){static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("click",e=>this._onClick(e)),this._observer=new k(this,()=>{this._setItems(this._filterItems(k.getFlattenedNodes(this)))})}_getItems(){return this.items}_enhanceItems(e,t,o,i){if(!i&&e){this.setAttribute("aria-orientation",t||"vertical"),this.items.forEach(e=>{t?e.setAttribute("orientation",t):e.removeAttribute("orientation")}),this._setFocusable(o||0);const i=e[o];e.forEach(e=>{e.selected=e===i}),i&&!i.disabled&&this._scrollToItem(o)}}_filterItems(e){return e.filter(e=>e._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const t=this._filterItems(e.composedPath())[0];let o;t&&!t.disabled&&(o=this.items.indexOf(t))>=0&&(this.selected=o)}_searchKey(e,t){this._searchReset=C.debounce(this._searchReset,A.after(500),()=>{this._searchBuf=""}),this._searchBuf+=t.toLowerCase(),this.items.some(e=>this.__isMatchingKey(e))||(this._searchBuf=t.toLowerCase());const o=1===this._searchBuf.length?e+1:e;return this._getAvailableIndex(this.items,o,1,e=>this.__isMatchingKey(e)&&"none"!==getComputedStyle(e).display)}__isMatchingKey(e){return e.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}get _isRTL(){return!this._vertical&&"rtl"===this.getAttribute("dir")}_onKeyDown(e){if(e.metaKey||e.ctrlKey)return;const t=e.key,o=this.items.indexOf(this.focused);if(/[\p{L}\p{Nd}]/u.test(t)&&1===t.length){const e=this._searchKey(o,t);return void(e>=0&&this._focus(e))}super._onKeyDown(e)}_isItemHidden(e){return"none"===getComputedStyle(e).display}_setFocusable(e){e=this._getAvailableIndex(this.items,e,1);const t=this.items[e];this.items.forEach(e=>{e.tabIndex=e===t?0:-1})}_focus(e){this.items.forEach((t,o)=>{t.focused=o===e}),this._setFocusable(e),this._scrollToItem(e),super._focus(e)}focus(){this._observer&&this._observer.flush();const e=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);this._focusItem(e)}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}_scrollToItem(e){const t=this.items[e];if(!t)return;const o=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],i=this._scrollerElement.getBoundingClientRect(),s=(this.items[e+1]||t).getBoundingClientRect(),n=(this.items[e-1]||t).getBoundingClientRect();let a=0;!this._isRTL&&s[o[1]]>=i[o[1]]||this._isRTL&&s[o[1]]<=i[o[1]]?a=s[o[1]]-i[o[1]]:(!this._isRTL&&n[o[0]]<=i[o[0]]||this._isRTL&&n[o[0]]>=i[o[0]])&&(a=n[o[0]]-i[o[0]]),this._scroll(a)}get _vertical(){return"horizontal"!==this.orientation}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{const t=this.getAttribute("dir")||"ltr",o=R.detectScrollType(),i=R.getNormalizedScrollLeft(o,t,this._scrollerElement)+e;R.setNormalizedScrollLeft(o,t,this._scrollerElement,i)}}};class we extends(fe(g(_e(v(y))))){static get template(){return _`
      <style>
        :host {
          display: flex;
          align-items: center;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          display: block;
        }

        :host([orientation='horizontal']) [part='tabs'] {
          flex-grow: 1;
          display: flex;
          align-self: stretch;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        /* This seems more future-proof than \`overflow: -moz-scrollbars-none\` which is marked obsolete
         and is no longer guaranteed to work:
         https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Mozilla_Extensions */
        @-moz-document url-prefix() {
          :host([orientation='horizontal']) [part='tabs'] {
            overflow: hidden;
          }
        }

        :host([orientation='horizontal']) [part='tabs']::-webkit-scrollbar {
          display: none;
        }

        :host([orientation='vertical']) [part='tabs'] {
          height: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='back-button'],
        [part='forward-button'] {
          pointer-events: none;
          opacity: 0;
          cursor: default;
        }

        :host([overflow~='start']) [part='back-button'],
        :host([overflow~='end']) [part='forward-button'] {
          pointer-events: auto;
          opacity: 1;
        }

        [part='back-button']::after {
          content: '\\25C0';
        }

        [part='forward-button']::after {
          content: '\\25B6';
        }

        :host([orientation='vertical']) [part='back-button'],
        :host([orientation='vertical']) [part='forward-button'] {
          display: none;
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='back-button']::after {
          content: '\\25B6';
        }

        :host([dir='rtl']) [part='forward-button']::after {
          content: '\\25C0';
        }
      </style>
      <div on-click="_scrollBack" part="back-button" aria-hidden="true"></div>

      <div id="scroll" part="tabs">
        <slot></slot>
      </div>

      <div on-click="_scrollForward" part="forward-button" aria-hidden="true"></div>
    `}static get is(){return"vaadin-tabs"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["__tabsItemsChanged(items, items.*)"]}constructor(){super(),this.__itemsResizeObserver=new ResizeObserver(()=>{setTimeout(()=>this._updateOverflow())})}ready(){super.ready(),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),ge(this,()=>{this._updateOverflow()})}_onResize(){this._updateOverflow()}__tabsItemsChanged(e){this.__itemsResizeObserver.disconnect(),(e||[]).forEach(e=>{this.__itemsResizeObserver.observe(e)}),this._updateOverflow()}_scrollForward(){this._scroll(-this.__direction*this._scrollOffset)}_scrollBack(){this._scroll(this.__direction*this._scrollOffset)}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return this._vertical||"rtl"!==this.getAttribute("dir")?-1:1}_updateOverflow(){const e=this._vertical?this._scrollerElement.scrollTop:this.__getNormalizedScrollLeft(this._scrollerElement),t=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let o=Math.floor(e)>1?"start":"";Math.ceil(e)<Math.ceil(t-this._scrollOffset)&&(o+=" end"),1===this.__direction&&(o=o.replace(/start|end/gi,e=>"start"===e?"end":"start")),o?this.setAttribute("overflow",o.trim()):this.removeAttribute("overflow")}}customElements.define(we.is,we),console.warn('WARNING: Since Vaadin 23.2, "@vaadin/vaadin-tabs" is deprecated. Use "@vaadin/tabs" instead.');class xe extends o{static get styles(){return i`
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
    `}render(){return s`
      <div class="wrapper">
        <div class="pb-field">
          <span class="pb-field__label">Scope</span>
          <select class="pb-select" .value=${this.scope||""} @change=${this._handleScopeChange}>
            ${this.scopes.map(e=>s`<option value="${e}">${this._displayScope(e)}</option>`)}
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
    `}static get properties(){return{scopes:{type:Array},css:{type:String,reflect:!0},scope:{type:String,reflect:!0},selected:{type:String}}}constructor(){super(),this.scopes=["","before","after"],this.css="";const e=this.getAttribute("scope");this.scope=null!=e?e:"",this.selected="",this._initialized=!1}connectedCallback(){super.connectedCallback(),this.css=this.css.trim(),this.dispatchEvent(new CustomEvent("rendition-connected",{composed:!0,bubbles:!0,detail:{target:this}}))}firstUpdated(e){this.refreshEditor(),this._initialized=!0}refreshEditor(){console.log("refreshEditor"),this.shadowRoot.getElementById("editor")}_remove(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("remove-rendition",{}))}_handleCodeChange(){this.css=this.shadowRoot.getElementById("editor").value,this._emitChange()}_handleScopeChange(e){this.scope=e.target.value,this._emitChange()}_emitChange(){this.dispatchEvent(new CustomEvent("rendition-changed",{composed:!0,bubbles:!0,detail:{name:this.name,css:this.css,scope:this.scope}}))}_displayScope(e){return e||"(default)"}}customElements.define("pb-odd-rendition-editor",xe);class $e extends o{static get styles(){return i`
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
    `}render(){return s`
      <div class="wrapper">
        <div class="pb-field">
          <span class="pb-field__label"
            >${M("odd.editor.model.param-name-placeholder")}</span
          >
          <pb-autocomplete
            id="combo"
            .suggestions=${this._currentParameters}
            .value=${this.name||""}
            placeholder="${M("odd.editor.model.param-name-placeholder")}"
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
          <span>${M("odd.editor.model.set-param")}</span>
        </label>
        <pb-icon-button
          class="icon-button"
          icon="delete"
          title="delete this parameter"
          @click="${this._delete}"
        ></pb-icon-button>
      </div>
    `}static get properties(){return{name:{type:String,reflect:!0},value:{type:String,reflect:!0},behaviour:{type:String},parameters:{type:Object},setParam:{type:Boolean,attribute:"set"},_currentParameters:{type:Array},endpoint:{type:String},apiVersion:{type:String}}}constructor(){super(),this.name="",this.value="",this.setParam=!1,this.behaviour="",this.currentParameters=[],this.parameters={"":[],alternate:["default","alternate","persistent"],anchor:["content","id"],block:["content"],body:["content"],break:["content","type","label"],cell:["content"],cit:["content","source"],document:["content"],figure:["content","title"],graphic:["content","url","width","height","scale","title"],heading:["content","level"],inline:["content"],link:["content","uri","target"],list:["content","type"],listItem:["content","n"],metadata:["content"],note:["content","place","label"],omit:[],paragraph:["content"],row:["content"],section:["content"],table:["content"],text:["content"],title:["content"],webcomponent:["content","name"]},this.selected="",this.endpoint="",this._currentParameters=[],this.behaviour&&this.parameters[this.behaviour]&&(this._currentParameters=this.parameters[this.behaviour])}connectedCallback(){super.connectedCallback(),this.value=this.value.trim(),this.dispatchEvent(new CustomEvent("parameter-connected",{composed:!0,bubbles:!0,detail:{target:this}}))}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),"behaviour"===e&&(this._currentParameters=this.parameters&&this.parameters[o]||[])}updated(e){if(super.updated(e),e.has("parameters")||e.has("behaviour")){var t;this._currentParameters=this.parameters&&this.parameters[this.behaviour]||[];const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("combo");e&&(e.suggestions=this._currentParameters)}}firstUpdated(e){this.selected=this.parameters[this.behaviour]||[],this.requestUpdate(),this.shadowRoot.getElementById("editor").addEventListener("update",this._handleCodeChange.bind(this))}refreshEditor(){this.shadowRoot.getElementById("editor")}_delete(e){console.log("parameter delete ",e),e.preventDefault(),this.dispatchEvent(new CustomEvent("parameter-remove",{}))}_handleCodeChange(e){this._emitChange()}_handleNameInput(e){const{text:t,value:o}=e.detail||{};this.name=o??t??"",this._emitChange()}_handleNameSelected(e){const{text:t,value:o}=e.detail||{};this.name=o??t??"",this._emitChange()}_handleSetToggle(e){this.setParam=e.target.checked,this._emitChange()}_emitChange(){const e=this.shadowRoot.getElementById("editor");e&&(this.value=e.content||e.value||"");const t=this.shadowRoot.getElementById("combo");t&&!this.name&&(this.name=t.value||"");const o=this.shadowRoot.getElementById("set");o&&(this.setParam=o.checked),this.dispatchEvent(new CustomEvent("parameter-changed",{composed:!0,bubbles:!0,detail:{name:this.name,value:this.value,set:this.setParam}}))}}customElements.define("pb-odd-parameter-editor",$e);class Ee extends o{static get styles(){return i`
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
    `}static get properties(){return{behaviour:{type:String},predicate:{type:String,reflect:!0,converter:(e,t)=>"null"===e.toLowerCase()?"":e},type:{type:String,reflect:!0},template:{type:String,reflect:!0,converter:(e,t)=>"null"===e.toLowerCase()?"":e},output:{type:String,reflect:!0,converter:(e,t)=>"null"===e.toLowerCase()?"":e},css:{type:String,converter:(e,t)=>"null"===e.toLowerCase()?"":e},mode:{type:String},model:{type:Object},models:{type:Array},parameters:{type:Array},renditions:{type:Array},desc:{type:String,converter:(e,t)=>"null"===e.toLowerCase()?"":e},sourcerend:{type:String},show:{type:Boolean,reflect:!0},outputs:{type:Array},behaviours:{type:Array},icon:{type:String},open:{type:String},hasCustomBehaviour:{type:Boolean},endpoint:{type:String},apiVersion:{type:String}}}constructor(){super(),this.behaviour="inline",this.predicate="",this.type="",this.template="",this.output="",this.css="",this.mode="",this.model={},this.model.models=[],this.parameters=[],this.renditions=[],this.desc="",this.sourcerend="",this.show=!1,this.outputs=["","web","print","epub","fo","latex","plain"],this.parentModel=[],this.behaviours=["alternate","anchor","block","body","break","cell","cit","document","figure","graphic","heading","inline","link","list","listItem","metadata","note","omit","paragraph","pass-through","row","section","table","text","title","webcomponent"],this.icon="expand-more",this.hasCustomBehaviour=!1}render(){let e;switch(this.output){case"web":case"epub":default:e="html";break;case"latex":e="tex";break;case"plain":e="default";break;case"fo":case"print":e="xml"}return s`
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

                        ${this._isGroupOrSequence()?s`
                                <label class="modelTypeMenu">
                                  <span class="sr-only">Add nested model</span>
                                  <select class="pb-select" @change=${this._handleAddNested}>
                                    <option value="">Add…</option>
                                    ${"modelSequence"===this.type?s`<option value="model">model</option>`:a}
                                    ${"modelGrp"===this.type?s`
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
                      <span class="pb-field__label">${M("odd.editor.model.output")}</span>
                      <select
                        id="output"
                        class="pb-select"
                        .value=${this.output||""}
                        @change=${this._selectOutput}
                      >
                        ${this.outputs.map(e=>s`<option value="${e}">${e}</option>`)}
                      </select>
                    </label>
                    <label class="pb-field">
                      <span class="pb-field__label">${M("odd.editor.model.mode-placeholder")}</span>
                      <input
                        id="mode"
                        class="pb-input"
                        .value=${this.mode||""}
                        placeholder="${M("odd.editor.model.mode-placeholder")}"
                        @change=${this._inputMode}
                      />
                    </label>
                </div>
                <label class="pb-field">
                  <span class="pb-field__label">${M("odd.editor.model.description-placeholder")}</span>
                  <input
                    id="desc"
                    class="pb-input"
                    .value=${this.desc||""}
                    placeholder="${M("odd.editor.model.description-placeholder")}"
                    @change=${this._inputDesc}
                  />
                </label>

                <div class="editor">
                    <label>Predicate</label>
                    <jinn-codemirror id="predicate"
                        code="${this.predicate}"
                        mode="xquery"
                        linter="${this.endpoint}/${n(this.apiVersion,"1.0.0")<0?"modules/editor.xql":"api/lint"}"
                        placeholder="${M("odd.editor.model.predicate-placeholder")}"
                        @update="${this._updatePredicate}"></jinn-codemirror>
                </div>

                ${this._isModel()?s`
                        <div>
                          <div class="behaviourWrapper">
                            <label class="pb-field">
                              <span class="pb-field__label"
                                >${M("odd.editor.model.behaviour")}</span
                              >
                              <select
                                id="behaviour"
                                class="pb-select"
                                .value=${this.behaviour||""}
                                ?disabled=${this.hasCustomBehaviour}
                                @change=${this._selectBehaviour}
                              >
                                ${this.behaviours.map(e=>s`<option value="${e}">${e}</option>`)}
                              </select>
                            </label>
                            <span style="align-self:center;justify-self: center;">
                              ${M("odd.editor.model.link-with-or")}
                            </span>
                            <label class="pb-field">
                              <span class="pb-field__label"
                                >${M("odd.editor.model.custom-behaviour-placeholder")}</span
                              >
                              <input
                                id="custombehaviour"
                                class="pb-input"
                                @input=${this._handleCustomBehaviour}
                                placeholder="${M("odd.editor.model.custom-behaviour-placeholder")}"
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
                              placeholder="${M("odd.editor.model.css-class-placeholder")}"
                              @change=${this._inputCss}
                            />
                          </label>

                          <div class="editor">
                            <label>Template</label>
                            <jinn-codemirror
                              id="template"
                              code="${this.template}"
                              mode="${e}"
                              placeholder="${M("odd.editor.model.template-placeholder")}"
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
                          ${ae(this.parameters||[],e=>e.name,(e,t)=>s`
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

                          ${ae(this.renditions||[],e=>e.name,(e,t)=>s`
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
                ${ae(this.model&&this.model.models||[],(e,t)=>s`
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
        `}firstUpdated(){super.firstUpdated(),this.hasCustomBehaviour=this.behaviours.indexOf(this.behaviour)<0,this.hasCustomBehaviour&&(this.shadowRoot.getElementById("custombehaviour").value=this.behaviour)}updated(e){e.has("show")&&this.show&&this.refreshEditors()}refreshEditors(){if(console.log("refreshEditors"),this._isGroupOrSequence())return console.log("asfdfa");const e=this.shadowRoot.querySelectorAll("pb-odd-model-editor");for(let t=0;t<e.length;t++)e[t].refreshEditors();const t=this.shadowRoot.querySelectorAll("pb-odd-rendition-editor");for(let e=0;e<t.length;e++)t[e].refreshEditor();const o=this.shadowRoot.querySelectorAll("pb-odd-parameter-editor");for(let e=0;e<o.length;e++)o[e].refreshEditor()}toggle(e){this.show=!this.show,this.toggleButtonIcon();const t=this.model,o=Object.assign(Object.assign({},t),{},{show:this.show});this.model=o,this.refreshEditors(),this.dispatchEvent(new CustomEvent("model-changed",{composed:!0,bubbles:!0,detail:{oldModel:t,newModel:o}}))}toggleButtonIcon(){this.show?this.icon="expand-less":this.icon="expand-more"}_isModel(){return"model"===this.type}_isGroupOrSequence(){return"model"!==this.type}static _templateMode(e){return"latex"===e?"latex":"xml"}_changeSelection(e){if(e.detail.target==this)return;e.preventDefault(),e.stopPropagation(),null!=this.currentSelection&&this.currentSelection.removeAttribute("currentselection");const t=e.detail.target;t.setAttribute("currentselection","true"),this.currentSelection=t}_requestRemoval(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("model-remove"))}_moveDown(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("model-move-down",{composed:!0,bubbles:!0,detail:{model:this}}))}_moveUp(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("model-move-up"))}_addNested(e){const t={behaviour:"inline",css:"",desc:"",predicate:"",type:e instanceof Event?e.detail.item.getAttribute("value"):e,output:"",sourcerend:!1,models:[],mode:"",parameters:[],renditions:[],template:"",show:!0},o=this.model,i=Array.from(this.model.models);i.unshift(t),this.model=Object.assign(Object.assign({},o),{},{models:i});this.shadowRoot.querySelector("#modelType").select(""),this.dispatchEvent(new CustomEvent("model-changed",{composed:!0,bubbles:!0,detail:{oldModel:o,newModel:this.model}}))}_handleAddNested(e){const t=e.target.value;t&&(this._addNested(t),e.target.value="")}addModel(e){"model"===e.type?(this.model.models.unshift(e),this.requestUpdate()):console.error("only models can be added to modelSequence or modelGrp")}_removeModel(e){console.log("_removeModel ",e),e.stopPropagation();const{model:t}=e.target,o=this.model.models.indexOf(t);this.shadowRoot.getElementById("dialog").confirm(P("odd.editor.model.delete-model-label"),P("odd.editor.model.delete-model-message")).then(()=>{const e=this.model,t=Array.from(this.model.models);t.splice(o,1),this.model=Object.assign(Object.assign({},e),{},{models:t}),this.models=t,this.dispatchEvent(new CustomEvent("model-changed",{composed:!0,bubbles:!0,detail:{oldModel:e,newModel:this.model}}))},()=>null)}_moveModelDown(e){console.log("MODEL._moveModelDown ",e),e.stopPropagation();const{model:t}=e.target,o=this.model.models.indexOf(t);if(o===this.model.models.length)return;const i=this.model,s=Array.from(this.model.models);s.splice(o,1),s.splice(o+1,0,t),this.model=Object.assign(Object.assign({},i),{},{models:s});const n=this.shadowRoot.querySelectorAll("pb-odd-model-editor")[o+1];this._setCurrentSelection(o+1,n),this.dispatchEvent(new CustomEvent("model-changed",{composed:!0,bubbles:!0,detail:{oldModel:i,newModel:this.model}})),this.requestUpdate()}_moveModelUp(e){e.stopPropagation();const{model:t}=e.target,o=this.model.models.indexOf(t);if(0===o)return;const i=this.model,s=Array.from(this.model.models);s.splice(o,1),s.splice(o-1,0,t),this.model=Object.assign(Object.assign({},i),{},{models:s});const n=this.shadowRoot.querySelectorAll("pb-odd-model-editor")[o-1];this._setCurrentSelection(o-1,n),this.dispatchEvent(new CustomEvent("model-changed",{composed:!0,bubbles:!0,detail:{oldModel:i,newModel:this.model}}))}handleModelChanged(e){console.log("handleModelChanged ",e,this),e.stopPropagation();const t=this.model,o=this.model.models.indexOf(e.detail.oldModel),i=Array.from(this.model.models);i.splice(o,1,e.detail.newModel),this.model=Object.assign(Object.assign({},t),{},{models:i}),this.dispatchEvent(new CustomEvent("model-changed",{composed:!0,bubbles:!0,detail:{oldModel:t,newModel:this.model}}))}setCurrentSelection(e,t){e.preventDefault(),e.stopPropagation(),this._setCurrentSelection(t,e.target)}_setCurrentSelection(e,t){const o=this.shadowRoot.querySelectorAll("pb-odd-model-editor")[e];o&&(o.hasAttribute("currentselection")||(this.dispatchEvent(new CustomEvent("current-changed",{composed:!0,bubbles:!0,detail:{target:t}})),this.requestUpdate()))}_inputDesc(e){this.desc=e.target.value,this._fireModelChanged("desc",this.desc)}_selectOutput(e){this.output=e.target.value,this._fireModelChanged("output",this.output)}_updatePredicate(){this.predicate=this.shadowRoot.getElementById("predicate").value,console.log("_updatePredicate ",this.predicate),this._fireModelChanged("predicate",this.predicate)}_selectBehaviour(e){this.behaviour=e.target.value,this._fireModelChanged("behaviour",this.behaviour)}_inputCss(e){this.css=e.target.value,this._fireModelChanged("css",this.css)}_inputMode(e){this.mode=e.target.value,this._fireModelChanged("mode",this.mode)}_updateTemplate(e){this.template=this.shadowRoot.getElementById("template").content,this._fireModelChanged("template",this.template)}_addParameter(e){this.parameters.push({name:"",value:""}),this._fireModelChanged("parameters",this.parameters)}_updateParam(e,t){this.parameters[t].name=e.detail.name,this.parameters[t].value=e.detail.value,this.parameters[t].set=e.detail.set,this._fireModelChanged("parameters",this.parameters)}_removeParam(e,t){this.parameters.splice(t,1),this._fireModelChanged("parameters",this.parameters)}_addRendition(e){this.renditions.push({scope:"",css:""}),this._fireModelChanged("renditions",this.renditions)}_updateRendition(e,t){this.renditions[t].css=e.detail.css,this.renditions[t].scope=e.detail.scope,this._fireModelChanged("renditions",this.renditions)}_removeRendition(e,t){this.renditions.splice(t,1),this._fireModelChanged("renditions",this.renditions)}_fireModelChanged(e,t){const o=this.model;this.model=Object.assign(Object.assign({},this.model),{},{[e]:t}),console.log("model changed for %s: %o - %o",e,t,this.model),this.dispatchEvent(new CustomEvent("model-changed",{composed:!0,bubbles:!0,detail:{oldModel:o,newModel:this.model}})),this.requestUpdate()}_copy(e){e.preventDefault(),e.stopPropagation(),console.log("odd-model.copy ",e),console.log("odd-model.copy data",this.model),this.dispatchEvent(new CustomEvent("odd-copy",{composed:!0,bubbles:!0,detail:{model:this.model}}))}_paste(e){console.log("model _paste ",e),this.dispatchEvent(new CustomEvent("odd-paste",{composed:!0,bubbles:!0,detail:{target:this}}))}_handleCustomBehaviour(e){this.behaviour=e.composedPath()[0].value,this._fireModelChanged("behaviour",this.behaviour),""===this.behaviour?(this.behaviour="inline",this.hasCustomBehaviour=!1):this.hasCustomBehaviour=!0,this.requestUpdate()}}customElements.define("pb-odd-model-editor",Ee);class Se extends o{static get styles(){return i`
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
    `}static get properties(){return{ident:{type:String},mode:{type:String},models:{type:Array},endpoint:{type:String},apiVersion:{type:String}}}constructor(){super(),this.ident="",this.mode="",this.models=[],this.icon="expand-more"}render(){return s`
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
        ${ae(this.models||[],(e,t)=>s`
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
    `}addModel(e){this.models.unshift(e),this.requestUpdate()}_addModel(e){console.log("ELEMENTSPEC._addModel ",e);const t=this.shadowRoot.getElementById("addModel"),o={behaviour:"inline",css:"",mode:"",predicate:"",desc:"",type:t.selected,output:"",template:"",sourcerend:!1,models:[],parameters:[],renditions:[],show:!0},i=Array.from(this.models);i.unshift(o),this.models=i,this.dispatchEvent(new CustomEvent("element-spec-changed",{composed:!0,bubbles:!0,detail:{action:"models",ident:this.ident,models:this.models}})),t.selected="",this.requestUpdate()}_remove(e){this.dispatchEvent(new CustomEvent("element-spec-removed",{composed:!0,bubbles:!0,detail:{target:this}}))}_paste(e){console.log("_paste ",e),this.dispatchEvent(new CustomEvent("odd-paste",{composed:!0,bubbles:!0,detail:{target:this}}))}setCurrentSelection(e,t){e.preventDefault(),e.stopPropagation(),this._setCurrentSelection(t,e.target)}_setCurrentSelection(e,t){const o=this.shadowRoot.querySelectorAll("pb-odd-model-editor")[e];o&&(o.hasAttribute("currentselection")||(this.dispatchEvent(new CustomEvent("current-changed",{composed:!0,bubbles:!0,detail:{target:t}})),this.requestUpdate()))}_removeModel(e){console.log("_removeModel ",e),e.stopPropagation();const{model:t}=e.target,o=this.models.indexOf(t);this.shadowRoot.getElementById("dialog").confirm(P("odd.editor.model.delete-model-label"),P("odd.editor.model.delete-model-message")).then(()=>{const e=Array.from(this.models);e.splice(o,1),this.models=e,this.dispatchEvent(new CustomEvent("element-spec-changed",{composed:!0,bubbles:!0,detail:{action:"models",ident:this.ident,models:this.models}}))},()=>null)}_moveModelDown(e){console.log("ELEMENTSPEC._moveModelDown ",e),e.stopPropagation();const{model:t}=e.target,o=this.models.indexOf(t);if(o===this.models.length)return;const i=Array.from(this.models);i.splice(o,1),i.splice(o+1,0,t),this.models=i;const s=this.shadowRoot.querySelectorAll("pb-odd-model-editor")[o+1];s&&(this._setCurrentSelection(o+1,s),this.dispatchEvent(new CustomEvent("element-spec-changed",{composed:!0,bubbles:!0,detail:{action:"models",ident:this.ident,models:this.models}})))}_moveModelUp(e){e.stopPropagation();const{model:t}=e.target,o=this.models.indexOf(t);if(0===o)return;const i=Array.from(this.models);i.splice(o,1),i.splice(o-1,0,t),this.models=i;const s=this.shadowRoot.querySelectorAll("pb-odd-model-editor")[o-1];this._setCurrentSelection(o-1,s),this.dispatchEvent(new CustomEvent("element-spec-changed",{composed:!0,bubbles:!0,detail:{action:"models",ident:this.ident,models:this.models}}))}_label(e,t){const o=M(e);return o&&o!==e?o:t}handleModelChanged(e){e.stopPropagation();const t=this.models.indexOf(e.detail.oldModel),o=Array.from(this.models);o.splice(t,1,e.detail.newModel),this.models=o,this.dispatchEvent(new CustomEvent("element-spec-changed",{composed:!0,bubbles:!0,detail:{action:"models",ident:this.ident,models:this.models}})),this.requestUpdate()}}customElements.define("pb-odd-elementspec-editor",Se);class ke extends(I(r(o))){static get styles(){return i`
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
    `}static get properties(){return Object.assign(Object.assign({},super.properties),{},{ident:{type:String},mode:{type:String},models:{type:Array},odd:{type:String,reflect:!0},elementSpecs:{type:Array},source:{type:String},title:{type:String},titleShort:{type:String,reflect:!0,attribute:"title-short"},description:{type:String},namespace:{type:String},rootPath:{type:String,attribute:"root-path"},loading:{type:Boolean},indentString:{type:String},outputPrefix:{type:String,attribute:"output-prefix"},outputRoot:{type:String,attribute:"output-root"},currentSelection:{type:Object},useNamespace:{type:Boolean},loggedIn:{type:Boolean},tabs:{type:Array},tabIndex:{type:Number,reflect:!0}})}constructor(){super(),this.ident="",this.mode="",this.models=()=>[],this.odd="",this.elementSpecs=[],this.source="",this.title="",this.titleShort="",this.description="",this.namespace="",this.rootPath="",this.loading=!1,this.indentString="    ",this.outputPrefix="",this.outputRoot="",this.currentSelection={},this.useNamespace=!1,this.loggedIn=!0,this._tabs=[],this.tabIndex=void 0,this.selectedNavIndex=0,this.cssFile="",this.hotkeys={save:"ctrl+shift+s,command+shift+s"},this._hasChanges=!1}get tabs(){return this._tabs||(this._tabs=[]),this._tabs}set tabs(e){this._tabs=Array.isArray(e)?e:[]}get safeTabs(){const e=this._tabs||[];return Array.isArray(e)?e:[]}render(){return s`
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
                  title="${M("odd.editor.odd-source")}"
                ></pb-icon-button
              ></pb-edit-xml>
              <pb-icon-button
                @click="${()=>this.save(!0)}"
                icon="icons:cloud-download"
                title="${M(O?"odd.editor.save-as":"odd.editor.download")}"
              ></pb-icon-button>
              <pb-icon-button
                @click="${this._reload}"
                icon="refresh"
                title="${M("odd.editor.reload")}"
              ></pb-icon-button>
              <pb-icon-button
                @click="${()=>this.save(!1)}"
                icon="save"
                title="${M("odd.editor.save")} ${this.display("save")}"
                ?disabled="${!this.loggedIn}"
              ></pb-icon-button>
            </span>
          </h3>
          <div id="new-element" class="input-group">
            <label class="pb-field">
              <span class="pb-field__label">${M("odd.editor.add-element")}</span>
              <div class="pb-input-with-button">
                <input
                  id="identNew"
                  class="pb-input"
                  name="ident-new"
                  placeholder="${M("odd.editor.add-element")}"
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
              placeholder="${M("odd.editor.jump-to")}"
            ></pb-autocomplete>
          </div>

          <h3>${M("odd.editor.specs")}</h3>
        </div>
        <div id="navlist">
          ${ae(this.elementSpecs||[],e=>e.ident,(e,t)=>s`
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
                  <span class="pb-field__label">${M("odd.editor.title")}</span>
                  <input
                    id="title"
                    class="pb-input"
                    name="title"
                    .value=${this.title||""}
                    placeholder="[${M("odd.editor.title-placeholder")}]"
                    @change=${this._inputTitle}
                  />
                </label>
                <label class="pb-field">
                  <span class="pb-field__label">${M("odd.editor.title-short")}</span>
                  <input
                    id="titleShort"
                    class="pb-input"
                    name="short-title"
                    .value=${this.titleShort||""}
                    placeholder="[${M("odd.editor.title-short-placeholder")}]"
                    @change=${e=>this.titleShort=e.target.value}
                  />
                </label>
                <label class="pb-field">
                  <span class="pb-field__label">${M("odd.editor.description-label")}</span>
                  <input
                    id="description"
                    class="pb-input"
                    name="description"
                    .value=${this.description||""}
                    placeholder="[${M("odd.editor.description-placeholder")}]"
                    @change=${e=>this.description=e.target.value}
                  />
                </label>
                <label class="pb-field">
                  <span class="pb-field__label">${M("odd.editor.source-label")}</span>
                  <input
                    id="source"
                    class="pb-input"
                    name="source"
                    .value=${this.source||""}
                    placeholder="[${M("odd.editor.source-placeholder")}]"
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
                  <span>${M("odd.editor.use-namespace")}</span>
                </label>
                <label class="pb-field">
                  <span class="pb-field__label">Namespace</span>
                  <input
                    id="namespace"
                    class="pb-input"
                    name="namespace"
                    .value=${this.namespace||""}
                    ?disabled=${!this.useNamespace}
                    placeholder="[${M("odd.editor.namespace-placeholder")}]"
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
                      title="${M("odd.editor.css-source")}"
                    ></pb-icon-button
                  ></pb-edit-xml>
                </div>
              </div>
            </pb-collapse>
          </div>

          <!-- todo: import elementspec to make it function  -->

          <div class="editingView">
            <vaadin-tabs id="tabs" selected="${this.tabIndex||0}">
              ${ae(this.tabs||[],e=>e,(e,t)=>s`
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
    `}firstUpdated(e){this.shadowRoot.getElementById("useNamespace").checked=this.useNamespace,this.jumpCtrl=this.shadowRoot.getElementById("jumpTo"),this.jumpCtrl.addEventListener("pb-autocomplete-selected",this.jumpTo.bind(this));const t=this.querySelector("odd-selector");this.odd&&t&&(t.selected=this.odd,t.addEventListener("odd-selected",e=>{confirm("Any unsaved changes will be lost. Continue?")&&(this.odd=e.detail.odd,window.history.pushState({},"",`?odd=${this.odd}`)),t.selected=this.odd})),this.addEventListener("current-changed",this._changeSelection),this.addEventListener("odd-copy",e=>this._copy(e)),this.addEventListener("odd-paste",e=>this._paste(e)),this.addEventListener("element-spec-removed",this.removeElementSpec.bind(this)),window.addEventListener("beforeunload",()=>"Any unsaved changes will be lost. Continue?"),this.subscribeTo("pb-login",e=>{this.loggedIn=null!=e.detail.user}),this.focus(),this.loadContent=this.shadowRoot.getElementById("loadContent"),this.rootPath=this.getAttribute("root-path"),l("pb-page-ready",()=>{this.load(),this.inited=!0}),this.registerHotkey("save",()=>this.save(!1))}setUseNamespace(){this.useNamespace=this.shadowRoot.getElementById("useNamespace").checked}async load(){if(this.loading)return;if(this.loading=!0,""===this.rootPath||""===this.odd)return;this.elementSpecs=[],this._tabs=[],this.tabIndex=0,document.dispatchEvent(new CustomEvent("pb-start-update"));this.shadowRoot.getElementById("editSource").setPath(`${this.rootPath}/${this.odd}`);const e={odd:this.odd,root:this.rootPath};this.loadContent.params=e,this.loadContent.url=`${this.getEndpoint()}/${this.lessThanApiVersion("1.0.0")?"modules/editor.xql":`api/odd/${this.odd}`}`,this.loadContent.headers={Accept:"application/json"};const t=this.loadContent.generateRequest();if(this._hasChanges=!1,!t)return console.warn("pb-odd-editor: Failed to generate request - invalid URL"),this.loading=!1,void document.dispatchEvent(new CustomEvent("pb-end-update"));t.then(e=>this.handleOdd({response:e})).catch(e=>{console.warn("pb-odd-editor: Failed to load ODD data:",e),this.loading=!1,document.dispatchEvent(new CustomEvent("pb-end-update"))})}handleOdd(e){const t=e.response;if(t){if(this.loggedIn=t.canWrite,this.source=t.source,this.title=t.title,this.titleShort=t.titleShort,this.description=t.description,this.cssFile=null==t.cssFile?"":t.cssFile,this.namespace=null!=t.namespace?t.namespace:"",this.useNamespace=null!=t.namespace,this.cssFile){this.shadowRoot.getElementById("editCSS").setPath(`${this.rootPath}/${this.cssFile}`)}t.elementSpecs&&Array.isArray(t.elementSpecs)?this.elementSpecs=t.elementSpecs.map(e=>this.mapElementSpec(e)):(console.warn("pb-odd-editor: elementSpecs data is missing or invalid"),this.elementSpecs=[]),this._updateAutoComplete(),this.requestUpdate(),this.loading=!1,document.dispatchEvent(new CustomEvent("pb-end-update")),document.title=this.titleShort||this.title}else console.warn("pb-odd-editor: Failed to load ODD data")}_updateAutoComplete(){this.shadowRoot.getElementById("jumpTo").suggestions=this.elementSpecs.map(this._specMapper)}_cssFileChanged(e){if(this.cssFile=e.target.value,this.cssFile){this.shadowRoot.getElementById("editCSS").setPath(`${this.rootPath}/${this.cssFile}`)}}_navlistActiveChanged(e,t){this.selectedNavIndex=t,this.requestUpdate()}_returnTabs(){return this.tabs}_selectTab(e,t){const o=this.elementSpecs.find(e=>e.ident===t);this._updateElementspec(o)}_openElementSpec(e,t){console.log("_openElementSpec ",e,t);const o=this.elementSpecs[t];this._updateElementspec(o),this.selectedNavIndex=t,this.requestUpdate();const{ident:i}=o;if(this.tabs.indexOf(i)>=0)return this.tabIndex=this.tabs.indexOf(i),void this.requestUpdate();this.tabs.push(i),this.tabIndex=this.tabs.length-1,this.requestUpdate()}_updateElementspec(e){const t=this.shadowRoot.getElementById("currentElement");t.innerHTML="";const o=new Se;o.addEventListener("element-spec-changed",this.handleElementSpecChanged.bind(this)),o.ident=e.ident,o.models=e.models,o.mode=e.mode,o.endpoint=this._endpoint,o.apiVersion=this._apiVersion,o.hotkeys=this.hotkeys,t.appendChild(o)}_closeTabHandler(e,t){return console.log("_closeTabHandler ",t),e.preventDefault(),e.stopPropagation(),this._closeTab(t),!1}_closeTab(e){const t=[...this.tabs];if(t.splice(e,1),0===t.length)this.shadowRoot.getElementById("currentElement").innerHTML="",this.tabIndex=0,this.tabs=[];else if(this.tabIndex>0&&this.tabIndex>=e){this.tabIndex-=1,this.tabs=t;const e=this.tabs[this.tabIndex];this._selectTab(null,e)}else this.tabs=t}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),"odd"==e&&t!==o&&this.inited&&this.load()}static get replaceCharMap(){return{'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"}}static get replaceCharRegexp(){return/"|&|<|>/g}static replaceChars(e){return ke.replaceCharMap[e]}jumpTo(e){var t,o,i;const s=((null==e||null===(t=e.detail)||void 0===t?void 0:t.value)||(null==e||null===(o=e.detail)||void 0===o?void 0:o.text)||(null===(i=this.jumpCtrl)||void 0===i?void 0:i.value)||"").trim();if(!s)return;const n=this.shadowRoot.querySelector(`#es_${s}`);n&&(this.jumpCtrl&&(this.jumpCtrl.value=""),n.click())}_computedTitle(){return this.odd?this.title||this.titleShort||this.odd||"Loading ...":""}_copy(e){this.clipboard=e.detail.model;const t=JSON.parse(JSON.stringify(e.detail.model));this.clipboard=t}_paste(e){if(console.log("_paste ",e),console.log("_paste clipboard",this.clipboard),this.clipboard=={}||null==this.clipboard)return;const t=e.detail.target;t.addModel(this.clipboard),t.render()}_specMapper(e){return{text:e.ident,value:e.ident}}_specObserver(e){const t=this.elementSpecs.map(this._specMapper);this.jumpCtrl.suggestions=t}mapElementSpec(e){return Object.assign(Object.assign({},e),{},{models:e.models.map(e=>this.addShowToModel(e))})}addShowToModel(e){if(e.models){const t=e.models.map(e=>this.addShowToModel(e));return Object.assign(Object.assign({},e),{},{models:t,show:!1})}return Object.assign(Object.assign({},e),{},{show:!1})}addElementSpec(e){const t=this.shadowRoot.getElementById("identNew").value;if(!t||0===t.length)return;if(this.elementSpecs.find(e=>e.ident===t)){console.log("<pb-odd-editor> element spec to be added already exists: %s",t);const e=`#es_${t}`,o=this.shadowRoot.querySelector(e);if(!o)return;return void o.click()}const o={action:"find",odd:this.odd,root:this.rootPath,ident:t},i={root:this.rootPath,ident:t},s=this.lessThanApiVersion("1.0.0")?o:i;this.loadContent.params=s,this.loadContent.url=`${this.getEndpoint()}/${this.lessThanApiVersion("1.0.0")?"modules/editor.xql":`api/odd/${this.odd}`}`;this.loadContent.generateRequest().then(e=>this._handleElementSpecResponse({response:e}))}_handleElementSpecResponse(e){const t=this.shadowRoot.getElementById("identNew"),o=e.response,i=t.value,s={ident:i,mode:"not-found"===o.status?"add":"change",models:o.models||[]};this.elementSpecs.unshift(s),t.value="",this.tabs.push(i),this.tabIndex=this.tabs.length-1,this.elementSpecs.sort((e,t)=>e.ident.localeCompare(t.ident)),this.requestUpdate().then(()=>{const e=this.shadowRoot.querySelectorAll(".nav-item"),t=this.elementSpecs.indexOf(s);this._updateAutoComplete(),e[t].click(),e[t].focus()})}removeElementSpec(e){const{ident:t}=e.detail.target;this.shadowRoot.getElementById("dialog").confirm(P("browse.delete"),P("odd.editor.delete-spec",{ident:t})).then(()=>{const e=this.elementSpecs.findIndex(e=>e.ident===t);this.elementSpecs.splice(e,1),this.requestUpdate();const o=this.shadowRoot.querySelector("vaadin-tab[selected]").getAttribute("name"),i=this.tabs.indexOf(o);this._closeTab(i)},()=>null)}serializeOdd(){const e=this.useNamespace?` ns="${this.namespace}"`:"",t=this.source?` source="${this.source}"`:"",o=this.description?` <desc>${this.description}</desc>`:"",i=`${this.indentString}<title>${this.title}${o}</title>\n`,s=this.titleShort?`${this.indentString}<title type="short">${this.titleShort}</title>\n`:"",n=this.cssFile?`${this.indentString}<rendition source="${this.cssFile}"/>\n`:"",a=this.elementSpecs.map(e=>this.serializeElementSpec(this.indentString,e)).join("");return`<schemaSpec xmlns="http://www.tei-c.org/ns/1.0" xmlns:pb="http://teipublisher.com/1.0"${e}${t}>\n${i}${s}${n}\n${a}</schemaSpec>\n`}serializeElementSpec(e,t){const o=t.mode?` mode="${t.mode}"`:"",i=e+this.indentString,s=t.models.map(e=>this.serializeModel(i,e)).join("");return`${e}<elementSpec ident="${t.ident}"${o}>\n${s}${e}</elementSpec>\n`}serializeModel(e,t){if("model"===t.type&&!t.behaviour)return"";const o=e+this.indentString,i=[this.serializeAttribute("output",t.output),this.serializeAttribute("predicate",t.predicate),"model"===t.type?this.serializeAttribute("behaviour",t.behaviour):"",this.serializeAttribute("cssClass",t.css),this.serializeAttribute("useSourceRendition",t.sourcerend),this.serializeAttribute("pb:mode",t.mode)].join(""),s=t.desc?`${o}<desc>${t.desc}</desc>\n`:"",n=t.models.map(e=>this.serializeModel(o,e)).join(""),a=t.parameters.map(e=>this.serializeParameter(o,e)).join(""),r=t.renditions.map(e=>this.serializeRendition(o,e)).join(""),l=`${s}${n}${a}${ke.serializeTemplate(o,t.template)}${r}`,d=l.length>0?`>\n${l}${e}</${t.type}`:"/";return`${e}<${t.type}${i}${d}>\n`}serializeParameter(e,t){if(!t.name)return"";const o=this.serializeAttribute("name",t.name),i=this.serializeAttribute("value",t.value);return t.set?`${e}<pb:set-param xmlns=""${o}${i}/>\n`:`${e}<param${o}${i}/>\n`}serializeRendition(e,t){return`${e}<outputRendition xml:space="preserve" ${t.scope&&"null"!==t.scope?this.serializeAttribute("scope",t.scope):""}>\n${e}${ke.escape(t.css)}\n${e}</outputRendition>\n`}static serializeTemplate(e,t){return t?`${e}<pb:template xml:space="preserve" xmlns="">${t}</pb:template>\n`:""}serializeAttribute(e,t){return t?` ${e}="${ke.escape(t)}"`:""}static escape(e){return e?"string"==typeof e?e.replace(ke.replaceCharRegexp,ke.replaceChars):e:""}save(e=!1){document.dispatchEvent(new CustomEvent("pb-start-update"));const t=this.serializeOdd();this.shadowRoot.getElementById("dialog").show(P("odd.editor.save"),P("odd.editor.saving"));const o=this.shadowRoot.getElementById("saveOdd");o.url=`${this.getEndpoint()}/${this.lessThanApiVersion("1.0.0")?"modules/editor.xql":`api/odd/${this.odd}`}`,this.lessThanApiVersion("1.0.0")?(o.contentType="application/x-www-form-urlencoded",o.method="POST",o.params=null,o.body={action:"save",root:this.rootPath,"output-prefix":this.outputPrefix,"output-root":this.outputRoot,odd:this.odd,data:t}):(o.contentType="application/xml",o.method="PUT",o.params={root:this.rootPath,"output-prefix":this.outputPrefix,"output-root":this.outputRoot},o.body=t);o.generateRequest().then(t=>{this.handleSaveComplete({response:t},e)}).catch(this.handleSaveError.bind(this))}static _renderReport(e){return e.error?`\n                        <div class="list-group-item-danger">\n                          <h4 class="list-group-item-heading">${e.file}</h4>\n                          <h5 class="list-group-item-heading">Compilation error on line ${e.line}:</h5>\n                          <pre class="list-group-item-text">${e.error}</pre>\n                          <pre class="list-group-item-text">${e.message}</pre>\n                        </div>\n                    `:`\n                    <div class="list-group-item-success">\n                      <p class="list-group-item-text">Generated ${e.file}</p>\n                    </div>\n                `}handleSaveComplete(e,t=!1){const o=e.response;if("denied"===o.status)return this.shadowRoot.getElementById("dialog").set(P("odd.editor.denied"),P("odd.editor.denied-message",{odd:this.odd})),void document.dispatchEvent(new CustomEvent("pb-end-update"));let i;if(this.lessThanApiVersion("1.0.0")){i=`<div class="list-group">${o.report.map(ke._renderReport).join("")}</div>`}else{const{report:e}=o;i=`<div class="list-group">${e}</div>`}if(this.shadowRoot.getElementById("dialog").set(P("odd.editor.saved"),i),this._hasChanges=!1,document.dispatchEvent(new CustomEvent("pb-end-update")),t){T(new Blob([o.source],{type:"application/xml"}),{fileName:this.odd,extensions:[".odd"]}).then(()=>console.log(`<pb-odd-editor> ${this.odd} exported`),()=>console.log("<pb-odd-editor> export aborted"))}}handleSaveError(e){this.shadowRoot.getElementById("dialog").set("Error",e.error),document.dispatchEvent(new CustomEvent("pb-end-update"))}_reload(){this.shadowRoot.getElementById("dialog").confirm(P("odd.editor.reload"),P("odd.editor.reload-confirm")).then(()=>{this.load(),this.tabs=[],this.tabIndex=0,this.shadowRoot.getElementById("currentElement").innerHTML=""},()=>null)}_setCurrentSelection(e){null!=this.currentSelection&&this.currentSelection.removeAttribute("currentselection"),this.currentSelection=e.target,this.currentSelection.setAttribute("currentselection","true")}_changeSelection(e){if(e.preventDefault(),e.stopPropagation(),e.detail.target===this)return;let t;this.currentSelection&&void 0!==this.currentSelection.tagName&&this.currentSelection.removeAttribute("currentselection"),t=e.detail.target?e.detail.target:e.target,t.setAttribute("currentselection","true"),this.currentSelection=t}_selectElementspec(e){this.currentElementSpec&&"PB-ODD-ELEMENTSPEC-EDITOR"===this.currentElementSpec.tagName&&this.currentElementSpec.removeAttribute("currentselection");const t=e.target;t.setAttribute("currentselection","true"),this.currentElementSpec=t}nsDisabled(){return!this.useNamespace}_handleLoadError(e){console.log("loading error occurred: ",e);const t=this.shadowRoot.getElementById("errorMsg");t.style.background="red";const{url:o}=this.shadowRoot.getElementById("loadContent");console.log("url ",o),t.show("Error: ",`ODD file could not be loaded from ${o}`)}handleElementSpecChanged(e){this._hasChanges=!0;const t=this.elementSpecs.find(t=>t.ident===e.detail.ident),o=this.elementSpecs.indexOf(t),i=Object.assign(Object.assign({},t),{},{models:e.detail.models}),s=Array.from(this.elementSpecs);s.splice(o,1,i),this.elementSpecs=s}_inputTitle(e){this.title=e.target.value}}customElements.define("pb-odd-editor",ke);export{ke as PbOddEditor};
