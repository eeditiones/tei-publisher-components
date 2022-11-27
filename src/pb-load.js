import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";
import { typesetMath } from "./pb-formula.js";
import '@polymer/iron-ajax';
import '@polymer/paper-dialog';
import '@polymer/paper-dialog-scrollable';

/**
 * Dynamically load data by calling a server-side script, optionally triggered by an event.
 * This is used for e.g. the document list on the start page or the table
 * of contents.
 * 
 * @slot - default unnamed slot for content
 * @fires pb-start-update - Fired before the element updates its content
 * @fires pb-end-update - Fired after the element has finished updating its content
 * @fires pb-results-received - Fired when the component received content from the server
 * @fires pb-toggle - When received, changes the state of the feature
 */
export class PbLoad extends pbMixin(LitElement) {

    static get properties() {
        return {
            ...super.properties,
            /** The URL for the AJAX request. If a relative URL is passed, it will be resolved
             * against the current API endpoint.
             */
            url: {
                type: String
            },
            /**
             * If set to true, the `url` property will be interpreted as a template string
             * containing placeholders for parameters in `{parameter-name}`. The placeholders
             * will be replaced by the actual parameters when building the final URL. Each parameter
             * used in the URL template will be removed from the request parameter list.
             */
            expand: {
                type: Boolean
            },
            /** ID of the pb-document this element is connected to. The document path to
             * load will be taken from the pb-document.
             */
            src: {
                type: String
            },
            /**
             * The container element into which the results returned by
             * the AJAX request will be loaded.
             */
            container: {
                type: String
            },
            /**
             * Should content be loaded immediately when the component is initialized?
             */
            auto: {
                type: Boolean
            },
            /**
             * Only load content once, not every time a `pb-load` event is received.
             */
            loadOnce: {
                type: Boolean
            },
            /**
             * If set, relative links (img, a) will be made absolute.
             */
            fixLinks: {
                type: Boolean,
                attribute: 'fix-links'
            },
            /**
             * Start offset to use for showing paginated content.
             */
            start: {
                type: Number
            },
            /**
             * If set, a parameter "language" will be added to the parameter list. 
             * Also, a refresh will be triggered if a `pb-i18n-update` event is received,
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
             * Indicates whether or not cross-site Access-Control requests should be made.
             * Default is false.
             */
            noCredentials: {
                type: Boolean,
                attribute: 'no-credentials'
            },
            /**
             * Indicates if the parameters of the request made should be saved to the browser
             * history and URL. Default: false.
             */
            history: {
                type: Boolean
            },
            /**
             * The event which will trigger a new request to be sent. Default is 'pb-load'.
             */
            event: {
                type: String
            },
            /**
             * Additional, user-defined parameters to be sent with the request.
             */
            userParams: {
                type: Object
            },
            /**
             * If set, silently ignore errors when sending the request.
             */
            silent: {
                type: Boolean
            }
        };
    }

    constructor() {
        super();
        this.auto = false;
        this.loadOnce = false;
        this.history = false;
        this.event = 'pb-load';
        this.loaded = false;
        this.language = null;
        this.noCredentials = true;
        this.silent = false;
    }

    connectedCallback() {
        super.connectedCallback();
        this.subscribeTo(this.event, (ev) => {
            if (this.history && ev.detail && ev.detail.params) {
                const start = ev.detail.params.start;
                if (start) {
                    this.setParameter('start', start);
                    this.pushHistory('pagination', {
                        start: start
                    });
                }
            }
            PbLoad.waitOnce('pb-page-ready', () => {
                this.load(ev);
            });
        });

        if (this.history) {
            window.addEventListener('popstate', (ev) => {
                ev.preventDefault();
                if (ev.state && ev.state.start && ev.state.start !== this.start) {
                    this.start = ev.state.start;
                    this.load();
                }
            });
        }

        this.subscribeTo('pb-toggle', ev => {
            this.toggleFeature(ev);
        });

        this.subscribeTo('pb-i18n-update', ev => {
            const needsRefresh = this.language && this.language !== ev.detail.language;
            this.language = ev.detail.language;
            if (this.useLanguage && needsRefresh) {
                this.load();
            }
        }, []);

        this.signalReady();
    }

