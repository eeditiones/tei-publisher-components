import { createErrorElement, clearErrorElement, formatErrorMessage } from '../../../src/utils/error-handling.js';

describe('Error Handling Utility', () => {
  describe('createErrorElement', () => {
    it('should create an error div with default styling', () => {
      const errorDiv = createErrorElement('Test error message', 'test-error');
      
      expect(errorDiv).to.not.be.null;
      expect(errorDiv).to.be.instanceOf(HTMLElement);
      expect(errorDiv.className).to.equal('test-error');
      expect(errorDiv.textContent).to.equal('Test error message');
      // Check that styles are applied
      expect(errorDiv.style.padding).to.equal('1rem');
      expect(errorDiv.style.margin).to.equal('1rem');
      expect(errorDiv.style.backgroundColor).to.not.be.empty;
      expect(errorDiv.style.color).to.not.be.empty;
      expect(errorDiv.style.borderRadius).to.equal('4px');
    });

    it('should create an error div with custom className', () => {
      const errorDiv = createErrorElement('Custom error', 'custom-class');
      
      expect(errorDiv.className).to.equal('custom-class');
    });

    it('should create an error div with custom styles', () => {
      const customStyles = {
        backgroundColor: '#fff',
        color: '#000'
      };
      const errorDiv = createErrorElement('Custom styled error', 'test-error', customStyles);
      
      // Browser converts hex to rgb, so check for rgb equivalent
      const bgColor = errorDiv.style.getPropertyValue('background-color');
      const textColor = errorDiv.style.getPropertyValue('color');
      expect(bgColor).to.match(/rgb\(255, 255, 255\)|#fff/i);
      expect(textColor).to.match(/rgb\(0, 0, 0\)|#000/i);
    });
  });

  describe('clearErrorElement', () => {
    it('should remove error element from container', () => {
      const container = document.createElement('div');
      const errorDiv = document.createElement('div');
      errorDiv.className = 'test-error';
      container.appendChild(errorDiv);
      
      clearErrorElement(container, 'test-error');
      
      expect(container.querySelector('.test-error')).to.not.exist;
    });

    it('should not throw if error element does not exist', () => {
      const container = document.createElement('div');
      
      expect(() => clearErrorElement(container, 'non-existent')).to.not.throw;
    });

    it('should handle null container', () => {
      expect(() => clearErrorElement(null, 'test-error')).to.not.throw;
    });
  });

  describe('formatErrorMessage', () => {
    it('should return default message for unknown errors', () => {
      const error = new Error('Unknown error');
      const message = formatErrorMessage(error, 'Failed to load data');
      
      expect(message).to.equal('Failed to load data');
    });

    it('should format 404 errors', () => {
      const error = { status: 404, message: 'Not Found' };
      const message = formatErrorMessage(error, 'Failed to load', {
        404: 'Resource not found'
      });
      
      expect(message).to.equal('Resource not found');
    });

    it('should format 403 errors', () => {
      const error = { status: 403, message: 'Forbidden' };
      const message = formatErrorMessage(error, 'Failed to load', {
        403: 'Access denied'
      });
      
      expect(message).to.equal('Access denied');
    });

    it('should format network errors', () => {
      const error = { message: 'Failed to fetch' };
      const message = formatErrorMessage(error, 'Failed to load', {
        network: 'Network error occurred'
      });
      
      expect(message).to.equal('Network error occurred');
    });

    it('should format parse errors', () => {
      const error = { message: 'Invalid JSON syntax' };
      const message = formatErrorMessage(error, 'Failed to load', {
        parse: 'Invalid data format'
      });
      
      expect(message).to.equal('Invalid data format');
    });

    it('should use error message patterns', () => {
      const error = { message: 'function signature mismatch' };
      const patterns = [
        { pattern: /function.*signature/i, message: 'Invalid format' },
        { pattern: /parse|XML/i, message: 'Invalid syntax' }
      ];
      const message = formatErrorMessage(error, 'Failed to load', null, patterns);
      
      expect(message).to.equal('Invalid format');
    });
  });
});
