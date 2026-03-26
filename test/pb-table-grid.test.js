/* eslint-disable no-unused-expressions */
import { expect, waitUntil } from '@open-wc/testing';
import { cleanup, waitForPage } from './util.js';

import '../src/pb-page.js';
import '../src/pb-table-grid.js';

const MOCK_DATA = {
  count: 15,
  results: [
    {
      name: 'Kant',
      birth: '1724',
      death: '1804',
      nationality: 'German',
      known_for: 'Critique of Pure Reason',
    },
    {
      name: 'Nietzsche',
      birth: '1844',
      death: '1900',
      nationality: 'German',
      known_for: 'Thus Spoke Zarathustra',
    },
    {
      name: 'Hegel',
      birth: '1770',
      death: '1831',
      nationality: 'German',
      known_for: 'Phenomenology of Spirit',
    },
    {
      name: 'Hume',
      birth: '1711',
      death: '1776',
      nationality: 'Scottish',
      known_for: 'A Treatise of Human Nature',
    },
    {
      name: 'Locke',
      birth: '1632',
      death: '1704',
      nationality: 'English',
      known_for: 'Essay Concerning Human Understanding',
    },
  ],
};

/**
 * @param {string} extraAttributes
 */
const GRID_FIXTURE = extraAttributes => `
  <pb-page endpoint="." api-version="1.0.0">
    <pb-table-grid source="./philosophers.json" css-path="/css/gridjs" per-page="5" ${extraAttributes}>
      <pb-table-column label="Name" property="name"></pb-table-column>
      <pb-table-column label="Born" property="birth"></pb-table-column>
      <pb-table-column label="Nationality" property="nationality"></pb-table-column>
    </pb-table-grid>
  </pb-page>
`;

describe('pb-table-grid', () => {
  let origFetch;

  beforeEach(() => {
    origFetch = window.fetch;
    window.fetch = async (url, opts) => {
      if (String(url).endsWith('.css')) {
        return origFetch(url, opts);
      }
      return new Response(JSON.stringify(MOCK_DATA), {
        headers: { 'Content-Type': 'application/json' },
      });
    };
  });

  afterEach(() => {
    window.fetch = origFetch;
    cleanup();
  });

  /**
   * @param {string} extraAttributes - Additional attributes to add to the pb-table-grid
   */
  async function renderGrid(extraAttributes = '') {
    const el = await waitForPage(GRID_FIXTURE(extraAttributes));
    /** @type {any} */
    const grid = el.querySelector('pb-table-grid');
    await waitUntil(
      () => !!grid.shadowRoot.querySelector('.gridjs-pagination'),
      'pagination should render',
      { timeout: 5000 },
    );
    return grid;
  }

  it('renders table with pagination at the bottom by default', async () => {
    const grid = await renderGrid();
    expect(grid.shadowRoot.querySelector('.gridjs-footer .gridjs-pagination')).to.exist;
    expect(grid.shadowRoot.querySelector('.gridjs-head .gridjs-pagination')).to.be.null;
  });

  it('renders pagination at the top when pagination-top is set', async () => {
    const grid = await renderGrid('pagination-top');
    expect(grid.shadowRoot.querySelector('.gridjs-head .gridjs-pages')).to.exist;
  });

  it('applies visibleColumns and hides non-listed columns', async () => {
    const grid = await renderGrid();
    grid.visibleColumns = ['name', 'nationality'];
    await grid.updateComplete;
    await waitUntil(() => Array.isArray(grid._columns) && grid._columns.length > 0, 'columns should exist', {
      timeout: 5000,
    });

    const columnById = id => grid._columns.find(col => col.id === id);
    expect(columnById('name').hidden).to.not.be.true;
    expect(columnById('nationality').hidden).to.not.be.true;
    expect(columnById('birth').hidden).to.be.true;
  });

  it('toggles row highlight and clears it on outside click', async () => {
    const grid = await renderGrid();
    await waitUntil(
      () => !!grid.shadowRoot.querySelector('tbody tr'),
      'at least one row should render',
      { timeout: 5000 },
    );
    const firstRow = grid.shadowRoot.querySelector('tbody tr');

    firstRow.click();
    await grid.updateComplete;
    expect(firstRow.classList.contains('grid-row-selected')).to.be.true;

    firstRow.click();
    await grid.updateComplete;
    expect(firstRow.classList.contains('grid-row-selected')).to.be.false;

    firstRow.click();
    await grid.updateComplete;
    expect(firstRow.classList.contains('grid-row-selected')).to.be.true;

    document.body.click();
    await grid.updateComplete;
    expect(firstRow.classList.contains('grid-row-selected')).to.be.false;
  });
});
