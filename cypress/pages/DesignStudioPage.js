class DesignStudioPage {
//   dragArtboardToCanvas() {
//     cy.get('[data-testid="artboard-element"]').trigger('mousedown', { which: 1 });
//     cy.get('[data-testid="canvas"]')
//       .trigger('mousemove', { force: true })
//       .trigger('mouseup', { force: true });
//   }

dragArtboardToCanvas() {
  // Step 1: Click on the 'Draw Artboard' button
  cy.get('div[role="button"][name="Draw Artboard"]').click();

  // Step 2: Wait for modal and select 'Desktop Template1'
  cy.get('div[role="button"][name="Desktop Template1"]')
    .should('be.visible')
    .click();

  // Optional Step 3: Assert that artboard is added to the canvas
  cy.get('[data-testid="canvas"]')
    .find('[data-testid="artboard"]')
    .should('exist');
}


  dragChartToStack() {
    cy.get('[data-testid="chart-element"]').trigger('mousedown', { which: 1 });
    cy.get('[data-testid="stack-container"]')
      .trigger('mousemove', { force: true })
      .trigger('mouseup', { force: true });
  }

  centerAlignChart() {
    cy.get('[data-testid="stack-container"]').click();
    cy.get('[data-testid="justify-center-button"]').click();
    cy.get('[data-testid="chart-element"]').should('have.css', 'justify-content', 'center');
  }

  resizeChartToFit() {
    cy.get('[data-testid="chart-element"]')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 300, clientY: 300, force: true })
      .trigger('mouseup', { force: true });

    cy.get('[data-testid="chart-element"]').should('have.css', 'width');
  }
}
export default DesignStudioPage;