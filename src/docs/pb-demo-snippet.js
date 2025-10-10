import { LitElement, html, css, nothing } from '../lit-compat.js'
import { translate } from '../pb-i18n.js'
import { ready, firePageReady, syncPbSelect, autoWireForms } from './demo-utils.js'
import '../pb-code-highlight.js'

const codePenEndpoint = 'https://teipublisher.com/exist/apps/tei-publisher'

/**
 * Viewer for demo code.
 *
 * @customElement pb-demo-snippet
 */
export class PbDemoSnippet extends LitElement {
  static properties = {
    title: { type: String },
    code: { type: String },
    _showCodeLabel: { type: String },
    _requirePbTify: { type: Boolean }
  }

  constructor () {
    super()
    this.title = 'TEI Publisher Webcomponents Example'
    this.code = 'Loading ...'
    this._showCodeLabel = 'demo.showCode.show'
    this._requirePbTify = false
  }

  connectedCallback () {
    super.connectedCallback()
    this._requirePbTify = this.hasAttribute('require-pb-tify')

    const template = this.querySelector('template')
    if (!template) {
      console.warn('<pb-demo-snippet> no <template> found inside snippet')
      return
    }

    this.code = PbDemoSnippet.removeIndent(template.innerHTML)
      .replace(/\s*<style[\s\S]*?>[\s\S]*?<\/style>\s*/g, '')

    const clone = template.content.cloneNode(true)
    this.append(clone)

    // After stamping, normalize demos:
    // - If pb-select is present and defined, reflect initial values into the inner controls
    // - Always fire a lightweight pb-page-ready so components can initialize
    queueMicrotask(async () => {
      try {
        if (customElements.get('pb-select')) {
          const selects = this.querySelectorAll('pb-select')
          for (const el of selects) {
            try { await syncPbSelect(el) } catch (_) { /* non-fatal for demos */ }
          }
        }
      } catch (_) { /* ignore */ }
      autoWireForms(this)
      firePageReady({ endpoint: '.', apiVersion: '1.0.0' })
    })
  }

  render () {
    const style = this.querySelector('style')
    const css = style ? style.innerText : ''

    const cpCode = PbDemoSnippet.indent(
      this.code.replace(/(endpoint="[^"]+")/, `endpoint="${codePenEndpoint}"`),
      2
    )

    const cpCss = `
@import url('https://fonts.googleapis.com/css?family=Oswald|Roboto&display=swap');

body {
  margin: 10px 20px;
  font-size: 16px;
  font-family: 'Roboto', 'Noto', sans-serif;
  line-height: 1.42857;
  font-weight: 300;
  color: #333;
}

${PbDemoSnippet.removeIndent(css)}
`

    const cpHtml = `
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${this.title}</title>
    <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.4.3/webcomponents-loader.js"></script>
    <script type="module" src="https://unpkg.com/@teipublisher/pb-components@latest/dist/pb-components-bundle.js"></script>
    <script type="module" src="https://unpkg.com/@teipublisher/pb-components@latest/dist/pb-leaflet-map.js"></script>
  </head>
  <body>
${cpCode}
  </body>
  ${
    this._requirePbTify
      ? '<script type="module" src="https://unpkg.com/@teipublisher/pb-components@latest/dist/pb-tify.js"></script>'
      : ''
  }
</html>`

    const cpOptions = {
      title: this.title,
      html: cpHtml,
      html_pre_processor: 'none',
      css: cpCss,
      css_starter: 'normalize',
      template: false,
      editors: 110
    }

    return html`
      <div class="snippet"><slot></slot></div>
      <pb-code-highlight
        id="source"
        theme="coy"
        language="html"
        line-numbers
        .code=${this.code}
      ></pb-code-highlight>
      <div class="buttons">
        <button class="pretty-button" @click=${this._toggleSource} type="button">
          ${translate(this._showCodeLabel)}
        </button>
        <form action="https://codepen.io/pen/define" method="POST" target="_blank">
          <input type="hidden" name="data" .value=${JSON.stringify(cpOptions)}>
          <button class="pretty-button" type="submit">
            ${translate('demo.editCode.show')}
          </button>
        </form>
      </div>
    `
  }

  _toggleSource () {
    const source = this.renderRoot.querySelector('#source')
    if (!source) return
    if (source.classList.contains('open')) {
      source.classList.remove('open')
      this._showCodeLabel = 'demo.showCode.show'
    } else {
      source.classList.add('open')
      this._showCodeLabel = 'demo.showCode.hide'
    }
  }

  static removeIndent (input = '') {
    const indents = input.match(/^[^\S\n]*(?=\S)/gm)
    if (!indents || !indents[0]) return input
    const min = indents.reduce((acc, indent) => Math.min(acc, indent.length), indents[0].length)
    if (!min) return input
    return input.replace(new RegExp(`^${' '.repeat(min)}`, 'gm'), '')
  }

  static indent (input, tabs) {
    const indent = '\t'.repeat(tabs)
    return input.replace(/^[^\S\n]*(?=\S)/gm, indent + '$&')
  }

  static styles = css`
    :host {
      display: block;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 5px rgba(0, 0, 0, 0.12),
        0 3px 1px -2px rgba(0, 0, 0, 0.2);
      padding: 20px;
      background: #fff;
    }

    pb-code-highlight {
      display: none;
      margin-top: 30px;
    }

    pb-code-highlight.open {
      display: block;
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
      border: 2px solid #2196f3;
      background-color: transparent;
      font-size: 14px;
      font-weight: 500;
      color: #2196f3;
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
      border-radius: 0;
      appearance: none;
    }

    .pretty-button:hover,
    .pretty-button:active {
      background-color: #2196f3;
      color: #fff;
    }

    .pretty-button:disabled {
      background-color: transparent;
      border-color: #999;
      color: #999;
    }
  `
}

customElements.define('pb-demo-snippet', PbDemoSnippet)
