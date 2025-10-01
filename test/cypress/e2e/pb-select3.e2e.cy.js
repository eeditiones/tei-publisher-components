// E2E coverage for demo/pb-select3.html
describe('Demo: pb-select3', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-select3.html')
    cy.get('#select3-form').should('exist')
  })

  // TODO(DP): not sure why these calls to shadow are necessary here to avoid multi selection
  it('submits selected result together with subform values', () => {
    cy.get('pb-select[name="result"]')
      .shadow()
      .find('select option')
      .should('have.length.greaterThan', 10)

    cy.get('#select3-field').select('author')

    cy.get('pb-select[name="result"]')
      .shadow()
      .find('select')
      .select('de')

    cy.get('pb-select[name="result"]').then($el => cy.wrap($el[0].updateComplete))

    cy.get('#select3-form').submit()
    cy.get('#select3-output')
      .should('contain', 'result=de')
      .and('contain', 'field=author')
  })
})
