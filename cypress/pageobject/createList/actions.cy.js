class createListActions {
  // methods needed in create list 
 

  clickOnListAdd(){
    cy.findByTestId("list-composer-button").click();
    return this;
  }
  typeListName(listName){
      cy.findByTestId("list-name-textarea").click().type(listName);
      return this;
  }
  clickOnAddList2(){
      cy.findByTestId("list-composer-add-list-button").click()
      return this;
  }
  

}
export default createListActions;