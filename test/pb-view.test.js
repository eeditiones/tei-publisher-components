/* eslint-disable no-unused-expressions */
import { oneEvent, fixture, expect, waitUntil } from '@open-wc/testing';

import '../src/pb-document.js';
import '../src/pb-page.js';
import '../src/pb-view.js';

describe('initialize and refresh view', () => {
    it('emits and receives events', async function() {
        this.timeout(10000);
        
        const el = (
            await fixture(`
            <pb-page endpoint="${ __karma__.config.endpoint }">
                <pb-document id="document1" path="doc/documentation.xml" odd="docbook" view="div"></pb-document>
                <pb-view src="document1"></pb-view>
            </pb-page>
        `)
        );

        const view = el.querySelector('pb-view');
        await oneEvent(document, 'pb-end-update');

        expect(view.getOdd()).to.equal('docbook');
        expect(view.getView()).to.equal('div');
        expect(view.getParameters().view).to.equal('div');

        const h1 = view.shadowRoot.querySelector('h1');
        expect(h1).to.exist;
        expect(h1).to.have.text('Introduction');

        setTimeout(() => document.dispatchEvent(new CustomEvent('pb-refresh', { detail: { id: 'installation' } })));
        await oneEvent(document, 'pb-end-update');

        const h2 = view.shadowRoot.querySelector('h2');
        expect(h2).to.have.text('Installation');

        // change to a different document
        setTimeout(() => document.dispatchEvent(new CustomEvent('pb-refresh', {
            detail: {
                path: 'test/graves6.xml',
                odd: 'graves',
                position: null
            }
        })));
        await oneEvent(document, 'pb-end-update');

        const geolocation = view.shadowRoot.querySelector('pb-geolocation[key=CanFloque]');
        expect(geolocation.innerHTML).to.equal('Can Floque');
    });
    it('shows placeholder for non existing document', async () => {
        const el = (
            await fixture(`
                <pb-page endpoint="${ __karma__.config.endpoint }">
                    <pb-document id="document1" path="xxx/yyy.xml" odd="docbook" view="div"></pb-document>
                    <pb-view src="document1" not-found="Not found"></pb-view>
                </pb-page>
            `)
        );

        await oneEvent(document, 'pb-end-update');

        const view = el.querySelector('pb-view');
        const content = view.shadowRoot.querySelector('#content');
        expect(content.innerHTML).to.contain(view.notFound);
    });

    it('shows footnotes', async () => {
        const el = (
            await fixture(`s
                <pb-page endpoint="${ __karma__.config.endpoint }">
                    <pb-document id="document1" path="test/orlik_to_serafin.xml" odd="serafin"></pb-document>
                    <pb-view src="document1" xpath="//text[@xml:lang = 'la']/body" view="single"
                        append-footnotes></pb-view>
                </pb-page>
            `)
        );
        const view = el.querySelector('pb-view');

        await oneEvent(document, 'pb-end-update');

        const notes = view.shadowRoot.querySelector('#footnotes');
        expect(notes.innerHTML).to.contain('brata');
    });
});