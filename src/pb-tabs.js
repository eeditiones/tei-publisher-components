import { LitElement, html, css } from 'lit';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { registry } from './urls.js';

/**
 * Combines a row of tabs with associated content.
 *
 * @slot tab - tab area
 * @slot page - page area
 * @csspart pages - wrapper around the tab pages
 * @fires pb-tab - fired if selected tab changes. Details contain number of
 * selected tab in propery `selected`.
 */
export class PbTabs extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      selected: {
        type: Number,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    this.selected = 0;
    this._initialized = false;
    this._tabs = [];
    this._pages = [];
    this._focusOnSelect = false;
    this._onTabClick = this._onTabClick.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    waitOnce('pb-page-ready', () => {
      const state = registry.state.tab;
      if (typeof state !== 'undefined') {
        this._select(parseInt(state, 10) || 0, { emit: false, commit: false });
      }

      registry.subscribe(this, state => {
        if (typeof state.tab !== 'undefined') {
          this._select(parseInt(state.tab, 10) || 0, { emit: false, commit: false });
        }
      });
    });
  }

  firstUpdated() {
    super.firstUpdated();
    this._applySelection();
    this.emitTo('pb-tab', { selected: this.selected });
  }

  render() {
    return html`
      <div class="pb-tabs" role="tablist">
        <slot name="tab" @slotchange=${this._handleTabSlot}></slot>
      </div>
      <div part="pages" class="pb-tabs__pages">
        <slot name="page" @slotchange=${this._handlePageSlot}></slot>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .pb-tabs {
        display: flex;
        gap: 0.25rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      }

      .pb-tabs__pages ::slotted(*) {
        padding-top: 1rem;
      }

      .pb-tabs__pages ::slotted([hidden]) {
        display: none !important;
      }

      .pb-tab {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 0.75rem;
        border: none;
        background: transparent;
        font: inherit;
        color: inherit;
        cursor: pointer;
        border-radius: 8px 8px 0 0;
        transition: background-color 120ms ease, color 120ms ease;
      }

      .pb-tab:focus-visible {
        outline: 2px solid #1976d2;
        outline-offset: 2px;
      }

      .pb-tab--active {
        background: #fff;
        border: 1px solid rgba(0, 0, 0, 0.12);
        border-bottom-color: transparent;
      }
    `;
  }

  updated(changedProps) {
    if (changedProps.has('selected')) {
      this._applySelection();
    }
  }

  _handleTabSlot(event) {
    if (this._tabs && this._tabs.length) {
      this._tabs.forEach(tab => {
        tab.removeEventListener('click', this._onTabClick);
        tab.removeEventListener('keydown', this._onKeyDown);
      });
    }
    const assigned = event.target.assignedElements({ flatten: true });
    this._tabs = assigned.filter(node => node.nodeType === Node.ELEMENT_NODE);
    this._tabs.forEach((tab, index) => {
      tab.classList.add('pb-tab');
      tab.setAttribute('role', 'tab');
      tab.dataset.pbTabIndex = String(index);
      if (!tab.id) {
        tab.id = `pb-tab-${index}`;
      }
      if (tab.tagName === 'BUTTON' && !tab.hasAttribute('type')) {
        tab.setAttribute('type', 'button');
      }
      tab.addEventListener('click', this._onTabClick);
      tab.addEventListener('keydown', this._onKeyDown);
    });
    this._applySelection();
  }

  _handlePageSlot(event) {
    const assigned = event.target.assignedElements({ flatten: true });
    this._pages = assigned.filter(node => node.nodeType === Node.ELEMENT_NODE);
    this._pages.forEach(page => {
      page.setAttribute('role', 'tabpanel');
    });
    this._applySelection();
  }

  _applySelection() {
    if (!this._tabs || this._tabs.length === 0) {
      return;
    }
    let index = this.selected;
    if (index == null || Number.isNaN(Number(index))) {
      index = 0;
    }
    index = Math.max(0, Math.min(Number(index), this._tabs.length - 1));
    if (index !== this.selected) {
      const old = this.selected;
      this.selected = index;
      this.requestUpdate('selected', old);
    }

    this._tabs.forEach((tab, tabIndex) => {
      const selected = tabIndex === this.selected;
      tab.setAttribute('aria-selected', selected ? 'true' : 'false');
      tab.setAttribute('tabindex', selected ? '0' : '-1');
      tab.classList.toggle('pb-tab--active', selected);
      if (selected && this._focusOnSelect) {
        tab.focus({ preventScroll: true });
      }
    });
    this._focusOnSelect = false;

    if (this._pages && this._pages.length) {
      this._pages.forEach((page, pageIndex) => {
        const tab = this._tabs[pageIndex];
        const selected = pageIndex === this.selected;
        page.hidden = !selected;
        page.setAttribute('aria-hidden', selected ? 'false' : 'true');
        page.setAttribute('role', 'tabpanel');
        if (tab) {
          page.setAttribute('aria-labelledby', tab.id);
          if (!page.id) {
            page.id = `pb-tab-panel-${pageIndex}`;
          }
          tab.setAttribute('aria-controls', page.id);
        }
      });
    }
  }

  _select(index, { emit = true, commit = true, focus = false } = {}) {
    if (index == null) {
      return;
    }
    const numeric = Number(index);
    if (Number.isNaN(numeric)) {
      return;
    }
    this._focusOnSelect = focus;
    const old = this.selected;
    this.selected = numeric;
    this.requestUpdate('selected', old);
    this._applySelection();
    if (emit) {
      this.emitTo('pb-tab', { selected: this.selected });
    }
    if (commit && this._tabs && this._tabs.length) {
      if (this._initialized) {
        registry.commit(this, { tab: this.selected });
      } else {
        registry.replace(this, { tab: this.selected });
      }
      this._initialized = true;
    }
  }

  _onTabClick(event) {
    const index = Number(event.currentTarget.dataset.pbTabIndex);
    if (Number.isNaN(index)) {
      return;
    }
    this._select(index, { focus: true });
  }

  _onKeyDown(event) {
    const current = Number(event.currentTarget.dataset.pbTabIndex);
    if (Number.isNaN(current) || !this._tabs.length) {
      return;
    }
    let next = current;
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        next = (current + 1) % this._tabs.length;
        event.preventDefault();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        next = (current - 1 + this._tabs.length) % this._tabs.length;
        event.preventDefault();
        break;
      case 'Home':
        next = 0;
        event.preventDefault();
        break;
      case 'End':
        next = this._tabs.length - 1;
        event.preventDefault();
        break;
      default:
        return;
    }
    this._select(next, { focus: true });
  }
}
customElements.define('pb-tabs', PbTabs);
