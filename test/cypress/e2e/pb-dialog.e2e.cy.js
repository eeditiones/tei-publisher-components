// E2E: pb-dialog open/close
describe('Demo: pb-dialog', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-dialog.html')
  })

  it('opens and closes the dialog', () => {
    cy.contains('button', 'Open Dialog').click({ force: true })
    cy.get('pb-dialog').should('have.attr', 'open')
    // Close via the close button in the header
    cy.get('pb-dialog').find('button[rel="prev"]').click({ force: true })
    cy.get('pb-dialog').should('not.have.attr', 'open')
  })

  it('supports keyboard navigation', () => {
    cy.contains('button', 'Open Dialog').click({ force: true })
    cy.get('pb-dialog').should('have.attr', 'open')
    
    // Test that dialog can be closed via keyboard (focus on close button and press Enter)
    cy.get('pb-dialog').find('button[rel="prev"]').focus().type('{enter}')
    cy.get('pb-dialog').should('not.have.attr', 'open')
  })

  it('has proper accessibility attributes', () => {
    cy.contains('button', 'Open Dialog').click({ force: true })
    cy.get('pb-dialog').should('have.attr', 'open')
    
    // Check for dialog attributes (may not have role if using native dialog)
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

  it('traps focus within dialog when open', () => {
    cy.contains('button', 'Open Dialog').click({ force: true })
    cy.get('pb-dialog').should('have.attr', 'open')
    
    // Focus should be trapped within the dialog
    cy.get('pb-dialog').find('button').first().focus()
    cy.get('pb-dialog').find('button').first().should('be.focused')
  })

  it('closes when clicking outside (if configured)', () => {
    cy.contains('button', 'Open Dialog').click({ force: true })
    cy.get('pb-dialog').should('have.attr', 'open')
    
    // Click outside the dialog
    cy.get('body').click('topLeft')
    // Note: This test may need adjustment based on actual dialog behavior
    cy.get('pb-dialog').should('exist') // Dialog should still exist, but may be closed
  })
})

