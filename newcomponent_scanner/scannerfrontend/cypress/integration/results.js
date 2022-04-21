describe('Results rendering', () => {
    it('renders result', ()=>{
        const filepath='test.jpg';
        cy.visit('/');
        cy.get('#image-input').attachFile(filepath);
        cy.get('#submitt').click();
        cy.wait(10000);
        cy.get('.chart-btn').should("exist");
    });
});