import { Registry } from "./registry.js";

export class GeoNames extends Registry {

    get name() {
        return 'geonames.org';
    }
    
    constructor(configElem) {
        super(configElem);
        this.user = configElem.getAttribute('user');
    }

    async query(key) {
        const results = [];
     
        return new Promise((resolve) => {
            fetch(
              `http://api.geonames.org/searchJSON?formatted=true&q=${encodeURIComponent(key)}&maxRows=100&&username=${this.user}&style=full`
            )
              .then(response => response.json())
              .then(json => {
                json.geonames.forEach(item => {
                  const result = {
                    register: this._register,
                    id: (this._prefix ? `${this._prefix}:${item.geonameId}` : item.geonameId),
                    label: item.toponymName,
                    details: `${item.fcodeName} - ${item.adminName1}, ${item.countryName}`,
                    link: `https://www.geonames.org/${item.geonameId}`,
                    strings: [item.toponymName]
                  };
                  results.push(result);
                });
                resolve({
                  totalItems: json.totalResultsCount,
                  items: results,
                });
              });
        })
    }

    info(key, container) {
      if (!key) {
        return Promise.resolve({});
      }
      const id = this._prefix ? key.substring(this._prefix.length + 1) : key;
      return new Promise((resolve) => {
        fetch(`http://api.geonames.org/getJSON?geonameId=${encodeURIComponent(id)}&username=${this.user}`)
        .then(response => response.json())
        .then(json => {
          const output = `
            <h3 class="label">
              <a href="https://${json.wikipediaURL}" target="_blank">${json.toponymName}</a>
            </h3>
            <p class="fcode">${json.fcodeName} - ${json.adminName1}, ${json.countryName}</p>
          `;
          container.innerHTML = output;
          resolve({
            id: this._prefix ? `${this._prefix}:${json.geonameId}` : json.geonameId,
            strings: [json.toponymName]
          });
        });
      });
    }
}