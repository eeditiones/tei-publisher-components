import { LitElement, html, css } from 'lit-element';

/**
 * Embed a codepen project to show live code. Used for some documentation examples.
 *
 */
export class PbCodepen extends LitElement {
  static get properties() {
    return {
      ...super.properties,
      /**
       * The user which created the codepen
       */
      user: {
        type: String,
      },
      /**
       * Identifies the pen
       */
      hash: {
        type: String,
      },
      /**
       * Height of the iframe in pixel
       */
      height: {
        type: Number,
      },
      /**
       * Either 'dark' or 'light'
       */
      theme: {
        type: String,
      },
      /**
       * If set, the codepen will not load before being
       * clicked by the user
       */
      preview: {
        type: Boolean,
      },
      /**
       * Make the codepen editable (requires paid account)
       */
      editable: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();
    this.height = 256;
    this.theme = 'light';
  }

  render() {
    let params = `height=${this.height}&theme-id=${this.theme}&default-tab=html,result`;
    if (this.editable) {
      params = `${params}&editable=true`;
    }
    const url = `https://codepen.io/${this.user}/embed/${this.preview ? 'preview/' : ''}${
      this.hash
    }?${params}`;
    return html`
      <iframe
        height="${this.height}"
        scrolling="no"
        title="${this.labe}l"
        src="${url}"
        frameborder="no"
        allowtransparency="true"
        allowfullscreen
      >
        Loading codepen ...
      </iframe>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      iframe {
        width: 100%;
      }
    `;
  }
}
customElements.define('pb-codepen', PbCodepen);
