/* eslint-disable no-unused-expressions */
import { fixture, expect, html, waitUntil } from '@open-wc/testing';

import '../src/pb-popover.js';

/*
 * Footnote markup as TEI Publisher outputs it for a footnote (fn2) nested inside
 * another footnote (fn1): the marker of fn2 appears in the hidden content of the
 * popover for fn1 and again in the footnote list, both with the same id.
 */
async function nestedFootnotes() {
  const el = await fixture(html`
    <div>
      <p>Text <a id="fn1" class="note" href="#">1</a> more text.</p>
      <div class="popovers">
        <pb-popover for="fn1">Outer note <a id="fn2" class="note" href="#">2</a> continues.</pb-popover>
        <pb-popover for="fn2">Inner note</pb-popover>
      </div>
      <div class="footnotes">
        <dl><dt>1</dt><dd>Outer note <a id="fn2" class="note" href="#">2</a> continues.</dd></dl>
        <dl><dt>2</dt><dd>Inner note</dd></dl>
      </div>
    </div>
  `);
  const popovers = el.querySelectorAll('pb-popover');
  await Promise.all(Array.from(popovers).map(p => p.updateComplete));
  return el;
}

describe('pb-popover with nested triggers', () => {
  it('binds every visible copy of a trigger, but not the hidden one', async () => {
    const el = await nestedFootnotes();
    const [hidden, inList] = el.querySelectorAll('[id="fn2"]');
    expect(el.querySelector('#fn1')._pbPopup).to.exist;
    expect(hidden._pbPopup).to.not.exist;
    expect(inList._pbPopup).to.exist;
  });

  it('opens a nested popup from inside the outer popup', async () => {
    const el = await nestedFootnotes();
    const outer = el.querySelector('#fn1')._pbPopup;
    outer.show();
    await waitUntil(() => outer.state.isMounted, 'outer popup did not mount');

    const nestedTrigger = outer.popper.querySelector('[id="fn2"]');
    expect(nestedTrigger).to.exist;
    // tippy calls onMount, which binds nested triggers, once popper has positioned the popup
    await waitUntil(() => nestedTrigger._pbPopup, 'nested trigger was not bound');
    const inner = nestedTrigger._pbPopup;

    inner.show();
    await waitUntil(() => inner.state.isMounted, 'inner popup did not mount');
    expect(inner.parent, 'inner popup is a child of the outer one').to.equal(outer);
    expect(inner.popper.textContent).to.contain('Inner note');
    expect(outer.state.isVisible).to.be.true;

    outer.hide();
    outer.unmount();
    expect(inner.state.isMounted).to.be.false;
  });

  it('disables all instances of a popover', async () => {
    const el = await nestedFootnotes();
    const popover = el.querySelector('pb-popover[for="fn2"]');
    const outer = el.querySelector('#fn1')._pbPopup;
    outer.show();
    await waitUntil(() => popover._instances.size === 2, 'nested trigger was not bound');

    popover.command('disable', true);
    popover._instances.forEach(instance => expect(instance.state.isEnabled).to.be.false);
    popover.command('disable', false);
    popover._instances.forEach(instance => expect(instance.state.isEnabled).to.be.true);
  });

  it('rebinds popovers inside a popup when it shows again', async () => {
    const el = await fixture(html`
      <div>
        <p>Text <a id="fn1" class="note" href="#">1</a></p>
        <pb-popover for="fn1">A note naming
          <pb-popover persistent>Someone<template slot="alternate">Details</template></pb-popover>.
        </pb-popover>
      </div>
    `);
    await el.querySelector('pb-popover').updateComplete;
    const outer = el.querySelector('#fn1')._pbPopup;
    const innerLink = () => {
      const inner = outer.popper.querySelector('pb-popover');
      return inner && inner.shadowRoot && inner.shadowRoot.getElementById('link');
    };
    for (let round = 1; round <= 2; round += 1) {
      outer.show();
      // eslint-disable-next-line no-await-in-loop
      await waitUntil(() => innerLink() && innerLink()._pbPopup, `inner popover not bound in round ${round}`);
      const inner = innerLink()._pbPopup;
      inner.show();
      // eslint-disable-next-line no-await-in-loop
      await waitUntil(() => inner.state.isMounted, `inner popup did not mount in round ${round}`);
      expect(inner.parent, 'inner popup is a child of the outer one').to.equal(outer);
      outer.hide();
      outer.unmount();
    }
  });

  it('cleans up its instances when removed', async () => {
    const el = await nestedFootnotes();
    const popover = el.querySelector('pb-popover[for="fn2"]');
    const inList = el.querySelectorAll('[id="fn2"]')[1];
    popover.remove();
    expect(popover._instances.size).to.equal(0);
    expect(inList._pbPopup).to.not.exist;
  });
});

