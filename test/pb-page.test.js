import { oneEvent, fixture, expect, waitUntil, fixtureCleanup } from '@open-wc/testing';

import '../src/pb-page.js';

describe('initializes', () => {
    afterEach(() => {
        fixtureCleanup();
    });
    
    it('reports endpoint and language', (done) => {
        oneEvent(document, 'pb-page-ready').then((ev) => {
            expect(ev.detail.language).to.equal('de');
            expect(ev.detail.endpoint).to.equal(__karma__.config.endpoint);
            done();
        })
        fixture(`
            <pb-page endpoint="${ __karma__.config.endpoint }" 
                require-language language="de"></pb-page>
        `);
    });

    it('allows only one pb-page', async () => {
        let initDone;
        document.addEventListener('pb-page-ready', () => {
            initDone = true;
        });
        const el = (
            await fixture(`
                <div>
                    <pb-page endpoint="${ __karma__.config.endpoint }" 
                        language="de"></pb-page>
                    <pb-page endpoint="https://teipublisher.com/exist/apps/van-gogh" 
                        language="en"></pb-page>
                </div>
            `)
        );
        await waitUntil(() => initDone);

        const disabled = el.querySelectorAll('pb-page[disabled]');
        expect(disabled.length).to.equal(1);
    });
});