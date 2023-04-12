import { LitElement, html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { pbMixin, waitOnce } from './pb-mixin.js';
import { themableMixin } from "./theming.js";
import { registry } from "./urls.js";

/**
 * Implements a list which is split into different categories 
 * (e.g. letters of the alphabet, countries ...).
 * Only one category is shown at a time unless the server reports
 * no categories (e.g. if the number of items to display goes below
 * a defined threshold).
 *
 * The server-side API endpoint should return a JSON object with two
 * properties:
 * 
 * + `categories`: an array of category descriptions: each item should 
 *  be an object with two properties: `category` - containing the name of the category
 *  and `count` - containing a count of items available under this category.
 * + `items`: an array with the items to be shown for the currently selected
 *  category. Those may contain HTML markup.
 * 
 * Sample JSON object for pb-split-list
 * ```javascript
 * {
 *    "items": [
 *        "<span><a href='Abegg-Arter Carl?category=A&amp;view=correspondents&amp;search='>Abegg-Arter, Carl</a><span class='dates'> (1836–1912)</span></span>",
 *        "<span><a href='Abegg Hans Heinrich?category=A&amp;view=correspondents&amp;search='>Abegg, Hans Heinrich</a><span class='dates'> (1805–1874)</span></span>",
 *        "<span><a href='Abegg Jakob?category=A&amp;view=correspondents&amp;search='>Abegg, Jakob</a><span class='dates'> (1801–1871)</span></span>",
 *        "<span><a href='Abys Raget?category=A&amp;view=correspondents&amp;search='>Abys, Raget</a><span class='dates'> (1790–1861)</span></span>",
 *        "<span><a href='Aebli Johann Peter?category=A&amp;view=correspondents&amp;search='>Aebli, Johann Peter</a><span class='dates'> (1804–1879)</span></span>",
 *        "<span><a href='Aepli Arnold Otto?category=A&amp;view=correspondents&amp;search='>Aepli, Arnold Otto</a><span class='dates'> (1816–1897)</span></span>",
 *        ...
 *    ],
 *    "categories": [
 *        {
 *            "category": "A",
 *            "count": 22
 *        },
 *        {
 *            "category": "B",
 *            "count": 77
 *        },
 *        {
 *            "category": "C",
 *            "count": 19
 *        },
 *      ...
 *    ]
 * }
 * ```
 * 
 * Sample Usage 
 * ```xml
 * <pb-split-list url="api/people" subforms="#options" selected="A" emit="transcription" subscribe="transcription"></pb-split-list>
 * ```
 * See https://www.briefedition.alfred-escher.ch/kontexte/personen/?category=A&search=&view=correspondents for a running sample. The source code of the webpage is here: https://github.com/stazh/briefedition-escher. Relevant files are: 
 * - [templates/index.html](https://github.com/stazh/briefedition-escher/blob/master/templates/index.html#L223) - usage of pb-timeline
 * - [modules/custom-api.json](https://github.com/stazh/briefedition-escher/blob/master/modules/custom-api.json#L1098) - `/api/people` endpoint delivering required JSON object
 * 
 * @cssprop --pb-categorized-list-columns - the number of columns to display (default: 2)
 * @fires pb-submit - when received, submit a request to the server and refresh
 * @fires pb-start-update - sent before the element sends the request to the server
 * @fires pb-end-update - sent after new content has been received
 */
export class PbSplitList extends themableMixin(pbMixin(LitElement)) {
    static get properties() {
        return {
            /**
             * Server-side API endpoint to retrieve items from
             */
            url: {
                type: String
            },
            /**
             * The initially selected category
             */
            selected: {
                type: String
            },
            /**
             * A CSS selector pointing to one or more `pb-custom-form`
             * instances. The element will collect additional parameters
             * from those forms and includes them in the request to the server
             */
            subforms: {
                type: String
            },
            _categories: {
                type: Array
            },
            ...super.properties
        };
    }

    constructor() {
        super();
        this._categories = [];
        this._params = {};
        this.selected = null;
        this.subforms = null;
        this._initialized = false;
    }

    connectedCallback() {
        super.connectedCallback();

        waitOnce('pb-page-ready', () => {
            this.selected = registry.state.category || this.selected;

            registry.subscribe(this, (state) => {
                console.log('<pb-split-list> popstate: %o', state);
                this.selected = state.category;
                this.submit();
            });
        });

        this.subscribeTo('pb-submit', this.load.bind(this));
    }

    firstUpdated() {
        super.firstUpdated();
        
        waitOnce('pb-page-ready', () => {
            this.load();
        });
    }

    submit() {
        this.load();
    }

    load() {
        const formParams = this._paramsFromSubforms({ category: this.selected });
        if (!this._initialized) {
            registry.replace(this, formParams);    
        } else {
            registry.commit(this, formParams);
        }
        this._initialized = true;

        const params = new URLSearchParams(formParams);

        const url = `${this.toAbsoluteURL(this.url)}?${params.toString()}`;
        console.log(`<pb-split-list> Fetching from URL: ${url}`);

        this.emitTo('pb-start-update');

        fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response.status);
        })
        .then((json) => {
            this._categories = json.categories;
            this.innerHTML = json.items.join('');
            this.emitTo('pb-end-update');
        })
        .catch((error) => {
            console.error(`<pb-split-list> Error caught: ${error}`);
            this.emitTo('pb-end-update');
        });
    }

    _selectCategory(ev, category) {
        ev.preventDefault();
        this.selected = category;
        this.load();
    }

    _paramsFromSubforms(params) {
        if (this.subforms) {
            document.querySelectorAll(this.subforms).forEach((form) => {
                if (form.serializeForm) {
                    Object.assign(params, form.serializeForm());
                }
            });
        }
        return params;
    }

    render() {
        return html`
            <header>
            ${
                this._categories.map((cat) =>
                    html`
                        <a part="${this.selected === cat.category ? 'active-category' : 'category'}" href="#${cat.category}" title="${cat.count}" class="${this.selected === cat.category ? 'active' : ''}"
                            @click="${(ev) => this._selectCategory(ev, cat.category)}">
                            ${cat.label ? unsafeHTML(cat.label) : cat.category}
                        </a>
                    `
                )
            }
            </header>
            <div id="items" part="items"><slot></slot></div>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }

            header {
                display: flex;
                flex-wrap: wrap;
                column-gap: 10px;
                width: 100%;
            }

            #items {
                display: grid;
                grid-template-columns: repeat(var(--pb-categorized-list-columns, 2), auto);
                grid-auto-rows: 1fr;
                column-gap: 10px;
                width: 100%;
            }

            [part=category], #items a {
                text-decoration: none;
                color: var(--pb-link-color);
            }

            [part=active-category] {
                text-decoration: none;
                color: var(--pb-highlight-color);
            }
        `;
    }
}
customElements.define('pb-split-list', PbSplitList);