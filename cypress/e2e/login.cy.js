describe('Log in', () => {
	it('Sign in', () => {
		cy.visit('https://kotofoto.ru/');
		cy.get('.icon-user').should('be.visible').click();

		cy.get('#loginmail').type('far_north@ro.ru');
		cy.get('#loginpass').type('R8c5d7b');

		cy.get('#loginkotofoto').should('be.visible').click();

		cy.wait(1000);
		cy.get('.icon-user').should('be.visible').click();
	});
});
