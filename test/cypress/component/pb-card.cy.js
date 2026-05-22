// Cypress CT: pb-card
import '../../../src/pb-card.js';

describe('pb-card', () => {
  it('should render without errors', () => {
    cy.mount(`
    <pb-card>
      <h2>Simple card!</h2>
      <p>Without too much data.</p>
    </pb-card>
`);
  });

  it('should render a media card without errors', () => {
    cy.mount(`
    <pb-card>
      <h2>With media!</h2>
      <img src="../images/tei-publisher-logo-contrast-color.svg" alt="The TEI publisher logo" />
    </pb-card>
`);
  });

  it('should render a more complex card without errors', () => {
    cy.mount(`
    <pb-card>
      <header><h2>Or a footer!</h2></header>
	  <section><p>Some content</p><p>With multiple paragraphs</p></section>
      <footer><button>A call to action</button></footer>
    </pb-card>
    `);
  });
});
