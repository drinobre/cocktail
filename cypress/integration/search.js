it("save new job and navigate to home", () => {
  cy.visit("http://localhost:3000/cocktail/");
  cy.get(".input")
    .type("margarita")
    .should("have.value", "margarita");
  cy.get(".search").click();
});
