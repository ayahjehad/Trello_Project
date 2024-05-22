/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import createListActions from "../../../pageObjects/createList/actions.cy";
import createListAssertions from "../../../pageObjects/createList/assertions.cy";
import createBoardActions from "../../../pageObjects/createBoard/actions.cy";

const createListAction =new createListActions();
const createListAssertion = new createListAssertions();
const createBoardAction = new createBoardActions();
const boardName = "My First Board";

before(() => {
    cy.loginToTrello()
    cy.wait(3000)
    createBoardAction.clickOnCreateButton()
    createBoardAction.chooseCreateBoardOption()
    createBoardAction.typeInBoradTitleInputField(boardName)
    createBoardAction.clickOnCreateBoardButton()
  
})
When("Click on add list button ",()=>{
    createListAction.clickOnListAdd()
});

When("Types in List title",()=>{
    createListAction.typeListName(listName)
});

When("Clicks on Add list",()=>{
    createListAction.clickOnAddList()
});

Then("The List will be created successfully",()=>{
    createListAssertion.checkListNameContainValue(listName)
});