import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import { themableMixin } from './theming.js';
import '@polymer/paper-icon-button';
import '@polymer/iron-icons';

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
        <paper-icon-button
          icon="icons:content-copy"
          @click="${this._copy}"
          title="${translate('clipboard.copy')}"
        ></paper-icon-button>
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
      }
    `;
  }
}
customElements.define('pb-clipboard', PbClipboard);
