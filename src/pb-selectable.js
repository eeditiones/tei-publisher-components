export const pbSelectable = (superclass) =>
    class PbSelectable extends superclass {
        constructor() {
            super();
            this._ranges = [];
        }

        connectedCallback() {
            super.connectedCallback();

            let isMouseDown = false;

            this._pendingCallback = null;

            const scheduleCallback = (delay = 10) => {
                this._pendingCallback = setTimeout(() => {
                    this._selectionChanged();
                }, delay);
            };

            /** @param {Event} event */
            this._eventHandler = (event) => {
                if (event.type === "mousedown") {
                    isMouseDown = true;
                }
                if (event.type === "mouseup") {
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

                const delay = event.type === "mouseup" ? 10 : 100;
                scheduleCallback(delay);
            };

            document.addEventListener(
                "selectionchange",
                this._eventHandler.bind(this)
            );
            this.shadowRoot.addEventListener(
                "mousedown",
                this._eventHandler.bind(this)
            );
            this.shadowRoot.addEventListener(
                "mouseup",
                this._eventHandler.bind(this)
            );
        }

        _selectionChanged() {
            const range = this._selectedRange();
            if (range) {
                const start = range.startContainer;
                let previous = start.previousSibling;
                let offset = range.startOffset;
                while(previous) {
                    if (previous.nodeType === Node.ELEMENT_NODE && previous.hasAttribute('data-tei')) {
                        break;
                    }
                    offset += previous.textContent.length;
                    previous = previous.previousSibling;
                }
                if (previous) {
                    const teiRange = {
                        type: 'sibling',
                        id: previous.getAttribute('data-tei'),
                        offset
                    }
                    console.log(teiRange);
                } else {
                    const ancestor = start.parentNode.closest('[data-tei]');
                    const teiRange = {
                        type: "sibling",
                        id: ancestor.getAttribute("data-tei"),
                        offset: range.startOffset,
                    };
                    console.log(teiRange);
                }
            }
        }

        /**
         *
         * @returns {Range|null} the selected range, if any
         */
        _selectedRange() {
            const selection = this.shadowRoot.getSelection();
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
