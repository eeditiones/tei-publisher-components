// E2E coverage for demo/pb-select2.html
describe('Demo: pb-select2', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-select2.html')
    cy.get('#select2-form').should('exist')
  })

  it('loads remote options and submits selection', () => {
    cy.inShadow('pb-select[name="lang"]', 'select option').should('have.length.greaterThan', 10)

    cy.inShadow('pb-select[name="lang"]', 'select').first().select('en')
    cy.waitUpdate('pb-select[name="lang"]')

    cy.get('#select2-form').submit()
    cy.get('#select2-output').should('contain', 'lang=en')
  })
})
