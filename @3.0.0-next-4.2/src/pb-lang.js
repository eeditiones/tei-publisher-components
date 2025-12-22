import { LitElement, html, css } from 'lit';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { translate } from './pb-i18n.js';
import { themableMixin } from './theming.js';

/**
 * A dropdown for switching the interface language.
 *
 * @slot select - Optional select element to use for language selection. If not provided, a default one will be created.
 * @slot - unnamed default slot for dropdown menu options
 * @fires pb-i18n-language - Sends selected language
 * @fires pb-i18n-update - When received, sets the selected language to the one received from the event
 * @cssprop --pb-lang-input-color - Color of the text in the language field
 */
export class PbLang extends themableMixin(pbMixin(LitElement)) {
  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      ::slotted(*) {
        display: none;
      }
      details {
        position: relative;
        display: inline-block;
      }
      summary {
        color: var(--pb-lang-input-color, inherit);
        cursor: pointer;
        list-style: none;
        padding: 0.5em;
      }
      summary::-webkit-details-marker {
        display: none;
      }
      ul {
        position: absolute;
        top: 100%;
        left: 0;
        max-height: 80vh;
        overflow-y: auto;
        margin: 0;
        padding: 0;
        list-style: none;
        background: white;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        z-index: 1000;
      }
      li {
        list-style: none;
        padding: 0.5em 1em;
        cursor: pointer;
      }
      li:hover {
        background: #f0f0f0;
      }
    `;
  }

  static get properties() {
    return {
      ...super.properties,
      /**
       * The label for a language in the dropdown
       */
      label: {
        type: String,
      },
      selected: {
        type: String,
      },
      /**
       * How should the selected value be displayed?
       *
       * - `text` - Display the text content of the selected option
       * - other - Attribute name to use
       */
      display: {
        type: String,
        default: 'value',
      },
    };
  }

  constructor() {
    super();
    this.label = 'language';
    this.display = 'value';
  }

  connectedCallback() {
    super.connectedCallback();

    this.subscribeTo(
      'pb-i18n-update',
      ev => {
        this.selected = ev.detail.language.replace(/^([^-]+).*$/, '$1');
        this._syncOptions();
      },
      [],
    );
    waitOnce('pb-i18n-update', options => {
      this.selected = options.language.replace(/^([^-]+).*$/, '$1');
      this._syncOptions();
    });
  }

  render() {
    return html`
      <details>
        <summary aria-label="${translate(this.label)}" title="${translate(this.label)}"></summary>
        <ul></ul>
      </details>
      <slot @slotchange="${this._syncOptions}"></slot>
    `;
  }

  _syncOptions() {
    const ul = this.shadowRoot.querySelector('ul');
    const summary = this.shadowRoot.querySelector('summary');
    if (!ul || !summary) return;

    // Clear existing options
    ul.innerHTML = '';

    // Get all option elements from the light DOM
    const options = Array.from(this.querySelectorAll('option, paper-item'));
    options.forEach(option => {
      const li = document.createElement('li');
      li.textContent = option.textContent;
      li.dataset.value = option.value || option.getAttribute('value');

      if (li.dataset.value === this.selected) {
        summary.textContent = this.display === 'text' ? option.textContent : option[this.display];
      }

      li.addEventListener('click', () => {
        this._changed({ target: { value: li.dataset.value } });
        this.shadowRoot.querySelector('details').removeAttribute('open');
      });

      ul.appendChild(li);
    });
  }

  _changed(e) {
    const lang = e.target.value;
    if (lang !== this.selected) {
      console.log('<pb-lang> Language changed to %s', lang);
      this.emitTo('pb-i18n-language', { language: lang });
      this.selected = lang;
    }
  }
}
customElements.define('pb-lang', PbLang);
