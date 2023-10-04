/* eslint-disable class-methods-use-this */
import { maxSatisfying, valid } from 'es-semver';
import { Registry } from './registry.js';

/**
 * Return a JSON object representing the reconciliation service manifest
 *
 * @param {String} endpoint - the service to request the manifest of
 * @returns {Promise}       - a promise
 */
async function getServiceManifest (endpoint) {
	const response = await fetch(endpoint);
	const data = await response.json();
  return data;
}

/**
 * Return a JSON object to query the service, depending on what version the service supports
 *
 * @param {String} version - the requested reconciliation API version
 * @param {String} key     - the query expression
 * @returns {object}       - a json object
 */
function queryObj(version, key) {
  switch (version) {
    case '0.3.0-alpha':
      return {
        queries: [{
          query: key
        }]
      };
    default:
      return {
        q0: {
          query: key
        }
      };
  }
}

/**
 * Return a JSON requestInit object to pass to fetch() for querying the service
 *
 * @param {String} version - the requested reconciliation API version
 * @param {String} key     - the query expression
 * @returns {RequestInit}  - a json object
 */
function qRequestInit(version, key) {
  switch (version) {
    case '0.3.0-alpha':
      return {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(queryObj(version, key))
      };
    default:
      return {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "queries=".concat(JSON.stringify(queryObj(version, key)))
      };
  }
}

export class ReconciliationService extends Registry {
  constructor(configElem) {
    super(configElem)
    this.endpoint = configElem.getAttribute('endpoint');
    this.debug = configElem.getAttribute('debug');
    this.processLang = configElem.getAttribute('processlang');
    this.acceptLang = configElem.getAttribute('acceptlang');
    getServiceManifest(this.endpoint)
      .then((result) => {
        this.ReconcConfig = result;
        if (this.ReconcConfig.versions) {
          this.ReconcConfig.versions = this.ReconcConfig.versions.map((v) => {
            if (!valid(v, {'loose': true, 'includePrerelease': true}) && valid(`${v}.0`, {'loose': true, 'includePrerelease': true})) { return `${v}.0`; }
            if (!valid(v, {'loose': true, 'includePrerelease': true}) && valid(`${v.split('-')[0]}.0-${v.split('-')[1]}`, {'loose': true, 'includePrerelease': true})) { return `${v.split('-')[0]}.0-${v.split('-')[1]}`; }
            return v;
          });
        }
        // check out the largest of the versions that the endpoint supports (that is not larger than what this client supports)
        this.reconcVersion = !(this.ReconcConfig.versions) ? '0.1.0' : maxSatisfying(this.ReconcConfig.versions, '<0.3.1', {'loose': true, 'includePrerelease': true});
        if (this.debug) {
          console.log(
            '<pb-reconc-authority/constructor> Reconciliation connector for register \'%s\' at endpoint <%s> (v%s).',
            this._register, this.endpoint, this.reconcVersion
          );
          if (this.processLang || this.acceptLang) {
            console.log('<pb-reconc-authority/constructor> Using processLang %s and acceptLang %s.', this.processLang, this.acceptLang );
          }
          // console.log('<pb-reconc-authority/constructor> Using config: %o', this.ReconcConfig);
        }
      })
  }

  /**
   * Query the authority and return a RegistryResult.
   *
   * @param {String} key - the search string
   * @returns {Promise}  - a promise
   */
  async query(key) {
    // console.log(`<pb-reconc-authority/query> Building request for "%s", (v%s)...`, key, this.reconcVersion)
    const qInit = qRequestInit(this.reconcVersion, key);
    if (this.acceptLang && this.reconcVersion === '0.3.0-alpha') {
      qInit.headers["Accept-Language"] = this.acceptLang
    }
    if (this.processLang && this.reconcVersion === '0.3.0-alpha') {
      qInit.body.queries[0].lang = this.processLang
    }
    return ( fetch(this.endpoint, qInit)
              .then((response) => response.json())
              .then((json) => this._parseResponse(this.reconcVersion, json))
           )
  }

