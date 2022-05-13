/// <reference types="cypress" />

context('Scoll to top', () => {
    beforeEach(() => {
        cy.visit('../../scroll-to-top.html');
    });

    describe('LE SCROLL TO TOP', () => {
        it('should scroll to top', () => {
            cy.scrollTo('bottom')
            cy.get('[data-cy=scroll-to-top-btn]').should("have.css", "position", "fixed");
        });

        it('should scroll to top', () => {
            cy.get('[data-cy=scroll-to-top-btn]').click({force: true})
            cy.get('[data-cy=scroll-to-top-btn]').should("have.css", "display", "none");
        });
    });

});
