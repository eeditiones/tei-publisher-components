import {
  computePosition,
  autoUpdate,
  offset,
  flip,
  shift,
  arrow,
  autoPlacement,
} from '@floating-ui/dom';

/**
 * The popup behind `pb-popover`: shows content next to a trigger ("reference")
 * element. It replaces tippy.js, which is no longer maintained.
 *
 * - The popup element uses the browser's Popover API (`popover="manual"`), so it
 *   is shown in the top layer: no ancestor's `overflow` or `z-index` can clip
 *   or cover it. It stays in the DOM of the trigger's root (e.g. the shadow root
 *   of `pb-view`), so the ODD stylesheet applies to its content as before.
 * - Floating UI positions it.
 * - Markup: `.pb-popover-root > .pb-popover-box[data-theme][data-placement] >
 *   .pb-popover-content + .pb-popover-arrow`. The elements also carry tippy's
 *   class names (`[data-tippy-root]`, `.tippy-box`, `.tippy-content`,
 *   `.tippy-arrow`), so existing stylesheets keep working. Those are deprecated.
 * - The object mimics the part of tippy's instance API which `pb-popover` and
 *   applications use: `show`, `hide`, `unmount`, `destroy`, `enable`, `disable`,
 *   `setContent`, `setProps`, `hideWithInteractivity`, `state`, `props`,
 *   `popper` and `reference`. The trigger and the popup element refer back to
 *   it via `_pbPopup` (and, deprecated, `_tippy`).
 *
 * Popups opened from inside another popup are its children: the parent stays
 * open while the pointer is over a child and closes its children when it closes.
 */

const HIDE_DELAY = 200;
const HOLD_DELAY = 500;

const supportsPopover =
  typeof HTMLElement !== 'undefined' && Object.prototype.hasOwnProperty.call(HTMLElement.prototype, 'popover');

/**
 * Let `elem` refer to `popup` as `_pbPopup` and, for code written for tippy.js,
 * as `_tippy` (deprecated).
 */
/* eslint-disable no-param-reassign */
function _link(elem, popup) {
  elem._pbPopup = popup;
  elem._tippy = popup;
}

function _unlink(elem) {
  delete elem._pbPopup;
  delete elem._tippy;
}
/* eslint-enable no-param-reassign */

/** Visible popups, most recently shown last: `Escape` closes the last one. */
const visiblePopups = [];

/** Pointer type of the last pointerdown, to tell taps from mouse clicks. */
let lastPointerType = 'mouse';

let globalListenersInstalled = false;

function installGlobalListeners() {
  if (globalListenersInstalled) {
    return;
  }
  globalListenersInstalled = true;
  document.addEventListener(
    'pointerdown',
    ev => {
      lastPointerType = ev.pointerType || 'mouse';
      // click outside: close popups which close on outside clicks, innermost first
      [...visiblePopups].reverse().forEach(popup => {
        if (popup.state.isVisible && !popup._containsEvent(ev)) {
          popup._onClickOutside(ev);
        }
      });
    },
    true,
  );
  document.addEventListener('keydown', ev => {
    if (ev.key === 'Escape' && visiblePopups.length > 0) {
      const popup = visiblePopups[visiblePopups.length - 1];
      popup.hide();
      if (popup.props.trigger.includes('click') || popup.props.trigger.includes('focus')) {
        popup.reference.focus({ preventScroll: true });
      }
    }
  });
}

function splitTrigger(trigger) {
  return (trigger || '').split(/\s+/).filter(Boolean);
}

export class PbPopoverPopup {
  /**
   * @param {HTMLElement} reference the trigger
   * @param {object} props
   * @param {Node} props.appendTo container for the popup element: a shadow root or `document.body`
   * @param {PbPopoverPopup} [props.parent] the popup containing the trigger, if any
   * @param {string} [props.trigger='mouseenter focus'] space separated: mouseenter, focus, focusin, click, manual
   * @param {string} [props.placement='auto']
   * @param {string[]} [props.fallbackPlacements]
   * @param {string|boolean} [props.touch='hold'] true, false or 'hold' (long press) on touch screens
   * @param {string} [props.theme]
   * @param {string} [props.popupClass]
   * @param {Function} [props.onShow] called before showing; return false to cancel
   * @param {Function} [props.onMount] called once the popup is positioned on screen
   * @param {Function} [props.onHide]
   * @param {Function} [props.onTrigger] called with the triggering event
   * @param {Function} [props.onClickOutside] called with the pointerdown event
   * @param {Function} [props.onDestroy]
   */
  constructor(reference, props) {
    installGlobalListeners();

    this.reference = reference;
    this.props = {
      trigger: 'mouseenter focus',
      placement: 'auto',
      touch: 'hold',
      ...props,
    };
    this.parent = this.props.parent || null;
    this.children = new Set();
    this.state = {
      isEnabled: true,
      isVisible: false,
      isMounted: false,
      isDestroyed: false,
      isShown: false,
    };
    // pointer over the trigger / over the popup: kept apart, because entering the
    // popup from the trigger fires pointerenter (popup) before mouseleave (trigger)
    this._overReference = false;
    this._overPopper = false;
    this._hideTimeout = null;
    this._holdTimeout = null;
    this._cleanupAutoUpdate = null;
    this._listeners = [];

    this._createPopper();
    this._addListeners();

    _link(this.reference, this);
    if (this._isInteractiveTrigger()) {
      reference.setAttribute('aria-expanded', 'false');
    }
  }

