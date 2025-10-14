import { LitElement, html, css } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '@lrnwebcomponents/es-global-bridge';
// Use package export maps supported by verovio 3.x
import createVerovioModule from 'verovio/wasm';
import { VerovioToolkit } from 'verovio/esm';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import { resolveURL } from './utils.js';

let _verovio = null;

/** Import external script dynamically */
function _import(name, location) {
  window.ESGlobalBridge.requestAvailability();
  return new Promise(resolve => {
    window.ESGlobalBridge.instance.load(name, location);
    window.addEventListener(`es-bridge-${name}-loaded`, () => resolve(), { once: true });
  });
}

/**
 * A viewer and player for MEI musical notation based on [Verovio](https://www.verovio.org/).
 * Supports optional MIDI playback using [web-midi-player](https://midi.yvesgurcan.com/).
 * Both libraries are loaded dynamically when the component is used the first time.
 *
 * Viewing options to be selected by the user can be defined via nested `pb-option` elements:
 *
 * ```html
 * <pb-mei id="viewer" player url="http://www.marenzio.org/mei/M-06-5/M_06_5_01_S_io_parto_i_moro_e_pur_partir_conviene.mei"
 *         footer="none">
 *    <pb-option name="appXPath" on="./rdg[contains(@label, 'original')]" off="">Original Clefs</pb-option>
 * </pb-mei>
 * ```
 *
 * The MEI document to display can either be given directly in the `data` property or loaded from an URL
 * specified in `url`.
 *
 * @prop {"auto" | "encoded" | "none" | "always"} footer - Control footer layout
 * @prop {"auto" | "encoded" | "none"} header - Control footer layout
 * @prop {"auto" | "none" | "line" | "encoded" | "smart"} breaks - Define page and system breaks layout (default: "auto")
 * @cssprop --pb-mei-min-width - minimal width
 * @csspart toolbar - toolbar with pagination and midi player controls
 * @csspart music - the music output area
 */
export class PbMei extends pbMixin(LitElement) {
  static get properties() {
    return {
      /**
       * MEI data to display specified as a string. This should represent a complete
       * MEI document.
       */
      data: {
        type: String,
      },
      /**
       * URL of the MEI file to load. Will be used if no `data` property is present.
       * A relative URL would be resolved relative to the TEI Publisher endpoint.
       */
      url: {
        type: String,
      },
      /**
       * Set to enable MIDI player
       */
      player: {
        type: Boolean,
      },
      header: {
        type: String,
      },
      footer: {
        type: String,
      },
      breaks: {
        type: String,
      },
      /**
       * Set the XPath query for selecting <app> child elements, for example: "./rdg[contains(@source, 'source-id')]";
       * by default the <lem> or the first <rdg> is selected
       */
      appXPath: {
        type: String,
        attribute: 'app-xpath',
      },
      /**
       * Set the xPath query for selecting <choice> child elements, for example: "./orig"; by default the first child is selected
       */
      choiceXPath: {
        type: String,
        attribute: 'choice-xpath',
      },
      /**
       * Set the xPath query for selecting the <mdiv> to be rendered; only one <mdiv> can be rendered (default: "")
       */
      mdivXPath: {
        type: String,
        attribute: 'mdiv-xpath',
      },
      /**
       * Set the xPath query for selecting <subst> child elements, for example: "./del"; by default the first child is selected
       */
      substXPath: {
        type: String,
        attribute: 'subst-xpath',
      },
      _isPlaying: {
        type: Boolean,
      },
      _svg: {
        type: String,
      },
      ...super.properties,
    };
  }

  constructor() {
    super();
    this._data = null;
    this._svg = null;
    this._pages = 0;
    this._page = 0;
    this._midiPlayer = null;
    this.footer = 'auto';
    this.header = 'auto';
    this.breaks = 'auto';
    this.appXPath = null;
    this.choiceXPath = null;
    this.mdivXPath = null;
    this.substXPath = null;
    this._options = [];
    this._isPlaying = false;
    this._midiPaused = false;
  }

  connectedCallback() {
    super.connectedCallback();

    this.querySelectorAll('pb-option').forEach(option => {
      this._options.push({
        name: option.getAttribute('name'),
        on: option.getAttribute('on'),
        off: option.getAttribute('off'),
        label: option.innerHTML,
      });
    });
  }

  firstUpdated() {
    super.firstUpdated();

    if (this.player) {
      _import('midiPlayer', resolveURL('../lib/web-midi-player/index.js')).then(() => {
        const {
          'web-midi-player': { default: MidiPlayer },
        } = window;
        this._midiPlayer = new MidiPlayer();
      });
    }

    if (!_verovio) {
      createVerovioModule().then(VerovioModule => {
        _verovio = new VerovioToolkit(VerovioModule);

        waitOnce('pb-page-ready', () => {
          this.load();
        });
      });
    } else {
      waitOnce('pb-page-ready', () => {
        this.load();
      });
    }
  }

