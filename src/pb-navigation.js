import { LitElement, html, css } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { pbMixin } from './pb-mixin.js';
import { pbHotkeys } from './pb-hotkeys.js';

/**
 * Build a clean, canonical fragment URL for the current document: the current
 * path plus `?id=` (persistent xml:id, preferred) or `?root=` (node id) as a
 * fallback. Other query parameters are dropped so the link matches the
 * canonical/sitemap URL. Returns null when there is no target.
 *
 * @param {string} id the target fragment's xml:id, if any
 * @param {string} root the target fragment's node id, used when no xml:id exists
 * @returns {string|null} the relative href, or null when there is no target
 */
function buildFragmentHref(id, root) {
  if (!id && !root) {
    return null;
  }
  const url = new URL(window.location.href);
  url.search = '';
  if (id) {
    url.searchParams.set('id', id);
  } else {
    url.searchParams.set('root', root);
  }
  return url.pathname + url.search;
}

/**
 * Navigate backward/forward in a document. This component does not implement any functionality itself.
 * It just sends a `pb-navigate` event when clicked. You may also assign a shortcut key by setting property
 * `keyboard`.
 *
 * In addition to firing `pb-navigate`, the control renders a real `<a href>` pointing to the
 * target fragment (`?id=` for a persistent xml:id, `?root=` as fallback) with `rel="next"`/`rel="prev"`.
 * This makes the next/previous page reachable by crawlers and no-JS clients, while interactive
 * clicks are intercepted (`preventDefault`) so the SPA navigates in place without a reload.
 *
 * @slot - default unnamed slot
 * @fires pb-navigate - Fire event indicating that listening components should navigate in the given direction
 * @fires pb-update - When received, updates the state of navigation buttons (disables when no forward/backward navigation possible)
 */
export class PbNavigation extends pbHotkeys(pbMixin(LitElement)) {
  static get properties() {
    return {
      ...super.properties,
      /**
       * The direction to navigate in, either `forward` or `backward`
       */
      direction: {
        type: String,
      },
      /**
       * Register a shortcut key, e.g. 'left' or 'shift+left'
       */
      keyboard: {
        type: String,
      },
      /**
       * Rendition of the navigation element if it's disabled
       * Possible values:
       * - hidden (default if not set; control is removed from the document layout)
       * - invisible (controll is hidden, but keeped in the document layout)
       * - visible (control is visible)
       */
      rendition: {
        type: String,
      },
      /**
       * Internal: the crawlable href pointing to the target fragment, recomputed
       * from each `pb-update`.
       */
      _href: {
        type: String,
        attribute: false,
      },
    };
  }

  constructor() {
    super();
    this.direction = 'forward';
    this.disabled = true;
    this._href = null;
  }

  connectedCallback() {
    super.connectedCallback();

    if (this.keyboard) {
      this.hotkeys = {
        next: this.keyboard,
      };
    }

    this.subscribeTo('pb-update', this._update.bind(this));

    this.registerHotkey('next', () => {
      // Do not handle this hotkey if we have something focused. Otherwise we would basically
      // disable the arrowkeys in input fields
      if (window.document.activeElement && window.document.activeElement !== window.document.body) {
        return;
      }
      this.emitTo('pb-navigate', { direction: this.direction });
    });

    this.signalReady();
  }

  _update(ev) {
    const { data } = ev.detail;
    if (this.direction === 'forward') {
      this.disabled = !data.next;
      this._href = buildFragmentHref(data.nextId, data.next);
    } else {
      this.disabled = !data.previous;
      this._href = buildFragmentHref(data.previousId, data.previous);
    }
  }

  _handleClick(ev) {
    // Crawlers and no-JS clients follow the real href; for interactive use we
    // navigate in place via the pb-navigate event instead of reloading.
    if (ev) {
      ev.preventDefault();
    }
    this.emitTo('pb-navigate', { direction: this.direction });
  }

  render() {
    return html`
      <a
        id="button"
        href="${ifDefined(this._href || undefined)}"
        rel="${this.direction === 'forward' ? 'next' : 'prev'}"
        @click="${this._handleClick}"
        ><slot></slot
      ></a>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: inline;
      }
      :host([disabled]):host(:not([rendition])),
      :host([disabled]):host([rendition='hidden']) {
        display: none;
      }
      :host([disabled]):host([rendition='invisible']) {
        visibility: hidden;
      }
      :host([disabled]):host([rendition='visible']) {
        visibility: visible;
        cursor: not-allowed;
      }
    `;
  }
}

customElements.define('pb-navigation', PbNavigation);
