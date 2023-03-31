import{p as e,L as t,h as i,c as r}from"./pb-mixin-47974747.js";import{t as o}from"./pb-i18n-aa0bfb74.js";import"./jinn-codemirror-9718e0e0.js";class s extends(e(t)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{code:{type:String,reflect:!0},mode:{type:String},label:{type:String},placeholder:{type:String},tabSize:{type:Number},linter:{attribute:!0}})}constructor(){super(),this.code="",this.mode="xml",this.placeholder="odd.editor.model.empty",this.tabSize=2,this.label="",this.linter="",this._editor=null}connectedCallback(){super.connectedCallback()}firstUpdated(){super.firstUpdated(),this._editor=this.shadowRoot.getElementById("editor")}render(){return i`
            <div class="label">${this.label}</div>
            <jinn-codemirror id="editor" mode="${this.mode}" code="${this.code}" placeholder="${o(this.placeholder)}"></jinn-codemirror>
        `}getSource(){return this._editor?this._editor.value:""}_setCode(){this.dispatchEvent(new CustomEvent("code-changed",{composed:!0,bubbles:!0,detail:{code:this.getSource()}}))}refresh(){}static get styles(){return r`
            :host {
                display: block;
                width: 100%;
                margin: 0;
                position: relative;
                color:inherit;
            }

            #editor {
              width: 100%;
              height: auto;
            }

            .label {
                color: var(--paper-grey-500);
                margin-bottom:5px;
            }
        `}}customElements.define("pb-code-editor",s);export{s as PbCodeEditor};
