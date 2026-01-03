import { LitElement, html, css } from 'lit-element';
import tippy from 'tippy.js';
import { pbMixin } from './pb-mixin.js';
import { getCSSProperty } from './utils.js';
import * as themes from './pb-popover-themes.js';

function _injectStylesheet(root, name, cssCode) {
  const style = root.querySelector(`#pb-popover-${name}`);
  if (!style) {
    const container = root.nodeType === Node.DOCUMENT_NODE ? document.head : root;
    console.log('Loading tippy styles for theme %s into %o', name, container);
    const elem = document.createElement('style');
    elem.type = 'text/css';
    elem.id = `pb-popover-${name}`;
    elem.innerHTML = cssCode;
    container.appendChild(elem);
  }
}

export function loadTippyStyles(root, theme) {
  _injectStylesheet(root, 'base', themes.base);
  if (theme && theme !== 'none') {
    const name = themes.camelize(theme);
    const themeCSS = themes[name];
    if (themeCSS) {
      _injectStylesheet(root, name, themeCSS);
    }
  }
}

/**
 * Show a popover. It may either
 *
 * 1. be attached to another element on the page which serves as a trigger. For this the
 * `for` property must be specified and should contain the ID of the trigger element.
 * The whole content of the `pb-popover` element will be shown in the popup.
 *
 * 2. if no `for` property is specified, the `pb-popover` acts itself as the trigger. The trigger
 * text is either taken from a slot named `default` - or the default slot (i.e. the content of the element).
 * The content to show in the popup should be supplied in a slot named `alternate`. It is recommended to use an
 * HTML `template` to specify the alternate, so it is ignored by the browser:
 *
 * ```html
 * <pb-popover theme="material">
 *      <span slot="default">ipsum dolor sit amet</span>
 *      <template slot="alternate">
 *          <p>At vero eos et <strong>accusam</strong> et justo duo dolores<br>
 *          et ea rebum.</p>
 *      </template>
 * </pb-popover>
 * ```
 *
 * If you would like popovers to contain nested popovers, choose approach 1 above and use `for`.
 *
 * If property `persistent` is true, the popover will be shown
 * on click. Otherwise display a tooltip on mouseover.
 *
 * `pb-popover` uses the tippy.js library for the popup.
 *
 * ## Styling
 *
 * When showing the popup, the popup content will either be added to the parent shadow DOM - if the `pb-popover`
 * is located inside the shadow DOM of another element like `pb-view`; or the document body. This has an
 * effect on where CSS styles can be defined: within a `pb-view`, only the styles specified inside the
 * CSS attached to the ODD are applied.
 *
 * @prop {String} for - The id of a trigger element (e.g. a link) to which the popover will
 * be attached. If not set, the trigger is the pb-popover itself.
 * @prop {"material" | "light" | "translucent" | "light-border"} theme - The tippy theme to use.
 * @prop {"auto" | "top" | "bottom" | "left" | "right"} placement - Preferred placement of the popup.
 * Default is 'auto'.
 * @prop {String} fallbackPlacement - Fallback placement if there is more space on another side.
 * Accepts same values as `placement`. Separate by space if more than one.
 * @prop {Boolean} persistent - If true, show the 'hand' cursor when hovering over the link; `trigger` will be set to 'click'
 * unless defined otherwise; clicking anywhere on the page will close the popup.
 * @prop {"click" | "mouseenter" | "focus" | "focusin"} trigger - Defines one or more actions (space separated) which should cause
 * the popover to show. If property `persistent` is set, `trigger` will by default be set to `click`.
 * @prop {String} popupClass - Additional class names which will be added to the popup element.
 * Use this to apply a specific style to certain popovers, but not others.
 * @prop {String} remote - An optional URL to asynchronously load the popover's content from. Content will
 * be loaded after the popover is displayed. The downloaded HTML content will replace the text set via the alternate slot.
 * @prop {Boolean} stopPropagation - If you have nested pb-popover, set this property to
 * only show the innermost popover when triggered
 *
 * @slot default - the content to show for the trigger. If not specified, this will fall back to the unnamed slot.
 * @slot alternate - the content to show in the popup
 *
 * @csspart trigger - the inline element used as trigger
 *
 * @cssprop [--pb-popover-theme=none] - popup theme to use. One of 'material', 'light', 'translucent' or 'light-border'
 * @cssprop [--pb-popover-link-decoration=inherit] - text decoration for the trigger
 * @cssprop [--pb-popover-max-height=calc(100vh - 60px)] - limit the maximum height of the popup
 * @cssprop --pb-popover-min-height - set the minimum height of the popup
 * @cssprop --pb-popover-max-width - limit the max width of the popup
 * @cssprop --pb-popover-min-width - set the minimum width of the popup
 * @cssprop --pb-popover-color - Color of the popup text
 * @cssprop [--pb-popover-placement=auto] - Preferred popup placement, see property `placement`
 * @cssprop --pb-popover-fallback-placement - Fallback placements separated by space
 * @cssprop --pb-popover-trigger - define the trigger action, same as property `trigger`
 * @cssprop --pb-popover-persistent - switch to persistent behaviour, see property `persistent`
 */
