export const pbLightDom = (superclass) => class PbLightDom extends superclass {

    createRenderRoot() {
        // Render in light DOM
        return this;
    }

    connectedCallback() {
        super.connectedCallback();
        this._content = document.createElement('div');
        this._content.innerHTML = this.innerHTML;
        console.log(this._content);
    }

    /**
     * When the class is used without shadow DOM, use this method to find elements which should be
     * rendered in the slot.
     * 
     * @param {string|undefined|null} slotName - name of the slot to fill, if its a named slot
     * @returns {Array<Node>} an array of cloned nodes
     */
    fillSlot(slotName = null, fallback = []) {
        if (!slotName) {
            const slots = this._content.querySelectorAll(':scope > :not([slot])');
            return Array.from(slots).map(node => {
                const clone = node.cloneNode(true);
                /** @type {Element} */ (clone).removeAttribute('slot');
                return clone;
            });
        } else {
            const slot = this._content.querySelector(`:scope > [slot="${slotName}"]`);
            if (slot) {
                const clone = slot.cloneNode(true);
                /** @type {Element} */ (clone).removeAttribute('slot');
                return [clone];
            }
            return fallback;
        }
    }
};