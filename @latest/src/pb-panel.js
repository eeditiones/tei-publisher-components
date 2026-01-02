import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import './pb-view.js';
import { themableMixin } from './theming.js';

/**
 * A container for different views. Only one view will be shown at a time.
 * Provides a dropdown for the user to switch between views. Views are
 * lazy loaded and should be provided as one or more `<template>` elements.
 * Each `<template>` may have a title attribute to specify the title to be shown
 * for it in the dropdown.
 *
 * @slot - unnamed default slot for content
 * @slot toolbar - toolbar area
 * @fires pb-panel - Fired whenever the component switches to a different content panel. Used by `pb-grid` to update its state.
 * @fires pb-refresh - Fired after a new content panel is shown to allow connected components to refresh.
 * @cssprop --pb-panel-max-height - The max height of the panel content. Set to enable scrolling.
 */
export class PbPanel extends themableMixin(pbMixin(LitElement)) {

  static get properties() {
    return {
      ...super.properties,
      /**
       * the index of the active view
       */
      active: {
        type: Number,
        reflect: true,
      },
      /**
       * the label displayed above the dropdown for selecting the view to show
       */
      label: {
        type: String,
      },
      /**
       * a name for each available panel, to be displayed in the dropdown. If not set,
       * each template will be checked for a title attribute, which will be taken as name.
       */
      panels: {
        type: Array,
        reflect: true,
      },
      /**
       * if set, the panel can be dragged to another position in the grid. A button will
       * be added to the toolbar to allow dragging.
       */
      draggable: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();
    this.active = 0;
    this.label = 'View';
    this.panels = null;
    this.position = -1;
    this.draggable = false;
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.panels) {
      const titles = [];
      this.querySelectorAll('template').forEach(template => titles.push(template.title));
      this.panels = titles;
    }
    this._show();
  }

  firstUpdated() {
    const dragHandle = this.shadowRoot.querySelector('button[draggable="true"]');
    let initiator = null;

    if (this.draggable) {
      dragHandle.addEventListener('dragstart', ev => {
        ev.dataTransfer.setDragImage(this, 10, 10);
        ev.dataTransfer.setData('text', this.position);
        initiator = this;
      });
    }

    this.addEventListener('dragover', ev => {
      ev.preventDefault();
    });
    document.addEventListener('dragenter', ev => {
      ev.stopPropagation();
      ev.preventDefault();
      if (initiator === this) {
        return;
      }
      if (this.contains(ev.target)) {
        this.classList.add('dragover');
      } else {
        this.classList.remove('dragover');
      }
    });
    this.addEventListener('drop', ev => {
      ev.stopPropagation();
      ev.preventDefault();

      initiator = null;
      this.dispatchEvent(
        new CustomEvent('pb-drop', {
          detail: {
            panel: ev.dataTransfer.getData('text'),
            target: this,
          },
          bubbles: true,
          composed: true,
        }),
      );
    });
  }

  render() {
    return html`
      <nav>
        <ul>
          <li>
            <select name="panels" class="dropdown" @change="${this._update}">
              ${ this.panels.map((item, index) => html`<option value="${index}" ?selected=${index === this.active}>${item}</option>`) }
            </select>
          </li>
        </ul>
        <ul>
          ${this.draggable
            ? html`
                <li>
                  <button draggable="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-move" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10M.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8"/>
                    </svg>
                  </button>
                </li>`
            : ''}
          <slot name="toolbar"></slot>
        </ul>
      </nav>
      <slot></slot>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      nav, nav ul {
        display: flex;
        padding: 0;
        justify-content: space-between;
        align-items: center;
        column-gap: 1rem;
      }

      nav ul, nav ul li {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      
      ::slotted(._pb_panel) {
        overflow: auto;
        max-height: calc(var(--pb-panel-max-height) - 72px);
      }

      :host(.dragover) {
        background-color: var(--pb-grid-highlight-color, var(--pb-highlight-color));
        animation: highlight 1s;
      }

      @keyframes highlight {
        from {
          background-color: transparent;
        }
        to {
          background-color: var(--pb-grid-highlight-color, var(--pb-highlight-color));
        }
      }
    `;
  }

  _update() {
    const panel = this.shadowRoot.querySelector('[name="panels"]').value;
    if (this.active !== panel) {
      this.active = panel;
      this._show();

      this.refresh();
    }
  }

  _show() {
    const templates = this.querySelectorAll('template');
    if (this.active >= templates.length) {
      this.active = templates.length - 1;
    }
    console.log('<pb-panel> showing panel %s', this.active);
    // Close other panels
    for (const panel of this.querySelectorAll('._pb_panel')) {
      panel.remove();
    }

    // Open the correct one
    const template = templates[this.active];
    const clone = document.importNode(template.content, true);
    const div = document.createElement('div');
    div.className = `_pb_panel _pb_panel${this.active}`;
    div.appendChild(clone);
    this.appendChild(div);

    this.emitTo('pb-panel', {
      panel: this,
      active: this.active
    });
  }

  refresh() {
    this.emitTo('pb-refresh', null);
  }
}
customElements.define('pb-panel', PbPanel);
