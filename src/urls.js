import { UriTemplate } from 'uri-templates-es';
import { PbEvents } from "./pb-events.js";
import { getSubscribedChannels } from "./pb-mixin.js";

function log(...args) {
    args[0] = `%c<registry>%c ${args[0]}`;
    args.splice(1, 0, 'font-weight: bold; color: #99FF33;', 'color: inherit; font-weight: normal');
    console.log.apply(null, args);
}

class Registry {
    
    constructor() {
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
        this._listeners = [];
    }

    configure(template, rootPath = '') {
        this.urlTemplate = new UriTemplate(`${rootPath}${template}`);

        // determine initial state of the registry by parsing current URL
        const initialState = this._stateFromURL();
        if (!initialState) {
            console.error('<registry> failed to parse URL: %s using template %s', window.location, this.urlTemplate);
        } else {
            this.state = initialState;
        }
        window.history.replaceState(null, '');
        
        log('template: %s; initial state: %o', `${rootPath}${template}`, this.state);

        window.addEventListener('popstate', (ev) => {
            if (ev.state) {
                try {
                    this.channelStates = JSON.parse(ev.state);
                } catch (e) {
                    console.error('<registry> error restoring state: %s', e.toString());
                }
            } else {
                this.channelStates = {};
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
        const absPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
        return this.urlTemplate.fromUri(absPath);
    }

    getState(component) {
        const chs = getSubscribedChannels(component);
        const channel = chs.length === 0 ? '__default__' : chs[0];
        const state = this.channelStates[channel];
        if (!state) {
            this.channelStates[channel] = {};
            return this.channelStates[channel];
        }
        return state;
    }

    setState(component, newState) {
        const chs = getSubscribedChannels(component);
        const channel = chs.length === 0 ? '__default__' : chs[0];
        this.channelStates[channel] = Object.assign(this.channelStates[channel], newState);
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
        const components = path.split('.');
        if (components.length > 1) {
            const last = components.slice(0, components.length - 1)
                .reduce((result, component) => {
                    if (!result[component]) {
                        result[component] = {};
                    }
                    return result[component];
                }, this.state);
            last[components[components.length - 1]] = value;
        } else {
            this.state[path] = value;
        }
    }

    commit(elem, newState, overwrite = false) {
        this._commit(elem, newState, overwrite, false);
    }

    replace(elem, newState, overwrite = false) {
        this._commit(elem, newState, overwrite, true);
    }

    _commit(elem, newState, overwrite, replace) {
        this.state = overwrite ? newState : Object.assign(this.state, newState);
        const newUrl = this.urlTemplate.fill(this.state);
        const resolved = new URL(newUrl, window.location.href);
        
        const channels = getSubscribedChannels(elem);
        const chs = channels.length === 0 ? ['__default__'] : channels;
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

    toJSON() {
        return JSON.stringify(this.channelStates);
    }
}

export const registry = new Registry();