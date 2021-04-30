import { UriTemplate } from 'uri-templates-es';

const logStyle = 'color: #99FF33';

class Registry {
    constructor() {
        this.state = {};
        this.rootPath = '';
    }

    configure(template, rootPath = '') {
        this.rootPath = rootPath;
        const absPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
        this.urlTemplate = new UriTemplate(`${rootPath}${template}`);
        const initialState = this.urlTemplate.fromUri(absPath);
        if (!initialState) {
            console.error('<registry> failed to parse URL');
        } else {
            this.state = initialState;
        }
        window.history.replaceState(JSON.stringify(this.state), '');
        console.log(
          '<registry> template: %s; initial state: %o',
          `${rootPath}${template}`,
          this.state,
        );

        window.addEventListener('popstate', (ev) => {
            if (!ev.state) {
                return;
            }
            const state = JSON.parse(ev.state);
            console.log('<registry> %cpopstate: %o', logStyle, state);
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
        const newUrl = this.urlTemplate.fill(this.state);
        const resolved = new URL(newUrl, window.location.href);
        const newState = replaceState || this.state;
        console.log('<registry> %ccommit %s: %s %o', logStyle, message, resolved.toString(), newState);
        const serialized = JSON.stringify(newState);
        window.history.pushState(serialized, message, resolved.toString());
    }
}

export const registry = new Registry();