// @ts-nocheck
import { LitElement, html, css } from 'lit-element'
import { pbMixin } from './pb-mixin.js';
import "./pb-drawer.js";
import { repeat } from 'lit-html/directives/repeat';
import { ifDefined } from 'lit-html/directives/if-defined';

import '@vaadin/vaadin-tabs/vaadin-tabs';
import '@vaadin/vaadin-tabs/vaadin-tab';

import '@polymer/iron-ajax/iron-ajax';
import '@polymer/paper-styles/color';
import '@polymer/paper-card/paper-card';
import './pb-edit-xml.js';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-item/paper-item';
import '@cwmr/paper-autocomplete/paper-autocomplete';
import './pb-collapse';
import '@polymer/paper-checkbox/paper-checkbox';
import './pb-odd-elementspec-editor.js';
import './pb-message.js';

import { get as i18n, translate } from "./pb-i18n.js";
import { PbOddElementspecEditor } from "./pb-odd-elementspec-editor";

/**
 * ODD editor component
 *
 * @customElement
 * @polymer
 * @demo demo/pb-odd-editor.html
 */
export class PbOddEditor extends pbMixin(LitElement) {

    static get styles() {
        return css`
            :host {
                display: flex;
                /*margin: 30px 20px;*/
                margin:0;
                padding:0;
                height:auto;

                --paper-input-container: {
                    padding: 0;
                };

                --paper-dialog-title: {
                    margin-top: 0;
                    padding: 12px;
                    background-color: #607D8B;
                    color: #F0F0F0;
                };

                --pb-view-height: calc(100vh - 94px);
                --app-drawer-width:300px;


            }
            
            #layout {
                display: flex;
                width: 100%;
            }

            #drawer {
                width: 300px;
                flex: 1;
            }

            .specs {
                flex: 2;
            }
            
            app-drawer .wrapper{
                padding:10px;
                height:100%;
                overflow:auto;
                background:var(--existdb-drawer-bg);
                color:var(--existdb-drawer-color);
            }

            section{
                padding:20px;
            }

            paper-card{
                display: flex;
                flex-direction:column;
                --paper-card-header: {
                    background-color: #607D8B;
                };

                --paper-card-header-text: {
                    font-family: "Oswald",Verdana,"Helvetica",sans-serif;
                    font-size: 16px;
                    font-weight: 400;
                    color: #F0F0F0;
                };

            }

            paper-card#drawercard h3{
                /*background-color: var(--paper-card-header_-_background-color);*/

                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

            }


            /* ported over but not checked yet */

            .specs {
                padding:6px;
            }

            .metadata {
                display: block;

                --pb-collapse-trigger: {
                    background-color: #d1dae0;
                    padding-left: 10px;
                }
            }

            .metadata div {
                padding: 0 16px 16px;
            }

            .metadata paper-input {
                margin-bottom: 10px;
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

            iron-collapse{
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
            .navlist{
                overflow:auto;
            }
            
            paper-tab{
                width:100px;
            }
            
            .editingView{
                width:100%;
                height:100%;
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

        `;
    }

    static get properties() {
        return {
            ...super.properties,
            ident: {
                type: String
            },
            /**
             * ElementSpec mode. Can be ´add´, ´change´ or undefined.
             */
            mode: {
                type: String
            },
            /**
             * Array of ´odd-model´ Elements
             */
            models: {
                type: Array
            },
            /**
             * the odd file being edited
             */
            odd: {
                type: String,
                reflect: true
            },
            /**
             * array of ´element-spec´ Elements of given odd file
             */
            elementSpecs: {
                type: Array
            },
            source: {
                type: String
            },
            title: {
                type: String
            },
            titleShort: {
                type: String,
                reflect: true,
                attribute: 'title-short'
            },
            description: {
                type: String
            },
            namespace: {
                type: String
            },
            rootPath: {
                type: String,
                attribute: 'root-path'
            },
            loading: {
                type: Boolean
            },
            indentString: {
                type: String
            },
            outputPrefix: {
                type: String,
                attribute: 'output-prefix'
            },
            outputRoot: {
                type: String,
                attribute: 'output-root'
            },
            currentSelection: {
                type: Object
            },
            useNamespace: {
                type: Boolean
            },
            loggedIn: {
                type: Boolean
            },
            tabs: {
                type: Array
            },
            tabIndex: {
                type: Number,
                reflect: true
            }

        };
    }

