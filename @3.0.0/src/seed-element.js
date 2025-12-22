import { LitElement, html, css } from 'lit-element';

/**
 * bare bones sample to copy/paste for a new LitElement
 *
 * @customElement
 * @polymer
 * @demo demo/seed-element.html
 */
export class SeedElement extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html``;
  }

  firstUpdated(_changedProperties) {}
}
customElements.define('seed-element', SeedElement);
