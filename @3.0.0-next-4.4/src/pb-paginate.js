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
      /**
       * total number of pages
       */
      total: {
        type: Number,
        reflect: true,
      },
      /**
       * start page
       */
      start: {
        type: Number,
        reflect: true,
      },
      /**
       * amount of entries per page
       */
      perPage: {
        type: Number,
        attribute: 'per-page',
      },
      /**
       * i18n key to use for looking up the message showing number of items in list
       * or fixed label to display
       */
      foundLabel: {
        type: String,
        attribute: 'found-label',
      },
      /**
       * the current page
       */
      page: {
        type: Number,
      },
      /**
       * the amount of pages needed for all items,
       * calculated from total / perPage
       */
      pageCount: {
        type: Number,
        attribute: 'page-count',
      },
      /**
       * the amount of page numbers shown within the component
       */
      range: {
        type: Number,
      },
      /**
       * todo:
       */
      pages: {
        type: Array,
      },
      /**
       * show or hide (i.e. generate) previous and next buttons,
       * default value is false, controls are not generated
       */
      showPreviousNext: {
        type: Boolean,
        attribute: 'show-previous-next'
      }
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
        min-width: fit-content;
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
    console.log(
      '<pb-paginate> start: %d, total: %d, perPage: %d, pageCount: %s, page: %d, lower: %d, upper: %d, range: %d, show-previous-next: %s',
      start,
      total,
      this.perPage,
      this.pageCount,
      this.page,
      lowerBound,
      upperBound,
      this.range, 
      this.showPreviousNext
    );
    const pages = [];
    const prevNextPages = []; //first item for previous control, second/last item for next control
    for (let i = lowerBound; i <= upperBound; i++) {
      pages.push({
        label: i,
        class: i === this.page ? 'active' : '',
      });
      if(!this.showPreviousNext) continue;
      //previous page if it's first page
      if(lowerBound === 1 && i === 1 && this.page === i) {
        prevNextPages.push({
          label: i,
          index: 0
        });
      }
      //previous page
      if(i + 1 === this.page) {
        prevNextPages.push({
          label: i,
          index: pages.length - 1
        });
      }
      //next page
      if(i - 1 === this.page) {
        prevNextPages.push({
          label: i,
          index: pages.length - 1
        });
      }
    }
    this.pages = pages;
    this.prevNextPages = prevNextPages;
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
