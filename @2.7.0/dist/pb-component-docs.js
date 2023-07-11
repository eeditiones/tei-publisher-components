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
const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,t=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},n=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${n}--\x3e`,r=new RegExp(`${n}|${i}`),s="$lit$";class o{constructor(e,t){this.parts=[],this.element=t;const i=[],o=[],l=document.createTreeWalker(t.content,133,null,!1);let d=0,p=-1,u=0;const{strings:f,values:{length:m}}=e;for(;u<m;){const e=l.nextNode();if(null!==e){if(p++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let i=0;for(let e=0;e<n;e++)a(t[e].name,s)&&i++;for(;i-- >0;){const t=f[u],n=h.exec(t)[2],i=n.toLowerCase()+s,o=e.getAttribute(i);e.removeAttribute(i);const a=o.split(r);this.parts.push({type:"attribute",index:p,name:n,strings:a}),u+=a.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),l.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(n)>=0){const n=e.parentNode,o=t.split(r),l=o.length-1;for(let t=0;t<l;t++){let i,r=o[t];if(""===r)i=c();else{const e=h.exec(r);null!==e&&a(e[2],s)&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-s.length)+e[3]),i=document.createTextNode(r)}n.insertBefore(i,e),this.parts.push({type:"node",index:++p})}""===o[l]?(n.insertBefore(c(),e),i.push(e)):e.data=o[l],u+=l}}else if(8===e.nodeType)if(e.data===n){const t=e.parentNode;null!==e.previousSibling&&p!==d||(p++,t.insertBefore(c(),e)),d=p,this.parts.push({type:"node",index:p}),null===e.nextSibling?e.data="":(i.push(e),p--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(n,t+1));)this.parts.push({type:"node",index:-1}),u++}}else l.currentNode=o.pop()}for(const e of i)e.parentNode.removeChild(e)}}const a=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},l=e=>-1!==e.index,c=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,d=133;function p(e,t){const{element:{content:n},parts:i}=e,r=document.createTreeWalker(n,d,null,!1);let s=f(i),o=i[s],a=-1,l=0;const c=[];let h=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,s=f(i,s),o=i[s]}c.forEach(e=>e.parentNode.removeChild(e))}const u=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,d,null,!1);for(;n.nextNode();)t++;return t},f=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(l(t))return n}return-1};function m(e,t,n=null){const{element:{content:i},parts:r}=e;if(null==n)return void i.appendChild(t);const s=document.createTreeWalker(i,d,null,!1);let o=f(r),a=0,l=-1;for(;s.nextNode();){l++;for(s.currentNode===n&&(a=u(t),n.parentNode.insertBefore(t,n));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=f(r,o);return}o=f(r,o)}}}
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
 */const g=new WeakMap,_=e=>(...t)=>{const n=e(...t);return g.set(n,!0),n},y=e=>"function"==typeof e&&g.has(e),b={},v={};
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
class w{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],i=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let s,o=0,a=0,c=r.nextNode();for(;o<i.length;)if(s=i[o],l(s)){for(;a<s.index;)a++,"TEMPLATE"===c.nodeName&&(n.push(c),r.currentNode=c.content),null===(c=r.nextNode())&&(r.currentNode=n.pop(),c=r.nextNode());if("node"===s.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,s.name,s.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const x=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),k=` ${n} `;class S{constructor(e,t,n,i){this.strings=e,this.values=t,this.type=n,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let o=0;o<e;o++){const e=this.strings[o],a=e.lastIndexOf("\x3c!--");r=(a>-1||r)&&-1===e.indexOf("--\x3e",a+1);const l=h.exec(e);t+=null===l?e+(r?k:i):e.substr(0,l.index)+l[1]+l[2]+s+l[3]+n}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==x&&(t=x.createHTML(t)),e.innerHTML=t,e}}
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
 */const C=e=>null===e||!("object"==typeof e||"function"==typeof e),A=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class P{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new E(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=n[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!A(e))return e}let i="";for(let r=0;r<t;r++){i+=e[r];const t=n[r];if(void 0!==t){const e=t.value;if(C(e)||!A(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class E{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===b||C(e)&&e===this.value||(this.value=e,y(e)||(this.committer.dirty=!0))}commit(){for(;y(this.value);){const e=this.value;this.value=b,e(this)}this.value!==b&&this.committer.commit()}}class T{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(c()),this.endNode=e.appendChild(c())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=c()),e.__insert(this.endNode=c())}insertAfterPart(e){e.__insert(this.startNode=c()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;y(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=b,e(this)}const e=this.__pendingValue;e!==b&&(C(e)?e!==this.value&&this.__commitText(e):e instanceof S?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):A(e)?this.__commitIterable(e):e===v?(this.value=v,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof w&&this.value.template===t)this.value.update(e.values);else{const n=new w(t,e.processor,this.options),i=n._clone();n.update(e.values),this.__commitNode(i),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,i=0;for(const r of e)n=t[i],void 0===n&&(n=new T(this.options),t.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(t[i-1])),n.setValue(r),n.commit(),i++;i<t.length&&(t.length=i,this.clear(n&&n.endNode))}clear(e=this.startNode){t(this.startNode.parentNode,e.nextSibling,this.endNode)}}class O{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;y(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=b,e(this)}if(this.__pendingValue===b)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=b}}class N extends P{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new R(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class R extends E{}let z=!1;(()=>{try{const e={get capture(){return z=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class I{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;y(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=b,e(this)}if(this.__pendingValue===b)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=D(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=b}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const D=e=>e&&(z?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
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
 */;function M(e){let t=L.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},L.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const r=e.strings.join(n);return i=t.keyString.get(r),void 0===i&&(i=new o(e,e.getTemplateElement()),t.keyString.set(r,i)),t.stringsArray.set(e.strings,i),i}const L=new Map,F=new WeakMap,B=(e,n,i)=>{let r=F.get(n);void 0===r&&(t(n,n.firstChild),F.set(n,r=new T(Object.assign({templateFactory:M},i))),r.appendInto(n)),r.setValue(e),r.commit()};
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
class H{handleAttributeExpressions(e,t,n,i){const r=t[0];if("."===r){return new N(e,t.slice(1),n).parts}if("@"===r)return[new I(e,t.slice(1),i.eventContext)];if("?"===r)return[new O(e,t.slice(1),n)];return new P(e,t,n).parts}handleTextExpression(e){return new T(e)}}const $=new H;
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const j=(e,...t)=>new S(e,t,"html",$)
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
 */,U=(e,t)=>`${e}--${t}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const V=e=>t=>{const i=U(t.type,e);let r=L.get(i);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},L.set(i,r));let s=r.stringsArray.get(t.strings);if(void 0!==s)return s;const a=t.strings.join(n);if(s=r.keyString.get(a),void 0===s){const n=t.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(n,e),s=new o(t,n),r.keyString.set(a,s)}return r.stringsArray.set(t.strings,s),s},W=["html","svg"],K=e=>{W.forEach(t=>{const n=L.get(U(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),p(e,n)})})},Y=new Set,G=(e,t,n)=>{Y.add(e);const i=n?n.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:s}=r;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(i,e);const o=document.createElement("style");for(let e=0;e<s;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}K(e);const a=i.content;n?m(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),p(n,e)}},J=(e,n,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,s=F.has(n),o=q&&11===n.nodeType&&!!n.host,a=o&&!Y.has(r),l=a?document.createDocumentFragment():n;if(B(e,l,Object.assign({templateFactory:V(r)},i)),a){const e=F.get(l);F.delete(l);const i=e.value instanceof w?e.value.template:void 0;G(r,l,i),t(n,n.firstChild),n.appendChild(l),F.set(n,e)}!s&&o&&window.ShadyCSS.styleElement(n.host)};window.JSCompiler_renameProperty=(e,t)=>e;const Z={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},X=(e,t)=>t!==e&&(t==t||e==e),Q={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:X},ee=1,te=4,ne=8,ie=16,re="finalized";class se extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const i=this._attributeNameForProperty(n,t);void 0!==i&&(this._attributeToPropertyMap.set(i,n),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=Q){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const r=this[e];this[t]=i,this.requestUpdateInternal(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Q}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(re)||e.finalize(),this[re]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=X){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,i=t.converter||Z,r="function"==typeof i?i:i.fromAttribute;return r?r(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,i=t.converter;return(i&&i.toAttribute||Z.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=Q){const i=this.constructor,r=i._attributeNameForProperty(e,n);if(void 0!==r){const e=i._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|ne,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=this._updateState&~ne}}_attributeToProperty(e,t){if(this._updateState&ne)return;const n=this.constructor,i=n._attributeToPropertyMap.get(e);if(void 0!==i){const e=n.getPropertyOptions(i);this._updateState=this._updateState|ie,this[i]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~ie}}requestUpdateInternal(e,t,n){let i=!0;if(void 0!==e){const r=this.constructor;n=n||r.getPropertyOptions(e),r._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||this._updateState&ie||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|te;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&te}get hasUpdated(){return this._updateState&ee}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(this._updateState&ee||(this._updateState=this._updateState|ee,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~te}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}se[re]=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const oe=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ae=Symbol();class le{constructor(e,t){if(t!==ae)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(oe?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ce=e=>new le(String(e),ae),he=e=>{if(e instanceof le)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)},de=(e,...t)=>{const n=t.reduce((t,n,i)=>t+he(n)+e[i+1],e[0]);return new le(n,ae)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const pe={};class ue extends se{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),i=[];n.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!oe){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return ce(t)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?oe?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==pe&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return pe}}ue.finalized=!0,ue.render=J,ue.shadowRootOptions={mode:"open"};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const fe=!(window.ShadyDOM&&window.ShadyDOM.inUse);let me,ge;function _e(e){me=(!e||!e.shimcssproperties)&&(fe||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(ge=window.ShadyCSS.cssBuild);const ye=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?me=window.ShadyCSS.nativeCss:window.ShadyCSS?(_e(window.ShadyCSS),window.ShadyCSS=void 0):_e(window.WebComponents&&window.WebComponents.flags);const be=me;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class ve{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function we(e){return Se(ke(e=xe(e)),e)}function xe(e){return e.replace(Ie.comments,"").replace(Ie.port,"")}function ke(e){let t=new ve;t.start=0,t.end=e.length;let n=t;for(let i=0,r=e.length;i<r;i++)if(e[i]===Re){n.rules||(n.rules=[]);let e=n,t=e.rules[e.rules.length-1]||null;n=new ve,n.start=i+1,n.parent=e,n.previous=t,e.rules.push(n)}else e[i]===ze&&(n.end=i+1,n=n.parent||t);return t}function Se(e,t){let n=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=n.trim(),e.parent){let i=e.previous?e.previous.end:e.parent.start;n=t.substring(i,e.start-1),n=Ce(n),n=n.replace(Ie.multipleSpaces," "),n=n.substring(n.lastIndexOf(";")+1);let r=e.parsedSelector=e.selector=n.trim();e.atRule=0===r.indexOf(Le),e.atRule?0===r.indexOf(Me)?e.type=Ne.MEDIA_RULE:r.match(Ie.keyframesRule)&&(e.type=Ne.KEYFRAMES_RULE,e.keyframesName=e.selector.split(Ie.multipleSpaces).pop()):0===r.indexOf(De)?e.type=Ne.MIXIN_RULE:e.type=Ne.STYLE_RULE}let i=e.rules;if(i)for(let e,n=0,r=i.length;n<r&&(e=i[n]);n++)Se(e,t);return e}function Ce(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}function Ae(e,t,n=""){let i="";if(e.cssText||e.rules){let n=e.rules;if(n&&!Pe(n))for(let e,r=0,s=n.length;r<s&&(e=n[r]);r++)i=Ae(e,t,i);else i=t?e.cssText:Ee(e.cssText),i=i.trim(),i&&(i="  "+i+"\n")}return i&&(e.selector&&(n+=e.selector+" "+Re+"\n"),n+=i,e.selector&&(n+=ze+"\n\n")),n}function Pe(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(De)}function Ee(e){return Oe(e=Te(e))}function Te(e){return e.replace(Ie.customProp,"").replace(Ie.mixinProp,"")}function Oe(e){return e.replace(Ie.mixinApply,"").replace(Ie.varApply,"")}const Ne={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Re="{",ze="}",Ie={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},De="--",Me="@media",Le="@",Fe=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Be=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,He=/@media\s(.*)/,$e=new Set,je="shady-unscoped";function Ue(e){const t=e.textContent;if(!$e.has(t)){$e.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function qe(e){return e.hasAttribute(je)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ve(e,t){return e?("string"==typeof e&&(e=we(e)),t&&Ke(e,t),Ae(e,be)):""}function We(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=we(e.textContent)),e.__cssRules||null}function Ke(e,t,n,i){if(!e)return;let r=!1,s=e.type;if(i&&s===Ne.MEDIA_RULE){let t=e.selector.match(He);t&&(window.matchMedia(t[1]).matches||(r=!0))}s===Ne.STYLE_RULE?t(e):n&&s===Ne.KEYFRAMES_RULE?n(e):s===Ne.MIXIN_RULE&&(r=!0);let o=e.rules;if(o&&!r)for(let e,r=0,s=o.length;r<s&&(e=o[r]);r++)Ke(e,t,n,i)}function Ye(e,t){let n=0;for(let i=t,r=e.length;i<r;i++)if("("===e[i])n++;else if(")"===e[i]&&0==--n)return i;return-1}function Ge(e,t){let n=e.indexOf("var(");if(-1===n)return t(e,"","","");let i=Ye(e,n+3),r=e.substring(n+4,i),s=e.substring(0,n),o=Ge(e.substring(i+1),t),a=r.indexOf(",");return-1===a?t(s,r.trim(),"",o):t(s,r.substring(0,a).trim(),r.substring(a+1).trim(),o)}window.ShadyDOM&&window.ShadyDOM.wrap;function Je(e){let t=e.localName,n="",i="";return t?t.indexOf("-")>-1?n=t:(i=t,n=e.getAttribute&&e.getAttribute("is")||""):(n=e.is,i=e.extends),{is:n,typeExtension:i}}function Ze(e){const t=[],n=e.querySelectorAll("style");for(let e=0;e<n.length;e++){const i=n[e];qe(i)?fe||(Ue(i),i.parentNode.removeChild(i)):(t.push(i.textContent),i.parentNode.removeChild(i))}return t.join("").trim()}const Xe="css-build";function Qe(e){if(void 0!==ge)return ge;if(void 0===e.__cssBuild){const t=e.getAttribute(Xe);if(t)e.__cssBuild=t;else{const t=tt(e);""!==t&&nt(e),e.__cssBuild=t}}return e.__cssBuild||""}function et(e){return""!==Qe(e)}function tt(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if(e[0]===Xe)return e[1]}return""}function nt(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function it(e,t){for(let n in t)null===n?e.style.removeProperty(n):e.style.setProperty(n,t[n])}function rt(e,t){const n=window.getComputedStyle(e).getPropertyValue(t);return n?n.trim():""}function st(e){const t=Be.test(e)||Fe.test(e);return Be.lastIndex=0,Fe.lastIndex=0,t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ot=/;\s*/m,at=/^\s*(initial)|(inherit)\s*$/,lt=/\s*!important/,ct="_-_";class ht{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let dt=null;class pt{constructor(){this._currentElement=null,this._measureElement=null,this._map=new ht}detectMixin(e){return st(e)}gatherStyles(e){const t=Ze(e.content);if(t){const n=document.createElement("style");return n.textContent=t,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const n=e._gatheredStyle;return n?this.transformStyle(n,t):null}transformStyle(e,t=""){let n=We(e);return this.transformRules(n,t),e.textContent=Ve(n),n}transformCustomStyle(e){let t=We(e);return Ke(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=Ve(t),t}transformRules(e,t){this._currentElement=t,Ke(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(Fe,(e,n,i,r)=>this._produceCssProperties(e,n,i,r,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const n={};let i=!1;return Ke(t,t=>{i=i||t===e,i||t.selector===e.selector&&Object.assign(n,this._cssTextToMap(t.parsedCssText))}),n}_consumeCssProperties(e,t){let n=null;for(;n=Be.exec(e);){let i=n[0],r=n[1],s=n.index,o=s+i.indexOf("@apply"),a=s+i.length,l=e.slice(0,o),c=e.slice(a),h=t?this._fallbacksFromPreviousRules(t):{};Object.assign(h,this._cssTextToMap(l));let d=this._atApplyToCssProperties(r,h);e=`${l}${d}${c}`,Be.lastIndex=s+d.length}return e}_atApplyToCssProperties(e,t){e=e.replace(ot,"");let n=[],i=this._map.get(e);if(i||(this._map.set(e,{}),i=this._map.get(e)),i){let r,s,o;this._currentElement&&(i.dependants[this._currentElement]=!0);const a=i.properties;for(r in a)o=t&&t[r],s=[r,": var(",e,ct,r],o&&s.push(",",o.replace(lt,"")),s.push(")"),lt.test(a[r])&&s.push(" !important"),n.push(s.join(""))}return n.join("; ")}_replaceInitialOrInherit(e,t){let n=at.exec(t);return n&&(t=n[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let n,i,r=e.split(";"),s={};for(let e,o,a=0;a<r.length;a++)e=r[a],e&&(o=e.split(":"),o.length>1&&(n=o[0].trim(),i=o.slice(1).join(":"),t&&(i=this._replaceInitialOrInherit(n,i)),s[n]=i));return s}_invalidateMixinEntry(e){if(dt)for(let t in e.dependants)t!==this._currentElement&&dt(t)}_produceCssProperties(e,t,n,i,r){if(n&&Ge(n,(e,t)=>{t&&this._map.get(t)&&(i=`@apply ${t};`)}),!i)return e;let s=this._consumeCssProperties(""+i,r),o=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(s,!0),l=a,c=this._map.get(t),h=c&&c.properties;h?l=Object.assign(Object.create(h),a):this._map.set(t,l);let d,p,u=[],f=!1;for(d in l)p=a[d],void 0===p&&(p="initial"),h&&!(d in h)&&(f=!0),u.push(`${t}${ct}${d}: ${p}`);return f&&this._invalidateMixinEntry(c),c&&(c.properties=l),n&&(o=`${e};${o}`),`${o}${u.join("; ")};`}}pt.prototype.detectMixin=pt.prototype.detectMixin,pt.prototype.transformStyle=pt.prototype.transformStyle,pt.prototype.transformCustomStyle=pt.prototype.transformCustomStyle,pt.prototype.transformRules=pt.prototype.transformRules,pt.prototype.transformRule=pt.prototype.transformRule,pt.prototype.transformTemplate=pt.prototype.transformTemplate,pt.prototype._separator=ct,Object.defineProperty(pt.prototype,"invalidCallback",{get:()=>dt,set(e){dt=e}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const ut={},ft="_applyShimCurrentVersion",mt="_applyShimNextVersion",gt="_applyShimValidatingVersion",_t=Promise.resolve();
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function yt(e){let t=ut[e];t&&bt(t)}function bt(e){e[ft]=e[ft]||0,e[gt]=e[gt]||0,e[mt]=(e[mt]||0)+1}function vt(e){return e[ft]===e[mt]}function wt(e){return!vt(e)&&e[gt]===e[mt]}function xt(e){e[gt]=e[mt],e._validating||(e._validating=!0,_t.then((function(){e[ft]=e[mt],e._validating=!1})))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let kt,St=null,Ct=window.HTMLImports&&window.HTMLImports.whenReady||null;function At(e){requestAnimationFrame((function(){Ct?Ct(e):(St||(St=new Promise(e=>{kt=e}),"complete"===document.readyState?kt():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&kt()})),St.then((function(){e&&e()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Pt="__seenByShadyCSS",Et="__shadyCSSCachedStyle";let Tt=null,Ot=null;class Nt{constructor(){this.customStyles=[],this.enqueued=!1,At(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&Ot&&(this.enqueued=!0,At(Ot))}addCustomStyle(e){e[Pt]||(e[Pt]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[Et])return e[Et];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const n=e[t];if(n[Et])continue;const i=this.getStyleForCustomStyle(n);if(i){const e=i.__appliedElement||i;Tt&&Tt(e),n[Et]=e}}return e}}Nt.prototype.addCustomStyle=Nt.prototype.addCustomStyle,Nt.prototype.getStyleForCustomStyle=Nt.prototype.getStyleForCustomStyle,Nt.prototype.processStyles=Nt.prototype.processStyles,Object.defineProperties(Nt.prototype,{transformCallback:{get:()=>Tt,set(e){Tt=e}},validateCallback:{get:()=>Ot,set(e){let t=!1;Ot||(t=!0),Ot=e,t&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Rt=new pt;class zt{constructor(){this.customStyleInterface=null,Rt.invalidCallback=yt}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{Rt.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),et(e))return;ut[t]=e;let n=Rt.transformTemplate(e,t);e._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let n=e[t],i=this.customStyleInterface.getStyleForCustomStyle(n);i&&Rt.transformCustomStyle(i)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&it(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=Je(e),n=ut[t];if((!n||!et(n))&&n&&!vt(n)){wt(n)||(this.prepareTemplate(n,t),xt(n));let i=e.shadowRoot;if(i){let e=i.querySelector("style");e&&(e.__cssRules=n._styleAst,e.textContent=Ve(n._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new zt;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,n,i){e.flushCustomStyles(),e.prepareTemplate(t,n)},prepareTemplateStyles(e,t,n){window.ShadyCSS.prepareTemplate(e,t,n)},prepareTemplateDom(e,t){},styleSubtree(t,n){e.flushCustomStyles(),e.styleSubtree(t,n)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>rt(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:be,nativeShadow:fe,cssBuild:ge,disableRuntime:ye},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=Rt,
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(e,t){return e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let It,Dt,Mt=/(url\()([^)]*)(\))/g,Lt=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function Ft(e,t){if(e&&Lt.test(e))return e;if("//"===e)return e;if(void 0===It){It=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",It="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),It)try{return new URL(e,t).href}catch(t){return e}return Dt||(Dt=document.implementation.createHTMLDocument("temp"),Dt.base=Dt.createElement("base"),Dt.head.appendChild(Dt.base),Dt.anchor=Dt.createElement("a"),Dt.body.appendChild(Dt.anchor)),Dt.base.href=t,Dt.anchor.href=e,Dt.anchor.href||e}function Bt(e,t){return e.replace(Mt,(function(e,n,i,r){return n+"'"+Ft(i.replace(/["']/g,""),t)+"'"+r}))}function Ht(e){return e.substring(0,e.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const $t=!window.ShadyDOM||!window.ShadyDOM.inUse,jt=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),$t&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch(e){return!1}})());let Ut=window.Polymer&&window.Polymer.rootPath||Ht(document.baseURI||window.location.href),qt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Vt=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,Wt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Kt=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Yt=window.Polymer&&window.Polymer.legacyOptimizations||!1,Gt=window.Polymer&&window.Polymer.legacyWarnings||!1,Jt=window.Polymer&&window.Polymer.syncInitialRender||!1,Zt=window.Polymer&&window.Polymer.legacyUndefined||!1,Xt=window.Polymer&&window.Polymer.orderedComputed||!1,Qt=window.Polymer&&window.Polymer.removeNestedTemplates||!1,en=window.Polymer&&window.Polymer.fastDomIf||!1,tn=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,nn=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,rn=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,sn=0;const on=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=sn++;function i(i){let r=i.__mixinSet;if(r&&r[n])return i;let s=t,o=s.get(i);if(!o){o=e(i),s.set(i,o);let t=Object.create(o.__mixinSet||r||null);t[n]=!0,o.__mixinSet=t}return o}return i};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let an={},ln={};function cn(e,t){an[e]=ln[e.toLowerCase()]=t}function hn(e){return an[e]||ln[e.toLowerCase()]}function dn(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}class pn extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let n=hn(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,i){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=Ft(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Ht(t)}return this.__assetpath}register(e){if(e=e||this.id){if(Wt&&void 0!==hn(e))throw cn(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,cn(e,this),dn(this)}}}pn.prototype.modules=an,customElements.define("dom-module",pn);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const un="link[rel=import][type~=css]",fn="include",mn="shady-unscoped";function gn(e){return pn.import(e)}function _n(e){const t=Bt((e.body?e.body:e).textContent,e.baseURI),n=document.createElement("style");return n.textContent=t,n}function yn(e){const t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...bn(t[e]));return n}function bn(e){const t=gn(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...xn(t));const n=t.querySelector("template");n&&e.push(...vn(n,t.assetpath)),t._styles=e}return t._styles}function vn(e,t){if(!e._styles){const n=[],i=e.content.querySelectorAll("style");for(let e=0;e<i.length;e++){let r=i[e],s=r.getAttribute(fn);s&&n.push(...yn(s).filter((function(e,t,n){return n.indexOf(e)===t}))),t&&(r.textContent=Bt(r.textContent,t)),n.push(r)}e._styles=n}return e._styles}function wn(e){let t=gn(e);return t?xn(t):[]}function xn(e){const t=[],n=e.querySelectorAll(un);for(let e=0;e<n.length;e++){let i=n[e];if(i.import){const e=i.import,n=i.hasAttribute(mn);if(n&&!e._unscopedStyle){const t=_n(e);t.setAttribute(mn,""),e._unscopedStyle=t}else e._style||(e._style=_n(e));t.push(n?e._unscopedStyle:e._style)}}return t}function kn(e){let t=e.trim().split(/\s+/),n="";for(let e=0;e<t.length;e++)n+=Sn(t[e]);return n}function Sn(e){let t=gn(e);if(t&&void 0===t._cssText){let e=An(t),n=t.querySelector("template");n&&(e+=Cn(n,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function Cn(e,t){let n="";const i=vn(e,t);for(let e=0;e<i.length;e++){let t=i[e];t.parentNode&&t.parentNode.removeChild(t),n+=t.textContent}return n}function An(e){let t="",n=xn(e);for(let e=0;e<n.length;e++)t+=n[e].textContent;return t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Pn=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function En(e){return e.indexOf(".")>=0}function Tn(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function On(e,t){return 0===e.indexOf(t+".")}function Nn(e,t){return 0===t.indexOf(e+".")}function Rn(e,t,n){return t+n.slice(e.length)}function zn(e,t){return e===t||On(e,t)||Nn(e,t)}function In(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let i=e[n].toString().split(".");for(let e=0;e<i.length;e++)t.push(i[e])}return t.join(".")}return e}function Dn(e){return Array.isArray(e)?In(e).split("."):e.toString().split(".")}function Mn(e,t,n){let i=e,r=Dn(t);for(let e=0;e<r.length;e++){if(!i)return;i=i[r[e]]}return n&&(n.path=r.join(".")),i}function Ln(e,t,n){let i=e,r=Dn(t),s=r[r.length-1];if(r.length>1){for(let e=0;e<r.length-1;e++){if(i=i[r[e]],!i)return}i[s]=n}else i[t]=n;return r.join(".")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Fn={},Bn=/-[a-z]/g,Hn=/([A-Z])/g;function $n(e){return Fn[e]||(Fn[e]=e.indexOf("-")<0?e:e.replace(Bn,e=>e[1].toUpperCase()))}function jn(e){return Fn[e]||(Fn[e]=e.replace(Hn,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Un=0,qn=0,Vn=[],Wn=0,Kn=!1,Yn=document.createTextNode("");function Gn(){Kn=!1;const e=Vn.length;for(let t=0;t<e;t++){let e=Vn[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}Vn.splice(0,e),qn+=e}new window.MutationObserver(Gn).observe(Yn,{characterData:!0});const Jn={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},Zn={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},Xn={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},Qn={run:e=>(Kn||(Kn=!0,Yn.textContent=Wn++),Vn.push(e),Un++),cancel(e){const t=e-qn;if(t>=0){if(!Vn[t])throw new Error("invalid async handle: "+e);Vn[t]=null}}},ei=Qn,ti=on(e=>{class t extends e{static createProperties(e){const t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let i=this.__data[e],r=this._shouldPropertyChange(e,t,i);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=i),this.__data[e]=t,this.__dataPending[e]=t),r}_isPropertyPending(e){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,ei.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n)),this.__dataCounter--}_shouldPropertiesChange(e,t,n){return Boolean(t)}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n==n||t==t)}attributeChangedCallback(e,t,n,i){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,i)}_attributeToProperty(e,t,n){if(!this.__serializing){const i=this.__dataAttributes,r=i&&i[e]||e;this[r]=this._deserializeValue(t,n||this.constructor.typeForProperty(r))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){const i=this._serializeValue(t);"class"!==n&&"name"!==n&&"slot"!==n||(e=Pn(e)),void 0===i?e.removeAttribute(n):e.setAttribute(n,i)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}return t}),ni={};let ii=HTMLElement.prototype;for(;ii;){let e=Object.getOwnPropertyNames(ii);for(let t=0;t<e.length;t++)ni[e[t]]=!0;ii=Object.getPrototypeOf(ii)}function ri(e,t){if(!ni[t]){let n=e[t];void 0!==n&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}const si=on(e=>{const t=ti(e);class n extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor($n(e[t]))}static attributeNameForProperty(e){return jn(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch(t){n=e}break;case Array:try{n=JSON.parse(e)}catch(t){n=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+e)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t)}return n}_definePropertyAccessor(e,t){ri(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}return n}),oi={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ai=!1,li=!1;function ci(){if(!ai){ai=!0;const e=document.createElement("textarea");e.placeholder="a",li=e.placeholder===e.textContent}return li}function hi(e){ci()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function di(e){let t=e.getAttribute("is");if(t&&oi[t]){let n=e;for(n.removeAttribute("is"),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;)e.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return e}function pi(e,t){let n=t.parentInfo&&pi(e,t.parentInfo);if(!n)return e;for(let e=n.firstChild,i=0;e;e=e.nextSibling)if(t.parentIndex===i++)return e}function ui(e,t,n,i){i.id&&(t[i.id]=n)}function fi(e,t,n){if(n.events&&n.events.length)for(let i,r=0,s=n.events;r<s.length&&(i=s[r]);r++)e._addMethodEventListenerToNode(t,i.name,i.value,e)}function mi(e,t,n,i){n.templateInfo&&(t._templateInfo=n.templateInfo,t._parentTemplateInfo=i)}function gi(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}const _i=on(e=>{class t extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=Boolean(t),n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let i=!1,r=e;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(t.hasInsertionPoint=!0):i=this._parseTemplateNestedTemplate(r,t,n)||i,hi(r),r.firstChild&&this._parseTemplateChildNodes(r,t,n),r.hasAttributes&&r.hasAttributes()&&(i=this._parseTemplateNodeAttributes(r,t,n)||i),i||n.noted}static _parseTemplateChildNodes(e,t,n){if("script"!==e.localName&&"style"!==e.localName)for(let i,r=e.firstChild,s=0;r;r=i){if("template"==r.localName&&(r=di(r)),i=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=i;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,i=n.nextSibling,e.removeChild(n),n=i;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let o={parentIndex:s,parentInfo:n};this._parseTemplateNode(r,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),r.parentNode&&s++}}static _parseTemplateNestedTemplate(e,t,n){let i=e,r=this._parseTemplate(i,t);return(r.content=i.content.ownerDocument.createDocumentFragment()).appendChild(i.content),n.templateInfo=r,!0}static _parseTemplateNodeAttributes(e,t,n){let i=!1,r=Array.from(e.attributes);for(let s,o=r.length-1;s=r[o];o--)i=this._parseTemplateNodeAttribute(e,t,n,s.name,s.value)||i;return i}static _parseTemplateNodeAttribute(e,t,n,i,r){return"on-"===i.slice(0,3)?(e.removeAttribute(i),n.events=n.events||[],n.events.push({name:i.slice(3),value:r}),!0):"id"===i&&(n.id=r,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let n=(t=t||this.constructor._parseTemplate(e)).nodeInfoList,i=t.content||e.content,r=document.importNode(i,!0);r.__noInsertionPoint=!t.hasInsertionPoint;let s=r.nodeList=new Array(n.length);r.$={};for(let e,i=0,o=n.length;i<o&&(e=n[i]);i++){let n=s[i]=pi(r,e);ui(this,r.$,n,e),mi(this,n,e,t),fi(this,n,e)}return r=r,r}_addMethodEventListenerToNode(e,t,n,i){let r=gi(i=i||e,t,n);return this._addEventListenerToNode(e,t,r),r}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}return t});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let yi=0;const bi=[],vi={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},wi="__computeInfo",xi=/[A-Z]/;function ki(e,t,n){let i=e[t];if(i){if(!e.hasOwnProperty(t)&&(i=e[t]=Object.create(e[t]),n))for(let e in i){let t=i[e],n=i[e]=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}}else i=e[t]={};return i}function Si(e,t,n,i,r,s){if(t){let o=!1;const a=yi++;for(let l in n){let c=t[r?Tn(l):l];if(c)for(let t,h=0,d=c.length;h<d&&(t=c[h]);h++)t.info&&t.info.lastRun===a||r&&!Ai(l,t.trigger)||(t.info&&(t.info.lastRun=a),t.fn(e,l,n,i,t.info,r,s),o=!0)}return o}return!1}function Ci(e,t,n,i,r,s,o,a){let l=!1,c=t[o?Tn(i):i];if(c)for(let t,h=0,d=c.length;h<d&&(t=c[h]);h++)t.info&&t.info.lastRun===n||o&&!Ai(i,t.trigger)||(t.info&&(t.info.lastRun=n),t.fn(e,i,r,s,t.info,o,a),l=!0);return l}function Ai(e,t){if(t){let n=t.name;return n==e||!(!t.structured||!On(n,e))||!(!t.wildcard||!Nn(n,e))}return!0}function Pi(e,t,n,i,r){let s="string"==typeof r.method?e[r.method]:r.method,o=r.property;s?s.call(e,e.__data[o],i[o]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function Ei(e,t,n,i,r){let s,o,a=e[vi.NOTIFY],l=yi++;for(let o in t)t[o]&&(a&&Ci(e,a,l,o,n,i,r)||r&&Ti(e,o,n))&&(s=!0);s&&(o=e.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}function Ti(e,t,n){let i=Tn(t);if(i!==t){return Oi(e,jn(i)+"-changed",n[t],t),!0}return!1}function Oi(e,t,n,i){let r={value:n,queueProperty:!0};i&&(r.path=i),Pn(e).dispatchEvent(new CustomEvent(t,{detail:r}))}function Ni(e,t,n,i,r,s){let o=(s?Tn(t):t)!=t?t:null,a=o?Mn(e,o):e.__data[t];o&&void 0===a&&(a=n[t]),Oi(e,r.eventName,a,o)}function Ri(e,t,n,i,r){let s,o=e.detail,a=o&&o.path;a?(i=Rn(n,i,a),s=o&&o.value):s=e.currentTarget[n],s=r?!s:s,t[vi.READ_ONLY]&&t[vi.READ_ONLY][i]||!t._setPendingPropertyOrPath(i,s,!0,Boolean(a))||o&&o.queueProperty||t._invalidateProperties()}function zi(e,t,n,i,r){let s=e.__data[t];qt&&(s=qt(s,r.attrName,"attribute",e)),e._propertyToAttribute(t,r.attrName,s)}function Ii(e,t,n,i){let r=e[vi.COMPUTE];if(r)if(Xt){yi++;const s=Li(e),o=[];for(let e in t)Mi(e,r,o,s,i);let a;for(;a=o.shift();)Bi(e,"",t,n,a)&&Mi(a.methodInfo,r,o,s,i);Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let s=t;for(;Si(e,r,s,n,i);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),s=e.__dataPending,e.__dataPending=null}}const Di=(e,t,n)=>{let i=0,r=t.length-1,s=-1;for(;i<=r;){const o=i+r>>1,a=n.get(t[o].methodInfo)-n.get(e.methodInfo);if(a<0)i=o+1;else{if(!(a>0)){s=o;break}r=o-1}}s<0&&(s=r+1),t.splice(s,0,e)},Mi=(e,t,n,i,r)=>{const s=t[r?Tn(e):e];if(s)for(let t=0;t<s.length;t++){const o=s[t];o.info.lastRun===yi||r&&!Ai(e,o.trigger)||(o.info.lastRun=yi,Di(o.info,n,i))}};function Li(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const n=e[vi.COMPUTE];let i,{counts:r,ready:s,total:o}=Fi(e);for(;i=s.shift();){t.set(i,t.size);const e=n[i];e&&e.forEach(e=>{const t=e.info.methodInfo;--o,0==--r[t]&&s.push(t)})}if(0!==o){const t=e;console.warn(`Computed graph for ${t.localName} incomplete; circular?`)}e.constructor.__orderedComputedDeps=t}return t}function Fi(e){const t=e[wi],n={},i=e[vi.COMPUTE],r=[];let s=0;for(let e in t){const i=t[e];s+=n[e]=i.args.filter(e=>!e.literal).length+(i.dynamicFn?1:0)}for(let e in i)t[e]||r.push(e);return{counts:n,ready:r,total:s}}function Bi(e,t,n,i,r){let s=Zi(e,t,n,i,r);if(s===bi)return!1;let o=r.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,s,!0):(e[o]=s,!1)}function Hi(e,t,n){let i=e.__dataLinkedPaths;if(i){let r;for(let s in i){let o=i[s];Nn(s,t)?(r=Rn(s,o,t),e._setPendingPropertyOrPath(r,n,!0,!0)):Nn(o,t)&&(r=Rn(o,s,t),e._setPendingPropertyOrPath(r,n,!0,!0))}}}function $i(e,t,n,i,r,s,o){n.bindings=n.bindings||[];let a={kind:i,target:r,parts:s,literal:o,isCompound:1!==s.length};if(n.bindings.push(a),Wi(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||jn(r)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let n=0;n<a.parts.length;n++){let i=a.parts[n];i.compoundIndex=n,ji(e,t,a,i,l)}}function ji(e,t,n,i,r){if(!i.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let s=i.dependencies,o={index:r,binding:n,part:i,evaluator:e};for(let n=0;n<s.length;n++){let i=s[n];"string"==typeof i&&(i=sr(i),i.wildcard=!0),e._addTemplatePropertyEffect(t,i.rootProperty,{fn:Ui,info:o,trigger:i})}}}function Ui(e,t,n,i,r,s,o){let a=o[r.index],l=r.binding,c=r.part;if(s&&c.source&&t.length>c.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let i=n[t];t=Rn(c.source,l.target,t),a._setPendingPropertyOrPath(t,i,!1,!0)&&e._enqueueClient(a)}else{let o=r.evaluator._evaluateBinding(e,c,t,n,i,s);o!==bi&&qi(e,a,l,c,o)}}function qi(e,t,n,i,r){if(r=Vi(t,r,n,i),qt&&(r=qt(r,n.target,n.kind,t)),"attribute"==n.kind)e._valueToNodeAttribute(t,r,n.target);else{let i=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[i]?t[vi.READ_ONLY]&&t[vi.READ_ONLY][i]||t._setPendingProperty(i,r)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,i,r)}}function Vi(e,t,n,i){if(n.isCompound){let r=e.__dataCompoundStorage[n.target];r[i.compoundIndex]=t,t=r.join("")}return"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t)),t}function Wi(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}function Ki(e,t){let{nodeList:n,nodeInfoList:i}=t;if(i.length)for(let t=0;t<i.length;t++){let r=i[t],s=n[t],o=r.bindings;if(o)for(let t=0;t<o.length;t++){let n=o[t];Yi(s,n),Gi(s,e,n)}s.__dataHost=e}}function Yi(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),i=t.parts,r=new Array(i.length);for(let e=0;e<i.length;e++)r[e]=i[e].literal;let s=t.target;n[s]=r,t.literal&&"property"==t.kind&&("className"===s&&(e=Pn(e)),e[s]=t.literal)}}function Gi(e,t,n){if(n.listenerEvent){let i=n.parts[0];e.addEventListener(n.listenerEvent,(function(e){Ri(e,t,n.target,i.source,i.negate)}))}}function Ji(e,t,n,i,r,s){s=t.static||s&&("object"!=typeof s||s[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:r,dynamicFn:s};for(let r,s=0;s<t.args.length&&(r=t.args[s]);s++)r.literal||e._addPropertyEffect(r.rootProperty,n,{fn:i,info:o,trigger:r});return s&&e._addPropertyEffect(t.methodName,n,{fn:i,info:o}),o}function Zi(e,t,n,i,r){let s=e._methodHost||e,o=s[r.methodName];if(o){let i=e._marshalArgs(r.args,t,n);return i===bi?bi:o.apply(s,i)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const Xi=[],Qi="(?:[a-zA-Z_$][\\w.:$\\-*]*)",er="(?:("+Qi+"|"+"(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)"+"|"+("(?:"+"(?:'(?:[^'\\\\]|\\\\.)*')"+"|"+'(?:"(?:[^"\\\\]|\\\\.)*")'+")")+")\\s*)",tr=new RegExp("(\\[\\[|{{)\\s*"+"(?:(!)\\s*)?"+("("+Qi+"\\s*"+("(?:\\(\\s*(?:"+("(?:"+er+"(?:,\\s*"+er+")*)")+"?)\\)\\s*)")+"?)")+"(?:]]|}})","g");function nr(e){let t="";for(let n=0;n<e.length;n++){t+=e[n].literal||""}return t}function ir(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:Xi};if(t[2].trim()){return rr(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function rr(e,t){return t.args=e.map((function(e){let n=sr(e);return n.literal||(t.static=!1),n}),this),t}function sr(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:t,value:"",literal:!1},i=t[0];switch("-"===i&&(i=t[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':n.value=t.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(t),n.literal=!0}return n.literal||(n.rootProperty=Tn(t),n.structured=En(t),n.structured&&(n.wildcard=".*"==t.slice(-2),n.wildcard&&(n.name=t.slice(0,-2)))),n}function or(e,t,n){let i=Mn(e,n);return void 0===i&&(i=t[n]),i}function ar(e,t,n,i){const r={indexSplices:i};Zt&&!e._overrideLegacyUndefined&&(t.splices=r),e.notifyPath(n+".splices",r),e.notifyPath(n+".length",t.length),Zt&&!e._overrideLegacyUndefined&&(r.indexSplices=[])}function lr(e,t,n,i,r,s){ar(e,t,n,[{index:i,addedCount:r,removed:s,object:t,type:"splice"}])}function cr(e){return e[0].toUpperCase()+e.substring(1)}const hr=on(e=>{const t=_i(si(e));class n extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return vi}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(dr.length){let e=dr[dr.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[vi.READ_ONLY];for(let n in e)t&&t[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==vi.READ_ONLY);let i=ki(this,t,!0)[e];i||(i=this[t][e]=[]),i.push(n)}_removePropertyEffect(e,t,n){let i=ki(this,t,!0)[e],r=i.indexOf(n);r>=0&&i.splice(r,1)}_hasPropertyEffect(e,t){let n=this[t];return Boolean(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,vi.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,vi.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,vi.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,vi.COMPUTE)}_setPendingPropertyOrPath(e,t,n,i){if(i||Tn(Array.isArray(e)?e[0]:e)!==e){if(!i){let n=Mn(this,e);if(!(e=Ln(this,e,t))||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return Hi(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,n){n===e[t]&&"object"!=typeof n||("className"===t&&(e=Pn(e)),e[t]=n)}_setPendingProperty(e,t,n){let i=this.__dataHasPaths&&En(e),r=i?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,r[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),i?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(i||this[vi.NOTIFY]&&this[vi.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)!t&&this[vi.READ_ONLY]&&this[vi.READ_ONLY][n]||this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let i,r=this.__dataHasPaths;this.__dataHasPaths=!1,Ii(this,t,n,r),i=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,n,r),this._flushClients(),Si(this,this[vi.REFLECT],t,n,r),Si(this,this[vi.OBSERVE],t,n,r),i&&Ei(this,i,t,n,r),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[vi.PROPAGATE]&&Si(this,this[vi.PROPAGATE],e,t,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,n)}_runEffectsForTemplate(e,t,n,i){const r=(t,i)=>{Si(this,e.propertyEffects,t,n,i,e.nodeList);for(let r=e.firstChild;r;r=r.nextSibling)this._runEffectsForTemplate(r,t,n,i)};e.runEffects?e.runEffects(r,t,i):r(t,i)}linkPaths(e,t){e=In(e),t=In(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=In(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:""};ar(this,Mn(this,e,n),n.path,t)}get(e,t){return Mn(t||this,e)}set(e,t,n){n?Ln(n,e,t):this[vi.READ_ONLY]&&this[vi.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:""},i=Mn(this,e,n),r=i.length,s=i.push(...t);return t.length&&lr(this,i,n.path,r,t.length,[]),s}pop(e){let t={path:""},n=Mn(this,e,t),i=Boolean(n.length),r=n.pop();return i&&lr(this,n,t.path,n.length,0,[r]),r}splice(e,t,n,...i){let r,s={path:""},o=Mn(this,e,s);return t<0?t=o.length-Math.floor(-t):t&&(t=Math.floor(t)),r=2===arguments.length?o.splice(t):o.splice(t,n,...i),(i.length||r.length)&&lr(this,o,s.path,t,i.length,r),r}shift(e){let t={path:""},n=Mn(this,e,t),i=Boolean(n.length),r=n.shift();return i&&lr(this,n,t.path,0,0,[r]),r}unshift(e,...t){let n={path:""},i=Mn(this,e,n),r=i.unshift(...t);return t.length&&lr(this,i,n.path,0,t.length,[]),r}notifyPath(e,t){let n;if(1==arguments.length){let i={path:""};t=Mn(this,e,i),n=i.path}else n=Array.isArray(e)?In(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,vi.READ_ONLY),t&&(this["_set"+cr(e)]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let i={property:e,method:t,dynamicFn:Boolean(n)};this._addPropertyEffect(e,vi.OBSERVE,{fn:Pi,info:i,trigger:{name:e}}),n&&this._addPropertyEffect(t,vi.OBSERVE,{fn:Pi,info:i,trigger:{name:t}})}_createMethodObserver(e,t){let n=ir(e);if(!n)throw new Error("Malformed observer expression '"+e+"'");Ji(this,n,vi.OBSERVE,Zi,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,vi.NOTIFY,{fn:Ni,info:{eventName:jn(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,vi.REFLECT,{fn:zi,info:{attrName:t}})}_createComputedProperty(e,t,n){let i=ir(t);if(!i)throw new Error("Malformed computed expression '"+t+"'");const r=Ji(this,i,vi.COMPUTE,Bi,e,n);ki(this,wi)[e]=r}_marshalArgs(e,t,n){const i=this.__data,r=[];for(let s=0,o=e.length;s<o;s++){let{name:o,structured:a,wildcard:l,value:c,literal:h}=e[s];if(!h)if(l){const e=Nn(o,t),r=or(i,n,e?t:o);c={path:e?t:o,value:r,base:e?Mn(i,o):r}}else c=a?or(i,n,o):i[o];if(Zt&&!this._overrideLegacyUndefined&&void 0===c&&e.length>1)return bi;r[s]=c}return r}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),i=this.__preBoundTemplateInfo==n;if(!i)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t)if(n=Object.create(n),n.wasPreBound=i,this.__templateInfo){const t=e._parentTemplateInfo||this.__templateInfo,i=t.lastChild;n.parent=t,t.lastChild=n,n.previousSibling=i,i?i.nextSibling=n:t.firstChild=n}else this.__templateInfo=n;else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(e,t,n){(e.hostProps=e.hostProps||{})[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(n)}_stampTemplate(e,t){t=t||this._bindTemplate(e,!0),dr.push(this);let n=super._stampTemplate(e,t);if(dr.pop(),t.nodeList=n.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=n.firstChild;t;t=t.nextSibling)e.push(t)}return n.templateInfo=t,Ki(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(e){const t=e.templateInfo,{previousSibling:n,nextSibling:i,parent:r}=t;n?n.nextSibling=i:r&&(r.firstChild=i),i?i.previousSibling=n:r&&(r.lastChild=n),t.nextSibling=t.previousSibling=null;let s=t.childNodes;for(let e=0;e<s.length;e++){let t=s[e];Pn(Pn(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,n,i){let r=t._parseTemplateNode.call(this,e,n,i);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=nr(t)||" ",$i(this,n,i,"text","textContent",t),r=!0)}return r}static _parseTemplateNodeAttribute(e,n,i,r,s){let o=this._parseBindings(s,n);if(o){let t=r,s="property";xi.test(r)?s="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),s="attribute");let a=nr(o);return a&&"attribute"==s&&("class"==r&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(r)),e.setAttribute(r,a)),"attribute"==s&&"disable-upgrade$"==t&&e.setAttribute(r,""),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===s&&(r=$n(r)),$i(this,n,i,s,r,o,a),!0}return t._parseTemplateNodeAttribute.call(this,e,n,i,r,s)}static _parseTemplateNestedTemplate(e,n,i){let r=t._parseTemplateNestedTemplate.call(this,e,n,i);const s=e.parentNode,o=i.templateInfo,a="dom-if"===s.localName,l="dom-repeat"===s.localName;Qt&&(a||l)&&(s.removeChild(e),(i=i.parentInfo).templateInfo=o,i.noted=!0,r=!1);let c=o.hostProps;if(en&&a)c&&(n.hostProps=Object.assign(n.hostProps||{},c),Qt||(i.parentInfo.noted=!0));else{let e="{";for(let t in c){$i(this,n,i,"property","_host_"+t,[{mode:e,source:t,dependencies:[t],hostProp:!0}])}}return r}static _parseBindings(e,t){let n,i=[],r=0;for(;null!==(n=tr.exec(e));){n.index>r&&i.push({literal:e.slice(r,n.index)});let s=n[1][0],o=Boolean(n[2]),a=n[3].trim(),l=!1,c="",h=-1;"{"==s&&(h=a.indexOf("::"))>0&&(c=a.substring(h+2),a=a.substring(0,h),l=!0);let d=ir(a),p=[];if(d){let{args:e,methodName:n}=d;for(let t=0;t<e.length;t++){let n=e[t];n.literal||p.push(n)}let i=t.dynamicFns;(i&&i[n]||d.static)&&(p.push(n),d.dynamicFn=!0)}else p.push(a);i.push({source:a,mode:s,negate:o,customEvent:l,signature:d,dependencies:p,event:c}),r=tr.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&i.push({literal:t})}return i.length?i:null}static _evaluateBinding(e,t,n,i,r,s){let o;return o=t.signature?Zi(e,n,i,r,t.signature):n!=t.source?Mn(e,t.source):s&&En(n)?Mn(e,n):e.__data[n],t.negate&&(o=!o),o}}return n}),dr=[];
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function pr(e){}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ur(e){const t={};for(let n in e){const i=e[n];t[n]="function"==typeof i?{type:i}:i}return t}const fr=on(e=>{const t=ti(e);function n(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof r?t:null}function i(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const n=e.properties;n&&(t=ur(n))}e.__ownProperties=t}return e.__ownProperties}class r extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){pr(this.prototype);const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.prototype._addPropertyToAttributeMap(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=i(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=n(this);this.__properties=Object.assign({},e&&e._properties,i(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r}),mr="3.4.1",gr=window.ShadyCSS&&window.ShadyCSS.cssBuild,_r=on(e=>{const t=fr(hr(e));function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let i=t[n];"value"in i&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=i)}}return e.__propertyDefaults}function i(e){return e.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty("observers",e))?e.observers:null),e.__ownObservers}function r(e,t,n,i){n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,n.computed,i)),n.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!n.computed):!1===n.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===n.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),n.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===n.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),n.observer&&e._createPropertyObserver(t,n.observer,i[n.observer]),e._addPropertyToAttributeMap(t)}function s(e,t,n,i){if(!gr){const r=t.content.querySelectorAll("style"),s=vn(t),o=wn(n),a=t.content.firstElementChild;for(let n=0;n<o.length;n++){let r=o[n];r.textContent=e._processStyleText(r.textContent,i),t.content.insertBefore(r,a)}let l=0;for(let t=0;t<s.length;t++){let n=s[t],o=r[l];o!==n?(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)):l++,n.textContent=e._processStyleText(n.textContent,i)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n),rn&&gr&&jt){const n=t.content.querySelectorAll("style");if(n){let t="";Array.from(n).forEach(e=>{t+=e.textContent,e.parentNode.removeChild(e)}),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}function o(e){let t=null;if(e&&(!Wt||Kt)&&(t=pn.import(e,"template"),Wt&&!t))throw new Error("strictTemplatePolicy: expecting dom-module or null template for "+e);return t}class a extends t{static get polymerElementVersion(){return mr}static _finalizeClass(){t._finalizeClass.call(this);const e=i(this);e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):Yt||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)r(this.prototype,t,e[t],e)}static createObservers(e,t){const n=this.prototype;for(let i=0;i<e.length;i++)n._createMethodObserver(e[i],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const e=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==e?e:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=Ht(e.url);else{const e=pn.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Ut,this.importPath=this.constructor.importPath;let e=n(this.constructor);if(e)for(let t in e){let n=e[t];if(this._canApplyPropertyDefault(t)){let e="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return Bt(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const n=this.importPath;s(this,t,e,n?Ft(n):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=Pn(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Jt&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=Ft(this.importPath)),Ft(e,t)}static _parseTemplateContent(e,n,i){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,i)}static _addTemplatePropertyEffect(e,n,i){return!Gt||n in this._properties||i.info.part.signature&&i.info.part.signature.static||i.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,n,i)}}return a});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class yr{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,br.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),br.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,n){return e instanceof yr?e._cancelAsync():e=new yr,e.setConfig(t,n),e}}let br=new Set;const vr=function(e){br.add(e)},wr=function(){const e=Boolean(br.size);return br.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let xr="string"==typeof document.head.style.touchAction,kr="__polymerGestures",Sr="__polymerGesturesHandled",Cr="__polymerGesturesTouchAction",Ar=25,Pr=5,Er=2,Tr=2500,Or=["mousedown","mousemove","mouseup","click"],Nr=[0,1,4,2],Rr=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function zr(e){return Or.indexOf(e)>-1}let Ir=!1;function Dr(e){if(!zr(e)&&"touchend"!==e)return xr&&Ir&&Vt?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){Ir=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let Mr=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Lr=[],Fr={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Br={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Hr(e){return Fr[e.localName]||!1}function $r(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let n=e.getRootNode();if(e.id){let i=n.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<i.length;e++)t.push(i[e])}}return t}let jr=function(e){let t=e.sourceCapabilities;if((!t||t.firesTouchEvents)&&(e[Sr]={skip:!0},"click"===e.type)){let t=!1,n=Zr(e);for(let e=0;e<n.length;e++){if(n[e].nodeType===Node.ELEMENT_NODE)if("label"===n[e].localName)Lr.push(n[e]);else if(Hr(n[e])){let i=$r(n[e]);for(let e=0;e<i.length;e++)t=t||Lr.indexOf(i[e])>-1}if(n[e]===Kr.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function Ur(e){let t=Mr?["click"]:Or;for(let n,i=0;i<t.length;i++)n=t[i],e?(Lr.length=0,document.addEventListener(n,jr,!0)):document.removeEventListener(n,jr,!0)}function qr(e){Kr.mouse.mouseIgnoreJob||Ur(!0);let t=function(){Ur(),Kr.mouse.target=null,Kr.mouse.mouseIgnoreJob=null};Kr.mouse.target=Zr(e)[0],Kr.mouse.mouseIgnoreJob=yr.debounce(Kr.mouse.mouseIgnoreJob,Jn.after(Tr),t)}function Vr(e){let t=e.type;if(!zr(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!Rr&&(t=Nr[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}function Wr(e){if("click"===e.type){if(0===e.detail)return!0;let t=ts(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let n=t.getBoundingClientRect(),i=e.pageX,r=e.pageY;return!(i>=n.left&&i<=n.right&&r>=n.top&&r<=n.bottom)}return!1}let Kr={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Yr(e){let t="auto",n=Zr(e);for(let e,i=0;i<n.length;i++)if(e=n[i],e[Cr]){t=e[Cr];break}return t}function Gr(e,t,n){e.movefn=t,e.upfn=n,document.addEventListener("mousemove",t),document.addEventListener("mouseup",n)}function Jr(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",qr,!!Ir&&{passive:!0});const Zr=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Xr={},Qr=[];function es(e,t){let n=document.elementFromPoint(e,t),i=n;for(;i&&i.shadowRoot&&!window.ShadyDOM;){let r=i;if(i=i.shadowRoot.elementFromPoint(e,t),r===i)break;i&&(n=i)}return n}function ts(e){const t=Zr(e);return t.length>0?t[0]:e.target}function ns(e){let t,n=e.type,i=e.currentTarget[kr];if(!i)return;let r=i[n];if(r){if(!e[Sr]&&(e[Sr]={},"touch"===n.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===n&&1===e.touches.length&&(Kr.touch.id=t.identifier),Kr.touch.id!==t.identifier)return;xr||"touchstart"!==n&&"touchmove"!==n||is(e)}if(t=e[Sr],!t.skip){for(let n,i=0;i<Qr.length;i++)n=Qr[i],r[n.name]&&!t[n.name]&&n.flow&&n.flow.start.indexOf(e.type)>-1&&n.reset&&n.reset();for(let i,s=0;s<Qr.length;s++)i=Qr[s],r[i.name]&&!t[i.name]&&(t[i.name]=!0,i[n](e))}}}function is(e){let t=e.changedTouches[0],n=e.type;if("touchstart"===n)Kr.touch.x=t.clientX,Kr.touch.y=t.clientY,Kr.touch.scrollDecided=!1;else if("touchmove"===n){if(Kr.touch.scrollDecided)return;Kr.touch.scrollDecided=!0;let n=Yr(e),i=!1,r=Math.abs(Kr.touch.x-t.clientX),s=Math.abs(Kr.touch.y-t.clientY);e.cancelable&&("none"===n?i=!0:"pan-x"===n?i=s>r:"pan-y"===n&&(i=r>s)),i?e.preventDefault():ps("track")}}function rs(e,t,n){return!!Xr[t]&&(os(e,t,n),!0)}function ss(e,t,n){return!!Xr[t]&&(as(e,t,n),!0)}function os(e,t,n){let i=Xr[t],r=i.deps,s=i.name,o=e[kr];o||(e[kr]=o={});for(let t,n,i=0;i<r.length;i++)t=r[i],Mr&&zr(t)&&"click"!==t||(n=o[t],n||(o[t]=n={_count:0}),0===n._count&&e.addEventListener(t,ns,Dr(t)),n[s]=(n[s]||0)+1,n._count=(n._count||0)+1);e.addEventListener(t,n),i.touchAction&&hs(e,i.touchAction)}function as(e,t,n){let i=Xr[t],r=i.deps,s=i.name,o=e[kr];if(o)for(let t,n,i=0;i<r.length;i++)t=r[i],n=o[t],n&&n[s]&&(n[s]=(n[s]||1)-1,n._count=(n._count||1)-1,0===n._count&&e.removeEventListener(t,ns,Dr(t)));e.removeEventListener(t,n)}function ls(e){Qr.push(e);for(let t=0;t<e.emits.length;t++)Xr[e.emits[t]]=e}function cs(e){for(let t,n=0;n<Qr.length;n++){t=Qr[n];for(let n,i=0;i<t.emits.length;i++)if(n=t.emits[i],n===e)return t}return null}function hs(e,t){xr&&e instanceof HTMLElement&&Qn.run(()=>{e.style.touchAction=t}),e[Cr]=t}function ds(e,t,n){let i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=n,Pn(e).dispatchEvent(i),i.defaultPrevented){let e=n.preventer||n.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function ps(e){let t=cs(e);t.info&&(t.info.prevent=!0)}function us(e,t,n,i){t&&ds(t,e,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:i,prevent:function(e){return ps(e)}})}function fs(e,t,n){if(e.prevent)return!1;if(e.started)return!0;let i=Math.abs(e.x-t),r=Math.abs(e.y-n);return i>=Pr||r>=Pr}function ms(e,t,n){if(!t)return;let i,r=e.moves[e.moves.length-2],s=e.moves[e.moves.length-1],o=s.x-e.x,a=s.y-e.y,l=0;r&&(i=s.x-r.x,l=s.y-r.y),ds(t,"track",{state:e.state,x:n.clientX,y:n.clientY,dx:o,dy:a,ddx:i,ddy:l,sourceEvent:n,hover:function(){return es(n.clientX,n.clientY)}})}function gs(e,t,n){let i=Math.abs(t.clientX-e.x),r=Math.abs(t.clientY-e.y),s=ts(n||t);!s||Br[s.localName]&&s.hasAttribute("disabled")||(isNaN(i)||isNaN(r)||i<=Ar&&r<=Ar||Wr(t))&&(e.prevent||ds(s,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:n}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/ls({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Jr(this.info)},mousedown:function(e){if(!Vr(e))return;let t=ts(e),n=this,i=function(e){Vr(e)||(us("up",t,e),Jr(n.info))},r=function(e){Vr(e)&&us("up",t,e),Jr(n.info)};Gr(this.info,i,r),us("down",t,e)},touchstart:function(e){us("down",ts(e),e.changedTouches[0],e)},touchend:function(e){us("up",ts(e),e.changedTouches[0],e)}}),ls({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>Er&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Jr(this.info)},mousedown:function(e){if(!Vr(e))return;let t=ts(e),n=this,i=function(e){let i=e.clientX,r=e.clientY;fs(n.info,i,r)&&(n.info.state=n.info.started?"mouseup"===e.type?"end":"track":"start","start"===n.info.state&&ps("tap"),n.info.addMove({x:i,y:r}),Vr(e)||(n.info.state="end",Jr(n.info)),t&&ms(n.info,t,e),n.info.started=!0)},r=function(e){n.info.started&&i(e),Jr(n.info)};Gr(this.info,i,r),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=ts(e),n=e.changedTouches[0],i=n.clientX,r=n.clientY;fs(this.info,i,r)&&("start"===this.info.state&&ps("tap"),this.info.addMove({x:i,y:r}),ms(this.info,t,n),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=ts(e),n=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),ms(this.info,t,n))}}),ls({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){Vr(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){Vr(e)&&gs(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){gs(this.info,e.changedTouches[0],e)}});const _s=on(e=>{class t extends e{_addEventListenerToNode(e,t,n){rs(e,t,n)||super._addEventListenerToNode(e,t,n)}_removeEventListenerFromNode(e,t,n){ss(e,t,n)||super._removeEventListenerFromNode(e,t,n)}}return t}),ys=/:host\(:dir\((ltr|rtl)\)\)/g,bs=':host([dir="$1"])',vs=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,ws=':host([dir="$2"]) $1',xs=/:dir\((?:ltr|rtl)\)/,ks=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),Ss=[];
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Cs=null,As="";function Ps(){As=document.documentElement.getAttribute("dir")}function Es(e){if(!e.__autoDirOptOut){e.setAttribute("dir",As)}}function Ts(){Ps(),As=document.documentElement.getAttribute("dir");for(let e=0;e<Ss.length;e++)Es(Ss[e])}function Os(){Cs&&Cs.takeRecords().length&&Ts()}const Ns=on(e=>{ks||Cs||(Ps(),Cs=new MutationObserver(Ts),Cs.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=si(e);class n extends t{static _processStyleText(e,n){return e=t._processStyleText.call(this,e,n),!ks&&xs.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(ys,bs),t=t.replace(vs,ws),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Os(),Ss.push(this),Es(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=Ss.indexOf(this);e>-1&&Ss.splice(e,1)}}}return n.__activateDir=!1,n});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Rs=!1,zs=[],Is=[];function Ds(){Rs=!0,requestAnimationFrame((function(){Rs=!1,Ms(zs),setTimeout((function(){Ls(Is)}))}))}function Ms(e){for(;e.length;)Fs(e.shift())}function Ls(e){for(let t=0,n=e.length;t<n;t++)Fs(e.shift())}function Fs(e){const t=e[0],n=e[1],i=e[2];try{n.apply(t,i)}catch(e){setTimeout(()=>{throw e})}}function Bs(e,t,n){Rs||Ds(),Is.push([e,t,n])}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Hs(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function $s(e,t,n){return{index:e,removed:t,addedCount:n}}"interactive"===document.readyState||"complete"===document.readyState?Hs():window.addEventListener("DOMContentLoaded",Hs);const js=0,Us=1,qs=2,Vs=3;function Ws(e,t,n,i,r,s){let o=s-r+1,a=n-t+1,l=new Array(o);for(let e=0;e<o;e++)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;e++)l[0][e]=e;for(let n=1;n<o;n++)for(let s=1;s<a;s++)if(Xs(e[t+s-1],i[r+n-1]))l[n][s]=l[n-1][s-1];else{let e=l[n-1][s]+1,t=l[n][s-1]+1;l[n][s]=e<t?e:t}return l}function Ks(e){let t=e.length-1,n=e[0].length-1,i=e[t][n],r=[];for(;t>0||n>0;){if(0==t){r.push(qs),n--;continue}if(0==n){r.push(Vs),t--;continue}let s,o=e[t-1][n-1],a=e[t-1][n],l=e[t][n-1];s=a<l?a<o?a:o:l<o?l:o,s==o?(o==i?r.push(js):(r.push(Us),i=o),t--,n--):s==a?(r.push(Vs),t--,i=a):(r.push(qs),n--,i=l)}return r.reverse(),r}function Ys(e,t,n,i,r,s){let o,a=0,l=0,c=Math.min(n-t,s-r);if(0==t&&0==r&&(a=Gs(e,i,c)),n==e.length&&s==i.length&&(l=Js(e,i,c-a)),r+=a,s-=l,(n-=l)-(t+=a)==0&&s-r==0)return[];if(t==n){for(o=$s(t,[],0);r<s;)o.removed.push(i[r++]);return[o]}if(r==s)return[$s(t,[],n-t)];let h=Ks(Ws(e,t,n,i,r,s));o=void 0;let d=[],p=t,u=r;for(let e=0;e<h.length;e++)switch(h[e]){case js:o&&(d.push(o),o=void 0),p++,u++;break;case Us:o||(o=$s(p,[],0)),o.addedCount++,p++,o.removed.push(i[u]),u++;break;case qs:o||(o=$s(p,[],0)),o.addedCount++,p++;break;case Vs:o||(o=$s(p,[],0)),o.removed.push(i[u]),u++}return o&&d.push(o),d}function Gs(e,t,n){for(let i=0;i<n;i++)if(!Xs(e[i],t[i]))return i;return n}function Js(e,t,n){let i=e.length,r=t.length,s=0;for(;s<n&&Xs(e[--i],t[--r]);)s++;return s}function Zs(e,t){return Ys(e,0,e.length,t,0,t.length)}function Xs(e,t){return e===t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Qs(e){return"slot"===e.localName}let eo=class{static getFlattenedNodes(e){const t=Pn(e);return Qs(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>Qs(e)?Pn(e=e).assignedNodes({flatten:!0}):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Qs(this._target)?this._listenSlots([this._target]):Pn(this._target).children&&(this._listenSlots(Pn(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Qs(this._target)?this._unlistenSlots([this._target]):Pn(this._target).children&&(this._unlistenSlots(Pn(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Qn.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let n=e[t];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),n=Zs(t,this._effectiveNodes);for(let t,i=0;i<n.length&&(t=n[i]);i++)for(let n,i=0;i<t.removed.length&&(n=t.removed[i]);i++)e.removedNodes.push(n);for(let i,r=0;r<n.length&&(i=n[r]);r++)for(let n=i.index;n<i.index+i.addedCount;n++)e.addedNodes.push(t[n]);this._effectiveNodes=t;let i=!1;return(e.addedNodes.length||e.removedNodes.length)&&(i=!0,this.callback.call(this._target,e)),i}_listenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];Qs(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];Qs(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const to=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=wr()}while(e||t)},no=Element.prototype,io=no.matches||no.matchesSelector||no.mozMatchesSelector||no.msMatchesSelector||no.oMatchesSelector||no.webkitMatchesSelector,ro=function(e,t){return io.call(e,t)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class so{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new eo(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(Pn(this.node).contains(e))return!0;let t=e,n=e.ownerDocument;for(;t&&t!==n&&t!==this.node;)t=Pn(t).parentNode||Pn(t).host;return t===this.node}getOwnerRoot(){return Pn(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Pn(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=Pn(this.node).assignedSlot;for(;t;)e.push(t),t=Pn(t).assignedSlot;return e}importNode(e,t){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return Pn(n).importNode(e,t)}getEffectiveChildNodes(){return eo.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),n=[];for(let i,r=0,s=t.length;r<s&&(i=t[r]);r++)i.nodeType===Node.ELEMENT_NODE&&ro(i,e)&&n.push(i);return n}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function oo(e,t){for(let n=0;n<t.length;n++){let i=t[n];e[i]=function(){return this.node[i].apply(this.node,arguments)}}}function ao(e,t){for(let n=0;n<t.length;n++){let i=t[n];Object.defineProperty(e,i,{get:function(){return this.node[i]},configurable:!0})}}function lo(e,t){for(let n=0;n<t.length;n++){let i=t[n];Object.defineProperty(e,i,{get:function(){return this.node[i]},set:function(e){this.node[i]=e},configurable:!0})}}class co{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}so.prototype.cloneNode,so.prototype.appendChild,so.prototype.insertBefore,so.prototype.removeChild,so.prototype.replaceChild,so.prototype.setAttribute,so.prototype.removeAttribute,so.prototype.querySelector,so.prototype.querySelectorAll,so.prototype.parentNode,so.prototype.firstChild,so.prototype.lastChild,so.prototype.nextSibling,so.prototype.previousSibling,so.prototype.firstElementChild,so.prototype.lastElementChild,so.prototype.nextElementSibling,so.prototype.previousElementSibling,so.prototype.childNodes,so.prototype.children,so.prototype.classList,so.prototype.textContent,so.prototype.innerHTML;let ho=so;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(so.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=so.prototype[t])}),ao(e.prototype,["classList"]),ho=e,Object.defineProperties(co.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&po(e).getOwnerRoot(),n=this.path;for(let e=0;e<n.length;e++){const i=n[e];if(po(i).getOwnerRoot()===t)return i}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else oo(so.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),ao(so.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),lo(so.prototype,["textContent","innerHTML","className"]);const po=function(e){if((e=e||document)instanceof ho)return e;if(e instanceof co)return e;let t=e.__domApi;return t||(t=e instanceof Event?new co(e):new ho(e),e.__domApi=t),t},uo=window.ShadyDOM,fo=window.ShadyCSS;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function mo(e,t){return Pn(e).getRootNode()===t}function go(e,t=!1){if(!uo||!fo)return null;if(!uo.handlesDynamicScoping)return null;const n=fo.ScopingShim;if(!n)return null;const i=n.scopeForNode(e),r=Pn(e).getRootNode(),s=e=>{if(!mo(e,r))return;const t=Array.from(uo.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const s=t[e];if(!mo(s,r))continue;const o=n.currentScopeForNode(s);o!==i&&(""!==o&&n.unscopeNode(s,o),n.scopeNode(s,i))}};if(s(e),t){const t=new MutationObserver(e=>{for(let t=0;t<e.length;t++){const n=e[t];for(let e=0;e<n.addedNodes.length;e++){const t=n.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&s(t)}}});return t.observe(e,{childList:!0,subtree:!0}),t}return null}
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const _o="disable-upgrade",yo=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]},bo=(on(e=>{const t=_r(e);let n=yo(t);class i extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return n.call(this).concat(_o)}_initializeProperties(){this.hasAttribute(_o)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}attributeChangedCallback(e,t,n,i){e==_o?this.__isUpgradeDisabled&&null==n&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,Pn(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(e,t,n,i)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return i}),"disable-upgrade");let vo=window.ShadyCSS;const wo=on(e=>{const t=_s(_r(e)),n=gr?t:Ns(t),i=yo(n),r={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class s extends n{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(e,t,n){(this.__dataAttributes&&this.__dataAttributes[e]||e===bo)&&this.attributeChangedCallback(e,t,n,null)}setAttribute(e,t){if(nn&&!this._legacyForceObservedAttributes){const n=this.getAttribute(e);super.setAttribute(e,t),this.__attributeReaction(e,n,String(t))}else super.setAttribute(e,t)}removeAttribute(e){if(nn&&!this._legacyForceObservedAttributes){const t=this.getAttribute(e);super.removeAttribute(e),this.__attributeReaction(e,t,null)}else super.removeAttribute(e)}static get observedAttributes(){return nn&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],pr(this.prototype)),this.__observedAttributes):i.call(this).concat(bo)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(e,t,n,i){t!==n&&(e==bo?this.__isUpgradeDisabled&&null==n&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,Pn(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(e,t,n,i),this.attributeChanged(e,t,n)))}attributeChanged(e,t,n){}_initializeProperties(){if(Yt&&this.hasAttribute(bo))this.__isUpgradeDisabled=!0;else{let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),nn&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const e=this.attributes;for(let t=0,n=e.length;t<n;t++){const n=e[t];this.__attributeReaction(n.name,null,n.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,n){this._propertyToAttribute(e,t,n)}serializeValueToAttribute(e,t,n){this._valueToNodeAttribute(n||this,e,t)}extend(e,t){if(!e||!t)return e||t;let n=Object.getOwnPropertyNames(t);for(let i,r=0;r<n.length&&(i=n[r]);r++){let n=Object.getOwnPropertyDescriptor(t,i);n&&Object.defineProperty(e,i,n)}return e}mixin(e,t){for(let n in t)e[n]=t[n];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,n){n=n||{},t=null==t?{}:t;let i=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});i.detail=t;let r=n.node||this;return Pn(r).dispatchEvent(i),i}listen(e,t,n){e=e||this;let i=this.__boundListeners||(this.__boundListeners=new WeakMap),r=i.get(e);r||(r={},i.set(e,r));let s=t+n;r[s]||(r[s]=this._addMethodEventListenerToNode(e,t,n,this))}unlisten(e,t,n){e=e||this;let i=this.__boundListeners&&this.__boundListeners.get(e),r=t+n,s=i&&i[r];s&&(this._removeEventListenerFromNode(e,t,s),i[r]=null)}setScrollDirection(e,t){hs(t||this,r[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=Pn(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=po(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return po(this).getEffectiveChildNodes()}queryDistributedElements(e){return po(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let n,i=0;n=e[i];i++)n.nodeType!==Node.COMMENT_NODE&&t.push(n.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?po(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){const t=this;return t!==e&&Pn(t).contains(e)&&Pn(t).getRootNode()===Pn(e).getRootNode()}isLocalDescendant(e){return this.root===Pn(e).getRootNode()}scopeSubtree(e,t=!1){return go(e,t)}getComputedStyleValue(e){return vo.getComputedStyleValue(this,e)}debounce(e,t,n){return this._debouncers=this._debouncers||{},this._debouncers[e]=yr.debounce(this._debouncers[e],n>0?Jn.after(n):Qn,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?Jn.run(e.bind(this),t):~Qn.run(e.bind(this))}cancelAsync(e){e<0?Qn.cancel(~e):Jn.cancel(e)}create(e,t){let n=document.createElement(e);if(t)if(n.setProperties)n.setProperties(t);else for(let e in t)n[e]=t[e];return n}elementMatches(e,t){return ro(t||this,e)}toggleAttribute(e,t){let n=this;return 3===arguments.length&&(n=arguments[2]),1==arguments.length&&(t=!n.hasAttribute(e)),t?(Pn(n).setAttribute(e,""),!0):(Pn(n).removeAttribute(e),!1)}toggleClass(e,t,n){n=n||this,1==arguments.length&&(t=!n.classList.contains(e)),t?n.classList.add(e):n.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,n,i){i=i||this,this.transform("translate3d("+e+","+t+","+n+")",i)}arrayDelete(e,t){let n;if(Array.isArray(e)){if(n=e.indexOf(t),n>=0)return e.splice(n,1)}else{if(n=Mn(this,e).indexOf(t),n>=0)return this.splice(e,n,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return s.prototype.is="",s}),xo={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},ko={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},So=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},ko);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Co(e,t,n){const i=e._noAccessors,r=Object.getOwnPropertyNames(e);for(let s=0;s<r.length;s++){let o=r[s];if(!(o in n))if(i)t[o]=e[o];else{let n=Object.getOwnPropertyDescriptor(e,o);n&&(n.configurable=!0,Object.defineProperty(t,o,n))}}}function Ao(e,t){return Ro({},wo(t),e)}function Po(e,t,n){for(let i=0;i<t.length;i++)Eo(e,t[i],n,So)}function Eo(e,t,n,i){Co(t,e,i);for(let e in xo)t[e]&&(n[e]=n[e]||[],n[e].push(t[e]))}function To(e,t,n){t=t||[];for(let i=e.length-1;i>=0;i--){let r=e[i];r?Array.isArray(r)?To(r,t):t.indexOf(r)<0&&(!n||n.indexOf(r)<0)&&t.unshift(r):console.warn("behavior is null, check for missing or 404 import")}return t}function Oo(e,t){for(const n in t){const i=e[n],r=t[n];e[n]=!("value"in r)&&i&&"value"in i?Object.assign({value:i.value},r):r}}const No=wo(HTMLElement);function Ro(e,t,n){let i;const r={};class s extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(i)for(let e,t=0;t<i.length;t++)e=i[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(i)for(let e=0;e<i.length;e++)Oo(t,i[e].properties);return Oo(t,e.properties),t}static get observers(){let t=[];if(i)for(let e,n=0;n<i.length;n++)e=i[n],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=r.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=s.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered(),Yt&&o(e);const t=Object.getPrototypeOf(this);let n=r.beforeRegister;if(n)for(let e=0;e<n.length;e++)n[e].call(t);if(n=r.registered,n)for(let e=0;e<n.length;e++)n[e].call(t)}}_applyListeners(){super._applyListeners();const e=r.listeners;if(e)for(let t=0;t<e.length;t++){const n=e[t];if(n)for(let e in n)this._addMethodEventListenerToNode(this,e,n[e])}}_ensureAttributes(){const e=r.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const n=e[t];for(let e in n)this._ensureAttribute(e,n[e])}super._ensureAttributes()}ready(){super.ready();let e=r.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=r.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=r.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,n){super.attributeChanged();let i=r.attributeChanged;if(i)for(let r=0;r<i.length;r++)i[r].call(this,e,t,n)}}if(n){Array.isArray(n)||(n=[n]);let e=t.prototype.behaviors;i=To(n,null,e),s.prototype.behaviors=e?e.concat(n):i}const o=t=>{i&&Po(t,i,r),Eo(t,e,r,ko)};return Yt||o(s.prototype),s.generatedFrom=e,s}const zo=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let n=t?t(No):No;return n=Ro(e,n,e.behaviors),n.is=n.prototype.is=e.is,n},Io=function(e){let t;return t="function"==typeof e?e:Io.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Do(e,t,n,i,r){let s;r&&(s="object"==typeof n&&null!==n,s&&(i=e.__dataTemp[t]));let o=i!==n&&(i==i||n==n);return s&&o&&(e.__dataTemp[t]=n),o}Io.Class=zo;const Mo=on(e=>{class t extends e{_shouldPropertyChange(e,t,n){return Do(this,e,t,n,!0)}}return t}),Lo=on(e=>{class t extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,n){return Do(this,e,t,n,this.mutableData)}}return t});Mo._mutablePropertyChange=Do;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Fo=null;function Bo(){return Fo}Bo.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Bo,writable:!0}});const Ho=hr(Bo),$o=Mo(Ho);function jo(e,t){Fo=e,Object.setPrototypeOf(e,t.prototype),new t,Fo=null}const Uo=hr(class{});function qo(e,t){for(let n=0;n<t.length;n++){let i=t[n];if(Boolean(e)!=Boolean(i.__hideTemplateChildren__))if(i.nodeType===Node.TEXT_NODE)e?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if("slot"===i.localName)if(e)i.__polymerReplaced__=document.createComment("hidden-slot"),Pn(Pn(i).parentNode).replaceChild(i.__polymerReplaced__,i);else{const e=i.__polymerReplaced__;e&&Pn(Pn(e).parentNode).replaceChild(i,e)}else i.style&&(e?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=e,i._showHideChildren&&i._showHideChildren(e)}}class Vo extends Uo{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(e&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,n(e)});else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(e,t,n)}}_showHideChildren(e){qo(e,this.children)}_setUnmanagedPropertyToNode(e,t,n){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(e,t,n)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}Vo.prototype.__dataHost,Vo.prototype.__templatizeOptions,Vo.prototype._methodHost,Vo.prototype.__templatizeOwner,Vo.prototype.__hostProps;const Wo=Mo(Vo);function Ko(e){let t=e.__dataHost;return t&&t._methodHost||t}function Yo(e,t,n){let i=n.mutableData?Wo:Vo;ea.mixin&&(i=ea.mixin(i));let r=class extends i{};return r.prototype.__templatizeOptions=n,r.prototype._bindTemplate(e),Zo(r,e,t,n),r}function Go(e,t,n,i){let r=n.forwardHostProp;if(r&&t.hasHostProps){const s="template"==e.localName;let o=t.templatizeTemplateClass;if(!o){if(s){let e=n.mutableData?$o:Ho;class i extends e{}o=t.templatizeTemplateClass=i}else{const n=e.constructor;class i extends n{}o=t.templatizeTemplateClass=i}let a=t.hostProps;for(let e in a)o.prototype._addPropertyEffect("_host_"+e,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Jo(e,r)}),o.prototype._createNotifyingProperty("_host_"+e);Gt&&i&&ta(t,n,i)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),s)jo(e,o),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,o.prototype);const n=t.hostProps;for(let t in n)if(t="_host_"+t,t in e){const n=e[t];delete e[t],e.__data[t]=n}}}}function Jo(e,t){return function(e,n,i){t.call(e.__templatizeOwner,n.substring("_host_".length),i[n])}}function Zo(e,t,n,i){let r=n.hostProps||{};for(let t in i.instanceProps){delete r[t];let n=i.notifyInstanceProp;n&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Xo(t,n)})}if(i.forwardHostProp&&t.__dataHost)for(let t in r)n.hasHostProps||(n.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Qo()})}function Xo(e,t){return function(e,n,i){t.call(e.__templatizeOwner,e,n,i[n])}}function Qo(){return function(e,t,n){e.__dataHost._setPendingPropertyOrPath("_host_"+t,n[t],!0,!0)}}function ea(e,t,n){if(Wt&&!Ko(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(n=n||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let i=(t?t.constructor:Vo)._parseTemplate(e),r=i.templatizeInstanceClass;r||(r=Yo(e,i,n),i.templatizeInstanceClass=r);const s=Ko(e);Go(e,i,n,s);let o=class extends r{};return o.prototype._methodHost=s,o.prototype.__dataHost=e,o.prototype.__templatizeOwner=t,o.prototype.__hostProps=i.hostProps,o=o,o}function ta(e,t,n){const i=n.constructor._properties,{propertyEffects:r}=e,{instanceProps:s}=t;for(let e in r)if(!(i[e]||s&&s[e])){const t=r[e];for(let n=0;n<t.length;n++){const{part:i}=t[n].info;if(!i.signature||!i.signature.static){console.warn(`Property '${e}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function na(e,t){let n;for(;t;)if(n=t.__dataHost?t:t.__templatizeInstance){if(n.__dataHost==e)return n;t=n.__dataHost}else t=Pn(t).parentNode;return null}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ia=!1;function ra(){if(Yt&&!$t){if(!ia){ia=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const sa=_s(Lo(hr(HTMLElement)));class oa extends sa{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),Wt)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,n,i){this.mutableData=!0}connectedCallback(){ra()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Pn(Pn(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver(()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",oa);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class aa{constructor(e){this.value=e.toString()}toString(){return this.value}}function la(e){if(e instanceof aa)return e.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+e)}function ca(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof aa)return la(e);throw new Error("non-template value passed to Polymer's html function: "+e)}const ha=function(e,...t){const n=document.createElement("template");return n.innerHTML=t.reduce((t,n,i)=>t+ca(n)+e[i+1],e[0]),n},da=_r(HTMLElement),pa=Lo(da);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class ua extends pa{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!tn,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),ra()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=Pn(Pn(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){const e=this;let t=this.template=e._templateInfo?e:this.querySelector("template");if(!t){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}let n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=ea(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(e,t){let n=this.__instances;for(let i,r=0;r<n.length&&(i=n[r]);r++)i.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,n){if(zn(this.as,t)){let i=e[this.itemsIndexAs];t==this.as&&(this.items[i]=n);let r=Rn(this.as,`${JSCompiler_renameProperty("items",this)}.${i}`,t);this.notifyPath(r,n)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,n=this.__getMethodHost();return function(){return n[t].apply(n,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let n=0;n<t.length;n++)0===e.indexOf(t[n])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||("items"===e.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,t=0){this.__renderDebouncer=yr.debounce(this.__renderDebouncer,t>0?Jn.after(t):Qn,e.bind(this)),vr(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),to()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const t=this.__sortAndFilterItems(e),n=this.__calculateLimit(t.length);this.__updateInstances(e,n,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>this.__continueChunking())),this._setRenderedItemCount(this.__instances.length),tn&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let t=new Array(e.length);for(let n=0;n<e.length;n++)t[n]=n;return this.__filterFn&&(t=t.filter((t,n,i)=>this.__filterFn(e[t],n,i))),this.__sortFn&&t.sort((t,n)=>this.__sortFn(e[t],e[n])),t}__calculateLimit(e){let t=e;const n=this.__instances.length;if(this.initialCount){let i;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(e,this.initialCount),i=Math.max(t-n,0),this.__chunkCount=i||1):(i=Math.min(Math.max(e-n,0),this.__chunkCount),t=Math.min(n+i,e)),this.__shouldMeasureChunk=i===this.__chunkCount,this.__shouldContinueChunking=t<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,t=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*t)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,t,n){const i=this.__itemsIdxToInstIdx={};let r;for(r=0;r<t;r++){let t=this.__instances[r],s=n[r],o=e[s];i[s]=r,t?(t._setPendingProperty(this.as,o),t._setPendingProperty(this.indexAs,r),t._setPendingProperty(this.itemsIndexAs,s),t._flushProperties()):this.__insertInstance(o,r,s)}for(let e=this.__instances.length-1;e>=r;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const n=Pn(t.root);for(let e=0;e<t.children.length;e++){let i=t.children[e];n.appendChild(i)}return t}__attachInstance(e,t){let n=this.__instances[e];t.insertBefore(n.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,t,n){let i={};return i[this.as]=e,i[this.indexAs]=t,i[this.itemsIndexAs]=n,new this.__ctor(i)}__insertInstance(e,t,n){const i=this.__stampInstance(e,t,n);let r=this.__instances[t+1],s=r?r.children[0]:this;return Pn(Pn(this).parentNode).insertBefore(i.root,s),this.__instances[t]=i,i}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let n=e.slice(6),i=n.indexOf("."),r=i<0?n:n.substring(0,i);if(r==parseInt(r,10)){let e=i<0?"":n.substring(i+1);this.__handleObservedPaths(e);let s=this.__itemsIdxToInstIdx[r],o=this.__instances[s];if(o){let n=this.as+(e?"."+e:"");o._setPendingPropertyOrPath(n,t,!1,!0),o._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return na(this.template,e)}}customElements.define(ua.is,ua);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class fa extends da{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=yr.debounce(this.__renderDebouncer,Qn,()=>this.__render()),vr(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=Pn(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Pn(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),ra()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let t=e._templateInfo?e:Pn(e).querySelector("template");if(!t){let e=new MutationObserver(()=>{if(!Pn(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}this.__template=t}return!0}__ensureInstance(){let e=Pn(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length){if(Pn(this).previousSibling!==t[t.length-1])for(let n,i=0;i<t.length&&(n=t[i]);i++)Pn(e).insertBefore(n,this)}}else{if(!e)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){to()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),tn&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}class ma extends fa{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const t=this.__dataHost||this;if(Wt&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const n=t._bindTemplate(this.__template,!0);n.runEffects=(e,t,n)=>{let i=this.__syncInfo;if(this.if)i&&(this.__syncInfo=null,this._showHideChildren(),t=Object.assign(i.changedProps,t)),e(t,n);else if(this.__instance)if(i||(i=this.__syncInfo={runEffects:e,changedProps:{}}),n)for(const e in t){const t=Tn(e);i.changedProps[t]=this.__dataHost[t]}else Object.assign(i.changedProps,t)},this.__instance=t._stampTemplate(this.__template,n),Pn(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,qo(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}class ga extends fa{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=ea(this.__template,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Tn(e)]=!0))}})),this.__instance=new this.__ctor,Pn(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=Pn(e[0]).parentNode;if(t){t=Pn(t);for(let n,i=0;i<e.length&&(n=e[i]);i++)t.removeChild(n)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}}const _a=en?ma:ga;customElements.define(_a.is,_a);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let ya=on(e=>{let t=_r(e);class n extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let n=t.path;if(n==JSCompiler_renameProperty("items",this)){let n=t.base||[],i=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),i){let e=Zs(n,i);this.__applySplices(e)}this.__lastItems=n,this.__lastMulti=e}else if(t.path==JSCompiler_renameProperty("items",this)+".splices")this.__applySplices(t.value.indexSplices);else{let e=n.slice((JSCompiler_renameProperty("items",this)+".").length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let n=0;n<e.length;n++){let i=e[n];t.forEach((e,n)=>{e<i.index||(e>=i.index+i.removed.length?t.set(n,e+i.addedCount-i.removed.length):t.set(n,-1))});for(let e=0;e<i.addedCount;e++){let n=i.index+e;t.has(this.items[n])&&t.set(this.items[n],n)}}this.__updateLinks();let n=0;t.forEach((e,i)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null,t.delete(i)):n++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach((n,i)=>{t==e++&&this.deselect(i)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice((JSCompiler_renameProperty("selected",this)+".").length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let n;this.__selectedMap.delete(e),this.multi&&(n=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}return n})(da);class ba extends ya{static get is(){return"array-selector"}static get template(){return null}}customElements.define(ba.is,ba);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const va=new Nt;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,n){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,n){},styleSubtree(e,t){va.processStyles(),it(e,t)},styleElement(e){va.processStyles()},styleDocument(e){va.processStyles(),it(document.body,e)},getComputedStyleValue:(e,t)=>rt(e,t),flushCustomStyles(){},nativeCss:be,nativeShadow:fe,cssBuild:ge,disableRuntime:ye}),window.ShadyCSS.CustomStyleInterface=va;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const wa="include",xa=window.ShadyCSS.CustomStyleInterface;class ka extends HTMLElement{constructor(){super(),this._style=null,xa.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute(wa);return t&&(e.removeAttribute(wa),e.textContent=kn(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",ka);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
wo(HTMLElement).prototype;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Io({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var e=this.query;e&&(this.full||"("===e[0]||(e="("+e+")"),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))},queryHandler:function(e){this._setQueryMatches(e.matches)}});
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
var Sa=new Set;const Ca={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(Sa.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():$t||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=po(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(Sa.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?Sa.delete(this):Sa.add(this)}},Aa=[Ca,{listeners:{"app-reset-layout":"_appResetLayoutHandler","iron-resize":"resetLayout"},attached:function(){this.fire("app-reset-layout")},_appResetLayoutHandler:function(e){po(e).path[0]!==this&&(this.resetLayout(),e.stopPropagation())},_updateLayoutStates:function(){console.error("unimplemented")},resetLayout:function(){var e=this._updateLayoutStates.bind(this);this._layoutDebouncer=yr.debounce(this._layoutDebouncer,Zn,e),vr(this._layoutDebouncer),this._notifyDescendantResize()},_notifyLayoutChanged:function(){var e=this;requestAnimationFrame((function(){e.fire("app-reset-layout")}))},_notifyDescendantResize:function(){this.isAttached&&this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this)}}];
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
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
Io({_template:ha`
    <style>
      :host {
        display: block;
        /**
         * Force app-drawer-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements.
         */
        position: relative;
        z-index: 0;
      }

      :host ::slotted([slot=drawer]) {
        z-index: 1;
      }

      :host([fullbleed]) {
        @apply --layout-fit;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
        height: 100%;
        transition: var(--app-drawer-layout-content-transition, none);
      }

      #contentContainer[drawer-position=left] {
        margin-left: var(--app-drawer-width, 256px);
      }

      #contentContainer[drawer-position=right] {
        margin-right: var(--app-drawer-width, 256px);
      }
    </style>

    <slot id="drawerSlot" name="drawer"></slot>

    <div id="contentContainer" drawer-position\$="[[_drawerPosition]]">
      <slot></slot>
    </div>

    <iron-media-query query="[[_computeMediaQuery(forceNarrow, responsiveWidth)]]" on-query-matches-changed="_onQueryMatchesChanged"></iron-media-query>
`,is:"app-drawer-layout",behaviors:[Aa],properties:{forceNarrow:{type:Boolean,value:!1},responsiveWidth:{type:String,value:"640px"},narrow:{type:Boolean,reflectToAttribute:!0,readOnly:!0,notify:!0},openedWhenNarrow:{type:Boolean,value:!1},_drawerPosition:{type:String}},listeners:{click:"_clickHandler"},observers:["_narrowChanged(narrow)"],get drawer(){return po(this.$.drawerSlot).getDistributedNodes()[0]},attached:function(){var e=this.drawer;e&&e.setAttribute("no-transition","")},_clickHandler:function(e){var t=po(e).localTarget;if(t&&t.hasAttribute("drawer-toggle")){var n=this.drawer;n&&!n.persistent&&n.toggle()}},_updateLayoutStates:function(){var e=this.drawer;this.isAttached&&e&&(this._drawerPosition=this.narrow?null:e.position,this._drawerNeedsReset&&(this.narrow?(e.opened=this.openedWhenNarrow,e.persistent=!1):e.opened=e.persistent=!0,e.hasAttribute("no-transition")&&Bs(this,(function(){e.removeAttribute("no-transition")})),this._drawerNeedsReset=!1))},_narrowChanged:function(){this._drawerNeedsReset=!0,this.resetLayout()},_onQueryMatchesChanged:function(e){this._setNarrow(e.detail.value)},_computeMediaQuery:function(e,t){return e?"(min-width: 0px)":"(max-width: "+t+")"}});
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
const Pa=ha`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;Pa.setAttribute("style","display: none;"),document.head.appendChild(Pa.content);var Ea=document.createElement("style");Ea.textContent="[hidden] { display: none !important; }",document.head.appendChild(Ea),
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
Io({_template:ha`
    <style>
      :host {
        position: fixed;
        top: -120px;
        right: 0;
        bottom: -120px;
        left: 0;

        visibility: hidden;

        transition-property: visibility;
      }

      :host([opened]) {
        visibility: visible;
      }

      :host([persistent]) {
        width: var(--app-drawer-width, 256px);
      }

      :host([persistent][position=left]) {
        right: auto;
      }

      :host([persistent][position=right]) {
        left: auto;
      }

      #contentContainer {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;

        width: var(--app-drawer-width, 256px);
        padding: var(--app-drawer-content-padding, 120px 0);

        transition-property: -webkit-transform;
        transition-property: transform;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);

        background-color: #FFF;

        @apply --app-drawer-content-container;
      }

      #contentContainer[persistent] {
        width: 100%;
      }

      #contentContainer[position=right] {
        right: 0;
        left: auto;

        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }

      #contentContainer[swipe-open]::after {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 100%;

        visibility: visible;

        width: 20px;

        content: '';
      }

      #contentContainer[swipe-open][position=right]::after {
        right: 100%;
        left: auto;
      }

      #contentContainer[opened] {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      #scrim {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        transition-property: opacity;
        -webkit-transform: translateZ(0);
        transform:  translateZ(0);

        opacity: 0;
        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));
      }

      #scrim.visible {
        opacity: 1;
      }

      :host([no-transition]) #contentContainer {
        transition-property: none;
      }
    </style>

    <div id="scrim" on-click="close"></div>

    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari
    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->
    <div id="contentContainer" opened\$="[[opened]]" persistent\$="[[persistent]]" position\$="[[position]]" swipe-open\$="[[swipeOpen]]">
      <slot></slot>
    </div>
`,is:"app-drawer",properties:{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},persistent:{type:Boolean,value:!1,reflectToAttribute:!0},transitionDuration:{type:Number,value:200},align:{type:String,value:"left"},position:{type:String,readOnly:!0,reflectToAttribute:!0},swipeOpen:{type:Boolean,value:!1,reflectToAttribute:!0},noFocusTrap:{type:Boolean,value:!1},disableSwipe:{type:Boolean,value:!1}},observers:["resetLayout(position, isAttached)","_resetPosition(align, isAttached)","_styleTransitionDuration(transitionDuration)","_openedPersistentChanged(opened, persistent)"],_translateOffset:0,_trackDetails:null,_drawerState:0,_boundEscKeydownHandler:null,_firstTabStop:null,_lastTabStop:null,attached:function(){Bs(this,(function(){this._boundEscKeydownHandler=this._escKeydownHandler.bind(this),this.addEventListener("keydown",this._tabKeydownHandler.bind(this)),this.listen(this,"track","_track"),this.setScrollDirection("y")})),this.fire("app-reset-layout")},detached:function(){document.removeEventListener("keydown",this._boundEscKeydownHandler)},open:function(){this.opened=!0},close:function(){this.opened=!1},toggle:function(){this.opened=!this.opened},getWidth:function(){return this._savedWidth||this.$.contentContainer.offsetWidth},_isRTL:function(){return"rtl"===window.getComputedStyle(this).direction},_resetPosition:function(){switch(this.align){case"start":return void this._setPosition(this._isRTL()?"right":"left");case"end":return void this._setPosition(this._isRTL()?"left":"right")}this._setPosition(this.align)},_escKeydownHandler:function(e){var t=27;e.keyCode===t&&(e.preventDefault(),this.close())},_track:function(e){if(!this.persistent&&!this.disableSwipe)switch(e.preventDefault(),e.detail.state){case"start":this._trackStart(e);break;case"track":this._trackMove(e);break;case"end":this._trackEnd(e)}},_trackStart:function(e){this._drawerState=this._DRAWER_STATE.TRACKING;var t=this.$.contentContainer.getBoundingClientRect();this._savedWidth=t.width,"left"===this.position?this._translateOffset=t.left:this._translateOffset=t.right-window.innerWidth,this._trackDetails=[],this._styleTransitionDuration(0),this.style.visibility="visible"},_trackMove:function(e){this._translateDrawer(e.detail.dx+this._translateOffset),this._trackDetails.push({dx:e.detail.dx,timeStamp:Date.now()})},_trackEnd:function(e){var t=e.detail.dx+this._translateOffset,n=this.getWidth(),i="left"===this.position?t>=0||t<=-n:t<=0||t>=n;if(!i){var r=this._trackDetails;if(this._trackDetails=null,this._flingDrawer(e,r),this._drawerState===this._DRAWER_STATE.FLINGING)return}var s=n/2;e.detail.dx<-s?this.opened="right"===this.position:e.detail.dx>s&&(this.opened="left"===this.position),i?this.debounce("_resetDrawerState",this._resetDrawerState):this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration),this._styleTransitionDuration(this.transitionDuration),this._resetDrawerTranslate(),this.style.visibility=""},_calculateVelocity:function(e,t){for(var n,i=Date.now(),r=i-100,s=0,o=t.length-1;s<=o;){var a=s+o>>1,l=t[a];l.timeStamp>=r?(n=l,o=a-1):s=a+1}return n?(e.detail.dx-n.dx)/(i-n.timeStamp||1):0},_flingDrawer:function(e,t){var n=this._calculateVelocity(e,t);if(!(Math.abs(n)<this._MIN_FLING_THRESHOLD)){this._drawerState=this._DRAWER_STATE.FLINGING;var i,r=e.detail.dx+this._translateOffset,s=this.getWidth(),o="left"===this.position,a=n>0;i=!a&&o?-(r+s):a&&!o?s-r:-r,a?(n=Math.max(n,this._MIN_TRANSITION_VELOCITY),this.opened="left"===this.position):(n=Math.min(n,-this._MIN_TRANSITION_VELOCITY),this.opened="right"===this.position);var l=this._FLING_INITIAL_SLOPE*i/n;this._styleTransitionDuration(l),this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION),this._resetDrawerTranslate(),this.debounce("_resetDrawerState",this._resetDrawerState,l)}},_styleTransitionDuration:function(e){this.style.transitionDuration=e+"ms",this.$.contentContainer.style.transitionDuration=e+"ms",this.$.scrim.style.transitionDuration=e+"ms"},_styleTransitionTimingFunction:function(e){this.$.contentContainer.style.transitionTimingFunction=e,this.$.scrim.style.transitionTimingFunction=e},_translateDrawer:function(e){var t=this.getWidth();"left"===this.position?(e=Math.max(-t,Math.min(e,0)),this.$.scrim.style.opacity=1+e/t):(e=Math.max(0,Math.min(e,t)),this.$.scrim.style.opacity=1-e/t),this.translate3d(e+"px","0","0",this.$.contentContainer)},_resetDrawerTranslate:function(){this.$.scrim.style.opacity="",this.transform("",this.$.contentContainer)},_resetDrawerState:function(){var e=this._drawerState;e===this._DRAWER_STATE.FLINGING&&(this._styleTransitionDuration(this.transitionDuration),this._styleTransitionTimingFunction(""),this.style.visibility=""),this._savedWidth=null,this.opened?this._drawerState=this.persistent?this._DRAWER_STATE.OPENED_PERSISTENT:this._DRAWER_STATE.OPENED:this._drawerState=this._DRAWER_STATE.CLOSED,e!==this._drawerState&&(this._drawerState===this._DRAWER_STATE.OPENED?(this._setKeyboardFocusTrap(),document.addEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow="hidden"):(document.removeEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow=""),e!==this._DRAWER_STATE.INIT&&this.fire("app-drawer-transitioned"))},resetLayout:function(){this.fire("app-reset-layout")},_setKeyboardFocusTrap:function(){if(!this.noFocusTrap){var e=['a[href]:not([tabindex="-1"])','area[href]:not([tabindex="-1"])','input:not([disabled]):not([tabindex="-1"])','select:not([disabled]):not([tabindex="-1"])','textarea:not([disabled]):not([tabindex="-1"])','button:not([disabled]):not([tabindex="-1"])','iframe:not([tabindex="-1"])','[tabindex]:not([tabindex="-1"])','[contentEditable=true]:not([tabindex="-1"])'].join(","),t=po(this).querySelectorAll(e);t.length>0?(this._firstTabStop=t[0],this._lastTabStop=t[t.length-1]):(this._firstTabStop=null,this._lastTabStop=null);var n=this.getAttribute("tabindex");n&&parseInt(n,10)>-1?this.focus():this._firstTabStop&&this._firstTabStop.focus()}},_tabKeydownHandler:function(e){if(!this.noFocusTrap){var t=9;this._drawerState===this._DRAWER_STATE.OPENED&&e.keyCode===t&&(e.shiftKey?this._firstTabStop&&po(e).localTarget===this._firstTabStop&&(e.preventDefault(),this._lastTabStop.focus()):this._lastTabStop&&po(e).localTarget===this._lastTabStop&&(e.preventDefault(),this._firstTabStop.focus()))}},_openedPersistentChanged:function(e,t){this.toggleClass("visible",e&&!t,this.$.scrim),this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)},_MIN_FLING_THRESHOLD:.2,_MIN_TRANSITION_VELOCITY:1.2,_FLING_TIMING_FUNCTION:"cubic-bezier(0.667, 1, 0.667, 1)",_FLING_INITIAL_SLOPE:1.5,_DRAWER_STATE:{INIT:0,OPENED:1,OPENED_PERSISTENT:2,CLOSED:3,TRACKING:4,FLINGING:5}});
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
const Ta=ha`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;Ta.setAttribute("style","display: none;"),document.head.appendChild(Ta.content);
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
const Oa=ha`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;Oa.setAttribute("style","display: none;"),document.head.appendChild(Oa.content);
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
const Na={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class Ra{constructor(e){Ra[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return Ra.types[e]&&Ra.types[e][t]}set value(e){var t=this.type,n=this.key;t&&n&&(t=Ra.types[t]=Ra.types[t]||{},null==e?delete t[n]:t[n]=e)}get list(){if(this.type){var e=Ra.types[this.type];return e?Object.keys(e).map((function(e){return za[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}Ra[" "]=function(){},Ra.types={};var za=Ra.types;Io({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,n){var i=new Ra({type:e,key:t});return void 0!==n&&n!==i.value?i.value=n:this.value!==i.value&&(this.value=i.value),i},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new Ra({type:this.type,key:e}).value}});
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
let Ia=null;const Da={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){Ia=new Ra({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return Ia&&Ia.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(e){return void 0===e&&void 0!==this.value?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(e),!this.invalid},_getValidity:function(e){return!this.hasValidator()||this._validator.validate(e)}},Ma={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(e){return this.disabled||!this.required||this.checked},_requiredChanged:function(){this.required?this.setAttribute("aria-required","true"):this.removeAttribute("aria-required")},_checkedChanged:function(){this.active=this.checked,this.fire("iron-change")},_valueChanged:function(){void 0!==this.value&&null!==this.value||(this.value="on")}},La=[Na,Da,Ma],Fa={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused("focus"===e.type)},_disabledChanged:function(e,t){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};
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
var Ba={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},Ha={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},$a={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},ja=/[a-z0-9*]/,Ua=/U\+/,qa=/^arrow/,Va=/^space(bar)?/,Wa=/^escape$/;function Ka(e,t){var n="";if(e){var i=e.toLowerCase();" "===i||Va.test(i)?n="space":Wa.test(i)?n="esc":1==i.length?t&&!ja.test(i)||(n=i):n=qa.test(i)?i.replace("arrow",""):"multiply"==i?"*":i}return n}function Ya(e){var t="";return e&&(e in Ba?t=Ba[e]:Ua.test(e)?(e=parseInt(e.replace("U+","0x"),16),t=String.fromCharCode(e).toLowerCase()):t=e.toLowerCase()),t}function Ga(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):Ha[e]),t}function Ja(e,t){return e.key?Ka(e.key,t):e.detail&&e.detail.key?Ka(e.detail.key,t):Ya(e.keyIdentifier)||Ga(e.keyCode)||""}function Za(e,t){return Ja(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function Xa(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce((function(e,t){var n=t.split(":"),i=n[0],r=n[1];return i in $a?(e[$a[i]]=!0,e.hasModifiers=!0):(e.key=i,e.event=r||"keydown"),e}),{combo:e.split(":").shift()})}function Qa(e){return e.trim().split(" ").map((function(e){return Xa(e)}))}const el={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var n=Qa(t),i=0;i<n.length;++i)if(Za(n[i],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map((function(e){return e.keyBindings}));return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach((function(e){for(var t in e)this._addKeyBinding(t,e[t])}),this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort((function(e,t){var n=e[0].hasModifiers;return n===t[0].hasModifiers?0:n?-1:1}))},_addKeyBinding:function(e,t){Qa(e).forEach((function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(e){var t=this._keyBindings[e],n=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,n]),this.keyEventTarget.addEventListener(e,n)}),this)},_unlistenKeyEventListeners:function(){for(var e,t,n,i;this._boundKeyHandlers.length;)t=(e=this._boundKeyHandlers.pop())[0],n=e[1],i=e[2],t.removeEventListener(n,i)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var n=0;n<e.length;n++){var i=e[n][0],r=e[n][1];if(Za(i,t)&&(this._triggerKeyHandler(i,r,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,n){var i=Object.create(e);i.keyboardEvent=n;var r=new CustomEvent(e.event,{detail:i,cancelable:!0});this[t].call(this,r),r.defaultPrevented&&n.preventDefault()}},tl={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire("change"))},_downHandler:function(e){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(e){var t=e.detail.keyboardEvent,n=po(t).localTarget;this.isLightDescendant(n)||(t.preventDefault(),t.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(e){var t=e.detail.keyboardEvent,n=po(t).localTarget;this.isLightDescendant(n)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async((function(){this.click()}),1)},_pressedChanged:function(e){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e,t){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},nl=[el,tl];
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
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var il={distance:function(e,t,n,i){var r=e-n,s=t-i;return Math.sqrt(r*r+s*s)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function rl(e){this.element=e,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function sl(e){this.element=e,this.color=window.getComputedStyle(e).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),po(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}rl.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(e,t){var n=il.distance(e,t,0,0),i=il.distance(e,t,this.width,0),r=il.distance(e,t,0,this.height),s=il.distance(e,t,this.width,this.height);return Math.max(n,i,r,s)}},sl.MAX_RADIUS=300,sl.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var e;return this.mouseDownStart?(e=il.now()-this.mouseDownStart,this.mouseUpStart&&(e-=this.mouseUpElapsed),e):0},get mouseUpElapsed(){return this.mouseUpStart?il.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var e=this.containerMetrics.width*this.containerMetrics.width,t=this.containerMetrics.height*this.containerMetrics.height,n=1.1*Math.min(Math.sqrt(e+t),sl.MAX_RADIUS)+5,i=1.1-n/sl.MAX_RADIUS*.2,r=this.mouseInteractionSeconds/i,s=n*(1-Math.pow(80,-r));return Math.abs(s)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var e=.3*this.mouseUpElapsedSeconds,t=this.opacity;return Math.max(0,Math.min(e,t))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,sl.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,sl.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new rl(this.element)},draw:function(){var e,t,n;this.wave.style.opacity=this.opacity,e=this.radius/(this.containerMetrics.size/2),t=this.xNow-this.containerMetrics.width/2,n=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+t+"px, "+n+"px)",this.waveContainer.style.transform="translate3d("+t+"px, "+n+"px, 0)",this.wave.style.webkitTransform="scale("+e+","+e+")",this.wave.style.transform="scale3d("+e+","+e+",1)"},downAction:function(e){var t=this.containerMetrics.width/2,n=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=il.now(),this.center?(this.xStart=t,this.yStart=n,this.slideDistance=il.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=e?e.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=e?e.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=t,this.yEnd=n,this.slideDistance=il.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(e){this.isMouseDown&&(this.mouseUpStart=il.now())},remove:function(){po(po(this.waveContainer).parentNode).removeChild(this.waveContainer)}},Io({_template:ha`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[el],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==po(this).parentNode.nodeType?this.keyEventTarget=po(this).getOwnerRoot().host:this.keyEventTarget=po(this).parentNode;var e=this.keyEventTarget;this.listen(e,"up","uiUpAction"),this.listen(e,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var e=0;e<this.ripples.length;++e)if(!this.ripples[e].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async((function(){this.upAction()}),1)},uiDownAction:function(e){this.noink||this.downAction(e)},downAction:function(e){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(e),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(e){this.noink||this.upAction(e)},upAction:function(e){this.holdDown||(this.ripples.forEach((function(t){t.upAction(e)})),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor="",this.fire("transitionend")},addRipple:function(){var e=new sl(this);return po(this.$.waves).appendChild(e.waveContainer),this.$.background.style.backgroundColor=e.color,this.ripples.push(e),this._setAnimating(!0),e},removeRipple:function(e){var t=this.ripples.indexOf(e);t<0||(this.ripples.splice(t,1),e.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var e,t;for(e=0;e<this.ripples.length;++e)(t=this.ripples[e]).draw(),this.$.background.style.opacity=t.outerOpacity,t.isOpacityFullyDecayed&&!t.isRestingAtMaxRadius&&this.removeRipple(t);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(e,t){void 0!==t&&(e?this.downAction():this.upAction())}});
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
const ol={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){tl._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(e){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&po(t).appendChild(this._ripple),e){var n=po(this._rippleContainer||this),i=po(e).rootTarget;n.deepContains(i)&&this._ripple.uiDownAction(e)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}},al={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(e){e&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=e)},_createRipple:function(){var e=ol._createRipple();return e.id="ink",e.setAttribute("center",""),e.classList.add("circle"),e}},ll=[[nl,Fa,ol,al],La,{_checkedChanged:function(){Ma._checkedChanged.call(this),this.hasRipple()&&(this.checked?this._ripple.setAttribute("checked",""):this._ripple.removeAttribute("checked"))},_buttonStateChanged:function(){ol._buttonStateChanged.call(this),this.disabled||this.isAttached&&(this.checked=this.active)}}],cl=ha`<style>
  :host {
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);
    /* -1px is a sentinel for the default and is replaced in \`attached\`. */
    --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);
    @apply --paper-font-common-base;
    line-height: 0;
    -webkit-tap-highlight-color: transparent;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:focus) {
    outline: none;
  }

  .hidden {
    display: none;
  }

  #checkboxContainer {
    display: inline-block;
    position: relative;
    width: var(--calculated-paper-checkbox-size);
    height: var(--calculated-paper-checkbox-size);
    min-width: var(--calculated-paper-checkbox-size);
    margin: var(--paper-checkbox-margin, initial);
    vertical-align: var(--paper-checkbox-vertical-align, middle);
    background-color: var(--paper-checkbox-unchecked-background-color, transparent);
  }

  #ink {
    position: absolute;

    /* Center the ripple in the checkbox by negative offsetting it by
     * (inkWidth - rippleWidth) / 2 */
    top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    width: var(--calculated-paper-checkbox-ink-size);
    height: var(--calculated-paper-checkbox-ink-size);
    color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));
    opacity: 0.6;
    pointer-events: none;
  }

  #ink:dir(rtl) {
    right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: auto;
  }

  #ink[checked] {
    color: var(--paper-checkbox-checked-ink-color, var(--primary-color));
  }

  #checkbox {
    position: relative;
    box-sizing: border-box;
    height: 100%;
    border: solid 2px;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    border-radius: 2px;
    pointer-events: none;
    -webkit-transition: background-color 140ms, border-color 140ms;
    transition: background-color 140ms, border-color 140ms;

    -webkit-transition-duration: var(--paper-checkbox-animation-duration, 140ms);
    transition-duration: var(--paper-checkbox-animation-duration, 140ms);
  }

  /* checkbox checked animations */
  #checkbox.checked #checkmark {
    -webkit-animation: checkmark-expand 140ms ease-out forwards;
    animation: checkmark-expand 140ms ease-out forwards;

    -webkit-animation-duration: var(--paper-checkbox-animation-duration, 140ms);
    animation-duration: var(--paper-checkbox-animation-duration, 140ms);
  }

  @-webkit-keyframes checkmark-expand {
    0% {
      -webkit-transform: scale(0, 0) rotate(45deg);
    }
    100% {
      -webkit-transform: scale(1, 1) rotate(45deg);
    }
  }

  @keyframes checkmark-expand {
    0% {
      transform: scale(0, 0) rotate(45deg);
    }
    100% {
      transform: scale(1, 1) rotate(45deg);
    }
  }

  #checkbox.checked {
    background-color: var(--paper-checkbox-checked-color, var(--primary-color));
    border-color: var(--paper-checkbox-checked-color, var(--primary-color));
  }

  #checkmark {
    position: absolute;
    width: 36%;
    height: 70%;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-color: var(--paper-checkbox-checkmark-color, white);
    -webkit-transform-origin: 97% 86%;
    transform-origin: 97% 86%;
    box-sizing: content-box; /* protect against page-level box-sizing */
  }

  #checkmark:dir(rtl) {
    -webkit-transform-origin: 50% 14%;
    transform-origin: 50% 14%;
  }

  /* label */
  #checkboxLabel {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding-left: var(--paper-checkbox-label-spacing, 8px);
    white-space: normal;
    line-height: normal;
    color: var(--paper-checkbox-label-color, var(--primary-text-color));
    @apply --paper-checkbox-label;
  }

  :host([checked]) #checkboxLabel {
    color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));
    @apply --paper-checkbox-label-checked;
  }

  #checkboxLabel:dir(rtl) {
    padding-right: var(--paper-checkbox-label-spacing, 8px);
    padding-left: 0;
  }

  #checkboxLabel[hidden] {
    display: none;
  }

  /* disabled state */

  :host([disabled]) #checkbox {
    opacity: 0.5;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
  }

  :host([disabled][checked]) #checkbox {
    background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled]) #checkboxLabel  {
    opacity: 0.65;
  }

  /* invalid state */
  #checkbox.invalid:not(.checked) {
    border-color: var(--paper-checkbox-error-color, var(--error-color));
  }
</style>

<div id="checkboxContainer">
  <div id="checkbox" class$="[[_computeCheckboxClass(checked, invalid)]]">
    <div id="checkmark" class$="[[_computeCheckmarkClass(checked)]]"></div>
  </div>
</div>

<div id="checkboxLabel"><slot></slot></div>`;
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
if(cl.setAttribute("strip-whitespace",""),Io({_template:cl,is:"paper-checkbox",behaviors:[ll],hostAttributes:{role:"checkbox","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},attached:function(){Bs(this,(function(){if("-1px"===this.getComputedStyleValue("--calculated-paper-checkbox-ink-size").trim()){var e=this.getComputedStyleValue("--calculated-paper-checkbox-size").trim(),t="px",n=e.match(/[A-Za-z]+$/);null!==n&&(t=n[0]);var i=parseFloat(e),r=8/3*i;"px"===t&&(r=Math.floor(r))%2!=i%2&&r++,this.updateStyles({"--paper-checkbox-ink-size":r+t})}}))},_computeCheckboxClass:function(e,t){var n="";return e&&(n+="checked "),t&&(n+="invalid"),n},_computeCheckmarkClass:function(e){return e?"":"hidden"},_createRipple:function(){return this._rippleContainer=this.$.checkboxContainer,al._createRipple.call(this)}}),!window.polymerSkipLoadingFontRoboto){const e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.crossOrigin="anonymous",e.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(e)}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const hl=ha`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;hl.setAttribute("style","display: none;"),document.head.appendChild(hl.content);
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
const dl=document.createElement("template");dl.setAttribute("style","display: none;"),dl.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(dl.content);
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
const pl=[nl,Fa,{hostAttributes:{role:"option",tabindex:"0"}}];
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
Io({_template:ha`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[pl]}),
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
Io({_template:ha`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:"paper-item-body"}),
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
Io({_template:ha`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,is:"paper-icon-item",behaviors:[pl]});class ul extends ue{static get properties(){return{json:{type:Object},withDemo:{type:Boolean,attribute:"with-demo"},_demos:{type:Object}}}constructor(){super(),this.json=null,this.withDemo=!1}connectedCallback(){super.connectedCallback()}render(){if(this.json){const{tags:e}=this.json;e.sort((e,t)=>e.name.localeCompare(t.name));let t=e;return this.withDemo&&(t=e.filter(e=>e.demo)),j`
                ${t.map(e=>j`<paper-item @click="${()=>ul._viewComponent(e)}">${e.name}</paper-item>`)}
            `}return j`<div>Loading ...</div>`}static get styles(){return de`
            :host {
                display: block;
            }
        `}static _viewComponent(e,t=0){document.dispatchEvent(new CustomEvent("pb-api-component",{detail:{component:e,tab:t}}))}}customElements.define("pb-components-list",ul),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).marked=t()}(void 0,(function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function n(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e,t){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=n(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(i=e[Symbol.iterator]()).next.bind(i)}function s(e){var t={exports:{}};return e(t,t.exports),t.exports}var o=s((function(e){function t(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}function n(t){e.exports.defaults=t}e.exports={defaults:t(),getDefaults:t,changeDefaults:n}})),a=/[&<>"']/,l=/[&<>"']/g,c=/[<>"']|&(?!#?\w+;)/,h=/[<>"']|&(?!#?\w+;)/g,d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},p=function(e){return d[e]};function u(e,t){if(t){if(a.test(e))return e.replace(l,p)}else if(c.test(e))return e.replace(h,p);return e}var f=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function m(e){return e.replace(f,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}var g=/(^|[^\[])\^/g;function _(e,t){e=e.source||e,t=t||"";var n={replace:function(t,i){return i=(i=i.source||i).replace(g,"$1"),e=e.replace(t,i),n},getRegex:function(){return new RegExp(e,t)}};return n}var y=/[^\w:]/g,b=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function v(e,t,n){if(e){var i;try{i=decodeURIComponent(m(n)).replace(y,"").toLowerCase()}catch(e){return null}if(0===i.indexOf("javascript:")||0===i.indexOf("vbscript:")||0===i.indexOf("data:"))return null}t&&!b.test(n)&&(n=C(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n}var w={},x=/^[^:]+:\/*[^/]*$/,k=/^([^:]+:)[\s\S]*$/,S=/^([^:]+:\/*[^/]*)[\s\S]*$/;function C(e,t){w[" "+e]||(x.test(e)?w[" "+e]=e+"/":w[" "+e]=E(e,"/",!0));var n=-1===(e=w[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(k,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(S,"$1")+t:e+t}function A(e){for(var t,n,i=1;i<arguments.length;i++)for(n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function P(e,t){var n=e.replace(/\|/g,(function(e,t,n){for(var i=!1,r=t;--r>=0&&"\\"===n[r];)i=!i;return i?"|":" |"})).split(/ \|/),i=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function E(e,t,n){var i=e.length;if(0===i)return"";for(var r=0;r<i;){var s=e.charAt(i-r-1);if(s!==t||n){if(s===t||!n)break;r++}else r++}return e.substr(0,i-r)}function T(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=e.length,i=0,r=0;r<n;r++)if("\\"===e[r])r++;else if(e[r]===t[0])i++;else if(e[r]===t[1]&&--i<0)return r;return-1}function O(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function N(e,t){if(t<1)return"";for(var n="";t>1;)1&t&&(n+=e),t>>=1,e+=e;return n+e}var R={escape:u,unescape:m,edit:_,cleanUrl:v,resolveUrl:C,noopTest:{exec:function(){}},merge:A,splitCells:P,rtrim:E,findClosingBracket:T,checkSanitizeDeprecation:O,repeatString:N},z=o.defaults,I=R.rtrim,D=R.splitCells,M=R.escape,L=R.findClosingBracket;function F(e,t,n){var i=t.href,r=t.title?M(t.title):null,s=e[1].replace(/\\([\[\]])/g,"$1");return"!"!==e[0].charAt(0)?{type:"link",raw:n,href:i,title:r,text:s}:{type:"image",raw:n,href:i,title:r,text:M(s)}}function B(e,t){var n=e.match(/^(\s+)(?:```)/);if(null===n)return t;var i=n[1];return t.split("\n").map((function(e){var t=e.match(/^\s+/);return null===t?e:t[0].length>=i.length?e.slice(i.length):e})).join("\n")}var H=function(){function e(e){this.options=e||z}var t=e.prototype;return t.space=function(e){var t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:"\n"}},t.code=function(e,t){var n=this.rules.block.code.exec(e);if(n){var i=t[t.length-1];if(i&&"paragraph"===i.type)return{raw:n[0],text:n[0].trimRight()};var r=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:I(r,"\n")}}},t.fences=function(e){var t=this.rules.block.fences.exec(e);if(t){var n=t[0],i=B(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim():t[2],text:i}}},t.heading=function(e){var t=this.rules.block.heading.exec(e);if(t){var n=t[2].trim();if(/#$/.test(n)){var i=I(n,"#");this.options.pedantic?n=i.trim():i&&!/ $/.test(i)||(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n}}},t.nptable=function(e){var t=this.rules.block.nptable.exec(e);if(t){var n={type:"table",header:D(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[],raw:t[0]};if(n.header.length===n.align.length){var i,r=n.align.length;for(i=0;i<r;i++)/^ *-+: *$/.test(n.align[i])?n.align[i]="right":/^ *:-+: *$/.test(n.align[i])?n.align[i]="center":/^ *:-+ *$/.test(n.align[i])?n.align[i]="left":n.align[i]=null;for(r=n.cells.length,i=0;i<r;i++)n.cells[i]=D(n.cells[i],n.header.length);return n}}},t.hr=function(e){var t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}},t.blockquote=function(e){var t=this.rules.block.blockquote.exec(e);if(t){var n=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:n}}},t.list=function(e){var t=this.rules.block.list.exec(e);if(t){var n,i,r,s,o,a,l,c,h=t[0],d=t[2],p=d.length>1,u={type:"list",raw:h,ordered:p,start:p?+d.slice(0,-1):"",loose:!1,items:[]},f=t[0].match(this.rules.block.item),m=!1,g=f.length;r=this.rules.block.listItemStart.exec(f[0]);for(var _=0;_<g;_++){if(h=n=f[_],_!==g-1){if(s=this.rules.block.listItemStart.exec(f[_+1]),this.options.pedantic?s[1].length>r[1].length:s[1].length>r[0].length||s[1].length>3){f.splice(_,2,f[_]+"\n"+f[_+1]),_--,g--;continue}(!this.options.pedantic||this.options.smartLists?s[2][s[2].length-1]!==d[d.length-1]:p===(1===s[2].length))&&(o=f.slice(_+1).join("\n"),u.raw=u.raw.substring(0,u.raw.length-o.length),_=g-1),r=s}i=n.length,~(n=n.replace(/^ *([*+-]|\d+[.)]) ?/,"")).indexOf("\n ")&&(i-=n.length,n=this.options.pedantic?n.replace(/^ {1,4}/gm,""):n.replace(new RegExp("^ {1,"+i+"}","gm"),"")),a=m||/\n\n(?!\s*$)/.test(n),_!==g-1&&(m="\n"===n.charAt(n.length-1),a||(a=m)),a&&(u.loose=!0),this.options.gfm&&(c=void 0,(l=/^\[[ xX]\] /.test(n))&&(c=" "!==n[1],n=n.replace(/^\[[ xX]\] +/,""))),u.items.push({type:"list_item",raw:h,task:l,checked:c,loose:a,text:n})}return u}},t.html=function(e){var t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):M(t[0]):t[0]}},t.def=function(e){var t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}},t.table=function(e){var t=this.rules.block.table.exec(e);if(t){var n={type:"table",header:D(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[]};if(n.header.length===n.align.length){n.raw=t[0];var i,r=n.align.length;for(i=0;i<r;i++)/^ *-+: *$/.test(n.align[i])?n.align[i]="right":/^ *:-+: *$/.test(n.align[i])?n.align[i]="center":/^ *:-+ *$/.test(n.align[i])?n.align[i]="left":n.align[i]=null;for(r=n.cells.length,i=0;i<r;i++)n.cells[i]=D(n.cells[i].replace(/^ *\| *| *\| *$/g,""),n.header.length);return n}}},t.lheading=function(e){var t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1]}},t.paragraph=function(e){var t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]}},t.text=function(e,t){var n=this.rules.block.text.exec(e);if(n){var i=t[t.length-1];return i&&"text"===i.type?{raw:n[0],text:n[0]}:{type:"text",raw:n[0],text:n[0]}}},t.escape=function(e){var t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:M(t[1])}},t.tag=function(e,t,n){var i=this.rules.inline.tag.exec(e);if(i)return!t&&/^<a /i.test(i[0])?t=!0:t&&/^<\/a>/i.test(i[0])&&(t=!1),!n&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0])?n=!0:n&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0])&&(n=!1),{type:this.options.sanitize?"text":"html",raw:i[0],inLink:t,inRawBlock:n,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):M(i[0]):i[0]}},t.link=function(e){var t=this.rules.inline.link.exec(e);if(t){var n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;var i=I(n.slice(0,-1),"\\");if((n.length-i.length)%2==0)return}else{var r=L(t[2],"()");if(r>-1){var s=(0===t[0].indexOf("!")?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,s).trim(),t[3]=""}}var o=t[2],a="";if(this.options.pedantic){var l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);l&&(o=l[1],a=l[3])}else a=t[3]?t[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(o=this.options.pedantic&&!/>$/.test(n)?o.slice(1):o.slice(1,-1)),F(t,{href:o?o.replace(this.rules.inline._escapes,"$1"):o,title:a?a.replace(this.rules.inline._escapes,"$1"):a},t[0])}},t.reflink=function(e,t){var n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){var i=(n[2]||n[1]).replace(/\s+/g," ");if(!(i=t[i.toLowerCase()])||!i.href){var r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return F(n,i,n[0])}},t.strong=function(e,t,n){void 0===n&&(n="");var i=this.rules.inline.strong.start.exec(e);if(i&&(!i[1]||i[1]&&(""===n||this.rules.inline.punctuation.exec(n)))){t=t.slice(-1*e.length);var r,s="**"===i[0]?this.rules.inline.strong.endAst:this.rules.inline.strong.endUnd;for(s.lastIndex=0;null!=(i=s.exec(t));)if(r=this.rules.inline.strong.middle.exec(t.slice(0,i.index+3)))return{type:"strong",raw:e.slice(0,r[0].length),text:e.slice(2,r[0].length-2)}}},t.em=function(e,t,n){void 0===n&&(n="");var i=this.rules.inline.em.start.exec(e);if(i&&(!i[1]||i[1]&&(""===n||this.rules.inline.punctuation.exec(n)))){t=t.slice(-1*e.length);var r,s="*"===i[0]?this.rules.inline.em.endAst:this.rules.inline.em.endUnd;for(s.lastIndex=0;null!=(i=s.exec(t));)if(r=this.rules.inline.em.middle.exec(t.slice(0,i.index+2)))return{type:"em",raw:e.slice(0,r[0].length),text:e.slice(1,r[0].length-1)}}},t.codespan=function(e){var t=this.rules.inline.code.exec(e);if(t){var n=t[2].replace(/\n/g," "),i=/[^ ]/.test(n),r=/^ /.test(n)&&/ $/.test(n);return i&&r&&(n=n.substring(1,n.length-1)),n=M(n,!0),{type:"codespan",raw:t[0],text:n}}},t.br=function(e){var t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}},t.del=function(e){var t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2]}},t.autolink=function(e,t){var n,i,r=this.rules.inline.autolink.exec(e);if(r)return i="@"===r[2]?"mailto:"+(n=M(this.options.mangle?t(r[1]):r[1])):n=M(r[1]),{type:"link",raw:r[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}},t.url=function(e,t){var n;if(n=this.rules.inline.url.exec(e)){var i,r;if("@"===n[2])r="mailto:"+(i=M(this.options.mangle?t(n[0]):n[0]));else{var s;do{s=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(s!==n[0]);i=M(n[0]),r="www."===n[1]?"http://"+i:i}return{type:"link",raw:n[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}},t.inlineText=function(e,t,n){var i,r=this.rules.inline.text.exec(e);if(r)return i=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):M(r[0]):r[0]:M(this.options.smartypants?n(r[0]):r[0]),{type:"text",raw:r[0],text:i}},e}(),$=R.noopTest,j=R.edit,U=R.merge,q={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:$,table:$,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};q.def=j(q.def).replace("label",q._label).replace("title",q._title).getRegex(),q.bullet=/(?:[*+-]|\d{1,9}[.)])/,q.item=/^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/,q.item=j(q.item,"gm").replace(/bull/g,q.bullet).getRegex(),q.listItemStart=j(/^( *)(bull)/).replace("bull",q.bullet).getRegex(),q.list=j(q.list).replace(/bull/g,q.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+q.def.source+")").getRegex(),q._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",q._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,q.html=j(q.html,"i").replace("comment",q._comment).replace("tag",q._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),q.paragraph=j(q._paragraph).replace("hr",q.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",q._tag).getRegex(),q.blockquote=j(q.blockquote).replace("paragraph",q.paragraph).getRegex(),q.normal=U({},q),q.gfm=U({},q.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),q.gfm.nptable=j(q.gfm.nptable).replace("hr",q.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",q._tag).getRegex(),q.gfm.table=j(q.gfm.table).replace("hr",q.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",q._tag).getRegex(),q.pedantic=U({},q.normal,{html:j("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",q._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:$,paragraph:j(q.normal._paragraph).replace("hr",q.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",q.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var V={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:$,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",strong:{start:/^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,middle:/^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,endAst:/[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/},em:{start:/^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,middle:/^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,endAst:/[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:$,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\s*punctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};V.punctuation=j(V.punctuation).replace(/punctuation/g,V._punctuation).getRegex(),V._blockSkip="\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>",V._overlapSkip="__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*",V._comment=j(q._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),V.em.start=j(V.em.start).replace(/punctuation/g,V._punctuation).getRegex(),V.em.middle=j(V.em.middle).replace(/punctuation/g,V._punctuation).replace(/overlapSkip/g,V._overlapSkip).getRegex(),V.em.endAst=j(V.em.endAst,"g").replace(/punctuation/g,V._punctuation).getRegex(),V.em.endUnd=j(V.em.endUnd,"g").replace(/punctuation/g,V._punctuation).getRegex(),V.strong.start=j(V.strong.start).replace(/punctuation/g,V._punctuation).getRegex(),V.strong.middle=j(V.strong.middle).replace(/punctuation/g,V._punctuation).replace(/overlapSkip/g,V._overlapSkip).getRegex(),V.strong.endAst=j(V.strong.endAst,"g").replace(/punctuation/g,V._punctuation).getRegex(),V.strong.endUnd=j(V.strong.endUnd,"g").replace(/punctuation/g,V._punctuation).getRegex(),V.blockSkip=j(V._blockSkip,"g").getRegex(),V.overlapSkip=j(V._overlapSkip,"g").getRegex(),V._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,V._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,V._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,V.autolink=j(V.autolink).replace("scheme",V._scheme).replace("email",V._email).getRegex(),V._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,V.tag=j(V.tag).replace("comment",V._comment).replace("attribute",V._attribute).getRegex(),V._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,V._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,V._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,V.link=j(V.link).replace("label",V._label).replace("href",V._href).replace("title",V._title).getRegex(),V.reflink=j(V.reflink).replace("label",V._label).getRegex(),V.reflinkSearch=j(V.reflinkSearch,"g").replace("reflink",V.reflink).replace("nolink",V.nolink).getRegex(),V.normal=U({},V),V.pedantic=U({},V.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:j(/^!?\[(label)\]\((.*?)\)/).replace("label",V._label).getRegex(),reflink:j(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",V._label).getRegex()}),V.gfm=U({},V.normal,{escape:j(V.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),V.gfm.url=j(V.gfm.url,"i").replace("email",V.gfm._extended_email).getRegex(),V.breaks=U({},V.gfm,{br:j(V.br).replace("{2,}","*").getRegex(),text:j(V.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var W={block:q,inline:V},K=o.defaults,Y=W.block,G=W.inline,J=R.repeatString;function Z(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function X(e){var t,n,i="",r=e.length;for(t=0;t<r;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),i+="&#"+n+";";return i}var Q=function(){function e(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||K,this.options.tokenizer=this.options.tokenizer||new H,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;var t={block:Y.normal,inline:G.normal};this.options.pedantic?(t.block=Y.pedantic,t.inline=G.pedantic):this.options.gfm&&(t.block=Y.gfm,this.options.breaks?t.inline=G.breaks:t.inline=G.gfm),this.tokenizer.rules=t}e.lex=function(t,n){return new e(n).lex(t)},e.lexInline=function(t,n){return new e(n).inlineTokens(t)};var n=e.prototype;return n.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens},n.blockTokens=function(e,t,n){var i,r,s,o;for(void 0===t&&(t=[]),void 0===n&&(n=!0),this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(i=this.tokenizer.space(e))e=e.substring(i.raw.length),i.type&&t.push(i);else if(i=this.tokenizer.code(e,t))e=e.substring(i.raw.length),i.type?t.push(i):((o=t[t.length-1]).raw+="\n"+i.raw,o.text+="\n"+i.text);else if(i=this.tokenizer.fences(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.heading(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.nptable(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.hr(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.blockquote(e))e=e.substring(i.raw.length),i.tokens=this.blockTokens(i.text,[],n),t.push(i);else if(i=this.tokenizer.list(e)){for(e=e.substring(i.raw.length),s=i.items.length,r=0;r<s;r++)i.items[r].tokens=this.blockTokens(i.items[r].text,[],!1);t.push(i)}else if(i=this.tokenizer.html(e))e=e.substring(i.raw.length),t.push(i);else if(n&&(i=this.tokenizer.def(e)))e=e.substring(i.raw.length),this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});else if(i=this.tokenizer.table(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.lheading(e))e=e.substring(i.raw.length),t.push(i);else if(n&&(i=this.tokenizer.paragraph(e)))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.text(e,t))e=e.substring(i.raw.length),i.type?t.push(i):((o=t[t.length-1]).raw+="\n"+i.raw,o.text+="\n"+i.text);else if(e){var a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}throw new Error(a)}return t},n.inline=function(e){var t,n,i,r,s,o,a=e.length;for(t=0;t<a;t++)switch((o=e[t]).type){case"paragraph":case"text":case"heading":o.tokens=[],this.inlineTokens(o.text,o.tokens);break;case"table":for(o.tokens={header:[],cells:[]},r=o.header.length,n=0;n<r;n++)o.tokens.header[n]=[],this.inlineTokens(o.header[n],o.tokens.header[n]);for(r=o.cells.length,n=0;n<r;n++)for(s=o.cells[n],o.tokens.cells[n]=[],i=0;i<s.length;i++)o.tokens.cells[n][i]=[],this.inlineTokens(s[i],o.tokens.cells[n][i]);break;case"blockquote":this.inline(o.tokens);break;case"list":for(r=o.items.length,n=0;n<r;n++)this.inline(o.items[n].tokens)}return e},n.inlineTokens=function(e,t,n,i){var r;void 0===t&&(t=[]),void 0===n&&(n=!1),void 0===i&&(i=!1);var s,o,a,l=e;if(this.tokens.links){var c=Object.keys(this.tokens.links);if(c.length>0)for(;null!=(s=this.tokenizer.rules.inline.reflinkSearch.exec(l));)c.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,s.index)+"["+J("a",s[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(s=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,s.index)+"["+J("a",s[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;e;)if(o||(a=""),o=!1,r=this.tokenizer.escape(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.tag(e,n,i))e=e.substring(r.raw.length),n=r.inLink,i=r.inRawBlock,t.push(r);else if(r=this.tokenizer.link(e))e=e.substring(r.raw.length),"link"===r.type&&(r.tokens=this.inlineTokens(r.text,[],!0,i)),t.push(r);else if(r=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(r.raw.length),"link"===r.type&&(r.tokens=this.inlineTokens(r.text,[],!0,i)),t.push(r);else if(r=this.tokenizer.strong(e,l,a))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],n,i),t.push(r);else if(r=this.tokenizer.em(e,l,a))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],n,i),t.push(r);else if(r=this.tokenizer.codespan(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.br(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.del(e))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],n,i),t.push(r);else if(r=this.tokenizer.autolink(e,X))e=e.substring(r.raw.length),t.push(r);else if(n||!(r=this.tokenizer.url(e,X))){if(r=this.tokenizer.inlineText(e,i,Z))e=e.substring(r.raw.length),a=r.raw.slice(-1),o=!0,t.push(r);else if(e){var h="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(h);break}throw new Error(h)}}else e=e.substring(r.raw.length),t.push(r);return t},t(e,null,[{key:"rules",get:function(){return{block:Y,inline:G}}}]),e}(),ee=o.defaults,te=R.cleanUrl,ne=R.escape,ie=function(){function e(e){this.options=e||ee}var t=e.prototype;return t.code=function(e,t,n){var i=(t||"").match(/\S*/)[0];if(this.options.highlight){var r=this.options.highlight(e,i);null!=r&&r!==e&&(n=!0,e=r)}return e=e.replace(/\n$/,"")+"\n",i?'<pre><code class="'+this.options.langPrefix+ne(i,!0)+'">'+(n?e:ne(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:ne(e,!0))+"</code></pre>\n"},t.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},t.html=function(e){return e},t.heading=function(e,t,n,i){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+i.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},t.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},t.list=function(e,t,n){var i=t?"ol":"ul";return"<"+i+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+i+">\n"},t.listitem=function(e){return"<li>"+e+"</li>\n"},t.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},t.paragraph=function(e){return"<p>"+e+"</p>\n"},t.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},t.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},t.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},t.strong=function(e){return"<strong>"+e+"</strong>"},t.em=function(e){return"<em>"+e+"</em>"},t.codespan=function(e){return"<code>"+e+"</code>"},t.br=function(){return this.options.xhtml?"<br/>":"<br>"},t.del=function(e){return"<del>"+e+"</del>"},t.link=function(e,t,n){if(null===(e=te(this.options.sanitize,this.options.baseUrl,e)))return n;var i='<a href="'+ne(e)+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>"},t.image=function(e,t,n){if(null===(e=te(this.options.sanitize,this.options.baseUrl,e)))return n;var i='<img src="'+e+'" alt="'+n+'"';return t&&(i+=' title="'+t+'"'),i+=this.options.xhtml?"/>":">"},t.text=function(e){return e},e}(),re=function(){function e(){}var t=e.prototype;return t.strong=function(e){return e},t.em=function(e){return e},t.codespan=function(e){return e},t.del=function(e){return e},t.html=function(e){return e},t.text=function(e){return e},t.link=function(e,t,n){return""+n},t.image=function(e,t,n){return""+n},t.br=function(){return""},e}(),se=function(){function e(){this.seen={}}var t=e.prototype;return t.serialize=function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},t.getNextSafeSlug=function(e,t){var n=e,i=0;if(this.seen.hasOwnProperty(n)){i=this.seen[e];do{n=e+"-"+ ++i}while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=i,this.seen[n]=0),n},t.slug=function(e,t){void 0===t&&(t={});var n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)},e}(),oe=o.defaults,ae=R.unescape,le=function(){function e(e){this.options=e||oe,this.options.renderer=this.options.renderer||new ie,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new re,this.slugger=new se}e.parse=function(t,n){return new e(n).parse(t)},e.parseInline=function(t,n){return new e(n).parseInline(t)};var t=e.prototype;return t.parse=function(e,t){void 0===t&&(t=!0);var n,i,r,s,o,a,l,c,h,d,p,u,f,m,g,_,y,b,v="",w=e.length;for(n=0;n<w;n++)switch((d=e[n]).type){case"space":continue;case"hr":v+=this.renderer.hr();continue;case"heading":v+=this.renderer.heading(this.parseInline(d.tokens),d.depth,ae(this.parseInline(d.tokens,this.textRenderer)),this.slugger);continue;case"code":v+=this.renderer.code(d.text,d.lang,d.escaped);continue;case"table":for(c="",l="",s=d.header.length,i=0;i<s;i++)l+=this.renderer.tablecell(this.parseInline(d.tokens.header[i]),{header:!0,align:d.align[i]});for(c+=this.renderer.tablerow(l),h="",s=d.cells.length,i=0;i<s;i++){for(l="",o=(a=d.tokens.cells[i]).length,r=0;r<o;r++)l+=this.renderer.tablecell(this.parseInline(a[r]),{header:!1,align:d.align[r]});h+=this.renderer.tablerow(l)}v+=this.renderer.table(c,h);continue;case"blockquote":h=this.parse(d.tokens),v+=this.renderer.blockquote(h);continue;case"list":for(p=d.ordered,u=d.start,f=d.loose,s=d.items.length,h="",i=0;i<s;i++)_=(g=d.items[i]).checked,y=g.task,m="",g.task&&(b=this.renderer.checkbox(_),f?g.tokens.length>0&&"text"===g.tokens[0].type?(g.tokens[0].text=b+" "+g.tokens[0].text,g.tokens[0].tokens&&g.tokens[0].tokens.length>0&&"text"===g.tokens[0].tokens[0].type&&(g.tokens[0].tokens[0].text=b+" "+g.tokens[0].tokens[0].text)):g.tokens.unshift({type:"text",text:b}):m+=b),m+=this.parse(g.tokens,f),h+=this.renderer.listitem(m,y,_);v+=this.renderer.list(h,p,u);continue;case"html":v+=this.renderer.html(d.text);continue;case"paragraph":v+=this.renderer.paragraph(this.parseInline(d.tokens));continue;case"text":for(h=d.tokens?this.parseInline(d.tokens):d.text;n+1<w&&"text"===e[n+1].type;)h+="\n"+((d=e[++n]).tokens?this.parseInline(d.tokens):d.text);v+=t?this.renderer.paragraph(h):h;continue;default:var x='Token with "'+d.type+'" type was not found.';if(this.options.silent)return void console.error(x);throw new Error(x)}return v},t.parseInline=function(e,t){t=t||this.renderer;var n,i,r="",s=e.length;for(n=0;n<s;n++)switch((i=e[n]).type){case"escape":r+=t.text(i.text);break;case"html":r+=t.html(i.text);break;case"link":r+=t.link(i.href,i.title,this.parseInline(i.tokens,t));break;case"image":r+=t.image(i.href,i.title,i.text);break;case"strong":r+=t.strong(this.parseInline(i.tokens,t));break;case"em":r+=t.em(this.parseInline(i.tokens,t));break;case"codespan":r+=t.codespan(i.text);break;case"br":r+=t.br();break;case"del":r+=t.del(this.parseInline(i.tokens,t));break;case"text":r+=t.text(i.text);break;default:var o='Token with "'+i.type+'" type was not found.';if(this.options.silent)return void console.error(o);throw new Error(o)}return r},e}(),ce=R.merge,he=R.checkSanitizeDeprecation,de=R.escape,pe=o.getDefaults,ue=o.changeDefaults,fe=o.defaults;function me(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(n=t,t=null),t=ce({},me.defaults,t||{}),he(t),n){var i,r=t.highlight;try{i=Q.lex(e,t)}catch(e){return n(e)}var s=function(e){var s;if(!e)try{s=le.parse(i,t)}catch(t){e=t}return t.highlight=r,e?n(e):n(null,s)};if(!r||r.length<3)return s();if(delete t.highlight,!i.length)return s();var o=0;return me.walkTokens(i,(function(e){"code"===e.type&&(o++,setTimeout((function(){r(e.text,e.lang,(function(t,n){if(t)return s(t);null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),0===--o&&s()}))}),0))})),void(0===o&&s())}try{var a=Q.lex(e,t);return t.walkTokens&&me.walkTokens(a,t.walkTokens),le.parse(a,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+de(e.message+"",!0)+"</pre>";throw e}}return me.options=me.setOptions=function(e){return ce(me.defaults,e),ue(me.defaults),me},me.getDefaults=pe,me.defaults=fe,me.use=function(e){var t=ce({},e);if(e.renderer&&function(){var n=me.defaults.renderer||new ie,i=function(t){var i=n[t];n[t]=function(){for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];var a=e.renderer[t].apply(n,s);return!1===a&&(a=i.apply(n,s)),a}};for(var r in e.renderer)i(r);t.renderer=n}(),e.tokenizer&&function(){var n=me.defaults.tokenizer||new H,i=function(t){var i=n[t];n[t]=function(){for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];var a=e.tokenizer[t].apply(n,s);return!1===a&&(a=i.apply(n,s)),a}};for(var r in e.tokenizer)i(r);t.tokenizer=n}(),e.walkTokens){var n=me.defaults.walkTokens;t.walkTokens=function(t){e.walkTokens(t),n&&n(t)}}me.setOptions(t)},me.walkTokens=function(e,t){for(var n,i=r(e);!(n=i()).done;){var s=n.value;switch(t(s),s.type){case"table":for(var o,a=r(s.tokens.header);!(o=a()).done;){var l=o.value;me.walkTokens(l,t)}for(var c,h=r(s.tokens.cells);!(c=h()).done;)for(var d,p=r(c.value);!(d=p()).done;){var u=d.value;me.walkTokens(u,t)}break;case"list":me.walkTokens(s.items,t);break;default:s.tokens&&me.walkTokens(s.tokens,t)}}},me.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");t=ce({},me.defaults,t||{}),he(t);try{var n=Q.lexInline(e,t);return t.walkTokens&&me.walkTokens(n,t.walkTokens),le.parseInline(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+de(e.message+"",!0)+"</pre>";throw e}},me.Parser=le,me.parser=le.parse,me.Renderer=ie,me.TextRenderer=re,me.Lexer=Q,me.lexer=Q.lex,me.Tokenizer=H,me.Slugger=se,me.parse=me,me}));
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
const fl=new WeakMap,ml=_(e=>t=>{if(!(t instanceof T))throw new Error("unsafeHTML can only be used in text bindings");const n=fl.get(t);if(void 0!==n&&C(e)&&e===n.value&&t.value===n.fragment)return;const i=document.createElement("template");i.innerHTML=e;const r=document.importNode(i.content,!0);t.setValue(r),fl.set(t,{value:e,fragment:r})});class gl extends HTMLElement{static get version(){return"1.6.1"}}customElements.define("vaadin-lumo-styles",gl);const _l=document.createElement("template");_l.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(_l.content);const yl=document.createElement("template");yl.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(yl.content);const bl=document.createElement("template");bl.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(bl.content);const vl=document.createElement("template");vl.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n\n      /* RTL specific styles */\n\n      blockquote[dir="rtl"] {\n        border-left: none;\n        border-right: 2px solid var(--lumo-contrast-30pct);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(vl.content);const wl=ha`<dom-module id="lumo-tab" theme-for="vaadin-tab">
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
</dom-module>`;document.head.appendChild(wl.content);const xl=e=>class extends e{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),"theme"===e&&this._setTheme(n)}},kl=e=>class extends(xl(e)){static finalize(){super.finalize();const e=this.prototype._template,t=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,n=Object.getPrototypeOf(this.prototype)._template;n&&!t&&Array.from(n.content.querySelectorAll("style[include]")).forEach(t=>{this._includeStyle(t.getAttribute("include"),e)}),this._includeMatchingThemes(e)}static _includeMatchingThemes(e){const t=pn.prototype.modules;let n=!1;const i=this.is+"-default-theme";Object.keys(t).sort((e,t)=>{const n=0===e.indexOf("vaadin-"),i=0===t.indexOf("vaadin-"),r=["lumo-","material-"],s=r.filter(t=>0===e.indexOf(t)).length>0,o=r.filter(e=>0===t.indexOf(e)).length>0;return n!==i?n?-1:1:s!==o?s?-1:1:0}).forEach(r=>{if(r!==i){const i=t[r].getAttribute("theme-for");i&&i.split(" ").forEach(t=>{new RegExp("^"+t.split("*").join(".*")+"$").test(this.is)&&(n=!0,this._includeStyle(r,e))})}}),!n&&t[i]&&this._includeStyle(i,e)}static _includeStyle(e,t){if(t&&!t.content.querySelector(`style[include="${e}"]`)){const n=document.createElement("style");n.setAttribute("include",e),t.content.appendChild(n)}}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,Sl=e=>class extends e{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");null!==e&&(this.value=e),this.addEventListener("focus",e=>this._setFocused(!0),!0),this.addEventListener("blur",e=>this._setFocused(!1),!0),this.addEventListener("mousedown",e=>{this._setActive(this._mousedown=!0);const t=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)}),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("keyup",e=>this._onKeyup(e))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this._setFocused(!1)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){e?(this.selected=!1,this.setAttribute("aria-disabled","true"),this.blur()):this.removeAttribute("aria-disabled")}_setFocused(e){e?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"),this._setActive(!1))}_setActive(e){e?this.setAttribute("active",""):this.removeAttribute("active")}_onKeydown(e){/^( |SpaceBar|Enter)$/.test(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this._setActive(!0))}_onKeyup(e){this.hasAttribute("active")&&(this._setActive(!1),this.click())}}
/**
@license
Copyright (c) 2020 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/;class Cl{static detectScrollType(){const e=document.createElement("div");e.textContent="ABCD",e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e);let t="reverse";return e.scrollLeft>0?t="default":(e.scrollLeft=2,e.scrollLeft<2&&(t="negative")),document.body.removeChild(e),t}static getNormalizedScrollLeft(e,t,n){const{scrollLeft:i}=n;if("rtl"!==t||!e)return i;switch(e){case"negative":return n.scrollWidth-n.clientWidth+i;case"reverse":return n.scrollWidth-n.clientWidth-i}return i}static setNormalizedScrollLeft(e,t,n,i){if("rtl"===t&&e)switch(e){case"negative":n.scrollLeft=n.clientWidth-n.scrollWidth+i;break;case"reverse":n.scrollLeft=n.scrollWidth-n.clientWidth-i;break;default:n.scrollLeft=i}else n.scrollLeft=i}}const Al=[];let Pl;new MutationObserver((function(){const e=Tl();Al.forEach(t=>{El(t,e)})})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const El=function(e,t){t?e.setAttribute("dir",t):e.removeAttribute("dir")},Tl=function(){return document.documentElement.getAttribute("dir")},Ol=e=>class extends e{static get properties(){return{dir:{type:String,readOnly:!0}}}static finalize(){super.finalize(),Pl||(Pl=Cl.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),El(this,Tl()))}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),"dir"!==e)return;const i=n===Tl()&&-1===Al.indexOf(this),r=!n&&t&&-1===Al.indexOf(this),s=n!==Tl()&&t===Tl();i||r?(this.__subscribe(),El(this,Tl())):s&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}__subscribe(e=!0){e?-1===Al.indexOf(this)&&Al.push(this):Al.indexOf(this)>-1&&Al.splice(Al.indexOf(this),1)}__getNormalizedScrollLeft(e){return Cl.getNormalizedScrollLeft(Pl,this.getAttribute("dir")||"ltr",e)}__setNormalizedScrollLeft(e,t){return Cl.setNormalizedScrollLeft(Pl,this.getAttribute("dir")||"ltr",e,t)}},Nl=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Rl=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function zl(){function e(){return!0}return Fl(e)}function Il(){try{return!!Dl()||!!Ml()&&(Rl?!Ll():!zl())}catch(e){return!1}}function Dl(){return localStorage.getItem("vaadin.developmentmode.force")}function Ml(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Ll(){if(Rl){if(Object.keys(Rl).map(e=>Rl[e]).filter(e=>e.productionMode).length>0)return!0}return!1}function Fl(e,t){if("function"!=typeof e)return;const n=Nl.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const Bl=function(e,t){if(window.Vaadin.developmentMode)return Fl(e,t)};function Hl(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=Il());const $l=function(){if("function"==typeof Bl)return Bl(Hl)};let jl;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){$l&&$l()};const Ul=new Set,ql=e=>class extends(Ol(e)){static finalize(){super.finalize();const{is:e}=this;e&&!Ul.has(e)&&(window.Vaadin.registrations.push(this),Ul.add(e),window.Vaadin.developmentModeCallback&&(jl=yr.debounce(jl,Xn,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),vr(jl)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/;class Vl extends(ql(kl(Sl(da)))){static get template(){return ha`
    <slot></slot>
`}static get is(){return"vaadin-tab"}static get version(){return"3.2.0"}ready(){super.ready(),this.setAttribute("role","tab")}_onKeyup(e){const t=this.hasAttribute("active");if(super._onKeyup(e),t){const e=this.querySelector("a");e&&e.click()}}}customElements.define(Vl.is,Vl);const Wl=document.createElement("template");Wl.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEcAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMAAAADZa/6SsaGhlYQAADhQAAAAdAAAAJAbpA35obXR4AAAONAAAABAAAACspBAAAGxvY2EAAA5EAAAAWAAAAFh55IAsbWF4cAAADpwAAAAfAAAAIAFKAXBuYW1lAAAOvAAAATEAAAIuUUJZCHBvc3QAAA/wAAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAA4pmJ6QHx/DZfGbiZXwBFGGpUNzQi6P+vmacy3QJyORiYQKIANoULVXicY2BkYGAO+p8FJF8wAAHzVAZGBlSgDQBW9gNvAAAAeJxjYGBgYH4xNDAAzwQmjwAAAAAATgCaAOgBCgEsAU4BcAGaAcQB7gIaApwC6ASaBLwE1gTyBQ4FKgV6BdAF/gZEBmYGtgcYB5AIGAhSCGoI/glGCb4J2goECjwKggq4CvALUAuWC7x4nGNgZGBg0GZMYRBlAAEmIOYCQgaG/2A+AwAYlAG8AHicbZE9TsMwGIbf9A/RSggEYmHxAgtq+jN2ZGj3Dt3T1GlTOXHkuBW9AyfgEByCgTNwCA7BW/NJlVBtyd/jx+8XKwmAa3whwnFE6Ib1OBq44O6Pm6Qb4Rb5QbiNHh6FO/RD4S6eMRHu4RaaT4halzR3eBVu4Apvwk36d+EW+UO4jXt8Cnfov4W7WOBHuIen6MXsCtvPU1vWc73emcSdxIkW2tW5LdUoHp7kTJfaJV6v1PKg6v167H2mMmcLNbWl18ZYVTm71amPN95Xk8EgEx+ntoDBDgUs+siRspaoMef7rukNEriziXNuwS7Hmoe9wggxv+e55IzJMqQTeNYV00scuNbY8+YxrUfGfcaMZb/CNPQe04bT0lThbEuT0sfYhK6K/23Amf3Lx+H24hcj4GScAAAAeJxtjtlugzAQRbkJUEJIuu/7vqR8lGNPAcWx0YAb5e/LklR96EgenSufGY038PqKvf9rhgGG8BEgxA4ijBBjjAQTTLGLPezjAIc4wjFOcIoznOMCl7jCNW5wizvc4wGPeMIzXvCKN7zjAzN8eonQRWZSSaYmjvug6ase98hFltexMJmmVNmV2WBvdNgZUc+ujAWzXW3UDnu1w43asStHc8GpzAXX/py0jqTQZJTgkcxJLpaCF0lD32xNt+43tAsn29Dft02uDKS2cjGUNgsk26qK2lFthYoU27INPqmiDqg5goe0pqR5qSoqMdek/CUZFywL46rEsiImleqiqoMyt4baXlu/1GLdNFf5zbcNmdr1YUWCZe47o+zUmb/DoStbw3cVsef9ALjjiPQA) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n</custom-style>',document.head.appendChild(Wl.content);const Kl=document.createElement("template");Kl.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(Kl.content);const Yl=ha`<dom-module id="lumo-tabs" theme-for="vaadin-tabs">
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
</dom-module>`;document.head.appendChild(Yl.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const Gl=e=>class extends e{static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("click",e=>this._onClick(e)),this._observer=new eo(this,e=>{this._setItems(this._filterItems(Array.from(this.children)))})}_enhanceItems(e,t,n,i){if(!i&&e){this.setAttribute("aria-orientation",t||"vertical"),this.items.forEach(e=>{t?e.setAttribute("orientation",t):e.removeAttribute("orientation"),e.updateStyles()}),this._setFocusable(n);const i=e[n];e.forEach(e=>e.selected=e===i),i&&!i.disabled&&this._scrollToItem(n)}}get focused(){return this.getRootNode().activeElement}_filterItems(e){return e.filter(e=>e._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const t=this._filterItems(e.composedPath())[0];let n;t&&!t.disabled&&(n=this.items.indexOf(t))>=0&&(this.selected=n)}_searchKey(e,t){this._searchReset=yr.debounce(this._searchReset,Jn.after(500),()=>this._searchBuf=""),this._searchBuf+=t.toLowerCase();const n=1,i=e=>!(e.disabled||this._isItemHidden(e))&&0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf);this.items.some(e=>0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))||(this._searchBuf=t.toLowerCase());const r=1===this._searchBuf.length?e+1:e;return this._getAvailableIndex(r,n,i)}get _isRTL(){return!this._vertical&&"rtl"===this.getAttribute("dir")}_onKeydown(e){if(e.metaKey||e.ctrlKey)return;const t=e.key.replace(/^Arrow/,""),n=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(t)&&1===t.length){const e=this._searchKey(n,t);return void(e>=0&&this._focus(e))}const i=e=>!(e.disabled||this._isItemHidden(e));let r,s;const o=this._isRTL?-1:1;this._vertical&&"Up"===t||!this._vertical&&"Left"===t?(s=-o,r=n-o):this._vertical&&"Down"===t||!this._vertical&&"Right"===t?(s=o,r=n+o):"Home"===t?(s=1,r=0):"End"===t&&(s=-1,r=this.items.length-1),r=this._getAvailableIndex(r,s,i),r>=0&&(this._focus(r),e.preventDefault())}_getAvailableIndex(e,t,n){const i=this.items.length;for(let r=0;"number"==typeof e&&r<i;r++,e+=t||1){e<0?e=i-1:e>=i&&(e=0);if(n(this.items[e]))return e}return-1}_isItemHidden(e){return"none"===getComputedStyle(e).display}_setFocusable(e){e=this._getAvailableIndex(e,1,e=>!e.disabled);const t=this.items[e]||this.items[0];this.items.forEach(e=>e.tabIndex=e===t?0:-1)}_focus(e){const t=this.items[e];this.items.forEach(e=>e.focused=e===t),this._setFocusable(e),this._scrollToItem(e),t.focus()}focus(){this._observer&&this._observer.flush();const e=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);e&&e.focus()}get _scrollerElement(){}_scrollToItem(e){const t=this.items[e];if(!t)return;const n=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],i=this._scrollerElement.getBoundingClientRect(),r=(this.items[e+1]||t).getBoundingClientRect(),s=(this.items[e-1]||t).getBoundingClientRect();let o=0;!this._isRTL&&r[n[1]]>=i[n[1]]||this._isRTL&&r[n[1]]<=i[n[1]]?o=r[n[1]]-i[n[1]]:(!this._isRTL&&s[n[0]]<=i[n[0]]||this._isRTL&&s[n[0]]>=i[n[0]])&&(o=s[n[0]]-i[n[0]]),this._scroll(o)}get _vertical(){return"horizontal"!==this.orientation}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{const t=Cl.detectScrollType(),n=Cl.getNormalizedScrollLeft(t,this.getAttribute("dir")||"ltr",this._scrollerElement)+e;Cl.setNormalizedScrollLeft(t,this.getAttribute("dir")||"ltr",this._scrollerElement,n)}}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,Jl=/Apple.* Version\/(9|10)/.test(navigator.userAgent);class Zl extends(ql(Gl(kl(Ao([Ca],da))))){static get template(){return ha`
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
`}static get is(){return"vaadin-tabs"}static get version(){return"3.2.0"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["_updateOverflow(items.*, vertical)"]}ready(){super.ready(),this.addEventListener("iron-resize",()=>this._updateOverflow()),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),Bs(this,()=>{this._updateOverflow()})}_scrollForward(){this._scroll(-this.__direction*this._scrollOffset)}_scrollBack(){this._scroll(this.__direction*this._scrollOffset)}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return this._vertical||"rtl"!==this.getAttribute("dir")?-1:1}_updateOverflow(){const e=this._vertical?this._scrollerElement.scrollTop:this.__getNormalizedScrollLeft(this._scrollerElement);let t=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;t-=1;let n=e>0?"start":"";n+=e+this._scrollOffset<t?" end":"",1==this.__direction&&(n=n.replace(/start|end/gi,e=>"start"===e?"end":"start")),n?this.setAttribute("overflow",n.trim()):this.removeAttribute("overflow"),this._repaintShadowNodesHack()}_repaintShadowNodesHack(){if(Jl&&this.root){const e="-webkit-backface-visibility";this.root.querySelectorAll("*").forEach(t=>{t.style[e]="visible",t.style[e]=""})}}}customElements.define(Zl.is,Zl),
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
Io({_template:ha`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,is:"app-header-layout",behaviors:[Aa],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return po(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var e=this.header;if(this.isAttached&&e){this.$.wrapper.classList.remove("initializing"),e.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var t=e.offsetHeight;this.hasScrollingRegion?(e.style.left="",e.style.right=""):requestAnimationFrame(function(){var t=this.getBoundingClientRect(),n=document.documentElement.clientWidth-t.right;e.style.left=t.left+"px",e.style.right=n+"px"}.bind(this));var n=this.$.contentContainer.style;e.fixed&&!e.condenses&&this.hasScrollingRegion?(n.marginTop=t+"px",n.paddingTop=""):(n.paddingTop=t+"px",n.marginTop="")}}});
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Xl={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(e,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),t)if("document"===e)this.scrollTarget=this._doc;else if("string"==typeof e){var n=this.domHost;this.scrollTarget=n&&n.$?n.$[e]:po(this.ownerDocument).querySelector("#"+e)}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e)},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e)},scroll:function(e,t){var n;"object"==typeof e?(n=e.left,t=e.top):n=e,n=n||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(n,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=n,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var n=t===this._doc?window:t;e?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),n.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(n.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget)}},Ql={},ec=[Xl,{properties:{effects:{type:String},effectsConfig:{type:Object,value:function(){return{}}},disabled:{type:Boolean,reflectToAttribute:!0,value:!1},threshold:{type:Number,value:0},thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:["_effectsChanged(effects, effectsConfig, isAttached)"],_updateScrollState:function(e){},isOnScreen:function(){return!1},isContentBelow:function(){return!1},_effectsRunFn:null,_effects:null,get _clampedScrollTop(){return Math.max(0,this._scrollTop)},attached:function(){this._scrollStateChanged()},detached:function(){this._tearDownEffects()},createEffect:function(e,t){var n=Ql[e];if(!n)throw new ReferenceError(this._getUndefinedMsg(e));var i=this._boundEffect(n,t||{});return i.setUp(),i},_effectsChanged:function(e,t,n){this._tearDownEffects(),e&&n&&(e.split(" ").forEach((function(e){var n;""!==e&&((n=Ql[e])?this._effects.push(this._boundEffect(n,t[e])):console.warn(this._getUndefinedMsg(e)))}),this),this._setUpEffect())},_layoutIfDirty:function(){return this.offsetWidth},_boundEffect:function(e,t){t=t||{};var n=parseFloat(t.startsAt||0),i=parseFloat(t.endsAt||1),r=i-n,s=function(){},o=0===n&&1===i?e.run:function(t,i){e.run.call(this,Math.max(0,(t-n)/r),i)};return{setUp:e.setUp?e.setUp.bind(this,t):s,run:e.run?o.bind(this):s,tearDown:e.tearDown?e.tearDown.bind(this):s}},_setUpEffect:function(){this.isAttached&&this._effects&&(this._effectsRunFn=[],this._effects.forEach((function(e){!1!==e.setUp()&&this._effectsRunFn.push(e.run)}),this))},_tearDownEffects:function(){this._effects&&this._effects.forEach((function(e){e.tearDown()})),this._effectsRunFn=[],this._effects=[]},_runEffects:function(e,t){this._effectsRunFn&&this._effectsRunFn.forEach((function(n){n(e,t)}))},_scrollHandler:function(){this._scrollStateChanged()},_scrollStateChanged:function(){if(!this.disabled){var e=this._clampedScrollTop;this._updateScrollState(e),this.threshold>0&&this._setThresholdTriggered(e>=this.threshold)}},_getDOMRef:function(e){console.warn("_getDOMRef","`"+e+"` is undefined")},_getUndefinedMsg:function(e){return"Scroll effect `"+e+"` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/"+e+".html ?"}}];
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
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
Io({_template:ha`
    <style>
      :host {
        position: relative;
        display: block;
        transition-timing-function: linear;
        transition-property: -webkit-transform;
        transition-property: transform;
      }

      :host::before {
        position: absolute;
        right: 0px;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: "";
        transition: opacity 0.4s;
        pointer-events: none;
        opacity: 0;
        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        will-change: opacity;
        @apply --app-header-shadow;
      }

      :host([shadow])::before {
        opacity: 1;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
      }

      #backgroundFrontLayer,
      #backgroundRearLayer {
        @apply --layout-fit;
        height: 100%;
        pointer-events: none;
        background-size: cover;
      }

      #backgroundFrontLayer {
        @apply --app-header-background-front-layer;
      }

      #backgroundRearLayer {
        opacity: 0;
        @apply --app-header-background-rear-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled])::after,
      :host([disabled]) #backgroundFrontLayer,
      :host([disabled]) #backgroundRearLayer,
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]),
      :host([silent-scroll])::after,
      :host([silent-scroll]) #backgroundFrontLayer,
      :host([silent-scroll]) #backgroundRearLayer {
        transition: none !important;
      }

      :host([disabled]) ::slotted(app-toolbar:first-of-type),
      :host([disabled]) ::slotted([sticky]),
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),
      :host([silent-scroll]) ::slotted([sticky]) {
        transition: none !important;
      }

    </style>
    <div id="contentContainer">
      <slot id="slot"></slot>
    </div>
`,is:"app-header",behaviors:[ec,Aa],properties:{condenses:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1},reveals:{type:Boolean,value:!1},shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:["_configChanged(isAttached, condenses, fixed)"],_height:0,_dHeight:0,_stickyElTop:0,_stickyElRef:null,_top:0,_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},get _stickyEl(){if(this._stickyElRef)return this._stickyElRef;for(var e,t=po(this.$.slot).getDistributedNodes(),n=0;e=t[n];n++)if(e.nodeType===Node.ELEMENT_NODE){if(e.hasAttribute("sticky")){this._stickyElRef=e;break}this._stickyElRef||(this._stickyElRef=e)}return this._stickyElRef},_configChanged:function(){this.resetLayout(),this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0!==this.offsetWidth||0!==this.offsetHeight){var e=this._clampedScrollTop,t=0===this._height||0===e,n=this.disabled;this._height=this.offsetHeight,this._stickyElRef=null,this.disabled=!0,t||this._updateScrollState(0,!0),this._mayMove()?this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0:this._dHeight=0,this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0,this._setUpEffect(),t?this._updateScrollState(e,!0):(this._updateScrollState(this._lastScrollTop,!0),this._layoutIfDirty()),this.disabled=n}},_updateScrollState:function(e,t){if(0!==this._height){var n=0,i=0,r=this._top,s=(this._lastScrollTop,this._maxHeaderTop),o=e-this._lastScrollTop,a=Math.abs(o),l=e>this._lastScrollTop,c=performance.now();if(this._mayMove()&&(i=this._clamp(this.reveals?r+o:e,0,s)),e>=this._dHeight&&(i=this.condenses&&!this.fixed?Math.max(this._dHeight,i):i,this.style.transitionDuration="0ms"),this.reveals&&!this.disabled&&a<100&&((c-this._initTimestamp>300||this._wasScrollingDown!==l)&&(this._initScrollTop=e,this._initTimestamp=c),e>=s))if(Math.abs(this._initScrollTop-e)>30||a>10){l&&e>=s?i=s:!l&&e>=this._dHeight&&(i=this.condenses&&!this.fixed?this._dHeight:0);var h=o/(c-this._lastTimestamp);this.style.transitionDuration=this._clamp((i-r)/h,0,300)+"ms"}else i=this._top;n=0===this._dHeight?e>0?1:0:i/this._dHeight,t||(this._lastScrollTop=e,this._top=i,this._wasScrollingDown=l,this._lastTimestamp=c),(t||n!==this._progress||r!==i||0===e)&&(this._progress=n,this._runEffects(n,i),this._transformHeader(i))}},_mayMove:function(){return this.condenses||!this.fixed},willCondense:function(){return this._dHeight>0&&this.condenses},isOnScreen:function(){return 0!==this._height&&this._top<this._height},isContentBelow:function(){return 0===this._top?this._clampedScrollTop>0:this._clampedScrollTop-this._maxHeaderTop>=0},_transformHeader:function(e){this.translate3d(0,-e+"px",0),this._stickyEl&&this.translate3d(0,this.condenses&&e>=this._stickyElTop?Math.min(e,this._dHeight)-this._stickyElTop+"px":0,0,this._stickyEl)},_clamp:function(e,t,n){return Math.min(n,Math.max(t,e))},_ensureBgContainers:function(){this._bgContainer||(this._bgContainer=document.createElement("div"),this._bgContainer.id="background",this._bgRear=document.createElement("div"),this._bgRear.id="backgroundRearLayer",this._bgContainer.appendChild(this._bgRear),this._bgFront=document.createElement("div"),this._bgFront.id="backgroundFrontLayer",this._bgContainer.appendChild(this._bgFront),po(this.root).insertBefore(this._bgContainer,this.$.contentContainer))},_getDOMRef:function(e){switch(e){case"backgroundFrontLayer":return this._ensureBgContainers(),this._bgFront;case"backgroundRearLayer":return this._ensureBgContainers(),this._bgRear;case"background":return this._ensureBgContainers(),this._bgContainer;case"mainTitle":return po(this).querySelector("[main-title]");case"condensedTitle":return po(this).querySelector("[condensed-title]")}return null},getScrollState:function(){return{progress:this._progress,top:this._top}}}),
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
Io({_template:ha`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`,is:"app-toolbar"});var tc=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,i={},r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof s?new s(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var i,s;switch(n=n||{},r.util.type(t)){case"Object":if(s=r.util.objId(t),n[s])return n[s];for(var o in i={},n[s]=i,t)t.hasOwnProperty(o)&&(i[o]=e(t[o],n));return i;case"Array":return s=r.util.objId(t),n[s]?n[s]:(i=[],n[s]=i,t.forEach((function(t,r){i[r]=e(t,n)})),i);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(i){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(i.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var i="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(i))return!1;e=e.parentElement}return!!n}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var i in t)n[i]=t[i];return n},insertBefore:function(e,t,n,i){var s=(i=i||r.languages)[e],o={};for(var a in s)if(s.hasOwnProperty(a)){if(a==t)for(var l in n)n.hasOwnProperty(l)&&(o[l]=n[l]);n.hasOwnProperty(a)||(o[a]=s[a])}var c=i[e];return i[e]=o,r.languages.DFS(r.languages,(function(t,n){n===c&&t!=e&&(this[t]=o)})),o},DFS:function e(t,n,i,s){s=s||{};var o=r.util.objId;for(var a in t)if(t.hasOwnProperty(a)){n.call(t,a,t[a],i||a);var l=t[a],c=r.util.type(l);"Object"!==c||s[o(l)]?"Array"!==c||s[o(l)]||(s[o(l)]=!0,e(l,n,a,s)):(s[o(l)]=!0,e(l,n,null,s))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var i={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),r.hooks.run("before-all-elements-highlight",i);for(var s,o=0;s=i.elements[o++];)r.highlightElement(s,!0===t,i.callback)},highlightElement:function(n,i,s){var o=r.util.getLanguage(n),a=r.languages[o];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+o;var l=n.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+o);var c={element:n,language:o,grammar:a,code:n.textContent};function h(e){c.highlightedCode=e,r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r.hooks.run("after-highlight",c),r.hooks.run("complete",c),s&&s.call(c.element)}if(r.hooks.run("before-sanity-check",c),(l=c.element.parentElement)&&"pre"===l.nodeName.toLowerCase()&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!c.code)return r.hooks.run("complete",c),void(s&&s.call(c.element));if(r.hooks.run("before-highlight",c),c.grammar)if(i&&e.Worker){var d=new Worker(r.filename);d.onmessage=function(e){h(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else h(r.highlight(c.code,c.grammar,c.language));else h(r.util.encode(c.code))},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return r.hooks.run("before-tokenize",i),i.tokens=r.tokenize(i.code,i.grammar),r.hooks.run("after-tokenize",i),s.stringify(r.util.encode(i.tokens),i.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var i in n)t[i]=n[i];delete t.rest}var r=new l;return c(r,r.head,e),a(e,r,t,r.head,0),d(r)},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var i,s=0;i=n[s++];)i(t)}},Token:s};function s(e,t,n,i){this.type=e,this.content=t,this.alias=n,this.length=0|(i||"").length}function o(e,t,n,i){e.lastIndex=t;var r=e.exec(n);if(r&&i&&r[1]){var s=r[1].length;r.index+=s,r[0]=r[0].slice(s)}return r}function a(e,t,n,i,l,d){for(var p in n)if(n.hasOwnProperty(p)&&n[p]){var u=n[p];u=Array.isArray(u)?u:[u];for(var f=0;f<u.length;++f){if(d&&d.cause==p+","+f)return;var m=u[f],g=m.inside,_=!!m.lookbehind,y=!!m.greedy,b=m.alias;if(y&&!m.pattern.global){var v=m.pattern.toString().match(/[imsuy]*$/)[0];m.pattern=RegExp(m.pattern.source,v+"g")}for(var w=m.pattern||m,x=i.next,k=l;x!==t.tail&&!(d&&k>=d.reach);k+=x.value.length,x=x.next){var S=x.value;if(t.length>e.length)return;if(!(S instanceof s)){var C,A=1;if(y){if(!(C=o(w,k,e,_)))break;var P=C.index,E=C.index+C[0].length,T=k;for(T+=x.value.length;P>=T;)T+=(x=x.next).value.length;if(k=T-=x.value.length,x.value instanceof s)continue;for(var O=x;O!==t.tail&&(T<E||"string"==typeof O.value);O=O.next)A++,T+=O.value.length;A--,S=e.slice(k,T),C.index-=k}else if(!(C=o(w,0,S,_)))continue;P=C.index;var N=C[0],R=S.slice(0,P),z=S.slice(P+N.length),I=k+S.length;d&&I>d.reach&&(d.reach=I);var D=x.prev;if(R&&(D=c(t,D,R),k+=R.length),h(t,D,A),x=c(t,D,new s(p,g?r.tokenize(N,g):N,b,N)),z&&c(t,x,z),A>1){var M={cause:p+","+f,reach:I};a(e,t,n,x.prev,k,M),d&&M.reach>d.reach&&(d.reach=M.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function c(e,t,n){var i=t.next,r={value:n,prev:t,next:i};return t.next=r,i.prev=r,e.length++,r}function h(e,t,n){for(var i=t.next,r=0;r<n&&i!==e.tail;r++)i=i.next;t.next=i,i.prev=t,e.length-=r}function d(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}if(e.Prism=r,s.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var i="";return t.forEach((function(t){i+=e(t,n)})),i}var s={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(s.classes,o):s.classes.push(o)),r.hooks.run("wrap",s);var a="";for(var l in s.attributes)a+=" "+l+'="'+(s.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+a+">"+s.content+"</"+s.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),i=n.language,s=n.code,o=n.immediateClose;e.postMessage(r.highlight(s,r.languages[i],i)),o&&e.close()}),!1),r):r;var p=r.util.currentScript();function u(){r.manual||r.highlightAll()}if(p&&(r.filename=p.src,p.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var f=document.readyState;"loading"===f||"interactive"===f&&p&&p.defer?document.addEventListener("DOMContentLoaded",u):window.requestAnimationFrame?window.requestAnimationFrame(u):window.setTimeout(u,16)}return r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */function nc(e){const t=document.querySelector("script[src*=pb-components]");return t?new URL(e,t.src).href:new URL(e,window.location.href).href}function ic(e,t,n){const i=getComputedStyle(e).getPropertyValue(t);if(i)try{return JSON.parse(i)}catch(e){return n}return n}"undefined"!=typeof module&&module.exports&&(module.exports=tc),"undefined"!=typeof global&&(global.Prism=tc),tc.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?\]\]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},tc.languages.markup.tag.inside["attr-value"].inside.entity=tc.languages.markup.entity,tc.languages.markup.doctype.inside["internal-subset"].inside=tc.languages.markup,tc.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(tc.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:tc.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};i["language-"+t]={pattern:/[\s\S]+/,inside:tc.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:i},tc.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(tc.languages.markup.tag,"addAttribute",{value:function(e,t){tc.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:tc.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),tc.languages.html=tc.languages.markup,tc.languages.mathml=tc.languages.markup,tc.languages.svg=tc.languages.markup,tc.languages.xml=tc.languages.extend("markup",{}),tc.languages.ssml=tc.languages.xml,tc.languages.atom=tc.languages.xml,tc.languages.rss=tc.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(tc),tc.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},tc.languages.javascript=tc.languages.extend("clike",{"class-name":[tc.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),tc.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,tc.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:tc.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:tc.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:tc.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:tc.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:tc.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),tc.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:tc.languages.javascript}},string:/[\s\S]+/}}}),tc.languages.markup&&(tc.languages.markup.tag.addInlined("script","javascript"),tc.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),tc.languages.js=tc.languages.javascript,function(){if(void 0!==tc&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e="Loading…",t=function(e,t){return"✖ Error "+e+" while fetching file: "+t},n="✖ Error: File does not exist or is empty",i={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},r="data-src-status",s="loading",o="loaded",a="failed",l="pre[data-src]:not(["+r+'="'+o+'"]):not(['+r+'="'+s+'"])',c=/\blang(?:uage)?-([\w-]+)\b/i;tc.hooks.add("before-highlightall",(function(e){e.selector+=", "+l})),tc.hooks.add("before-sanity-check",(function(c){var h=c.element;if(h.matches(l)){c.code="",h.setAttribute(r,s);var p=h.appendChild(document.createElement("CODE"));p.textContent=e;var u=h.getAttribute("data-src"),f=c.language;if("none"===f){var m=(/\.(\w+)$/.exec(u)||[,"none"])[1];f=i[m]||m}d(p,f),d(h,f);var g=tc.plugins.autoloader;g&&g.loadLanguages(f);var _=new XMLHttpRequest;_.open("GET",u,!0),_.onreadystatechange=function(){4==_.readyState&&(_.status<400&&_.responseText?(h.setAttribute(r,o),p.textContent=_.responseText,tc.highlightElement(p)):(h.setAttribute(r,a),_.status>=400?p.textContent=t(_.status,_.statusText):p.textContent=n))},_.send(null)}})),tc.plugins.fileHighlight={highlight:function(e){for(var t,n=(e||document).querySelectorAll(l),i=0;t=n[i++];)tc.highlightElement(t)}};var h=!1;tc.fileHighlight=function(){h||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),h=!0),tc.plugins.fileHighlight.highlight.apply(this,arguments)}}function d(e,t){var n=e.className;n=n.replace(c," ")+" language-"+t,e.className=n.replace(/\s+/g," ").trim()}}(),function(e){e.languages.xquery=e.languages.extend("markup",{"xquery-comment":{pattern:/\(:[\s\S]*?:\)/,greedy:!0,alias:"comment"},string:{pattern:/(["'])(?:\1\1|(?!\1)[\s\S])*\1/,greedy:!0},extension:{pattern:/\(#.+?#\)/,alias:"symbol"},variable:/\$[-\w:]+/,axis:{pattern:/(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,lookbehind:!0,alias:"operator"},"keyword-operator":{pattern:/(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,lookbehind:!0,alias:"operator"},keyword:{pattern:/(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,lookbehind:!0},function:/[\w-]+(?::[\w-]+)*(?=\s*\()/,"xquery-element":{pattern:/(element\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"tag"},"xquery-attribute":{pattern:/(attribute\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"attr-name"},builtin:{pattern:/(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|ENTITIES|ENTITY|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|ID|IDREFS?|int|integer|language|long|Name|NCName|negativeInteger|NMTOKENS?|nonNegativeInteger|nonPositiveInteger|normalizedString|NOTATION|positiveInteger|QName|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,lookbehind:!0},number:/\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,operator:[/[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}],punctuation:/[[\](){},;:/]/}),e.languages.xquery.tag.pattern=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,e.languages.xquery.tag.inside["attr-value"].pattern=/=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+)/i,e.languages.xquery.tag.inside["attr-value"].inside.punctuation=/^="|"$/,e.languages.xquery.tag.inside["attr-value"].inside.expression={pattern:/\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}/,inside:e.languages.xquery,alias:"language-xquery"};var t=function(e){return"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(t).join("")},n=function(i){for(var r=[],s=0;s<i.length;s++){var o=i[s],a=!1;if("string"!=typeof o&&("tag"===o.type&&o.content[0]&&"tag"===o.content[0].type?"</"===o.content[0].content[0].content?r.length>0&&r[r.length-1].tagName===t(o.content[0].content[1])&&r.pop():"/>"===o.content[o.content.length-1].content||r.push({tagName:t(o.content[0].content[1]),openedBraces:0}):!(r.length>0&&"punctuation"===o.type&&"{"===o.content)||i[s+1]&&"punctuation"===i[s+1].type&&"{"===i[s+1].content||i[s-1]&&"plain-text"===i[s-1].type&&"{"===i[s-1].content?r.length>0&&r[r.length-1].openedBraces>0&&"punctuation"===o.type&&"}"===o.content?r[r.length-1].openedBraces--:"comment"!==o.type&&(a=!0):r[r.length-1].openedBraces++),(a||"string"==typeof o)&&r.length>0&&0===r[r.length-1].openedBraces){var l=t(o);s<i.length-1&&("string"==typeof i[s+1]||"plain-text"===i[s+1].type)&&(l+=t(i[s+1]),i.splice(s+1,1)),s>0&&("string"==typeof i[s-1]||"plain-text"===i[s-1].type)&&(l=t(i[s-1])+l,i.splice(s-1,1),s--),/^\s+$/.test(l)?i[s]=l:i[s]=new e.Token("plain-text",l,null,l)}o.content&&"string"!=typeof o.content&&n(o.content)}};e.hooks.add("after-tokenize",(function(e){"xquery"===e.language&&n(e.tokens)}))}(Prism),function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e=Object.assign||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e};t.prototype={setDefaults:function(t){this.defaults=e(this.defaults,t)},normalize:function(t,i){for(var r in i=e(this.defaults,i)){var s=n(r);"normalize"!==r&&"setDefaults"!==s&&i[r]&&this[s]&&(t=this[s].call(this,t,i[r]))}return t},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,t){return t=0|t||4,e.replace(/\t/g,new Array(++t).join(" "))},spacesToTabs:function(e,t){return t=0|t||4,e.replace(RegExp(" {"+t+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var t=e.match(/^[^\S\n\r]*(?=\S)/gm);return t&&t[0].length?(t.sort((function(e,t){return e.length-t.length})),t[0].length?e.replace(RegExp("^"+t[0],"gm"),""):e):e},indent:function(e,t){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++t).join("\t")+"$&")},breakLines:function(e,t){t=!0===t?80:0|t||80;for(var n=e.split("\n"),r=0;r<n.length;++r)if(!(i(n[r])<=t)){for(var s=n[r].split(/(\s+)/g),o=0,a=0;a<s.length;++a){var l=i(s[a]);(o+=l)>t&&(s[a]="\n"+s[a],o=l)}n[r]=s.join("")}return n.join("\n")}},"undefined"!=typeof module&&module.exports&&(module.exports=t),"undefined"!=typeof Prism&&(Prism.plugins.NormalizeWhitespace=new t({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",(function(e){var t=Prism.plugins.NormalizeWhitespace;if((!e.settings||!1!==e.settings["whitespace-normalization"])&&Prism.util.isActive(e.element,"whitespace-normalization",!0))if(e.element&&e.element.parentNode||!e.code){var n=e.element.parentNode;if(e.code&&n&&"pre"===n.nodeName.toLowerCase()){for(var i=n.childNodes,r="",s="",o=!1,a=0;a<i.length;++a){var l=i[a];l==e.element?o=!0:"#text"===l.nodeName&&(o?s+=l.nodeValue:r+=l.nodeValue,n.removeChild(l),--a)}if(e.element.children.length&&Prism.plugins.KeepMarkup){var c=r+e.element.innerHTML+s;e.element.innerHTML=t.normalize(c,e.settings),e.code=e.element.textContent}else e.code=r+e.code+s,e.code=t.normalize(e.code,e.settings)}}else e.code=t.normalize(e.code,e.settings)})))}function t(t){this.defaults=e({},t)}function n(e){return e.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}))}function i(e){for(var t=0,n=0;n<e.length;++n)e.charCodeAt(n)=="\t".charCodeAt(0)&&(t+=3);return e.length+t}}(),function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e="line-numbers",t=/\n(?!$)/g,n=Prism.plugins.lineNumbers={getLine:function(t,n){if("PRE"===t.tagName&&t.classList.contains(e)){var i=t.querySelector(".line-numbers-rows");if(i){var r=parseInt(t.getAttribute("data-start"),10)||1,s=r+(i.children.length-1);n<r&&(n=r),n>s&&(n=s);var o=n-r;return i.children[o]}}},resize:function(e){r([e])},assumeViewportIndependence:!0},i=void 0;window.addEventListener("resize",(function(){n.assumeViewportIndependence&&i===window.innerWidth||(i=window.innerWidth,r(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))})),Prism.hooks.add("complete",(function(n){if(n.code){var i=n.element,s=i.parentNode;if(s&&/pre/i.test(s.nodeName)&&!i.querySelector(".line-numbers-rows")&&Prism.util.isActive(i,e)){i.classList.remove(e),s.classList.add(e);var o,a=n.code.match(t),l=a?a.length+1:1,c=new Array(l+1).join("<span></span>");(o=document.createElement("span")).setAttribute("aria-hidden","true"),o.className="line-numbers-rows",o.innerHTML=c,s.hasAttribute("data-start")&&(s.style.counterReset="linenumber "+(parseInt(s.getAttribute("data-start"),10)-1)),n.element.appendChild(o),r([s]),Prism.hooks.run("line-numbers",n)}}})),Prism.hooks.add("line-numbers",(function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}))}function r(e){if(0!=(e=e.filter((function(e){var t=s(e)["white-space"];return"pre-wrap"===t||"pre-line"===t}))).length){var n=e.map((function(e){var n=e.querySelector("code"),i=e.querySelector(".line-numbers-rows");if(n&&i){var r=e.querySelector(".line-numbers-sizer"),s=n.textContent.split(t);r||((r=document.createElement("span")).className="line-numbers-sizer",n.appendChild(r)),r.innerHTML="0",r.style.display="block";var o=r.getBoundingClientRect().height;return r.innerHTML="",{element:e,lines:s,lineHeights:[],oneLinerHeight:o,sizer:r}}})).filter(Boolean);n.forEach((function(e){var t=e.sizer,n=e.lines,i=e.lineHeights,r=e.oneLinerHeight;i[n.length-1]=void 0,n.forEach((function(e,n){if(e&&e.length>1){var s=t.appendChild(document.createElement("span"));s.style.display="block",s.textContent=e}else i[n]=r}))})),n.forEach((function(e){for(var t=e.sizer,n=e.lineHeights,i=0,r=0;r<n.length;r++)void 0===n[r]&&(n[r]=t.children[i++].getBoundingClientRect().height)})),n.forEach((function(e){var t=e.sizer,n=e.element.querySelector(".line-numbers-rows");t.style.display="none",t.innerHTML="",e.lineHeights.forEach((function(e,t){n.children[t].style.height=e+"px"}))}))}}function s(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null}}(),window.TeiPublisher||(window.TeiPublisher={},TeiPublisher.url=new URL(window.location.href));const rc=new Map;function sc(e,t){rc.has(e)?t(rc.get(e)):document.addEventListener(e,n=>{rc.set(e,n.detail),t(n.detail)},{once:!0})}!function(){if("undefined"!=typeof document&&!("adoptedStyleSheets"in document)){var e="ShadyCSS"in window&&!ShadyCSS.nativeShadow,t=document.implementation.createHTMLDocument(""),n=new WeakMap,i="object"==typeof DOMException?Error:DOMException,r=Object.defineProperty,s=Array.prototype.forEach,o=/@import.+?;?$/gm,a=["addRule","deleteRule","insertRule","removeRule"],l=CSSStyleSheet.prototype;l.replace=function(){return Promise.reject(new i("Can't call replace on non-constructed CSSStyleSheets."))},l.replaceSync=function(){throw new i("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};var c=new WeakMap,h=new WeakMap,d=new WeakMap,p=new WeakMap,u=D.prototype;u.replace=function(e){try{return this.replaceSync(e),Promise.resolve(this)}catch(e){return Promise.reject(e)}},u.replaceSync=function(e){if(I(this),"string"==typeof e){var t=this;c.get(t).textContent=x(e),p.set(t,[]),h.get(t).forEach((function(e){e.isConnected()&&z(t,N(t,e))}))}},r(u,"cssRules",{configurable:!0,enumerable:!0,get:function(){return I(this),c.get(this).sheet.cssRules}}),r(u,"media",{configurable:!0,enumerable:!0,get:function(){return I(this),c.get(this).sheet.media}}),a.forEach((function(e){u[e]=function(){var t=this;I(t);var n=arguments;p.get(t).push({method:e,args:n}),h.get(t).forEach((function(i){if(i.isConnected()){var r=N(t,i).sheet;r[e].apply(r,n)}}));var i=c.get(t).sheet;return i[e].apply(i,n)}})),r(D,Symbol.hasInstance,{configurable:!0,value:E});var f={childList:!0,subtree:!0},m=new WeakMap,g=new WeakMap,_=new WeakMap,y=new WeakMap;if(j.prototype={isConnected:function(){var e=g.get(this);return e instanceof Document?"loading"!==e.readyState:k(e.host)},connect:function(){var e=H(this);y.get(this).observe(e,f),_.get(this).length>0&&$(this),F(e,(function(e){M(e).connect()}))},disconnect:function(){y.get(this).disconnect()},update:function(e){var t=this,n=g.get(t)===document?"Document":"ShadowRoot";if(!Array.isArray(e))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Iterator getter is not callable.");if(!e.every(E))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Failed to convert value to 'CSSStyleSheet'");if(e.some(T))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Can't adopt non-constructed stylesheets");t.sheets=e;var i=_.get(t),r=S(e);C(i,r).forEach((function(e){A(N(e,t)),R(e,t)})),_.set(t,r),t.isConnected()&&r.length>0&&$(t)}},window.CSSStyleSheet=D,L(Document),"ShadowRoot"in window){L(ShadowRoot);var b=Element.prototype,v=b.attachShadow;b.attachShadow=function(e){var t=v.call(this,e);return"closed"===e.mode&&n.set(this,t),t}}var w=M(document);w.isConnected()?w.connect():document.addEventListener("DOMContentLoaded",w.connect.bind(w))}function x(e){var t=e.replace(o,"");return t!==e&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),t.trim()}function k(e){return"isConnected"in e?e.isConnected:document.contains(e)}function S(e){return e.filter((function(t,n){return e.indexOf(t)===n}))}function C(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}function A(e){e.parentNode.removeChild(e)}function P(e){return e.shadowRoot||n.get(e)}function E(e){return"object"==typeof e&&(u.isPrototypeOf(e)||l.isPrototypeOf(e))}function T(e){return"object"==typeof e&&l.isPrototypeOf(e)}function O(e,t){var n=document.createElement("style");return d.get(e).set(t,n),h.get(e).push(t),n}function N(e,t){return d.get(e).get(t)}function R(e,t){d.get(e).delete(t),h.set(e,h.get(e).filter((function(e){return e!==t})))}function z(e,t){requestAnimationFrame((function(){t.textContent=c.get(e).textContent,p.get(e).forEach((function(e){return t.sheet[e.method].apply(t.sheet,e.args)}))}))}function I(e){if(!c.has(e))throw new TypeError("Illegal invocation")}function D(){var e=this,n=document.createElement("style");t.body.appendChild(n),c.set(e,n),h.set(e,[]),d.set(e,new WeakMap),p.set(e,[])}function M(e){var t=m.get(e);return t||(t=new j(e),m.set(e,t)),t}function L(e){r(e.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return M(this).sheets},set:function(e){M(this).update(e)}})}function F(e,t){for(var n=document.createNodeIterator(e,NodeFilter.SHOW_ELEMENT,(function(e){return P(e)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}),null,!1),i=void 0;i=n.nextNode();)t(P(i))}function B(e,t){return t instanceof HTMLStyleElement&&_.get(e).some((function(t){return N(t,e)}))}function H(e){var t=g.get(e);return t instanceof Document?t.body:t}function $(e){var t=document.createDocumentFragment(),n=_.get(e),i=y.get(e),r=H(e);i.disconnect(),n.forEach((function(n){t.appendChild(N(n,e)||O(n,e))})),r.insertBefore(t,null),i.observe(r,f),n.forEach((function(t){z(t,N(t,e))}))}function j(t){var n=this;n.sheets=[],g.set(n,t),_.set(n,[]),y.set(n,new MutationObserver((function(t,i){document?t.forEach((function(t){e||s.call(t.addedNodes,(function(e){e instanceof Element&&F(e,(function(e){M(e).connect()}))})),s.call(t.removedNodes,(function(t){t instanceof Element&&(B(n,t)&&$(n),e||F(t,(function(e){M(e).disconnect()})))}))})):i.disconnect()})))}}();const oc=new Map;function ac(e){const t=document.querySelector("pb-page");if(!t)return null;const n=t.stylesheet;if(!n)return null;const i=cc(e).join("|");if(oc.has(i))return oc.get(i);const r=new RegExp(`^(${i})\\b`);let s=null;const o=lc(n.cssRules,r,[]);return o.length>0&&(s=new CSSStyleSheet,s.replaceSync(o.join(""))),console.log("<theming> caching stylesheet for %s",i),oc.set(i,s),s}function lc(e,t,n){for(let i=0;i<e.length;i++){const r=e[i];if(r instanceof CSSStyleRule){if(t.test(r.selectorText)){const e=r.cssText.replace(t,":host($1) ");n.push(e)}}else r instanceof CSSMediaRule?(n.push(`\n@media ${r.conditionText} {\n`),lc(r.cssRules,t,n),n.push("\n}\n")):r instanceof CSSFontFaceRule||n.push(r.cssText)}return n}function cc(e){const t=[e.localName];return e.id&&t.push("#"+e.id),e.classList.forEach(e=>t.push("."+e)),t}const hc=e=>class extends e{connectedCallback(){super.connectedCallback(),sc("pb-page-ready",e=>{const t=ac(this);t&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,t])})}},dc=new Map;function pc(e){const t="default"===e?"prism.css":`prism-${e}.css`;if(dc.has(t))return console.log("Using cached theme: %s",t),dc.get(t);const n=new Promise(n=>{const i=nc("../css/prismjs/")+t;console.log("<pb-code-highlight> loading theme %s from %s",e,i),fetch(i).then(e=>e.text()).catch(()=>n("")).then(e=>{n(j`<style>${e}</style>`)})});return dc.set(t,n),n}class uc extends(hc(ue)){static get properties(){return{language:{type:String},code:{type:String},theme:{type:String},lineNumbers:{type:Boolean,attribute:"line-numbers"},_themeStyles:{type:String}}}constructor(){super(),this.language="xml",this.theme="default",this.lineNumbers=!1,this._themeStyles=null}connectedCallback(){super.connectedCallback();let e=this.getAttribute("theme");null===e&&(e=ic(this,"--pb-code-highlight-theme","default"),this.setAttribute("theme",e))}firstUpdated(){if(super.firstUpdated(),!this.code){const e=this.querySelector("template");this.code=e?Prism.plugins.NormalizeWhitespace.normalize(e.innerHTML):Prism.plugins.NormalizeWhitespace.normalize(this.textContent)}}attributeChangedCallback(e,t,n){switch(super.attributeChangedCallback(e,t,n),e){case"theme":pc(n).then(e=>{this._themeStyles=e})}}updated(e){super.updated(e),e.has("code")&&this.highlight()}highlight(){Prism.highlightAllUnder(this.shadowRoot)}render(){return this.code?j`
                ${this._themeStyles}
                <pre class="${this.lineNumbers?"line-numbers":""} language-${this.language}"><code>${this.code}</code></pre>
            `:j`<pre class="line-numbers"><code><code></pre>`}static get styles(){return de`
            :host {
                display: block;
            }
            pre[class*='language-'] {
                margin: 0;
            }
            code[class*='language-'] {
                white-space: var(--pb-code-highlight-white-space, pre);
            }
            pre.line-numbers {
                position: relative;
                padding-left: 3.8em;
                counter-reset: linenumber;
            }

            pre.line-numbers > code {
                position: relative;
                white-space: inherit;
            }

            .line-numbers .line-numbers-rows {
                position: absolute;
                pointer-events: none;
                top: 0;
                font-size: 100%;
                left: -3.8em;
                width: 3em; /* works for line-numbers below 1000 lines */
                letter-spacing: -1px;
                border-right: 1px solid #999;

                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;

            }

            .line-numbers-rows > span {
                pointer-events: none;
                display: block;
                counter-increment: linenumber;
                height: auto !important;
            }

            .line-numbers-rows > span:before {
                content: counter(linenumber);
                color: #999;
                display: block;
                padding-right: 0.8em;
                text-align: right;
            }
        `}}customElements.define("pb-code-highlight",uc);const fc=new window.marked.Renderer;function mc(e){return e?j`${ml(window.marked(e))}`:null}function gc(e,t,n=!1){return t?j`
            <section>
                <h2>${e}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            ${n?j`<th>Default</th>`:null}
                        </tr>
                    </thead>
                    <tbody>
                        ${t.map(e=>j`<tr>
                                <td>${e.name}</td>
                                <td>${mc(e.description)}</td>
                                ${n?j`<td>${e.default}</td>`:null}</tr>`)}
                    </tbody>
                </table>
            </section>
            `:null}fc.code=function(e,t,n){return`<pb-code-highlight language="${t}" line-numbers>\n        <template>${e}</template>\n    </pb-code-highlight>`},window.marked.setOptions({renderer:fc});class _c extends ue{static get properties(){return{defaultTitle:{type:String,attribute:"default-title"},_target:{type:String,reflect:!0},_api:{type:String,reflect:!0},_component:{type:Object},_tab:{type:Number}}}constructor(){super(),this._tab=0,this._component=null,this.defaultTitle="Webcomponents API"}show(e,t=0){this._tab=t,this._component=e}clear(){this._component=null,this._tab=0}render(){return j`
            <app-header-layout>
                <app-header>
                    <app-toolbar>
                        ${this._component?j`<h1 main-title>&lt;${this._component.name}&gt;<span class="path">${this._component.path}</span></h1>`:j`<h1 main-title>${this.defaultTitle}</h1>`}
                    </app-toolbar>
                </app-header>
                ${this._component?j`<vaadin-tabs id="tabs" selected="${this._tab}">
                            <vaadin-tab @click="${this._showApi}">API</vaadin-tab>
                            ${this._renderDemoTabs()}
                        </vaadin-tabs>`:null}
                <main>
                ${0===this._tab?j`
                        <div id="api">
                        ${this._component?j`
                                <p class="description">
                                    ${mc(this._component.description)}
                                </p>
                                ${gc("Slots",this._component.slots)}
                                ${this._renderPropertiesSection()}
                                ${gc("Events",this._component.events)}
                                ${gc("CSS Properties",this._component.cssProperties,!0)}
                                ${gc("CSS Parts",this._component.cssParts)}
                            `:null}
                        </div>`:j`<iframe id="iframe" class="${this._tab>0?"":"hidden"}" src="${this._getDemo()}"></iframe>`}
                </main>
            </app-header-layout>
        `}_renderPropertiesSection(){return this._component.properties?j`<section><h2>Properties</h2>${this._renderProperties()}</section>`:null}_renderDemoTabs(){return this._component.demo?Object.values(this._component.demo).map((e,t)=>j`<vaadin-tab @click="${()=>this._showDemo(t+1)}">${e}</vaadin-tab>`):null}_renderProperties(){return this._component.properties.map(e=>j`
                <div class="property">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Attribute</th>
                                <th>Type</th>
                                <th>Default</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${e.name}</td>
                                <td>${e.attribute?e.attribute:e.name}</td>
                                <td>${e.type}</td>
                                <td>${e.default?e.default:"undefined"}</td>
                            </tr>
                        </tbody>
                    </table>
                    ${e.description?j`<p>${mc(e.description)}</p>`:null}
                </div>
            `)}_getDemo(){if(0===this._tab)return null;const e=Object.keys(this._component.demo)[this._tab-1];return this._target?`${e}?_target=${this._target}&_api=${this._api}`:e}_showDemo(e){this._tab=e,this._pushState()}_showApi(){this._tab=0,this._pushState()}_pushState(){const e=`#${this._component.name}.${this._tab}`;history.pushState({component:this._component,tab:this._tab},"view component",e)}static get styles(){return de`
            :host {
                display: block;
                height: 100vh;
            }

            main {
                height: calc(100vh - 108px);
                overflow: auto;
            }
            .hidden {
                display: none;
            }

            section {
                margin-bottom: 1.5em;
            }

            h1, h2 {
                font-family: "Oswald",Verdana,"Helvetica", sans-serif; 
                font-weight: 400;
                line-height: 1.2;
            }

            h1 {
                font-size: 28px;
                font-weight: normal;
            }

            .path {
                font-size: 16px;
                font-weight: 100;
                padding-left: 2em;
                vertical-align: middle;
            }
            app-toolbar {
                background-color: var(--pb-header-background-color);
                color: var(--pb-header-color);
                padding: 0;
            }

            app-header {
                width: 100%;
                height: 64px;
            }

            #api {
                margin-left: 10px;
                margin-right: 20px;
            }
            
            iframe {
                border: 0;
                width: 100%;
                height: 100%;
            }

            table {
                width: 100%;
                max-width: 840px;
            }

            .property {
                max-width: 840px;
                margin-bottom: 20px;
                padding-bottom: 8px;
                border-bottom: 1px solid #a0a0a0;
            }
            
            td {
                padding: 8px 4px;
                width: 25%;
            }
            .property td {
                padding: 0 4px 0 0;
            }
            td:nth-child(1) {
                color: #f6a523;
            }
            td p {
                margin: 0;
            }
            th {
                color: #909090;
                font-weight: normal;
                font-size: .85em;
                text-align: left;
            }
        `}}customElements.define("pb-component-view",_c);class yc extends ue{static get properties(){return{file:{type:String},demo:{type:String},_target:{type:String,reflect:!0},_api:{type:String,reflect:!0},_json:{type:Object},_demosOnly:{type:Boolean}}}constructor(){super(),this.file=null,this.demo=null,this._target=null,this.view=null}connectedCallback(){super.connectedCallback();const e=new URL(window.location).searchParams.get("_target");e&&(this._target=e);const t=new URL(window.location).searchParams.get("_api");t&&(this._api=t),window.addEventListener("popstate",e=>{e.state?this.view.show(e.state.component,e.state.tab):this.view.clear()}),document.addEventListener("pb-api-component",e=>{const{component:t,tab:n}=e.detail,i=`#${t.name}.${n}`;history.pushState({component:t,tab:n},"view component",i),this.view.show(t,n)})}firstUpdated(){super.firstUpdated(),this.view=this.shadowRoot.getElementById("view"),this._load().then(()=>{const{hash:e}=window.location;if(e){const t=e.substring(1).split("."),n=t[0],i=t[1];if(n&&i){const e=this._json.tags.find(e=>e.name===n);e&&this.view.show(e,parseInt(i))}}})}_load(){return new Promise(e=>{fetch(this.file).then(e=>e.json()).then(t=>{this._loadDemos(t).then(t=>{this._json=t,e(t)})})})}_loadDemos(e){return new Promise(t=>{this.demo?fetch(this.demo).then(e=>e.json()).then(n=>{this._demos=n,e.tags.forEach(e=>{n[e.name]?e.demo=n[e.name]:e.demo=null}),t(e)}):t(e)})}_filter(){this._demosOnly=this.shadowRoot.getElementById("filter").checked}render(){return j`
            <app-drawer-layout>
                <app-drawer id="drawer" align="left" slot="drawer" persistent>
                    <slot name="logo"></slot>
                    <paper-checkbox id="filter" @change="${this._filter}">only elements with demos</paper-checkbox>
                    <pb-components-list ?with-demo="${this._demosOnly}" .json="${this._json}"></pb-components-list>
                </app-drawer>
                <pb-component-view id="view" ._target="${this._target}" ._api="${this._api}"></pb-component-view>
            </app-drawer-layout>
        `}static get styles(){return de`
            :host {
                display: block;
            }
            pb-components-list {
                height: calc(100vh - 64px);
                overflow: auto;
            }

            #filter {
                margin: 20px 10px;
            }
        `}}customElements.define("pb-component-docs",yc);export{yc as PbComponentDocs};
