import { LitElement, html, css } from 'lit-element';
import anime from 'animejs';
import { pbMixin } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";
import '@polymer/iron-ajax';
import '@polymer/paper-dialog';
import '@polymer/paper-dialog-scrollable';

/**
 * This is the main component for viewing text which has been transformed via an ODD.
 * The document to be viewed is determined by the `pb-document` element the property
 * `src` points to. `pb-view` can display an entire document or just a fragment of it
 * as defined by the properties `xmlId`, `nodeId` or `xpath`.
 *
 * You may also define optional parameters to be passed to the ODD in nested `pb-param`
 * tags. These parameters can be accessed within the ODD via the `$parameters` map. For
 * example, the following snippet is being used to output breadcrumbs above the main text
 * in the documentation view:
 *
 * ```xml
 * <section class="breadcrumbs">
 *      <pb-view id="title-view1" src="document1" subscribe="transcription">
 *          <pb-param name="mode" value="breadcrumbs"/>
 *      </pb-view>
 * </section>
 * ```
 *
 * ## CSS Mixins
 *
 * | Custom property | Description | Default|
 * | ----------------|-------------|--------|
 * |--pb-content-theme | Mixin applied to the content view | {}|
 * |--pb-view-column-gap | Column gap in two-column mode | 10px |
 * |--pb-view-column | Mixin for formatting the two columns | {} |
 * |--pb-footnotes | Mixin for formatting footnotes | {}|
 * |--pb-footnote-ref | Mixin for formatting footnote references | {}|
 * |--pb-highlight-theme | Mixin applied to matches in the text when displaying search results | {}|
 *
 * @customElement
 * @polymer
 * @appliesMixin pbMixin
 * @demo demo/pb-view.html View TEI document
 * @demo demo/pb-view2.html View Docbook document
 */
export class PbView extends pbMixin(LitElement) {

