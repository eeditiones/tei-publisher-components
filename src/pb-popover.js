import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";
import '@polymer/paper-dialog';
import '@polymer/paper-dialog-scrollable';
import '@polymer/paper-tooltip';
import '@polymer/paper-button';

/**
 * Show a popover. If property `persistent` is true, a dialog will be shown
 * on click. Otherwise display a tooltip on mouseover.
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
            persistent: {
                type: Boolean
            }
        };
    }

    constructor() {
        super();
        this.persistent = false;
    }

    _open(ev) {
        ev.preventDefault();

        if (this.persistent) {
            const dialog = this.shadowRoot.getElementById('dialog');
            dialog.positionTarget = this.shadowRoot.getElementById('link');
            dialog.open();
        }
    }

    render() {
        if (this.disabled) {
            return html`<slot></slot>`;
        }
        return html`<a id="link" class="${this.persistent ? 'persistent' : ''}" href="#" @click="${this._open}"><slot></slot></a>${this.persistent ? PbPopover._renderDialog() : PbPopover._renderTooltip()}`;
    }

    static _renderTooltip() {
        return html`<paper-tooltip for="link" position="bottom" fit-to-visible-bounds="fit-to-visible-bounds">
                <slot name="alternate"></slot>
            </paper-tooltip>`;
    }

    static _renderDialog() {
        return html`<paper-dialog id="dialog" dynamic-align no-overlap horizontal-align="left" vertical-align="top">
                <slot name="title"></slot>
                <paper-dialog-scrollable>
                    <slot name="alternate"></slot>
                </paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus">
                        ${translate('dialogs.close')}
                    </paper-button>
                </div>
            </paper-dialog>`;
    }

    static get styles() {
        return css`
            :host {
                display: inline;
                padding: 0;
                margin: 0;
                --paper-tooltip-background: var(--pb-popover-background-color, var(--pb-color-inverse));
                --paper-tooltip-text-color: var(--pb-popover-color, var(--pb-color-primary));
            }
            [name=alternate] {
                font: var(--pb-popover-font, var(--pb-base-font));
            }
            [name=title] {
                display: block;
                font: var(--pb-popover-title-font, var(--pb-heading-font));
                margin: var(--pb-popover-title-margin, 20px 0);
                padding: var(--pb-popover-title-padding, 0);
            }
            #link {
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