class LoginPage {
    //locators
    signuplogo() {
      return cy.get('.header-logo')
    }
    textLocator() {
      return cy.get(
        '.auth-form-header, [for="login_field"], [for="password"], #forgot-password, .Button--link > .Button-content > .Button-label, [href="/signup?source=login"], [type="submit"]'
      )
    }
  
    usernameAndPasswordinput() {
      return cy.get('#login_field, #password')
    }
  
    footerItemsLocator() {
      return cy.get('ul > li')
    }
  
    signInButton() {
      return cy.get('[type="submit"]')
    }
  
    alertlocator() {
      return cy.get('.js-flash-alert')
    }
  }
  
  export default LoginPage