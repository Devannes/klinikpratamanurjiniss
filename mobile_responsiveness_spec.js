describe('Mobile Responsiveness Tests', () => {
  beforeEach(() => {
    cy.viewport('iphone-6'); // Set viewport to iPhone 6 size
    cy.visit('http://localhost:3000'); // Adjust URL to your local dev server
  });

  it('should display hero content correctly', () => {
    cy.get('.hero-content h1').should('be.visible').and('have.css', 'font-size');
    cy.get('.hero-buttons').should('be.visible');
  });

  it('should hide nav menu and show hamburger on mobile', () => {
    cy.get('.nav-menu').should('not.be.visible');
    cy.get('.hamburger').should('be.visible');
  });

  it('should display partners grid centered and responsive', () => {
    cy.get('.partners-grid').should('have.css', 'justify-content', 'center');
    cy.get('.partner-item').should('have.css', 'max-width').and('match', /px/);
  });

  it('should have touch-friendly buttons and links', () => {
    cy.get('button, .btn-primary, .btn-secondary').each(($el) => {
      expect(parseInt($el.css('min-height'))).to.be.gte(44);
      expect(parseInt($el.css('min-width'))).to.be.gte(44);
    });
  });
});
