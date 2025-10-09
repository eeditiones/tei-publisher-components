import { LitElement, html, css, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import './pb-icon.js';

let autocompleteId = 0;

const KEY_CODES = {
  ENTER: 'Enter',
  ESC: 'Escape',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
};

const FETCH_DEBOUNCE = 200;

function normalizeSuggestion(suggestion) {
  if (typeof suggestion === 'object' && suggestion) {
    const text = suggestion.text ?? suggestion.value ?? '';
    const value = suggestion.value ?? suggestion.text ?? '';
    return { text: String(text), value: String(value) };
  }
  const str = suggestion == null ? '' : String(suggestion);
  return { text: str, value: str };
}

function normalizeList(list = []) {
  return Array.isArray(list) ? list.map(normalizeSuggestion) : [];
}

export class PbAutocomplete extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      name: { type: String },
      value: { type: String },
      placeholder: { type: String, attribute: 'placeholder' },
      label: { type: String },
      source: { type: String },
      preload: { type: Boolean },
      suggestions: { type: Array },
      substring: { type: Boolean },
      icon: { type: String },
      helperText: { type: String, attribute: 'helper-text' },
      alwaysFloatLabel: { type: Boolean, attribute: 'always-float-label' },
      disabled: { type: Boolean, reflect: true },
      requestParams: { type: Object, attribute: false },
    };
  }

  constructor() {
    super();
    this.placeholder = 'search.placeholder';
    this.label = '';
    this.suggestions = [];
    this.substring = false;
    this.preload = false;
    this.icon = '';
    this.helperText = '';
    this.alwaysFloatLabel = false;
    this.disabled = false;
    this.lastSelected = null;
    this.value = '';
    this.name = '';
    this._hiddenInput = null;
    this._initialized = false;
    this._menuOpen = false;
    this._isFocused = false;
    this._inputValue = '';
    this._filteredSuggestions = [];
    this._highlightedIndex = -1;
    this._loading = false;
    this._pointerSelecting = false;
    this._fetchTimeout = null;
    this._abortController = null;
    this.requestParams = {};
    this._inputId = `pb-autocomplete-input-${++autocompleteId}`;
  }

  _resolveLabelText() {
    if (this.label) {
      return translate(this.label);
    }
    if (this.placeholder) {
      return translate(this.placeholder);
    }
    return '';
  }

  _resolveHelperText() {
    return this.helperText ? translate(this.helperText) : '';
  }

  get _input() {
    return this.shadowRoot?.getElementById(this._inputId) ?? null;
  }

  connectedCallback() {
    super.connectedCallback();
    this._inputValue = this.value || '';
  }

  firstUpdated() {
    if (!this._hiddenInput && this.name) {
      this._hiddenInput = document.createElement('input');
      this._hiddenInput.type = 'hidden';
      this._hiddenInput.name = this.name;
      this._hiddenInput.value = this.value || '';
      this.appendChild(this._hiddenInput);
    }

    waitOnce('pb-page-ready', () => {
      if (this.preload && this.source) {
        this._sendRequest();
      } else if (this.value && this.source) {
        this._sendRequest(this.value);
      } else {
        this._syncInputValueFromSuggestions();
        this._filterSuggestions();
      }
    });

    if (!this.source) {
      this._syncInputValueFromSuggestions();
      this._filterSuggestions();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.clearTimeout(this._fetchTimeout);
    if (this._abortController) {
      this._abortController.abort();
      this._abortController = null;
    }
  }

  updated(changed) {
    if (changed.has('suggestions')) {
      this._filterSuggestions();
      this._syncInputValueFromSuggestions();
    }
    if (changed.has('value')) {
      this._syncInputValueFromSuggestions();
      if (this._hiddenInput) {
        this._hiddenInput.value = this.value ?? '';
      }
    }
    if (changed.has('name')) {
      if (!this._hiddenInput && this.name) {
        this._hiddenInput = document.createElement('input');
        this._hiddenInput.type = 'hidden';
        this._hiddenInput.name = this.name;
        this._hiddenInput.value = this.value || '';
        this._hiddenInput.disabled = this.disabled;
        this.appendChild(this._hiddenInput);
      } else if (this._hiddenInput) {
        this._hiddenInput.name = this.name;
      }
    }
    if (changed.has('disabled')) {
      if (this.disabled) {
        this._closeMenu();
      }
      if (this._hiddenInput) {
        this._hiddenInput.disabled = this.disabled;
      }
    }
  }

  render() {
    const labelText = this._resolveLabelText();
    const helperText = this._resolveHelperText();
    const containerClasses = {
      'pb-input-container': true,
      'pb-input-container--focused': this._isFocused,
      'pb-input-container--filled': !!this._inputValue,
      'pb-input-container--has-prefix': !!this.icon,
      'pb-input-container--always-float': this.alwaysFloatLabel,
      'pb-input-container--disabled': this.disabled,
    };
    const activeId =
      this._menuOpen && this._highlightedIndex >= 0
        ? `pb-autocomplete-option-${this._highlightedIndex}`
        : undefined;
    const suggestions = this._filteredSuggestions;
    const showDropdown = this._menuOpen && (suggestions.length > 0 || this._loading);
    const labelId = labelText ? `${this._inputId}-label` : undefined;
    const helperId = helperText ? `${this._inputId}-helper` : undefined;
    const ariaLabel = !labelId && labelText ? labelText : undefined;
    const placeholderText =
      labelId || !this.placeholder ? '' : translate(this.placeholder);

    return html`
      <div class="autocomplete">
        <slot></slot>
        <div class="${classMap(containerClasses)}">
          ${this.icon
            ? html`<pb-icon class="pb-input-prefix" icon="${this.icon}" decorative></pb-icon>`
            : nothing}
          <input
            id="${this._inputId}"
            class="pb-input"
            type="search"
            part="input"
            name="query"
            autocomplete="off"
            .value=${this._inputValue}
            placeholder="${placeholderText}"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded="${this._menuOpen ? 'true' : 'false'}"
            aria-controls="pb-autocomplete-list"
            aria-activedescendant=${ifDefined(activeId)}
            aria-labelledby=${ifDefined(labelId)}
            aria-describedby=${ifDefined(helperId)}
            aria-label=${ifDefined(ariaLabel)}
            ?disabled=${this.disabled}
            @input=${this._handleInput}
            @keydown=${this._handleKeydown}
            @focus=${this._handleFocus}
            @blur=${this._handleBlur}
          />
          ${labelText
            ? html`<label class="pb-input-label" id="${labelId}" for="${this._inputId}">
                ${labelText}
              </label>`
            : nothing}
        </div>
        ${helperText
          ? html`<div class="pb-input-helper" id="${helperId}">${helperText}</div>`
          : nothing}
        ${showDropdown
          ? html`
              <ul
                id="pb-autocomplete-list"
                class="suggestions"
                part="suggestions"
                role="listbox"
                @mousedown=${this._handleSuggestionsPointerDown}
                @mouseup=${this._handleSuggestionsPointerUp}
              >
                ${this._loading
                  ? html`<li class="suggestion suggestion--status" role="status">Loading…</li>`
                  : nothing}
                ${!this._loading && suggestions.length === 0
                  ? html`<li class="suggestion suggestion--status" role="status">No results</li>`
                  : suggestions.map((item, index) => this._renderSuggestion(item, index))}
              </ul>
            `
          : nothing}
      </div>
    `;
  }

  _renderSuggestion(item, index) {
    const isActive = index === this._highlightedIndex;
    return html`
      <li
        id="pb-autocomplete-option-${index}"
        class=${classMap({
          suggestion: true,
          'suggestion--active': isActive,
        })}
        role="option"
        aria-selected="${isActive ? 'true' : 'false'}"
        @click=${() => this._selectSuggestion(item)}
        @mouseenter=${() => this._setHighlightedIndex(index)}
      >
        ${item.text}
      </li>
    `;
  }

  _handleInput(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    const input = event.currentTarget;
    this._inputValue = input.value;
    this.value = input.value;
    if (this._hiddenInput) {
      this._hiddenInput.value = this.value;
    }
    this._filterSuggestions();
    this._menuOpen = true;
    this._highlightedIndex = this._filteredSuggestions.length ? 0 : -1;
    this.requestUpdate();

    if (this.source && !this.preload) {
      this._scheduleFetch(this.value);
    }

    this.emitTo('pb-autocomplete-input', {
      text: this._inputValue,
      value: this.value,
    });
  }

  _handleFocus() {
    if (this.disabled) {
      return;
    }
    this._isFocused = true;
    if (this._filteredSuggestions.length) {
      this._menuOpen = true;
    }
  }

  _handleBlur() {
    this._isFocused = false;
    if (this._pointerSelecting) {
      return;
    }
    window.setTimeout(() => {
      if (!this._isFocused && !this._pointerSelecting) {
        this._closeMenu();
      }
    }, 100);
  }

  _handleSuggestionsPointerDown(event) {
    if (this.disabled) {
      return;
    }
    event.preventDefault();
    this._pointerSelecting = true;
  }

  _handleSuggestionsPointerUp() {
    if (this.disabled) {
      return;
    }
    this._pointerSelecting = false;
    this._input?.focus();
  }

  _handleKeydown(event) {
    if (this.disabled) {
      return;
    }
    const { key } = event;
    switch (key) {
      case KEY_CODES.ARROW_DOWN:
        event.preventDefault();
        this._openMenu();
        this._moveHighlight(1);
        break;
      case KEY_CODES.ARROW_UP:
        event.preventDefault();
        this._openMenu();
        this._moveHighlight(-1);
        break;
      case KEY_CODES.ENTER:
        if (this._menuOpen) {
          event.preventDefault();
        }
        this._handleEnter();
        break;
      case KEY_CODES.ESC:
        this._closeMenu();
        break;
      default:
        break;
    }
  }

  _handleEnter() {
    if (this.disabled) {
      return;
    }
    if (this._menuOpen && this._highlightedIndex >= 0) {
      const selected = this._filteredSuggestions[this._highlightedIndex];
      if (selected) {
        this._selectSuggestion(selected);
        return;
      }
    }

    if (!this.value) {
      return;
    }
    const match = this._findSuggestionByValue(this.value);
    if (match) {
      this._selectSuggestion(match);
    }
  }

  _openMenu() {
    if (this.disabled) {
      return;
    }
    if (!this._menuOpen) {
      this._menuOpen = true;
      this.requestUpdate();
    }
  }

  _closeMenu() {
    if (this._menuOpen) {
      this._menuOpen = false;
      this._highlightedIndex = -1;
      this.requestUpdate();
    }
  }

  _moveHighlight(delta) {
    if (this.disabled) {
      return;
    }
    const suggestions = this._filteredSuggestions;
    if (!suggestions.length) {
      this._highlightedIndex = -1;
      this.requestUpdate();
      return;
    }
    let next = this._highlightedIndex + delta;
    if (next < 0) {
      next = suggestions.length - 1;
    } else if (next >= suggestions.length) {
      next = 0;
    }
    this._setHighlightedIndex(next);
  }

  _setHighlightedIndex(index) {
    this._highlightedIndex = index;
    this.requestUpdate();
    this.updateComplete.then(() => {
      const option = this.shadowRoot?.getElementById(`pb-autocomplete-option-${index}`);
      option?.scrollIntoView({ block: 'nearest' });
    });
  }

  _selectSuggestion(suggestion) {
    if (this.disabled) {
      return;
    }
    const { text, value } = normalizeSuggestion(suggestion);
    this.lastSelected = text;
    this.value = value;
    this._inputValue = text;
    if (this._hiddenInput) {
      this._hiddenInput.value = value;
    }
    const input = this._input;
    if (input) {
      input.value = text;
    }
    this._closeMenu();
    this.emitTo('pb-autocomplete-selected', { text, value });
    this.emitTo('pb-autocomplete-input', { text, value });
  }

  _filterSuggestions() {
    const source = normalizeList(this.suggestions);
    if (!source.length) {
      this._filteredSuggestions = [];
      return;
    }
    const query = (this._inputValue || '').trim().toLowerCase();
    if (!query) {
      this._filteredSuggestions = source;
      return;
    }
    const filterFn = this.substring
      ? suggestion => suggestion.text.toLowerCase().includes(query)
      : suggestion => suggestion.text.toLowerCase().startsWith(query);
    this._filteredSuggestions = source.filter(filterFn);
  }

  _findSuggestionByValue(value) {
    if (!value) {
      return null;
    }
    const list = normalizeList(this.suggestions);
    const lower = String(value).toLowerCase();
    return list.find(item => item.value.toLowerCase() === lower || item.text.toLowerCase() === lower) ?? null;
  }

  _syncInputValueFromSuggestions() {
    if (!this.value) {
      this._inputValue = '';
      return;
    }
    const match = this._findSuggestionByValue(this.value);
    if (match) {
      this._inputValue = match.text;
    } else {
      this._inputValue = this.value;
    }
  }

  _scheduleFetch(query) {
    window.clearTimeout(this._fetchTimeout);
    this._fetchTimeout = window.setTimeout(() => {
      this._fetchTimeout = null;
      this._sendRequest(query);
    }, FETCH_DEBOUNCE);
  }

  async _sendRequest(query) {
    if (!this.source) {
      return;
    }
    const url = this.toAbsoluteURL(this.source);
    let requestUrl;
    try {
      requestUrl = new URL(url);
    } catch (_) {
      requestUrl = new URL(url, window.location.href);
    }
    const params = {
      ...(this.requestParams || {}),
      ...this._getParameters(),
    };
    if (query !== undefined && query !== null) {
      params.query = query;
    }
    Object.entries(params).forEach(([key, value]) => {
      if (value == null) {
        return;
      }
      if (Array.isArray(value)) {
        value.forEach(item => requestUrl.searchParams.append(key, item));
      } else {
        requestUrl.searchParams.set(key, value);
      }
    });

    if (this._abortController) {
      this._abortController.abort();
    }
    this._abortController = new AbortController();
    this._loading = true;
    this._menuOpen = true;
    this.requestUpdate();

    try {
      const response = await fetch(requestUrl.href, {
        method: 'GET',
        credentials: 'include',
        signal: this._abortController.signal,
        headers: {
          Accept: 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data = await response.json();
      this._applyRemoteSuggestions(data);
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('pb-autocomplete: request failed', error);
      }
    } finally {
      if (this._abortController?.signal.aborted) {
        // The current controller was aborted due to a subsequent request; keep loading state aligned.
        this._loading = false;
        return;
      }
      this._loading = false;
      this._abortController = null;
      this.requestUpdate();
    }
  }

  _applyRemoteSuggestions(data) {
    if (!Array.isArray(data)) {
      this.suggestions = [];
      this._filteredSuggestions = [];
      this._highlightedIndex = -1;
      this._menuOpen = false;
      this.requestUpdate();
      return;
    }
    this._initialized = true;
    this.suggestions = [...data];
    this._filteredSuggestions = normalizeList(data);
    this._highlightedIndex = this._filteredSuggestions.length ? 0 : -1;
    this._menuOpen = true;
    this._syncInputValueFromSuggestions();
    this.requestUpdate();
  }

  _getParameters() {
    const params = {};
    this.querySelectorAll('[name]').forEach(input => {
      params[input.name] = input.value;
    });
    return params;
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        flex-direction: column;
        position: relative;
        min-width: 240px;
        color: inherit;
      }

      .autocomplete {
        position: relative;
        width: 100%;
      }

      ::slotted(*) {
        display: block;
        margin-left: 10px;
      }

      .pb-input-container {
        position: relative;
        display: flex;
        align-items: center;
        gap: var(--pb-input-gap, 0.5rem);
        min-height: var(--pb-input-height, 56px);
        padding: 0 var(--pb-input-padding, 0.75rem);
        border-radius: var(--pb-input-radius, 8px);
        border: 1px solid var(--pb-input-border-color, rgba(0, 0, 0, 0.24));
        background: var(--pb-input-background, #fff);
        transition: border-color 120ms ease, box-shadow 120ms ease, background-color 120ms ease;
      }

      .pb-input-container--focused {
        border-color: var(--pb-primary-color, #1976d2);
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.16);
      }

      .pb-input-container--disabled {
        background: var(--pb-input-disabled-background, rgba(0, 0, 0, 0.04));
        border-color: var(--pb-input-disabled-border-color, rgba(0, 0, 0, 0.12));
        color: rgba(0, 0, 0, 0.38);
      }

      .pb-input-container--disabled .pb-input {
        cursor: not-allowed;
      }

      .pb-input-container--disabled .pb-input-label {
        color: rgba(0, 0, 0, 0.38);
      }

      .pb-input-prefix {
        color: rgba(0, 0, 0, 0.54);
      }

      .pb-input {
        flex: 1 1 auto;
        width: 100%;
        height: 100%;
        border: none;
        background: transparent;
        outline: none;
        font: inherit;
        color: inherit;
        padding: 0;
      }

      .pb-input::placeholder {
        color: var(--pb-input-placeholder-color, rgba(0, 0, 0, 0.4));
      }

      .pb-input-label {
        position: absolute;
        top: 50%;
        left: var(--pb-input-label-left, 0.75rem);
        transform: translateY(-50%);
        font-size: 0.95rem;
        color: var(--pb-input-label-color, rgba(0, 0, 0, 0.54));
        pointer-events: none;
        transition: transform 120ms ease, font-size 120ms ease, color 120ms ease, top 120ms ease;
        padding: 0 4px;
        background: var(--pb-input-background, #fff);
        line-height: 1;
      }

      .pb-input-container--has-prefix .pb-input-label {
        left: var(--pb-input-label-left-with-prefix, 2.5rem);
      }

      .pb-input-container--filled .pb-input-label,
      .pb-input-container--focused .pb-input-label,
      .pb-input-container--always-float .pb-input-label {
        top: 0;
        transform: translateY(-50%) scale(0.88);
        font-size: 0.75rem;
        color: var(--pb-primary-color, #1976d2);
      }

      .pb-input-helper {
        margin-top: 0.35rem;
        font-size: 0.8rem;
        color: rgba(0, 0, 0, 0.6);
      }

      .suggestions {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        right: 0;
        z-index: 10;
        margin: 0;
        padding: 4px 0;
        list-style: none;
        max-height: 240px;
        overflow-y: auto;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        background: var(--pb-search-suggestions-background, #fff);
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
      }

      .suggestion {
        padding: 0.5rem 0.75rem;
        cursor: pointer;
        font-size: 0.95rem;
        line-height: 1.2;
        color: var(--pb-search-suggestions-color, rgba(0, 0, 0, 0.8));
        transition: background-color 120ms ease, color 120ms ease;
      }

      .suggestion:hover,
      .suggestion--active {
        background-color: rgba(25, 118, 210, 0.12);
        color: #0d47a1;
      }

      .suggestion--status {
        cursor: default;
        color: rgba(0, 0, 0, 0.54);
      }

      .suggestion--status:hover,
      .suggestion--status.suggestion--active {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.54);
      }
    `;
  }
}

if (!customElements.get('pb-autocomplete')) {
  customElements.define('pb-autocomplete', PbAutocomplete);
}
