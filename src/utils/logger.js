/**
 * Logger utility that conditionally logs based on environment.
 * In development, all logs are shown. In production, only warnings and errors are shown.
 *
 * @example
 * import { logger } from './utils/logger.js'
 *
 * logger.log('Debug information')  // Only in dev
 * logger.warn('Warning message')   // Always shown
 * logger.error('Error occurred')   // Always shown
 * logger.debug('Detailed debug')   // Only in dev
 */

// Detect if we're in development mode
const isDev = (() => {
  // Check for Vite dev mode
  if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
    return true
  }
  // Check for localhost/127.0.0.1
  if (typeof location !== 'undefined') {
    return /localhost|127\.0\.0\.1|0\.0\.0\.0/.test(location.hostname)
  }
  // Default to production
  return false
})()

/**
 * Logger object with methods for different log levels
 */
export const logger = {
  /**
   * Log a message (only in development)
   * @param {...any} args - Arguments to log
   */
  log(...args) {
    if (isDev && typeof console !== 'undefined' && console.log) {
      console.log(...args)
    }
  },

  /**
   * Log a warning (always shown)
   * @param {...any} args - Arguments to log
   */
  warn(...args) {
    if (typeof console !== 'undefined' && console.warn) {
      console.warn(...args)
    }
  },

  /**
   * Log an error (always shown)
   * @param {...any} args - Arguments to log
   */
  error(...args) {
    if (typeof console !== 'undefined' && console.error) {
      console.error(...args)
    }
  },

  /**
   * Log a debug message (only in development)
   * @param {...any} args - Arguments to log
   */
  debug(...args) {
    if (isDev && typeof console !== 'undefined' && console.debug) {
      console.debug(...args)
    }
  },

  /**
   * Check if we're in development mode
   * @returns {boolean} True if in development mode
   */
  isDev() {
    return isDev
  }
}
