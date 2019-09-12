import { LitElement, html, css } from 'lit-element';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox';
import { pbMixin } from './pb-mixin.js';

/**
 * A dropdown for switching the interface language.
 *
 * @customElement
 * @polymer
 * @demo demo/pb-lang.html
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
        this.label = 'Language';
    }
    
    render() {
        return html`
            <paper-dropdown-menu label="${this.label}">
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

                --paper-input-container-input-color: var(--pb-lang-input-color, white);
                --paper-input-container-label: {
                    color:var(--pb-lang-label-color, --paper-grey-100);
                };
            }
        `;
    }

    _changed() {
        const loc = window.location;
        const lang = this.shadowRoot.getElementById('menu').selected;
        if (lang === this.selected) {
            return;
        }
        let search;
        if (loc.search) {
            search = loc.search.replace(/\&?lang=[\w]+/, '');
            if (search == '?') {
                search = search + 'lang=' + lang;
            } else {
                search = search + '&lang=' + lang;
            }
        } else {
            search = '?lang=' + lang;
        }
        loc.replace(loc.protocol + '//' + loc.hostname + ':' + loc.port + loc.pathname + search + loc.hash);
    }
}
customElements.define('pb-lang', PbLang);