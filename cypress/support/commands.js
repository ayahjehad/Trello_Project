// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginToTrello',()=>{
    cy.intercept("https://trello.com/1/resources/templates/categories")
    .as("loginResponse")
    cy.visit("/login");
    cy.get("#username").type("ayahabudura@gmail.com");
    cy.get("#login-submit").click();
    cy.wait(3000)
      cy.get("#password").type("123456789@"+"{enter}")
    
    cy.wait("@loginResponse")
    // cy.wait(3000)
  })
 
  