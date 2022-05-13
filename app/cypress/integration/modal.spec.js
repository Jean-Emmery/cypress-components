/// <reference types="cypress" />

context('Modal', () => {
  beforeEach(() => {
    cy.visit('../../modal.html');
  });

  describe('LA FENÊTRE MODALE', () => {
    it('Tester l’ouverture de la fênetre modale au clique sur display', () => {
      cy.get('[data-cy=modal-btn]');
      cy.get('[data-cy=modal-btn]').click();
      cy.get('[x-show=isModalVisible]').should('have.css', 'display', 'flex');
    });

    it('Tester la fermeture de la fênetre modale au clique en dehors de la modale', () => {
      cy.get('[data-cy=body-btn]');
      cy.get('[data-cy=modal-btn]').click();
      cy.get('[data-cy=body-btn]').click('top');
      cy.get('[x-show=isModalVisible]').should('have.css', 'display', 'none');
    });

    it('Tester que la fênetre modale contient un <h2></h2> contenant Lorem Ipsum', () => {
      cy.get('[data-cy=modal-btn]').click();
      cy.get('[x-show=isModalVisible]').find('h2').contains('Lorem Ipsum');
    });
  });
});