    constructor() {
        super();
        this.ident = '';
        this.mode = '';
        this.models = () => [];
        this.odd = '';
        this.elementSpecs = [];
        this.source = '';
        this.title = '';
        this.titleShort = '';
        this.description = '';
        this.namespace = '';
        this.rootPath = '';
        this.loading = false;
        this.indentString = '    ';
        this.outputPrefix = '';
        this.outputRoot = '';
        this.currentSelection = {};
        this.useNamespace = false;
        this.loggedIn = true;
        this.tabs = [];
        this.tabIndex = undefined;
        this.selectedNavIndex = 0;
    }

    render() {
        return html`
        <iron-ajax id="loadContent"
                handle-as="json" content-type="application/x-www-form-urlencoded"
                with-credentials
                method="GET"></iron-ajax>

        <iron-ajax id="saveOdd"
                handle-as="json" content-type="application/x-www-form-urlencoded"
                with-credentials
                method="POST"></iron-ajax>

        <div id="layout">
            <div id="drawer">
                <div class="wrapper">
                    <slot id="slot"></slot>
                    <h3>
                        <span>${this.odd}</span>

                        <span class="icons">
                            <pb-edit-xml id="editSource"><paper-icon-button icon="code" title="${translate('odd.editor.odd-source')}"></paper-icon-button></pb-edit-xml>
                            <paper-icon-button @click="${this._reload}" icon="refresh" title="${translate('odd.editor.reload')}"></paper-icon-button>
                            <paper-icon-button @click="${this.save}" icon="save" title="${translate('odd.editor.save')}" ?disabled="${!this.loggedIn}"></paper-icon-button>
                        </span>
                    </h3>
                    <div id="new-element" class="input-group">
                        <paper-input id="identNew" label="${translate('odd.editor.add-element')}" always-float-label="always-float-label">
                            <paper-icon-button slot="suffix" @click="${this.addElementSpec}" icon="add" tabindex="-1"></paper-icon-button>
                        </paper-input>
                    </div>

                    <div id="jump-to">
                        <paper-autocomplete id="jumpTo" label="${translate('odd.editor.jump-to')}" always-float-label="always-float-label"></paper-autocomplete>
                    </div>
                    
                    <h3>${translate('odd.editor.specs')}</h3>
                    <div class="navlist">
                        ${repeat(this.elementSpecs, (i) => i.ident, (i, index) =>
            html`
                            <paper-item id="es_${i.ident}"
                                index="${index}"
                                @click="${(ev) => this._openElementSpec(ev, index)}">${i.ident}</paper-item>
                        `)}
                    </div>
                </div>

            </div>
            <section class="specs" id="specs">
    
                <paper-card class="metadata">
                    <pb-collapse id="meta">
                        <h4 slot="collapse-trigger" class="panel-title">
                            ${this._computedTitle()}
                        </h4>
                        <div slot="collapse-content">
                            <paper-input id="title" name="title" value="${this.title}" label="${translate('odd.editor.title')}"
                                         placeholder="[${translate('odd.editor.title-placeholder')}]"
                                         @change="${this._inputTitle}"></paper-input>
                            <paper-input id="titleShort" name="short-title" .value="${this.titleShort}" label="${translate('odd.editor.title-short')}"
                                         placeholder="[${translate('odd.editor.title-short-placeholder')}]"
                                         @change="${(e) => this.titleShort = e.composedPath()[0].value}"></paper-input>
                            <paper-input id="description" name="description" .value="${ifDefined(this.description)}" label="${translate('odd.editor.description-label')}"
                                      placeholder="[${translate('odd.editor.description-placeholder')}]"
                                      @change="${(e) => this.description = e.composedPath()[0].value}"></paper-input>
                            <paper-input id="source" name="source" ?value="${this.source}" label="${translate('odd.editor.source-label')}"
                                         placeholder="[${translate('odd.editor.source-placeholder')}]"
                                         @change="${(e) => this.source = e.composedPath()[0].value}"></paper-input>
                            <paper-checkbox id="useNamespace" @change="${this.setUseNamespace}">${translate('odd.editor.use-namespace')}</paper-checkbox>
                            <paper-input id="namespace" name="namespace" value="${this.namespace}" label="Namespace" ?disabled="${!this.useNamespace}"
                                         placeholder="[${translate('odd.editor.namespace-placeholder')}]"
                                         @change="${(e) => this.namespace = e.composedPath()[0].value}"></paper-input>
                        </div>
                    </pb-collapse>
                </paper-card>
    
                <!-- todo: import elementspec to make it function  -->
    
                <div class="editingView">
                    <vaadin-tabs id="tabs" selected="${this.tabIndex}">
                        ${repeat(this.tabs, (i) => i.id, (i, index) =>
                html`
                            <vaadin-tab name="${i}" @click="${(e) => this._selectTab(e, i)}"><span style="padding-right:20px;">${i}</span><paper-icon-button icon="close" @click="${(ev) => this._closeTabHandler(ev, index)}"></paper-icon-button></vaadin-tab>
                        `)}                    
                    </vaadin-tabs>
                                       
                    <div id="currentElement"></div>
                </div>
            </section>
            
        </div>


        <pb-message id="dialog" hidden></pb-message>
        <pb-message id="errorMsg"></pb-message>
        `;
    }

