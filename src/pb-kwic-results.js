import {LitElement, html, css} from 'lit-element';
import responseData from '../demo/sample-results.js';
import {pbMixin} from './pb-mixin.js';
import './pb-paginate.js';

/**
 * Displays KWIC results
 *
 */
export class PbKwicResults extends pbMixin(LitElement) {

    static get properties() {
        return {
            ...super.properties,
            /**
             * results from a kwic search
             */
            data: {
                type: Object
            },
            /**
             * document id
             */
            doc: {
                type: String
            },
            perPage: {
                type: Number,
                attribute: 'per-page'
            },
            pattern: {
                type: String
            },
            first: {
                type: Number
            },
            path: {
                type: String
            }
        };
    }

    constructor() {
        super();
        // this.data = responseData;
        console.log('data ', this.data);
        this.data = {documents: []};
        this.first = 0;
        this.path = '';
        this.doc = null;
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
                    padding:1rem;
            }
            section .grid .right:after{
                content:'...';
            }

        `;
    }

    connectedCallback() {
        super.connectedCallback();
        PbKwicResults.waitOnce('pb-page-ready', () => {

            // this.url = `${this.getEndpoint()}/api/blacklab/search?pattern=${this.pattern}&start=${this.start}&per-page=${this.perPage}`;
            // console.log('endpoint ', url);
            this.load();

        });


        this.subscribeTo('pb-load', (event) => {
            this.first = event.detail.params["start"];
            this.perPage = event.detail.params["per-page"];
            this.load();
        });
    }

    render() {
        return html`
            <header class="grid">
                <div class="left">before</div>
                <div class="hit">hit</div>
                <div class="right">after</div>
            </header>
            <pb-paginate per-page="${this.perPage}" start="${this.first}" @pb-load="${this._handlePagination}"></pb-paginate>
            ${this.data.documents.map(document => html`
                <section>
                    <div class="docref"><a href="${this.getEndpoint()}/api/blacklab/view?pattern=${this.pattern}&doc=${document.id}">${document.id}</a></div>
                    <div class="grid">
                        ${document.matches.map(match => html`
                            <div class="left">${match.left}</div>
                            <div class="hit"><a href="${this.getEndpoint()}/api/blacklab/view?pattern=${this.pattern}&doc=${document.id}&match=${match.match.words[0]}&page=${match.page[0]}">${match.match.display}</a></div>
                            <div class="right">${match.right}</div>
                        `)}
                    </div>
                </section>
            `)}
        `;
    }

    firstUpdated() {
        super.firstUpdated();
        console.log('pattern ', this.pattern);
        console.log('first ', this.first);
        console.log('per-page ', this.perPage);


    }

    // async _load(url){
    async load() {
        let url = `${this.getEndpoint()}/api/blacklab/search?pattern=${this.pattern}&start=${this.first}&per-page=${this.perPage}`;
        if (this.doc) {
            url = `${this.getEndpoint()}/api/blacklab/search?pattern=${this.pattern}&start=${this.first}&per-page=${this.perPage}&doc=${this.doc}`;
        }
        // const url = `${this.getEndpoint()}/api/blacklab/search?pattern=${this.pattern}&start=${this.first}&per-page=${this.perPage}`;
        await fetch(url, {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin'
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('response ', data);
                this.data = data;
                this.emitTo('pb-results-received', {
                    "count": data.docs ? parseInt(data.docs, 10) : 0,
                    "start": data.start,
                    "params": data.params
                });
            })
            .catch((error) => {
                console.error('Error retrieving remote content: %o', error);
            });

    }

    _handlePagination() {
        console.log('_handlePagination')
    }

}

customElements.define('pb-kwic-results', PbKwicResults);
