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
              provider: 'geonames.org'
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
      this.getRecord(key).then(json => {
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
      `https://secure.geonames.org/getJSON?geonameId=${encodeURIComponent(id)}&username=${this.user}`,
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response.status);
    })
    .then((json) => {
      const output = Object.assign({}, json);
      output.name = json.toponymName;
      output.country = json.countryName;
      output.region = json.adminName1;
      output.note = json.fcodeName;
      output.links = [`https://www.geonames.org/${json.geonameId}`, `https://${json.wikipediaURL}`];
      return output;
    })
    .catch(() => Promise.reject());
  }
}
