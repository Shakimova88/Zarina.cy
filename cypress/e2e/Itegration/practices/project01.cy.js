beforeEach(() => {
    cy.visit('https://techglobal-training.com/frontend/project-1');
  });
  
  describe('Project01 Validate Techglobal-training frontend page', () => {

    it('Test Case 01 - Validate the Contact Us information', () => {
        cy.get('h1.is-size-3').should('be.visible');
        cy.get('#address').contains('2800 S River Rd Suite 310, Des Plaines, IL 60018');
        cy.get('#email').contains('info@techglobalschool.com');
        cy.get('#phone-number').contains('(224) 580-2150');
    });
    });

    it('Test Case 02 - Validate the Full name input box', () => {
      cy.get('input[placeholder="Enter your full name"]').should('be.visible');
      cy.get('input[placeholder="Enter your full name"]').should('have.attr', 'required');
      cy.get('label.label[for="name"]').contains('Full name');
      cy.get('input.input[placeholder="Enter your full name"]').should('be.visible');

    });

    it('Test Case 03 - Validate the Gender radio button', () => {
      cy.get('.field .control .label').contains('Gender *').should('exist');
      cy.get('input[type="radio"][name="question"]').first().should('have.attr', 'required');
      cy.contains('label', 'Male').should('exist').click();
      cy.contains('label', 'Female').should('exist').click();
      cy.contains('label', 'Prefer not to disclose').should('exist');
    
    });

    it('Test Case 04 - Validate the Address input box', () => {
      cy.get('input[type="text"][placeholder="Enter your address"]').should('be.visible');
      cy.get('input[type="text"][placeholder="Enter your address"]').should('not.have.attr', 'required');
      cy.get('label').contains('Address').should('exist');
      cy.get('input[type="text"][placeholder="Enter your address"]').should('have.attr', 'placeholder', 'Enter your address');
    });

    it('Test Case 05 - Validate the Email input box', () => {
      cy.get('input[ type="email"][ placeholder="Enter your email"]').should('be.visible');
      cy.get('input[type="email"][placeholder="Enter your email"]').should('have.attr', 'required');
      cy.get('label').contains('Email').should('exist');
      cy.get('input[type="email"][placeholder="Enter your email"]').should('have.attr', 'placeholder', 'Enter your email');
    });

    it('Test Case 06 - Validate the Phone input box', () => {
      cy.get('input[type="phone"][placeholder="Enter your phone number"]').should('be.visible');
      cy.get('input[type="phone"][placeholder="Enter your phone number"]').should('not.have.attr', 'required');
      cy.get('label').contains('Phone').should('exist');
      cy.get('input[type="phone"][placeholder="Enter your phone number"]').should('have.attr', 'placeholder', 'Enter your phone number');

    });

    it('Test Case 07 - Validate the Message text area', () => {
      cy.get('textarea[placeholder="Type your message here..."]').should('be.visible');
      cy.get('textarea[placeholder="Type your message here..." ]').should('not.have.attr', 'required');
      cy.get('label').contains('Message').should('exist');
      cy.get('textarea[placeholder="Type your message here..." ]').should('have.attr', 'placeholder', 'Type your message here...');

    });

    it('Test Case 08 - Validate the Consent checkbox', () => {
      cy.get('label').contains('I give my consent to be contacted.').should('exist');;
      cy.get('input[type="checkbox"]').should('have.attr', 'required');
      cy.get('input[type="checkbox"]').click().should('be.checked');
      cy.get('input[type="checkbox"]').click().should('not.be.checked');
    });

    it('Test Case 09 - Validate the SUBMIT button', () => {
      cy.get('button[type="submit"]').should('be.visible');
      cy.get('button[type="submit"]').should('contain', 'SUBMIT');
      Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('preventDefault')) {
            return false;  // Prevents Cypress from failing this test
        }
    });
      cy.get('button[type="submit"]').click();

    });

    it('Test Case 10 - Validate the form submission', () => {
      cy.get('input[placeholder="Enter your full name"]').type('Zarina Rodriguez');
      cy.contains('label', 'Female').click();
      cy.get('input[placeholder="Enter your address"]').type('1234 Main St');
      cy.get('input[type="email"]').type('zarinashakimova@gmail.com');
      cy.get('input[placeholder="Enter your phone number"]').type('9543485001');
      cy.get('textarea[placeholder="Type your message here..."]').type('I gosh, it was a lot work to do this test case .');
      cy.get('input[type="checkbox"]').check();
      Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('preventDefault')) {
            return false;  // Prevents Cypress from failing this test
        }
    });
    cy.get('button[type="submit"]').click();
    cy.contains('Thanks for submitting!').should('be.visible');
    
  });



