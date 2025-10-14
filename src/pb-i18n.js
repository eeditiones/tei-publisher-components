import { LitElement, html } from 'lit';

// The currently used i18next translation function
let _translateFn;
// Bump whenever the translation function or resources change
let _i18nVersion = 0;
// Shared, tiny in-memory cache per-version (key+options)
const _i18nCache = new Map();

/**
 * Called by pb-page before the first pb-i18n-update
 * to make sure the translation function is set.
 */
export function initTranslation(translate) {
  _translateFn = translate;
  _i18nVersion++;
  _i18nCache.clear();
}

// No-op helpers kept for backward compatibility of API surface

/**
 * Translate the given string using i18n.
 *
 * @param {String} key The key to translate
 * @param {Object} [value] Optional object containing interpolation values
 * @returns {string}
 */
export function get(key, value) {
  if (_translateFn) return _translateFn(key, value);
  return key;
}

/**
 * lit-html directive to translate a given key into the target language
 * using i18next.
 *
 * @param {String} key
 * @param {Object} [value]
 */
export const translate = (key, value) => get(key, value);

// Keep _translateFn in sync on updates (guard for non-browser envs)
if (typeof document !== 'undefined') {
  document.addEventListener('pb-i18n-update', ev => {
    const next = ev.detail?.t;
    if (next && next !== _translateFn) {
      _translateFn = next;
    }
    // Invalidate cache regardless (resources may have changed)
    _i18nVersion++;
    _i18nCache.clear();
  });
}

/**
 * Insert translated text somewhere on an HTML page. If no translation is found,
 * display the contained content.
 */
export class PbI18n extends LitElement {
  static get properties() {
    return {
      ...super.properties,
      /**
       * The i18n key to use for looking up the translation.
       */
      key: { type: String },
      /**
       * Optional interpolation parameters to be passed to the
       * translation function
       */
      options: { type: Object },
      _translated: { type: String },
    };
  }

  constructor() {
    super();
    this.key = 'missing-key';
    this.options = null;
    this._translated = null;
    this._fallback = '';
    // stable handler so we can remove it on disconnect
    this._onI18nUpdate = () => this._recompute();
    this._recomputeTimer = null;
  }

  connectedCallback() {
    super.connectedCallback();

    // Capture initial fallback then clear host content so Lit fully controls light DOM
    if (!this._capturedFallback) {
      this._fallback = this.innerHTML;
      this._capturedFallback = true;
    }
    this.innerHTML = '';

    if (typeof document !== 'undefined') {
      document.addEventListener('pb-i18n-update', this._onI18nUpdate);
    }

    this._scheduleRecompute();
  }

  disconnectedCallback() {
    if (typeof document !== 'undefined') {
      document.removeEventListener('pb-i18n-update', this._onI18nUpdate);
    }
    if (this._recomputeTimer) {
      clearTimeout(this._recomputeTimer);
      this._recomputeTimer = null;
    }
    super.disconnectedCallback();
  }

  updated(changed) {
    if (changed.has('key') || changed.has('options')) {
      this._scheduleRecompute();
    }
  }

  _scheduleRecompute() {
    if (this._recomputeTimer) return;
    // Small debounce to coalesce multiple updates and event bursts
    this._recomputeTimer = setTimeout(() => {
      this._recomputeTimer = null;
      this._recompute();
    }, 20);
  }

  _recompute() {
    const opts = this.options || {};
    const cacheKey = `${_i18nVersion}::${this.key}::${JSON.stringify(opts)}`;
    if (_i18nCache.has(cacheKey)) {
      this._translated = _i18nCache.get(cacheKey);
      return;
    }

    const result = get(this.key, opts);
    const value = result && result !== this.key ? result : null;
    _i18nCache.set(cacheKey, value);
    this._translated = value;
  }

  render() {
    // Return text (not HTML) so translations aren’t treated as markup
    return this._translated ?? this._fallback;
  }

  // light DOM rendering (as before)
  createRenderRoot() {
    return this;
  }
}
customElements.define('pb-i18n', PbI18n);
