export function resolveURL(relPath) {
    const src = document.querySelector('script[src*=pb-components]');
    if (src) {
        return new URL(relPath, src.src).href;
    }
    return new URL(relPath, window.location.href).href;
}

export function cmpVersion(a, b) {
    var i, cmp, len;
    a = (a + '').split('.');
    b = (b + '').split('.');
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
            return (cmp < 0 ? -1 : 1);
        }
    }
    return 0;
}

export function minVersion(given, required) {
    return cmpVersion(given, required) >= 0;
}

/**
 * Retrieve value of a CSS property.
 * 
 * @param {Element} elem the component
 * @param {string} name name of the property
 * @param {any} defaultValue default value
 * @returns the value or defaultValue if it does not exist
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