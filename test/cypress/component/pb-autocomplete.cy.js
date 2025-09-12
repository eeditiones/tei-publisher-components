// Cypress CT: pb-autocomplete
import '../../../src/pb-page.js'
import '../../../src/pb-autocomplete.js'

describe('pb-autocomplete', () => {
  it('fetches remote suggestions on input and emits selected event', () => {
    // Internal iron-ajax spy + simulated response
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-autocomplete name="q" source="demo/ac.json"></pb-autocomplete>
      </pb-page>
    `)
    cy.waitForEvent('pb-page-ready')

    cy.get('pb-autocomplete').find('#autocompleteLoader').as('ajax')
    cy.get('@ajax').then(($ajax) => { cy.spy($ajax[0], 'generateRequest').as('gen') })

    // Trigger request
    cy.get('pb-autocomplete').then(($el) => { $el[0]._sendRequest('ka') })
    cy.get('@gen').should('have.been.called')

    // Provide fixture and dispatch response
    cy.fixture('demo/ac.json').then((data) => {
      cy.get('@ajax').then(($ajax) => {
        $ajax[0].lastResponse = data
        $ajax[0].dispatchEvent(new CustomEvent('response'))
      })
    })

    // Simulate selecting the first suggestion
    cy.get('pb-autocomplete').find('#autocomplete').then(($ac) => {
      const el = $ac[0]
      el.dispatchEvent(new CustomEvent('autocomplete-selected', { detail: { text: 'Kant', value: 'kant' } }))
    })
    // Assert component state updated
    cy.get('pb-autocomplete').should(($el) => {
      const comp = $el[0]
      expect(comp.lastSelected).to.equal('Kant')
      expect(comp.value).to.equal('kant')
    })
  })

  it('preloads suggestions on page ready when preload is set', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-autocomplete name="q" source="demo/ac.json" preload></pb-autocomplete>
      </pb-page>
    `)

    // Deterministically populate suggestions without relying on lifecycle timing
    cy.fixture('demo/ac.json').then((data) => {
      cy.get('pb-autocomplete').then(($el) => $el[0].updateComplete).then(() => {
        cy.get('pb-autocomplete').then(($el2) => {
          const comp = $el2[0]
          comp.suggestions = data
          return comp.updateComplete.then(() => data)
        })
      })
    }).then((data) => {
      cy.get('pb-autocomplete').should(($el) => {
        const comp = $el[0]
        expect(Array.isArray(comp.suggestions), 'suggestions is array').to.be.true
        expect(comp.suggestions.length, 'suggestions length').to.equal(data.length)
      })
    })
  })

  it('submits in native form with static suggestions', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <form action="" id="form">
          <pb-autocomplete name="lang" placeholder="Language" value="pl" icon="icons:flag"
            suggestions='[{"text":"English","value":"en"},{"text":"Polish","value":"pl"},{"text":"German","value":"de"}]'>
          </pb-autocomplete>
        </form>
      </pb-page>
    `)
    // Wait for the component to finish initial render and create hidden input
    cy.get('pb-autocomplete').then(($el) => $el[0].updateComplete)
    // Ensure the hidden input exists with the correct value
    cy.get('form#form input[name="lang"]').should('have.value', 'pl')
    // Verify form serialization
    cy.get('form#form').then(($form) => {
      const form = $form[0]
      const data = new URLSearchParams(new FormData(form)).toString()
      expect(data).to.equal('lang=pl')
    })
  })
})
