import { LitElement, html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { SearchResultService } from './search-result-service.js';
import { ParseDateService } from './parse-date-service.js';
import { pbMixin } from './pb-mixin.js';
import '@polymer/iron-ajax';
import '@polymer/iron-icons';
import '@polymer/paper-icon-button';
import { translate } from './pb-i18n.js';

/**
 * A timeline component to display time series data in a bar chart like view.
 *
 * Time series data can be displayed in one of 6 different scales:
 *
 * - by decade (10Y)
 * - by 5 years (5Y)
 * - by years (Y)
 * - by month (M)
 * - by week (W)
 * - by day (D)
 *
 * The endpoint is expected to return a JSON object. Each property should either be a date or the special
 * marker `?`, which indicates undated resources.
 * The value associated with each entry
 * should either correspond to a count of resources or an object with properties `count` and `info`.
 * `info` should be an array, containing HTML to be shown in a list within the tooltips.
 * Expected JSON:
 * ```javascript
 * {
 *  "1852-01-14": {
 *      "count": 1,
 *      "info": [
 *        "<a href='/briefe/B0977' part='tooltip-link'>Alfred Escher an Joseph Wolfgang von Deschwanden, Belvoir (Enge, Zürich), Mittwoch, 14. Januar 1852</a>"
 *     ]
 *   },
 * "1874-01-25": {
 *    "count": 3,
 *     "info": [
 *         "<a href='/briefe/B8140' part='tooltip-link'>Alfred Escher an Gustav von Mevissen, Zürich, Sonntag, 25. Januar 1874</a>",
 *         "<a href='/briefe/B8139' part='tooltip-link'>Alfred Escher an Theodor Weishaupt, Zürich, Sonntag, 25. Januar 1874</a>",
 *         "<a href='/briefe/B8143' part='tooltip-link'>Alfred Escher an Ludwig August Parcus, Zürich, Sonntag, 25. Januar 1874</a>"
 *     ]
 *  }
 * }
 * ```
 * Sample Usage:
 * ```xml
 * <pb-timeline url="api/timeline" scopes="['D', 'M', 'Y', '5Y', '10Y']"
 *      resettable=""
 *      subscribe="docs" emit="timeline">
 *   <span slot="label">Angezeigter Zeitraum: </span>
 * </pb-timeline>
 * ```
 * See https://www.briefedition.alfred-escher.ch/briefe/ for a running sample. The source code of the webpage is here: https://github.com/stazh/briefedition-escher. Relevant files are:
 * - [templates/people.html](https://github.com/stazh/briefedition-escher/blob/master/templates/people.html#L91) - usage of pb-timeline
 * - [modules/custom-api.json](https://github.com/stazh/briefedition-escher/blob/master/modules/custom-api.json#L1080) - `/api/timeline` endpoint delivering required JSON object
 *
 * @slot label - Inserted before the label showing the currently displayed time range
 *
 * @fires pb-timeline-date-changed - Triggered when user clicks on a single entry
 * @fires pb-timeline-daterange-changed - Triggered when user selects a range of entries
 * @fires pb-timeline-reset-selection - Requests that the timeline is reset to initial state
 * @fires pb-timeline-loaded - Timeline was loaded
 *
 * @cssprop --pb-timeline-height
 * @cssprop --pb-timeline-padding
 * @cssprop --pb-timeline-color-highlight
 * @cssprop --pb-timeline-color-light
 * @cssprop --pb-timeline-color-dark
 * @cssprop --pb-timeline-color-selected
 * @cssprop --pb-timeline-color-bin
 * @cssprop --pb-timeline-title-font-size
 * @cssprop --pb-timeline-tooltip-font-size
 *
 * @csspart label
 * @csspart tooltip
 * @csspart title
 */
export class PbTimeline extends pbMixin(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      .hidden {
        visibility: hidden;
      }
      .draggable {
        cursor: grab;
        user-select: none;
        padding-right: 30px !important;
      }
      .wrapper {
        margin: 0 auto;
        padding: var(--pb-timeline-padding);
        width: auto;
        height: var(--pb-timeline-height, 80px);
        display: flex;
        position: relative;
      }
      .wrapper.empty {
        display: none;
      }

      .label {
        display: flex;
        align-items: center;
      }
      .bin-container {
        cursor: crosshair;
        margin-top: 20px;
        min-width: var(--pb-timeline-min-width, 14px);
        max-width: var(--pb-timeline-max-width, 20px);
        flex-grow: 1;
        flex-basis: 0;
        display: flex;
        align-items: flex-end;
        // justify-content: center;
        position: relative;
      }
      .bin-container.border-left,
      .bin-container.unknown {
        border-left: 1px solid rgba(0, 0, 0, 0.4);
      }
      .bin-container.unknown {
        margin-left: 40px;
      }
      .bin-container:hover .bin {
        background-color: var(--pb-timeline-color-highlight, #3f52b5);
      }
      .bin-container.selected > .bin {
        background-color: var(--pb-timeline-color-highlight, #3f52b5);
      }
      .bin-container.selected p {
        font-weight: bold;
      }
      .bin-container.white {
        background-color: var(--pb-timeline-color-light, white);
      }
      .bin-container.grey {
        background-color: var(--pb-timeline-color-dark, #f1f1f1);
      }
      .bin-container.selected {
        background-color: var(--pb-timeline-color-selected, #e6eaff) !important;
      }
      .bin {
        width: 80%;
        background-color: var(--pb-timeline-color-bin, #ccc);
        border-radius: 2px;
        user-select: none;
      }
      p.bin-title {
        pointer-events: none;
        position: absolute;
        top: 5px;
        z-index: 10;
        margin: 0;
        font-size: var(--pb-timeline-title-font-size, 12px);
        user-select: none;
        white-space: nowrap;
      }
      p.bin-title.months {
        top: -1px;
      }
      p.bin-title.weeks {
        top: 3px;
      }
      p.bin-title.days {
        top: -1px;
      }
      p.bin-title.rotated {
        transform: rotate(-90deg);
      }
      .bins-title {
        cursor: auto;
        font-weight: normal !important;
        margin: 0;
        white-space: nowrap;
        z-index: 200;
        position: absolute;
        left: 0;
        top: -20px;
        font-size: var(--pb-timeline-title-font-size, 12px);
        background-color: var(--pb-timeline-background-color-title, #535353);
        color: var(--pb-timeline-color-title, #ffffff);
        padding: 2px 4px;
        border-radius: 5px;
        height: var(--pb-timeline-title-font-size, 12px);
        line-height: var(--pb-timeline-title-font-size, 12px);
        user-select: none;
      }
      .info {
        display: none;
      }

      /* TOOLTIP */
      #tooltip {
        display: inline-block;
        position: absolute;
        min-width: var(--pb-timeline-tooltip-min-width, 200px);
        font-size: var(--pb-timeline-tooltip-font-size, 11px);
        line-height: 1.25;
        background: var(--pb-timeline-background-color-title, #535353);
        color: var(--pb-timeline-color-title, #ffffff);
        text-align: left;
        border-radius: 6px;
        padding: 5px 10px;
        top: var(--pb-timeline-height, 80px);
        left: 0;
        z-index: 1000;
      }
      #tooltip ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      #tooltip-close {
        position: absolute;
        top: -13px;
        right: -10px;
      }
      #tooltip::after {
        /* small triangle that points to top */
        content: '';
        position: absolute;
        bottom: 100%;
        left: 10px;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent black transparent;
      }
      #tooltip.right::after {
        right: 10px;
        left: auto;
      }
      /* pure css close button for tooltip */
      .close {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 50px;
        overflow: hidden;
        transform: scale(0.25);
      }
      .close.rounded.black {
        cursor: pointer;
      }
      .close::before,
      .close::after {
        content: '';
        position: absolute;
        height: 2px;
        width: 100%;
        top: 50%;
        left: 0;
        margin-top: -1px;
        background: #fff;
      }
      .close::before {
        transform: rotate(45deg);
      }
      .close::after {
        transform: rotate(-45deg);
      }
      .close.thick::before,
      .close.thick::after {
        height: 4px;
        margin-top: -2px;
      }
      .close.black::before,
      .close.black::after {
        height: 8px;
        margin-top: -4px;
      }
      .close.rounded::before,
      .close.rounded::after {
        border-radius: 5px;
      }
    `;
  }

  static get properties() {
    return {
      ...super.properties,
      /**
       * start date for timeline to display
       */
      startDate: {
        type: String,
        reflect: true,
        attribute: 'start-date',
      },
      /**
       * endDate for timeline to display
       */
      endDate: {
        type: String,
        reflect: true,
        attribute: 'end-date',
      },
      /**
       * The scope for the timeline. Must be one of the pre-defined scopes.
       * If not set, the component automatically tries to determine the best scope fitting the
       * given time series.
       */
      scope: {
        type: String,
      },
      /**
       * The scopes to consider for automatic scoping.
       *
       * Defaults to ["D", "W", "M", "Y", "5Y", "10Y"]
       */
      scopes: {
        type: Array,
      },
      maxInterval: {
        type: Number,
        attribute: 'max-interval',
      },
      /**
       * Endpoint to load timeline data from. Expects response to be an
       * object with key value pairs for (date, hits).
       *
       * Will be reloaded whenever 'start-date' or 'end-date' attributes change.
       */
      url: {
        type: String,
      },
      /**
       * If set, data will be retrieved automatically on first load.
       */
      auto: {
        type: Boolean,
      },
      resettable: {
        type: Boolean,
      },
      _language: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.maxHeight = 80; // in pixels, has to be identical to the max-height specified in CSS
    this.multiplier = 0.75; // max percentage of bin compared to the bin-conainer. Set 1 for full height (not recommended)
    this.mousedown = false;
    this.startDate = '';
    this.endDate = '';
    this.scope = '';
    this.scopes = ['D', 'W', 'M', 'Y', '5Y', '10Y'];
    this.maxInterval = 60;
    this.url = '';
    this.auto = false;
    this.resettable = false;
    this._language = 'en';
    this._resetSelectionProperty();
  }

  connectedCallback() {
    super.connectedCallback();

    this.subscribeTo('pb-results-received', () => {
      const loader = this.shadowRoot.getElementById('loadData');
      const url = this.toAbsoluteURL(this.url, this.getEndpoint());
      loader.url = url;
      loader.generateRequest();
    });
    this.subscribeTo('pb-i18n-update', ev => {
      this._language = ev.detail.language;
    });
  }

  firstUpdated() {
    this.bins = this.shadowRoot.querySelectorAll('.bin-container');
    this.tooltip = this.shadowRoot.getElementById('tooltip');

    // global mouseup event
    document.addEventListener('mouseup', () => {
      this._mouseUp();
    });
    // pb-timeline-daterange-changed event:
    // changes daterange selection (marks bins on histogram)
    // is triggered by the componeent itself but can be also triggered
    // from outside by another component
    document.addEventListener('pb-timeline-daterange-changed', event => {
      const { startDateStr } = event.detail;
      const { endDateStr } = event.detail;
      if (this._fullRangeSelected(startDateStr, endDateStr)) {
        // do not mark the whole histogram, reset selection instead
        console.log('_fullRangeSelected() is true');
        this.resetSelection();
        return;
      }
      this.select(startDateStr, endDateStr);
    });
    // pb-timeline-reset-selection:
    // resets selection (remove marking of all selected bins)
    // is triggered by the componeent itself but can be also triggered
    // from outside by another component
    document.addEventListener('pb-timeline-reset-selection', () => {
      this.resetSelection();
      this._hideTooltip();
    });
  }

  /**
   * checks if 'scope' has changed and re-applies dataset accordingly
   *
   * @param changedProperties
   */
  updated(changedProperties) {
    if (changedProperties.has('scope')) {
      if (this.searchResult) {
        if (this.scopes.includes(this.scope)) {
          this.setData(this.searchResult.export(this.scope));
        } else {
          console.error('unknown scope ', this.scope);
        }
      }
    }
  }

  setData(dataObj) {
    this.dataObj = dataObj;
    this.maxValue = Math.max(...this.dataObj.data.map(binObj => binObj.value));
    this.requestUpdate();
    this.updateComplete.then(() => {
      this.bins = this.shadowRoot.querySelectorAll('.bin-container');
      this.resetSelection();
      this._resetTooltip();
    });
  }

  get label() {
    if (!this.dataObj || this.dataObj.data.length === 0) {
      return '';
    }
    if (this.dataObj.data.length === 1) {
      return this.dataObj.data[0].category;
    }
    return `${this.dataObj.data[0].selectionStart} – ${
      this.dataObj.data[this.dataObj.data.length - 1].selectionEnd
    }`;
  }

  getSelectedStartDateStr() {
    return this.shadowRoot.querySelectorAll('.bin-container.selected')[0].dataset.selectionstart;
  }

  getSelectedEndDateStr() {
    const selectedBins = this.shadowRoot.querySelectorAll('.bin-container.selected');
    return selectedBins[selectedBins.length - 1].dataset.selectionend;
  }

  getSelectedCategories() {
    const selectedBins = this.shadowRoot.querySelectorAll('.bin-container.selected');
    const categories = [];
    selectedBins.forEach(bin => categories.push(bin.dataset.category));
    return categories;
  }

  getSelectedItemCount() {
    const selectedBins = this.shadowRoot.querySelectorAll('.bin-container.selected');
    let count = 0;
    selectedBins.forEach(bin => {
      count += parseInt(bin.dataset.value);
    });
    return count;
  }

  resetSelection() {
    this.bins.forEach(bin => {
      bin.classList.remove('selected');
    });
    this._resetSelectionProperty();
    this._hideTooltip();
  }

  select(startDateStr, endDateStr) {
    this.bins.forEach(bin => {
      if (bin.dataset.isodatestr >= startDateStr && bin.dataset.isodatestr <= endDateStr) {
        bin.classList.add('selected');
      } else {
        bin.classList.remove('selected');
      }
    });
    this._displayTooltip();
    this._showtooltipSelection();
  }

  _fullRangeSelected(startDateStr, endDateStr) {
    const matchingStartDate = (startDateStr = this.bins[0].dataset.isodatestr);
    const matchingEndDate = endDateStr === this.bins[this.bins.length - 1].dataset.isodatestr;
    return matchingStartDate && matchingEndDate;
  }

  _mouseDown(event) {
    this.resetSelection();
    this.mousedown = true;
    this.selection.start = this._getMousePosition(event).x;
    this._applySelectionToBins();
  }

  _mouseUp() {
    if (this.mousedown) {
      this.mousedown = false;
      const start = this.getSelectedStartDateStr();
      const end = this.getSelectedEndDateStr();
      if (start) {
        const startDateStr = new ParseDateService().run(start);
        const endDateStr = new ParseDateService().run(end);
        const itemCount = this.getSelectedItemCount();
        this._dispatchTimelineDaterangeChangedEvent(
          startDateStr,
          endDateStr,
          this.getSelectedCategories(),
          itemCount,
        );
      }
    }
  }

  _mouseMove(event) {
    if (this.mousedown) {
      this._brushing(event);
      this._showtooltipSelection();
    } else if (this.selection.start === undefined) {
      // no selection currently made
      this._showtooltip(event);
    }
  }

  _mouseenter() {
    if (this.dataObj) {
      // if data is loaded
      this._displayTooltip();
    }
  }

  _getMousePosition(mouseEvent) {
    const rect = this.shadowRoot.querySelector('.wrapper').getBoundingClientRect();
    const x = mouseEvent.clientX - rect.left + 1; // x position within the element.
    const y = mouseEvent.clientY - rect.top + 1; // y position within the element.
    return { x, y };
  }

  _brushing(event) {
    this.selection.end = this._getMousePosition(event).x;
    this._applySelectionToBins();
  }

  _dispatchTimelineDaterangeChangedEvent(startDateStr, endDateStr, categories, itemCount) {
    if (startDateStr === '????-??-??') {
      this.emitTo('pb-timeline-date-changed', {
        startDateStr: null,
        endDateStr: null,
        categories: ['?'],
        count: itemCount,
      });
    } else if (startDateStr === endDateStr) {
      if (this.dataObj.scope !== 'D') {
        this.emitTo('pb-timeline-daterange-changed', {
          startDateStr,
          endDateStr: this.searchResult.getEndOfRangeDate(this.dataObj.scope, endDateStr),
          scope: this.dataObj.scope,
          categories,
          count: itemCount,
          label: this.label,
        });
      } else {
        this.emitTo('pb-timeline-date-changed', {
          startDateStr,
          endDateStr: null,
          scope: this.dataObj.scope,
          categories,
          count: itemCount,
          label: this.label,
        });
      }
    } else {
      this.emitTo('pb-timeline-daterange-changed', {
        startDateStr,
        endDateStr,
        categories,
        scope: this.dataObj.scope,
        count: itemCount,
        label: this.label,
      });
    }
  }

  _dispatchPbTimelineResetSelectionEvent() {
    this.emitTo('pb-timeline-reset-selection');
  }

  _showtooltip(event) {
    const interval = this._getElementInterval(event.currentTarget);
    let offset;
    if (interval[0] < interval[2]) {
      offset = Math.round((interval[0] + interval[1]) / 2 - 10);
      this.tooltip.classList.remove('right');
    } else {
      offset = Math.round((interval[0] + interval[1]) / 2 - this.tooltip.offsetWidth) + 10;
      this.tooltip.classList.add('right');
    }
    this.tooltip.style.left = `${offset}px`;
    const datestr = event.currentTarget.dataset.tooltip;
    const value = this._numberWithCommas(event.currentTarget.dataset.value);
    const info = event.currentTarget.querySelector('.info');
    this.tooltip.querySelector(
      '#tooltip-text',
    ).innerHTML = `<div><strong>${datestr}</strong>: ${value}</div><ul>${
      info ? info.innerHTML : ''
    }</ul>`;
  }

  _showtooltipSelection() {
    const selectedBins = this._getSelectedBins();
    const intervalStart = this._getElementInterval(selectedBins[0])[0]; // get first selected element left boundary
    const intervalEnd = this._getElementInterval(selectedBins[selectedBins.length - 1])[1]; // get last selected element right boundary
    const interval = [intervalStart, intervalEnd];
    const label = `${selectedBins[0].dataset.selectionstart} - ${
      selectedBins[selectedBins.length - 1].dataset.selectionend
    }`;
    const value = selectedBins.map(bin => Number(bin.dataset.value)).reduce((a, b) => a + b);
    const valueFormatted = this._numberWithCommas(value);
    this.tooltip.querySelector(
      '#tooltip-text',
    ).innerHTML = `<strong>${label}</strong>: ${valueFormatted}`;
    this.tooltip.querySelector('#tooltip-close').classList.remove('hidden');
    this.tooltip.classList.add('draggable');
    const offset = Math.round((interval[0] + interval[1]) / 2 - this.tooltip.offsetWidth / 2);
    this.tooltip.style.left = `${offset}px`;
  }

  _resetTooltip() {
    this._hideTooltip();
    this.tooltip.style.left = '-1000px';
    this.tooltip.querySelector('#tooltip-text').innerHTML = '';
  }

  _hideTooltip() {
    if (this.selection.start === undefined) {
      this.tooltip.classList.add('hidden');
      this.tooltip.classList.remove('draggable');
      this.tooltip.querySelector('#tooltip-close').classList.add('hidden');
    }
  }

  _displayTooltip() {
    this.tooltip.classList.remove('hidden');
  }

  _getElementInterval(nodeElement) {
    const rect = this.shadowRoot.querySelector('.wrapper').getBoundingClientRect();
    const bin = nodeElement;
    const interval = [
      bin.getBoundingClientRect().x,
      bin.getBoundingClientRect().x + bin.getBoundingClientRect().width,
    ];
    const x1 = interval[0] - rect.left + 1; // x position within the element.
    const x2 = interval[1] - rect.left + 1; // x position within the element.
    return [x1, x2, rect.width / 2];
  }

  _getSelectionInterval() {
    return [this.selection.start, this.selection.end].sort((a, b) => a - b);
  }

  _getSelectedBins() {
    return Array.prototype.slice
      .call(this.bins)
      .filter(binContainer => binContainer.classList.contains('selected'));
  }

  _resetSelectionProperty() {
    this.selection = {
      start: undefined,
      end: undefined,
    };
  }

  _applySelectionToBins() {
    const selectionInterval = this._getSelectionInterval();
    this.bins.forEach(bin => {
      const elInterval = this._getElementInterval(bin);
      // if (this.intervalsOverlapping(elInterval, selectionInterval)) {
      if (this._areOverlapping(elInterval, selectionInterval)) {
        bin.classList.add('selected');
      } else {
        bin.classList.remove('selected');
      }
    });
  }

  _numberWithCommas(input) {
    return new Intl.NumberFormat(this._language, { style: 'decimal' }).format(input);
  }

  _areOverlapping(A, B) {
    // check if 2 intervals are overlapping
    return B[0] < A[0] ? B[1] > A[0] : B[0] < A[1];
  }

  render() {
    return html`
      <div class="label" part="label">
        <span class="label"><slot name="label"></slot>${this.label}</span>
        ${this.resettable
          ? html`
              <paper-icon-button
                id="clear"
                icon="icons:clear"
                title="${translate('timeline.clear')}"
                @click="${this._dispatchPbTimelineResetSelectionEvent}"
              ></paper-icon-button>
            `
          : null}
      </div>
      <div
        class="wrapper ${!this.dataObj || this.dataObj.data.length <= 1 ? 'empty' : ''}"
        @mouseenter="${this._mouseenter}"
        @mouseleave="${this._hideTooltip}"
      >
        ${this.dataObj ? this.renderBins() : ''} ${this.renderTooltip()}
        <iron-ajax
          id="loadData"
          verbose
          handle-as="json"
          method="get"
          with-credentials
          @response="${this._handleResponse}"
          url="${this.url}?start=${this.startDate}&end=${this.endDate}"
          ?auto="${this.auto}"
        ></iron-ajax>
      </div>
    `;
  }

  renderTooltip() {
    return html`
      <div id="tooltip" class="hidden" part="tooltip">
        <div id="tooltip-text"></div>
        <div
          id="tooltip-close"
          class="hidden"
          @click="${this._dispatchPbTimelineResetSelectionEvent}"
        >
          <span class="close rounded black"></span>
        </div>
      </div>
    `;
  }

  renderBins() {
    return html`
      ${this.dataObj.data.map(
        (binObj, indx) => html`
          <div
            class="bin-container ${binObj.seperator ? 'border-left' : ''}
            ${indx % 2 === 0 ? 'grey' : 'white'} ${binObj.category === '?' ? 'unknown' : ''}"
            data-tooltip="${binObj.tooltip}"
            data-category="${binObj.category}"
            data-selectionstart="${binObj.selectionStart}"
            data-selectionend="${binObj.selectionEnd}"
            data-isodatestr="${binObj.dateStr}"
            data-datestr="${binObj.dateStr}"
            data-value="${binObj.value}"
            @mousemove="${this._mouseMove}"
            @mousedown="${this._mouseDown}"
          >
            <div
              class="bin"
              style="height: ${(binObj.value / this.maxValue) * this.maxHeight * this.multiplier}px"
            ></div>
            <p
              class="bin-title
              ${this.dataObj.binTitleRotated ? 'rotated' : ''}
              ${this.scope}"
            >
              ${binObj.binTitle ? binObj.binTitle : ''}
            </p>
            ${binObj.title ? html` <p class="bins-title" part="title">${binObj.title}</p> ` : ''}
            ${this.renderInfo(binObj)}
          </div>
        `,
      )}
    `;
  }

  renderInfo(binObj) {
    if (binObj.info && binObj.info.length > 0 && binObj.info.length <= 10) {
      return html`
        <ul class="info">
          ${binObj.info.map(info => html`<li>${unsafeHTML(info)}</li>`)}
        </ul>
      `;
    }
    return null;
  }

  async _handleResponse() {
    await this.updateComplete;
    const loader = this.shadowRoot.getElementById('loadData');
    const data = loader.lastResponse;

    let newJsonData = {};
    if (this.startDate && this.endDate) {
      Object.keys(data)
        .filter(key => key >= this.startDate && key < this.endDate)
        .forEach(key => {
          newJsonData[key] = data[key];
        });
    } else {
      newJsonData = data;
    }
    this.searchResult = new SearchResultService(newJsonData, this.maxInterval, this.scopes);
    this.setData(this.searchResult.export(this.scope));
    this.emitTo('pb-timeline-loaded', {
      value: true,
      label: this.label,
    });
  }
}

customElements.define('pb-timeline', PbTimeline);
