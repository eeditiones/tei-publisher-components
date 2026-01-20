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

/**
 * Compares two version strings (e.g., "1.2.3" vs "1.3.0").
 * Returns -1 if a < b, 0 if a === b, or 1 if a > b.
 *
 * @param {string|number} a - First version string
 * @param {string|number} b - Second version string
 * @returns {number} -1 if a < b, 0 if equal, 1 if a > b
 *
 * @example
 * cmpVersion('1.2.3', '1.3.0')  // Returns: -1
 * cmpVersion('2.0.0', '1.9.9')  // Returns: 1
 * cmpVersion('1.0.0', '1.0.0')  // Returns: 0
 */
export function cmpVersion(a, b) {
  let i;
  let cmp;
  let len;
  a = `${a}`.split('.');
  b = `${b}`.split('.');
  len = Math.max(a.length, b.length);
  for (i = 0; i < len; i++) {
    if (a[i] === undefined) {
      a[i] = '0';
    }
    if (b[i] === undefined) {
      b[i] = '0';
    }
    cmp = parseInt(a[i], 10) - parseInt(b[i], 10);
    if (cmp !== 0) {
      return cmp < 0 ? -1 : 1;
    }
  }
  return 0;
}

/**
 * Checks if the given version meets or exceeds the required version.
 *
 * @param {string|number} given - The version to check
 * @param {string|number} required - The minimum required version
 * @returns {boolean} True if given >= required
 *
 * @example
 * minVersion('1.2.0', '1.1.0')  // Returns: true
 * minVersion('1.0.0', '1.1.0')  // Returns: false
 */
export function minVersion(given, required) {
  return cmpVersion(given, required) >= 0;
}

/**
 * Retrieves the value of a CSS custom property (CSS variable) from an element.
 * Attempts to parse the value as JSON, falling back to the default if parsing fails.
 *
 * @param {Element} elem - The element to get the CSS property from
 * @param {string} name - The name of the CSS custom property (e.g., '--pb-color')
 * @param {any} defaultValue - The default value to return if the property doesn't exist or can't be parsed
 * @returns {any} The parsed property value or defaultValue
 *
 * @example
 * // Get a CSS custom property
 * const color = getCSSProperty(element, '--pb-primary-color', '#000000')
 *
 * @example
 * // Get a JSON value from CSS
 * // CSS: --pb-config: '{"enabled": true}'
 * const config = getCSSProperty(element, '--pb-config', {})
 */
export function getCSSProperty(elem, name, defaultValue) {
  const property = getComputedStyle(elem).getPropertyValue(name);
  if (property) {
    try {
      return JSON.parse(property);
    } catch (e) {
      return defaultValue;
    }
  }
  return defaultValue;
}