export class PbPopover extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      for: {
        type: String,
      },
      theme: {
        type: String,
      },
      placement: {
        type: String,
      },
      fallbackPlacement: {
        type: String,
        attribute: 'fallback-placement',
      },
      persistent: {
        type: Boolean,
      },
      trigger: {
        type: String,
      },
      touch: {
        type: String,
      },
      popupClass: {
        type: String,
        attribute: 'popup-class',
      },
      remote: {
        type: String,
      },
      stopPropagation: {
        type: Boolean,
        attribute: 'stop-propagation',
      },
    };
  }

  constructor() {
    super();
    this.persistent = false;
    this.trigger = null;
    this.for = null;
    this.theme = null;
    this.placement = null;
    this.touch = null;
    this.fallbackPlacement = null;
    this.popupClass = null;
    this.stopPropagation = false;
    this._tippy = null;
    this._content = null;
  }

  render() {
    if (this.for) {
      return html`<div class="hidden"><slot></slot></div>`;
    }
    return html`<span id="link" part="trigger" class="${this.persistent ? 'persistent' : ''}"
        ><slot name="default"><slot></slot></slot></span
      ><span class="hidden"><slot name="alternate"></slot></span>`;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._tippy) {
      this._tippy.destroy();
    }
    if (this._observer) {
      this._observer.disconnect();
    }
  }

  _checkCSSProperties() {
    if (!this.theme && this.theme !== 'none') {
      this.theme = getCSSProperty(this, '--pb-popover-theme', 'none');
    }
    if (!this.placement) {
      this.placement = getCSSProperty(this, '--pb-popover-placement', 'auto');
    }
    if (!this.fallbackPlacement) {
      this.fallbackPlacement = getCSSProperty(this, '--pb-popover-fallback-placement', null);
    }
    if (!this.persistent) {
      this.persistent = getCSSProperty(this, '--pb-popover-persistent', false);
    }
    if (!this.trigger) {
      this.trigger = getCSSProperty(this, '--pb-popover-trigger', null);
    }
    if (!this.touch) {
      const prop = getCSSProperty(this, '--pb-popover-touch', 'hold');
      this.touch = prop === 'true' ? true : prop;
    }
  }

  _injectStyles() {
    this._checkCSSProperties();

    loadTippyStyles(this.getRootNode(), this.theme);
  }

  _getContent() {
    if (this._content) {
      return this._content;
    }
    const slot = this._getSlot();
    if (slot) {
      const content = document.createElement('div');
      slot.assignedNodes().forEach(node => {
        content.appendChild(node.content ? node.content.cloneNode(true) : node.cloneNode(true));
      });
      this._content = content;
      return content;
    }
    return null;
  }

  _getSlot() {
    if (this.for) {
      return this.shadowRoot.querySelector('slot');
    }
    return this.shadowRoot.querySelector('[name=alternate]');
  }

  /**
   * Listen for changes of the current element or its alternate slot
   * and update popover content accordingly.
   */
  _registerMutationObserver() {
    const slot = this._getSlot();
    this._observer = new MutationObserver(() => {
      this.alternate = this._getContent();
      console.log('alternate changed');
      this.emitTo('pb-popover-changed', this.alternate);
    });
    this._observer.observe(this, { subtree: true, childList: true, characterData: true });
    if (slot) {
      slot.assignedNodes().forEach(node => {
        this._observer.observe(node.content ? node.content : node, {
          subtree: true,
          childList: true,
          characterData: true,
        });
      });
    }
  }

  /**
   * Returns the root element of the alternate content currently shown in the popover.
   * This will be initialized from either the default slot or the slot with name 'alternate' (if present).
   * The returned element is always a `div` and can be modified.
   */
  get alternate() {
    return this._getContent();
  }

  /**
   * Set the element to be shown in the popover. Use this to set popover
   * content dynamically. Alternatively you can also modify the DOM of the slots
   * directly and the changes should be picked up by the component.
   */
  set alternate(content) {
    this._content = content;
    if (this._tippy) {
      this._tippy.setContent(this._content);
    }
  }

  /**
   * Overwrite to enable/disable tippy instance
   */
  command(command, state) {
    if (command === 'disable') {
      this.disabled = state;
      if (this._tippy) {
        if (state) {
          this._tippy.disable();
        } else {
          this._tippy.enable();
        }
      }
    }
  }

  firstUpdated() {
    super.firstUpdated();

    this._injectStyles();

    this._registerMutationObserver();

    if (!this.trigger) {
      this.trigger = this.persistent ? 'click' : 'mouseenter';
    }

    const root = this.getRootNode();
    let target;
    if (this.for) {
      target = root.getElementById(this.for);
      if (!target) {
        console.error('<pb-popover> target element %s not found', this.for);
      }
    } else {
      target = this.shadowRoot.getElementById('link');
    }
    if (target) {
      const options = {
        allowHTML: true,
        appendTo: root.nodeType === Node.DOCUMENT_NODE ? document.body : root,
        placement: this.placement,
        interactive: true,
        ignoreAttributes: true,
        boundary: 'viewport',
        maxWidth: 'none',
        touch: this.touch,
        hideOnClick: false,
        trigger: this.trigger,
      };
      if (this.stopPropagation) {
        options.onTrigger = (instance, ev) => {
          ev.stopPropagation();
        };
      }
      if (this.persistent) {
        options.onClickOutside = (instance, ev) => {
          instance.hideWithInteractivity(ev);
        };
      }
      if (this.theme && this.theme !== 'none') {
        options.theme = this.theme;
      }
      if (this.fallbackPlacement) {
        const placements = this.fallbackPlacement.split(' ');
        options.popperOptions = {
          modifiers: [
            {
              name: 'flip',
              options: {
                fallbackPlacements: placements,
              },
            },
          ],
        };
      }
      if (this.popupClass) {
        options.onCreate = instance => {
          instance.popper.classList.add(this.popupClass);
        };
      }
      options.onShow = instance => {
        if (this.remote) {
          this._loadRemoteContent();
        } else {
          instance.setContent(this._getContent());
        }
        this.emitTo('pb-popover-show', { source: this, popup: instance });
      };

      this._tippy = tippy(target, options);
    }
  }

  _loadRemoteContent() {
    const url = this.toAbsoluteURL(this.remote);
    fetch(url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
    })
      .then(response => response.text())
      .then(data => {
        this.alternate = data;
      })
      .catch(error => {
        console.error('<pb-popover> Error retrieving remote content: %o', error);
      });
  }

  static get styles() {
    return [
      css`
        :host {
          display: inline;
        }
        .hidden {
          display: none;
        }
        div {
          float: left;
        }
        #link {
          display: inline;
          color: inherit;
          text-decoration: var(
            --pb-popover-link-decoration,
            var(--pb-link-text-decoration, inherit)
          );
        }
        #link.persistent {
          cursor: pointer;
        }
      `,
    ];
  }
}
customElements.define('pb-popover', PbPopover);
