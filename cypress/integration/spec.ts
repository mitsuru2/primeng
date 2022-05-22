describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Hello, PrimeNG');
  });
  it('Input text into input box.', () => {
    cy.get('#in_title').type('Test input text');
    cy.get('#p_title').contains('Test input text');
  });
});