    static get properties() {
        const props = {
            /**
            * The id of a `pb-document` element this view should display.
            * Settings like `odd` or `view` will be taken from the `pb-document`
            * unless overwritten by properties in this component.
            *
            * This property is **required** and **must** point to an existing `pb-document` with
            * the given id.
            *
            * Setting the property after initialization will clear the properties xmlId, nodeId and odd.
            */
            src: {
                type: String
            },
            /**
            * The ODD to use for rendering the document. Overwrites an ODD defined on
            * `pb-document`. The odd should be specified by its name without path
            * or the `.odd` suffix.
            */
            odd: {
                type: String,
                reflect: true
            },
            /**
            * The view type to use for paginating the document. Either `page`, `div` or `single`.
            * Overwrites the same property specified on `pb-document`. Values have the following meaning:
            *
            * Value | Displayed content
            * ------|------------------
            * `page` | content is displayed page by page as determined by tei:pb
            * `div` | content is displayed by divisions
            * `single` | do not paginate but display entire content at once
            */
            view: {
                type: String,
                reflect: true
            },
            /**
            * An eXist nodeId. If specified, selects the root of the fragment of the document
            * which should be displayed. Normally this property is set automatically by pagination.
            */
            nodeId: {
                type: String,
                reflect: true,
                attribute: 'node-id'
            },
            /**
            * An xml:id to be displayed. If specified, this determines the root of the fragment to be
            * displayed. Use to directly navigate to a specific section.
            */
            xmlId: {
                type: Array,
                reflect: true,
                attribute: 'xml-id'
            },
            /**
            * An optional XPath expression: the root of the fragment to be processed is determined
            * by evaluating the given XPath expression. The XPath expression should be absolute.
            * The namespace of the document is declared as default namespace, so no prefixes should
            * be used.
            *
            * If the `map` property is used, it may change scope for the displayed fragment.
            */
            xpath: {
                type: String,
                reflect: true
            },
            /**
            * If defined denotes the local name of an XQuery function in `modules/map.xql`, which will be called
            * with the current root node and should return the node of a mapped fragment. This is helpful if one
            * wants, for example, to show a translation fragment aligned with the part of the transcription currently
            * shown. In this case, the properties of the `pb-view` would still point to the transcription, but the function
            * identified by map would return the corresponding fragment from the translation to be processed.
            *
            * Navigation in the document is still determined by the current root as defined through the `root`, `xpath`
            * and `xmlId` properties.
            */
            map: {
                type: String
            },
            /**
            * If set to true, the component will not load automatically. Instead it will wait until it receives a `pb-update`
            * event. Use this to make one `pb-view` component dependent on another one. Default is 'false'.
            */
            onUpdate: {
                type: Boolean,
                attribute: 'on-update'
            },
            /**
            * Message to display if no content was returned by the server.
            * Set to empty string to show nothing.
            */
            notFound: {
                type: String,
                attribute: 'not-found'
            },
            /**
            * The relative URL to the script on the server which will be called for loading content.
            */
            url: {
                type: String
            },
            /**
            * The server returns footnotes separately. Set this property
            * if you wish to append them to the main text.
            */
            appendFootnotes: {
                type: Boolean,
                attribute: 'append-footnotes'
            },
            /**
            * Should matches be highlighted if a search has been executed?
            */
            highlight: {
                type: Boolean,
                reflect: true
            },
            /**
            * CSS selector to find column breaks in the content returned
            * from the server. If this property is set and column breaks
            * are found, the component will display two columns side by side.
            */
            columnSeparator: {
                type: String,
                attribute: 'column-separator'
            },
            /**
            * The reading direction, i.e. 'ltr' or 'rtl'.
            */
            direction: {
                type: String
            },
            /**
             * If set, relative links (img, a) will be made absolute.
             */
            fixLinks: {
                type: Boolean,
                attribute: 'fix-links'
            },
            /**
             * If set, a refresh will be triggered if a `pb-i18n-update` event is received,
             * e.g. due to the user selecting a different interface language.
             */
            useLanguage: {
                type: Boolean,
                attribute: 'use-language'
            },
            /**
            * wether to animate the view when new page is loaded. Defaults to 'false' meaning that no
            * animation takes place. If 'true' will apply a translateX transistion in forward/backward direction.
            */
            animation: {
                type: Boolean
            },
            /**
             * A selector pointing to other components this component depends on.
             * When method `wait` is called, it will wait until all referenced
             * components signal with a `pb-ready` event that they are ready and listening
             * to events.
             * 
             * `pb-view` by default sets this property to select `pb-toggle-feature` and `pb-select-feature` 
             * elements.
             */
            waitFor: {
                type: String,
                attribute: 'wait-for'
            },
            _features: {
                type: Object
            },
            _content: {
                type: Node,
                attribute: false
            },
            _column1: {
                type: Node,
                attribute: false
            },
            _column2: {
                type: Node,
                attribute: false
            },
            _footnotes: {
                type: Node,
                attribute: false
            },
            _style: {
                type: Node,
                attribute: false
            }
        };
        return Object.assign(props, super.properties);
    }

