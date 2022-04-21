describe('Upload file', () => {
    it('Upload File', ()=>{
        const filepath='test.jpg';
        cy.visit('/');
        cy.get('#image-input').attachFile(filepath);
        // cy.get('#submitt').click();
        cy.get('#textt').contains("test.jpg");
    })
});