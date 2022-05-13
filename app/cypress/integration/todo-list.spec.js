/// <reference types="cypress" />

context('Todo list', () => {
    beforeEach(() => {
        cy.visit('../../todo-list.html');
    });

    describe('LA TODO LIST', () => {
        it("Tester l’ajout de quatre todos puis la suppression de la deuxième todo au clique sur la croix\n" +
            "associée. Enfin tester le fait qu’il ne reste plus que 3 todos", () => {
            for (let i = 0; i < 4; i++) {
                cy.get('[x-model="newTodo"]').type(`Task ${i}`);
                cy.get("[data-cy=add-todo-btn]").click();
            }
            cy.get("[data-cy=todo-count]").should("have.length", 4);
            cy.get("[data-cy=todo-count]").eq(1).get("[data-cy=delete-todo-btn]").eq(0).click();
            cy.get("[data-cy=todo-count]").should("have.length", 3);
        });
    });
});
