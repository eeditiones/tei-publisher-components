import { internalProperty } from 'lit-element';
import { Registry } from './registry.js';

export class KBGA extends Registry {
  constructor(configElem) {
    super(configElem);
    this._api = configElem.getAttribute('api');
    this._limit = configElem.getAttribute('limit') || 999999;
  }

  async query(key) {
    const results = [];

    const register = this.getRegister();
    const searchParam = register === 'bibls' ? 'biblsearch' : 'search';
    const url = `https://meta.karl-barth.ch/api/${register}?${searchParam}=${encodeURIComponent(
      key,
    )}&perPage=${this._limit}`;
    const label = this.getLabelField();
    return new Promise(resolve => {
      fetch(url)
        .then(response => response.json())
        .then(json => {
          json.data.forEach(item => {
            if (
              (this._register === 'organization' && item.authority_type !== 'organisation') ||
              (this._register === 'person' && item.authority_type !== 'person')
            ) {
              return;
            }
            const result = {
              register: this._register,
              id: this._prefix ? `${this._prefix}:${item['full-id']}` : item['full-id'],
              label: typeof label === 'string' ? item[label] : label(item),
              details: `${item['full-id']}`,
              link: `https://meta.karl-barth.ch/${register}/${item.id}`,
              strings: [typeof label === 'string' ? item[label] : label(item)],
              provider: 'KBGA',
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
    if (!key) {
      return Promise.resolve({});
    }
    const label = this.getLabelField();
    return new Promise(resolve => {
      this.getRecord(key).then(json => {
        const died = json.data.death ? `† ${json.data.death}` : '';
        const dates = json.data.birth ? `<p>* ${json.data.birth} ${died}</p>` : '';
        const note = json.data.note_bio ? `<p>${json.data.note_bio}</p>` : '';
        const output = `
            <h3 class="label"><a href="https://${json.wikipediaURL}" target="_blank">${
          typeof label === 'string' ? json.data[label] : label(json.data)
        }</a></h3>
              ${dates}
              ${note}
          `;
        container.innerHTML = output;
        resolve({
          id: json.data['full-id'],
          strings: [typeof label === 'string' ? json.data[label] : label(json.data)],
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
    const id = key.replace(/^.*-([^-]+)$/, '$1');
    return fetch(`https://meta.karl-barth.ch/api/${this.getRegister()}/${id}`)
      .then(response => response.json())
      .then(json => {
        const output = { ...json };
        output.name = json.data[this.getLabelField()];
        switch (this._register) {
          case 'place':
            output.country = json.data.country;
            output.location = json.data.location.coordinates;
            output.links = json.data.links.map(link => link.url);
            break;
          case 'person':
            output.birth = json.data.birth;
            output.death = json.data.death;
            output.note = json.data.note_bio;
            output.links = [`https://${json.wikipediaURL}`];
            break;
          default:
            break;
        }
        return output;
      })
      .catch(reason => Promise.reject(reason));
  }

  getLabelField() {
    let label;
    switch (this._register) {
      case 'place':
        label = 'placeName_full';
        break;
      case 'term':
        label = 'fullLabel';
        break;
      case 'abbreviation':
        label = 'label';
        break;
      case 'bibl':
      case 'songs':
        label = 'asHtml';
        break;
      default:
        label = 'persName_full';
        break;
    }
    return label;
  }

  getRegister() {
    if (this._api) {
      return this._api;
    }
    let register;
    switch (this._register) {
      case 'person':
      case 'organization':
        register = 'actors';
        break;
      case 'place':
        register = 'places';
        break;
      case 'term':
        register = 'terms';
        break;
      case 'abbreviation':
        register = 'abbreviations';
        break;
      case 'bibl':
        register = 'bibls';
        break;
      default:
        register = this._register;
    }
    return register;
  }
}
