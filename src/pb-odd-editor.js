// @ts-nocheck
import { LitElement, html, css } from 'lit';
import { supported as fsSupported, fileSave } from 'browser-fs-access';
import { repeat } from 'lit/directives/repeat.js';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { pbHotkeys } from './pb-hotkeys.js';

import '@vaadin/vaadin-tabs/vaadin-tabs';
import '@vaadin/vaadin-tabs/vaadin-tab';

import './pb-fetch.js';
import './pb-edit-xml.js';
import './pb-icon-button.js';
import './pb-autocomplete.js';
import './pb-collapse';
import { PbOddElementspecEditor } from './pb-odd-elementspec-editor.js';
import './pb-message.js';

import { get as i18n, translate } from './pb-i18n.js';

/**
 * ODD editor component
 *
 * @slot - default unnamed slot
 * @fires pb-login - When received, registers if user is logged in
 * @cssprop --pb-heading-font-family - font family used for headings
 * @cssprop --pb-heading-font-weight
 * @cssprop --pb-heading-line-height
 */
export class PbOddEditor extends pbHotkeys(pbMixin(LitElement)) {
  static get styles() {
    return css`
      :host {
        display: flex;
        /*margin: 30px 20px;*/
        margin: 0;
        padding: 0;
        height: auto;
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

      .nav-item {
        display: block;
        width: 100%;
        padding: 8px 16px;
        border: none;
        background: transparent;
        text-align: left;
        font: inherit;
        color: inherit;
        cursor: pointer;
        transition: background-color 120ms ease;
      }

      .nav-item:hover,
      .nav-item:focus-visible {
        background: rgba(33, 150, 243, 0.12);
        outline: none;
      }

      .nav-item--active {
        background: rgba(33, 150, 243, 0.2);
        font-weight: 600;
      }

      .specs {
        grid-column: 2 / 2;
        grid-row: 1 / span 2;
        overflow: auto;
      }

      section {
        padding: 20px;
      }

      h3,
      h4 {
        font-family: var(--pb-heading-font-family);
        font-weight: var(--pb-heading-font-weight);
        line-height: var(--pb-heading-line-height);
      }

      /* ported over but not checked yet */

      .specs {
        padding: 6px;
      }

      .metadata-card {
        display: block;
        margin-bottom: 16px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        border-radius: 12px;
        background: #fff;
        overflow: hidden;
      }

      .metadata-card div {
        padding: 0 16px 16px;
      }

      .pb-field {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        margin-bottom: 10px;
      }

      .pb-field__label {
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: rgba(0, 0, 0, 0.6);
      }

      .pb-input {
        width: 100%;
        height: var(--pb-input-height, 48px);
        padding: 0.5rem 0.75rem;
        border: 1px solid rgba(0, 0, 0, 0.16);
        border-radius: 8px;
        font: inherit;
        color: inherit;
        background: #fff;
        transition: border-color 120ms ease, box-shadow 120ms ease;
      }

      .pb-input::placeholder {
        color: rgba(0, 0, 0, 0.4);
      }

      .pb-input:focus {
        outline: none;
        border-color: #1976d2;
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.16);
      }

      .pb-checkbox {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 10px 0;
        font-size: 0.95rem;
      }

      .pb-checkbox input {
        width: 16px;
        height: 16px;
      }

      .pb-input-with-button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .pb-input-with-button pb-icon-button {
        margin: 0;
      }

      .metadata-card .extCssEdit {
        display: flex;
        align-items: center;
        padding: 0;
      }
      .metadata-card .extCssEdit .pb-input {
        flex: 2;
      }
      .metadata-card .extCssEdit pb-edit-xml {
        width: 40px;
      }

      #jump-to {
        margin-top: 1em;
      }

      odd-model {
        border-bottom: 1px solid #e0e0e0;
      }
      odd-model h4 {
        margin-top: 15px;
        padding-top: 5px;
        border-top: 1px solid #e0e0e0;
      }
      .renditions {
        margin-top: 10px;
      }
      .icons {
        display: inline-block;
        white-space: nowrap;
      }

      details {
        --details-transition-duration: 0.8s;
      }
      details[open] {
        padding: 0;
      }

      pb-message#errorMsg {
        background: var(--paper-red-500);
        color: white;
      }
      .card-content {
        height: 100%;
        overflow: auto;
      }

      .pb-tab {
        width: 100px;
      }

      .editingView {
        width: 100%;
      }

      vaadin-tabs {
        margin-top: 10px;
      }

      vaadin-tab {
        background: var(--paper-grey-200);
        padding: 0 6px;
        border: thin solid var(--paper-grey-300);
        border-bottom: none;
      }
      vaadin-tab[selected] {
        background: white;
        border-top-right-radius: 20px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
          0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }
    `;
  }

