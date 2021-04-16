import { LitElement, html, css } from 'lit-element';
import { SearchResultService } from "./search-result-service.js";
import { ParseDateService } from "./parse-date-service.js";
import '@polymer/iron-ajax';

/**
* A timeline component that displays a barchart for search results
* and has 6 different scaling settings (scopes)
* - Decades (10Y)
* - 5 Years (5Y)
* - Years (Y)
* - Months (M)
* - Weeks (W)
* - Days (D)
*
* Features
* - brushing / selection of subdata
* - reset selection
* - tooltip on hover and over selection
*
* Public methods
*   setData()
*   getSelectedInterval();
*   getSelectedStartDateStr()
*   getSelectedEndDateStr()
*   select(startDatetr, EndDateStr)
*   resetSelection()
*
* Public Events
*   pb-timeline-daterange-changed
*   pb-timeline-reset-selection
*/
const scopes = ['D','W','M','Y','5Y','10Y'];

export class PbTimeline extends LitElement {


    static get styles() {
    return css`
      :host{
        display:block;
        margin-top:20px;
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
        max-width:100vw;
        overflow-Y:hidden;
        overflow-x:auto;
        margin: 0 auto;
        width: auto;
        height: 80px;
        display: flex;
        // justify-content: center;
        position: relative;
      }
      .bin-container {
        cursor: crosshair;
        min-width: var(--pb-timeline-max-width, 14px);
        max-width: var(--pb-timeline-max-width, 20px);
        flex-grow: 1;
        flex-basis: 0;
        display: flex;
        align-items: flex-end;
        // justify-content: center;
        position: relative;
      }
      .bin-container.border-left {
        border-left: 1px solid rgba(0,0,0,0.4);
      }
      .bin-container:hover .bin {
        background-color: #3f52b5;
      }
      .bin-container.selected > .bin {
        background-color: #3f52b5;
      }
      .bin-container.selected p {
        font-weight: bold;
      }
      .bin-container.white {
        background-color: white;
      }
      .bin-container.grey {
        background-color: #f1f1f1;
      }
      .bin-container.selected {
        background-color: #e6eaff !important;
      }
      .bin {
        width: 80%;
        background-color: #ccc;
        border-radius: 2px;
        user-select: none;
      }
      p.bin-title {
        pointer-events: none;
        position: absolute;
        top: 5px;
        font-size: 10px;
        z-index: 10;
        margin: 0;
        font-size: 12px;
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
        font-size: 12px;
        background-color: #535353;
        color: #ffffff;
        padding: 2px 4px;
        border-radius: 5px;
        height: 12px;
        line-height: 12px;
        user-select: none;
      }
      /* TOOLTIP */
      #tooltip {
        display: inline-block;
        white-space: nowrap;
        height: 15px;
        position: absolute;
        font-size: 11px;
        line-height: 15px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 10px;
        top: 85px;
        left: 0;
      }
      #tooltip-close {
        position: absolute;
        top: -13px;
        right: -10px;
      }
      #tooltip::after { /* small triangle that points to top */
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent black transparent;
      }
      /* pure css close button for tooltip */
      .close{
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
      .close::before, .close::after {
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
      .close.thick::before, .close.thick::after {
        height: 4px;
        margin-top: -2px;
      }
      .close.black::before, .close.black::after {
        height: 8px;
        margin-top: -4px;
      }
      .close.rounded::before, .close.rounded::after {
        border-radius: 5px;
      }
    `;
  }

