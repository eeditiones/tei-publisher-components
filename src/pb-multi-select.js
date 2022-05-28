import { LitElement, css, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import TomSelect from "tom-select";
import { pbMixin } from './pb-mixin.js';
import { resolveURL } from './utils.js';

function importTheme(theme) {
    if (document.getElementById('__pb-multi-select-css')) {
        return;
    }
    const themes = resolveURL('../css/tom-select');
    const link = document.createElement('link');
    link.id = '__pb-multi-select-css';
    link.href = `${themes}/tom-select.${theme}.min.css`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
}

const renderDefault = (data) =>
    data ? `<div>${data.text}</div>` : '';

/**
 *
 *
 * @customElement  pb-multi-select
 * @polymer
 * @demo demo/pb-multi-select.html
 * @appliesMixin pbMixin
 */
export class PbMultiSelect extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            theme: {
                type: String
            },
            source: {
                type: String
            },
            closeAfterSelect: {
                type: Boolean,
                attribute: 'close-after-select'
            },
            preload: {
                type: Boolean
            }
        };
    }

    constructor() {
        super();
        this.theme = 'bootstrap5';
        this.source = null;
        this.closeAfterSelect = false;
        this.preload = false;
        this.renderFunction = renderDefault;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    firstUpdated() {
        importTheme(this.theme);

        let input = this.querySelector('select,input');

        if (!input) {
            // create input if none was passed
            input = document.createElement('input');
            this.appendChild(input);
        }
        input.autocomplete = false;

        PbMultiSelect.waitOnce('pb-page-ready', () => {
            const options = {};
            if (this.source) {
                const url = this.toAbsoluteURL(this.source);
                options.labelField = 'text';
                options.valueField = 'value';
                options.searchField = ['text', 'value'];
                options.preload = this.preload;
                options.load = (query, callback) => {
                    fetch(`${url}?query=${encodeURIComponent(query)}`, {
                        method: 'GET',
                        mode: 'cors',
                        credentials: 'same-origin'
                    })
                    .then(response => response.json())
                    .then(json => {
                        callback(json);
                    }).catch(()=>{
                        callback();
                    });
                };
                options.render = {
                    option: this.renderFunction,
                    item: this.renderFunction
                };
            }
            options.closeAfterSelect = this.closeAfterSelect;
            options.onBlur = () => this.emitTo('pb-multi-select-blur');
            options.onChange = () => this.emitTo('pb-multi-select-change');
            this._select = new TomSelect(input, options);
        });
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
        `;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define('pb-multi-select', PbMultiSelect);