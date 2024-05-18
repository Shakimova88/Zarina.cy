/// <reference types="Cypress"/>
describe("Testing Amazon", () => {
    beforeEach(() => {
      cy.visit("https://www.amazon.com/");
    });
    it("TASK-1: Validate the Amazon Header", () => {
      cy.get("#nav-logo-sprites").should("be.visible");
      cy.get("#nav-global-location-popover-link").should("be.visible");
      cy.get("#nav-search-dropdown-card").should("be.visible");
      cy.get("#twotabsearchtextbox").should("be.visible");
      cy.get("#nav-search-submit-button").should("be.visible");
      cy.get("#icp-nav-flyout").should("be.visible");
      cy.get("#nav-link-accountList").should("be.visible");
      cy.get("#nav-orders").should("be.visible");
      cy.get("#nav-cart-count").should("have.text", "0").and("be.visible");
    });
  
    it("TASK-2: Validate the Amazon Location Update", () => {
      cy.get("#glow-ingress-line2").click();
      cy.get(".GLUX_Full_Width").type("60018{enter}");
      cy.get("[name='glowDoneButton']").click();
      cy.get("#glow-ingress-line2")
        .should("contain", "Des Plaines 60018")
        .and("be.visible");
    });
  
    it("TASK-3: Validate the Amazon Search Results", () => {
      cy.get("#twotabsearchtextbox").type("mug{enter}");
      cy.get('[class="a-section a-spacing-small a-spacing-top-small"]').then(
        ($el) => {
          const str = $el.text();
          expect(
            Number(
              str
                .slice(str.indexOf("over") + 5, str.indexOf("results") - 1)
                .replace(",", "")
            )
          ).to.be.greaterThan(0);
        }
      );
    });
    it("TASK-4: Validate the Google Amazon Footer Columns", () => {
      const inputs = [
        "Get to Know Us",
        "Make Money with Us",
        "Amazon Payment Products",
        "Let Us Help You",
      ];
      cy.get('[class="navFooterColHead"]').each(($el, index) => {
        cy.wrap($el).should("have.text", inputs[index]).and("be.visible");
      });
    });
  });