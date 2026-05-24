import { LitElement, css, html } from 'lit';
import { pbMixin } from './pb-mixin.js';
import { themableMixin } from './theming.js';

/**
 * Show a card with the content in it
 */
export class PbCard extends themableMixin(pbMixin(LitElement)) {
  static get properties() {
    return {
      ...super.properties,
    };
  }

  render() {
    return html`<slot></slot>`;
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        border-radius: 0.5rem;
        background: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        max-width: 30rem;
        margin: 1rem;
        gap: 1rem;
        box-sizing: border-box;
      }
    `;
  }
}
customElements.define('pb-card', PbCard);
