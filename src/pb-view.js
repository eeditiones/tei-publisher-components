import { LitElement, html, css } from 'lit-element';
import anime from 'animejs';
import { pbMixin, waitOnce } from "./pb-mixin.js";
import { registry } from "./urls.js";
import { translate } from "./pb-i18n.js";
import { typesetMath } from "./pb-formula.js";
import { loadStylesheets, themableMixin } from "./theming.js";
import '@polymer/iron-ajax';

/**
 * This is the main component for viewing text which has been transformed via an ODD.
 * The document to be viewed is determined by the `pb-document` element the property
 * `src` points to. If not overwritten, `pb-view` will use the settings defined by
 * the connected document, like view type, ODD etc.
 * 
 * `pb-view` can display an entire document or just a fragment of it
 * as defined by the properties `xpath`, `xmlId` or `nodeId`. The most common use case
 * is to set `xpath` to point to a specific part of a document.
 * 
 * Navigating to the next or previous fragment would usually be triggered by a separate
 * `pb-navigation` element, which sends a `pb-navigate` event to the `pb-view`. However,
 * `pb-view` also implements automatic loading of next/previous fragments if the user
 * scrolls the page beyond the current viewport boudaries. To enable this, set property
 * `infinite-scroll`.
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
 * @cssprop [--pb-view-column-gap=10px] - The gap between columns in two-column mode
 * @cssprop --pb-view-loader-font - Font used in the message shown during loading in infinite scroll mode
 * @cssprop [--pb-view-loader-color=black] - Text color in the message shown during loading in infinite scroll mode
 * @cssprop [--pb-view-loader-background-padding=10px 20px] - Background padding for the  message shown during loading in infinite scroll mode
 * @cssprop [--pb-view-loader-background-image=linear-gradient(to bottom, #f6a62440, #f6a524)] - Background image the message shown during loading in infinite scroll mode
 * @cssprop --pb-footnote-color - Text color of footnote marker
 * @cssprop --pb-footnote-padding - Padding around a footnote marker
 * @cssprop --pb-footnote-font-size - Font size for the footnote marker
 * @cssprop --pb-footnote-font-family - Font family for the footnote marker
 * @cssprop --pb-view-scroll-margin-top - Applied to any element with an id
 * @csspart content - The root div around the displayed content
 * @csspart footnotes - div containing the footnotes
  
 * @fires pb-start-update - Fired before the element updates its content
 * @fires pb-update - Fired when the component received content from the server
 * @fires pb-end-update - Fired after the element has finished updating its content
 * @fires pb-navigate - When received, navigate forward or backward in the document
 * @fires pb-zoom - When received, zoom in or out by changing font size of the content
 * @fires pb-refresh - When received, refresh the content based on the parameters passed in the event
 * @fires pb-toggle - When received, toggle content properties
 */
export class PbView extends themableMixin(pbMixin(LitElement)) {

