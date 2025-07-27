// class LoginPage {
//   clickGetStarted() {
//     cy.contains('Get Started').invoke('removeAttr', 'target').click()
//   }

//   fillEmail(email) {
//     cy.get('input[type="email"]').clear().type(email)
//   }

//   fillPassword(password) {
//     cy.get('input[type="password"]').clear().type(password)
//   }

//   submit() {
//     cy.get('button[type="submit"]').click()
//   }

//   login(email, password) {
//     this.fillEmail(email)
//     this.fillPassword(password)
//     this.submit()
//   }

//   assertLoginSuccess() {
//     cy.url().should('include', '/dashboard') // or any landing page URL
//     cy.contains('Welcome') // or any post-login indicator
//   }

//   assertLoginFailure() {
//     cy.contains('Invalid credentials').should('be.visible')
//   }
// }

// export default new LoginPage()

// class LoginPage {
//   visitLoginPage() {
//     cy.window().then((win) => {
//       win.location.href = 'https://dev-login.platform.creatingly.com/login'
//     })
//   }

//   fillLoginForm(email, password) {
//     cy.get('input[type=email]').type(email)
//     cy.get('input[type=password]').type(password)
//     cy.get('button[type=submit]').click()
//   }
// }

// export const loginPage = new LoginPage()


class LoginPage {
  login(token) {
    cy.get('input[type="password"]').type(token);
    cy.get('button[type="submit"]').click();
  }
}
export default LoginPage;
