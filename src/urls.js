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
    }

    configure(template, rootPath = '') {
        const absPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
        this.urlTemplate = new UriTemplate(`${rootPath}${template}`);
        const initialState = this.urlTemplate.fromUri(absPath);
        if (!initialState) {
            console.error('<registry> failed to parse URL');
        } else {
            this.state = initialState;
        }
        window.history.replaceState(stateToJson(this.state), '');
        log('template: %s; initial state: %o', `${rootPath}${template}`, this.state);

        window.addEventListener('popstate', (ev) => {
            if (!ev.state) {
                return;
            }
            const state = JSON.parse(ev.state);
            log('popstate: %o', state);
            document.dispatchEvent(
              new CustomEvent('pb-popstate', {
                detail: state,
                composed: true,
                bubbles: true,
              })
            );
        });
    }

    subscribe(handler) {
        document.addEventListener('pb-popstate', handler);
    }

    get(name) {
        return this.state[name];
    }

    set(name, value) {
        this.state[name] = value;
    }

    commit(message, replaceState) {
        if (replaceState) {
            this.state = replaceState;
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