import { LitElement, html } from 'lit';

// The currently used i18next translation function
let _translate;

/**
 * Called by pb-page before the first pb-i18n-update
 * to make sure the translation function is set.
 */
export function initTranslation(translate) {
  _translate = translate;
}

// No-op helpers kept for backward compatibility of API surface

/**
 * Translate the given string using i18n.
 *
 * @param {String} key The key to translate
 * @param {Object} [value] Optional object containing interpolation values
 * @returns
 */
export function get(key, value) {
  if (_translate) {
    return _translate(key, value);
  }
  return key;
}

/**
 * lit-html directive to translate a given key into the target language
 * using i18next.
 *
 * @param {String} key The key to translate
 * @param {Object} [value] Optional object containing interpolation values
 */
export const translate = (key, value) => get(key, value);

// Keep _translate in sync on updates
document.addEventListener('pb-i18n-update', ev => {
  _translate = ev.detail.t || _translate;
});

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
      key: {
        type: String,
      },
      /**
       * Optional interpolation parameters to be passed to the
       * translation function
       */
      options: {
        type: Object,
      },
      _translated: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.key = 'missing-key';
    this._options = null;
    this._translated = null;
  }

  connectedCallback() {
    super.connectedCallback();

    // Capture initial fallback then clear host content so Lit fully controls light DOM
    this._fallback = this.innerHTML;
    this.innerHTML = '';

    document.addEventListener('pb-i18n-update', this._translate.bind(this));

    this._translate();
  }

  set options(value) {
    this._options = value;
    this._translate();
  }

  _translate() {
    const transl = get(this.key, this._options);
    if (transl && transl !== this.key) {
      this._translated = transl;
    } else {
      this._translated = null;
    }
  }

  render() {
    return this._translated ? this._translated : this._fallback;
  }

  createRenderRoot() {
    return this;
  }
}
customElements.define('pb-i18n', PbI18n);