  static get properties() {
    return {
      ...super.properties,
      ident: {
        type: String,
      },
      /**
       * ElementSpec mode. Can be ´add´, ´change´ or undefined.
       */
      mode: {
        type: String,
      },
      /**
       * Array of ´odd-model´ Elements
       */
      models: {
        type: Array,
      },
      /**
       * the odd file being edited
       */
      odd: {
        type: String,
        reflect: true,
      },
      /**
       * array of ´element-spec´ Elements of given odd file
       */
      elementSpecs: {
        type: Array,
      },
      source: {
        type: String,
      },
      title: {
        type: String,
      },
      titleShort: {
        type: String,
        reflect: true,
        attribute: 'title-short',
      },
      description: {
        type: String,
      },
      namespace: {
        type: String,
      },
      rootPath: {
        type: String,
        attribute: 'root-path',
      },
      loading: {
        type: Boolean,
      },
      indentString: {
        type: String,
      },
      outputPrefix: {
        type: String,
        attribute: 'output-prefix',
      },
      outputRoot: {
        type: String,
        attribute: 'output-root',
      },
      currentSelection: {
        type: Object,
      },
      useNamespace: {
        type: Boolean,
      },
      loggedIn: {
        type: Boolean,
      },
      tabs: {
        type: Array,
      },
      tabIndex: {
        type: Number,
        reflect: true,
      },
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
    this._tabs = [];
    this.tabIndex = undefined;
    this.selectedNavIndex = 0;
    this.cssFile = '';
    this.hotkeys = {
      save: 'ctrl+shift+s,command+shift+s',
    };
    this._hasChanges = false;
  }

  get tabs() {
    if (!this._tabs) {
      this._tabs = [];
    }
    return this._tabs;
  }

  set tabs(value) {
    this._tabs = Array.isArray(value) ? value : [];
  }

  get safeTabs() {
    const tabs = this._tabs || [];
    return Array.isArray(tabs) ? tabs : [];
  }

  render() {
    return html`
      <pb-fetch
        id="loadContent"
        handle-as="json"
        content-type="application/x-www-form-urlencoded"
        with-credentials
        method="GET"
      ></pb-fetch>

      <pb-fetch id="saveOdd" handle-as="json" with-credentials></pb-fetch>

      <div id="layout">
        <div id="drawer">
          <slot id="slot"></slot>
          <h3>
            <span>${this.odd}</span>

            <span class="icons">
              <pb-edit-xml id="editSource"
                ><pb-icon-button
                  icon="code"
                  title="${translate('odd.editor.odd-source')}"
                ></pb-icon-button
              ></pb-edit-xml>
              <pb-icon-button
                @click="${() => this.save(true)}"
                icon="icons:cloud-download"
                title="${fsSupported
                  ? translate('odd.editor.save-as')
                  : translate('odd.editor.download')}"
              ></pb-icon-button>
              <pb-icon-button
                @click="${this._reload}"
                icon="refresh"
                title="${translate('odd.editor.reload')}"
              ></pb-icon-button>
              <pb-icon-button
                @click="${() => this.save(false)}"
                icon="save"
                title="${translate('odd.editor.save')} ${this.display('save')}"
                ?disabled="${!this.loggedIn}"
              ></pb-icon-button>
            </span>
          </h3>
          <div id="new-element" class="input-group">
            <label class="pb-field">
              <span class="pb-field__label">${translate('odd.editor.add-element')}</span>
              <div class="pb-input-with-button">
                <input
                  id="identNew"
                  class="pb-input"
                  name="ident-new"
                  placeholder="${translate('odd.editor.add-element')}"
                />
                <pb-icon-button
                  @click="${this.addElementSpec}"
                  icon="add"
                  tabindex="-1"
                ></pb-icon-button>
              </div>
            </label>
          </div>

          <div id="jump-to">
            <pb-autocomplete
              id="jumpTo"
              placeholder="${translate('odd.editor.jump-to')}"
            ></pb-autocomplete>
          </div>

          <h3>${translate('odd.editor.specs')}</h3>
        </div>
        <div id="navlist">
          ${repeat(
            this.elementSpecs || [],
            i => i.ident,
            (i, index) =>
              html`
                <button
                  id="es_${i.ident}"
                  type="button"
                  class="nav-item ${this.selectedNavIndex === index ? 'nav-item--active' : ''}"
                  @click="${ev => this._openElementSpec(ev, index)}"
                >
                  ${i.ident}
                </button>
              `,
          )}
        </div>
        <section class="specs" id="specs">
          <div class="metadata-card">
            <pb-collapse id="meta">
              <h4 slot="collapse-trigger" class="panel-title">${this._computedTitle()}</h4>
              <div slot="collapse-content">
                <label class="pb-field">
                  <span class="pb-field__label">${translate('odd.editor.title')}</span>
                  <input
                    id="title"
                    class="pb-input"
                    name="title"
                    .value=${this.title || ''}
                    placeholder="[${translate('odd.editor.title-placeholder')}]"
                    @change=${this._inputTitle}
                  />
                </label>
                <label class="pb-field">
                  <span class="pb-field__label">${translate('odd.editor.title-short')}</span>
                  <input
                    id="titleShort"
                    class="pb-input"
                    name="short-title"
                    .value=${this.titleShort || ''}
                    placeholder="[${translate('odd.editor.title-short-placeholder')}]"
                    @change=${e => (this.titleShort = e.target.value)}
                  />
                </label>
                <label class="pb-field">
                  <span class="pb-field__label">${translate('odd.editor.description-label')}</span>
                  <input
                    id="description"
                    class="pb-input"
                    name="description"
                    .value=${this.description || ''}
                    placeholder="[${translate('odd.editor.description-placeholder')}]"
                    @change=${e => (this.description = e.target.value)}
                  />
                </label>
                <label class="pb-field">
                  <span class="pb-field__label">${translate('odd.editor.source-label')}</span>
                  <input
                    id="source"
                    class="pb-input"
                    name="source"
                    .value=${this.source || ''}
                    placeholder="[${translate('odd.editor.source-placeholder')}]"
                    @change=${e => (this.source = e.target.value)}
                  />
                </label>
                <label class="pb-checkbox">
                  <input
                    id="useNamespace"
                    type="checkbox"
                    ?checked=${this.useNamespace}
                    @change=${this.setUseNamespace}
                  />
                  <span>${translate('odd.editor.use-namespace')}</span>
                </label>
                <label class="pb-field">
                  <span class="pb-field__label">Namespace</span>
                  <input
                    id="namespace"
                    class="pb-input"
                    name="namespace"
                    .value=${this.namespace || ''}
                    ?disabled=${!this.useNamespace}
                    placeholder="[${translate('odd.editor.namespace-placeholder')}]"
                    @change=${e => (this.namespace = e.target.value)}
                  />
                </label>
                <div class="extCssEdit">
                  <input
                    name="cssFile"
                    class="pb-input"
                    .value=${this.cssFile || ''}
                    placeholder="[External CSS file with additional class definitions]"
                    @change=${this._cssFileChanged}
                  />
                  <pb-edit-xml id="editCSS"
                    ><pb-icon-button
                      icon="create"
                      title="${translate('odd.editor.css-source')}"
                    ></pb-icon-button
                  ></pb-edit-xml>
                </div>
              </div>
            </pb-collapse>
          </div>

          <!-- todo: import elementspec to make it function  -->

          <div class="editingView">
            <vaadin-tabs id="tabs" selected="${this.tabIndex || 0}">
              ${repeat(
                this.tabs || [],
                i => i,
                (i, index) =>
                  html`
                    <vaadin-tab name="${i}" @click="${e => this._selectTab(e, i)}"
                      ><span style="padding-right:20px;">${i}</span
                      ><pb-icon-button
                        icon="close"
                        @click="${ev => this._closeTabHandler(ev, index)}"
                      ></pb-icon-button
                    ></vaadin-tab>
                  `,
              )}
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
    this.jumpCtrl.addEventListener('pb-autocomplete-selected', this.jumpTo.bind(this));

    const oddSelector = this.querySelector('odd-selector');

    if (this.odd && oddSelector) {
      oddSelector.selected = this.odd;

      oddSelector.addEventListener('odd-selected', e => {
        if (confirm('Any unsaved changes will be lost. Continue?')) {
          this.odd = e.detail.odd;
          window.history.pushState({}, '', `?odd=${this.odd}`);
        }
        oddSelector.selected = this.odd;
      });
    }

    this.addEventListener('current-changed', this._changeSelection);
    this.addEventListener('odd-copy', e => this._copy(e));
    this.addEventListener('odd-paste', e => this._paste(e));
    this.addEventListener('element-spec-removed', this.removeElementSpec.bind(this));

    window.addEventListener('beforeunload', () => 'Any unsaved changes will be lost. Continue?');

    this.subscribeTo('pb-login', ev => {
      this.loggedIn = ev.detail.user != null;
    });

    this.focus();

    this.loadContent = this.shadowRoot.getElementById('loadContent');

    // it is unclear to me why root-path is not read from attribute without this explicit call
    this.rootPath = this.getAttribute('root-path');

    waitOnce('pb-page-ready', () => {
      this.load();
      this.inited = true;
    });

    this.registerHotkey('save', () => this.save(false));
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
    this._tabs = [];
    this.tabIndex = 0;

    document.dispatchEvent(new CustomEvent('pb-start-update'));

    // this.$.editSource.setPath(this.rootPath + '/' + this.odd);
    const editSrc = this.shadowRoot.getElementById('editSource');
    editSrc.setPath(`${this.rootPath}/${this.odd}`);
    // this.shadowRoot.getElementById('editSource').setPath(this.rootPath + '/' + this.odd)

    const params = { odd: this.odd, root: this.rootPath };

    // this.$.loadContent.params = params;
    this.loadContent.params = params;
    this.loadContent.url = `${this.getEndpoint()}/${
      this.lessThanApiVersion('1.0.0') ? 'modules/editor.xql' : `api/odd/${this.odd}`
    }`;
    const request = this.loadContent.generateRequest();

    this._hasChanges = false;
    request.then(data => this.handleOdd({ response: data }))
           .catch(error => {
             console.warn('pb-odd-editor: Failed to load ODD data:', error);
             this.loading = false;
             document.dispatchEvent(new CustomEvent('pb-end-update'));
           });
  }

  handleOdd(req) {
    const data = req.response;
    
    // Handle case where data is null (request failed)
    if (!data) {
      console.warn('pb-odd-editor: Failed to load ODD data');
      return;
    }
    
    this.loggedIn = data.canWrite;
    this.source = data.source;
    this.title = data.title;
    this.titleShort = data.titleShort;
    this.description = data.description;
    this.cssFile = data.cssFile == null ? '' : data.cssFile;
    this.namespace = data.namespace != null ? data.namespace : '';
    this.useNamespace = data.namespace != null;

    if (this.cssFile) {
      const editCss = this.shadowRoot.getElementById('editCSS');
      editCss.setPath(`${this.rootPath}/${this.cssFile}`);
    }

    // update elementSpecs
    if (data.elementSpecs && Array.isArray(data.elementSpecs)) {
      this.elementSpecs = data.elementSpecs.map(es => this.mapElementSpec(es));
    } else {
      console.warn('pb-odd-editor: elementSpecs data is missing or invalid');
      this.elementSpecs = [];
    }

    // init auto-complete list
    // const jumpTo = this.shadowRoot.getElementById('jumpTo');
    // jumpTo.source = this.elementSpecs.map(this._specMapper);
    this._updateAutoComplete();

    this.requestUpdate();

    this.loading = false;
    document.dispatchEvent(new CustomEvent('pb-end-update'));

    document.title = this.titleShort || this.title;
  }

  _updateAutoComplete() {
    const jumpTo = this.shadowRoot.getElementById('jumpTo');
    jumpTo.suggestions = this.elementSpecs.map(this._specMapper);
  }

  _cssFileChanged(e) {
    this.cssFile = e.target.value;
    if (this.cssFile) {
      const editCss = this.shadowRoot.getElementById('editCSS');
      editCss.setPath(`${this.rootPath}/${this.cssFile}`);
    }
  }

  /**
   * Handler for navigation buttons in the drawer
   *
   * @param e
   * @param index
   * @private
   */
  _navlistActiveChanged(e, index) {
    // mark the navigation button that received the click as active
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

    const spec = this.elementSpecs[index]; // get target elementspec
    this._updateElementspec(spec);
    this.selectedNavIndex = index;
    this.requestUpdate();

    const { ident } = spec;

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
    currentElement.innerHTML = '';

    // create new elementspec
    const newElementSpec = new PbOddElementspecEditor();
    newElementSpec.addEventListener(
      'element-spec-changed',
      this.handleElementSpecChanged.bind(this),
    );
    newElementSpec.ident = elementSpec.ident;
    newElementSpec.models = elementSpec.models;
    newElementSpec.mode = elementSpec.mode;
    newElementSpec.endpoint = this._endpoint;
    newElementSpec.apiVersion = this._apiVersion;

    newElementSpec.hotkeys = this.hotkeys;
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
    const newTabs = [...this.tabs];
    newTabs.splice(index, 1);
    
    // last tab closed
    if (newTabs.length === 0) {
      this.shadowRoot.getElementById('currentElement').innerHTML = '';
      this.tabIndex = 0;
      this.tabs = [];
    }
    // a tab left of selected tab or current tab closed
    else if (this.tabIndex > 0 && this.tabIndex >= index) {
      // decrease tabIndex by one
      this.tabIndex -= 1;
      this.tabs = newTabs;

      const currentTab = this.tabs[this.tabIndex];
      this._selectTab(null, currentTab);
    } else {
      this.tabs = newTabs;
    }
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
      '>': '&gt;',
    };
  }

  static get replaceCharRegexp() {
    return /"|&|<|>/g;
  }

  static replaceChars(match) {
    return PbOddEditor.replaceCharMap[match];
  }

  jumpTo(e) {
    const ident = (e?.detail?.value || e?.detail?.text || this.jumpCtrl?.value || '').trim();
    if (!ident) {
      return;
    }
    const target = this.shadowRoot.querySelector(`#es_${ident}`);
    if (!target) {
      return;
    }

    if (this.jumpCtrl) {
      this.jumpCtrl.value = '';
    }
    target.click();
  }

  _computedTitle() {
    if (!this.odd) {
      return '';
    }
    return this.title || this.titleShort || this.odd || 'Loading ...';
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
      value: spec.ident,
    };
  }

