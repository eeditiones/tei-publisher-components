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
    getServiceManifest(this.endpoint).then((result) => {
      this.ORConfig = result;
      if (this.debug) {
        console.log(
          'OpenReconcile connector for register \'%s\' at endpoint <%s>. Using config: %o',
          this._register, this.endpoint, this.ORConfig
        );
      }
    })
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

    return new Promise((resolve) => {
        fetch(this.endpoint, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: "queries=".concat(JSON.stringify(paramsObj))
        })
        .then((response) => response.json())
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
            if (this.debug) {
              console.log(
                  'OpenReconcile results: %o',
                  results
              );
            }
            resolve({
                totalItems: json.q1.result.length,
                items: results,
            });
        })
    })
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
    if (!id) {
      return Promise.resolve({});
    }
    if (!this.ORConfig.preview) {
      container.innerHTML = 'no \'preview\' information in endpoint\'s manifest';
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const rawid = this._prefix ? id.substring(this._prefix.length + 1) : id;
      const url = this.ORConfig.preview.url.replace('{{id}}', encodeURIComponent(rawid));
      fetch(url)
      .then(response => response.text())
      .then((output) => {
        container.innerHTML = output;
        resolve({
          id: this._prefix ? `${this._prefix}-${rawid}` : rawid
        });
      })
      .catch(() => reject());
    });
  }
}
