import { LitElement, html, css } from 'lit-element';
import "@lrnwebcomponents/es-global-bridge";
import { pbMixin } from './pb-mixin.js';
import { resolveURL } from './utils.js';
import './pb-map-layer.js';

/**
 * A wrapper component for [leaflet](https://leafletjs.com/) displaying a map.
 *
 * @slot - may contain a series of `pb-map-layer` configurations
 * @fires pb-leaflet-marker-click - Fires event to be processed by the map upon click
 * @fires pb-update-map - When received, redraws the map to fit markers passed in with the event.
 * Event details should include an array of locations, see `pb-geolocation` event below.
 * @fires pb-update - When received, redraws the map to show markers for all pb-geolocation elements found in the content of the pb-view
 * @fires pb-geolocation - When received, focuses the map on the geocoordinates passed in with the event.
 * The event details should include an object:
 * ```
 * {
 *   coordinates: {
 *         latitude: Number,
 *         longitude: Number
 *   },
 *   label: string - the label to show on mouseover,
 *   zoom: Number - fixed zoom level to zoom to,
 *   fitBounds: Boolean - if true, recompute current zoom level to show all markers
 * }
 * ```
 */
export class PbLeafletMap extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            latitude: {
                type: Number
            },
            longitude: {
                type: Number
            },
            zoom: {
                type: Number
            },
            crs: {
                type: String
            },
            /**
             * If set, the map will automatically zoom so it can fit all the markers
             */
            fitMarkers: {
                type: Boolean,
                attribute: 'fit-markers'
            },
            /**
             * If set, combine markers into clusters if they are located too close together
             * to display as single markers
             */
            cluster: {
                type: Boolean
            },
            /**
             * Limits up to which zoom level markers are arranged into clusters.
             * Using a higher zoom level here will result in more markers to be shown.
             * 
             * Requires `cluster` option to be enabled.
             */
            disableClusteringAt: {
                type: Number,
                attribute: 'disable-clustering-at'
            },
            /**
             * If enabled, the map will not automatically scroll to the coordinates received via `pb-geolocation`
             */
            noScroll: {
                type: Boolean,
                attribute: 'no-scroll'
            },
            accessToken: {
                type: String,
                attribute: 'access-token'
            },
            /**
             * If enabled, the map will remain invisible until an event is received from `pb-geolocation`.
             * In this case the map also offers a close button to hide it again.
             */
            toggle: {
                type: Boolean
            },
            imagesPath: {
                type: String,
                attribute: 'images-path'
            },
            cssPath: {
                type: String,
                attribute: 'css-path'
            },
            _map: {
                type: Object
            }
        };
    }

    constructor() {
        super();
        this.latitude = 51.505;
        this.longitude = -0.09;
        this.zoom = 15;
        this.crs = 'EPSG3857';
        this.accessToken = '';
        this.imagesPath = '../images/leaflet/';
        this.cssPath = '../css/leaflet/';
        this.toggle = false;
        this.noScroll = false;
        this.disabled = true;
        this.cluster = false;
        this.fitMarkers = false;
        this.disableClusteringAt = null;
    }

    connectedCallback() {
        super.connectedCallback();

        this._layers = this.querySelectorAll('pb-map-layer');

        /**
         * Custom event which passes an array of pb-geolocation within event details
         * @param {{ detail: any[]; }} ev
         */
        this.subscribeTo('pb-update-map', (ev) => {
            this._markerLayer.clearLayers();

            /**
             * @param {{ latitude: any; longitude: any; label: any; }} loc
             */
            /**
             * @param {{ latitude: any; longitude: any; label: any; }} loc
             */
            ev.detail.forEach((loc) => {
                const marker = L.marker([loc.latitude, loc.longitude]);
                if (loc.label) {
                    marker.bindTooltip(loc.label);
                }
                marker.addEventListener('click', () => {
                    this.emitTo('pb-leaflet-marker-click', loc);
                });
                marker.bindTooltip(loc.label);
                this._markerLayer.addLayer(marker);
            });
            this._fitBounds();
        });

        /**
         * React to pb-update event triggered by a pb-view
         * 
         * @param {{ detail: { root: { querySelectorAll: (arg0: string) => any[]; }; }; }} ev
         */
        this.subscribeTo('pb-update', (ev) => {
            this._markerLayer.clearLayers();
            const locations = ev.detail.root.querySelectorAll('pb-geolocation');
            /**
             * @param {{ latitude: any; longitude: any; }} loc
             */
            locations.forEach((loc) => {
                const coords = L.latLng(loc.latitude, loc.longitude);
                const marker = L.marker(coords).addTo(this._markerLayer);
                if (loc.label) {
                    marker.bindTooltip(loc.label);
                }
                if (loc.popup) {
                    marker.bindPopup(loc.popup);
                }
                marker.addEventListener('click', () => {
                    this.emitTo('pb-leaflet-marker-click', loc);
                });
            });
            this._fitBounds();
        });

        /**
         * React to events send by pb-geolocation
         * 
         * @param {{ detail: { coordinates: { latitude: number; longitude: number; }, label: string; }; }} ev
         */
        this.subscribeTo('pb-geolocation', (ev) => {
            if (ev.detail.coordinates) {
                this.latitude = ev.detail.coordinates.latitude;
                this.longitude = ev.detail.coordinates.longitude;
                if (!this._hasMarker(this.latitude, this.longitude)) {
                    const marker = L.marker([this.latitude, this.longitude]);
                    marker.addEventListener('click', () => {
                        this.emitTo('pb-leaflet-marker-click', ev.detail.element);
                    });
                    if (ev.detail.label) {
                        marker.bindTooltip(ev.detail.label);
                    }
                    if (ev.detail.popup) {
                        marker.bindPopup(ev.detail.popup);
                    }
                    marker.addTo(this._markerLayer);

                    if (ev.detail.fitBounds) {
                        this._fitBounds();
                    }

                    console.log('<pb-leaflet-map> added marker');
                } else {
                    console.log('<pb-leaflet-map> Marker already added to map');
                }
                if (this.toggle) {
                    this.disabled = false;
                }
                this._locationChanged(this.latitude, this.longitude, ev.detail.zoom);
            }
        });
    }

    firstUpdated() {
        if (!this.toggle) {
            this.disabled = false;
        }
        window.ESGlobalBridge.requestAvailability();
        const leafletPath = resolveURL('../lib/leaflet-src.js');
        const pluginPath = resolveURL('../lib/leaflet.markercluster-src.js');
        window.ESGlobalBridge.instance.load("leaflet", leafletPath)
        .then(() => window.ESGlobalBridge.instance.load("plugin", pluginPath));
        window.addEventListener(
            "es-bridge-plugin-loaded",
            this._initMap.bind(this),
            { once: true }
        );
    }

    render() {
        const cssPath = resolveURL(this.cssPath);
        return html`
            <link rel="Stylesheet" href="${cssPath}/leaflet.css">
            <link rel="Stylesheet" href="${cssPath}/MarkerCluster.Default.css">
            <div id="map" style="height: 100%; width: 100%"></div>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }

            :host([disabled]) {
                visibility: hidden;
            }

            .close {
                border-radius: 4px;
                background-color: #fff;
                color: inherit;
                padding: 8px;
                font-size: 18px;
                font-weight: bold;
                text-decoration: none;
                cursor: pointer;
            }
        `;
    }

    _initMap() {
        if (this._map) {
            return;
        }

        L.Icon.Default.imagePath = resolveURL(this.imagesPath);

        const crs = L.CRS[this.crs] || L.CRS.EPSG3857;
        this._map = L.map(this.shadowRoot.getElementById('map'), {
            zoom: this.zoom,
            center: L.latLng(this.latitude, this.longitude),
            crs
        });
        this._configureLayers();

        if (this.cluster) {
            const options = {};
            if (this.disableClusteringAt) {
                options.disableClusteringAtZoom = this.disableClusteringAt;
            }
            this._markerLayer = L.markerClusterGroup(options);
        } else {
            this._markerLayer = L.layerGroup();
        }
        this._markerLayer.addTo(this._map);

        this.signalReady();

        L.control.scale().addTo(this._map);

        if (this.toggle) {
            let container;
            L.Control.CloseButton = L.Control.extend({
                options: {
                    position: 'topright'
                },
                onAdd: (map) => {
                    container = L.DomUtil.create('div');
                    container.className = 'close';
                    container.innerHTML = 'X';
                    L.DomEvent.on(container, 'click', this._hide.bind(this));
                    return container;
                },
                onRemove: (map) => {
                    L.DomEvent.off(container, 'click', this._hide.bind(this));
                }
            });
            L.control.closeButton = (options) => new L.Control.CloseButton(options);
            L.control.closeButton({ position: 'topright' }).addTo(this._map);
        }
    }

    _configureLayers() {
        if (this._layers.length === 0) {
            // configure a default layer
            L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
                maxZoom: 18,
                zoomOffset: -1,
                tileSize: 512,
                accessToken: this.accessToken
            }).addTo(this._map);
            return;
        }
        const layers = L.control.layers(null, null, { collapsed: false });
        this._layers.forEach(config => {
            let layer;
            switch (config.type) {
                case 'geojson':
                    config.data().then((data) => {
                        layer = L.geoJSON([data]);
                        this._addLayer(config, layer, layers);
                    });
                    break;
                default:
                    layer = L.tileLayer(config.url, config.options);
                    this._addLayer(config, layer, layers);
                    break;
            }
        });
        // only show layer control if there's more than one layer
        if (this._layers.length > 1) {
            layers.addTo(this._map);
        }
        this._layers = null;
    }

    _addLayer(config, layer, layers) {
        if (config.show) {
            layer.addTo(this._map);
        }
        if (config.label) {
            if (config.base) {
                layers.addBaseLayer(layer, config.label);
            } else {
                layers.addOverlay(layer, config.label);
            }
        }
    }

    _fitBounds() {
        if (!this.fitMarkers) {
            return;
        }
        const bounds = L.latLngBounds();
        let len = 0;
        this._markerLayer.eachLayer((layer) => {
            bounds.extend(layer.getLatLng());
            len += 1;
        });
        if (len === 0) {
            this._map.fitWorld();
        } else if (len === 1) {
            this._map.fitBounds(bounds, {maxZoom: this.zoom});
        } else {
            this._map.fitBounds(bounds);
        }
    }

    _locationChanged(lat, long, zoom) {
        if (this._map) {
            const coords = L.latLng([lat, long]);
            this._markerLayer.eachLayer((layer) => {
                if (layer.getLatLng().equals(coords)) {
                    if (zoom && !this.noScroll) {
                        layer.openTooltip();
                        this._map.setView(coords, zoom);
                    } else if (this.cluster) {
                        this._markerLayer.zoomToShowLayer(layer, () =>
                            layer.openTooltip()
                        );
                    } else {
                        layer.openTooltip();
                        this._map.setView(coords, this.zoom);
                    }
                }
            });
        }
    }

    _hasMarker(lat, long) {
        const coords = L.latLng([lat, long]);
        let found = false;
        this._markerLayer.eachLayer((layer) => {
            if (layer instanceof L.Marker && layer.getLatLng().equals(coords)) {
                found = true;
            }
        });
        return found;
    }

    _hide() {
        this.disabled = true;
    }
}
customElements.define('pb-leaflet-map', PbLeafletMap);