import { LitElement, html, css } from 'lit';
import { pbMixin } from './pb-mixin.js';
import { registry } from './urls.js';

/**
 *
 * @param {Array<String>} arr array containg string values (name of groups)
 * @param {String} val value to check if it's in the array
 * @returns true if the checked values is in the array
 */
function _isItemInArray(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

/**
 *
 * @param {object} user user name returned by login function;
 * @param {object} groups contains groups (an array) the logged user is a member of
 * @param {string} targetGroups string containing (optionally) space separated list of target groups
 * @returns true if user is member of one of the target groups
 */
export function isLoggedIn(user, groups, targetGroups) {
  if (user == null) {
    return false;
  }
  if (targetGroups) {
    if (!groups) {
      return false;
    }
    const groupArray = targetGroups.split(/[\s+,]+/);
    let exists = false;
    groupArray.forEach(async oneItem => {
      exists = _isItemInArray(groups, oneItem) || exists;
    });
    return exists;
  }
  return true;
}

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
      /** Id of the pb-login element to connect to
       * @deprecated no longer used
       */
      login: {
        type: String,
      },
      show: {
        type: Boolean,
        reflect: true,
      },
      /**
       * If set, requires the logged in user to be member of
       * the given group.
       * Multiple groups can be defined separating items by space and/or comma.
       */
      group: {
        type: String,
      },
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

    this.subscribeTo(
      'pb-login',
      ev => {
        this.show = this._loggedIn(ev.detail.user, ev.detail.groups);
      },
      [],
    );
    this.show =
      registry.currentUser &&
      this._loggedIn(registry.currentUser.user, registry.currentUser.groups);
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

      :host(.fallback),
      :host([show]) {
        display: inherit;
      }
    `;
  }

  _loggedIn(user, groups) {
    return isLoggedIn(user, groups, this.group);
  }
}
customElements.define('pb-restricted', PbRestricted);
