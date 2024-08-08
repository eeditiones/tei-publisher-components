import { match, compile, pathToRegexp } from "path-to-regexp";
import { PbEvents } from "./pb-events.js";
import { getSubscribedChannels } from "./pb-mixin.js";

function log(...args) {
    args[0] = `%c<registry>%c ${args[0]}`;
    args.splice(1, 0, 'font-weight: bold; color: #99FF33;', 'color: inherit; font-weight: normal');
    console.log.apply(null, args);
}

/**
 * Central class for tracking state. We distinguish between
 * 
 * 1. the initial state of the application as determined by the URL opened in the browser
 * 2. state changes in components occurring while the user interacts with the page
 * 
 * 1) is relevant if a user accesses a particular URL by following a link, entering an address into the location bar or 
 * opening a bookmark. In this case the components on the page will be in a fresh, empty state. However, they may react
 * to URL parameters and initiate specific properties of their state accordingly. Users expect that navigating to a given URL will 
 * consistently result in the same display (i.e. restore a certain state). If users bookmark a specific page of a document shown in
 * TEI Publisher's pb-view, they expect that the same page is displayed when they open the bookmark again. Thus the document path and 
 * the page need to be tracked in the URL.
 * 
 * 2) applies while the user interacts with the application, i.e. triggers actions, which cause components to change state. Some
 * actions may lead to a new page load, but many – like navigating pages in a `pb-view` – will only change the state of one or more components.
 * From a user's point of view this should be irrelevant: moving back or forward in browser history should consistently restore the 
 * previous or following state.
 * 
 * Components should thus comply with the following guidelines:
 * 
 * - if the component initializes itself, it should retrieve needed parameters from `registry.state`
 * - it may call `registry.replace` to make sure that all parameters required to later restore its initial state are present in the current URL
 * - it should register a listener with `registry.subscribe` to be informed when the user moves back in history (without reloading the page)
 * - it must call `registry.commit` after changing its current state
 */
class Registry {
    
    constructor() {
        this.rootPath = '';
        /**
         * Is the resource path part of the URL path or is it
         * passed in a query parameter?
         */
        this.usePath = false;
        /**
         * Records current state as determined from parsing the URL.
         * This should be used to initialize components.
         */
        this.state = {};
        /**
         * Used to record state for a given channel. Will be updated
         * if a component calls commit or replace.
         */
        this.channelStates = {};
        /**
         * Records the hash part of the URL, if any
         */
        this.hash = null;
        /**
         * Should a hash in the URL be interpreted as an xml:id for loading the content?
         */
        this.idHash = true;
        this._listeners = [];

        /**
         * URL pattern to use for mapping parameters into the URL path
         */
        this.urlPattern = null;

        this.urlIgnore = new Set();
        this.pathParams = new Set();

        /**
         * Information about the user currently logged in or null. If a user is logged in
         * this will be an object with two properties: `user` and `groups`.
         */
        this.currentUser = null;
    }

    configure(usePath = true, idHash = false, rootPath = '', urlPattern, ignoredParams) {
        this.rootPath = rootPath;
        this.usePath = usePath;
        this.idHash = idHash;
        this.urlPattern = urlPattern;
        if (ignoredParams) {
            ignoredParams.split(/\s*,\s*/).forEach(param => this.urlIgnore.add(param));
        }

        if (this.urlPattern) {
            // save a list of parameter names which go into the path
            const pathParams = [];
            pathToRegexp(this.urlPattern, pathParams);
            pathParams.forEach((param) => this.pathParams.add(param.name));
            // compile URL pattern into a decode and encode function
            this._decodePath = match(this.urlPattern);
            this._encodePath = compile(this.urlPattern);
        }

        // determine initial state of the registry by parsing current URL
        const initialState = this._stateFromURL();
        if (!initialState) {
            console.error('<registry> failed to parse URL: %s using template %s', window.location, this.urlTemplate);
        } else {
            this.state = initialState;
        }
        window.history.replaceState(null, '');
        
        window.addEventListener('popstate', (ev) => {
            if (!ev.state) {
                // only react to history entries triggered by components
                return;
            }

            try {
                this.channelStates = JSON.parse(ev.state);
            } catch (e) {
                console.error('<registry> error restoring state: %s', e.toString());
                return;
            }

            this.state = this._stateFromURL();
            log('popstate: %o', this.channelStates);

            this._listeners.forEach((entry) => {
                entry.callback(this.getState(entry.component));
            });

            PbEvents.emit('pb-popstate', null, this.channelStates);
        });
    }

    subscribe(component, callback) {
        this._listeners.push({
            component,
            callback
        });
    }

