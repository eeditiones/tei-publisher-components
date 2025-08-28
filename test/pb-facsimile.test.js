import { expect, fixture, oneEvent } from '@open-wc/testing';
import { cleanup, waitForPage } from './util';

import '../src/pb-page.js';
import '../src/pb-facsimile.js';

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
