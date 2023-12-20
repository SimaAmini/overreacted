const URL = Cypress.env("BASE_URL");
const LOCATION = "/";

function visitPage() {
  cy.visit(LOCATION);
  cy.location("pathname", { timeout: 20000 }).should("eq", LOCATION);
}

describe("Home Page", () => {
  beforeEach(() => {
    visitPage();
  });

  it("URL should match the home page", () => {
    cy.url().should("eq", URL);
  });

  it("should navigate to the home page when clicking on blog title", () => {
    cy.getByTestId("blog-title").click();
    cy.location("pathname", { timeout: 20000 }).should("eq", LOCATION);
  });

  it("should list be visible", () => {
    cy.getByTestId("post-list").should("exist");
    cy.getByTestId("post-list").should("be.visible");
  });
});
