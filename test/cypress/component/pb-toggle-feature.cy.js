// Cypress CT: pb-toggle-feature
import '../../../src/pb-page.js'
import '../../../src/pb-toggle-feature.js'
import '../../../src/pb-panel.js'

describe('pb-toggle-feature', () => {
  it('toggles disabled on target elements via global action', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-toggle-feature id="t" name="plain" selector="pb-panel" action="disable" global default="off">Plain</pb-toggle-feature>
        <pb-panel id="p">
          <template title="One">One</template>
        </pb-panel>
      </pb-page>
    `)
    // Initially off
    cy.get('#p').should('not.have.class', 'disable')
    cy.get('#p').should('have.prop', 'disabled', false)
    // Enable
    cy.get('#t').find('input[type="checkbox"]').check({ force: true })
    cy.get('#p').should('have.class', 'disable')
    cy.get('#p').should('have.prop', 'disabled', true)
    // Disable again
    cy.get('#t').find('input[type="checkbox"]').uncheck({ force: true })
    cy.get('#p').should('not.have.class', 'disable')
    cy.get('#p').should('have.prop', 'disabled', false)
  })

  it('non-global emits pb-toggle with refresh=false when selector present', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-toggle-feature id="t" name="normalized" selector=".foo">Label</pb-toggle-feature>
      </pb-page>
    `)
    const wait = new Cypress.Promise((resolve) => {
      document.addEventListener('pb-toggle', resolve, { once: true })
    })
    cy.wrap(wait).then((ev) => {
      expect(ev.detail.refresh).to.equal(false)
    })
  })
})
