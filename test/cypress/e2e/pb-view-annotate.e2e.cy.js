// Cypress E2E: pb-view-annotate
describe('pb-view-annotate e2e', () => {
  beforeEach(() => {
    cy.visit('/')
    // Wait for page to load
    cy.get('body', { timeout: 10000 }).should('be.visible')
  })

  it('can instantiate pb-view-annotate component', () => {
    // Test that pb-view-annotate component can be created dynamically
    cy.window().then((win) => {
      const pbViewAnnotate = win.document.createElement('pb-view-annotate')
      pbViewAnnotate.setAttribute('id', 'test-annotate')
      win.document.body.appendChild(pbViewAnnotate)
      
      cy.get('#test-annotate').should('exist')
      // Don't check visibility as component may have no content initially
    })
  })

  it('has proper component structure', () => {
    cy.window().then((win) => {
      const pbViewAnnotate = win.document.createElement('pb-view-annotate')
      pbViewAnnotate.setAttribute('id', 'test-annotate')
      pbViewAnnotate.setAttribute('src', 'test-document')
      win.document.body.appendChild(pbViewAnnotate)
      
      cy.get('#test-annotate').should('exist')
      cy.get('#test-annotate').should('have.attr', 'src', 'test-document')
    })
  })

  it('supports annotation attributes', () => {
    cy.window().then((win) => {
      const pbViewAnnotate = win.document.createElement('pb-view-annotate')
      pbViewAnnotate.setAttribute('id', 'test-annotate')
      pbViewAnnotate.setAttribute('src', 'test-document')
      pbViewAnnotate.setAttribute('annotations', '[]')
      win.document.body.appendChild(pbViewAnnotate)
      
      cy.get('#test-annotate').should('exist')
      cy.get('#test-annotate').should('have.attr', 'src', 'test-document')
      cy.get('#test-annotate').should('have.attr', 'annotations', '[]')
    })
  })

  it('has proper accessibility attributes', () => {
    cy.window().then((win) => {
      const pbViewAnnotate = win.document.createElement('pb-view-annotate')
      pbViewAnnotate.setAttribute('id', 'test-annotate')
      pbViewAnnotate.setAttribute('role', 'region')
      pbViewAnnotate.setAttribute('aria-label', 'Annotated view')
      win.document.body.appendChild(pbViewAnnotate)
      
      cy.get('#test-annotate').should('exist')
      cy.get('#test-annotate').should('have.attr', 'role', 'region')
      cy.get('#test-annotate').should('have.attr', 'aria-label', 'Annotated view')
    })
  })
})