function extendRange(current, ancestor) {
  let parent = current;
  while (parent.parentNode != ancestor) {
    parent = parent.parentElement;
  }
  return parent;
}

/**
 * 
 * @param {Node} node the node for which to compute an absolute offset
 * @param {Number} offset start offset
 * @returns {Number} absolute offset
 */
function absoluteOffset(node, offset) {
  let sibling = node.previousSibling;
  while(sibling) {
    offset += sibling.textContent.length;
    sibling = sibling.previousSibling;
  }
  return offset;
}

function toCharacterRange(node, offset) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    const container = node.closest('[data-tei]');
    if (offset === 0) {
      return {
        type: 'include',
        parent: container.getAttribute('data-tei'),
        offset: 0
      }
    }
    const child = container.childNodes[offset];
    return {
      type: 'include',
      parent: container.getAttribute('data-tei'),
      offset: absoluteOffset(child, 0)
    };
  }
  const container = node.parentNode.closest('[data-tei]');
  return {
    parent: container.getAttribute('data-tei'),
    offset: absoluteOffset(node, offset)
  };
}

function absoluteOffsetToPoint(container, offset) {
  let relOffset = offset;
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    if (relOffset - walker.currentNode.textContent.length <= 0) {
      return [walker.currentNode, relOffset];
    }
    relOffset -= walker.currentNode.textContent.length;
  }
  return null;
}

export const pbSelectable = superclass =>
  class PbSelectable extends superclass {
    constructor() {
      super();
      this._ranges = [];
    }

    _updateAnnotation(teiRange) {
      const view = this.shadowRoot.getElementById('view');
      const start = view.querySelector(`[data-tei="${teiRange.start.parent}"]`);
      const end = view.querySelector(`[data-tei="${teiRange.end.parent}"]`);

      const range = document.createRange();

      const startPoint = absoluteOffsetToPoint(start, teiRange.start.offset);
      const endPoint = absoluteOffsetToPoint(end, teiRange.end.offset);
      console.log('start: %o; end: %o', startPoint, endPoint);

      range.setStart(startPoint[0], startPoint[1]);

      if (teiRange.end.type === 'include') {
        range.setEndAfter(endPoint[0].parentNode);
      } else {
        range.setEnd(endPoint[0], endPoint[1]);
      }
      const span = document.createElement('span');
      span.style.color = '#FF9977';
      range.surroundContents(span);
    }

    updateAnnotations() {
      this._ranges.forEach(this._updateAnnotation.bind(this));
    }

    connectedCallback() {
      super.connectedCallback();

      let isMouseDown = false;

      this._inHandler = false;
      this._pendingCallback = null;

      const scheduleCallback = (delay = 10) => {
        this._pendingCallback = setTimeout(() => {
          this._selectionChanged();
        }, delay);
      };

      /** @param {Event} event */
      this._eventHandler = event => {
        if (event.type === 'selectionchange' && this._inHandler) {
          return;
        }
        if (event.type === 'mousedown') {
          isMouseDown = true;
        }
        if (event.type === 'mouseup') {
          isMouseDown = false;
        }

        // If the user makes a selection with the mouse, wait until they release
        // it before reporting a selection change.
        if (isMouseDown) {
          return;
        }

        this._cancelPendingCallback();

        // Schedule a notification after a short delay. The delay serves two
        // purposes:
        //
        // - If this handler was called as a result of a 'mouseup' event then the
        //   selection will not be updated until the next tick of the event loop.
        //   In this case we only need a short delay.
        //
        // - If the user is changing the selection with a non-mouse input (eg.
        //   keyboard or selection handles on mobile) this buffers updates and
        //   makes sure that we only report one when the update has stopped
        //   changing. In this case we want a longer delay.

        const delay = event.type === 'mouseup' ? 10 : 100;
        scheduleCallback(delay);
      };

      document.addEventListener('selectionchange', this._eventHandler.bind(this));
      this.shadowRoot.addEventListener('mousedown', this._eventHandler.bind(this));
      this.shadowRoot.addEventListener('mouseup', this._eventHandler.bind(this));
    }

    _selectionChanged() {
      const selection = this.shadowRoot.getSelection();
      const range = this._selectedRange(selection);
      if (range) {
        const ancestor = range.commonAncestorContainer;
        if (ancestor.nodeType === Node.ELEMENT_NODE) {
          if (range.startContainer.parentElement != ancestor) {
            const parent = extendRange(range.startContainer, ancestor);
            range.setStartBefore(parent);
          }
          if (range.endContainer.parentElement != ancestor) {
            const parent = extendRange(range.endContainer, ancestor);
            range.setEndAfter(parent);
          }
        }
        this._inHandler = true;
        setTimeout(() => {
          selection.removeAllRanges();
          selection.addRange(range);
          this.inHandler = false;
        }, 100);

        const startRange = toCharacterRange(range.startContainer, range.startOffset);
        const endRange = toCharacterRange(range.endContainer, range.endOffset);
        const adjustedRange = {
          start: startRange,
          end: endRange,
        };
        console.log('Range adjusted: %o', adjustedRange);
        this._ranges.push(adjustedRange);

        this._updateAnnotation(adjustedRange);
      }
    }

    /**
     *
     * @returns {Range|null} the selected range, if any
     */
    _selectedRange(selection) {
      if (!selection || selection.rangeCount === 0) {
        return null;
      }
      if (selection.anchorNode.getRootNode() != this.shadowRoot) {
        return null;
      }
      const range = selection.getRangeAt(0);
      if (range.collapsed) {
        return null;
      }
      return range;
    }

    _cancelPendingCallback() {
      if (this._pendingCallback) {
        clearTimeout(this._pendingCallback);
        this._pendingCallback = null;
      }
    }
  };
