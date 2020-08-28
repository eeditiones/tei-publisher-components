import { fixture, expect, waitUntil } from '@open-wc/testing';
import '../src/pb-autocomplete.js';
import '../src/pb-page.js';
import '@polymer/paper-item';
import '@polymer/iron-form';


describe('simple autocomplete with static suggestions', () => {
    it('submits in form', async () => {
        let initDone;
        document.addEventListener('pb-page-ready', () => {
            initDone = true;
        });
        const el = (
            await fixture(`
                <pb-page endpoint=".">
                    <iron-form id="form">
                        <form action="">
                            <pb-autocomplete name="lang" placeholder="Language" value="pl" icon="icons:flag"
                                suggestions='[{"text": "English", "value": "en"}, {"text": "Polish", "value": "pl"}, {"text": "German", "value": "de"}]'>
                            </pb-autocomplete>
                        </form>
                    </iron-form>
                </pb-page>
            `)
        );
        await waitUntil(() => initDone);

        const form = el.querySelector('iron-form');
        expect(form.serializeForm()).to.deep.equal({'lang': 'pl'});
    });
});