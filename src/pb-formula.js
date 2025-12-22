import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/es-global-bridge';
import { translate } from './pb-i18n.js';

/** Import external script dynamically */
function _import(name, location) {
  window.ESGlobalBridge.requestAvailability();
  return new Promise(resolve => {
    window.ESGlobalBridge.instance.load(name, location);
    window.addEventListener(`es-bridge-${name}-loaded`, () => resolve(), { once: true });
  });
}

/**
 * Update the stylesheet required by MathJax.
 * Needs to be done after typesetting has completed.
 *
 * @param {Element} context
 * @param {Element} styles
 */
function _updateStyles(context, styles) {
  let root = context.getRootNode();
  if (root.nodeType === Node.DOCUMENT_NODE) {
    root = root.head;
  } else {
    // fonts need to be declared outside shadow root, so extract
    // all font-faces and put them into a style in the header
    const elem = document.querySelector(`style#${styles.id}`);
    if (elem) {
      elem.parentNode.removeChild(elem);
    }
    const fonts = styles.innerHTML.match(/@font-face[^{]+{.*?}/gs);
    if (fonts) {
      const style = document.createElement('style');
      style.id = styles.id;
      style.appendChild(document.createTextNode(fonts.join('\n')));
      document.head.appendChild(style);
    }
  }
  const oldStyles = root.querySelector(`#${styles.id}`);
  if (oldStyles) {
    oldStyles.parentNode.removeChild(oldStyles);
  }
  root.appendChild(styles);
}

/**
 * Iterate through the given `pb-formula` elements and typeset the math.
 */
function _initMath(context, formulas) {
  formulas.forEach(formula => {
    if (formula.hasChildNodes()) {
      const display = formula.hasAttribute('display') || false;
      const mathml = formula.querySelector('math');
      const options = window.MathJax.getMetricsFor(formula.parentNode, display);
      options.display = display;
      let chtml;
      let source;
      if (mathml) {
        source = mathml.outerHTML;
        chtml = window.MathJax.mathml2chtml(source, options);
      } else {
        window.MathJax.texReset();
        source = formula.innerHTML.replaceAll(
          /&\w+;/g,
          m =>
            ({
              '&amp;': '&',
              '&lt;': '<',
            }[m]),
        );
        chtml = window.MathJax.tex2chtml(source, options);
      }
      formula.innerHTML = '';
      formula.appendChild(chtml);
      formula.setAttribute('loaded', 'loaded');
      formula.setAttribute('source', source);
    }
  });
  _updateStyles(context, window.MathJax.chtmlStylesheet());
}

/**
 * Search the passed in element for `pb-formula` elements and
 * render them via MathJax.
 *
 * Formulas need to be processed sequentially or the output will
 * be screwed up. Therefore we cannot call MathJax asynchronously
 * but need to do it from this central controller.
 *
 * @param {Element} elem the root element to process
 */
export function typesetMath(elem) {
  const formulas = elem.querySelectorAll('pb-formula');
  console.log(`<pb-formula> Found ${formulas.length} elements to typeset ...`);
  if (formulas.length > 0) {
    if (window.MathJax) {
      _initMath(elem, formulas);
      return;
    }
    const showMenu = elem.querySelector('pb-formula[menu]');
    window.MathJax = {
      startup: {
        typeset: false, // Perform initial typeset?
        pageReady: () => _initMath(elem, formulas), // Called when MathJax and page are ready
      },
      options: {
        enableMenu: showMenu !== null,
      },
    };

    _import('MathJax', 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js');
  }
}

/**
 * Represents a mathematical formula, either in TeX notation or MathML. The element itself
 * does not do any typesetting. Instead you must call the global `typesetMath(rootNode)` function and
 * pass it the root context which should be searched for `pb-notation` elements. The function will
 * then do the actual typesetting. The reason for this is that formulas need to be typeset synchronously, i.e. one
 * after the other.
 *
 * The component detects automatically if the formula to typeset is in TeX notation or MathML.
 *
 * @slot - should contain math in TeX notation or MathML
 */
export class PbFormula extends LitElement {
  static get properties() {
    return {
      /**
       * TeX notation only: render the formula in display mode, i.e. as block level element.
       */
      display: {
        type: Boolean,
      },
      /**
       * Option: if set, enable the MathJax context menu. This affects **all** formulas
       * in the context (the page or pb-view), not just the current component!
       */
      menu: {
        type: Boolean,
      },
      /**
       * Will be set once the element has been typeset.
       */
      loaded: {
        type: Boolean,
      },
      /**
       * Will contain the source notation once the element has been typeset.
       */
      source: {
        type: String,
      },
      ...super.properties,
    };
  }

  constructor() {
    super();
    this.display = false;
  }

  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
    switch (name) {
      case 'loaded':
        this.loaded = true;
        break;
      case 'source':
        this.source = newVal;
        break;
      default:
        break;
    }
  }

  render() {
    if (!this.hasChildNodes()) {
      return null;
    }
    if (!this.loaded) {
      return html`<span class="loading">${translate('dialogs.loading')}</span>`;
    }
    return html`<div id="content" class="${this.display ? 'block' : ''}"><slot></slot></div>`;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      .block {
        display: block;
      }
      .loading {
        color: #808080;
      }
    `;
  }
}
customElements.define('pb-formula', PbFormula);
