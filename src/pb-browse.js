import { PbLoad } from './pb-load.js';
import { registry } from './urls.js';
import { waitOnce } from './pb-mixin.js';

/**
 * Extends PbLoad to support browsing collections.
 *
 * This is a reduced version of `pb-browse-docs`, which differs
 * from a plain `pb-load` only in that it scans the returned
 * collection listing for links to subcollections and keeps
 * track of the current collection.
 *
 * All UI elements present in `pb-browse-docs` have been removed.
 */
export class PbBrowse extends PbLoad {
  static get properties() {
    return {
      ...super.properties,
      /** The collection currently being browsed (if any) */
      collection: {
        type: String,
      },
      /**
       * If set, rewrite URLs to load pages as static HTML files,
       * so no TEI Publisher instance is required
       */
      static: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();
    this.collection = null;
    this.static = false;
  }

  connectedCallback() {
    super.connectedCallback();
    waitOnce('pb-page-ready', () => {
      this.collection = registry.state.collection;
      registry.subscribe(this, state => {
        this.collection = state.collection;
      });
    });
  }

  getURL(params) {
    if (this.static) {
      // use a static URL
      return `collections/${this.collection ? `${this.collection}/` : ''}${
        params.start || '1'
      }.html`;
    }
    const url = super.getURL(params);
    return this.collection ? `${url}/${this.collection}` : url;
  }

  _onLoad(content) {
    window.scrollTo(0, 0);
    const div = content.querySelector('[data-root]');
    const collection = div && div.getAttribute('data-root');
    const writable = div && div.classList.contains('writable');
    this.emitTo('pb-collection', {
      writable,
      collection,
    });
    document.querySelectorAll('[can-write]').forEach(elem => {
      elem.disabled = !writable;
    });
    content.querySelectorAll('[data-collection]').forEach(link => {
      link.addEventListener('click', ev => {
        ev.preventDefault();
        this.collection = link.getAttribute('data-collection');
        this.start = 1;
        if (this.history) {
          registry.commit(this, { collection: this.collection });
        }
        console.log('<pb-browse> loading collection %s', this.collection);
        this.emitTo('pb-search-resubmit');
      });
    });
  }
}
customElements.define('pb-browse', PbBrowse);
