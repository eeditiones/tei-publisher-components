import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';


/**
 * Show content if the user is logged in. Optionally requires the user
 * to be member of a specific group. Listens for the `pb-login` event
 * triggered by `pb-login` to be notified of user changes.
 * 
 * You may specify fallback content to be shown if the user is not logged in
 * within a slot named 'fallback'.
 *
 * @slot - unnamed default slot
 * @slot fallback - optional content to show if user is not logged in
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
                type: Boolean,
                reflect: true
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
        const fallback = this.shadowRoot.querySelector('slot[name=fallback]');
        const hasFallback = fallback.assignedNodes().length > 0;
        if (hasFallback) {
            console.log(this);
            this.classList.add('fallback');
        }

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
        return html`
            ${this.show && !this.disabled ? html`<slot></slot>` : html`<slot name="fallback"></slot>`}
        `;
    }

    static get styles() {
        return css`
            :host {
                display: none;
            }

            :host(.fallback), :host([show]) {
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