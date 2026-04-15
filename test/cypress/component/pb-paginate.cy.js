// Cypress CT: pb-paginate
import '../../../src/pb-paginate.js';

/**
 * @param {string} form - A form, like `[1,2,3*, 4, 5, ..., 10]`
 * @return {(ele: JQuery<HTMLElement>) => void}
 */
function haveCorrectPageForm(form) {
  const tokens = form
    .substring(1, form.length - 1)
    .split(',')
    .map(str => str.trim());

  /**
   * @type {((ele: HTMLElement) => void)[]}
   */
  const asserts = tokens.map((token, i) => {
    if (token === '...') {
      return ele => {
        expect(ele.matches('.pb-paginate__overflow'), `The page ${i} should be an overflow`).to.be
          .true;
      };
    }

    // Normal page
    return ele => {
      if (token.endsWith('*')) {
        expect(ele.querySelector('.active'), `The page ${i} should be active`).to.exist;
      } else {
        expect(ele.querySelector('.active')).to.be.null;
      }
      const pageNo = token.endsWith('*')
        ? parseInt(token.substring(0, token.length - 1), 10)
        : parseInt(token, 10);
      expect(ele.matches('.pb-paginate__page'), `The page ${i} should be a normal page`).to.be.true;
      expect(ele.innerText.trim(), 'The page label should be correct').to.equal(`${pageNo}`);
    };
  });
  return ([pbPaginate]) => {
    const listItems = Array.from(pbPaginate.shadowRoot.querySelectorAll('li'));
    expect(listItems).to.have.length(asserts.length + 2);

    for (let i = 0; i < asserts.length; i += 1) {
      const assertion = asserts[i];
      const child = listItems[i + 1];
      assertion(child);
    }
  };
}

describe('pb-paginate', () => {
  beforeEach(() => {
    cy.mount('<pb-paginate id="pg" per-page="10"></pb-paginate>');
  });

  it('should emit events when page is clicked after receiving results', () => {
    cy.get('#pg').then($el => {
      const host = $el[0];
      host._refresh({ detail: { start: 1, count: 30 } });
      return host.updateComplete;
    });

    cy.get('#pg').should(haveCorrectPageForm('[1*, 2, 3]'));

    cy.get('#pg').find('.pb-paginate__page').contains('2').click();
    cy.get('#pg').then($el => {
      expect($el[0].start).to.equal(11);
    });
  });

  it('should show the correct pages when there are only two pages', () => {
    cy.get('#pg').then($el => {
      const host = $el[0];
      host._refresh({ detail: { start: 1, count: 20 } });
      return host.updateComplete;
    });

    cy.get('#pg').should(haveCorrectPageForm('[1*, 2]'));
  });

  it('should show the correct pages when there are only two pages and the last one is active', () => {
    cy.get('#pg').then($el => {
      const host = $el[0];
      host._refresh({ detail: { start: 15, count: 20 } });
      return host.updateComplete;
    });

    cy.get('#pg').should(haveCorrectPageForm('[1, 2*]'));
  });

  it('should show the correct pages when there are only five pages and the last one is active', () => {
    cy.get('#pg').then($el => {
      const host = $el[0];
      host._refresh({ detail: { start: 49, count: 50 } });
      return host.updateComplete;
    });

    cy.get('#pg').should(haveCorrectPageForm('[1, 2, 3, 4, 5*]'));
  });

  it('should show the correct pages when there six pages and the last one is active', () => {
    cy.get('#pg').then($el => {
      const host = $el[0];
      host._refresh({ detail: { start: 59, count: 60 } });
      return host.updateComplete;
    });

    cy.get('#pg').should(haveCorrectPageForm('[1, 2, 3, 4, 5, 6*]'));
  });

  it('should show the correct pages when there seven pages and the last one is active', () => {
    cy.get('#pg').then($el => {
      const host = $el[0];
      host._refresh({ detail: { start: 69, count: 70 } });
      return host.updateComplete;
    });

    cy.get('#pg').should(haveCorrectPageForm('[1, 2, 3, 4, 5, 6, 7*]'));
  });

  it('should show the correct pages when there eight pages and the last one is active. Overflow kicks in', () => {
    cy.get('#pg').then($el => {
      const host = $el[0];
      host._refresh({ detail: { start: 79, count: 80 } });
      return host.updateComplete;
    });

    cy.get('#pg').should(haveCorrectPageForm('[1, ..., 4, 5, 6, 7, 8*]'));
  });

  it('should show the correct pages when there eight pages and the middle one is active. Overflow kicks in', () => {
    cy.get('#pg').then($el => {
      const host = $el[0];
      host._refresh({ detail: { start: 40, count: 80 } });
      return host.updateComplete;
    });

    cy.get('#pg').should(haveCorrectPageForm('[1, 2, 3, 4*, 5, ..., 8]'));
  });

  it('should show the correct pages when there eight pages and the middle one is active. Overflow kicks in', () => {
    cy.get('#pg').then($el => {
      const host = $el[0];
      host._refresh({ detail: { start: 50, count: 80 } });
      return host.updateComplete;
    });

    cy.get('#pg').should(haveCorrectPageForm('[1, ..., 4, 5*, 6, 7, 8]'));
  });

  it('should show the correct pages when the overflow should kick in', () => {
    cy.get('#pg').then($el => {
      const host = $el[0];
      host._refresh({ detail: { start: 1, count: 100 } });
      return host.updateComplete;
    });

    cy.get('#pg').should(haveCorrectPageForm('[1*, 2, 3, 4, 5, ..., 10]'));
  });

  it('should show the correct pages when the overflow should kick in on both sides', () => {
    cy.get('#pg').then($el => {
      const host = $el[0];
      host._refresh({ detail: { start: 50, count: 100 } });
      return host.updateComplete;
    });

    cy.get('#pg').should(haveCorrectPageForm('[1, ...,4, 5*, 6, ..., 10]'));
  });

  it('should show the correct pages when the overflow just about did not kick in at the start', () => {
    cy.get('#pg').then($el => {
      const host = $el[0];
      host._refresh({ detail: { start: 40, count: 100 } });
      return host.updateComplete;
    });

    cy.get('#pg').should(haveCorrectPageForm('[1, 2, 3, 4*, 5, ..., 10]'));
  });

  it('should show the correct pages when the overflow just about did not kick in at the end', () => {
    cy.get('#pg').then($el => {
      const host = $el[0];
      host._refresh({ detail: { start: 80, count: 100 } });
      return host.updateComplete;
    });

    cy.get('#pg').should(haveCorrectPageForm('[1, ..., 6, 7, 8*, 9, 10]'));
  });
});
