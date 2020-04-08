import { LitElement, html, css } from 'lit-element';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import Backend from 'i18next-chained-backend';
import { pbMixin } from './pb-mixin.js';
import { resolveURL } from './utils.js';

class PbPage extends pbMixin(LitElement) {

    static get properties() {
        const props = {
            appRoot: {
                type: String,
                attribute: 'app-root'
            },
            template: {
                type: String
            },
            endpoint: {
                type: String
            },
            /**
             * Optional URL pointing to a directory from which additional i18n 
             * language files will be loaded. Naming of the files should follow 
             * the pattern `app-{{lng}}.json`,
             * where `{{lng}}` is the code for the language, e.g. 'de' or 'en'.
             */
            locales: {
                type: String
            },
            /**
             * If set, the element will wait for a language being set by i18n before
             * it sends a `pb-page-ready` event. Elements like `pb-view` will wait
             * for this event before displaying content.
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
        return Object.assign(props, super.properties);
    }

    constructor() {
        super();
        this.unresolved = true;
        this.endpoint = ".";
    }

    connectedCallback() {
        super.connectedCallback();

        if (!this.requireLanguage) {
            this.signalReady('pb-page-ready', {
                endpoint: this.endpoint,
                template: this.template
            });
        }
    }

    firstUpdated() {
        super.firstUpdated();

        const defaultLocales = resolveURL('../i18n/') + '{{ns}}/{{lng}}.json';
        const userLocales = this.locales ? `${this.locales}/{{ns}}/{{lng}}.json` : null;
        console.log('<pb-page> Loading locales. common: %s; app: %s', defaultLocales, userLocales);
        const backends = userLocales ? [XHR, XHR] : [XHR];
        const backendOptions = [{
            loadPath: defaultLocales
        }];
        if (userLocales) {
            backendOptions.unshift({
                loadPath: userLocales
            });
        }
        const options = {
            fallbackLng: 'en',
            defaultNS: 'common',
            ns: ['common'],
            debug: false,
            detection: {
                lookupQuerystring: 'lang'
            },
            backend: {
                backends,
                backendOptions
            }
        };
        if (userLocales) {
            options.defaultNS = 'app';
            options.fallbackNS = 'common';
            options.ns = ['app', 'common'];
        }
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