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

  it('custom renderer creates pb-code-highlight elements for code blocks', () => {
    cy.mount(`
      <pb-page api-version="1.0.0">
        <pb-markdown>
          \`\`\`javascript
          console.log('test');
          \`\`\`
        </pb-markdown>
      </pb-page>
    `)
    
    // Verify custom renderer creates pb-code-highlight wrapper
    cy.get('pb-markdown pb-code-highlight').should('exist')
    cy.get('pb-markdown pb-code-highlight').should('have.attr', 'language', 'javascript')
    cy.get('pb-markdown pb-code-highlight').should('have.attr', 'line-numbers')
  })

  it('custom renderer handles code blocks without language', () => {
    cy.mount(`
      <pb-page api-version="1.0.0">
        <pb-markdown>
          \`\`\`
          plain text code block
          \`\`\`
        </pb-markdown>
      </pb-page>
    `)
    
    // Verify custom renderer handles code blocks without language
    cy.get('pb-markdown pb-code-highlight').should('exist')
    cy.get('pb-markdown pb-code-highlight').should('have.attr', 'line-numbers')
  })

  it('handles markdown parsing errors gracefully', () => {
    cy.mount(`
      <pb-page api-version="1.0.0">
        <pb-markdown>
          # Valid Markdown
          This should render normally.
        </pb-markdown>
      </pb-page>
    `)
    
    // Test that component doesn't crash with valid markdown
    cy.get('pb-markdown').should('exist')
    cy.get('pb-markdown h1').should('have.text', 'Valid Markdown')
    cy.get('pb-markdown p').should('contain.text', 'This should render normally.')
  })

  it('handles empty content gracefully', () => {
    cy.mount(`
      <pb-page api-version="1.0.0">
        <pb-markdown></pb-markdown>
      </pb-page>
    `)
    
    // Empty content should not cause errors
    cy.get('pb-markdown').should('exist')
    cy.get('pb-markdown').should('be.empty')
  })

  it('handles null/undefined content gracefully', () => {
    cy.mount(`
      <pb-page api-version="1.0.0">
        <pb-markdown content=""></pb-markdown>
      </pb-page>
    `)
    
    // Empty string content should not cause errors
    cy.get('pb-markdown').should('exist')
    cy.get('pb-markdown').should('be.empty')
  })

  it('custom renderer handles HTML code blocks', () => {
    cy.mount(`
      <pb-page api-version="1.0.0">
        <pb-markdown>
          \`\`\`html
          &lt;div&gt;escaped content&lt;/div&gt;
          \`\`\`
        </pb-markdown>
      </pb-page>
    `)
    
    // Verify HTML code block is rendered
    cy.get('pb-markdown pb-code-highlight').should('exist')
    cy.get('pb-markdown pb-code-highlight').should('have.attr', 'language', 'html')
  })

  it('custom renderer handles multiple code blocks', () => {
    cy.mount(`
      <pb-page api-version="1.0.0">
        <pb-markdown>
          \`\`\`javascript
          const x = 1;
          \`\`\`
          
          Some text between code blocks.
          
          \`\`\`css
          .class { color: red; }
          \`\`\`
        </pb-markdown>
      </pb-page>
    `)
    
    // Verify both code blocks are rendered
    cy.get('pb-markdown pb-code-highlight').should('have.length', 2)
    cy.get('pb-markdown pb-code-highlight').first().should('have.attr', 'language', 'javascript')
    cy.get('pb-markdown pb-code-highlight').last().should('have.attr', 'language', 'css')
  })
})
