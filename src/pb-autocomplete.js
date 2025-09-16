import { LitElement, html, css } from 'lit'
import { pbMixin, waitOnce } from './pb-mixin.js'
import { translate } from './pb-i18n.js'

// Ensure required custom elements are defined exactly once, even if this module is loaded twice via different URLs
if (!customElements.get('paper-input')) {
  await import('@polymer/paper-input/paper-input.js')
}
if (!customElements.get('iron-ajax')) {
  await import('@polymer/iron-ajax/iron-ajax.js')
}
if (!customElements.get('iron-icon')) {
  await import('@polymer/iron-icon/iron-icon.js')
}
// iconset is not a custom element; safe to import once for icons metadata
await import('@polymer/iron-icons/iron-icons.js')
if (!customElements.get('paper-autocomplete-suggestions')) {
  await import('@cwmr/paper-autocomplete/paper-autocomplete-suggestions.js')
}

function _query (datasource, query) {
  const q = String(query || '').toLowerCase()
  const queryResult = []
  datasource.forEach(item => {
    let objText
    let objValue

    if (typeof item === 'object') {
      objText = item.text
      objValue = item.value
    } else {
      objText = String(item)
      objValue = objText
    }

    if (objText.toLowerCase().indexOf(q) > -1) {
      queryResult.push({ text: objText, value: objValue })
    }
  })
  return queryResult
}

/**
 * Provides an input with attached autocomplete. The autocomplete suggestions can be read
 * either from a static list or a remote endpoint to which the current user input is sent.
 *
 * @cssprop --pb-search-label-color - Color of the label and underline
 * @cssprop --pb-search-input-color - Text color for input field
 * @cssprop --pb-search-focus-color - Color for label and underline if input has focus
 * @cssprop --pb-search-suggestions-color - Color for the labels shown in the suggestions dropdown
 * @cssprop --pb-search-suggestions-background - Background for the suggestions dropdown
 * @slot - default unnamed slot
 */
export class PbAutocomplete extends pbMixin(LitElement) {
  static get properties () {
    return {
      ...super.properties,
      /** Name of the form field which will be submitted */
      name: { type: String },
      /** Value of the form field which will be submitted */
      value: { type: String },
      /** Placeholder to display if field is empty */
      placeholder: { type: String, attribute: 'placeholder' },
      /** Optional URL to query for suggestions. If relative, it is interpreted
       * relative to the endpoint defined on a surrounding `pb-page`. */
      source: { type: String },
      /** If set, preload entire list from `source` on init */
      preload: { type: Boolean },
      /** Static suggestions list (strings or {text,value} objects) */
      suggestions: { type: Array },
      /** If true, substring match; else prefix */
      substring: { type: Boolean },
      /** Optional icon name displayed in prefix */
      icon: { type: String }
    }
  }

  constructor () {
    super()
    this.placeholder = 'search.placeholder'
    this.suggestions = []
    this.lastSelected = null
    this.preload = false
    this.substring = false
    this._hiddenInput = null
    this._initialized = false
  }

  connectedCallback () {
    super.connectedCallback()
  }

  firstUpdated () {
    const inIronForm = this.closest('iron-form,pb-search,pb-custom-form')
    if (!inIronForm) {
      this._hiddenInput = document.createElement('input')
      this._hiddenInput.type = 'hidden'
      this._hiddenInput.name = this.name
      this.appendChild(this._hiddenInput)
    }

    const autocomplete = this.shadowRoot.getElementById('autocomplete')
    autocomplete.addEventListener('autocomplete-change', this._autocomplete.bind(this))

    if (this.preload && this.source) {
      if (this.substring) {
        autocomplete.queryFn = _query
      }
      waitOnce('pb-page-ready', () => {
        this._sendRequest()
      })
    } else if (this.value) {
      if (this.source) {
        waitOnce('pb-page-ready', () => {
          this._sendRequest(this.value)
        })
      } else {
        const input = this.shadowRoot.getElementById('search')
        const value = this.suggestions.find(suggestion => {
          if (suggestion && typeof suggestion === 'object' && 'text' in suggestion) {
            return suggestion.value === this.value
          }
          return suggestion === this.value
        })
        if (value) {
          input.value = value.text || value
          if (this._hiddenInput) this._hiddenInput.value = value.value || value
        }
        if (this._hiddenInput) this._hiddenInput.value = this.value
      }
    }
  }

