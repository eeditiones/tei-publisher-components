import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";
import '@polymer/iron-ajax';
import '@polymer/paper-dialog';
import '@polymer/paper-dialog-scrollable';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button';
import '@polymer/iron-icons';

/**
 * Handles login/logout. Shows a link which opens a login dialog if clicked.
 * If a user is logged in, clicking the link will log him out instead.
 *
 * @fires pb-login - Sends results of checking user credentials
 * @cssprop --pb-login-link-color - Color of the link text
 */
export class PbLogin extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            /** True if user is currently logged in */
            loggedIn: {
                type: Boolean,
                attribute: 'logged-in',
                reflect: true
            },
            /**
             * The currently logged in user.
             */
            user: {
                type: String
            },
            password: {
                type: String
            },
            /**
             * If set, only users being members of the specified group are
             * allowed to log in.
             */
            group: {
                type: String
            },
            /**
             * Array of groups the current user is a member of.
             */
            groups: {
                type: Array
            },
            /**
             * If set to true, automatically show login dialog if user is not logged in
             */
            auto: {
                type: Boolean
            },
            /**
             * Label to show if not logged in
             */
            loginLabel: {
                type: String,
                reflect: true,
                attribute: 'login-label'
            },
            /**
             * Label to show before user name if logged in
             */
            logoutLabel: {
                type: String,
                reflect: true,
                attribute: 'logout-label'
            },
            loginIcon: {
                type: String,
                attribute: 'login-icon'
            },
            logoutIcon: {
                type: String,
                attribute: 'logout-icon'
            },
            _invalid: {
                type: Boolean
            },
            _hasFocus: {
                type: Boolean
            }
        };
    }

    constructor() {
        super();
        this.loggedIn = false;
        this.loginLabel = 'login.login';
        this.logoutLabel = 'login.as';
        this.user = '';
        this.groups = [];
        this.loginIcon = 'account-circle';
        this.logoutIcon = 'supervisor-account';
        this._hasFocus = true;
    }

    firstUpdated() {
        super.firstUpdated();
        this._checkLogin = this.shadowRoot.getElementById('checkLogin');
        this._loginDialog = this.shadowRoot.getElementById('loginDialog');

        window.addEventListener('blur', () => {
            this._hasFocus = false;
        });
        window.addEventListener('focus', () => {
            if (!this._hasFocus) {
                this._hasFocus = true;
                this._checkLogin.body = null;
                this._checkLogin.generateRequest();
            }
        });
        PbLogin.waitOnce('pb-page-ready', (detail) => {
            this._checkLogin.url = `${detail.endpoint}/login`;
            this._checkLogin.body = {
                user: this.user,
                password: this.password
            };
            this._checkLogin.generateRequest();
        });
    }

    render() {
        return html`
            <a href="#" @click="${this._show}" title="${this.user}">
                ${
            this.loggedIn ?
                html`<iron-icon icon="${this.logoutIcon}"></iron-icon> <span class="label">${translate(this.logoutLabel, { user: this.user })}</span>` :
                html`<iron-icon icon="${this.loginIcon}"></iron-icon> <span class="label">${translate(this.loginLabel)}</span>`
            }                
            </a>

            <paper-dialog id="loginDialog">
                <h2>${translate('login.login')}</h2>
                <paper-dialog-scrollable>
                    <form action="login">
                        <paper-input id="user" name="user" label="${translate('login.user')}" value="${this.user}" autofocus></paper-input>
                        <paper-input id="password" name="password" label="${translate('login.password')}" type="password"></paper-input>
                        <input id="logout" type="hidden" name="logout"></input>
                    </form>
                    ${this._invalid ?
                html`
                            <p id="message">${translate('login.invalid')}
                            ${this.group ? html`(${translate('login.requiredGroup', { group: this.group })})` : null}
                            </p>
                        `: null
            }
                </paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button autofocus @click="${this._confirmLogin}">${translate(this.loginLabel)}</paper-button>
                </div>
            </paper-dialog>

            <iron-ajax id="checkLogin" with-credentials
                handle-as="json" @response="${this._handleResponse}"
                content-type="application/x-www-form-urlencoded"
                method="POST"></iron-ajax>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }

            paper-dialog {
                min-width: 320px;
                max-width: 640px;
                min-height: 128px;
            }

            paper-dialog h2 {
                background-color: #607D8B;
                padding: 16px 8px;
                margin-top: 0;
                color: #F0F0F0;
            }

            a {
                color: var(--pb-login-link-color, --pb-link-color);
                text-decoration: none;
            }

            @media (max-width: 1024px) {
                .label {
                    display: none;
                }
            }

            #message {
                color: var(--paper-red-800);
            }
        `;
    }

    _show(ev) {
        ev.preventDefault();
        if (this.loggedIn) {
            this._checkLogin.body = {
                logout: this.user
            };
            this._checkLogin.generateRequest();
        } else {
            this._loginDialog.open();
        }
    }

    _confirmLogin() {
        this.user = this.shadowRoot.getElementById('user').value;
        this.password = this.shadowRoot.getElementById('password').value;
        this._checkLogin.body = {
            user: this.user,
            password: this.password
        };
        this._checkLogin.generateRequest();
    }

    _handleResponse() {
        const resp = this._checkLogin.lastResponse;
        if (resp.user && this._checkGroup(resp)) {
            this.loggedIn = true;
            this.user = resp.user;
            this.groups = resp.groups;
            this._invalid = false;
            this._loginDialog.close();
        } else {
            this.loggedIn = false;
            this.password = null;
            if (this._loginDialog.opened) {
                this._invalid = true;
            } else if (this.auto) {
                this._loginDialog.open();
            }
        }
        this.emitTo('pb-login', resp);
    }

    _checkGroup(info) {
        if (this.group) {
            return info.groups && info.groups.indexOf(this.group) > -1;
        }
        return true;
    }

    /**
     * Fired on successful login.
     *
     * @event pb-login
     * @param {String} user logged in user
     * @param {Array<String>} groups groups the user is a member of
     */
}
customElements.define('pb-login', PbLogin);