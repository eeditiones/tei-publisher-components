import { LitElement, html, css } from 'lit-element';
import tippy, { inlinePositioning } from 'tippy.js';
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
             * If true, show the popup on click instead of mouseover.
             */
            persistent: {
                type: Boolean
            }
        };
    }

    constructor() {
        super();
        this.persistent = false;
        this.theme = null;
        this.for = null;
    }

    render() {
        if (this.disabled) {
            return html`<slot></slot>`;
        }
        let styles = null;
        if (this.theme) {
            const theme = themes[themes.camelize(this.theme)];
            if (theme) {
                styles = html`<style type="text/css">${theme}</style>`;
            }
        }

        if (this.for) {
            return html`${styles}<span class="hidden"><slot></slot></span>`;
        }
        return html`${styles}<a id="link" href="#" class="${this.persistent ? 'persistent' : ''}"><slot></slot></a><slot name="alternate"></slot>`;
    }

    firstUpdated() {
        super.firstUpdated();

        // this.injectStyles();

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
            const content = document.createElement('div');
            slot.assignedNodes().forEach((node) => {
                content.appendChild(document.importNode(node, true));
            });
            const options = {
                content,
                allowHTML: true,
                appendTo: this.shadowRoot,
                placement: 'auto',
                interactive: true,
                ignoreAttributes: true,
                boundary: 'viewport',
                inlinePositioning: true,
                plugins: [inlinePositioning],
                maxWidth: 'none'
            };
            if (this.persistent) {
                options.trigger = 'click';
            }
            if (this.theme) {
                options.theme = this.theme;
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