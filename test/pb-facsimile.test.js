import { expect, fixture, oneEvent, waitUntil } from '@open-wc/testing';
import { cleanup, waitForPage } from './util';
import sinon from 'sinon';

import '../src/pb-page.js';
import '../src/pb-facsimile.js';
import '../src/pb-facs-link.js';

describe('pb-facsimile', () => {
  afterEach(cleanup);

  it('can be opened in fullscreen without removing everything in body', async () => {
    const el = await fixture(`
<div>
                <pb-facsimile
                    base-uri="https://apps.existsolutions.com/cantaloupe/iiif/2/"
                    facsimiles="[&quot;15929_000_IDL5772_BOss12034_IIIp79.jpg&quot;]"
                    default-zoom-level="0"
                    show-navigator=""
                    show-sequence-control=""
                    reference-strip=""
                    show-navigation-control=""
                    show-home-control=""
                    show-rotation-control=""
                    show-full-page-control="">
<h3 slot="before">Facsimile Viewer Test</h3>
                <div slot="after">Status: <span id="status"></span></div>
</pb-facsimile>
<h3 id="other">Some other data</h3>
</div>
        `);

    const facsimile = el.querySelector('pb-facsimile');
    await oneEvent(facsimile, 'pb-ready');

    const fullscreenbutton = facsimile.viewer.element.querySelector('[title="Toggle full page"]');

    // Monkeypatch this to allow OSD to handle click events
    fullscreenbutton.setPointerCapture = () => {};

    let fullScreenIsRequested = false;
    // Because of security, full screen cannot be triggered from code. Monkeypatch it.
    facsimile.viewer.element.requestFullscreen = () => {
      fullScreenIsRequested = true;
    };

    // 'perform a click'
    fullscreenbutton.dispatchEvent(new PointerEvent('pointerdown'));
    fullscreenbutton.dispatchEvent(new PointerEvent('pointerup'));

    expect(fullScreenIsRequested).to.equal(true, 'The pb-facsimile should have become full screen');

    const otherChild = el.querySelector('#other');
    expect(otherChild, 'Other elements should not have been removed from the DOM').to.exist;
  });
});

