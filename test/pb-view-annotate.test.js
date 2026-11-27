/* eslint-disable no-unused-expressions */
import { fixture, expect, html, waitUntil } from '@open-wc/testing';

import '../src/pb-document.js';
import '../src/pb-view-annotate.js';

describe('pb-view-annotate tooltip', () => {
  async function annotatedSpan() {
    const container = await fixture(html`
      <div>
        <pb-document id="annotate-doc" path="test.xml" odd="teipublisher"></pb-document>
        <pb-view-annotate src="annotate-doc"></pb-view-annotate>
      </div>
    `);
    const el = container.querySelector('pb-view-annotate');
    await el.updateComplete;
    const view = el.shadowRoot.getElementById('view');
    const span = document.createElement('span');
    span.className = 'annotation annotation-person';
    span.dataset.type = 'person';
    span.dataset.annotation = JSON.stringify({ role: 'author' });
    span.textContent = 'Karl Barth';
    view.appendChild(span);
    // normally set once the annotation colours are configured
    el._annotationColors = el._annotationColors || new Map();
    el._createTooltip(span);
    return { el, span };
  }

  it('opens a popup with the annotation toolbar on click', async () => {
    const { span } = await annotatedSpan();
    const popup = span._pbPopup;
    expect(popup).to.exist;
    expect(popup.state.isVisible).to.be.false;

    span.click();
    await waitUntil(() => popup.state.isShown, 'popup not shown');
    expect(popup.popper.matches(':popover-open')).to.be.true;
    const box = popup.popper.querySelector('.pb-popover-box');
    expect(box.getAttribute('data-theme')).to.equal('light-border');
    expect(box.querySelector('.annotation-popup .toolbar')).to.exist;
    expect(box.querySelector('.annotation-type')).to.have.text('person');
    expect(box.querySelector('.info table')).to.contain.text('role');
    // the light-border theme is loaded into the view's shadow root: white background
    expect(getComputedStyle(box).backgroundColor).to.equal('rgb(255, 255, 255)');

    // a second click on the annotation keeps the popup open
    span.click();
    expect(popup.state.isVisible).to.be.true;

    // a click outside closes it
    document.body.dispatchEvent(
      new PointerEvent('pointerdown', { bubbles: true, composed: true, pointerType: 'mouse' }),
    );
    expect(popup.state.isVisible).to.be.false;
  });

  it('replaces the popup when markers are repainted', async () => {
    const { el, span } = await annotatedSpan();
    const popup = span._pbPopup;
    el._paintMarkers();
    expect(popup.state.isDestroyed).to.be.true;
    expect(popup.popper.isConnected).to.be.false;
    expect(span._pbPopup).to.exist.and.not.equal(popup);
  });
});
