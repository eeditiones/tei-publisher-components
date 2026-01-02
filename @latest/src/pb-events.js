import { defaultChannel } from './pb-mixin.js';

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
  static subscribe(name, channels, callback, once = false) {
    const _channels = PbEvents._getChannels(channels);
    const handler = document.addEventListener(
      name,
      (/** @type {CustomEvent} */ ev) => {
        if (callback && ev.detail && ev.detail.key && _channels.includes(ev.detail.key)) {
          callback(ev, handler);
        }
      },
      {
        once,
      },
    );
  }

  /**
   * Subscribe to an event received on a particular channel once. Returns a promise
   * which resolves when the event is caught.
   *
   * @param {string} name the name of the event to listen for
   * @param {string|string[]|null} channels name of a channel, array of channel names or null to target the default channel
   * @returns {Promise} resolves if event is caught, providing the event as parameter
   */
  static subscribeOnce(name, channels = null) {
    const _channels = PbEvents._getChannels(channels);
    return new Promise(resolve => {
      document.addEventListener(
        name,
        (/** @type {CustomEvent} */ ev) => {
          if (ev.detail && ev.detail.key && _channels.includes(ev.detail.key)) {
            resolve(ev);
          }
        },
        {
          once: true,
        },
      );
    });
  }

  /**
   * determine channels to subscribe to
   *
   * @param {string|string[]|null} channels name of a channel, array of channel names or null to target the default channel
   * @returns {string[]} channels
   */
  static _getChannels(channels) {
    // no channels: null or empty string or empty array
    if (channels === null || !channels.length) {
      return [defaultChannel];
    }
    // single string
    if (!Array.isArray(channels)) {
      return [channels];
    }
    return channels;
  }

  /**
   * Emit an event to a particular channel
   *
   * @param {string} type the name of the event to emit
   * @param {string|null} channel name of the channel or null to target the default channel
   * @param {any|null} detail value to pass in the event details
   */
  static emit(type, channel = null, detail = null) {
    const options = detail || {};
    options.key = channel || defaultChannel;
    const ev = new CustomEvent(type, {
      detail: options,
    });
    document.dispatchEvent(ev);
  }

  /**
   * Wait for one or more TEI Publisher web components to become ready (by waiting for their `pb-ready` event).
   *
   * @param {HTMLElement|HTMLElement[]} targets element or array of elements to check for ready state
   * @returns Promise which resolves when all components are ready
   */
  static ifReady(targets) {
    if (!Array.isArray(targets)) {
      targets = [targets];
    }
    // const targets = Array.from(document.querySelectorAll(selector));
    return new Promise(resolve => {
      const targetCount = targets.length;
      if (targetCount === 0) {
        // selector did not return any targets
        resolve();
        return;
      }
      let count = targetCount;
      targets.forEach(target => {
        if (target._isReady) {
          count -= 1;
          if (count === 0) {
            resolve();
          }
          return;
        }
        const handler = target.addEventListener('pb-ready', () => {
          count -= 1;
          if (count === 0) {
            target.removeEventListener('pb-ready', handler);
            resolve();
          }
        });
      });
    });
  }
}

if (!window.pbEvents) {
  window.pbEvents = PbEvents;
}