    _stateFromURL() {
        const params = {};
        this.hash = window.location.hash;
        // use the hash as an xml:id?
        // hashs of the form #1.2.3.4 are internal eXist ids though and thus excluded
        if (this.idHash && this.hash.length > 0 && (!/^#\d+\./.test(this.hash))) {
            params.id = this.hash.substring(1);
        }
        const relpath = window.location.pathname.replace(new RegExp(`^${this.rootPath}/?`), '');
        if (this.urlPattern) {
            const result = this._decodePath(relpath);
            Object.assign(params, result.params);
            log('decoded path %s using template %s: %o', relpath, this.urlPattern, params);
        } else if (this.usePath) {
            params.path = relpath;
        }

        const urlParams = new URLSearchParams(window.location.search);
        urlParams.forEach((value, key) => {
            if (
                (this.urlPattern && this.pathParams.has(key)) ||
                (this.usePath && key === 'path')
             ) {
                console.warn("Found path parameter in query, but usePath is set to true. The path parameter will be ignored.");
                return;
            }
            // parameter already set
            if ((key in params)) {
                return;
            }
            // check for multiple entries
            const allValues = urlParams.getAll(key);
            if (allValues.length === 1) {
                params[key] = value; // single entry
            } else {
                params[key] = allValues; // array
            }
        });
        return params;
    }

    getState(component) {
        const channel = getSubscribedChannels(component)[0];
        const state = this.channelStates[channel];
        if (state) {
            return state;
        }
        this.channelStates[channel] = {};
        return this.channelStates[channel];
    }

    setState(component, newState) {
        const channel = getSubscribedChannels(component)[0];
        this.channelStates[channel] = Object.assign(this.channelStates[channel], newState);
    }

    clearParametersMatching (component, regex) {
        const {state} = this

        for (const key of Object.keys(state)) {
            if (regex.test(key)) {
                state[key] = null
            }
        }
    }

    get(path, defaultValue) {
        if (!this.state) {
            return undefined;
        }
        const value = path.split('.').reduce((state, component) => {
            if (!state[component]) {
                return undefined;
            }
            return state[component];
        }, this.state);
        return value || defaultValue;
    }

    set(path, value) {
        if (!path.contains('.')) {
            this.state[path] = value;
            return;
        }
        const components = path.split('.');
        const lastPart = components.pop()
        // make sure all intermediate steps are available
        const lastIntermediate = components.reduce((result, nextComponent) => {
                if (!result[nextComponent]) {
                    // eslint-disable-next-line no-param-reassign
                    result[nextComponent] = {};
                }
                return result[nextComponent];
            },
            this.state
        );
        lastIntermediate[lastPart] = value;
    }

    commit(elem, newState, overwrite = false) {
        this._commit(elem, newState, overwrite, false);
    }

    replace(elem, newState, overwrite = false) {
        this._commit(elem, newState, overwrite, true);
    }

    _commit(elem, newState, overwrite, replace) {
        this.state = overwrite ? newState : ({ ...this.state, ...newState});
        const resolved = this.urlFromState();

        const chs = getSubscribedChannels(elem);
        chs.forEach((channel) => {
            if (overwrite || !this.channelStates[channel]) {
                this.channelStates[channel] = newState;
            } else {
                Object.assign(this.channelStates[channel], newState);
            }
        });

        const json = this.toJSON();
        if (replace) {
            window.history.replaceState(json, '', resolved);
            log('replace %s: %o %d', resolved.toString(), this.channelStates, window.history.length);
        } else {
            window.history.pushState(json, '', resolved);
            log('commit %s: %o %d', resolved.toString(), this.channelStates, window.history.length);
        }
    }

    urlFromState() {
        const newUrl = new URL(window.location.href);

        function setParam(value, param) {
            if (value === null) {
                newUrl.searchParams.delete(param);
            } else if (Array.isArray(value)) {
                // copy array before mutating it
                const _v = Array.from(value);
                // overwrite any previous value by setting the first member
                newUrl.searchParams.set(param, _v.pop());
                // add additional values
                _v.forEach(v => newUrl.searchParams.append(param, v));
            } else {
                newUrl.searchParams.set(param, value);
            }
        }

        for (const [param, value] of Object.entries(this.state)) {
            if (this.urlPattern) {
                // check if param should be ignored or is required by the URL template
                // fill up missing parameters by stripping potential "user." prefix
                const normParam = param.replace(/^(?:user\.)?(.*)$/, '$1');
                if (!(this.pathParams.has(normParam) || this.urlIgnore.has(normParam))) {
                    setParam(value, normParam);
                }
            } else if (
                    (param !== 'path' || !this.usePath) && 
                    (param !== 'id' || !this.idHash) &&
                    (!this.urlIgnore.has(param))
            ) {
                setParam(value, param);
            }
        }

        if (this.state.path && this.state.path.length > 0) {
            if (this.urlPattern) {
                // path parameters should not be the empty string
                const normState = {};
                for (const [key, value] of Object.entries(this.state)) {
                    if (this.pathParams.has(key) && value === '') {
                        normState[key] = null;
                    } else {
                        normState[key] = value;
                    }
                }
                const encoded = this._encodePath(normState);
                newUrl.pathname = `${this.rootPath}/${encoded}`;
            } else if (this.usePath) {
                newUrl.pathname = `${this.rootPath}/${this.state.path}`;
            }
        }

        if (this.state.id && !this.urlPattern) {
            newUrl.hash = `#${this.state.id}`;
        }

        return newUrl;
    }

    toJSON() {
        return JSON.stringify(this.channelStates);
    }
}

export const registry = new Registry();
if (!window.pbRegistry) {
    window.pbRegistry = registry;
}