import { LitElement } from 'lit-element';
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
 * Provides a combo box, i.e. a combination of an input with a dropdown.
 * Items to select from may be obtained from a remote data source.
 * 
 * The form control to be used (either a select or input) should be passed 
 * in the content of the element. If no control is provided, a simple `<input>`
 * will be created.
 * 
 */
export class PbComboBox extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            /**
             * A remote data source to use. The component will pass the text entered by the user
             * in parameter `query`. It expects a JSON array of objects with each object describing
             * one item:
             * 
             * ```json
             * {
             *  "text": "Text to show as label",
             *  "value": "value-to-use"
             * }
             * ```
             */
            source: {
                type: String
            },
            /**
             * Automatically close the dropdown once the user made a selection
             */
            closeAfterSelect: {
                type: Boolean,
                attribute: 'close-after-select'
            },
            /**
             * Preload all items from the remote data source at startup
             */
            preload: {
                type: Boolean
            },
            /**
             * Name of the event to be emitted when the user leaves the form control
             */
            onBlur: {
                type: String,
                attribute: 'on-blur'
            },
            /**
             * Name of the event to be emitted when the value of the form control has changed
             */
            onChange: {
                type: String,
                attribute: 'on-change'
            }
        };
    }

    /**
     * Set a javascript function to be called whenever an item
     * needs to be rendered. The function will be passed the data
     * object of the current item as argument.
     * 
     * @param {Function} callbackFunction
     */
    set renderItem(callbackFunction) {
        this.renderFunction = callbackFunction;
    }

    constructor() {
        super();
        this.theme = 'default';
        this.source = null;
        this.closeAfterSelect = false;
        this.preload = false;
        this.renderFunction = renderDefault;
        this.onBlur = 'pb-multi-select-blur';
        this.onChange = 'pb-multi-select-change';
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

        PbComboBox.waitOnce('pb-page-ready', () => {
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
            options.onBlur = () => this.emitTo(this.onBlur);
            options.onChange = () => this.emitTo(this.onChange);
            this._select = new TomSelect(input, options);
        });
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define('pb-combo-box', PbComboBox);