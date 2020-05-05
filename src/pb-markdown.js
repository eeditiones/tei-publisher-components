import { LitElement, html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { pbMixin } from './pb-mixin';
import * as marked from 'marked/lib/marked.js';
import './pb-code-highlight.js';

const renderer = new window.marked.Renderer();
renderer.code = function code(code, infostring, escaped) {
    return `<pb-code-highlight language="${infostring}" line-numbers>
        <template>${code}</template>
    </pb-code-highlight>`;
};

window.marked.setOptions({
    renderer
});

function removeIndent(input) {
    const indents = input.match(/^[^\S]*(?=\S)/gm);

    if (!indents || !indents[0].length)
        return input;

    indents.sort((a, b) => a.length - b.length);

    if (!indents[0].length)
        return input;

    return input.replace(RegExp('^' + indents[0], 'gm'), '');
}

/**
 * A component to render markdown. Content to render may either
 * 
 * 1. be specified via the `content` property
 * 2. included in the body of the element
 * 3. loaded from an external URL
 * 
 * Using option 2, if the markdown includes embedded HTML, make sure to wrap
 * the content into an `template` HTML element to prevent the browser from interpreting
 * it.
 * 
 * Using option 3, you can either specify an absolute or relative URL. Relative URLs
 * will be interpreted relative to the endpoint set by `pb-page`.
 */
export class PbMarkdown extends pbMixin(LitElement) {
    static get properties() {
        return {
            /**
             * The markdown content to be rendered. If undefined,
             * content will be taken from slotted content or loaded from the
             * specified URL.
             */
            content: {
                type: String
            },
            /**
             * An absolute or relative URL to load the markdown from.
             */
            url: {
                type: String
            },
            ...super.properties
        };
    }

    firstUpdated() {
        super.firstUpdated();

        if (this.url) {
            PbMarkdown.waitOnce('pb-page-ready', () => {
                const url = new URL(this.url, `${this.getEndpoint()}/`);
                fetch(url, { credentials: 'same-origin' })
                    .then((response) => response.text())
                    .catch(() => {
                        console.error('<pb-markdown> failed to load content from %s', url.toString());
                        return Promise.resolve(this.content);
                    })
                    .then((text) => {
                        this.content = text;
                    });
            });
        }
        if (!this.content) {
            const slot = this.shadowRoot.querySelector('slot');
            const content = document.createElement('div');
            slot.assignedNodes().forEach((node) => {
                content.appendChild(document.importNode(node.content || node, true));
            });
            this.content = removeIndent(content.innerHTML);
        }
    }

    render() {
        if (!this.content) {
            return html`<slot class="hidden"></slot>`;
        }
        return html`
            ${unsafeHTML(window.marked(this.content))}<slot class="hidden"></slot>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
            .hidden {
                display: none;
            }
        `;
    }
}
customElements.define('pb-markdown', PbMarkdown);