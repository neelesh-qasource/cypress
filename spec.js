/// <reference types="cypress" />
describe('window open', function () {
  it('opens a new window with page1', function () {
    // window.open is called on click
    // thus we can create method stub after the cy.visit
    // but before cy.click

       /// cy.visit('/index.html')
	   
	       cy.visit('/index.html', {
      onBeforeLoad (win) {
		cy.stub(win, 'document').as('windowOpen')	
      },
    })
   
 	//cy.window().then((win) => {
    // cy.stub(win, 'open').as('windowOpen')	
   // })
   cy.get('#open-window').click()
   //cy.get('@windowOpen').should('be.calledWith', 'page1.html')
   
   cy.get('@windowOpen').within(() => {
  cy.get('input').type('Pamela') // Only yield inputs within form
  cy.get('textarea').type('is a developer') // Only yield textareas within form
})
  })
})
