import DOMPurify from 'dompurify'

/**
 * Sanitizes HTML content to prevent XSS attacks.
 * Uses DOMPurify to remove dangerous scripts, event handlers, and other malicious content
 * while preserving safe HTML structure and formatting.
 *
 * @param {string|null|undefined} html - The HTML string to sanitize
 * @param {Object} [options] - Optional DOMPurify configuration
 * @returns {string} - Sanitized HTML string
 *
 * @example
 * // Basic usage
 * const safe = sanitizeHTML('<script>alert("XSS")</script><p>Safe</p>')
 * // Returns: '<p>Safe</p>'
 *
 * @example
 * // With custom options
 * const safe = sanitizeHTML(html, { ALLOWED_TAGS: ['p', 'strong', 'em'] })
 */
export function sanitizeHTML(html, options = {}) {
  // Handle null/undefined/empty strings
  if (!html || typeof html !== 'string') {
    return ''
  }

  // Extract custom element tag names from the HTML before sanitization
  // Custom elements have hyphens in their names (e.g., pb-view, pb-geolocation, pb-formula)
  const customElementRegex = /<([a-z]+-[a-z0-9-]+)(?:\s|>)/gi
  const customElementTags = new Set()
  let match
  while ((match = customElementRegex.exec(html)) !== null) {
    customElementTags.add(match[1].toLowerCase())
  }

  // Default configuration: allow common safe HTML tags and attributes
  // This can be customized per use case
  const defaultOptions = {
    // Use comprehensive ALLOWED_TAGS list to include standard HTML elements
    // Custom elements will be added via ADD_TAGS
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'u', 's', 'sub', 'sup',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'ul', 'ol', 'li', 'dl', 'dt', 'dd',
      'blockquote', 'pre', 'code', 'kbd', 'samp',
      'a', 'img', 'figure', 'figcaption',
      'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td',
      'div', 'span', 'section', 'article', 'aside', 'header', 'footer', 'main', 'nav',
      'svg', 'circle', 'rect', 'path', 'line', 'polyline', 'polygon', 'g', 'text', 'tspan',
      'mark', 'small', 'del', 'ins', 'q', 'cite', 'abbr', 'dfn', 'time',
      'template' // Allow template elements for web components
    ],
    // Forbid dangerous tags
    FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'form', 'input', 'button', 'textarea', 'select'],
    FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover', 'onfocus', 'onblur', 'onchange', 'onsubmit'],
    // Allow safe attributes (including custom element attributes)
    ALLOWED_ATTR: [
      'href', 'title', 'alt', 'src', 'width', 'height',
      'class', 'id', 'role', 'aria-label', 'aria-labelledby',
      'viewBox', 'cx', 'cy', 'r', 'x', 'y', 'd', 'fill', 'stroke',
      'style', // Style is sanitized by DOMPurify to remove dangerous content
      'key', 'loaded', 'display', // Common custom element attributes
      'language', 'line-numbers' // Attributes for pb-code-highlight and similar components
    ],
    // Allow data attributes for component integration
    ALLOW_DATA_ATTR: true,
    // Keep relative URLs safe - block javascript: and data: URLs
    ALLOW_UNKNOWN_PROTOCOLS: false,
    // Sanitize style attributes aggressively
    SAFE_FOR_TEMPLATES: true,
    // Use DOMPurify's built-in style sanitization
    KEEP_CONTENT: true
  }

  // Merge user options with defaults
  const config = { ...defaultOptions, ...options }

  // Add custom elements to ALLOWED_TAGS via ADD_TAGS
  // This preserves custom elements (pb-*) found in the HTML
  if (customElementTags.size > 0) {
    config.ADD_TAGS = [...(config.ADD_TAGS || []), ...Array.from(customElementTags)]
  }

  // Sanitize the HTML
  let sanitized = DOMPurify.sanitize(html, config)

  // Post-process to remove javascript: and data: URLs from style attributes
  // DOMPurify may not catch all cases in style attributes
  if (sanitized.includes('style=')) {
    // Remove javascript: and data: URLs from style attributes
    sanitized = sanitized.replace(
      /style="([^"]*javascript:[^"]*)"|style='([^']*javascript:[^']*)'/gi,
      'style=""'
    )
    sanitized = sanitized.replace(
      /style="([^"]*data:[^"]*)"|style='([^']*data:[^']*)'/gi,
      'style=""'
    )
    // Also handle expression() and other dangerous CSS functions
    sanitized = sanitized.replace(
      /style="([^"]*expression\([^"]*\))"|style='([^']*expression\([^']*\))'/gi,
      'style=""'
    )
  }

  return sanitized
}
