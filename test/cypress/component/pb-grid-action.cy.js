// Cypress CT: pb-grid-action
import '../../../src/pb-mixin.js'
import '../../../src/pb-grid-action.js'

describe('pb-grid-action', () => {
  it('should mount', () => {
    cy.mount('<pb-grid-action></pb-grid-action>')
    cy.get('pb-grid-action').should('exist')
  })

  it('should render button element', () => {
    cy.mount('<pb-grid-action>Add Panel</pb-grid-action>')
    cy.get('pb-grid-action').should('exist')
    cy.get('pb-grid-action').find('button').should('exist')
    cy.get('pb-grid-action').find('button').should('have.attr', 'type', 'button')
  })

  it('should have correct default properties', () => {
    cy.mount('<pb-grid-action></pb-grid-action>')
    cy.get('pb-grid-action').then(($el) => {
      const el = $el[0]
      expect(el.action).to.equal('add')
      expect(el.initial).to.equal(0)
    })
  })

  it('should set properties correctly', () => {
    cy.mount('<pb-grid-action action="remove" initial="1" grid="#test">Remove</pb-grid-action>')
    cy.get('pb-grid-action').then(($el) => {
      const el = $el[0]
      expect(el.action).to.equal('remove')
      expect(el.initial).to.equal(1)
      expect(el.grid).to.equal('#test')
    })
  })

  it('should handle invalid grid selector gracefully', () => {
    cy.mount('<pb-grid-action grid="#nonexistent" action="add">Add</pb-grid-action>')
    
    // Should not throw error when clicking
    cy.get('pb-grid-action').find('button').click()
    cy.get('pb-grid-action').should('exist')
  })
})

