import { LitElement, html, css } from 'lit-element';
import { PbPopoverPopup, popupRootStyles } from './pb-popover-popup.js';
import { pbMixin } from './pb-mixin.js';
import { getCSSProperty } from './utils.js';
import * as themes from './pb-popover-themes.js';

function _injectStylesheet(root, id, cssCode) {
  const style = root.querySelector(`#${id}`);
  if (!style) {
    const container = root.nodeType === Node.DOCUMENT_NODE ? document.head : root;
    const elem = document.createElement('style');
    elem.type = 'text/css';
    elem.id = id;
    elem.innerHTML = cssCode;
    container.appendChild(elem);
  }
}

function _themeCSS(theme) {
  if (!theme || theme === 'none') {
    return null;
  }
  const name = themes.camelize(theme);
  const themeCSS = themes[name];
  return themeCSS ? { name, css: themeCSS } : null;
}

/**
 * Load the base styles and the given theme for popups of `pb-popover` into `root`
 * (a document or shadow root).
 */
export function loadPopoverStyles(root, theme) {
  _injectStylesheet(root, 'pb-popover-base', themes.base);
  _injectStylesheet(root, 'pb-popover-root', popupRootStyles);
  const themeCSS = _themeCSS(theme);
  if (themeCSS) {
    _injectStylesheet(root, `pb-popover-${themeCSS.name}`, themeCSS.css);
  }
}

/**
 * Load the base styles and the given theme for tippy.js into `root`.
 *
 * @deprecated No component uses tippy.js any more: use `loadPopoverStyles`.
 */
export function loadTippyStyles(root, theme) {
  _injectStylesheet(root, 'tippy-base', themes.toTippy(themes.base));
  const themeCSS = _themeCSS(theme);
  if (themeCSS) {
    _injectStylesheet(root, `tippy-${themeCSS.name}`, themes.toTippy(themeCSS.css));
  }
}

/**
 * Popovers with a `for` attribute, per root node (document or shadow root),
 * keyed by the id of their trigger.
 *
 * The same trigger may occur more than once in a root: a footnote nested inside
 * another footnote is output in the footnote list and again in the content of
 * the outer popover, and a popup shows a clone of that content. All copies
 * carry the same id, so looking up the trigger with `getElementById` finds only
 * one of them, often an invisible one. The registry lets a popup that has just
 * been shown find the triggers it contains and bind their popovers to them.
 */
const registries = new WeakMap();

function _registry(root) {
  let registry = registries.get(root);
  if (!registry) {
    registry = new Map();
    registries.set(root, registry);
  }
  return registry;
}

/**
 * Bind the popovers registered in `root` to the triggers inside `container`
 * which have none yet. Used for the content of a popup once it is shown.
 */
function _bindTriggers(root, container) {
  const registry = registries.get(root);
  if (!registry || registry.size === 0) {
    return;
  }
  container.querySelectorAll('[id]').forEach(elem => {
    if (elem._pbPopup) {
      return;
    }
    const popover = registry.get(elem.id);
    if (popover && popover.isConnected) {
      popover._bind(elem);
    }
  });
}

/**
 * The popup root (`.pb-popover-root`) containing `elem`, if any. Looks through
 * shadow DOM boundaries: the trigger of an inline `pb-popover` sits in its own
 * shadow root, while the popover itself may be inside another popup.
 */
function _parentPopper(elem) {
  let node = elem;
  while (node) {
    const popper = node.closest('.pb-popover-root');
    if (popper) {
      return popper;
    }
    node = node.getRootNode().host;
  }
  return null;
}

/**
 * Is `elem` inside the content of a popover, which the browser never shows
 * (light DOM of a `pb-popover` with `for`, or its alternate slot)?
 */
