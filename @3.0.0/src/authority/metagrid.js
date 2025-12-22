/* eslint-disable class-methods-use-this */
import { Registry } from './registry.js';

export class Metagrid extends Registry {
  async query(key) {
    const query = key.replace(/[^\w\s]+/g, '');
    const results = [];
    const url = `https://api.metagrid.ch/search?query=${encodeURIComponent(query)}`;

    return new Promise(resolve => {
      fetch(url)
        .then(response => response.json())
        .then(json => {
          json.resources.forEach(item => {
            const name = `${item.metadata.last_name}, ${item.metadata.first_name} `;
            const result = {
              register: this._register,
              id: `${item.provider.slug}-${item.identifier}`,
              label: name,
              details: `${item.metadata.birth_date} - ${item.metadata.death_date}`,
              link: item.link.uri,
              provider: item.provider.slug,
            };
            results.push(result);
          });
          resolve({
            totalItems: json.meta.total,
            items: results,
          });
        });
    });
  }

  info(key, container) {
    const p = key.indexOf('-');
    const slug = key.substring(0, p);
    return new Promise(resolve => {
      this.getRecord(key).then(json => {
        const output = `
          <h3 class="label">
            <a href="https://${json.link.uri}" target="_blank">
              ${json.metadata.last_name}, ${json.metadata.first_name}
            </a>
          </h3>
          <p>${json.metadata.birth_date} - ${json.metadata.death_date}</p>
        `;
        container.innerHTML = output;
        resolve({
          id: `${slug}-${json.identifier}`,
          strings: [`${json.metadata.first_name} ${json.metadata.last_name}`],
        });
      });
    });
  }

  /**
   * Retrieve a raw JSON record for the given key as returned by the endpoint.
   *
   * @param {string} key the key to look up
   * @returns {Promise<any>} promise resolving to the JSON record returned by the endpoint
   */
  async getRecord(key) {
    const p = key.indexOf('-');
    const slug = key.substring(0, p);
    const id = key.substring(p + 1);
    return fetch(`https://api.metagrid.ch/search?slug=${slug}&query=${id}`)
      .then(response => response.json())
      .then(json => {
        const item = json.resources[0];
        const output = { ...item };
        output.name = `${item.metadata.first_name} ${item.metadata.last_name}`;
        output.links = [`https://${item.link.uri}`];
        if (item.metadata.birth_date && item.metadata.birth_date.length > 0) {
          output.birth = item.metadata.birth_date;
        }
        if (item.metadata.death_date && item.metadata.death_date.length > 0) {
          output.death = item.metadata.death_date;
        }
        return output;
      })
      .catch(reason => Promise.reject(reason));
  }
}
