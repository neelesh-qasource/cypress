import { UTILS } from '../../support';
    describe('Format Messages', () => {
      before(() => {
        cy.visit('/')
        cy.login()
        cy.contains('general')
      })
      after(() => {
        cy.logout();
      
      })
      it('User to Format Messages while messaging', function () {    
        cy.get('span[data-qa="channel_sidebar_name_slackbot"] span').click()
        cy.get('.ql-composer-sticky').click()
        cy.get('.c-icon--bold').click()
        const str = UTILS.getRandomString()
        cy.get('.p-message_input_field').should('be.visible').type('@neelesh'+'{enter}'+str+'New Message').type('{enter}')
        
      }) 
     
    })
