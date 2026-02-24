import { LitElement } from 'lit';

function sizeConverter(value, type) {
  try {
    return value.split(/\s*,\s*/).map(s => parseInt(s, 10));
  } catch (e) {
    console.error(`<pb-map-icon> Invalid size specified: ${value}`);
    return null;
  }
}
/**
 * Configure a map icon type to be used for markers.
 * Should be nested inside `pb-leaflet-map`.
 *
 */
export class PbMapIcon extends LitElement {
  static get properties() {
    return {
      /**
       * Name of the icon. Set to 'active' to configure the icon used for
       * places which were target of a previous `pb-geolocation` event (i.e. are currently 'active').
       */
      name: {
        type: String,
      },
      /**
       * The URL to load the icon from. Should be relative to the path set via the `imagesPath` property on `pb-leaflet-map`.
       */
      iconUrl: {
        type: String,
        attribute: 'icon-url',
      },
      /**
       * Size of the icon as comma-separated string, i.e. 'height, width'.
       */
      iconSize: {
        type: Array,
        converter: sizeConverter,
        attribute: 'icon-size',
      },
      /**
       * Anchor position of the icon as comma-separated string, i.e. 'height, width'.
       */
      iconAnchor: {
        type: Array,
        converter: sizeConverter,
        attribute: 'icon-anchor',
      },
      /**
       * The URL to load the shadow icon from. Should be relative to the path set via the `imagesPath` property on `pb-leaflet-map`.
       */
      shadowUrl: {
        type: String,
        attribute: 'shadow-url',
      },
      /**
       * Size of the shadow icon as comma-separated string, i.e. 'height, width'.
       */
      shadowSize: {
        type: Array,
        converter: sizeConverter,
        attribute: 'shadow-size',
      },
      /**
       * Anchor position of the shadow icon as comma-separated string, i.e. 'height, width'.
       */
      shadowAnchor: {
        type: Array,
        converter: sizeConverter,
        attribute: 'shadow-anchor',
      },
      /**
       * Anchor position of the popup as comma-separated string, i.e. 'height, width'.
       */
      popupAncor: {
        type: Array,
        converter: sizeConverter,
        attribute: 'popup-anchor',
      },
    };
  }

  constructor() {
    super();
    this.name = 'default';
    this.type = 'image';
    this.iconUrl = null;
  }

  get options() {
    const options = {};
    Object.keys(PbMapIcon.properties).forEach(key => {
      if (this[key]) {
        options[key] = this[key];
      }
    });
    console.log('<pb-map-icon> Options: %o', options);
    return options;
  }
}
customElements.define('pb-map-icon', PbMapIcon);
