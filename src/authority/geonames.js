import { Registry } from './registry.js';

export class GeoNames extends Registry {
  constructor(configElem) {
    super(configElem);
    this.user = configElem.getAttribute('user');
  }

  async query(key) {
    const results = [];

    try {
      const response = await fetch(
        `https://secure.geonames.org/searchJSON?formatted=true&q=${encodeURIComponent(
          key,
        )}&maxRows=100&&username=${this.user}&style=full`,
      );
      const json = await response.json();
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
      return {
        totalItems: json.totalResultsCount,
        items: results,
      };
    } catch (error) {
      console.error('<authority-geonames> Query failed:', error);
      return { totalItems: 0, items: [] };
    }
  }

  async info(key, container) {
    if (!key) {
      return Promise.resolve({});
    }
    try {
      const json = await this.getRecord(key);
      if (json.status) {
        throw new Error(json.status.message);
      }
      const output = `
            <h3 class="label">
              <a href="${json.link}" target="_blank">${json.name}</a>
            </h3>
            <p class="fcode">${json.note} - ${json.region}, ${json.country}</p>
          `;
      container.innerHTML = output;
      return {
        id: this._prefix ? `${this._prefix}-${json.geonameId}` : json.geonameId,
        strings: [json.name],
      };
    } catch (error) {
      console.error('<authority-geonames> Info failed:', error);
      throw error;
    }
  }

  /**
   * Retrieve a raw JSON record for the given key as returned by the endpoint.
   *
   * @param {string} key the key to look up
   * @returns {Promise<any>} promise resolving to the JSON record returned by the endpoint
   */
  async getRecord(key) {
    const id = this._prefix ? key.substring(this._prefix.length + 1) : key;
    try {
      const response = await fetch(
        `https://secure.geonames.org/getJSON?geonameId=${encodeURIComponent(id)}&username=${
          this.user
        }`,
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch GeoNames record: ${response.status}`);
      }
      const json = await response.json();
      const output = { ...json };
      output.name = json.toponymName;
      output.country = json.countryName;
      output.region = json.adminName1;
      output.note = json.fcodeName;
      output.links = [`https://www.geonames.org/${json.geonameId}`, `https://${json.wikipediaURL}`];
      return output;
    } catch (error) {
      console.error('<authority-geonames> getRecord failed:', error);
      throw error;
    }
  }
}
