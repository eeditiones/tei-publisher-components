/* eslint-disable no-unused-expressions */
import { oneEvent, fixture, expect } from '@open-wc/testing';

import '../src/pb-document.js';
import '../src/pb-ajax.js';

describe('recompile ODD', () => {
    it('recompiles and shows message', async () => {
        const el = (
            await fixture(`
                <pb-page endpoint="http://localhost:8080/exist/apps/tei-publisher">
                    <pb-ajax url="modules/lib/regenerate.xql?odd=graves.odd" dialog="messageDialog">
                    Recompile<span slot="title">Recompile ODD</span>
                    </pb-ajax>
                </pb-page>
            `)
        );
        const ajax = el.querySelector('pb-ajax');
        const btn = ajax.shadowRoot.querySelector('#button');

        setTimeout(() => btn.click());

        await oneEvent(document, 'pb-end-update');

        const message = ajax.shadowRoot.querySelector('paper-dialog-scrollable');
        expect(message.innerHTML).to.contain('graves-web.xql');
    });
});