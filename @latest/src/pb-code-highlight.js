import { LitElement, html, css } from 'lit-element';
import 'prismjs/prism';
import 'prismjs/components/prism-xquery';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import { resolveURL, getCSSProperty } from './utils.js';
import { themableMixin } from './theming.js';

const PRISM_THEMES = new Map();

function loadTheme(theme) {
  const themeName = theme === 'default' ? 'prism.css' : `prism-${theme}.css`;
  if (PRISM_THEMES.has(themeName)) {
    console.log('Using cached theme: %s', themeName);
    return PRISM_THEMES.get(themeName);
  }

  const promise = new Promise(resolve => {
    const resource = resolveURL('../css/prismjs/') + themeName;
    console.log('<pb-code-highlight> loading theme %s from %s', theme, resource);
    fetch(resource)
      .then(response => response.text())
      .catch(() => resolve(''))
      .then(text => {
        resolve(
          html`<style>
            ${text}
          </style>`,
        );
      });
  });
  PRISM_THEMES.set(themeName, promise);
  return promise;
}

/**
 * Highlight a code snippet. The snippet may either be passed in a template child
 * element, which could contain HTML or text. If no template child is present, the
 * component will take any text content contained in it and highlight it. One can also
 * pass the code to be highlighted in the `code` property.
 *
 * @cssprop [--pb-code-highlight-white-space=pre] - configures line wrapping
 * @cssprop [--pb-code-highlight-theme=default] - configures the default theme to be used
 */
export class PbCodeHighlight extends themableMixin(LitElement) {
  static get properties() {
    return {
      /**
       * The language to be used for syntax highlighting.
       */
      language: {
        type: String,
      },
      /**
       * The code to be highlighted as a string. If not set,
       * this will be populated from either a template child element
       * or the element's text content.
       * The value of the property can be changed programmatically from JavaScript.
       */
      code: {
        type: String,
      },
      /**
       * Highlighting theme to use: 'coy', 'dark', 'funky', 'okaida', 'solarizedlight',
       * 'tomorrow', 'twilight' or 'default'.
       */
      theme: {
        type: String,
      },
      lineNumbers: {
        type: Boolean,
        attribute: 'line-numbers',
      },
      _themeStyles: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.language = 'xml';
    this.theme = 'default';
    this.lineNumbers = false;
    this._themeStyles = null;
  }

  connectedCallback() {
    super.connectedCallback();
    let theme = this.getAttribute('theme');
    if (theme === null) {
      theme = getCSSProperty(this, '--pb-code-highlight-theme', 'default');
      this.setAttribute('theme', theme);
    }
  }

  firstUpdated() {
    super.firstUpdated();

    if (!this.code) {
      const template = this.querySelector('template');
      if (template) {
        this.code = Prism.plugins.NormalizeWhitespace.normalize(template.innerHTML);
      } else {
        this.code = Prism.plugins.NormalizeWhitespace.normalize(this.textContent);
      }
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    switch (name) {
      case 'theme':
        loadTheme(newValue).then(loadedStyles => {
          this._themeStyles = loadedStyles;
        });
        break;
      default:
        break;
    }
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('code')) {
      // if the code property is changed, the content of the <code> element is replaced
      const pre = this.shadowRoot.getElementById('pb-code-highlight');
      if (pre != null) {
        const code = document.createElement('code');
        code.textContent = this.code; // textContent property keeps new lines in the code
        pre.replaceChildren(code);
      }
      this.highlight();
    }
  }

  highlight() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

  render() {
    if (this.code) {
      return html`
        ${this._themeStyles}
        <pre
          id="pb-code-highlight"
          class="${this.lineNumbers ? 'line-numbers' : ''} language-${this.language}"
        ><code>${this.code}</code></pre>
      `;
    }
    return html`<pre class="line-numbers"><code><code></pre>`;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      pre[class*='language-'] {
        margin: 0;
      }
      code[class*='language-'] {
        white-space: var(--pb-code-highlight-white-space, pre);
      }
      pre.line-numbers {
        position: relative;
        padding-left: 3.8em;
        counter-reset: linenumber;
      }

      pre.line-numbers > code {
        position: relative;
        white-space: inherit;
      }

      .line-numbers .line-numbers-rows {
        position: absolute;
        pointer-events: none;
        top: 0;
        font-size: 100%;
        left: -3.8em;
        width: 3em; /* works for line-numbers below 1000 lines */
        letter-spacing: -1px;
        border-right: 1px solid #999;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .line-numbers-rows > span {
        pointer-events: none;
        display: block;
        counter-increment: linenumber;
        height: auto !important;
      }

      .line-numbers-rows > span:before {
        content: counter(linenumber);
        color: #999;
        display: block;
        padding-right: 0.8em;
        text-align: right;
      }
    `;
  }
}
customElements.define('pb-code-highlight', PbCodeHighlight);
