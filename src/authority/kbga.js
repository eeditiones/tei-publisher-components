import { Registry } from "./registry.js";

export class KBGA extends Registry {

    get name() {
        return 'Karl Barth Gesamtausgabe';
    }
    
    constructor(configElem) {
        super(configElem);
        this.user = configElem.getAttribute('user');
    }

    async query(key) {
        const results = [];
     
        const register = this.getRegister();
        const url = `https://meta.karl-barth.ch/api/${register}?search=${encodeURIComponent(key)}`;
        const label = this.getLabelField();
        return new Promise((resolve) => {
            fetch(url)
              .then(response => response.json())
              .then(json => {
                json.data.forEach(item => {
                    
                    if ((this._register === 'organisation' && item.authority_type !== 'organisation') ||
                        (this._register === 'person' && item.authority_type !== 'person')) {
                      return;
                    }
                    const result = {
                      register: this._register,
                      id: (this._prefix ? `${this._prefix}:${item['full-id']}` : item['full-id']),
                      label: item[label],
                      details: `${item['full-id']}`,
                      link: `https://meta.karl-barth.ch/${register}/${item.id}`,
                      strings: [item[label]]
                    };
                    results.push(result);
                });
                resolve({
                  totalItems: json.meta.total,
                  items: results,
                });
              });
        })
    }

    info(key, container) {
      if (!key) {
        return Promise.resolve({});
      }
      const id = key.replace(/^.*-([^-]+)$/, '$1')
      const label = this.getLabelField();
      return new Promise((resolve) => {
        fetch(`https://meta.karl-barth.ch/api/${this.getRegister()}/${id}`)
        .then(response => response.json())
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
            id: json.data['full-id'],
            strings: [json.data[label]]
          });
        });
      });
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
          default:
              label = 'persName_full';
              break;
      }
      return label;
    }

    getRegister() {
      let register;
      switch(this._register) {
        case 'person':
        case 'organisation':
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
        default:
          register = this._register;
      }
      return register;
    }
}