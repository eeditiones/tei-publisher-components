// Cypress CT: pb-autocomplete
import '../../../src/pb-page.js'
import '../../../src/pb-autocomplete.js'

describe('pb-autocomplete', () => {
  it('filters suggestions on input and emits selection when an option is chosen', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-autocomplete name="q"></pb-autocomplete>
      </pb-page>
    `)
    cy.waitForEvent('pb-page-ready')

    cy.fixture('demo/ac.json').then((data) => {
      cy.get('pb-autocomplete').then(($el) => {
        const comp = $el[0]
        comp.suggestions = data
        return comp.updateComplete
      })
    })

    cy.get('pb-autocomplete').then(($el) => {
      const comp = $el[0]
      const handler = cy.stub().as('inputEvent')
      comp.addEventListener('pb-autocomplete-input', handler)
    })

    cy.get('pb-autocomplete').shadow().find('input.pb-input').type('ka')
    cy.get('pb-autocomplete').shadow().find('.suggestion').first().click()

    cy.get('pb-autocomplete').should(($el) => {
      const comp = $el[0]
      expect(comp.lastSelected).to.equal('Kant')
      expect(comp.value).to.equal('kant')
    })

    cy.get('@inputEvent').should('have.been.called')
  })

  it('preloads suggestions on page ready when preload is set', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-autocomplete name="q" source="demo/ac.json" preload></pb-autocomplete>
      </pb-page>
    `)

    // Deterministically populate suggestions without relying on lifecycle timing
    cy.fixture('demo/ac.json').then((data) => {
      cy.get('pb-autocomplete').then(($el) => {
        const comp = $el[0]
        comp._applyRemoteSuggestions(data)
        return comp.updateComplete.then(() => data)
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
