import { LitElement, html, css } from 'lit-element';
import "prismjs/prism";
import 'prismjs/components/prism-xquery';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';

const { Prism } = window;

/**
 *
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
            code: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.language = 'xml';
    }

    render() {
        if (!this.code) {
            const template = this.querySelector('template');
            this.code = template.innerHTML;
        }

        this.code = Prism.plugins.NormalizeWhitespace.normalize(this.code);

        const container = document.createElement('pre');
        const code = document.createElement('code');
        container.appendChild(code);

        const html = Prism.highlight(this.code, this._determineLang());
        code.innerHTML = html;
        this.shadowRoot.appendChild(container);
    }

    _determineLang() {
        switch (this.language) {
            case 'xquery':
                return Prism.languages.xquery;
            case 'xml':
                return Prism.languages.xml;
            case 'html':
                return Prism.languages.html;
            case 'css':
                return Prism.languages.css;
            case 'javascript':
                return Prism.languages.javascript;
            default:
                return Prism.languages.markup;
        }
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
            /**
            * prism.js default theme for JavaScript, CSS and HTML
            * Based on dabblet (http://dabblet.com)
            * @author Lea Verou
            */
            code[class*="language-"],
            pre[class*="language-"] {
            color: black;
            background: none;
            text-shadow: 0 1px white;
            font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            word-wrap: normal;
            line-height: 1.5;
            -moz-tab-size: 4;
            -o-tab-size: 4;
            tab-size: 4;
            -webkit-hyphens: none;
            -moz-hyphens: none;
            -ms-hyphens: none;
            hyphens: none;
            }
            pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
            code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
            text-shadow: none;
            background: #b3d4fc;
            }
            pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
            code[class*="language-"]::selection, code[class*="language-"] ::selection {
            text-shadow: none;
            background: #b3d4fc;
            }
            @media print {
            code[class*="language-"],
            pre[class*="language-"] {
            text-shadow: none;
            }
            }
            /* Code blocks */
            pre[class*="language-"] {
            padding: 1em;
            margin: .5em 0;
            overflow: auto;
            }
            :not(pre) > code[class*="language-"],
            pre[class*="language-"] {
            background: #f5f2f0;
            }
            /* Inline code */
            :not(pre) > code[class*="language-"] {
            padding: .1em;
            border-radius: .3em;
            white-space: normal;
            }
            .token.comment,
            .token.prolog,
            .token.doctype,
            .token.cdata {
            color: slategray;
            }
            .token.punctuation {
            color: #999;
            }
            .namespace {
            opacity: .7;
            }
            .token.property,
            .token.tag,
            .token.boolean,
            .token.number,
            .token.constant,
            .token.symbol,
            .token.deleted {
            color: #905;
            }
            .token.selector,
            .token.attr-name,
            .token.string,
            .token.char,
            .token.builtin,
            .token.inserted {
            color: #690;
            }
            .token.operator,
            .token.entity,
            .token.url,
            .language-css .token.string,
            .style .token.string {
            color: #a67f59;
            background: hsla(0, 0%, 100%, .5);
            }
            .token.atrule,
            .token.attr-value,
            .token.keyword {
            color: #07a;
            }
            .token.function {
            color: #DD4A68;
            }
            .token.regex,
            .token.important,
            .token.variable {
            color: #e90;
            }
            .token.important,
            .token.bold {
            font-weight: bold;
            }
            .token.italic {
            font-style: italic;
            }
            .token.entity {
            cursor: help;
            }
        `;
    }
}
customElements.define('pb-code-highlight', PbCodeHighlight);