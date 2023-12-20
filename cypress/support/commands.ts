const getByTestId = (selector: string) => {
  return cy.get(`[data-testid=${selector}]`);
};
Cypress.Commands.addAll({
  getByTestId,
});
