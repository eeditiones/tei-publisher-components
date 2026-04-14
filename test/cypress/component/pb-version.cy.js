// Simple Cypress Component Test for pb-version
import '../../../src/pb-version.js';

describe('pb-version', () => {
  it('renders unknown without build injection', () => {
    cy.mount('<pb-version></pb-version>');
    cy.get('pb-version').contains('unknown');
  });
});
