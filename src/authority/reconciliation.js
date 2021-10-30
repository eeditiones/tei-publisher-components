/* eslint-disable class-methods-use-this */
import { Registry } from './registry.js'

async function getServiceManifest (endpoint) {
  const response = await fetch(endpoint);
	const data = await response.json();
  return data;
}

export class ReconciliationService extends Registry {
  constructor(configElem) {
    super(configElem)
    this.endpoint = configElem.getAttribute('endpoint');
    this.debug = configElem.getAttribute('debug');
    if (this.debug) { console.log('Reconcile: get manifest for %s ...', this.endpoint); }
    getServiceManifest(this.endpoint)
      .then((result) => {
        this.ORConfig = result;
        if (this.debug) { console.log('Reconcile: configured connector for register \'%s\' at endpoint <%s>, using config: %o', this._register, this.endpoint, this.ORConfig); }
      });
  }

  /**
   * Query the authority and return a RegistryResult.
   *
   * @param {String} key the search string
   */
  async query(key) {
    const results = [];
    const paramsObj = {
                        q1: {
                          query: key
                        }
                      };
    if (this.debug) { console.log('Reconcile %s: query(%s) ...', this._register, key); }

    return new Promise((resolve, reject) => {
        fetch(this.endpoint, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: "queries=".concat(JSON.stringify(paramsObj))
        })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(response);
        })
        .then((json) => {
            json.q1.result.forEach((item) => {
              if (this.ORConfig.view) {
                this.view = this.ORConfig.view.url.replace('{{id}}', item.id);
              } else {
                this.view = item.id;
              }
              if (item.description) {
                this.description = item.description;
              } else if (item.type) {
                this.description = item.type.map(t => t.name.toString() ).join(', ')
              } else {
                this.description = ""
              }
              const result = {
                  register: this._register,
                  id: (this._prefix ? `${this._prefix}-${item.id}` : item.id),
                  label: item.name,
                  link: this.view,
                  details: this.description,
                  provider: 'ReconciliationService'
              };
              results.push(result);
            });
            if (this.debug) { console.log('Reconcile %s: query results: %o', this._register, results); }
            resolve({
                totalItems: json.q1.result.length,
                items: results,
            });
        })
        .catch((response) => {
          console.log(response.status, response.statusText);
          // response.json().then((json) => { console.log(json); });
          reject(response);
        })
    });
  }

  /**
   * Retrieve information about a registry entry and display it
   * using the given container.
   *
   * @param {String} id the id to look up
   * @param {HTMLElement} container reference to an element which should be used as container for displaying the information
   * @returns {Promise} a promise
   */
  info(id, container) {
    if (this.debug) { console.log('Reconcile %s: info(%s, %s) ...', this._register, id, container); }
    if (!id) {
      return Promise.resolve({});
    }
    if (!this.ORConfig.preview) {
      container.innerHTML = 'no \'preview\' information in endpoint\'s manifest';
      return Promise.resolve({});
    }

    return new Promise((resolve, reject) => {
        const rawid = this._prefix ? id.substring(this._prefix.length + 1) : id;
        const url = this.ORConfig.preview.url.replace('{{id}}', encodeURIComponent(rawid));
        return fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                return Promise.reject(response);
            })
            .then((text) => {
                container.innerHTML = text;
                if (this.debug) { console.log('Reconcile %s: return info() results ...', this._register); }
                resolve({
                    id: this._prefix ? `${this._prefix}-${rawid}` : rawid
                });
            })
            .catch((response) => {
              console.log(response.status, response.statusText);
              // response.json().then((json) => { console.log(json); });
              reject(response);
            })
    });
  }

  /**
   * Retrieve a raw JSON record for the given key as returned by the endpoint.
   * Either there is a "view template" field in the manifest AND we get JSON
   * there, or we just have to rely on what's in the reconciliation query
   * result.
   * Note that there is no way of knowing what fields the records at the "view
   * template" URI may have.
   *
   * @param {string} key the key to look up
   * @returns {Promise<any>} promise resolving to the JSON record returned by the endpoint
   */
   async getRecord(key) {
    if (this.debug) { console.log('Reconcile %s: getRecord(%s) ...', this._register, key); }
    const id = this._prefix ? key.substring(this._prefix.length + 1) : key;

    if (!id) {
      return Promise.resolve({});
    }
    if (this.ORConfig.view) {
      const viewUrl = this.ORConfig.view.url.replace('{{id}}', encodeURIComponent(id));
      const r = fetch(viewUrl)
        .then(response => {
          if (response.ok && response.headers.get('Content-Type').includes("application/json")) {
            const result = response.json();
            if (this.debug) { console.log('Reconcile %s: getRecord results (via view template): %o', this._register, result); }
            return Promise.resolve(result);
          }
          return Promise.reject(response);
        })
        .catch(async () => {
          const result = await this.query(id);
          if (this.debug) { console.log('Reconcile %s: getRecord results (via query): %o', this._register, result.items[0]); }
          return result.items[0];
        });
      return r;
    }
    const result = await this.query(id);
    if (this.debug) { console.log('Reconcile %s: getRecord() results (via query($s)): %o', this._register, id, result.items[0]); }
    return result.items[0];
  }
}
