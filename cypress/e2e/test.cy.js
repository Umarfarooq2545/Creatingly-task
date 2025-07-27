/// <reference types="cypress" />

describe('URL Test', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://stg.platform.creatingly.com/apps/');
     cy.get('div[role="button"][name="Draw Artboard"]').click();

//   cy.get('div[role="button"][name="Desktop Template1"]')
//     .should('be.visible').click();

  });
})