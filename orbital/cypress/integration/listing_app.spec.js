describe('TA-lent Connect', function() {
  it('login page', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Sign in')
    cy.contains('Don\'t have an account? Sign Up')
  })

  it('user can log in', function() {
    cy.get('#username').should('be.visible').type('admin')
    cy.get('#password').should('be.visible').type('password')
    cy.get('#login-button').should('be.visible').click()


  })

  // it('when logged in', function() {
  //   cy.intercept({
  //     method: 'POST',
  //     url: '/api/login',
  //   }).as('loginCheck')
  //   cy.wait('@loginCheck')
  //   cy.contains('Ad Min | Module Coordinator')
  // })

  it('create a new listing', function() {
    cy.request('POST', 'http://localhost:3001/api/login', {
      username: 'admin', password: 'password'
    }).then(response => {
      localStorage.setItem('loggedUser', JSON.stringify(response.body))
      cy.visit('http://localhost:3000/mymodules')
    })
    cy.get('#newListingButton').should('be.visible').click()
  })
})



// describe('TA-lent Connect', function() {
//     beforeEach(function() {
//       cy.request('POST', 'http://localhost:3001/api/testing/reset')
//       const user = {
//         name: 'Jianning',
//         username: 'imacellist',
//         password: 'p5hrNIpu'
//       }
//       cy.request('POST', 'http://localhost:3001/api/users/', user)
//       cy.visit('http://localhost:3000')
//     })
  
//     it('front page can be opened', function() {
//       cy.contains('Current Listings')
//       cy.contains('Modules')
//     })
  
//     it('login form can be opened', function() {
//       cy.contains('log in').click()
//       cy.get('#username').type('imacellist')
//       cy.get('#password').type('p5hrNIpu')
//       cy.get('#login-button').click()
  
//       cy.contains('imacellist logged in')
//     })
  
//     describe('when logged in', function() {
//       beforeEach(function() {
//         cy.contains('log in').click()
//         cy.get('input:first').type('imacellist')
//         cy.get('input:last').type('p5hrNIpu')
//         cy.get('#login-button').click()
//       })
  
//       it('a new listing can be created', function() {
//         cy.contains('new listing').click()
//         cy.get('input').type('a listing created by cypress')
//         cy.contains('save').click()
//         cy.contains('a listing created by cypress')
//       })
  
//       describe('and a listing exists', function () {
//         beforeEach(function () {
//           cy.contains('new listing').click()
//           cy.get('input').type('another listing cypress')
//           cy.contains('save').click()
//         })

//       })
//     })
//   })