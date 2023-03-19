import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";

/**
 * Display a pagination control from which the user can select a page to view
 * from a multi-page collection of resources. To determine the number of pages,
 * `pb-paginate` listens for the `pb-results-received` event emitted by `pb-load`.
 * If the user clicks on one of the page indicators, a `pb-load` event is emitted,
 * which should cause the connected `pb-load` element to refresh.
 *
 * @fires pb-load - Fires when user selects new page to show
 * @fires pb-results-received - When received, recalculates page ranges to display according to the parameters received
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
                reflect: true
            },
            /**
             * start page
             */
            start: {
                type: Number,
                reflect: true
            },
            /**
             * amount of entries per page
             */
            perPage: {
                type: Number,
                attribute: 'per-page'
            },
            /**
             * i18n key to use for looking up the message showing number of items in list
             * or fixed label to display
             */
            foundLabel: {
                type: String,
                attribute: 'found-label'
            },
            /**
             * the current page
             */
            page: {
                type: Number
            },
            /**
             * the amount of pages
             */
            pageCount: {
                type: Number,
                attribute: 'page-count'
            },
            /**
             * todo
             */
            range: {
                type: Number
            },
            /**
             * todo:
             */
            pages: {
                type: Array
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
            <span @click="${this._handleFirst}"><iron-icon icon="first-page"></iron-icon></span>
            ${this.pages.map((item, index) => html`<span class="${item.class}" @click="${() => this._handleClick(item, index)}">${item.label}</span>`)}
            <span @click="${this._handleLast}"><iron-icon icon="last-page"></iron-icon></span>

            <span class="found">${translate(this.foundLabel, { count: this.total })}</span>
        `;
    }

    static get styles() {
        return css`
            :host([total="0"]) {
                display: none;
            }

            :host {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            span {
                padding: 4px 8px;
                cursor: pointer;
            }

            .active {
                background-color: var(--pb-color-primary);
                color: var(--pb-color-inverse);
                border-radius: 50%;
                min-width: 1em;
                width: 1em;
                line-height: 1em;
                padding: .4em;
                text-align: center;

                box-shadow:  0 3px 4px 0 rgba(0, 0, 0, 0.14),
                             0 1px 8px 0 rgba(0, 0, 0, 0.12),
                             0 3px 3px -2px rgba(0, 0, 0, 0.4);
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
        let lowerBound = Math.max((this.page - Math.ceil(this.range / 2) + 1), 1);
        let upperBound = Math.min((lowerBound + this.range - 1), this.pageCount);
        lowerBound = Math.max((upperBound - this.range + 1), 1);
        console.log("<pb-paginate> start: %d, total: %d, perPage: %d, pageCount: %s, page: %d, lower: %d, upper: %d",
            start, total, this.perPage, this.pageCount, this.page, lowerBound, upperBound);
        const pages = [];
        for (let i = lowerBound; i <= upperBound; i++) {
            pages.push({
                label: i,
                "class": i === this.page ? "active" : ""
            });
        }
        this.pages = pages;
    }

    _refresh(ev) {
        this.start = Number(ev.detail.start);
        this.total = ev.detail.count;
        this._update(this.start, this.total);
    }

    _handleClick(item, index) {
        this.start = (this.pages[index].label - 1) * this.perPage + 1;
        ['pb-load', 'pb-paginate'].forEach((ev) => {
            this.emitTo(ev, {
                "params": {
                    "start": this.start,
                    "per-page": this.perPage,
                    "page": index
                }
            });
        });
    }

    _handleFirst(ev) {
        this.start = 1;
        ['pb-load', 'pb-paginate'].forEach((event) => {
            this.emitTo(event, {
                "params": {
                    "start": 1,
                    "per-page": this.perPage,
                    "page": 0
                }
            });
        });
    }

    _handleLast(ev) {
        this.start = (this.pageCount - 1) * this.perPage + 1;
        ['pb-load', 'pb-paginate'].forEach((event) => {
            this.emitTo(event, {
                "params": {
                    "start": this.start,
                    "per-page": this.perPage,
                    "page": this.pageCount - 1
                }
            });
        });
    }
}
customElements.define('pb-paginate', PbPaginate);
