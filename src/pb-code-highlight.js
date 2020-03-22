import { LitElement, html, css } from 'lit-element';
import "prismjs/prism";
import 'prismjs/components/prism-xquery';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/plugins/line-numbers/prism-line-numbers';

/**
 * Highlight a code snippet. The snippet may either be passed in a template child
 * element, which could contain HTML or text. If no template child is present, the
 * component will take any text content contained in it and highlight it. One can also
 * pass the code to be highlighted in the `code` property.
 *
 * @customElement  pb-code-highlight
 * @polymer
 * @demo demo/pb-code-highlight.html
 * @appliesMixin pbMixin
 */
export class PbCodeHighlight extends LitElement {
    static get properties() {
        return {
            /**
             * The language to be used for syntax highlighting.
             */
            language: {
                type: String
            },
            /**
             * The code to be highlighted as a string. If not set,
             * this will be populated from either a template child element
             * or the element's text content.
             */
            code: {
                type: String
            },
            /**
             * Highlighting theme to use: 'coy', 'dark', 'funky', 'okaida', 'solarizedlight',
             * 'tomorrow', 'twilight' or 'default'.
             */
            theme: {
                type: String
            },
            _styles: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.language = 'xml';
        this.theme = 'default';
    }

    connectedCallback() {
        super.connectedCallback();
        const theme = this.getAttribute('theme');
        if (theme === null) {
            this.setAttribute('theme', 'default');
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
                PbCodeHighlight.loadTheme(newValue).then((styles) => {
                    this._styles = styles;
                });
                break;
            default:
                break;
        }
    }

    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('code')) {
            this.highlight();
        }
    }

    highlight() {
        Prism.highlightAllUnder(this.shadowRoot);
    }

    render() {
        if (this.code) {
            return html`
                ${this._styles}
                <pre class="line-numbers language-${this.language}"><code>${this.code}</code></pre>
            `;
        }
        return html`<pre class="line-numbers"><code>Formatting ...<code></pre>`;
    }

    static async loadTheme(theme) {
        const themeName = theme === 'default' ? 'prism.css' : `prism-${theme}.css`;
        const resource = new URL('../assets/prismjs/', import.meta.url).href + themeName;
        console.log('<pb-code-highlight> loading theme %s from %s', theme, resource);

        const fetchedStyles = await fetch(resource).then(async response => response.text()).catch(e => '');

        return html`<style>${fetchedStyles}</style>`;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
            pre {
                margin: 0;
                white-space:pre-wrap;
            }
        `;
    }
}
customElements.define('pb-code-highlight', PbCodeHighlight);