    static get properties() {
        return {
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
                type: String
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
                type: String
            },
            /**
            * An eXist nodeId. If specified, selects the root of the fragment of the document
            * which should be displayed. Normally this property is set automatically by pagination.
            */
            nodeId: {
                type: String,
                attribute: 'node-id'
            },
            /**
            * An xml:id to be displayed. If specified, this determines the root of the fragment to be
            * displayed. Use to directly navigate to a specific section.
            */
            xmlId: {
                type: Array,
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
                type: String
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
             * If set, rewrite URLs to load pages as static HTML files,
             * so no TEI Publisher instance is required. Use this in combination with
             * [tei-publisher-static](https://github.com/eeditiones/tei-publisher-static).
             * The value should point to the HTTP root path under which the static version
             * will be hosted. This is used to resolve CSS stylesheets.
             */
            static: {
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
            suppressHighlight: {
                type: Boolean,
                attribute: 'suppress-highlight'
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
            * 
            * @type {"ltr"|"rtl"}
            */
            direction: {
                type: String
            },
            /**
             * If set, points to an external stylesheet which should be applied to
             * the text *after* the ODD-generated styles.
             */
            loadCss: {
                type: String,
                attribute: 'load-css'
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
             * 
             * Also requires `requireLanguage` to be set on the surrounding `pb-page`.
             * See there for more information.
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
             * Experimental: if enabled, the view will incrementally load new document fragments if the user tries to scroll
             * beyond the start or end of the visible text. The feature inserts a small blank section at the top
             * and bottom. If this section becomes visible, a load operation will be triggered.
             * 
             * Note: only browsers implementing the `IntersectionObserver` API are supported. Also the feature
             * does not work in two-column mode or with animations.
             */
            infiniteScroll: {
                type: Boolean,
                attribute: 'infinite-scroll'
            },
            /**
             * Maximum number of fragments to keep in memory if `infinite-scroll`
             * is enabled. If the user is scrolling beyond the maximum, fragements
             * will be removed from the DOM before or after the current reading position.
             * Default is 10. Set to zero to allow loading the entire document.
             */
            infiniteScrollMax: {
                type: Number,
                attribute: 'infinite-scroll-max'
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
            /**
             * By default, navigating to next/previous page will update browser parameters,
             * so reloading the page will load the correct position within the document.
             * 
             * Set this property to disable location tracking for the component altogether.
             */
            disableHistory: {
                type: Boolean,
                attribute: 'disable-history'
            },
            /**
             * If set to the name of an event, the content of the pb-view will not be replaced
             * immediately upon updates. Instead, an event is emitted, which contains the new content
             * in property `root`. An event handler intercepting the event can thus modify the content.
             * Once it is done, it should pass the modified content to the callback function provided
             * in the event detail under the name `render`. See the demo for an example.
             */
            beforeUpdate: {
                type: String,
                attribute: 'before-update-event'
            },
            /**
             * If set, do not scroll the view to target node (e.g. given in URL hash) 
             * after content was loaded.
             */
            noScroll: {
                type: Boolean,
                attribute: 'no-scroll'
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
            },
            _additionalParams: {
                type: Object
            },
            ...super.properties
        };
    }

    constructor() {
        super();
        this.src = null;
        this.url = null;
        this.onUpdate = false;
        this.appendFootnotes = false;
        this.notFound = null;
        this.animation = false;
        this.direction = 'ltr';
        this.suppressHighlight = false;
        this.highlight = false;
        this.infiniteScrollMax = 10;
        this.disableHistory = false;
        this.beforeUpdate = null;
        this.noScroll = false;
        this._features = {};
        this._additionalParams = {};
        this._selector = {};
        this._chunks = [];
        this._scrollTarget = null;
        this.static = null;
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

        if (this.loadCss) {
            waitOnce('pb-page-ready', () => {
                loadStylesheets([this.toAbsoluteURL(this.loadCss)])
                .then((theme) => {
                    this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, theme];
                });
            });
        }

        if (this.infiniteScroll) {
            this.columnSeparator = null;
            this.animation = false;
            this._content = document.createElement('div');
            this._content.className = 'infinite-content';
        }

        if (!this.disableHistory) {
            if (registry.state.id && !this.xmlId) {
                this.xmlId = registry.state.id;
            }

            if (registry.state.action && registry.state.action === 'search') {
                this.highlight = true;
            }

            if (this.view === 'single') {
                this.nodeId = null;
            } else if (registry.state.root && !this.nodeId) {
                this.nodeId = registry.state.root;
            }

            const newState = {
                id: this.xmlId,
                view: this.getView(),
                odd: this.getOdd(),
                path: this.getDocument().path
            };
            if (this.view !== 'single') {
                newState.root = this.nodeId;
            }
            console.log('id: %s; state: %o', this.id, newState);
            registry.replace(this, newState);

            registry.subscribe(this, (state) => {
                this._setState(state);
                this._refresh();
            });
        }
        if (!this.waitFor) {
            this.waitFor = 'pb-toggle-feature,pb-select-feature,pb-navigation';
        }

        this.subscribeTo('pb-navigate', ev => {
            if (ev.detail.source && ev.detail.source === this) {
                return;
            }
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
            const needsRefresh = this._features.language && this._features.language !== ev.detail.language;
            this._features.language = ev.detail.language;
            if (this.useLanguage && needsRefresh) {
                this._setState(registry.getState(this));
                this._refresh();
            }
        }, []);

        this.signalReady();

        if (this.onUpdate) {
            this.subscribeTo('pb-update', (ev) => {
                this._refresh(ev);
            });
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this._scrollObserver) {
            this._scrollObserver.disconnect();
        }
    }

    firstUpdated() {
        super.firstUpdated();
        this.enableScrollbar(true);
        if (this.infiniteScroll) {
            this._topObserver = this.shadowRoot.getElementById('top-observer');
            this._bottomObserver = this.shadowRoot.getElementById('bottom-observer');
            this._bottomObserver.style.display = 'none';
            this._topObserver.style.display = 'none';
            this._scrollObserver = new IntersectionObserver((entries) => {
                if (!this._content) {
                    return;
                }
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target.id === 'bottom-observer') {
                            const lastChild = this._content.lastElementChild;
                            if (lastChild) {
                                const next = lastChild.getAttribute('data-next');
                                if (next && !this._content.querySelector(`[data-root="${next}"]`)) {
                                    console.log('<pb-view> Loading next page: %s', next);
                                    this._checkChunks('forward');
                                    this._load(next, 'forward');
                                }
                            }
                        } else {
                            const firstChild = this._content.firstElementChild;
                            if (firstChild) {
                                const previous = firstChild.getAttribute('data-previous');
                                if (previous && !this._content.querySelector(`[data-root="${previous}"]`)) {
                                    this._checkChunks('backward');
                                    this._load(previous, 'backward');
                                }
                            }
                        }
                    }
                });
            });
        }
        if (!this.onUpdate) {
            waitOnce('pb-page-ready', (data) => {
                if (data && data.language) {
                    this._features.language = data.language;
                }
                this.wait(() => {
                    if (!this.disableHistory) {
                        this._setState(registry.state);
                    }
                    this._refresh();
                });
            });
        }
    }

