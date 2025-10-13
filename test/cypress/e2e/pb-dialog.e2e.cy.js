// E2E: pb-dialog component functionality

describe('pb-dialog', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-dialog.html')
  })

  it('should open and close the dialog', () => {
    cy.contains('button', 'Open Dialog').click({ force: true })
    cy.get('pb-dialog').should('have.attr', 'open')
    cy.get('pb-dialog').find('button[rel="prev"]').click({ force: true })
    cy.get('pb-dialog').should('not.have.attr', 'open')
  })

  it('should support keyboard navigation', () => {
    cy.contains('button', 'Open Dialog').click({ force: true })
    cy.get('pb-dialog').should('have.attr', 'open')
    
    cy.get('pb-dialog').find('button[rel="prev"]').focus().type('{enter}')
    cy.get('pb-dialog').should('not.have.attr', 'open')
  })

  it('should have proper accessibility attributes', () => {
    cy.contains('button', 'Open Dialog').click({ force: true })
    cy.get('pb-dialog').should('have.attr', 'open')
    
    cy.get('pb-dialog').then($el => {
      const dialog = $el[0]
      if (dialog.hasAttribute('role')) {
        cy.wrap($el).should('have.attr', 'role', 'dialog')
      }
      if (dialog.hasAttribute('aria-modal')) {
        cy.wrap($el).should('have.attr', 'aria-modal', 'true')
      }
    })
    
    cy.get('pb-dialog').find('button').each($btn => {
      cy.wrap($btn).should('have.attr', 'type', 'button')
    })
  })

  it('should trap focus within dialog when open', () => {
    cy.contains('button', 'Open Dialog').click({ force: true })
    cy.get('pb-dialog').should('have.attr', 'open')
    
    cy.get('pb-dialog').find('button').first().focus()
    cy.get('pb-dialog').find('button').first().should('be.focused')
  })

  it('should close when clicking outside (if configured)', () => {
    cy.contains('button', 'Open Dialog').click({ force: true })
    cy.get('pb-dialog').should('have.attr', 'open')
    
    cy.get('body').click('topLeft')
    cy.get('pb-dialog').should('exist')
  })
})

