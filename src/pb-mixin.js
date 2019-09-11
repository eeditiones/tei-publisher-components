
if (!window.TeiPublisher) {
    window.TeiPublisher = {};

    TeiPublisher.url = new URL(window.location.href);
}

const ARROW_KEY = /^arrow/;

const registeredElements = {};

function normalizeKey(key) {
    key = key.toLowerCase();
    if (ARROW_KEY.test(key)) {
        return key.replace('arrow', '');
    }
    return key;
}

const handleKeydown = event => {
    if (event.defaultPrevented) {
        return; // Should do nothing if the key event was already consumed.
    }

    const key = normalizeKey(event.key);
    if (registeredElements[key]) {
        // Use `every` so we can break from the loop if there's an override
        registeredElements[key].every(element => {
            event.stopPropagation();
            element.keyPressed(key);
            // If the element is not an override, return true to keep iterating over elements
            return !element.override;
        });
    }
};

window.addEventListener('keydown', handleKeydown, true);

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
             * Register a shortcut key: when pressed, the handler function assigned to property `keyPressed`
             * will be called. By default the function does nothing and should be set by subclasses.
             */
            keyboard: {
                type: String
            },
            override: {
                type: Boolean
            },
            /**
             * Can be assigned to a keyboard handler function which will be called whenever the key
             * named by property `keyboard` is pressed. The function receives no arguments.
             */
            keyPressed: {
                type: Function,
                attribute: 'key-pressed'
            }
        }
    }

    constructor() {
        super();
        this._isReady = false;
        this.keyPressed = function () { };
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        super.attributeChangedCallback(attr, oldValue, newValue);
        if (attr === 'keyboard') {
            this.__register(newValue, oldValue);
        } else if (attr === 'override') {
            this.__override(this.keyboard);
        }
    }

    /**
     * Wait for the components referenced by the selector given in property `waitFor`
     * to signal that they are ready to respond to events.
     *
     * @param callback function to be called when all components are ready
     */
    wait(callback) {
        if (this.waitFor) {
            const targets = document.querySelectorAll(this.waitFor);
            const targetCount = targets.length;
            let count = 0;
            targets.forEach((target) => {
                if (target._isReady) {
                    count++;
                    if (targetCount === count) {
                        callback();
                    }
                } else {
                    const handler = target.addEventListener('pb-ready', (ev) => {
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
        const listener = function () {
            document.removeEventListener('pb-ready', listener);
            callback();
        };
        this.subscribeTo('pb-ready', listener);
    }

    /**
     * Signal that the component is ready to respond to events.
     */
    signalReady() {
        this._isReady = true;
        this.dispatchEvent(new CustomEvent('pb-ready'));
        this.emitTo('pb-ready');
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
        let chs = [];
        if (channels) {
            chs = channels;
        } else {
            if (this.subscribeConfig) {
                for (const key in this.subscribeConfig) {
                    this.subscribeConfig[key].forEach(t => {
                        if (t === type) {
                            chs.push(key);
                        }
                    })
                }
            } else if (this.subscribe) {
                chs.push(this.subscribe);
            }
        }
        if (chs.length === 0) {
            // no channel defined: listen for all events not targetted at a channel
            document.addEventListener(type, (ev) => {
                if (ev.detail && ev.detail.key) {
                    return;
                }
                listener(ev);
            });
        } else {
            chs.forEach(key =>
                document.addEventListener(type, ev => {
                    if (ev.detail && ev.detail.key && ev.detail.key === key) {
                        listener(ev);
                    }
                })
            );
        }
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
        let chs = [];
        if (channels) {
            chs = channels;
        } else {
            if (this.emitConfig) {
                for (const key in this.emitConfig) {
                    this.emitConfig[key].forEach(t => {
                        if (t === type) {
                            chs.push(key);
                        }
                    })
                }
            } else if (this.emit) {
                chs.push(this.emit);
            }
        }
        if (chs.length == 0) {
            const ev = new CustomEvent(type, {
                detail: options,
                composed: true,
                bubbles: true
            });
            document.dispatchEvent(ev);
        } else {
            chs.forEach(key => {
                const detail = {
                    key: key
                };
                if (options) {
                    for (const opt in options) {
                        if (options.hasOwnProperty(opt)) {
                            detail[opt] = options[opt];
                        }
                    }
                }
                const ev = new CustomEvent(type, {
                    detail: detail,
                    composed: true,
                    bubbles: true
                });
                document.dispatchEvent(ev);
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
        console.log('document not found: %s', this.src);
        return null;
    }

    getParameter(name, fallback) {
        const params = TeiPublisher.url.searchParams.getAll(name);
        if (params && params.length > 0) {
            return params[0];
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
                TeiPublisher.url.searchParams.set(key, obj[key]);
            }
        }
    }

    getParameters() {
        const params = {};
        for (let entry of TeiPublisher.url.searchParams) {
            params[entry[0]] = entry[1];
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
        let next = this.parentNode;
        while (next) {
            if (next.localName === 'pb-page') {
                return next.endpoint;
            }
            next = next.parentNode;
        }
        return null;
    }

    __register(newKey, oldKey) {
        oldKey = oldKey ? normalizeKey(oldKey) : oldKey;
        newKey = newKey ? normalizeKey(newKey) : newKey;
        if (oldKey && registeredElements[oldKey]) {
            const i = registeredElements[oldKey].indexOf(this);
            if (i != -1) {
                registeredElements[oldKey].splice(i, 1);
                if (registeredElements[oldKey].length === 0) {
                    delete registeredElements[oldKey];
                }
            }
        }
        if (newKey) {
            if (!registeredElements[newKey]) {
                registeredElements[newKey] = [];
            }
            if (this.override) {
                registeredElements[newKey].unshift(this);
            } else {
                registeredElements[newKey].push(this);
            }
        }
    }

    __override(key) {
        key = key ? normalizeKey(key) : key;
        if (key && registeredElements[key]) {
            const i = registeredElements[key].indexOf(this);
            if (i != -1) {
                registeredElements[key].splice(i, 1);
                registeredElements[key].unshift(this);
            }
        }
    }
}
