/* eslint-disable no-unused-expressions */
import { oneEvent, expect } from '@open-wc/testing';
import { waitForPage, cleanup } from './util.js';
import { defaultChannel } from '../src/pb-mixin.js';

import '../src/pb-document.js';
import '../src/pb-page.js';
import '../src/pb-view.js';

describe('initialize and refresh view', () => {
  afterEach(cleanup);

  it('emits and receives events', async () => {
    const el = await waitForPage(
      `
            <pb-page endpoint="${__karma__.config.endpoint}">
                <pb-document id="document1" path="doc/documentation.xml" odd="docbook" view="div"></pb-document>
                <pb-view src="document1"></pb-view>
            </pb-page>
        `,
      'pb-end-update',
    );

    const view = el.querySelector('pb-view');

    expect(view.getOdd()).to.equal('docbook');
    expect(view.getView()).to.equal('div');
    expect(view.getParameters().view).to.equal('div');

    let h1 = view.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1).to.have.text('Introduction');

    setTimeout(() =>
      document.dispatchEvent(
        new CustomEvent('pb-refresh', {
          detail: {
            id: 'development-workflow',
            key: defaultChannel,
          },
        }),
      ),
    );
    await oneEvent(document, 'pb-end-update');

    h1 = view.shadowRoot.querySelector('h1');
    expect(h1).to.have.text('Development Workflows');

    // change to a different document
    setTimeout(() =>
      document.dispatchEvent(
        new CustomEvent('pb-refresh', {
          detail: {
            path: 'demo/CIDTC-3823-cortez.xml',
            odd: 'teipublisher',
            xpath: "//text[@type='source']",
            position: null,
            key: defaultChannel,
          },
        }),
      ),
    );
    await oneEvent(document, 'pb-end-update');

    const geolocation = view.shadowRoot.querySelector('.persName [slot="default"]');
    expect(geolocation.innerHTML).to.equal('obispo diócesis Colmensis');
  });

  it('shows placeholder for non existing document', async () => {
    const el = await waitForPage(
      `
                <pb-page endpoint="${__karma__.config.endpoint}">
                    <pb-document id="document1" path="xxx/yyy.xml" odd="docbook" view="div"></pb-document>
                    <pb-view src="document1" not-found="Not found"></pb-view>
                </pb-page>
            `,
      'pb-end-update',
    );

    const view = el.querySelector('pb-view');
    const content = view.shadowRoot.querySelector('#content');
    expect(content.innerHTML).to.contain(view.notFound);
  });

  it('shows footnotes', async () => {
    const el = await waitForPage(
      `
                <pb-page endpoint="${__karma__.config.endpoint}">
                    <pb-document id="document1" path="demo/F-rom.xml" odd="shakespeare"></pb-document>
                    <pb-view src="document1" view="page" append-footnotes></pb-view>
                </pb-page>
            `,
      'pb-end-update',
    );

    const view = el.querySelector('pb-view');

    const notes = view.shadowRoot.querySelector('#footnotes');
      expect(notes.innerHTML).to.contain('obscured');
  });
});
