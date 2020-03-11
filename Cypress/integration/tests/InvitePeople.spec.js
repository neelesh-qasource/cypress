import { UTILS } from '../../support';
    describe('Test User is able to invite people to the workspace', () => {
      before(() => {
        cy.visit('/')
        cy.login()
        cy.contains('general')
      })
      after(() => {

        cy.logout();
      })

  

  it('Click on invite link', function () {
    cy.get('[data-sidebar-link-id="Vinvites"]').click()
    const str = UTILS.getRandomString();
    cy.get('input[name="invite_modal_email_0"]').type(str+"+user1@testmailaccount.com")
    cy.get('input[name="invite_modal_name_0"]').type(str)
    cy.get('[data-qa="submit_invites_button"]').click()
    cy.get('[data-qa="invite_modal_invites_sent_done_button"]').click()
   
       
  })

 
})
