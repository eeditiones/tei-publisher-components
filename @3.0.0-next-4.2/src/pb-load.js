import { LitElement, html, css } from 'lit';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import { typesetMath } from './pb-formula.js';
import { registry } from './urls.js';
import './pb-fetch.js';
import './pb-dialog.js';
import { themableMixin } from './theming.js';

/**
 * Dynamically load data by calling a server-side script, optionally triggered by an event.
 * This is used for e.g. the document list on the start page or the table
 * of contents.
 *
 * @slot - default unnamed slot for content
 * @fires pb-start-update - Fired before the element updates its content
 * @fires pb-end-update - Fired after the element has finished updating its content
 * @fires pb-results-received - Fired when the component received content from the server
 * @fires pb-toggle - When received, changes the state of the feature
 */
export class PbLoad extends themableMixin(pbMixin(LitElement)) {
  static get properties() {
    return {
      ...super.properties,
      /** The URL for the AJAX request. If a relative URL is passed, it will be resolved
       * against the current API endpoint.
       */
      url: {
        type: String,
      },
      /**
       * If set to true, the `url` property will be interpreted as a template string
       * containing placeholders for parameters in `{parameter-name}`. The placeholders
       * will be replaced by the actual parameters when building the final URL. Each parameter
       * used in the URL template will be removed from the request parameter list.
       */
      expand: {
        type: Boolean,
      },
      /** ID of the pb-document this element is connected to. The document path to
       * load will be taken from the pb-document.
       */
      src: {
        type: String,
      },
      /**
       * The container element into which the results returned by
       * the AJAX request will be loaded.
       */
      container: {
        type: String,
      },
      /**
       * Should content be loaded immediately when the component is initialized?
       */
      auto: {
        type: Boolean,
      },
      /**
       * Only load content once, not every time a `pb-load` event is received.
       */
      loadOnce: {
        type: Boolean,
      },
      /**
       * If set, relative links (img, a) will be made absolute.
       */
      fixLinks: {
        type: Boolean,
        attribute: 'fix-links',
      },
      /**
       * Start offset to use for showing paginated content.
       */
      start: {
        type: Number,
      },
      /**
       * If set, a parameter "language" will be added to the parameter list.
       * Also, a refresh will be triggered if a `pb-i18n-update` event is received,
       * e.g. due to the user selecting a different interface language.
       *
       * Also requires `requireLanguage` to be set on the surrounding `pb-page`.
       * See there for more information.
       */
      useLanguage: {
        type: Boolean,
        attribute: 'use-language',
      },
      /**
       * Indicates whether or not cross-site Access-Control requests should be made.
       * Default is false.
       */
      noCredentials: {
        type: Boolean,
        attribute: 'no-credentials',
      },
      /**
       * Indicates if the parameters of the request made should be saved to the browser
       * history and URL. Default: false.
       */
      history: {
        type: Boolean,
      },
      /**
       * The event which will trigger a new request to be sent. Default is 'pb-load'.
       */
      event: {
        type: String,
      },
      /**
       * Additional, user-defined parameters to be sent with the request.
       */
      userParams: {
        type: Object,
      },
      /**
       * If set, silently ignore errors when sending the request.
       */
      silent: {
        type: Boolean,
      },
      /**
       * Do not add internal parameters like 'start' or 'language' to the URL
       * but leave it untouched.
       */
      plain: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();
    this.auto = false;
    this.loadOnce = false;
    this.history = false;
    this.event = 'pb-load';
    this.loaded = false;
    this.language = null;
    this.noCredentials = false;
    this.silent = false;
    this._retryCount = 0;
    this._maxRetries = 20; // Maximum retries for document resolution
  }

  connectedCallback() {
    super.connectedCallback();
    this.subscribeTo(this.event, ev => {
      waitOnce('pb-page-ready', () => {
        if (this.history) {
          if (ev.detail && ev.detail.params) {
            const { start } = ev.detail.params;
            if (start) {
              registry.commit(this, { start });
            }
          }
          this.userParams = registry.state;
          registry.subscribe(this, state => {
            if (state.start) {
              this.start = state.start;
              this.load();
            }
          });
          registry.replace(this, this.userParams);
        }
        this.load(ev);
      });
    });

    this.subscribeTo('pb-toggle', ev => {
      this.toggleFeature(ev);
    });

    // Subscribe to pb-document events to know when the document is ready
    this.subscribeTo('pb-document', ev => {
      if (ev.detail && ev.detail.id === this.src) {
        console.log(`<pb-load> Document ${this.src} is ready, triggering load`);
        this.load();
      }
    });

    this.subscribeTo(
      'pb-i18n-update',
      ev => {
        const needsRefresh = this.language && this.language !== ev.detail.language;
        this.language = ev.detail.language;
        if (this.useLanguage && needsRefresh) {
          this.load();
        }
      },
      [],
    );

    if (this.history) {
      registry.subscribe(this, state => {
        this.start = state.start;
        this.userParams = state;
        this.load();
      });
    }

    this.signalReady();
  }

  firstUpdated() {
    if (this.auto) {
      this.start = registry.state.start || 1;
      waitOnce('pb-page-ready', data => {
        if (data && data.language) {
          this.language = data.language;
        }
        // Add a longer delay to ensure all components are properly initialized
        // This includes pb-document elements that need time to set their properties
        setTimeout(() => {
          this.wait(() => this.load());
        }, 200);
      });
    } else {
      waitOnce('pb-page-ready', data => {
        if (data && data.language) {
          this.language = data.language;
        }
      });
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (oldValue && oldValue !== newValue) {
      switch (name) {
        case 'url':
        case 'userParams':
        case 'start':
          if (this.auto && this.loader) {
            waitOnce('pb-page-ready', () => {
              this.wait(() => this.load());
            });
          }
          break;
        default:
          break;
      }
    }
  }

  render() {
    return html`
      <slot></slot>
      <pb-fetch
        id="loadContent"
        verbose
        handle-as="text"
        method="get"
        ?with-credentials="${!this.noCredentials}"
        @response="${this._handleContent}"
        @error="${this._handleError}"
      ></pb-fetch>
      <pb-dialog id="errorDialog" title="${translate('dialogs.error')}">
        <p id="errorMessage"></p>
        <div slot="footer">
          <button rel="prev" type="button">${translate('dialogs.close')}</button>
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

  toggleFeature(ev) {
    this.userParams = registry.getState(this);
    console.log('<pb-load> toggle feature %o', this.userParams);
    if (ev.detail.refresh) {
      if (this.history) {
        registry.commit(this, this.userParams);
      }
      this.load();
    }
  }

  getURL(params) {
    let { url } = this;
    if (this.expand) {
      url = url.replace(/{([^})]+)}/g, (match, key) => {
        if (!params[key]) {
          return '';
        }
        const param = encodeURIComponent(params[key] || key);
        delete params[key];
        return param;
      });
    }
    return this.toAbsoluteURL(url);
  }

  load(ev) {
    if (!this.url) {
      return;
    }
    if (this.loadOnce && this.loaded) {
      return;
    }

    this.emitTo('pb-start-update');

    let params = {};

    if (ev) {
      if (ev instanceof Event) {
        if (ev.detail && ev.detail.params) {
          params = ev.detail.params;
        }
      } else {
        params = ev;
      }
    }

    const doc = this.getDocument();
    console.log(`<pb-load> getDocument() returned:`, doc, `src="${this.src}"`);
    console.log(`<pb-load> Available elements with id "${this.src}":`, document.getElementById(this.src));
    if (doc) {
      console.log(`<pb-load> Document found, path="${doc.path}", odd="${doc.odd}", view="${doc.view}"`);
    }
    if (!this.plain) {
      if (doc && doc.path) {
        params.doc = doc.path;
        console.log(`<pb-load> Setting params.doc to:`, doc.path);
        this._retryCount = 0; // Reset retry counter when document is found
      } else if (this.src) {
        // Document not found but src is specified - wait for it to be available
        if (this._retryCount < this._maxRetries) {
          this._retryCount++;
          const delay = Math.min(100 * this._retryCount, 1000); // Progressive delay up to 1 second
          console.warn(`<pb-load> Document with id "${this.src}" not found or not ready, retrying in ${delay}ms (attempt ${this._retryCount}/${this._maxRetries})`);
          setTimeout(() => {
            this.load(ev);
          }, delay);
          return;
        } else {
          console.error(`<pb-load> Document with id "${this.src}" not found after ${this._maxRetries} attempts`);
          // Instead of returning, show a loading state and keep trying
          this.innerHTML = '<pb-i18n key="dialogs.loading">Loading...</pb-i18n>';
          return;
        }
      } else {
        // No document and no src specified - this might be intentional for plain mode
        // But if we have {doc} in the URL template, we should warn
        if (this.url && this.url.includes('{doc}')) {
          console.warn(`<pb-load> URL template contains {doc} placeholder but no document is available and no src is specified`);
        }
      }

      // set start parameter to start property, but only if not provided otherwise already
      if (this.start && !params.start) {
        params.start = this.start;
      }

      if (this.language) {
        params.language = this.language;
      }
    }
    params = this.prepareParameters(params);

    // filter null values
    for (const [k, v] of Object.entries(params)) {
      if (v === null) {
        delete params[k];
      }
    }

    const url = this.getURL(params);

    // Check if the URL still contains unresolved parameters
    if (url.includes('{') && url.includes('}')) {
      console.warn(`<pb-load> URL still contains unresolved parameters: ${url}`);
      if (this.src) {
        // Keep showing loading state and retry later
        this.innerHTML = '<pb-i18n key="dialogs.loading">Loading...</pb-i18n>';
        return;
      }
    }

    console.log('<pb-load> Loading %s with parameters %o', url, params);
    const loader = this.shadowRoot.getElementById('loadContent');
    loader.params = params;
    loader.url = url;
    loader.generateRequest();

    if (this.loadOnce) {
      this.loaded = true;
    }
  }

  /**
   * Allow subclasses to set parameters before the request is being sent.
   *
   * @param params Map of parameters
   * @return new or modified parameters map
   */
  prepareParameters(params) {
    if (this.userParams) {
      return Object.assign(params, this.userParams);
    }
    return params;
  }

  _handleContent(ev) {
    const resp = this.shadowRoot.getElementById('loadContent').lastResponse;
    if (this.container) {
      this.style.display = 'none';
      document.querySelectorAll(this.container).forEach(elem => {
        elem.innerHTML = resp;
        this._parseHeaders(ev.detail.xhr, elem);
        this._fixLinks(elem);
        this._onLoad(elem);
      });
    } else {
      this.style.display = '';
      this._clearContent();

      const div = document.createElement('div');
      div.innerHTML = resp;
      this._parseHeaders(ev.detail.xhr, div);
      div.slot = '';
      this.appendChild(div);
      this._fixLinks(div);

      this._onLoad(div);
    }

    this.emitTo('pb-end-update');
  }

  _clearContent() {
    const contentSlot = this.shadowRoot.querySelector('slot:not([name])');
    if (contentSlot) {
      // clear content from slot
      contentSlot.assignedNodes().forEach(node => node.parentNode.removeChild(node));
    }
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
      message = '<pb-i18n key="dialogs.serverError"></pb-i18n>';
    }
    const dialog = this.shadowRoot.getElementById('errorDialog');
    const messageElement = this.shadowRoot.getElementById('errorMessage');
    messageElement.innerHTML = `<pb-i18n key="dialogs.serverError"></pb-i18n>: ${message}`;
    dialog.openDialog();
  }

  _parseHeaders(xhr, content) {
    // Try to determine number of pages and current position
    // Search for data-pagination-* attributes first and if they
    // can't be found, check HTTP headers
    //
    // However, if noCredentials is set, we won't be able to access the headers
    function getPaginationParam(type, noHeaders) {
      const elem = content.querySelector(`[data-pagination-${type}]`);
      if (elem) {
        return elem.getAttribute(`data-pagination-${type}`);
      }
      return noHeaders ? 0 : xhr.getResponseHeader(`pb-${type}`);
    }

    const total = getPaginationParam('total', this.noCredentials);
    const start = getPaginationParam('start', this.noCredentials);

    if (this.start !== start) {
      this.start = parseInt(start);
    }
    this.emitTo('pb-results-received', {
      count: total ? parseInt(total, 10) : 0,
      start: this.start,
      content,
      params: this.shadowRoot.getElementById('loadContent').params,
    });
  }

  _fixLinks(content) {
    typesetMath(content);
    if (this.fixLinks) {
      content.querySelectorAll('img').forEach(image => {
        const oldSrc = image.getAttribute('src');
        if (!oldSrc) {
          return;
        }
        try {
          image.src = this.toAbsoluteURL(oldSrc);
        } catch (err) {
          console.warn('<pb-load> Unable to resolve image URL %s', oldSrc, err);
        }
      });
      content.querySelectorAll('a').forEach(link => {
        const oldHref = link.getAttribute('href');
        if (!oldHref) {
          return;
        }
        try {
          link.href = this.toAbsoluteURL(oldHref);
        } catch (err) {
          console.warn('<pb-load> Unable to resolve link URL %s', oldHref, err);
        }
      });
    }
  }

  _onLoad(content) {}

  /**
   * Fired before the element updates its content
   *
   * @event pb-start-update
   * @param {object} Parameters to be passed to the request
   */

  /**
   * Fired after the element has finished updating its content
   *
   * @event pb-end-update
   */

  /**
   * Fired after the element has received content from the server
   *
   * @event pb-results-received
   * @param {int} count number of results received (according to `pb-total` header)
   * @param {int} start offset into the result set (according to `pb-start` header)
   */
}
customElements.define('pb-load', PbLoad);
