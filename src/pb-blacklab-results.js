import { LitElement, html, css } from 'lit';
import anime from 'animejs';
import { pbMixin } from './pb-mixin.js';
import './pb-paginate.js';

/**
 * This component talks to the blacklab API of TEI-Publisher to
 * load KWIC results from a remote Blacklab instance. It displays
 * a list of documents that match the query given by `pattern`.
 *
 * **Note**: There's no demo for this component yet as it would need a blacklab instance.
 *
 * For each document a list of hits (matches) is displayed each showing the hit
 * in context of the text.
 *
 * Document Id and hits are links that can be used to open the document
 * and navigate through the hits with the help of pb-view and pb-blacklab-highlight
 * components.
 *
 * @doc - an optional document Id to limit the search to
 * @param pattern - a CQL (Common Query Language) conformant query (required)
 * @perPage - a number to indicate how many result entries to display on one page. Will be passed down to pb-paginate
 * @csspart paginator - the pb-paginate component
 * @csspart label - the pb-paginate label
 */
export class PbBlacklabResults extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      /**
       * results from a kwic search
       */
      data: {
        type: Object,
      },
      documents: {
        type: Array,
      },
      /**
       * document id
       */
      doc: {
        type: String,
      },
      /**
       * how many hits per page. will be passed down to pb-paginate
       */
      perPage: {
        type: Number,
        attribute: 'per-page',
      },
      /**
       * must be a valid CQL query as a string
       */
      pattern: {
        type: String,
      },
      /**
       * first document number to be displayed
       */
      first: {
        type: Number,
      },
      /**
       * sort order of query results
       */
      sort: {
        type: String,
      },
      /**
       * target for links
       */
      target: {
        type: String,
        attribute: 'target',
      },
    };
  }

  constructor() {
    super();
    this.data = { documents: [] };
    this.documents = [];
    this.first = 1;
    this.doc = null;
    this.sort = null;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        max-width: 100%;
      }
      table {
        width: 100%;
      }
      .docName {
        text-align: left;
      }
      pb-paginate {
        justify-content: center;
        padding-bottom: 3rem;
      }
      th,
      td {
        padding: 0.3rem;
      }
      th:nth-child(1),
      td:nth-child(1) {
        width: 35%;
      }
      th:nth-child(5),
      td:nth-child(5) {
        width: 35%;
      }
      .left,
      .hit-count {
        text-align: right;
      }
      .right {
        text-align: left;
      }
      td.hit {
        text-align: center;
        white-space: nowrap;
      }
      table {
        cell-spacing: 0;
        cell-padding: 0;
      }
      tr {
        cell-spacing: 0;
        cell-padding: 0;
      }
      thead tr th {
        border-bottom: thin solid #999;
      }
      td.hit {
        position: relative;
        padding: 0 1rem;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    this.subscribeTo('pb-load', event => {
      // ### handle pb-load received from pb-paginate to set number of first displayed document
      this.first = Number(event.detail.params.start);
      this.load();
    });

    this.subscribeTo('force-load', event => {
      this.load();
      this.requestUpdate();
    });

    this.subscribeTo('pb-results-received', event => {
      this.data = event.detail.data;
      this.documents = this.data.documents;
      this._animate();
    });
  }

  render() {
    return html`
      <pb-paginate part="paginator" per-page="${this.perPage}" range="5"></pb-paginate>
      <table>
        <thead>
          <tr>
            <th scope="col" class="docName">Doc Id</th>
            <th scope="col" class="left">before</th>
            <th scope="col">hit</th>
            <th scope="col" class="right">after</th>
            <th scope="col" class="hit-count">hits</th>
          </tr>
        </thead>
        <tbody>
          ${this.documents.map(
            document => html`
              <tr>
                <td colspan="4" class="docName">
                  <a
                    href="${this.target}/${document.id}.xml?pattern=${this.pattern}&page=${document
                      .matches[0].page[0]}"
                    target="_blank"
                    >${document.id}</a
                  >
                </td>
                <td class="hit-count">
                  <span class="hit-count">${document.hits}</span>
                </td>
              </tr>
              ${document.matches.map(
                match => html`
                  <tr>
                    <td class="left" colspan="2">${match.left}</td>
                    <td class="hit">
                      <a
                        href="${this.target}/${document.id}.xml?pattern=${this.pattern}&match=${match
                          .match.words[0]}&page=${match.page[0]}"
                        target="_blank"
                        >${match.match.display}</a
                      >
                    </td>
                    <td class="right" colspan="2">${match.right}</td>
                  </tr>
                `,
              )}
            `,
          )}
        </tbody>
      </table>
    `;
  }

  async load() {
    if (!this.getEndpoint()) return;
    if (!this.pattern) return;
    let url = `${this.getEndpoint()}/api/blacklab/search?pattern=${this.pattern}&start=${
      this.first
    }&per-page=${this.perPage}`;
    if (this.doc) {
      url += `&doc=${this.doc}`;
    }
    if (this.sort) {
      url += `&sort=${this.sort}`;
    }
    await fetch(url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
    })
      .then(response => response.json())
      .then(data => {
        this.data = data;
        localStorage.setItem('pb-kwic-results', JSON.stringify(this.data));
        this.emitTo(
          'pb-results-received',
          {
            count: data.docs ? parseInt(data.docs, 10) : 0,
            start: data.start,
            params: data.params,
            data,
          },
          [],
        );
      })
      .catch(error => {
        alert(`Error retrieving remote content: ${error}`);
      });
  }

  _animate() {
    anime({
      targets: this.shadowRoot.querySelector('table'),
      opacity: [0, 1],
      duration: 200,
      delay: 200,
      easing: 'linear',
    });
  }
}

customElements.define('pb-blacklab-results', PbBlacklabResults);
