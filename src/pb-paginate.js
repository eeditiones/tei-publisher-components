import { LitElement, css, html, nothing } from 'lit';
import './pb-icon.js';
import { translate } from './pb-i18n.js';
import { themableMixin } from './theming.js';
import { pbMixin } from './pb-mixin.js';

/**
 * @typedef {{type: 'overflow'}} Overflow
 */

/**
 * @typedef {{type: 'page', label: number, class: 'active'|''}} Page
 */

/**
 * @typedef {Overflow | Page} PageOrOverflow
 */

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
export class PbPaginate extends themableMixin(pbMixin(LitElement)) {
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
       * default value is true, controls are generated
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
     * @type {PageOrOverflow[]}
     */
    this.pages = [];
    this.foundLabel = 'browse.items';

    this.showPreviousNext = true;
  }

  connectedCallback() {
    super.connectedCallback();

    this.subscribeTo('pb-results-received', this._refresh.bind(this));
    this._update(this.start, this.total);
  }

  _update(start, total) {
    if (!total || !start) {
      return;
    }
    this.pageCount = Math.ceil(total / this.perPage);
    this.page = Math.ceil(start / this.perPage);

    // If everything fits within range+2 slots, show all pages
    if (this.pageCount <= this.range + 2) {
      this.pages = Array.from({ length: this.pageCount }, (_, i) => ({
        type: 'page',
        label: i + 1,
        class: i + 1 === this.page ? 'active' : '',
      }));
      return;
    }

    // Total slots = range + 2: page 1 (fixed) + range middle slots + last page (fixed).
    // Middle slots hold a consecutive window plus up to 2 overflow markers.
    // Core window size when both overflows are present = range - 2.
    const coreSize = this.range - 2;

    // Center core window around current page within [2, pageCount-1]
    let winStart = this.page - Math.floor(coreSize / 2);
    let winEnd = winStart + coreSize - 1;

    if (winStart < 2) {
      winStart = 2;
      winEnd = winStart + coreSize - 1;
    }
    if (winEnd > this.pageCount - 1) {
      winEnd = this.pageCount - 1;
      winStart = Math.max(2, winEnd - coreSize + 1);
    }

    // Extend window when an overflow would hide ≤1 page, or reclaim freed overflow slot
    if (winStart === 2) {
      winEnd = Math.min(this.pageCount - 1, winEnd + 1);
    } else if (winStart === 3) {
      winStart = 2;
    } else if (winEnd === this.pageCount - 1) {
      winStart = Math.max(2, winStart - 1);
    } else if (winEnd === this.pageCount - 2) {
      winEnd = this.pageCount - 1;
    }

    /**
     * @type {Overflow}
     */
    const overflow = { type: 'overflow' };
    /** @type {PageOrOverflow[]} */
    const pages = [];
    pages.push({ type: 'page', label: 1, class: this.page === 1 ? 'active' : '' });
    if (winStart > 2) {
      pages.push(overflow);
    }
    for (let i = 0, l = winEnd - winStart + 1; i < l; i += 1) {
      pages.push({
        type: 'page',
        label: winStart + i,
        class: winStart + i === this.page ? 'active' : '',
      });
    }

    if (winEnd < this.pageCount - 1) {
      pages.push(overflow);
    }
    pages.push({
      type: 'page',
      label: this.pageCount,
      class: this.page === this.pageCount ? 'active' : '',
    });

    this.pages = pages;
  }

  _refresh(ev) {
    this.start = Number(ev.detail.start);
    this.total = ev.detail.count;
    this._update(this.start, this.total);
  }

  /**
   * Go to a page
   *
   * @param {number} item
   */
  _handleClick(item) {
    this.start = (item - 1) * this.perPage + 1;
    ['pb-load', 'pb-paginate'].forEach(ev => {
      this.emitTo(ev, {
        params: {
          start: this.start,
          'per-page': this.perPage,
          page: item,
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

      nav {
        display: flex;
        ul {
          display: flex;
          .pb-paginate__nav,
          .pb-paginate__overflow,
          .pb-paginate__page {
            display: inherit;
            flex: 1 0 auto;
            height: 2.5rem;
            justify-content: center;
            margin-left: 0.25rem;
            margin-right: 0.25rem;
            background: transparent;
            min-width: 2.5rem;

            &:focus-visible {
              outline: 2px solid var(--pb-color-primary);
              outline-offset: 2px;
            }

            a.active {
              border-radius: 50%;
              box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12),
                0 3px 3px -2px rgba(0, 0, 0, 0.4);
              background-color: var(--pb-color-primary);
              color: var(--pb-color-inverse);
            }

            &.pb-paginate__overflow span,
            a {
              /* Make them click areas nice and big */
              padding: 0.5rem;
              border-radius: 2.5rem;
              color: var(--pb-color-primary);
              display: inline-flex;
              align-items: center;
              text-decoration: none;
            }
          }
        }
        span {
          display: flex;
          align-items: center;
        }
      }

      .found {
        padding-left: 20px;
      }
    `;
  }

  render() {
    if (this.pages.length === 0) {
      return '';
    }

    const overflowPart = html`<li
      class="pb-paginate__overflow"
      aria-label="${translate('pagination.ellipsislabel')}"
    >
      <span>…</span>
    </li>`;

    return html`
      <nav aria-label="${translate('pagination.pagination')}">
        <ul>
          ${this.showPreviousNext
            ? html`<li
                class="pb-paginate__nav pb-paginate__nav-previous"
                style="${this.page === 1 ? 'visibility: hidden' : ''}"
              >
                <a
                  href="javascript:void(0);"
                  aria-label="${translate('pagination.previous')}"
                  @click="${() => this._handleClick(this.page - 1)}"
                  ><pb-icon slot="previous-icon" icon="chevron-left"></pb-icon>
                  <span><pb-i18n key="pagination.previous">Previous</pb-i18n></span>
                </a>
              </li>`
            : nothing}
          ${this.pages.map(item => {
            switch (item.type) {
              case 'overflow':
                return overflowPart;
              default:
                return html`<li class="pb-paginate__page">
                  <a
                    href="javascript:void(0);"
                    aria-label="${translate('pagination.page', { page: item.label })}"
                    class="${item.class}"
                    @click="${() => this._handleClick(item.label)}"
                  >
                    ${item.label}
                  </a>
                </li>`;
            }
          })}
          ${this.showPreviousNext
            ? html`<li
                class="pb-paginate__nav pb-paginate__nav_next"
                style="${
                  // Use visibility: hidden to make sure we still take space for this. Makes the layout shift less
                  this.page < this.pageCount ? '' : 'visibility: hidden'
                }"
              >
                <a
                  href="javascript:void(0);"
                  aria-label="${translate('pagination.next')}"
                  @click="${() => this._handleClick(this.page + 1)}"
                >
                  <span><pb-i18n key="pagination.next">Next</pb-i18n></span
                  ><pb-icon slot="previous-icon" icon="chevron-right"></pb-icon>
                </a>
              </li>`
            : nothing}
        </ul>
        <span class="found" part="count">${translate(this.foundLabel, { count: this.total })}</span>
      </nav>
    `;
  }
}
customElements.define('pb-paginate', PbPaginate);
