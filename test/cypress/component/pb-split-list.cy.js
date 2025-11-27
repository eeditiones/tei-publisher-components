// Cypress CT: pb-split-list
import '../../../src/pb-split-list.js'

describe('pb-split-list', () => {
  it('should mount', () => {
    cy.mount('<pb-split-list></pb-split-list>')
    cy.get('pb-split-list').should('exist')
  })

  it('should accept url attribute', () => {
    cy.mount('<pb-split-list url="api/people"></pb-split-list>')
    cy.get('pb-split-list').then($el => {
      expect($el[0].url).to.equal('api/people')
    })
  })

  it('should accept selected attribute', () => {
    cy.mount('<pb-split-list selected="A"></pb-split-list>')
    cy.get('pb-split-list').then($el => {
      expect($el[0].selected).to.equal('A')
    })
  })

  it('should accept subforms attribute', () => {
    cy.mount('<pb-split-list subforms="#myform"></pb-split-list>')
    cy.get('pb-split-list').then($el => {
      expect($el[0].subforms).to.equal('#myform')
    })
  })

  it('should have load method', () => {
    cy.mount('<pb-split-list></pb-split-list>')
    cy.get('pb-split-list').then($el => {
      expect($el[0].load).to.be.a('function')
    })
  })

  it('should have submit method', () => {
    cy.mount('<pb-split-list></pb-split-list>')
    cy.get('pb-split-list').then($el => {
      expect($el[0].submit).to.be.a('function')
    })
  })

  it('should render header for categories', () => {
    cy.mount('<pb-split-list></pb-split-list>')
    cy.get('pb-split-list').then($el => {
      const component = $el[0]
      component._categories = [
        { category: 'A', count: 3 },
        { category: 'B', count: 2 }
      ]
      component.selected = 'A'
      component.requestUpdate()
      return component.updateComplete
    })
    
    cy.get('pb-split-list').find('header').should('exist')
    cy.get('pb-split-list').find('[part*="category"]').should('have.length', 2)
  })

  it('should render active category with correct part', () => {
    cy.mount('<pb-split-list></pb-split-list>')
    cy.get('pb-split-list').then($el => {
      const component = $el[0]
      component._categories = [
        { category: 'A', count: 3 },
        { category: 'B', count: 2 }
      ]
      component.selected = 'A'
      component.requestUpdate()
      return component.updateComplete
    })
    
    cy.get('pb-split-list').find('[part="active-category"]').should('exist')
    cy.get('pb-split-list').find('[part="active-category"]').should('contain.text', 'A')
  })

  it('should render slot for items', () => {
    cy.mount('<pb-split-list><div class="test-item">Test</div></pb-split-list>')
    cy.get('pb-split-list').find('#items').should('exist')
    cy.get('pb-split-list').find('.test-item').should('contain.text', 'Test')
  })

  it('should change selection on category click', () => {
    cy.mount('<pb-split-list></pb-split-list>')
    cy.get('pb-split-list').then($el => {
      const component = $el[0]
      component._categories = [
        { category: 'A', count: 3 },
        { category: 'B', count: 2 }
      ]
      component.selected = 'A'
      component._endpoint = '.'
      component.requestUpdate()
      return component.updateComplete
    })
    
    cy.get('pb-split-list').find('[part="category"]').contains('B').click()
    cy.get('pb-split-list').then($el => {
      expect($el[0].selected).to.equal('B')
    })
  })
})