  _specObserver(changeRecord) {
    const source = this.elementSpecs.map(this._specMapper);
    this.jumpCtrl.suggestions = source;
  }

  mapElementSpec(elementSpec) {
    return {
      ...elementSpec,
      models: elementSpec.models.map(m => this.addShowToModel(m)),
    };
  }

  addShowToModel(model) {
    if (model.models) {
      const extendedModels = model.models.map(m => this.addShowToModel(m));
      return { ...model, models: extendedModels, show: false };
    }
    return { ...model, show: false };
  }

  addElementSpec(ev) {
    // const ident = this.$.identNew.value;
    const identNew = this.shadowRoot.getElementById('identNew');

    const ident = identNew.value;
    if (!ident || ident.length === 0) {
      return;
    }
    const existingSpec = this.elementSpecs.find(spec => spec.ident === ident);
    if (existingSpec) {
      console.log('<pb-odd-editor> element spec to be added already exists: %s', ident);
      const id = `#es_${ident}`;
      const target = this.shadowRoot.querySelector(id);
      if (!target) {
        return;
      }
      target.click();
      return;
    }

    const oldApiParams = {
      action: 'find',
      odd: this.odd,
      root: this.rootPath,
      ident,
    };
    const newApiParams = {
      root: this.rootPath,
      ident,
    };

    const params = this.lessThanApiVersion('1.0.0') ? oldApiParams : newApiParams;

    this.loadContent.params = params;
    this.loadContent.url = `${this.getEndpoint()}/${
      this.lessThanApiVersion('1.0.0') ? 'modules/editor.xql' : `api/odd/${this.odd}`
    }`;
    const request = this.loadContent.generateRequest();
    request.then(data => this._handleElementSpecResponse({ response: data }));
  }

