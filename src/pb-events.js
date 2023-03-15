import { defaultChannel } from "./pb-mixin.js";

/**
 * Utility class to plug into TEI Publisher's event system from custom javascript.
 */
export class PbEvents {

    /**
     * Subscribe to an event received on particular channels.
     * 
     * @param {string} name the name of the event to listen for
     * @param {string|string[]|null} channels name of a channel, array of channel names or null to target the default channel
     * @param {Function|undefined} callback function called when event is triggered. 
     * Receives the event as first and the event handler as second parameter.
     */
    static subscribe(name, channels, callback, once=false) {
        if (channels && !Array.isArray(channels)) {
            // eslint-disable-next-line no-param-reassign
            channels = [channels];
        }
        if (!channels || !channels.length) {
            channels = [defaultChannel];
        }
        const handler = document.addEventListener(name, (/** @type {CustomEvent} */ ev) => {
            if ((!channels && !(ev.detail && ev.detail.key)) || 
                (channels && ev.detail && ev.detail.key && channels.indexOf(ev.detail.key) > -1)) {
                if (callback) {
                    callback(ev, handler);
                }
            }
        }, {
            once
        });
    }

    /**
     * Subscribe to an event received on a particular channel once. Returns a promise
     * which resolves when the event is caught.
     * 
     * @param {string} name the name of the event to listen for
     * @param {string|string[]|null} channels name of a channel, array of channel names or null to target the default channel
     * @returns {Promise} resolves if event is caught, providing the event as parameter
     */
    static subscribeOnce(name, channels=null) {
        if (channels && !Array.isArray(channels)) {
            // eslint-disable-next-line no-param-reassign
            channels = [channels];
        }
        if (!channels || !channels.length) {
            channels = [defaultChannel];
        }
        return new Promise((resolve) => {
            document.addEventListener(name, (/** @type {CustomEvent} */ ev) => {
                if ((!channels && !(ev.detail && ev.detail.key)) || 
                    (channels && ev.detail && ev.detail.key && channels.indexOf(ev.detail.key) > -1)) {
                    resolve(ev);
                }
            }, {
                once: true
            });
        });
    }

    /**
     * Emit an event to a particular channel
     * 
     * @param {string} type the name of the event to emit
     * @param {string|null} channel name of the channel or null to target the default channel
     * @param {any|null} detail value to pass in the event details
     */
    static emit(type, channel=null, detail=null) {
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