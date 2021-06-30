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
            }

        };
    }

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
        this.current = 1;

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
            this._doKwic();
        });
    }

    render() {
        return html`
            <section class="kwic-display">
                <button @click="${this._handlePrev}" ?disabled="${this.current === 1}">prev</button>
                <span class="current">${this.current}</span>/<span class="counter">${this.count}</span>
                <button @click="${this._handleNext}" ?disabled="${this.current === this.matches.length}">next</button>
            </section>
        `;
    }


    _doKwic(){
       const params = new URLSearchParams(window.location.search);
        const pattern = params.get('pattern');
        const matchParam = params.get('match');
        const pageId = params.get('id');
        const docId = params.get('doc');

        const kwicData = JSON.parse(localStorage.getItem('pb-kwic-results'));
        if(kwicData){
            // const pattern = kwicData.pattern;
            // this.count = kwicData.hits;
            // console.log(kwicData.documents);
            const theDoc = kwicData.documents.find(doc => doc.id === docId);

            this.matches = theDoc.matches;
            this.count = this.matches.length;
            //show first match


            theDoc.matches.forEach((match,i) => {
                console.log('match ', match);
                console.log('match words ', match.match.words);
                const startId = match.match.words[0];
                const endId = match.match.words[1];
                this._showMatch(startId,endId);
            });

            const firstStart = this.matches[0].match.words[0];
            this._scrollTo(firstStart);
            // const firstStartElem = this.shadow.querySelector(`#${firstStart}`);
            // firstStartElem.scrollIntoView({ block: "center", inline: "nearest" });

        } else {
            // todo: read from queryparams and query the 'doc' endpoint
        }
        this.requestUpdate();
    }

    _scrollTo(id){
        const startElem = this.shadow.querySelector(`#${id}`);
        startElem.scrollIntoView({ block: "center", inline: "nearest" });
    }

    _showMatch(startId, endId){
        const start = this.shadow.querySelector(`#${startId}`);
        start.parentNode.classList.add('kwic-start');
        const end = this.shadow.getElementById(endId);
        if(end){
            end.parentNode.classList.add('kwic-end');
        }
    }

    _handlePrev(){
        this.current -= 1;
        const m = this.matches[this.current-1];
        const startid = m.match.words[0];
        this._scrollTo(startid);
    }

    _handleNext(){
        const m = this.matches[this.current];
        const startid = m.match.words[0];
        this.current += 1;
        this._scrollTo(startid);
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

    _handleClear(ev) {
        ev.preventDefault();
        localStorage.removeItem('pb-kwic-doc-matches');
    }

}
customElements.define('pb-kwic-highlight', PbKwicHighlight);
