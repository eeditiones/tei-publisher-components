// Basic mount helper for vanilla web components
// Usage: cy.mount('<pb-version></pb-version>')
Cypress.Commands.add('mount', (html) => {
  const root = document.getElementById('__cy_root') || document.body;
  root.innerHTML = html;
});

// Clean up between tests
afterEach(() => {
  document.body.innerHTML = '';
});
