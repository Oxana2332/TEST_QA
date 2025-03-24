describe('Test registration', function () {
	const NAME = 'Natalia';
	const PHONE = '(911)718-15-75';
	const EMAIL = 'far7north@gmail.com';

	it('Test registration positive', function () {
		cy.visit('https://kotofoto.ru/');
		cy.get('.icon-user').should('be.visible').click();
		cy.contains('Регистрация').click();

		cy.get('#regname').type(NAME).should('have.value', NAME);
		cy.get('#regtell').type(PHONE).should('have.value', `+7${PHONE}`);
		cy.get('#regmail').type(EMAIL).should('have.value', EMAIL);

		cy.get('#registerkoto').should('be.visible').click();
	});
});
