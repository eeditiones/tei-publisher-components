// Cypress CT: pb-select
import '../../../src/pb-page.js'
import '../../../src/pb-select.js'
import '@polymer/paper-item'
import '@polymer/iron-form'

describe('pb-select', () => {
  it('submits in form', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <iron-form id="form">
          <form action="">
            <pb-select label="Dinosaurs" name="key" value="1">
              <paper-item></paper-item>
              <paper-item value="0">Item 0</paper-item>
              <paper-item value="1">Item 1</paper-item>
              <paper-item value="2">Item 2</paper-item>
              <paper-item value="3">Item 3</paper-item>
            </pb-select>
          </form>
        </iron-form>
      </pb-page>
    `)
    // Verify initial value property, then change via component API
    cy.get('pb-select').should($el => {
      expect($el[0].value).to.equal('1')
    })
    cy.get('pb-select').then(($el) => { $el[0].value = '2'; return $el[0].updateComplete })
    cy.get('iron-form').then($form => {
      const form = $form[0]
      expect(form.serializeForm()).to.deep.equal({ key: '2' })
    })
  })

  it('supports multiple selection', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <iron-form id="form">
          <form action="">
            <pb-select label="Items" name="key" values='["1"]' multi>
              <paper-item></paper-item>
              <paper-item value="0">Item 0</paper-item>
              <paper-item value="1">Item 1</paper-item>
              <paper-item value="2">Item 2</paper-item>
              <paper-item value="3">Item 3</paper-item>
            </pb-select>
          </form>
        </iron-form>
      </pb-page>
    `)
    // Assert initial property and update via component API
    cy.get('pb-select').should($el => {
      expect($el[0].values).to.deep.equal(['1'])
    })
    cy.get('pb-select').then(($el) => { $el[0].values = ['1','2','3']; return $el[0].updateComplete })
    cy.get('iron-form').then($form => {
      const form = $form[0]
      const v = form.serializeForm().key
      expect(new Set(v)).to.deep.equal(new Set(['1', '2', '3']))
    })
  })

  it('works in standard HTML form', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <form action="" id="form">
          <pb-select label="Items" name="key" multi>
            <paper-item></paper-item>
            <paper-item value="0">Item 0</paper-item>
            <paper-item value="1">Item 1</paper-item>
            <paper-item value="2">Item 2</paper-item>
            <paper-item value="3">Item 3</paper-item>
          </pb-select>
        </form>
      </pb-page>
    `)
    // Select two items via component API
    cy.get('pb-select').then(($el) => { $el[0].values = ['1','2']; return $el[0].updateComplete })
    cy.get('form').then($form => {
      const form = $form[0]
      const data = new URLSearchParams(new FormData(form)).toString()
      // Order of fields may vary depending on DOM; accept either ordering
      expect(['key=1&key=2', 'key=2&key=1']).to.include(data)
    })
  })
})

describe('pb-select initialized from remote data source', () => {
  function stubRemote() {
    // Match any absolute/relative path ending with demo/select.json (with optional query)
    cy.intercept('GET', '**/select.json', {
      statusCode: 200,
      fixture: 'demo/select.json',
    }).as('selectData')
  }

  it('submits in form', () => {
    stubRemote()
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <iron-form id="form">
          <form action="">
            <pb-select label="Language" name="lang" value="de" source="demo/select.json"></pb-select>
          </form>
        </iron-form>
      </pb-page>
    `)
    // Install fetch spy after mount, before pb-page-ready triggers remote load
    cy.window().then((win) => {
      cy.spy(win, 'fetch').as('fetch')
    })
    // Ensure pb-page ready so pb-select can start its remote load
    cy.waitForEvent('pb-page-ready')
    // Verify the remote load via fetch (retry up to 10s)
    cy.get('@fetch', { timeout: 10000 }).should('be.calledWithMatch', /demo\/select\.json/)
    // Wait for pb-select to populate items (assert on element instance)
    cy.get('pb-select').should(($el) => {
      const select = $el[0]
      expect(select._items, 'items set').to.be.an('array').that.is.not.empty
    })
    // Change selection via component API (remote items render in shadow)
    cy.get('pb-select').then(($el) => { $el[0].value = 'en'; return $el[0].updateComplete })
    cy.get('iron-form').then($form => {
      const form = $form[0]
      expect(form.serializeForm()).to.deep.equal({ lang: 'en' })
    })
  })
})
