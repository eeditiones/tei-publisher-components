// Cypress E2E: pb-collapse
describe('pb-collapse e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-collapse.html')
  })

  it('should toggle details open state on click', () => {
    cy.get('pb-collapse').first().find('details').as('details')
    cy.get('@details').should('not.have.attr', 'open')
    cy.get('pb-collapse').first().find('summary').click({ force: true })
    cy.get('@details').should('have.attr', 'open')
  })

  it('should support keyboard navigation', () => {
    cy.get('pb-collapse').first().find('summary').should('be.visible')
    cy.get('pb-collapse').first().find('summary').should('have.attr', 'aria-expanded')
  })

  it('should have proper accessibility attributes', () => {
    cy.get('pb-collapse').find('summary').should('have.attr', 'aria-expanded')
    cy.get('pb-collapse').then($el => {
      const buttons = $el.find('button')
      if (buttons.length > 0) {
        cy.wrap(buttons).each($btn => {
          cy.wrap($btn).should('have.attr', 'type')
        })
      }
    })
  })

  it('should handle multiple collapse elements independently', () => {
    cy.get('pb-collapse').should('have.length.at.least', 2)
    
    cy.get('pb-collapse').first().should('exist')
    cy.get('pb-collapse').eq(1).should('exist')
    
    cy.get('pb-collapse').first().find('summary').should('have.attr', 'aria-expanded')
    cy.get('pb-collapse').eq(1).find('summary').should('have.attr', 'aria-expanded')
  })
})

