import { LitElement, html } from 'lit'

// The currently used i18next translation function
let _translateFn

/**
 * Called by pb-page before the first pb-i18n-update
 * to make sure the translation function is set.
 */
export function initTranslation (translate) {
  _translateFn = translate
}

// No-op helpers kept for backward compatibility of API surface

/**
 * Translate the given string using i18n.
 *
 * @param {String} key The key to translate
 * @param {Object} [value] Optional object containing interpolation values
 * @returns {string}
 */
export function get (key, value) {
  if (_translateFn) return _translateFn(key, value)
  return key
}

/**
 * lit-html directive to translate a given key into the target language
 * using i18next.
 *
 * @param {String} key
 * @param {Object} [value]
 */
export const translate = (key, value) => get(key, value)

// Keep _translateFn in sync on updates (guard for non-browser envs)
if (typeof document !== 'undefined') {
  document.addEventListener('pb-i18n-update', (ev) => {
    _translateFn = ev.detail?.t || _translateFn
  })
}

/**
 * Insert translated text somewhere on an HTML page. If no translation is found,
 * display the contained content.
 */
export class PbI18n extends LitElement {
  static get properties () {
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
      _translated: { type: String }
    }
  }

  constructor () {
    super()
    this.key = 'missing-key'
    this.options = null
    this._translated = null
    this._fallback = ''
    // stable handler so we can remove it on disconnect
    this._onI18nUpdate = () => this._recompute()
  }

  connectedCallback () {
    super.connectedCallback()

    // Capture initial fallback then clear host content so Lit fully controls light DOM
    if (!this._capturedFallback) {
      this._fallback = this.innerHTML
      this._capturedFallback = true
    }
    this.innerHTML = ''

    if (typeof document !== 'undefined') {
      document.addEventListener('pb-i18n-update', this._onI18nUpdate)
    }

    this._recompute()
  }

  disconnectedCallback () {
    if (typeof document !== 'undefined') {
      document.removeEventListener('pb-i18n-update', this._onI18nUpdate)
    }
    super.disconnectedCallback()
  }

  updated (changed) {
    if (changed.has('key') || changed.has('options')) {
      this._recompute()
    }
  }

  _recompute () {
    const result = get(this.key, this.options)
    this._translated = result && result !== this.key ? result : null
  }

  render () {
    // Return text (not HTML) so translations aren’t treated as markup
    return this._translated ?? this._fallback
  }

  // light DOM rendering (as before)
  createRenderRoot () {
    return this
  }
}
customElements.define('pb-i18n', PbI18n)