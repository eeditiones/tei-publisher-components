import { LitElement, html, css } from 'lit';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import { registry } from './urls.js';
import './pb-fetch.js';
import { minVersion } from './utils.js';
import './pb-dialog.js';
import { themableMixin } from './theming.js';

/**
 * Handles login/logout. Shows a link which opens a login dialog if clicked.
 * If a user is logged in, clicking the link will log him out instead.
 *
 * @slot information - Additional information to be presented on the login dialog
 * @fires pb-login - Sends results of checking user credentials
 * @cssprop --pb-login-link-color - Color of the link text
 * @csspart message-invalid - Block displayed if login is invalid
 * @csspart group-invalid - Text displayed if login is invalid concerning group
 */
export class PbLogin extends themableMixin(pbMixin(LitElement)) {
  static get properties() {
    return {
      ...super.properties,
      /** True if user is currently logged in */
      loggedIn: {
        type: Boolean,
        attribute: 'logged-in',
        reflect: true,
      },
      /**
       * The currently logged in user.
       */
      user: {
        type: String,
      },
      password: {
        type: String,
      },
      /**
       * If set, only users being members of the specified group are
       * allowed to log in.
       * Multiple groups can be defined separating items by space and/or comma.
       */
      group: {
        type: String,
      },
      /**
       * Array of groups the current user is a member of.
       */
      groups: {
        type: Array,
      },
      /**
       * If set to true, automatically show login dialog if user is not logged in
       */
      auto: {
        type: Boolean,
      },
      /**
       * Label to show if not logged in
       */
      loginLabel: {
        type: String,
        reflect: true,
        attribute: 'login-label',
      },
      /**
       * Label to show before user name if logged in
       */
      logoutLabel: {
        type: String,
        reflect: true,
        attribute: 'logout-label',
      },
      loginIcon: {
        type: String,
        attribute: 'login-icon',
      },
      logoutIcon: {
        type: String,
        attribute: 'logout-icon',
      },
      _invalid: {
        type: Boolean,
      },
      _hasFocus: {
        type: Boolean,
      },
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
    this._loginDialog = this.shadowRoot.querySelector('pb-dialog');

    this.renderRoot.querySelector('form').addEventListener('submit', e => {
      e.preventDefault();
      this._confirmLogin();
    });

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
    waitOnce('pb-page-ready', detail => {
      if (minVersion(detail.apiVersion, '1.0.0')) {
        this._checkLogin.url = `${detail.endpoint}/api/login/`;
      } else {
        this._checkLogin.url = `${detail.endpoint}/login`;
      }
      this._checkLogin.body = {
        user: this.user,
        password: this.password,
      };
      this._checkLogin.generateRequest();
    });
    this.addEventListener('keyup', event => {
      if (event.keyCode === 13) {
        event.preventDefault();
        this._confirmLogin();
      }
    });
  }

  render() {
    return html`
            <button @click="${this._show}" title="${
      this.user ? this.user : this.loginLabel
    }" part="trigger" type="button">
                ${
                  this.loggedIn
                    ? html`
                        <slot name="icon-logout" part="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-person-check"
                            viewBox="0 0 16 16"
                            part="icon"
                          >
                            <path
                              d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                            />
                            <path
                              d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"
                            />
                          </svg>
                        </slot>
                      `
                    : html`
                        <slot name="icon-login">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-person"
                            viewBox="0 0 16 16"
                            part="icon"
                          >
                            <path
                              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
                            />
                          </svg>
                        </slot>
                      `
                }
                <span class="label" part="label">${translate(
                  this.loggedIn ? this.logoutLabel : this.loginLabel,
                  { user: this.user },
                )}</span>
            </button>

            <form action="login">
                <pb-dialog ?modal="${this.auto}">
                    <div slot="title">${translate('login.login')}</div>
                    <label>
                        ${translate('login.user')}
                        <input name="user" .value="${this.user}" autofocus placeholder="${translate(
      'login.user',
    )}"></input>
                    </label>
                    <label>
                        ${translate('login.password')}
                        <input name="password" type="password" placeholder="${translate(
                          'login.password',
                        )}"></input>
                    </label>
                    <slot name="information"></slot>
                    ${
                      this._invalid
                        ? html`<p id="message" part="message-invalid">
                            ${translate('login.invalid')}<span part="group-invalid"
                              >${this.group
                                ? html` (${translate('login.requiredGroup', {
                                    group: this.group,
                                  })})`
                                : null}</span
                            >.
                          </p>`
                        : null
                    }
                    <button autofocus slot="footer">${translate('login.login')}</button>
                </pb-dialog>
            </form>

            <pb-fetch id="checkLogin" with-credentials
                handle-as="json" @response="${this._handleResponse}" @error="${this._handleError}"
                method="post"
                content-type="application/x-www-form-urlencoded"></pb-fetch>
        `;
  }

  _show(ev) {
    ev.preventDefault();
    if (this.loggedIn) {
      this._checkLogin.body = {
        logout: this.user,
      };
      this._checkLogin.generateRequest();
    } else {
      this._loginDialog.openDialog();
    }
  }

  _confirmLogin() {
    this.user = this.renderRoot.querySelector('input[name="user"]').value;
    this.password = this.renderRoot.querySelector('input[name="password"]').value;
    this._checkLogin.body = {
      user: this.user,
      password: this.password,
    };
    this._checkLogin.generateRequest();
  }

  _handleResponse() {
    const resp = this._checkLogin.lastResponse;
    if (resp.user && this._checkGroup(resp)) {
      resp.userChanged = !this.loggedIn || this.user !== resp.user;
      this.loggedIn = true;
      this.user = resp.user;
      this.groups = resp.groups;
      this._invalid = false;
      this._loginDialog.closeDialog();
    } else {
      resp.userChanged = this.loggedIn;
      this.loggedIn = false;
      this.password = null;
      if (this._loginDialog.open) {
        this._invalid = true;
      } else if (this.auto) {
        this._loginDialog.openDialog();
      }
    }
    this.emitTo('pb-login', resp);

    if (this.loggedIn) {
      registry.currentUser = {
        user: this.user,
        groups: this.groups,
      };
    } else {
      registry.currentUser = null;
    }
  }

  _handleError() {
    this.loggedIn = false;
    this.password = null;

    const resp = {
      userChanged: this.loggedIn,
      user: null,
    };
    if (this._loginDialog.open) {
      this._invalid = true;
    } else if (this.auto) {
      this._loginDialog.openDialog();
    }

    registry.currentUser = null;
    this.emitTo('pb-login', resp);
  }

  /**
   *
   * @param {Array<String>} arr array containg string values (name of groups)
   * @param {String} val value to check if it's in the array
   * @returns true if the checked values is in the array
   */
  _isItemInArray(arr, val) {
    return arr.some(arrVal => val === arrVal);
  }

  /**
   *
   * @param {object} info object returned by login function;
   * contains groups the user is a member of
   * @returns true if user is member of one of defined groups
   */
  _checkGroup(info) {
    if (this.group) {
      const groupArray = this.group.split(/[\s+,]+/);
      let exists = false;
      if (info.groups)
        groupArray.forEach(async oneItem => {
          exists = this._isItemInArray(info.groups, oneItem) || exists;
        });
      return exists;
    }
    return true;
  }

  static get styles() {
    return css`
      #message {
        color: var(--pb-login-message-invalid-color, var(--pb-error-color, #f44336));
      }
    `;
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
