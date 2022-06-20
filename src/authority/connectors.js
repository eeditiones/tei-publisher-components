import { Metagrid } from './metagrid.js';
import { GeoNames } from './geonames.js';
import { Airtable } from './airtable.js';
import { MZP } from './mzp.js';
import { GND } from './gnd.js';
import { KBGA } from './kbga.js';
import { GF } from './gf.js';
import { ReconciliationService } from './reconciliation.js';
import { Custom } from './custom.js';

export function createConnectors(endpoint, root) {
  const authorities = [];
  root.querySelectorAll(':scope > pb-authority').forEach(configElem => {
    const connector = configElem.getAttribute('connector');
    let instance;
    switch (connector) {
      case 'GND':
        instance = new GND(configElem);
        break;
      case 'GeoNames':
        instance = new GeoNames(configElem);
        break;
      case 'Airtable':
        instance = new Airtable(configElem);
        break;
      case 'MZP':
        instance = new MZP(configElem);
        break;
      case 'KBGA':
        instance = new KBGA(configElem);
        break;
      case 'GF':
        instance = new GF(configElem);
        break;
      case 'ReconciliationService':
        instance = new ReconciliationService(configElem);
        break;
      case 'Custom':
        instance = new Custom(endpoint, configElem);
        break;
      default:
        instance = new Metagrid(configElem);
        break;
    }
    authorities.push(instance);
  });
  return authorities;
}
