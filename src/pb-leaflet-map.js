import { LitElement, html, css } from 'lit-element';
import * as L from 'leaflet/dist/leaflet-src.esm.js';
import { pbMixin } from './pb-mixin.js';
import { resolveURL } from './utils.js';
import './pb-map-layer.js';

/**
 * A wrapper component for [leaflet](https://leafletjs.com/) displaying a map.
 *
 * @fires pb-leaflet-marker-click - Fires event to be processed by the map upon click
 * @fires pb-update-map - When received, redraws the map to fit markers passed in with the event
 * @fires pb-update - When received, redraws the map to show markers for all pb-geolocation elements
 * @fires pb-geolocation - When received, focuses the map on the geocoordinates passed in with the event
 
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
            },
            _markers: {
                type: Array
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
        this._markers = [];
        this.imagesPath = '../images/leaflet/';
        this.cssPath = '../css/leaflet/';
        this.toggle = false;
        this.noScroll = false;
    }

    connectedCallback() {
        super.connectedCallback();

        /**
         * @param {{ detail: any[]; }} ev
         */
        this.subscribeTo('pb-update-map', (ev) => {
            const markers = [];
            const bounds = L.latLngBounds();
            /**
             * @param {{ latitude: any; longitude: any; label: any; }} loc
             */
            /**
             * @param {{ latitude: any; longitude: any; label: any; }} loc
             */
            ev.detail.forEach((loc) => {
                const marker = L.marker([loc.latitude, loc.longitude]);
                marker.addEventListener('click', () => {
                    this.emitTo('pb-leaflet-marker-click', loc);
                });
                marker.bindTooltip(loc.label);
                markers.push(marker);
                marker.addTo(this._map);
                bounds.extend([loc.latitude, loc.longitude]);
            });
            this._markers = markers;
            if (markers.length > 1) {
                this._map.fitBounds(bounds);
            } else {
                this._map.setZoom(this.zoom);
            }
        });

        /**
         * @param {{ detail: { root: { querySelectorAll: (arg0: string) => any[]; }; }; }} ev
         */
        this.subscribeTo('pb-update', (ev) => {
            this._markers.forEach((marker) =>
                marker.remove()
            );

            const markers = [];
            const bounds = L.latLngBounds();
            /**
             * @param {{ latitude: any; longitude: any; }} loc
             */
            /**
             * @param {{ latitude: any; longitude: any; }} loc
             */
            ev.detail.root.querySelectorAll('pb-geolocation').forEach((loc) => {
                const marker = L.marker([loc.latitude, loc.longitude]).addTo(this._map);
                markers.push(marker);
                bounds.extend([loc.latitude, loc.longitude]);
            });
            this._markers = markers;
            if (markers.length > 1) {
                this._map.fitBounds(bounds);
            } else if (markers.length === 1) {
                this._map.setView(markers[0].getLatLng(), this.zoom);
            } else {
                this._map.fitWorld();
            }
        });

        /**
         * @param {{ detail: { coordinates: { latitude: number; longitude: number; }; }; }} ev
         */
        this.subscribeTo('pb-geolocation', (ev) => {
            if (ev.detail.coordinates) {
                this.latitude = ev.detail.coordinates.latitude;
                this.longitude = ev.detail.coordinates.longitude;
                if (this.toggle) {
                    this.style.visibility = 'visible';
                }
                this._locationChanged();
            }
        });
    }

    firstUpdated() {
        this._initMap();
        if (this.toggle) {
            this._hide();
        }
    }

    render() {
        const cssPath = resolveURL(this.cssPath);
        return html`
            <link rel="stylesheet" href="${cssPath}/leaflet.css"/>
            <div id="map"></div>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }

            #map {
                width: 100%;
                height: 100%;
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

        let crs;
        switch (this.crs) {
            case 'EPSG4326':
                crs = L.CRS.EPSG4326;
                break;
            default:
                crs = L.CRS.EPSG3857;
                break;
        }
        this._map = L.map(this.shadowRoot.getElementById('map'), {
            zoom: this.zoom,
            center: L.latLng([this.latitude, this.longitude]),
            crs
        });
        this._configureLayers();
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
        const configs = this.querySelectorAll('pb-map-layer');
        if (configs.length === 0) {
            // configure a default layer
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
                maxZoom: 18,
                zoomOffset: -1,
                tileSize: 512,
                id: 'mapbox/streets-v11',
                accessToken: this.accessToken
            }).addTo(this._map);
            return;
        }
        const layers = L.control.layers(null, null, { collapsed: false });
        configs.forEach(config => {
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
        layers.addTo(this._map);
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

    _locationChanged() {
        if (this._map) {
            const coords = L.latLng([this.latitude, this.longitude]);
            this._markers.forEach(marker => {
                if (marker.getLatLng().equals(coords)) {
                    marker.openTooltip();
                } else {
                    marker.closeTooltip();
                }
            })
            if (!this.noScroll) 
                this._map.setView(coords, this.zoom);
        }
    }

    /**
     * @param {undefined} [ev]
     */
    _hide(ev) {
        this.style.visibility = 'hidden';
    }
}
customElements.define('pb-leaflet-map', PbLeafletMap);