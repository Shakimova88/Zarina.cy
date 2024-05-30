
/// <reference types="cypress" />
import HomePage from '../../pages/GitHubHomePage'
import LoginPage from '../../pages/GitHubLoginPage'
const loginpage = new LoginPage()
const homepage = new HomePage()
describe('GitHub', () => {
  beforeEach(() => {
    cy.visit('https://github.com/')
  })

/*
1. Go to https://github.com/
2. Validate that the logo is displayed
3. Validate that the header menu items are displayed with their expected 
texts
Product
Solutions
Open Source
Pricing
*/

  it('TASK-1: Validate the GitHub Home Page Logo and Header Menu Items', () => {
    homepage.logoLocator().should('be.visible')
    const texts = ['Product', 'Solutions', 'Open Source', 'Pricing']
    homepage.headerItems().each(($el, index) => {
      cy.wrap($el).should('be.visible').and('contain', texts[index])
    })
  })

/*
1. Go to https://github.com/
2. Validate that the search input is displayed with the placeholder 
"Search or jump to..."
3. Validate that the sign in button is displayed with the text "Sign in"
4. Validate that the sign up button is displayed with the text "Sign up"
*/

  it('TASK-2: Validate the GitHub Home Page Search and Signing Header Items', () => {
    const texts = ['Sign in', 'Sign up']
    homepage
      .searchBarlocator()
      .should('be.visible')
      .and('have.text', 'Search or jump to...')
    homepage.loginSignupLoctr().each(($el, index) => {
      cy.wrap($el).should('be.visible').and('contain', texts[index])
    })
  })

/*
1. Go to https://github.com/
2. Click on "Sign in" button
3. Validate that the header logo is displayed
4. Validate that the form header is displayed with the text "Sign in to 
GitHub"
5. Validate that the username or email address label is displayed with the
text "Username or email address"
6. Validate that the username or email address input is displayed and 
enabled
7. Validate that the password label is displayed with the text "Password"
8. Validate that the password input is displayed and enabled
9. Validate that the forgot password link is displayed with the text "Forgot
password?"
10. Validate that the sign in with a passkey button is displayed with 
the text "Sign in with a passkey"
11. Validate that the create an account link is displayed with the text
"Create an account"
*/

  it('TASK-3: Validate the GitHub Login Page Sign in Form', () => {
    const texts = [
      'Sign in to GitHub',
      'Username or email address',
      'Password',
      'Forgot password?',
      'Sign in',
      'Sign in with a passkey',
      'Create an account',
    ]

    homepage.SignUpButton().click()
    loginpage.signuplogo().should('be.visible')
    loginpage.textLocator().each((el, index) => {
      cy.wrap(el).should('be.visible').and('contain', texts[index])
    })
    loginpage.usernameAndPasswordinput().should('be.visible').and('be.enabled')
  })

/*
1. Go to https://github.com/
2. Click on "Sign in" button
3. Validate that there are 6 links are displayed in the footer
4. Validate that the footer links are displayed with their expected texts
Terms
Privacy
Docs
Contact GitHub Support
Manage cookies
Do not share my personal information
*/

  it('TASK-4: Validate the GitHub Login Page Footer Links', () => {
    const texts = [
      'Terms',
      'Privacy',
      'Docs',
      'Contact GitHub Support',
      'Manage cookies',
      'Do not share my personal information',
    ]
    homepage.SignUpButton().click()
    cy.wait(2000)
    loginpage.footerItemsLocator().should('have.length', 6)
    loginpage.footerItemsLocator().each((el, index) => {
      cy.wrap(el).should('contain', texts[index])
    })
  })

/*
1. Go to https://github.com/
2. Click on "Sign in" button
3. Enter "johndoe" to the username or email address input
4. Enter "test1234" to the password input
5. Click on "Sign in" button
6. Validate that the error message is displayed with the text "Incorrect 
username or password."
*/

  it('TASK-5: Validate the GitHub Login Page Invalid Login Attempt', () => {
    const texts = ['johndoe', 'test1234']
    homepage.SignUpButton().click()

    loginpage.usernameAndPasswordinput().each((el, index) => {
      cy.wrap(el).type(texts[index])
    })
    loginpage.signInButton().click()
    loginpage
      .alertlocator()
      .should('be.visible')
      .and('contain', 'Incorrect username or password.')
  })
})