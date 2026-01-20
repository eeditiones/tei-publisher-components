// Cypress CT: sanitizeHTML utility
import { sanitizeHTML } from '../../../src/utils/sanitize.js'

describe('sanitizeHTML utility', () => {
  it('should sanitize script tags', () => {
    const malicious = '<script>alert("XSS")</script><p>Safe content</p>'
    const sanitized = sanitizeHTML(malicious)
    expect(sanitized).to.not.include('<script>')
    expect(sanitized).to.include('<p>Safe content</p>')
  })

  it('should sanitize event handlers', () => {
    const malicious = '<img src="x" onerror="alert(\'XSS\')" />'
    const sanitized = sanitizeHTML(malicious)
    expect(sanitized).to.not.include('onerror')
  })

  it('should sanitize javascript: URLs', () => {
    const malicious = '<a href="javascript:alert(\'XSS\')">Click me</a>'
    const sanitized = sanitizeHTML(malicious)
    expect(sanitized).to.not.include('javascript:')
  })

  it('should preserve safe HTML', () => {
    const safe = '<p>Hello <strong>world</strong></p><ul><li>Item 1</li></ul>'
    const sanitized = sanitizeHTML(safe)
    expect(sanitized).to.include('<p>')
    expect(sanitized).to.include('<strong>')
    expect(sanitized).to.include('<ul>')
    expect(sanitized).to.include('<li>')
  })

  it('should preserve safe attributes', () => {
    const safe = '<a href="https://example.com" title="Link">Link</a>'
    const sanitized = sanitizeHTML(safe)
    expect(sanitized).to.include('href="https://example.com"')
    expect(sanitized).to.include('title="Link"')
  })

  it('should handle empty strings', () => {
    expect(sanitizeHTML('')).to.equal('')
    expect(sanitizeHTML(null)).to.equal('')
    expect(sanitizeHTML(undefined)).to.equal('')
  })

  it('should handle SVG content safely', () => {
    const svg = '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40"/></svg>'
    const sanitized = sanitizeHTML(svg)
    // SVG should be preserved but sanitized
    expect(sanitized).to.include('svg')
    expect(sanitized).to.include('circle')
  })

  it('should sanitize style attributes with dangerous content', () => {
    const malicious = '<div style="background: url(javascript:alert(1))">Content</div>'
    const sanitized = sanitizeHTML(malicious)
    expect(sanitized).to.not.include('javascript:')
    // Safe styles should be preserved
    const safeStyle = '<div style="color: red; font-size: 14px">Content</div>'
    const sanitizedSafe = sanitizeHTML(safeStyle)
    expect(sanitizedSafe).to.include('style')
  })

  it('should handle markdown-like HTML safely', () => {
    const markdown = '<p>Text with <code>code</code> and <em>emphasis</em></p>'
    const sanitized = sanitizeHTML(markdown)
    expect(sanitized).to.include('<p>')
    expect(sanitized).to.include('<code>')
    expect(sanitized).to.include('<em>')
  })
})
