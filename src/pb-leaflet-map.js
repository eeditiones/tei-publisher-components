import { LitElement, html, css } from 'lit-element';
import * as L from 'leaflet/dist/leaflet-src.esm.js';
import { pbMixin } from './pb-mixin.js';

/**
 * A wrapper component for [leaflet](https://leafletjs.com/) displaying a map.
 *
 * @customElement  pb-leaflet-map
 * @polymer
 * @demo demo/pb-leaflet-map.html
 * @appliesMixin pbMixin
 */
export class PbLeafletMap extends pbMixin(LitElement) {
    static get properties() {
        return {
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
            accessToken: {
                type: String,
                attribute: 'access-token'
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
            },
            ...super.properties
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
    }

    connectedCallback() {
        super.connectedCallback();

        this.subscribeTo('pb-update-map', (ev) => {
            const markers = [];
            const bounds = L.latLngBounds();
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

        this.subscribeTo('pb-update', (ev) => {
            this._markers.forEach((marker) =>
                marker.remove()
            );

            const markers = [];
            const bounds = L.latLngBounds();
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

        this.subscribeTo('pb-geolocation', (ev) => {
            if (ev.detail.coordinates) {
                this.latitude = ev.detail.coordinates.latitude;
                this.longitude = ev.detail.coordinates.longitude;
                this._locationChanged();
            }
        });
    }

    firstUpdated() {
        this._initMap();
    }

    render() {
        const cssPath = new URL(this.cssPath, import.meta.url).href;
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
        `;
    }

    _initMap() {
        if (this._map) {
            return;
        }

        L.Icon.Default.imagePath = new URL(this.imagesPath, import.meta.url).href;

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

        this.signalReady();

        // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //     maxZoom: 18,
        //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        // }).addTo(this._map);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: this.accessToken
        }).addTo(this._map);
        // L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        // 	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        // }).addTo(this._map);

        L.control.scale().addTo(this._map);
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
            this._map.setView(coords, this.zoom);
        }
    }
}
customElements.define('pb-leaflet-map', PbLeafletMap);