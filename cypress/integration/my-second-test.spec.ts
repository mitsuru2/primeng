describe('MySecondTest', () => {
  it('Press button', () => {
    cy.visit('/');
    cy.get('#in_title').type('all lower case');
    cy.get('#button_upper').click();
    cy.get('#p_title').contains('ALL LOWER CASE');
  });
});