  update(changedProps) {
    super.update(changedProps);
    if (changedProps.get('url') || changedProps.get('data')) {
      this.load();
    } else if (
      (changedProps.has('appXPath') ||
        changedProps.has('choiceXPath') ||
        changedProps.has('mdivXPath') ||
        changedProps.has('substXPath')) &&
      _verovio
    ) {
      _verovio.setOptions(this._getOptions());
      try {
        _verovio.loadData(this._data);
        this.showPage();
      } catch (error) {
        console.error('<pb-mei> Failed to reload MEI data:', error);
        this._handleError(error);
      }
    }
  }

  load() {
    if (this.data) {
      console.log('<pb-mei> Rendering data');
      this.show(this.data);
    } else if (this.url) {
      const link = this.toAbsoluteURL(this.url);

      fetch(link)
        .then(response => response.text())
        .then(async str => {
          this.show(str);
        });
    }
  }

  show(str) {
    this._data = str;
    _verovio.setOptions(this._getOptions());

    try {
      _verovio.loadData(this._data);
      this._pages = _verovio.getPageCount();
      this._page = 1;
      console.log('<pb-mei> Loaded %d pages', this._pages);
      this.showPage();
    } catch (error) {
      console.error('<pb-mei> Failed to load MEI data:', error);
      this._handleError(error);
    }
  }

  showPage() {
    this._svg = _verovio.renderToSVG(this._page, {});
  }

  _handleError(error) {
    // Clear any existing error
    this._clearError();

    // Create error message element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'pb-mei-error';
    errorDiv.style.cssText = `
      padding: 1rem;
      margin: 1rem;
      background-color: #fee;
      border: 1px solid #fcc;
      border-radius: 4px;
      color: #c33;
      font-family: sans-serif;
      font-size: 14px;
    `;

    let errorMessage = 'Failed to load MEI data';
    const errorText = error.message || error.toString() || '';

    if (
      errorText.includes('function or function signature mismatch') ||
      errorText.includes('null function')
    ) {
      errorMessage = 'Invalid MEI data format';
    } else if (errorText.includes('parse') || errorText.includes('XML')) {
      errorMessage = 'Invalid XML/MEI syntax';
    } else if (errorText.includes('WASM') || errorText.includes('module')) {
      errorMessage = 'MEI rendering engine error';
    }

    errorDiv.textContent = errorMessage;

    // Insert error message into the component
    if (this.shadowRoot) {
      const output = this.shadowRoot.querySelector('#output');
      if (output) {
        output.innerHTML = '';
        output.appendChild(errorDiv);
      }
    }

    // Emit error event
    this.dispatchEvent(
      new CustomEvent('pb-mei-error', {
        detail: {
          error: error.message || 'Unknown error',
          data: this._data,
        },
      }),
    );
  }

  _clearError() {
    if (this.shadowRoot) {
      const output = this.shadowRoot.querySelector('#output');
      if (output) {
        const existingError = output.querySelector('.pb-mei-error');
        if (existingError) {
          existingError.remove();
        }
      }
    }
  }

  async play() {
    if (!this.player || !this._midiPlayer) {
      return;
    }

    this._isPlaying = !this._isPlaying;
    if (!this._isPlaying) {
      this._midiPlayer.stop();
      this._midiPaused = false;
      this.requestUpdate('_isPlaying');
      return;
    }

    if (this._midiPaused) {
      this._midiPaused = false;
      this._midiPlayer.resume();
      this.requestUpdate('_isPlaying');
      return;
    }

    try {
      _verovio.loadData(this._data);
      const mdata = _verovio.renderToMIDI();
      const raw = window.atob(mdata);
      const rawLength = raw.length;
      const array = new Uint8Array(new ArrayBuffer(rawLength));

      for (let i = 0; i < rawLength; i += 1) {
        array[i] = raw.charCodeAt(i);
      }
      this._midiPlayer.play({ arrayBuffer: array });
      this.requestUpdate('_isPlaying');
    } catch (error) {
      console.error('<pb-mei> Failed to play MIDI:', error);
      this._isPlaying = false;
      this.requestUpdate('_isPlaying');
      this._handleError(error);
    }
  }

  pause() {
    if (!this.player || !this._midiPlayer || !this._isPlaying) {
      return;
    }

    this._midiPaused = this._midiPlayer.pause();
    this._isPlaying = false;
    this.requestUpdate('_isPlaying');
  }

