import { LitElement, html, css } from 'lit';
import './pb-icon.js';

const normalizeLabel = (value = '') => value.replace(/[-_]/g, ' ').trim();

export class PbIconButton extends LitElement {
  static properties = {
    icon: { type: String },
    disabled: { type: Boolean, reflect: true },
    label: { type: String },
    toggles: { type: Boolean },
    active: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.icon = '';
    this.disabled = false;
    this.label = '';
    this.toggles = false;
    this.active = false;
  }

  render() {
    const hostTitle = this.title || '';
    const iconLabel = this.icon ? normalizeLabel(this.icon.includes(':') ? this.icon.split(':').pop() : this.icon) : '';
    const ariaLabel = this.label || hostTitle || iconLabel;

    return html`
      <button
        class="pb-button pb-button--icon"
        type="button"
        title=${hostTitle}
        aria-label=${ariaLabel}
        ?disabled=${this.disabled}
        aria-pressed=${this.toggles ? String(this.active) : undefined}
        @click=${this._handleClick}
      >
        ${this.icon ? html`<pb-icon icon="${this.icon}" decorative></pb-icon>` : html`<slot></slot>`}
      </button>
    `;
  }

  _handleClick(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }

    if (this.toggles) {
      this.active = !this.active;
      this.dispatchEvent(
        new CustomEvent('active-changed', {
          detail: { value: this.active },
          bubbles: true,
          composed: true,
        }),
      );
    }
  }

  static styles = css`
    :host {
      display: inline-flex;
      box-sizing: border-box;
      --pb-icon-button-size: 40px;
    }

    button {
      width: var(--pb-icon-button-size);
      height: var(--pb-icon-button-size);
      border-radius: 999px;
      border: none;
      background: transparent;
      color: inherit;
      padding: 0;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s ease-in-out;
    }

    button:hover:not(:disabled),
    button:focus-visible {
      background: var(--pb-icon-button-hover-background, rgba(0, 0, 0, 0.05));
      outline: none;
    }

    button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    :host([active]) button {
      background: var(--pb-icon-button-active-background, rgba(0, 0, 0, 0.08));
    }
  `;
}

if (!customElements.get('pb-icon-button')) {
  customElements.define('pb-icon-button', PbIconButton);
}
