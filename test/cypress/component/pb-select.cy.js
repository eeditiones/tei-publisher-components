import '../../../src/pb-page.js'
import '../../../src/pb-select.js'

describe('pb-select', () => {
  it('should submit in form', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <form id="form" action="">
          <pb-select label="Dinosaurs" name="key" value="1">
            <span value="0">Item 0</span>
            <span value="1">Item 1</span>
            <span value="2">Item 2</span>
            <span value="3">Item 3</span>
          </pb-select>
        </form>
      </pb-page>
    `)

    cy.get('pb-select').then($el => {
      const el = $el[0]
      return cy.wrap(el.updateComplete).then(() => {
        expect(el.value).to.equal('1')
        el.value = '2'
        el.requestUpdate()
        el._syncHiddenInputs()
        return cy.wrap(el.updateComplete)
      })
    })

    cy.get('pb-select').should($el => {
      const host = $el[0]
      const hidden = host.querySelector('input[name="key"][type="hidden"]')
      expect(hidden?.value).to.equal('2')
    })

    cy.get('#form').should($form => {
      const fd = new FormData($form[0])
      expect(fd.get('key')).to.equal('2')
    })
  })

  it('should support multiple selection', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <form id="form" action="">
          <pb-select label="Items" name="key" id="multi" multi>
            <span value="0">Item 0</span>
            <span value="1">Item 1</span>
            <span value="2">Item 2</span>
            <span value="3">Item 3</span>
          </pb-select>
        </form>
      </pb-page>
    `)

    cy.get('#multi').then($el => {
      const el = $el[0]
      return cy.wrap(el.updateComplete).then(() => {
        el.values = ['1', '2', '3']
        el.requestUpdate()
        el._syncHiddenInputs()
        return cy.wrap(el.updateComplete)
      })
    })

    cy.get('#multi').should($el => {
      const host = $el[0]
      const hidden = host.querySelectorAll('input[name="key"][type="hidden"]')
      expect(Array.from(hidden).map(i => i.value)).to.deep.equal(['1', '2', '3'])
    })

    cy.get('#form').should($form => {
      const values = new FormData($form[0]).getAll('key')
      expect(new Set(values)).to.deep.equal(new Set(['1', '2', '3']))
    })
  })

  it('should work in standard HTML form', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <form action="" id="form">
          <pb-select label="Items" name="key" values='["1","2"]' multi>
            <span value="0">Item 0</span>
            <span value="1">Item 1</span>
            <span value="2">Item 2</span>
            <span value="3">Item 3</span>
          </pb-select>
        </form>
      </pb-page>
    `)

    cy.get('pb-select').then($el => {
      const el = $el[0]
      return cy.wrap(el.updateComplete).then(() => {
        el.values = ['1', '2']
        el.requestUpdate()
        el._syncHiddenInputs()
        return cy.wrap(el.updateComplete)
      })
    })

    cy.get('form').should($form => {
      const values = new FormData($form[0]).getAll('key')
      expect(new Set(values)).to.deep.equal(new Set(['1', '2']))
    })
  })

  it('should not render Polymer elements', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-select label="Items" name="key">
          <span value="a">A</span>
        </pb-select>
      </pb-page>
    `)
    cy.get('pb-select').find('paper-dropdown-menu, paper-item, paper-listbox').should('not.exist')
  })
})

describe('pb-select initialized from remote data source', () => {
  function stubRemote() {
    cy.intercept('GET', '**/select.json', {
      statusCode: 200,
      fixture: 'demo/select.json',
    }).as('selectData')
  }

  it('should submit in form', () => {
    stubRemote()
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <form id="form" action="">
          <pb-select label="Language" name="lang" value="de" source="demo/select.json"></pb-select>
        </form>
      </pb-page>
    `)

    cy.document().then(doc => {
      doc.dispatchEvent(new CustomEvent('pb-page-ready', {
        detail: { endpoint: '.', apiVersion: '1.0.0' }
      }))
    })

    cy.waitForEvent('pb-page-ready')


    cy.fixture('demo/select.json').then(options => {
      cy.get('pb-select').then($el => {
        const el = $el[0]
        return cy.wrap(el.updateComplete).then(() => {
          el._items = options.map(({ text, value }) => ({ label: text, value }))
          el.requestUpdate()
          el._syncHiddenInputs()
          return cy.wrap(el.updateComplete)
        })
      })
    })

    cy.get('pb-select').then($el => {
      const el = $el[0]
      return cy.wrap(el.updateComplete).then(() => {
        expect(el._items, 'items set').to.be.an('array').that.is.not.empty
        el.value = 'en'
        el.requestUpdate()
        el._syncHiddenInputs()
        return cy.wrap(el.updateComplete)
      })
    })

    cy.get('#form').should($form => {
      expect(new FormData($form[0]).get('lang')).to.equal('en')
    })
  })
})
