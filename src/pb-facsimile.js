import { LitElement, html, css } from 'lit-element';
import "@lrnwebcomponents/es-global-bridge";
import { pbMixin } from './pb-mixin.js';
import { resolveURL } from './utils.js';

/**
 * View zoomable images using a IIIF server.
 *
 * @fires pb-start-update - When received, resets the facsimile viewer
 * @fires pb-load-facsimile - When received, adds an image to the current image sequence. Emitted by
 * `pb-facs-link`. The event detail should contain an object with the properties `url`, `order` and `element`,
 * where `url` is the relative or absolute URL to the image, `order` is an integer specifying the position at which
 * the image should be inserted in the list, and `element` points to the `pb-facs-link` element triggering the event.
 * @fires pb-show-annotation - When received, sets up the viewer to select a particular image and highlight coordinates
 * @fires pb-facsimile-status - Indicates the status of loading an image into the viewer. The status is indicated
 * by the `status` property in event.detail as follows: `loading` - image was requested; `loaded` - image is displayed;
 * `fail` - image could not be loaded.
 *
 * @cssprop --pb-facsimile-height=auto - Max. height of the image viewer
 * @cssprop --pb-facsimile-border - Style for the annotation highlight border
 * @csspart image - exposes the inner div hosting the image viewer
 *
 * @slot before - use for content which should be shown above the facsimile viewer
 * @slot after - use for content which should be shown below the facsimile viewer
 */