  _createPopper() {
    const popper = document.createElement('div');
    popper.setAttribute('data-tippy-root', '');
    popper.className = 'pb-popover-root';
    if (supportsPopover) {
      popper.popover = 'manual';
    }
    const box = document.createElement('div');
    box.className = 'pb-popover-box tippy-box';
    box.setAttribute('role', 'tooltip');
    box.setAttribute('data-state', 'hidden');
    box.setAttribute('data-animation', 'fade');
    box.tabIndex = -1;
    const content = document.createElement('div');
    content.className = 'pb-popover-content tippy-content';
    content.setAttribute('data-state', 'hidden');
    const arrowElem = document.createElement('div');
    arrowElem.className = 'pb-popover-arrow tippy-arrow';
    box.append(content, arrowElem);
    popper.append(box);

    this.popper = popper;
    this._box = box;
    this._content = content;
    this._arrow = arrowElem;
    _link(popper, this);

    this._applyTheme();
    if (this.props.popupClass) {
      popper.classList.add(...this.props.popupClass.split(/\s+/).filter(Boolean));
    }

    // keep the popup (and its parents) open while the pointer is over it
    popper.addEventListener('pointerenter', () => {
      this._overPopper = true;
      this._cancelHide(true);
    });
    popper.addEventListener('pointerleave', ev => {
      this._overPopper = false;
      if (!this._containsTarget(ev.relatedTarget)) {
        this._scheduleHide();
      }
    });
    popper.addEventListener('focusout', ev => {
      if (this._hasTrigger('focus', 'focusin') && !this._containsTarget(ev.relatedTarget)) {
        this._scheduleHide();
      }
    });
  }

  _applyTheme() {
    const { theme } = this.props;
    if (theme && theme !== 'none') {
      this._box.setAttribute('data-theme', theme);
    } else {
      this._box.removeAttribute('data-theme');
    }
  }

  _hasTrigger(...names) {
    const triggers = splitTrigger(this.props.trigger);
    return names.some(name => triggers.includes(name));
  }

  _isInteractiveTrigger() {
    return this._hasTrigger('click');
  }

  _listen(target, type, handler, options) {
    target.addEventListener(type, handler, options);
    this._listeners.push(() => target.removeEventListener(type, handler, options));
  }

  _removeListeners() {
    this._listeners.forEach(remove => remove());
    this._listeners = [];
  }

  _addListeners() {
    const ref = this.reference;
    const isTouch = () => lastPointerType === 'touch';
    const touchBlocked = () => isTouch() && (this.props.touch === false || this.props.touch === 'hold');

    if (this._hasTrigger('mouseenter')) {
      this._listen(ref, 'mouseenter', ev => {
        if (touchBlocked()) {
          return;
        }
        this._overReference = true;
        this._trigger(ev);
      });
      this._listen(ref, 'mouseleave', ev => {
        this._overReference = false;
        if (!this._containsTarget(ev.relatedTarget)) {
          this._scheduleHide();
        }
      });
    }
    if (this._hasTrigger('focus', 'focusin')) {
      this._listen(ref, 'focusin', ev => {
        if (touchBlocked()) {
          return;
        }
        this._trigger(ev);
      });
      this._listen(ref, 'focusout', ev => {
        if (!this._containsTarget(ev.relatedTarget)) {
          this._scheduleHide();
        }
      });
    }
    if (this._hasTrigger('click')) {
      this._listen(ref, 'click', ev => {
        if (touchBlocked()) {
          return;
        }
        this._trigger(ev);
      });
    }
    // long press on touch screens
    if (this.props.touch === 'hold' && !this._hasTrigger('manual')) {
      const cancelHold = () => clearTimeout(this._holdTimeout);
      this._listen(ref, 'pointerdown', ev => {
        if (ev.pointerType !== 'touch') {
          return;
        }
        cancelHold();
        this._holdTimeout = setTimeout(() => this._trigger(ev), HOLD_DELAY);
      });
      this._listen(ref, 'pointerup', cancelHold);
      this._listen(ref, 'pointercancel', cancelHold);
      this._listen(ref, 'pointermove', cancelHold);
      this._listen(ref, 'contextmenu', ev => {
        if (this.state.isVisible && isTouch()) {
          ev.preventDefault();
        }
      });
    }
  }

