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
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,s=null,i=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,i),e=s}},s=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},i=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${i}--\x3e`,r=new RegExp(`${i}|${n}`),o="$lit$";class a{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],a=document.createTreeWalker(e.content,133,null,!1);let c=0,u=-1,p=0;const{strings:m,values:{length:_}}=t;for(;p<_;){const t=a.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)l(e[t].name,o)&&i++;for(;i-- >0;){const e=m[p],s=d.exec(e)[2],i=s.toLowerCase()+o,n=t.getAttribute(i);t.removeAttribute(i);const a=n.split(r);this.parts.push({type:"attribute",index:u,name:s,strings:a}),p+=a.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,n=e.split(r),a=n.length-1;for(let e=0;e<a;e++){let s,r=n[e];if(""===r)s=h();else{const t=d.exec(r);null!==t&&l(t[2],o)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-o.length)+t[3]),s=document.createTextNode(r)}i.insertBefore(s,t),this.parts.push({type:"node",index:++u})}""===n[a]?(i.insertBefore(h(),t),s.push(t)):t.data=n[a],p+=a}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&u!==c||(u++,e.insertBefore(h(),t)),c=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(s.push(t),u--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const l=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},c=t=>-1!==t.index,h=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,u=133;function p(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,u,null,!1);let r=_(i),o=i[r],a=-1,l=0;const c=[];let h=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(c.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,r=_(i,r),o=i[r]}c.forEach(t=>t.parentNode.removeChild(t))}const m=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,u,null,!1);for(;s.nextNode();)e++;return e},_=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(c(e))return s}return-1};function f(t,e,s=null){const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const r=document.createTreeWalker(i,u,null,!1);let o=_(n),a=0,l=-1;for(;r.nextNode();){l++;for(r.currentNode===s&&(a=m(e),s.parentNode.insertBefore(e,s));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=_(n,o);return}o=_(n,o)}}}
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
 */const y=new WeakMap,g=t=>(...e)=>{const s=t(...e);return y.set(s,!0),s},S=t=>"function"==typeof t&&y.has(t),b={},w={};
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
class v{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],i=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let r,o=0,a=0,l=n.nextNode();for(;o<i.length;)if(r=i[o],c(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(s.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=s.pop(),l=n.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const P=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),x=` ${i} `;class C{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let r=0;r<t;r++){const t=this.strings[r],a=t.lastIndexOf("\x3c!--");s=(a>-1||s)&&-1===t.indexOf("--\x3e",a+1);const l=d.exec(t);e+=null===l?t+(s?x:n):t.substr(0,l.index)+l[1]+l[2]+o+l[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==P&&(e=P.createHTML(e)),t.innerHTML=e,t}}
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
 */const N=t=>null===t||!("object"==typeof t||"function"==typeof t),T=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class E{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new A(this)}_getValue(){const t=this.strings,e=t.length-1,s=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=s[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!T(t))return t}let i="";for(let n=0;n<e;n++){i+=t[n];const e=s[n];if(void 0!==e){const t=e.value;if(N(t)||!T(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class A{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===b||N(t)&&t===this.value||(this.value=t,S(t)||(this.committer.dirty=!0))}commit(){for(;S(this.value);){const t=this.value;this.value=b,t(this)}this.value!==b&&this.committer.commit()}}class V{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(h()),this.endNode=t.appendChild(h())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=h()),t.__insert(this.endNode=h())}insertAfterPart(t){t.__insert(this.startNode=h()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;S(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=b,t(this)}const t=this.__pendingValue;t!==b&&(N(t)?t!==this.value&&this.__commitText(t):t instanceof C?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):T(t)?this.__commitIterable(t):t===w?(this.value=w,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const s=new v(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)s=e[i],void 0===s&&(s=new V(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class U{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;S(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=b,t(this)}if(this.__pendingValue===b)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=b}}class O extends E{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new R(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class R extends A{}let k=!1;(()=>{try{const t={get capture(){return k=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class L{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;S(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=b,t(this)}if(this.__pendingValue===b)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=M(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=b}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const M=t=>t&&(k?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;function j(t){let e=I.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},I.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(i);return s=e.keyString.get(n),void 0===s&&(s=new a(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const I=new Map,q=new WeakMap,F=(t,e,i)=>{let n=q.get(e);void 0===n&&(s(e,e.firstChild),q.set(e,n=new V(Object.assign({templateFactory:j},i))),n.appendInto(e)),n.setValue(t),n.commit()};
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
class B{handleAttributeExpressions(t,e,s,i){const n=e[0];if("."===n){return new O(t,e.slice(1),s).parts}if("@"===n)return[new L(t,e.slice(1),i.eventContext)];if("?"===n)return[new U(t,e.slice(1),s)];return new E(t,e,s).parts}handleTextExpression(t){return new V(t)}}const H=new B;
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const $=(t,...e)=>new C(t,e,"html",H)
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
 */,z=(t,e)=>`${t}--${e}`;let W=!0;void 0===window.ShadyCSS?W=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),W=!1);const J=t=>e=>{const s=z(e.type,t);let n=I.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},I.set(s,n));let r=n.stringsArray.get(e.strings);if(void 0!==r)return r;const o=e.strings.join(i);if(r=n.keyString.get(o),void 0===r){const s=e.getTemplateElement();W&&window.ShadyCSS.prepareTemplateDom(s,t),r=new a(e,s),n.keyString.set(o,r)}return n.stringsArray.set(e.strings,r),r},D=["html","svg"],Z=t=>{D.forEach(e=>{const s=I.get(z(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),p(t,s)})})},G=new Set,K=(t,e,s)=>{G.add(t);const i=s?s.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=n[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}Z(t);const a=i.content;s?f(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),p(s,t)}},Q=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,r=q.has(e),o=W&&11===e.nodeType&&!!e.host,a=o&&!G.has(n),l=a?document.createDocumentFragment():e;if(F(t,l,Object.assign({templateFactory:J(n)},i)),a){const t=q.get(l);q.delete(l);const i=t.value instanceof v?t.value.template:void 0;K(n,l,i),s(e,e.firstChild),e.appendChild(l),q.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)};window.JSCompiler_renameProperty=(t,e)=>t;const X={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Y=(t,e)=>e!==t&&(e==e||t==t),tt={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:Y},et=1,st=4,it=8,nt=16,rt="finalized";class ot extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=tt){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdateInternal(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||tt}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(rt)||t.finalize(),this[rt]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=Y){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||X,n="function"==typeof i?i:i.fromAttribute;return n?n(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||X.toAttribute)(t,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=tt){const i=this.constructor,n=i._attributeNameForProperty(t,s);if(void 0!==n){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|it,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=this._updateState&~it}}_attributeToProperty(t,e){if(this._updateState&it)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s.getPropertyOptions(i);this._updateState=this._updateState|nt,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~nt}}requestUpdateInternal(t,e,s){let i=!0;if(void 0!==t){const n=this.constructor;s=s||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||this._updateState&nt||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|st;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&st}get hasUpdated(){return this._updateState&et}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(this._updateState&et||(this._updateState=this._updateState|et,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~st}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}ot[rt]=!0;
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
const at=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lt=Symbol();class ct{constructor(t,e){if(e!==lt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(at?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ht=t=>new ct(String(t),lt),dt=t=>{if(t instanceof ct)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)},ut=(t,...e)=>{const s=e.reduce((e,s,i)=>e+dt(s)+t[i+1],t[0]);return new ct(s,lt)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const pt={};class mt extends ot{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,s)=>t.reduceRight((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t),s),s=e(t,new Set),i=[];s.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!at){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return ht(e)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?at?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==pt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return pt}}function _t(t){const e=document.querySelector("script[src*=pb-components]");return e?new URL(t,e.src).href:new URL(t,window.location.href).href}function ft(t,e){var s,i,n;for(t=(t+"").split("."),e=(e+"").split("."),n=Math.max(t.length,e.length),s=0;s<n;s++)if(void 0===t[s]&&(t[s]="0"),void 0===e[s]&&(e[s]="0"),0!==(i=parseInt(t[s],10)-parseInt(e[s],10)))return i<0?-1:1;return 0}function yt(t,e){return ft(t,e)>=0}function gt(t,e,s){const i=getComputedStyle(t).getPropertyValue(e);if(i)try{return JSON.parse(i)}catch(t){return s}return s}mt.finalized=!0,mt.render=Q,mt.shadowRootOptions={mode:"open"},window.TeiPublisher||(window.TeiPublisher={},TeiPublisher.url=new URL(window.location.href));const St=new Set,bt=new Map,wt="__default__";function vt(){bt.clear()}function Pt(t,e){bt.has(t)?e(bt.get(t)):document.addEventListener(t,s=>{bt.set(t,s.detail),e(s.detail)},{once:!0})}function xt(t){const e=t.getAttribute("emit-config");if(e){const t=JSON.parse(e);return Object.keys(t)}const s=t.getAttribute("emit");return s?[s]:[wt]}function Ct(t){const e=t.getAttribute("subscribe-config");if(e){const t=JSON.parse(e);return Object.keys(t)}const s=t.getAttribute("subscribe");return s?[s]:[wt]}const Nt=t=>class extends t{static get properties(){return{subscribe:{type:String},subscribeConfig:{type:Object,attribute:"subscribe-config"},emit:{type:String},emitConfig:{type:Object,attribute:"emit-config"},waitFor:{type:String,attribute:"wait-for"},_isReady:{type:Boolean},disabled:{type:Boolean,reflect:!0},_endpoint:{type:String},_apiVersion:{type:String}}}constructor(){super(),this._isReady=!1,this.disabled=!1,this._subscriptions=new Map}connectedCallback(){super.connectedCallback(),Pt("pb-page-ready",t=>{this._endpoint=t.endpoint,this._apiVersion=t.apiVersion})}disconnectedCallback(){super.disconnectedCallback(),this._subscriptions.forEach((t,e)=>{t.forEach(t=>{document.removeEventListener(e,t)})})}command(t,e){"disable"===t&&(this.disabled=e)}wait(t){if(!this.waitFor)return void t();const e=Array.from(document.querySelectorAll(this.waitFor)).filter(t=>this.emitsOnSameChannel(t)),s=e.length;if(0===s)return void t();let i=s;e.forEach(e=>{if(e._isReady)return i-=1,void(0===i&&t());const s=e.addEventListener("pb-ready",n=>{n.detail.source!==this&&(i-=1,0===i&&(e.removeEventListener("pb-ready",s),t()))})})}waitForChannel(t){if(this.subscribeConfig)for(const e in this.subscribeConfig)this.subscribeConfig[e].forEach(s=>{if("pb-ready"===s&&St.has(e))return t()});else if(this.subscribe&&St.has(this.subscribe)||!this.subscribe&&St.has("__default__"))return t();const e=this.subscribeTo("pb-ready",s=>{s.detail._source!=this&&(e.forEach(t=>document.removeEventListener("pb-ready",t)),t())})}static waitOnce(t,e){Pt(t,e)}signalReady(t="pb-ready",e){this._isReady=!0,bt.set(t,e),this.dispatchEvent(new CustomEvent(t,{detail:{data:e,source:this}})),this.emitTo(t,e)}emitsOnSameChannel(t){const e=Ct(this),s=xt(t);return 0===e.length&&0===s.length||e.some(t=>s.includes(t))}subscribeTo(t,e,s){let i;i=s?0===s.length?[wt]:s:Ct(this);const n=i.map(s=>{const i=t=>{t.detail&&t.detail.key&&t.detail.key===s&&e(t)};return document.addEventListener(t,i),i});return this._subscriptions.set(t,n),n}emitTo(t,e,s){let i;i=s?0===s.length?[wt]:s:xt(this),i.forEach(s=>this._emit(s,t,e))}_emit(t,e,s){"pb-ready"===e&&St.add(t);const i=Object.assign({key:t,_source:this},s),n=new CustomEvent(e,{detail:i,composed:!0,bubbles:!0});this.dispatchEvent(n)}getDocument(){if(this.src){const t=document.getElementById(this.src);if(t)return t}return null}getParameter(t,e){const s=TeiPublisher.url.searchParams&&TeiPublisher.url.searchParams.getAll(t);return s&&1==s.length?s[0]:s&&s.length>1?s:e}getParameters(){const t={};for(let e of TeiPublisher.url.searchParams.keys())t[e]=this.getParameter(e);return t}getUrl(){return TeiPublisher.url}getEndpoint(){return this._endpoint}toAbsoluteURL(t,e){if(/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(t))return t;const s=""===e?"":e||this.getEndpoint();let i;return i="."===s?new URL(window.location.href):"about:"===window.location.protocol?document.baseURI:new URL(s+"/",`${window.location.protocol}//${window.location.host}`),new URL(t,i).href}minApiVersion(t){return ft(this._apiVersion,t)>=0}lessThanApiVersion(t){return ft(this._apiVersion,t)<0}compareApiVersion(t){return ft(this._apiVersion,t)}};export{A,mt as L,V as N,Ct as a,ft as b,ut as c,wt as d,vt as e,g as f,gt as g,$ as h,N as i,h as j,e as k,s as l,yt as m,Nt as p,_t as r,Pt as w};
