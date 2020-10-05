/* eslint-disable no-unused-expressions */
import { fixture, expect, fixtureCleanup } from '@open-wc/testing';

import '../src/pb-page.js';
import '../src/pb-markdown.js';

describe('render markdown', () => {
    afterEach(() => {
      fixtureCleanup();
    });
    it('renders markdown passed as content', async () => {
        const el = (
            await fixture(`
                <pb-page endpoint="http://localhost:8080/exist/apps/tei-publisher">
                    <pb-markdown>
                    # Embedding Markdown

                    Markdown taken from the **content** of the \`pb-markdown\`.

                    \`\`\`xquery
                    for $i in 1 to 10 return $i
                    \`\`\`
                    </pb-markdown>
                </pb-page>
            `)
        );

        const markdown = el.querySelector('pb-markdown');
        const h1 = markdown.querySelector('h1');
        expect(h1).dom.to.equal('<h1 id="embedding-markdown">Embedding Markdown</h1>');
        const highlight = markdown.querySelector('pb-code-highlight');
        expect(highlight).to.exist;
        const code = highlight.shadowRoot.querySelector('code');
        expect(code.classList.contains('language-xquery')).to.be.true;
    });
    it('renders embedded HTML', async () => {
        const el = (
            await fixture(`
                <pb-page endpoint="${ __karma__.config.endpoint }">
                    <pb-markdown>
                        <template>
                            # Embedding Markdown

                            <pre>Include HTML</pre>
                        </template>
                    </pb-markdown>
                </pb-page>
            `)
        );

        const markdown = el.querySelector('pb-markdown');
        const pre = markdown.querySelector('pre');
        expect(pre).dom.to.equal('<pre>Include HTML</pre>');
    })
});