describe('pb-popover popup', () => {
  async function persistentPopover() {
    const el = await fixture(html`
      <div style="padding: 100px">
        <pb-popover persistent theme="light-border"
          >Trigger<template slot="alternate"
            >Outer
            <pb-popover persistent>Inner trigger<template slot="alternate">Inner</template></pb-popover></template
          ></pb-popover
        >
        <button id="outside">outside</button>
      </div>
    `);
    const popover = el.querySelector('pb-popover');
    await popover.updateComplete;
    const outer = popover.shadowRoot.getElementById('link')._pbPopup;
    outer.show();
    await waitUntil(() => outer.state.isShown, 'outer popup not shown');
    return { el, outer };
  }

  async function showInner(outer) {
    const innerPopover = outer.popper.querySelector('pb-popover');
    await waitUntil(() => innerPopover.shadowRoot && innerPopover.shadowRoot.getElementById('link')._pbPopup);
    const inner = innerPopover.shadowRoot.getElementById('link')._pbPopup;
    inner.show();
    await waitUntil(() => inner.state.isShown, 'inner popup not shown');
    return inner;
  }

  function pointerdown(target) {
    target.dispatchEvent(
      new PointerEvent('pointerdown', { bubbles: true, composed: true, pointerType: 'mouse' }),
    );
  }

  it('shows the popup in the top layer', async () => {
    const { outer } = await persistentPopover();
    expect(outer.popper.matches(':popover-open')).to.be.true;
    expect(outer.popper.classList.contains('pb-popover-root')).to.be.true;
    const box = outer.popper.querySelector(':scope > .pb-popover-box');
    expect(box.getAttribute('data-theme')).to.equal('light-border');
    expect(box.getAttribute('data-placement')).to.match(/^(top|bottom|left|right)/);
    expect(box.querySelector('.pb-popover-content')).to.contain.text('Outer');
    expect(box.querySelector('.pb-popover-arrow')).to.exist;
    // the light-border theme applies: white background
    expect(getComputedStyle(box).backgroundColor).to.equal('rgb(255, 255, 255)');
    // deprecated tippy names
    expect(outer.popper.hasAttribute('data-tippy-root')).to.be.true;
    expect(box.matches('.tippy-box')).to.be.true;
    expect(box.querySelector('.tippy-content')).to.exist;
    expect(box.querySelector('.tippy-arrow')).to.exist;
    expect(outer.reference._tippy).to.equal(outer);
    expect(outer.popper._tippy).to.equal(outer);
    expect(outer.reference.getAttribute('aria-expanded')).to.equal('true');
    outer.hide();
    expect(outer.popper.isConnected).to.be.false;
    expect(outer.reference.getAttribute('aria-expanded')).to.equal('false');
  });

  it('closes on a click outside, but not on a click in a nested popup', async () => {
    const { el, outer } = await persistentPopover();
    const inner = await showInner(outer);

    pointerdown(inner.popper.querySelector('.tippy-content'));
    expect(outer.state.isVisible, 'outer stays open').to.be.true;
    expect(inner.state.isVisible, 'inner stays open').to.be.true;

    pointerdown(el.querySelector('#outside'));
    expect(inner.state.isVisible).to.be.false;
    expect(outer.state.isVisible).to.be.false;
  });

  it('closes the innermost popup on Escape', async () => {
    const { outer } = await persistentPopover();
    const inner = await showInner(outer);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(inner.state.isVisible).to.be.false;
    expect(outer.state.isVisible).to.be.true;

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(outer.state.isVisible).to.be.false;
  });
});