    firstUpdated() {
        if (this.auto) {
            this.start = this.getParameter('start', this.start);
            PbLoad.waitOnce('pb-page-ready', (data) => {
                if (data && data.language) {
                    this.language = data.language;
                }
                this.wait(() => this.load());
            });
        } else {
            PbLoad.waitOnce('pb-page-ready', (data) => {
                if (data && data.language) {
                    this.language = data.language;
                }
            });
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        if (oldValue && oldValue !== newValue) {
            switch (name) {
                case 'url':
                case 'userParams':
                case 'start':
                    if (this.auto && this.loader) {
                        PbLoad.waitOnce('pb-page-ready', () => {
                            this.wait(() => this.load());
                        });
                    }
                    break;
                default:
                    break;
            }
        }
    }

    render() {
        return html`
            <slot></slot>
            <iron-ajax
                id="loadContent"
                verbose
                handle-as="text"
                method="get"
                ?with-credentials="${!this.noCredentials}"
                @response="${this._handleContent}"
                @error="${this._handleError}"></iron-ajax>
            <paper-dialog id="errorDialog">
                <h2>${translate('dialogs.error')}</h2>
                <paper-dialog-scrollable></paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus">
                    ${translate('dialogs.close')}
                    </paper-button>
                </div>
            </paper-dialog>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
        `;
    }

    toggleFeature(ev) {
        this.userParams = ev.detail.properties;
        console.log('<pb-load> toggle feature %o', this.userParams);
        if (ev.detail.action === 'refresh') {
            this.load();
        }
    }

    getURL(params) {
        let url = this.url;
        if (this.expand) {
            url = url.replace(/{([^})]+)}/g, (match, key) => {
                if (!params[key]) {
                    return '';
                }
                const param = encodeURIComponent(params[key] || key);
                delete params[key];
                return param;
            });
        }
        return this.toAbsoluteURL(url);
    }

    load(ev) {
        if (!this.url) {
            return;
        }
        if (this.loadOnce && this.loaded) {
            return;
        }

        this.emitTo('pb-start-update');

        let params = {};

        if (ev) {
            if (ev instanceof Event) {
                if (ev.detail && ev.detail.params) {
                    params = ev.detail.params;
                }
            } else {
                params = ev;
            }
        }

        const doc = this.getDocument();
        if (doc) {
            params.doc = doc.path;
        }

        // set start parameter to start property, but only if not provided otherwise already
        if (this.start && !params.start) {
            params.start = this.start;
        }

        if (this.language) {
            params.language = this.language;
        }

        params = this.prepareParameters(params);

        const url = this.getURL(params);

        console.log("<pb-load> Loading %s with parameters %o", url, params);
        const loader = this.shadowRoot.getElementById('loadContent');
        loader.params = params;
        loader.url = url;
        loader.generateRequest();

        if (this.loadOnce) {
            this.loaded = true;
        }
    }

    /**
     * Allow subclasses to set parameters before the request is being sent.
     *
     * @param params Map of parameters
     * @return new or modified parameters map
     */
    prepareParameters(params) {
        if (this.userParams) {
            return Object.assign(params, this.userParams);
        }
        return params;
    }

    _handleContent(ev) {
        const resp = this.shadowRoot.getElementById('loadContent').lastResponse;
        if (this.container) {
            this.style.display = 'none';
            document.querySelectorAll(this.container).forEach((elem) => {
                elem.innerHTML = resp;
                this._parseHeaders(ev.detail.xhr, elem);
                this._fixLinks(elem);
                this._onLoad(elem);
            });
        } else {
            this.style.display = '';
            this._clearContent();

            const div = document.createElement('div');
            div.innerHTML = resp;
            this._parseHeaders(ev.detail.xhr, div);
            div.slot = '';
            this.appendChild(div);
            this._fixLinks(div);

            this._onLoad(div);
        }

        this.emitTo('pb-end-update');
    }

    _clearContent() {
        const contentSlot = this.shadowRoot.querySelector('slot:not([name])');
        if (contentSlot) {
            // clear content from slot
            contentSlot.assignedNodes().forEach((node) => node.parentNode.removeChild(node));
        }
    }

    _handleError() {
        this.emitTo('pb-end-update');
        const loader = this.shadowRoot.getElementById('loadContent');
        const { response } = loader.lastError;
        if (this.silent) {
            console.error('Request failed: %s', response ? response.description : '');
            return;
        }
        let message;
        if (response) {
            message = response.description;
        } else {
            message = '<pb-i18n key="dialogs.serverError"></pb-i18n>';
        }
        const dialog = this.shadowRoot.getElementById('errorDialog');
        const body = dialog.querySelector("paper-dialog-scrollable");
        body.innerHTML = `<p><pb-i18n key="dialogs.serverError"></pb-i18n>: ${message} </p>`;
        dialog.open();
    }

    _parseHeaders(xhr, content) {
        // Try to determine number of pages and current position
        // Search for data-pagination-* attributes first and if they
        // can't be found, check HTTP headers
        function getPaginationParam(type, noHeaders) {
            const elem = content.querySelector(`[data-pagination-${type}]`);
            if (elem) {
                return elem.getAttribute(`data-pagination-${type}`);
            }
            return noHeaders ? 0 : xhr.getResponseHeader(`pb-${type}`);
        }

        const total = getPaginationParam('total', this.noCredentials);
        const start = getPaginationParam('start', this.noCredentials);

        if (this.start !== start) {
            this.start = parseInt(start);
        }
        this.emitTo('pb-results-received', {
            "count": total ? parseInt(total, 10) : 0,
            "start": this.start,
            "params": this.shadowRoot.getElementById('loadContent').params
        });
    }

    _fixLinks(content) {
        typesetMath(content);
        if (this.fixLinks) {
            content.querySelectorAll('img').forEach((image) => {
                const oldSrc = image.getAttribute('src');
                const src = new URL(oldSrc, `${this.getEndpoint()}/`);
                image.src = src;
            });
            content.querySelectorAll('a').forEach((link) => {
                const oldHref = link.getAttribute('href');
                const href = new URL(oldHref, `${this.getEndpoint()}/`);
                link.href = href;
            });
        }
    }

    _onLoad(content) {
    }

    /**
     * Fired before the element updates its content
     *
     * @event pb-start-update
     * @param {object} Parameters to be passed to the request
     */

    /**
     * Fired after the element has finished updating its content
     *
     * @event pb-end-update
     */

    /**
     * Fired after the element has received content from the server
     *
     * @event pb-results-received
     * @param {int} count number of results received (according to `pb-total` header)
     * @param {int} start offset into the result set (according to `pb-start` header)
     */
}
customElements.define('pb-load', PbLoad);