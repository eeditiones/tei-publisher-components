// Cypress CT: pb-restricted
import '../../../src/pb-page.js'
import '../../../src/pb-restricted.js'

describe('pb-restricted', () => {
  function emitLogin(detail) {
    cy.document().then((doc) => {
      const d = Object.assign({ key: '__default__' }, detail)
      doc.dispatchEvent(new CustomEvent('pb-login', { detail: d, bubbles: true, composed: true }))
    })
  }

  it('shows restricted section when logged in', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-restricted>
          <p id="restricted">RESTRICTED</p>
          <p slot="fallback" id="fallback">FALLBACK</p>
        </pb-restricted>
      </pb-page>
    `)
    cy.get('pb-restricted').then(($el) => $el[0].updateComplete)
    // simulate successful login
    emitLogin({ user: 'tei', groups: [] })
    // Assert default content is shown
    cy.get('pb-restricted').should('have.attr', 'show')
    cy.get('pb-restricted #restricted').should('exist')
  })

  it('shows fallback when not logged in', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-restricted>
          <p id="restricted">RESTRICTED</p>
          <p slot="fallback" id="fallback">FALLBACK</p>
        </pb-restricted>
      </pb-page>
    `)
    cy.get('pb-restricted').then(($el) => $el[0].updateComplete)
    // simulate failed login / no user
    emitLogin({ user: null, groups: [] })
    // Assert fallback content is shown
    cy.get('pb-restricted').should('have.class', 'fallback')
    cy.get('pb-restricted #fallback').should('exist')
  })

  it('hides host when no fallback and not logged in', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-restricted>
          <p id="restricted">RESTRICTED</p>
        </pb-restricted>
      </pb-page>
    `)
    cy.get('pb-restricted').then(($el) => $el[0].updateComplete)
    emitLogin({ user: null, groups: [] })
    cy.get('pb-restricted').should('not.have.class', 'fallback')
    cy.get('pb-restricted').should('not.be.visible')
  })
})
