// @ts-nocheck
/* eslint-disable import/extensions */
import { LitElement, html, css } from 'lit-element'

import { repeat } from 'lit-html/directives/repeat';

import '@polymer/polymer/lib/elements/dom-repeat';
import '@polymer/iron-icons/iron-icons';
import '@polymer/iron-icon/iron-icon';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-menu-button/paper-menu-button';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/paper-styles/color';
import '@polymer/paper-item/paper-item';
import '@polymer/iron-collapse/iron-collapse';
import './pb-odd-model-editor.js';

/**
 * A wrapper for the popular codemirror code editor.
 *
 *
 * @customElement
 * @polymer
 */
export class PbOddElementspecEditor extends LitElement {

    static get styles() {
        return css`
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
        `;
    }

    static get properties() {
        return {
            // identifier for this ´element-spec´
            ident: {
                type: String
            },
            /**
             * mode for an ´elementSpec` may be 'add', 'remove' or being undefined
             */
            mode: {
                type: String
            },
            /**
             * array of ODD `model` elements
             */
            models: {
                type: Array
            },
            endpoint: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.ident = '';
        this.mode = '';
        this.models = [];
        this.icon = 'expand-more';
    }

    render() {
        return html`   
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
            ${repeat(this.models, (model, index) => html`
            <pb-odd-model-editor
                behaviour="${model.behaviour || ''}"
                predicate="${model.predicate}"
                type="${model.type}"
                output="${model.output}"
                css="${model.css}"
                .model="${model}"
                .parameters="${model.parameters}"
                desc="${model.desc}"
                .sourcerend="${model.sourcerend}"
                .renditions="${model.renditions}"
                .template="${model.template}"
                .show="${model.show}"
                .endpoint="${this.endpoint}"
                @model-remove="${this._removeModel}"
                @model-move-down="${this._moveModelDown}"
                @model-move-up="${this._moveModelUp}"
                @model-changed="${this.handleModelChanged}"
                @click="${(e) => this.setCurrentSelection(e, index)}"
                ></pb-odd-model-editor>
            `)}
        </div>
        `;
    }

    addModel(newModel) {
        this.models.unshift(newModel);
        this.requestUpdate();
    }

    _addModel(e) {
        console.log('ELEMENTSPEC._addModel ', e);
        const addModel = this.shadowRoot.getElementById('addModel');
        const newModel = {
            behaviour: 'inline',
            css: '',
            predicate: '',
            desc: '',
            type: addModel.selected,
            output: '',
            template: '',
            sourcerend: false,
            models: [],
            parameters: [],
            renditions: [],
            show: true
        };

        const models = [...this.models];
        models.unshift(newModel);
        this.models = models;
        this.dispatchEvent(new CustomEvent('element-spec-changed', { composed: true, bubbles: true, detail: { action: "models", ident: this.ident, models: this.models } }));
        addModel.selected = "";
        this.requestUpdate();

    }


    _remove(ev) {
        this.dispatchEvent(new CustomEvent('element-spec-removed', {
            detail: { target: this }
        }));
    }

    _paste(ev) {
        console.log('_paste ', ev);
        // const editor = document.querySelector('pb-odd-editor');
        this.dispatchEvent(new CustomEvent('odd-paste', { composed: true, bubbles: true, detail: { target: this } }));
    }

    setCurrentSelection(e, index) {
        e.preventDefault();
        e.stopPropagation();

        //prevent event if model is already the current one
        this._setCurrentSelection(index, e.target);
    }

    _setCurrentSelection(index, target) {
        const targetModel = this.shadowRoot.querySelectorAll('pb-odd-model-editor')[index];
        if (!targetModel) { return; }
        if (targetModel.hasAttribute('currentselection')) return;

        this.dispatchEvent(new CustomEvent('current-changed', { composed: true, bubbles: true, detail: { target: target } }));
        this.requestUpdate();
    }

    _removeModel(ev) {
        console.log('_removeModel ', ev);
        ev.stopPropagation();
        const { model } = ev.target;
        const index = this.models.indexOf(model)

        if (confirm('really delete?')) {
            const models = [...this.models];
            models.splice(index, 1);
            this.models = models;
            this.dispatchEvent(new CustomEvent('element-spec-changed', { composed: true, bubbles: true, detail: { action: "models", ident: this.ident, models: this.models } }));
            // this.requestUpdate();
        }
    }

    _moveModelDown(ev) {
        console.log('ELEMENTSPEC._moveModelDown ', ev);
        ev.stopPropagation();
        const { model } = ev.target;
        const index = this.models.indexOf(model)
        if (index === this.models.length) {
            return;
        }
        const models = [...this.models]
        models.splice(index, 1);
        models.splice(index + 1, 0, model);
        this.models = models;

        const targetModel = this.shadowRoot.querySelectorAll('pb-odd-model-editor')[index + 1];
        if (!targetModel) { return; }
        this._setCurrentSelection(index + 1, targetModel);

        this.dispatchEvent(new CustomEvent('element-spec-changed', { composed: true, bubbles: true, detail: { action: "models", ident: this.ident, models: this.models } }));
        // this.requestUpdate();
    }

    _moveModelUp(ev) {
        ev.stopPropagation();
        const { model } = ev.target;
        const index = this.models.indexOf(model)
        if (index === 0) {
            return;
        }
        const models = [...this.models]
        // remove element from models
        models.splice(index, 1);
        // add element to new index
        models.splice(index - 1, 0, model);
        this.models = models;

        const targetModel = this.shadowRoot.querySelectorAll('pb-odd-model-editor')[index - 1];
        this._setCurrentSelection(index - 1, targetModel);

        this.dispatchEvent(new CustomEvent('element-spec-changed', { composed: true, bubbles: true, detail: { action: "models", ident: this.ident, models: this.models } }));
        // this.requestUpdate();
    }

    handleModelChanged(ev) {
        // console.log('ELEMENTSPEC.handleModelChanged ', ev.detail);
        ev.stopPropagation();
        const index = this.models.indexOf(ev.detail.oldModel);
        const models = [...this.models]
        models.splice(index, 1, ev.detail.newModel);
        this.models = models;
        this.dispatchEvent(new CustomEvent('element-spec-changed', { composed: true, bubbles: true, detail: { action: "models", ident: this.ident, models: this.models } }));
        this.requestUpdate();
    }

}
customElements.define('pb-odd-elementspec-editor', PbOddElementspecEditor);
