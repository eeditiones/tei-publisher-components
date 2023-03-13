import { cmpVersion } from './utils.js';

if (!window.TeiPublisher) {
    window.TeiPublisher = {};

    TeiPublisher.url = new URL(window.location.href);
}

/**
 * Global set to record the names of the channels for which a
 * `pb-ready` event was fired.
 */
const readyEventsFired = new Set();

/**
 * Gobal map to record the initialization events which have
 * been received.
 */
const initEventsFired = new Map();

export const defaultChannel = '__default__';

export function clearPageEvents() {
    initEventsFired.clear();
}

/**
 * Wait until the global event identified by name
 * has been fired once. This is mainly used to wait for initialization
 * events like `pb-page-ready`.
 *
 * @param {string} name
 * @param {Function} callback
 */
export function waitOnce(name, callback) {
    if (initEventsFired.has(name)) {
        callback(initEventsFired.get(name));
    } else {
        document.addEventListener(name, (ev) => {
            initEventsFired.set(name, ev.detail);
            callback(ev.detail);
        }, {
            once: true
        });
    }
}

/**
 * Get the list of channels this element emits to.
 *
 * @param {HTMLElement} elem the emitting element
 * @returns {String[]} an array of channel names
 */
export function getEmittedChannels(elem) {
    const emitConfig = elem.getAttribute('emit-config');
    if (emitConfig) {
        const json = JSON.parse(emitConfig);
        return Object.keys(json);
    }

    const emitAttr = elem.getAttribute('emit');
    if (emitAttr) {
        return [emitAttr]
    }

    return [defaultChannel];
}

/**
 * Get the list of channels this element subscribes to.
 *
 * @param {HTMLElement} elem the subscribing element
 * @returns {String[]} an array of channel names
 */
export function getSubscribedChannels(elem) {
    const subscribeConfig = elem.getAttribute('subscribe-config');
    if (subscribeConfig) {
        const json = JSON.parse(subscribeConfig);
        return Object.keys(json);
    }
    const subscribeAttr = elem.getAttribute('subscribe');
    if (subscribeAttr) {
        return [subscribeAttr];
    }
    return [defaultChannel];
}

/**
 * Implements the core channel/event mechanism used by components in TEI Publisher
 * to communicate.
 *
 * As there might be several documents/fragments being displayed on a page at the same time,
 * a simple event mechanism is not enough for components to exchange messages. They need to
 * be able to target a specific view. The mechanism implemented by this mixin thus combines
 * events and channels. Components may emit an event into a named channel to which other
 * components might subscribe. For example, there might be a view which subscribes to the
 * channel *transcription* and another one subscribing to *translation*. By using distinct
 * channels, other components can address only one of the two.
 *
 * @polymer
 * @mixinFunction
 */
