/* eslint-disable class-methods-use-this */

/**
 * Lightweight replacement for `<iron-ajax>` using the Fetch API.
 * Provides a mostly compatible surface for existing components.
 *
 * @element pb-fetch
 * @fires response - Fired when the request completes successfully
 * @fires error - Fired when the request fails or returns an error status
 *
 * @example
 * <pb-fetch
 *   url="/api/data"
 *   method="POST"
 *   handle-as="json"
 *   @response="${this._handleResponse}"
 *   @error="${this._handleError}"
 * ></pb-fetch>
 */
export class PbFetch extends HTMLElement {
  static get observedAttributes() {
    return ['handle-as', 'method', 'with-credentials', 'content-type'];
  }

  constructor() {
    super();
    this._url = '';
    this._method = 'GET';
    this._handleAs = 'json';
    this._withCredentials = false;
    this._contentType = null;
    this.params = {};
    this.headers = {};
    this.body = undefined;
    this.loading = false;
    this.lastResponse = null;
    this.lastRequest = null;
    this.lastError = null;
    this._controller = null;
  }

  /**
   * Called when the element is inserted into the DOM.
   * Initializes attributes from the DOM if present.
   */
  connectedCallback() {
    if (this.hasAttribute('method')) {
      this.attributeChangedCallback('method', null, this.getAttribute('method'));
    }
    if (this.hasAttribute('handle-as')) {
      this.attributeChangedCallback('handle-as', null, this.getAttribute('handle-as'));
    }
    if (this.hasAttribute('with-credentials')) {
      this.attributeChangedCallback(
        'with-credentials',
        null,
        this.getAttribute('with-credentials'),
      );
    }
    if (this.hasAttribute('content-type')) {
      this.attributeChangedCallback('content-type', null, this.getAttribute('content-type'));
    }
  }

