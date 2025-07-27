// /// <reference types="cypress" />

// describe('Login Scenarios', () => {
//   it('Logs in successfully with valid credentials (mocked CAPTCHA)', () => {
//     // Intercept and mock the backend login response to bypass CAPTCHA
//     cy.intercept('POST', 'https://dev-login.platform.creatingly.com/login', (req) => {
//       req.reply({
//         statusCode: 200,
//         body: {
//           message: 'Login successful',
//           token: 'mocked-jwt-token' // optional: your app might store this
//         }
//       })
//     }).as('mockCaptchaLogin')

//     // Open the login window origin
//     cy.origin('https://dev-login.platform.creatingly.com', () => {
//       cy.visit('/login')

//       // Fill in login form
//       cy.get('input[type=email]').type('user@example.com')
//       cy.get('input[type=password]').type('password123')
//       cy.get('.login100-form-btn').click()
//     })

//     // Wait for the mocked login request to complete
//     cy.wait('@mockCaptchaLogin')

//     // Now back on main app, you can simulate setting auth if needed
//     cy.visit('https://dev.platform.creatingly.com/', {
//       onBeforeLoad(win) {
//         win.localStorage.setItem('authToken', 'mocked-jwt-token') // adapt if key is different
//       }
//     })

//     // Assert login success — tweak according to your dashboard content
//     cy.contains('Dashboard').should('exist')
//   })
// })

import LoginPage from '../pages/LoginPage';
import credentials from '../fixtures/credentials.json';

const loginPage = new LoginPage();

describe('Login Test', () => {
  it('should login with valid credentials', () => {
    cy.visit('/');
    loginPage.login(credentials.validToken);
    cy.url().should('include', '/dashboard');
  });



// /// <reference types="cypress" />

// describe('Login Scenarios', () => {
//   it('Logs in successfully with valid credentials (mocked CAPTCHA)', () => {
//     // Intercept the login request to mock CAPTCHA verification
//     cy.intercept('POST', 'https://dev-login.platform.creatingly.com/login', (req) => {
//       // Optionally inspect or modify the request here
//       req.reply({
//         statusCode: 200,
//         body: {
//           message: 'Login successful',
//           token: 'mocked-jwt-token'
//         }
//       })
//     }).as('mockCaptchaLogin')

//     cy.origin('https://dev-login.platform.creatingly.com', () => {
//       cy.visit('/login')
//       cy.get('input[type=email]').type('user@example.com')
//       cy.get('input[type=password]').type('password123')
//       cy.get('.login100-form-btn').click()
//     })

//     // Wait for intercepted login request
//     cy.wait('@mockCaptchaLogin')

//   })
// })
// Add your assertions here based on expected post-login behavior
// cy.origin('https://dev-login.platform.creatingly.com', () => {
//   cy.url().should('include', '/dashboard') // Or whatever your redirected page is
//   cy.contains('Welcome').should('be.visible')
// })


// import { loginPage } from '../support/loginPage'
// import loginData from '../fixtures/loginData.json'

// describe('Login Scenarios', () => {
//   it('Logs in successfully with valid credentials', () => {
//   //   cy.origin('https://dev-login.platform.creatingly.com', () => {
//   // cy.visit('/login')
//   // })


//   //   cy.origin('https://dev-login.platform.creatingly.com', () => {
//   //     cy.get('input[type=email]').type('user@example.com')
//   //     cy.get('input[type=password]').type('password123')
//   //     cy.get('button[type=submit]').click()
//   //   })
//   cy.origin('https://dev-login.platform.creatingly.com', () => {
//   cy.visit('/login')
//   cy.get('input[type=email]').type('user@example.com')
//   cy.get('input[type=password]').type('password123')
//   cy.get('.login100-form-btn').click()
// })

//   })
// })



// //import loginPage from '../support/pages/LoginPage'

// describe('Login Scenarios', () => {
//   beforeEach(() => {
//   cy.window().then((win) => {
//     win.location.href = 'https://dev.platform.creatingly.com/'
//   })
// })
//   })

//   it('Logs in successfully with valid credentials', () => {
//     cy.origin('https://dev-login.platform.creatingly.com', () => {
//     cy.get('input[type=email]').type('user@example.com')
//    cy.get('input[type=password]').type('password')
//    cy.get('button[type=submit]').click()
// })
//     // cy.fixture('users').then((data) => {
//     //   loginPage.login(data.validUser.email, data.validUser.password)
//     //   loginPage.assertLoginSuccess()
//     // })
//   })

// //   // it('Fails to login with invalid credentials', () => {
// //   //   cy.fixture('users').then((data) => {
// //   //     loginPage.login(data.invalidUser.email, data.invalidUser.password)
// //   //     loginPage.assertLoginFailure()
// //   //   })
// //   // })

// //   // it('Shows error on empty fields', () => {
// //   //   cy.fixture('users').then((data) => {
// //   //     loginPage.login(data.emptyFields.email, data.emptyFields.password)
// //   //     cy.contains('Email is required').should('be.visible') // adjust if needed
// //   //     cy.contains('Password is required').should('be.visible') // adjust if needed
// //   //   })
// //   // })
})

