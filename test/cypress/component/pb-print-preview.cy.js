// Cypress CT: pb-print-preview
import '../../../src/pb-print-preview.js'

describe('pb-print-preview', () => {
  it('should mount', () => {
    cy.mount('<pb-print-preview></pb-print-preview>')
    cy.get('pb-print-preview').should('exist')
  })

  it('should accept url property', () => {
    cy.mount('<pb-print-preview url="test.html"></pb-print-preview>')
    cy.get('pb-print-preview').then($el => {
      expect($el[0].url).to.equal('test.html')
    })
  })

  it('should render iframe container', () => {
    cy.mount('<pb-print-preview></pb-print-preview>')
    cy.get('pb-print-preview').find('iframe').should('exist')
  })

  it('should have subscribe/emit properties for event channels', () => {
    cy.mount('<pb-print-preview subscribe="test" emit="test"></pb-print-preview>')
    cy.get('pb-print-preview').then($el => {
      expect($el[0].subscribe).to.equal('test')
      expect($el[0].emit).to.equal('test')
    })
  })
})

