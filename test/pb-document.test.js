/* eslint-disable no-unused-expressions */
import { fixture, expect } from '@open-wc/testing';
import { cleanup } from './util.js';
import { PbEvents } from '../src/pb-events.js';

import '../src/pb-document.js';

describe('create document', () => {
  afterEach(cleanup);

  it('has correct paths', async () => {
    const el = await fixture(
      '<pb-document root-path="/db/apps/foo" path="test/kant_rvernunft_1781.TEI-P5.xml" odd="dta" view="page"></pb-document>'
    );
    expect(el.getFileName()).to.equal('kant_rvernunft_1781.TEI-P5.xml');
    expect(el.getFullPath()).to.equal('/db/apps/foo/test/kant_rvernunft_1781.TEI-P5.xml');
  });

  it('fires event on property change', async () => {
    const el = await fixture(
      '<pb-document path="doc/documentation.xml" odd="dta"></pb-document>'
    );

    PbEvents.subscribeOnce('pb-document').then((ev) => {
      expect(ev.detail.odd).to.be.equal('docbook');
    })

    setTimeout(() => { el.odd = 'docbook' });
  });
});