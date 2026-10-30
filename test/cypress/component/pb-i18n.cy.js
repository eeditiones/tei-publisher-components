// Cypress CT: pb-i18n (isolated tests - core functionality only)
import '../../../src/pb-i18n.js';
import { get, initTranslation } from '../../../src/pb-i18n.js';

describe('pb-i18n (isolated)', () => {
  it('should render fallback text when no translation function is set', () => {
    cy.mount('<pb-i18n key="test.key">Fallback Text</pb-i18n>');
    cy.get('pb-i18n').should('contain.text', 'Fallback Text');
  });

  it('should work with translation function when set', () => {
    // Mock a simple translation function
    const mockTranslate = (key, options) => {
      if (key === 'test.key') return 'Translated Text';
      if (key === 'test.count' && options?.count) return `Found ${options.count} items`;
      return key;
    };

    initTranslation(mockTranslate);

    cy.mount('<pb-i18n key="test.key">Fallback</pb-i18n>');
    cy.get('pb-i18n').should('contain.text', 'Translated Text');
  });

  it('should work with interpolation when translation function is set', () => {
    const mockTranslate = (key, options) => {
      if (key === 'test.count' && options?.count) return `Found ${options.count} items`;
      return key;
    };

    initTranslation(mockTranslate);

    cy.mount('<pb-i18n key="test.count" options=\'{"count": 10}\'>Fallback</pb-i18n>');
    cy.get('pb-i18n').should('contain.text', 'Found 10 items');
  });

  it('should handle disconnected elements properly', () => {
    cy.mount('<pb-i18n key="test.key">Fallback</pb-i18n>');
    cy.get('pb-i18n').should('exist');

    cy.get('pb-i18n').then($el => {
      const el = $el[0];
      el.remove();
    });

    cy.get('pb-i18n').should('not.exist');
  });

  describe('when moved in the DOM', () => {
    // Moving an element disconnects and reconnects it (#408)
    const move = () =>
      cy.get('pb-i18n').then($el => {
        const el = $el[0];
        const target = document.createElement('div');
        el.parentNode.append(target);
        target.append(el);
      });

    // later tests expect no translation function
    after(() => initTranslation(undefined));

    it('should keep its translation', () => {
      initTranslation(key => (key === 'test.key' ? 'Translated Text' : key));

      cy.mount('<pb-i18n key="test.key">Fallback</pb-i18n>');
      cy.get('pb-i18n').should('have.text', 'Translated Text');
      move();
      cy.get('div > pb-i18n').should('have.text', 'Translated Text');
    });

    it('should keep its fallback', () => {
      initTranslation(key => key);

      cy.mount('<pb-i18n key="test.missing">Fallback Text</pb-i18n>');
      cy.get('pb-i18n').should('have.text', 'Fallback Text');
      move();
      cy.get('div > pb-i18n').should('have.text', 'Fallback Text');
    });

    it('should still update on a language change', () => {
      initTranslation(key => (key === 'test.key' ? 'English' : key));

      cy.mount('<pb-i18n key="test.key">Fallback</pb-i18n>');
      cy.get('pb-i18n').should('have.text', 'English');
      move();
      cy.document().then(doc => {
        const t = key => (key === 'test.key' ? 'Deutsch' : key);
        doc.dispatchEvent(new CustomEvent('pb-i18n-update', { detail: { t } }));
      });
      cy.get('div > pb-i18n').should('have.text', 'Deutsch');
    });
  });

  it('should maintain proper DOM structure', () => {
    cy.mount('<pb-i18n key="test.key">Fallback</pb-i18n>');
    cy.get('pb-i18n').should('be.visible');
    cy.get('pb-i18n').should('have.prop', 'tagName', 'PB-I18N');
  });

  describe('get function', () => {
    it('should return key when no translation function is set', () => {
      expect(get('test.key')).to.equal('test.key');
    });

    it('should return translated value when translation function is set', () => {
      const mockTranslate = key => (key === 'test.key' ? 'Translated' : key);
      initTranslation(mockTranslate);

      expect(get('test.key')).to.equal('Translated');
    });

    it('should handle interpolation with options', () => {
      const mockTranslate = (key, options) => {
        if (key === 'test.count' && options?.count) return `Found ${options.count} items`;
        return key;
      };
      initTranslation(mockTranslate);

      expect(get('test.count', { count: 5 })).to.equal('Found 5 items');
    });
  });
});
