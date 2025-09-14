import { LitElement, html, css } from 'lit';
import { pbMixin, waitOnce } from './pb-mixin.js';

/**
 * This component queries the blacklab API of TEI-Publisher for a list of text matches
 * in a given document. The query is given as a CQL querystring (see pattern property).
 *
 * **Note**: There's no demo for this component yet as it would need a blacklab instance.
 *
 * The component displays 2 navigation buttons to jump to previous / next match and
 * a display of the current index and total number of matches.
 *
 * When navigating and the requested match is not on the current page a pb-refresh is dispatched
 * to load the correct page. Once the page has dispatch pb-update this component will refresh and trigger
 * loading of matches from the API.
 *
 * Highlighting is accomplished by marking the matched text with the following CSS classes:
 * - kwic-start - for the start of the match
 * - kwic-end - for the end of the match (might be on the same node as 'kwic-start'
 * - kwic-current - to set a different highlight color for the current match
 *
 * When navigating the browser URL will be updated to allow bookmarks for a certain match.
 *
 * Note: this component does no caching of query results yet. In case of heavier use the data can be taken
 * from localStorage ('pb-kwic-results') as usually pb-kwic-results has been visited by the user before. For
 * stability reasons this was not done in this version.
 *
 *
 * When data are present highlights are processed.
 *
 */
export class PbBlacklabHighlight extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      /**
       * one-based index of the current highlight
       */
      current: {
        type: Number,
      },
      /**
       * the id of the view for which highlights shall be displayed
       */
      view: {
        type: String,
      },
      /**
       * CQL search pattern send to the Blacklab API
       */
      pattern: {
        type: String,
      },
      /**
       * optional match parameter on the URL. If present page will display appropriate hit
       */
      match: {
        type: String,
      },
      /**
       * the document id
       */
      docid: {
        type: String,
      },
      /**
       * holds the results of querying the 'api/blacklab/doc' endpoint
       */
      hits: {
        type: Array,
      },
      /**
       * contains full response after successful loading
       */
      kwicData: {
        type: Object,
      },
      /**
       * optional: may hold id of match element to be highlighted
       */
      matchParam: {
        type: String,
      },
      /**
       * the pageId to display
       */
      pageId: {
        type: String,
      },
      /**
       * how many hits shall be loaded. Defaults to 100. This value is passed to the blacklab API
       */
      perDocument: {
        type: Number,
        attribute: 'per-document',
      },
    };
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
    waitOnce('pb-page-ready', () => {
      this.viewElement = document.getElementById(this.view);
      if (!this.viewElement) {
        console.error(`${this}: view element with id ${this.view} does not exist`);
        return;
      }
      this.shadow = this.viewElement.shadowRoot;
    });

    this.subscribeTo('pb-update', () => {
      this._loadDocResults();
    });
    this.subscribeTo('pb-refresh', ev => {
      this.dynMatch = ev.detail.match;
    });
  }

  render() {
    return html`
      ${this.hits.length !== 0
        ? html` <section class="kwic-display">
            <paper-icon-button
              icon="icons:arrow-back"
              @click="${this._handlePrev}"
              ?disabled="${this.current === 1}"
            ></paper-icon-button>
            <span class="current">${this.current}</span> /
            <span class="counter">${this.count}</span>
            <paper-icon-button
              icon="icons:arrow-forward"
              @click="${this._handleNext}"
              ?disabled="${this.current === this.hits.length}"
            ></paper-icon-button>
          </section>`
        : ''}
    `;
  }

  /**
   * loads matches from blacklab API, marks matches with CSS classes and displays the current match.
   *
   * The URL query params are used to set params for blacklab API
   *
   * @returns {Promise<void>}
   * @private
   */
  async _loadDocResults() {
    // console.log('endpoint for loading kwic matches', this.getEndpoint());
    if (!this.getEndpoint()) return;

    const params = new URLSearchParams(window.location.search);
    this.pattern = params.get('pattern');

    /*
     * a dynMatch exists when the reloading was triggered by an nav action (prev/next)
     * the match param will be passed by the respective nav handler
     */
    if (this.dynMatch) {
      this.matchParam = this.dynMatch;
    } else {
      this.matchParam = params.get('match');
    }
    this.pageId = params.get('id');
    this.docId = params.get('doc');

    const url = `${this.getEndpoint()}/api/blacklab/doc?pattern=${this.pattern}&doc=${
      this.docId
    }&per-document=${this.perDocument}&format=json`;
    await fetch(url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
    })
      .then(response => response.json())
      .then(data => {
        this.kwicData = data;
      })
      .then(() => {
        this._markAllMatches();
        this._showMatch(this.matchParam);
      })
      .catch(error => {
        console.error('Error retrieving remote content: ', error);
      });
  }

  _markAllMatches() {
    const docs = this.kwicData.documents;
    this.count = this.kwicData.hits;
    this.hits = docs[Object.keys(docs)[0]].hits; // 'jump over' docPid
    if (Array.isArray(this.hits)) {
      this.hits.forEach(hit => {
        const startId = hit.match.words[0];
        const endId = hit.match.words[1];
        this._addMarkerClasses(startId, endId);
      });
    } else {
      // ### it's just a single hit and we get object instead of array
      const startId = this.hits.match.words[0];
      const endId = this.hits.match.words[1];
      this._addMarkerClasses(startId, endId);
      // this._scrollTo(startId, endId);
    }
    this.requestUpdate();
  }

  _showMatch(matchId) {
    const matchObj = this._getMatchObject(matchId);
    this._navigateToMatch(matchObj);
  }

  /**
   * If a match id is given it will be looked up in the loaded data and returned.
   *
   * If no match is given the first match in the response will be used.
   *
   * @param match
   * @returns {[]|*}
   * @private
   */
  _getMatchObject(match) {
    // ### if there's no match param passed in from url return the appropriate object representing current match
    if (!match) {
      if (Array.isArray(this.hits)) {
        // return this.hits[0];
        return this.hits[this.current - 1];
      }
      return this.hits;
    }

    if (Array.isArray(this.hits)) {
      const targetHit = this.hits.find(hit => hit.match.words[0] === match);
      this.current = this.hits.findIndex(hit => hit === targetHit) + 1;
      return targetHit;
    }
    this.current = 1;
    return this.hits;
  }

  _navigateToMatch(matchObj) {
    const matchPage = matchObj.page[0];
    const matchId = matchObj.match.words[0];
    const newUrl = `${this._endpoint}/${this.docId}.xml?doc=${this.docId}&pattern=${this.pattern}&match=${matchObj.match.words[0]}&id=${matchPage}`;
    if (this.pageId !== matchPage) {
      this.emitTo('pb-refresh', { id: matchPage, match: matchId });
    } else {
      this._highlight(matchObj);
      window.history.replaceState({}, '', newUrl);
    }
  }

  _highlight(matchObj) {
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
    startElem.scrollIntoView({ block: 'center', inline: 'nearest' });
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
    } else {
      start.classList.add('kwic-end');
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
      .counter,
      .current {
        padding: 0 0.5rem;
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

customElements.define('pb-blacklab-highlight', PbBlacklabHighlight);
