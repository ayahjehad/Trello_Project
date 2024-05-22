class DeleteListActions {

    addACard(){
        cy.findByTestId("list-add-card-button").click()
      return this;

    }
         nameTheCard(){
            cy.findByTestId("list-card-composer-textarea").type(listName)
            return this;
         }

         addTheCard(){
            cy.findByTestId("list-card-composer-add-card-button").click()
            return this;
         }
         clickoncard(){
            cy.findByTestId("card-name").click()
            return this;
         }
         clickOnArchive(){
            cy.findByTestId("card-back-archive-button").click()
            return this;
         }
         DeleteList(){
            cy.findByTestId("card-back-delete-card-button").click()
            return this;
         }
}
export default DeleteListActions;