  /**
   * Retrieve information about a registry entry and display it
   * using the given container.
   *
   * @param {String} id             - the id to look up
   * @param {HTMLElement} container - reference to an element which should be used as container for displaying the information
   * @returns {Promise}             - a promise
   */
  info(id, container) {
    if (!id) {
      return Promise.resolve({});
    }
    if (!this.ReconcConfig.preview) {
      container.innerHTML = 'no \'preview\' endpoint in reconciliation service\'s manifest';
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const rawid = this._prefix ? id.substring(this._prefix.length + 1) : id;
      const url = this.ReconcConfig.preview.url.replace('{{id}}', encodeURIComponent(rawid));
      if (this.debug) {
        console.log(`<pb-reconc-authority/info> Retrieve info from %s ...`, url);
      }
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

  /**
   * Retrieve a raw JSON record for the given key as returned by the endpoint.
   * 
   * @param {string} key     - key the key to look up
   * @returns {Promise<any>} - promise resolving to the JSON record returned by the endpoint
   */
  async getRecord(key) {
    const id = this._prefix ? key.substring(this._prefix.length + 1) : key;
    if (this.debug) {
      console.log(`<pb-reconc-authority/getRecord> Retrieve record for %s from %s (i.e. run a reconc. query)...`, id);
    }
    const result = await this.query(id);
    return result.items[0];
  }

  /**
   * Parse the response of a reconciliation service and return an array of result objects
   *
   * @param {String} version      - the requested reconciliation API version
   * @param {Object} obj          - the response to be parsed
   * @returns {Object {totalItems: Int, items: Object[]}} results - a json object (results)
   */
  _parseResponse(version, obj) {
    const results = [];
    // obj = JSON.parse(obj);
    switch (version) {
      case '0.3.0-alpha':
          // TODO: Fix if the service supports it or if the spec changes
          //       (https://reconciliation-api.github.io/specs/draft/#dfn-reconciliation-result-batch)
          // obj.results[0].candidates.forEach((item) => {
          obj[0].result.forEach((item) => {
          if (this.ReconcConfig.view) {
            this.view = this.ReconcConfig.view.url.replace('{{id}}', item.id);
          } else {
            this.view = item.id;
          }
          if (item.description) {
            this.description = item.description;
          } else if (item.type) {
            this.description = item.type.map(t => t.name.toString() ).join(', ');
          } else {
            this.description = "";
          }
          const result = {
              register: this._register,
              id: (this._prefix ? `${this._prefix}-${item.id}` : item.id),
              label: item.name,
              type: item.type[0].name,
              details: this.description,
              score: item.score,
              link: this.view,
              provider: 'Reconciliation'
          };
          results.push(result);
        });
        if (this.debug) {
          // TODO: Fix if the service supports it or if the spec changes
          //       (https://reconciliation-api.github.io/specs/draft/#dfn-reconciliation-result-batch)
          // console.log('<pb-reconc-authority/_parseResponse> Reconciliation has %s results: %o', obj.results[0].candidates.length, results);
          console.log('<pb-reconc-authority/_parseResponse> Reconciliation has %s results: %o', obj[0].result.length, results);
        }
        return {
          // TODO: Fix if the service supports it or if the spec changes
          //       (https://reconciliation-api.github.io/specs/draft/#dfn-reconciliation-result-batch)
          // totalItems: obj.results[0].candidates.length,
          totalItems: obj[0].result.length,
          items: results,
        };
      default:
        obj.q0.result.forEach((item) => {
          if (this.ReconcConfig.view) {
            this.view = this.ReconcConfig.view.url.replace('{{id}}', item.id);
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
              type: item.type,
              details: this.description,
              link: this.view,
              provider: 'Reconciliation'
          };
          results.push(result);
        });
        if (this.debug) {
          console.log('<pb-reconc-authority/_parseResponse> Reconciliation has %s results: %o', obj.q0.result.length, results);
        }
        return {
            totalItems: obj.q0.result.length,
            items: results,
        };
    }
  }

}
