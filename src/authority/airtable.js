import '@lrnwebcomponents/es-global-bridge';
import { Registry } from './registry.js';
import { resolveURL } from '../utils.js';

function expandTemplate(template = '', options) {
  return template.replace(/\${([^}]+)}/g, (match, p) => {
    let replacement;
    if (options[p]) {
      replacement = options[p];
    }
    return replacement || '';
  });
}

function getTemplate(configElem, selector) {
  const template = configElem.querySelector(selector);
  if (template instanceof HTMLTemplateElement) {
    const wrapper = document.createElement('div');
    wrapper.appendChild(template.content.cloneNode(true));
    return wrapper.innerHTML;
  }
  return '';
}

export class Airtable extends Registry {
  constructor(configElem) {
    super(configElem);
    this.apiKey = configElem.getAttribute('api-key');
    this.baseKey = configElem.getAttribute('base');
    this.table = configElem.getAttribute('table');
    this.view = configElem.getAttribute('view');
    this.filterExpr = configElem.getAttribute('filter');
    this.labelExpr = configElem.getAttribute('label');
    const fieldsDef = configElem.getAttribute('fields');
    if (fieldsDef) {
      this.fields = fieldsDef.split(/\s*,\s*/);
    } else {
      this.fields = ['ID'];
    }
    const tokenizeDef = configElem.getAttribute('tokenize');
    if (tokenizeDef) {
      this.tokenize = tokenizeDef.split(/\s*,\s*/);
    } else {
      this.tokenize = [this.fields[0]];
    }

    this.tokenizeChars = configElem.getAttribute('tokenize-regex') || '\\W';

    this.infoExpr = getTemplate(configElem, '.info');
    this.detailExpr = getTemplate(configElem, '.detail');

    /**
     * Will be filled later, when airtable initialises
     * @type {(table: string) => any}
     */
    this.base = null;

    /**
     * A promise that resolves when this class is initialised.
     *
     * @type {Promise<void>}
     */
    this._airtableIsInitialized = this._init();
  }

  /**
   * @returns {Promise<void>}
   */
  async _init() {
    window.ESGlobalBridge.requestAvailability();
    // ESGlobalBridge sets the `imports['airtable'] to true when it's fully loaded.
    if (window.ESGlobalBridge.instance.imports['airtable'] === true) {
      // We already have it
      this._initAirtable();
      return;
    }
    const path = resolveURL('../lib/airtable.browser.js');
    // ESGlobalBridge#load returns a promise as well, but that will resolve a load immediately if a
    // load is already pending but not resolved yet. Use the events to wait for a pending load to
    // resolve instead.
    window.ESGlobalBridge.instance.load('airtable', path);
    await new Promise(resolve =>
      window.addEventListener('es-bridge-airtable-loaded', resolve, {
        once: true,
      }),
    );
    this._initAirtable();
  }

  _initAirtable() {
    const AirtableLib = require('airtable');
    this.base = new AirtableLib({ apiKey: this.apiKey }).base(this.baseKey);
  }

  async query(key) {
    key = key.toLowerCase();

    // Make sure airtable is initialised and we have the this.base functions set up
    await this._airtableIsInitialized;

    const results = [];
    const filter = this.filterExpr ? expandTemplate(this.filterExpr, { key }) : null;
    const options = {
      fields: this.fields,
      // Selecting the first 3 records in Grid view:
      maxRecords: 100,
    };
    if (this.view) {
      options.view = this.view;
    }
    if (filter) {
      options.filterByFormula = filter;
    }
    return new Promise((resolve, reject) => {
      this.base(this.table)
        .select(options)
        .firstPage((err, records) => {
          if (err) {
            console.error(err);
            reject(err);
            return;
          }
          records.forEach(record => {
            const data = {};
            this.fields.forEach(field => {
              data[field] = record.get(field);
            });
            const result = {
              register: this._register,
              id: record.id,
              label: expandTemplate(this.labelExpr, data),
              details: expandTemplate(this.detailExpr, data),
              provider: 'airtable',
            };
            results.push(result);
          });
          resolve({
            totalItems: 3,
            items: results,
          });
        });
    });
  }

  async info(key, container) {
    // Make sure airtable is initialised and we have the this.base functions set up
    await this._airtableIsInitialized;

    return new Promise((resolve, reject) => {
      this.base(this.table).find(key, (err, record) => {
        if (err) {
          switch (err.statusCode) {
            case 404:
              reject(`No record found for ${key} in table ${this.table}`);
              break;
            default:
              reject(`${err.statusCode}: ${err.message}`);
              break;
          }
          return;
        }
        if (Object.keys(record.fields).length === 0) {
          reject(`No record found for ${key} in table ${this.table}`);
          return;
        }
        let strings = [];
        const data = {};
        this.fields.forEach(field => {
          const value = record.get(field);
          if (value) {
            data[field] = value;
            strings.push(value);
          }
        });
        const regex = new RegExp(this.tokenizeChars);
        this.tokenize.forEach(key => {
          if (data[key]) {
            strings = strings.concat(data[key].split(regex));
          }
        });
        strings = strings.filter(tok => !/^\d+$/.test(tok));
        strings.sort((s1, s2) => s2.length - s1.length);
        container.innerHTML = expandTemplate(this.infoExpr, data);

        resolve({
          id: record.id,
          strings,
        });
      });
    });
  }
}
