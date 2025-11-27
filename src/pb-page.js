import { LitElement, html, css } from 'lit';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import Backend from 'i18next-chained-backend';
import { pbMixin, clearPageEvents } from './pb-mixin.js';
import { resolveURL } from './utils.js';
import { loadStylesheets } from './theming.js';
import { initTranslation } from './pb-i18n.js';
import { typesetMath } from './pb-formula.js';
import { registry } from './urls.js';

/**
 * Make sure there's only one instance of pb-page active at any time.
 */
let _instance;

/**
 * Configuration element which should wrap around other `pb-` elements.
 * Among other things, this element determines the TEI Publisher
 * instance to which all elements will talk (property `endpoint`), and
 * initializes the i18n language module.
 *
 * @slot - default unnamed slot for content
 * @fires pb-page-ready - fired when the endpoint and language settings have been determined
 * @fires pb-i18n-update - fired when the user selected a different display language
 * @fires pb-i18n-language - when received, changes the language to the one passed in the event and proceeds to pb-i18-update
 * @fires pb-toggle - when received, dispatch state changes to the elements on the page (see `pb-toggle-feature`, `pb-select-feature`)
 */
export class PbPage extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      /**
       * TEI Publisher internal: set to the root URL of the current app
       */
      appRoot: {
        type: String,
        attribute: 'app-root',
      },
      /**
       * Can be used to define parameters which should be serialized in the
       * URL path rather than as query parameters. Expects a url pattern
       * relative to the application root
       * (supported patterns are documented in the
       * [path-to-regexp](https://www.npmjs.com/package/path-to-regexp) library documentation).
       *
       * For example, a pattern `:lang/texts/:path/:id?` would support URLs like
       * `en/texts/text1/chapter1`. Whenever components change state – e.g. due to a navigation
       * event – the standard parameters `path`, `lang` and `id` would be serialized into the
       * URL path pattern rather than query parameters.
       */
      urlTemplate: {
        type: String,
        attribute: 'url-template',
      },
      /**
       * A comma-separated list of parameter names which should not be reflected on the browser URL.
       * Use this to exclude e.g. the default `odd` parameter of a pb-view to be shown in the
       * browser URL.
       */
      urlIgnore: {
        type: String,
        attribute: 'url-ignore',
      },
      /**
       * Is the resource path part of the URL or should it be
       * encoded as a parameter? TEI Publisher uses the
       * URL path, but the webcomponent demos need to encode the resource path
       * in a query parameter.
       */
      urlPath: {
        type: String,
        attribute: 'url-path',
      },
      /**
       * If enabled, a hash in the URL (e.g. documentation.xml#introduction) will
       * be interpreted as an xml:id to navigate to when talking to the server.
       */
      idHash: {
        type: Boolean,
        attribute: 'id-hash',
      },
      /**
       * TEI Publisher internal: set to the current page template.
       */
      template: {
        type: String,
      },
      /**
       * The base URL of the TEI Publisher instance. All nested elements will
       * talk to this instance. By default it is set to the URL the
       * page was loaded from.
       *
       * The endpoint can be overwritten by providing an HTTP request parameter
       * `_target` with an URL.
       */
      endpoint: {
        type: String,
        reflect: true,
      },
      apiVersion: {
        type: String,
        attribute: 'api-version',
        reflect: true,
      },
      /**
       * Optional URL pointing to a directory from which additional i18n
       * language files will be loaded. The URL should contain placeholders
       * for the language (`lng`) and the namespace (`ns`), e.g.
       *
       * `resources/i18n/{{ns}}_{{lng}}.json`
       *
       * or
       *
       * `resources/i18n/{{ns}}/{{lng}}.json`
       *
       * The latter assumes custom language files in a subdirectory, the first
       * expects the namespace to be specified at the start of the file name.
       *
       * The default namespace for custom language files is assumed to be `app`,
       * but you can define additional namespaces via `localeFallbackNS`.
       */
      locales: {
        type: String,
      },
      /**
       * Optional list of whitespace separated namespaces which should be searched
       * for translations. By default, only the namespace `common` is queried.
       * If the `locales` property is specified, an additional namespace `app` is added.
       * You can add more namespace here, e.g. `custom`, if you want to provide
       * translations for custom apps or components.
       */
      localeFallbackNs: {
        type: String,
        attribute: 'locale-fallback-ns',
      },
      /**
       * Comma-separated list of languages supported. If the detected language
       * is not in this list, fall back to the configured fallback language.
       */
      supportedLanguages: {
        type: Array,
        attribute: 'supported-languages',
        converter(value) {
          return value.split(/\s*,\s*/);
        },
      },
      /**
       * The fallback language to use if the detected language is not supported.
       * Defaults to 'en'.
       */
      fallbackLanguage: {
        type: String,
        attribute: 'fallback-language',
      },
      /**
       * Set a language for i18n (e.g. 'en' or 'de'). If not set, browser language
       * detection will be used.
       */
      language: {
        type: String,
      },
      /**
       * If set, the element will wait for a language being set by i18n before
       * it sends a `pb-page-ready` event. Elements like `pb-view` will wait
       * for this event before displaying content.
       *
       * Also, `pb-view` will pass the configured language to the server endpoint
       * where it will be available to ODD processing models in variable
       * `$parameters?language` and can thus be used to change output depending on
       * the user interface language.
       *
       * If you would like `pb-view` to refresh automatically whenever the language
       * setting changes, specify property `useLanguage` on the corresponding `pb-view`.
       */
      requireLanguage: {
        type: Boolean,
        attribute: 'require-language',
      },
      /**
       * Will be set while the component is loading and unset when
       * it is fully loaded. Use to avoid flash of unstyled content
       * via CSS: set `unresolved` on `pb-page` in the HTML and
       * add a CSS rule like:
       *
       * ```css
       * pb-page[unresolved] {
       *     display: none;
       * }
       * ```
       */
      unresolved: {
        type: Boolean,
        reflect: true,
      },
      theme: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.unresolved = true;
    this.endpoint = '.';
    this.urlTemplate = null;
    this.urlIgnore = null;
    this.urlPath = 'path';
    this.idHash = false;
    this.apiVersion = undefined;
    this.requireLanguage = false;
    this.supportedLanguages = null;
    this.fallbackLanguage = 'en';
    this.theme = null;
    this._localeFallbacks = [];
    this._i18nInstance = null;

    if (_instance) {
      this.disabled = true;
    } else {
      _instance = this;

      // clear global page events which might have been set by other pb-page instances.
      // important while running the test suite.
      clearPageEvents();
    }
  }

  get localeFallbackNs() {
    // Expose a space-separated view of the current fallback namespaces
    return this._localeFallbacks && this._localeFallbacks.length
      ? this._localeFallbacks.join(' ')
      : '';
  }

  set localeFallbackNs(value) {
    // Replace (not append) to avoid uncontrolled growth when attribute re-applies
    const next = (value || '')
      .split(/\s+/)
      .map(s => s.trim())
      .filter(Boolean);
    // Deduplicate while preserving order
    const seen = new Set();
    this._localeFallbacks = next.filter(ns => (seen.has(ns) ? false : (seen.add(ns), true)));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._i18nInstance = null;
    if (_instance === this) {
      // clear to allow future instances
      _instance = null;
    }
  }

  async connectedCallback() {
    super.connectedCallback();

    if (this.disabled) {
      return;
    }

    // Ensure attribute-provided endpoint is honored even before first update
    const attrEndpoint = this.getAttribute('endpoint');
    if (attrEndpoint) {
      this.endpoint = attrEndpoint;
    }

    registry.configure(
      this.urlPath === 'path',
      this.idHash,
      this.appRoot,
      this.urlTemplate,
      this.urlIgnore,
    );

    this.endpoint = this.endpoint.replace(/\/+$/, '');


    const target = registry.state._target;
    if (target) {
      this.endpoint = target;
    }

    const apiVersion = registry.state._api;
    if (apiVersion) {
      this.apiVersion = apiVersion;
    }

    const stylesheetURLs = [];
    if (this.theme) {
      stylesheetURLs.push(this.toAbsoluteURL(this.theme, this.endpoint));
    } else {
      stylesheetURLs.push('components.css');
    }
    console.log('<pb-page> Loading component theme stylesheets from %s', stylesheetURLs.join(', '));
    this._themeSheet = await loadStylesheets(stylesheetURLs);

    // try to figure out what version of TEI Publisher the server is running
    if (!this.apiVersion) {
      // first check if it has a login endpoint, i.e. runs a version < 7
      // this is necessary to prevent a CORS failure
      const json = await fetch(`${this.endpoint}/login`)
        .then(res => {
          if (res.ok) {
            return null;
          }
          // if not, access the actual /api/version endpoint to retrieve the API version
          return fetch(`${this.endpoint}/api/version`).then(res2 => res2.json());
        })
        .catch(() => fetch(`${this.endpoint}/api/version`).then(res2 => res2.json()));

      if (json) {
        this.apiVersion = json.api;
        console.log(
          `<pb-page> Server reports API version ${this.apiVersion} with app ${json.app.name}/${json.app.version} running on ${json.engine.name}/${json.engine.version}`,
        );
      } else {
        console.log('<pb-page> No API version reported by server, assuming 0.9.0');
        this.apiVersion = '0.9.0';
      }
    }

    if (!this.requireLanguage) {
      this.signalReady('pb-page-ready', {
        endpoint: this.endpoint,
        template: this.template,
        apiVersion: this.apiVersion,
      });
    }
    // Note: If requireLanguage is true, pb-page-ready will be signaled after i18n initialization in firstUpdated()
  }

  firstUpdated() {
    super.firstUpdated();

    if (this.disabled) {
      return;
    }


    const slot = this.shadowRoot.querySelector('slot');
    slot.addEventListener(
      'slotchange',
      () => {
        const ev = new CustomEvent('pb-page-loaded', {
          bubbles: true,
          composed: true,
        });
        this.dispatchEvent(ev);
      },
      { once: true },
    );

    const defaultLocales = this.endpoint 
      ? `${this.toAbsoluteURL('resources/i18n/', this.endpoint)}{{ns}}/{{lng}}.json`
      : `${resolveURL('../i18n/')}{{ns}}/{{lng}}.json`;
    console.log(
      '<pb-page> Loading locales. common: %s; additional: %s; namespaces: %o',
      defaultLocales,
      this.locales,
      this._localeFallbacks,
    );
    const backends = this.locales ? [XHR, XHR] : [XHR];
    const backendOptions = [
      {
        loadPath: defaultLocales,
        crossDomain: true,
      },
    ];
    if (this.locales) {
      backendOptions.unshift({
        loadPath: this.locales,
        crossDomain: true,
      });
    }
    const options = {
      fallbackLng: this.fallbackLanguage,
      defaultNS: 'common',
      ns: ['common'],
      debug: false,
      load: 'languageOnly',
      detection: {
        lookupQuerystring: 'lang',
      },
      backend: {
        backends,
        backendOptions,
      },
    };
    if (this.language) {
      options.lng = this.language;
    }
    console.log('supported langs: %o', this.supportedLanguages);
    if (this.supportedLanguages) {
      options.supportedLngs = this.supportedLanguages;
    }

    if (this._localeFallbacks.length > 0) {
      const fallbacks = this._localeFallbacks.slice();
      options.defaultNS = fallbacks[0];
      options.fallbackNS = fallbacks.slice(1);
      options.ns = fallbacks;
    }
    console.log('<pb-page> i18next options: %o', options);
    this._i18nInstance = i18next.createInstance();
    this._i18nInstance.use(LanguageDetector).use(Backend);
    this._i18nInstance.init(options).then(t => {
      initTranslation(t);
      // initialized and ready to go!
      this._updateI18n(t);
      this.signalReady('pb-i18n-update', { t, language: this._i18nInstance?.language });
      if (this.requireLanguage) {
        this.signalReady('pb-page-ready', {
          endpoint: this.endpoint,
          apiVersion: this.apiVersion,
          template: this.template,
          language: this._i18nInstance?.language,
        });
      }
    });

    // React to language change events by updating i18n and notifying listeners
    this.subscribeTo('pb-i18n-language', ev => {
      const { language } = ev.detail;
      this._i18nInstance.changeLanguage(language).then(t => {
        this._updateI18n(t);
        this.emitTo('pb-i18n-update', { t, language: this._i18nInstance?.language }, []);
      }, []);
    });

    // this.subscribeTo('pb-global-toggle', this._toggleFeatures.bind(this));
    this.addEventListener('pb-global-toggle', this._toggleFeatures.bind(this));
    // Avoid a Lit reactive update here; just remove the attribute instead.
    this.removeAttribute('unresolved');

    console.log('<pb-page> endpoint: %s; trigger window resize', this.endpoint);
    // Guard: some app-header implementations may not expose _notifyLayoutChanged
    this.querySelectorAll('app-header').forEach(h => {
      if (typeof h._notifyLayoutChanged === 'function') {
        h._notifyLayoutChanged();
      }
    });

    typesetMath(this);
  }

  _updateI18n(t) {
    this.querySelectorAll('[data-i18n]').forEach(elem => {
      const targets = elem.getAttribute('data-i18n');
      const regex = /(?:\[([^\]]+)\])?([^;]+)/g;
      let m = regex.exec(targets);
      while (m) {
        const translated = t(m[2]);
        if (m[1]) {
          elem.setAttribute(m[1], translated);
        } else {
          elem.innerHTML = translated;
        }
        m = regex.exec(targets);
      }
    });
  }

  get stylesheet() {
    return this._themeSheet;
  }

  /**
   * Handle the `pb-toggle` event sent by `pb-select-feature` or `pb-toggle-feature`
   * and dispatch actions to the elements on the page.
   */
  _toggleFeatures(ev) {
    const sc = ev.detail;
    this.querySelectorAll(sc.selector).forEach(node => {
      const command = sc.command || 'toggle';
      if (node.command) {
        node.command(command, sc.state);
      }
      if (sc.state) {
        node.classList.add(command);
      } else {
        node.classList.remove(command);
      }
    });
  }

  render() {
    return html`<slot></slot>`;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }
}

customElements.define('pb-page', PbPage);
