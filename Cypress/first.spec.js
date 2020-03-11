//context('Login', () => {
//    beforeEach(() => {
//        cy.visit('https://qa-ban6425.slack.com')
//    })
//
//    it('Login with first user', function () {
////        cy.visit('https://qa-ban6425.slack.com', {
////            onBeforeLoad(win) {
////                cy.stub(win, 'open')
////            }
////        })
//     //   cy.login('nkumar@qasource.com','minakshi1!')
//        cy.get('#email').type('nkumar@qasource.com')
//        cy.get('#password').type('minakshi1!')
//        cy.get('#signin_btn').click()
//
//       // cy.request('/client')
//        cy.contains('general')
//    })
//
//})
// -- Start: Our Application Code --
function add (a, b) {
  return a + b
}

function subtract (a, b) {
  return a - b
}

function divide (a, b) {
  return a / b
}

function multiply (a, b) {
  return a * b
}
// -- End: Our Application Code --

// -- Start: Our Cypress Tests --
describe('Unit test our math functions', function() {
  context('math', function() {
    it('can add numbers', function() {
      expect(add(1, 2)).to.eq(3)
    })

    it('can subtract numbers', function() {
      expect(divide(5, 12)).to.eq(-7)
    })

    specify('can divide numbers', function() {
      expect(divide(27, 9)).to.eq(3)
    })

    specify('can multiply numbers', function() {
      expect(multiply(5, 4)).to.eq(20)
    })
  })
})
