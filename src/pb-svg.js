import { LitElement, html, css } from 'lit-element';
import "@lrnwebcomponents/es-global-bridge";
import { pbMixin } from './pb-mixin.js';


/**
 * Show an SVG image with zoom and pan functionality. The image URL may
 * either be specified via the `url` property or an `pb-show-annotation` event
 * sent to this component.
 *
 * @fires pb-show-annotation - When received, loads the image from the URL passed from the event
 * @cssprop --pb-svg-height - Height of the SVG element
 * @cssprop --pb-svg-width - Width of the SVG element
 */
export class PbSvg extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            url: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this._pan = null;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    firstUpdated() {
        super.firstUpdated();
        window.ESGlobalBridge.requestAvailability();
        window.ESGlobalBridge.instance.load("svg-pan-zoom", `https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.5.0/dist/svg-pan-zoom.min.js`);
        window.addEventListener(
            "es-bridge-svg-pan-zoom-loaded",
            this._onSvgPanZoomLoaded.bind(this),
            { once: true }
        );

        this.container = this.shadowRoot.getElementById('image');

        this.subscribeTo('pb-show-annotation', (ev) => {
            console.log('<pb-svg> loading %s', ev.detail.file);
            this.url = ev.detail.file;
            this.load();
        });
    }

    _onSvgPanZoomLoaded() {
        this.load();
    }

    load() {
        if (this._pan) {
            this._pan.destroy();
            this._pan = null;
            this.container.innerHTML = '';
        }
        fetch(this.url)
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                const doc = new DOMParser().parseFromString(data, "image/svg+xml");
                const svg = doc.documentElement;
                this.container.appendChild(svg);
                this._pan =
                    window.svgPanZoom(svg, {
                        controlIconsEnabled: true,
                        fit: true,
                        center: true
                    });
            });
    }

    render() {
        return html`<div id="image"></div>`;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }

            #image svg {
                height: var(--pb-svg-height, 100%);
                width: var(--pb-svg-width, 100%);
            }
        `;
    }
}
customElements.define('pb-svg', PbSvg);