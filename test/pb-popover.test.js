/* eslint-disable no-unused-expressions */
import './process-shim.js';
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
      <p>Text <a id="fn1" class="note">1</a> more text.</p>
      <div class="popovers">
        <pb-popover for="fn1">Outer note <a id="fn2" class="note">2</a> continues.</pb-popover>
        <pb-popover for="fn2">Inner note</pb-popover>
      </div>
      <div class="footnotes">
        <dl><dt>1</dt><dd>Outer note <a id="fn2" class="note">2</a> continues.</dd></dl>
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
    expect(el.querySelector('#fn1')._tippy).to.exist;
    expect(hidden._tippy).to.not.exist;
    expect(inList._tippy).to.exist;
  });

  it('opens a nested popup from inside the outer popup', async () => {
    const el = await nestedFootnotes();
    const outer = el.querySelector('#fn1')._tippy;
    outer.show();
    await waitUntil(() => outer.state.isMounted, 'outer popup did not mount');

    const nestedTrigger = outer.popper.querySelector('[id="fn2"]');
    expect(nestedTrigger).to.exist;
    // tippy calls onMount, which binds nested triggers, once popper has positioned the popup
    await waitUntil(() => nestedTrigger._tippy, 'nested trigger was not bound');
    const inner = nestedTrigger._tippy;

    inner.show();
    await waitUntil(() => inner.state.isMounted, 'inner popup did not mount');
    // nested inside the outer popup's root, so tippy treats it as a child
    expect(inner.popper.parentElement).to.equal(outer.popper);
    expect(inner.popper.textContent).to.contain('Inner note');
    expect(outer.state.isVisible).to.be.true;

    outer.hide();
    outer.unmount();
    expect(inner.state.isMounted).to.be.false;
  });

  it('disables all instances of a popover', async () => {
    const el = await nestedFootnotes();
    const popover = el.querySelector('pb-popover[for="fn2"]');
    const outer = el.querySelector('#fn1')._tippy;
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
        <p>Text <a id="fn1" class="note">1</a></p>
        <pb-popover for="fn1">A note naming
          <pb-popover persistent>Someone<template slot="alternate">Details</template></pb-popover>.
        </pb-popover>
      </div>
    `);
    await el.querySelector('pb-popover').updateComplete;
    const outer = el.querySelector('#fn1')._tippy;
    const innerLink = () => {
      const inner = outer.popper.querySelector('pb-popover');
      return inner && inner.shadowRoot && inner.shadowRoot.getElementById('link');
    };
    for (let round = 1; round <= 2; round++) {
      outer.show();
      // eslint-disable-next-line no-await-in-loop
      await waitUntil(() => innerLink() && innerLink()._tippy, `inner popover not bound in round ${round}`);
      const inner = innerLink()._tippy;
      inner.show();
      // eslint-disable-next-line no-await-in-loop
      await waitUntil(() => inner.state.isMounted, `inner popup did not mount in round ${round}`);
      expect(outer.popper.contains(inner.popper), 'inner popup nested in outer').to.be.true;
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
    expect(inList._tippy).to.not.exist;
  });
});
