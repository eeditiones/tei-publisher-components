import { UriTemplate } from 'uri-templates-es';

function log(...args) {
    args[0] = `%c<registry>%c ${args[0]}`;
    args.splice(1, 0, 'font-weight: bold; color: #99FF33;', 'color: inherit; font-weight: normal');
    console.log.apply(null, args);
}

function stateToJson(state) {
    const cleanState = {};
    Object.keys(state).filter(key => key !== '_source').forEach(key => { cleanState[key] = state[key] });
    return JSON.stringify(cleanState);
}

class Registry {
    
    constructor() {
        this.state = {};
        this.channels = [];
    }

    configure(template, channels = [], rootPath = '') {
        this.channels = channels;
        const absPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
        this.urlTemplate = new UriTemplate(`${rootPath}${template}`);
        const initialState = this.urlTemplate.fromUri(absPath);
        if (!initialState) {
            console.error('<registry> failed to parse URL');
        } else {
            this.state = initialState;
        }
        window.history.replaceState(stateToJson(this.state), '');
        log('path: %s; template: %s; initial state: %o', absPath, `${rootPath}${template}`, this.state);

        window.addEventListener('popstate', (ev) => {
            if (!ev.state) {
                return;
            }
            this.state = JSON.parse(ev.state);
            log('popstate: %o', this.state);
            if (this.channels.length === 0) {
                document.dispatchEvent(
                  new CustomEvent('pb-popstate', {
                    detail: {
                      state: this.state
                    },
                    composed: true,
                    bubbles: true,
                  }),
                );
            } else {
                this.channels.forEach((channel) =>
                    document.dispatchEvent(
                        new CustomEvent('pb-popstate', {
                            detail: {
                                state: this.state,
                                key: channel
                            },
                            composed: true,
                            bubbles: true,
                        })
                    )
                );
            }
        });
    }

    get(path) {
        if (!this.state) {
            return null;
        }
        return path.split('.').reduce((state, component) => {
            if (!state[component]) {
                return null;
            }
            return state[component];
        }, this.state);
    }

    set(path, value) {
        const components = path.split('.');
        let last;
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

    commit(message, replaceState, overwrite) {
        if (replaceState) {
            this.state = overwrite ? replaceState : Object.assign(this.state, replaceState);
        }
        const newUrl = this.urlTemplate.fill(this.state);
        const resolved = new URL(newUrl, window.location.href);
        log('commit %s: %s %o', message, resolved.toString(), this.state);
        const serialized = stateToJson(this.state);
        window.history.pushState(serialized, message, resolved.toString());
    }

    replace(message) {
        const serialized = stateToJson(this.state);
        window.history.replaceState(serialized, message);
    }
}

export const registry = new Registry();