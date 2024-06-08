
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import SharedDataUtils from "../../../pageobject/shared/dataUtils.cy";
import CreateNewCardActions from "../../../pageobject/createNewCard/actions.cy";
import CreateNewCardAssertions from "../../../pageobject/createNewCard/assertions.cy";
import ShardActions from "../../../pageobject/shared/actions.cy";
 
const sharedDataUtil = new SharedDataUtils();
const CreateNewCardAction = new CreateNewCardActions();
const CreateNewCardAssertion = new CreateNewCardAssertions();
const sharedAction = new ShardActions();

const boardName= "CypressBoard 55"; 
const cardTitle = "CypressCard"; 
// let boardId , boardUrl;

before(()=>{
    cy.loginToTrello();
    // sharedDataUtil.createNewBoard(boardName).then((response)=>{
    //     boardId = response.body.id
    //     boardUrl = response.body.url
    // });
    // cy.getCookie("hasAccount").should("have.property","domain","trello.com");
    // cy.setCookie("myCookie","Testing");
    // cy.getCookies();
    // cy.clearCookie("myCookie")

    sharedDataUtil.createNewBoard(boardName).as('boardResponse');
})

// cy.request()
// cy.intercept() 


Given("The user navigate to board",()=>{
    // cy.wait(3000) // static wait 
    // api wait 
    // cy.wait("@boardResponse")
    // sharedAction.openBoard(boardUrl);

    cy.get("@boardResponse").then((data)=>{
        cy.log(data)
        sharedAction.openBoard(data.body.url);
    })
});

When("Clicks on Add a card button",()=>{
    CreateNewCardAssertions.clickOnAddACardButton();
});

When("Enters a title for the card",()=>{
    CreateNewCardActions.typeInCardTitleField(cardTitle);
});

When("Clicks on Add card button",()=>{
    CreateNewCardActions.clickOnAddCardButton();
});

Then("A new card will be created",()=>{
    CreateNewCardAssertions.checkCardIsExist().checkCardIsContain(cardTitle);
});

after(()=>{
    cy.get("@boardResponse").then((response)=>{
        sharedDataUtil.deleteBoard(response.body.id);
    })
    // sharedDataUtil.deleteBoard(boardId);
})