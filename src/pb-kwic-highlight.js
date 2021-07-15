import {LitElement, html, css} from 'lit-element';
import '@polymer/iron-ajax';
import '@polymer/paper-dialog';
import '@polymer/paper-dialog-scrollable';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';
import {pbMixin} from './pb-mixin.js';
import {translate} from "./pb-i18n.js";

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
            current: {
                type: Number
            },
            /**
             * the id of the view for which highlights shall be displayed
             */
            view: {
                type: String
            },
            /**
             * CQL search pattern send to Blacklab
             */
            pattern: {
                type: String
            },
            /**
             * optional match parameter on the URL. If present page will display appropriate hit
             */
            match: {
                type: String
            },
            /**
             * the document id
             */
            docid: {
                type: String
            },
            /**
             * holds the results of querying the 'api/blacklab/doc' endpoint
             */
            hits: {
                type: Array
            },
            kwicData: {
                type: Object
            },
            /**
             * optional: may hold id of match element to be highlighted
             */
            matchParam: {
                type: String
            },
            pageId: {
                type: String
            },
            perDocument: {
                type: Number,
                attribute: 'per-document'
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

        /*
         * waiting for the page to be ready before storing a reference to the shadowDOM of the view element this
         * component is attached to via the 'view' attribute.
         */
        PbKwicHighlight.waitOnce('pb-page-ready', () => {
            this.viewElement = document.getElementById(this.view);
            if (!this.viewElement) {
                console.error(`${this}: view element with id ${this.view} does not exist`);
                return;
            }
            this.shadow = this.viewElement.shadowRoot;
        });

        this.subscribeTo('pb-update', (ev) => {
            console.log('do it noow!');
            this._loadDocResults();
        });
        this.subscribeTo('pb-refresh', (ev) => {
            console.log('pb-refresh', ev.detail);
            this.dynMatch = ev.detail.match;
            // this._loadDocResults();
        });
    }

    render() {
        return html`
            ${this.hits.length != 0
            ? html`
                    <section class="kwic-display">
                        PageId:${this.pageId} / ${Array.isArray(this.hits) ? this.hits[this.current - 1].page[0] : ''}
                        <paper-icon-button icon="icons:arrow-back" @click="${this._handlePrev}" ?disabled="${this.current === 1}"></paper-icon-button>
                        <span class="current">${this.current}</span>/<span class="counter">${this.count}</span>
                        <paper-icon-button icon="icons:arrow-forward" @click="${this._handleNext}" ?disabled="${this.current === this.hits.length}"></paper-icon-button>
                    </section>` : ''
        }
        `;
    }

    async _loadDocResults() {
        console.log('endpoint ', this.getEndpoint());
        if (!this.getEndpoint()) return;

        const params = new URLSearchParams(window.location.search);
        this.pattern = params.get('pattern');

        if(this.dynMatch){
            this.matchParam = this.dynMatch;
        }else{
            this.matchParam = params.get('match');
        }
        this.pageId = params.get('id');
        this.docId = params.get('doc');

        const url = `${this.getEndpoint()}/api/blacklab/doc?pattern=${this.pattern}&doc=${this.docId}&per-document=${this.perDocument}&format=json`;
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
            .then(() => {
                this._markAllMatches();
                this._showMatch(this.matchParam);
            })

            .catch((error) => {
                console.error('Error retrieving remote content: ', error);
            });
    }

    _markAllMatches() {
        const docs = this.kwicData.documents;
        this.count = this.kwicData.hits;
        this.hits = docs[Object.keys(docs)[0]].hits; // 'jump over' docPid
        console.log('hits', this.hits);
        console.log('matchParam', this.matchParam);
        if (Array.isArray(this.hits)) {
            console.log('hits', this.hits);
            this.hits.forEach((hit) => {
                // console.log('match ', hit);
                // console.log('match words ', hit.match.words);
                const startId = hit.match.words[0];
                const endId = hit.match.words[1];
                this._addMarkerClasses(startId, endId);
            });

        }else{
            // ### it's just a single hit and we get object instead of array
            const startId = this.hits.match.words[0];
            const endId = this.hits.match.words[1];
            this._addMarkerClasses(startId, endId);
            // this._scrollTo(startId, endId);
        }
        this.requestUpdate();
    }


    _showMatch(matchId){
        // console.log('finding match.... ', this.matchParam);
        // console.log('finding match in page ', this.pageId);

        const matchObj = this._getMatchObject(matchId);
        this._navigateToMatch(matchObj);
    }

    _getMatchObject(match){

        // ### if there's not match param passed in from url return the appropriate object representing current match
        if(!match){
            if(Array.isArray(this.hits)){
                // return this.hits[0];
                return this.hits[this.current - 1];
            }
            return this.hits;
        }

        if(Array.isArray(this.hits)){
            const targetHit = this.hits.find(hit => hit.match.words[0] === match);
            this.current = this.hits.findIndex(hit => hit === targetHit) + 1 ;
            return targetHit;
        }
        this.current=1;
        return this.hits;
    }

    _navigateToMatch(matchObj){
        console.log('_navigateToMatch', matchObj);
        const matchPage = matchObj.page[0];

        console.log('this.pageId ', this.pageId);
        console.log('matchPage ', matchPage);
        const matchId = matchObj.match.words[0];
        const newUrl = `${this._endpoint}/${this.docId}.xml?doc=${this.docId}&pattern=${this.pattern}&match=${matchObj.match.words[0]}&id=${matchPage}`;
        if(this.pageId !== matchPage){
            this.emitTo('pb-refresh', {id: matchPage, match:matchId});
        }else{
            this._highlight(matchObj);
            window.history.replaceState({},'',newUrl);
        }
    }

    _highlight(matchObj){
        this._resetCurrentMarker();

        const startid = matchObj.match.words[0];
        const endid = matchObj.match.words[1];
        const startElem = this.shadow.querySelector(`#${startid}`);
        if (startElem) {
            startElem.parentNode.classList.add('kwic-current');
        }
        const endElem = this.shadow.querySelector(`#${endid}`);
        if (endElem) {
            endElem.parentNode.classList.add('kwic-current');
        }
        startElem.scrollIntoView({block: "center", inline: "nearest"});

    }


    _resetCurrentMarker() {
        const old = this.shadow.querySelectorAll('.kwic-current');
        Array.from(old).forEach(elem => {
            elem.classList.remove('kwic-current');
        });
    }

    _addMarkerClasses(startId, endId) {
        const start = this.shadow.querySelector(`#${startId}`);
        if (!start) {
            return;
        }
        start.parentNode.classList.add('kwic-start');

        const end = this.shadow.getElementById(endId);
        if (end) {
            end.parentNode.classList.add('kwic-end');
        }
    }

    _handlePrev() {
        this.current -= 1;
        const prevMatchObj = this.hits[this.current - 1];
        this._navigateToMatch(prevMatchObj);
    }

    _handleNext() {
        const nextMatchObj = this.hits[this.current];
        this._navigateToMatch(nextMatchObj);
        this.current += 1;
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
