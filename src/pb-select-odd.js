import { LitElement, html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import { registry } from './urls.js';

/**
 * `pb-select-odd`: Switch between available ODDs.
 * It loads the list of ODDs from `components-odd.xql`.
 * Emits a `pb-refresh` event to subscribed views.
 *
 * @fires pb-refresh - Fires a refresh event to subscribed views after a different ODD has been selected for display.
 * @fires pb-update - When received, resets the ODD selected to the one passed in the event
 *
 */
export class PbSelectOdd extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      /** The label to show on top of the dropdown menu */
      label: {
        type: String,
      },
      /** The ODDs to show. */
      odds: {
        type: Array,
      },
      name: {
        type: String,
      },
      /** Currently selected ODD. If this property is set, the component
       * will immediately load the list of ODDs from the server and select
       * the given ODD.
       */
      odd: {
        type: String,
        notify: true,
      },
    };
  }

  constructor() {
    super();

    this.label = 'document.selectODD';
    this.odds = [];
    PbSelectOdd.__counter = (PbSelectOdd.__counter || 0) + 1;
    this._selectId = `pb-select-odd-${PbSelectOdd.__counter}`;
  }

  connectedCallback() {
    super.connectedCallback();

    this.subscribeTo('pb-update', this._onTargetUpdate.bind(this));
  }

  firstUpdated() {
    super.firstUpdated();
    waitOnce('pb-page-ready', () => {
      this._refresh();
    });
  }

  render() {
    return html`
      <label class="pb-select-odd__label" for="${this._selectId}">
        ${translate(this.label)}
      </label>
      <div class="pb-select-odd__control">
        <select
          id="${this._selectId}"
          class="pb-select-odd__select"
          name=${ifDefined(this.name || undefined)}
          .value=${this.odd ?? ''}
          @change=${this._handleChange}
        >
          ${this.odds.map(
            item => html`<option value="${item.name}">
              ${item.label}
            </option>`,
          )}
        </select>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .pb-select-odd__label {
        display: block;
        margin-bottom: 0.35rem;
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.6);
      }

      .pb-select-odd__control {
        position: relative;
        display: flex;
      }

      .pb-select-odd__select {
        width: 100%;
        min-width: 220px;
        padding: 0.45rem 2.25rem 0.45rem 0.75rem;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.16);
        background-image: linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 0.5) 50%),
          linear-gradient(135deg, rgba(0, 0, 0, 0.5) 50%, transparent 50%),
          linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
        background-position: calc(100% - 18px) calc(1em + 2px),
          calc(100% - 13px) calc(1em + 2px), calc(100% - 2.5rem) 0.5em;
        background-size: 5px 5px, 5px 5px, 1px 2.25em;
        background-repeat: no-repeat;
        font: inherit;
        color: inherit;
        line-height: 1.2;
      }

      .pb-select-odd__select:focus {
        outline: none;
        border-color: #1976d2;
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.16);
      }
    `;
  }

  updated(changed) {
    if (changed.has('odds') && (!this.odd || !this.odds.find(item => item.name === this.odd))) {
      const first = this.odds[0];
      if (first) {
        this.odd = first.name;
      }
    }
  }

  _handleChange(ev) {
    const select = ev.target;
    const newOdd = select.value;
    if (newOdd === this.odd) {
      return;
    }
    this.odd = newOdd;
    console.log('<pb-select-odd> Switching to ODD %s', this.odd);
    const doc = this.getDocument();
    if (doc) {
      doc.odd = this.odd;
    }
    registry.commit(this, { odd: this.odd });

    this.emitTo('pb-refresh', {
      odd: this.odd,
    });
  }

  _refresh() {
    let url;
    if (this.minApiVersion('1.0.0')) {
      url = `${this.getEndpoint()}/api/odd`;
    } else {
      url = `${this.getEndpoint()}/modules/lib/components-list-odds.xql`;
    }
    const absoluteUrl = this.toAbsoluteURL(url);
    let requestUrl;
    try {
      requestUrl = new URL(absoluteUrl);
    } catch (_) {
      requestUrl = new URL(absoluteUrl, window.location.href);
    }
    if (this.odd) {
      requestUrl.searchParams.set('odd', this.odd);
    }
    fetch(requestUrl.href, {
      method: 'GET',
      credentials: 'include',
      headers: { Accept: 'application/json' },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load ODDs (${response.status})`);
        }
        return response.json();
      })
      .then(data => {
        this._updateOdds(Array.isArray(data) ? data : []);
      })
      .catch(err => {
        console.error('<pb-select-odd> request failed', err);
        this._updateOdds([]);
      });
  }

  _updateOdds(list) {
    this.odds = list;
    if (list.length && (!this.odd || !list.find(item => item.name === this.odd))) {
      this.odd = list[0].name;
    }
  }

  _onTargetUpdate(ev) {
    let newOdd = ev.detail.data.odd;
    if (newOdd) {
      newOdd = newOdd.replace(/^(.*?)\.[^\.]+$/, '$1');
    }
    if (newOdd !== this.odd) {
      console.log('<pb-select-odd> Set current ODD from %s to %s', this.odd, newOdd);
    }
    this.odd = newOdd;
  }
}
customElements.define('pb-select-odd', PbSelectOdd);
