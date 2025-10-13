// E2E: pb-download component functionality

describe('pb-download', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-download.html')
    cy.window().then(win => {
      return new Cypress.Promise(resolve => {
        win.addEventListener('pb-page-ready', resolve, { once: true })
      })
    })
  })

  it('should compute href for document-based download', () => {
    cy.get('pb-download[type="pdf"][src="document1"]').find('#button')
      .should('have.attr', 'href')
      .then((href) => {
        if (href.includes('/api/document/')) {
          cy.wrap(href).should('match', /api\/document\/.*\/pdf\?odd=.*\.odd&token=\d+/)
        } else {
          cy.wrap(href).should('match', /documentation\.xml\.pdf\?odd=docbook\.odd&cache=no&token=\d+/)
        }
      })
      .and('include', 'docbook.odd')
  })

  it('should set target _blank when source flag is present', () => {
    cy.contains('span', 'FO source').parents('pb-download').find('#button')
      .should('have.attr', 'target', '_blank')
  })
})
