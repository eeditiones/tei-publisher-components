/* eslint-disable no-unused-expressions */
import { oneEvent, fixture, expect, waitUntil } from '@open-wc/testing';
import { cleanup } from './util.js';

import '../src/pb-document.js';
import '../src/pb-ajax.js';
import '../src/pb-login.js';

describe('recompile ODD', () => {
    afterEach(cleanup);

    it('recompiles and shows message', async function() {
        this.timeout(20000);
        let loggedIn = false;
        document.addEventListener('pb-login', () => { loggedIn = true; }, { once: true });
        const el = (
            await fixture(`
                <pb-page endpoint="${ __karma__.config.endpoint }">
                    <pb-ajax url="api/odd?odd=graves.odd" method="post">
                    Recompile<span slot="title">Recompile ODD</span>
                    </pb-ajax>
                    <pb-login user="tei" password="${__karma__.config.passwd}"></pb-login>
                </pb-page>
            `)
        );
        await waitUntil(() => loggedIn, 'waiting for pb-login', { timeout: 15000 });

        const ajax = el.querySelector('pb-ajax');

        ajax.trigger();

        await oneEvent(document, 'pb-end-update');

        const message = ajax.shadowRoot.querySelector('pb-message');
        expect(message.message).to.contain('graves-web.xql');
    });
});