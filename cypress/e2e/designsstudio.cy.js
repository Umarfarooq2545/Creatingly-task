import DesignStudioPage from '../pages/DesignStudioPage';

const designStudio = new DesignStudioPage();

describe('Design Studio Interaction', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should drag and drop artboard to canvas', () => {
    designStudio.dragArtboardToCanvas();
  });

  it('should drop a chart into stack container and center it', () => {
    designStudio.dragChartToStack();
    designStudio.centerAlignChart();
  });

  it('should resize chart to fit container', () => {
    designStudio.resizeChartToFit();
  });
});