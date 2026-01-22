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
