// Cypress CT: logger utility
import { logger } from '../../../src/utils/logger.js';

describe('logger utility', () => {
  beforeEach(() => {
    // Stub console methods
    cy.window().then(win => {
      cy.stub(win.console, 'log').as('consoleLog');
      cy.stub(win.console, 'warn').as('consoleWarn');
      cy.stub(win.console, 'error').as('consoleError');
      cy.stub(win.console, 'debug').as('consoleDebug');
    });
  });

  it('should log in development mode', () => {
    // In Cypress test environment, we're in dev mode
    logger.log('test message');
    cy.get('@consoleLog').should('have.been.calledWith', 'test message');
  });

  it('should always log warnings', () => {
    logger.warn('warning message');
    cy.get('@consoleWarn').should('have.been.calledWith', 'warning message');
  });

  it('should always log errors', () => {
    logger.error('error message');
    cy.get('@consoleError').should('have.been.calledWith', 'error message');
  });

  it('should log debug in development mode', () => {
    logger.debug('debug message');
    cy.get('@consoleDebug').should('have.been.calledWith', 'debug message');
  });

  it('should support multiple arguments', () => {
    logger.log('message', { key: 'value' }, 123);
    cy.get('@consoleLog').should('have.been.calledWith', 'message', { key: 'value' }, 123);
  });

  it('should support formatted messages', () => {
    logger.log('User %s logged in', 'john');
    cy.get('@consoleLog').should('have.been.called');
  });

  it('should handle error objects', () => {
    const error = new Error('Test error');
    logger.error('Operation failed:', error);
    cy.get('@consoleError').should('have.been.called');
  });
});
