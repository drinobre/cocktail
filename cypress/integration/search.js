describe("search for cocktail", () => {
  it("search for margarita", () => {
    cy.visit("http://localhost:3000/cocktail/");
    cy.get(".input").type("margarita");
    cy.get(".search").click();
    cy.get(".input").clear();
  });

  it("read more about margarita", () => {
    // Click on the first match Read more
    cy.contains("Read more").click();
    cy.contains("Close").click();
  });

  it("search for Elderflower Caipirinha", () => {
    cy.get(".input").type("Elderflower Caipirinha");
    cy.get(".search").click();
    cy.get("input").clear();
  });
});
