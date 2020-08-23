import { fixture, expect, waitUntil } from '@open-wc/testing';
import '../src/pb-autocomplete.js';
import '../src/pb-page.js';
import '@polymer/paper-item';


function serializeForm(form) {
    return new URLSearchParams(new FormData(form)).toString();
}

describe('simple autocomplete with static suggestions', () => {
    it('submits in form', async () => {
        let initDone;
        document.addEventListener('pb-page-ready', () => {
            initDone = true;
        });
        const el = (
            await fixture(`
                <pb-page endpoint=".">
                    <form action="">
                        <pb-autocomplete name="lang" placeholder="Language" value="pl" icon="icons:flag"
                            suggestions='[{"text": "English", "value": "en"}, {"text": "Polish", "value": "pl"}, {"text": "German", "value": "de"}]'>
                        </pb-autocomplete>
                    </form>
                </pb-page>
            `)
        );
        await waitUntil(() => initDone);

        const form = el.querySelector('form');
        expect(serializeForm(form)).to.equal('lang=pl');
    });
});