    /**
     * Returns the ODD used to render content.
     * 
     * @returns the ODD being used
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

    enableScrollbar(enable) {
        if (enable) {
            this.classList.add('noscroll');
        } else {
            this.classList.remove('noscroll');
        }
    }

    _refresh(ev) {
        if (ev && ev.detail) {
            if (ev.detail.hash && !this.noScroll && !(ev.detail.id || ev.detail.path || ev.detail.odd || ev.detail.view || ev.detail.position)) {
                // if only the scroll target has changed: scroll to the element without reloading
                this._scrollTarget = ev.detail.hash;
                const target = this.shadowRoot.getElementById(this._scrollTarget);
                if (target) {
                    setTimeout(() => target.scrollIntoView({block: 'nearest'}));
                }
                return;
            }
            if (ev.detail.path) {
                const doc = this.getDocument();
                doc.path = ev.detail.path;
            }
            if (ev.detail.id) {
                this.xmlId = ev.detail.id;
            } else if (ev.detail.id == null) {
                this.xmlId = null;
            }
            this.odd = ev.detail.odd || this.odd;
            if (ev.detail.columnSeparator !== undefined) {
                this.columnSeparator = ev.detail.columnSeparator;
            }
            this.view = ev.detail.view || this.getView();
            if (ev.detail.xpath) {
                this.xpath = ev.detail.xpath;
                this.nodeId = null;
            }
            // clear nodeId if set to null
            if (ev.detail.root === null) {
                this.nodeId = null;
            } else {
                this.nodeId = (ev.detail.position !== undefined ? ev.detail.position : ev.detail.root) || this.nodeId;
            }

            // check if the URL template needs any other parameters
            // and set them on this._additionalParams
            registry.pathParams.forEach((key) => {
                this._additionalParams[key] = ev.detail[key];
            });

            if (!this.noScroll) {
                this._scrollTarget = ev.detail.hash;
            }
        }
        this._updateStyles();
        if (this.infiniteScroll) {
            this._clear();
        }
        this._load(this.nodeId);
    }

    _load(pos, direction) {
        const doc = this.getDocument();

        if (!doc.path) {
            console.log("No path");
            return;
        }

        if (this._loading) {
            return;
        }
        this._loading = true;
        const params = this.getParameters(pos);
        if (direction) {
            params._dir = direction;
        }
        // this.$.view.style.opacity=0;

        this._doLoad(params);
    }

    _doLoad(params) {
        this.emitTo('pb-start-update', params);

        console.log("<pb-view> Loading view with params %o", params);
        if (!this.infiniteScroll) {
            this._clear();
        }

        if (this._scrollObserver) {
            if (this._bottomObserver) {
                this._scrollObserver.unobserve(this._bottomObserver);
            }
            if (this._topObserver) {
                this._scrollObserver.unobserve(this._topObserver);
            }
        }

        const loadContent = this.shadowRoot.getElementById('loadContent');
        
        if (this.static !== null) {
            this._staticUrl(params).then((url) => {
                loadContent.url = url;
                loadContent.generateRequest();
            });
            return;
        }

        if (!this.url) {
            if (this.minApiVersion('1.0.0')) {
                this.url = "api/parts";
            } else {
                this.url = "modules/lib/components.xql";
            }
        }

        let url = `${this.getEndpoint()}/${this.url}`;

        if (this.minApiVersion('1.0.0')) {
            url += `/${encodeURIComponent(this.getDocument().path)}/json`;
        }

        loadContent.url = url;
        loadContent.params = params;
        loadContent.generateRequest();
    }

    /**
     * Use a static URL to load pre-generated content.
     */
    async _staticUrl(params) {
        function createKey(paramNames) {
            const urlComponents = [];
            paramNames.sort().forEach(key => {
                if (params.hasOwnProperty(key)) {
                    urlComponents.push(`${key}=${params[key]}`);
                }
            });
            return urlComponents.join('&');
        }
        
        const index = await fetch(`index.json`)
            .then((response) => response.json());
        const paramNames = ['odd', 'view', 'xpath', 'map'];
        this.querySelectorAll('pb-param').forEach((param) => paramNames.push(`user.${param.getAttribute('name')}`));
        let url = params.id ? createKey([...paramNames, 'id']) : createKey([...paramNames, 'root']);
        let file = index[url];
        if (!file) {
            url = createKey(paramNames);
            file = index[url];
        }

        console.log('<pb-view> Static lookup %s: %s', url, file);
        return `${file}`;
    }

