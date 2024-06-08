/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import createNewTemplateCardActions from "../../../pageobject/createNewTemplateCard/actions.cy";
import createTemplateCardAssertions from "../../../pageobject/createNewTemplateCard/assertions.cy";
import SharedDataUtils from "../../../pageobject/shared/dataUtils.cy";
const createNewTemplateCardAction = new createNewTemplateCardActions()
const createNewTemplateCardAssertion =new createTemplateCardAssertions()
const sharedDataUtil = new SharedDataUtils();
const title = "Template Card";
const boardName = "Test Board";
let boardUrl , boardId ,listId,cardId; 
const listName ="My List";

before(()=>{
    dataUtils.createBoard(boardName).then((resp)=>{
        boardUrl = resp.body.url ; 
        boardId = resp.body.id ; 
        return dataUtils.createList(boardId,listName).then((resp2)=>{
            listId = resp2.body.id ;
            dataUtils.createCard(listId,title).then((resp3)=>{
                cardId=resp3.body.id;
            })

        })
    })
    cy.loginToTrello();
});

Given("The user navigate the board",()=>{
    createNewTemplateCardAction.openBoard(boardUrl)
});
When("Navigate the Card and open it",()=>{
    createNewTemplateCardAction.navigateCard()

});
When("The user Make the card as template card",()=>{
    createNewTemplateCardAction.makeCardTemplate()
});
  Then("The card should be template card",()=>{
    cy.wait(1000)
    createNewTemplateCardAssertion.checkThisCardIsTemplateIsVisible()
});

