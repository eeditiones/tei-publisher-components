import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
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
 * @slot collapse-trigger - trigger toggling collapsed content on/off
 * @slot collapse-content - content to be collapsed
 * 
 * @fires pb-collapse-open - Fires opening the collapsed section
 */
export class PbCollapse extends pbMixin(LitElement) {
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
        this.expandOnClick = false;
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('pb-collapse-open', () => {
            this.open();
        });
        this.subscribeTo('pb-collapse-open', (ev) => {
            if (!ev.detail || ev.detail._source == this) {
                return;
            }
            for (const collapse of this.querySelectorAll('pb-collapse')) {
                if (collapse == ev.detail._source) {
                    return;
                }
            }
            this.close();
        });
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
            }

            #trigger {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
            }

            #trigger iron-icon {
                display: block;
                margin-right: 4px;
            }
        `;
    }
}
customElements.define('pb-collapse', PbCollapse);