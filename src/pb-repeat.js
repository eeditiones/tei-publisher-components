import { LitElement, html } from 'lit';
import { pbMixin } from './pb-mixin.js';

/**
 * Simple component to create repeatable form elements. It expects
 * an HTML template containing arbitrary HTML. For every repeated instance,
 * the template will be copied. All elements with a `name` attribute within the
 * copied template will be renamed to have an `[idx]` suffix denoting their position
 * within the instance list.
 *
 * The element stamps the instances into light DOM, so a form wrapping around it will see
 * the form controls. One can therefore use a normal form submit.
 *
 */
export class PbRepeat extends pbMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      /**
       * The initial number of (empty) instances to be shown
       * (1 by default).
       */
      initial: {
        type: Number,
      },
      _instances: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.initial = 1;
    this._instances = [];
  }

  connectedCallback () {
  super.connectedCallback()
  const tpl = this.querySelector('template')
  if (!tpl) return   // nothing to render yet; safe for smoke tests
  this._add()
}

  _computeInitial(params) {
    const sortedParams = Object.keys(params)
      .filter(key => /\[\d+\]$/.test(key))
      .sort();
    if (sortedParams.length > 0) {
      const max = sortedParams[sortedParams.length - 1].replace(/^.*\[(\d+)\]$/, '$1');
      this.initial = parseInt(max, 10);
    }
  }

  setData(params) {
    this._instances = [];
    this._computeInitial(params);
    for (let i = 0; i < this.initial; i++) {
      this._add(params);
    }
    this.requestUpdate();
  }

  add() {
    this._add();
    this.requestUpdate();
  }

  _add (params) {
    const tpl = this.querySelector('template')
    if (!tpl || !tpl.content) return
    const idx = this._instances.length + 1
    const clone = document.importNode(tpl.content, true)
    const wrapper = document.createElement('div')
    wrapper.appendChild(clone);
    wrapper.querySelectorAll('[name]').forEach(input => {
      // during inicialization of the default first instance
      // name property is not available (defined),
      // but can be reached as the attribute value
      // see https://github.com/eeditiones/tei-publisher-components/issues/29
      const name =
        input.name === undefined
          ? `${input.attributes.getNamedItem('name').nodeValue}[${idx}]`
          : `${input.name}[${idx}]`;
      if (params && params[name]) {
        if (input.type === 'checkbox' || input.type === 'radio') {
          input.checked = params[name] === input.value;
        } else {
          input.value = params[name];
        }
      }
      input.name = name;
    });
    this._instances.push(wrapper);
  }

  _renumber() {
    this._instances.forEach((instance, idx) => {
      instance.querySelectorAll('[name]').forEach(input => {
        const name = input.name.replace(/^(.*)\[\d+\]$/, '$1');
        input.name = `${name}[${idx + 1}]`;
      });
    });
  }

  delete(idx) {
    this._instances.splice(idx, 1);
    this._renumber();
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="instances">${this._instances.map(this.renderInstance.bind(this))}</div>
      <button
        class="pb-button pb-button--icon"
        type="button"
        aria-label="Add instance"
        title="Add instance"
        @click="${this.add}"
      >
        ${this._renderAddIcon()}
      </button>
    `;
  }

  renderInstance(instance, idx) {
    return html` <div class="instance">
      ${instance}
      <button
        class="pb-button pb-button--icon"
        type="button"
        aria-label="Delete instance"
        title="Delete instance"
        @click="${() => this.delete(idx)}"
      >
        ${this._renderDeleteIcon()}
      </button>
    </div>`;
  }

  _renderAddIcon() {
    return html`<svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M13 11V5h-2v6H5v2h6v6h2v-6h6v-2h-6z"></path>
    </svg>`;
  }

  _renderDeleteIcon() {
    return html`<svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1z"
      ></path>
    </svg>`;
  }

  createRenderRoot() {
    return this;
  }
}
customElements.define('pb-repeat', PbRepeat);
