// Cypress CT: utils/url.js
import { resolveURL } from '../../../../src/utils/url.js'

describe('resolveURL utility', () => {
  beforeEach(() => {
    // Clean up any existing script tags
    document.querySelectorAll('script[src*="pb-components"]').forEach(el => el.remove())
  })

  it('should resolve relative URL using pb-components script tag as base', () => {
    // Create a mock script tag
    const script = document.createElement('script')
    script.src = 'http://localhost:5173/lib/pb-components.js'
    document.head.appendChild(script)

    const result = resolveURL('../css/style.css')
    expect(result).to.equal('http://localhost:5173/css/style.css')
  })

  it('should resolve relative URL using window.location when no script tag found', () => {
    // No script tag present
    const result = resolveURL('../css/style.css')
    // Should use window.location.href as base
    expect(result).to.include('/css/style.css')
  })

  it('should handle absolute URLs', () => {
    const result = resolveURL('https://example.com/style.css')
    expect(result).to.equal('https://example.com/style.css')
  })

  it('should handle root-relative URLs', () => {
    const script = document.createElement('script')
    script.src = 'http://localhost:5173/lib/pb-components.js'
    document.head.appendChild(script)

    const result = resolveURL('/css/style.css')
    expect(result).to.equal('http://localhost:5173/css/style.css')
  })
})