export const pbMixin = (superclass) => class PbMixin extends superclass {

    static get properties() {
        return {
            /**
             * The name of the channel to subscribe to. Only events on a channel corresponding
             * to this property are listened to.
             */
            subscribe: {
                type: String
            },
            /**
             * Configuration object to define a channel/event mapping. Every property
             * in the object is interpreted as the name of a channel and its value should
             * be an array of event names to listen to.
             */
            subscribeConfig: {
                type: Object,
                attribute: 'subscribe-config'
            },
            /**
             * The name of the channel to send events to.
             */
            emit: {
                type: String
            },
            /**
             * Configuration object to define a channel/event mapping. Every property
             * in the object is interpreted as the name of a channel and its value should
             * be an array of event names to be dispatched.
             */
            emitConfig: {
                type: Object,
                attribute: 'emit-config'
            },
            /**
             * A selector pointing to other components this component depends on.
             * When method `wait` is called, it will wait until all referenced
             * components signal with a `pb-ready` event that they are ready and listening
             * to events.
             */
            waitFor: {
                type: String,
                attribute: 'wait-for'
            },
            _isReady: {
                type: Boolean
            },
            /**
             * Common property to disable the functionality associated with a component.
             * `pb-highlight` and `pb-popover` react to this.
             */
            disabled: {
                type: Boolean,
                reflect: true
            },
            _endpoint: {
                type: String
            },
            _apiVersion: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this._isReady = false;
        this.disabled = false;
        this._subscriptions = new Map();
    }

    connectedCallback() {
        super.connectedCallback();
        waitOnce('pb-page-ready', (options) => {
            this._endpoint = options.endpoint;
            this._apiVersion = options.apiVersion;
        });
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this._subscriptions.forEach((handlers, type) => {
            handlers.forEach((handler) => {
                document.removeEventListener(type, handler);
            });
        });
    }

    /**
     * Enable or disable certain features of a component. Called by `pb-toggle-feature`
     * and `pb-select-feature` to change the components behaviour.
     *
     * By default only one command is known: `disable` will disable any interactive feature
     * of the component.
     *
     * @param {string} command name of an action to take or setting to be toggled
     * @param {Boolean} state the state to set the setting to
     */
    command(command, state) {
        if (command === 'disable') {
            this.disabled = state;
        }
    }

    /**
     * Wait for the components referenced by the selector given in property `waitFor`
     * to signal that they are ready to respond to events. Only wait for elements which
     * emit to one of the channels this component subscribes to.
     *
     * @param {Function} callback function to be called when all components are ready
     */
    wait(callback) {
        if (!this.waitFor) {
            callback();
            return;
        }
        const targetNodes = Array.from(document.querySelectorAll(this.waitFor));
        const targets = targetNodes.filter(target => this.emitsOnSameChannel(target));
        const targetCount = targets.length;
        if (targetCount === 0) {
            // selector did not return any targets
            callback();
            return;
        }
        let count = targetCount;
        targets.forEach((target) => {
            if (target._isReady) {
                count -= 1;
                if (count === 0) {
                    callback();
                }
                return;
            }
            const handler = target.addEventListener('pb-ready', (ev) => {
                if (ev.detail.source === this) {
                    // same source: ignore
                    return;
                }
                count -= 1;
                if (count === 0) {
                    target.removeEventListener('pb-ready', handler);
                    callback();
                }
            });
        });
    }

    /**
     * Wait until a `pb-ready` event is received from one of the channels
     * this component subscribes to. Used internally by components which depend
     * on a particular `pb-view` to be ready and listening to events.
     *
     * @param callback function to be called when `pb-ready` is received
     */
    waitForChannel(callback) {
        // check first if a `pb-ready` event has already been received on one of the channels
        if (this.subscribeConfig) {
            for (const key in this.subscribeConfig) {
                this.subscribeConfig[key].forEach(t => {
                    if (t === 'pb-ready' && readyEventsFired.has(key)) {
                        return callback();
                    }
                });
            }
        } else if (
            (this.subscribe && readyEventsFired.has(this.subscribe)) ||
            (!this.subscribe && readyEventsFired.has('__default__'))
        ) {
            return callback();
        }

        const listeners = this.subscribeTo('pb-ready', (ev) => {
            if (ev.detail._source == this) {
                return;
            }
            listeners.forEach(listener => document.removeEventListener('pb-ready', listener));
            callback();
        });
    }

    /**
     * Wait until the global event identified by name
     * has been fired once. This is mainly used to wait for initialization
     * events like `pb-page-ready`.
     *
     * @param {string} name
     * @param {Function} callback
     * @deprecated Use exported `waitOnce` function
     */
    static waitOnce(name, callback) {
        waitOnce(name, callback);
    }

    /**
     * Signal that the component is ready to respond to events.
     * Emits an event to all channels the component is registered with.
     */
    signalReady(name = 'pb-ready', data) {
        this._isReady = true;
        initEventsFired.set(name, data);
        this.dispatchEvent(new CustomEvent(name, { detail: { data, source: this } }));
        this.emitTo(name, data);
    }

    /**
     * Check if the other element emits to one of the channels this
     * element subscribes to.
     *
     * @param {Element} other the other element to compare with
     */
    emitsOnSameChannel(other) {
        const myChannels = getSubscribedChannels(this);
        const otherChannels = getEmittedChannels(other);
        if (myChannels.length === 0 && otherChannels.length === 0) {
            // both emit to the default channel
            return true;
        }
        return myChannels.some((channel) => otherChannels.includes(channel));
    }

    /**
     * Listen to the event defined by type. If property `subscribe` or `subscribe-config`
     * is defined, this method will trigger the listener only if the event has a key
     * equal to the key defined in `subscribe` or `subscribe-config`.
     *
     * @param {String} type Name of the event, usually starting with `pb-`
     * @param {Function} listener Callback function
     * @param {String[]} [channels] Optional: explicitely specify the channels to emit to. This overwrites
     *      the emit property. Pass empty array to target the default channel.
     */
    subscribeTo(type, listener, channels = []) {
        const chs = channels && channels.length ? channels : getSubscribedChannels(this);
        const handlers = chs.map(key => {
            const handle = ev => {
                if (!ev.detail || !ev.detail.key || ev.detail.key !== key) {
                    return;
                }
                listener(ev);
            };
            document.addEventListener(type, handle);
            return handle;
        });
        // add new handlers to list of active subscriptions
        this._subscriptions.set(type, handlers);
        return handlers;
    }

    /**
     * Dispatch an event of the given type. If the properties `emit` or `emit-config`
     * are defined, the event will be limited to the channel specified there.
     *
     * @param {String} type Name of the event, usually starting with `pb-`
     * @param {Object} [options] Options to be passed in ev.detail
     * @param {String[]} [channels] Optional: explicitely specify the channels to emit to. This overwrites
     *      the 'emit' property setting. Pass empty array to target the default channel.
     */
    emitTo(type, options, channels = []) {
        const chs = channels && channels.length ? channels : getEmittedChannels(this);
        chs.forEach(ch => this._emit(ch, type, options));
    }

    _emit(key, type, options) {
        if (type === 'pb-ready') {
            readyEventsFired.add(key);
        }

        // eslint-disable-next-line prefer-object-spread
        const detail = Object.assign({ key, _source: this }, options);
        const ev = new CustomEvent(type, {
            detail,
            composed: true,
            bubbles: true
        });
        this.dispatchEvent(ev);
    }

    /**
     * Returns the `pb-document` element this component is connected to.
     *
     * @returns the document component or undefined if not set/found
     */
    getDocument() {
        if (this.src) {
            const doc = document.getElementById(this.src);
            if (doc) {
                return doc;
            }
        }
        return null;
    }

    getParameter(name, fallback) {
        const params = TeiPublisher.url.searchParams && TeiPublisher.url.searchParams.getAll(name);
        if (params && params.length == 1) {
            return params[0];
        } else if (params && params.length > 1) {
            return params
        }
        return fallback;
    }

    getParameters() {
        const params = {};
        for (let key of TeiPublisher.url.searchParams.keys()) {
            params[key] = this.getParameter(key);
        }
        return params;
    }

    clearParametersMatching(regex) {
        for (let pair of TeiPublisher.url.searchParams.entries()) {
            if (regex.test(pair[0])) {
                TeiPublisher.url.searchParams.delete(pair[0]);
            }
        }
    }

    getUrl() {
        return TeiPublisher.url;
    }

    getEndpoint() {
        return this._endpoint;
    }

    toAbsoluteURL(relative, server) {
        if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(relative)) {
            return relative;
        }
        const endpoint = server || this.getEndpoint();
        let base;
        if (endpoint === '.') {
            base = new URL(window.location.href);
            // loaded in iframe
        } else if (window.location.protocol === 'about:') {
            base = document.baseURI
        } else {
            base = new URL(`${endpoint}/`, `${window.location.protocol}//${window.location.host}`);
        }
        return new URL(relative, base).href;
    }

    minApiVersion(requiredVersion) {
        return cmpVersion(this._apiVersion, requiredVersion) >= 0;
    }

    lessThanApiVersion(requiredVersion) {
        return cmpVersion(this._apiVersion, requiredVersion) < 0;
    }

    compareApiVersion(requiredVersion) {
        return cmpVersion(this._apiVersion, requiredVersion);
    }
}
