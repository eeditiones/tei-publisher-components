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

    it('handles cookie operations with js-cookie v3.0.0', () => {
        // Test that pb-download component loads and can handle cookie operations
        const html = '<pb-download id="dl" url="http://example.com/api/download" type="pdf">PDF</pb-download>'
        cy.mount(html)
        
        // Signal page ready so component initializes
        cy.document().then(doc => {
            doc.dispatchEvent(new CustomEvent('pb-page-ready', { detail: { endpoint: '.', apiVersion: '1.0.0' } }))
        })
        
        // Verify component loaded without errors
        cy.get('#dl').should('exist')
        cy.get('#dl').find('#button').should('exist')
        
        // Test that the component can be clicked (cookie operations happen internally)
        cy.get('#dl').find('#button').click()
    })
})
