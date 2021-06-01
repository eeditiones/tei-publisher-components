import { Registry } from './registry.js';

export class Metagrid extends Registry {

  get name() {
    return this._register;
  }

  async query(key) {
    const query = key.replace(/[^\w\s]+/g, '');
    const results = [];
    const url = `https://api.metagrid.ch/search?query=${encodeURIComponent(query)}`;
    
    return new Promise((resolve) => {
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            json.resources.forEach(item => {
              const name = `${item.metadata.first_name} ${item.metadata.last_name}`;
              const result = {
                register: this._register,
                id: item.concordance.id,
                label: name,
                details: `${item.metadata.birth_date} - ${item.metadata.death_date}`,
                link: item.link.uri,
                provider: item.provider.slug
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
}
