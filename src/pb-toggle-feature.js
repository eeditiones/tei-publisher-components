import { LitElement, html } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import { registry } from './urls.js';
import '@polymer/paper-checkbox';

/**
 * Enable or disable a particular display feature by setting a predefined or custom parameter.
 * Toggling display features can be done server-side or client-side.
 * 
 * It is important that `pb-toggle-feature` emits and subscribes to the same channel as the target `pb-view`.
 * 
 * # Server side toggling
 * 
 * You may set the following view parameters which correspond to the properties supported by `pb-view`:
 *
 * | Parameter | Description |
 * | ----------------|-------------|
 * | odd | the ODD to use |
 * | view | the view type: 'page', 'div' or 'single' |
 * | columnSeparator | CSS selector to find elements to use as column separator |
 * | xpath | XPath expression to select a portion of the text for display |
 *
 * For example, one may switch between page-by-page and by-division view using
 *
 * ```html
 * <pb-toggle-feature emit="transcription" name="view" on="page" off="div">Page View</pb-toggle-feature>
 * ```
 *
 * It is also possible to set custom parameters, which will be passed to the ODD as user-defined parameters.
 * This can be used e.g. to implement different views on the text, e.g. a 'diplomatic' and a 'normalized' mode. Both
 * views would be backed by the same ODD and processing model, while the passed in parameter
 * can be used to distinguish the modes.
 *
 * For example, the following snippet would result in a custom parameter called `mode` with
 * either a value of `dipl` or `norm`. Within processing model predicates it could be queried as
 * `$parameters?mode='norm'` to check if the normalized version should be output.
 *
 * ```html
 * <pb-toggle-feature name="mode" on="diplomatic" off="norm">Diplomatic View</pb-toggle-feature>
 * ```
 *
 * Besides setting a single parameter, you may also set multiple
 * properties on the target `pb-view` via the `properties-on` and `properties-off`
 * attributes (as an alternative to `on` and `off`). For example, in 'on' state, you may
 * want to use a different ODD and switch the view to 'page' at the same time:
 *
 * ```html
 * <pb-toggle-feature properties-on='{"odd": "myodd", "view": "page"}' properties-off='{"odd": "myodd-diplomatic", "view": "div"}'>
 *     Diplomatic View
 * </pb-toggle-feature>
 * ```
 *
 * # Client side toggling
 * 
 * The component can also be used to toggle features client-side, i.e. without requiring a server-roundtrip.
 * To enable this, the `selector` property should be set to a CSS3 selector targetting the HTML elements
 * to toggle. In `on` state, the selected elements will be assigned a class `.toggled`.
 * 
 * ```html
 * <pb-toggle-feature name="normalized" selector=".choice,.choice-alternate,br">Normalized View</pb-toggle-feature>
 * ```
 * 
 * Note that the name attribute is still required: it is used to determine if the feature is in on or off state by
 * looking at request parameters.
 * 
 * Instead of toggling the class, you can also completely disable the elements selected - provided that they are
 * publisher components implementing the corresponding `command` method of `pb-mixin`. To disable elements instead of
 * toggling, set the `action` property to *disable*.
 * 
 * ```html
 * <pb-toggle-feature name="plain" selector=".tei-foreign,pb-highlight,pb-popover" action="disable" default="off">Plain Reading View</pb-toggle-feature>
 * ```
 *
 * @fires pb-toggle - Fired when the feature is toggled, it's changing properties between values of its `on` and `off` state
 * @fires pb-update - When received, sets the features passed from the event
 */
export class PbToggleFeature extends pbMixin(LitElement) {

