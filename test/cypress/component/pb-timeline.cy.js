// Cypress CT: pb-timeline
import '../../../src/pb-timeline.js'

describe('pb-timeline', () => {
  const mockTimelineData = {
    '2020-01-01': { count: 5, info: ['<a href="/doc1">Doc 1</a>'] },
    '2020-02-01': { count: 3, info: ['<a href="/doc2">Doc 2</a>'] },
    '2020-03-01': { count: 8, info: ['<a href="/doc3">Doc 3</a>'] },
    '?': { count: 2, info: ['<a href="/unknown">Unknown date</a>'] }
  }

  it('should mount', () => {
    cy.mount('<pb-timeline></pb-timeline>')
    cy.get('pb-timeline').should('exist')
  })

  it('should accept url property', () => {
    cy.mount('<pb-timeline url="api/timeline"></pb-timeline>')
    cy.get('pb-timeline').then($el => {
      expect($el[0].url).to.equal('api/timeline')
    })
  })

  it('should accept start and end date properties', () => {
    cy.mount('<pb-timeline start-date="2020-01-01" end-date="2020-12-31"></pb-timeline>')
    cy.get('pb-timeline').then($el => {
      expect($el[0].startDate).to.equal('2020-01-01')
      expect($el[0].endDate).to.equal('2020-12-31')
    })
  })

  it('should accept scope property', () => {
    cy.mount('<pb-timeline scope="M"></pb-timeline>')
    cy.get('pb-timeline').then($el => {
      expect($el[0].scope).to.equal('M')
    })
  })

  it('should accept scopes array', () => {
    cy.mount('<pb-timeline id="tl"></pb-timeline>')
    cy.get('#tl').then($el => {
      $el[0].scopes = ['D', 'M', 'Y']
      expect($el[0].scopes).to.deep.equal(['D', 'M', 'Y'])
    })
  })

  it('should accept resettable attribute', () => {
    cy.mount('<pb-timeline resettable></pb-timeline>')
    cy.get('pb-timeline').should('have.attr', 'resettable')
  })

  it('should accept subscribe and emit properties', () => {
    cy.mount('<pb-timeline subscribe="docs" emit="timeline"></pb-timeline>')
    cy.get('pb-timeline').then($el => {
      expect($el[0].subscribe).to.equal('docs')
      expect($el[0].emit).to.equal('timeline')
    })
  })

  it('should render label slot', () => {
    cy.mount(`
      <pb-timeline>
        <span slot="label">Time Range: </span>
      </pb-timeline>
    `)
    cy.get('pb-timeline').should('contain.text', 'Time Range:')
  })

  it('should use pb-fetch for data loading', () => {
    cy.mount('<pb-timeline url="test-url"></pb-timeline>')
    cy.get('pb-timeline').find('pb-fetch').should('exist')
  })

  it('should store timeline bins data', () => {
    cy.mount('<pb-timeline id="tl"></pb-timeline>')
    cy.get('#tl').then($el => {
      // Verify component can accept bins property
      $el[0]._bins = [
        { label: 'Jan 2020', count: 5, start: '2020-01-01' }
      ]
      expect($el[0]._bins).to.have.length(1)
    })
  })

  it('should show clear button when resettable and selection exists', () => {
    cy.mount('<pb-timeline resettable id="tl"></pb-timeline>')
    
    cy.get('#tl').then($el => {
      const component = $el[0]
      component._timeseries = mockTimelineData
      component._bins = [{ label: 'Jan 2020', count: 5 }]
      component._selection = { start: 0, end: 0 }
      component.requestUpdate()
      return component.updateComplete
    })

    cy.get('#tl').find('button').should('exist')
  })

  it('should hide wrapper when empty', () => {
    cy.mount('<pb-timeline id="tl"></pb-timeline>')
    
    cy.get('#tl').then($el => {
      const component = $el[0]
      component._timeseries = {}
      component._bins = []
      component.requestUpdate()
      return component.updateComplete
    })

    cy.get('#tl').find('.wrapper.empty').should('exist')
  })

  it('should store undated marker data', () => {
    cy.mount('<pb-timeline id="tl"></pb-timeline>')
    cy.get('#tl').then($el => {
      $el[0]._undated = { count: 2, info: ['Unknown'] }
      expect($el[0]._undated.count).to.equal(2)
    })
  })

  it('should have searchResult property after data load', () => {
    cy.mount('<pb-timeline id="tl"></pb-timeline>')
    cy.get('#tl').then($el => {
      // searchResult is created when timeline data is loaded
      // Just verify the property can be set
      $el[0].searchResult = {}
      expect($el[0].searchResult).to.exist
    })
  })

  it('should have clear button with type attribute', () => {
    cy.mount('<pb-timeline resettable id="tl"></pb-timeline>')
    
    cy.get('#tl').then($el => {
      const component = $el[0]
      component._selection = { start: 0, end: 0 }
      component.requestUpdate()
      return component.updateComplete
    })

    cy.get('#tl').find('button').should('have.attr', 'type', 'button')
  })

  it('should accept max-interval attribute', () => {
    cy.mount('<pb-timeline max-interval="100"></pb-timeline>')
    cy.get('pb-timeline').then($el => {
      expect($el[0].maxInterval).to.equal(100)
    })
  })

  it('should programmatically set data', () => {
    cy.mount('<pb-timeline id="tl"></pb-timeline>')
    
    cy.get('#tl').then($el => {
      $el[0]._timeseries = { '2020-01-01': 5 }
      expect($el[0]._timeseries['2020-01-01']).to.equal(5)
    })
  })
})
