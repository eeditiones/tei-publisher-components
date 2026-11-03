import { LitElement, html, css } from 'lit';
import { pbMixin } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import { themableMixin } from './theming.js';

/**
 * A component with a button which copies the contained content to the clipboard.
 * Use for the typical 'quote this content as' hints on a webpage.
 *
 * @slot content - contains the actual content to copy to the clipboard
 */
export class PbClipboard extends themableMixin(pbMixin(LitElement)) {
  static get properties() {
    return {
      /**
       * Label to display above the text to be copied
       */
      label: {
        type: String,
      },
      ...super.properties,
    };
  }

  constructor() {
    super();
    this.label = 'clipboard.label';
  }

  render() {
    return html`
      <h3>${translate(this.label)}</h3>
      <div>
        <slot></slot>
        <button
          class="pb-button pb-button--icon copy-button"
          type="button"
          @click="${this._copy}"
          aria-label="${translate('clipboard.copy')}"
          title="${translate('clipboard.copy')}"
        >
          <svg class="copy-button__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
            ></path>
          </svg>
        </button>
      </div>
    `;
  }

  /**
   * Copy text content from the <slot> to the clipboard
   */
  _copy() {
    const slot = this.shadowRoot.querySelector('slot');
    // first import nodes from the slot into a temporary div
    const content = document.createElement('div');
    slot.assignedNodes().forEach(node => {
      content.appendChild(document.importNode(node, true));
    });
    // copy the innerText of the temp div into the clipboard
    navigator.clipboard.writeText(content.innerText);
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      h3 {
        margin: 0;
        font-size: 0.85em;
        font-weight: normal;
        color: #3a3a3a;
      }
      div {
        display: flex;
        align-items: center;
        padding: 0 16px;
        gap: 8px;
      }

      .copy-button {
        margin-left: auto;
        justify-content: center;
      }

      .copy-button__icon {
        width: 20px;
        height: 20px;
        fill: currentColor;
      }
    `;
  }
}
customElements.define('pb-clipboard', PbClipboard);
