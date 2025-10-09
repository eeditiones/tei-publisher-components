import { html, css } from 'lit';
import './pb-fetch.js';
import { PbLoad } from './pb-load.js';
import './pb-dialog.js';

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
  constructor() {
    super();
    this._autoSubmitTargets = new WeakSet();
  }

  firstUpdated() {
    const form = this.shadowRoot && this.shadowRoot.getElementById('form');
    if (form) {
      form.addEventListener('submit', ev => {
        ev.preventDefault();
        this._submit();
      });
    }
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
      <form id="form" action="" accept="text/html" method="GET" novalidate>
        <slot name="searchButtonTop"></slot>
        <slot></slot>
        <slot name="searchButtonBottom"></slot>
        <slot name="resetButton"></slot>
      </form>

      <pb-fetch
        id="loadContent"
        verbose
        handle-as="text"
        method="get"
        with-credentials
        @response="${this._handleContent}"
        @error="${this._handleError}"
      ></pb-fetch>
      <pb-dialog id="errorDialog" title="Error">
        <p id="errorMessage"></p>
        <div slot="footer">
          <button rel="prev">Close</button>
        </div>
      </pb-dialog>
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
    const form = this.shadowRoot && this.shadowRoot.getElementById('form');
    if (!form) {
      return;
    }
    if (form.requestSubmit) {
      form.requestSubmit();
    } else if (typeof form.submit === 'function') {
      form.submit();
    }
  }

  _submit() {
    const json = this.serializeForm();
    this.emitTo('pb-search-resubmit', { params: json });
    this.emitTo('pb-submit', { params: json });
  }

  _reset() {
    const form = this.shadowRoot && this.shadowRoot.getElementById('form');
    if (form && typeof form.reset === 'function') {
      form.reset();
    }
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
    const form = this.shadowRoot && this.shadowRoot.getElementById('form');
    if (!form) return {};
    const elements = Array.from(form.elements || []).filter(
      el => el.name && !el.disabled && !el.closest('[disabled]'),
    );
    const initial = {};
    elements.forEach(element => {
      if (!(element.name in initial)) {
        initial[element.name] = null;
      }
    });
    const data = new FormData(form);
    data.forEach((value, key) => {
      if (initial[key] == null) {
        initial[key] = value;
      } else if (Array.isArray(initial[key])) {
        initial[key].push(value);
      } else {
        initial[key] = [initial[key], value];
      }
    });
    return initial;
  }

  _parseHeaders(xhr) {
    // overwrite to avoid `pb-results-received` event being sent
  }

  _onLoad(content) {
    super._onLoad(content);

    this.dispatchEvent(new CustomEvent('pb-custom-form-loaded', { detail: content }));
    this._submissionHandlers();
  }

  _handleError() {
    this.emitTo('pb-end-update');
    const loader = this.shadowRoot.getElementById('loadContent');
    const { response } = loader.lastError;
    if (this.silent) {
      console.error('Request failed: %s', response ? response.description : '');
      return;
    }
    let message;
    if (response) {
      message = response.description;
    } else {
      message = 'Server error occurred';
    }
    const dialog = this.shadowRoot.getElementById('errorDialog');
    const messageElement = this.shadowRoot.getElementById('errorMessage');
    messageElement.textContent = `Server error: ${message}`;
    dialog.openDialog();
  }

  _submissionHandlers() {
    if (!this.autoSubmit) {
      return;
    }
    this.querySelectorAll(this.autoSubmit).forEach(control => {
      if (this._autoSubmitTargets.has(control)) {
        return;
      }
      this._autoSubmitTargets.add(control);
      const name = (control.nodeName || '').toLowerCase();
      let event = 'change';
      if (
        control instanceof HTMLButtonElement ||
        name === 'pb-icon-button' ||
        name === 'paper-button' ||
        name === 'button' ||
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
      if (control instanceof HTMLSelectElement) {
        event = 'change';
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
