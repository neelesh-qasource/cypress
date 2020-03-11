import { userCredentials } from "./UserActions";


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
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

Cypress.Commands.add("login", (email, password) => {
    cy.get('#email').type(userCredentials.email)
    cy.get('#password').type(userCredentials.password)
    cy.get('#signin_btn').click()
   
});


Cypress.Commands.add("logout", () => {
    //cy.get('.p-classic_nav__team_header__team__icon_button > .c-icon').click();
    cy.get('.p-ia__sidebar_header__info').click();
    cy.contains('Sign out of ').click();
    cy.contains('You need to sign in to see this page.').should('be.visible')
   });

   Cypress.Commands.add('getValueFromURL', (url, value) => {
    var str = url;
    var res = str.split('/');
    return res[value];
});
