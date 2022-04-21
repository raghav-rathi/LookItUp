describe("homepage launches correctly", () => {
    it("rendered correctly", () => {
        cy.visit("/");
        cy.get("#home").should("exist");
    });
});