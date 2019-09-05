import { LitElement, html } from 'lit-element';
import { pbMixin } from './pb-mixin';
import '@polymer/paper-checkbox';

/**
 * Enable or disable a particular display feature by setting a predefined or custom parameter.
 *
 * Predefined view parameters known are
 *
 * | Parameter | Description |
 * | ----------------|-------------|
 * | odd | the ODD to use |
 * | view | the view type: 'page', 'div' or 'single' |
 * | columnSeparator | CSS selector to find elements to use as column separator |
 *
 * For example, one may switch between page-by-page and by-division view using
 *
 * ```
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
 * ```
 * <pb-toggle-feature name="mode" on="diplomatic" off="norm">Diplomatic View</pb-toggle-feature>
 * ```
 *
 * Besides setting a single parameter, you may also set multiple
 * properties on the target `pb-view` via the `properties-on` and `properties-off`
 * attributes (as an alternative to `on` and `off`). For example, in 'on' state, you may
 * want to use a different ODD and switch the view to 'page' at the same time:
 *
 * ```
 * <pb-toggle-feature properties-on='{"odd": "myodd", "view": "page"}' properties-off='{"odd": "myodd-diplomatic", "view": "div"}'>
 *     Diplomatic View
 * </pb-toggle-feature>
 * ```
 *
 * It is important that `pb-toggle-feature` emits and subscribes to the same channel as the target `pb-view`.
 *
 * @customElement
 * @polymer
 * @demo demo/pb-toggle-feature.html
 * @appliesMixin pbMixin
 */
export class PbToggleFeature extends pbMixin(LitElement) {

    static get properties() {
        const superProps = super.properties;
        return {
            ...superProps,
            /**
             * The name of the feature (required). This will correspond to the name of the custom parameter
             * passed to the ODD.
             */
            name: {
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
                type: Object
            },
            /**
             * Additional properties to set on the pb-view if toggle is in 'off' state.
             * Possible properties are 'view', 'odd' and 'columnSeparator'.
             */
            propertiesOff: {
                type: Object
            },
            checked: {
                type: Boolean
            }
        };
    }

    constructor() {
        super();
        this.default = 'on';
        this.propertiesOn = {};
        this.propertiesOff = {};
    }

    render() {
        return html`
            <paper-checkbox id="checkbox" @change="${this._changed}" .checked="${this.checked}"><slot></slot></paper-checkbox>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        let param = this.getParameter(this.name);
        if (typeof param !== 'undefined') {
            this.checked = param === this.on;
        } else {
            this.checked = this.default === 'on';
        }
        this.waitForChannel(() => {
            const params = {
                properties: this.checked ? this.propertiesOn : this.propertiesOff,
                action: 'init'
            };
            this.emitTo('pb-toggle', params);
            this.initializing = false;
        });
        this.signalReady();
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
        }
    }

    _changed() {
        this.checked = this.shadowRoot.getElementById('checkbox').checked;
        this.setParameter(this.name, this.checked ? this.on : this.off);
        this.pushHistory('toggle feature ' + this.name);

        const params = {
            properties: this.checked ? this.propertiesOn : this.propertiesOff,
            action: 'refresh'
        };
        this.emitTo('pb-toggle', params);
    }
}

customElements.define('pb-toggle-feature', PbToggleFeature);
