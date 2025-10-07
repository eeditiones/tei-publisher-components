import { LitElement, html, css } from 'lit';

if (!customElements.__pbDefineGuard) {
  const originalDefine = customElements.define.bind(customElements);
  customElements.define = (name, constructor, options) => {
    if (customElements.get(name)) {
      return;
    }
    originalDefine(name, constructor, options);
  };
  customElements.__pbDefineGuard = true;
}

const polymerIconMap = {
  'icons:file-upload': 'upload',
  'icons:file-download': 'download',
  'icons:cloud-download': 'download',
  'icons:clear': 'close',
  'icons:check': 'check',
  'icons:error-outline': 'warning',
  'icons:folder-open': 'folder-open',
  'icons:arrow-upward': 'arrow-upward',
  'icons:arrow-forward': 'chevron-right',
  'icons:arrow-back': 'chevron-left',
  'icons:chevron-right': 'chevron-right',
  'icons:chevron-left': 'chevron-left',
  'icons:open-in-new': 'open-in-new',
  'icons:flag': 'flag',
  'icons:code': 'code',
  'icons:hourglass-empty': 'clock',
  'icons:delete': 'delete',
  'icons:create': 'edit',
  'icons:expand-more': 'expand-more',
  'icons:expand-less': 'expand-less',
  'icons:view-list': 'view-list',
  'icons:zoom-in': 'zoom-in',
  'icons:zoom-out': 'zoom-out',
  'icons:content-copy': 'copy',
  'content-copy': 'copy',
  'icons:content-paste': 'content-paste',
  'content-paste': 'content-paste',
  'icons:arrow-downward': 'arrow-downward',
  'icons:refresh': 'refresh',
  'icons:save': 'save'
};

/**
 * A versatile icon component that replaces iron-icon and iron-icons.
 * Supports both SVG sprite references and inline SVG content.
 * 
 * @example
 * <!-- Using icon name (requires icon sprite) -->
 * <pb-icon icon="expand-more"></pb-icon>
 * 
 * <!-- Using external sprite (default dist/images/icons.svg) -->
 * <pb-icon icon="expand-more" sprite="dist/images/icons.svg"></pb-icon>
 * 
 * <!-- Using inline SVG -->
 * <pb-icon>
 *   <svg viewBox="0 0 24 24">
 *     <path d="M7 10l5 5 5-5z"/>
 *   </svg>
 * </pb-icon>
 * 
 * @slot - Inline SVG content when not using icon name
 * @cssprop [--pb-icon-color] - Icon color (defaults to currentColor)
 * @cssprop [--pb-icon-size] - Icon size (defaults to 1em)
 */
export class PbIcon extends LitElement {
  static get properties() {
    return {
      /**
       * Icon name to display from the icon sprite.
       * If not provided, expects SVG content in the default slot.
       */
      icon: { type: String },

      /**
       * Path or URL to the SVG sprite file. Optional.
       * If not specified, defaults to 'dist/images/icons.svg'.
       * If set to a string starting with '#', uses inline sprite.
       */
      sprite: { type: String },
      /**
       * Icon size. Can be a preset (xs, sm, md, lg, xl) or a custom size.
       */
      size: { type: String },

      /**
       * ARIA label for accessibility. Auto-generated from icon name if not provided.
       */
      label: { type: String },

      /**
       * Whether the icon is decorative (hidden from screen readers).
       */
      decorative: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.icon = '';
    this.size = '';
    this.label = '';
    this.decorative = false;
    // Default sprite path: use dev path when running under Vite, otherwise built docs path
    try {
      const isDev = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV) ||
        (typeof location !== 'undefined' && /localhost|127\.0\.0\.1/.test(location.hostname));
      this.sprite = isDev ? '/images/icons.svg' : '/dist/images/icons.svg';
    } catch (_) {
      this.sprite = '/dist/images/icons.svg';
    }
  }

  render() {
    const sizeClass = this._getSizeClass();
    const ariaLabel = this._getAriaLabel();

    return html`
      <span 
        class="pb-icon ${sizeClass}"
        role="img"
        aria-label="${ariaLabel}"
        aria-hidden="${this.decorative ? 'true' : 'false'}"
      >
        ${this.icon ? this._renderSpriteIcon() : this._renderSlotIcon()}
      </span>
    `;
  }

  _renderSpriteIcon() {
    const iconName = this._normalizeIconName(this.icon);
    if (!iconName) {
      return html``;
    }
    const href = this.sprite && !this.sprite.startsWith('#')
      ? `${this.sprite}#icon-${iconName}`
      : `#icon-${iconName}`;
    return html`
            <svg width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="${this.decorative ? 'true' : 'false'}">
        <use href="${href}"></use>
      </svg>
    `;
  }

  _renderSlotIcon() {
    return html`<slot></slot>`;
  }

  _normalizeIconName(name) {
    if (!name) return '';
    const lower = name.toLowerCase();
    if (polymerIconMap[lower]) {
      return polymerIconMap[lower];
    }
    if (lower.includes(':')) {
      return lower.split(':').pop();
    }
    return lower;
  }

  _getSizeClass() {
    if (!this.size) return '';

    const presetSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
    if (presetSizes.includes(this.size)) {
      return `pb-icon--${this.size}`;
    }

    // Custom size - set CSS custom property
    this.style.setProperty('--pb-icon-size', this.size);
    return '';
  }

  _getAriaLabel() {
    if (this.decorative) return '';
    if (this.label) return this.label;
    if (this.icon) {
      const normalized = this._normalizeIconName(this.icon);
      return normalized.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
    return 'Icon';
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .pb-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--pb-icon-size, 1em);
        height: var(--pb-icon-size, 1em);
        color: var(--pb-icon-color, currentColor);
        fill: currentColor;
        flex-shrink: 0;
        user-select: none;
        line-height: 1;
      }

      .pb-icon svg {
        width: 100%;
        height: 100%;
        fill: inherit;
      }

      /* Size variants */
      .pb-icon--xs {
        font-size: 12px;
        width: 12px;
        height: 12px;
      }

      .pb-icon--sm {
        font-size: 16px;
        width: 16px;
        height: 16px;
      }

      .pb-icon--md {
        font-size: 20px;
        width: 20px;
        height: 20px;
      }

      .pb-icon--lg {
        font-size: 24px;
        width: 24px;
        height: 24px;
      }

      .pb-icon--xl {
        font-size: 32px;
        width: 32px;
        height: 32px;
      }

      /* Ensure slotted SVGs are properly sized */
      ::slotted(svg) {
        width: 100%;
        height: 100%;
        fill: currentColor;
      }
    `;
  }
}

if (!customElements.get('pb-icon')) {
  customElements.define('pb-icon', PbIcon);
}
if (!customElements.get('iron-icon')) {
  class PbIronIcon extends PbIcon {}
  customElements.define('iron-icon', PbIronIcon);
}
