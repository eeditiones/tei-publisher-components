import { Registry } from './registry.js';
// eslint-disable-next-line import/no-cycle
import { createConnectors } from './connectors.js';

export class Custom extends Registry {

  constructor(endpoint, configElem) {
    super(configElem);
    this.debug = configElem.getAttribute('debug');
    this._endpoint = endpoint;
    this._connectors = createConnectors(endpoint, configElem);
    this._connectors.forEach((connector) => {
      connector.name = this.name;
    });
    if (this.debug) {
      console.log(
        '<pb-custom-authority/constructor> endpoint: %s; using authorities: %o',
        this._endpoint,
        this._connectors,
      );
    }
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
              provider: 'local'
            });
            localResults.add(item.id);
          });
          let totalItems = json.length;

          for (const connector of this._connectors) {
            // eslint-disable-next-line no-await-in-loop
            const dr = await connector.query(key);
            results = results.concat(dr.items.filter((result) => !localResults.has(result.id)));
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
      if (this.debug) {
        console.log(`<pb-custom-authority/info> Retrieve info from local register ...`);
      }
      fetch(`${this._endpoint}/api/register/${this._register}/${encodeURIComponent(id)}`)
        .then(async (response) => {
          if (response.ok) {
            const json = await response.json();
            container.innerHTML = json.details;
            resolve({
              id: json.id,
              strings: json.strings,
            });
            return;
          }
          if (response.status === 404) {
            if (this.debug) {
              console.log(`<pb-custom-authority/info> no local copy for %s`, key);
            }
            for (const connector of this._connectors) {
              try {
                if (this.debug) {
                  console.log(`<pb-custom-authority/info> trying to find info at connector %s`, connector.name);
                }
                // eslint-disable-next-line no-await-in-loop
                const cr = await connector.info(key, container);
                if (cr) {
                  if (this.debug) {
                    console.log(`<pb-custom-authority/info> found info at connector %s: %s`, connector.name, JSON.stringify(cr));
                  }
                  resolve(cr);
                }
              } catch (e) {
                if (this.debug) {
                  console.log(`<pb-custom-authority/info> no info found at connector %s`, connector.name);
                }
              };
            }
          }
          reject();
        });
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
      if (this.debug) {
        console.log(`<pb-custom-authority/select> get %s record for %s ...`, connector.name, item.id);
      }
      // eslint-disable-next-line no-await-in-loop
      entry = await connector.getRecord(item.id);
      if (entry) {
        if (this.debug) {
          console.log(`<pb-custom-authority/select> found record with %s (leaving for loop): %s`, connector.name, JSON.stringify(entry));
        }
        break;
      }
    }
    if (!entry) {
      if (this.debug) {
        console.log(`<pb-custom-authority/select> no entry for %s found. Rejecting promise...`, item.id);
      }
      return Promise.reject(Error(`No record found for ID ${item.id}`));
    }

    if (this.debug) {
      console.log(`<pb-custom-authority/select> Posting entry for %s to local register ...`, item.id)
    }
    return fetch(`${this._endpoint}/api/register/${this._register}/${encodeURIComponent(item.id)}`, {
      method: 'POST',
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    })
      .then((response) => response.json())
      .catch((error) => {
        if (this.debug) {
          console.log(`<pb-custom-authority/select> Error %s ...`, error.message);
        }
        Promise.reject(error);
      });
  }
}