    constructor() {
        super();
        this.url = "modules/lib/components.xql";
        this.onUpdate = false;
        this.appendFootnotes = false;
        this.notFound = "the server did not return any content";
        this.animation = false;
        this.direction = 'ltr';
        this.highlight = false;
        this._features = {};
        this._selector = new Map();
    }

    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
        switch (name) {
            case 'src':
                this._updateSource(newVal, oldVal);
                break;
        }
    }

    connectedCallback() {
        super.connectedCallback();

        const id = this.getParameter('id');
        if (id && !this.xmlId) {
            this.xmlId = id;
        }

        const action = this.getParameter('action');
        if (action && action === 'search') {
            this.highlight = true;
        }

        const nodeId = this.getParameter('root');
        if (this.view === 'single') {
            this.nodeId = null;
        } else if (nodeId && !this.nodeId) {
            this.nodeId = nodeId;
        }
        if (!this.waitFor) {
            this.waitFor = 'pb-toggle-feature,pb-select-feature';
        }

        this.subscribeTo('pb-navigate', ev => {
            this.navigate(ev.detail.direction);
        });
        this.subscribeTo('pb-refresh', this._refresh.bind(this));
        this.subscribeTo('pb-toggle', ev => {
            this.toggleFeature(ev);
        });
        this.subscribeTo('pb-zoom', ev => {
            this.zoom(ev.detail.direction);
        });
        this.subscribeTo('pb-i18n-update', ev => {
            this._features.language = ev.detail.language;
            if (this.useLanguage) {
                this._refresh();
            }
        });

        this.signalReady();

        if (this.onUpdate) {
            this.subscribeTo('pb-update', this._refresh.bind(this));
        }
    }

    firstUpdated() {
        if (!this.onUpdate) {
            PbView.waitOnce('pb-page-ready', (data) => {
                if (data && data.language) {
                    this._features.language = data.language;
                }
                this.wait(() => this._refresh());
            });
        }
    }

    /**
     * Returns the ODD used to render content.
     */
    getOdd() {
        return this.odd || this.getDocument().odd || "teipublisher";
    }

    getView() {
        return this.view || this.getDocument().view || "single";
    }

    /**
     * Trigger an update of this element's content
     */
    forceUpdate() {
        this._load(this.nodeId);

    }

    animate() {
        // animate new element if 'animation' property is 'true'
        if (this.animation) {
            if (this.lastDirection === 'forward') {
                anime({
                    targets: this.shadowRoot.getElementById('view'),
                    opacity: [0, 1],
                    translateX: [1000, 0],
                    duration: 300,
                    easing: 'linear'
                });
            } else {
                anime({
                    targets: this.shadowRoot.getElementById('view'),
                    opacity: [0, 1],
                    translateX: [-1000, 0],
                    duration: 300,
                    easing: 'linear'
                });
            }
        }
    }

    _refresh(ev) {
        if (ev && ev.detail) {
            if (ev.detail.path) {
                const doc = this.getDocument();
                doc.path = ev.detail.path;
            }
            if (ev.detail.id) {
                this.xmlId = ev.detail.id;
            }
            this.odd = ev.detail.odd || this.odd;
            if (ev.detail.columnSeparator !== undefined) {
                this.columnSeparator = ev.detail.columnSeparator;
            }
            this.view = ev.detail.view || this.view;
            // clear nodeId if set to null
            if (ev.detail.position === null) {
                this.nodeId = null;
            } else {
                this.nodeId = ev.detail.position || this.nodeId;
            }
        }
        this._updateStyles();
        this._load(this.nodeId);
    }

    _load(pos) {
        const doc = this.getDocument();

        if (!doc.path) {
            console.log("No path");
            return;
        }

        const params = this.getParameters(pos);

        // this.$.view.style.opacity=0;

        this._doLoad(params);
    }

    _doLoad(params) {
        this.emitTo('pb-start-update', params);

        console.log("<pb-view> Loading view with params %o", params);
        this._clear();
        const loadContent = this.shadowRoot.getElementById('loadContent');
        loadContent.params = params;
        loadContent.generateRequest();
    }

    _clear() {
        this._content = null;
        this._column1 = null;
        this._column2 = null;
        this._footnotes = null;
    }

    _handleError() {
        this.emitTo('pb-end-update');
        this._clear();
        const loader = this.shadowRoot.getElementById('loadContent');
        let message;
        const { response } = loader.lastError;
        if (response) {
            message = response.message;
        } else {
            message = '<pb-i18n key="dialogs.serverError"></pb-i18n>';
        }
        const content = `
            <p><pb-i18n key="dialogs.error"></pb-i18n>: ${message}</p>
        `;
        this._replaceContent({ content });
    }

    _handleContent() {
        const loader = this.shadowRoot.getElementById('loadContent');
        const resp = loader.lastResponse;
        if (!resp) {
            console.error('<pb-view> No response received');
            return;
        }
        if (resp.error) {
            if (this.notFound) {
                this._content = this.notFound;
            }
            this.emitTo('pb-end-update', null);
            return;
        }

        const elem = this._replaceContent(resp);

        this.animate();
        this._scroll();

        this.next = resp.next;
        this.previous = resp.previous;
        this.nodeId = resp.root;
        this.switchView = resp.switchView;
        if (this.xmlId && !this.map) {
            this.setParameter('root', this.nodeId);
            this.pushHistory('Navigate to xml:id');
        }
        this.xmlId = null;

        this._fixLinks(elem);
        this._applyToggles(elem);

        const eventOptions = {
            data: resp,
            root: elem,
            params: loader.params,
            id: this.xmlId,
            position: this.nodeId
        };
        this.emitTo('pb-update', eventOptions);
        this.emitTo('pb-end-update', null);
    }

    _replaceContent(resp) {
        const fragment = document.createDocumentFragment();
        const elem = document.createElement('div');
        // elem.style.opacity = 0; //hide it - animation has to make sure to blend it in
        fragment.appendChild(elem);
        elem.innerHTML = resp.content;

        if (this.columnSeparator) {
            this._replaceColumns(elem);
        } else {
            this._content = elem;
        }

        if (this.appendFootnotes) {
            const footnotes = document.createElement('div');
            if (resp.footnotes) {
                footnotes.innerHTML = resp.footnotes;
            }
            this._footnotes = footnotes;
        }

        this._initFootnotes(this._footnotes);

        return elem;
    }

    _replaceColumns(elem) {
        let cb;
        if (this.columnSeparator) {
            const cbs = elem.querySelectorAll(this.columnSeparator);
            // use last separator only
            if (cbs.length > 0) {
                cb = cbs[cbs.length - 1];
            }
        }

        if (!cb) {
            this._content = elem;
        } else {
            const fragmentBefore = this._getFragmentBefore(elem, cb);
            const fragmentAfter = this._getFragmentAfter(elem, cb);
            if (this.direction === 'ltr') {
                this._column1 = fragmentBefore;
                this._column2 = fragmentAfter;
            } else {
                this._column2 = fragmentBefore;
                this._column1 = fragmentAfter;
            }
        }
    }

    _scroll() {
        const { hash } = this.getUrl();
        if (hash) {
            const target = this.shadowRoot.getElementById(hash.substring(1));
            if (target) {
                target.scrollIntoView({ block: "center", inline: "nearest" });
            }
        }
    }

    _scrollToElement(ev, link) {
        const target = this.shadowRoot.getElementById(link.hash.substring(1));
        if (target) {
            ev.preventDefault();
            console.log('<pb-view> Scrolling to element %s', target.id);
            target.scrollIntoView({ block: "center", inline: "nearest" });
        }
    }

    _updateStyles() {
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', `${this.getEndpoint()}/transform/${this.getOdd()}.css`);

        this._style = link;
    }

    _fixLinks(content) {
        if (this.fixLinks) {
            const doc = this.getDocument();
            const base = new URL(doc.path, `${this.getEndpoint()}/`);
            content.querySelectorAll('img').forEach((image) => {
                const oldSrc = image.getAttribute('src');
                const src = new URL(oldSrc, base);
                image.src = src;
            });
            content.querySelectorAll('a').forEach((link) => {
                const oldHref = link.getAttribute('href');
                if (oldHref === link.hash) {
                    link.addEventListener('click', (ev) => this._scrollToElement(ev, link));
                } else {
                    const href = new URL(oldHref, base);
                    link.href = href;
                }
            });
        } else {
            content.querySelectorAll('a').forEach((link) => {
                const oldHref = link.getAttribute('href');
                if (oldHref === link.hash) {
                    link.addEventListener('click', (ev) => this._scrollToElement(ev, link));
                }
            });
        }
    }

    _initFootnotes(content) {
        if (content) {
            content.querySelectorAll('.note, .fn-back').forEach(elem => {
                elem.addEventListener('click', (ev) => {
                    ev.preventDefault();
                    const fn = this.shadowRoot.getElementById('content').querySelector(elem.hash);
                    if (fn) {
                        fn.scrollIntoView();
                    }
                });
            });
        }
    }

    _getParameters() {
        const params = [];
        this.querySelectorAll('pb-param').forEach(function (param) {
            params['user.' + param.getAttribute('name')] = param.getAttribute('value');
        });
        // add parameters for features set with pb-toggle-feature
        for (const [key, value] of Object.entries(this._features)) {
            params['user.' + key] = value;
        }
        return params;
    }

    /**
     * Return the parameter object which would be passed to the server by this component
     */
    getParameters(pos) {
        pos = pos || this.nodeId;
        const doc = this.getDocument();
        const params = this._getParameters();
        params.doc = doc.path;
        params.odd = this.getOdd() + '.odd';
        params.view = this.getView();
        if (pos) {
            params['root'] = pos;
        }
        if (this.xpath) {
            params.xpath = this.xpath;
        }
        if (this.xmlId) {
            params.id = this.xmlId;
        }
        if (this.highlight) {
            params.highlight = "yes";
        }
        if (this.map) {
            params.map = this.map;
        }

        return params;
    }

    _applyToggles(elem) {
        if (this._selector.size === 0) {
            return;
        }
        this._selector.forEach((setting, selector) => {
            elem.querySelectorAll(selector).forEach(node => {
                const command = setting.command || 'toggle';
                if (node.command) {
                    node.command(command, setting.state);
                }
                if (setting.state) {
                    node.classList.add(command);
                } else {
                    node.classList.remove(command);
                }
            });
        });
    }

    /**
     * Load a part of the document identified by the given eXist nodeId
     *
     * @param {String} nodeId The eXist nodeId of the root element to load
     */
    goto(nodeId) {
        this._load(nodeId);
    }

    /**
     * Load a part of the document identified by the given xml:id
     *
     * @param {String} xmlId The xml:id to be loaded
     */
    gotoId(xmlId) {
        this.xmlId = xmlId;
        this._load();
    }

    /**
     * Navigate the document either forward or backward and refresh the view.
     * The navigation method is determined by property `view`.
     *
     * @param {string} direction either `backward` or `forward`
     */
    navigate(direction) {
        this.lastDirection = direction;

        if (direction === 'backward') {
            if (this.previous) {
                if (!this.map) {
                    this.setParameter('root', this.previous);
                    this.setParameter('id');
                    this.pushHistory('Navigate backward');
                }
                this._load(this.previous);
            }
        } else {
            if (this.next) {
                if (!this.map) {
                    this.setParameter('root', this.next);
                    this.setParameter('id');
                    this.pushHistory('Navigate forward');
                }
                this._load(this.next);
            }
        }
    }

    /**
     * Zoom the displayed content by increasing or decreasing font size.
     *
     * @param {string} direction either `in` or `out`
     */
    zoom(direction) {
        const view = this.shadowRoot.getElementById('view');
        const fontSize = window.getComputedStyle(view).getPropertyValue('font-size');
        const size = parseInt(fontSize.replace(/^(\d+)px/, "$1"));

        if (direction === 'in') {
            view.style.fontSize = (size + 1) + 'px';
        } else {
            view.style.fontSize = (size - 1) + 'px';
        }
    }

    toggleFeature(ev) {
        const applyToggles = () => {
            if (this._column1) {
                this._applyToggles(this._column1);
                this._applyToggles(this._column2);
            } else {
                this._applyToggles(this._content);
            }
        }

        const properties = ev.detail.properties;
        for (const [key, value] of Object.entries(properties)) {
            switch (key) {
                case 'odd':
                case 'view':
                case 'columnSeparator':
                case 'xpath':
                case 'nodeId':
                    break;
                default:
                    this._features[key] = value;
                    break;
            }
        }
        if (properties) {
            if (properties.odd) {
                this.odd = properties.odd;
            }
            if (properties.view) {
                this.view = properties.view;
                if (this.view === 'single') {
                    // when switching to single view, clear current node id
                    this.nodeId = null;
                } else {
                    // otherwise use value for alternate view returned from server
                    this.nodeId = this.switchView;
                }
            }
            if (properties.xpath) {
                this.xpath = properties.xpath;
            }
            if (properties.hasOwnProperty('columnSeparator')) {
                this.columnSeparator = properties.columnSeparator;
            }
        }
        if (ev.detail.selectors) {
            ev.detail.selectors.forEach(sc => {
                this._selector.set(sc.selector, {
                    state: sc.state,
                    command: sc.command || 'toggle'
                });
            });
        }
        if (ev.detail.action === 'refresh') {
            if (Object.keys(properties).length > 0) {
                this._load();
            } else {
                applyToggles();
            }
        }
    }

    _getFragmentBefore(node, ms) {
        const range = document.createRange();
        range.setStartBefore(node);
        range.setEndBefore(ms);

        return range.cloneContents();
    }

    _getFragmentAfter(node, ms) {
        const range = document.createRange();
        range.setStartBefore(ms);
        range.setEndAfter(node);

        return range.cloneContents();
    }

    _updateSource(newVal, oldVal) {
        if (typeof oldVal !== 'undefined' && newVal !== oldVal) {
            this.xpath = null;
            this.odd = null;
            this.xmlId = null;
            this.nodeId = null;
        }
    }

    static get styles() {
        return css`
            :host {
                display: block;
                background: transparent;
            }

            .columns {
                display: grid;
                grid-template-columns: calc(50% - var(--pb-view-column-gap, 10px) / 2) calc(50% - var(--pb-view-column-gap, 10px) / 2);
                grid-column-gap: var(--pb-view-column-gap, 10px);
            }

            .margin-note {
                display: none;
            }

            @media (min-width: 769px) {
                .content.margin-right {
                    margin-right: 200px;
                }

                .margin-note {
                    background: rgba(153, 153, 153, 0.2);
                    display: block;
                    font-size: small;
                    margin-right: -200px;
                    margin-bottom: 5px;
                    padding: 5px 0;
                    float: right;
                    clear: both;
                    width: 180px;
                }

                .margin-note .n {
                  color: #777777;
                }
            }

            a[rel=footnote], pb-popover.note {
                font-size: var(--pb-footnote-size, var(--pb-font-size-smaller, 75%));
                vertical-align: top;
                color: var(--pb-footnote-color, var(--pb-text-color-primary, #333333));
                text-decoration: none;
                padding: var(--pb-footnote-padding, 0 0 0 .25em);
            }

            .list dt {
                float: left;
            }

            .footnote .fn-number {
                float: left;

                font-size: var(--pb-footnote-size, var(--pb-font-size-smaller, 75%));
            }
        `;
    }

    render() {
        return html`
            <div id="view">
                ${this._style}
                <div class="columns">
                    <div id="column1">${this._column1}</div>
                    <div id="column2">${this._column2}</div>
                </div>
                <div id="content">${this._content}</div>
                <div id="footnotes">${this._footnotes}</div>
            </div>
            <paper-dialog id="errorDialog">
                <h2>${translate('dialogs.error')}</h2>
                <paper-dialog-scrollable></paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus">
                    ${translate('dialogs.close')}
                    </paper-button>
                </div>
            </paper-dialog>
            <iron-ajax
                id="loadContent"
                url="${this.getEndpoint()}/${this.url}"
                verbose
                handle-as="json"
                method="get"
                with-credentials
                @response="${this._handleContent}"
                @error="${this._handleError}"></iron-ajax>
      `;
    }

    /**
     * Fired before the element updates its content
     *
     * @event pb-start-update
     * @param {object} Parameters to be passed to the request
     */

    /**
     * Fired when the component received content from the server
     *
     * @event pb-update
     * @param {Object} data the raw data returned from the server
     * @param {HTMLElement} root the HTML element inserted as content
     * @param {Object} params the parameters sent to the server to request the content
     */

    /**
     * Fired after the element has finished updating its content
     *
     * @event pb-end-update
     */

    /**
    * When this event is received: navigate forward or backward in the document
    *
    * @event pb-navigate
    */

    /**
     * When this event is received: increase or decrease the font size of the content
     *
     * @event pb-zoom
     */

    /**
     * When received, refresh the current view using the parameters passed in the
     * event details.
     *
     * @event pb-refresh
     */
}

customElements.define('pb-view', PbView);
