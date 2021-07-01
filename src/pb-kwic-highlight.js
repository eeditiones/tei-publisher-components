import { LitElement, html, css } from 'lit-element';
import '@polymer/iron-ajax';
import '@polymer/paper-dialog';
import '@polymer/paper-dialog-scrollable';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { pbMixin } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";

/**
 * Looks for KWIC results as produced by pb-kwic-results in sessionStorage.
 *
 * When data are present highlights are processed.
 *
 *
 */
export class PbKwicHighlight extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            current:{
                type: Number
            },
            /**
             * the id of the view for which highlights shall be displayed
             */
            view: {
                type: String
            },
            pattern:{
                type: String
            },
            match: {
                type: String
            },
            docid:{
                type: String
            },
            kwicData:{
                type: Object
            },
            perDocument:{
                type: Number,
                attribute:'per-document'
            },
            hits:{
                type:Array
            }

        };
    }

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
        this.current = 1;
        this.perDocument = 100;
        this.hits = [];
        this.kwicData = {};

        PbKwicHighlight.waitOnce('pb-page-ready', () => {
            console.log('page-ready');

            this.viewElement = document.getElementById(this.view);
            if(!this.viewElement){
                console.error(`${this}: view element with id ${this.view} does not exist`);
                return;
            }
            this.shadow = this.viewElement.shadowRoot;
            console.log('shadow ', this.shadow);
        });

        this.subscribeTo('pb-update',(ev) => {
            console.log('do it noow!');
            // this._doKwic();
            this._loadDocResults();
        });
    }

    render() {
        return html`
            <section class="kwic-display">
                ${this.pageId} / ${Array.isArray(this.hits)?this.hits[this.current -1].page[0]:''}
                <paper-icon-button icon="icons:arrow-back" @click="${this._handlePrev}" ?disabled="${this.current === 1}"></paper-icon-button>
                <span class="current">${this.current}</span>/<span class="counter">${this.count}</span>
                <paper-icon-button icon="icons:arrow-forward" @click="${this._handleNext}" ?disabled="${this.current === this.hits.length}"></paper-icon-button>
            </section>
        `;
    }

    async _loadDocResults(){
        console.log('endpoint ', this.getEndpoint());
        if(!this.getEndpoint()) return;

        const params = new URLSearchParams(window.location.search);
        const pattern = params.get('pattern');
        const matchParam = params.get('match');
        const pageId = params.get('id');
        this.pageId = pageId;
        const docId = params.get('doc');

        const url = `${this.getEndpoint()}/api/blacklab/doc?pattern=${pattern}&doc=${docId}&per-document=${this.perDocument}&format=json`;
        await fetch(url, {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin'
        })
            .then((response) => response.json())
            .then((data) => {
                this.kwicData = data;
                console.log('kwicData ', this.kwicData);
                // this._doKwic();
                // localStorage.setItem('pb-kwic-doc-matches',JSON.stringify(data));
                // console.log('opening ',`${this.getEndpoint()}/${doc}.xml?id=${firstPage}`);
                // window.location.href = `${this.getEndpoint()}/${doc}.xml?id=${firstPage}`;
            })
            .then(()=> {
                this._doKwic(pageId);
            })
            .catch((error) => {
                console.error('Error retrieving remote content: ', error);
            });
    }

    _doKwic(pageId){
        const docs = this.kwicData.documents;
        this.count = this.kwicData.hits;
        this.hits = docs[Object.keys(docs)[0]].hits; // 'jump over' docPid
        console.log('hits',this.hits);

        if(Array.isArray(this.hits)){
            console.log('hits', this.hits);
            this.hits.forEach((hit) => {
                // console.log('match ', hit);
                // console.log('match words ', hit.match.words);
                const startId = hit.match.words[0];
                const endId = hit.match.words[1];
                this._addMarkerClasses(startId,endId);
            });

            // find hit with page id matching the one passed on querystring
            const targetHit = this.hits.find(hit => hit.page[0] === pageId);
            console.log('targetHit ',targetHit);
            if(targetHit){
                const index = this.hits.findIndex(hit => hit === targetHit);
                this.current = index + 1;
                const startElementId = targetHit.match.words[0];
                const endElementId = targetHit.match.words[1];
                this._scrollTo(startElementId,endElementId);
            }

        } else {
            // ### it's just a single hit and we get object instead of array
            const startId = this.hits.match.words[0];
            const endId = this.hits.match.words[1];
            this._addMarkerClasses(startId,endId);
            this._scrollTo(startId,endId);
        }
        this.requestUpdate();
    }

    _scrollTo(id, end){
        this._resetCurrentMarker();

        const startElem = this.shadow.querySelector(`#${id}`);
        if(startElem){
            startElem.parentNode.classList.add('kwic-current');
            startElem.scrollIntoView({ block: "center", inline: "nearest" });

            const endElem = this.shadow.querySelector(`#${end}`);
            if(endElem){
                endElem.parentNode.classList.add('kwic-current');
            }
        }else{
            console.log(`element with id: ${ id }not found`);
            // todo: request/show correct page
            const pageOfCurrentHit = Array.isArray(this.hits)?this.hits[this.current - 1].page[0]:this.hits.page[0];
            if(this.pageId !== pageOfCurrentHit){
                // console.log('hit on another page ->', this.hits[this.current - 1].page[0]);
                // this.viewElement.xmlId = pageOfCurrentHit;
                this.emitTo('pb-refresh',{id:pageOfCurrentHit});
            }
        }
    }

    _resetCurrentMarker(){
        const old = this.shadow.querySelectorAll('.kwic-current');
        Array.from(old).forEach(elem => {
           elem.classList.remove('kwic-current');
        });
    }

    _addMarkerClasses(startId, endId){
        const start = this.shadow.querySelector(`#${startId}`);
        if(!start){
            // console.error('start element not found ', startId);
            return;
        }
        start.parentNode.classList.add('kwic-start');



        const end = this.shadow.getElementById(endId);
        if(end){
            end.parentNode.classList.add('kwic-end');
        }
    }

    _handlePrev(){
        this.current -= 1;
        const m = this.hits[this.current-1];
        const startid = m.match.words[0];
        const endid = m.match.words[1];
        this._scrollTo(startid,endid);
    }

    _handleNext(){
        const m = this.hits[this.current];
        const startid = m.match.words[0];
        const endid = m.match.words[1];
        this.current += 1;
        this._scrollTo(startid,endid);
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
            .counter, .current{
                padding:0 0.5rem;
            }

        `;
    }

/*
    _handleClear(ev) {
        ev.preventDefault();
        localStorage.removeItem('pb-kwic-doc-matches');
    }
*/

}
customElements.define('pb-kwic-highlight', PbKwicHighlight);
