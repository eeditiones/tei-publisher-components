import { LitElement, html, css } from 'lit-element';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";
import { themableMixin } from './theming.js';

/**
 * A dropdown for switching the interface language.
 *
 * @slot select - Optional select element to use for language selection. If not provided, a default one will be created.
 * @slot - unnamed default slot for dropdown menu options
 * @fires pb-i18n-language - Sends selected language
 * @fires pb-i18n-update - When received, sets the selected language to the one received from the event
 * @cssprop --pb-lang-input-color - Color of the text in the language field
 */
export class PbLang extends themableMixin(pbMixin(LitElement)) {
    static get styles() {
        return css`
            :host {
                display: inline-block;
            }
            ::slotted(*) {
                display: none;
            }
            ::slotted(select) {
                display: inline-block;
            }
            select {
                color: var(--pb-lang-input-color, inherit);
            }
        `;
    }

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
            this._syncOptions();
        }, []);
        waitOnce('pb-i18n-update', (options) => {
            this.selected = options.language.replace(/^([^-]+).*$/, '$1');
            this._syncOptions();
        });
    }

    render() {
        return html`
            <select name="select" @change="${this._changed}" aria-label="${translate(this.label)}" title="${translate(this.label)}"></select>
            <slot @slotchange="${this._syncOptions}"></slot>
        `;
    }

    _syncOptions() {
        // First try to find select in light DOM (slotted)
        let select = this.querySelector('select');
        // If not found, look in shadow DOM (default)
        if (!select) {
            select = this.shadowRoot.querySelector('select');
        }
        if (!select) return;

        // Clear existing options
        select.innerHTML = '';

        // Get all option elements from the light DOM
        const options = Array.from(this.querySelectorAll('option, paper-item'));
        options.forEach(option => {
            const newOption = document.createElement('option');
            newOption.value = option.value || option.getAttribute('value');
            newOption.textContent = option.textContent;
            select.appendChild(newOption);
        });

        // Set the selected value
        if (this.selected) {
            select.value = this.selected;
        }
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
