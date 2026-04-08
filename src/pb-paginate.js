import { LitElement, html, css } from 'lit-element';
import { translate } from './pb-i18n.js';
import { paginationMixin } from './paginationMixin.js';

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
export class PbPaginate extends paginationMixin(LitElement) {
  static get styles() {
    return css`
      :host([total='0']) {
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
        min-width: fit-content;
        width: 1em;
        line-height: 1em;
        padding: 0.4em;
        text-align: center;

        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12),
          0 3px 3px -2px rgba(0, 0, 0, 0.4);
      }

      .found {
        padding-left: 0.5rem;
      }
    `;
  }

  render() {
    return html`
      <span @click="${this._handleFirst}"><iron-icon icon="first-page"></iron-icon></span>
      ${this.showPreviousNext
        ? html`<span
            @click="${() =>
              this._handleClick(this.prevNextPages[0].label, this.prevNextPages[0].index)}}"
            ><iron-icon icon="chevron-left"></iron-icon
          ></span>`
        : ``}
      ${this.pages.map(
        (item, index) =>
          html`<span class="${item.class}" @click="${() => this._handleClick(item, index)}"
            >${item.label}</span
          >`,
      )}
      ${this.showPreviousNext
        ? html`<span
            @click="${() =>
              this._handleClick(this.prevNextPages[1].label, this.prevNextPages[1].index)}"
            ><iron-icon icon="chevron-right"></iron-icon
          ></span>`
        : ``}
      <span @click="${this._handleLast}"><iron-icon icon="last-page"></iron-icon></span>

      <span class="found" part="count">${translate(this.foundLabel, { count: this.total })}</span>
    `;
  }
}
customElements.define('pb-paginate', PbPaginate);
