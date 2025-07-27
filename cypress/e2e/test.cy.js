/// <reference types="cypress" />

describe('URL Test', () => {
  it('should login with valid credentials', () => {
    cy.visit('/');
    cy.contains("Get started");
  });
})