// Arrange -set initial app state
// Act - take an action
// Assert - make an assertion

describe("navigate to the surprise me page and return to home", () => {
  it("load homepage", () => {
    cy.visit("http://localhost:3000/cocktail/");
    cy.contains("Surprise me").click();
  });

  it("Loads surprise me page", () => {
    cy.url().should("include", "/surprise-me");
    cy.contains("Home").click();
  });

  it("Return to the homepage", () => {
    cy.url().should("include", "/");
  });
});