    firstUpdated(changedProperties) {
        this.shadowRoot.getElementById('useNamespace').checked = this.useNamespace;

        // console.log('firstUpdated ', changedProperties);
        // console.log('firstUpdated endpoint', this.getEndpoint());
        // console.log('firstUpdated rootpath', this.rootPath);
        this.jumpCtrl = this.shadowRoot.getElementById('jumpTo');
        this.jumpCtrl.addEventListener('autocomplete-selected', this.jumpTo.bind(this));

        const oddSelector = this.querySelector('odd-selector');

        if (this.odd && oddSelector) {
            oddSelector.selected = this.odd;

            oddSelector.addEventListener('odd-selected', e => {
                if (confirm('Any unsaved changes will be lost. Continue?')) {
                    this.odd = e.detail.odd;
                    window.history.pushState({}, "", '?odd=' + this.odd)
                }
                oddSelector.selected = this.odd;
            })
        }

        this.addEventListener('current-changed', this._changeSelection);
        this.addEventListener('odd-copy', e => this._copy(e));
        this.addEventListener('odd-paste', e => this._paste(e));
        this.addEventListener('element-spec-removed', this.removeElementSpec.bind(this));

        window.addEventListener('beforeunload', () => 'Any unsaved changes will be lost. Continue?');

        this.subscribeTo('pb-login', (ev) => {
            this.loggedIn = ev.detail.user != null;
        });

        this.focus();

        this.loadContent = this.shadowRoot.getElementById('loadContent');

        // it is unclear to me why root-path is not read from attribute without this explicit call
        this.rootPath = this.getAttribute('root-path');
        this.load();
        this.inited = true;


    }

    setUseNamespace() {
        this.useNamespace = this.shadowRoot.getElementById('useNamespace').checked;
    }

    async load() {
        if (this.loading) {
            return;
        }
        this.loading = true;

        if (this.rootPath === '' || this.odd === '') {
            return;
        }

        // reset
        this.elementSpecs = [];

        document.dispatchEvent(new CustomEvent('pb-start-update'));


        // this.$.editSource.setPath(this.rootPath + '/' + this.odd);
        const editSrc = this.shadowRoot.getElementById('editSource');
        editSrc.setPath(this.rootPath + '/' + this.odd);
        // this.shadowRoot.getElementById('editSource').setPath(this.rootPath + '/' + this.odd)

        const params = { odd: this.odd, root: this.rootPath };

        // this.$.loadContent.params = params;
        this.loadContent.params = params;
        this.loadContent.url = `${this.getEndpoint()}/modules/editor.xql`;
        const request = this.loadContent.generateRequest();

        request.completes.then(r => this.handleOdd(r));
    }

