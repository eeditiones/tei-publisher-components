import { LitElement, html, css } from 'lit-element';
import "@lrnwebcomponents/es-global-bridge";
import { pbMixin } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";

/** Import external script dynamically */
function _import(name, location) {
    window.ESGlobalBridge.requestAvailability();
    return new Promise(resolve => {
        window.ESGlobalBridge.instance.load(name, location);
        window.addEventListener(
            `es-bridge-${name}-loaded`,
            () => resolve(),
            { once: true }
        );
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
    formulas.forEach((formula) => {
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
            source = formula.innerHTML;
            chtml = window.MathJax.tex2chtml(source, options);
        }
        formula.innerHTML = '';
        formula.appendChild(chtml);
        formula.setAttribute('loaded', 'loaded');
        formula.setAttribute('source', source);
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
        window.MathJax = {
            startup: {
                typeset: false, // Perform initial typeset?
                pageReady: () => _initMath(elem, formulas)  // Called when MathJax and page are ready
            }
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
 */
export class PbFormula extends pbMixin(LitElement) {
    static get properties() {
        return {
            /**
             * Render the formula in display mode, i.e. as block level element.
             */
            display: {
                type: Boolean
            },
            /**
             * Will be set once the element has been typeset.
             */
            loaded: {
                type: Boolean
            },
            /**
             * Will contain the source notation once the element has been typeset.
             */
            source: {
                type: String
            },
            ...super.properties
        };
    }

    constructor() {
        super();
        this.display = false;
    }

    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
        switch(name) {
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