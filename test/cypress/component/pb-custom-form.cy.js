// Cypress CT: pb-custom-form
// Tests for form serialization, especially slotted content handling
import '../../../src/pb-custom-form.js'

describe('pb-custom-form', () => {
  it('should mount', () => {
    cy.mount('<pb-custom-form></pb-custom-form>')
    cy.get('pb-custom-form').should('exist')
  })

  describe('serializeForm with slotted content', () => {
    it('serializes slotted text inputs', () => {
      cy.mount(`
        <pb-custom-form>
          <input type="text" name="username" value="testuser">
          <input type="text" name="email" value="test@example.com">
        </pb-custom-form>
      `)
      cy.get('pb-custom-form').then($el => {
        return cy.wrap($el[0].updateComplete).then(() => {
          const result = $el[0].serializeForm()
          expect(result.username).to.equal('testuser')
          expect(result.email).to.equal('test@example.com')
        })
      })
    })

    it('serializes slotted checked checkbox', () => {
      cy.mount(`
        <pb-custom-form>
          <input type="checkbox" name="facet-people" value="person-1" checked>
          <input type="checkbox" name="facet-people" value="person-2">
        </pb-custom-form>
      `)
      cy.get('pb-custom-form').then($el => {
        return cy.wrap($el[0].updateComplete).then(() => {
          const result = $el[0].serializeForm()
          expect(result['facet-people']).to.equal('person-1')
        })
      })
    })

    it('serializes multiple checked checkboxes with same name as array', () => {
      cy.mount(`
        <pb-custom-form>
          <input type="checkbox" name="facet-places" value="place-1" checked>
          <input type="checkbox" name="facet-places" value="place-2" checked>
          <input type="checkbox" name="facet-places" value="place-3">
        </pb-custom-form>
      `)
      cy.get('pb-custom-form').then($el => {
        return cy.wrap($el[0].updateComplete).then(() => {
          const result = $el[0].serializeForm()
          expect(result['facet-places']).to.deep.equal(['place-1', 'place-2'])
        })
      })
    })

    it('returns null for unchecked checkbox names', () => {
      cy.mount(`
        <pb-custom-form>
          <input type="checkbox" name="facet-orgs" value="org-1">
          <input type="checkbox" name="facet-orgs" value="org-2">
        </pb-custom-form>
      `)
      cy.get('pb-custom-form').then($el => {
        return cy.wrap($el[0].updateComplete).then(() => {
          const result = $el[0].serializeForm()
          expect(result['facet-orgs']).to.be.null
        })
      })
    })

    it('serializes slotted radio buttons', () => {
      cy.mount(`
        <pb-custom-form>
          <input type="radio" name="sort" value="date">
          <input type="radio" name="sort" value="title" checked>
          <input type="radio" name="sort" value="author">
        </pb-custom-form>
      `)
      cy.get('pb-custom-form').then($el => {
        return cy.wrap($el[0].updateComplete).then(() => {
          const result = $el[0].serializeForm()
          expect(result.sort).to.equal('title')
        })
      })
    })

    it('serializes slotted select element', () => {
      cy.mount(`
        <pb-custom-form>
          <select name="field">
            <option value="all">All</option>
            <option value="text" selected>Text</option>
            <option value="title">Title</option>
          </select>
        </pb-custom-form>
      `)
      cy.get('pb-custom-form').then($el => {
        return cy.wrap($el[0].updateComplete).then(() => {
          const result = $el[0].serializeForm()
          expect(result.field).to.equal('text')
        })
      })
    })

    it('serializes slotted select-multiple as array', () => {
      cy.mount(`
        <pb-custom-form>
          <select name="categories" multiple>
            <option value="cat-1" selected>Category 1</option>
            <option value="cat-2" selected>Category 2</option>
            <option value="cat-3">Category 3</option>
          </select>
        </pb-custom-form>
      `)
      cy.get('pb-custom-form').then($el => {
        return cy.wrap($el[0].updateComplete).then(() => {
          const result = $el[0].serializeForm()
          expect(result.categories).to.deep.equal(['cat-1', 'cat-2'])
        })
      })
    })

    it('excludes disabled elements', () => {
      cy.mount(`
        <pb-custom-form>
          <input type="text" name="active" value="included">
          <input type="text" name="inactive" value="excluded" disabled>
        </pb-custom-form>
      `)
      cy.get('pb-custom-form').then($el => {
        return cy.wrap($el[0].updateComplete).then(() => {
          const result = $el[0].serializeForm()
          expect(result.active).to.equal('included')
          expect(result).to.not.have.property('inactive')
        })
      })
    })

    it('handles nested slotted content in divs (like AJAX-loaded facets)', () => {
      cy.mount(`
        <pb-custom-form>
          <div class="facet-dimension">
            <table>
              <tr>
                <td>
                  <input type="checkbox" class="facet" name="facet-people" value="rp-123" checked>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" class="facet" name="facet-people" value="rp-456">
                </td>
              </tr>
            </table>
          </div>
        </pb-custom-form>
      `)
      cy.get('pb-custom-form').then($el => {
        return cy.wrap($el[0].updateComplete).then(() => {
          const result = $el[0].serializeForm()
          expect(result['facet-people']).to.equal('rp-123')
        })
      })
    })

    it('handles mixed form elements', () => {
      cy.mount(`
        <pb-custom-form>
          <input type="text" name="query" value="search term">
          <select name="field">
            <option value="text" selected>Text</option>
          </select>
          <input type="checkbox" name="facet-type" value="letter" checked>
          <input type="checkbox" name="facet-type" value="note">
          <input type="radio" name="sort" value="date" checked>
        </pb-custom-form>
      `)
      cy.get('pb-custom-form').then($el => {
        return cy.wrap($el[0].updateComplete).then(() => {
          const result = $el[0].serializeForm()
          expect(result.query).to.equal('search term')
          expect(result.field).to.equal('text')
          expect(result['facet-type']).to.equal('letter')
          expect(result.sort).to.equal('date')
        })
      })
    })
  })

  describe('checkbox interaction and serialization', () => {
    it('updates serialization when checkbox is checked via click', () => {
      cy.mount(`
        <pb-custom-form>
          <input type="checkbox" name="facet-test" value="value-1">
        </pb-custom-form>
      `)

      // Initially unchecked - should be null
      cy.get('pb-custom-form').should($el => {
        const result = $el[0].serializeForm()
        expect(result['facet-test']).to.be.null
      })

      // Check the checkbox
      cy.get('input[name="facet-test"]').check()

      // Now should be serialized
      cy.get('pb-custom-form').should($el => {
        const result = $el[0].serializeForm()
        expect(result['facet-test']).to.equal('value-1')
      })
    })

    it('updates serialization when checkbox is unchecked via click', () => {
      cy.mount(`
        <pb-custom-form>
          <input type="checkbox" name="facet-test" value="value-1" checked>
        </pb-custom-form>
      `)

      // Initially checked
      cy.get('pb-custom-form').should($el => {
        const result = $el[0].serializeForm()
        expect(result['facet-test']).to.equal('value-1')
      })

      // Uncheck the checkbox
      cy.get('input[name="facet-test"]').uncheck()

      // Now should be null
      cy.get('pb-custom-form').should($el => {
        const result = $el[0].serializeForm()
        expect(result['facet-test']).to.be.null
      })
    })
  })
})
