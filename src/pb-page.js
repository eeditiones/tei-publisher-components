import { LitElement, html, css } from 'lit-element';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import { pbMixin } from './pb-mixin.js';

class PbPage extends pbMixin(LitElement) {

    static get properties() {
        return {
            ...super.properties,
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
             * Optional URL pattern for retrieving i18n language files.
             * Should be an URL of the form `/i18n/{{lng}}.json`.
             */
            locales: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.endpoint = ".";
        this.locales = '/i18n/{{lng}}.json';
    }

    connectedCallback() {
        super.connectedCallback();

        this.signalReady('pb-page-ready', {
            endpoint: this.endpoint,
            template: this.template
        });
    }

    firstUpdated() {
        super.firstUpdated();

        i18next
            .use(LanguageDetector)
            .use(XHR)
            .init({
                fallbackLng: 'en',
                debug: true,
                detection: {
                    lookupQuerystring: 'lang'
                },
                backend: {
                    loadPath: this.locales
                }
            }).then((t) => {
                // initialized and ready to go!
                this._translate = t;
                this._updateI18n(t);
                this.signalReady('pb-i18n-update', { t, language: i18next.language });
            });

        this.subscribeTo('pb-i18n-language', (ev) => {
            const { language } = ev.detail;
            i18next.changeLanguage(language).then((t) => {
                this._translate = t;
                this._updateI18n(t);
                this.emitTo('pb-i18n-update', { t, language: i18next.language }, []);
            }, []);
        });

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