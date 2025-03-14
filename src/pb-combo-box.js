import { LitElement } from 'lit-element';
import TomSelect from "tom-select";
import { pbMixin, waitOnce } from './pb-mixin.js';
import { resolveURL } from './utils.js';
import { get as i18n } from "./pb-i18n.js";

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
    data ? `<div>${i18n(data.text)}</div>` : '';

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
             * The placeholder text to display in the control. May contain text or an i18n key to be
             * translated automatically.
             */
            placeholder: {
                type: String
            },
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
             * Must be of type string because tom-select supports setting
             * that property to "focus" (load data on focus)
             */
            preload: {
                type: String
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

    get value() {
        return this._select ? this._select.getValue() : null;
    }

    set value(value) {
        if (!this._select) {
            return;
        }
        this._select.clear(true);
        this._select.sync();

        this._select.setValue(value, false);
        this._select.sync();
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
        this.onBlur = 'pb-combo-box-blur';
        this.onChange = 'pb-combo-box-change';
        this.placeholder = '';
    }

    connectedCallback() {
        super.connectedCallback();
        this.subscribeTo('pb-i18n-update', () => {
            if (this._select) {
                this._select.settings.placeholder = i18n(this.placeholder);
                this._select.inputState();

                if (this.source) {
                    this._select.refreshOptions(false);
                } else {
                    this._select.clearOptions();
                    this._select.sync();
                }
            }
        });
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

        waitOnce('pb-page-ready', () => {
            const options = {};
            if (this.source) {
                let controller = new AbortController()
                const url = this.toAbsoluteURL(this.source);
                options.labelField = 'text';
                options.valueField = 'value';
                options.searchField = [];
                options.preload = this.preload;
                // Make sure options are loaded even if the user clears the search field
                if(this.preload) {
                    options.shouldLoad = () => true
                }
                options.load = (query, callback) => {
                    if (this._select) {
                      // The default behaviour of tom-select is to keep existing items when loading
                      // again from the source. We want to show only items the server provides, so
                      // we need to clear "stale" items before fetching.
                      this._select.clearOptions();
                    }
                    // Abort previous request (if any)
                    if (controller) {
                        controller.abort();
                    }
                    controller = new AbortController();
                    fetch(`${url}?query=${encodeURIComponent(query)}`, {
                        method: 'GET',
                        mode: 'cors',
                        credentials: 'same-origin',
                        signal: controller.signal
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
            options.placeholder = i18n(this.placeholder);
            options.closeAfterSelect = this.closeAfterSelect;
            options.onBlur = () => this.emitTo(this.onBlur, { value: this.value });
            options.onChange = () => this.emitTo(this.onChange, { value: this.value });
            // options.plugins = ['change_listener'];

            this._select = new TomSelect(input, options);
        });
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define('pb-combo-box', PbComboBox);