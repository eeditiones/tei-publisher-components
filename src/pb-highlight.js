import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin';

/**
 * Link elements to each other: when a trigger action occurs on one element,
 * the others are highlighted by changing their background color. Which elements
 * are linked is determined by the `key` property: elements with the same key
 * are linked. Multiple keys (space or comma separated) may be specified; in that
 * case the emitted `pb-highlight-on` event passes an array of ids and receivers
 * highlight when any of their keys matches. The trigger action is configured via the `trigger` property and
 * sends a `pb-highlight-on` event. Other elements with the same key react to this event.
 *
 * `pb-highlight` should be output for relevant elements via ODD processing model.
 *
 *
 *
 * @slot - default unnamed slot for highlight content
 * @fires pb-highlight-off - Fires removal of all highlights that might have existed before
 * @fires pb-highlight-on - Fires highlight event with a key passed to which other pb-highlight elements with the same key will react
 * @fires pb-highlight-off - When received, triggers removal of a highlight that might have been on for this element before
 * @fires pb-highlight-on - When received, switches the highlight on if any received key matches one of this element's keys
 * @prop {"click" | "mouseenter"} trigger - Defines one or more actions (space separated) which should cause
 * the highlight to show. Default is `mouseenter`. If `click` is among the triggers, matching elements scroll into view.
 * @cssprop --pb-highlight-color - Background color to highlight an element
 */
export class PbHighlight extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      /**
       * One or more keys (space or comma separated) to which this element is connected.
       */
      key: {
        type: String,
      },
      /**
       * If set to > 0, specifies a duration (in ms) after which
       * the highlighting will be removed again
       */
      duration: {
        type: Number,
      },
      /**
       * Scroll this element into view when it receives a highlight event
       */
      scroll: {
        type: Boolean,
      },
      highlightSelf: {
        type: Boolean,
        attribute: 'highlight-self',
      },
      /**
       * Defines one or more actions (space separated) which should cause the highlight to show.
       */
      trigger: {
        type: String,
      },
      _className: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.key = null;
    this.duration = 0;
    this.scroll = false;
    this.highlightSelf = false;
    this.trigger = 'mouseenter';
    this._className = 'highlight-off';
  }

  _getTriggers() {
    return (this.trigger || 'mouseenter').trim().split(/\s+/);
  }

  _getKeys() {
    return (this.key || '').trim().split(/[\s,]+/).filter(Boolean);
  }

  _getEventId() {
    const keys = this._getKeys();
    return keys.length > 1 ? keys : keys[0] || null;
  }

  _matchesKey(eventId) {
    const keys = this._getKeys();
    if (!keys.length || eventId == null) {
      return false;
    }
    if (Array.isArray(eventId)) {
      return keys.some(key => eventId.includes(key));
    }
    return keys.includes(eventId);
  }

  _isClickable() {
    return this._getTriggers().includes('click');
  }

  connectedCallback() {
    super.connectedCallback();
    this.subscribeTo('pb-highlight-on', this._highlightOn.bind(this));
    this.subscribeTo('pb-highlight-off', this._highlightOff.bind(this));
  }

  command(command, state) {
    super.command(command, state);
    if (this.disabled) {
      this._className = 'highlight-off';
    }
  }

  _triggerHighlight() {
    this.emitTo('pb-highlight-off', {
      source: this,
    });
    const id = this._getEventId();
    if (this.highlightSelf) {
      this._highlightOn({ detail: { id } });
    }
    this.emitTo('pb-highlight-on', {
      id,
      source: this,
      scroll: this.scroll || this._isClickable(),
    });
  }

  render() {
    if (this.disabled) {
      return html`<slot></slot>`;
    }
    const triggers = this._getTriggers();
    return html`<span
      id="content"
      class="${this._className}${this._isClickable() ? ' clickable' : ''}"
      @mouseenter="${triggers.includes('mouseenter') ? this._triggerHighlight : null}"
      @click="${triggers.includes('click') ? this._triggerHighlight : null}"
      ><slot></slot
    ></span>`;
  }

  static get styles() {
    return css`
      :host {
        display: inline;
      }

      @keyframes keyFrameBackgroundColorIn {
        0% {
          background-color: inherit;
        }
        100% {
          background-color: var(--pb-highlight-color, #f9e976);
        }
      }

      #content {
        display: inline;
      }

      .highlight-on {
        background-color: var(--pb-highlight-color, #f9e976);
        animation-name: keyFrameBackgroundColorIn;
        animation-duration: 500ms;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
      }

      .highlight-off {
        background-color: inherit;
      }

      .clickable {
        cursor: pointer;
      }
    `;
  }

  _highlightOn(ev) {
    if (ev.detail.source != this && this._matchesKey(ev.detail.id)) {
      this._className = 'highlight-on';
      if (ev.detail.scroll && this.disabled == false) {
        this.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
      if (this.duration > 0) {
        setTimeout(() => {
          this._className = 'highlight-off';
        }, this.duration);
      }
    }
  }

  _highlightOff(ev) {
    if (ev.detail.source != this) {
      this._className = 'highlight-off';
    }
  }

  /**
   * Fired when a trigger action occurs on the element
   *
   * @event pb-highlight-on
   * @param {String|Array<String>} id key or keys
   * @param {Object} source this element
   * @param {Boolean} scroll should target scroll to highlighted position
   */

  /**
   * Fired before a new highlight is applied
   *
   * @event pb-highlight-off
   * @param {Object} source this element
   */
}
customElements.define('pb-highlight', PbHighlight);
