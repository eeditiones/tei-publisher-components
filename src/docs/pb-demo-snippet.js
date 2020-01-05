import { LitElement, html, css } from 'lit-element';
import StackBlitzSDK from '@stackblitz/sdk';
import '../pb-code-highlight';

/**
 * Viewer for demo code.
 * 
 * @customElement  pb-demo-snippet
 * @polymer
 * @appliesMixin pbMixin
 */
export class PbDemoSnippet extends LitElement {
    static get properties() {
        return {
            title: {
                type: String
            },
            code: {
                type: String
            },
            _editorLoaded: {
                type: Boolean
            },
            _showCodeLabel: {
                type: String
            },
            _editCodeLabel: {
                type: String
            },
            _vm: {
                type: Object
            }
        };
    }

    constructor() {
        super();
        this.title = 'Demo code';
        this.code = 'Loading ...';
        this._showCodeLabel = 'Show Code';
        this._editCodeLabel = 'Edit Code';
        this._editorLoaded = false;
    }

    connectedCallback() {
        super.connectedCallback();
        const template = this.querySelector('template');
        this.code = PbDemoSnippet.removeIndent(template.innerHTML);
        this.code = this.code.replace(/\s*<style[\s\S]*>[\s\S]*?<\/style>\s*/g, '');
        const clone = document.importNode(template.content, true);
        this.appendChild(clone);
    }

    render() {
        return html`
            <div class="snippet"><slot></slot></div>
            <pb-code-highlight id="source" language="html" .code="${this.code}"></pb-code-highlight>
            <div id="container"></div>
            <div class="buttons">
                <button class="pretty-button" @click="${this._showCode}">${this._showCodeLabel}</button>
                <button class="pretty-button" @click="${this._loadProject}">${this._editCodeLabel}</button>
            </div>
        `;
    }

    _showCode() {
        const source = this.shadowRoot.getElementById('source');
        if (source.classList.contains('open')) {
            source.classList.remove('open');
            this._showCodeLabel = 'Show Code';
        } else {
            source.classList.add('open');
            this._showCodeLabel = 'Hide Code';
        }
    }

    async _loadProject() {
        if (this._editorLoaded) {
            const container = this.shadowRoot.getElementById('container');
            const div = document.createElement('div');
            div.id = 'container';
            this.shadowRoot.replaceChild(div, container);
            this._editorLoaded = false;
            this._editCodeLabel = 'Edit Code';
            return;
        }

        this._editorLoaded = true;
        this._editCodeLabel = 'Close Editor';

        const source = this.shadowRoot.getElementById('source');
        source.classList.remove('open');
        this._showCodeLabel = 'Show Code';

        const style = this.querySelector('style');
        let css = '';
        if (style) {
            css = style.innerHTML;
        }
        let mainCode = this.code.replace(/(endpoint="[^"]+")/, 'endpoint="https://teipublisher.com/exist/apps/tei-publisher"');
        mainCode = PbDemoSnippet.indent(mainCode, 2);
        const code = `<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style type="text/css">
        @import url('https://fonts.googleapis.com/css?family=Oswald|Roboto&display=swap');

        body {
            font-size: 16px;
            font-family: 'Roboto', 'Noto', sans-serif;
            line-height: 1.42857;
            font-weight: 300;
            color: #333333;

            --paper-tooltip-delay-in: 200;
        }

        ${css}
    </style>
    <script src="/node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>

    <script type="module" src="/node_modules/@teipublisher/pb-components/pb-components.js"></script>
    <title>TEI Publisher Webcomponent Sample</title>
  </head>
  <body>
    ${mainCode}
  </body>
</html>`;
        const project = {
            title: this.title,
            files: {
                'index.html': code,
                'index.js': ''
            },
            settings: {
                compile: {
                    action: 'refresh'
                }
            },
            description: 'TEI Publisher Example',
            template: 'javascript',
            dependencies: {
                "@teipublisher/pb-components": "^0.9.1"
            }
        };
        const container = this.shadowRoot.getElementById('container');
        StackBlitzSDK.embedProject(container, project, {
            forceEmbedLayout: true,
            view: 'both',
            hideExplorer: false,
            hideNavigation: false,
            height: 640,
            openFile: 'index.html'
        }).then(vm => { this._vm = vm; });
    }

    static removeIndent(input) {
        const indents = input.match(/^[^\S]*(?=\S)/gm);

        if (!indents || !indents[0].length)
            return input;

        indents.sort((a, b) => a.length - b.length);

        if (!indents[0].length)
            return input;

        return input.replace(RegExp('^' + indents[0], 'gm'), '');
    }

    static indent(input, tabs) {
        return input.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++tabs).join('\t') + '$&');
    }

    static get styles() {
        return css`
            :host {
                display: block;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
                padding: 20px;
            }
            pb-code-highlight {
                display: none;
                padding: 8px 4px;
                background-color: #f0f0f0;
            }
            pb-code-highlight.open {
                display: block;
            }
            #container {
                margin-top: 20px;
            }
            .buttons {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
                padding-top: 10px;
                border-top: 1px solid var(--google-grey-400, #999);
            }
            .pretty-button {
                cursor: pointer;
                display: inline-block;
                box-sizing: border-box;
                margin: 12px 0;
                padding: 13px 44px;
                border: 2px solid #2196F3;
                background-color: transparent;
                font-size: 14px;
                font-weight: 500;
                color: #2196F3;
                text-align: center;
                text-decoration: none;
                text-transform: uppercase;
                border-radius: 0;
                -webkit-appearance: none;
                appearance: none;
            }
            .pretty-button:hover,
            .pretty-button:active {
                background-color: #2196F3;
                color: #FFF;
            }
            .pretty-button:disabled {
                background-color: transparent;
                border-color: #999;
                color: #999;
            }
        `;
    }
}
customElements.define('pb-demo-snippet', PbDemoSnippet);