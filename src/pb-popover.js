import { LitElement, html, css } from 'lit-element';
import tippy, { inlinePositioning } from 'tippy.js';
import { pbMixin } from './pb-mixin.js';

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
 * @customElement
 * @polymer
 * @demo demo/pb-popover.html
 * @appliesMixin pbMixin
 */
export class PbPopover extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
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
             * Restrict the max width of a popup.
             */
            maxWidth: {
                type: Number,
                attribute: 'max-width'
            },
            /**
             * If true, show the popup on click instead of mouseover.
             */
            persistent: {
                type: Boolean
            },
            /**
             * Add the given class to the HTML element showing the popup content.
             * Use to distinguish between different types of popups.
             */
            addClass: {
                type: String,
                attribute: 'add-class'
            }
        };
    }

    constructor() {
        super();
        this.persistent = false;
        this.theme = null;
        this.maxWidth = null;
        this.for = null;
    }

    render() {
        if (this.disabled) {
            return html`<slot></slot>`;
        }
        if (this.for) {
            return html`<span class="hidden"><slot></slot></span>`;
        }
        return html`<a id="link" href="#" class="${this.persistent ? 'persistent' : ''}"><slot></slot></a><slot name="alternate"></slot>`;
    }

    firstUpdated() {
        super.firstUpdated();

        this.injectStyles();

        let target;
        let slot;
        if (this.for) {
            target = document.getElementById(this.for);
            slot = this.shadowRoot.querySelector('slot');
        } else {
            target = this.shadowRoot.getElementById('link');
            slot = this.shadowRoot.querySelector('[name=alternate]');
        }
        if (target && slot) {
            const content = slot.assignedNodes().map((node) => {
                if (node.nodeType === 1) {
                    return node.innerHTML;
                }
                return node.nodeValue;
            }).join();
            const options = {
                content,
                allowHTML: true,
                appendTo: document.body,
                interactive: true,
                ignoreAttributes: true,
                inlinePositioning: true,
                plugins: [inlinePositioning],
                onCreate: (instance) => {
                    if (this.addClass) {
                        instance.popper.className += this.addClass;
                    }
                }
            };
            if (this.persistent) {
                options.trigger = 'click';
            }
            if (this.theme) {
                options.theme = this.theme;
            }
            if (this.maxWidth) {
                options.maxWidth = this.maxWidth;
            }
            tippy(target, options);
        }
    }

    injectStyles() {
        if (!document.head.querySelector('link[href*="tippy"]')) {
            const resource = new URL('../css/tippy.js/tippy.css', import.meta.url);
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = resource;
            document.head.appendChild(link);
        }

        if (this.theme && !document.head.querySelector(`link[href*="${this.theme}"]`)) {
            const resource = new URL(`../css/tippy.js/${this.theme}.css`, import.meta.url);
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = resource;
            document.head.appendChild(link);
        }
    }

    static get styles() {
        return css`
            :host {
                display: inline;
            }
            [name=alternate], .hidden {
                display: none;
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
        `;
    }
}
customElements.define('pb-popover', PbPopover);