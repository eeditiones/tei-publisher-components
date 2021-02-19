import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin';


/**
 * Show content if the user is logged in. Optionally requires the user
 * to be member of a specific group. Listens for the `pb-login` event
 * triggered by `pb-login` to be notified of user changes.
 *
 * @slot - unnamed default slot
 * @fires pb-login - When received, changes the state of the component according to the user info received
 */
export class PbRestricted extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            /** Id of the pb-login element to connect to */
            login: {
                type: String
            },
            show: {
                type: Boolean
            },
            /** Id of the HTML element to be displayed as a fallback */
            fallbackElement: {
                attribute: 'fallback-element',
                type: String
            },
            /**
             * If set, requires the logged in user to be member of
             * the given group.
             */
            group: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.show = false;
    }

    firstUpdated() {
        const login = document.getElementById(this.login);
        if (!login) {
            console.error('<pb-restricted> connected pb-login element not found!');
            return;
        }
        this.subscribeTo('pb-login', (ev) => {
            this.show = this._loggedIn(ev.detail.user, ev.detail.groups);
        }, []);
        this.show = login.loggedIn && this._loggedIn(login.user, login.groups);
    }

    render() {
        if (this.show) {
            this.style.display = '';
            toggleFallback(this.fallback);
        } else {
            this.style.display = 'none';
            toggleFallback(this.fallback);
        }
        return html`
            ${this.show && !this.disabled ? html`<slot></slot>` : null}
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
        `;
    }

    _loggedIn(user, groups) {
        if (user == null) {
            return false;
        }
        if (this.group) {
            if (!groups) {
                return false;
            }
            return groups.indexOf(this.group) > -1;
        }
        return true;
    }
}

function toggleFallback(fallbackId) {

    if(fallbackId) {
        const fallbackEl = document.getElementById(fallbackId);
        if(!fallbackEl) {
            console.error(`a fallback element is defined, but no element with id ${fallbackId} is found!`);
            return;
        }
        switch(fallbackEl.style.display) {
            case 'none':
                fallbackEl.style.display = '';
                break;
            case '':
            default:
                fallbackEl.style.display = 'none';
        }
    }
}

customElements.define('pb-restricted', PbRestricted);
