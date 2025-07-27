/// <reference types="cypress" />

describe('URL Test', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://stg.platform.creatingly.com/');
    cy.contains("Get started");
  });
})