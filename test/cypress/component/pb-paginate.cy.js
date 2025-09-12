// Cypress CT: pb-paginate
import '../../../src/pb-paginate.js'

describe('pb-paginate', () => {
  beforeEach(() => {
    cy.mount('<pb-paginate id="pg" per-page="10"></pb-paginate>')
  })

  it('emits events when page is clicked after receiving results', () => {
    const onPaginate = new Cypress.Promise((resolve) => {
      document.addEventListener('pb-paginate', function(ev){ if (ev.detail && ev.detail.key === '__default__') resolve(ev) }, { once: true })
    })
    cy.document().then((doc) => {
      doc.dispatchEvent(new CustomEvent('pb-results-received', { detail: { key: '__default__', count: 30, start: 1 }, bubbles: true, composed: true }))
    })
    cy.get('#pg').find('span').contains('2').click({ force: true })
    cy.wrap(onPaginate).then((ev) => {
      expect(ev.detail.params.start).to.equal(11)
      expect(ev.detail.params['per-page']).to.equal(10)
    })
  })
})

