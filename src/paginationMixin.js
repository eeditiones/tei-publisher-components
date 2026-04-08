import { pbMixin } from './pb-mixin.js';
import { themableMixin } from './theming.js';
/**
 * @typedef {{label: number, class: 'active'|''}} Page
 */

/**
 * Abstraction for the behaviour of the pb-paginate component
 *
 * @param {typeof import('lit-element').LitElement} BaseClass
 */
export function paginationMixin(BaseClass) {
  /**
   * @augments BaseClass
   */
  class Pagination extends themableMixin(pbMixin(BaseClass)) {
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
         * The actual pages
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
          attribute: 'show-previous-next',
        },
      };
    }

    constructor() {
      super();
      /**
       * The total amount of results
       * @type {number}
       */
      this.total = 0;

      /**
       * The start of this page. 1-based
       * @type {number}
       */
      this.start = 1;

      /**
       * How many items per page
       * @type {number}
       */
      this.perPage = 10;

      /**
       * The current page
       * @type {number}
       */
      this.page = 1;

      /**
       * The total amount of pages
       * @type {number}
       */
      this.pageCount = 10;

      /**
       * The amount of pages to show
       * @type {number}
       */
      this.range = 5;

      /**
       * The actual pages
       * @type {Page[]}
       */
      this.pages = [];
      this.foundLabel = 'browse.items';

      /**
       * show or hide (i.e. generate) previous and next buttons,
       * default value is false, controls are not generated
       */
      this.showPreviousNext = false;
    }

    connectedCallback() {
      super.connectedCallback();

      this.subscribeTo('pb-results-received', this._refresh.bind(this));
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
        this.showPreviousNext,
      );
      /**
       * @type {Page[]}
       */
      const pages = [];
      const prevNextPages = []; // first item for previous control, second/last item for next control
      for (let i = lowerBound; i <= upperBound; i += 1) {
        pages.push({
          label: i,
          class: i === this.page ? 'active' : '',
        });
        if (!this.showPreviousNext) {
          continue;
        }
        // previous page if it's first page
        if (lowerBound === 1 && i === 1 && this.page === i) {
          prevNextPages.push({
            label: i,
            index: 0,
          });
        }
        // previous page
        if (i + 1 === this.page) {
          prevNextPages.push({
            label: i,
            index: pages.length - 1,
          });
        }
        // next page
        if (i - 1 === this.page) {
          prevNextPages.push({
            label: i,
            index: pages.length - 1,
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

    /**
     * Go to a page
     *
     * @param {Page} item
     * @param {number} index
     */
    _handleClick(item, index) {
      this.start = (this.pages[index].label - 1) * this.perPage + 1;
      ['pb-load', 'pb-paginate'].forEach(ev => {
        this.emitTo(ev, {
          params: {
            start: this.start,
            'per-page': this.perPage,
            page: index,
          },
        });
      });
    }

    /**
     * Go to the first page in the pagination
     */
    _handleFirst() {
      this.start = 1;
      ['pb-load', 'pb-paginate'].forEach(event => {
        this.emitTo(event, {
          params: {
            start: 1,
            'per-page': this.perPage,
            page: 0,
          },
        });
      });
    }

    /**
     * Go to the last page in the pagination
     */
    _handleLast() {
      this.start = (this.pageCount - 1) * this.perPage + 1;
      ['pb-load', 'pb-paginate'].forEach(event => {
        this.emitTo(event, {
          params: {
            start: this.start,
            'per-page': this.perPage,
            page: this.pageCount - 1,
          },
        });
      });
    }
  }

  return Pagination;
}
