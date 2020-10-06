import { fixture, waitUntil } from '@open-wc/testing';

export async function waitForPage(template, type = 'pb-page-ready') {
    let initDone;
    document.addEventListener(type, () => { 
        initDone = true;
    }, { once: true });

    const el = (await fixture(template));

    await waitUntil(() => initDone, 'waiting for pb-page-ready', { timeout: 5000 });

    return el;
}