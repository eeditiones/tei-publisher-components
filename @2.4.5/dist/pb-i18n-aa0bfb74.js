import{f as t,L as e,N as n,A as s}from"./pb-mixin-47974747.js";const i=new Map;let a;function r(t){a=t}function o(t){return t instanceof n?t.startNode.isConnected:t instanceof s?t.committer.element.isConnected:t.element.isConnected}function c(){Object.keys(i).forEach(t=>{o(t)||i.delete(t)})}function l(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t)}function d(t,e){const n=e();t.value!==n&&(t.setValue(n),t.commit())}function u(t){a=t.t,i.forEach((t,e)=>{o(e)&&d(e,t)})}function p(t,e){return a?a(t,e):t}const h=t(t=>e=>{i.set(e,t),d(e,t)}),f=(t,e)=>h(()=>p(t,e));document.addEventListener("pb-i18n-update",t=>{u(t.detail)}),setInterval(()=>l(()=>c()),6e4);class b extends e{static get properties(){return Object.assign(Object.assign({},super.properties),{},{key:{type:String},options:{type:Object},_translated:{type:String}})}constructor(){super(),this.key="missing-key",this.options=null,this._translated=null}connectedCallback(){super.connectedCallback(),this._fallback=this.innerHTML,document.addEventListener("pb-i18n-update",this._translate.bind(this)),this._translate()}_translate(){const t=p(this.key,this.options);t&&t!==this.key?this._translated=t:this._translated=null}render(){return this._translated?this._translated:this._fallback}createRenderRoot(){return this}}customElements.define("pb-i18n",b);export{p as g,r as i,f as t};