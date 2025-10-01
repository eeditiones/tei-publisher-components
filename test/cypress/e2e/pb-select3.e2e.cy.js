// E2E coverage for demo/pb-select3.html
describe('Demo: pb-select3', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-select3.html')
    cy.get('#select3-form').should('exist')
  })

  it('submits selected result together with subform values', () => {
    cy.inShadow('pb-select[name="result"]', 'select option').should('have.length.greaterThan', 10)

    cy.get('#select3-field').select('author')

    cy.inShadow('pb-select[name="result"]', 'select').first().select('de')
    cy.waitUpdate('pb-select[name="result"]')

    cy.get('#select3-form').submit()
    cy.get('#select3-output')
      .should('contain', 'result=de')
      .and('contain', 'field=author')
  })
})
