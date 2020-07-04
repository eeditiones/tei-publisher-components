import { LitElement, html, css } from 'lit-element';
import "@lrnwebcomponents/es-global-bridge";
import { pbMixin } from './pb-mixin.js';
import '@polymer/paper-icon-button';
import '@polymer/iron-icons';
import '@polymer/iron-icons/av-icons';

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
 * @prop {"auto" | "encoded" | "none"} footer - Should a footer be shown?
 */
export class PbMei extends pbMixin(LitElement) {

    static get properties() {
        return {
            /**
             * URL of the MEI file to load
             */
            url: {
                type: String
            },
            /**
             * Set to enable MIDI player
             */
            player: {
                type: Boolean
            },
            footer: {
                type: String
            },
            _pages: {
                type: Number
            },
            ...super.properties
        };
    }

    constructor() {
        super();
        this._data = null;
        this._pages = 0;
        this._page = 0;
        this._midiPlayer = null;
        this._verovio = null;
        this.footer = 'auto';
    }

    firstUpdated() {
        super.firstUpdated();

        if (this.player) {
            _import("midiPlayer", 'https://cdn.jsdelivr.net/npm/web-midi-player@latest/index.js')
                .then(() => {
                    const { 'web-midi-player': { default: MidiPlayer } } = window;
                    this._midiPlayer = new MidiPlayer();
                });
        }

        _import("verovio", 'https://www.verovio.org/javascript/latest/verovio-toolkit.js')
            .then(() => {
                this._verovio = new window.verovio.toolkit();

                PbMei.waitOnce('pb-page-ready', () => {
                    const base = this.getEndpoint() === '.' ? window.location.href : `${this.getEndpoint()}/`;
                    this.url = new URL(this.url, base);

                    fetch(this.url)
                        .then(response => response.text())
                        .then(async data => {
                            this._data = data;
                            this._verovio.loadData(this._data);
                            this._pages = this._verovio.getPageCount();
                            this._page = 1;
                            console.log('<pb-mei> Loaded %d pages', this._pages);
                            this.showPage();
                        });
                });
            });
    }

    showPage() {
        this._verovio.setOptions(this._getOptions());
        const svg = this._verovio.renderToSVG(this._page, {});
        this.shadowRoot.getElementById('output').innerHTML = svg;

        this.shadowRoot.getElementById('pageRight').disabled = this._page === this._pages;
        this.shadowRoot.getElementById('pageLeft').disabled = this._page === 1;
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
                this._verovio.loadData(this._data);
                const mdata = this._verovio.renderToMIDI();
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
            <div id="toolbar">
                <paper-icon-button id="pageLeft" icon="icons:chevron-left" @click="${this._previousPage}"
                    class="${this._pages === 1 ? 'hidden' : ''}"></paper-icon-button>
                <paper-icon-button id="pageRight" icon="icons:chevron-right" @click="${this._nextPage}"
                    class="${this._pages === 1 ? 'hidden' : ''}"></paper-icon-button>
                ${ this._renderPlayer() }
            </div>
            <div id="output">Loading ...</div>
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
            adjustPageWidth: true,
            footer: this.footer || 'none'
        };
        return options;
    }

    static get styles() {
        return css`
            :host {
                display: grid;
                grid-template-rows: auto 1fr;
            }

            #toolbar {
                display: flex;
            }

            #output {
                width: 100%;
                overflow: auto;
            }

            #player {
                margin-left: 30px;
            }

            .hidden ~ #player {
                margin-left: 0;
            }
            
            .hidden {
                display: none;
            }
        `;
    }
}
customElements.define('pb-mei', PbMei);