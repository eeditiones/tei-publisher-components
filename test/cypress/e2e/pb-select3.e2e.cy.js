// Cypress E2E: pb-select3
describe('pb-select3 e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-select3.html')
    cy.window().then(win => {
      return new Cypress.Promise(resolve => {
        const timeout = setTimeout(resolve, 2000) // 2s timeout
        win.addEventListener('pb-page-ready', () => {
          clearTimeout(timeout)
          resolve()
        }, { once: true })
      })
    })
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
