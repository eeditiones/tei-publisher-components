import {LitElement, html, css} from 'lit-element';
import anime from 'animejs';
import responseData from '../demo/sample-results.js';
import {pbMixin} from './pb-mixin.js';
import './pb-paginate.js';

/**
 * Displays KWIC results
 *
 * @csspart paginator - the pb-paginate component
 * @csspart label - the pb-paginate label
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
            },
            sort:{
                type: String
            }
        };
    }

    constructor() {
        super();
        // this.data = responseData;
        console.log('data ', this.data);
        this.data = {documents: []};
        this.first = 1;
        this.path = '';
        this.doc = null;
        this.sort = null;
    }


    static get styles() {
        return css`
            :host {
                display: block;
                max-width:100%;
            }
            table{
                width:100%;
            }
            .docName{
                text-align:left;
            }
            pb-paginate{
                justify-content:center;
                padding-bottom:3rem;
            }
            th, td{
                padding:0.3rem;
            }
            th:nth-child(1),td:nth-child(1){
                width:35%;
            }
            th:nth-child(5), td:nth-child(5){
                width:35%;
            }
            .left, .hit-count{
                text-align:right;
            }
            .right{
                text-align:left;
            }
            td.hit{
                text-align:center;
                white-space:nowrap;
            }
            table{
                cell-spacing:0;
                cell-padding:0;
            }
            tr{
                cell-spacing:0;
                cell-padding:0;
            }
            .t-head th{
                border-bottom:thin solid #999;
            }

        `;
    }

    connectedCallback() {
        super.connectedCallback();
        PbKwicResults.waitOnce('pb-page-ready', () => {
            console.log('page-ready');
            this.load();
        });

        this.subscribeTo('pb-load', (event) => {
            const index = Number(event.detail.params.page) + 1;
            const perPage = Number(event.detail.params["per-page"]);

            if(index === 1){
                this.first = 1;
            }else{
                this.first = (index-1) * perPage+1;
            }
            this.load();
        });

        this.subscribeTo('force-load', (event) =>{
            this.load();
        });


    }

    render() {
        return html`
            <pb-paginate part="paginator" per-page="${this.perPage}" start="${this.first}" @pb-load="${this._handlePagination}"></pb-paginate>
            <table>
                <tr class="t-head">
                    <th class="docName">Doc Id</th>
                    <th class="left">before</th>
                    <th>hit</th>
                    <th class="right">after</th>
                    <th class="hit-count">hits</th>
                </tr>
                ${this.data.documents.map(document => html`

                    <tr>
                        <td colspan="4" class="docName">
                            <a
                                href="${this._endpoint}/${document.id}.xml?doc=${document.id}&pattern=${this.pattern}&match=${document.matches[0].match.words[0]}&id=${document.matches[0].page[0]}"
                                data-doc="${document.id}"
                                data-id="${document.matches[0].page[0]}"
                            >${document.id}</a>
                        </td>
                        <td class="hit-count">
                            <span class="hit-count">${document.hits}</span>
                        </td>
                    </tr>
                    ${document.matches.map(match => html`
                        <tr>
                            <td class="left" colspan="2">${match.left}</td>
                            <td class="hit">
                                <a href="${this.getEndpoint()}/${document.id}.xml?doc=${document.id}&pattern=${this.pattern}&match=${match.match.words[0]}&id=${match.page[0]}">${match.match.display}</a>
                            </td>
                            <td class="right" colspan="2">${match.right}</td>
                        </tr>
                    `)}
                `)}
            </table>
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

        console.log('endpoint ', this.getEndpoint());
        if(!this.getEndpoint()) return;
        if(!this.pattern) return;
        let url = `${this.getEndpoint()}/api/blacklab/search?pattern=${this.pattern}&start=${this.first}&per-page=${this.perPage}`;
        if (this.doc) {
            // url = `${this.getEndpoint()}/api/blacklab/search?pattern=${this.pattern}&start=${this.first}&per-page=${this.perPage}&doc=${this.doc}`;
            url += `&doc=${this.doc}`;
        }
        if(this.sort){
            url += `&sort=${this.sort}`;
        }
        await fetch(url, {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin'
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('response ', data);
                this.data = data;
                this.first = data.start;
                localStorage.setItem('pb-kwic-results',JSON.stringify(this.data));
                this.emitTo('pb-results-received', {
                    "count": data.docs ? parseInt(data.docs, 10) : 0,
                    "start": data.start,
                    "params": data.params
                });
            })
            .catch((error) => {
                console.error('Error retrieving remote content: ', error);
            });

    }

/*
    async _loadDocResults(doc){
        console.log('endpoint ', this.getEndpoint());
        if(!this.getEndpoint()) return;

        const d = this.data.documents.find(id => id == doc);
        const firstMatch = d.matches[0].match;
        const firstWord = firstMatch.words[0];
        const firstPage = d.matches[0].page[0];

        const url = `${this.getEndpoint()}/api/blacklab/view?pattern=${this.pattern}&doc=${doc}&match=${firstWord}&page=${firstPage}&format=json`;
        await fetch(url, {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin'
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('pb-kwic-doc-matches',JSON.stringify(data));
                console.log('opening ',`${this.getEndpoint()}/${doc}.xml?id=${firstPage}`);
                // window.location.href = `${this.getEndpoint()}/${doc}.xml?id=${firstPage}`;
            })
            .catch((error) => {
                console.error('Error retrieving remote content: ', error);
            });
    }
*/

    _handlePagination() {
        console.log('_handlePagination')
    }

    _handleDocView(e){
        console.log('_handleDocView',e);
        const doc = e.target.dataset.doc;
        console.log('_handleDocView doc',doc);
        this._loadDocResults(doc);

    }

    updated(){
        this._animate();
    }

    _animate(){
        anime({
            targets: this.shadowRoot.querySelectorAll('tr'),
            opacity: [0,1],
            duration:200,
            delay:200,
            easing: 'linear'
        });

    }

/*
    createRenderRoot() {
        /!**
         * Render template without shadow DOM. Note that shadow DOM features like
         * encapsulated CSS and slots are unavailable.
         *!/
        return this;
    }
*/

}

customElements.define('pb-kwic-results', PbKwicResults);
