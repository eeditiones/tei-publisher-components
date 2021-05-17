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

export function clearPageEvents() {
    initEventsFired.clear();
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
        PbMixin.waitOnce('pb-page-ready', (options) => {
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
     * Returns true if the element is disabled, i.e. either the disabled property is
     * set or the element's computed style contains display: none.
     * 
     * @returns true if the element is in disabled state
     */
    isDisabled() {
        if (this.disabled) {
            return true;
        }
        const style = window.getComputedStyle(this);
        return style.display === 'none';
    }

    /**
     * Wait for the components referenced by the selector given in property `waitFor`
     * to signal that they are ready to respond to events. Only wait for elements which
     * emit to one of the channels this component subscribes to.
     *
     * @param callback function to be called when all components are ready
     */
    wait(callback) {
        if (this.waitFor) {
            const targetNodes = Array.from(document.querySelectorAll(this.waitFor));
            const targets = targetNodes.filter(target => this.emitsOnSameChannel(target));
            const targetCount = targets.length;
            if (targetCount === 0) {
                // selector did not return any targets
                return callback();
            }
            let count = 0;
            targets.forEach((target) => {
                if (target._isReady) {
                    count++;
                    if (targetCount === count) {
                        callback();
                    }
                } else {
                    const handler = target.addEventListener('pb-ready', (ev) => {
                        if (ev.detail.source == this) {
                            // same source: ignore
                            return;
                        }
                        count++;
                        if (targetCount === count) {
                            target.removeEventListener('pb-ready', handler);
                            callback();
                        }
                    });
                }
            });
        } else {
            callback();
        }
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
     */
    static waitOnce(name, callback) {
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
     * Get the list of channels this element subscribes to.
     *
     * @returns an array of channel names
     */
    getSubscribedChannels() {
        const chs = [];
        if (this.subscribeConfig) {
            Object.keys(this.subscribeConfig).forEach((key) => {
                chs.push(key);
            });
        } else if (this.subscribe) {
            chs.push(this.subscribe);
        }
        return chs;
    }

    /**
     * Check if the other element emits to one of the channels this
     * element subscribes to.
     *
     * @param {Element} other the other element to compare with
     */
    emitsOnSameChannel(other) {
        const myChannels = this.getSubscribedChannels();
        const otherChannels = PbMixin.getEmittedChannels(other);
        if (myChannels.length === 0 && otherChannels.length === 0) {
            // both emit to the default channel
            return true;
        }
        return myChannels.some((channel) => otherChannels.includes(channel));
    }

    /**
     * Get the list of channels this element emits to.
     *
     * @returns an array of channel names
     */
    static getEmittedChannels(elem) {
        const chs = [];
        const emitConfig = elem.getAttribute('emit-config');
        if (emitConfig) {
            const json = JSON.parse(emitConfig);
            Object.keys(json).forEach(key => {
                chs.push(key);
            });
        } else {
            const emitAttr = elem.getAttribute('emit');
            if (emitAttr) {
                chs.push(emitAttr);
            }
        }
        return chs;
    }

    /**
     * Listen to the event defined by type. If property `subscribe` or `subscribe-config`
     * is defined, this method will trigger the listener only if the event has a key
     * equal to the key defined in `subscribe` or `subscribe-config`.
     *
     * @param {String} type Name of the event, usually starting with `pb-`
     * @param {Function} listener Callback function
     * @param {Array} [channels] Optional: explicitely specify the channels to emit to. This overwrites
     *      the emit property. Pass empty array to target the default channel.
     */
    subscribeTo(type, listener, channels) {
        let handlers;
        const chs = channels || this.getSubscribedChannels();
        if (chs.length === 0) {
            // no channel defined: listen for all events not targetted at a channel
            const handle = (ev) => {
                if (ev.detail && ev.detail.key) {
                    return;
                }
                listener(ev);
            };
            document.addEventListener(type, handle);
            handlers = [handle];
        } else {
            handlers = chs.map(key => {
                const handle = ev => {
                    if (ev.detail && ev.detail.key && ev.detail.key === key) {
                        listener(ev);
                    }
                };
                document.addEventListener(type, handle);
                return handle;
            });
        }
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
     * @param {Array} [channels] Optional: explicitely specify the channels to emit to. This overwrites
     *      the 'emit' property setting. Pass empty array to target the default channel.
     */
    emitTo(type, options, channels) {
        const chs = channels || PbMixin.getEmittedChannels(this);
        if (chs.length == 0) {
            if (type === 'pb-ready') {
                readyEventsFired.add('__default__');
            }
            if (options) {
                options = Object.assign({ _source: this }, options);
            } else {
                options = { _source: this };
            }
            const ev = new CustomEvent(type, {
                detail: options,
                composed: true,
                bubbles: true
            });
            this.dispatchEvent(ev);
        } else {
            chs.forEach(key => {
                const detail = {
                    key: key,
                    _source: this
                };
                if (options) {
                    for (const opt in options) {
                        if (options.hasOwnProperty(opt)) {
                            detail[opt] = options[opt];
                        }
                    }
                }
                if (type === 'pb-ready') {
                    readyEventsFired.add(key);
                }
                const ev = new CustomEvent(type, {
                    detail: detail,
                    composed: true,
                    bubbles: true
                });
                this.dispatchEvent(ev);
            });
        }
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
        }else if (params && params.length > 1) {
            return params
        }
        return fallback;
    }

    getParameterValues(name) {
        return TeiPublisher.url.searchParams.getAll(name);
    }

    setParameter(name, value) {
        if (typeof value === 'undefined') {
            TeiPublisher.url.searchParams.delete(name);
        } else if (Array.isArray(value)) {
            TeiPublisher.url.searchParams.delete(name);
            value.forEach(function (val) {
                TeiPublisher.url.searchParams.append(name, val);
            });
        } else {
            TeiPublisher.url.searchParams.set(name, value);
        }
    }

    setParameters(obj) {
        TeiPublisher.url.search = '';
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                this.setParameter(key, obj[key]);
            }
        }
    }

    getParameters() {
        const params = {};
        for (let key of TeiPublisher.url.searchParams.keys()) {
            params[key] = this.getParameter(key);
        }
        return params;
    }

    getParametersMatching(regex) {
        const params = {};
        for (let pair of TeiPublisher.url.searchParams.entries()) {
            if (regex.test(pair[0])) {
                const param = params[pair[0]];
                if (param) {
                    param.push(pair[1]);
                } else {
                    params[pair[0]] = [pair[1]];
                }
            }
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

    setPath(path) {
        const page = document.querySelector('pb-page');
        if (page) {
            const appRoot = page.appRoot;

            this.getUrl().pathname = appRoot + '/' + path;
        }
    }

    getUrl() {
        return TeiPublisher.url;
    }

    pushHistory(msg, state) {
        history.pushState(state, msg, TeiPublisher.url.toString());
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