  _handleElementSpecResponse(req) {
    const identNew = this.shadowRoot.getElementById('identNew');

    const data = req.response;
    const ident = identNew.value;
    const mode = data.status === 'not-found' ? 'add' : 'change';
    const models = data.models || [];
    const newSpec = {
      ident,
      mode,
      models,
    };

    this.elementSpecs.unshift(newSpec);
    // trigger update of autocomplete list in jumpTo
    identNew.value = '';

    // open new tab with newly created element
    this.tabs.push(ident);
    this.tabIndex = this.tabs.length - 1;

    this.elementSpecs.sort((a, b) => a.ident.localeCompare(b.ident));

    this.requestUpdate().then(() => {
    const elem = this.shadowRoot.querySelectorAll('.nav-item');
      const idx = this.elementSpecs.indexOf(newSpec);

      this._updateAutoComplete();

      elem[idx].click();
      elem[idx].focus();
    });
  }

  removeElementSpec(ev) {
    const { ident } = ev.detail.target;
    this.shadowRoot
      .getElementById('dialog')
      .confirm(i18n('browse.delete'), i18n('odd.editor.delete-spec', { ident }))
      .then(
        () => {
          const targetIndex = this.elementSpecs.findIndex(theSpec => theSpec.ident === ident);
          this.elementSpecs.splice(targetIndex, 1);
          this.requestUpdate();

          const selectedTab = this.shadowRoot.querySelector('vaadin-tab[selected]');
          const tabName = selectedTab.getAttribute('name');
          const idx = this.tabs.indexOf(tabName);
          this._closeTab(idx);
        },
        () => null,
      );
  }

