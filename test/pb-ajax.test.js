/* eslint-disable no-unused-expressions */
import { oneEvent, expect } from '@open-wc/testing';
import { cleanup, waitForPage } from './util.js';

import '../src/pb-document.js';
import '../src/pb-page.js';
import '../src/pb-ajax.js';
import '../src/pb-login.js';

describe('recompile ODD', () => {
    afterEach(cleanup);

    it('recompiles and shows message', async function() {
        this.timeout(20000);

        const el = (await waitForPage(`
            <pb-page endpoint="${ __karma__.config.endpoint }">
                <pb-ajax url="api/version">
                    <paper-button raised>Version</paper-button><span slot="title">Version</span>
                </pb-ajax>
            </pb-page>
        `));

        const ajax = el.querySelector('pb-ajax');

        ajax.trigger();

        await oneEvent(document, 'pb-end-update');

        const message = ajax.shadowRoot.querySelector('pb-message');
        expect(message.message).to.contain('"eXist"');
    });
});