    _clear() {
        if (this.infiniteScroll) {
            this._content = document.createElement('div');
            this._content.className = 'infinite-content';
        } else {
            this._content = null;
        }
        this._column1 = null;
        this._column2 = null;
        this._footnotes = null;
        this._chunks = [];
    }

    _handleError() {
        this._clear();
        const loader = this.shadowRoot.getElementById('loadContent');
        let message;
        const { response } = loader.lastError;

        if (response) {
            message = response.description;
        } else {
            message = '<pb-i18n key="dialogs.serverError"></pb-i18n>';
        }
        
        let content;
        if (this.notFound != null) {
            content = `<p>${this.notFound}</p>`;
        } else {
            content = `<p><pb-i18n key="dialogs.serverError"></pb-i18n>: ${message} </p>`;
        }

        this._replaceContent({ content });
        this.emitTo('pb-end-update');

    }

    _handleContent() {
        const loader = this.shadowRoot.getElementById('loadContent');
        const resp = loader.lastResponse;

        if (!resp) {
            console.error('<pb-view> No response received');
            return;
        }
        if (resp.error) {
            if (this.notFound != null) {
                this._content = this.notFound;
            }
            this.emitTo('pb-end-update', null);
            return;
        }

        this._replaceContent(resp, loader.params._dir);

        this.animate();

        if (this._scrollTarget) {
            this.updateComplete.then(() => {
                const target = this.shadowRoot.getElementById(this._scrollTarget) || 
                    this.shadowRoot.querySelector(`[node-id="${this._scrollTarget}"]`);
                if (target) {
                    window.requestAnimationFrame(() =>
                        setTimeout(() => {
                            target.scrollIntoView({block: 'nearest'});
                        }, 400)
                    );
                }
                this._scrollTarget = null;
            });
        }

        this.next = resp.next;
        this.nextId = resp.nextId;
        this.previous = resp.previous;
        this.previousId = resp.previousId;
        this.nodeId = resp.root;
        this.switchView = resp.switchView;

        this.updateComplete.then(() => {
            const view = this.shadowRoot.getElementById('view');
            this._applyToggles(view);
            this._fixLinks(view);
            typesetMath(view);

            const eventOptions = {
                data: resp,
                root: view,
                params: loader.params,
                id: this.xmlId,
                position: this.nodeId
            };
            this.emitTo('pb-update', eventOptions);
            this._scroll();
        });

        this.emitTo('pb-end-update', null);
    }

