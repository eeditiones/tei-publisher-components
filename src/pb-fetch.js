/* eslint-disable class-methods-use-this */

/**
 * Lightweight replacement for `<iron-ajax>` using the Fetch API.
 * Provides a mostly compatible surface for existing components.
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

  connectedCallback() {
    if (this.hasAttribute('method')) {
      this.attributeChangedCallback('method', null, this.getAttribute('method'));
    }
    if (this.hasAttribute('handle-as')) {
      this.attributeChangedCallback('handle-as', null, this.getAttribute('handle-as'));
    }
    if (this.hasAttribute('with-credentials')) {
      this.attributeChangedCallback('with-credentials', null, this.getAttribute('with-credentials'));
    }
    if (this.hasAttribute('content-type')) {
      this.attributeChangedCallback('content-type', null, this.getAttribute('content-type'));
    }
  }

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

  set url(value) {
    this._url = value || '';
  }

  get url() {
    return this._url;
  }

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

  get method() {
    return this._method;
  }

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

  get handleAs() {
    return this._handleAs;
  }

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

  get withCredentials() {
    return this._withCredentials;
  }

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

  get contentType() {
    return this._contentType;
  }

  abort() {
    if (this._controller) {
      this._controller.abort();
      this._controller = null;
      this.loading = false;
    }
  }

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

  _buildRequestInit() {
    const baseHeaders = this.headers && typeof this.headers.entries === 'function'
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

  _prepareBody(headers) {
    if (this.body == null) {
      return undefined;
    }

    if (this.body instanceof FormData || this.body instanceof Blob || this.body instanceof ArrayBuffer) {
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

  _createXhrShim(response) {
    return {
      status: response.status,
      statusText: response.statusText,
      responseURL: response.url,
      getResponseHeader: name => response.headers.get(name),
      getAllResponseHeaders: () =>
        [...response.headers.entries()]
          .map(([key, value]) => `${key}: ${value}`)
          .join('\r\n'),
    };
  }

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
