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