describe.only('request handling', () => {
  /**
   * @type {import('sinon').SinonFakeXMLHttpRequestStatic}
   */
  let xhr;

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();
  });
  afterEach(() => {
    xhr.restore();
    cleanup();
  });

  it('Deduplicates network requests for the same URL if all pb-facs-links point to the same', async () => {
    /**
     * @type {import('sinon').SinonFakeXMLHttpRequest[]}
     */
    const requests = [];
    xhr.onCreate = request => {
      requests.push(request);

      setTimeout(() => {
        request.respond(
          200,
          { 'content-Type': 'application/json' },
          JSON.stringify({
            '@context': 'http://iiif.io/api/image/2/context.json',
            '@id': 'https://apps.existsolutions.com/cantaloupe/iiif/2/12446_000_BCz_1596p302.jpg',
            protocol: 'http://iiif.io/api/image',
            width: 2480,
            height: 3507,
            sizes: [
              { width: 78, height: 110 },
              { width: 155, height: 219 },
              { width: 310, height: 438 },
              { width: 620, height: 877 },
              { width: 1240, height: 1754 },
              { width: 2480, height: 3507 },
            ],
            tiles: [{ width: 512, height: 512, scaleFactors: [1, 2, 4, 8, 16, 32] }],
            profile: [
              'http://iiif.io/api/image/2/level2.json',
              {
                formats: ['jpg', 'tif', 'gif', 'png'],
                maxArea: 8697360,
                qualities: ['bitonal', 'default', 'gray', 'color'],
                supports: [
                  'regionByPx',
                  'sizeByW',
                  'sizeByWhListed',
                  'cors',
                  'regionSquare',
                  'sizeByDistortedWh',
                  'canonicalLinkHeader',
                  'sizeByConfinedWh',
                  'sizeByPct',
                  'jsonldMediaType',
                  'regionByPct',
                  'rotationArbitrary',
                  'sizeByH',
                  'baseUriRedirect',
                  'rotationBy90s',
                  'profileLinkHeader',
                  'sizeByForcedWh',
                  'sizeByWh',
                  'mirroring',
                ],
              },
            ],
          }),
        );
      });
    };
    const el = await fixture(`
      <div>
        <pb-facsimile
          base-uri="https://apps.existsolutions.com/cantaloupe/iiif/2/"
          subscribe="transcription"
        >
          <h3 slot="before">Facsimile Viewer Test</h3>
          <div slot="after">Status: <span id="status"></span></div>
        </pb-facsimile>
        <h3 id="other">Some other data</h3>
        <pb-facs-link
          emit="transcription"
          facs="12446_000_BCz_1596p302.jpg"
          coordinates="[ 1,2,3,4 ]"
          >First area</pb-facs-link
        >
        <pb-facs-link
          emit="transcription"
          facs="12446_000_BCz_1596p302.jpg"
          coordinates="[ 5,6,7,8 ]"
          >Second area</pb-facs-link
        >
        <pb-facs-link
          emit="transcription"
          facs="12446_000_BCz_1596p302.jpg"
          coordinates="[ 9,10,11,12 ]"
          >Third area</pb-facs-link
        >
      </div>
    `);

    const facsimile = el.querySelector('pb-facsimile');

    await oneEvent(facsimile, 'pb-facsimile-status');

    expect(requests.length).to.equal(1, 'there should have been exactly one request here');
    expect(requests[0].url).to.equal(
      'https://apps.existsolutions.com/cantaloupe/iiif/2/12446_000_BCz_1596p302.jpg/info.json',
    );
  });

  it('Deduplicates network requests for the same URL if the pb-facs-links point to the a small set of different ones', async () => {
    /**
     * @type {import('sinon').SinonFakeXMLHttpRequest[]}
     */
    const requests = [];
    xhr.onCreate = request => {
      requests.push(request);

      setTimeout(() => {
        request.respond(
          200,
          { 'content-Type': 'application/json' },
          JSON.stringify({
            '@context': 'http://iiif.io/api/image/2/context.json',
            '@id': 'https://apps.existsolutions.com/cantaloupe/iiif/2/12446_000_BCz_1596p302.jpg',
            protocol: 'http://iiif.io/api/image',
            width: 2480,
            height: 3507,
            sizes: [
              { width: 78, height: 110 },
              { width: 155, height: 219 },
              { width: 310, height: 438 },
              { width: 620, height: 877 },
              { width: 1240, height: 1754 },
              { width: 2480, height: 3507 },
            ],
            tiles: [{ width: 512, height: 512, scaleFactors: [1, 2, 4, 8, 16, 32] }],
            profile: [
              'http://iiif.io/api/image/2/level2.json',
              {
                formats: ['jpg', 'tif', 'gif', 'png'],
                maxArea: 8697360,
                qualities: ['bitonal', 'default', 'gray', 'color'],
                supports: [
                  'regionByPx',
                  'sizeByW',
                  'sizeByWhListed',
                  'cors',
                  'regionSquare',
                  'sizeByDistortedWh',
                  'canonicalLinkHeader',
                  'sizeByConfinedWh',
                  'sizeByPct',
                  'jsonldMediaType',
                  'regionByPct',
                  'rotationArbitrary',
                  'sizeByH',
                  'baseUriRedirect',
                  'rotationBy90s',
                  'profileLinkHeader',
                  'sizeByForcedWh',
                  'sizeByWh',
                  'mirroring',
                ],
              },
            ],
          }),
        );
      });
    };
    const el = await fixture(`
      <div>
        <pb-facsimile
          base-uri="https://apps.existsolutions.com/cantaloupe/iiif/2/"
          subscribe="transcription"
        >
          <h3 slot="before">Facsimile Viewer Test</h3>
          <div slot="after">Status: <span id="status"></span></div>
        </pb-facsimile>
        <h3 id="other">Some other data</h3>
        <pb-facs-link
          emit="transcription"
          facs="12446_000_BCz_1596p302.jpg"
          coordinates="[ 1,2,3,4 ]"
          >First area</pb-facs-link
        >
        <pb-facs-link
          emit="transcription"
          facs="12446_000_BCz_1596p303.jpg"
          coordinates="[ 5,6,7,8 ]"
          >Second area</pb-facs-link
        >
        <pb-facs-link
          emit="transcription"
          facs="12446_000_BCz_1596p302.jpg"
          coordinates="[ 9,10,11,12 ]"
          >Third area</pb-facs-link
        >
      </div>
    `);

    const facsimile = el.querySelector('pb-facsimile');

    await oneEvent(facsimile, 'pb-facsimile-status');

    expect(requests.length).to.equal(2, 'there should have been exactly one request here');
    expect(requests[0].url).to.equal(
      'https://apps.existsolutions.com/cantaloupe/iiif/2/12446_000_BCz_1596p303.jpg/info.json',
    );
    expect(requests[1].url).to.equal(
      'https://apps.existsolutions.com/cantaloupe/iiif/2/12446_000_BCz_1596p302.jpg/info.json',
    );
  });
});
