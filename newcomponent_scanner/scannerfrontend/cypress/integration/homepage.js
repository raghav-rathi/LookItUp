describe("homepage launches correctly", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("rendered correctly", () => {
        cy.get("#home").should("exist");
    });

    it("Homepage Buttons can be used",()=>{
        cy.get('.btn-select').click();
        cy.get('.button-31').click();
        cy.get('.search').click();
    });

    it("Routes to a different page",()=>{
        cy.get('a.scanner').click();
        cy.url().should("include","about"); 
    });
});