    static get properties() {
        return {
            startDate:{
                type:String,
                attribute: 'start-date'
            },
            endDate: {
                type: String,
                attribute: 'end-date'
            },
            scope:{
                type: String
            },
            url:{
                type: String
            }
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
    this.url = '';
    this._resetSelectionProperty();
  }

  firstUpdated() {
    this.bins = this.shadowRoot.querySelectorAll(".bin-container");
    this.tooltip = this.shadowRoot.getElementById("tooltip");
    // load data event
/*
    document.addEventListener("pb-timeline-data-loaded", e => {
      this.searchResult = new SearchResultService(e.detail.jsonData);
      this.setData(this.searchResult.export());
    })
*/
    // global mouseup event
    document.addEventListener("mouseup", () => {
      this._mouseUp();
    })
    // pb-timeline-daterange-changed event:
    // changes daterange selection (marks bins on histogram)
    // is triggered by the componeent itself but can be also triggered
    // from outside by another component
    document.addEventListener("pb-timeline-daterange-changed", (event) => {
      const startDateStr = event.detail.startDateStr;
      const endDateStr = event.detail.endDateStr;
      if (this._fullRangeSelected(startDateStr, endDateStr)){
        // do not mark the whole histogram, reset selection instead
        console.log("_fullRangeSelected() is true");
        this.resetSelection();
        return;
      }
      this.select(startDateStr, endDateStr);
    });
    // pb-timeline-reset-selection:
    // resets selection (remove marking of all selected bins)
    // is triggered by the componeent itself but can be also triggered
    // from outside by another component
    document.addEventListener("pb-timeline-reset-selection", () => {
      this.resetSelection();
      this._hideTooltip();
    });

    // const loader = this.shadowRoot.getElementById('loadData');
    // loader.generateRequest();

  }

  updated (changedProperties){
    console.log('updated ', changedProperties);
    if(changedProperties.has('scope')){
        console.log('scope changed ', this.scope);
        if(this.searchResult){
            this.setData(this.searchResult.export(this.scope));
        }

    }
    // if(this.startDate === '' || this.endDate === ''){
    //     console.error('start- or end-date missing');
    //     return;
    // }
    //
    // // +++ trigger data reload
    // console.log('startDate ', this.startDate);
    // console.log('endDate ', this.endDate);
  }

  setData(dataObj) {
    this.dataObj = dataObj;
    this.maxValue = Math.max(...this.dataObj.data.map(binObj => binObj.value));
    this.requestUpdate();
    this.updateComplete.then(() => {
      this.bins = this.shadowRoot.querySelectorAll(".bin-container");
      this.resetSelection();
      this._resetTooltip();
    });
  }

  getSelectedInterval() {
    return [this.getSelectedStartDateStr, this.getSelectedEndDateStr];
  }

  getSelectedStartDateStr() {
    const selectionStartStr = this.shadowRoot.querySelectorAll(".bin-container.selected")[0].dataset.selectionstart;
    return new ParseDateService().run(selectionStartStr);
  }

  getSelectedEndDateStr() {
    const selectedBins = this.shadowRoot.querySelectorAll(".bin-container.selected");
    const selectionEndStr = selectedBins[selectedBins.length - 1].dataset.selectionend;
    return new ParseDateService().run(selectionEndStr);
  }

  resetSelection() {
    this.bins.forEach(bin => {
      bin.classList.remove("selected");
    });
    this._resetSelectionProperty();
    this._hideTooltip();
  }

  select(startDateStr, endDateStr) {
    this.bins.forEach(bin => {
      if (bin.dataset.isodatestr >= startDateStr && bin.dataset.isodatestr <= endDateStr) {
        bin.classList.add("selected");
      } else {
        bin.classList.remove("selected");
      }
    });
    this._displayTooltip();
    this._showtooltipSelection();
  }

  _fullRangeSelected(startDateStr, endDateStr) {
    const matchingStartDate = startDateStr = this.bins[0].dataset.isodatestr;
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
        this._dispatchTimelineDaterangeChangedEvent(startDateStr, endDateStr);
      }
    }
  }

  _mouseMove(event) {
    if (this.mousedown) {
      this._brushing(event);
      this._showtooltipSelection();
    } else if (this.selection.start === undefined) { // no selection currently made
      this._showtooltip(event);
    }
  }

  _mouseenter() {
    if (this.dataObj) { // if data is loaded
      this._displayTooltip();
    }
  }

  _getMousePosition(mouseEvent) {
    let rect = this.shadowRoot.querySelector(".wrapper").getBoundingClientRect();
    let x = mouseEvent.clientX - rect.left + 1; //x position within the element.
    let y = mouseEvent.clientY - rect.top + 1;  //y position within the element.
    return { x: x, y: y };
  }

  _brushing(event) {
    this.selection.end = this._getMousePosition(event).x;
    this._applySelectionToBins();
  }

  _dispatchTimelineDaterangeChangedEvent(startDateStr, endDateStr) {
    document.dispatchEvent(new CustomEvent('pb-timeline-daterange-changed', {
      bubbles: true,
      detail: {
        startDateStr: startDateStr,
        endDateStr: endDateStr,
      }
    }));
  }

  _dispatchPbTimelineResetSelectionEvent() {
    document.dispatchEvent(new CustomEvent('pb-timeline-reset-selection', {
      bubbles: true,
      detail: {}
    }));
  }

  _showtooltip(event) {
    const interval = this._getElementInterval(event.currentTarget);
    const offset = Math.round((((interval[0] + interval[1]) / 2) - this.tooltip.offsetWidth / 2));
    this.tooltip.style.left = offset + "px";
    const datestr = event.currentTarget.dataset.tooltip;
    const value = this._numberWithCommas(event.currentTarget.dataset.value);
    this.tooltip.querySelector("#tooltip-text").innerHTML = `<strong>${datestr}</strong>: ${value}`;
  }

  _showtooltipSelection() {
    const selectedBins = this._getSelectedBins();
    const intervalStart = this._getElementInterval(selectedBins[0])[0]; // get first selected element left boundary
    const intervalEnd = this._getElementInterval(selectedBins[selectedBins.length-1])[1]; // get last selected element right boundary
    const interval = [intervalStart, intervalEnd];
    const label = `${selectedBins[0].dataset.selectionstart} - ${selectedBins[selectedBins.length-1].dataset.selectionend}`;
    const value = selectedBins.map(bin => Number(bin.dataset.value)).reduce((a, b) => a + b);
    const valueFormatted = this._numberWithCommas(value);
    this.tooltip.querySelector("#tooltip-text").innerHTML = `<strong>${label}</strong>: ${valueFormatted}`;
    this.tooltip.querySelector("#tooltip-close").classList.remove("hidden");
    this.tooltip.classList.add("draggable");
    const offset = Math.round((((interval[0] + interval[1]) / 2) - this.tooltip.offsetWidth / 2));
    this.tooltip.style.left = offset + "px";
  }

  _resetTooltip() {
    this._hideTooltip();
    this.tooltip.querySelector("#tooltip-text").innerHTML = "";
  }

  _hideTooltip() {
    if (this.selection.start === undefined) {
      this.tooltip.classList.add("hidden");
      this.tooltip.classList.remove("draggable");
      this.tooltip.querySelector("#tooltip-close").classList.add("hidden");
    }
  }

  _displayTooltip() {
    this.tooltip.classList.remove("hidden");
  }

  _getElementInterval(nodeElement) {
    let rect = this.shadowRoot.querySelector(".wrapper").getBoundingClientRect();
    let bin = nodeElement;
    let interval = [bin.getBoundingClientRect().x, bin.getBoundingClientRect().x + bin.getBoundingClientRect().width]
    let x1 = interval[0] - rect.left + 1; //x position within the element.
    let x2 = interval[1] - rect.left + 1; //x position within the element.
    return [x1, x2];
  }

  _getSelectionInterval() {
    return [this.selection.start, this.selection.end].sort((a, b) => a - b);
  }

  _getSelectedBins() {
    return Array.prototype.slice.call(this.bins).filter(binContainer => {
      return binContainer.classList.contains("selected");
    });
  }

  _resetSelectionProperty() {
    this.selection = {
      start: undefined,
      end: undefined
    }
  }

  _applySelectionToBins() {
    const selectionInterval = this._getSelectionInterval();
    this.bins.forEach(bin => {
      const elInterval = this._getElementInterval(bin);
      // if (this.intervalsOverlapping(elInterval, selectionInterval)) {
      if (this._areOverlapping(elInterval, selectionInterval)) {
        bin.classList.add("selected");
      } else {
        bin.classList.remove("selected");
      }
    })
  }

  _numberWithCommas(input) {
    return input.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "'");
  }

  _areOverlapping(A, B) { // check if 2 intervals are overlapping
    return B[0] < A[0] ? B[1] > A[0] : B[0] < A[1];
  }

  render() {
    return html`
      <div class="wrapper"
        @mouseenter="${this._mouseenter}"
        @mouseleave="${this._hideTooltip}">
        ${this.dataObj ? this.renderBins() : ""}
        ${this.renderTooltip()}
        <iron-ajax
            id="loadData"
            verbose
            handle-as="json"
            method="get"
            with-credentials
            @response="${this._handleResponse}"
            url="${this.url}?start=${this.startDate}&end=${this.endDate}"
            auto></iron-ajax>
      </div>
    `;
  }

  renderTooltip() {
    return html`
      <div id="tooltip" class="hidden">
        <span id="tooltip-text"></span>
        <div
          id="tooltip-close"
          class="hidden"
          @click="${this._dispatchPbTimelineResetSelectionEvent}"
          ><span class="close rounded black"></span>
        </div>
      </div>
    `;
  }

  renderBins() {
    return html`
      ${this.dataObj.data.map((binObj, indx) => {
        return html`
          <div class="bin-container ${binObj.seperator ? "border-left" : ""}
            ${indx % 2 === 0 ? "grey" : "white"}"
            data-tooltip="${binObj.tooltip}"
            data-selectionstart="${binObj.selectionStart}"
            data-selectionend="${binObj.selectionEnd}"
            data-isodatestr="${binObj.dateStr}"
            data-datestr="${binObj.dateStr}"
            data-value="${binObj.value}"
            @mousemove="${this._mouseMove}"
            @mousedown="${this._mouseDown}">
            <div class="bin" style="height: ${(binObj.value / this.maxValue) * this.maxHeight * this.multiplier}px"></div>
            <p class="bin-title
              ${this.dataObj.binTitleRotated ? "rotated" : ""}
              ${this.scope}"
              >${binObj.binTitle ? binObj.binTitle : ""}
            </p>
            ${binObj.title ? html`
              <p class="bins-title">${binObj.title}</p>
            ` : ""}
          </div>
        `;
      })}
    `
  }

    async _handleResponse (){
        await this.updateComplete;
        const loader = this.shadowRoot.getElementById('loadData');
        const data = loader.lastResponse;

        const newJsonData = {};
        Object.keys(data).filter(key => key >= this.startDate && key < this.endDate).forEach(key => {
            newJsonData[key] = data[key];
        })
        this.searchResult = new SearchResultService(newJsonData);
        this.setData(this.searchResult.export(this.scope));

        console.log('data:', data);
    }

}

customElements.define('pb-timeline', PbTimeline);
