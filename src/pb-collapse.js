import {LitElement, html, css} from 'lit-element';
import {pbMixin} from './pb-mixin.js';
import {themableMixin} from "./theming.js";
import '@polymer/iron-icon';
import '@polymer/iron-icons';
import '@polymer/iron-collapse';


/**
 * A collapsible block: in collapsed state it only shows a header and expands if clicked.
 * The header should go into slot `collapse-trigger`, the content into `collapse-content`.
 * Example:
 *
 * ```html
 * <pb-collapse>
 *   <div slot="collapse-trigger">
 *       Metadata
 *   </div>
 *   <pb-view slot="collapse-content" src="document1" subscribe="transcription" xpath="//teiHeader"></pb-view>
 * </pb-collapse>
 * ```
 *
 * By adding a CSS 'icon-right' to a `pb-collapse` the icon can be placed on the right side
 * ```
 * <pb-collapse class='icon-right'>
 * ```
 *
 * @slot collapse-trigger - trigger toggling collapsed content on/off
 * @slot collapse-content - content to be collapsed
 * @cssprop [--pb-collapse-icon-padding=0 4px 0 0] - padding in px for the "caret-down" icon left to the collapsible item
 * @fires pb-collapse-open - Fires opening the collapsed section
 */
export class PbCollapse extends themableMixin(pbMixin(LitElement)) {
    static get properties() {
        return {
            ...super.properties,
            /**
             * @deprecated
             * Corresponds to the iron-collapse's horizontal property.
             */
            horizontal: {
                type: Boolean
            },
            /**
             * Corresponds to the iron-collapse's noAnimation property.
             *
             */
            noAnimation: {
                type: Boolean,
                attribute: 'no-animation'
            },
            /**
             * Whether currently expanded.
             *
             */
            opened: {
                type: Boolean
            },
            /**
             * By default, an open collapse is closed if another pb-collapse is expanded on the same event channel.
             * Set to true to keep multiple pb-collapse open at the same time.
             */
            toggles: {
                type: Boolean
            },
            /**
             * The iron-icon when collapsed. Value must be one of the icons defined by iron-icons
             */
            expandIcon: {
                type: String,
                attribute: 'expand-icon'
            },
            /**
             * The icon when expanded.
             */
            collapseIcon: {
                type: String,
                attribute: 'collapse-icon'
            },
            /**
             * Whether to hide the expand/collapse icon.
             */
            noIcons: {
                type: Boolean,
                attribute: 'no-icons'
            }
        };
    }

    constructor() {
        super();
        this.horizontal = false;
        this.noAnimation = false;
        this.opened = false;
        this.expandIcon = 'icons:expand-more';
        this.collapseIcon = 'icons:expand-less';
        this.noIcons = false;
        this.toggles = false;
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('pb-collapse-open', () => {
            this.open();
        });
        if (this.toggles) {
            this.subscribeTo('pb-collapse-open', (ev) => {
                if (!ev.detail || ev.detail._source === this) {
                    return;
                }
                for (const collapse of this.querySelectorAll('pb-collapse')) {
                    if (collapse === ev.detail._source) {
                        return;
                    }
                }
                this.close();
            });
        }
    }

    /**
     * opens the collapsible section
     */
    open() {
        if (this.opened) {
            return;
        }
        this.opened = true;

        this.emitTo('pb-collapse-open', this);
    }

    /**
     * closes the collapsible section
     */
    close() {
        if (this.opened) {
            this.opened = false;
        }
    }

    /**
     * toggles the collapsible state
     */
    toggle() {
        this.opened = !this.opened;
        if (this.opened) {
            this.emitTo('pb-collapse-open', this.data);
        }
    }

    render() {
        return html`
            <div id="trigger" @click="${this.toggle}" class="collapse-trigger">
                ${
                    !this.noIcons ?
                html`<iron-icon icon="${this.opened ? this.collapseIcon : this.expandIcon}"></iron-icon>` :
                        null
                }
                <slot id="collapseTrigger" name="collapse-trigger"></slot>
            </div>
            <iron-collapse id="collapse" horizontal="${this.horizontal}" no-animation="${this.noAnimation}" .opened="${this.opened}">
                <slot name="collapse-content"></slot>
            </iron-collapse>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
                position: relative;
            }

            #trigger {
                display: grid;
                align-items:center;
                grid-template-columns:auto auto;
            }

            iron-icon {
                padding: var(--pb-collapse-icon-padding, 0 4px 0 0);
            }

            :host(.icon-right) iron-icon {
                position: absolute;
                right: 0;
            }

        `;
    }
}
if (!customElements.get('pb-collapse')) {
    customElements.define('pb-collapse', PbCollapse);
}
