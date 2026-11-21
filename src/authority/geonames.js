import { Registry } from './registry.js';

export class GeoNames extends Registry {
  constructor(configElem) {
    super(configElem);
    this.user = configElem.getAttribute('user');
  }

  async query(key) {
    const results = [];

    return new Promise(resolve => {
      fetch(
        `https://secure.geonames.org/searchJSON?formatted=true&q=${encodeURIComponent(
          key,
        )}&maxRows=100&&username=${this.user}&style=full`,
      )
        .then(response => response.json())
        .then(json => {
          json.geonames.forEach(item => {
            const result = {
              register: this._register,
              id: this._prefix ? `${this._prefix}-${item.geonameId}` : item.geonameId,
              label: item.toponymName,
              details: `${item.fcodeName} - ${item.adminName1}, ${item.countryName}`,
              link: `https://www.geonames.org/${item.geonameId}`,
              strings: [item.toponymName],
              provider: 'geonames.org',
            };
            results.push(result);
          });
          resolve({
            totalItems: json.totalResultsCount,
            items: results,
          });
        });
    });
  }

  info(key, container) {
    if (!key) {
      return Promise.resolve({});
    }
    return new Promise((resolve, reject) => {
      this.getRecord(key)
        .then(json => {
          if (json.status) {
            reject(json.status.message);
            return;
          }
          const output = `
            <h3 class="label">
              <a href="${json.link}" target="_blank">${json.name}</a>
            </h3>
            <p class="fcode">${json.note} - ${json.region}, ${json.country}</p>
          `;
          container.innerHTML = output;
          resolve({
            id: this._prefix ? `${this._prefix}-${json.geonameId}` : json.geonameId,
            strings: [json.name],
          });
        })
        .catch(() => reject());
    });
  }

  /**
   * Retrieve a raw JSON record for the given key as returned by the endpoint.
   *
   * @param {string} key the key to look up
   * @returns {Promise<any>} promise resolving to the JSON record returned by the endpoint
   */
  async getRecord(key) {
    const id = this._prefix ? key.substring(this._prefix.length + 1) : key;
    return fetch(
      `https://secure.geonames.org/getJSON?geonameId=${encodeURIComponent(id)}&username=${
        this.user
      }`,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response.status);
      })
      .then(json => {
        const output = { ...json };
        output.name = json.toponymName;
        output.country = json.countryName;
        output.region = json.adminName1;
        output.note = json.fcodeName;
        // Singular "link" is what a `fields="...=extend:link"` mapping reads (see fetchExtend()
        // below and Registry.buildProperties) - it was missing before, silently making that
        // source always resolve to nothing for GeoNames matches. Plural "links" is this
        // codebase's existing multi-link convention shared with the other connectors
        // (metagrid.js, anton.js, kbga.js); kept alongside "link" for consistency even though
        // nothing currently reads it back out.
        output.link = `https://www.geonames.org/${json.geonameId}`;
        output.links = [output.link, `https://${json.wikipediaURL}`];
        if (json.lat && json.lng) {
          output.geo = `${json.lat},${json.lng}`;
        }
        return output;
      })
      .catch(() => Promise.reject());
  }

  /**
   * Fetch additional property values for a single matched entry beyond what query() already
   * returned, using the same normalized record getRecord() already builds (region/country/note/
   * link/geo) - lets a `fields` mapping's `extend:propId` source resolve for a GeoNames-backed
   * match the same way it already does for a reconciliation-service-backed one, via
   * Registry.buildProperties (this override is what makes Custom.fetchExtend's own delegation to
   * wrapped connectors actually find something, instead of always silently resolving to "no
   * value").
   *
   * @param {string} id the id to fetch extended properties for
   * @param {string[]} propertyIds the property ids to fetch
   * @returns {Promise<Object.<string, *>>} promise resolving to a map of propertyId -> value
   */
  async fetchExtend(id, propertyIds) {
    try {
      const record = await this.getRecord(id);
      const result = {};
      propertyIds.forEach(propId => {
        let value = record[propId];
        if (Array.isArray(value)) {
          value = value.filter(Boolean).join('; ');
        }
        if (value !== undefined && value !== null && value !== '') {
          result[propId] = value;
        }
      });
      return result;
    } catch (e) {
      return {};
    }
  }
}
