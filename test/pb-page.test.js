import { oneEvent, fixture, expect, waitUntil, fixtureCleanup } from '@open-wc/testing';

import '../src/pb-page.js';

describe('initializes', () => {
    afterEach(() => {
        fixtureCleanup();
    });
    
    it('reports endpoint and language', (done) => {
        document.addEventListener('pb-page-ready', (ev) => {
            expect(ev.detail.language).to.equal('de');
            expect(ev.detail.endpoint).to.equal(__karma__.config.endpoint);
            done();
        }, { once: true });
        fixture(`
            <pb-page endpoint="${ __karma__.config.endpoint }" 
                require-language language="de"></pb-page>
        `);
    });

    it('allows only one pb-page', async () => {
        let initDone;
        document.addEventListener('pb-page-ready', () => {
            initDone = true;
        }, { once: true });
        const el = (
            await fixture(`
                <div>
                    <pb-page id="p1" endpoint="${ __karma__.config.endpoint }"></pb-page>
                    <pb-page id="p2" endpoint="https://teipublisher.com/exist/apps/van-gogh"></pb-page>
                </div>
            `)
        );
        await waitUntil(() => initDone, 'waiting for pb-page-ready', { timeout: 5000 });

        const disabled = el.querySelectorAll('pb-page[disabled]');
        expect(disabled.length).to.equal(1);
    });
});