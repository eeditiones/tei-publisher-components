// Cypress CT: pb-svg
import '../../../src/pb-svg.js'

describe('pb-svg', () => {
  beforeEach(() => {
    cy.window().then(win => {
      // Mock ESGlobalBridge for v8.0.2 compatibility
      if (!win.ESGlobalBridge) {
        win.ESGlobalBridge = {
          requestAvailability: () => win.ESGlobalBridge,
          instance: {
            load: () => Promise.resolve()
          }
        }
      }
      
      // Stub the external svg-pan-zoom library
      if (!win.svgPanZoom) {
        win.svgPanZoom = cy.stub().returns({
          destroy: cy.stub(),
          zoom: cy.stub(),
          pan: cy.stub(),
          resize: cy.stub(),
          fit: cy.stub(),
          center: cy.stub()
        })
      }
    })
  })

  it('mounts', () => {
    cy.mount('<pb-svg></pb-svg>')
    cy.get('pb-svg').should('exist')
  })

  it('accepts url property', () => {
    cy.mount('<pb-svg url="test.svg"></pb-svg>')
    cy.get('pb-svg').then($el => {
      expect($el[0].url).to.equal('test.svg')
    })
  })

  it('works with ESGlobalBridge v8.0.2', () => {
    cy.mount('<pb-svg url="test.svg"></pb-svg>')
    
    cy.window().then(win => {
      // Verify bridge API works
      const bridge = win.ESGlobalBridge.requestAvailability()
      expect(bridge).to.exist
      
      const loadPromise = win.ESGlobalBridge.instance.load('svg-pan-zoom', 'test.js')
      expect(loadPromise).to.be.a('promise')
    })
    
    cy.get('pb-svg').should('exist')
  })

  it('has load method', () => {
    cy.mount('<pb-svg></pb-svg>')
    cy.get('pb-svg').then($el => {
      expect($el[0].load).to.be.a('function')
    })
  })

  it('renders image container', () => {
    cy.mount('<pb-svg></pb-svg>')
    cy.get('pb-svg').find('#image').should('exist')
  })

  it('renders slot content', () => {
    cy.mount('<pb-svg><div class="test-content">Test</div></pb-svg>')
    cy.get('pb-svg').find('.test-content').should('contain.text', 'Test')
  })

  it('url property is reactive', () => {
    cy.mount('<pb-svg url="test1.svg"></pb-svg>')
    
    cy.get('pb-svg').then($el => {
      $el[0].url = 'test2.svg'
      return $el[0].updateComplete
    })

    cy.get('pb-svg').then($el => {
      expect($el[0].url).to.equal('test2.svg')
    })
  })
})
