import { LitElement } from 'lit';

const ignore = ['type', 'url', 'label', 'base', 'show'];

/**
 * Configure a map layer. Should be nested inside `pb-leaflet-map`.
 *
 */
export class PbMapLayer extends LitElement {
  static get properties() {
    return {
      /**
       * Type of the layer: either 'tile' or 'geojson'
       */
      type: {
        type: String,
      },
      /**
       * The URL (or URL template) to load layer data from
       */
      url: {
        type: String,
      },
      /**
       * Set to indicate that this is a base layer
       */
      base: {
        type: Boolean,
      },
      /**
       * Display the layer on the map upon initialization
       */
      show: {
        type: Boolean,
      },
      /**
       * A label for the layer to be shown in the layer control
       */
      label: {
        type: String,
      },
      attribution: {
        type: String,
      },
      minZoom: {
        type: Number,
        attribute: 'min-zoom',
      },
      maxZoom: {
        type: Number,
        attribute: 'max-zoom',
      },
      zoomOffset: {
        type: Number,
        attribute: 'zoom-offset',
      },
      opacity: {
        type: Number,
      },
      tileSize: {
        type: Number,
      },
      id: {
        type: String,
      },
      accessToken: {
        type: String,
        attribute: 'access-token',
      },
    };
  }

  constructor() {
    super();
    this.type = 'tile';
    this.url = null;
  }

  get options() {
    const options = {};
    Object.keys(PbMapLayer.properties).forEach(key => {
      if (ignore.indexOf(key) < 0 && this[key]) {
        options[key] = this[key];
      }
    });
    console.log('<pb-leaflet-map-layer> Options: %o', options);
    return options;
  }

  async data() {
    return new Promise(resolve => {
      fetch(this.url)
        .then(response => response.json())
        .then(json => resolve(json));
    });
  }
}
customElements.define('pb-map-layer', PbMapLayer);
