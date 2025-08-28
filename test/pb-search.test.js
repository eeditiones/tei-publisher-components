/* eslint-disable no-unused-expressions */
import { fixture, expect } from '@open-wc/testing';
import { cleanup } from './util.js';

import '../src/pb-search.js';

// TODO: this test has to be rewritten to use the URL registry or other means
describe.skip('serialize URL parameters', () => {
  after(cleanup);

  it('pb-search setParameters and getParameters', async () => {
    const el = await fixture(`
      <pb-page endpoint="${__karma__.config.endpoint}">
        <pb-progress></pb-progress>
        <main>
          <pb-search id="search-form">
            <div class="targets">
              <paper-checkbox name="tei-target" value="tei-text" selected="selected">Search sections</paper-checkbox>
              <paper-checkbox name="tei-target" value="tei-head" selected="selected">Search headings</paper-checkbox>
            </div>
          </pb-search>
          <pb-load url="templates/search-results.html"></pb-load>
        </main>
      </pb-page>
    `);

    const inputJSON = {
      'autocomplete-custom-template': undefined,
      query: 'test',
      start: 1,
      'tei-target': ['tei-text', 'tei-head'],
    };

    const resultJSON = {
      query: 'test',
      start: '1',
      'tei-target': ['tei-text', 'tei-head'],
    };

    // console.log("json ", inputJSON);
    const searchForm = el.querySelector('#search-form');
    searchForm.setParameters(inputJSON);

    const queryString = window.TeiPublisher.url.search;
    // console.log("querystring:",queryString);

    expect(queryString).to.equal('?query=test&start=1&tei-target=tei-text&tei-target=tei-head');
    expect(queryString).to.not.equal('?query=test&start=1&tei-target=tei-text%2Ctei-head');

    const parameters = searchForm.getParameters();
    expect(JSON.stringify(parameters)).to.equal(JSON.stringify(resultJSON));

    const teiTargetParam = searchForm.getParameter('tei-target');
    expect(JSON.stringify(teiTargetParam)).to.equal('["tei-text","tei-head"]');
  });
});
