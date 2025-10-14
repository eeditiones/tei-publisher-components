import { LitElement, html, css } from 'lit';
import { pbMixin } from './pb-mixin.js';

/**
 * an action component to execute an 'add panel' or 'remove panel' action on a pb-grid.
 *
 * @slot - default unnamed slot for content
 *
 */
export class PbGridAction extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      /**
       * the type of action. Can be either `add` or `remove`
       *
       * Defaults to `add`
       */
      action: {
        type: String,
      },
      /**
       * reference to a pb-grid element
       */
      grid: {
        type: String,
      },
      initial: {
        type: Number,
      },
    };
  }

  constructor() {
    super();
    this.action = 'add';
    this.initial = 0;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html` <button @click="${this._click}" type="button"><slot></slot></button> `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  _click() {
    // todo: grid must be in lightDOM to be discovered. What is expected for this.grid? A string like '#myId'?
    const grid = document.querySelector(this.grid);
    if (!(grid && grid.addPanel)) {
      return console.error('<pb-grid-action> grid not found: %s', this.grid);
    }
    console.log('<pb-grid-action> Clicked, action:', this.action);
    console.log('<pb-grid-action> Grid found:', grid);
    console.log('<pb-grid-action> Closest element:', this.closest('pb-panel,pb-grid'));
    
    if (this.action === 'add') {
      grid.addPanel(this.initial);
    } else {
      const closest = this.closest('pb-panel,pb-grid');
      console.log('<pb-grid-action> Calling removePanel with:', closest);
      grid.removePanel(closest);
    }
  }
}
customElements.define('pb-grid-action', PbGridAction);
