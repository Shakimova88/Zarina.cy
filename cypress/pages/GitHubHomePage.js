class HomePage {
  // locators
  logoLocator() {
    return cy.get('div.width-lg-auto')
  }
  headerItems() {
    return cy.get('.HeaderMenu-item')
  }
  searchBarlocator() {
    return cy.get('[data-target="qbsearch-input.inputButtonText"]')
  }

  loginSignupLoctr() {
    return cy.get('.HeaderMenu-link--sign-in, .HeaderMenu-link--sign-up')
  }

  SignUpButton() {
    return cy.get('.HeaderMenu-link--sign-in')
  }
}
export default HomePage