    handleOdd(req) {
        const data = req.response;
        this.source = data.source;
        this.title = data.title;
        this.titleShort = data.titleShort;
        this.description = data.description;

        this.namespace = data.namespace != null ? data.namespace : '';
        this.useNamespace = data.namespace != null;

        //update elementSpecs
        this.elementSpecs = data.elementSpecs.map(es => this.mapElementSpec(es));

        //init auto-complete list
        // const jumpTo = this.shadowRoot.getElementById('jumpTo');
        // jumpTo.source = this.elementSpecs.map(this._specMapper);
        this._updateAutoComplete();

        this.requestUpdate();

        this.loading = false;
        document.dispatchEvent(new CustomEvent('pb-end-update'));

        document.title = this.titleShort;
    }

    _updateAutoComplete() {
        const jumpTo = this.shadowRoot.getElementById('jumpTo');
        jumpTo.source = this.elementSpecs.map(this._specMapper);
    }

    /**
     * handler for paper-item in navigation list in the drawer
     *
     * @param e
     * @param index
     * @private
     */
    _navlistActiveChanged(e, index) {
        // set the paper-item active that got the click
        this.selectedNavIndex = index;
        this.requestUpdate();
    }

    _returnTabs() {
        return this.tabs;
    }

    _selectTab(e, item) {
        const spec = this.elementSpecs.find(theSpec => theSpec.ident === item);
        this._updateElementspec(spec);
    }

    _openElementSpec(ev, index) {
        console.log('_openElementSpec ', ev, index);

        const spec = this.elementSpecs[index]; //get target elementspec
        this._updateElementspec(spec);

        const ident = spec.ident;

        // do not re-open existing tab, but select it
        if (this.tabs.indexOf(ident) >= 0) {
            this.tabIndex = this.tabs.indexOf(ident);
            this.requestUpdate();
            return;
        }

        this.tabs.push(ident);
        this.tabIndex = this.tabs.length - 1;
        this.requestUpdate();
    }

    _updateElementspec(elementSpec) {
        // const spec = this.elementSpecs.find(theSpec => theSpec.ident === specIdent);

        // reset - delete current element if there's one
        const currentElement = this.shadowRoot.getElementById('currentElement');
        currentElement.innerHTML = "";

        // create new elementspec
        const newElementSpec = new PbOddElementspecEditor();
        newElementSpec.addEventListener('element-spec-changed', this.handleElementSpecChanged.bind(this));
        newElementSpec.ident = elementSpec.ident;
        newElementSpec.models = elementSpec.models;
        newElementSpec.mode = elementSpec.mode;
        newElementSpec.endpoint = this._endpoint;
        currentElement.appendChild(newElementSpec);
    }

    _closeTabHandler(ev, index) {
        console.log('_closeTabHandler ', index);
        ev.preventDefault();
        ev.stopPropagation();

        this._closeTab(index);
        return false;
    }

    _closeTab(index) {
        this.tabs.splice(index, 1);
        // last tab closed
        if (this.tabs.length === 0) {
            this.shadowRoot.getElementById('currentElement').innerHTML = '';
            this.tabIndex = 0;
            this.tabs = [];
        }
        // a tab left of selected tab or current tab closed
        else if (this.tabIndex > 0 && this.tabIndex >= index) {
            // decrease tabIndex by one
            this.tabIndex -= 1;
        }

        this.requestUpdate();
    }

    attributeChangedCallback(name, oldVal, newVal) {
        // console.log('attributeChangedCallback', name, oldVal, newVal);

        super.attributeChangedCallback(name, oldVal, newVal);
        if (name == 'odd' && oldVal !== newVal) {
            // console.log('<pb-document> Emit update event');
            // this.emitTo('pb-odd-editor', this);
            if (this.inited) {
                this.load();
            }
        }
    }

    static get replaceCharMap() {
        return {
            '"': '&quot;',
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;'
        }
    };

