import { fixture, waitUntil, fixtureCleanup } from '@open-wc/testing';
import { registry } from '../src/urls.js';

export function cleanup() {
  fixtureCleanup();
  // registry might have modified the internal URL
  // this line will reset it to the initial URL
  window.history.replaceState(null, '', '/context.html');
  registry.state = {};
  registry.channelStates = {};
}

export async function waitForPage(template, type = 'pb-page-ready') {
  let initDone;
  document.addEventListener(
    type,
    () => {
      initDone = true;
    },
    { once: true },
  );

  const el = await fixture(template);

  await waitUntil(() => initDone, 'waiting for pb-page-ready', { timeout: 5000 });

  return el;
}
