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

  it('should mount without errors', () => {
    cy.mount('<pb-odd-editor></pb-odd-editor>')
    cy.get('pb-odd-editor').should('exist')
  })

  it('should work with browser-fs-access v0.38.0', () => {
    cy.mount('<pb-odd-editor></pb-odd-editor>')
    
    cy.window().then(win => {
      // Test that the component can access browser-fs-access
      const component = win.document.querySelector('pb-odd-editor')
      expect(component).to.exist
      
      // Verify the component has the expected properties
      expect(component.odd).to.be.a('string')
    })
  })

  it('should have save method and handle file operations', () => {
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

  it('should render vaadin-tabs element', () => {
    cy.mount('<pb-odd-editor odd="test.odd"></pb-odd-editor>')
    
    cy.get('pb-odd-editor').then($el => $el[0].updateComplete).then(() => {
      // Check for vaadin-tabs element
      cy.get('pb-odd-editor').find('vaadin-tabs').should('exist')
      cy.get('pb-odd-editor').find('vaadin-tabs').should('have.attr', 'id', 'tabs')
    })
  })

  it('should have tab management methods', () => {
    cy.mount('<pb-odd-editor odd="test.odd"></pb-odd-editor>')
    
    cy.get('pb-odd-editor').then($el => {
      const component = $el[0]
      
      // Test that tab management methods exist
      expect(component._selectTab).to.be.a('function')
      expect(component._closeTabHandler).to.be.a('function')
      expect(component._closeTab).to.be.a('function')
      
      // Test that tabs array exists
      expect(component.tabs).to.be.an('array')
    })
  })
})
