/// <reference types="cypress" />

context('Smart tag', () => {
    beforeEach(() => {
        cy.visit('../../smart-tag.html');
    });

    describe('LE SMART TAG', () => {
        it("Tester l’apparition du tag au survol du bouton : See More", () => {
            cy.get('[data-cy=see-more-btn]').trigger("mouseover");
            cy.get('[data-cy=see-more-tooltip]').should("not.have.css", "display", "none");
        });

        it("Tester la disparition du tag à la sortie du survol du bouton : See more", () => {
            cy.get('[data-cy=see-more-btn]').trigger("mouseexit");
            cy.get('[data-cy=see-more-tooltip]').should("have.css", "display", "none");
        });
    });

});
