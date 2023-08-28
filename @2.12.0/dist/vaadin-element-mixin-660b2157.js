import{P as e,h as t,p as n,B as o,d as i,a as s,I as a,T as r,q as l,s as c,D as u,t as p,f as d}from"./paper-checkbox-c9177e35.js";import{a as h}from"./paper-listbox-1fc346ac.js";import{w as m,p as g,L as f,h as y,c as v}from"./pb-mixin-d61c06b6.js";import{t as b}from"./pb-i18n-9000294c.js";import{u as x}from"./paper-icon-button-be4dc644.js";
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/e({_template:t`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`,is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_imgOnError:function(){this.$.img.src===this._resolveSrc(this.src)&&(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){return null!==this.alt?this.alt:""===this.src?"":this._resolveSrc(this.src).replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(e,t){var n=this._resolveSrc(e);n!==this._resolvedSrc&&(this._resolvedSrc="",this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===e||t?(this._setLoading(!1),this._setLoaded(!1),this._setError(!1)):(this._resolvedSrc=n,this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage='url("'+this._resolvedSrc+'")',this._setLoading(!0),this._setLoaded(!1),this._setError(!1)))},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?'url("'+this.placeholder+'")':""},_transformChanged:function(){var e=this.$.sizedImgDiv.style,t=this.$.placeholder.style;e.backgroundSize=t.backgroundSize=this.sizing,e.backgroundPosition=t.backgroundPosition=this.sizing?this.position:"",e.backgroundRepeat=t.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(e){var t=n(e,this.$.baseURIAnchor.href);return t.length>=2&&"/"===t[0]&&"/"!==t[1]&&(t=(location.origin||location.protocol+"//"+location.host)+t),t}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({_template:t`
    <style include="paper-material-styles">
      :host {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        background-color: var(--paper-card-background-color, var(--primary-background-color));
        border-radius: 2px;

        @apply --paper-font-common-base;
        @apply --paper-card;
      }

      /* IE 10 support for HTML5 hidden attr */
      :host([hidden]), [hidden] {
        display: none !important;
      }

      .header {
        position: relative;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        overflow: hidden;

        @apply --paper-card-header;
      }

      .header iron-image {
        display: block;
        width: 100%;
        --iron-image-width: 100%;
        pointer-events: none;

        @apply --paper-card-header-image;
      }

      .header .title-text {
        padding: 16px;
        font-size: 24px;
        font-weight: 400;
        color: var(--paper-card-header-color, #000);

        @apply --paper-card-header-text;
      }

      .header .title-text.over-image {
        position: absolute;
        bottom: 0px;

        @apply --paper-card-header-image-text;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
        position:relative;

        @apply --paper-card-content;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
        position:relative;

        @apply --paper-card-actions;
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>

    <div class="header">
      <iron-image hidden\$="[[!image]]" aria-hidden\$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>
      <div hidden\$="[[!heading]]" class\$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>
    </div>

    <slot></slot>
`,is:"paper-card",properties:{heading:{type:String,value:"",observer:"_headingChanged"},image:{type:String,value:""},alt:{type:String},preloadImage:{type:Boolean,value:!1},fadeImage:{type:Boolean,value:!1},placeholderImage:{type:String,value:null},elevation:{type:Number,value:1,reflectToAttribute:!0},animatedShadow:{type:Boolean,value:!1},animated:{type:Boolean,reflectToAttribute:!0,readOnly:!0,computed:"_computeAnimated(animatedShadow)"}},_isHidden:function(e){return e?"false":"true"},_headingChanged:function(e){var t=this.getAttribute("heading"),n=this.getAttribute("aria-label");"string"==typeof n&&n!==t||this.setAttribute("aria-label",e)},_computeHeadingClass:function(e){return e?" over-image":""},_computeAnimated:function(e){return e}}),function(){if("undefined"!=typeof document&&!("adoptedStyleSheets"in document)){var e="ShadyCSS"in window&&!ShadyCSS.nativeShadow,t=document.implementation.createHTMLDocument(""),n=new WeakMap,o="object"==typeof DOMException?Error:DOMException,i=Object.defineProperty,s=Array.prototype.forEach,a=/@import.+?;?$/gm,r=["addRule","deleteRule","insertRule","removeRule"],l=CSSStyleSheet.prototype;l.replace=function(){return Promise.reject(new o("Can't call replace on non-constructed CSSStyleSheets."))},l.replaceSync=function(){throw new o("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};var c=new WeakMap,u=new WeakMap,p=new WeakMap,d=new WeakMap,h=F.prototype;h.replace=function(e){try{return this.replaceSync(e),Promise.resolve(this)}catch(e){return Promise.reject(e)}},h.replaceSync=function(e){if(L(this),"string"==typeof e){var t=this;c.get(t).textContent=_(e),d.set(t,[]),u.get(t).forEach((function(e){e.isConnected()&&W(t,T(t,e))}))}},i(h,"cssRules",{configurable:!0,enumerable:!0,get:function(){return L(this),c.get(this).sheet.cssRules}}),i(h,"media",{configurable:!0,enumerable:!0,get:function(){return L(this),c.get(this).sheet.media}}),r.forEach((function(e){h[e]=function(){var t=this;L(t);var n=arguments;d.get(t).push({method:e,args:n}),u.get(t).forEach((function(o){if(o.isConnected()){var i=T(t,o).sheet;i[e].apply(i,n)}}));var o=c.get(t).sheet;return o[e].apply(o,n)}})),i(F,Symbol.hasInstance,{configurable:!0,value:z});var m={childList:!0,subtree:!0},g=new WeakMap,f=new WeakMap,y=new WeakMap,v=new WeakMap;if(G.prototype={isConnected:function(){var e=f.get(this);return e instanceof Document?"loading"!==e.readyState:w(e.host)},connect:function(){var e=j(this);v.get(this).observe(e,m),y.get(this).length>0&&D(this),P(e,(function(e){R(e).connect()}))},disconnect:function(){v.get(this).disconnect()},update:function(e){var t=this,n=f.get(t)===document?"Document":"ShadowRoot";if(!Array.isArray(e))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Iterator getter is not callable.");if(!e.every(z))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Failed to convert value to 'CSSStyleSheet'");if(e.some(O))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Can't adopt non-constructed stylesheets");t.sheets=e;var o=y.get(t),i=S(e);C(o,i).forEach((function(e){k(T(e,t)),B(e,t)})),y.set(t,i),t.isConnected()&&i.length>0&&D(t)}},window.CSSStyleSheet=F,N(Document),"ShadowRoot"in window){N(ShadowRoot);var b=Element.prototype,x=b.attachShadow;b.attachShadow=function(e){var t=x.call(this,e);return"closed"===e.mode&&n.set(this,t),t}}var A=R(document);A.isConnected()?A.connect():document.addEventListener("DOMContentLoaded",A.connect.bind(A))}function _(e){var t=e.replace(a,"");return t!==e&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),t.trim()}function w(e){return"isConnected"in e?e.isConnected:document.contains(e)}function S(e){return e.filter((function(t,n){return e.indexOf(t)===n}))}function C(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}function k(e){e.parentNode.removeChild(e)}function E(e){return e.shadowRoot||n.get(e)}function z(e){return"object"==typeof e&&(h.isPrototypeOf(e)||l.isPrototypeOf(e))}function O(e){return"object"==typeof e&&l.isPrototypeOf(e)}function I(e,t){var n=document.createElement("style");return p.get(e).set(t,n),u.get(e).push(t),n}function T(e,t){return p.get(e).get(t)}function B(e,t){p.get(e).delete(t),u.set(e,u.get(e).filter((function(e){return e!==t})))}function W(e,t){requestAnimationFrame((function(){t.textContent=c.get(e).textContent,d.get(e).forEach((function(e){return t.sheet[e.method].apply(t.sheet,e.args)}))}))}function L(e){if(!c.has(e))throw new TypeError("Illegal invocation")}function F(){var e=this,n=document.createElement("style");t.body.appendChild(n),c.set(e,n),u.set(e,[]),p.set(e,new WeakMap),d.set(e,[])}function R(e){var t=g.get(e);return t||(t=new G(e),g.set(e,t)),t}function N(e){i(e.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return R(this).sheets},set:function(e){R(this).update(e)}})}function P(e,t){for(var n=document.createNodeIterator(e,NodeFilter.SHOW_ELEMENT,(function(e){return E(e)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}),null,!1),o=void 0;o=n.nextNode();)t(E(o))}function M(e,t){return t instanceof HTMLStyleElement&&y.get(e).some((function(t){return T(t,e)}))}function j(e){var t=f.get(e);return t instanceof Document?t.body:t}function D(e){var t=document.createDocumentFragment(),n=y.get(e),o=v.get(e),i=j(e);o.disconnect(),n.forEach((function(n){t.appendChild(T(n,e)||I(n,e))})),i.insertBefore(t,null),o.observe(i,m),n.forEach((function(t){W(t,T(t,e))}))}function G(t){var n=this;n.sheets=[],f.set(n,t),y.set(n,[]),v.set(n,new MutationObserver((function(t,o){document?t.forEach((function(t){e||s.call(t.addedNodes,(function(e){e instanceof Element&&P(e,(function(e){R(e).connect()}))})),s.call(t.removedNodes,(function(t){t instanceof Element&&(M(n,t)&&D(n),e||P(t,(function(e){R(e).disconnect()})))}))})):o.disconnect()})))}}();const A=new Map;async function _(e){const t=[];for(const n of e){const e=await w(n);e&&t.push(e)}if(t.length>0){return(new CSSStyleSheet).replace(t.join(""))}return null}function w(e){return fetch(e).then(t=>t.ok?t.text():(console.warn("<theming> Component stylesheet not found: %s",e),null)).then(e=>e).catch(t=>(console.error("<theming> Error loading stylesheet %s: %o",e,t),null))}function S(e){const t=document.querySelector("pb-page");if(!t)return null;const n=t.stylesheet;if(!n)return null;const o=k(e).join("|");if(A.has(o))return A.get(o);const i=new RegExp(`^(${o})\\b`);let s=null;const a=C(n.cssRules,i,[]);return a.length>0&&(s=new CSSStyleSheet,s.replaceSync(a.join(""))),console.log("<theming> caching stylesheet for %s",o),A.set(o,s),s}function C(e,t,n){for(let o=0;o<e.length;o++){const i=e[o];if(i instanceof CSSStyleRule){if(t.test(i.selectorText)){const e=i.cssText.replace(t,":host($1) ");n.push(e)}}else i instanceof CSSMediaRule?(n.push(`\n@media ${i.conditionText} {\n`),C(i.cssRules,t,n),n.push("\n}\n")):i instanceof CSSFontFaceRule||n.push(i.cssText)}return n}function k(e){const t=[e.localName];return e.id&&t.push("#"+e.id),e.classList.forEach(e=>t.push("."+e)),t}const E=e=>class extends e{connectedCallback(){super.connectedCallback(),m("pb-page-ready",e=>{const t=S(this);t&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,t])})}}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/;e({_template:t`
    <style>
      :host {
        display: block;
        transition-duration: var(--iron-collapse-transition-duration, 300ms);
        /* Safari 10 needs this property prefixed to correctly apply the custom property */
        -webkit-transition-duration: var(--iron-collapse-transition-duration, 300ms);
        overflow: visible;
      }

      :host(.iron-collapse-closed) {
        display: none;
      }

      :host(:not(.iron-collapse-opened)) {
        overflow: hidden;
      }
    </style>

    <slot></slot>
`,is:"iron-collapse",behaviors:[h],properties:{horizontal:{type:Boolean,value:!1,observer:"_horizontalChanged"},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},transitioning:{type:Boolean,notify:!0,readOnly:!0},noAnimation:{type:Boolean},_desiredSize:{type:String,value:""}},get dimension(){return this.horizontal?"width":"height"},get _dimensionMax(){return this.horizontal?"maxWidth":"maxHeight"},get _dimensionMaxCss(){return this.horizontal?"max-width":"max-height"},hostAttributes:{role:"group","aria-hidden":"true"},listeners:{transitionend:"_onTransitionEnd"},toggle:function(){this.opened=!this.opened},show:function(){this.opened=!0},hide:function(){this.opened=!1},updateSize:function(e,t){e="auto"===e?"":e;var n=t&&!this.noAnimation&&this.isAttached&&this._desiredSize!==e;if(this._desiredSize=e,this._updateTransition(!1),n){var o=this._calcSize();""===e&&(this.style[this._dimensionMax]="",e=this._calcSize()),this.style[this._dimensionMax]=o,this.scrollTop=this.scrollTop,this._updateTransition(!0),n=e!==o}this.style[this._dimensionMax]=e,n||this._transitionEnd()},enableTransition:function(e){o._warn("`enableTransition()` is deprecated, use `noAnimation` instead."),this.noAnimation=!e},_updateTransition:function(e){this.style.transitionDuration=e&&!this.noAnimation?"":"0s"},_horizontalChanged:function(){this.style.transitionProperty=this._dimensionMaxCss;var e="maxWidth"===this._dimensionMax?"maxHeight":"maxWidth";this.style[e]="",this.updateSize(this.opened?"auto":"0px",!1)},_openedChanged:function(){this.setAttribute("aria-hidden",!this.opened),this._setTransitioning(!0),this.toggleClass("iron-collapse-closed",!1),this.toggleClass("iron-collapse-opened",!1),this.updateSize(this.opened?"auto":"0px",!0),this.opened&&this.focus()},_transitionEnd:function(){this.style[this._dimensionMax]=this._desiredSize,this.toggleClass("iron-collapse-closed",!this.opened),this.toggleClass("iron-collapse-opened",this.opened),this._updateTransition(!1),this.notifyResize(),this._setTransitioning(!1)},_onTransitionEnd:function(e){i(e).rootTarget===this&&this._transitionEnd()},_calcSize:function(){return this.getBoundingClientRect()[this.dimension]+"px"}});class z extends(E(g(f))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{horizontal:{type:Boolean},noAnimation:{type:Boolean,attribute:"no-animation"},opened:{type:Boolean},toggles:{type:Boolean},expandIcon:{type:String,attribute:"expand-icon"},collapseIcon:{type:String,attribute:"collapse-icon"},noIcons:{type:Boolean,attribute:"no-icons"}})}constructor(){super(),this.horizontal=!1,this.noAnimation=!1,this.opened=!1,this.expandIcon="icons:expand-more",this.collapseIcon="icons:expand-less",this.noIcons=!1,this.toggles=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("pb-collapse-open",()=>{this.open()}),this.toggles&&this.subscribeTo("pb-collapse-open",e=>{if(e.detail&&e.detail._source!==this){for(const t of this.querySelectorAll("pb-collapse"))if(t===e.detail._source)return;this.close()}})}open(){this.opened||(this.opened=!0,this.emitTo("pb-collapse-open",this))}close(){this.opened&&(this.opened=!1)}toggle(){this.opened=!this.opened,this.opened&&this.emitTo("pb-collapse-open",this.data)}render(){return y`
            <div id="trigger" @click="${this.toggle}" class="collapse-trigger">
                ${this.noIcons?null:y`<iron-icon icon="${this.opened?this.collapseIcon:this.expandIcon}"></iron-icon>`}
                <slot id="collapseTrigger" name="collapse-trigger"></slot>
            </div>
            <iron-collapse id="collapse" horizontal="${this.horizontal}" no-animation="${this.noAnimation}" .opened="${this.opened}">
                <slot name="collapse-content"></slot>
            </iron-collapse>
        `}static get styles(){return v`
            :host {
                display: block;
                position: relative;
            }

            #trigger {
                display: flex;
                align-items:center
            }

            iron-icon {
                padding: var(--pb-collapse-icon-padding, 0 4px 0 0);
            }

            :host(.icon-right) iron-icon {
                position: absolute;
                right: 0;
            }

        `}}customElements.get("pb-collapse")||customElements.define("pb-collapse",z)
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/;const O=document.createElement("template");O.setAttribute("style","display: none;"),O.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(O.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const I=[s,a,{hostAttributes:{role:"option",tabindex:"0"}}];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({_template:t`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[I]});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const T=t`
<dom-module id="paper-material-shared-styles">
  <template>
    <style>
      :host {
        display: block;
        position: relative;
      }

      :host([elevation="1"]) {
        @apply --shadow-elevation-2dp;
      }

      :host([elevation="2"]) {
        @apply --shadow-elevation-4dp;
      }

      :host([elevation="3"]) {
        @apply --shadow-elevation-6dp;
      }

      :host([elevation="4"]) {
        @apply --shadow-elevation-8dp;
      }

      :host([elevation="5"]) {
        @apply --shadow-elevation-16dp;
      }
    </style>
  </template>
</dom-module>
`;T.setAttribute("style","display: none;"),document.body.appendChild(T.content),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({_template:t`
    <style include="paper-material-shared-styles"></style>
    <style>
      :host([animated]) {
        @apply --shadow-transition;
      }
      :host {
        @apply --paper-material;
      }
    </style>

    <slot></slot>
`,is:"paper-material",properties:{elevation:{type:Number,reflectToAttribute:!0,value:1},animated:{type:Boolean,reflectToAttribute:!0,value:!1}}});var B={UP:"up",DOWN:"down"},W={LEFT_ARROW:37,RIGHT_ARROW:39,UP_ARROW:38,DOWN_ARROW:40,ENTER:13,ESCAPE:27};e({_template:t`
    <style>
      paper-material {
        display: none;
        position: absolute;
        width: 100%;
        z-index: 1000;
        background-color: white;
        max-height: 252px;
        overflow-y: auto;

        @apply --suggestions-wrapper;
      }

      paper-item,
      :host ::slotted(paper-item) {
        min-height: var(--paper-item-min-height, 36px);
        padding: 0 16px;
        position: relative;
        line-height: 18px;

        @apply --suggestions-item;
      }

      paper-item:hover,
      :host ::slotted(paper-item:hover) {
        background: #eee;
        color: #333;
        cursor: pointer;
      }

      paper-item.active,
      :host ::slotted(paper-item.active) {
        background: #eee;
        color: #333;
      }

      /**
       * IE11 paper-item min-height bug: https://github.com/PolymerElements/paper-item/issues/35
       */
      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        paper-item {
          height: var(--paper-item-min-height, 36px);
        }
      }
    </style>
    <div>
      <!-- unselectable is needed to fix an issue related to the focus being taken away when clicking in the
       results scrollbar -->
      <paper-material elevation="1" id="suggestionsWrapper" unselectable="on"></paper-material>

      <!-- Default suggestion template -->
      <template id="defaultTemplate">
        <paper-item id\$="[[_getSuggestionId(index)]]" role="option" aria-selected="false" on-tap="_onSelect">
          <div>[[_getItemText(item)]]</div>
          <paper-ripple></paper-ripple>
        </paper-item>
      </template>

  <!-- Custom template -->
  <slot id="templates" name="autocomplete-custom-template"></slot>
  </div>
`,is:"paper-autocomplete-suggestions",behaviors:[r],properties:{for:{type:String},isOpen:{type:Boolean,value:!1,notify:!0},minLength:{type:Number,value:1},maxViewableItems:{type:Number,value:7},textProperty:{type:String,value:"text"},valueProperty:{type:String,value:"value"},source:{type:Array},selectedOption:{type:Object,notify:!0},remoteSource:{type:Boolean,value:!1},eventNamespace:{type:String,value:"-"},highlightedSuggestion:{type:Object,value:{},notify:!0},queryFn:{type:Function},highlightFirst:{type:Boolean,value:!1},showResultsOnFocus:{type:Boolean,value:!1},_suggestions:{type:Array,observer:"_onSuggestionsChanged"},_currentIndex:{type:Number,value:-1},_scrollIndex:{type:Number,value:0},_itemHeight:{type:Number,value:36,observer:"_itemHeightChanged"},_value:{value:void 0},_text:{value:void 0},_idItemSeed:{type:String,value:"aria-"+(new Date).getTime()+"-"+Math.floor(1e3*Math.random()),readOnly:!0},_bindedFunctions:{type:Object,value:function(){return{_onKeypress:null,_onFocus:null,_onBlur:null}}},_hasItemHighBeenCalculated:{type:Boolean,value:!1},__customTplRef:Object},ready:function(){this._value=this.value,this.dataHost=this,this.$.suggestionsWrapper.addEventListener("mousedown",(function(e){e.preventDefault()})),this._suggestionTemplate.__dataHost=this,this.templatize(this._suggestionTemplate)},attached:function(){if(this._input=this.parentNode.querySelector("#"+this.for),null===this._input)throw new Error("Cannot find input field with id: "+this.for);this._bindedFunctions._onKeypress=this._onKeypress.bind(this),this._bindedFunctions._onFocus=this._onFocus.bind(this),this._bindedFunctions._onBlur=this._onBlur.bind(this),this._input.addEventListener("keyup",this._bindedFunctions._onKeypress),this._input.addEventListener("focus",this._bindedFunctions._onFocus),this._input.addEventListener("blur",this._bindedFunctions._onBlur)},detached:function(){this.cancelDebouncer("_onSuggestionChanged"),this._input.removeEventListener("keyup",this._bindedFunctions._onKeypress),this._input.removeEventListener("focus",this._bindedFunctions._onFocus),this._input.removeEventListener("blur",this._bindedFunctions._onBlur),this._input=null,this.__customTplRef=null},_getItemText:function(e){return e[this.textProperty]},_showSuggestionsWrapper:function(){var e=this.$.suggestionsWrapper;e.style.display="block",e.setAttribute("role","listbox"),this.isOpen=!0},_hideSuggestionsWrapper:function(){var e=this.$.suggestionsWrapper;e.style.display="none",e.removeAttribute("role"),this.isOpen=!1,this.highlightedSuggestion={},this._clearSuggestions()},_handleSuggestions:function(e){this.remoteSource?this._remoteSuggestions():this._createSuggestions(e)},_remoteSuggestions:function(){var e=this._input.value,t={text:e,value:e};e&&e.length>=this.minLength?this._fireEvent(t,"change"):this._suggestions=[]},_bindSuggestions:function(e){e.length&&e.length>0?(this._suggestions=e,this._currentIndex=-1,this._scrollIndex=0):this._suggestions=[]},_createSuggestions:function(e){this._currentIndex=-1,this._scrollIndex=0;var t=e.target.value;null!==t&&t.length>=this.minLength?(t=t.toLowerCase(),this.source&&this.source.length>0&&(this._suggestions=this.queryFn(this.source,t))):this._suggestions=[]},get _suggestionTemplate(){if(this.__customTplRef)return this.__customTplRef;var e=this.getEffectiveChildren();return this.__customTplRef=e.length>0?e[0]:this.$.defaultTemplate,this.__customTplRef},_renderSuggestions:function(e){var t=i(this.$.suggestionsWrapper);this._clearSuggestions(),[].slice.call(e).forEach(function(e,n){var o=this.stamp();o.item=e,o.index=n,t.appendChild(o.root)}.bind(this))},_clearSuggestions:function(){for(var e,t=i(this.$.suggestionsWrapper);e=t.lastChild;)t.removeChild(e)},_onSuggestionsChanged:function(){this.debounce("_onSuggestionChanged",()=>{if(this._renderSuggestions(this._suggestions),this._suggestions.length>0?this._showSuggestionsWrapper():this._hideSuggestionsWrapper(),l(),this._resetScroll(),!this._hasItemHighBeenCalculated){var e=this.$.suggestionsWrapper.querySelector("paper-item");null!==e&&(this._itemHeight=e.offsetHeight,this._hasItemHighBeenCalculated=!0)}this.highlightFirst&&this._moveHighlighted(B.DOWN)},100)},_selection:function(e){var t=this._suggestions[e];this._input.value=t[this.textProperty],this.selectedOption=t,this._value=this.value,this._text=this.text,this._emptyItems(),this._fireEvent(t,"selected"),this.hideSuggestions()},_getItems:function(){return this.$.suggestionsWrapper.querySelectorAll("paper-item")},_emptyItems:function(){this._suggestions=[]},_getId:function(){var e=this.getAttribute("id");return e||(e=this.dataset.id),e},_removeActive:function(e){[].slice.call(e).forEach((function(e){e.classList.remove("active"),e.setAttribute("aria-selected","false")}))},_onKeypress:function(e){switch(e.which||e.keyCode){case W.DOWN_ARROW:this._moveHighlighted(B.DOWN);break;case W.UP_ARROW:this._moveHighlighted(B.UP);break;case W.ENTER:this._keyenter();break;case W.ESCAPE:this._hideSuggestionsWrapper();break;case W.LEFT_ARROW:case W.RIGHT_ARROW:break;default:this._handleSuggestions(e)}},_keyenter:function(){if("block"===this.$.suggestionsWrapper.style.display&&this._currentIndex>-1){var e=this._currentIndex;this._selection(e)}},_moveHighlighted:function(e){var t=this._getItems();if(0!==t.length){var n=t.length-1,o=0===this._currentIndex,i=this._currentIndex===n;if((-1===this._currentIndex||o)&&e===B.UP)this._currentIndex=n;else if(i&&e===B.DOWN)this._currentIndex=0;else{var s=e===B.DOWN?1:-1;this._currentIndex=this._currentIndex+s}var a=this._suggestions[this._currentIndex],r=t[this._currentIndex];this._removeActive(t),r.classList.add("active"),r.setAttribute("aria-selected","true"),this._setHighlightedSuggestion(a,r.id),this._scroll(e)}},_scroll:function(e){var t,n,o=this._currentIndex-this._scrollIndex,i=0===this._currentIndex&&o<0,s=this._currentIndex===this._suggestions.length-1&&o>=this.maxViewableItems;i&&e===B.DOWN?(t=0,n=!0):s&&e===B.UP?(t=this._suggestions.length-this.maxViewableItems,n=!0):e===B.UP?(t=this._scrollIndex-1,n=o<0):(t=this._scrollIndex+1,n=o>=this.maxViewableItems),n&&(this._scrollIndex=t,this.$.suggestionsWrapper.scrollTop=this._scrollIndex*this._itemHeight)},_resetScroll:function(){this.$.suggestionsWrapper.scrollTop=0},_setHighlightedSuggestion:function(e,t){this.highlightedSuggestion={option:e,elementId:t,textValue:e[this.textProperty],value:e[this.valueProperty]}},_fireEvent:function(e,t){var n=this._getId(),o="autocomplete"+this.eventNamespace+t;this.fire(o,{id:n,value:e[this.valueProperty]||e.value,text:e[this.textProperty]||e.text,target:this,option:e})},_onSelect:function(e){var t=this.modelForElement(e.currentTarget).index;this._selection(t)},_onBlur:function(){var e={text:this.text,value:this.value};this._fireEvent(e,"blur"),this.hideSuggestions()},_onFocus:function(e){var t={text:this.text,value:this.value};this.showResultsOnFocus&&this._handleSuggestions(e),this._fireEvent(t,"focus")},_getSuggestionId:function(e){return this._idItemSeed+"-"+e},_itemHeightChanged:function(){this.$.suggestionsWrapper.style.maxHeight=this._itemHeight*this.maxViewableItems+"px"},suggestions:function(e){this._bindSuggestions(e)},hideSuggestions:function(){setTimeout(function(){this._hideSuggestionsWrapper()}.bind(this),0)},queryFn:function(e,t){var n=[];return e.forEach(function(e){var o,i;if("object"==typeof e?(o=e[this.textProperty],i=e[this.valueProperty]):i=o=e.toString(),0===o.toLowerCase().indexOf(t)){var s={};s[this.textProperty]=o,s[this.valueProperty]=i,n.push(s)}}.bind(this)),n}});
/**! 
 * hotkeys-js v3.11.2 
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies. 
 * 
 * Copyright (c) 2023 kenny wong <wowohoo@qq.com> 
 * https://jaywcjlove.github.io/hotkeys-js 
 * Licensed under the MIT license 
 */
var L="undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function F(e,t,n,o){e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on".concat(t),(function(){n(window.event)}))}function R(e,t){for(var n=t.slice(0,t.length-1),o=0;o<n.length;o++)n[o]=e[n[o].toLowerCase()];return n}function N(e){"string"!=typeof e&&(e="");for(var t=(e=e.replace(/\s/g,"")).split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function P(e,t){for(var n=e.length>=t.length?e:t,o=e.length>=t.length?t:e,i=!0,s=0;s<n.length;s++)-1===o.indexOf(n[s])&&(i=!1);return i}for(var M={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":L?173:189,"=":L?61:187,";":L?59:186,"'":222,"[":219,"]":221,"\\":220},j={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},D={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},G={16:!1,18:!1,17:!1,91:!1},U={},K=1;K<20;K++)M["f".concat(K)]=111+K;var H=[],X=!1,V="all",Y=[],q=function(e){return M[e.toLowerCase()]||j[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},Z=function(e){return Object.keys(M).find((function(t){return M[t]===e}))},J=function(e){return Object.keys(j).find((function(t){return j[t]===e}))};function Q(e){V=e||"all"}function $(){return V||"all"}function ee(){return H.slice(0)}function te(){return H.map((function(e){return Z(e)||J(e)||String.fromCharCode(e)}))}function ne(e){var t=e.target||e.srcElement,n=t.tagName,o=!0;return!t.isContentEditable&&("INPUT"!==n&&"TEXTAREA"!==n&&"SELECT"!==n||t.readOnly)||(o=!1),o}function oe(e){return"string"==typeof e&&(e=q(e)),-1!==H.indexOf(e)}function ie(e,t){var n,o;for(var i in e||(e=$()),U)if(Object.prototype.hasOwnProperty.call(U,i))for(n=U[i],o=0;o<n.length;)n[o].scope===e?n.splice(o,1):o++;$()===e&&Q(t||"all")}function se(e){var t=e.keyCode||e.which||e.charCode,n=H.indexOf(t);if(n>=0&&H.splice(n,1),e.key&&"meta"===e.key.toLowerCase()&&H.splice(0,H.length),93!==t&&224!==t||(t=91),t in G)for(var o in G[t]=!1,j)j[o]===t&&(pe[o]=!1)}function ae(e){if(void 0===e)Object.keys(U).forEach((function(e){return delete U[e]}));else if(Array.isArray(e))e.forEach((function(e){e.key&&re(e)}));else if("object"==typeof e)e.key&&re(e);else if("string"==typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=n[0],s=n[1];"function"==typeof i&&(s=i,i=""),re({key:e,scope:i,method:s,splitKey:"+"})}}var re=function(e){var t=e.key,n=e.scope,o=e.method,i=e.splitKey,s=void 0===i?"+":i;N(t).forEach((function(e){var t=e.split(s),i=t.length,a=t[i-1],r="*"===a?"*":q(a);if(U[r]){n||(n=$());var l=i>1?R(j,t):[];U[r]=U[r].filter((function(e){return!((!o||e.method===o)&&e.scope===n&&P(e.mods,l))}))}}))};function le(e,t,n,o){var i;if(t.element===o&&(t.scope===n||"all"===t.scope)){for(var s in i=t.mods.length>0,G)Object.prototype.hasOwnProperty.call(G,s)&&(!G[s]&&t.mods.indexOf(+s)>-1||G[s]&&-1===t.mods.indexOf(+s))&&(i=!1);(0!==t.mods.length||G[16]||G[18]||G[17]||G[91])&&!i&&"*"!==t.shortcut||(t.keys=[],t.keys=t.keys.concat(H),!1===t.method(e,t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function ce(e,t){var n=U["*"],o=e.keyCode||e.which||e.charCode;if(pe.filter.call(this,e)){if(93!==o&&224!==o||(o=91),-1===H.indexOf(o)&&229!==o&&H.push(o),["ctrlKey","altKey","shiftKey","metaKey"].forEach((function(t){var n=D[t];e[t]&&-1===H.indexOf(n)?H.push(n):!e[t]&&H.indexOf(n)>-1?H.splice(H.indexOf(n),1):"metaKey"===t&&e[t]&&3===H.length&&(e.ctrlKey||e.shiftKey||e.altKey||(H=H.slice(H.indexOf(n))))})),o in G){for(var i in G[o]=!0,j)j[i]===o&&(pe[i]=!0);if(!n)return}for(var s in G)Object.prototype.hasOwnProperty.call(G,s)&&(G[s]=e[D[s]]);e.getModifierState&&(!e.altKey||e.ctrlKey)&&e.getModifierState("AltGraph")&&(-1===H.indexOf(17)&&H.push(17),-1===H.indexOf(18)&&H.push(18),G[17]=!0,G[18]=!0);var a=$();if(n)for(var r=0;r<n.length;r++)n[r].scope===a&&("keydown"===e.type&&n[r].keydown||"keyup"===e.type&&n[r].keyup)&&le(e,n[r],a,t);if(o in U)for(var l=0;l<U[o].length;l++)if(("keydown"===e.type&&U[o][l].keydown||"keyup"===e.type&&U[o][l].keyup)&&U[o][l].key){for(var c=U[o][l],u=c.splitKey,p=c.key.split(u),d=[],h=0;h<p.length;h++)d.push(q(p[h]));d.sort().join("")===H.sort().join("")&&le(e,c,a,t)}}}function ue(e){return Y.indexOf(e)>-1}function pe(e,t,n){H=[];var o=N(e),i=[],s="all",a=document,r=0,l=!1,c=!0,u="+",p=!1;for(void 0===n&&"function"==typeof t&&(n=t),"[object Object]"===Object.prototype.toString.call(t)&&(t.scope&&(s=t.scope),t.element&&(a=t.element),t.keyup&&(l=t.keyup),void 0!==t.keydown&&(c=t.keydown),void 0!==t.capture&&(p=t.capture),"string"==typeof t.splitKey&&(u=t.splitKey)),"string"==typeof t&&(s=t);r<o.length;r++)i=[],(e=o[r].split(u)).length>1&&(i=R(j,e)),(e="*"===(e=e[e.length-1])?"*":q(e))in U||(U[e]=[]),U[e].push({keyup:l,keydown:c,scope:s,mods:i,shortcut:o[r],method:n,key:o[r],splitKey:u,element:a});void 0!==a&&!ue(a)&&window&&(Y.push(a),F(a,"keydown",(function(e){ce(e,a)}),p),X||(X=!0,F(window,"focus",(function(){H=[]}),p)),F(a,"keyup",(function(e){ce(e,a),se(e)}),p))}function de(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";Object.keys(U).forEach((function(n){U[n].filter((function(n){return n.scope===t&&n.shortcut===e})).forEach((function(e){e&&e.method&&e.method()}))}))}var he={getPressedKeyString:te,setScope:Q,getScope:$,deleteScope:ie,getPressedKeyCodes:ee,isPressed:oe,filter:ne,trigger:de,unbind:ae,keyMap:M,modifier:j,modifierMap:D};for(var me in he)Object.prototype.hasOwnProperty.call(he,me)&&(pe[me]=he[me]);if("undefined"!=typeof window){var ge=window.hotkeys;pe.noConflict=function(e){return e&&window.hotkeys===pe&&(window.hotkeys=ge),pe},window.hotkeys=pe}const fe=new Set(["INPUT","SELECT","TEXTAREA","PAPER-INPUT","PAPER-TEXTAREA","PB-SEARCH"]);let ye=!0;ye&&(pe.filter=e=>{const t=(e.target||e.srcElement).tagName;return!(t.isContentEditable||fe.has(t))},ye=!1);const ve=e=>class extends e{static get properties(){return Object.assign(Object.assign({},super.properties),{},{hotkeys:{type:Object}})}constructor(){super(),this.hotkeys={}}registerHotkey(e,t,n){e&&this.hotkeys[e]&&(n?pe(this.hotkeys[e],{element:n},t):pe(this.hotkeys[e],t))}display(e){if(e&&this.hotkeys[e]){let t=[];return this.hotkeys[e].split(/\s*,\s*/).forEach(e=>{t.push(e.replace("+","-"))}),t.join(", ")}return""}};function be(e,t,n){n?pe(e,{element:n},t):pe(e,t)}window.pbKeyboard=be,e({_template:t`
    <style>
      :host {
        display: block;
        box-sizing: border-box;
        position: relative;

        --paper-input-container-focus-color: var(--primary-color);

        --paper-icon-button: {
          height: 24px;
          width: 24px;
          padding: 2px;
        }

        --paper-input-container-ms-clear: {
          display: none;
        }
      }

      .input-wrapper {
        @apply --layout-horizontal;
      }

      .input-wrapper paper-input {
        @apply --layout-flex;
      }

      #clear {
        display: none;
        line-height: 8px;
      }

      .sr-only {
        position: absolute;
        clip: rect(1px, 1px, 1px, 1px);
      }

      paper-autocomplete-suggestions {
        --suggestions-wrapper: {
          @apply --paper-autocomplete-suggestions-wrapper;
        };

        --paper-item-min-height: var(--paper-autocomplete-suggestions-item-min-height, 36px);
      }
    </style>

    <div class="input-wrapper" role="combobox" aria-haspopup="true" aria-owns="suggestionsWrapper" aria-expanded\$="[[_isSuggestionsOpened]]">
      <!-- For accessibility, it is needed to have a label or aria-label. Label is preferred -->
      <label for="autocompleteInput" class="sr-only">[[label]]</label>

      <!-- Adding a hidden input to integrate with iron-form, if required -->
      <input type="hidden" name\$="[[name]]" value\$="[[value]]">

      <paper-input id="autocompleteInput" label="[[label]]" autocapitalize="[[autocapitalize]]" no-label-float="[[noLabelFloat]]" disabled="{{disabled}}" readonly="[[readonly]]" focused="{{focused}}" auto-validate\$="[[autoValidate]]" error-message\$="[[errorMessage]]" required\$="[[required]]" value="{{text}}" allowed-pattern="[[allowedPattern]]" pattern="[[pattern]]" always-float-label="[[alwaysFloatLabel]]" char-counter\$="[[charCounter]]" maxlength\$="[[maxlength]]" placeholder="[[placeholder]]" invalid="{{invalid}}" role="textbox" aria-autocomplete="list" aria-multiline="false" aria-activedescendant\$="[[_highlightedSuggestion.elementId]]" aria-disabled\$="[[disabled]]" aria-controls="autocompleteStatus suggestionsWrapper">

        <slot name="prefix" slot="prefix"></slot>
        <!-- TODO: remove tabindex workaround when  is fixed https://github.com/PolymerElements/paper-input/issues/324 -->
        <paper-icon-button slot="suffix" suffix="" id="clear" icon="clear" on-click="_clear" tabindex="-1"></paper-icon-button>
        <slot name="suffix" slot="suffix"></slot>
      </paper-input>
      <!-- to announce current selection to screen reader -->
      <span id="autocompleteStatus" role="status" class="sr-only">[[_highlightedSuggestion.textValue]]</span>
    </div>

    <paper-autocomplete-suggestions for="autocompleteInput" id="paperAutocompleteSuggestions" min-length="[[minLength]]" text-property="[[textProperty]]" value-property="[[valueProperty]]" selected-option="{{selectedOption}}" source="[[source]]" remote-source="[[remoteSource]]" query-fn="[[queryFn]]" event-namespace="[[eventNamespace]]" highlighted-suggestion="{{_highlightedSuggestion}}" is-open="{{_isSuggestionsOpened}}" highlight-first="[[highlightFirst]]" show-results-on-focus="[[showResultsOnFocus]]">

      <slot id="templates" name="autocomplete-custom-template"></slot>

    </paper-autocomplete-suggestions>
`,is:"paper-autocomplete",properties:{autoValidate:{type:Boolean,value:!1},invalid:{type:Boolean,notify:!0,value:!1},autocapitalize:String,errorMessage:{type:String},label:String,noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},placeholder:String,required:{type:Boolean,value:!1},readonly:{type:Boolean,value:!1},focused:{type:Boolean,value:!1,notify:!0},disabled:{type:Boolean,value:!1},source:{type:Array,observer:"_sourceChanged"},textProperty:{type:String,value:"text"},valueProperty:{type:String,value:"value"},value:{type:Object,notify:!0},text:{type:String,notify:!0,value:""},disableShowClear:{type:Boolean,value:!1},remoteSource:{type:Boolean,value:!1},eventNamespace:{type:String,value:"-"},minLength:{type:Number,value:1},pattern:String,allowedPattern:String,charCounter:{type:Boolean,value:!1},maxlength:{type:Number},name:String,queryFn:{type:Function},highlightFirst:{type:Boolean,value:!1},showResultsOnFocus:{type:Boolean,value:!1},_value:{value:void 0},_text:{value:void 0},_isClearButtonVisible:{type:Boolean,value:!1},_isSuggestionsOpened:{type:Boolean,value:!1},selectedOption:{type:Object,notify:!0}},observers:["_textObserver(text)"],_sourceChanged:function(e){var t=this.text;!Array.isArray(e)||0===e.length||null===t||t.length<this.minLength||this.$.autocompleteInput.focused&&this.$.paperAutocompleteSuggestions._handleSuggestions({target:{value:t}})},ready:function(){this._value=this.value,this.addEventListener("autocomplete"+this.eventNamespace+"selected",this._onAutocompleteSelected.bind(this))},_clear:function(){var e={text:this.text,value:this.value};this.value=null,this._value=null,this.text="",this._text="",this._fireEvent(e,"reset-blur"),this._hideClearButton(),this.$.autocompleteInput.focused||this.$.autocompleteInput.focus()},_fireEvent:function(e,t){var n=this._getId(),o="autocomplete"+this.eventNamespace+t;this.fire(o,{id:n,value:e[this.valueProperty]||e.value,text:e[this.textProperty]||e.text,target:this,option:e})},_textObserver:function(e){e&&e.trim()?this._showClearButton():this._hideClearButton()},_onAutocompleteSelected:function(e){var t=e.detail;this.value=t.value,this.text=t.text},_showClearButton:function(){this.disableShowClear||this._isClearButtonVisible||(this.$.clear.style.display="inline-block",this._isClearButtonVisible=!0)},_hideClearButton:function(){this._isClearButtonVisible&&(this.$.clear.style.display="none",this._isClearButtonVisible=!1)},_getId:function(){var e=this.getAttribute("id");return e||(e=this.dataset.id),e},getOption:function(){return{text:this.text,value:this.value}},setOption:function(e){this.text=e[this.textProperty]||e.text,this.value=e[this.valueProperty]||e.value,this._showClearButton()},disable:function(){this.disabled=!0},enable:function(){this.disabled=!1},suggestions:function(e){this.$.paperAutocompleteSuggestions.suggestions(e)},validate:function(){return this.$.autocompleteInput.validate()},clear:function(){this._value="",this._text="",this._clear()},reset:function(){this._clear()},hideSuggestions:function(){this._hideClearButton(),this.$.paperAutocompleteSuggestions.hideSuggestions()},onSelectHandler:function(e){this.$.paperAutocompleteSuggestions._onSelect(e)}});class xe extends f{static get styles(){return v`
            :host {
                display:block;
            }
            
            paper-dialog{
                min-width:300px;
            }
        `}static get properties(){return{title:{type:String,reflect:!0},type:{type:String},message:{type:String,reflect:!0}}}constructor(){super(),this.title="",this.message="",this.type="message"}render(){return y`
        <paper-dialog id="modal">
            <h2 id="title">${x(this.title)}</h2>
            <paper-dialog-scrollable id="message" class="message" tabindex="0">
            ${this.message?x(this.message):y`<slot></slot>`}
            </paper-dialog-scrollable>

            <div class="buttons">
                <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus" ?hidden="${this.isConfirm()}">${b("dialogs.close")}</paper-button>
                <paper-button id="confirm" dialog-confirm="dialog-confirm" autofocus="autofocus" ?hidden="${this.isMessage()}">${b("dialogs.yes")}</paper-button>
                <paper-button id="reject" dialog-confirm="dialog-confirm" autofocus="autofocus" ?hidden="${this.isMessage()}">${b("dialogs.no")}</paper-button>
            </div>
        </paper-dialog>
        `}firstUpdated(){this.modal=this.shadowRoot.getElementById("modal")}updated(){this.modal&&this.modal.notifyResize()}show(e,t){this.type="message",this.set(e,t),this.modal.noCancelOnOutsideClick=!1,this.modal.noCancelOnEscKey=!1,this.modal.open()}confirm(e,t){this.type="confirm",this.set(e,t),this.modal.noCancelOnOutsideClick=!0,this.modal.noCancelOnEscKey=!0,this.modal.open();const n=this.shadowRoot.getElementById("confirm"),o=this.shadowRoot.getElementById("reject");return new Promise((e,t)=>{n.addEventListener("click",e,{once:!0}),o.addEventListener("click",t,{once:!0})})}set(e,t){(e||t)&&(e&&(this.title=e),t&&(this.message=t),this.modal.notifyResize())}isMessage(){return"message"===this.type}isConfirm(){return"confirm"===this.type}}customElements.define("pb-message",xe);class Ae extends(g(f)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{path:{type:String},src:{type:String},title:{type:String},_href:{type:String}})}constructor(){super(),this.title=""}connectedCallback(){super.connectedCallback(),m("pb-page-ready",e=>{if("."===e.endpoint)this._href="/exist/apps/eXide/";else{const t=/^(.*:\/+[^/]+)\/.*$/.exec(e.endpoint);this._href=t?t[1]+"/exist/apps/eXide/":"/exist/apps/eXide/"}})}render(){return new URL(this._href,window.location.href).origin===this.getUrl().origin?y`<a href="${this._href}" target="eXide" title="${this.title}" @click="${this.open}"><slot></slot></a>`:y`<a href="${this._href}/index.html?open=${this.path}" title="${this.title}"><slot></slot></a>`}static get styles(){return v`
            :host {
                display: inline;
            }

            a {
                color: inherit;
                text-decoration: none;
            }
        `}setPath(e){this.path=e}open(e){e.preventDefault();let t=this._href,n=this.path;if(this.src){const e=document.getElementById(this.src);n=e.getFullPath(),t=e.sourceView}const o=window.open("","eXide");if(o&&!o.closed){o.eXide?(console.log("<pb-edit-xml> using existing eXide to open %s",n),o.eXide.app.findDocument(n),o.focus()):(console.log("<pb-edit-xml> opening new eXide for %s",n),window.eXide_onload=function(){o.eXide.app.findDocument(n)},o.location=t)}}}customElements.define("pb-edit-xml",Ae);class _e extends HTMLElement{static get version(){return"1.6.1"}}customElements.define("vaadin-lumo-styles",_e);const we=document.createElement("template");we.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,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) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n</custom-style>',document.head.appendChild(we.content);const Se=document.createElement("template");Se.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Se.content);const Ce=document.createElement("template");Ce.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(Ce.content);const ke=document.createElement("template");ke.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(ke.content);const Ee=document.createElement("template");Ee.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(Ee.content);const ze=document.createElement("template");ze.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n\n      /* RTL specific styles */\n\n      blockquote[dir="rtl"] {\n        border-left: none;\n        border-right: 2px solid var(--lumo-contrast-30pct);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(ze.content);const Oe=e=>class extends e{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),"theme"===e&&this._setTheme(n)}},Ie=e=>class extends(Oe(e)){static finalize(){super.finalize();const e=this.prototype._template,t=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,n=Object.getPrototypeOf(this.prototype)._template;n&&!t&&Array.from(n.content.querySelectorAll("style[include]")).forEach(t=>{this._includeStyle(t.getAttribute("include"),e)}),this._includeMatchingThemes(e)}static _includeMatchingThemes(e){const t=c.prototype.modules;let n=!1;const o=this.is+"-default-theme";Object.keys(t).sort((e,t)=>{const n=0===e.indexOf("vaadin-"),o=0===t.indexOf("vaadin-"),i=["lumo-","material-"],s=i.filter(t=>0===e.indexOf(t)).length>0,a=i.filter(e=>0===t.indexOf(e)).length>0;return n!==o?n?-1:1:s!==a?s?-1:1:0}).forEach(i=>{if(i!==o){const o=t[i].getAttribute("theme-for");o&&o.split(" ").forEach(t=>{new RegExp("^"+t.split("*").join(".*")+"$").test(this.is)&&(n=!0,this._includeStyle(i,e))})}}),!n&&t[o]&&this._includeStyle(o,e)}static _includeStyle(e,t){if(t&&!t.content.querySelector(`style[include="${e}"]`)){const n=document.createElement("style");n.setAttribute("include",e),t.content.appendChild(n)}}}
/**
@license
Copyright (c) 2020 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/;class Te{static detectScrollType(){const e=document.createElement("div");e.textContent="ABCD",e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e);let t="reverse";return e.scrollLeft>0?t="default":(e.scrollLeft=2,e.scrollLeft<2&&(t="negative")),document.body.removeChild(e),t}static getNormalizedScrollLeft(e,t,n){const{scrollLeft:o}=n;if("rtl"!==t||!e)return o;switch(e){case"negative":return n.scrollWidth-n.clientWidth+o;case"reverse":return n.scrollWidth-n.clientWidth-o}return o}static setNormalizedScrollLeft(e,t,n,o){if("rtl"===t&&e)switch(e){case"negative":n.scrollLeft=n.clientWidth-n.scrollWidth+o;break;case"reverse":n.scrollLeft=n.scrollWidth-n.clientWidth-o;break;default:n.scrollLeft=o}else n.scrollLeft=o}}const Be=[];let We;new MutationObserver((function(){const e=Fe();Be.forEach(t=>{Le(t,e)})})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Le=function(e,t){t?e.setAttribute("dir",t):e.removeAttribute("dir")},Fe=function(){return document.documentElement.getAttribute("dir")},Re=e=>class extends e{static get properties(){return{dir:{type:String,readOnly:!0}}}static finalize(){super.finalize(),We||(We=Te.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),Le(this,Fe()))}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),"dir"!==e)return;const o=n===Fe()&&-1===Be.indexOf(this),i=!n&&t&&-1===Be.indexOf(this),s=n!==Fe()&&t===Fe();o||i?(this.__subscribe(),Le(this,Fe())):s&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}__subscribe(e=!0){e?-1===Be.indexOf(this)&&Be.push(this):Be.indexOf(this)>-1&&Be.splice(Be.indexOf(this),1)}__getNormalizedScrollLeft(e){return Te.getNormalizedScrollLeft(We,this.getAttribute("dir")||"ltr",e)}__setNormalizedScrollLeft(e,t){return Te.setNormalizedScrollLeft(We,this.getAttribute("dir")||"ltr",e,t)}},Ne=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Pe=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Me(){function e(){return!0}return Ke(e)}function je(){try{return!!De()||!!Ge()&&(Pe?!Ue():!Me())}catch(e){return!1}}function De(){return localStorage.getItem("vaadin.developmentmode.force")}function Ge(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Ue(){if(Pe){if(Object.keys(Pe).map(e=>Pe[e]).filter(e=>e.productionMode).length>0)return!0}return!1}function Ke(e,t){if("function"!=typeof e)return;const n=Ne.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const He=function(e,t){if(window.Vaadin.developmentMode)return Ke(e,t)};function Xe(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=je());const Ve=function(){if("function"==typeof He)return He(Xe)};let Ye;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Ve&&Ve()};const qe=new Set,Ze=e=>class extends(Re(e)){static finalize(){super.finalize();const{is:e}=this;e&&!qe.has(e)&&(window.Vaadin.registrations.push(this),qe.add(e),window.Vaadin.developmentModeCallback&&(Ye=u.debounce(Ye,p,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),d(Ye)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};export{Te as D,Ze as E,I as P,Ie as T,S as i,_ as l,ve as p,E as t};
