/// <reference types="Cypress"/>
describe("Testing Wikipedia page", () => {
    beforeEach(() => {
      cy.visit("https://www.wikipedia.org/");
    });

    /*
    Validate that the logo is displayed, and its text is "Wikipedia"
	Validate that the slogan is displayed, and its text is "The Free Encyclopedia"
    */

    it("TASK-1: Validate the Wikipedia Logo and Slogan", () => {
      cy.get("span.svg-Wikipedia_wordmark").should('be.visible').and('contain.text', 'Wikipedia');
      cy.get('.jsl10n.localized-slogan').should('be.visible').and('contain.text', 'The Free Encyclopedia');

    });

   /*
   Validate that there are top ten languages are displayed
   Validate that the top language is "English"
   */

    it("TASK-2: Validate the Wikipedia Top Ten Languages", () => {
        cy.get('.central-featured-lang').should('have.length', 10).and('be.visible').first('contain.text', 'English');

    });
  
    /*
    Search for "Cypress" in the search bar
	Validate that "Cypress" is displayed in the title of the new page
	Validate that "Cypress" is displayed in the url of the new page
	Validate that "Cypress" is displayed in the main heading of the page

    */
    it("TASK-3: Validate the Wikipedia Search Results", () => {
       cy.get('input[name="search"]').type('Cypress{enter}');
       cy.title().should('include', 'Cypress');
       cy.url().should('include', 'Cypress');
       cy.get('#firstHeading').should('be.visible').and('have.text', 'Cypress')
     
    });

    /*
    Click on "Read Wikipedia in your language" button
    Validate that there are 18 languages have over 1,000,000 articles
	Validate that there are 53 languages have over 100,000 articles
	Validate that there are 99 languages have over 10,000 articles
	Validate that there are 126 languages have over 1,000 articles
	Validate that there are 29 languages have over 100 articles
    */

    it("TASK-4: Validate the Wikipedia Article Numbers for All Languages", () => {
        cy.get('#js-lang-list-button').click();
        const arr = [18, 53, 99, 126, 29];
        cy.get('.langlist').each((list, index) => {
          if (index < arr.length) {
            cy.wrap(list).find('a').should('have.length', arr[index]);
          }
        });
      });
  });

  /*
  it('TASK-4: Validate the Wikipedia Article Numbers for All Languages', () => {
        const arr = [18, 53, 99, 126, 29]
        cy.get('#js-lang-list-button').click()
        for(let i = 0; i <= 4; i++) {
            cy.get('.langlist').eq(i).find('a').should('have.length', arr[i])
        }
    })
  */