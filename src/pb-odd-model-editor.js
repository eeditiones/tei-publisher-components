// @ts-nocheck
import { LitElement, html, css } from 'lit-element';

import { repeat } from 'lit-html/directives/repeat';
import { ifDefined } from 'lit-html/directives/if-defined';

import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-menu-button/paper-menu-button.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-styles/color.js';
import '@polymer/iron-collapse/iron-collapse.js';

import './pb-odd-rendition-editor.js';
import './pb-odd-parameter-editor.js';
import './pb-code-editor.js';
import './pb-message.js';

import { get as i18n, translate } from "./pb-i18n.js";


/**
 * represents an odd model element for editing
 *
 * @customElement
 *
 * @polymer
 */
export class PbOddModelEditor extends LitElement {

    static get styles() {
        return css`
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
            
            pb-code-editor {
                margin-bottom: 20px;
            }
        `;
    }

    static get properties() {
        return {
            /**
             * maps to ODD ´model` behaviour attribute
             */
            behaviour: {
                type: String
            },
            /**
             * maps to ODD `model` predicate
             */
            predicate: {
                type: String,
                reflect: true,
                converter: (value, type) => {
                    if (value.toLowerCase() === 'null') {
                        return '';
                    }
                    return value;
                }
            },
            type: {
                type: String,
                reflect: true
            },
            template: {
                type: String,
                reflect: true,
                converter: (value, type) => {
                    if (value.toLowerCase() === 'null') {
                        return '';
                    }
                    return value;
                }
            },
            output: {
                type: String,
                reflect: true,
                converter: (value, type) => {
                    if (value.toLowerCase() === 'null') {
                        return '';
                    }
                    return value;
                }
            },
            css: {
                type: String,
                converter: (value, type) => {
                    if (value.toLowerCase() === 'null') {
                        return '';
                    }
                    return value;
                }
            },
            model: {
                type: Object
            },
            models: {
                type: Array
            },
            parameters: {
                type: Array
            },
            renditions: {
                type: Array
            },
            desc: {
                type: String,
                converter: (value, type) => {
                    if (value.toLowerCase() === 'null') {
                        return '';
                    }
                    return value;
                }
            },
            sourcerend: {
                type: String
            },
            show: {
                type: Boolean,
                reflect: true
            },
            outputs: {
                type: Array
            },
            behaviours: {
                type: Array
            },
            icon: {
                type: String
            },
            open: {
                type: String
            },
            hasCustomBehaviour: {
                type: Boolean
            },
            endpoint: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.behaviour = 'inline';
        this.predicate = '';
        this.type = '';
        this.template = '';
        this.output = '';
        this.css = '';
        this.model = {};
        this.model.models = [];
        this.parameters = [];
        this.renditions = [];
        this.desc = '';
        this.sourcerend = '';
        this.show = false;

        this.outputs = ["",
            "web",
            "print",
            "epub",
            "fo",
            "latex",
            "plain"];

        this.parentModel = [];
        this.behaviours = [
            "alternate",
            "anchor",
            "block",
            "body",
            "break",
            "cell",
            "cit",
            "document",
            "figure",
            "graphic",
            "heading",
            "inline",
            "link",
            "list",
            "listItem",
            "metadata",
            "note",
            "omit",
            "paragraph",
            "row",
            "section",
            "table",
            "text",
            "title",
            "webcomponent"
        ];

        this.icon = 'expand-more';
        this.hasCustomBehaviour = false;
    }

    render() {
        return html`
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

                        ${this._isGroupOrSequence() ?
                html`
                            <paper-menu-button horizontal-align="right">
                                <paper-icon-button icon="add" slot="dropdown-trigger"></paper-icon-button>
                                <paper-listbox id="modelType" slot="dropdown-content" @iron-select="${this._addNested}"
                                               attr-for-selected="value">
                                   ${this.type === 'modelSequence' ?
                        html`
                                            <paper-item value="model">model</paper-item>
                                        `: ''
                    }
                                   ${this.type === 'modelGrp' ?
                        html`
                                            <paper-item value="modelSequence">modelSequence</paper-item>
                                            <paper-item value="model">model</paper-item>
                                        `: ''
                    }
                                </paper-listbox>
                            </paper-menu-button>
                            `: ''}
                    </span>
                </h4>
                <div class="info">
                    <div class="outputDisplay">${this.output}</div>
                    <div class="description">${this.desc}</div>
                    <div class="predicate">${this.predicate}</div>
                </p>
            </header>
            <iron-collapse id="details" ?opened="${this.show}" class="details">
                <paper-dropdown-menu class="selectOutput" label="Output">
                    <paper-listbox id="output" slot="dropdown-content" attr-for-selected="value"
                                   selected="${this.output}" @iron-select="${this._selectOutput}">

                        ${this.outputs.map((item) =>
                        html`
                            <paper-item value="${item}">${item}</paper-item>
                        `)}

                    </paper-listbox>
                </paper-dropdown-menu>

                <paper-input id="desc" .value="${this.desc}" placeholder="${translate('odd.editor.model.description-placeholder')}"
                    label="Description" @change="${this._inputDesc}"></paper-input>

                <pb-code-editor id="predicate"
                     code="${this.predicate}"   
                     mode="xquery"
                     linter="${this.endpoint}/modules/editor.xql"
                     label="Predicate"
                     placeholder="${translate('odd.editor.model.predicate-placeholder')}"
                     @code-changed="${this._updatePredicate}"></pb-code-editor>
               
                ${this._isModel()
                ? html`
                        <div>
                            <div class="behaviourWrapper">
                                <paper-dropdown-menu label="behaviour" id="behaviourMenu" ?disabled="${this.hasCustomBehaviour}">
                                    <paper-listbox id="behaviour" slot="dropdown-content" attr-for-selected="value"
                                                   selected="${this.behaviour}" @iron-select="${this._selectBehaviour}">
                                        ${this.behaviours.map((item) =>
                    html`
                                            <paper-item value="${item}">${item}</paper-item>
                                        `)}
                                    </paper-listbox>
                                </paper-dropdown-menu>
                                <span style="align-self:center;justify-self: center;"> ${translate('odd.editor.model.link-with-or')} </span>
                                <paper-input id="custombehaviour" label="" @input="${this._handleCustomBehaviour}" placeHolder="${translate('odd.editor.model.custom-behaviour-placeholder')}"></paper-input>
                                <span></span>
                            </div>

                                
    
                            <paper-input id="css" .value="${this.css}"
                                placeholder="${translate('odd.editor.model.css-class-placeholder')}"
                                label="CSS Class"
                                @change="${this._inputCss}"></paper-input>
                                
                            <pb-code-editor id="template"
                                             code="${this.template}"
                                             mode="${this.output === 'latex' ? 'stex' : 'xml'}"
                                             label="Template"
                                             placeholder="${translate('odd.editor.model.template-placeholder')}"
                                             @code-changed="${this._updateTemplate}"></pb-code-editor>
                        </div>
        
                        <div class="parameters">
                            <div class="group">
                                <span class="title">Parameters</span>
                                <paper-icon-button icon="add"
                                                   @click="${this._addParameter}"></paper-icon-button>
                            </div>
                            ${repeat(this.parameters, (parameter) => parameter.name, (parameter, index) =>
                        html`
                                <pb-odd-parameter-editor 
                                       behaviour="${this.behaviour}"
                                       name="${parameter.name}"
                                       value="${parameter.value}"
                                       endpoint="${this.endpoint}"
                                       @parameter-remove="${(e) => this._removeParam(e, index)}"
                                       @parameter-changed="${(e) => this._updateParam(e, index)}"
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

                            ${repeat(this.renditions, (rendition) => rendition.name, (rendition, index) =>
                            html`
                                <pb-odd-rendition-editor scope="${rendition.scope}"
                                       css="${rendition.css}"
                                       @remove-rendition="${(e) => this._removeRendition(e, index)}"
                                       @rendition-changed="${(e) => this._updateRendition(e, index)}"
                                       ></pb-odd-rendition-editor>
                            `)}

                        </div>
                    `
                : ''
            }
            </iron-collapse>
            
            <div class="models">
                ${repeat(this.model.models, (model, index) => html`
                <pb-odd-model-editor 
                    behaviour="${model.behaviour || 'inline'}"
                    predicate="${model.predicate}"
                    type="${model.type}"
                    output="${model.output}"
                    css="${model.css}"
                    .model="${model}"
                    .parameters="${model.parameters}"
                    desc="${model.desc}"
                    sourcerend="${model.sourcerend}"
                    .renditions="${model.renditions}"
                    .template="${model.template}"
                    .show="${model.show}"
                    endpoint="${this.endpoint}"
                    @model-remove="${this._removeModel}"
                    @model-move-down="${this._moveModelDown}"
                    @model-move-up="${this._moveModelUp}"
                    @model-changed="${this.handleModelChanged}"
                    @click="${ (e) => this.setCurrentSelection(e, index)}"
                    hasParent
                    ></pb-odd-model-editor>
            `)}
    
            </div> 
        </form> 
        <pb-message id="dialog"></pb-message>
        `;
    }

    firstUpdated() {
        super.firstUpdated();

        this.hasCustomBehaviour = this.behaviours.indexOf(this.behaviour) < 0;
        if (this.hasCustomBehaviour) {
            this.shadowRoot.getElementById('custombehaviour').value = this.behaviour;
        }
    }

    updated(_changedProperties) {
        if (_changedProperties.has('show') && this.show) {
            this.refreshEditors();
        }
    }

    refreshEditors() {
        console.log('refreshEditors');
        this.shadowRoot.getElementById('predicate').refresh();

        if (this._isGroupOrSequence()) { return console.log("asfdfa"); }

        this.shadowRoot.getElementById('template').refresh();

        const models = this.shadowRoot.querySelectorAll('pb-odd-model-editor');
        for (let i = 0; i < models.length; i++) {
            models[i].refreshEditors();
        }
        const renditions = this.shadowRoot.querySelectorAll('pb-odd-rendition-editor');
        for (let i = 0; i < renditions.length; i++) {
            renditions[i].refreshEditor();
        }
        const parameters = this.shadowRoot.querySelectorAll('pb-odd-parameter-editor');
        for (let i = 0; i < parameters.length; i++) {
            parameters[i].refreshEditor();
        }
    }

    toggle(e) {
        // e.stopPropagation()
        // e.preventDefault()

        this.show = !this.show;
        this.toggleButtonIcon();

        const oldModel = this.model;
        const newModel = Object.assign({}, oldModel, { show: this.show });
        this.model = newModel;
        this.refreshEditors();
        this.dispatchEvent(new CustomEvent('model-changed', { composed: true, bubbles: true, detail: { oldModel, newModel } }));
    }

    toggleButtonIcon() {
        if (this.show) {
            this.icon = 'expand-less';
        }
        else {
            this.icon = 'expand-more';
        }
    }

    _isModel() {
        return this.type === 'model';
    }

    _isGroupOrSequence() {
        return this.type !== 'model';
    }

    static _templateMode(output) {
        switch (output) {
            case 'latex':
                return 'latex';
            case 'web':
            default:
                return 'xml';
        }
    }

    _changeSelection(e) {
        if (e.detail.target == this) return;
        e.preventDefault();
        e.stopPropagation();
        if (this.currentSelection != undefined) {
            this.currentSelection.removeAttribute('currentselection');
        }
        const newSelection = e.detail.target;
        newSelection.setAttribute('currentselection', 'true');
        this.currentSelection = newSelection;
    }

    _requestRemoval(e) {
        e.preventDefault();
        this.dispatchEvent(new CustomEvent('model-remove'));
    }

    /**
     * move model down in list
     *
     * @param e
     * @event model-move-down dispatched to request the model to move down
     */
    _moveDown(e) {
        e.preventDefault();
        e.stopPropagation();
        // this.dispatchEvent(new CustomEvent('model-move-down'));
        this.dispatchEvent(new CustomEvent('model-move-down', { composed: true, bubbles: true, detail: { model: this } }));
    }

    /**
     * move model up in list
     *
     * @param e
     * @event model-move-up dispatched to request the model to move up
     */
    _moveUp(e) {
        e.preventDefault();
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('model-move-up'));
    }

    _addNested(e) {
        const newNestedModel = {
            behaviour: 'inline',
            css: '',
            desc: '',
            predicate: '',
            type: e.detail.item.getAttribute('value'),
            output: '',
            sourcerend: false,
            models: [],
            parameters: [],
            renditions: [],
            template: '',
            show: true
        };

        const oldModel = this.model;
        const models = Array.from(this.model.models);
        models.unshift(newNestedModel);
        this.model = Object.assign({}, oldModel, { models });

        // important to reset the listbox - otherwise next attempt to use it will fail if value has not changed
        // use querySelector here instead of 'this.$' as listbox is in it's own <template>
        const modelTypeSelector = this.shadowRoot.querySelector('#modelType')
        modelTypeSelector.select("");

        this.dispatchEvent(new CustomEvent('model-changed', { composed: true, bubbles: true, detail: { oldModel, newModel: this.model } }));
    }

    _removeModel(ev) {
        console.log('_removeModel ', ev);
        ev.stopPropagation();
        const { model } = ev.target;
        const index = this.model.models.indexOf(model)

        this.shadowRoot.getElementById('dialog')
            .confirm(i18n('odd.editor.model.delete-model-label'), i18n('odd.editor.model.delete-model-message'))
            .then(() => {
                const oldModel = this.model;
                const models = Array.from(this.model.models);
                models.splice(index, 1);
                this.model = Object.assign({}, oldModel, { models });
                this.models = models;
                this.dispatchEvent(new CustomEvent('model-changed', { composed: true, bubbles: true, detail: { oldModel, newModel: this.model } }));
            }, () => null);
    }

    _moveModelDown(ev) {
        console.log('MODEL._moveModelDown ', ev);
        ev.stopPropagation();
        const { model } = ev.target;
        const index = this.model.models.indexOf(model)
        if (index === this.model.models.length) {
            return;
        }
        const oldModel = this.model;
        const models = Array.from(this.model.models);
        models.splice(index, 1);
        models.splice(index + 1, 0, model);
        this.model = Object.assign({}, oldModel, { models });

        const targetModel = this.shadowRoot.querySelectorAll('pb-odd-model-editor')[index + 1];
        this._setCurrentSelection(index + 1, targetModel);

        this.dispatchEvent(new CustomEvent('model-changed', { composed: true, bubbles: true, detail: { oldModel, newModel: this.model } }));
        this.requestUpdate();
    }

    _moveModelUp(ev) {
        ev.stopPropagation();
        const { model } = ev.target;
        const index = this.model.models.indexOf(model)
        if (index === 0) {
            return;
        }
        const oldModel = this.model;
        const models = Array.from(this.model.models);
        // remove element from models
        models.splice(index, 1);
        // add element to new index
        models.splice(index - 1, 0, model);
        this.model = Object.assign({}, oldModel, { models });

        const targetModel = this.shadowRoot.querySelectorAll('pb-odd-model-editor')[index - 1];
        this._setCurrentSelection(index - 1, targetModel);

        this.dispatchEvent(new CustomEvent('model-changed', { composed: true, bubbles: true, detail: { oldModel, newModel: this.model } }));
        // this.requestUpdate();
    }

    handleModelChanged(ev) {
        console.log('handleModelChanged ', ev, this);
        ev.stopPropagation();
        const oldModel = this.model;
        const index = this.model.models.indexOf(ev.detail.oldModel);
        const models = Array.from(this.model.models);
        models.splice(index, 1, ev.detail.newModel);
        this.model = Object.assign({}, oldModel, { models });
        this.dispatchEvent(new CustomEvent('model-changed', { composed: true, bubbles: true, detail: { oldModel, newModel: this.model } }));
    }


    //todo: setCurrentSelection functions are redundant in model and elementspec components - do better
    setCurrentSelection(e, index) {
        e.preventDefault();
        e.stopPropagation();

        //prevent event if model is already the current one
        this._setCurrentSelection(index, e.target);
    }

    _setCurrentSelection(index, target) {
        // console.log('_setCurrentSelection ', target);
        const targetModel = this.shadowRoot.querySelectorAll('pb-odd-model-editor')[index];

        if (!targetModel) { return; }

        if (targetModel.hasAttribute('currentselection')) return;

        this.dispatchEvent(new CustomEvent('current-changed', { composed: true, bubbles: true, detail: { target: target } }));
        this.requestUpdate();
    }

    _inputDesc(e) {
        this.desc = e.composedPath()[0].value;
        this._fireModelChanged('desc', this.desc);
    }

    _selectOutput(e) {
        this.output = e.composedPath()[0].selected;
        this._fireModelChanged('output', this.output);
    }

    _updatePredicate(ev) {
        this.predicate = this.shadowRoot.getElementById('predicate').getSource();
        console.log('_updatePredicate ', this.predicate);
        this._fireModelChanged('predicate', this.predicate);
    }

    _selectBehaviour(ev) {
        this.behaviour = ev.composedPath()[0].selected;
        this._fireModelChanged('behaviour', this.behaviour);
    }

    _inputCss(ev) {
        this.css = ev.composedPath()[0].value;
        this._fireModelChanged('css', this.css);
    }

    _updateTemplate(ev) {
        this.template = this.shadowRoot.getElementById('template').getSource();
        this._fireModelChanged('template', this.template);
    }

    /**
     * add a model parameter
     *
     * @param e
     */
    _addParameter(e) {
        this.parameters.push({ name: "", value: "" });
        this._fireModelChanged('parameters', this.parameters);
    }

    _updateParam(e, index) {
        this.parameters[index].name = e.detail.name;
        this.parameters[index].value = e.detail.value;
        this._fireModelChanged('parameters', this.parameters);
    }

    /**
     * remove a parameter
     * @param e
     * @param index
     * @private
     */
    _removeParam(e, index) {
        this.parameters.splice(index, 1);
        this._fireModelChanged('parameters', this.parameters);
    }

    /**
     * add a rendition
     *
     * @param ev
     */
    _addRendition(ev) {
        this.renditions.push({
            scope: '',
            css: ''
        });
        this._fireModelChanged('renditions', this.renditions);
    }

    _updateRendition(e, index) {
        this.renditions[index].css = e.detail.css;
        this.renditions[index].scope = e.detail.scope;
        console.log('scope: %s', typeof e.detail.scope);
        this._fireModelChanged('renditions', this.renditions);
    }

    _removeRendition(e, index) {
        this.renditions.splice(index, 1);
        this._fireModelChanged('renditions', this.renditions);
    }

    _fireModelChanged(prop, value) {
        const oldModel = this.model;
        this.model = Object.assign({}, this.model, { [prop]: value });
        console.log('model changed for %s: %o - %o', prop, value, this.model);
        this.dispatchEvent(new CustomEvent('model-changed', { composed: true, bubbles: true, detail: { oldModel, newModel: this.model } }));
        this.requestUpdate();
    }

    _copy(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        console.log('odd-model.copy ', ev);
        console.log('odd-model.copy data', this.model);

        this.dispatchEvent(new CustomEvent('odd-copy', { composed: true, bubbles: true, detail: { model: this.model } }));
    }

    _paste(ev) {
        console.log('model _paste ', ev);
        this.dispatchEvent(new CustomEvent('odd-paste', { composed: true, bubbles: true, detail: { target: this } }));
    }


    _handleCustomBehaviour(e) {
        this.behaviour = e.composedPath()[0].value;
        this._fireModelChanged('behaviour', this.behaviour);

        // en-/disable behaviour menu
        if (this.behaviour === '') {
            this.behaviour = 'inline';
            this.hasCustomBehaviour = false;
        } else {
            this.hasCustomBehaviour = true;
        }
        this.requestUpdate();

    }



}
customElements.define('pb-odd-model-editor', PbOddModelEditor);
