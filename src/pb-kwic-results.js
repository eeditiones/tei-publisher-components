import {LitElement, html, css} from 'lit-element';
import responseData from '../demo/sample-results.js';

/**
 * Embed a codepen project to show live code. Used for some documentation examples.
 *
 */
export class PbKwicResults extends LitElement {

    static get properties() {
        return {
            ...super.properties,
        };
    }

    constructor() {
        super();
        this.data = responseData;
        console.log('data ', this.data);
    }

    static get styles() {
        return css`
            :host {
                display: block;
                width:100%;
            }
            .docref{
                font-weight:700;
            }

            .grid{
                display:grid;
                grid-template-columns:1fr min-content 1fr;
                grid-gap:1.5rem;
            }
            .grid:nth-child(1),
            .grid .left{
                justify-self:end;
            }


            section .grid .left:before{
                content:'...';
            }
            .grid .hit{
                justify-self:center;
                white-space:nowrap;
                font-weight:700;
            }

            section{
/*
                    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
*/
                    padding:0.5rem;
            }
            section .grid .right:after{
                content:'...';
            }

        `;
    }

    render() {
        return html`
                <header class="grid">
                    <div class="left">before</div>
                    <div class="hit">hit</div>
                    <div class="right">after</div>
                </header>
                ${this.data.documents.map(document => html`
                    <section>
                        <div class="docref">${document.id}</div>
                        <div class="grid">
                            ${document.matches.map(match => html`
                                <div class="left">${match.left}</div>
                                <div class="hit">${match.match.display}</div>
                                <div class="right">${match.right}</div>
                            `)}
                        </div>
                    </section>
                `)}
        `;
    }

}

customElements.define('pb-kwic-results', PbKwicResults);
