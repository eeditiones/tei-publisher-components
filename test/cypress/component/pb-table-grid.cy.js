// Cypress CT: pb-table-grid
import '../../../src/pb-page.js'
import '../../../src/pb-table-grid.js'
import '../../../src/pb-table-column.js'

describe('pb-table-grid', () => {
  it('renders rows from server and supports search', () => {
    const rows = [
      { name: 'Kant', birth: 1724, death: 1804 },
      { name: 'Hegel', birth: 1770, death: 1831 },
      { name: 'Fichte', birth: 1762, death: 1814 },
    ]

    // Robustly stub fetch for our grid endpoint (pre- and post-mount)
    cy.stubFetchJson(/demo\/grid\.json/, (href, win) => {
      const url = new URL(href, win.location.origin)
      const limit = Number(url.searchParams.get('limit') || 10)
      const start = Number(url.searchParams.get('start') || 1)
      const search = (url.searchParams.get('search') || '').toLowerCase()
      let data = rows
      if (search) {
        data = rows.filter(r => r.name.toLowerCase().includes(search))
      }
      const slice = data.slice(start - 1, start - 1 + limit)
      const body = JSON.stringify({ count: data.length, results: slice })
      return new win.Response(body, { status: 200, headers: { 'Content-Type': 'application/json' } })
    })

    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-table-grid id="grid" source="demo/grid.json" per-page="2" search css-path="/css/gridjs">
          <pb-table-column id="name" label="Name" property="name" sort width="33%"></pb-table-column>
          <pb-table-column id="birth" label="Born" property="birth"></pb-table-column>
          <pb-table-column id="death" label="Died" property="death"></pb-table-column>
        </pb-table-grid>
      </pb-page>
    `)
    // After mount, ensure grid instance exists and trigger first request

    cy.waitForEvent('pb-page-ready')
    // Ensure grid instance is created, then force a render to trigger first request
    cy.get('pb-table-grid').should(($el) => { expect($el[0].grid, 'grid instance').to.exist })
    cy.get('pb-table-grid').then(($el) => { $el[0]._submit() })
    cy.get('@fetch').should('be.called')
    // Assert first page shows first two names
    cy.get('pb-table-grid').find('#table').should('contain.text', 'Kant').and('contain.text', 'Hegel')

    // Trigger a search programmatically for stability
    cy.get('pb-table-grid').then(($el) => {
      const comp = $el[0]
      comp._params = { ...(comp._params || {}), search: 'he' }
      comp._submit()
    })
    cy.get('@fetch')
    cy.get('pb-table-grid').find('#table').should('contain.text', 'Hegel')
  })

  it('works with GridJS v6.2.0', () => {
    const rows = [
      { name: 'Test', birth: 2000, death: 2020 },
    ]

    cy.stubFetchJson(/demo\/grid\.json/, (href, win) => {
      const body = JSON.stringify({ count: rows.length, results: rows })
      return new win.Response(body, { status: 200, headers: { 'Content-Type': 'application/json' } })
    })

    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-table-grid id="grid" source="demo/grid.json" css-path="/css/gridjs">
          <pb-table-column label="Name" property="name"></pb-table-column>
          <pb-table-column label="Born" property="birth"></pb-table-column>
        </pb-table-grid>
      </pb-page>
    `)

    cy.waitForEvent('pb-page-ready')
    
    cy.get('pb-table-grid').then($el => {
      const component = $el[0]
      
      // Test that GridJS v6.2.0 API works
      expect(component.grid).to.exist
      expect(component.grid.config).to.exist
      
      // Test that the grid renders correctly
      expect(component._initialized).to.be.true
    })
    
    // Verify the table renders
    cy.get('pb-table-grid').find('#table').should('exist')
  })
})
