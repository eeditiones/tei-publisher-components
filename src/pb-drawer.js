import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';

/**
 * A drawer component used e.g. for table-of-contents.
 *
 * @slot - unnamed default slot for the content
 * @fires pb-load - Fires a load request when opened
 * @fires pb-refresh - When received, closes the drawer
 * @cssprop [--pb-drawer-width=448px] - width of the drawer
 * @cssprop [--pb-drawer-transition=.5s] - transition to use for sliding in
 * @csspart content - the inner div wrapping around the drawer content
 */
export class PbDrawer extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      /**
       * optional id reference to a component that allows opening/closing the drawer.
       * If `maxWidth` is set and the viewport width is larger, the toggle's display
       * style will be set to 'none'.
       */
      toggle: {
        type: String,
      },
      /**
       * Boolean reflecting the opened/closed state of the drawer
       */
      opened: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Defines a breakpoint width: if the viewport width is below the width given in
       * this property, the drawer is turned into an overlay, which only reveals if the
       * toggle is activated.
       */
      maxWidth: {
        type: String,
        attribute: 'max-width',
      },
      /**
       * Determines the position at which the drawer will appear in overlay mode.
       * Should be either 'left' or 'right'.
       */
      position: {
        type: String,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.opened = false;
    this.position = 'left';
  }

  connectedCallback() {
    super.connectedCallback();

    const toggle = this.toggle ? document.getElementById(this.toggle) : null;
    if (toggle) {
      toggle.addEventListener('click', this._toggle.bind(this));
    }

    document.body.addEventListener('click', () => {
      if (this.opened) {
        this.opened = false;
      }
    });

    this.addEventListener('click', ev => ev.stopPropagation());

    this.subscribeTo('pb-refresh', this._close.bind(this));
  }

  firstUpdated() {
    if (!this.maxWidth) {
      this.classList.add('overlay');
      return;
    }
    // Check if Visual Viewport API is supported
    if (typeof window.visualViewport !== 'undefined') {
      window.visualViewport.addEventListener('resize', () => {
        this._handleResize();
      });
    } else {
      window.addEventListener('resize', () => {
        this._handleResize();
      });
    }
    this._handleResize();
  }

  _handleResize() {
    const toggle = document.getElementById(this.toggle);
    const query = `(max-width: ${this.maxWidth})`;
    if (window.matchMedia(query).matches) {
      console.log('<pb-drawer> entering overlay mode');
      this.classList.add('overlay');
      if (toggle) {
        toggle.style.display = '';
      }
    } else {
      console.log('<pb-drawer> leaving overlay mode');
      this.classList.remove('overlay');
      if (toggle) {
        toggle.style.display = 'none';
      }
    }
  }

  _toggle(ev) {
    if (ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    if (this.opened) {
      this.opened = false;
    } else {
      this.opened = true;
      this.emitTo('pb-load');
    }
  }

  _close() {
    this.opened = false;
  }

  render() {
    return html` <div part="content"><slot></slot></div> `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      :host(.overlay) {
        position: fixed;
        bottom: 0;
        width: var(--pb-drawer-width, 448px);
        height: 100vh;
        z-index: 1000;
        overflow: auto;
        display: block;
        transition: var(--pb-drawer-transition, 0.5s);
      }
      :host(.overlay[position='left']) {
        left: calc(0px - var(--pb-drawer-width, 448px));
      }
      :host(.overlay[position='right']) {
        right: calc(0px - var(--pb-drawer-width, 448px));
      }

      :host([opened][position='left']) {
        left: 0;
        transition: var(--pb-drawer-transition, 0.5s);
      }
      :host([opened][position='right']) {
        right: 0;
        transition: var(--pb-drawer-transition, 0.5s);
      }

      div {
        padding: 10px;
      }
    `;
  }
}
customElements.define('pb-drawer', PbDrawer);