    static get replaceCharRegexp() {
        return /"|&|<|>/g
    }

    static replaceChars(match) {
        return PbOddEditor.replaceCharMap[match];
    }

    jumpTo(e) {
        const jumpCtrl = this.shadowRoot.getElementById('jumpTo');
        const id = '#es_' + jumpCtrl.text;
        const target = this.shadowRoot.querySelector(id);
        if (!target) {
            return
        }

        this.jumpCtrl.clear();
        target.click();
    }

    _computedTitle() {
        if (!this.odd) {
            return ''
        }
        return this.title || this.titleShort || this.odd || 'Loading ...'
    }

    _copy(e) {
        // console.log('odd-editor._copy ', e);
        this.clipboard = e.detail.model;
        const clone = JSON.parse(JSON.stringify(e.detail.model));
        this.clipboard = clone;
    }

    _paste(e) {
        console.log('_paste ', e);
        console.log('_paste clipboard', this.clipboard);

        if (this.clipboard == {} || this.clipboard == undefined) {
            return;
        }
        const targetElement = e.detail.target;
        targetElement.addModel(this.clipboard);
        targetElement.render();
    }

    _specMapper(spec) {
        return {
            text: spec.ident,
            value: spec.ident
        };
    }

    _specObserver(changeRecord) {
        const source = this.elementSpecs.map(this._specMapper);
        this.jumpCtrl.source = source;
    }

    mapElementSpec(elementSpec) {
        return {
            ...elementSpec,
            models: elementSpec.models.map(m => this.addShowToModel(m))
        }
    }

    addShowToModel(model) {
        if (model.models) {
            const extendedModels = model.models.map(m => this.addShowToModel(m))
            return { ...model, models: extendedModels, show: false }
        }
        return { ...model, show: false }
    }

    addElementSpec(ev) {
        // const ident = this.$.identNew.value;
        const identNew = this.shadowRoot.getElementById('identNew');

        const ident = identNew.value;
        if (!ident || ident.length === 0) {
            return;
        }
        const params = {
            action: "find",
            odd: this.odd,
            root: this.rootPath,
            ident
        };
        this.loadContent.params = params;
        this.loadContent.url = `${this.getEndpoint()}/modules/editor.xql`;
        let request = this.loadContent.generateRequest();
        request.completes.then(this._handleElementSpecResponse.bind(this));
    }


    async _handleElementSpecResponse(req) {
        const identNew = this.shadowRoot.getElementById('identNew');

        const data = req.response;
        const ident = identNew.value
        const mode = (data.status === 'not-found' ? 'add' : 'change');
        const models = data.models || [];
        const newSpec = {
            ident,
            mode,
            models
        };

        this.elementSpecs.unshift(newSpec);
        // trigger update of autocomplete list in jumpTo
        identNew.value = '';

        //open new tab with newly created element
        this.tabs.push(ident);
        this.tabIndex = this.tabs.length - 1;

        this.elementSpecs.sort((a, b) => a.ident.localeCompare(b.ident));

        await this.update();
        const elem = this.shadowRoot.querySelectorAll('paper-item');
        const idx = this.elementSpecs.indexOf(newSpec);

        this._updateAutoComplete();

        elem[idx].click();
        elem[idx].focus();
    }

    removeElementSpec(ev) {
        const ident = ev.detail.target.ident;
        this.shadowRoot.getElementById('dialog')
            .confirm(i18n('browse.delete'), i18n('odd.editor.delete-spec', { ident }))
            .then(() => {
                const targetIndex = this.elementSpecs.findIndex(theSpec => theSpec.ident === ident);
                this.elementSpecs.splice(targetIndex, 1);
                this.requestUpdate();


                const selectedTab = this.shadowRoot.querySelector('vaadin-tab[selected]');
                const tabName = selectedTab.getAttribute('name');
                const idx = this.tabs.indexOf(tabName);
                this._closeTab(idx);
            }, () => null);
    }

