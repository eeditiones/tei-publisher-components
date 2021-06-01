import { Registry } from "./registry.js";

export class GeoNames extends Registry {

    get name() {
        return 'geonames.org';
    }
    
    constructor(config) {
        super(config);
        this.user = config.user;
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
                    id: item.geonameId,
                    label: item.toponymName,
                    details: `${item.fcodeName} - ${item.adminName1}, ${item.countryName}`,
                    link: `https://www.geonames.org/${item.geonameId}`,
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
}