    _replaceContent(resp, direction) {
        const fragment = document.createDocumentFragment();
        const elem = document.createElement('div');
        // elem.style.opacity = 0; //hide it - animation has to make sure to blend it in
        fragment.appendChild(elem);
        elem.innerHTML = resp.content;

        // if before-update-event is set, we do not replace the content immediately,
        // but emit an event
        if (this.beforeUpdate) {
            this.emitTo(this.beforeUpdate, {
                data: resp,
                root: elem,
                render: (content) => {
                    this._doReplaceContent(content, resp, direction);
                }
            });
        } else {
            this._doReplaceContent(elem, resp, direction);
        }
    }

    _doReplaceContent(elem, resp, direction) {
        if (this.columnSeparator) {
            this._replaceColumns(elem);
            this._loading = false;
        } else if (this.infiniteScroll) {
            elem.className = 'scroll-fragment';
            elem.setAttribute('data-root', resp.root);
            if (resp.next) {
                elem.setAttribute('data-next', resp.next);
            }
            if (resp.previous) {
                elem.setAttribute('data-previous', resp.previous);
            }
            let refNode;
            switch (direction) {
                case 'backward':
                    refNode = this._content.firstElementChild;
                    this._chunks.unshift(elem);
                    this.updateComplete.then(() => {
                        refNode.scrollIntoView(true);
                        this._loading = false;
                        this._checkVisibility();
                        this._scrollObserver.observe(this._bottomObserver);
                        this._scrollObserver.observe(this._topObserver);
                    });
                    this._content.insertBefore(elem, refNode);
                    break;
                default:
                    this.updateComplete.then(() => {
                        this._loading = false;
                        this._checkVisibility();
                        this._scrollObserver.observe(this._bottomObserver);
                        this._scrollObserver.observe(this._topObserver);
                    });
                    this._chunks.push(elem);
                    this._content.appendChild(elem);
                    break;
            }
        } else {
            this._content = elem;
            this._loading = false;
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

    _checkVisibility() {
        const bottomActive = this._chunks[this._chunks.length - 1].hasAttribute('data-next');
        this._bottomObserver.style.display = bottomActive ? '' : 'none';

        const topActive = this._chunks[0].hasAttribute('data-previous');
        this._topObserver.style.display = topActive ? '' : 'none';
    }

    _replaceColumns(elem) {
        let cb;
        if (this.columnSeparator) {
            const cbs = elem.querySelectorAll(this.columnSeparator);
            // use last separator only
            if (cbs.length > 1) {
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
        if (this.noScroll) {
            return;
        }
        if (registry.hash) {
            const target = this.shadowRoot.getElementById(registry.hash.substring(1));
            console.log('hash target: %o', target);
            if (target) {
                window.requestAnimationFrame(() =>
                    setTimeout(() => {
                        target.scrollIntoView({ block: "center", inline: "nearest" });
                    }, 400)
                );
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
        let link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        if (this.static !== null) {
            link.setAttribute('href', `${this.static}/css/${this.getOdd()}.css`);
        } else {
            link.setAttribute('href', `${this.getEndpoint()}/transform/${this.getOdd()}.css`);
        }
        this._style = link;
    }

    _fixLinks(content) {
        if (this.fixLinks) {
            const doc = this.getDocument();
            const base = this.toAbsoluteURL(doc.path);
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
        // add parameters for user-defined parameters supplied via pb-link
        if (this._additionalParams) {
            for (const [key, value] of Object.entries(this._additionalParams)) {
                params[key] = value;
            }
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
        if (!this.minApiVersion('1.0.0')) {
            params.doc = doc.path;
        }
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
        if (!this.suppressHighlight && this.highlight) {
            params.highlight = "yes";
        }
        if (this.map) {
            params.map = this.map;
        }

        return params;
    }

    _applyToggles(elem) {
        for (const [selector, setting] of Object.entries(this._selector)) {
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
        }
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
        // in single view mode there should be no navigation
        if (this.getView() === 'single') {
            return;
        }

        this.lastDirection = direction;

        if (direction === 'backward') {
            if (this.previous) {
                if (!this.disableHistory && !this.map) {
                    registry.commit(this, {
                        id: this.previousId || null,
                        root: this.previousId ? null : this.previous
                    });
                }
                this.xmlId = this.previousId;
                this._load(this.xmlId ? null : this.previous, direction);
            }
        } else if (this.next) {
            if (!this.disableHistory && !this.map) {
                registry.commit(this, {
                    id: this.nextId || null,
                    root: this.nextId ? null : this.next
                });
            }
            this.xmlId = this.nextId;
            this._load(this.xmlId ? null : this.next, direction);
        }
    }

    /**
     * Check the number of fragments which were already loaded in infinite
     * scroll mode. If they exceed `infiniteScrollMax`, remove either the
     * first or last fragment from the DOM, depending on the scroll direction.
     * 
     * @param {string} direction either 'forward' or 'backward'
     */
    _checkChunks(direction) {
        if (!this.infiniteScroll || this.infiniteScrollMax === 0) {
            return;
        }

        if (this._chunks.length === this.infiniteScrollMax) {
            switch (direction) {
                case 'forward':
                    this._content.removeChild(this._chunks.shift());
                    break;
                default:
                    this._content.removeChild(this._chunks.pop());
                    break;
            }
        }
        this.emitTo('pb-navigate', {
            direction,
            source: this
        });
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
        const properties = registry.getState(this);
        if (properties) {
            this._setState(properties);
            
        }

        if (ev.detail.refresh) {
            this._updateStyles();
            this._load();
        } else {
            const view = this.shadowRoot.getElementById('view');
            this._applyToggles(view);
        }
        registry.commit(this, properties);
    }

    _setState(properties) {
        for (const [key, value] of Object.entries(properties)) {
            // check if URL template needs the parameter and if
            // yes, add it to the additional parameter list
            if (registry.pathParams.has(key)) {
                this._additionalParams[key] = value;
            } else {
                switch (key) {
                    case 'odd':
                    case 'view':
                    case 'columnSeparator':
                    case 'xpath':
                    case 'nodeId':
                    case 'path':
                    case 'root':
                        break;
                    default:
                        this._features[key] = value;
                        break;
                }
            }
        }
        if (properties.odd && !this.getAttribute('odd')) {
            this.odd = properties.odd;
        }
        if (properties.view && !this.getAttribute('view')) {
            this.view = properties.view;
            if (this.view === 'single') {
                // when switching to single view, clear current node id
                this.nodeId = null;
            } else {
                // otherwise use value for alternate view returned from server
                this.nodeId = this.switchView;
            }
        }
        if (properties.xpath && !this.getAttribute('xpath')) {
            this.xpath = properties.xpath;
        }
        if (properties.hasOwnProperty('columnSeparator')) {
            this.columnSeparator = properties.columnSeparator;
        }
        this.xmlId = (!this.getAttribute('xml-id') && properties.id) || this.xmlId;
        this.nodeId = (!this.getAttribute('xml-id') && properties.root) || null;

        if (properties.path) {
            this.getDocument().path = properties.path;
        }

        if (properties.selectors) {
            properties.selectors.forEach(sc => {
                this._selector[sc.selector] = {
                    state: sc.state,
                    command: sc.command || 'toggle'
                };
            });
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

            :host(.noscroll) {
                scrollbar-width: none; /* Firefox 64 */
                -ms-overflow-style: none;
            }

            :host(.noscroll)::-webkit-scrollbar { 
                width: 0 !important;
                display: none; 
            }

            [id] {
                scroll-margin-top: var(--pb-view-scroll-margin-top);
            }

            #view {
                position: relative;
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

            a[rel=footnote] {
                font-size: var(--pb-footnote-font-size, var(--pb-content-font-size, 75%));
                font-family: var(--pb-footnote-font-family, --pb-content-font-family);
                vertical-align: super;
                color: var(--pb-footnote-color, var(--pb-color-primary, #333333));
                text-decoration: none;
                padding: var(--pb-footnote-padding, 0 0 0 .25em);
            }

            .list dt {
                float: left;
            }

            .footnote .fn-number {
                float: left;
                font-size: var(--pb-footnote-font-size, var(--pb-content-font-size, 75%));
            }

            .observer {
                display: block;
                width: 100%;
                height: var(--pb-view-loader-height, 16px);
                font-family: var(--pb-view-loader-font, --pb-base-font);
                color: var(--pb-view-loader-color, black);
                background: var(--pb-view-loader-background, #909090);
                background-image: var(--pb-view-loader-background-image, repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px));
                animation-name: loader;
                animation-timing-function: linear;
                animation-duration: 2s;
                animation-fill-mode: forwards;
                animation-iteration-count: infinite;
            }

            @keyframes loader {
                0% {
                    background-position: 3rem 0;
                }
                
                100% {
                    background-position: 0 0;
                }
            }

            .scroll-fragment {
                animation: fadeIn ease 500ms;
            }

            @keyframes fadeIn {
                0% {opacity:0;}
                100% {opacity:1;}
            }
        `;
    }

    render() {
        return [
            html`
                <div id="view" part="content">
                    ${this._style}
                    ${this.infiniteScroll ? html`<div id="top-observer" class="observer"></div>` : null}
                    <div class="columns">
                        <div id="column1">${this._column1}</div>
                        <div id="column2">${this._column2}</div>
                    </div>
                    <div id="content">${this._content}</div>
                    ${
                this.infiniteScroll ?
                    html`<div id="bottom-observer" class="observer"></div>` :
                    null
                }
                    <div id="footnotes" part="footnotes">${this._footnotes}</div>
                </div>
                <iron-ajax
                    id="loadContent"
                    verbose
                    handle-as="json"
                    method="get"
                    with-credentials
                    @response="${this._handleContent}"
                    @error="${this._handleError}"></iron-ajax>
            `
        ]
    }
}

customElements.define('pb-view', PbView);