function _isHiddenSource(elem) {
  const host = elem.parentElement && elem.parentElement.closest('pb-popover');
  if (!host) {
    return false;
  }
  return host.hasAttribute('for') || elem.closest('[slot="alternate"], template') !== null;
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
 * The trigger of a nested popover may occur more than once with the same id, e.g. a footnote
 * marker inside another footnote, repeated in the list of footnotes: every visible copy opens
 * the popover, including the copy shown inside the outer popup.
 *
 * If property `persistent` is true, the popover will be shown
 * on click. Otherwise display a tooltip on mouseover.
 *
 * The popup is shown in the browser's top layer (Popover API) and positioned with
 * Floating UI. Its markup is
 * `.pb-popover-root > .pb-popover-box[data-theme][data-placement] > .pb-popover-content + .pb-popover-arrow`.
 *
 * Deprecated: `pb-popover` used tippy.js before, so the popup elements also carry
 * tippy's class names (`[data-tippy-root]`, `.tippy-box`, `.tippy-content`,
 * `.tippy-arrow`), and existing stylesheets using them still apply. Use the
 * `pb-popover-*` class names instead: tippy's will be removed in a future major version.
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
 * @prop {"material" | "light" | "translucent" | "light-border"} theme - The popup theme to use (the same as those of tippy.js).
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
    this._popup = null;
    this._instances = new Set();
    this._content = null;
  }

  /**
   * @deprecated Use `_popup`.
   */
  get _tippy() {
    return this._popup;
  }

  render() {
    if (this.for) {
      return html`<div class="hidden"><slot></slot></div>`;
    }
    return html`<span id="link" part="trigger" class="${this.persistent ? 'persistent' : ''}"
        ><slot name="default"><slot></slot></slot></span
      ><span class="hidden"><slot name="alternate"></slot></span>`;
  }

  connectedCallback() {
    super.connectedCallback();
    // connected again after having been rendered before: see `_attach`
    if (this.hasUpdated) {
      this._registerMutationObserver();
      this._attach();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.for && this._root) {
      const registry = registries.get(this._root);
      if (registry && registry.get(this.for) === this) {
        registry.delete(this.for);
      }
    }
    this._instances.forEach(instance => instance.destroy());
    this._instances.clear();
    this._popup = null;
    if (this._observer) {
      this._observer.disconnect();
    }
  }

  _checkCSSProperties() {
    if (!this.theme) {
      // May stay null: the property is not readable until the element's style
      // has been resolved, so the theme is picked up again in `_resolveTheme`
      // when the popup is first shown.
      this.theme = getCSSProperty(this, '--pb-popover-theme', null);
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

    loadPopoverStyles(this.getRootNode(), this.theme);
  }

  /**
   * Pick up `--pb-popover-theme` if it was not readable yet when the component
   * first updated.
   *
   * An element whose style the browser has not computed returns an empty
   * computed style - `display` reads as the empty string - and every custom
   * property on it reads as empty with it. A `pb-popover` upgrading on a plain
   * HTML page regularly hits this, in particular inside a hidden container, and
   * would keep the default dark theme although the stylesheet sets one. By
   * the time the popup is shown the element is rendered, so the theme can be
   * applied then.
   */
  _resolveTheme(instance) {
    if (this.theme) {
      return;
    }
    const theme = getCSSProperty(this, '--pb-popover-theme', null);
    if (!theme) {
      return;
    }
    // remember 'none' as well, so an unthemed popover stops re-reading
    this.theme = theme;
    if (theme === 'none') {
      return;
    }
    loadPopoverStyles(this.getRootNode(), theme);
    instance.setProps({ theme });
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
    this._instances.forEach(instance => {
      instance.setContent(this._content);
      if (instance.state.isMounted) {
        _bindTriggers(this._root, instance.popper);
      }
    });
  }

  /**
   * Overwrite to enable/disable the popups
   */
  command(command, state) {
    if (command === 'disable') {
      this.disabled = state;
      this._instances.forEach(instance => {
        if (state) {
          instance.disable();
        } else {
          instance.enable();
        }
      });
    }
  }

  firstUpdated() {
    super.firstUpdated();

    this._injectStyles();

    this._registerMutationObserver();

    if (!this.trigger) {
      this.trigger = this.persistent ? 'click' : 'mouseenter';
    }

    this._attach();
  }

  /**
   * Bind the popover to its trigger(s). Runs after the first render and again
   * whenever the element is connected anew: the content of a popup is removed
   * from the page when the popup hides, which destroys the popups of
   * popovers inside it (see `disconnectedCallback`), and Lit does not call
   * `firstUpdated` a second time when the popup shows again.
   */
  _attach() {
    const root = this.getRootNode();
    this._root = root;
    if (this.for) {
      // the first popover for an id wins; clones of it inside popups don't take over
      const registry = _registry(root);
      if (!registry.has(this.for) || !registry.get(this.for).isConnected) {
        registry.set(this.for, this);
      }
      const targets = Array.from(root.querySelectorAll(`[id="${CSS.escape(this.for)}"]`));
      const visible = targets.filter(target => !_isHiddenSource(target));
      if (targets.length === 0) {
        console.error('<pb-popover> target element %s not found', this.for);
      }
      (visible.length > 0 ? visible : targets).forEach(target => this._bind(target));
    } else {
      this._bind(this.shadowRoot.getElementById('link'));
    }
  }

  /**
   * Attach a popup for this popover to the trigger element `target`.
   * Called once for every copy of the trigger.
   */
  _bind(target) {
    if (!target || target._pbPopup) {
      return;
    }
    const root = this._root;
    const options = {
      appendTo: root.nodeType === Node.DOCUMENT_NODE ? document.body : root,
      placement: this.placement,
      touch: this.touch,
      trigger: this.trigger,
      theme: this.theme,
      popupClass: this.popupClass,
    };
    // A trigger inside another popup: the new popup becomes its child. The outer
    // popup stays open while the pointer is over the nested one and closes it
    // when it closes itself.
    const parentPopper = _parentPopper(target);
    if (parentPopper && parentPopper._pbPopup) {
      options.parent = parentPopper._pbPopup;
    }
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
    if (this.fallbackPlacement) {
      options.fallbackPlacements = this.fallbackPlacement.split(' ');
    }
    options.onShow = instance => {
      this._resolveTheme(instance);
      instance.setContent(this._getContent());
      if (this.remote) {
        this._loadRemoteContent();
      }
      this.emitTo('pb-popover-show', { source: this, popup: instance });
    };
    options.onMount = instance => {
      _bindTriggers(root, instance.popper);
    };
    options.onDestroy = instance => {
      this._instances.delete(instance);
      if (this._popup === instance) {
        this._popup = this._instances.values().next().value || null;
      }
    };

    const instance = new PbPopoverPopup(target, options);
    if (this.disabled) {
      instance.disable();
    }
    this._instances.add(instance);
    if (!this._popup) {
      this._popup = instance;
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
