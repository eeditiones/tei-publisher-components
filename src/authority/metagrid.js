/* eslint-disable class-methods-use-this */
import { html } from 'lit-element';
import { render } from 'lit-html';
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
                id: item.identifier,
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

  info(key, container) {
    const [slug, id] = key.split(':');
    return new Promise((resolve) => {
      fetch(`https://api.metagrid.ch/search?slug=${slug}&query=${id}`)
      .then(response => response.json())
      .then(json => {
        const item = json.resources[0];
        const output = html`
          <h3 class="label">
            <a href="https://${item.link.uri}" target="_blank">
              ${item.metadata.first_name} ${item.metadata.last_name}
            </a>
          </h3>
          <p>${item.metadata.birth_date} - ${item.metadata.death_date}</p>
        `;
        render(output, container);
        resolve({
          id: item.identifier,
          strings: [`${item.metadata.first_name} ${item.metadata.last_name}`]
        })
      });
    });
  }
}