  render() {
    return html`
      <div id="toolbar" part="toolbar">
        <div class="${this._pages === 1 ? 'hidden' : ''}">
          <button
            id="pageLeft"
            class="pb-button pb-button--icon"
            type="button"
            aria-label="Previous page"
            title="Previous page"
            @click="${this._previousPage}"
            ?disabled="${this._page === 1}"
          >
            ${this._renderChevron('left')}
          </button>
          <button
            id="pageRight"
            class="pb-button pb-button--icon"
            type="button"
            aria-label="Next page"
            title="Next page"
            @click="${this._nextPage}"
            ?disabled="${this._page === this._pages}"
          >
            ${this._renderChevron('right')}
          </button>
        </div>
        ${this._renderPlayer()}
        <div>${this._renderOptions()}</div>
      </div>
      ${this._svg
        ? html`<div id="output" part="music">${unsafeHTML(this._svg)}</div>`
        : html`<div id="output" part="music">${translate('dialogs.loading')}</div>`}
    `;
  }

  _renderPlayer() {
    if (this.player) {
      return html`
        <div id="player">
          <button
            id="play"
            class="pb-button pb-button--icon ${this._isPlaying ? 'is-active' : ''}"
            type="button"
            aria-label="${this._isPlaying ? 'Stop playback' : 'Start playback'}"
            aria-pressed="${this._isPlaying ? 'true' : 'false'}"
            title="${this._isPlaying ? 'Stop playback' : 'Start playback'}"
            @click="${this.play}"
          >
            ${this._isPlaying ? this._renderStopIcon() : this._renderPlayIcon()}
          </button>
          <button
            class="pb-button pb-button--icon"
            type="button"
            aria-label="Pause playback"
            title="Pause playback"
            @click="${this.pause}"
          >
            ${this._renderPauseIcon()}
          </button>
        </div>
      `;
    }
    return null;
  }

  _renderOptions() {
    return this._options.map(
      option =>
        html`<label class="option-toggle">
          <input
            type="checkbox"
            class="option-toggle__control"
            @change="${ev => this._setOption(option, ev.target.checked)}"
            .checked=${Boolean(this[option.name])}
          />
          <span class="option-toggle__label">${option.label}</span>
        </label>`,
    );
  }

  _renderChevron(direction) {
    const path =
      direction === 'left'
        ? 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'
        : 'M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z';
    return html`<svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="${path}"></path>
    </svg>`;
  }

  _renderPlayIcon() {
    return html`<svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M8 5v14l11-7z"></path>
    </svg>`;
  }

  _renderStopIcon() {
    return html`<svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6 6h12v12H6z"></path>
    </svg>`;
  }

  _renderPauseIcon() {
    return html`<svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6 19h4V5H6zm8-14v14h4V5h-4z"></path>
    </svg>`;
  }

  _setOption(option, checked) {
    let value;
    if (checked) {
      value = option.on && option.on.length > 0 ? option.on : null;
    } else {
      value = option.off && option.off.length > 0 ? option.off : null;
    }
    this[option.name] = value;
  }

  _nextPage(ev) {
    ev.preventDefault();
    if (this._page < this._pages) {
      this._page += 1;
      this.showPage();
    }
  }

  _previousPage(ev) {
    ev.preventDefault();
    if (this._page > 1) {
      this._page -= 1;
      this.showPage();
    }
  }

  _getOptions() {
    const options = {
      // svg content should scale with the width of the component
      svgViewBox: true,
      adjustPageHeight: true,
      footer: this.footer,
      header: this.header,
      breaks: this.breaks,
      appXPathQuery: [this.appXPath],
      substXPathQuery: [this.substXPath],
      choiceXPathQuery: [this.choiceXPath],
    };
    if (this.mdivXPath) {
      options.mdivXPathQuery = this.mdivXPath;
    }
    return options;
  }

  static get styles() {
    return css`
      :host {
        display: grid;
        grid-template-rows: auto 1fr;
        min-width: var(--pb-mei-min-width, auto);
      }

      #toolbar {
        display: flex;
        align-items: center;
      }

      #toolbar div {
        margin-right: 1rem;
      }

      #toolbar div:last-child {
        margin-right: 0;
      }

      #toolbar button.pb-button--icon {
        margin-right: 0.5rem;
      }

      #toolbar button.pb-button--icon:last-child {
        margin-right: 0;
      }

      #output {
        width: 100%;
        overflow: auto;
      }

      .hidden {
        display: none;
      }

      #player {
        display: inline-flex;
        gap: 0.5rem;
        align-items: center;
      }

      #player .pb-button.is-active {
        background-color: var(--pb-primary-color);
        color: var(--pb-on-primary-color);
      }

      .option-toggle {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        margin-right: 0.75rem;
        font-size: 0.95em;
      }

      .option-toggle:last-child {
        margin-right: 0;
      }

      .option-toggle__control {
        accent-color: var(--pb-primary-color, #1976d2);
      }
    `;
  }
}
customElements.define('pb-mei', PbMei);
