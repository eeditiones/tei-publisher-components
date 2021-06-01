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
      case 'organisation':
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
                id: item.gndIdentifier,
                label: item.preferredName,
                link: item.id,
                details: _details(item),
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
}
