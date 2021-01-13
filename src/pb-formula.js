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

function _initMath(formulas) {
    formulas.forEach((formula) => {
        const display = formula.hasAttribute('display') || false;
        const mathml = formula.querySelector('math');
        const options = window.MathJax.getMetricsFor(formula.parentNode, display);
        let chtml;
        if (mathml) {
            chtml = window.MathJax.mathml2chtml(mathml.outerHTML, options);
        } else {
            window.MathJax.texReset();
            chtml = window.MathJax.tex2chtml(formula.innerHTML, options);
        }
        formula.innerHTML = '';
        formula.appendChild(chtml);
        formula.setAttribute('loaded', 'loaded');

        // update document to include styles for generated Math
        window.MathJax.startup.document.clear();
        window.MathJax.startup.document.updateDocument();
    });
}

export function parseMath(elem) {
    const formulas = elem.querySelectorAll('pb-formula');
    if (formulas.length > 0) {
        window.MathJax = {
            startup: {
                typeset: false, // Perform initial typeset?
                pageReady: () => _initMath(formulas)  // Called when MathJax and page are ready
            }
        };
        _import('MathJax', 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js');
    }
}

/**
 *
 *
 * @customElement  pb-formula
 * @polymer
 * @demo demo/pb-formula.html
 * @appliesMixin pbMixin
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
            loaded: {
                type: Boolean
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
        if (name === 'loaded') {
            this.loaded = true;
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