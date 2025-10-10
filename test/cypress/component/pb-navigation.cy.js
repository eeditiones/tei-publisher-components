// Cypress CT: pb-navigation
import '../../../src/pb-navigation.js'

describe('pb-navigation', () => {
  it('mounts', () => {
    cy.mount('<pb-navigation></pb-navigation>')
    cy.get('pb-navigation').should('exist')
  })

  it('renders button with slot content', () => {
    cy.mount('<pb-navigation rendition="visible">Next</pb-navigation>')
    cy.get('pb-navigation').should('contain.text', 'Next')
  })

  it('defaults to forward direction', () => {
    cy.mount('<pb-navigation></pb-navigation>')
    cy.get('pb-navigation').then($el => {
      expect($el[0].direction).to.equal('forward')
    })
  })

  it('accepts backward direction', () => {
    cy.mount('<pb-navigation direction="backward"></pb-navigation>')
    cy.get('pb-navigation').then($el => {
      expect($el[0].direction).to.equal('backward')
    })
  })

  it('is disabled by default', () => {
    cy.mount('<pb-navigation></pb-navigation>')
    cy.get('pb-navigation').should('have.attr', 'disabled')
  })

  it('emits pb-navigate on click', () => {
    cy.mount('<pb-navigation direction="forward" rendition="visible">Next</pb-navigation>')
    
    const wait = new Cypress.Promise((resolve) => {
      document.addEventListener('pb-navigate', resolve, { once: true })
    })
    
    cy.get('pb-navigation').find('button').click({ force: true })
    
    cy.wrap(wait).then((ev) => {
      expect(ev.detail.direction).to.equal('forward')
    })
  })

  it('emits correct direction on backward click', () => {
    cy.mount('<pb-navigation direction="backward" rendition="visible">Previous</pb-navigation>')
    
    const wait = new Cypress.Promise((resolve) => {
      document.addEventListener('pb-navigate', resolve, { once: true })
    })
    
    cy.get('pb-navigation').find('button').click({ force: true })
    
    cy.wrap(wait).then((ev) => {
      expect(ev.detail.direction).to.equal('backward')
    })
  })

  it('enables when pb-update event indicates next available', () => {
    cy.mount('<pb-navigation direction="forward"></pb-navigation>')
    
    cy.get('pb-navigation').should('have.attr', 'disabled')
    
    cy.get('pb-navigation').then($el => {
      const component = $el[0]
      component._update({ detail: { data: { next: true } } })
      return component.updateComplete
    })
    
    cy.get('pb-navigation').should('not.have.attr', 'disabled')
  })

  it('disables when pb-update event indicates no next', () => {
    cy.mount('<pb-navigation direction="forward"></pb-navigation>')
    
    cy.get('pb-navigation').then($el => {
      const component = $el[0]
      // First enable it
      component._update({ detail: { data: { next: true } } })
      return component.updateComplete
    })
    
    cy.get('pb-navigation').should('not.have.attr', 'disabled')
    
    cy.get('pb-navigation').then($el => {
      const component = $el[0]
      // Then disable it
      component._update({ detail: { data: { next: false } } })
      return component.updateComplete
    })
    
    cy.get('pb-navigation').should('have.attr', 'disabled')
  })

  it('enables backward navigation when previous available', () => {
    cy.mount('<pb-navigation direction="backward"></pb-navigation>')
    
    cy.get('pb-navigation').should('have.attr', 'disabled')
    
    cy.get('pb-navigation').then($el => {
      const component = $el[0]
      component._update({ detail: { data: { previous: true } } })
      return component.updateComplete
    })
    
    cy.get('pb-navigation').should('not.have.attr', 'disabled')
  })

  it('respects rendition="hidden" when disabled', () => {
    cy.mount('<pb-navigation rendition="hidden"></pb-navigation>')
    cy.get('pb-navigation').should('have.css', 'display', 'none')
  })

  it('respects rendition="invisible" when disabled', () => {
    cy.mount('<pb-navigation rendition="invisible"></pb-navigation>')
    cy.get('pb-navigation').should('have.css', 'visibility', 'hidden')
  })

  it('respects rendition="visible" when disabled', () => {
    cy.mount('<pb-navigation rendition="visible"></pb-navigation>')
    cy.get('pb-navigation').should('have.css', 'visibility', 'visible')
  })

  it('button has type attribute', () => {
    cy.mount('<pb-navigation></pb-navigation>')
    cy.get('pb-navigation').find('button').should('have.attr', 'type', 'button')
  })
})
