/* eslint-disable class-methods-use-this */
import { Registry } from './registry.js';

function _details(item) {
  let professions = '';
  if (item.professionOrOccupation && item.professionOrOccupation.length > 0) {
    professions = item.professionOrOccupation.map(p => p.label).join(', ');
  }
  if (item.biographicalOrHistoricalInformation) {
      professions = `${professions}; ${item.biographicalOrHistoricalInformation.join(', ')}`;
  }
  const dates = [];
  if (item.dateOfBirth && item.dateOfBirth.length > 0) {
    dates.push(item.dateOfBirth[0]);
  }
  if (item.dateOfDeath && item.dateOfDeath.length > 0) {
    dates.push(' - ');
    dates.push(item.dateOfDeath[0]);
  }
  if (dates.length > 0) {
    return `${dates.join('')}${professions ? `; ${professions}` : ''}`;
  }
  return professions;
}

/**
 * Uses https://lobid.org to query the German GND
 */
export class GND extends Registry {

  query(key) {
    const results = [];
    let filter;
    switch (this._register) {
      case 'place':
        filter = 'PlaceOrGeographicName';
        break;
      case 'term':
        filter = 'SubjectHeading';
        break;
      case 'organization':
        filter = 'CorporateBody';
        break;
      default:
        filter = 'Person';
        break;
    }
    return new Promise((resolve) => {
        fetch(`https://lobid.org/gnd/search?q=${encodeURIComponent(key)}&filter=%2B%28type%3A${filter}%29&format=json&size=100`)
        .then((response) => response.json())
        .then((json) => {
            json.member.forEach((item) => {
            const result = {
                register: this._register,
                id: (this._prefix ? `${this._prefix}-${item.gndIdentifier}` : item.gndIdentifier),
                label: item.preferredName,
                link: item.id,
                details: _details(item),
                strings: [item.preferredName].concat(item.variantName),
                provider: 'GND'
            };
            results.push(result);
            });
            resolve({
                totalItems: json.totalItems,
                items: results,
            });
        })
    })
  }

  /**
   * Retrieve a raw JSON record for the given key as returned by the endpoint.
   *
   * @param {string} key the key to look up
   * @returns {Promise<any>} promise resolving to the JSON record returned by the endpoint
   */
  async getRecord(key) {
    const id = this._prefix ? key.substring(this._prefix.length + 1) : key;
    return fetch(`https://lobid.org/gnd/${id}.json`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject();
      })
      .then((json) => {
        const output = Object.assign({}, json);
        output.name = json.preferredName;
        output.link = json.id;
        if (json.dateOfBirth && json.dateOfBirth.length > 0) {
          output.birth = json.dateOfBirth[0];
        }
        if (json.dateOfDeath && json.dateOfDeath.length > 0) {
          output.death = json.dateOfDeath[0];
        }
        if (json.biographicalOrHistoricalInformation) {
          output.note = json.biographicalOrHistoricalInformation.join('; ');
        }
        if (json.professionOrOccupation && json.professionOrOccupation.length > 0) {
          output.profession = json.professionOrOccupation.map((prof) => prof.label);
        }
        if (json.preferredNameEntityForThePerson && json.preferredNameEntityForThePerson.length > 0) {
          json.preferredNameEntityForThePerson.map((fullName) => {
            output.surname = fullName.surname[0];
            output.forename = fullName.forename[0]
          })
        }
        return output;
      })
      .catch(() => Promise.reject());
  }

  info(key, container) {
    if (!key) {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      this.getRecord(key)
      .then((json) => {
        let info;
        if (json.type.indexOf('SubjectHeading') > -1) {
          info = this.infoSubject(json);
        } else if (json.type.indexOf('AuthorityResource') > -1) {
          info = this.infoPerson(json);
        }
        const output = `
          <h3 class="label">
            <a href="https://${json.id}" target="_blank"> ${json.preferredName} </a>
          </h3>
          ${info}
        `;
        container.innerHTML = output;
        resolve({
          id: this._prefix ? `${this._prefix}-${json.gndIdentifier}` : json.gndIdentifier,
          strings: [json.preferredName].concat(json.variantName)
        });
      })
      .catch(() => reject());
    });
  }

  infoPerson(json) {
    const professions = json.professionOrOccuption ? json.professionOrOccupation.map((prof) => prof.label) : [];
    return `<p>${json.dateOfBirth} - ${json.dateOfDeath}</p>
      <p>${professions.join(' ')}</p>`;
  }

  infoSubject(json) {
    if (json.broaderTermGeneral) {
      const terms = json.broaderTermGeneral.map((term) => term.label);
      return `<p>${terms.join(', ')}</p>`;
    }
    return '';
  }
}
