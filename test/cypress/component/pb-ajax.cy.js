// Cypress CT: pb-ajax
import '../../../src/pb-page.js'
import '../../../src/pb-ajax.js'

describe('pb-ajax', () => {
  it('recompiles and shows message', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-ajax url="api/version">
          <paper-button raised>Version</paper-button><span slot="title">Version</span>
        </pb-ajax>
      </pb-page>
    `)

    // Wait until pb-ajax has its endpoint initialized (production-like readiness)
    cy.get('pb-ajax').should($el => {
      expect($el[0]._endpoint, 'endpoint initialized').to.be.ok
    })

    // Grab iron-ajax inside the component and spy on its request
    cy.get('pb-ajax').find('#loadContent').as('ironAjax')
    cy.get('@ironAjax').then(($ironAjax) => {
      cy.spy($ironAjax[0], 'generateRequest').as('generateRequest')
    })

    // Trigger the action by clicking the (covered) anchor
    cy.get('pb-ajax').find('#button').click({ force: true })

    // Verify the request was initiated and the URL is correct
    cy.get('@generateRequest').should('have.been.called')
    cy.get('@ironAjax').its('0.url').should('match', /\/api\/version$/)
    // Short-circuit network by simulating a successful response
    cy.get('@ironAjax').then(($ironAjax) => {
      $ironAjax[0].lastResponse = '{"engine":{"name":"eXist","version":"5.3.0"},"api":"1.0.0"}'
      $ironAjax[0].dispatchEvent(new CustomEvent('response'))
    })

    // Rely on Cypress retries via attribute assertion (no manual event waits)

    // Assert via reflected attribute first (stable)
    cy.get('pb-ajax').find('pb-message').should('have.attr', 'message')

    // And verify rendered content in the dialog body
    cy.get('pb-ajax').find('pb-message').find('h2').should('contain.text', 'Version')
  })

  it('shows error message on failed request', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-ajax url="api/version">
          <paper-button raised>Version</paper-button><span slot="title">Version</span>
        </pb-ajax>
      </pb-page>
    `)

    // Wait until pb-ajax has its endpoint initialized (production-like readiness)
    cy.get('pb-ajax').should($el => {
      expect($el[0]._endpoint, 'endpoint initialized').to.be.ok
    })

    // Grab iron-ajax and spy
    cy.get('pb-ajax').find('#loadContent').as('ironAjax')
    cy.get('@ironAjax').then(($ironAjax) => {
      cy.spy($ironAjax[0], 'generateRequest').as('generateRequest')
    })
    cy.get('pb-ajax').find('#button').click({ force: true })

    // Ensure request initiated
    cy.get('@generateRequest').should('have.been.called')

    // Simulate error response from backend
    cy.get('@ironAjax').then(($ironAjax) => {
      $ironAjax[0].lastError = { response: '<error><message>Something went wrong</message></error>' }
      $ironAjax[0].dispatchEvent(new CustomEvent('error'))
    })

    // Assert via attribute retries (no manual event waits)
    cy.get('pb-ajax').find('pb-message').should('have.attr', 'message')
    cy.get('pb-ajax').find('pb-message').find('h2').should('contain.text', 'error')
  })
})
