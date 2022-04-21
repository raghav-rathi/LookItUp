describe("renders the home page", () => {
    it ("renders correctly", () => {
        cy.visit("/")
        cy.get("#container").should("exist")
    });
    
    it('has active class', () => {
        cy.get('#first').should('have.class', 'active')
    });

    it('can submit a valid picture', () => {
        cy.get('done').submit()
    });

    describe('Check whether user can authenticate', () => {
  
        it('signup working', () => {
          cy.visit('/')
          cy.get('a[href*="SignupScreen"]').click({force: true})
          cy.url().should('include', '/SignupScreen')
            
          const username = "abcd@xyz.com"
          const name= "abcd"  
          const password = "test"
          cy.get('[data-cy=name]').type(name)
          cy.get('[data-cy=email]').type(username)
          cy.get('[data-cy=password]').type(`${password}{enter}`)
        })
      })
    
});