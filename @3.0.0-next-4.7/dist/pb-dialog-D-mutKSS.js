import{w as e,a as t,x as n,i as o,p as i}from"./pb-mixin-B7EAqf7q.js";import{o as s}from"./unsafe-html-C7vzzZJI.js";!function(){if("undefined"!=typeof document&&!("adoptedStyleSheets"in document)){var e="ShadyCSS"in window&&!ShadyCSS.nativeShadow,t=document.implementation.createHTMLDocument(""),n=new WeakMap,o="object"==typeof DOMException?Error:DOMException,i=Object.defineProperty,s=Array.prototype.forEach,r=/@import.+?;?$/gm,c=["addRule","deleteRule","insertRule","removeRule"],a=CSSStyleSheet.prototype;a.replace=function(){return Promise.reject(new o("Can't call replace on non-constructed CSSStyleSheets."))},a.replaceSync=function(){throw new o("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};var l=new WeakMap,u=new WeakMap,h=new WeakMap,d=new WeakMap,p=F.prototype;p.replace=function(e){try{return this.replaceSync(e),Promise.resolve(this)}catch(e){return Promise.reject(e)}},p.replaceSync=function(e){if(T(this),"string"==typeof e){var t=this;l.get(t).textContent=E(e),d.set(t,[]),u.get(t).forEach(function(e){e.isConnected()&&I(t,j(t,e))})}},i(p,"cssRules",{configurable:!0,enumerable:!0,get:function(){return T(this),l.get(this).sheet.cssRules}}),i(p,"media",{configurable:!0,enumerable:!0,get:function(){return T(this),l.get(this).sheet.media}}),c.forEach(function(e){p[e]=function(){var t=this;T(t);var n=arguments;d.get(t).push({method:e,args:n}),u.get(t).forEach(function(o){if(o.isConnected()){var i=j(t,o).sheet;i[e].apply(i,n)}});var o=l.get(t).sheet;return o[e].apply(o,n)}}),i(F,Symbol.hasInstance,{configurable:!0,value:R});var f={childList:!0,subtree:!0},g=new WeakMap,m=new WeakMap,y=new WeakMap,w=new WeakMap;if(B.prototype={isConnected:function(){var e=m.get(this);return e instanceof Document?"loading"!==e.readyState:x(e.host)},connect:function(){var e=A(this);w.get(this).observe(e,f),y.get(this).length>0&&P(this),O(e,function(e){L(e).connect()})},disconnect:function(){w.get(this).disconnect()},update:function(e){var t=this,n=m.get(t)===document?"Document":"ShadowRoot";if(!Array.isArray(e))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Iterator getter is not callable.");if(!e.every(R))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Failed to convert value to 'CSSStyleSheet'");if(e.some(M))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Can't adopt non-constructed stylesheets");t.sheets=e;var o=y.get(t),i=C(e);k(o,i).forEach(function(e){_(j(e,t)),D(e,t)}),y.set(t,i),t.isConnected()&&i.length>0&&P(t)}},window.CSSStyleSheet=F,N(Document),"ShadowRoot"in window){N(ShadowRoot);var S=Element.prototype,b=S.attachShadow;S.attachShadow=function(e){var t=b.call(this,e);return"closed"===e.mode&&n.set(this,t),t}}var v=L(document);v.isConnected()?v.connect():document.addEventListener("DOMContentLoaded",v.connect.bind(v))}function E(e){var t=e.replace(r,"");return t!==e&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),t.trim()}function x(e){return"isConnected"in e?e.isConnected:document.contains(e)}function C(e){return e.filter(function(t,n){return e.indexOf(t)===n})}function k(e,t){return e.filter(function(e){return-1===t.indexOf(e)})}function _(e){e.parentNode.removeChild(e)}function z(e){return e.shadowRoot||n.get(e)}function R(e){return"object"==typeof e&&(p.isPrototypeOf(e)||a.isPrototypeOf(e))}function M(e){return"object"==typeof e&&a.isPrototypeOf(e)}function $(e,t){var n=document.createElement("style");return h.get(e).set(t,n),u.get(e).push(t),n}function j(e,t){return h.get(e).get(t)}function D(e,t){h.get(e).delete(t),u.set(e,u.get(e).filter(function(e){return e!==t}))}function I(e,t){requestAnimationFrame(function(){t.textContent=l.get(e).textContent,d.get(e).forEach(function(e){return t.sheet[e.method].apply(t.sheet,e.args)})})}function T(e){if(!l.has(e))throw new TypeError("Illegal invocation")}function F(){var e=this,n=document.createElement("style");t.body.appendChild(n),l.set(e,n),u.set(e,[]),h.set(e,new WeakMap),d.set(e,[])}function L(e){var t=g.get(e);return t||(t=new B(e),g.set(e,t)),t}function N(e){i(e.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return L(this).sheets},set:function(e){L(this).update(e)}})}function O(e,t){for(var n=document.createNodeIterator(e,NodeFilter.SHOW_ELEMENT,function(e){return z(e)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),o=void 0;o=n.nextNode();)t(z(o))}function W(e,t){return t instanceof HTMLStyleElement&&y.get(e).some(function(t){return j(t,e)})}function A(e){var t=m.get(e);return t instanceof Document?t.body:t}function P(e){var t=document.createDocumentFragment(),n=y.get(e),o=w.get(e),i=A(e);o.disconnect(),n.forEach(function(n){t.appendChild(j(n,e)||$(n,e))}),i.insertBefore(t,null),o.observe(i,f),n.forEach(function(t){I(t,j(t,e))})}function B(t){var n=this;n.sheets=[],m.set(n,t),y.set(n,[]),w.set(n,new MutationObserver(function(t,o){document?t.forEach(function(t){e||s.call(t.addedNodes,function(e){e instanceof Element&&O(e,function(e){L(e).connect()})}),s.call(t.removedNodes,function(t){t instanceof Element&&(W(n,t)&&P(n),e||O(t,function(e){L(e).disconnect()}))})}):o.disconnect()}))}}();const r=new Map;async function c(e){const t=[];for(const n of e){const e=await a(n);e&&t.push(e)}if(t.length>0){return(new CSSStyleSheet).replace(t.join(""))}return null}function a(e){return fetch(e).then(t=>t.ok?t.text():(console.warn("<theming> Component stylesheet not found: %s",e),null)).then(e=>e).catch(t=>(console.error("<theming> Error loading stylesheet %s: %o",e,t),null))}function l(e){const t=u();if(!t)return null;const n=d(e).join("|");if(r.has(n))return r.get(n);const o=new RegExp(`^(${n})\\b`);let i=null;const s=h(t.cssRules,o,[]);return s.length>0&&(i=new CSSStyleSheet,i.replaceSync(s.join(""))),console.log("<theming> caching stylesheet for %s",n),r.set(n,i),i}function u(){const e=document.querySelector("pb-page");if(!e)return null;const t=e.stylesheet;return t||null}function h(e,t,n){for(let o=0;o<e.length;o++){const i=e[o];if(i instanceof CSSStyleRule){if(t.test(i.selectorText)){const e=i.cssText.replace(t,":host($1) ");n.push(e)}}else i instanceof CSSMediaRule?(n.push(`\n@media ${i.conditionText} {\n`),h(i.cssRules,t,n),n.push("\n}\n")):i instanceof CSSFontFaceRule||n.push(i.cssText)}return n}function d(e){const t=[e.localName];return e.id&&t.push(`#${e.id}`),e.classList.forEach(e=>t.push(`.${e}`)),t}const p=t=>class extends t{connectedCallback(){super.connectedCallback(),e("pb-page-ready",e=>{const t=u();t&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,t])})}};if(!customElements.__pbDefineGuard){const e=customElements.define.bind(customElements);customElements.define=(t,n,o)=>{customElements.get(t)||e(t,n,o)},customElements.__pbDefineGuard=!0}const f={"icons:file-upload":"upload","icons:file-download":"download","icons:cloud-download":"download","icons:clear":"close","icons:check":"check","icons:error-outline":"warning","icons:folder-open":"folder-open","icons:arrow-upward":"arrow-upward","icons:arrow-forward":"chevron-right","icons:arrow-back":"chevron-left","icons:chevron-right":"chevron-right","icons:chevron-left":"chevron-left","icons:open-in-new":"open-in-new","icons:flag":"flag","icons:code":"code","icons:hourglass-empty":"clock","icons:delete":"delete","icons:create":"edit","icons:expand-more":"expand-more","icons:expand-less":"expand-less","icons:view-list":"view-list","icons:zoom-in":"zoom-in","icons:zoom-out":"zoom-out","icons:content-copy":"copy","content-copy":"copy","icons:content-paste":"content-paste","content-paste":"content-paste","icons:arrow-downward":"arrow-downward","icons:refresh":"refresh","icons:save":"save"};class g extends t{static get properties(){return{icon:{type:String},sprite:{type:String},size:{type:String},label:{type:String},decorative:{type:Boolean}}}constructor(){super(),this.icon="",this.size="",this.label="",this.decorative=!1;try{if(void 0!==import.meta&&import.meta.env&&import.meta.env.DEV||"undefined"!=typeof location&&/localhost|127\.0\.0\.1/.test(location.hostname)){const e=window.location.hostname;"8080"===window.location.port||e.includes("tei-publisher")?this.sprite="/exist/apps/tei-publisher/resources/images/icons.svg":this.sprite="/images/icons.svg"}else this.sprite="/dist/images/icons.svg"}catch(e){this.sprite="/dist/images/icons.svg"}}render(){const e=this._getSizeClass(),t=this._getAriaLabel();return n`
      <span
        class="pb-icon ${e}"
        role="img"
        aria-label="${t}"
        aria-hidden="${this.decorative?"true":"false"}"
      >
        ${this.icon?this._renderSpriteIcon():this._renderSlotIcon()}
      </span>
    `}_renderSpriteIcon(){const e=this._normalizeIconName(this.icon);if(!e)return n``;const t=this.sprite&&!this.sprite.startsWith("#")?`${this.sprite}#icon-${e}`:`#icon-${e}`;return n`
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        aria-hidden="${this.decorative?"true":"false"}"
      >
        <use href="${t}"></use>
      </svg>
    `}_renderSlotIcon(){return n`<slot></slot>`}_normalizeIconName(e){if(!e)return"";const t=e.toLowerCase();return f[t]?f[t]:t.includes(":")?t.split(":").pop():t}_getSizeClass(){if(!this.size)return"";return["xs","sm","md","lg","xl"].includes(this.size)?`pb-icon--${this.size}`:(this.style.setProperty("--pb-icon-size",this.size),"")}_getAriaLabel(){if(this.decorative)return"";if(this.label)return this.label;if(this.icon){return this._normalizeIconName(this.icon).replace(/-/g," ").replace(/\b\w/g,e=>e.toUpperCase())}return"Icon"}static get styles(){return o`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .pb-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--pb-icon-size, 1em);
        height: var(--pb-icon-size, 1em);
        color: var(--pb-icon-color, currentColor);
        fill: currentColor;
        flex-shrink: 0;
        user-select: none;
        line-height: 1;
      }

      .pb-icon svg {
        width: 100%;
        height: 100%;
        fill: inherit;
      }

      /* Size variants */
      .pb-icon--xs {
        font-size: 12px;
        width: 12px;
        height: 12px;
      }

      .pb-icon--sm {
        font-size: 16px;
        width: 16px;
        height: 16px;
      }

      .pb-icon--md {
        font-size: 20px;
        width: 20px;
        height: 20px;
      }

      .pb-icon--lg {
        font-size: 24px;
        width: 24px;
        height: 24px;
      }

      .pb-icon--xl {
        font-size: 32px;
        width: 32px;
        height: 32px;
      }

      /* Ensure slotted SVGs are properly sized */
      ::slotted(svg) {
        width: 100%;
        height: 100%;
        fill: currentColor;
      }
    `}}if(customElements.get("pb-icon")||customElements.define("pb-icon",g),!customElements.get("iron-icon")){class e extends g{}customElements.define("iron-icon",e)}class m extends(p(i(t))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{open:{type:Boolean,reflect:!0},modal:{type:Boolean,reflect:!0},title:{type:String,reflect:!0},message:{type:String,reflect:!0}})}constructor(){super(),this.open=!1,this.modal=!0,this._escListener=this._onEsc.bind(this),this.title=null,this.message=null}_onEsc(e){"Escape"===e.key&&this.open&&this.closeDialog()}openDialog(){this.open||(this.modal?this._dialog.showModal():this._dialog.show(),this.dispatchEvent(new CustomEvent("pb-dialog-opened",{bubbles:!0,composed:!0})),this.open=!0)}closeDialog(){this.open&&(this._dialog.close(),this.dispatchEvent(new CustomEvent("pb-dialog-closed",{bubbles:!0,composed:!0})),this.open=!1)}render(){return n`
      <dialog @click="${e=>e.target===this._dialog&&this.modal&&this.closeDialog()}">
        <article>
          <header>
            ${this.title?s(this.title):n`<slot name="title"></slot>`}
            <button rel="prev" aria-label="Close" type="button"></button>
          </header>
          ${this.message?s(this.message):n`<slot></slot>`}
          <footer>
            <slot name="footer"></slot>
          </footer>
        </article>
      </dialog>
    `}firstUpdated(){this._dialog=this.renderRoot.querySelector("dialog"),[...this._dialog.querySelectorAll('button[rel="prev"]'),...this.querySelectorAll('button[rel="prev"]')].forEach(e=>e.addEventListener("click",this.closeDialog.bind(this)))}static get styles(){return o`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      button[rel='prev'] {
        display: block;
        height: 1rem;
        width: 1rem;
        background-image: var(
          --pb-dialog-background-image,
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(136, 145, 164)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E")
        );
        background-position: center;
        background-size: auto 1rem;
        background-repeat: no-repeat;
        background-color: transparent;
        border: none;
      }
      footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 16px;
      }
    `}}customElements.define("pb-dialog",m);export{l as i,c as l,p as t};
