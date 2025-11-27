import { LitElement, html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { pbMixin } from './pb-mixin.js';
import { themableMixin } from './theming.js';
import './pb-icon.js';

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
 * @cssprop [--pb-collapse-icon-padding=.5rem] - padding left or right of the "caret" icon left to the collapsible item
 * @cssprop [--pb-collapse-icon-size=.75rem] - size of the "caret" icon left to the collapsible item
 * @cssprop [--pb-collapse-icon-image] - image of the "caret" icon left to the collapsible item
 * @fires pb-collapse-open - Fires opening the collapsed section
 */
export class PbCollapse extends themableMixin(pbMixin(LitElement)) {
  static get properties() {
    return {
      ...super.properties,
      /**
       * Whether to disable animations.
       *
       */
      noAnimation: {
        type: Boolean,
        attribute: 'no-animation',
      },
      /**
       * Whether currently expanded.
       *
       */
      opened: {
        type: Boolean,
      },
      /**
       * By default, an open collapse is closed if another pb-collapse is expanded on the same event channel.
       * Set to true to keep multiple pb-collapse open at the same time.
       */
      toggles: {
        type: Boolean,
      },
      /**
       * Icon to show when the collapse is closed.
       */
      expandIcon: {
        type: String,
        attribute: 'expand-icon',
      },
      /**
       * Icon to show when the collapse is open.
       */
      collapseIcon: {
        type: String,
        attribute: 'collapse-icon',
      },
      /**
       * Optional custom sprite source passed to pb-icon.
       */
      iconSprite: {
        type: String,
        attribute: 'icon-sprite',
      },
      /**
       * Disable icons entirely.
       */
      noIcons: {
        type: Boolean,
        attribute: 'no-icons',
      },
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
      this.subscribeTo('pb-collapse-open', ev => {
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

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('opened')) {
      const details = this.shadowRoot.querySelector('details');
      if (details) {
        details.open = this.opened;
      }
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

  _handleToggle(e) {
    e.preventDefault();
    this.toggle();
  }

  render() {
    return html`
      <details ?open="${this.opened}" class="${this.horizontal ? 'horizontal' : ''}">
        <summary
          @click="${this._handleToggle}"
          class="collapse-trigger"
          aria-expanded="${this.opened ? 'true' : 'false'}"
        >
          ${this._renderIcon({ position: 'left' })}
          <slot id="collapseTrigger" name="collapse-trigger"></slot>
          ${this._renderIcon({ position: 'right' })}
        </summary>
        <div class="collapse-content ${this.noAnimation ? 'no-animation' : ''}">
          <slot name="collapse-content"></slot>
        </div>
      </details>
    `;
  }

  _renderIcon({ position }) {
    if (this.noIcons) {
      return null;
    }
    const placeRight = this.classList && this.classList.contains('icon-right');
    if ((position === 'left' && placeRight) || (position === 'right' && !placeRight)) {
      return null;
    }
    const customImage = this._customIconImage();
    const hasCustomImage = customImage && customImage !== 'none';
    const iconName = this.opened ? this.collapseIcon : this.expandIcon;
    const sprite = this.iconSprite || null;
    return html`
      <span class="collapse-icon" data-custom="${hasCustomImage ? 'true' : 'false'}">
        <pb-icon icon="${iconName}" sprite=${ifDefined(sprite || undefined)} decorative></pb-icon>
      </span>
    `;
  }

  _customIconImage() {
    if (typeof window === 'undefined' || typeof getComputedStyle !== 'function') {
      return 'none';
    }
    return getComputedStyle(this).getPropertyValue('--pb-collapse-icon-image').trim() || 'none';
  }

  static get styles() {
    return css`
      :host {
        display: block;
        position: relative;
        --pb-collapse-icon-image: none;
        --pb-collapse-icon-size: 0.75rem;
        --pb-collapse-icon-padding: 0.5rem;
      }

      details {
        display: block;
      }

      summary {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        list-style: none;
        outline: none;
        cursor: pointer;
        user-select: none;
        gap: var(--pb-collapse-icon-padding);
      }

      .collapse-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--pb-collapse-icon-size);
        height: var(--pb-collapse-icon-size);
        flex: none;
      }

      .collapse-icon pb-icon {
        --pb-icon-size: var(--pb-collapse-icon-size);
      }

      .collapse-icon[data-custom='true'] {
        background-image: var(--pb-collapse-icon-image);
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }

      .collapse-icon[data-custom='true'] pb-icon {
        display: none;
      }

      .collapse-content {
        overflow: hidden;
        transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
      }

      .collapse-content.no-animation {
        transition: none;
      }

      details[open] .collapse-content {
        animation: slideDown 0.3s ease-in-out;
      }

      details:not([open]) .collapse-content {
        animation: slideUp 0.3s ease-in-out;
      }

      .horizontal .collapse-content {
        transition: max-width 0.3s ease-in-out, opacity 0.3s ease-in-out;
      }

      @keyframes slideDown {
        from {
          opacity: 0;
          max-height: 0;
        }
        to {
          opacity: 1;
          max-height: 1000px;
        }
      }

      @keyframes slideUp {
        from {
          opacity: 1;
          max-height: 1000px;
        }
        to {
          opacity: 0;
          max-height: 0;
        }
      }
    `;
  }
}
if (!customElements.get('pb-collapse')) {
  customElements.define('pb-collapse', PbCollapse);
}