  serializeOdd() {
    const ns = this.useNamespace ? ` ns="${this.namespace}"` : '';
    const source = this.source ? ` source="${this.source}"` : '';
    const description = this.description ? ` <desc>${this.description}</desc>` : '';
    const title = `${this.indentString}<title>${this.title}${description}</title>\n`;
    const titleShort = this.titleShort
      ? `${this.indentString}<title type="short">${this.titleShort}</title>\n`
      : '';
    const cssFile = this.cssFile
      ? `${this.indentString}<rendition source="${this.cssFile}"/>\n`
      : '';
    const elementSpecs = this.elementSpecs
      .map(e => this.serializeElementSpec(this.indentString, e))
      .join('');

    return `<schemaSpec xmlns="http://www.tei-c.org/ns/1.0" xmlns:pb="http://teipublisher.com/1.0"${ns}${source}>\n${title}${titleShort}${cssFile}\n${elementSpecs}</schemaSpec>\n`;
  }

  serializeElementSpec(indent, elementSpec) {
    const mode = elementSpec.mode ? ` mode="${elementSpec.mode}"` : '';
    const indent2 = indent + this.indentString;
    const models = elementSpec.models.map(m => this.serializeModel(indent2, m)).join('');

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
      this.serializeAttribute('useSourceRendition', model.sourcerend),
      this.serializeAttribute('pb:mode', model.mode),
    ].join('');

