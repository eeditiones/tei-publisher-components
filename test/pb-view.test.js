/* eslint-disable no-unused-expressions */
import { oneEvent, fixture, expect } from '@open-wc/testing';

import '../src/pb-document.js';
import '../src/pb-page.js';
import '../src/pb-view.js';

describe('initialize and refresh view', () => {
    it('and receives events', async () => {
        const el = (
            await fixture(`
            <pb-page endpoint="http://localhost:8080/exist/apps/tei-publisher">
                <pb-document id="document1" path="doc/documentation.xml" odd="docbook" view="div"></pb-document>
                <pb-view src="document1"></pb-view>
            </pb-page>
        `)
        );

        await oneEvent(document, 'pb-end-update');

        const view = el.querySelector('pb-view');
        expect(view.getEndpoint()).to.equal('http://localhost:8080/exist/apps/tei-publisher');
        expect(view.getOdd()).to.equal('docbok');
        expect(view.getView()).to.equal('div');

        const h1 = view.shadowRoot.querySelector('h1');
        expect(h1).dom.to.equal('<h1 class="tei-title6 title">Quickstart</h1>');

        setTimeout(() => document.dispatchEvent(new CustomEvent('pb-refresh', {detail: {id: 'installation'}})));
        await oneEvent(document, 'pb-end-update');

        const h2 = view.shadowRoot.querySelector('h2');
        expect(h2).dom.to.equal('<h2 class="tei-title6 title">Installation</h2>');
    });
});