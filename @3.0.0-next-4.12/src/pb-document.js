import { LitElement } from 'lit';
import { pbMixin } from './pb-mixin.js';
import { registry } from './urls.js';

/**
 * Represents a Publisher document. It has no visual presentation but holds meta-data
 * about the document to be used by other components like `pb-view`. Every `pb-view`
 * references a `pb-document`.
 * `pb-document` requires an id attribute to allow other components to access it.
 *
 * @fires pb-document - Fires update event
 */
class PbDocument extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      /**
       * The path to the document to be loaded. Should be relative to `root`.
       */
      path: {
        type: String,
        reflect: true,
      },
      /**
       * The root collection which will be used to resolve relative paths
       * specified in `path`.
       */
      rootPath: {
        type: String,
        attribute: 'root-path',
      },
      /**
       * The odd file which should be used to render this document by default. Might be
       * overwritten in a `pb-view`. The odd should be specified by its name without path
       * or the `.odd` suffix.
       */
      odd: {
        type: String,
        reflect: true,
      },
      /**
       * The default view to be used for displaying this document. Can be either `page`, `div` or `simple`.
       * Might be overwritten in a `pb-view`.
       *
       * Value | Displayed content
       * ------|------------------
       * `page` | content is displayed page by page as determined by tei:pb
       * `div` | content is displayed by divisions
       * `single` | do not paginate but display entire content at once
       */
      view: {
        type: String,
        reflect: true,
      },
      disableHistory: {
        type: Boolean,
        attribute: 'disable-history',
      },
      sourceView: {
        type: String,
        attribute: 'source-view',
      },
    };
  }

  constructor() {
    super();
    this.path = null;
    this.rootPath = '';
    this.disableHistory = false;
    // Internal: coalesce & de-duplicate emitted update events
    this._emitScheduled = false;
    this._lastEventKey = null;
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.disableHistory) {
      // if path is unset, use path taken from the URL
      if (registry.state.path && !this.path) {
        this.path = registry.state.path;
      }
      this.view = registry.state.view || this.view;
      this.odd = registry.state.odd || this.odd;
    }

    // Initialize the event key baseline to prevent unnecessary initial events
    this._lastEventKey = this._computeEventKey();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
    // No-op if value did not change (prevents churn)
    if (oldVal === newVal) return;

    // Coalesce multiple rapid attribute updates into a single emit
    if (this._emitScheduled) return;

    this._emitScheduled = true;
    setTimeout(() => {
      this._emitScheduled = false;
      const key = this._computeEventKey();
      if (key !== this._lastEventKey) {
        this.emitTo('pb-document', this);
        this._lastEventKey = key;
      }
    }, 0);
  }

  _computeEventKey() {
    // Build a stable signature of relevant state used by pb-view
    return JSON.stringify({
      path: this.path || '',
      rootPath: this.rootPath || '',
      odd: this.odd || '',
      view: this.view || '',
      sourceView: this.sourceView || '',
    });
  }

  /**
   * Returns the name of the document without path.
   *
   * @returns {string} Name of the document
   */
  getFileName() {
    return this.path.replace(/^.*?([^\/]+)$/, '$1');
  }

  getCollection() {
    return this.path.replace(/^(.*?)\/[^\/]+$/, '$1');
  }

  /**
     * Returns the full path to the document.

     * @returns {string} Full path to the document
     */
  getFullPath() {
    return `${this.rootPath}/${this.path}`;
  }
}

customElements.define('pb-document', PbDocument);
