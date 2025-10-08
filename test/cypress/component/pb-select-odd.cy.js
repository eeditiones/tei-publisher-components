import '../../../src/pb-page.js'
import '../../../src/pb-select-odd.js'

describe('pb-select-odd', () => {
  it('mounts and renders dropdown', () => {
    const html = '<pb-page endpoint="." api-version="1.0.0"><pb-select-odd id="sel" odd="default"></pb-select-odd></pb-page>'
    cy.mount(html)
    cy.window().then((win) => {
      cy.stub(win, 'fetch').callsFake(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve([{ name: 'default', label: 'Default' }])
        })
      )
    })
    cy.document().then((doc) => {
      doc.dispatchEvent(new CustomEvent('pb-page-ready', { detail: { endpoint: '.', apiVersion: '1.0.0' } }))
    })
    cy.get('#sel').should('exist')
    cy.get('#sel').shadow().find('select').should('exist')
  })
})
