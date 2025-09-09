// Cypress CT: pb-document
import '../../../src/pb-document.js'
import { PbEvents } from '../../../src/pb-events.js'

describe('pb-document', () => {
  it('has correct paths', () => {
    cy.mount('<pb-document root-path="/db/apps/foo" path="test/kant_rvernunft_1781.TEI-P5.xml" odd="dta" view="page"></pb-document>')
    cy.get('pb-document').then($el => {
      const el = $el[0]
      expect(el.getFileName()).to.equal('kant_rvernunft_1781.TEI-P5.xml')
      expect(el.getFullPath()).to.equal('/db/apps/foo/test/kant_rvernunft_1781.TEI-P5.xml')
    })
  })

  it('fires event on property change', () => {
    cy.mount('<pb-document path="doc/documentation.xml" odd="dta"></pb-document>')
    cy.get('pb-document').then($el => {
      const el = $el[0]
      return new Cypress.Promise(resolve => {
        PbEvents.subscribeOnce('pb-document').then(ev => {
          // Detail contains _source pointing to the element; assert via _source
          expect(ev.detail._source).to.equal(el)
          expect(ev.detail._source.odd).to.equal('docbook')
          resolve()
        })
        el.odd = 'docbook'
      })
    })
  })
})
