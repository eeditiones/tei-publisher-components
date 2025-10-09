import { expect } from '@open-wc/testing';
import { waitForPage, cleanup } from './util.js';
import '../src/pb-autocomplete.js';
import '../src/pb-page.js';

describe('simple autocomplete with static suggestions', () => {
  afterEach(cleanup);

  it('submits in form', async () => {
    const el = await waitForPage(`
                <pb-page endpoint="." api-version="1.0.0">
                    <form id="form" action="">
                        <pb-autocomplete name="lang" placeholder="Language" value="pl" icon="icons:flag"
                            suggestions='[{"text": "English", "value": "en"}, {"text": "Polish", "value": "pl"}, {"text": "German", "value": "de"}]'>
                        </pb-autocomplete>
                    </form>
                </pb-page>
            `);

    const form = el.querySelector('form#form');
    const autocomplete = form.querySelector('pb-autocomplete');
    await autocomplete.updateComplete;

    const hidden = autocomplete.querySelector('input[type="hidden"][name="lang"]');
    expect(hidden).to.exist;
    expect(hidden.value).to.equal('pl');

    const formData = new FormData(form);
    expect(formData.get('lang')).to.equal('pl');
  });
});
