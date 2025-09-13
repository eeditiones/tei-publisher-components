import '../../../src/pb-download.js'

describe('pb-download', () => {
    it('computes href and target based on props (absolute url)', () => {
        const html = '<pb-download id="dl" url="http://example.com/api/download" type="pdf" odd="myodd">PDF</pb-download>'
        cy.mount(html)
        // Signal page ready so component computes href/target
        cy.document().then(doc => {
            doc.dispatchEvent(new CustomEvent('pb-page-ready', { detail: { endpoint: '.', apiVersion: '1.0.0' } }))
        })
        cy.get('#dl').then($el => $el[0].updateComplete).then(() => {
            cy.get('#dl').find('#button').should(($a) => {
                const href = $a[0].getAttribute('href')
                const target = $a[0].getAttribute('target')
                expect(href).to.contain('/api/download/pdf?odd=myodd')
                expect(target).to.equal('_self')
            })
        })
    })
})
