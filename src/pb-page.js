import { LitElement, html, css } from 'lit-element';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import Backend from 'i18next-chained-backend';
import { pbMixin } from './pb-mixin.js';
import { resolveURL } from './utils.js';

/**
 * Make sure there's only one instance of pb-page active at any time.
 */
let _instance;

/**
 * Configuration element which should wrap around other `pb-` elements.
 * Among other things, this element determines the TEI Publisher
 * instance to which all elements will talk (property `endpoint`), and
 * initializes the i18n language module.
 * 
 * @slot - default unnamed slot for content
 * @fires pb-page-ready - fired when the endpoint and language settings have been determined
 * @fires pb-i18n-update - fired when the user selected a different display language
 * @fires pb-i18n-language - when received, changes the language to the one passed in the event and proceeds to pb-i18-update
 */
class PbPage extends pbMixin(LitElement) {

    static get properties() {
        return {
            ...super.properties,
            /**
             * TEI Publisher internal: set to the root URL of the current app
             */
            appRoot: {
                type: String,
                attribute: 'app-root'
            },
            /**
             * TEI Publisher internal: set to the current page template.
             */
            template: {
                type: String
            },
            /**
             * The base URL of the TEI Publisher instance. All nested elements will
             * talk to this instance. By default it is set to the URL the
             * page was loaded from.
             * 
             * The endpoint can be overwritten by providing an HTTP request parameter
             * `_target` with an URL.
             */
            endpoint: {
                type: String,
                reflect: true
            },
            /**
             * Optional URL pointing to a directory from which additional i18n 
             * language files will be loaded. The URL should contain placeholders
             * for the language (`lng`) and the namespace (`ns`), e.g.
             * 
             * `resources/i18n/{{ns}}_{{lng}}.json`
             * 
             * or
             * 
             * `resources/i18n/{{ns}}/{{lng}}.json`
             * 
             * The latter assumes custom language files in a subdirectory, the first
             * expects the namespace to be specified at the start of the file name.
             * 
             * The default namespace for custom language files is assumed to be `app`,
             * but you can define additional namespaces via `localeFallbackNS`.
             */
            locales: {
                type: String
            },
            /**
             * Optional list of whitespace separated namespaces which should be searched
             * for translations. By default, only the namespace `common` is queried.
             * If the `locales` property is specified, an additional namespace `app` is added.
             * You can add more namespace here, e.g. `custom`, if you want to provide
             * translations for custom apps or components.
             */
            localeFallbackNs: {
                type: String,
                attribute: 'locale-fallback-ns'
            },
            /**
             * Set a language for i18n (e.g. 'en' or 'de'). If not set, browser language
             * detection will be used.
             */
            language: {
                type: String
            },
            /**
             * If set, the element will wait for a language being set by i18n before
             * it sends a `pb-page-ready` event. Elements like `pb-view` will wait
             * for this event before displaying content.
             * 
             * Also, `pb-view` will pass the configured language to the server endpoint
             * where it will be available to ODD processing models in variable 
             * `$parameters?language` and can thus be used to change output depending on
             * the user interface language.
             * 
             * If you would like `pb-view` to refresh automatically whenever the language
             * setting changes, specify property `useLanguage` on the corresponding `pb-view`.
             */
            requireLanguage: {
                type: Boolean,
                attribute: 'require-language'
            },
            /**
             * Will be set while the component is loading and unset when
             * it is fully loaded. Use to avoid flash of unstyled content
             * via CSS: set `unresolved` on `pb-page` in the HTML and
             * add a CSS rule like:
             * 
             * ```css
             * pb-page[unresolved] {
             *     display: none;
             * }
             * ```
             */
            unresolved: {
                type: Boolean,
                reflect: true
            }
        };
    }

    constructor() {
        super();
        this.unresolved = true;
        this.endpoint = ".";
        this._localeFallbacks = [];

        if (_instance) {
            this.disabled = true;
        } else {
            _instance = this;
        }
    }

    set localeFallbackNs(value) {
        value.split(/\s+/).forEach(v => this._localeFallbacks.push(v));
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (_instance === this) {
            // clear to allow future instances
            _instance = null;
        }
    }

    connectedCallback() {
        super.connectedCallback();
        
        if (this.disabled) {
            return;
        }

        if (this.locales && this._localeFallbacks.indexOf('app') === -1) {
            this._localeFallbacks.push('app');
        }
        this._localeFallbacks.push('common');

        const target = this.getParameter('_target');
        if (target) {
            this.endpoint = target;
        }

        if (!this.requireLanguage) {
            this.signalReady('pb-page-ready', {
                endpoint: this.endpoint,
                template: this.template
            });
        }
    }

    firstUpdated() {
        super.firstUpdated();

        if (this.disabled) {
            return;
        }

        const defaultLocales = resolveURL('../i18n/') + '{{ns}}/{{lng}}.json';
        console.log('<pb-page> Loading locales. common: %s; additional: %s; namespaces: %o',
            defaultLocales, this.locales, this._localeFallbacks);
        const backends = this.locales ? [XHR, XHR] : [XHR];
        const backendOptions = [{
            loadPath: defaultLocales,
            crossDomain: true
        }];
        if (this.locales) {
            backendOptions.unshift({
                loadPath: this.locales,
                crossDomain: true
            });
        }
        const options = {
            fallbackLng: 'en',
            defaultNS: 'common',
            ns: ['common'],
            debug: false,
            load: 'languageOnly',
            detection: {
                lookupQuerystring: 'lang'
            },
            backend: {
                backends,
                backendOptions
            }
        };
        if (this.language) {
            options.lng = this.language;
        }

        if (this._localeFallbacks.length > 0) {
            const fallbacks = this._localeFallbacks.slice();
            options.defaultNS = fallbacks[0];
            options.fallbackNS = fallbacks.slice(1);
            options.ns = fallbacks;
        }
        console.log('<pb-page> i18next options: %o', options);
        i18next
            .use(LanguageDetector)
            .use(Backend)
            .init(options)
            .then((t) => {
                // initialized and ready to go!
                this._translate = t;
                this._updateI18n(t);
                this.signalReady('pb-i18n-update', { t, language: i18next.language });
                if (this.requireLanguage) {
                    this.signalReady('pb-page-ready', {
                        endpoint: this.endpoint,
                        template: this.template,
                        language: i18next.language
                    });
                }
            });

        this.subscribeTo('pb-i18n-language', (ev) => {
            const { language } = ev.detail;
            i18next.changeLanguage(language).then((t) => {
                this._translate = t;
                this._updateI18n(t);
                this.emitTo('pb-i18n-update', { t, language: i18next.language }, []);
            }, []);
        });

        this.unresolved = false;

        console.log('<pb-page> endpoint: %s; trigger window resize', this.endpoint);
        this.querySelectorAll('app-header').forEach(h => h._notifyLayoutChanged());
    }

    _updateI18n(t) {
        this.querySelectorAll('[data-i18n]').forEach(elem => {
            const targets = elem.getAttribute('data-i18n');
            const regex = /(?:\[(.*)\])?([^;]+)/g;
            let m = regex.exec(targets);
            while (m) {
                const translated = t(m[2]);
                if (m[1]) {
                    elem.setAttribute(m[1], translated);
                } else {
                    elem.innerHTML = translated;
                }
                m = regex.exec(targets);
            }
        });
    }

    render() {
        return html`<slot></slot>`;
    }

    static get styles() {
        return css`
        :host {
            display: block;
        }
        `;
    }
}

customElements.define('pb-page', PbPage);