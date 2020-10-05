/* eslint-disable no-unused-expressions */
import { oneEvent, fixture, expect, fixtureCleanup } from '@open-wc/testing';

import '../src/pb-document.js';

describe('create document', () => {
  afterEach(() => {
    fixtureCleanup();
  });
  it('has correct paths', async () => {
    const el = (
        await fixture('<pb-document root-path="/db/apps/foo" path="test/kant_rvernunft_1781.TEI-P5.xml" odd="dta" view="page"></pb-document>')
    );
    expect(el.getFileName()).to.equal('kant_rvernunft_1781.TEI-P5.xml');
    expect(el.getFullPath()).to.equal('/db/apps/foo/test/kant_rvernunft_1781.TEI-P5.xml');
  });
  it('fires event on property change', async () => {
    const el = (
        await fixture('<pb-document path="test/kant_rvernunft_1781.TEI-P5.xml" odd="dta" view="page"></pb-document>')
    );

    setTimeout(() => el.odd = 'docbook');

    const { detail } = await oneEvent(document, 'pb-document');

    expect(detail.odd).to.be.equal('docbook');
  });
});