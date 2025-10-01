// E2E coverage for demo/pb-select2.html
describe('Demo: pb-select2', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-select2.html')
    cy.get('#select2-form').should('exist')
  })

  it('loads remote options and submits selection', () => {
    cy.get('pb-select[name="lang"]')
      .find('select option')
      .should('have.length.greaterThan', 10)

    cy.get('pb-select[name="lang"]')
      .find('select')
      .select('en')

    cy.get('pb-select[name="lang"]').then($el => cy.wrap($el[0].updateComplete))

    cy.get('#select2-form').submit()
    cy.get('#select2-output').should('contain', 'lang=en')
  })
})