    const desc = model.desc ? `${nestedIndent}<desc>${model.desc}</desc>\n` : '';

    // innerXML += this.serializeTag('model', nestedIndent);
    const models = model.models.map(m => this.serializeModel(nestedIndent, m)).join('');
    const parameters = model.parameters.map(p => this.serializeParameter(nestedIndent, p)).join('');
    const renditions = model.renditions.map(r => this.serializeRendition(nestedIndent, r)).join('');
    const template = PbOddEditor.serializeTemplate(nestedIndent, model.template);
    const innerXML = `${desc}${models}${parameters}${template}${renditions}`;
    const end = innerXML.length > 0 ? `>\n${innerXML}${indent}</${model.type}` : '/';

    return `${indent}<${model.type}${attributes}${end}>\n`;
  }

  serializeParameter(indent, parameter) {
    if (!parameter.name) {
      return '';
    }
    const name = this.serializeAttribute('name', parameter.name);
    const value = this.serializeAttribute('value', parameter.value);
    if (parameter.set) {
      return `${indent}<pb:set-param xmlns=""${name}${value}/>\n`;
    }
    return `${indent}<param${name}${value}/>\n`;
  }

  serializeRendition(indent, rendition) {
    const scope =
      rendition.scope && rendition.scope !== 'null'
        ? this.serializeAttribute('scope', rendition.scope)
        : '';
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
    return value ? ` ${name}="${PbOddEditor.escape(value)}"` : '';
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

  save(download = false) {
    document.dispatchEvent(new CustomEvent('pb-start-update'));
    const data = this.serializeOdd();

    this.shadowRoot
      .getElementById('dialog')
      .show(i18n('odd.editor.save'), i18n('odd.editor.saving'));

    const saveOdd = this.shadowRoot.getElementById('saveOdd');
    saveOdd.url = `${this.getEndpoint()}/${
      this.lessThanApiVersion('1.0.0') ? 'modules/editor.xql' : `api/odd/${this.odd}`
    }`;
    if (this.lessThanApiVersion('1.0.0')) {
      saveOdd.contentType = 'application/x-www-form-urlencoded';
      saveOdd.method = 'POST';
      saveOdd.params = null;
      saveOdd.body = {
        action: 'save',
        root: this.rootPath,
        'output-prefix': this.outputPrefix,
        'output-root': this.outputRoot,
        odd: this.odd,
        data,
      };
    } else {
      saveOdd.contentType = 'application/xml';
      saveOdd.method = 'PUT';
      saveOdd.params = {
        root: this.rootPath,
        'output-prefix': this.outputPrefix,
        'output-root': this.outputRoot,
      };
      saveOdd.body = data;
    }

    const request = saveOdd.generateRequest();
    request
      .then(data => {
        this.handleSaveComplete({ response: data }, download);
      })
      .catch(this.handleSaveError.bind(this));
  }

  // to be deprecated: only used for old api
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

  handleSaveComplete(req, download = false) {
    const data = req.response;
    if (data.status === 'denied') {
      this.shadowRoot
        .getElementById('dialog')
        .set(i18n('odd.editor.denied'), i18n('odd.editor.denied-message', { odd: this.odd }));
      document.dispatchEvent(new CustomEvent('pb-end-update'));
      return;
    }

    let msg;

    if (this.lessThanApiVersion('1.0.0')) {
      const report = data.report.map(PbOddEditor._renderReport);
      msg = `<div class="list-group">${report.join('')}</div>`;
    } else {
      const { report } = data;
      msg = `<div class="list-group">${report}</div>`;
    }

    this.shadowRoot.getElementById('dialog').set(i18n('odd.editor.saved'), msg);

    this._hasChanges = false;
    document.dispatchEvent(new CustomEvent('pb-end-update'));

    if (download) {
      const blob = new Blob([data.source], { type: 'application/xml' });
      fileSave(blob, {
        fileName: this.odd,
        extensions: ['.odd'],
      }).then(
        () => console.log(`<pb-odd-editor> ${this.odd} exported`),
        () => console.log('<pb-odd-editor> export aborted'),
      );
    }
  }

  handleSaveError(rejected) {
    this.shadowRoot.getElementById('dialog').set('Error', rejected.error);
    // this.$.dialog.set("Error", rejected.error);
    document.dispatchEvent(new CustomEvent('pb-end-update'));
  }

  _reload() {
    this.shadowRoot
      .getElementById('dialog')
      .confirm(i18n('odd.editor.reload'), i18n('odd.editor.reload-confirm'))
      .then(
        () => {
          this.load();
          this.tabs = [];
          this.tabIndex = 0;
          this.shadowRoot.getElementById('currentElement').innerHTML = '';
        },
        () => null,
      );
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

    if (this.currentSelection && this.currentSelection.tagName !== undefined) {
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
    if (
      this.currentElementSpec &&
      this.currentElementSpec.tagName === 'PB-ODD-ELEMENTSPEC-EDITOR'
    ) {
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
    const { url } = this.shadowRoot.getElementById('loadContent');
    console.log('url ', url);
    msg.show('Error: ', `ODD file could not be loaded from ${url}`);
  }

  handleElementSpecChanged(e) {
    // console.log('handleElementSpecChanged ',e);
    this._hasChanges = true;
    const elementSpec = this.elementSpecs.find(es => es.ident === e.detail.ident);
    const index = this.elementSpecs.indexOf(elementSpec);
    const newSpec = { ...elementSpec, models: e.detail.models };
    const allSpecs = Array.from(this.elementSpecs);
    allSpecs.splice(index, 1, newSpec);
    this.elementSpecs = allSpecs;
    // console.log('updated elementspecs ', this.elementSpecs);
  }

  _inputTitle(ev) {
    this.title = ev.target.value;
  }
}

customElements.define('pb-odd-editor', PbOddEditor);
