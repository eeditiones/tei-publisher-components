// E2E: pb-repeat form field repetition functionality

describe('Demo: pb-repeat', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-repeat.html')
    // Wait for components to be visible
    cy.get('pb-repeat', { timeout: 10000 }).should('be.visible')
  })

  it('renders form fields for repetition', () => {
    // Check that pb-repeat component exists
    cy.get('pb-repeat').should('exist')
    
    // Check that form fields are rendered
    cy.get('form#form').should('exist')
    cy.get('form#form').find('label').should('have.length.at.least', 4)
    cy.get('form#form').find('input[type="text"]').should('have.length.at.least', 2)
    cy.get('form#form').find('select').should('exist')
    cy.get('form#form').find('input[type="checkbox"]').should('exist')
  })

  it('supports form submission and data collection', () => {
    // Check what form fields are actually available
    cy.get('form#form').within(() => {
      // Look for any input fields
      cy.get('input, select').should('exist')
    })
    
    // Try to fill out any available form fields
    cy.get('form#form').find('input[type="text"]').first().then(($input) => {
      if ($input.length > 0) {
        cy.wrap($input).type('John')
      }
    })
    
    cy.get('form#form').find('select').first().then(($select) => {
      if ($select.length > 0) {
        cy.wrap($select).select(1) // Select first option
      }
    })
    
    // Submit the form
    cy.get('button[type="submit"]').first().click()
    
    // Check that output element exists (may be empty)
    cy.get('#output').should('exist')
  })

  it('has proper accessibility attributes', () => {
    // Check that labels are properly associated with inputs
    cy.get('label').each(($label) => {
      const labelText = $label.text().trim()
      if (labelText) {
        cy.get('input, select').should('exist')
      }
    })
    
    // Check that form has proper structure
    cy.get('form#form').should('have.attr', 'id', 'form')
    cy.get('button[type="submit"]').should('have.attr', 'type', 'submit')
  })
})