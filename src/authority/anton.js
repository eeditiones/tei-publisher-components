import { Registry } from "./registry.js";

/**
 * Connector for the corporate archive of Georgfischer AG.
 */
export class Anton extends Registry {
    
    constructor(configElem) {
        super(configElem);
        this._url = configElem.getAttribute('url') || `https://archives.georgfischer.com/api`;
        this._api = configElem.getAttribute('api');
        this._limit = configElem.getAttribute('limit') || 999999;
        this._provider = configElem.getAttribute('provider') || configElem.getAttribute('connector')
    }

    async query(key) {
        const results = [];
     
        const register = this.getRegister();
        const url = `${this._url}/${register}?search=${encodeURIComponent(key)}&perPage=${this._limit}`;
        const label = this.getLabelField();
        return new Promise((resolve) => {
            fetch(url)
              .then(response => response.json())
              .then(json => {
                  if (!json.data) {
                      resolve({
                          totalItems: 0,
                          items: []
                      });
                      return;
                  }
                json.data.forEach(item => {
                    if ((this._register === 'organization' && item.authority_type === 'Person') ||
                        (this._register === 'person' && item.authority_type !== 'Person')) {
                      return;
                    }
                    const result = {
                      register: this._register,
                      id: (this._prefix ? `${this._prefix}-${item.id}` : item.id),
                      label: item[label],
                      details: `${item.id}`,
                      link: `${this._url}/${register}/${item.id}`,
                      strings: [item[label]],
                      provider: this._provider
                    };
                    results.push(result);
                });
                resolve({
                  totalItems: json.meta.total,
                  items: results,
                });
              })
              .catch((reason) => Promise.reject(reason));
        })
    }

    info(key, container) {
      if (!key) {
        return Promise.resolve({});
      }
      const id = this._prefix ? key.substring(this._prefix.length + 1) : key;
      const label = this.getLabelField();
      return new Promise((resolve) => {
        this.getRecord(id)
        .then(json => {
          const died = json.data.death ? `† ${json.data.death}` : '';
          const dates = json.data.birth ? `<p>* ${json.data.birth} ${died}</p>` : '';
          const note = json.data.note_bio ? `<p>${json.data.note_bio}</p>` : '';
          const output = `
            <h3 class="label"><a href="https://${json.wikipediaURL}" target="_blank">${json.data[label]}</a></h3>
              ${dates}
              ${note}
          `;
          container.innerHTML = output;
          resolve({
            id: (this._prefix ? `${this._prefix}-${json.data.id}` : json.data.id),
            strings: [json.data[label]]
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
    const url = `${this._url}/${this.getRegister()}/${id}`;
    return fetch(url)
    .then(response => response.json())
    .then(json => {
      const output = Object.assign({}, json);
      output.name = json.data[this.getLabelField()];
      switch (this._register) {
        case 'place':
          output.country = json.data.country;
          if (json.data.location && json.data.location.coordinates) {
            output.location = json.data.location.coordinates;
          }
          output.links = json.data.links.map((link) => link.url);
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
    .catch((reason) => Promise.reject(reason));
  }

    getLabelField() {
      let label;
      switch (this._register) {
          case 'term':
              label = 'label';
              break;
          default:
              label = 'fullname';
              break;
      }
      return label;
    }

    getRegister() {
      if (this._api) {
        return this._api;
      }
      let register;
      switch(this._register) {
        case 'person':
        case 'organization':
          register = 'actors';
          break;
        case 'origPlace':
        case 'place':
          register = 'places';
          break;
        case 'term':
          register = 'keywords';
          break;
        case 'abbreviation':
          register = 'abbreviations';
          break;
        default:
          register = this._register;
      }
      return register;
    }
}
