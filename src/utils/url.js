/**
 * Resolves a relative URL to an absolute URL.
 * Attempts to use the pb-components script tag as the base URL if available,
 * otherwise falls back to the current window location.
 *
 * @param {string} relPath - The relative path to resolve
 * @returns {string} The absolute URL
 *
 * @example
 * // If pb-components is loaded from /lib/pb-components.js
 * resolveURL('../css/style.css')
 * // Returns: 'http://example.com/lib/css/style.css'
 */
export function resolveURL(relPath) {
  const src = document.querySelector('script[src*=pb-components]');
  if (src) {
    return new URL(relPath, src.src).href;
  }
  return new URL(relPath, window.location.href).href;
}
