// Cypress CT: pb-load + pb-paginate integration
import '../../../src/pb-load.js'
import '../../../src/pb-paginate.js'

describe('pb-load + pb-paginate', () => {
    it('updates paginate on results and triggers reload on page click', () => {
        cy.intercept('GET', '**/demo/fragment.html*', req => {
            const start = req.query && req.query.start ? String(req.query.start) : '1'
            const body = start === '11' ? '<div id="content">Page2</div>' : '<div id="content">Page1</div>'
            req.reply({
                statusCode: 200,
                headers: {
                    'Content-Type': 'text/html',
                    'pb-total': '30',
                    'pb-start': start,
                },
                body,
            })
        }).as('frag')

        cy.mount('<pb-load id="ld" url="/demo/fragment.html" auto></pb-load><pb-paginate id="pg" per-page="10"></pb-paginate>')
        cy.get('#ld').then(($el) => $el[0].updateComplete).then(() => {
            cy.document().then(doc => {
                doc.dispatchEvent(new CustomEvent('pb-page-ready', { detail: { endpoint: '.', apiVersion: '1.0.0' } }))
            })
        })

        cy.wait('@frag')
        cy.get('#ld').find('#content').should('contain.text', 'Page1')

        cy.get('#pg').find('span').contains('2').click({ force: true })

        cy.wait('@frag')
        cy.get('#ld').find('#content').should('contain.text', 'Page2')
    })
})
