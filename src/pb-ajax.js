import { LitElement, html, css } from 'lit-element';
import '@polymer/iron-ajax';
import '@polymer/paper-dialog';
import '@polymer/paper-dialog-scrollable';
import { pbMixin } from './pb-mixin.js';
import { get as i18n } from './pb-i18n.js';
import './pb-message.js';

/**
 * Triggers an action on the server and shows a dialog
 * upon completion. Used for the "recompile ODD" and other
 * actions.
 *
 * The parameters sent to the server-side script will be copied
 * from the `pb-view` to which this component subscribes, see pb-update event.
 *
 * @slot - unnamed slot for link content
 * @slot title - dialog title
 *
 * @fires pb-start-update - Fired before the element updates its content
 * @fires pb-end-update - Fired after the element has finished updating its content
 * @fires pb-update - When received, copies request parameters from the event

 */
export class PbAjax extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      /**
       * the URL to send a request to
       */
      url: {
        type: String,
      },
      /**
       * Title of link that triggers the request
       */
      title: {
        type: String,
      },
      /**
       * HTTP method to use, e.g. 'get', 'post', 'delete' ...
       */
      method: {
        type: String,
      },
      /**
       * If set, emits an event with the given name to the channel
       * this component is subscribed to.
       */
      event: {
        type: String,
      },
      /**
       * If set, display a confirmation dialog with the message text given in
       * this property. The user may cancel the action.
       */
      confirm: {
        type: String,
      },
      /**
       * Set to not show the server's response
       */
      quiet: {
        type: Boolean,
      },
      _message: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.method = 'get';
    this.confirm = null;
    this.quiet = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.subscribeTo('pb-update', this._onUpdate.bind(this));
  }

  render() {
    return html`
      <a id="button" @click="${this._handleClick}" title="${this.title}"><slot></slot></a>
      <iron-ajax
        id="loadContent"
        verbose
        handle-as="text"
        method="${this.method}"
        with-credentials
        @error="${this._handleError}"
        @response="${this._handleResponse}"
      ></iron-ajax>
      <pb-message id="confirmDialog"></pb-message>
      <slot name="title" style="display: none"></slot>
      <progress id="progress" max="100"></progress>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    const slot = this.shadowRoot.querySelector('slot[name=title]');
    this._dialogTitle = '';
    slot.assignedNodes().forEach(node => {
      this._dialogTitle += node.innerHTML;
    });
    this.button = this.querySelector('paper-button');
    this.progress = this.shadowRoot.querySelector('progress');
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      slot[name='title'] {
        margin: 0;
      }
      progress {
        width: 100%;
        display: none;
      }
      progress.running {
        display: block;
      }
    `;
  }

  _handleClick(ev) {
    ev.preventDefault();
    if (this.confirm) {
      const dialog = this.shadowRoot.getElementById('confirmDialog');
      dialog
        .confirm(this._dialogTitle, i18n(this.confirm))
        .then(() => this.trigger())
        .catch(() => console.log('<pb-ajax> Action cancelled'));
    } else {
      this.trigger();
    }
  }

  async trigger() {
    this._disable();
    const loader = this.shadowRoot.getElementById('loadContent');
    loader.url = `${this.getEndpoint()}/${this.url}`;
    this.emitTo('pb-start-update');
    await this.shadowRoot.getElementById('loadContent').generateRequest();
  }

  _enable() {
    if (this.button) {
      this.button.removeAttribute('disabled');
      this.button.removeAttribute('readonly');
      this.progress.classList.remove('running');
    }
  }

  _disable() {
    if (this.button) {
      this.button.setAttribute('disabled', 'disabled');
      this.button.setAttribute('readonly', 'readonly');
      this.progress.classList.add('running');
    }
  }

  _handleResponse() {
    this._enable();
    const resp = this.shadowRoot.getElementById('loadContent').lastResponse;
    this._message = resp;
    if (!this.quiet) {
      const dialog = this.shadowRoot.getElementById('confirmDialog');
      dialog.show(this._dialogTitle, this._message);
    }

    this.emitTo('pb-end-update');

    if (this.event) {
      this.emitTo(this.event);
    }
  }

  _handleError() {
    this._enable();
    const loader = this.shadowRoot.getElementById('loadContent');
    const msg = loader.lastError.response;
    const parser = new DOMParser();
    const doc = parser.parseFromString(msg, 'application/xml');
    const node = doc.querySelector('message');
    if (node) {
      this._message = node.textContent;
    } else {
      this._message = msg;
    }
    const dialog = this.shadowRoot.getElementById('confirmDialog');
    dialog.show(i18n('dialogs.error'), this._message);
    this.emitTo('pb-end-update');
  }

  _onUpdate(ev) {
    this.shadowRoot.getElementById('loadContent').params = ev.detail.params;
  }
}
customElements.define('pb-ajax', PbAjax);
