import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin';


/**
 * Show content if the user is logged in. Optionally requires the user
 * to be member of a specific group. Listens for the `pb-login` event
 * triggered by `pb-login` to be notified of user changes.
 *
 * @customElement
 * @polymer
 * @demo demo/pb-login.html
 * @appliesMixin pbMixin
 */
export class PbRestricted extends pbMixin(LitElement) {
    static get properties() {
        return {
            /** Id of the pb-login element to connect to */
            login: {
                type: String
            },
            show: {
                type: Boolean
            },
            /**
             * If set, requires the logged in user to be member of
             * the given group.
             */
            group: {
                type: String
            },
            ...super.properties
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
        } else {
            this.style.display = 'none';
        }
        return html`
            ${this.show ? html`<slot></slot>` : null}
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
customElements.define('pb-restricted', PbRestricted);