export class PbFacsimile extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            /**
             * Set to false to prevent the appearance of the default navigation controls.
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

            /** If true then the 'previous" and 'next' button is displayed switch between images. */
            showSequenceMode: {
                type: Boolean,
                attribute: 'show-sequence-control'
            },

            /** If true then the 'Go home' button is displayed to go back to the original zoom and pan. */
            showHomeControl: {
                type: Boolean,
                attribute: 'show-home-control'
            },
            /** If true then the 'Toggle full page' button is displayed to switch between full page and normal mode. */
            showFullPageControl: {
                type: Boolean,
                attribute: 'show-full-page-control'
            },
            /**
             * if true shows a 'download' button
             */
            showDownloadButton:{
              type: Boolean,
              attribute: 'show-download-control'
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
                type: Boolean,
                attribute: 'show-rotation-control'
            },
            // Constrain during pan
            constrainDuringPan: {
                type: Boolean,
                attribute: 'contrain-during-pan'
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
                type: Number,
                attribute: 'visibility-ratio'
            },
            /**
             * If set, thumbnails of all images are shown in a reference strip at the
             * bottom of the viewer.
             */
            referenceStrip: {
                type: Boolean,
                attribute: 'reference-strip'
            },
            /**
             * Size ratio for the reference strip thumbnails. 0.2 by default.
             */
            referenceStripSizeRatio: {
                type: Number,
                attribute: 'reference-strip-size-ratio'
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
            /**
             * Will be true if images were loaded for display, false if there are no images
             * to show.
             */
            loaded: {
                type: Boolean,
                reflect: true
            },
            /**
             * CORS (Cross-Origin Resource Sharing) policy - wraps the OSD Viewer option -
             * only sensible values are 'anonymous' (default) or 'use-credentials'.
             */
            crossOriginPolicy:{
                type: String,
                attribute: 'cors'
            }
        };
    }

    constructor() {
        super();
        this._facsimiles = [];
        this.baseUri = '';
        this.crossOriginPolicy = 'anonymous';
        this.type = 'iiif';
        this.visibilityRatio = 1;
        this.defaultZoomLevel = 0;
        this.sequenceMode = false;
        this.showHomeControl = false;
        this.showNavigator = false;
        this.showNavigationControl = false;
        this.showFullPageControl = false;
        this.showRotationControl = false;
        this.showDownloadButton = false;
        this.constrainDuringPan = false;
        this.referenceStrip = false;
        this.referenceStripSizeRatio = 0.2;
        this.prefixUrl = '../images/openseadragon/';
        this.loaded = false;
    }

    set facsimiles(facs) {
        this._facsimiles = facs || [];
        this.loaded = this._facsimiles.length > 0;
        this.emitTo('pb-facsimile-status', { status: 'loading' });
    }

    connectedCallback() {
        super.connectedCallback();
        this.subscribeTo('pb-start-update', this._clearAll.bind(this));
        this.subscribeTo('pb-load-facsimile', (e) => {
            const { element, order } = e.detail
            const itemOrder = this._facsimiles.map(item => item.getOrder ? item.getOrder() : Number.POSITIVE_INFINITY )
            const insertAt = itemOrder.reduce((result, next, index) => {
                if (order < next) return result;
                if (order === next) return index;
                return index + 1;
            }, 0)

            this._facsimiles.splice(insertAt, 0, element)
            this.loaded = this._facsimiles.length > 0;

            this._facsimileObserver()
        });
        this.subscribeTo('pb-show-annotation', this._showAnnotationListener.bind(this));
    }

    firstUpdated() {
        try{
            window.ESGlobalBridge.requestAvailability();
            const path = resolveURL('../lib/openseadragon.min.js');
            window.ESGlobalBridge.instance.load("openseadragon", path);
            window.addEventListener(
                "es-bridge-openseadragon-loaded",
                this._initOpenSeadragon.bind(this),
                { once: true }
            );
        } catch (error){
            console.error(error.message);
        }
    }

    render() {
        return html`
            <slot name="before"></slot>
            <!-- Openseadragon -->

            <div id="viewer" part="image"></div>
            <slot name="after"></slot>
            ${this.showDownloadButton ?
                html`<a id="downloadBtn" title="Download">&#8676;</a>`:''
            }

        `;
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                flex-direction: column;
                position: relative;
                background: transparent;
            }

            #runtime-overlay {
                border: var(--pb-facsimile-border, 4px solid rgba(0, 0, 128, 0.5));
            }

            #viewer {
                flex: 1;
                position: relative;
                max-height: var(--pb-facsimile-height, auto);
                width: 100%;
            }
            #downloadBtn{
                position: absolute;
                z-index: 100;
                bottom:0.25rem;
                width:1.35rem;
                height:1.35rem;
                transform:rotate(-90deg);
                cursor: pointer;
                border: thin solid #D7DDE8;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius:0.75rem;
                background-image:linear-gradient(to left, #fafafa 0%, #D7DDE8  51%, #bbbbbb  100%);
                font-size:1.2rem;
                box-shadow: -2px 1px 5px 0px rgba(0,0,0,0.75);
            }
            #downloadBtn:hover{
                background-image:radial-gradient( white, #efefef);
            }
        `;
    }

    // Init openseadragon
    _initOpenSeadragon() {
        const prefixUrl = resolveURL(this.prefixUrl + (this.prefixUrl.endsWith("/") ? "" : "/"));
        const options = {
            element: this.shadowRoot.getElementById('viewer'),
            prefixUrl,
            preserveViewport: true,
            showZoomControl: true,
            sequenceMode: this.showSequenceMode,
            showHomeControl: this.showHomeControl,
            showFullPageControl: this.showFullPageControl,
            showNavigator: this.showNavigator,
            showNavigationControl: this.showNavigationControl,
            showRotationControl: this.showRotationControl,
            autoHideControls: false,
            visibilityRatio: 1,
            minZoomLevel: 1,
            defaultZoomLevel: this.defaultZoomLevel,
            constrainDuringPan: true,
            crossOriginPolicy: this.crossOriginPolicy
        };

        if (this.referenceStrip) {
            options.showReferenceStrip = true;
            options.referenceStripSizeRatio = this.referenceStripSizeRatio;
        }
        this.viewer = OpenSeadragon(options);

        this.viewer.addHandler('open', () => {
            this.resetZoom();
            this.emitTo('pb-facsimile-status', { status: 'loaded', facsimiles: this._facsimiles });
        });
        this.viewer.addHandler('open-failed', (ev) => {
            console.error('<pb-facsimile> open failed: %s', ev.message);
            this.loaded = false;
            this.emitTo('pb-facsimile-status', { status: 'fail' });
        });

        const download = this.shadowRoot.querySelector('#downloadBtn');
        if(this.showDownloadButton){
            download.addEventListener('click', (ev) => {
                ev.preventDefault();
                const currentImage = this.viewer.drawer.canvas.toDataURL("image/png");
                const downloadLink = document.createElement('a');
                downloadLink.href = currentImage;
                downloadLink.download = 'download';
                downloadLink.click();
            });
        }

        /*
        handling of full-screen view requires to hide/unhide the content of body to allow full screen viewer
        to full-page functionality. Standard OSD completely deletes all body children disconnecting all event-handlers
        that have been there. This solution just uses style.display to hide/show. Former display value of pb-page
        will be preserved.
         */
        this.ownerPage = document.querySelector('pb-page');
        if(this.ownerPage){
            this.pbPageDisplay = window.getComputedStyle(this.ownerPage).getPropertyValue('display');
            this.viewer.addHandler('full-screen', (ev) => {
                if(ev.fullScreen){
                    this.ownerPage.style.display = 'none';
                }else{
                    this.viewer.clearOverlays();
                    this.emitTo('pb-refresh');
                    this.ownerPage.style.display = this.pbPageDisplay;
                }
            });
        }
        this._facsimileObserver();

        this.signalReady();
    }

    _facsimileObserver() {
        if (!this.viewer) {
            return;
        }
        if (this._facsimiles.length === 0) {
            return this.viewer.close()
        }
        const uris = this._facsimiles.map(facsLink => {
            const url = this.baseUri + (facsLink.getImage ? facsLink.getImage() : facsLink)
            if (this.type === 'iiif') {
                return `${url}/info.json`;
            }
            return {
                tileSource: {
                    type: 'image',
                    url,
                    buildPyramid: false
                }
            }
        });

        this.viewer.open(uris)
        this.viewer.goToPage(0)
    }

    _clearAll() {
        if (!this.viewer) {
            return;
        }
        this.resetZoom();
        this.viewer.clearOverlays();
        this.facsimiles = [];
    }

    _showAnnotationListener(event) {
        if (!this.viewer) {
            return;
        }
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
        const page = event.detail.element ? this._pageByElement(event.detail.element) : this._pageIndexByUrl(event.detail.file);

        if (page < 0) {
            return console.error('page not found', event.detail)
        }

        if (this.viewer.currentPage() !== page) {
            this.viewer.goToPage(page);
        }

        if (event.detail.coordinates) {
            // deconstruct given coordinates into variables
            const [x1, y1, w, h] = event.detail.coordinates;
            const tiledImage = this.viewer.world.getItemAt(0);
            const currentRect = tiledImage.viewportToImageRectangle(
                tiledImage.getBounds(true));

            // scroll into view?
            if (!currentRect.containsPoint(new OpenSeadragon.Point(x1, y1))) {
                this.viewer.viewport.fitBoundsWithConstraints(
                    tiledImage.imageToViewportRectangle(x1, y1, currentRect.width, currentRect.height));
            }

            // create new overlay
            const overlay = document.createElement('div');
            this.overlay = overlay
            overlay.id = overlayId;

            // place marker
            const marker = tiledImage.imageToViewportRectangle(x1, y1, w, h);

            this.viewer.addOverlay({
                element: overlay,
                location: marker
            });
        }
    }

    _pageByElement(element) {
        return this._facsimiles.indexOf(element);
    }

    _pageIndexByUrl(file) {
        return this._facsimiles.findIndex(element => element.getImage() === file);
    }

    // reset zoom
    resetZoom() {
        if (!this.viewer) {
            return;
        }
        this.viewer.viewport.goHome();
    }


}
if (!customElements.get('pb-facsimile')) {
    customElements.define('pb-facsimile', PbFacsimile);
}
