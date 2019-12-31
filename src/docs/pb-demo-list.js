import { LitElement, html, css } from 'lit-element';
import '@polymer/app-layout';
import '@polymer/font-roboto/roboto.js';
import '@polymer/app-route/app-location.js';

/**
 *
 *
 * @customElement  pb-demo-list
 * @polymer
 * @demo demo/pb-demo-list.html
 * @appliesMixin pbMixin
 */
export class PbDemoList extends LitElement {
    static get properties() {
        return {
            url: {
                type: String
            },
            demos: {
                type: Array
            }
        };
    }

    constructor() {
        super();
        this.url = './analysis.json';
        this.demos = [];
    }

    connectedCallback() {
        super.connectedCallback();
        fetch(this.url).then(response => response.json().then(json => this._process(json)))
    }

    _process(json) {
        const elems = json.elements;
        const list = [];
        elems.forEach((elem) => {
            if (elem.demos && elem.demos.length > 0) {
                const meta = {
                    title: `<${elem.tagname}>`,
                    url: elem.demos[0].url
                };
                list.push(meta);
            }
        });
        this.demos = list;
    }

    render() {
        return html`
            <app-location @route-changed="${this._routeChanged}" use-hash-as-path></app-location>
            <app-drawer-layout fullbleed narrow>
                <app-drawer id="drawer" slot="drawer" swipe-open>
                ${ this.renderList()}
                </app-drawer>
                <app-header-layout has-scrolling-region>
                    <app-header slot="header" fixed>
                        <app-toolbar>
                            <h3>Demo Pages</h3>
                        </app-toolbar>
                    </app-header>
                    <main>
                        <iframe id="iframe"></iframe>
                </app-header-layout>
            </app-drawer-layout>
        `;
    }

    renderList() {
        return html`
            <ul>
            ${ this.demos.map((demo) => html`<li><a href="#${demo.url}">${demo.title}</a></li>`)}
            </ul>
        `;
    }

    _routeChanged(ev) {
        const { path } = ev.detail.value;
        if (path) {
            this.shadowRoot.getElementById('iframe').src = path;
        }
    }

    static get styles() {
        return css`
            :host {
                display: block;
                font-family: 'Roboto', 'Noto', sans-serif;
                -webkit-font-smoothing: antialiased;
            }
            app-toolbar {
                background-color: #35424b;
                color: white;
            }
            app-drawer {
            }
            h3 {
                font-size: 20px;
                font-weight: 500;
                line-height: 28px;
            }
            #iframe {
                height: 100%;
                width: 100%;
                border: none;
            }
            ul {
                list-style: none;
                margin: 0;
                padding: 20px 8px;
                height: 100vh;
                overflow: auto;
            }
            li {
                margin-bottom: 1em;
            }
            a {
                text-decoration: none;
            }
        `;
    }
}
customElements.define('pb-demo-list', PbDemoList);