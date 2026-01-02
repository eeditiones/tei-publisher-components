import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import { themableMixin } from './theming.js';
import '@polymer/iron-icon';
import '@polymer/iron-icons';

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
        <summary @click="${this._handleToggle}" class="collapse-trigger">
          <slot id="collapseTrigger" name="collapse-trigger"></slot>
        </summary>
        <div class="collapse-content ${this.noAnimation ? 'no-animation' : ''}">
          <slot name="collapse-content"></slot>
        </div>
      </details>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        position: relative;
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
        gap: var(--pb-collapse-icon-padding, 0.5rem);
      }

      :host(:not(.icon-right)) summary::before {
        display: block;
        content: '';
        background-image: var(
          --pb-collapse-icon-image,
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'/%3E%3C/svg%3E")
        );
        transform: none;
        height: var(--pb-collapse-icon-size, 0.75rem);
        width: var(--pb-collapse-icon-size, 0.75rem);
        background-size: var(--pb-collapse-icon-size, 0.75rem) auto;
        background-position: left center;
        background-repeat: no-repeat;
      }

      :host(.icon-right) summary::after {
        display: block;
        content: '';
        background-image: var(
          --pb-collapse-icon-image,
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'/%3E%3C/svg%3E")
        );
        transform: none;
        height: var(--pb-collapse-icon-size, 0.75rem);
        width: var(--pb-collapse-icon-size, 0.75rem);
        background-size: var(--pb-collapse-icon-size, 0.75rem) auto;
        background-position: right center;
        background-repeat: no-repeat;
      }

      .dropdown-button[open] > summary::after {
        transform: rotate(180deg);
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
