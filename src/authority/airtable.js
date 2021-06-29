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

export class Airtable extends Registry {

  constructor(configElem) {
    super(configElem);
    this.apiKey = configElem.getAttribute('api-key');
    this.baseKey = configElem.getAttribute('base');
    this.table = configElem.getAttribute('table');
    this.filterExpr = configElem.getAttribute('filter');
    this.labelExpr = configElem.getAttribute('label');
    this.detailExpr = configElem.getAttribute('detail');
    this.infoExpr = configElem.getAttribute('info');
    const fieldsDef = configElem.getAttribute('fields');
    if (fieldsDef) {
      this.fields = fieldsDef.split(/\s*,\s*/);
    } else {
      this.fields = ['ID'];
    }

    this._init();
  }

  _init() {
      window.ESGlobalBridge.requestAvailability();
      const path = resolveURL('https://unpkg.com/airtable@0.11.1/build/airtable.browser.js');
      window.ESGlobalBridge.instance.load('airtable', path);
      window.addEventListener(
        'es-bridge-airtable-loaded',
        this._initAirtable.bind(this),
        { once: true },
      );
  }

  _initAirtable() {
    const Airtable = require('airtable');
    this.base = new Airtable({ apiKey: this.apiKey }).base(this.baseKey);
  }

  async query(key) {
    key = key.toLowerCase();
    const results = [];
    const filter = this.filterExpr ? expandTemplate(this.filterExpr, { key }) : null;
    const options = {
      // Selecting the first 3 records in Grid view:
      maxRecords: 100,
      view: 'Grid view'
    };
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
            this.fields.forEach((field) => { data[field] = record.get(field); });
            const result = {
              register: this._register,
              id: record.id,
              label: expandTemplate(this.labelExpr, data),
              details: expandTemplate(this.detailExpr, data)
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

  info(key, container) {
    return new Promise((resolve, reject) => {
      this.base(this.table).find(key, (err, record) => {
        if (err) {
          reject(err.statusCode);
          return;
        }
        const data = {};
        this.fields.forEach((field) => { data[field] = record.get(field); });
        container.innerHTML = expandTemplate(this.infoExpr, data);
        resolve({
          id: record.id,
          strings: [data.Name]
        });
      });
    })
  }
}