  /**
   * Called when an observed attribute changes.
   *
   * @param {string} name - The name of the attribute that changed
   * @param {string|null} oldValue - The old value of the attribute
   * @param {string|null} newValue - The new value of the attribute
   */
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'handle-as':
        this._handleAs = (newValue || 'json').toLowerCase();
        break;
      case 'method':
        this._method = (newValue || 'GET').toUpperCase();
        break;
      case 'with-credentials':
        this._withCredentials = newValue !== null;
        break;
      case 'content-type':
        this._contentType = newValue || null;
        break;
      default:
        break;
    }
  }

  /**
   * Sets the URL for the request.
   *
   * @param {string} value - The URL to request
   */
  set url(value) {
    this._url = value || '';
  }

  /**
   * Gets the URL for the request.
   *
   * @returns {string} The current URL
   */
  get url() {
    return this._url;
  }

  /**
   * Sets the HTTP method for the request (GET, POST, PUT, DELETE, etc.).
   *
   * @param {string} value - The HTTP method (will be uppercased)
   */
  set method(value) {
    const next = (value || 'GET').toUpperCase();
    if (this._method === next) {
      return;
    }
    this._method = next;
    if (value == null) {
      this.removeAttribute('method');
    } else {
      this.setAttribute('method', value);
    }
  }

  /**
   * Gets the HTTP method for the request.
   *
   * @returns {string} The current HTTP method
   */
  get method() {
    return this._method;
  }

  /**
   * Sets how the response body should be handled.
   * Valid values: 'json', 'text', 'blob', 'arraybuffer'
   *
   * @param {string} value - The response handling type (will be lowercased)
   */
  set handleAs(value) {
    const next = (value || 'json').toLowerCase();
    if (this._handleAs === next) {
      return;
    }
    this._handleAs = next;
    if (value == null) {
      this.removeAttribute('handle-as');
    } else {
      this.setAttribute('handle-as', value);
    }
  }

  /**
   * Gets how the response body is handled.
   *
   * @returns {string} The current response handling type
   */
  get handleAs() {
    return this._handleAs;
  }

  /**
   * Sets whether to include credentials (cookies, authorization headers) in the request.
   *
   * @param {boolean} value - Whether to include credentials
   */
  set withCredentials(value) {
    const next = Boolean(value);
    if (this._withCredentials === next) {
      return;
    }
    this._withCredentials = next;
    if (next) {
      this.setAttribute('with-credentials', '');
    } else {
      this.removeAttribute('with-credentials');
    }
  }

  /**
   * Gets whether credentials are included in requests.
   *
   * @returns {boolean} Whether credentials are included
   */
  get withCredentials() {
    return this._withCredentials;
  }

  /**
   * Sets the Content-Type header for the request.
   *
   * @param {string|null} value - The Content-Type value (e.g., 'application/json')
   */
  set contentType(value) {
    if (this._contentType === value) {
      return;
    }
    this._contentType = value || null;
    if (value == null) {
      this.removeAttribute('content-type');
    } else {
      this.setAttribute('content-type', value);
    }
  }

  /**
   * Gets the Content-Type header for the request.
   *
   * @returns {string|null} The current Content-Type value
   */
  get contentType() {
    return this._contentType;
  }

  /**
   * Aborts the current request if one is in progress.
   * Sets loading to false and clears the abort controller.
   */
  abort() {
    if (this._controller) {
      this._controller.abort();
      this._controller = null;
      this.loading = false;
    }
  }

  /**
   * Generates and executes the HTTP request.
   * Builds the URL with query parameters, sends the request, and parses the response.
   * Dispatches 'response' event on success or 'error' event on failure.
   *
   * @returns {Promise<any|null>} The parsed response body, or null if the request failed or was aborted
   */
  async generateRequest() {
    if (!this._url) {
      return null;
    }

    this.abort();
    this._controller = new AbortController();

    const init = this._buildRequestInit();
    init.signal = this._controller.signal;

    this.loading = true;

    try {
      const url = this._buildUrlWithParams();
      const response = await fetch(url, init);
      const { parsed, rawText } = await this._parseBody(response);

      this.lastRequest = {
        url: url,
        method: this._method,
        params: this.params,
        headers: init.headers,
      };

      if (!response.ok) {
        const errorDetail = {
          status: response.status,
          statusText: response.statusText,
          response: rawText,
          xhr: this._createXhrShim(response),
        };
        this.lastError = errorDetail;
        this.lastResponse = null;
        this.loading = false;
        this.dispatchEvent(new CustomEvent('error', { detail: errorDetail }));
        // Don't throw error - let the error handler deal with it
        return null;
      }

      this.lastError = null;
      this.lastResponse = parsed;
      this.loading = false;
      const detail = {
        response: parsed,
        status: response.status,
        xhr: this._createXhrShim(response),
        request: this.lastRequest,
      };
      this.dispatchEvent(new CustomEvent('response', { detail }));
      return parsed;
    } catch (error) {
      if (error.name === 'AbortError') {
        return null;
      }
      if (!this.lastError) {
        const errorDetail = {
          status: error.status || 0,
          statusText: error.statusText || error.message,
          response: error.response || null,
          xhr: error.xhr || null,
        };
        this.lastError = errorDetail;
        this.lastResponse = null;
        this.dispatchEvent(new CustomEvent('error', { detail: errorDetail }));
      }
      this.loading = false;
      // Don't throw error - let the error handler deal with it
      return null;
    } finally {
      this._controller = null;
    }
  }

  /**
   * Builds the full URL by appending query parameters from this.params.
   *
   * @returns {string} The URL with query parameters appended
   * @private
   */
  _buildUrlWithParams() {
    if (!this.params || Object.keys(this.params).length === 0) {
      return this._url;
    }

    // Use encodeURIComponent to ensure %20 encoding for spaces (matching iron-ajax behavior)
    const paramPairs = [];
    Object.entries(this.params).forEach(([key, value]) => {
      if (value != null) {
        if (Array.isArray(value)) {
          value.forEach(item => {
            paramPairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(item)}`);
          });
        } else {
          paramPairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        }
      }
    });

    if (paramPairs.length === 0) {
      return this._url;
    }

    const separator = this._url.includes('?') ? '&' : '?';
    return `${this._url}${separator}${paramPairs.join('&')}`;
  }

  /**
   * Builds the RequestInit object for the fetch call.
   * Sets method, headers, credentials, and body.
   *
   * @returns {RequestInit} The fetch request initialization object
   * @private
   */
  _buildRequestInit() {
    const baseHeaders =
      this.headers && typeof this.headers.entries === 'function'
        ? Object.fromEntries(this.headers.entries())
        : this.headers || {};
    const headers = new Headers(baseHeaders);
    const init = {
      method: this._method || 'GET',
      headers,
      credentials: this._withCredentials ? 'include' : 'same-origin',
    };

    const payload = this._prepareBody(headers);
    if (payload !== undefined) {
      init.body = payload;
    }

    return init;
  }

  /**
   * Prepares the request body based on the body type and content type.
   * Handles FormData, Blob, ArrayBuffer, string, URLSearchParams, and object types.
   *
   * @param {Headers} headers - The request headers object (may be modified)
   * @returns {string|FormData|Blob|ArrayBuffer|undefined} The prepared body, or undefined if no body
   * @private
   */
  _prepareBody(headers) {
    if (this.body == null) {
      return undefined;
    }

    if (
      this.body instanceof FormData ||
      this.body instanceof Blob ||
      this.body instanceof ArrayBuffer
    ) {
      return this.body;
    }

    if (typeof this.body === 'string') {
      if (this._contentType && !headers.has('Content-Type')) {
        headers.set('Content-Type', this._contentType);
      }
      return this.body;
    }

    if (this.body instanceof URLSearchParams) {
      if (!headers.has('Content-Type')) {
        headers.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
      }
      return this.body.toString();
    }

    if (this._contentType === 'application/x-www-form-urlencoded') {
      if (!headers.has('Content-Type')) {
        headers.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
      }
      return this._encodeFormBody(this.body);
    }

    const contentType = this._contentType || 'application/json';
    if (!headers.has('Content-Type')) {
      headers.set('Content-Type', contentType);
    }

    if (contentType.includes('json')) {
      return JSON.stringify(this.body);
    }

    return this.body;
  }

  /**
   * Parses the response body based on the handleAs setting.
   *
   * @param {Response} response - The fetch Response object
   * @returns {Promise<{parsed: any, rawText: string}>} Object containing parsed body and raw text
   * @private
   */
  async _parseBody(response) {
    const cloned = response.clone();
    let rawText = '';
    try {
      rawText = await cloned.text();
    } catch (err) {
      rawText = '';
    }

    if (response.status === 204 || response.status === 205) {
      return { parsed: null, rawText: '' };
    }

    switch (this._handleAs) {
      case 'text':
        return { parsed: rawText, rawText };
      case 'json':
        if (!rawText) {
          return { parsed: null, rawText };
        }
        try {
          return { parsed: JSON.parse(rawText), rawText };
        } catch (err) {
          return { parsed: null, rawText };
        }
      case 'blob':
        return { parsed: await response.blob(), rawText };
      case 'arraybuffer':
        return { parsed: await response.arrayBuffer(), rawText };
      default:
        return { parsed: rawText, rawText };
    }
  }

  /**
   * Creates an XHR-like shim object for compatibility with iron-ajax.
   * Provides status, statusText, responseURL, and header access methods.
   *
   * @param {Response} response - The fetch Response object
   * @returns {Object} An object with XHR-like properties and methods
   * @private
   */
  _createXhrShim(response) {
    return {
      status: response.status,
      statusText: response.statusText,
      responseURL: response.url,
      getResponseHeader: name => response.headers.get(name),
      getAllResponseHeaders: () =>
        [...response.headers.entries()].map(([key, value]) => `${key}: ${value}`).join('\r\n'),
    };
  }

  /**
   * Encodes an object as URL-encoded form data.
   * Handles URLSearchParams, strings, and plain objects.
   *
   * @param {Object|string|URLSearchParams} body - The body to encode
   * @returns {string} The URL-encoded form string
   * @private
   */
  _encodeFormBody(body) {
    if (body instanceof URLSearchParams) {
      return body.toString();
    }

    if (typeof body === 'string') {
      return body;
    }

    if (!body || typeof body !== 'object') {
      return '';
    }

    const params = new URLSearchParams();
    Object.entries(body).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(item => params.append(key, item));
      } else if (value != null) {
        params.append(key, value);
      }
    });
    return params.toString();
  }
}

if (!customElements.get('pb-fetch')) {
  customElements.define('pb-fetch', PbFetch);
}
