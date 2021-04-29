import { UriTemplate } from 'uri-templates-es';

const logStyle = 'color: #99FF33';

class Registry {
    constructor() {
        this.state = {};
    }

    configure(template) {
        const absPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
        this.urlTemplate = new UriTemplate(template);
        this.state = this.urlTemplate.fromUri(absPath);
        window.history.replaceState(JSON.stringify(this.state), '');
        console.log(
          '<registry> %cinitial state: %o',
          logStyle,
          this.state
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
        if (value) {
            this.state[name] = value;
        } else {
            this.state = name;
        }
    }

    commit(message) {
        const newUrl = this.urlTemplate.fill(this.state);
        const resolved = new URL(newUrl, window.location.href);
        console.log('<registry> %ccommit %s: %s %o', logStyle, message, resolved.toString(), this.state);
        const serialized = JSON.stringify(this.state);
        window.history.pushState(serialized, message, resolved.toString());
    }
}

export const registry = new Registry();