import { LitElement, html, css } from 'lit-element';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";
import { pbLightDom } from './pb-light-dom.js';

/**
 * A dropdown for switching the interface language.
 *
 * @slot - unnamed default slot for dropdown menu options given as <option> elements
 * @fires pb-i18n-language - Sends selected language
 * @fires pb-i18n-update - When received, sets the selected language to the one received from the event
 */
export class PbLang extends pbLightDom(pbMixin(LitElement)) {
    
    static get properties() {
        return {
            ...super.properties,
            /**
             * The label for a language in the dropdown
             */
            label: {
                type: String
            },
            selected: {
                type: String
            },
            /**
             * suppresses the label
             */
            nolabel:{
                type:Boolean
            }
        };
    }

    constructor() {
        super();
        this.label = 'language';
    }

    connectedCallback() {
        super.connectedCallback();

        this.subscribeTo('pb-i18n-update', (ev) => {
            this.selected = ev.detail.language.replace(/^([^-]+).*$/, '$1');
        }, []);
        waitOnce('pb-i18n-update', (options) => {
            this.selected = options.language.replace(/^([^-]+).*$/, '$1');
        });
    }

    render() {
        const slotted = this.fillSlot();
        return html`
            <select name="select" @change="${this._changed}" aria-label="${this.nolabel ? this.selected : translate(this.label)}">
            ${
                slotted.map(option => {
                    if (option instanceof HTMLElement) {
                        return html`
                            <option value="${option.getAttribute('value')}" ?selected=${option.getAttribute('value') === this.selected}>${option.textContent}</option>
                        `;
                    }
                    return '';
                })
            }
            </select>
        `;
    }

    _changed(e) {
        const lang = e.target.value;
        if (lang !== this.selected) {
            console.log('<pb-lang> Language changed to %s', lang);
            this.emitTo('pb-i18n-language', { 'language': lang });
            this.selected = lang;
        }
    }
}
customElements.define('pb-lang', PbLang);
