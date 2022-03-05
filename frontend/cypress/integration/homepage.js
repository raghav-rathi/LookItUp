describe("renders the home page", () => {
    it ("renders correctly", () => {
        cy.visit("/")
        cy.get("#container").should("exist")
    })
    
    it('has active class', () => {
        cy.get('#first').should('have.class', 'active')
    })

    it('can submit a valid picture', () => {
        cy.get('done').submit()
      })
    
});