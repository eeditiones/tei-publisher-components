function extendRange(current, ancestor) {
  let parent = current;
  while (parent.parentNode != ancestor) {
    parent = parent.parentElement;
  }
  return parent;
}

function computeTEIRange(container, offset) {
  let teiRange;
  if (container.nodeType === Node.ELEMENT_NODE) {
    const child = container.childNodes[offset];
    return {
      type: 'include',
      id: child.getAttribute('data-tei')
    }
  }

  let previous = container.previousSibling;
  while (previous) {
    if (previous.nodeType === Node.ELEMENT_NODE && previous.hasAttribute('data-tei')) {
      break;
    }
    offset += previous.textContent.length;
    previous = previous.previousSibling;
  }

  if (previous) {
    teiRange = {
      type: 'sibling',
      id: previous.getAttribute('data-tei'),
      offset,
    };
  } else {
    const parent = container.parentElement;
    teiRange = {
      type: 'child',
      id: parent.getAttribute('data-tei'),
      offset,
    };
  }

  return teiRange;
}

export const pbSelectable = superclass =>
  class PbSelectable extends superclass {
    constructor() {
      super();
      this._ranges = [
        {
          start: {
            type: 'include',
            id: '4.4.2.2.4.6.4.1',
          },
          end: {
            type: 'sibling',
            id: '4.4.2.2.4.6.4.1',
            offset: 28,
          },
        },
      ];
    }

    connectedCallback() {
      super.connectedCallback();

      let isMouseDown = false;

      this.inHandler = false;
      this._pendingCallback = null;

      const scheduleCallback = (delay = 10) => {
        this._pendingCallback = setTimeout(() => {
          this._selectionChanged();
        }, delay);
      };

      /** @param {Event} event */
      this._eventHandler = event => {
        if (event.type === 'selectionchange' && this.inHandler) {
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
        console.log('Range: %o %o', range.cloneContents(), range);
        this.inHandler = true;
        selection.removeAllRanges();
        selection.addRange(range);
        setTimeout(() => {
          this.inHandler = false;
        }, 100);

        let startRange = computeTEIRange(range.startContainer, range.startOffset);
        let endRange = computeTEIRange(range.endContainer, range.endOffset);
        console.log('start: %o; end: %o', startRange, endRange);

        // const start = range.startContainer;
        // let previous = start.previousSibling;
        // let offset = range.startOffset;
        // while(previous) {
        //     if (previous.nodeType === Node.ELEMENT_NODE && previous.hasAttribute('data-tei')) {
        //         break;
        //     }
        //     offset += previous.textContent.length;
        //     previous = previous.previousSibling;
        // }
        // if (previous) {
        //     const teiRange = {
        //         type: 'sibling',
        //         id: previous.getAttribute('data-tei'),
        //         offset
        //     }
        //     console.log(teiRange);
        // } else {
        //     const ancestor = start.parentNode.closest('[data-tei]');
        //     const teiRange = {
        //         type: "sibling",
        //         id: ancestor.getAttribute("data-tei"),
        //         offset: range.startOffset,
        //     };
        //     console.log(teiRange);
        // }
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
