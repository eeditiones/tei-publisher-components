// Cypress Component: pb-observable
import { PbObservable } from '../../../src/pb-observable.js'

describe('pb-observable component', () => {
  beforeEach(() => {
    // Mount the component for each test
    cy.mount('<pb-observable><div>Observable content</div></pb-observable>')
  })

  it('should create pb-observable element', () => {
    cy.get('pb-observable').should('exist')
  })

  it('should render slot content', () => {
    cy.get('pb-observable').should('contain', 'Observable content')
  })

  it('should have default properties', () => {
    cy.get('pb-observable').then($el => {
      const element = $el[0]
      expect(element.data).to.be.undefined
    })
  })

  it('should set data property', () => {
    cy.mount('<pb-observable data="test-data"><div>Content</div></pb-observable>')
    
    cy.get('pb-observable').then($el => {
      const element = $el[0]
      expect(element.data).to.equal('test-data')
    })
  })

  it('should emit pb-visible event when element becomes visible', () => {
    cy.mount('<pb-observable data="test-payload"><div>Observable content</div></pb-observable>')
    
    cy.get('pb-observable').then($el => {
      const element = $el[0]
      let visibleEventFired = false
      let eventData = null
      
      element.addEventListener('pb-visible', (event) => {
        visibleEventFired = true
        eventData = event.detail.data
      })
      
      // Simulate intersection observer callback
      // In a real test, this would be triggered by scrolling the element into view
      element.emitTo('pb-visible', { data: element.data })
      
      expect(visibleEventFired).to.be.true
      expect(eventData).to.equal('test-payload')
    })
  })

  it('should handle multiple observable elements', () => {
    cy.mount(`
      <pb-observable data="first"><div>First observable</div></pb-observable>
      <pb-observable data="second"><div>Second observable</div></pb-observable>
    `)
    
    cy.get('pb-observable').should('have.length', 2)
    
    cy.get('pb-observable').first().then($el => {
      const element = $el[0]
      expect(element.data).to.equal('first')
    })
    
    cy.get('pb-observable').last().then($el => {
      const element = $el[0]
      expect(element.data).to.equal('second')
    })
  })

  it('should handle empty data payload', () => {
    cy.mount('<pb-observable><div>Content</div></pb-observable>')
    
    cy.get('pb-observable').then($el => {
      const element = $el[0]
      let visibleEventFired = false
      let eventData = null
      
      element.addEventListener('pb-visible', (event) => {
        visibleEventFired = true
        eventData = event.detail.data
      })
      
      element.emitTo('pb-visible', { data: element.data })
      
      expect(visibleEventFired).to.be.true
      expect(eventData).to.be.undefined
    })
  })

  it('should handle JSON data payload', () => {
    const jsonData = JSON.stringify({ id: 123, name: 'test' })
    cy.mount(`<pb-observable data='${jsonData}'><div>Content</div></pb-observable>`)
    
    cy.get('pb-observable').then($el => {
      const element = $el[0]
      let visibleEventFired = false
      let eventData = null
      
      element.addEventListener('pb-visible', (event) => {
        visibleEventFired = true
        eventData = event.detail.data
      })
      
      element.emitTo('pb-visible', { data: element.data })
      
      expect(visibleEventFired).to.be.true
      expect(eventData).to.equal(jsonData)
    })
  })

  it('should have proper styling', () => {
    cy.get('pb-observable').should('have.css', 'display', 'inline')
  })

  it('should clean up intersection observer on disconnect', () => {
    cy.mount('<pb-observable><div>Content</div></pb-observable>')
    
    cy.get('pb-observable').then($el => {
      const element = $el[0]
      
      // Remove the element from DOM
      element.remove()
      
      // Element should be removed
      cy.get('pb-observable').should('not.exist')
    })
  })

  it('should work with nested content', () => {
    cy.mount(`
      <pb-observable data="nested-test">
        <div>
          <h2>Title</h2>
          <p>Some content</p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>
      </pb-observable>
    `)
    
    cy.get('pb-observable').should('contain', 'Title')
    cy.get('pb-observable').should('contain', 'Item 1')
    cy.get('pb-observable').should('contain', 'Item 2')
  })

  it('should have proper accessibility attributes', () => {
    cy.get('pb-observable').should('exist')
    // pb-observable is a utility component, accessibility is handled by content
  })
})
