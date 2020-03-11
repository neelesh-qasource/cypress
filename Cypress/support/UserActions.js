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
//Cypress.Commands.add("login", (email, password) => {
//    cy.get('#email').type('nkumar@qasource.com')
//    cy.get('#password').type('minakshi1!')
//    cy.get('#signin_btn').click()
//});
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

export const userCredentials =  {
    email: 'nkumar@qasource.com',
    password: 'bebo1231!',
};

export const API = {
  ChannelArchive: 'xoxp-827462940530-842106451911-915041256983-4ed396c2b57c351afb0d31a3a028ae10',
};


