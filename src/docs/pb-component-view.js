import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import * as marked from 'marked/lib/marked.js';
import '../pb-code-highlight.js';

const renderer = new marked.Renderer();
renderer.code = function code(content, infoString) {
  return `<pb-code-highlight language="${infoString}" line-numbers>
        <template>${content}</template>
    </pb-code-highlight>`;
};

marked.setOptions({ renderer });

function _md(md) {
  if (!md) {
    return null;
  }
  return html`${unsafeHTML(marked.parse(md))}`;
}

function _renderSection(title, data, hasDefaults = false) {
  if (!data) {
    return null;
  }
  return html`
    <section>
      <h2>${title}</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            ${hasDefaults ? html`<th>Default</th>` : null}
          </tr>
        </thead>
        <tbody>
          ${data.map(
            item => html`<tr>
              <td>${item.name}</td>
              <td>${_md(item.description)}</td>
              ${hasDefaults ? html`<td>${item.default}</td>` : null}
            </tr>`,
          )}
        </tbody>
      </table>
    </section>
  `;
}

/**
 * Core viewer showing the element documentation and demos.
 *
 * @cssprop --pb-header-background-color - Background color of the header
 * @cssprop --pb-header-color - Color of header text
 */
export class PbComponentView extends LitElement {
  static get properties() {
    return {
      defaultTitle: { type: String, attribute: 'default-title' },
      _target: {
        type: String,
        reflect: true,
      },
      _api: {
        type: String,
        reflect: true,
      },
      _component: { type: Object },
      _tab: { type: Number },
    };
  }

  constructor() {
    super();
    this._tab = 0;
    this._component = null;
    this.defaultTitle = 'Webcomponents API';
  }

  /**
   * Show a component entry and optionally open a specific tab.
   * @param {any} component
   * @param {number} tab
   */
  show(component, tab = 0) {
    this._component = component;
    this._tab = tab;
  }

  clear() {
    this._component = null;
    this._tab = 0;
  }

  render() {
    const heading = this._component
      ? html`<h1>&lt;${this._component.name}&gt;<span class="path">${this._component.path}</span></h1>`
      : html`<h1>${this.defaultTitle}</h1>`;

    return html`
      <div class="viewer">
        <header class="viewer__header">
          ${heading}
        </header>
        ${this._component ? this._renderTabs() : null}
        <main class="viewer__body">
          ${this._component ? this._renderPanels() : null}
        </main>
      </div>
    `;
  }

  _renderTabs() {
    const demoLabels = this._component?.demo ? Object.values(this._component.demo) : [];
    return html`
      <div class="tabs" role="tablist" aria-label="Component sections">
        ${this._renderTab(0, 'API', 'tab-api', 'panel-api')}
        ${demoLabels.map((label, idx) => this._renderTab(idx + 1, label, `tab-demo-${idx + 1}`, `panel-demo-${idx + 1}`))}
      </div>
    `;
  }

  _renderTab(index, label, tabId, panelId) {
    const selected = this._tab === index;
    const classes = classMap({
      tab: true,
      'tab--active': selected,
    });
    return html`
      <button
        id="${tabId}"
        type="button"
        role="tab"
        class="${classes}"
        aria-selected="${selected ? 'true' : 'false'}"
        aria-controls="${panelId}"
        tabindex="${selected ? '0' : '-1'}"
        @click="${() => this._selectTab(index)}"
      >
        ${label}
      </button>
    `;
  }

  _renderPanels() {
    const apiPanel = html`
      <div
        id="panel-api"
        class="tabpanel ${classMap({ hidden: this._tab !== 0 })}"
        role="tabpanel"
        aria-labelledby="tab-api"
        ?hidden="${this._tab !== 0}"
      >
        ${this._renderApiContent()}
      </div>
    `;

    const demoPanels = this._component?.demo
      ? Object.keys(this._component.demo).map((_, idx) => {
          const index = idx + 1;
          const src = index === this._tab ? this._getDemo(index) : null;
          return html`
            <div
              id="panel-demo-${index}"
              class="tabpanel ${classMap({ hidden: this._tab !== index })}"
              role="tabpanel"
              aria-labelledby="tab-demo-${index}"
              ?hidden="${this._tab !== index}"
            >
              ${this._tab === index
                ? html`<iframe id="iframe" src="${src ?? ''}" title="Component demo"></iframe>`
                : null}
            </div>
          `;
        })
      : [];

    return [apiPanel, ...demoPanels];
  }

