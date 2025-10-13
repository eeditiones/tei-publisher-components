// Cypress E2E: pb-select2
describe('pb-select2 e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-select2.html')
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

  it('loads remote options and submits selection', () => {
    cy.inShadow('pb-select[name="lang"]', 'select option').should('have.length.greaterThan', 10)

    cy.inShadow('pb-select[name="lang"]', 'select').first().select('en')
    cy.waitUpdate('pb-select[name="lang"]')

    cy.get('#select2-form').submit()
    cy.get('#select2-output').should('contain', 'lang=en')
  })
})