    static get properties() {
        return {
            ...super.properties,
            /**
             * The name of the feature (required). This will correspond to the name of the custom parameter
             * passed to the ODD.
             */
            name: {
                type: String
            },
            /**
             * (optional) CSS selector: selects the elements to toggle client side (sets or unsets a 
             * CSS class `.toggled`). Setting this property will not trigger a reload as everything is
             * handled by javascript.
             */
            selector: {
                type: String
            },
            /**
             * In combination with a selector specifies the action to be taken, currently one of
             * `toggle` (default) or `disable`.
             */
            action: {
                type: String
            },
            /**
             * Value to set the parameter to when the feature is enabled.
             */
            on: {
                type: String
            },
            /**
             * Value to set the parameter to when the feature is disabled.
             */
            off: {
                type: String
            },
            /**
             * The default setting: either 'on' or 'off'
             */
            default: {
                type: String
            },
            /**
             * Additional properties to set on the pb-view if toggle is in 'on' state.
             * Possible properties are 'view', 'odd' and 'columnSeparator'.
             */
            propertiesOn: {
                type: Object,
                attribute: 'properties-on'
            },
            /**
             * Additional properties to set on the pb-view if toggle is in 'off' state.
             * Possible properties are 'view', 'odd' and 'columnSeparator'.
             */
            propertiesOff: {
                type: Object,
                attribute: 'properties-off'
            },
            checked: {
                type: Boolean
            },
            /**
             * If set to false (the default), `pb-toggle-feature` will pass its properties to the
             * connected view before this loads content for the first time. If true,
             * `pb-toggle-feature` will initialize its state depending on the setting of the view.
             * This only makes sense for the special properties 'view' and 'odd' though.
             */
            initFromView: {
                type: Boolean,
                attribute: 'init-from-view'
            }
        };
    }

    constructor() {
        super();
        this.default = 'on';
        this.action = 'toggle';
        this.propertiesOn = {};
        this.propertiesOff = {};
        this.initFromView = false;
    }

    render() {
        return html`
            <paper-checkbox id="checkbox" @change="${this._changed}" .checked="${this.checked}" .disabled="${this.disabled}"><slot></slot></paper-checkbox>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        if (this.initFromView) {
            const initHandler = this.subscribeTo('pb-update', (ev) => {
                if (this.name === 'infiniteScroll') {
                    this.checked = ev.detail.infiniteScroll === this.propertiesOn[this.name];
                } else if (this.name === 'view' || this.name === 'odd' || this.name === 'xpath') {
                    this.checked = ev.detail.data[this.name] === this.propertiesOn[this.name];
                }
                initHandler.forEach((handler) => document.removeEventListener('pb-update', handler));
            });
            this.waitForChannel(() => {
                const params = {
                    state: this.checked,
                    selectors: [{
                        selector: this.selector,
                        command: this.action,
                        state: this.checked
                    }],
                    properties: {},
                    action: 'init'
                };
                registry.set(`toggles.${this.name}`, params);
                registry.state[this.name] = this.checked ? 'on' : 'off';
                registry.replace('pb-toggle init');
                this.emitTo('pb-toggle', params);
                console.log('pb-toggle ready');
                this.signalReady();
            });
        } else {
            console.log('<pb-toggle-feature> Param: %s; default: %s', registry.state[this.name], this.default);
            if (typeof registry.state[this.name] !== 'undefined') {
                this.checked = registry.state[this.name] === 'on';
            } else {
                this.checked = this.default === 'on';
            }
            this.waitForChannel(() => {
                const params = {
                    state: this.checked,
                    selectors: [{
                        selector: this.selector,
                        command: this.action,
                        state: this.checked
                    }],
                    properties: this.checked ? this.propertiesOn : this.propertiesOff,
                    action: 'init'
                };
                registry.set(`toggles.${this.name}`, params);
                registry.state[this.name] = this.checked ? 'on' : 'off';
                registry.replace('pb-toggle init');
                this.emitTo('pb-toggle', params);
                this.signalReady();
            });
        }
        registry.subscribe((ev) => {
            this.checked = registry.get(`toggles.${this.name}.state`);
            // this.checked = (ev.detail.toggles && ev.detail.toggles[this.name]) ? ev.detail.toggles[this.name].state : null;
            this.shadowRoot.getElementById('checkbox').checked = this.checked;
        });
    }

    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
        switch (name) {
            case 'on':
                this.propertiesOn[this.name] = newVal;
                break;
            case 'off':
                this.propertiesOff[this.name] = newVal;
                break;
            default:
                break;
        }
    }

    _changed(ev) {
        if (ev.type !== 'change') {
            return;
        }
        this.checked = this.shadowRoot.getElementById('checkbox').checked;
        
        const params = {
            state: this.checked,
            selectors: [{
                selector: this.selector,
                command: this.action,
                state: this.checked
            }],
            properties: this.checked ? this.propertiesOn : this.propertiesOff,
            action: 'refresh'
        };
        if (this.name) {
            registry.set(`toggles.${this.name}`, params);
            registry.state[this.name] = this.checked ? 'on' : 'off';
            registry.commit(`toggle feature ${this.name}`);
        }
        this.emitTo('pb-toggle', params);
    }
}

customElements.define('pb-toggle-feature', PbToggleFeature);
