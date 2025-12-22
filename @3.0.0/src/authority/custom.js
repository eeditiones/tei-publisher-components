import { Registry } from './registry.js';
// eslint-disable-next-line import/no-cycle
import { createConnectors } from './connectors.js';

export class Custom extends Registry {
  constructor(endpoint, configElem) {
    super(configElem);
    this._editable = configElem.hasAttribute('edit');
    this._endpoint = endpoint;
    this._connectors = createConnectors(endpoint, configElem);
    this._connectors.forEach(connector => {
      connector.name = this.name;
    });
    console.log(
      'custom connector: endpoint: %s; using authorities: %o',
      this._endpoint,
      this._connectors,
    );
  }

  get editable() {
    return this._editable;
  }

  async query(key) {
    return new Promise(resolve => {
      fetch(
        `${this._endpoint}/api/register/search/${this._register}?query=${encodeURIComponent(key)}`,
      )
        .then(response => response.json())
        .then(async json => {
          let results = [];
          const localResults = new Set();
          json.forEach(item => {
            results.push({
              register: this._register,
              id: item.id,
              label: item.label,
              link: item.link,
              details: item.details,
              provider: 'local',
            });
            localResults.add(item.id);
          });
          let totalItems = json.length;

          for (const connector of this._connectors) {
            // eslint-disable-next-line no-await-in-loop
            const dr = await connector.query(key);
            results = results.concat(dr.items.filter(result => !localResults.has(result.id)));
            totalItems += dr.totalItems;
          }
          resolve({
            totalItems,
            items: results,
          });
        });
    });
  }

  info(key, container) {
    if (!key) {
      return Promise.resolve({});
    }
    const id = key;
    return new Promise((resolve, reject) => {
      fetch(`${this._endpoint}/api/register/${this._register}/${encodeURIComponent(id)}`).then(
        async response => {
          if (response.ok) {
            const json = await response.json();
            container.innerHTML = json.details;
            resolve({
              id: json.id,
              strings: json.strings,
              editable: this._editable,
            });
            return;
          }
          if (response.status === 404) {
            for (const connector of this._connectors) {
              try {
                // eslint-disable-next-line no-await-in-loop
                const cr = await connector.info(key, container);
                if (cr) {
                  resolve(cr);
                }
              } catch (e) {
                // not found: continue
              }
            }
          }
          reject();
        },
      );
    });
  }

  /**
   *
   * @param {any} item
   * @returns {Promise}
   */
  async select(item) {
    let entry;
    for (const connector of this._connectors) {
      // eslint-disable-next-line no-await-in-loop
      entry = await connector.getRecord(item.id).catch(() => null);
      if (entry) {
        break;
      }
    }
    if (!entry) {
      return Promise.resolve(item);
    }
    return fetch(
      `${this._endpoint}/api/register/${this._register}/${encodeURIComponent(item.id)}`,
      {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry),
      },
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(Error(response.status.toString()));
    });
  }
}
