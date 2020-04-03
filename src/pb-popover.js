import { LitElement, html, css } from 'lit-element';
import tippy from 'tippy.js';
import { pbMixin } from './pb-mixin.js';
import * as themes from './pb-popover-themes.js';

/**
 * Show a popover. It may either 
 * 
 * 1. be attached to another element on the page which serves as a trigger if the
 * `for` property is specified and contains the ID of the trigger element. In this case,
 * the whole content of the `pb-popover` element will be shown in the popup.
 * 
 * 2. if no `for` property is specified, the `pb-popover` acts itself as the trigger. 
 * The content to show in the popup should be supplied in a
 * slot named `alternate`.
 * 
 * If property `persistent` is true, the popover will be shown
 * on click. Otherwise display a tooltip on mouseover.
 * 
 * `pb-popover` uses the tippy.js library for the popup.
 * 
 * # CSS Variables
 * 
 * | Variable | Default | Description |
 * |---------|----------|-------------|
 * | --pb-popover-theme | | Theme to use, see property `theme` |
 * | --pb-popover-link-decoration | inherit | text-decoration for the trigger |
 * | --pb-popover-max-height | calc(100vh - 60px) | limit the maximum height of the popup |
 * | --pb-popover-max-width | | limit the max width of the popup |
 * | --pb-popover-color | | |
 * | --pb-popover-placement | 'auto' | Preferred popup placement, see property `placement` |
 * | --pb-popover-fallback-placement | | Fallback placements separated by space |
 *
 * @customElement
 * @polymer
 * @demo demo/pb-popover.html
 * @appliesMixin pbMixin
 */
export class PbPopover extends pbMixin(LitElement) {
    static get properties() {
        const props = {
            /**
             * The id of a trigger element (e.g. a link) to which the popover will
             * be attached. If not set, the trigger is the pb-popover itself.
             */
            for: {
                type: String
            },
            /**
             * The tippy theme to use. One of 'material', 'light', 'translucent' or 'light-border'.
             */
            theme: {
                type: String
            },
            /**
             * Preferred placement of the popup. One of 'auto', 'top', 'bottom', 'left', 'right'.
             * Default is 'auto'.
             */
            placement: {
                type: String
            },
            /**
             * Fallback placement if there is more space on another side.
             * Accepts same values as `placement`. Separate by space if more than one.
             */
            fallbackPlacement: {
                type: String,
                attribute: 'fallback-placement'
            },
            /**
             * If true, show the popup on click instead of mouseover.
             */
            persistent: {
                type: Boolean
            }
        };
        return Object.assign(props, super.properties);
    }

    constructor() {
        super();
        this.persistent = false;
        this.for = null;
    }

    render() {
        if (this.disabled) {
            return html`<slot></slot>`;
        }
        this._checkCSSProperties();
        let styles = null;
        if (this.theme && this.theme !== 'none') {
            const theme = themes[themes.camelize(this.theme)];
            if (theme) {
                styles = html`<style type="text/css">${theme}</style>`;
            }
        }

        if (this.for) {
            return html`${styles}<div class="hidden"><slot></slot></div>`;
        }
        return html`${styles}<span id="link" class="${this.persistent ? 'persistent' : ''}"><slot></slot></span><slot name="alternate"></slot>`;
    }

    _checkCSSProperties() {
        if (!this.theme && this.theme !== 'none') {
            this.theme = this._getCSSProperty('--pb-popover-theme', 'none');
        }
        if (!this.placement) {
            this.placement = this._getCSSProperty('--pb-popover-placement', 'auto');
        }
        if (!this.fallbackPlacement) {
            this.fallbackPlacement = this._getCSSProperty('--pb-popover-fallback-placement', null);
        }
    }

    _getCSSProperty(name, defaultValue) {
        const property = getComputedStyle(this).getPropertyValue(name);
        if (property) {
            return JSON.parse(property);
        }
        return defaultValue;
    }

    firstUpdated() {
        super.firstUpdated();

        let target;
        let slot;
        if (this.for) {
            target = this.getRootNode().getElementById(this.for);
            slot = this.shadowRoot.querySelector('slot');
        } else {
            target = this.shadowRoot.getElementById('link');
            slot = this.shadowRoot.querySelector('[name=alternate]');
        }
        if (target && slot) {
            const content = document.createElement('div');
            slot.assignedNodes().forEach((node) => {
                content.appendChild(document.importNode(node, true));
            });
            const options = {
                content,
                allowHTML: true,
                appendTo: this.shadowRoot,
                placement: this.placement,
                interactive: true,
                ignoreAttributes: true,
                boundary: 'viewport',
                maxWidth: 'none'
            };
            if (this.persistent) {
                options.trigger = 'click';
            }
            if (this.theme && this.theme !== 'none') {
                options.theme = this.theme;
            }
            if (this.fallbackPlacement) {
                const placements = this.fallbackPlacement.split(' ');
                options.popperOptions = {
                    modifiers: [
                        {
                            name: 'flip',
                            options: {
                                fallbackPlacements: placements
                            }
                        }
                    ]
                }
            }
            tippy(target, options);
        }
    }

    static get styles() {
        return [
            themes.base,
            css`
                :host {
                    display: inline;
                }
                [name=alternate], .hidden {
                    display: none;
                }
                div {
                    float: left;
                }
                #link {
                    display: inline;
                    color: inherit;
                    text-decoration: var(--pb-popover-link-decoration, var(--pb-link-text-decoration, inherit));
                    cursor: text;
                }
                #link.persistent {
                    cursor: pointer;
                }
            `
        ];
    }
}
customElements.define('pb-popover', PbPopover);