import { LitElement, html, css } from 'lit-element';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox';
import { pbMixin } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";

/**
 * A dropdown for switching the interface language.
 *
 * @customElement
 * @polymer
 * @demo demo/pb-i18n.html
 * @appliesMixin pbMixin
 */
export class PbLang extends pbMixin(LitElement) {
    static get properties() {
        return {
            /**
             * The label for a language in the dropdown
             */
            label: {
                type: String
            },
            selected: {
                type: String
            },
            ...super.properties
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
        PbLang.waitOnce('pb-i18n-update', (options) => {
            this.selected = options.language.replace(/^([^-]+).*$/, '$1');
        });
    }

    render() {
        return html`
            <paper-dropdown-menu label="${translate(this.label)}">
                <paper-listbox id="menu" slot="dropdown-content" class="dropdown-content" selected="${this.selected}"
                    attr-for-selected="value" @selected-item-changed="${this._changed}">
                    <slot></slot>
                </paper-listbox>
            </paper-dropdown-menu>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;

                --paper-input-container-input-color: var(--pb-lang-input-color, black);
                --paper-input-container-label: {
                    color:var(--pb-lang-label-color, --paper-grey-100);
                };
            }
        `;
    }

    _changed() {
        const lang = this.shadowRoot.getElementById('menu').selected;
        if (lang !== this.selected) {
            console.log('<pb-lang> Language changed to %s', lang);
            this.emitTo('pb-i18n-language', { 'language': lang });
            this.selected = lang;
        }
    }
}
customElements.define('pb-lang', PbLang);