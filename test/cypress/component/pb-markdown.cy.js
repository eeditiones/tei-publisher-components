// Cypress CT: pb-markdown
import '../../../src/pb-page.js'
import '../../../src/pb-markdown.js'

describe('pb-markdown', () => {
  it('renders markdown passed as content', () => {
    cy.mount(`
      <pb-page api-version="1.0.0">
        <pb-markdown>
          # Embedding Markdown

          Markdown taken from the **content** of the \`pb-markdown\`.

          \`\`\`xquery
          for $i in 1 to 10 return $i
          \`\`\`
        </pb-markdown>
      </pb-page>
    `)
    cy.get('pb-markdown h1').should('have.text', 'Embedding Markdown')
    cy.get('pb-markdown pb-code-highlight').should('exist')
    cy.get('pb-markdown pb-code-highlight').find('code').should($code => {
      expect($code[0].classList.contains('language-xquery')).to.be.true
    })
  })

  it('renders embedded HTML', () => {
    cy.mount(`
      <pb-page api-version="1.0.0">
        <pb-markdown>
          <template>
            # Embedding Markdown
            <pre>Include HTML</pre>
          </template>
        </pb-markdown>
      </pb-page>
    `)
    cy.get('pb-markdown pre').should('have.text', 'Include HTML')
  })
})
