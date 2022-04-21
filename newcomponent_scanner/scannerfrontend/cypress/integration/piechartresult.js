describe('Pie chart rendering', () => {
    it('Pie chart rendered', ()=>{
        const filepath='test.jpg';
        cy.visit('/');
        cy.get('#image-input').attachFile(filepath);
        cy.get('#submitt').click();
        cy.wait(10000);
        cy.get('.chart-btn').click();
        cy.get('#piechart').should("exist");
    });
});