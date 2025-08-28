import { fixture, expect, waitUntil } from '@open-wc/testing';
import { waitForPage, cleanup } from './util.js';
import '../src/pb-page.js';

describe('initializes', () => {
  afterEach(cleanup);

  it('reports endpoint and language', async () => {
    let initDetails;
    document.addEventListener(
      'pb-page-ready',
      ev => {
        initDetails = ev.detail;
        console.log(initDetails);
      },
      { once: true },
    );
    await fixture(`
            <pb-page endpoint="${__karma__.config.endpoint}" 
                require-language language="de"></pb-page>
        `);

    await waitUntil(() => initDetails, 'waiting for pb-page-ready', { timeout: 5000 });
    expect(initDetails.apiVersion).to.exist;
    expect(initDetails.language).to.equal('de');
    expect(initDetails.endpoint).to.equal(__karma__.config.endpoint);
  });

  it('allows only one pb-page', async () => {
    const el = await waitForPage(`
            <div>
                <pb-page id="p1" endpoint="${__karma__.config.endpoint}"></pb-page>
                <pb-page id="p2" endpoint="https://teipublisher.com/exist/apps/van-gogh"></pb-page>
            </div>
        `);

    const disabled = el.querySelectorAll('pb-page[disabled]');
    expect(disabled.length).to.equal(1);
  });
});
