/* eslint-disable class-methods-use-this */
import { Registry } from './registry.js';

/**
 * A subset of the Reconciliation Service API (https://reconciliation-api.github.io/specs/)
 * that this connector needs to speak, covering both the 0.2 and 1.0-draft protocol
 * versions. The two differ in query batch shape, result batch shape, and how a
 * manifest advertises its `view`/`preview` URL templates.
 */

async function getServiceManifest(endpoint) {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`Reconciliation service manifest request failed: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

/**
 * Decide which protocol version to speak to this service.
 *
 * Prefer the most recent version the manifest's `versions` array advertises. Some
 * real-world 0.2 services omit `versions` entirely (it only became mandatory with
 * 1.0-draft), so fall back to sniffing the manifest shape: 1.0-draft requires a
 * `view` object, 0.2 requires `identifierSpace`/`schemaSpace`.
 */
function detectVersion(manifest) {
  const versions = Array.isArray(manifest?.versions) ? manifest.versions : [];
  if (versions.includes('1.0-draft') || versions.includes('1.0')) {
    return '1.0-draft';
  }
  if (versions.includes('0.2') || versions.includes('0.1')) {
    return '0.2';
  }
  if (manifest?.identifierSpace || manifest?.schemaSpace) {
    return '0.2';
  }
  return '1.0-draft';
}

/**
 * Replace a manifest URL template's id placeholder, whether written as the strict
 * 0.2 `{{id}}` or the looser 1.0-draft `{id}`/`{...id...}` pattern.
 */
function expandUrlTemplate(template, id) {
  const encoded = encodeURIComponent(id);
  if (template.includes('{{id}}')) {
    return template.replace('{{id}}', encoded);
  }
  return template.replace(/\{[^{}]*id[^{}]*\}/, encoded);
}

function buildQueryOneDraft(key, type, limit) {
  const query = {
    conditions: [{ matchType: 'name', propertyValue: key }],
  };
  if (type) query.type = type;
  if (limit) query.limit = Number(limit);
  return {
    init: {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ queries: [query] }),
    },
  };
}

function buildQueryZeroTwo(key, type, limit) {
  const query = { query: key };
  if (type) query.type = type;
  if (limit) query.limit = Number(limit);
  return {
    init: {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ queries: JSON.stringify({ q0: query }) }),
    },
  };
}

/**
 * Where to send a suggest/entity request, per the manifest's own `suggest.entity` field:
 * 1.0-draft advertises it as a bare boolean (meaning "available at the spec's fixed
 * "<endpoint>/suggest/entity" sub-path"); 0.2 advertises an explicit
 * "{service_url, service_path}" pair instead, since 0.2 predates that fixed-path convention.
 * Returns null if the manifest doesn't advertise entity suggestion at all.
 */
function suggestEntityUrl(endpoint, manifest) {
  const suggest = manifest?.suggest?.entity;
  if (!suggest) {
    return null;
  }
  if (typeof suggest === 'object' && suggest.service_url) {
    return `${suggest.service_url.replace(/\/$/, '')}${suggest.service_path || '/suggest/entity'}`;
  }
  return `${endpoint.replace(/\/$/, '')}/suggest/entity`;
}

/**
 * Where to send an /extend data-extension request - always a fixed sub-path of the
 * reconciliation endpoint itself in both protocol versions (unlike suggest, 0.2's manifest
 * doesn't advertise a separate service_url/service_path for it).
 */
function extendUrl(endpoint) {
  return `${endpoint.replace(/\/$/, '')}/extend`;
}

/**
 * Extract the ordered list of candidates from a result batch, regardless of
 * protocol version: 1.0-draft returns `{ results: [{ candidates }] }` (one entry
 * per submitted query, in order — this connector always submits exactly one);
 * 0.2 returns `{ q0: { result } }` (keyed by the query id we chose, "q0").
 */
function extractCandidates(version, json) {
  if (version === '1.0-draft') {
    return json?.results?.[0]?.candidates ?? [];
  }
  return json?.q0?.result ?? [];
}

/**
 * Extract propertyId -> first value from a data-extension response for a single requested id,
 * regardless of protocol version: 1.0-draft's "rows" is an array of {id, properties: [{id,
 * values: [{str}]}]}; 0.2's is an id-keyed object of propertyId-keyed value arrays directly (no
 * per-property "id" field, since the key already is the property id). Only the first value of a
 * (possibly multi-valued) property is used - a single value is what an XML attribute can
 * meaningfully hold.
 */
function extractExtendValues(version, json, id) {
  const values = {};
  if (version === '0.2') {
    const row = json?.rows?.[id];
    if (row) {
      Object.keys(row).forEach(propId => {
        const first = row[propId]?.[0]?.str;
        if (first !== undefined) values[propId] = first;
      });
    }
  } else {
    const row = (Array.isArray(json?.rows) ? json.rows : []).find(r => r.id === id);
    (row?.properties || []).forEach(prop => {
      const first = prop.values?.[0]?.str;
      if (first !== undefined) values[prop.id] = first;
    });
  }
  return values;
}

export class ReconciliationService extends Registry {
  constructor(configElem) {
    super(configElem);
    this.endpoint = configElem.getAttribute('endpoint');
    this.debug = configElem.hasAttribute('debug');
    this.type = configElem.getAttribute('type') || this._register;
    this.limit = configElem.getAttribute('limit');
    this._manifestReady = getServiceManifest(this.endpoint)
      .then(manifest => {
        this.manifest = manifest;
        this.version = detectVersion(manifest);
        if (this.debug) {
          console.log(
            "Reconciliation connector for register '%s' at <%s>: negotiated version '%s'. Manifest: %o",
            this._register,
            this.endpoint,
            this.version,
            manifest,
          );
        }
      })
      .catch(error => {
        console.error('Failed to load reconciliation service manifest from %s: %o', this.endpoint, error);
        this.manifest = {};
        this.version = '1.0-draft';
      });
  }

  /**
   * Undo the `${this._prefix}-` prefixing that query() adds to every returned candidate's id
   * (so it's a valid, collision-resistant xml:id fragment across multiple configured
   * authorities), to get back the raw id this service itself actually knows about. Needed
   * anywhere a raw id must be sent back to the service - info()'s preview lookup already did
   * this inline; fetchExtend()/getRecord() below reuse the same logic rather than duplicating
   * the substring arithmetic.
   *
   * NOTE: This assumes that `id` actually carries this connector's own prefix - it blindly
   * chops off `this._prefix.length + 1` characters regardless of what's actually there.
   * Custom's federated query() (custom.js) can hand this connector an id that came from a
   * different nested connector or the local register instead, and this method has no way to
   * detect that mismatch; it just returns a garbage substring! Callers that got the id from
   * somewhere other than this connector's own query() should not assume
   * _stripPrefix()/fetchExtend()/getRecord() will do anything sensible with it.
   */
  _stripPrefix(id) {
    return this._prefix ? id.substring(this._prefix.length + 1) : id;
  }

  /**
   * Fetch candidates via the service's lightweight /suggest/entity endpoint (type-ahead), if the
   * manifest advertises it. Returns null (not an empty array) when the service doesn't support
   * it, or the request itself fails, so callers can tell "no suggest support" apart from
   * "genuinely zero candidates" and fall back to a full batch /reconcile query either way.
   */
  async _suggestCandidates(key) {
    const url = suggestEntityUrl(this.endpoint, this.manifest);
    if (!url) {
      return null;
    }
    const params = new URLSearchParams({ prefix: key });
    if (this.type) params.set('type', this.type);
    if (this.limit) params.set('limit', this.limit);
    try {
      const response = await fetch(`${url}?${params.toString()}`);
      if (!response.ok) {
        return null;
      }
      const json = await response.json();
      const suggestions = Array.isArray(json?.result) ? json.result : [];
      // Reshape to look exactly like a full-query candidate item, minus fields /suggest/entity
      // simply doesn't return (score, match, description) - so the mapping below, and anything a
      // `fields` config might reference, doesn't need to know or care which endpoint was used.
      return suggestions.map(s => ({ id: s.id, name: s.name, type: s.notable }));
    } catch (error) {
      return null;
    }
  }

  /**
   * Query the authority and return a RegistryResult. Prefers the lighter-weight
   * /suggest/entity endpoint when the manifest advertises it (matching what OpenRefine's own
   * type-ahead uses), falling back to a full batch /reconcile query otherwise - either way this
   * method's own result shape stays identical, so nothing downstream needs to know which one
   * actually ran.
   *
   * @param {String} key the search string
   */
  async query(key) {
    await this._manifestReady;
    let candidates = await this._suggestCandidates(key);
    if (!candidates) {
      const { init } = this.version === '1.0-draft'
        ? buildQueryOneDraft(key, this.type, this.limit)
        : buildQueryZeroTwo(key, this.type, this.limit);

      const response = await fetch(this.endpoint, init);
      if (!response.ok) {
        throw new Error(`Reconciliation query failed: ${response.status} ${response.statusText}`);
      }
      const json = await response.json();
      candidates = extractCandidates(this.version, json);
    }

    const results = candidates.map(item => {
      let details;
      if (item.description) {
        details = item.description;
      } else if (Array.isArray(item.type)) {
        details = item.type.map(t => (typeof t === 'string' ? t : t.name)).join(', ');
      } else {
        details = '';
      }
      const link = this.manifest?.view?.url ? expandUrlTemplate(this.manifest.view.url, item.id) : item.id;
      return {
        register: this._register,
        id: this._prefix ? `${this._prefix}-${item.id}` : item.id,
        label: item.name,
        link,
        details,
        provider: this._prefix ? `Reconciliation (${this._prefix})` : 'Reconciliation',
        // Kept available (not discarded) as a `fields` mapping source - "score" - beyond the
        // id/label every connector already exposed. Undefined (silently omitted by
        // buildProperties) for suggest-sourced results, which don't carry a score.
        score: item.score,
      };
    });

    if (this.debug) {
      console.log('Reconciliation results (%s): %o', this.version, results);
    }
    return {
      totalItems: results.length,
      items: results,
    };
  }

  /**
   * Retrieve information about a registry entry and display it
   * using the given container.
   *
   * @param {String} id the id to look up
   * @param {HTMLElement} container reference to an element which should be used as container for displaying the information
   * @returns {Promise} a promise
   */
  async info(id, container) {
    if (!id) {
      return {};
    }
    await this._manifestReady;
    const rawId = this._stripPrefix(id);

    // 1.0-draft only requires manifest.preview to carry width/height, not a url — the
    // preview page itself lives at the fixed "<endpoint>/preview?id=..." sub-path.
    // Some services (incl. our own reconcile profile) also emit preview.url directly,
    // for both versions; prefer it when present, else fall back to the 1.0-draft
    // convention, else give up gracefully.
    let previewUrl;
    if (this.manifest?.preview?.url) {
      previewUrl = expandUrlTemplate(this.manifest.preview.url, rawId);
    } else if (this.manifest?.preview && this.version === '1.0-draft') {
      previewUrl = `${this.endpoint.replace(/\/$/, '')}/preview?id=${encodeURIComponent(rawId)}`;
    }

    if (!previewUrl) {
      container.innerHTML = "no 'preview' information in endpoint's manifest";
      return {};
    }

    try {
      const response = await fetch(previewUrl);
      const output = await response.text();
      container.innerHTML = output;
      return {
        id: this._prefix ? `${this._prefix}-${rawId}` : rawId,
      };
    } catch (error) {
      container.innerHTML = 'failed to load preview';
      throw error;
    }
  }

  /**
   * Fetch additional property values for a single matched entry via the reconciliation
   * protocol's data-extension endpoint (POST .../extend) - what makes an `extend:propId` source
   * in a `fields` mapping (see Registry.buildProperties) resolve to a real value, e.g. pulling a
   * GND identifier into its own output attribute alongside the plain name/id every connector
   * already exposes.
   *
   * @param {string} id the (possibly prefixed) id to fetch extended properties for
   * @param {string[]} propertyIds the property ids to fetch
   * @returns {Promise<Object.<string, string>>} promise resolving to a map of propertyId -> value
   */
  async fetchExtend(id, propertyIds) {
    await this._manifestReady;
    const rawId = this._stripPrefix(id);
    const url = this.version === '0.2' ? `${extendUrl(this.endpoint)}?version=0.2` : extendUrl(this.endpoint);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ids: [rawId],
        properties: propertyIds.map(propId => ({ id: propId })),
      }),
    });
    if (!response.ok) {
      throw new Error(`Reconciliation extend request failed: ${response.status} ${response.statusText}`);
    }
    const json = await response.json();
    return extractExtendValues(this.version, json, rawId);
  }

  /**
   * Retrieve a raw JSON record for the given id, shaped for the Custom connector's own select()
   * to POST onward as a new local-register entry (see custom.js) - without this, nesting
   * ReconciliationService inside Custom could copy a match's id into the local register but never
   * any of its other data, since Registry's own default getRecord() always rejects. Fetches every
   * property this type advertises via /extend/propose, then their actual values via /extend, in
   * one extra round trip each - acceptable here since getRecord() is only ever called once, right
   * when the user explicitly picks a match to copy into the local register. Deliberately doesn't
   * try to also fetch a display name here: doing so reliably would need id-based reconciliation
   * (1.0-draft's optional matchType: "id" condition), which isn't guaranteed by every conforming
   * service and isn't part of 0.2 at all - the id plus whatever /extend actually offers is already
   * a strict improvement over today's complete lack of local-register support for this connector.
   *
   * @param {string} id the (possibly prefixed) id to look up
   * @returns {Promise<Object>} promise resolving to a flat {id, ...extendedProperties} record
   */
  async getRecord(id) {
    await this._manifestReady;
    const rawId = this._stripPrefix(id);
    const proposeUrl = `${this.endpoint.replace(/\/$/, '')}/extend/propose?type=${encodeURIComponent(this.type || '')}`;
    const proposeResponse = await fetch(proposeUrl);
    if (!proposeResponse.ok) {
      throw new Error(`Reconciliation extend/propose request failed: ${proposeResponse.status} ${proposeResponse.statusText}`);
    }
    const proposed = await proposeResponse.json();
    const propertyIds = (proposed?.properties || []).map(p => p.id);
    const values = propertyIds.length > 0 ? await this.fetchExtend(id, propertyIds) : {};
    // TEI Publisher's own registers.xql (rapi:create-record/rapi:normalize-gender) expects a
    // "gender" property to be an array of {id, label} objects (matching GND's vocabulary shape,
    // e.g. id: "https://d-nb.info/standards/vocab/gnd/gender#male") and crashes with a bare
    // XPTY0004 if it's a plain string instead - which is exactly what a generic reconciliation
    // service's /extend response gives us (see extractExtendValues above). registers.xql falls
    // back to rendering id/label as-is for any id it doesn't specifically recognize, so this
    // doesn't need to match GND's vocabulary URIs, just the shape.
    if (typeof values.gender === 'string' && values.gender) {
      values.gender = [{ id: values.gender, label: values.gender }];
    }
    return { id: rawId, ...values };
  }
}
