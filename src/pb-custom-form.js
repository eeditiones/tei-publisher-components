import { html, css } from 'lit-element';
import '@polymer/iron-form';
import '@polymer/iron-ajax';
import '@polymer/paper-dialog';
import '@polymer/paper-dialog-scrollable';
import { PbLoad } from './pb-load.js';

/**
 * A custom form element which loads the actual form from a server-side script using AJAX.
 * Emits `pb-search-resubmit` and `pb-submit` events, signalling the receiver that it should
 * refresh.
 *
 * The component is currently used to implement the additional search facets on the start and
 * search result page. It can also be combined with `pb-split-list` to contain an additional form
 * with options.
 *
 * @fires pb-custom-form-loaded - Fired before the element updates its content
 * @fires pb-search-resubmit - Fired when the form is submitted
 * @fires pb-submit - Fired when the form is submitted
 */
export class PbCustomForm extends PbLoad {
  firstUpdated() {
    this.shadowRoot.getElementById('ironform').addEventListener('iron-form-presubmit', ev => {
      ev.preventDefault();
      this._submit();
    });
    this.addEventListener('click', e => {
      if (e.target.slot === 'searchButtonTop') {
        this.submit();
      }
      if (e.target.slot === 'searchButtonBottom') {
        this.submit();
      }
      if (e.target.slot === 'resetButton') {
        this._reset();
      }
    });

    this._submissionHandlers();
  }

  render() {
    return html`
      <iron-form id="ironform">
        <form action="" accept="text/html" method="GET">
          <slot name="searchButtonTop"></slot>
          <slot></slot>
          <slot name="searchButtonBottom"></slot>
          <slot name="resetButton"></slot>
        </form>
      </iron-form>

      <iron-ajax
        id="loadContent"
        verbose
        handle-as="text"
        method="get"
        with-credentials
        @response="${this._handleContent}"
        @error="${this._handleError}"
      ></iron-ajax>
      <paper-dialog id="errorDialog">
        <h2>Error</h2>
        <paper-dialog-scrollable></paper-dialog-scrollable>
        <div class="buttons">
          <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus"> Close </paper-button>
        </div>
      </paper-dialog>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  submit() {
    this.shadowRoot.getElementById('ironform').submit();
  }

  _submit() {
    const json = this.serializeForm();
    this.emitTo('pb-search-resubmit', { params: json });
    this.emitTo('pb-submit', { params: json });
  }

  _reset() {
    this.shadowRoot.getElementById('ironform').reset();
  }

  /**
   * serialize custom form to object with name value pairs
   * empty, unselected and undifined inputs will be returned
   * as null while disabled elements will still be omitted
   * this allows url parameters to be reset in the URL
   * as IronForm.serializeform will omit names without a value
   * @returns {Object} name value pairs
   */
  serializeForm() {
    const elements = this.shadowRoot.getElementById('ironform')._getSubmittableElements();
    const initial = {};
    for (const element of elements) {
      initial[element.name] = null;
    }
    return Object.assign(initial, this.shadowRoot.getElementById('ironform').serializeForm());
  }

  _parseHeaders(xhr) {
    // overwrite to avoid `pb-results-received` event being sent
  }

  _onLoad(content) {
    super._onLoad(content);

    this.dispatchEvent(new CustomEvent('pb-custom-form-loaded', { detail: content }));
  }

  _submissionHandlers() {
    if (!this.autoSubmit) {
      return;
    }
    this.querySelectorAll(this.autoSubmit).forEach(control => {
      const name = control.nodeName.toLowerCase();
      let event = 'change';
      if (
        control instanceof HTMLButtonElement ||
        name === 'paper-icon-button' ||
        name === 'paper-button' ||
        (name === 'input' &&
          (control.type === 'button' || control.type === 'submit' || control.type === 'reset'))
      ) {
        event = 'click';
      } else if (
        name === 'paper-input' ||
        (control instanceof HTMLInputElement &&
          (control.type === 'text' || control.type === 'search'))
      ) {
        event = 'keyup';
      } else if (name === 'paper-dropdown-menu') {
        event = 'value-changed';
      }
      control.addEventListener(event, this._submit.bind(this));
    });
  }

  static get properties() {
    return {
      /**
       * Register event handlers on all descendant elements matching the given CSS selector and submit the form
       * automatically if any of those changes. For button-like controls,
       * a submit is triggered on click, for text input on keyUp, and for
       * all other form components on change.
       */
      autoSubmit: {
        type: String,
        attribute: 'auto-submit',
      },
      ...super.properties,
    };
  }

  /**
   * Fired before the element updates its content
   *
   * @event pb-custom-form-loaded
   * @param {string} the loaded content
   */

  /**
   * Fired when form is submitted
   *
   * @event pb-search-resubmit
   * @param {object} params: serialized form parameters as json object
   */
}
customElements.define('pb-custom-form', PbCustomForm);
