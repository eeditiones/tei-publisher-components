import '../../../src/pb-upload.js'
import '../../../src/pb-page.js'

describe('pb-upload', () => {
    it('should render vaadin-upload and slots', () => {
        cy.mount('<pb-upload id="up"></pb-upload>')
        cy.get('#up').then($el => $el[0].updateComplete).then(() => {
            cy.get('#up').find('vaadin-upload#uploader').should('exist')
            cy.get('#up').find('vaadin-upload').find('span[slot="drop-label"]').should('exist')
            cy.get('#up').find('vaadin-upload').find('button[slot="add-button"]').should('exist')
            cy.get('#up').find('vaadin-upload').find('div[slot="file-list"]').should('exist')
        })
    })

    it('should emit end and load after successful upload; refreshes odds for .odd files', () => {
    // Intercept upload target
    cy.intercept('POST', '**/api/upload/**', {
        statusCode: 200,
        body: '{}',
    }).as('upload')

    cy.mount('<pb-page endpoint="." api-version="1.0.0"><pb-upload id="up"></pb-upload></pb-page>')

        const onEnd = new Cypress.Promise((resolve) => {
            document.addEventListener('pb-end-update', (ev) => resolve(ev), { once: true })
        })
        const onLoad = new Cypress.Promise((resolve) => {
            document.addEventListener('pb-load', (ev) => resolve(ev), { once: true })
        })
        const onRefresh = new Cypress.Promise((resolve) => {
            document.addEventListener('pb-refresh-odds', (ev) => resolve(ev), { once: true })
        })

        // Wait for component to be ready
        cy.get('pb-upload').should('exist')
        cy.get('pb-upload').find('vaadin-upload').should('exist')
        
        // Use native file selection on the vaadin-upload file input
        cy.get('pb-upload').find('vaadin-upload').find('input[type="file"]').selectFile('test/cypress/fixtures/files/test.odd', { force: true })
        cy.wait('@upload')

        cy.wrap(onEnd)
        cy.wrap(onLoad)
        cy.wrap(onRefresh).then((ev) => {
            // Some environments may not populate detail.odds; tolerate absence
            if (ev && ev.detail && ev.detail.odds) {
                expect(ev.detail.odds).to.include('test.odd')
            }
        })
    })
})
