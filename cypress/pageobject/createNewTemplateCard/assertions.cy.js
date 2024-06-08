class createNewTemplateCardAssertions{
    checkThisCardIsTemplateIsVisible(){
        cy.findByTestId('template-card-back-banner').should('be.visible');
        return this;
    }
}
export default createNewTemplateCardAssertions;