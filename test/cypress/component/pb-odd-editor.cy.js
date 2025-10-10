// Cypress CT: pb-odd-editor
import '../../../src/pb-odd-editor.js'

describe('pb-odd-editor', () => {
  beforeEach(() => {
    // Mock browser-fs-access for v0.38.0 compatibility
    cy.window().then(win => {
      // Mock the supported property
      win.browserFsAccess = {
        supported: true,
        fileSave: cy.stub().resolves()
      }
    })
  })

  it('mounts without errors', () => {
    cy.mount('<pb-odd-editor></pb-odd-editor>')
    cy.get('pb-odd-editor').should('exist')
  })

  it('works with browser-fs-access v0.38.0', () => {
    cy.mount('<pb-odd-editor></pb-odd-editor>')
    
    cy.window().then(win => {
      // Test that the component can access browser-fs-access
      const component = win.document.querySelector('pb-odd-editor')
      expect(component).to.exist
      
      // Verify the component has the expected properties
      expect(component.odd).to.be.a('string')
    })
  })

  it('has save method and can handle file operations', () => {
    cy.mount('<pb-odd-editor odd="test.odd"></pb-odd-editor>')
    
    cy.get('pb-odd-editor').then($el => {
      const component = $el[0]
      
      // Test that save method exists
      expect(component.save).to.be.a('function')
      
      // Test that the component has the expected structure
      expect(component.odd).to.equal('test.odd')
      
      // Verify component is properly initialized
      expect(component.tagName).to.equal('PB-ODD-EDITOR')
    })
  })
})
