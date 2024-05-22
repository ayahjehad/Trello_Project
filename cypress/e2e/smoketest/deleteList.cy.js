
/// <reference types="cypress" />
import { And, Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import UpdateListActions from "../../../pageObjects/updateList/actions.cy";
import updateListAssertions from "../../../pageObjects/updateList/assertions.cy";
import createBoardActions from "../../../pageObjects/createBoard/actions.cy";
import createListActions from "../../../pageObjects/createList/actions.cy";
import createListAssertions from "../../../pageObjects/createList/assertions.cy";
import DeleteListActions from "../../../pageObjects/deleteList/actions.cy";
import deleteListAssertions from "../../../pageObjects/deleteList/assertions.cy";
const createListAction =new createListActions();
const createListAssertion = new createListAssertions();
const createBoardAction = new createBoardActions();
const DeleteListAction = new DeleteListActions();
const deleteListAssertion = new deleteListAssertions();
const boardName = "My First Board";
const listName ="Test list" 
before(() => {
    cy.loginToTrello()
    cy.wait(3000)
    createBoardAction.clickOnCreateButton()
    createBoardAction.chooseCreateBoardOption()
    createBoardAction.typeInBoradTitleInputField(boardName)
    createBoardAction.clickOnCreateBoardButton()
    cy.wait(1000)
    createListAction.clickOnListAdd()
    createListAction.typeListName(listName)
    createListAction.clickOnAddList2()
})
When("Add a card",()=>{
    DeleteListAction.addACard()
});
And("name the card",()=>{
    DeleteListAction.nameTheCard(listName)
});
And("add the card",()=>{
    DeleteListAction.addTheCard()
});
And("clickoncard",()=>{
    DeleteListAction.clickoncard()
});

And("clickOnArchive",()=>{
    DeleteListAction.clickOnArchive()
});


And(" DeleteList",()=>{
    DeleteListAction.DeleteList()
});

Then("The List will be deleted successfully",()=>{
    deleteListAssertion.checkListNameIsNotVisible()
})