    serializeOdd() {
        const ns = this.useNamespace ? ` ns="${this.namespace}"` : '';
        const source = this.source ? ` source="${this.source}"` : '';
        const description = this.description ? ` <desc>${this.description}</desc>` : '';
        const title = `${this.indentString}<title>${this.title}${description}</title>\n`;
        const titleShort = this.titleShort ? `${this.indentString}<title type="short">${this.titleShort}</title>\n` : '';
        const elementSpecs = this.elementSpecs
            .map(e => this.serializeElementSpec(this.indentString, e)).join('');

        return `<schemaSpec xmlns="http://www.tei-c.org/ns/1.0" xmlns:pb="http://teipublisher.com/1.0"${ns}${source}>\n${title}${titleShort}${elementSpecs}</schemaSpec>\n`
    }

    serializeElementSpec(indent, elementSpec) {
        const mode = elementSpec.mode ? ` mode="${elementSpec.mode}"` : '';
        const indent2 = indent + this.indentString
        const models = elementSpec.models
            .map(m => this.serializeModel(indent2, m))
            .join('')

        return `${indent}<elementSpec ident="${elementSpec.ident}"${mode}>\n${models}${indent}</elementSpec>\n`;
    }

    serializeModel(indent, model) {
        if (model.type === 'model' && !model.behaviour) {
            return '';
        }

        const nestedIndent = indent + this.indentString;

        const attributes = [
            this.serializeAttribute('output', model.output),
            this.serializeAttribute('predicate', model.predicate),
            model.type === 'model' ? this.serializeAttribute('behaviour', model.behaviour) : '',
            this.serializeAttribute('cssClass', model.css),
            this.serializeAttribute('useSourceRendition', model.sourcerend)
        ].join('')

        const desc = model.desc ? nestedIndent + '<desc>' + model.desc + '</desc>\n' : '';

        // innerXML += this.serializeTag('model', nestedIndent);
        const models = model.models.map(m => this.serializeModel(nestedIndent, m)).join('');
        const parameters = model.parameters.map(p => this.serializeParameter(nestedIndent, p)).join('');
        const renditions = model.renditions.map(r => this.serializeRendition(nestedIndent, r)).join('');
        const template = PbOddEditor.serializeTemplate(nestedIndent, model.template);
        const innerXML = `${desc}${models}${parameters}${template}${renditions}`;
        const end = (innerXML.length > 0) ? `>\n${innerXML}${indent}</${model.type}` : '/';

        return `${indent}<${model.type}${attributes}${end}>\n`
    }

    serializeParameter(indent, parameter) {
        if (!parameter.name) {
            return '';
        }
        const name = this.serializeAttribute('name', parameter.name);
        const value = this.serializeAttribute('value', parameter.value);
        return `${indent}<param${name}${value}/>\n`
    }

    serializeRendition(indent, rendition) {
        const scope = this.serializeAttribute('scope', rendition.scope);
        const css = PbOddEditor.escape(rendition.css);
        return `${indent}<outputRendition xml:space="preserve" ${scope}>\n${indent}${css}\n${indent}</outputRendition>\n`;
    }

    static serializeTemplate(indent, template) {
        if (!template) {
            return '';
        }
        return `${indent}<pb:template xml:space="preserve" xmlns="">${template}</pb:template>\n`;
    }

    serializeAttribute(name, value) {
        return value ? ` ${name}="${PbOddEditor.escape(value)}"` : ''
    }

    static escape(code) {
        if (!code) {
            return '';
        }
        if (typeof code === 'string') {
            return code.replace(PbOddEditor.replaceCharRegexp, PbOddEditor.replaceChars);
        }
        return code;
    }

    save(e) {
        document.dispatchEvent(new CustomEvent('pb-start-update'));
        const data = this.serializeOdd()
        console.log('serialised ODD:', data)

        this.shadowRoot.getElementById('dialog').show(i18n("odd.editor.save"), i18n('odd.editor.saving'));

        const saveOdd = this.shadowRoot.getElementById('saveOdd');
        saveOdd.url = `${this.getEndpoint()}/modules/editor.xql`;
        saveOdd.params = null;
        saveOdd.body = {
            action: "save",
            root: this.rootPath,
            "output-prefix": this.outputPrefix,
            "output-root": this.outputRoot,
            odd: this.odd,
            data
        };
        const request = saveOdd.generateRequest();
        request.completes
            .then(this.handleSaveComplete.bind(this))
            .catch(this.handleSaveError.bind(this));
    }

