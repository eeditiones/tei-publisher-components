import { LitElement, html, css } from 'lit-element';
import "@lrnwebcomponents/es-global-bridge";
import { pbMixin } from './pb-mixin';

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

window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
    },
    svg: {
        fontCache: 'global'
    },
    startup: {
        typeset: false // Perform initial typeset?
      //   ready: Startup.defaultReady.bind(Startup),          // Called when components are loaded
      //   pageReady: Startup.defaultPageReady.bind(Startup),  // Called when MathJax and page are ready
    }
};


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
            _output: {
                type: Object
            },
            ...super.properties
        };
    }

    firstUpdated() {
        super.firstUpdated();
            
        _import('MathJax', 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js').then(_ => {
            console.log(window.MathJax)
            const svg = window.MathJax.tex2svg('$a^{2}\\dot{x}+x\\dot{y}^{2}=0$');
            console.log("mjx", svg);
            this.appendChild(svg);
        });
    }


    render() {
        return html`
            <div id="input"><slot></slot></div>
            <div id="output">${this._output}</div>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
        `;
    }
}
customElements.define('pb-formula', PbFormula);