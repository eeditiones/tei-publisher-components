/* eslint-disable class-methods-use-this */
/**
 * Abstract base class to be implemented by all connectors.
 */
export class Registry {
  constructor(config) {
    this._config = config;
    this._register = config.name;
  }

  get register() {
      return this._register;
  }

  /**
   * Return a descriptive name for the registry
   * 
   * @returns {String} registry name
   */
  get name() {
    return this._register;
  }

  /**
   * Query the authority and return a RegistryResult.
   *
   * @param {String} key the search string
   */
  query(key) {
    throw new Error('Method query not implemented');
  }

    /**
     * Return an XML fragment for the specified item to be inserted
     * into the document.
     *
     * @param item the item to output
     */
    format(item) {
        const options = {};
        Object.keys(this._config.properties).forEach((property) => {
            const template = this._config.properties[property];
            const value = template.replace(/\${(\w+)}/g, (match, p) => {
                let replacement;
                if (item[p]) {
                    replacement = item[p];
                } else {
                    switch (p) {
                        case 'register':
                            replacement = this._register;
                            break;
                        default:
                            replacement = this.name;
                            break;
                    }
                }
                return replacement || match;
            });
            options[property] = value;
        });
        return {
            tag: this._config.tag,
            properties: options
        };
    }
}
