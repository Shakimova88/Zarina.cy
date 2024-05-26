/// <reference types="cypress" />
import TablePage from "../../pages/TablePage"

describe('Static Tables', () => {

  const tablePage = new TablePage()

  beforeEach(() => {
    cy.clickCard('Tables')

    cy.fixture('example').then(function(data) {
      this.headers = data.headers
    })
  })
  /**
   * Test Case
   * Scenario: Verify the headers of the table
   * 
   * 1. Go to https://techglobal-training.com/frontend
   * 2. Click on the "Tables" card
   * 3. On the static table, Validate the headers of the table are "Rank", "Company", "Employees", "Country"
   * 
   * 
   * NOTE: USE POM, and Fixtures
   */
  it('Verify the headers of the table',{ tags :['@table']}, () => {

    tablePage.getCompanyTableHeaders().each(function($el, index) {
      cy.wrap($el).should('have.text', this.headers[index])
    })
  
  })
})