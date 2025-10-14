import { LitElement, html, css, nothing } from 'lit';

/**
 * Displays a list of components to view.
 *
 * @fires pb-api-component if a component name is clicked
 */
export class PbComponentsList extends LitElement {
  static get properties() {
    return {
      json: {
        type: Object,
      },
      withDemo: {
        type: Boolean,
        attribute: 'with-demo',
      },
      _demos: {
        type: Object,
      },
    };
  }

  constructor() {
    super();
    this.json = null;
    this.withDemo = false;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    if (this.json) {
      const { tags } = this.json;
      tags.sort((a, b) => a.name.localeCompare(b.name));
      let elements = tags;
      if (this.withDemo) {
        elements = tags.filter(tag => tag.demo);
      }
      return html`
        <ul class="component-list">
          ${elements.map(
            tag => html` <li>
              <button
                type="button"
                class="component-item"
                @click="${() => PbComponentsList._viewComponent(tag)}"
              >
                <span class="component-name">${tag.name}</span>
                ${tag.demo ? html`<span class="badge">demo</span>` : nothing}
              </button>
            </li>`,
          )}
        </ul>
      `;
    }
    return html`<div>Loading ...</div>`;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .component-list {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li + li {
        margin-top: 4px;
      }

      .component-item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        padding: 0.5rem 0.75rem;
        border: none;
        border-radius: 6px;
        background: transparent;
        font: inherit;
        text-align: left;
        cursor: pointer;
        transition: background-color 120ms ease, color 120ms ease;
      }

      .component-item:hover,
      .component-item:focus-visible {
        background-color: rgba(33, 150, 243, 0.12);
        outline: none;
      }

      .component-name {
        flex: 1 1 auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .badge {
        flex: none;
        font-size: 0.75rem;
        line-height: 1;
        text-transform: uppercase;
        padding: 0.125rem 0.375rem;
        border-radius: 999px;
        background-color: rgba(33, 150, 243, 0.16);
        color: #1565c0;
      }
    `;
  }

  static _viewComponent(component, tab = 0) {
    document.dispatchEvent(
      new CustomEvent('pb-api-component', {
        detail: { component, tab },
      }),
    );
  }
}
customElements.define('pb-components-list', PbComponentsList);
