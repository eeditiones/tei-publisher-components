/**
 * Utility class to plug into TEI Publisher's event system from custom javascript.
 */
export class PbEvents {

    /**
     * Subscribe to an event received on a particular channel.
     * 
     * @param {string} name the name of the event to listen for
     * @param {string|null} channel name of the channel or null to target the default channel
     * @param {Function|undefined} callback function called when event is triggered. 
     * Receives the event as first and the event handler as second parameter.
     * @returns {Promise} resolves if event is caught, providing the event as parameter
     */
    static subscribe(name, channel, callback, once=false) {
        return new Promise((resolve) => {
            const handler = document.addEventListener(name, (/** @type {CustomEvent} */ ev) => {
                if ((!channel && !(ev.detail && ev.detail.key)) || 
                    (channel && ev.detail && ev.detail.key && ev.detail.key === channel)) {
                    if (callback) {
                        callback(ev, handler);
                    }
                    resolve(ev);
                }
            }, {
                once
            });
        });
    }

    /**
     * Emit an event to a particular channel
     * 
     * @param {string} type the name of the event to emit
     * @param {string|null} channel name of the channel or null to target the default channel
     * @param {any|undefined} detail value to pass in the event details
     */
    static emit(type, channel, detail) {
        const options = detail || {};
        if (channel) {
            options.key = channel;
        }
        const ev = new CustomEvent(type, {
            detail: options
        });
        document.dispatchEvent(ev);
    }
}

if (!window.pbEvents) {
    window.pbEvents = PbEvents;
}