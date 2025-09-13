import { LitElement, html, css } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import marked from 'marked/lib/marked.esm.js';
import { pbMixin, waitOnce } from './pb-mixin.js';
import './pb-code-highlight.js';

const renderer = new marked.Renderer();
renderer.code = function code(code, infostring, escaped) {
  return `<pb-code-highlight language="${infostring}" line-numbers>
        <template>${code}</template>
    </pb-code-highlight>`;
};

marked.setOptions({
  renderer,
});

function removeIndent(input) {
  const indents = input.match(/^[^\S]*(?=\S)/gm);

  if (!indents || !indents[0].length) return input;

  indents.sort((a, b) => a.length - b.length);

  if (!indents[0].length) return input;

  return input.replace(RegExp(`^${indents[0]}`, 'gm'), '');
}

/**
 * A component to render markdown. Content to render may either
 *
 * 1. be specified via the `content` property
 * 2. included in the body of the element
 * 3. loaded from an external URL
 *
 * Using option 2, if the markdown includes embedded HTML, make sure to wrap
 * the content into an `template` HTML element to prevent the browser from interpreting
 * it.
 *
 * Using option 3, you can either specify an absolute or relative URL. Relative URLs
 * will be interpreted relative to the endpoint set by `pb-page`.
 */
export class PbMarkdown extends pbMixin(LitElement) {
  static get properties() {
    return {
      /**
       * The markdown content to be rendered. If undefined,
       * markdown will be taken from the content of the element
       * or loaded from the specified URL.
       */
      content: {
        type: String,
      },
      /**
       * An absolute or relative URL to load the markdown from.
       */
      url: {
        type: String,
      },
      ...super.properties,
    };
  }

  constructor() {
    super();
    this._url = null;
  }

  set url(value) {
    this._url = value;
    waitOnce('pb-page-ready', options => {
      this._load(options.endpoint);
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.style.display = 'block';

    if (!this.content) {
      const content = document.createElement('div');
      for (let i = 0; i < this.childNodes.length; i++) {
        const node = this.childNodes[i];
        content.appendChild(document.importNode(node.content || node, true));
      }
      this.content = removeIndent(content.innerHTML);
    }

    this.subscribeTo('pb-zoom', ev => {
      this.zoom(ev.detail.direction);
    });
  }

  _load(server) {
    const url = this.toAbsoluteURL(this._url, server);
    fetch(url, { credentials: 'same-origin' })
      .then(response => response.text())
      .catch(() => {
        console.error('<pb-markdown> failed to load content from %s', url.toString());
        return Promise.resolve(this.content);
      })
      .then(text => {
        this.content = text;
      });
  }

  createRenderRoot() {
    return this;
  }

  render() {
    if (!this.content) {
      return null;
    }
    return html`<div>${unsafeHTML(marked(this.content))}</div>`;
  }

  zoom(direction) {
    const fontSize = window.getComputedStyle(this).getPropertyValue('font-size');
    const size = parseInt(fontSize.replace(/^(\d+)px/, '$1'));

    if (direction === 'in') {
      this.style.fontSize = `${size + 1}px`;
    } else {
      this.style.fontSize = `${size - 1}px`;
    }
  }
}
customElements.define('pb-markdown', PbMarkdown);
