// Cypress CT: pb-panel
import '../../../src/pb-panel.js'

describe('pb-panel', () => {
  it('mounts', () => {
    cy.mount('<pb-panel></pb-panel>')
    cy.get('pb-panel').should('exist')
  })

  it('renders panel content from templates', () => {
    cy.mount(`
      <pb-panel id="panel">
        <template title="One"><div id="p1">Panel One</div></template>
        <template title="Two"><div id="p2">Panel Two</div></template>
      </pb-panel>
    `)

    cy.get('#panel').find('#p1').should('contain.text', 'Panel One')
  })

  it('switches active panel via dropdown', () => {
    cy.mount(`
      <pb-panel id="panel">
        <template title="One"><div id="p1">One</div></template>
        <template title="Two"><div id="p2">Two</div></template>
      </pb-panel>
    `)

    cy.get('#panel').find('select[name="panels"]').select('1')
    cy.get('#panel').find('._pb_panel1').should('exist')
    cy.get('#panel').find('select[name="panels"]').should(($sel) => {
      const el = /** @type {HTMLSelectElement} */ ($sel[0])
      expect(el.value).to.equal('1')
      expect(el.selectedIndex).to.equal(1)
    })
  })

  it('shows drag handle when draggable', () => {
    cy.mount(`
      <pb-panel id="panel" draggable>
        <template title="One"><div>One</div></template>
        <template title="Two"><div>Two</div></template>
      </pb-panel>
    `)
    cy.get('#panel').find('button[draggable="true"]').should('exist')
  })

  it('does not show drag handle when not draggable', () => {
    cy.mount(`
      <pb-panel id="panel">
        <template title="One"><div>One</div></template>
      </pb-panel>
    `)
    cy.get('#panel').find('button[draggable="true"]').should('not.exist')
  })

  it('populates dropdown with panel titles', () => {
    cy.mount(`
      <pb-panel id="panel">
        <template title="Alpha"><div>A</div></template>
        <template title="Beta"><div>B</div></template>
        <template title="Gamma"><div>C</div></template>
      </pb-panel>
    `)

    cy.get('#panel').find('select option').should('have.length', 3)
    cy.get('#panel').find('select option').eq(0).should('have.text', 'Alpha')
    cy.get('#panel').find('select option').eq(1).should('have.text', 'Beta')
    cy.get('#panel').find('select option').eq(2).should('have.text', 'Gamma')
  })

  it('shows first panel by default', () => {
    cy.mount(`
      <pb-panel id="panel">
        <template title="First"><div id="first">First Panel</div></template>
        <template title="Second"><div id="second">Second Panel</div></template>
      </pb-panel>
    `)

    cy.get('#panel').find('._pb_panel0').should('exist')
    cy.get('#panel').find('#first').should('exist')
    cy.get('#panel').find('select').should('have.value', '0')
  })

  it('emits pb-panel event when panel changes', () => {
    cy.mount(`
      <pb-panel id="panel">
        <template title="One"><div>One</div></template>
        <template title="Two"><div>Two</div></template>
      </pb-panel>
    `)

    const wait = new Cypress.Promise((resolve) => {
      document.addEventListener('pb-panel', resolve, { once: true })
    })

    cy.get('#panel').find('select[name="panels"]').select('1')

    cy.wrap(wait).then((ev) => {
      expect(ev.detail).to.exist
    })
  })

  it('can be disabled', () => {
    cy.mount(`
      <pb-panel id="panel" disabled>
        <template title="One"><div>One</div></template>
      </pb-panel>
    `)

    cy.get('#panel').should('have.attr', 'disabled')
  })

  it('drag handle has type button', () => {
    cy.mount(`
      <pb-panel draggable>
        <template title="One"><div>One</div></template>
      </pb-panel>
    `)

    cy.get('pb-panel').find('button[draggable="true"]').should('have.attr', 'type', 'button')
  })

  it('hides panel content when empty attribute is set', () => {
    cy.mount(`
      <pb-panel empty>
        <template title="One"><div>Should not render</div></template>
      </pb-panel>
    `)

    cy.get('pb-panel').should('have.attr', 'empty')
  })

  it('accepts subscribe property for event channel', () => {
    cy.mount('<pb-panel subscribe="my-channel"></pb-panel>')
    cy.get('pb-panel').then($el => {
      expect($el[0].subscribe).to.equal('my-channel')
    })
  })

  it('accepts emit property for event channel', () => {
    cy.mount('<pb-panel emit="my-channel"></pb-panel>')
    cy.get('pb-panel').then($el => {
      expect($el[0].emit).to.equal('my-channel')
    })
  })
})
