/* eslint-disable class-methods-use-this */

/**
 * Default target=source field mapping used when a <pb-authority> does not configure its own
 * `fields` attribute: reproduces the connector's previous, hardcoded behaviour of writing the
 * matched entry's id into a single "key" property. Kept as one shared constant so every
 * connector's default is guaranteed identical and stays in sync if the default ever changes.
 */
const DEFAULT_FIELDS = 'key=id';

/**
 * Turn a free-text value (e.g. a candidate's label/name) into a token safe to use as an XML
 * NMTOKEN-like id/attribute value.
 *
 * @param {string} value
 * @returns {string}
 */
export function slugify(value) {
  return String(value)
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Parses a `fields` config attribute value ("target=source,target=source,...") into an array of
 * { target, source } pairs. Falls back to DEFAULT_FIELDS when omitted/empty, so a <pb-authority>
 * with no `fields` attribute at all reproduces exactly today's single-field behaviour.
 *
 * @param {string} raw
 * @returns {{target: string, source: string}[]}
 */
export function parseFieldsConfig(raw) {
  const spec = raw && raw.trim() ? raw : DEFAULT_FIELDS;
  return spec
    .split(',')
    .map(pair => pair.trim())
    .filter(pair => pair.length > 0)
    .map(pair => {
      const [target, source] = pair.split('=').map(s => s.trim());
      return { target, source };
    })
    .filter(({ target, source }) => target && source);
}

/**
 * Abstract base class to be implemented by all connectors.
 */
export class Registry {
  constructor(configElem) {
    this._prefix = configElem.getAttribute('prefix');
    this._config = {
      name: configElem.getAttribute('name'),
      properties: {},
    };
    this._register = this._config.name;
    this._fields = parseFieldsConfig(configElem.getAttribute('fields'));
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

  set name(name) {
    this._register = name;
  }

  get editable() {
    return false;
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
   * Retrieve information about a registry entry and display it
   * using the given container.
   *
   * @param {String} id the id to look up
   * @param {HTMLElement} container reference to an element which should be used as container for displaying the information
   * @returns {Promise} a promise
   */
  info(id, container) {
    container.innerHTML = 'not implemented';
    return Promise.resolve();
  }

  /**
   * Return an XML fragment for the specified item to be inserted
   * into the document.
   *
   * @param item the item to output
   */
  async select(item) {
    /* do nothing by default */
    return Promise.resolve(item);
  }

  /**
   * Retrieve a raw JSON record for the given key as returned by the endpoint.
   *
   * @param {string} key the key to look up
   * @returns {Promise<any>} promise resolving to the JSON record returned by the endpoint
   */
  async getRecord(key) {
    return Promise.reject();
  }

  /**
   * Fetch additional property values for a single matched entry beyond what `query()` already
   * returned (e.g. a reconciliation service's data-extension endpoint). Connectors that have no
   * such capability simply return an empty object so that a respective (mistaken) field config
   * is silently omitted.
   *
   * @param {string} id the id to fetch extended properties for
   * @param {string[]} propertyIds the property ids to fetch
   * @returns {Promise<Object.<string, *>>} promise resolving to a map of propertyId -> value
   */
  async fetchExtend(id, propertyIds) {
    return {};
  }

  /**
   * Build the `properties` map to attach to a selected match, per this connector's `fields`
   * config (see parseFieldsConfig). A source of `id`/`label`/`type`/`score`
   * is read directly off the candidate `item` (as returned by this connector's own `query()`);
   * a source of `extend:propId` is fetched via one batched `fetchExtend()` call. Only the `label`
   * source is slug-escaped (see `slugify`) - `id`/`type`/`score`/extend-sourced values are used
   * as-is, since they are typically already-safe tokens or, for extend properties, may be URIs
   * that slugifying would corrupt. A mapping whose source has no value on this particular item
   * (e.g. an unset `extend:` property) is silently omitted, not written as an empty string.
   *
   * @param {Object} item one result item as returned by this connector's query()
   * @returns {Promise<Object.<string, string>>} promise resolving to the properties map
   */
  async buildProperties(item) {
    const extendSources = [
      ...new Set(
        this._fields
          .map(({ source }) => source)
          .filter(source => source.startsWith('extend:'))
          .map(source => source.slice('extend:'.length)),
      ),
    ];
    const extended = extendSources.length > 0 ? await this.fetchExtend(item.id, extendSources).catch(() => ({})) : {};

    const properties = {};
    this._fields.forEach(({ target, source }) => {
      const value = source.startsWith('extend:') ? extended[source.slice('extend:'.length)] : item[source];
      if (value === undefined || value === null || value === '') {
        return;
      }
      properties[target] = source === 'label' ? slugify(value) : value;
    });
    return properties;
  }
}
