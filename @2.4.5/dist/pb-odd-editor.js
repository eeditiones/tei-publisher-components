import{h as e,m as t,F as o,D as i,z as s,A as r,j as a,f as n}from"./paper-checkbox-102e3b43.js";import{E as d,T as l,D as p,p as c}from"./vaadin-element-mixin-ba82e638.js";import{f as h,N as m,j as u,k as b,l as g,A as v,L as f,c as w,h as y,b as _,w as x,p as $}from"./pb-mixin-47974747.js";import{t as E,g as S}from"./pb-i18n-aa0bfb74.js";import"./jinn-codemirror-9718e0e0.js";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const C=(e,t)=>{const o=e.startNode.parentNode,i=void 0===t?e.endNode:t.startNode,s=o.insertBefore(u(),i);o.insertBefore(u(),i);const r=new m(e.options);return r.insertAfterNode(s),r},k=(e,t)=>(e.setValue(t),e.commit(),e),A=(e,t,o)=>{const i=e.startNode.parentNode,s=o?o.startNode:e.endNode,r=t.endNode.nextSibling;r!==s&&b(i,t.startNode,r,s)},M=e=>{g(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},R=(e,t,o)=>{const i=new Map;for(let s=t;s<=o;s++)i.set(e[s],s);return i},I=new WeakMap,z=new WeakMap,P=h((e,t,o)=>{let i;return void 0===o?o=t:void 0!==t&&(i=t),t=>{if(!(t instanceof m))throw new Error("repeat can only be used in text bindings");const s=I.get(t)||[],r=z.get(t)||[],a=[],n=[],d=[];let l,p,c=0;for(const t of e)d[c]=i?i(t,c):c,n[c]=o(t,c),c++;let h=0,u=s.length-1,b=0,g=n.length-1;for(;h<=u&&b<=g;)if(null===s[h])h++;else if(null===s[u])u--;else if(r[h]===d[b])a[b]=k(s[h],n[b]),h++,b++;else if(r[u]===d[g])a[g]=k(s[u],n[g]),u--,g--;else if(r[h]===d[g])a[g]=k(s[h],n[g]),A(t,s[h],a[g+1]),h++,g--;else if(r[u]===d[b])a[b]=k(s[u],n[b]),A(t,s[u],s[h]),u--,b++;else if(void 0===l&&(l=R(d,b,g),p=R(r,h,u)),l.has(r[h]))if(l.has(r[u])){const e=p.get(d[b]),o=void 0!==e?s[e]:null;if(null===o){const e=C(t,s[h]);k(e,n[b]),a[b]=e}else a[b]=k(o,n[b]),A(t,o,s[h]),s[e]=null;b++}else M(s[u]),u--;else M(s[h]),h++;for(;b<=g;){const e=C(t,a[g+1]);k(e,n[b]),a[b++]=e}for(;h<=u;){const e=s[h++];null!==e&&M(e)}I.set(t,a),z.set(t,d)}}),B=new WeakMap,T=h(e=>t=>{const o=B.get(t);if(void 0===e&&t instanceof v){if(void 0!==o||!B.has(t)){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else e!==o&&t.setValue(e);B.set(t,e)}),O=e`<dom-module id="lumo-tab" theme-for="vaadin-tab">
  <template>
    <style>
      :host {
        box-sizing: border-box;
        padding: 0.5rem 0.75rem;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-xs);
        font-weight: 500;
        opacity: 1;
        color: var(--lumo-contrast-60pct);
        transition: 0.15s color, 0.2s transform;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        transform-origin: 50% 100%;
        outline: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: hidden;
        min-width: var(--lumo-size-m);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      :host(:not([orientation="vertical"])) {
        text-align: center;
      }

      :host([orientation="vertical"]) {
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
        content: "";
        position: absolute;
        display: var(--_lumo-tab-marker-display, block);
        bottom: 0;
        left: 50%;
        width: var(--lumo-size-s);
        height: 2px;
        background-color: var(--lumo-contrast-60pct);
        border-radius: var(--lumo-border-radius) var(--lumo-border-radius) 0 0;
        transform: translateX(-50%) scale(0);
        transform-origin: 50% 100%;
        transition: 0.14s transform cubic-bezier(.12, .32, .54, 1);
        will-change: transform;
      }

      :host([selected])::before,
      :host([selected])::after {
        background-color: var(--lumo-primary-color);
      }

      :host([orientation="vertical"])::before,
      :host([orientation="vertical"])::after {
        left: 0;
        bottom: 50%;
        transform: translateY(50%) scale(0);
        width: 2px;
        height: var(--lumo-size-xs);
        border-radius: 0 var(--lumo-border-radius) var(--lumo-border-radius) 0;
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
        transition-timing-function: cubic-bezier(.12, .32, .54, 1.5);
      }

      :host([orientation="vertical"][selected])::before,
      :host([orientation="vertical"][selected])::after {
        transform: translateY(50%) scale(1);
      }

      :host([selected]:not([active]))::after {
        opacity: 0;
      }

      :host(:not([orientation="vertical"])) ::slotted(a[href]) {
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

      :host ::slotted(iron-icon) {
        margin: 0 4px;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      :host ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25rem;
        box-sizing: border-box !important;
      }

      :host(:not([dir="rtl"])) ::slotted(iron-icon:first-child) {
        margin-left: 0;
      }

      :host(:not([dir="rtl"])) ::slotted(iron-icon:last-child) {
        margin-right: 0;
      }

      :host([theme~="icon-on-top"]) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        padding-bottom: 0.5rem;
        padding-top: 0.25rem;
      }

      :host([theme~="icon-on-top"]) ::slotted(a) {
        flex-direction: column;
        align-items: center;
        margin-top: -0.25rem;
        padding-top: 0.25rem;
      }

      :host([theme~="icon-on-top"]) ::slotted(iron-icon) {
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
        border-radius: var(--lumo-border-radius);
      }

      /* RTL specific styles */

      :host([dir="rtl"])::before,
      :host([dir="rtl"])::after {
        left: auto;
        right: 50%;
        transform: translateX(50%) scale(0);
      }

      :host([dir="rtl"][selected]:not([orientation="vertical"]))::before,
      :host([dir="rtl"][selected]:not([orientation="vertical"]))::after {
        transform: translateX(50%) scale(1);
      }

      :host([dir="rtl"]) ::slotted(iron-icon:first-child) {
        margin-right: 0;
      }

      :host([dir="rtl"]) ::slotted(iron-icon:last-child) {
        margin-left: 0;
      }

      :host([orientation="vertical"][dir="rtl"]) {
        transform-origin: 100% 50%;
      }

      :host([dir="rtl"][orientation="vertical"])::before,
      :host([dir="rtl"][orientation="vertical"])::after {
        left: auto;
        right: 0;
        border-radius: var(--lumo-border-radius) 0 0 var(--lumo-border-radius);
        transform-origin: 0% 50%;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(O.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const j=e=>class extends e{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");null!==e&&(this.value=e),this.addEventListener("focus",e=>this._setFocused(!0),!0),this.addEventListener("blur",e=>this._setFocused(!1),!0),this.addEventListener("mousedown",e=>{this._setActive(this._mousedown=!0);const t=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)}),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("keyup",e=>this._onKeyup(e))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this._setFocused(!1)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){e?(this.selected=!1,this.setAttribute("aria-disabled","true"),this.blur()):this.removeAttribute("aria-disabled")}_setFocused(e){e?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"),this._setActive(!1))}_setActive(e){e?this.setAttribute("active",""):this.removeAttribute("active")}_onKeydown(e){/^( |SpaceBar|Enter)$/.test(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this._setActive(!0))}_onKeyup(e){this.hasAttribute("active")&&(this._setActive(!1),this.click())}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/;class q extends(d(l(j(t)))){static get template(){return e`
    <slot></slot>
`}static get is(){return"vaadin-tab"}static get version(){return"3.2.0"}ready(){super.ready(),this.setAttribute("role","tab")}_onKeyup(e){const t=this.hasAttribute("active");if(super._onKeyup(e),t){const e=this.querySelector("a");e&&e.click()}}}customElements.define(q.is,q);const L=e`<dom-module id="lumo-tabs" theme-for="vaadin-tabs">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
      }

      :host(:not([orientation="vertical"])) {
        box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
        position: relative;
        min-height: var(--lumo-size-l);
      }

      :host([orientation="horizontal"]) [part="tabs"] ::slotted(vaadin-tab:not([theme~="icon-on-top"])) {
        justify-content: center;
      }

      :host([orientation="vertical"]) {
        box-shadow: -1px 0 0 0 var(--lumo-contrast-10pct);
      }

      :host([orientation="horizontal"]) [part="tabs"] {
        margin: 0 0.75rem;
      }

      :host([orientation="vertical"]) [part="tabs"] {
        width: 100%;
        margin: 0.5rem 0;
      }

      [part="forward-button"],
      [part="back-button"] {
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

      [part="forward-button"]:hover,
      [part="back-button"]:hover {
        color: inherit;
      }

      :host(:not([dir="rtl"])) [part="forward-button"] {
        right: 0;
      }

      [part="forward-button"]::after {
        content: var(--lumo-icons-angle-right);
      }

      [part="back-button"]::after {
        content: var(--lumo-icons-angle-left);
      }

      /* Tabs overflow */

      [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: none;
        -webkit-mask-image: var(--_lumo-tabs-overflow-mask-image);
        /* For IE11 */
        min-height: var(--lumo-size-l);
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="tabs"] {
          mask-image: var(--_lumo-tabs-overflow-mask-image);
        }
      }

      /* Horizontal tabs overflow */

      /* Both ends overflowing */
      :host([overflow~="start"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em, #000 calc(100% - 4em), transparent calc(100% - 2em));
      }

      /* End overflowing */
      :host([overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
      }

      /* Start overflowing */
      :host([overflow~="start"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em);
      }

      /* Vertical tabs overflow */

      /* Both ends overflowing */
      :host([overflow~="start"][overflow~="end"][orientation="vertical"]) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em, #000 calc(100% - 2em), transparent);
      }

      /* End overflowing */
      :host([overflow~="end"][orientation="vertical"]) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(#000 calc(100% - 2em), transparent);
      }

      /* Start overflowing */
      :host([overflow~="start"][orientation="vertical"]) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em);
      }

      :host [part="tabs"] ::slotted(:not(vaadin-tab)) {
        margin-left: var(--lumo-space-m);
      }

      /* Centered */

      :host([theme~="centered"][orientation="horizontal"]) [part="tabs"] {
        justify-content: center;
      }

      /* Small */

      :host([theme~="small"]),
      :host([theme~="small"]) [part="tabs"] {
        min-height: var(--lumo-size-m);
      }

      :host([theme~="small"]) [part="tabs"] ::slotted(vaadin-tab) {
        font-size: var(--lumo-font-size-s);
      }

      /* Minimal */

      :host([theme~="minimal"]) {
        box-shadow: none;
        /* This doesn't work with ShadyCSS */
        --_lumo-tab-marker-display: none;
      }

      /* Workaround for the above ShadyCSS issue */
      :host([theme~="minimal"]) [part="tabs"] ::slotted(vaadin-tab[selected])::before,
      :host([theme~="minimal"]) [part="tabs"] ::slotted(vaadin-tab[selected])::after {
        display: none;
      }

      /* Hide-scroll-buttons */

      :host([theme~="hide-scroll-buttons"]) [part="back-button"],
      :host([theme~="hide-scroll-buttons"]) [part="forward-button"] {
        display: none;
      }

      :host([theme~="hide-scroll-buttons"][overflow~="start"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em, #000 calc(100% - 2em), transparent 100%);
      }

      :host([theme~="hide-scroll-buttons"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 2em), transparent 100%);
      }

      :host([theme~="hide-scroll-buttons"][overflow~="start"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em);
      }

      /* Equal-width tabs */
      :host([theme~="equal-width-tabs"]) {
        flex: auto;
      }

      :host([theme~="equal-width-tabs"]) [part="tabs"] ::slotted(vaadin-tab) {
        flex: 1 0 0%;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="forward-button"]::after {
        content: var(--lumo-icons-angle-left);
      }

      :host([dir="rtl"]) [part="back-button"]::after {
        content: var(--lumo-icons-angle-right);
      }

      :host([orientation="vertical"][dir="rtl"]) {
        box-shadow: 1px 0 0 0 var(--lumo-contrast-10pct);
      }

      :host([dir="rtl"]) [part="forward-button"] {
        left: 0;
      }

      :host([dir="rtl"]) [part="tabs"] ::slotted(:not(vaadin-tab)) {
        margin-left: 0;
        margin-right: var(--lumo-space-m);
      }

      /* Both ends overflowing */
      :host([dir="rtl"][overflow~="start"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent 2em, #000 4em, #000 calc(100% - 4em), transparent calc(100% - 2em));
      }

      /* End overflowing */
      :host([dir="rtl"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
      }

      /* Start overflowing */
      :host([dir="rtl"][overflow~="start"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent 2em, #000 4em);
      }

      :host([dir="rtl"][theme~="hide-scroll-buttons"][overflow~="start"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent, #000 2em, #000 calc(100% - 2em), transparent 100%);
      }

      :host([dir="rtl"][theme~="hide-scroll-buttons"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 2em), transparent 100%);
      }

      :host([dir="rtl"][theme~="hide-scroll-buttons"][overflow~="start"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent, #000 2em);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(L.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const N=e=>class extends e{static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("click",e=>this._onClick(e)),this._observer=new o(this,e=>{this._setItems(this._filterItems(Array.from(this.children)))})}_enhanceItems(e,t,o,i){if(!i&&e){this.setAttribute("aria-orientation",t||"vertical"),this.items.forEach(e=>{t?e.setAttribute("orientation",t):e.removeAttribute("orientation"),e.updateStyles()}),this._setFocusable(o);const i=e[o];e.forEach(e=>e.selected=e===i),i&&!i.disabled&&this._scrollToItem(o)}}get focused(){return this.getRootNode().activeElement}_filterItems(e){return e.filter(e=>e._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const t=this._filterItems(e.composedPath())[0];let o;t&&!t.disabled&&(o=this.items.indexOf(t))>=0&&(this.selected=o)}_searchKey(e,t){this._searchReset=i.debounce(this._searchReset,s.after(500),()=>this._searchBuf=""),this._searchBuf+=t.toLowerCase();const o=1,r=e=>!(e.disabled||this._isItemHidden(e))&&0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf);this.items.some(e=>0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))||(this._searchBuf=t.toLowerCase());const a=1===this._searchBuf.length?e+1:e;return this._getAvailableIndex(a,o,r)}get _isRTL(){return!this._vertical&&"rtl"===this.getAttribute("dir")}_onKeydown(e){if(e.metaKey||e.ctrlKey)return;const t=e.key.replace(/^Arrow/,""),o=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(t)&&1===t.length){const e=this._searchKey(o,t);return void(e>=0&&this._focus(e))}const i=e=>!(e.disabled||this._isItemHidden(e));let s,r;const a=this._isRTL?-1:1;this._vertical&&"Up"===t||!this._vertical&&"Left"===t?(r=-a,s=o-a):this._vertical&&"Down"===t||!this._vertical&&"Right"===t?(r=a,s=o+a):"Home"===t?(r=1,s=0):"End"===t&&(r=-1,s=this.items.length-1),s=this._getAvailableIndex(s,r,i),s>=0&&(this._focus(s),e.preventDefault())}_getAvailableIndex(e,t,o){const i=this.items.length;for(let s=0;"number"==typeof e&&s<i;s++,e+=t||1){e<0?e=i-1:e>=i&&(e=0);if(o(this.items[e]))return e}return-1}_isItemHidden(e){return"none"===getComputedStyle(e).display}_setFocusable(e){e=this._getAvailableIndex(e,1,e=>!e.disabled);const t=this.items[e]||this.items[0];this.items.forEach(e=>e.tabIndex=e===t?0:-1)}_focus(e){const t=this.items[e];this.items.forEach(e=>e.focused=e===t),this._setFocusable(e),this._scrollToItem(e),t.focus()}focus(){this._observer&&this._observer.flush();const e=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);e&&e.focus()}get _scrollerElement(){}_scrollToItem(e){const t=this.items[e];if(!t)return;const o=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],i=this._scrollerElement.getBoundingClientRect(),s=(this.items[e+1]||t).getBoundingClientRect(),r=(this.items[e-1]||t).getBoundingClientRect();let a=0;!this._isRTL&&s[o[1]]>=i[o[1]]||this._isRTL&&s[o[1]]<=i[o[1]]?a=s[o[1]]-i[o[1]]:(!this._isRTL&&r[o[0]]<=i[o[0]]||this._isRTL&&r[o[0]]>=i[o[0]])&&(a=r[o[0]]-i[o[0]]),this._scroll(a)}get _vertical(){return"horizontal"!==this.orientation}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{const t=p.detectScrollType(),o=p.getNormalizedScrollLeft(t,this.getAttribute("dir")||"ltr",this._scrollerElement)+e;p.setNormalizedScrollLeft(t,this.getAttribute("dir")||"ltr",this._scrollerElement,o)}}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,D=/Apple.* Version\/(9|10)/.test(navigator.userAgent);class U extends(d(N(l(r([n],t))))){static get template(){return e`
    <style>
      :host {
        display: flex;
        align-items: center;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([orientation="vertical"]) {
        display: block;
      }

      :host([orientation="horizontal"]) [part="tabs"] {
        flex-grow: 1;
        display: flex;
        align-self: stretch;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
      }

      /* This seems more future-proof than \`overflow: -moz-scrollbars-none\` which is marked obsolete
         and is no longer guaranteed to work:
         https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Mozilla_Extensions */
      @-moz-document url-prefix() {
        :host([orientation="horizontal"]) [part="tabs"] {
          overflow: hidden;
        }
      }

      :host([orientation="horizontal"]) [part="tabs"]::-webkit-scrollbar {
        display: none;
      }

      :host([orientation="vertical"]) [part="tabs"] {
        height: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      [part="back-button"],
      [part="forward-button"] {
        pointer-events: none;
        opacity: 0;
        cursor: default;
      }

      :host([overflow~="start"]) [part="back-button"],
      :host([overflow~="end"]) [part="forward-button"] {
        pointer-events: auto;
        opacity: 1;
      }

      [part="back-button"]::after {
        content: '◀';
      }

      [part="forward-button"]::after {
        content: '▶';
      }

      :host([orientation="vertical"]) [part="back-button"],
      :host([orientation="vertical"]) [part="forward-button"] {
        display: none;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="back-button"]::after {
        content: '▶';
      }

      :host([dir="rtl"]) [part="forward-button"]::after {
        content: '◀';
      }
    </style>
    <div on-click="_scrollBack" part="back-button"></div>

    <div id="scroll" part="tabs">
      <slot></slot>
    </div>

    <div on-click="_scrollForward" part="forward-button"></div>
`}static get is(){return"vaadin-tabs"}static get version(){return"3.2.0"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["_updateOverflow(items.*, vertical)"]}ready(){super.ready(),this.addEventListener("iron-resize",()=>this._updateOverflow()),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),a(this,()=>{this._updateOverflow()})}_scrollForward(){this._scroll(-this.__direction*this._scrollOffset)}_scrollBack(){this._scroll(this.__direction*this._scrollOffset)}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return this._vertical||"rtl"!==this.getAttribute("dir")?-1:1}_updateOverflow(){const e=this._vertical?this._scrollerElement.scrollTop:this.__getNormalizedScrollLeft(this._scrollerElement);let t=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;t-=1;let o=e>0?"start":"";o+=e+this._scrollOffset<t?" end":"",1==this.__direction&&(o=o.replace(/start|end/gi,e=>"start"===e?"end":"start")),o?this.setAttribute("overflow",o.trim()):this.removeAttribute("overflow"),this._repaintShadowNodesHack()}_repaintShadowNodesHack(){if(D&&this.root){const e="-webkit-backface-visibility";this.root.querySelectorAll("*").forEach(t=>{t.style[e]="visible",t.style[e]=""})}}}customElements.define(U.is,U);class V extends f{static get styles(){return w`
            :host {
                display: block;
            }
            .wrapper{
                display:grid;
                grid-template-columns:150px auto 50px;
                grid-column-gap:20px;
                grid-row-gap:20px;
                margin-bottom:10px;
            }

            .editor label {
                margin-bottom:5px;
                font-size: 12px;
                font-weight: 400;
                color: var(--paper-grey-500);
            }

            paper-dropdown-menu{
            }
            
            paper-icon-button{
                align-self:center;
            }
        `}render(){return y`
        <div class="wrapper">
            <paper-dropdown-menu label="Scope">
                <paper-listbox id="scopeList" slot="dropdown-content" selected="${this.scope}" attr-for-selected="value"
                    @iron-select="${this._listchanged}">
                      ${this.scopes.map(e=>y`
                            <paper-item value="${e}">${e}</paper-item>
                        `)}
                </paper-listbox>
            </paper-dropdown-menu>
            <div class="editor">
                <label>Rendition</label>
                <jinn-codemirror
                    id="editor"
                    label="Rendition"
                    code="${this.css||""}"
                    mode="css"
                    @update="${this._handleCodeChange}"></jinn-codemirror>
            </div>
            <paper-icon-button @click="${this._remove}" icon="delete" title="delete this rendition"></paper-icon-button>
        </div>



        <slot></slot>

        `}static get properties(){return{scopes:{type:Array},css:{type:String,reflect:!0},scope:{type:String,reflect:!0},selected:{type:String}}}constructor(){super(),this.scopes=["","before","after"],this.css="",this.scope="",this.selected="",this._initialized=!1}connectedCallback(){super.connectedCallback(),this.css=this.css.trim(),this.dispatchEvent(new CustomEvent("rendition-connected",{composed:!0,bubbles:!0,detail:{target:this}}))}firstUpdated(e){this.refreshEditor(),this._initialized=!0}refreshEditor(){console.log("refreshEditor");this.shadowRoot.getElementById("editor")}_remove(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("remove-rendition",{}))}_handleCodeChange(){this.css=this.shadowRoot.getElementById("editor").value,this.dispatchEvent(new CustomEvent("rendition-changed",{composed:!0,bubbles:!0,detail:{name:this.name,css:this.css,scope:this.scope}}))}_listchanged(e){const t=this.shadowRoot.getElementById("scopeList");this.scope=t.selected}}customElements.define("pb-odd-rendition-editor",V);class F extends f{static get styles(){return w`
            :host {
                display: block;
            }
            .wrapper{
                display:grid;
                grid-template-columns:150px auto 50px 50px;
                grid-column-gap:20px;
                grid-row-gap:20px;
                margin-bottom:10px;
            }
            paper-dropdown-menu{
                align-self:start;
            }
            paper-icon-button, paper-checkbox {
                align-self: center;
                margin-top: 16px;
            }

            .editor label {
                margin-bottom:5px;
                font-size: 12px;
                font-weight: 400;
                color: var(--paper-grey-500);
            }
        `}render(){return y`
        <div class="wrapper">
            
            <paper-autocomplete id="combo" text="${this.name}" placeholder="${E("odd.editor.model.param-name-placeholder")}" label="Name" 
                .source="${this._currentParameters}"></paper-autocomplete>

            <div class="editor">
                <label>Parameter</label>
                <jinn-codemirror id="editor"
                        mode="xquery"
                        code="${this.value}"
                        linter="${this.endpoint}/${_(this.apiVersion,"1.0.0")?"modules/editor.xql":"api/lint"}"></jinn-codemirror>
            </div>
            <paper-checkbox id="set" ?checked="${this.setParam}" @change="${this._handleCodeChange}">${E("odd.editor.model.set-param")}</paper-checkbox>
            <paper-icon-button @click="${this._delete}" icon="delete" title="delete this parameter"></paper-icon-button>
        </div>

        
        `}static get properties(){return{name:{type:String,reflect:!0},value:{type:String,reflect:!0},behaviour:{type:String},parameters:{type:Object},setParam:{type:Boolean,attribute:"set"},_currentParameters:{type:Array},endpoint:{type:String},apiVersion:{type:String}}}constructor(){super(),this.name="",this.value="",this.setParam=!1,this.behaviour="",this.currentParameters=[],this.parameters={"":[],alternate:["default","alternate","persistent"],anchor:["content","id"],block:["content"],body:["content"],break:["content","type","label"],cell:["content"],cit:["content","source"],document:["content"],figure:["content","title"],graphic:["content","url","width","height","scale","title"],heading:["content","level"],inline:["content"],link:["content","uri","target"],list:["content","type"],listItem:["content","n"],metadata:["content"],note:["content","place","label"],omit:[],paragraph:["content"],row:["content"],section:["content"],table:["content"],text:["content"],title:["content"],webcomponent:["content","name"]},this.selected="",this.endpoint=""}connectedCallback(){super.connectedCallback(),this.value=this.value.trim(),this.dispatchEvent(new CustomEvent("parameter-connected",{composed:!0,bubbles:!0,detail:{target:this}}))}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),"behaviour"===e&&(this._currentParameters=this.parameters[o])}firstUpdated(e){this.selected=this.parameters[this.behaviour]||[],this.requestUpdate(),this.shadowRoot.getElementById("combo").addEventListener("focused-changed",this._handleCodeChange.bind(this)),this.shadowRoot.getElementById("editor").addEventListener("update",this._handleCodeChange.bind(this))}refreshEditor(){this.shadowRoot.getElementById("editor")}_delete(e){console.log("parameter delete ",e),e.preventDefault(),this.dispatchEvent(new CustomEvent("parameter-remove",{}))}_handleCodeChange(e){console.log("_handleCodeChange ",e),this.value=this.shadowRoot.getElementById("editor").content||"",console.log("value %s",this.value),this.name=this.shadowRoot.getElementById("combo").text,this.setParam=this.shadowRoot.getElementById("set").checked,this.dispatchEvent(new CustomEvent("parameter-changed",{composed:!0,bubbles:!0,detail:{name:this.name,value:this.value,set:this.setParam}}))}}customElements.define("pb-odd-parameter-editor",F);class H extends f{static get styles(){return w`
            :host {
                display: flex;
                flex-direction:column;
            }
            h1, h2, h3, h4, h5, h6 {
                font-family: "Oswald", Verdana, "Helvetica", sans-serif;
                font-weight: 400 !important;
            }

            form {
                margin-bottom: 8px;
            }

            paper-input, paper-autocomplete {
                margin-bottom: 16px;
            }

            .models {
                margin-left:20px;
                margin-top:10px;
            }

            .btn, .btn-group {
                margin-top: 0;
                margin-bottom: 0;
            }

            header {
                // background-color: #d1dae0;
                background:var(--paper-grey-300);
                margin:0;
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
            h4 .btn-group{
                text-align: right;
                display: none;
            }

            #toggle, .modelType{
                align-self:center;
            }

            header div.info {
                padding: 0 16px 4px;
                margin: 0;
                font-size: 85%;
                display: block;
                margin:0 0 0 32px;
            }
            header div.info *{
                display: block;
                line-height: 1.2;
            }

            header .outputDisplay{
                text-transform: uppercase ;
            }
            header .description{
                font-style: italic;
            }

            header .predicate {
                color: #ff5722;
            }

            .predicate label, .template label {
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

            .behaviourWrapper{
                display:grid;
                grid-template-columns: 140px 40px 140px auto;
            }
            .behaviourWrapper > *{
                display:inline;
                align-self:stretch;
            }
            
            .group {
                margin: 0;
                font-size: 16px;
                font-weight: bold;
            }

            .group .title {
                /*text-decoration: underline;*/
            }

            .renditions, .parameters {
                padding-left: 16px;
                border-left: 3px solid #e0e0e0;
                margin-bottom:20px;
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

            :host([currentselection]) > form > header{
                @apply --shadow-elevation-4dp;
                border-left:3px solid var(--paper-blue-500);
            }

            paper-menu-button paper-icon-button{
                margin-left:-10px;
            }

            /* need to play it save for FF */
            :host([currentselection]) > form > header > h4 > .btn-group{
                display: inline-block;
            }
            iron-collapse{
            }

            .renditions{
                margin-top:10px;
            }
            
            .details{
                padding:0px 50px 20px 20px;
                background:var(--paper-grey-200);
            }
            
            .editor {
                margin-bottom: 20px;
            }

            .editor label {
                margin-bottom:5px;
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
        `}static get properties(){return{behaviour:{type:String},predicate:{type:String,reflect:!0,converter:(e,t)=>"null"===e.toLowerCase()?"":e},type:{type:String,reflect:!0},template:{type:String,reflect:!0,converter:(e,t)=>"null"===e.toLowerCase()?"":e},output:{type:String,reflect:!0,converter:(e,t)=>"null"===e.toLowerCase()?"":e},css:{type:String,converter:(e,t)=>"null"===e.toLowerCase()?"":e},mode:{type:String},model:{type:Object},models:{type:Array},parameters:{type:Array},renditions:{type:Array},desc:{type:String,converter:(e,t)=>"null"===e.toLowerCase()?"":e},sourcerend:{type:String},show:{type:Boolean,reflect:!0},outputs:{type:Array},behaviours:{type:Array},icon:{type:String},open:{type:String},hasCustomBehaviour:{type:Boolean},endpoint:{type:String},apiVersion:{type:String}}}constructor(){super(),this.behaviour="inline",this.predicate="",this.type="",this.template="",this.output="",this.css="",this.mode="",this.model={},this.model.models=[],this.parameters=[],this.renditions=[],this.desc="",this.sourcerend="",this.show=!1,this.outputs=["","web","print","epub","fo","latex","plain"],this.parentModel=[],this.behaviours=["alternate","anchor","block","body","break","cell","cit","document","figure","graphic","heading","inline","link","list","listItem","metadata","note","omit","paragraph","pass-through","row","section","table","text","title","webcomponent"],this.icon="expand-more",this.hasCustomBehaviour=!1}render(){let e;switch(this.output){case"web":case"epub":e="html";break;case"latex":e="tex";break;case"plain":e="default";break;case"fo":case"print":e="xml";break;default:e="html"}return y`
        <form>
            <header> 
                <h4>
                    <paper-icon-button id="toggle"
                                       icon="${this.icon}" @click="${this.toggle}"
                                       class="model-collapse"></paper-icon-button>
                                       
                    <span class="modelType">${this.type}<span class="behaviour" ?hidden="${this._isGroupOrSequence()}">${this.behaviour}</span></span>

                    <span class="btn-group">
                        <paper-icon-button @click="${this._moveDown}" icon="arrow-downward"
                                           title="move down"></paper-icon-button>
                        <paper-icon-button @click="${this._moveUp}" icon="arrow-upward"
                                           title="move up"></paper-icon-button>
                        <paper-icon-button @click="${this._requestRemoval}" icon="delete" title="remove"></paper-icon-button>
                        <paper-icon-button @click="${this._copy}" icon="content-copy" title="copy"></paper-icon-button>
                        <paper-icon-button @click="${this._paste}" icon="content-paste"
                                           ?hidden="${this._isModel}"></paper-icon-button>

                        ${this._isGroupOrSequence()?y`
                            <paper-menu-button horizontal-align="right">
                                <paper-icon-button icon="add" slot="dropdown-trigger"></paper-icon-button>
                                <paper-listbox id="modelType" slot="dropdown-content" @iron-select="${this._addNested}"
                                               attr-for-selected="value">
                                   ${"modelSequence"===this.type?y`
                                            <paper-item value="model">model</paper-item>
                                        `:""}
                                   ${"modelGrp"===this.type?y`
                                            <paper-item value="modelSequence">modelSequence</paper-item>
                                            <paper-item value="model">model</paper-item>
                                        `:""}
                                </paper-listbox>
                            </paper-menu-button>
                            `:""}
                    </span>
                </h4>
                <div class="info">
                    <div class="outputDisplay">${this.output}</div>
                    <div class="description">${this.desc}</div>
                    <div class="predicate">${this.predicate}</div>
                </p>
            </header>
            <iron-collapse id="details" ?opened="${this.show}" class="details">
                <div class="horizontal">
                    <paper-dropdown-menu class="selectOutput" label="Output">
                        <paper-listbox id="output" slot="dropdown-content" attr-for-selected="value"
                                    selected="${this.output}" @iron-select="${this._selectOutput}">

                            ${this.outputs.map(e=>y`
                                <paper-item value="${e}">${e}</paper-item>
                            `)}

                        </paper-listbox>
                    </paper-dropdown-menu>
                    <paper-input id="mode" .value="${this.mode}"
                        placeholder="${E("odd.editor.model.mode-placeholder")}"
                        label="Mode"
                        @change="${this._inputMode}"></paper-input>
                </div>
                <paper-input id="desc" .value="${this.desc}" placeholder="${E("odd.editor.model.description-placeholder")}"
                    label="Description" @change="${this._inputDesc}"></paper-input>

                <div class="editor">
                    <label>Predicate</label>
                    <jinn-codemirror id="predicate"
                        code="${this.predicate}"   
                        mode="xquery"
                        linter="${this.endpoint}/${_(this.apiVersion,"1.0.0")<0?"modules/editor.xql":"api/lint"}"
                        placeholder="${E("odd.editor.model.predicate-placeholder")}"
                        @update="${this._updatePredicate}"></jinn-codemirror>
                </div>
               
                ${this._isModel()?y`
                        <div>
                            <div class="behaviourWrapper">
                                <paper-dropdown-menu label="behaviour" id="behaviourMenu" ?disabled="${this.hasCustomBehaviour}">
                                    <paper-listbox id="behaviour" slot="dropdown-content" attr-for-selected="value"
                                                   selected="${this.behaviour}" @iron-select="${this._selectBehaviour}">
                                        ${this.behaviours.map(e=>y`
                                            <paper-item value="${e}">${e}</paper-item>
                                        `)}
                                    </paper-listbox>
                                </paper-dropdown-menu>
                                <span style="align-self:center;justify-self: center;"> ${E("odd.editor.model.link-with-or")} </span>
                                <paper-input id="custombehaviour" label="" @input="${this._handleCustomBehaviour}" placeHolder="${E("odd.editor.model.custom-behaviour-placeholder")}"></paper-input>
                                <span></span>
                            </div>

                                
    
                            <paper-input id="css" .value="${this.css}"
                                placeholder="${E("odd.editor.model.css-class-placeholder")}"
                                label="CSS Class"
                                @change="${this._inputCss}"></paper-input>
                            
                            <div class="editor">
                                <label>Template</label>
                                <jinn-codemirror id="template"
                                                 code="${this.template}"
                                                 mode="${e}"
                                                 placeholder="${E("odd.editor.model.template-placeholder")}"
                                                 @update="${this._updateTemplate}">
                                    <div slot="toolbar">
                                        <paper-button data-mode="xml" data-command="selectElement" data-key="mod-e mod-s"
                                            title="Select element around current cursor position">&lt;|></paper-button>
                                        <paper-button data-mode="xml" data-command="encloseWith" data-key="mod-e mod-e"
                                            title="Enclose selection in new element">&lt;...&gt;</paper-button>
                                        <paper-button data-mode="xml" data-command="removeEnclosing" title="Remove enclosing tags" 
                                            data-key="mod-e mod-r" class="sep">&lt;X></paper-button>
                                        <paper-button data-mode="html" data-command="selectElement" data-key="mod-e mod-s"
                                            title="Select element around current cursor position">&lt;|></paper-button>
                                        <paper-button data-mode="html" data-command="encloseWith" data-key="mod-e mod-e"
                                            title="Enclose selection in new element">&lt;...&gt;</paper-button>
                                        <paper-button data-mode="html" data-command="removeEnclosing" title="Remove enclosing tags" 
                                            data-key="mod-e mod-r" class="sep">&lt;X></paper-button>
                                        <paper-button data-key="mod-e mod-p" data-command="snippet" data-params="[[\${_}]]" title="Insert template variable">[[...]]</paper-button>
                                    </div>
                                </jinn-codemirror>
                            </div>
                        </div>
        
                        <div class="parameters">
                            <div class="group">
                                <span class="title">Parameters</span>
                                <paper-icon-button icon="add"
                                                   @click="${this._addParameter}"></paper-icon-button>
                            </div>
                            ${P(this.parameters,e=>e.name,(e,t)=>y`
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
                                    <paper-icon-button icon="add" @click="${this._addRendition}"></paper-icon-button>
                                </div>
                                <div class="source">
                                    <paper-checkbox ?checked="${this.sourcerend}" id="sourcerend">Use source rendition</paper-checkbox>
                                </div>
                            </div>

                            ${P(this.renditions,e=>e.name,(e,t)=>y`
                                <pb-odd-rendition-editor scope="${e.scope}"
                                       css="${e.css}"
                                       @remove-rendition="${e=>this._removeRendition(e,t)}"
                                       @rendition-changed="${e=>this._updateRendition(e,t)}"
                                       ></pb-odd-rendition-editor>
                            `)}

                        </div>
                    `:""}
            </iron-collapse>
            
            <div class="models">
                ${P(this.model.models,(e,t)=>y`
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
        `}firstUpdated(){super.firstUpdated(),this.hasCustomBehaviour=this.behaviours.indexOf(this.behaviour)<0,this.hasCustomBehaviour&&(this.shadowRoot.getElementById("custombehaviour").value=this.behaviour)}updated(e){e.has("show")&&this.show&&this.refreshEditors()}refreshEditors(){if(console.log("refreshEditors"),this._isGroupOrSequence())return console.log("asfdfa");const e=this.shadowRoot.querySelectorAll("pb-odd-model-editor");for(let t=0;t<e.length;t++)e[t].refreshEditors();const t=this.shadowRoot.querySelectorAll("pb-odd-rendition-editor");for(let e=0;e<t.length;e++)t[e].refreshEditor();const o=this.shadowRoot.querySelectorAll("pb-odd-parameter-editor");for(let e=0;e<o.length;e++)o[e].refreshEditor()}toggle(e){this.show=!this.show,this.toggleButtonIcon();const t=this.model,o=Object.assign({},t,{show:this.show});this.model=o,this.refreshEditors(),this.dispatchEvent(new CustomEvent("model-changed",{composed:!0,bubbles:!0,detail:{oldModel:t,newModel:o}}))}toggleButtonIcon(){this.show?this.icon="expand-less":this.icon="expand-more"}_isModel(){return"model"===this.type}_isGroupOrSequence(){return"model"!==this.type}static _templateMode(e){switch(e){case"latex":return"latex";case"web":default:return"xml"}}_changeSelection(e){if(e.detail.target==this)return;e.preventDefault(),e.stopPropagation(),null!=this.currentSelection&&this.currentSelection.removeAttribute("currentselection");const t=e.detail.target;t.setAttribute("currentselection","true"),this.currentSelection=t}_requestRemoval(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("model-remove"))}_moveDown(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("model-move-down",{composed:!0,bubbles:!0,detail:{model:this}}))}_moveUp(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("model-move-up"))}_addNested(e){const t={behaviour:"inline",css:"",desc:"",predicate:"",type:e.detail.item.getAttribute("value"),output:"",sourcerend:!1,models:[],mode:"",parameters:[],renditions:[],template:"",show:!0},o=this.model,i=Array.from(this.model.models);i.unshift(t),this.model=Object.assign({},o,{models:i});this.shadowRoot.querySelector("#modelType").select(""),this.dispatchEvent(new CustomEvent("model-changed",{composed:!0,bubbles:!0,detail:{oldModel:o,newModel:this.model}}))}_removeModel(e){console.log("_removeModel ",e),e.stopPropagation();const{model:t}=e.target,o=this.model.models.indexOf(t);this.shadowRoot.getElementById("dialog").confirm(S("odd.editor.model.delete-model-label"),S("odd.editor.model.delete-model-message")).then(()=>{const e=this.model,t=Array.from(this.model.models);t.splice(o,1),this.model=Object.assign({},e,{models:t}),this.models=t,this.dispatchEvent(new CustomEvent("model-changed",{composed:!0,bubbles:!0,detail:{oldModel:e,newModel:this.model}}))},()=>null)}_moveModelDown(e){console.log("MODEL._moveModelDown ",e),e.stopPropagation();const{model:t}=e.target,o=this.model.models.indexOf(t);if(o===this.model.models.length)return;const i=this.model,s=Array.from(this.model.models);s.splice(o,1),s.splice(o+1,0,t),this.model=Object.assign({},i,{models:s});const r=this.shadowRoot.querySelectorAll("pb-odd-model-editor")[o+1];this._setCurrentSelection(o+1,r),this.dispatchEvent(new CustomEvent("model-changed",{composed:!0,bubbles:!0,detail:{oldModel:i,newModel:this.model}})),this.requestUpdate()}_moveModelUp(e){e.stopPropagation();const{model:t}=e.target,o=this.model.models.indexOf(t);if(0===o)return;const i=this.model,s=Array.from(this.model.models);s.splice(o,1),s.splice(o-1,0,t),this.model=Object.assign({},i,{models:s});const r=this.shadowRoot.querySelectorAll("pb-odd-model-editor")[o-1];this._setCurrentSelection(o-1,r),this.dispatchEvent(new CustomEvent("model-changed",{composed:!0,bubbles:!0,detail:{oldModel:i,newModel:this.model}}))}handleModelChanged(e){console.log("handleModelChanged ",e,this),e.stopPropagation();const t=this.model,o=this.model.models.indexOf(e.detail.oldModel),i=Array.from(this.model.models);i.splice(o,1,e.detail.newModel),this.model=Object.assign({},t,{models:i}),this.dispatchEvent(new CustomEvent("model-changed",{composed:!0,bubbles:!0,detail:{oldModel:t,newModel:this.model}}))}setCurrentSelection(e,t){e.preventDefault(),e.stopPropagation(),this._setCurrentSelection(t,e.target)}_setCurrentSelection(e,t){const o=this.shadowRoot.querySelectorAll("pb-odd-model-editor")[e];o&&(o.hasAttribute("currentselection")||(this.dispatchEvent(new CustomEvent("current-changed",{composed:!0,bubbles:!0,detail:{target:t}})),this.requestUpdate()))}_inputDesc(e){this.desc=e.composedPath()[0].value,this._fireModelChanged("desc",this.desc)}_selectOutput(e){this.output=e.composedPath()[0].selected,this._fireModelChanged("output",this.output)}_updatePredicate(){this.predicate=this.shadowRoot.getElementById("predicate").value,console.log("_updatePredicate ",this.predicate),this._fireModelChanged("predicate",this.predicate)}_selectBehaviour(e){this.behaviour=e.composedPath()[0].selected,this._fireModelChanged("behaviour",this.behaviour)}_inputCss(e){this.css=e.composedPath()[0].value,this._fireModelChanged("css",this.css)}_inputMode(e){this.mode=e.composedPath()[0].value,this._fireModelChanged("mode",this.mode)}_updateTemplate(e){this.template=this.shadowRoot.getElementById("template").content,this._fireModelChanged("template",this.template)}_addParameter(e){this.parameters.push({name:"",value:""}),this._fireModelChanged("parameters",this.parameters)}_updateParam(e,t){this.parameters[t].name=e.detail.name,this.parameters[t].value=e.detail.value,this.parameters[t].set=e.detail.set,this._fireModelChanged("parameters",this.parameters)}_removeParam(e,t){this.parameters.splice(t,1),this._fireModelChanged("parameters",this.parameters)}_addRendition(e){this.renditions.push({scope:"",css:""}),this._fireModelChanged("renditions",this.renditions)}_updateRendition(e,t){this.renditions[t].css=e.detail.css,this.renditions[t].scope=e.detail.scope,this._fireModelChanged("renditions",this.renditions)}_removeRendition(e,t){this.renditions.splice(t,1),this._fireModelChanged("renditions",this.renditions)}_fireModelChanged(e,t){const o=this.model;this.model=Object.assign({},this.model,{[e]:t}),console.log("model changed for %s: %o - %o",e,t,this.model),this.dispatchEvent(new CustomEvent("model-changed",{composed:!0,bubbles:!0,detail:{oldModel:o,newModel:this.model}})),this.requestUpdate()}_copy(e){e.preventDefault(),e.stopPropagation(),console.log("odd-model.copy ",e),console.log("odd-model.copy data",this.model),this.dispatchEvent(new CustomEvent("odd-copy",{composed:!0,bubbles:!0,detail:{model:this.model}}))}_paste(e){console.log("model _paste ",e),this.dispatchEvent(new CustomEvent("odd-paste",{composed:!0,bubbles:!0,detail:{target:this}}))}_handleCustomBehaviour(e){this.behaviour=e.composedPath()[0].value,this._fireModelChanged("behaviour",this.behaviour),""===this.behaviour?(this.behaviour="inline",this.hasCustomBehaviour=!1):this.hasCustomBehaviour=!0,this.requestUpdate()}}customElements.define("pb-odd-model-editor",H);class K extends f{static get styles(){return w`
            :host {
                display: block;
                padding: 4px 10px;
                height: auto;
            }

            h1, h2, h3, h4, h5, h6 {
                font-family: "Oswald", Verdana, "Helvetica", sans-serif;
                font-weight: 400 !important;
            }
            

            input {
                vertical-align: middle;
            }

            .ident {
                display: inline-block;
                font-size:26px;
                position:relative;
            }
            .mode{
                font-size:10px;
                display:inline-block;
                text-transform:uppercase;
                border-radius:12px;
                color:var(--paper-grey-700);
                background:var(--paper-grey-300);
                padding:2px 6px;
                border:thin solid var(--paper-grey-500);
                margin-left:6px;
                position:absolute;
                top:8px;
            }
            
            :host([currentselection]){
                    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);

            }

            :host([currentSelection]) > h3, :host([currentSelection]) > header{
                border-left:thin solid var(--paper-blue-500);
            }
            

            h3{
                display:grid;
                grid-template-columns:260px auto 160px;
                align-items:center;
            }
            h3 .controls{
                text-align: right;
                margin-right: 10px;
            }

            h3 .ident{
                align-self: center;
             }

            paper-menu-button paper-icon-button{
                margin-left:-10px;
            }

            /*todo: this does not take effect*/
            iron-collapse.models{
                --iron-collapse-transition-duration:0.4s;
            }
            
            .models{
                padding:10px;
            }
        `}static get properties(){return{ident:{type:String},mode:{type:String},models:{type:Array},endpoint:{type:String},apiVersion:{type:String}}}constructor(){super(),this.ident="",this.mode="",this.models=[],this.icon="expand-more"}render(){return y`   
        <h3>
            <span class="ident">${this.ident}<span class="mode">mode: ${this.mode}</span></span>
            <span class="spacer"></span>

            <span class="controls">
                <paper-icon-button @click="${this._remove}" icon="delete"></paper-icon-button>
                <paper-icon-button @click="${this._paste}" icon="content-paste"></paper-icon-button>
                <paper-menu-button horizontal-align="right">
                    <paper-icon-button icon="add" slot="dropdown-trigger"></paper-icon-button>
                    <paper-listbox id="addModel" slot="dropdown-content" @iron-select="${this._addModel}"
                                   attr-for-selected="value">
                        <paper-item value="model">model</paper-item>
                        <paper-item value="modelSequence">modelSequence</paper-item>
                        <paper-item value="modelGrp">modelGrp</paper-item>
                    </paper-listbox>
                </paper-menu-button>


            </span>
        </h3>

        <div>
            ${P(this.models,(e,t)=>y`
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
        `}addModel(e){this.models.unshift(e),this.requestUpdate()}_addModel(e){console.log("ELEMENTSPEC._addModel ",e);const t=this.shadowRoot.getElementById("addModel"),o={behaviour:"inline",css:"",mode:"",predicate:"",desc:"",type:t.selected,output:"",template:"",sourcerend:!1,models:[],parameters:[],renditions:[],show:!0},i=Array.from(this.models);i.unshift(o),this.models=i,this.dispatchEvent(new CustomEvent("element-spec-changed",{composed:!0,bubbles:!0,detail:{action:"models",ident:this.ident,models:this.models}})),t.selected="",this.requestUpdate()}_remove(e){this.dispatchEvent(new CustomEvent("element-spec-removed",{composed:!0,bubbles:!0,detail:{target:this}}))}_paste(e){console.log("_paste ",e),this.dispatchEvent(new CustomEvent("odd-paste",{composed:!0,bubbles:!0,detail:{target:this}}))}setCurrentSelection(e,t){e.preventDefault(),e.stopPropagation(),this._setCurrentSelection(t,e.target)}_setCurrentSelection(e,t){const o=this.shadowRoot.querySelectorAll("pb-odd-model-editor")[e];o&&(o.hasAttribute("currentselection")||(this.dispatchEvent(new CustomEvent("current-changed",{composed:!0,bubbles:!0,detail:{target:t}})),this.requestUpdate()))}_removeModel(e){console.log("_removeModel ",e),e.stopPropagation();const{model:t}=e.target,o=this.models.indexOf(t);this.shadowRoot.getElementById("dialog").confirm(S("odd.editor.model.delete-model-label"),S("odd.editor.model.delete-model-message")).then(()=>{const e=Array.from(this.models);e.splice(o,1),this.models=e,this.dispatchEvent(new CustomEvent("element-spec-changed",{composed:!0,bubbles:!0,detail:{action:"models",ident:this.ident,models:this.models}}))},()=>null)}_moveModelDown(e){console.log("ELEMENTSPEC._moveModelDown ",e),e.stopPropagation();const{model:t}=e.target,o=this.models.indexOf(t);if(o===this.models.length)return;const i=Array.from(this.models);i.splice(o,1),i.splice(o+1,0,t),this.models=i;const s=this.shadowRoot.querySelectorAll("pb-odd-model-editor")[o+1];s&&(this._setCurrentSelection(o+1,s),this.dispatchEvent(new CustomEvent("element-spec-changed",{composed:!0,bubbles:!0,detail:{action:"models",ident:this.ident,models:this.models}})))}_moveModelUp(e){e.stopPropagation();const{model:t}=e.target,o=this.models.indexOf(t);if(0===o)return;const i=Array.from(this.models);i.splice(o,1),i.splice(o-1,0,t),this.models=i;const s=this.shadowRoot.querySelectorAll("pb-odd-model-editor")[o-1];this._setCurrentSelection(o-1,s),this.dispatchEvent(new CustomEvent("element-spec-changed",{composed:!0,bubbles:!0,detail:{action:"models",ident:this.ident,models:this.models}}))}handleModelChanged(e){e.stopPropagation();const t=this.models.indexOf(e.detail.oldModel),o=Array.from(this.models);o.splice(t,1,e.detail.newModel),this.models=o,this.dispatchEvent(new CustomEvent("element-spec-changed",{composed:!0,bubbles:!0,detail:{action:"models",ident:this.ident,models:this.models}})),this.requestUpdate()}}customElements.define("pb-odd-elementspec-editor",K);class W extends(c($(f))){static get styles(){return w`
            :host {
                display: flex;
                /*margin: 30px 20px;*/
                margin:0;
                padding:0;
                height:auto;
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

            .specs {
                grid-column: 2 / 2;
                grid-row: 1 / span 2;
                overflow: auto;
            }

            section{
                padding:20px;
            }

            h3, h4 {
                font-family: var(--pb-heading-font-family);
                font-weight: var(--pb-heading-font-weight);
                line-height: var(--pb-heading-line-height);
            }

            /* ported over but not checked yet */

            .specs {
                padding:6px;
            }

            .metadata {
                display: block;
            }

            .metadata div {
                padding: 0 16px 16px;
            }

            .metadata paper-input {
                margin-bottom: 10px;
            }

            .metadata .extCssEdit {
                display: flex;
                align-items: center;
                padding: 0;
            }
            .metadata .extCssEdit paper-input {
                flex: 2;
            }
            .metadata .extCssEdit pb-edit-xml {
                width: 40px;
            }

            #jump-to {
                margin-top: 1em;
            }

            odd-model {
                border-bottom: 1px solid #E0E0E0;
            }
            odd-model h4 {
                margin-top: 15px;
                padding-top: 5px;
                border-top: 1px solid #E0E0E0;
            }
            .renditions {
                margin-top: 10px;
            }
            .icons{
                display:inline-block;
                white-space: nowrap;
            }

            /* todo: this doesn't work - should refactor to have the complete trigger exposed here (move out of pb-collapse) */
            pb-collapse#meta ::slotted(.collapse-trigger){
                /*height:56px;*/
            }

            iron-collapse {
                --iron-collapse-transition-duration:0.8s;
            }
            
            pb-message#errorMsg{
                background: var(--paper-red-500);
                color:white;
            }
            .card-content{
                height:100%;
                overflow:auto;
            }
            
            paper-tab{
                width:100px;
            }
            
            .editingView {
                width:100%;
            }
            
            vaadin-tabs{
                margin-top:10px;
            }
            
            vaadin-tab{
                background:var(--paper-grey-200);
                padding:0 6px;
                border:thin solid var(--paper-grey-300);
                border-bottom:none;
            }
            vaadin-tab[selected]{
                background:white;
                border-top-right-radius:20px;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);

            }

        `}static get properties(){return Object.assign(Object.assign({},super.properties),{},{ident:{type:String},mode:{type:String},models:{type:Array},odd:{type:String,reflect:!0},elementSpecs:{type:Array},source:{type:String},title:{type:String},titleShort:{type:String,reflect:!0,attribute:"title-short"},description:{type:String},namespace:{type:String},rootPath:{type:String,attribute:"root-path"},loading:{type:Boolean},indentString:{type:String},outputPrefix:{type:String,attribute:"output-prefix"},outputRoot:{type:String,attribute:"output-root"},currentSelection:{type:Object},useNamespace:{type:Boolean},loggedIn:{type:Boolean},tabs:{type:Array},tabIndex:{type:Number,reflect:!0}})}constructor(){super(),this.ident="",this.mode="",this.models=()=>[],this.odd="",this.elementSpecs=[],this.source="",this.title="",this.titleShort="",this.description="",this.namespace="",this.rootPath="",this.loading=!1,this.indentString="    ",this.outputPrefix="",this.outputRoot="",this.currentSelection={},this.useNamespace=!1,this.loggedIn=!0,this.tabs=[],this.tabIndex=void 0,this.selectedNavIndex=0,this.cssFile="",this.hotkeys={save:"ctrl+shift+s,command+shift+s"}}render(){return y`
        <iron-ajax id="loadContent"
                handle-as="json" content-type="application/x-www-form-urlencoded"
                with-credentials
                method="GET"></iron-ajax>
                
        <iron-ajax id="saveOdd"
                handle-as="json"
                with-credentials></iron-ajax>

        <div id="layout">
            <div id="drawer">
                    <slot id="slot"></slot>
                    <h3>
                        <span>${this.odd}</span>

                        <span class="icons">
                            <pb-edit-xml id="editSource"><paper-icon-button icon="code" title="${E("odd.editor.odd-source")}"></paper-icon-button></pb-edit-xml>
                            <paper-icon-button @click="${this._reload}" icon="refresh" title="${E("odd.editor.reload")}"></paper-icon-button>
                            <paper-icon-button @click="${this.save}" icon="save" title="${E("odd.editor.save")} ${this.display("save")}" 
                                ?disabled="${!this.loggedIn}"></paper-icon-button>
                        </span>
                    </h3>
                    <div id="new-element" class="input-group">
                        <paper-input id="identNew" label="${E("odd.editor.add-element")}" always-float-label="always-float-label">
                            <paper-icon-button slot="suffix" @click="${this.addElementSpec}" icon="add" tabindex="-1"></paper-icon-button>
                        </paper-input>
                    </div>

                    <div id="jump-to">
                        <paper-autocomplete id="jumpTo" label="${E("odd.editor.jump-to")}" always-float-label="always-float-label"></paper-autocomplete>
                    </div>
                    
                    <h3>${E("odd.editor.specs")}</h3>
            </div>
            <div id="navlist">
                ${P(this.elementSpecs,e=>e.ident,(e,t)=>y`
                    <paper-item id="es_${e.ident}"
                        index="${t}"
                        @click="${e=>this._openElementSpec(e,t)}">${e.ident}</paper-item>
                `)}
            </div>
            <section class="specs" id="specs">
    
                <paper-card class="metadata">
                    <pb-collapse id="meta">
                        <h4 slot="collapse-trigger" class="panel-title">
                            ${this._computedTitle()}
                        </h4>
                        <div slot="collapse-content">
                            <paper-input id="title" name="title" value="${this.title}" label="${E("odd.editor.title")}"
                                         placeholder="[${E("odd.editor.title-placeholder")}]"
                                         @change="${this._inputTitle}"></paper-input>
                            <paper-input id="titleShort" name="short-title" .value="${this.titleShort}" label="${E("odd.editor.title-short")}"
                                         placeholder="[${E("odd.editor.title-short-placeholder")}]"
                                         @change="${e=>this.titleShort=e.composedPath()[0].value}"></paper-input>
                            <paper-input id="description" name="description" .value="${T(this.description)}" label="${E("odd.editor.description-label")}"
                                      placeholder="[${E("odd.editor.description-placeholder")}]"
                                      @change="${e=>this.description=e.composedPath()[0].value}"></paper-input>
                            <paper-input id="source" name="source" ?value="${this.source}" label="${E("odd.editor.source-label")}"
                                         placeholder="[${E("odd.editor.source-placeholder")}]"
                                         @change="${e=>this.source=e.composedPath()[0].value}"></paper-input>
                            <paper-checkbox id="useNamespace" @change="${this.setUseNamespace}">${E("odd.editor.use-namespace")}</paper-checkbox>
                            <paper-input id="namespace" name="namespace" value="${this.namespace}" label="Namespace" ?disabled="${!this.useNamespace}"
                                         placeholder="[${E("odd.editor.namespace-placeholder")}]"
                                         @change="${e=>this.namespace=e.composedPath()[0].value}"></paper-input>
                            <div class="extCssEdit">
                                <paper-input name="cssFile" value="${this.cssFile}" label="External CSS File"
                                    placeholder="[External CSS file with additional class definitions]"
                                    @change="${this._cssFileChanged}"></paper-input>
                                <pb-edit-xml id="editCSS"><paper-icon-button icon="create" title="${E("odd.editor.css-source")}"></paper-icon-button></pb-edit-xml>
                            </div>
                        </div>
                    </pb-collapse>
                </paper-card>
    
                <!-- todo: import elementspec to make it function  -->
    
                <div class="editingView">
                    <vaadin-tabs id="tabs" selected="${this.tabIndex}">
                        ${P(this.tabs,e=>e.id,(e,t)=>y`
                            <vaadin-tab name="${e}" @click="${t=>this._selectTab(t,e)}"><span style="padding-right:20px;">${e}</span><paper-icon-button icon="close" @click="${e=>this._closeTabHandler(e,t)}"></paper-icon-button></vaadin-tab>
                        `)}                    
                    </vaadin-tabs>
                                       
                    <div id="currentElement"></div>
                </div>
            </section>
            
        </div>


        <pb-message id="dialog" hidden></pb-message>
        <pb-message id="errorMsg"></pb-message>
        `}firstUpdated(e){this.shadowRoot.getElementById("useNamespace").checked=this.useNamespace,this.jumpCtrl=this.shadowRoot.getElementById("jumpTo"),this.jumpCtrl.addEventListener("autocomplete-selected",this.jumpTo.bind(this));const t=this.querySelector("odd-selector");this.odd&&t&&(t.selected=this.odd,t.addEventListener("odd-selected",e=>{confirm("Any unsaved changes will be lost. Continue?")&&(this.odd=e.detail.odd,window.history.pushState({},"","?odd="+this.odd)),t.selected=this.odd})),this.addEventListener("current-changed",this._changeSelection),this.addEventListener("odd-copy",e=>this._copy(e)),this.addEventListener("odd-paste",e=>this._paste(e)),this.addEventListener("element-spec-removed",this.removeElementSpec.bind(this)),window.addEventListener("beforeunload",()=>"Any unsaved changes will be lost. Continue?"),this.subscribeTo("pb-login",e=>{this.loggedIn=null!=e.detail.user}),this.focus(),this.loadContent=this.shadowRoot.getElementById("loadContent"),this.rootPath=this.getAttribute("root-path"),x("pb-page-ready",()=>{this.load(),this.inited=!0}),this.registerHotkey("save",this.save.bind(this))}setUseNamespace(){this.useNamespace=this.shadowRoot.getElementById("useNamespace").checked}async load(){if(this.loading)return;if(this.loading=!0,""===this.rootPath||""===this.odd)return;this.elementSpecs=[],document.dispatchEvent(new CustomEvent("pb-start-update"));this.shadowRoot.getElementById("editSource").setPath(this.rootPath+"/"+this.odd);const e={odd:this.odd,root:this.rootPath};this.loadContent.params=e,this.loadContent.url=`${this.getEndpoint()}/${this.lessThanApiVersion("1.0.0")?"modules/editor.xql":"api/odd/"+this.odd}`;this.loadContent.generateRequest().completes.then(e=>this.handleOdd(e))}handleOdd(e){const t=e.response;if(this.loggedIn=t.canWrite,this.source=t.source,this.title=t.title,this.titleShort=t.titleShort,this.description=t.description,this.cssFile=null==t.cssFile?"":t.cssFile,this.namespace=null!=t.namespace?t.namespace:"",this.useNamespace=null!=t.namespace,this.cssFile){this.shadowRoot.getElementById("editCSS").setPath(this.rootPath+"/"+this.cssFile)}this.elementSpecs=t.elementSpecs.map(e=>this.mapElementSpec(e)),this._updateAutoComplete(),this.requestUpdate(),this.loading=!1,document.dispatchEvent(new CustomEvent("pb-end-update")),document.title=this.titleShort||this.title}_updateAutoComplete(){this.shadowRoot.getElementById("jumpTo").source=this.elementSpecs.map(this._specMapper)}_cssFileChanged(e){if(this.cssFile=e.composedPath()[0].value,this.cssFile){this.shadowRoot.getElementById("editCSS").setPath(this.rootPath+"/"+this.cssFile)}}_navlistActiveChanged(e,t){this.selectedNavIndex=t,this.requestUpdate()}_returnTabs(){return this.tabs}_selectTab(e,t){const o=this.elementSpecs.find(e=>e.ident===t);this._updateElementspec(o)}_openElementSpec(e,t){console.log("_openElementSpec ",e,t);const o=this.elementSpecs[t];this._updateElementspec(o);const i=o.ident;if(this.tabs.indexOf(i)>=0)return this.tabIndex=this.tabs.indexOf(i),void this.requestUpdate();this.tabs.push(i),this.tabIndex=this.tabs.length-1,this.requestUpdate()}_updateElementspec(e){const t=this.shadowRoot.getElementById("currentElement");t.innerHTML="";const o=new K;o.addEventListener("element-spec-changed",this.handleElementSpecChanged.bind(this)),o.ident=e.ident,o.models=e.models,o.mode=e.mode,o.endpoint=this._endpoint,o.apiVersion=this._apiVersion,o.hotkeys=this.hotkeys,t.appendChild(o)}_closeTabHandler(e,t){return console.log("_closeTabHandler ",t),e.preventDefault(),e.stopPropagation(),this._closeTab(t),!1}_closeTab(e){if(this.tabs.splice(e,1),0===this.tabs.length)this.shadowRoot.getElementById("currentElement").innerHTML="",this.tabIndex=0,this.tabs=[];else if(this.tabIndex>0&&this.tabIndex>=e){this.tabIndex-=1;const e=this.tabs[this.tabIndex];this._selectTab(null,e)}}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),"odd"==e&&t!==o&&this.inited&&this.load()}static get replaceCharMap(){return{'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"}}static get replaceCharRegexp(){return/"|&|<|>/g}static replaceChars(e){return W.replaceCharMap[e]}jumpTo(e){const t="#es_"+this.shadowRoot.getElementById("jumpTo").text,o=this.shadowRoot.querySelector(t);o&&(this.jumpCtrl.clear(),o.click())}_computedTitle(){return this.odd?this.title||this.titleShort||this.odd||"Loading ...":""}_copy(e){this.clipboard=e.detail.model;const t=JSON.parse(JSON.stringify(e.detail.model));this.clipboard=t}_paste(e){if(console.log("_paste ",e),console.log("_paste clipboard",this.clipboard),this.clipboard=={}||null==this.clipboard)return;const t=e.detail.target;t.addModel(this.clipboard),t.render()}_specMapper(e){return{text:e.ident,value:e.ident}}_specObserver(e){const t=this.elementSpecs.map(this._specMapper);this.jumpCtrl.source=t}mapElementSpec(e){return Object.assign({},e,{models:e.models.map(e=>this.addShowToModel(e))})}addShowToModel(e){if(e.models){const t=e.models.map(e=>this.addShowToModel(e));return Object.assign({},e,{models:t,show:!1})}return Object.assign({},e,{show:!1})}addElementSpec(e){const t=this.shadowRoot.getElementById("identNew").value;if(!t||0===t.length)return;if(this.elementSpecs.find(e=>e.ident===t)){console.log("<pb-odd-editor> element spec to be added already exists: %s",t);const e="#es_"+t,o=this.shadowRoot.querySelector(e);if(!o)return;return void o.click()}const o={action:"find",odd:this.odd,root:this.rootPath,ident:t},i={root:this.rootPath,ident:t},s=this.lessThanApiVersion("1.0.0")?o:i;this.loadContent.params=s,this.loadContent.url=`${this.getEndpoint()}/${this.lessThanApiVersion("1.0.0")?"modules/editor.xql":"api/odd/"+this.odd}`,this.loadContent.generateRequest().completes.then(this._handleElementSpecResponse.bind(this))}_handleElementSpecResponse(e){const t=this.shadowRoot.getElementById("identNew"),o=e.response,i=t.value,s={ident:i,mode:"not-found"===o.status?"add":"change",models:o.models||[]};this.elementSpecs.unshift(s),t.value="",this.tabs.push(i),this.tabIndex=this.tabs.length-1,this.elementSpecs.sort((e,t)=>e.ident.localeCompare(t.ident)),this.requestUpdate().then(()=>{const e=this.shadowRoot.querySelectorAll("paper-item"),t=this.elementSpecs.indexOf(s);this._updateAutoComplete(),e[t].click(),e[t].focus()})}removeElementSpec(e){const t=e.detail.target.ident;this.shadowRoot.getElementById("dialog").confirm(S("browse.delete"),S("odd.editor.delete-spec",{ident:t})).then(()=>{const e=this.elementSpecs.findIndex(e=>e.ident===t);this.elementSpecs.splice(e,1),this.requestUpdate();const o=this.shadowRoot.querySelector("vaadin-tab[selected]").getAttribute("name"),i=this.tabs.indexOf(o);this._closeTab(i)},()=>null)}serializeOdd(){const e=this.useNamespace?` ns="${this.namespace}"`:"",t=this.source?` source="${this.source}"`:"",o=this.description?` <desc>${this.description}</desc>`:"";return`<schemaSpec xmlns="http://www.tei-c.org/ns/1.0" xmlns:pb="http://teipublisher.com/1.0"${e}${t}>\n${`${this.indentString}<title>${this.title}${o}</title>\n`}${this.titleShort?`${this.indentString}<title type="short">${this.titleShort}</title>\n`:""}${this.cssFile?`${this.indentString}<rendition source="${this.cssFile}"/>\n`:""}\n${this.elementSpecs.map(e=>this.serializeElementSpec(this.indentString,e)).join("")}</schemaSpec>\n`}serializeElementSpec(e,t){const o=t.mode?` mode="${t.mode}"`:"",i=e+this.indentString,s=t.models.map(e=>this.serializeModel(i,e)).join("");return`${e}<elementSpec ident="${t.ident}"${o}>\n${s}${e}</elementSpec>\n`}serializeModel(e,t){if("model"===t.type&&!t.behaviour)return"";const o=e+this.indentString,i=[this.serializeAttribute("output",t.output),this.serializeAttribute("predicate",t.predicate),"model"===t.type?this.serializeAttribute("behaviour",t.behaviour):"",this.serializeAttribute("cssClass",t.css),this.serializeAttribute("useSourceRendition",t.sourcerend),this.serializeAttribute("pb:mode",t.mode)].join(""),s=t.desc?o+"<desc>"+t.desc+"</desc>\n":"",r=t.models.map(e=>this.serializeModel(o,e)).join(""),a=t.parameters.map(e=>this.serializeParameter(o,e)).join(""),n=t.renditions.map(e=>this.serializeRendition(o,e)).join(""),d=`${s}${r}${a}${W.serializeTemplate(o,t.template)}${n}`,l=d.length>0?`>\n${d}${e}</${t.type}`:"/";return`${e}<${t.type}${i}${l}>\n`}serializeParameter(e,t){if(!t.name)return"";const o=this.serializeAttribute("name",t.name),i=this.serializeAttribute("value",t.value);return t.set?`${e}<pb:set-param xmlns=""${o}${i}/>\n`:`${e}<param${o}${i}/>\n`}serializeRendition(e,t){return`${e}<outputRendition xml:space="preserve" ${t.scope&&"null"!==t.scope?this.serializeAttribute("scope",t.scope):""}>\n${e}${W.escape(t.css)}\n${e}</outputRendition>\n`}static serializeTemplate(e,t){return t?`${e}<pb:template xml:space="preserve" xmlns="">${t}</pb:template>\n`:""}serializeAttribute(e,t){return t?` ${e}="${W.escape(t)}"`:""}static escape(e){return e?"string"==typeof e?e.replace(W.replaceCharRegexp,W.replaceChars):e:""}save(e){document.dispatchEvent(new CustomEvent("pb-start-update"));const t=this.serializeOdd();console.log("serialised ODD:",t),this.shadowRoot.getElementById("dialog").show(S("odd.editor.save"),S("odd.editor.saving"));const o=this.shadowRoot.getElementById("saveOdd");o.url=`${this.getEndpoint()}/${this.lessThanApiVersion("1.0.0")?"modules/editor.xql":"api/odd/"+this.odd}`,this.lessThanApiVersion("1.0.0")?(o.contentType="application/x-www-form-urlencoded",o.method="POST",o.params=null,o.body={action:"save",root:this.rootPath,"output-prefix":this.outputPrefix,"output-root":this.outputRoot,odd:this.odd,data:t}):(o.contentType="application/xml",o.method="PUT",o.params={root:this.rootPath,"output-prefix":this.outputPrefix,"output-root":this.outputRoot},o.body=t);o.generateRequest().completes.then(this.handleSaveComplete.bind(this)).catch(this.handleSaveError.bind(this))}static _renderReport(e){return e.error?`\n                        <div class="list-group-item-danger">\n                          <h4 class="list-group-item-heading">${e.file}</h4>\n                          <h5 class="list-group-item-heading">Compilation error on line ${e.line}:</h5>\n                          <pre class="list-group-item-text">${e.error}</pre>\n                          <pre class="list-group-item-text">${e.message}</pre>\n                        </div>\n                    `:`\n                    <div class="list-group-item-success">\n                      <p class="list-group-item-text">Generated ${e.file}</p>\n                    </div>\n                `}handleSaveComplete(e){const t=e.response;if("denied"===t.status)return this.shadowRoot.getElementById("dialog").set(S("odd.editor.denied"),S("odd.editor.denied-message",{odd:this.odd})),void document.dispatchEvent(new CustomEvent("pb-end-update"));let o;if(this.lessThanApiVersion("1.0.0")){o=`<div class="list-group">${t.report.map(W._renderReport).join("")}</div>`}else{o=`<div class="list-group">${t.report}</div>`}this.shadowRoot.getElementById("dialog").set(S("odd.editor.saved"),o),document.dispatchEvent(new CustomEvent("pb-end-update"))}handleSaveError(e){this.shadowRoot.getElementById("dialog").set("Error",e.error),document.dispatchEvent(new CustomEvent("pb-end-update"))}_reload(){this.shadowRoot.getElementById("dialog").confirm(S("odd.editor.reload"),S("odd.editor.reload-confirm")).then(()=>{this.load(),this.tabs=[],this.tabIndex=0,this.shadowRoot.getElementById("currentElement").innerHTML=""},()=>null)}_setCurrentSelection(e){null!=this.currentSelection&&this.currentSelection.removeAttribute("currentselection"),this.currentSelection=e.target,this.currentSelection.setAttribute("currentselection","true")}_changeSelection(e){if(e.preventDefault(),e.stopPropagation(),e.detail.target===this)return;let t;this.currentSelection&&void 0!==this.currentSelection.tagName&&this.currentSelection.removeAttribute("currentselection"),t=e.detail.target?e.detail.target:e.target,t.setAttribute("currentselection","true"),this.currentSelection=t}_selectElementspec(e){this.currentElementSpec&&"PB-ODD-ELEMENTSPEC-EDITOR"===this.currentElementSpec.tagName&&this.currentElementSpec.removeAttribute("currentselection");const t=e.target;t.setAttribute("currentselection","true"),this.currentElementSpec=t}nsDisabled(){return!this.useNamespace}_handleLoadError(e){console.log("loading error occurred: ",e);const t=this.shadowRoot.getElementById("errorMsg");t.style.background="red";const o=this.shadowRoot.getElementById("loadContent").url;console.log("url ",o),t.show("Error: ","ODD file could not be loaded from "+o)}handleElementSpecChanged(e){const t=this.elementSpecs.find(t=>t.ident===e.detail.ident),o=this.elementSpecs.indexOf(t),i=Object.assign({},t,{models:e.detail.models}),s=Array.from(this.elementSpecs);s.splice(o,1,i),this.elementSpecs=s}_inputTitle(e){this.title=e.composedPath()[0].value}}customElements.define("pb-odd-editor",W);export{W as PbOddEditor};