  _trigger(ev) {
    if (this.props.onTrigger) {
      this.props.onTrigger(this, ev);
    }
    this._cancelHide(true);
    this.show();
  }

  /** Is `target` inside the trigger, the popup or one of its child popups? */
  _containsTarget(target) {
    if (!target) {
      return false;
    }
    if (this.reference.contains(target) || this.popper.contains(target)) {
      return true;
    }
    return Array.from(this.children).some(child => child._containsTarget(target));
  }

  /** Did `ev` happen inside the trigger, the popup or one of its child popups? */
  _containsEvent(ev) {
    const path = ev.composedPath ? ev.composedPath() : [ev.target];
    const inside = popup =>
      path.includes(popup.reference) ||
      path.includes(popup.popper) ||
      Array.from(popup.children).some(inside);
    return inside(this);
  }

  _onClickOutside(ev) {
    if (ev.pointerType === 'touch') {
      // no pointer to move away on touch screens: a tap outside closes any popup
      this.hide();
    } else if (this.props.onClickOutside) {
      this.props.onClickOutside(this, ev);
    } else if (this._hasTrigger('click') && !this._hasTrigger('mouseenter')) {
      this.hide();
    }
  }

  /** Should the popup stay open because the pointer is over it or one of its open children? */
  _isHovered() {
    return (
      this._overReference ||
      this._overPopper ||
      Array.from(this.children).some(child => child.state.isVisible && child._isHovered())
    );
  }

  _scheduleHide() {
    clearTimeout(this._hideTimeout);
    if (!this.state.isVisible) {
      return;
    }
    // popups opened by a click stay until clicked outside
    if (this._shownByClick) {
      return;
    }
    this._hideTimeout = setTimeout(() => {
      if (this._isHovered() || this._hasFocus()) {
        return;
      }
      this.hide();
      if (this.parent) {
        this.parent._scheduleHide();
      }
    }, HIDE_DELAY);
  }

  _cancelHide(withParents) {
    clearTimeout(this._hideTimeout);
    if (withParents && this.parent) {
      this.parent._cancelHide(true);
    }
  }

  _hasFocus() {
    if (!this._hasTrigger('focus', 'focusin')) {
      return false;
    }
    const root = this.reference.getRootNode();
    const active = root.activeElement || document.activeElement;
    return this._containsTarget(active);
  }

  // --- tippy-compatible API ---

  setContent(content) {
    if (content === null || content === undefined) {
      this._content.replaceChildren();
    } else if (typeof content === 'string') {
      this._content.innerHTML = content;
    } else {
      this._content.replaceChildren(content);
    }
    if (this.state.isMounted) {
      this._update();
    }
  }

  setProps(props) {
    const oldTrigger = this.props.trigger;
    this.props = { ...this.props, ...props };
    if ('theme' in props) {
      this._applyTheme();
    }
    if ('popupClass' in props && props.popupClass) {
      this.popper.classList.add(...props.popupClass.split(/\s+/).filter(Boolean));
    }
    if (this.props.trigger !== oldTrigger) {
      this._removeListeners();
      this._addListeners();
    }
    if (this.state.isMounted) {
      this._update();
    }
  }

  enable() {
    this.state.isEnabled = true;
  }

  disable() {
    this.state.isEnabled = false;
  }

