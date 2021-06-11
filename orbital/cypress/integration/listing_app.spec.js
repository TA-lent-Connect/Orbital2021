describe('TA-lent Connect', function() {
    beforeEach(function() {
      cy.request('POST', 'http://localhost:3001/api/testing/reset')
      const user = {
        name: 'Jianning',
        username: 'imacellist',
        password: 'p5hrNIpu'
      }
      cy.request('POST', 'http://localhost:3001/api/users/', user)
      cy.visit('http://localhost:3000')
    })
  
    it('front page can be opened', function() {
      cy.contains('Current Listings')
      cy.contains('Modules')
    })
  
    it('login form can be opened', function() {
      cy.contains('log in').click()
      cy.get('#username').type('imacellist')
      cy.get('#password').type('p5hrNIpu')
      cy.get('#login-button').click()
  
      cy.contains('imacellist logged in')
    })
  
    describe('when logged in', function() {
      beforeEach(function() {
        cy.contains('log in').click()
        cy.get('input:first').type('imacellist')
        cy.get('input:last').type('p5hrNIpu')
        cy.get('#login-button').click()
      })
  
      it('a new listing can be created', function() {
        cy.contains('new listing').click()
        cy.get('input').type('a listing created by cypress')
        cy.contains('save').click()
        cy.contains('a listing created by cypress')
      })
  
      describe('and a listing exists', function () {
        beforeEach(function () {
          cy.contains('new listing').click()
          cy.get('input').type('another listing cypress')
          cy.contains('save').click()
        })

      })
    })
  })