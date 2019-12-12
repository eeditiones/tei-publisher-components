import { LitElement, html, css } from 'lit-element';
import osd from "../assets/openseadragon.esm.js";
import { pbMixin } from './pb-mixin.js';

/**
 *
 *
 * @customElement pb-facsimile
 * @polymer
 * @demo demo/pb-facsimile.html
 * @appliesMixin pbMixin
 */
export class PbFacsimile extends pbMixin(LitElement) {
    static get properties() {
        return {
            // Image source
            src: {
                type: String
            },
            /**
             *  Set to false to prevent the appearance of the default navigation controls.
             * Note that if set to false, the customs buttons set by the options
             * zoomInButton, zoomOutButton etc, are rendered inactive.
             */
            showNavigationControl: {
                type: Boolean,
                attribute: 'show-navigation-control'
            },
            // Set to true to make the navigator minimap appear.
            showNavigator: {
                type: Boolean,
                attribute: 'show-navigator'
            },
            /** If true then the 'Go home' button is displayed to go back to the original zoom and pan. */
            showHomeControl: {
                type: Boolean
            },
            /** If true then the 'Toggle full page' button is displayed to switch between full page and normal mode. */
            showFullPageControl: {
                type: Boolean
            },
            /**
             * Default zoom between: set to 0 to adjust to viewer size.
             */
            defaultZoomLevel: {
                type: Number,
                attribute: 'default-zoom-level'
            },
            /**
             * If true then the rotate left/right controls will be displayed
             * as part of the standard controls. This is also subject to the
             * browser support for rotate (e.g. viewer.drawer.canRotate()).
             */
            showRotationControl: {
                type: Boolean
            },
            // Constrain during pan
            constrainDuringPan: {
                type: Boolean
            },
            /**
             *  The percentage ( as a number from 0 to 1 ) of the source image
             * which must be kept within the viewport.
             * If the image is dragged beyond that limit, it will 'bounce'
             * back until the minimum visibility ratio is achieved.
             * Setting this to 0 and wrapHorizontal ( or wrapVertical )
             * to true will provide the effect of an infinitely scrolling viewport.
             */
            visibilityRatio: {
                type: Number
            },
            /**
             * Type of the source of the image to display: either 'iiif' or 'image'
             * (for simple image links not served via IIIF).
             */
            type: {
                type: String
            },
            baseUri: {
                type: String,
                attribute: 'base-uri'
            },
            /**
             * Path pointing to the location of openseadragon user interface images.
             */
            prefixUrl: {
                type: String,
                attribute: 'prefix-url'
            },
            /**
             * Array of facsimiles
             *
             */
            facsimiles: {
                type: Array
            },
            ...super.properties
        };
    }

    constructor() {
        super();
        this.facsimiles = [];
        this.baseUri = '';
        this.type = 'iiif';
        this.visibilityRatio = 1;
        this.defaultZoomLevel = 0;
        this.showHomeControl = true;
        this.showNavigationControl = true;
        this.src = '';
        this.prefixUrl = '../assets/openseadragon/';
    }

    connectedCallback() {
        super.connectedCallback();
        this.subscribeTo('pb-start-update', this._clearAll.bind(this));
        this.subscribeTo('pb-update', this._fragmentUpdateListener.bind(this));
        this.subscribeTo('pb-show-annotation', this._showAnnotationListener.bind(this));
    }

    firstUpdated() {
        this._initOpenSeadragon();

        this.signalReady();
    }

    render() {
        return html`
            <!-- Openseadragon -->
            <div id="viewer"></div>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
                position: relative;
                background: transparent;
                height: var(--pb-facsimile-height, 500px);
            }

            #viewer {
                position: relative;
                height: 100%;
                width: 100%;
            }
        `;
    }