  show() {
    if (this.state.isDestroyed || !this.state.isEnabled || this.state.isVisible) {
      return;
    }
    if (!this.reference.isConnected) {
      return;
    }
    if (this.props.onShow && this.props.onShow(this) === false) {
      return;
    }
    this._shownByClick = lastPointerType !== 'touch' && this._hasTrigger('click') && !this._overReference;

    if (!this.popper.isConnected) {
      this.props.appendTo.appendChild(this.popper);
    }
    if (supportsPopover && !this.popper.matches(':popover-open')) {
      this.popper.showPopover();
    }
    this.state.isVisible = true;
    this.state.isMounted = true;
    this.state.isShown = false;
    if (this.parent) {
      this.parent.children.add(this);
    }
    visiblePopups.push(this);
    if (this._isInteractiveTrigger()) {
      this.reference.setAttribute('aria-expanded', 'true');
    }

    this._cleanupAutoUpdate = autoUpdate(this.reference, this.popper, () => this._update());
    this._update().then(() => {
      if (!this.state.isVisible) {
        return;
      }
      this._box.setAttribute('data-state', 'visible');
      this._content.setAttribute('data-state', 'visible');
      this.state.isShown = true;
      if (this.props.onMount) {
        this.props.onMount(this);
      }
    });
  }

  hide() {
    clearTimeout(this._hideTimeout);
    if (!this.state.isVisible) {
      return;
    }
    if (this.props.onHide && this.props.onHide(this) === false) {
      return;
    }
    this.children.forEach(child => child.hide());
    this.state.isVisible = false;
    this.state.isShown = false;
    this._shownByClick = false;
    const idx = visiblePopups.indexOf(this);
    if (idx >= 0) {
      visiblePopups.splice(idx, 1);
    }
    if (this.parent) {
      this.parent.children.delete(this);
    }
    if (this._isInteractiveTrigger()) {
      this.reference.setAttribute('aria-expanded', 'false');
    }
    this.unmount();
  }

  hideWithInteractivity() {
    this.hide();
  }

  unmount() {
    if (this.state.isVisible) {
      this.hide();
      return;
    }
    if (this._cleanupAutoUpdate) {
      this._cleanupAutoUpdate();
      this._cleanupAutoUpdate = null;
    }
    this._box.setAttribute('data-state', 'hidden');
    this._content.setAttribute('data-state', 'hidden');
    if (supportsPopover && this.popper.matches(':popover-open')) {
      this.popper.hidePopover();
    }
    // removing the popup takes its content out of the page: popovers inside it
    // release their popups and bind again when it is shown next time
    this.popper.remove();
    // a removed element gets no pointerleave
    this._overPopper = false;
    this.state.isMounted = false;
  }

  destroy() {
    if (this.state.isDestroyed) {
      return;
    }
    this.hide();
    this.unmount();
    this._removeListeners();
    clearTimeout(this._holdTimeout);
    this.state.isDestroyed = true;
    if (this.reference._pbPopup === this) {
      _unlink(this.reference);
    }
    _unlink(this.popper);
    if (this.props.onDestroy) {
      this.props.onDestroy(this);
    }
  }

  _placementOptions() {
    const { placement, fallbackPlacements } = this.props;
    const middleware = [offset(10)];
    let resolved = placement || 'auto';
    if (resolved.startsWith('auto')) {
      const alignment = resolved.split('-')[1];
      middleware.push(autoPlacement(alignment ? { alignment } : {}));
      resolved = undefined;
    } else {
      middleware.push(flip(fallbackPlacements ? { fallbackPlacements } : {}));
    }
    middleware.push(shift({ padding: 5 }));
    middleware.push(arrow({ element: this._arrow, padding: 5 }));
    return { placement: resolved, middleware, strategy: 'fixed' };
  }

  async _update() {
    if (!this.state.isMounted) {
      return;
    }
    const { x, y, placement, middlewareData } = await computePosition(
      this.reference,
      this.popper,
      this._placementOptions(),
    );
    // like Popper did for tippy: the popup sits at the viewport's origin and is
    // moved by a transform, so its width is computed against the whole viewport
    this.popper.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
    this._box.setAttribute('data-placement', placement);
    if (middlewareData.arrow) {
      const { x: ax, y: ay } = middlewareData.arrow;
      const side = placement.split('-')[0];
      Object.assign(this._arrow.style, {
        left: ax != null && (side === 'top' || side === 'bottom') ? `${ax}px` : '',
        top: ay != null && (side === 'left' || side === 'right') ? `${ay}px` : '',
      });
    }
  }
}

/** Popup root element: undo the browser's default styles for `[popover]`. */
export const popupRootStyles = `
  .pb-popover-root {
    position: fixed;
    inset: 0 auto auto 0;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    overflow: visible;
    z-index: 9999;
  }
  .pb-popover-box[data-animation=fade] {
    transition: opacity 150ms;
  }
  .pb-popover-arrow {
    position: absolute;
  }
`;