  render () {
    return html`
      <custom-style>
        <style>
          :host {
            --suggestions-item: {
              color: var(--pb-search-suggestions-color, black);
            };
            --suggestions-wrapper: {
              background: var(--pb-search-suggestions-background, white);
            };
          }
        </style>
      </custom-style>
      <slot></slot>
      <paper-input
        id="search"
        type="search"
        name="query"
        @keyup=${this._setInput}
        label="${translate(this.placeholder)}"
        always-float-label
      >
        ${this.icon ? html`<iron-icon icon="${this.icon}" slot="prefix"></iron-icon>` : null}
      </paper-input>
      <paper-autocomplete-suggestions
        id="autocomplete"
        for="search"
        .source=${this.suggestions}
        ?remote-source=${!this.preload && this.source}
        @autocomplete-selected=${this._autocompleteSelected}
      ></paper-autocomplete-suggestions>

      <iron-ajax
        id="autocompleteLoader"
        verbose
        handle-as="json"
        method="get"
        with-credentials
        @response=${this._updateSuggestions}
      ></iron-ajax>
    `
  }

  static get styles () {
    return css`
      :host {
        --paper-input-container-color: var(--pb-search-label-color, var(--paper-grey-500, #303030));
        --paper-input-container-input-color: var(
          --pb-search-input-color,
          var(--pb-color-primary, #000000)
        );
        --paper-input-container-focus-color: var(
          --pb-search-focus-color,
          var(--paper-grey-500, #303030)
        );

        display: flex;
        align-items: center;
      }

      ::slotted(*) {
        display: block;
        margin-left: 10px;
      }
    `
  }

  _autocomplete () {
    const search = this.shadowRoot.getElementById('search')
    this._sendRequest(search.value)
  }

  _sendRequest (query) {
    const loader = this.shadowRoot.getElementById('autocompleteLoader')
    loader.url = this.toAbsoluteURL(this.source)

    const params = this._getParameters()
    params.query = query
    loader.params = params
    loader.generateRequest()
  }

  _updateSuggestions () {
    const loader = this.shadowRoot.getElementById('autocompleteLoader')
    if (this._initialized) {
      const autocomplete = this.shadowRoot.getElementById('autocomplete')
      if (loader.lastResponse) {
        this.suggestions = loader.lastResponse
        autocomplete.suggestions(this.suggestions)
      }
    } else if (loader.lastResponse) {
      const suggestions = loader.lastResponse

      const input = this.shadowRoot.getElementById('search')
      const value = suggestions.find(suggestion => {
        if (suggestion && typeof suggestion === 'object' && 'text' in suggestion) {
          return suggestion.value === this.value
        }
        return suggestion === this.value
      })
      if (value) {
        input.value = value.text || value
        if (this._hiddenInput) this._hiddenInput.value = value.value || value
      } else if (this._hiddenInput) {
        this._hiddenInput.value = this.value
      }

      if (this.preload) {
        this.suggestions = suggestions
      }
    }
    this._initialized = true
  }

  _getParameters () {
    const params = {}
    const inputs = this.querySelectorAll('[name]')
    inputs.forEach(input => {
      params[input.name] = input.value
    })
    return params
  }

  _autocompleteSelected (ev) {
    const { text, value } = ev.detail
    this.lastSelected = text
    const input = this.shadowRoot.getElementById('search')
    input.value = text
    this.value = value
    if (this._hiddenInput) this._hiddenInput.value = this.value
    this.emitTo('pb-autocomplete-selected', { text, value })
  }

  _setInput (ev) {
    const input = this.shadowRoot.getElementById('search')
    this.value = input.value

    if (this._hiddenInput) this._hiddenInput.value = this.value

    if (ev.keyCode === 13) {
      const entry = this.suggestions.find(suggestion => {
        if (suggestion && typeof suggestion === 'object' && 'text' in suggestion) {
          return suggestion.value === this.value
        }
        return suggestion === this.value
      })
      if (!entry) return
      if (entry.value) {
        this.emitTo('pb-autocomplete-selected', { text: entry.text, value: entry.value })
      } else {
        this.emitTo('pb-autocomplete-selected', { text: entry, value: entry })
      }
    }
  }
}

if (!customElements.get('pb-autocomplete')) {
  customElements.define('pb-autocomplete', PbAutocomplete)
}
