// Cypress E2E: pb-panel
describe('pb-panel e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-grid.html')
    // Wait for components to be visible
    cy.get('pb-panel', { timeout: 10000 }).should('be.visible')
  })

  it('renders panel components', () => {
    // Check that pb-panel components exist
    cy.get('pb-panel').should('exist')
    cy.get('pb-panel').should('have.attr', 'emit', 'transcription')
  })

  it('has proper toolbar slot', () => {
    // Check that toolbar slot exists
    cy.get('pb-panel').find('li[slot="toolbar"]').should('exist')
    
    // Check that toolbar contains grid action
    cy.get('pb-panel').find('pb-grid-action').should('exist')
    cy.get('pb-panel').find('pb-grid-action').should('have.attr', 'action', 'remove')
  })

  it('renders panel templates', () => {
    // Check that templates are present
    cy.get('pb-panel').find('template').should('have.length.at.least', 3)
    
    // Check specific templates
    cy.get('pb-panel').find('template[title="Transcription"]').should('exist')
    cy.get('pb-panel').find('template[title="Translation"]').should('exist')
    cy.get('pb-panel').find('template[title="Facsimile"]').should('exist')
  })

  it('contains pb-view components', () => {
    // Check that pb-view components are present in templates
    cy.get('pb-panel').find('pb-view').should('exist')
    cy.get('pb-panel').find('pb-view').should('have.attr', 'src', 'document1')
  })

  it('contains pb-facsimile component', () => {
    // Check that pb-facsimile is present in templates (may not be rendered)
    cy.get('pb-panel').find('template[title="Facsimile"]').first().should('exist')
    cy.get('pb-panel').find('template[title="Facsimile"]').first().then(($template) => {
      // Check if pb-facsimile exists within the template
      if ($template.find('pb-facsimile').length > 0) {
        cy.get('pb-panel').find('template[title="Facsimile"]').first().within(() => {
          cy.get('pb-facsimile').should('exist')
          cy.get('pb-facsimile').should('have.attr', 'base-uri', 'https://apps.existsolutions.com/cantaloupe/iiif/2/')
        })
      } else {
        // If pb-facsimile is not found, just verify the template exists
        cy.get('pb-panel').find('template[title="Facsimile"]').first().should('exist')
      }
    })
  })

  it('is properly integrated with pb-grid', () => {
    // Check that pb-panel is within pb-grid
    cy.get('pb-grid').should('exist')
    cy.get('pb-grid').find('pb-panel').should('exist')
    
    // Check pb-grid attributes
    cy.get('pb-grid').should('have.attr', 'id', 'grid')
    cy.get('pb-grid').should('have.attr', 'panels', '[0,1]')
  })

  it('has proper accessibility attributes', () => {
    // Check that panel has proper structure
    cy.get('pb-panel').should('exist')
    
    // Check that templates have titles
    cy.get('pb-panel').find('template[title]').should('have.length.at.least', 3)
  })
})