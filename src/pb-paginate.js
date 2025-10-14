import { LitElement, html, css, nothing } from 'lit';
import { pbMixin } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import './pb-icon.js';

/**
 * Display a pagination control from which the user can select a page to view
 * from a multi-page collection of resources. To determine the number of pages,
 * `pb-paginate` listens for the `pb-results-received` event emitted by `pb-load`.
 * If the user clicks on one of the page indicators, a `pb-load` event is emitted,
 * which should cause the connected `pb-load` element to refresh.
 *
 * @fires pb-load - Fires when user selects new page to show
 * @fires pb-paginate - Fires when user selects new page to show
 * @fires pb-results-received - When received, recalculates page ranges to display according to the parameters received
 * @csspart count - the span displaying the number of items
 */
export class PbPaginate extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      total: { type: Number, reflect: true },
      start: { type: Number, reflect: true },
      perPage: { type: Number, attribute: 'per-page' },
      foundLabel: { type: String, attribute: 'found-label' },
      page: { type: Number },
      pageCount: { type: Number, attribute: 'page-count', reflect: true },
      range: { type: Number },
      pages: { type: Array },
    };
  }

  constructor() {
    super();
    this.total = 0;
    this.start = 1;
    this.perPage = 10;
    this.page = 1;
    this.pageCount = 10;
    this.range = 5;
    this.pages = [];
    this.foundLabel = 'browse.items';
  }

  connectedCallback() {
    super.connectedCallback();
    this.subscribeTo('pb-results-received', this._refresh.bind(this));
  }

  render() {
    return html`
      <button
        type="button"
        class="pb-paginate__nav"
        data-page="first"
        @click=${this._handleFirst}
        aria-label=${translate('paginate.first')}
      >
        <pb-icon icon="chevron-left"></pb-icon>
      </button>
      ${this.pages.map(
        (item, index) => html`
          <button
            type="button"
            class="pb-paginate__page ${item.class}"
            @click=${() => this._handleClick(item, index)}
            aria-current=${item.class === 'active' ? 'page' : nothing}
          >
            ${item.label}
          </button>
        `,
      )}
      <button
        type="button"
        class="pb-paginate__nav"
        data-page="last"
        @click=${this._handleLast}
        aria-label=${translate('paginate.last')}
      >
        <pb-icon icon="chevron-right"></pb-icon>
      </button>

      <span class="found" part="count">${translate(this.foundLabel, { count: this.total })}</span>
    `;
  }

  static get styles() {
    return css`
      :host([total='0']) {
        display: none;
      }

      :host {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .pb-paginate__nav,
      .pb-paginate__page {
        padding: 4px 8px;
        cursor: pointer;
        border: none;
        background: transparent;
        color: inherit;
        font: inherit;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .pb-paginate__page.active {
        background-color: var(--pb-color-primary);
        color: var(--pb-color-inverse);
        border-radius: 50%;
        min-width: 1em;
        width: 1em;
        line-height: 1em;
        padding: 0.4em;
        text-align: center;
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12),
          0 3px 3px -2px rgba(0, 0, 0, 0.4);
      }

      .pb-paginate__page:focus-visible,
      .pb-paginate__nav:focus-visible {
        outline: 2px solid var(--pb-color-primary);
        outline-offset: 2px;
      }

      .found {
        padding-left: 20px;
      }
    `;
  }

  _update(start, total) {
    if (!total || !start) {
      return;
    }
    this.pageCount = Math.ceil(total / this.perPage);
    this.page = Math.ceil(start / this.perPage);
    let lowerBound = Math.max(this.page - Math.ceil(this.range / 2) + 1, 1);
    const upperBound = Math.min(lowerBound + this.range - 1, this.pageCount);
    lowerBound = Math.max(upperBound - this.range + 1, 1);

    const pages = [];
    for (let i = lowerBound; i <= upperBound; i++) {
      pages.push({
        label: i,
        class: i === this.page ? 'active' : '',
      });
    }
    this.pages = pages;
  }

  _refresh(ev) {
    this.start = Number(ev.detail.start);
    this.total = ev.detail.count;
    this._update(this.start, this.total);
  }

  _handleClick(_item, index) {
    this.start = (this.pages[index].label - 1) * this.perPage + 1;
    for (const ev of ['pb-load', 'pb-paginate']) {
      this.emitTo(ev, {
        params: {
          start: this.start,
          'per-page': this.perPage,
          page: index,
        },
      });
    }
  }

  _handleFirst() {
    this.start = 1;
    for (const ev of ['pb-load', 'pb-paginate']) {
      this.emitTo(ev, {
        params: {
          start: 1,
          'per-page': this.perPage,
          page: 0,
        },
      });
    }
  }

  _handleLast() {
    this.start = (this.pageCount - 1) * this.perPage + 1;
    for (const ev of ['pb-load', 'pb-paginate']) {
      this.emitTo(ev, {
        params: {
          start: this.start,
          'per-page': this.perPage,
          page: this.pageCount - 1,
        },
      });
    }
  }
}
customElements.define('pb-paginate', PbPaginate);