    // Init openseadragon
    _initOpenSeadragon() {
        this.viewer = osd({
            element: this.shadowRoot.getElementById('viewer'),
            prefixUrl: this.prefixUrl + (this.prefixUrl.endsWith("/") ? "" : "/"),
            preserveViewport: true,
            sequenceMode: true,
            showZoomControl: true,
            showHomeControl: this.showHomeControl,
            showFullPageControl: this.showFullPageControl,
            showNavigator: this.showNavigator,
            showNavigationControl: this.showNavigationControl,
            showRotationControl: this.showRotationControl,
            autoHideControls: false,
            visibilityRatio: 1,
            minZoomLevel: 1,
            defaultZoomLevel: this.defaultZoomLevel,
            constrainDuringPan: true
        });


        this.init = true;

        this.viewer.addHandler('open', this.resetZoom.bind(this));
        this._facsimileObserver();
    }

    _facsimileObserver() {
        if (this.facsimiles.length === 0) { return this.viewer.close() }
        const uris = this.facsimiles.map(fac => {
            if (this.type === 'iiif') {
                return `${this.baseUri}${fac}/info.json`;
            } else {
                return {
                    tileSource: {
                        type: 'image',
                        url: `${this.baseUri}${fac}`,
                        buildPyramid: false
                    }
                }
            }
        });

        this.viewer.open(uris)
        this.viewer.goToPage(0)
    }

    _clearAll() {
        this.resetZoom()
        this.viewer.clearOverlays()
        this.facsimiles = []
    }

    _fragmentUpdateListener(event) {
        this.facsimiles = this._getFacsimilesFromData(event.detail.root)
        this._facsimileObserver();
    }

    _getFacsimilesFromData(elem) {
        const facsimiles = [];
        elem.querySelectorAll('pb-facs-link').forEach(cb => {
            if (cb.facs) {
                facsimiles.push(cb.facs);
            }
        });
        console.log('<pb-facsimile> _getFacsimilesFromData', facsimiles);
        return facsimiles;
    }

    _showAnnotationListener(event) {
        const overlayId = 'runtime-overlay'

        // remove old overlay
        this.viewer.removeOverlay(this.overlay);

        // check event data for completeness
        if (!event.detail.file || event.detail.file === 0) {
            return console.error('file missing', event.detail)
        }

        if (
            event.detail.coordinates &&
            (!event.detail.coordinates[0] ||
                event.detail.coordinates.length !== 4)
        ) {
            return console.error('coords incomplete or missing', event.detail)
        }

        // find page to show
        const page = this._pageIndexByUrl(event.detail.file)

        if (page < 0) {
            return console.error('page not found', event.detail)
        }

        if (this.viewer.currentPage() !== page) {
            this.viewer.goToPage(page);
        }

        if (event.detail.coordinates) {
            // deconstruct given coordinates into variables
            const [x1, y1, w, h] = event.detail.coordinates;

            const currentRect = this.viewer.viewport.viewportToImageRectangle(
                this.viewer.viewport.getBounds(true));

            // scroll into view?
            if (!currentRect.containsPoint(new OpenSeadragon.Point(x1, y1))) {
                this.viewer.viewport.fitBoundsWithConstraints(
                    this.viewer.viewport.imageToViewportRectangle(x1, y1, currentRect.width, currentRect.height));
            }

            // create new overlay
            const overlay = this.overlay = document.createElement('div');
            overlay.id = overlayId;
            overlay.style.border = this.getBorderStyle();

            // place marker
            const marker = this.viewer.viewport.imageToViewportRectangle(x1, y1, w, h);

            this.viewer.addOverlay({
                element: overlay,
                location: marker
            });
        }
    }

    _pageIndexByUrl(file) {
        return this.facsimiles.indexOf(file);
    }

    // returns the border styling for facsimile viewer
    getBorderStyle() {
        return '4px solid rgba(128, 0, 0, 0.5)'
    }

    // reset zoom
    resetZoom() {
        this.viewer.viewport.goHome();
    }


}
customElements.define('pb-facsimile', PbFacsimile);