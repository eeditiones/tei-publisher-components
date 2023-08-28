import { LitElement, html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import "@lrnwebcomponents/es-global-bridge";
import createVerovioModule from 'verovio/dist/verovio-module.mjs';
import { VerovioToolkit } from 'verovio/dist/verovio.mjs';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import { resolveURL } from './utils.js';
import '@polymer/paper-icon-button';
import '@polymer/paper-checkbox';
import '@polymer/iron-icons';
import '@polymer/iron-icons/av-icons';

let _verovio = null;

/** Import external script dynamically */
function _import(name, location) {
    window.ESGlobalBridge.requestAvailability();
    return new Promise(resolve => {
        window.ESGlobalBridge.instance.load(name, location);
        window.addEventListener(
            `es-bridge-${name}-loaded`,
            () => resolve(),
            { once: true }
        );
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
                type: String
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
    }

    connectedCallback() {
        super.connectedCallback();

        this.querySelectorAll('pb-option').forEach((option) => {
            this._options.push({
                name: option.getAttribute('name'),
                on: option.getAttribute('on'),
                off: option.getAttribute('off'),
                label: option.innerHTML
            })
        });
    }

    firstUpdated() {
        super.firstUpdated();

        if (this.player) {
            _import("midiPlayer", resolveURL('../lib/web-midi-player/index.js'))
                .then(() => {
                    const { 'web-midi-player': { default: MidiPlayer } } = window;
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
          _verovio.loadData(this._data);
          this.showPage();
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
        _verovio.loadData(this._data);
        this._pages = _verovio.getPageCount();
        this._page = 1;
        console.log('<pb-mei> Loaded %d pages', this._pages);
        this.showPage();
    }

    showPage() {
        this._svg = _verovio.renderToSVG(this._page, {});
    }

    async play() {
        const button = this.shadowRoot.getElementById('play');
        if (!button.active) {
            this._midiPlayer.stop();
            button.icon = 'av:play-arrow';
        } else {
            button.icon = 'av:stop';
            if (this._midiPaused) {
                this._midiPaused = false;
                this._midiPlayer.resume();
            } else {
                _verovio.loadData(this._data);
                const mdata = _verovio.renderToMIDI();
                const raw = window.atob(mdata);
                const rawLength = raw.length;
                const array = new Uint8Array(new ArrayBuffer(rawLength));

                for (let i = 0; i < rawLength; i += 1) {
                    array[i] = raw.charCodeAt(i);
                }
                this._midiPlayer.play({ arrayBuffer: array });
            }
        }
    }

    pause() {
        const button = this.shadowRoot.getElementById('play');
        if (button.active) {
            this._midiPaused = this._midiPlayer.pause();
            if (this._midiPaused) {
                button.icon = 'av:play-arrow';
                button.active = false;
            }
        }
    }

    render() {
        return html`
            <div id="toolbar" part="toolbar">
                <div class="${this._pages === 1 ? 'hidden' : ''}">
                    <paper-icon-button id="pageLeft" icon="icons:chevron-left" @click="${this._previousPage}"
                        ?disabled="${this._page === 1}"></paper-icon-button>
                    <paper-icon-button id="pageRight" icon="icons:chevron-right" @click="${this._nextPage}"
                        ?disabled="${this._page === this._pages}"></paper-icon-button>
                </div>
                ${ this._renderPlayer() }
                <div>${ this._renderOptions() }</div>
            </div>
            ${ this._svg ? 
                html`<div id="output" part="music">${unsafeHTML(this._svg)}</div>` :
                html`<div id="output" part="music">${translate('dialogs.loading')}</div>`
            }
        `;
    }

    _renderPlayer() {
        if (this.player) {
            return html`
                <div id="player">
                    <paper-icon-button id="play" icon="av:play-arrow" toggles @click="${this.play}"></paper-icon-button>
                    <paper-icon-button icon="av:pause" @click="${this.pause}"></paper-icon-button>
                </div>
            `;
        }
        return null;
    }

    _renderOptions() {
        return this._options.map(option =>
            html`<paper-checkbox @change="${(ev) => this._setOption(option, ev.target.checked)}">${option.label}</paper-checkbox>`
        );
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
          choiceXPathQuery: [this.choiceXPath]
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

            #output {
                width: 100%;
                overflow: auto;
            }

            .hidden {
                display: none;
            }
        `;
    }
}
customElements.define('pb-mei', PbMei);