    static _renderReport(report) {
        if (report.error) {
            return `
                        <div class="list-group-item-danger">
                          <h4 class="list-group-item-heading">${report.file}</h4>
                          <h5 class="list-group-item-heading">Compilation error on line ${report.line}:</h5>
                          <pre class="list-group-item-text">${report.error}</pre>
                          <pre class="list-group-item-text">${report.message}</pre>
                        </div>
                    `;
        }
        return `
                    <div class="list-group-item-success">
                      <p class="list-group-item-text">Generated ${report.file}</p>
                    </div>
                `;
    }

    handleSaveComplete(req) {
        const data = req.response;
        const report = data.report.map(PbOddEditor._renderReport);
        const msg = `<div class="list-group">${report.join('')}</div>`;
        this.shadowRoot.getElementById('dialog').set(i18n("odd.editor.saved"), msg);
        document.dispatchEvent(new CustomEvent('pb-end-update'));
    }

    handleSaveError(rejected) {
        this.shadowRoot.getElementById('dialog').set("Error", rejected.error);
        // this.$.dialog.set("Error", rejected.error);
        document.dispatchEvent(new CustomEvent('pb-end-update'));
    }

    _reload() {
        this.shadowRoot.getElementById('dialog')
            .confirm(i18n('odd.editor.reload'), i18n('odd.editor.reload-confirm'))
            .then(() => {
                this.load();
                this.tabs = [];
                this.tabIndex = 0;
                this.shadowRoot.getElementById('currentElement').innerHTML = '';
            }, () => null);
    }

    _setCurrentSelection(e) {
        if (this.currentSelection != undefined) {
            this.currentSelection.removeAttribute('currentselection');
        }
        this.currentSelection = e.target;
        this.currentSelection.setAttribute('currentselection', 'true');
    }


    _changeSelection(ev) {
        ev.preventDefault();
        ev.stopPropagation();

        if (ev.detail.target === this) return;

        if (this.currentSelection &&
            this.currentSelection.tagName !== undefined) {
            this.currentSelection.removeAttribute('currentselection');
        }

        let newSelection;
        if (ev.detail.target) {
            newSelection = ev.detail.target;
        } else {
            newSelection = ev.target;
        }
        newSelection.setAttribute('currentselection', 'true');
        this.currentSelection = newSelection;
    }

    _selectElementspec(e) {
        if (this.currentElementSpec &&
            this.currentElementSpec.tagName === 'PB-ODD-ELEMENTSPEC-EDITOR') {
            this.currentElementSpec.removeAttribute('currentselection');
        }
        const newSelection = e.target;
        newSelection.setAttribute('currentselection', 'true');
        this.currentElementSpec = newSelection;
    }

    nsDisabled() {
        return !this.useNamespace;
    }

    _handleLoadError(e) {
        console.log('loading error occurred: ', e);
        const msg = this.shadowRoot.getElementById('errorMsg');
        msg.style.background = 'red';
        const url = this.shadowRoot.getElementById('loadContent').url;
        console.log('url ', url);
        msg.show('Error: ', 'ODD file could not be loaded from ' + url);
    }


    handleElementSpecChanged(e) {
        // console.log('handleElementSpecChanged ',e);
        const elementSpec = this.elementSpecs.find(es => es.ident === e.detail.ident);
        const index = this.elementSpecs.indexOf(elementSpec)
        const newSpec = { ...elementSpec, models: e.detail.models }
        const allSpecs = [...this.elementSpecs]
        allSpecs.splice(index, 1, newSpec)
        this.elementSpecs = allSpecs;
        // console.log('updated elementspecs ', this.elementSpecs);

    }

    _inputTitle(ev) {
        this.title = ev.composedPath()[0].value;
    }

}

customElements.define('pb-odd-editor', PbOddEditor);
