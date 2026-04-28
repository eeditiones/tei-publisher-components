import { logger } from './logger.js';

/**
 * Creates a standardized error message element
 * @param {string} message - The error message to display
 * @param {string} className - CSS class name for the error element
 * @param {Object} customStyles - Optional custom styles to apply
 * @returns {HTMLElement} The created error div element
 */
export function createErrorElement(message, className, customStyles = {}) {
  const errorDiv = document.createElement('div');
  errorDiv.className = className;
  
  // Default styles
  const defaultStyles = {
    padding: '1rem',
    margin: '1rem',
    backgroundColor: '#fee',
    border: '1px solid #fcc',
    borderRadius: '4px',
    color: '#c33',
    fontFamily: 'sans-serif',
    fontSize: '14px'
  };
  
  // Merge custom styles with defaults
  const styles = { ...defaultStyles, ...customStyles };
  
  // Apply styles
  Object.entries(styles).forEach(([key, value]) => {
    errorDiv.style[key] = value;
  });
  
  errorDiv.textContent = message;
  
  return errorDiv;
}

/**
 * Removes an error element from a container
 * @param {HTMLElement|null} container - The container element
 * @param {string} className - The CSS class name of the error element to remove
 */
export function clearErrorElement(container, className) {
  if (!container) {
    return;
  }
  
  const existingError = container.querySelector(`.${className}`);
  if (existingError) {
    existingError.remove();
  }
}

/**
 * Formats an error message based on error type and status codes
 * @param {Error|Object} error - The error object
 * @param {string} defaultMessage - Default message if no pattern matches
 * @param {Object} statusMessages - Map of status codes to messages (e.g., { 404: 'Not found' })
 * @param {Array} messagePatterns - Array of { pattern: RegExp, message: string } for pattern matching
 * @returns {string} The formatted error message
 */
export function formatErrorMessage(error, defaultMessage, statusMessages = {}, messagePatterns = []) {
  if (!error) {
    return defaultMessage;
  }
  
  const errorText = error.message || error.toString() || '';
  const status = error.status || error.statusCode;
  
  // Check status code first
  if (status && statusMessages[status]) {
    return statusMessages[status];
  }
  
  // Check message patterns
  for (const { pattern, message } of messagePatterns) {
    if (pattern.test(errorText)) {
      return message;
    }
  }
  
  // Check common error patterns
  if (status === 404 || errorText.includes('404') || errorText.includes('Not Found')) {
    return statusMessages[404] || 'Resource not found';
  }
  
  if (status === 403 || errorText.includes('403') || errorText.includes('Forbidden')) {
    return statusMessages[403] || 'Access denied';
  }
  
  if (
    errorText.includes('NetworkError') ||
    errorText.includes('Failed to fetch') ||
    errorText.includes('network')
  ) {
    return statusMessages.network || 'Network error occurred';
  }
  
  if (
    errorText.includes('Invalid JSON') ||
    errorText.includes('SyntaxError') ||
    errorText.includes('parse') ||
    errorText.includes('Unexpected token')
  ) {
    return statusMessages.parse || 'Invalid data format';
  }
  
  return defaultMessage;
}

/**
 * Handles an error by logging it and optionally emitting an event
 * @param {Error|Object} error - The error object
 * @param {Object} options - Configuration options
 * @param {string} options.componentName - Name of the component (for logging)
 * @param {Function} options.emitEvent - Optional function to emit error event
 * @param {string} options.eventName - Optional event name to emit
 * @param {Object} options.eventDetail - Optional event detail object
 * @param {boolean} options.silent - If true, only log, don't emit events
 */
export function handleError(error, options = {}) {
  const {
    componentName = 'Component',
    emitEvent = null,
    eventName = null,
    eventDetail = {},
    silent = false
  } = options;
  
  // Always log the error
  logger.error(`<${componentName}> Error:`, error);
  
  // Emit event if not silent and emitEvent is provided
  if (!silent && emitEvent && eventName) {
    const detail = {
      error: error.message || 'Unknown error',
      ...eventDetail
    };
    emitEvent(eventName, detail);
  }
}
