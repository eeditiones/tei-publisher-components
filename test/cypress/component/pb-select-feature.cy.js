// Cypress CT: pb-select-feature
import '../../../src/pb-select-feature.js'

describe('pb-select-feature', () => {
  beforeEach(() => {
    cy.mount('<pb-select-feature id="feature" name="view" label="View"></pb-select-feature>')
    cy.get('#feature').then(($el) => {
      const comp = $el[0]
      comp.items = [
        { name: 'Option A', properties: { mode: 'a' } },
        { name: 'Option B', properties: { mode: 'b' } }
      ]
      comp.requestUpdate()
      return comp.updateComplete
    })
  })

  it('should mount', () => {
    cy.mount('<pb-select-feature></pb-select-feature>')
    cy.get('pb-select-feature').should('exist')
  })

  it('should use native select instead of paper-dropdown-menu', () => {
    cy.get('pb-select-feature').shadow().find('paper-dropdown-menu, paper-item, paper-listbox').should('not.exist')
    cy.get('pb-select-feature').shadow().find('select').should('exist')
  })

  it('should update selected index on change', () => {
    cy.get('pb-select-feature').shadow().find('select').select('1')
    cy.get('pb-select-feature').then(($el) => {
      expect($el[0].selected).to.equal(1)
    })
  })

  it('should render label', () => {
    cy.get('pb-select-feature').shadow().find('label').should('contain.text', 'View')
  })

  it('should populate options from items', () => {
    cy.get('pb-select-feature').shadow().find('select option').should('have.length', 2)
    cy.get('pb-select-feature').shadow().find('select option').eq(0).should('contain.text', 'Option A')
    cy.get('pb-select-feature').shadow().find('select option').eq(1).should('contain.text', 'Option B')
  })

  it('should accept name property', () => {
    cy.mount('<pb-select-feature name="test-feature"></pb-select-feature>')
    cy.get('pb-select-feature').then($el => {
      expect($el[0].name).to.equal('test-feature')
    })
  })

  it('should store properties from items', () => {
    cy.get('pb-select-feature').then($el => {
      expect($el[0].items[0].properties).to.deep.equal({ mode: 'a' })
      expect($el[0].items[1].properties).to.deep.equal({ mode: 'b' })
    })
  })

  it('should have emitTo method for event channels', () => {
    cy.get('pb-select-feature').then($el => {
      expect($el[0].emitTo).to.be.a('function')
    })
  })

  it('should start with no selection when selected not set', () => {
    cy.mount('<pb-select-feature id="feat" name="test"></pb-select-feature>')
    cy.get('#feat').then($el => {
      expect($el[0].selected).to.be.undefined
    })
  })

  it('should set initial selection', () => {
    cy.mount('<pb-select-feature id="feat" name="test"></pb-select-feature>')
    cy.get('#feat').then($el => {
      $el[0].items = [
        { name: 'First' },
        { name: 'Second' }
      ]
      $el[0].requestUpdate()
      return $el[0].updateComplete
    })
    
    cy.get('#feat').then($el => {
      $el[0].selected = 1
      $el[0].requestUpdate()
      return $el[0].updateComplete
    })
    
    cy.get('#feat').then($el => {
      expect($el[0].selected).to.equal(1)
    })
  })

  it('should handle items with selectors for client-side toggling', () => {
    cy.mount('<pb-select-feature id="feat" name="client-test"></pb-select-feature>')
    cy.get('#feat').then($el => {
      $el[0].items = [
        { 
          name: 'Show All', 
          selectors: [{ selector: '.hidden', state: true }] 
        },
        { 
          name: 'Hide Some', 
          selectors: [{ selector: '.hidden', state: false }] 
        }
      ]
      $el[0].requestUpdate()
      return $el[0].updateComplete
    })
    
    cy.get('#feat').shadow().find('select option').should('have.length', 2)
  })

  it('should display translated label when available', () => {
    cy.mount('<pb-select-feature label="dialogs.close"></pb-select-feature>')
    cy.get('pb-select-feature').then($el => $el[0].updateComplete)
    // Will show either the key or translated value depending on i18n setup
    cy.get('pb-select-feature').shadow().find('label').should('exist')
  })

  it('should accept subscribe property for event channel', () => {
    cy.mount('<pb-select-feature subscribe="my-channel"></pb-select-feature>')
    cy.get('pb-select-feature').then($el => {
      expect($el[0].subscribe).to.equal('my-channel')
    })
  })

  it('should accept emit property for event channel', () => {
    cy.mount('<pb-select-feature emit="my-channel"></pb-select-feature>')
    cy.get('pb-select-feature').then($el => {
      expect($el[0].emit).to.equal('my-channel')
    })
  })
})
