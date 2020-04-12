import { LitElement, html, css } from 'lit-element';
import * as marked from 'marked/lib/marked.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import '@vaadin/vaadin-tabs/vaadin-tabs';
import '@vaadin/vaadin-tabs/vaadin-tab';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '../pb-code-highlight.js';

const renderer = new window.marked.Renderer();
renderer.code = function code(code, infostring, escaped) {
    return `<pb-code-highlight language="${infostring}" line-numbers>
        <template>${code}</template>
    </pb-code-highlight>`;
};

window.marked.setOptions({
    renderer
});

function _md(md) {
    if (!md) {
        return null;
    }
    return html`${unsafeHTML(window.marked(md))}`;
}

function _renderSection(title, data) {
    if (data) {
        return html`
            <section>
                <h2>${title}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.map((item) =>
            html`<tr><td>${item.name}</td><td>${_md(item.description)}</td></tr>`)
            }
                    </tbody>
                </table>
            </section>
            `;
    }
    return null;
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
            defaultTitle: {
                type: String,
                attribute: 'default-title'
            },
            _target: {
                type: String,
                reflect: true
            },
            _component: {
                type: Object
            },
            _tab: {
                type: Number
            }
        };
    }

    constructor() {
        super();
        this._tab = 0;
        this._component = null;
        this.defaultTitle = 'Webcomponents API';
    }

    show(component, tab = 0) {
        this._tab = tab;
        this._component = component;
    }

    clear() {
        this._component = null;
        this._tab = 0;
    }

    render() {
        return html`
            <app-header-layout>
                <app-header>
                    <app-toolbar>
                        ${this._component ?
                html`<h1 main-title>&lt;${this._component.name}&gt;<span class="path">${this._component.path}</span></h1>` :
                html`<h1 main-title>${this.defaultTitle}</h1>`
            }
                    </app-toolbar>
                </app-header>
                ${this._component ?
                html`<vaadin-tabs id="tabs" selected="${this._tab}">
                            <vaadin-tab @click="${this._showApi}">API</vaadin-tab>
                            ${this._renderDemoTabs()}
                        </vaadin-tabs>` :
                null
            }
                <main>
                ${this._tab === 0 ?
                html`
                        <div id="api">
                        ${this._component ?
                        html`
                                <p class="description">
                                    ${_md(this._component.description)}
                                </p>
                                ${_renderSection('Slots', this._component.slots)}
                                ${this._renderPropertiesSection()}
                                ${_renderSection('Events', this._component.events)}
                                ${_renderSection('CSS Properties', this._component.cssProperties)}
                            ` : null
                    }
                        </div>` :
                html`<iframe id="iframe" class="${this._tab > 0 ? '' : 'hidden'}" src="${this._getDemo()}"></iframe>`
            }
                </main>
            </app-header-layout>
        `;
    }

    _renderPropertiesSection() {
        if (this._component.properties) {
            return html`<section><h2>Properties</h2>${this._renderProperties()}</section>`;
        }
        return null;
    }

    _renderDemoTabs() {
        if (!this._component.demo) {
            return null;
        }
        return Object.values(this._component.demo).map((value, idx) =>
            html`<vaadin-tab @click="${() => this._showDemo(idx + 1)}">${value}</vaadin-tab>`
        );
    }

    _renderProperties() {
        return this._component.properties.map((prop) => {
            return html`
                <div class="property">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Attribute</th>
                                <th>Type | Default</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${prop.name}</td>
                                <td>${prop.attribute ? prop.attribute : prop.name}</td>
                                <td>${prop.type} | ${prop.default}</td>
                            </tr>
                        </tbody>
                    </table>
                    ${prop.description ? html`<p>${_md(prop.description)}</p>` : null}
                </div>
            `;
        });
    }

    _getDemo() {
        if (this._tab === 0) {
            return null;
        }

        const src = Object.keys(this._component.demo)[this._tab - 1];
        if (this._target) {
            return `${src}?_target=${this._target}`;
        }
        return src;
    }

    _showDemo(idx) {
        this._tab = idx;
        this._pushState();
    }

    _showApi() {
        this._tab = 0;
        this._pushState();
    }

    _pushState() {
        let url = `?component=${this._component.name}&tab=${this._tab}`;
        if (this._target) {
            url += `&_target=${this._target}`;
        }
        history.pushState({ component: this._component, tab: this._tab }, "view component", url);
    }

    static get styles() {
        return css`
            :host {
                display: block;
                height: 100vh;
            }

            main {
                height: calc(100vh - 108px);
                overflow: auto;
            }
            .hidden {
                display: none;
            }

            section {
                margin-bottom: 1.5em;
            }

            h1, h2 {
                font-family: "Oswald",Verdana,"Helvetica", sans-serif; 
                font-weight: 400;
                line-height: 1.2;
            }

            h1 {
                font-size: 28px;
                font-weight: normal;
            }

            .path {
                font-size: 16px;
                font-weight: 100;
                padding-left: 2em;
                vertical-align: middle;
            }
            app-toolbar {
                background-color: var(--pb-header-background-color);
                color: var(--pb-header-color);
                padding: 0;
            }

            app-header {
                width: 100%;
                height: 64px;
            }

            #api {
                margin-left: 10px;
                margin-right: 20px;
            }
            
            iframe {
                border: 0;
                width: 100%;
                height: 100%;
            }

            table {
                width: 100%;
                max-width: 840px;
            }

            .property {
                max-width: 840px;
                margin-bottom: 20px;
                padding-bottom: 8px;
                border-bottom: 1px solid #a0a0a0;
            }
            
            td {
                padding: 8px 4px;
            }
            .property td {
                padding: 0 4px 0 0;
            }
            td:nth-child(1) {
                width: 25%;
                color: #f6a523;
            }
            td:nth-child(2) {
                width: 25%;
            }
            td:nth-child(3) {
                width: 50%;
            }
            td p {
                margin: 0;
            }
            th {
                color: #909090;
                font-weight: normal;
                font-size: .85em;
                text-align: left;
            }
        `;
    }
}
customElements.define('pb-component-view', PbComponentView);