  _renderApiContent() {
    if (!this._component) {
      return null;
    }
    return html`
      <div class="api-content">
        <p class="description">${_md(this._component.description)}</p>
        ${_renderSection('Slots', this._component.slots)}
        ${this._renderPropertiesSection()}
        ${_renderSection('Events', this._component.events)}
        ${_renderSection('CSS Properties', this._component.cssProperties, true)}
        ${_renderSection('CSS Parts', this._component.cssParts)}
      </div>
    `;
  }

  _renderPropertiesSection() {
    if (!this._component?.properties) {
      return null;
    }
    return html`<section><h2>Properties</h2>${this._renderProperties()}</section>`;
  }

  _renderProperties() {
    return this._component.properties.map(
      prop => html`
        <div class="property">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Attribute</th>
                <th>Type</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${prop.name}</td>
                <td>${prop.attribute ? prop.attribute : prop.name}</td>
                <td>${prop.type}</td>
                <td>${prop.default ? prop.default : 'undefined'}</td>
              </tr>
            </tbody>
          </table>
          ${prop.description ? html`<p>${_md(prop.description)}</p>` : null}
        </div>
      `,
    );
  }

  _getDemo(index = this._tab) {
    if (index === 0 || !this._component?.demo) {
      return null;
    }
    const src = Object.keys(this._component.demo)[index - 1];
    if (this._target) {
      return `${src}?_target=${this._target}&_api=${this._api}`;
    }
    return src;
  }

  _selectTab(index) {
    if (this._tab === index) {
      return;
    }
    this._tab = index;
    this._pushState();
  }

  _showDemo(idx) {
    this._selectTab(idx);
  }

  _showApi() {
    this._selectTab(0);
  }

  _pushState() {
    if (!this._component) {
      return;
    }
    const url = `#${this._component.name}.${this._tab}`;
    history.pushState({ component: this._component, tab: this._tab }, 'view component', url);
  }

  static get styles() {
    return css`
      :host {
        display: block;
        height: 100%;
      }

      .viewer {
        display: grid;
        grid-template-rows: auto auto 1fr;
        height: 100%;
        background: #fff;
      }

      .viewer__header {
        background-color: var(--pb-header-background-color, #1a237e);
        color: var(--pb-header-color, #fff);
        padding: 0.75rem 1.5rem;
      }

      h1,
      h2 {
        font-family: 'Oswald', Verdana, 'Helvetica', sans-serif;
        font-weight: 400;
        line-height: 1.2;
        margin: 0;
      }

      h1 {
        font-size: 28px;
        font-weight: normal;
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        align-items: baseline;
      }

      .path {
        font-size: 16px;
        font-weight: 300;
      }

      .tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem;
        padding: 0.5rem 1rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        background: #fafafa;
      }

      .tab {
        border: none;
        background: transparent;
        padding: 0.4rem 0.9rem;
        border-radius: 999px;
        font: inherit;
        cursor: pointer;
        color: #3949ab;
        transition: background-color 120ms ease, color 120ms ease;
      }

      .tab:hover,
      .tab:focus-visible {
        background-color: rgba(63, 81, 181, 0.12);
        outline: none;
      }

      .tab--active {
        background-color: #3949ab;
        color: #fff;
      }

      .viewer__body {
        position: relative;
        min-height: 0;
        overflow: auto;
        background: #fff;
      }

      .tabpanel {
        height: 100%;
      }

      .tabpanel[hidden] {
        display: none !important;
      }

      .api-content {
        padding: 1rem 1.5rem 2rem;
      }

      iframe {
        border: 0;
        width: 100%;
        height: 100%;
      }

      section {
        margin-bottom: 1.5em;
      }

      table {
        width: 100%;
        max-width: 840px;
        border-collapse: collapse;
      }

      .property {
        max-width: 840px;
        margin-bottom: 20px;
        padding-bottom: 8px;
        border-bottom: 1px solid #a0a0a0;
      }

      th,
      td {
        padding: 8px 4px;
        text-align: left;
      }

      th {
        color: #909090;
        font-weight: normal;
        font-size: 0.85em;
      }

      td:nth-child(1) {
        color: #f6a523;
        width: 25%;
      }

      .property td:nth-child(1) {
        color: inherit;
      }

      td p {
        margin: 0;
      }
    `;
  }
}
customElements.define('pb-component-view', PbComponentView);
