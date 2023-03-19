import { expect } from '@open-wc/testing';
import { waitForPage, cleanup } from './util.js';
import '../src/pb-autocomplete.js';
import '../src/pb-page.js';
import '@polymer/paper-item';
import '@polymer/iron-form';


describe('simple autocomplete with static suggestions', () => {
    afterEach(cleanup);

    it('submits in form', async () => {
        const el = (
            await waitForPage(`
                <pb-page endpoint="." api-version="1.0.0">
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

        const form = el.querySelector('iron-form');
        expect(form.serializeForm()).to.deep.equal({'lang': 'pl'});
    });
});