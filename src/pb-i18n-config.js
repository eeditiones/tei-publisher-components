import { LitElement } from 'lit-element';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import { pbMixin } from './pb-mixin.js';


/**
 * Central configuration component for I18N based on i18next. It is included by `pb-page`,
 * but you can also add it to your HTML in cases where you don't need `pb-page`.
 *
 * The component handles loading of translations as well as informing other components
 * about language changes.
 * 
 * @customElement  pb-i18n-config
 * @polymer
 * @demo demo/pb-i18n.html
 * @appliesMixin pbMixin
 */
export class PbI18nConfig extends pbMixin(LitElement) {
    static get properties() {
        return {
            path: {
                type: String
            },
            ...super.properties
        };
    }

    constructor() {
        super();

        this.path = '/i18n/{{lng}}.json';
    }

    connectedCallback() {
        super.connectedCallback();

        i18next
            .use(LanguageDetector)
            .use(XHR)
            .init({
                debug: true,
                detection: {
                    lookupQuerystring: 'lang'
                },
                backend: {
                    loadPath: this.path
                }
            }).then((t) => {
                // initialized and ready to go!
                this.signalReady('pb-i18n-update', { t, language: i18next.language });
            });

        this.subscribeTo('pb-i18n-language', (ev) => {
            const { language } = ev.detail;
            i18next.changeLanguage(language).then((t) => {
                this.emitTo('pb-i18n-update', { t, language: i18next.language }, []);
            }, []);
        });
    }
}
customElements.define('pb-i18n-config', PbI18nConfig);