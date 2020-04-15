import { LitElement, html, css } from 'lit-element';
import tippy from 'tippy.js';
import { pbMixin } from './pb-mixin.js';
import * as themes from './pb-popover-themes.js';

/**
 * Show a popover. It may either 
 * 
 * 1. be attached to another element on the page which serves as a trigger. For this the
 * `for` property must be specified and should contain the ID of the trigger element. 
 * The whole content of the `pb-popover` element will be shown in the popup.
 * 
 * 2. if no `for` property is specified, the `pb-popover` acts itself as the trigger. The trigger
 * text is either taken from a slot named `default` - or the default slot (i.e. the content of the element).
 * The content to show in the popup should be supplied in a
 * slot named `alternate`.
 * 
 * It is recommended to choose 1. if the popover content may contain block-level elements - otherwise browsers
 * may try to 'correct' the invalid block content, thus producing unwanted results.
 * 
 * If property `persistent` is true, the popover will be shown
 * on click. Otherwise display a tooltip on mouseover.
 * 
 * `pb-popover` uses the tippy.js library for the popup.
 * 
 * ## Styling
 * 
 * When showing the popup, the popup content will either be added to the parent shadow DOM - if the `pb-popover`
 * is located inside the shadow DOM of another element like `pb-view`; or the document body. This has an
 * effect on where CSS styles can be defined: within a `pb-view`, only the styles specified inside the
 * CSS attached to the ODD are applied.
 * 
 * @prop {String} for - The id of a trigger element (e.g. a link) to which the popover will
 * be attached. If not set, the trigger is the pb-popover itself.
 * @prop {"material" | "light" | "translucent" | "light-border"} theme - The tippy theme to use.
 * @prop {"auto" | "top" | "bottom" | "left" | "right"} placement - Preferred placement of the popup.
 * Default is 'auto'.
 * @prop {String} fallbackPlacement - Fallback placement if there is more space on another side.
 * Accepts same values as `placement`. Separate by space if more than one.
 * @prop {Boolean} persistent - If true, show the popup on click instead of mouseover.
 * @prop {String} poupClass - Additional class names which will be added to the popup element.
 * Use this to apply a specific style to certain popovers, but not others.
 * 
 * @slot default - the content to show for the trigger. If not specified, this will fall back to the unnamed slot.
 * @slot alternate - the content to show in the popup
 * 
 * @cssprop [--pb-popover-theme=none] - popup theme to use. One of 'material', 'light', 'translucent' or 'light-border'
 * @cssprop [--pb-popover-link-decoration=inherit] - text decoration for the trigger
 * @cssprop [--pb-popover-max-height=calc(100vh - 60px)] - limit the maximum height of the popup
 * @cssprop --pb-popover-max-width - limit the max width of the popup
 * @cssprop --pb-popover-color - Color of the popup text
 * @cssprop [--pb-popover-placement=auto] - Preferred popup placement, see property `placement`
 * @cssprop --pb-popover-fallback-placement - Fallback placements separated by space
 */
export class PbPopover extends pbMixin(LitElement) {
    static get properties() {
        const props = {
            for: {
                type: String
            },
            theme: {
                type: String
            },
            placement: {
                type: String
            },
            fallbackPlacement: {
                type: String,
                attribute: 'fallback-placement'
            },
            persistent: {
                type: Boolean
            },
            popupClass: {
                type: String,
                attribute: 'popup-class'
            }
        };
        return Object.assign(props, super.properties);
    }

    constructor() {
        super();
        this.persistent = false;
        this.for = null;
        this.theme = 'none';
        this.placement = 'auto';
        this.fallbackPlacement = null;
        this.popupClass = null;
    }

    render() {
        if (this.disabled) {
            return html`<slot></slot>`;
        }

        if (this.for) {
            return html`<div class="hidden"><slot></slot></div>`;
        }
        return html`<span id="link" class="${this.persistent ? 'persistent' : ''}"><slot name="default"><slot></slot></slot></span><span class="hidden"><slot name="alternate"></slot></span>`;
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

    _injectStyles() {
        this._checkCSSProperties();

        this._injectStylesheet('base', themes.base);
        if (this.theme && this.theme !== 'none') {
            const name = themes.camelize(this.theme);
            const theme = themes[name];
            if (theme) {
                this._injectStylesheet(name, theme);
            }
        }
    }

    _injectStylesheet(name, css) {
        const root = this.getRootNode();
        const style = root.querySelector(`#pb-popover-${name}`);
        if (style) {
            console.log('style %s exists', name);
        } else {
            const container = root.nodeType === Node.DOCUMENT_NODE ? document.head : root;
            const elem = document.createElement('style');
            elem.type = 'text/css';
            elem.id = `pb-popover-${name}`;
            elem.innerHTML = css;
            container.appendChild(elem);
        }
    }

    firstUpdated() {
        super.firstUpdated();

        this._injectStyles();

        const root = this.getRootNode();
        let target;
        let slot;
        if (this.for) {
            target = root.getElementById(this.for);
            if (!target) {
                console.error('<pb-popover> target element %s not found', this.for);
            }
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
                appendTo: root.nodeType === Node.DOCUMENT_NODE ? document.body : root,
                placement: this.placement,
                interactive: true,
                ignoreAttributes: true,
                boundary: 'viewport',
                maxWidth: 'none',
                touch: 'hold'
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
            if (this.popupClass) {
                options.onCreate = (instance) => instance.popper.classList.add(this.popupClass);
            }
            tippy(target, options);
        }
    }

    static get styles() {
        return [
            css`
                :host {
                    display: inline;
                }
                .hidden {
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