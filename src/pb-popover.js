import { LitElement, html, css } from 'lit-element';
import tippy, { inlinePositioning } from 'tippy.js';
import { pbMixin } from './pb-mixin.js';

/**
 * Show a popover. If property `persistent` is true, the popover will be shown
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
    }

    render() {
        if (this.disabled) {
            return html`<slot></slot>`;
        }
        return html`<a id="link" href="#" class="${this.persistent ? 'persistent' : ''}"><slot></slot></a><slot name="alternate"></slot>`;
    }

    firstUpdated() {
        super.firstUpdated();

        this.injectStyles();

        const link = this.shadowRoot.getElementById('link');
        const alternateSlot = this.shadowRoot.querySelector('[name=alternate]');
        if (alternateSlot) {
            const content = alternateSlot.assignedNodes().map((el) => el.innerHTML).join();
            const container = document.createElement('div');
            container.innerHTML = content;
            const options = {
                content: container,
                allowHTML: true,
                appendTo: document.body,
                interactive: true,
                ignoreAttributes: true,
                inlinePositioning: true,
                plugins: [inlinePositioning],
                onCreate: (instance) => {
                    instance.popper.classList.add('pb-popover-content');
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
            tippy(link, options);
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
            [name=alternate] {
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