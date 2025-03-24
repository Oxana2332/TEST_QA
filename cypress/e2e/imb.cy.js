describe('Portfolio site testing', () => {
	it('IMB', () => {
		cy.visit('https://oxana2332.github.io/imb/');
		cy.viewport(1920, 1080);
		cy.get('[placeholder="Рост, см"]').type('165');
		cy.get('[placeholder="Вес, кг"]').type('49');
		cy.contains('Рассчитать').click();
		cy.wait(3000);
		cy.get('[placeholder="Рост, см"]').type('sd');
		cy.get('[placeholder="Вес, кг"]').type('adad');
		cy.contains('Рассчитать').click();
		cy.wait(3000);
		cy.get('[placeholder="Рост, см"]').type('165');
		cy.get('[placeholder="Вес, кг"]').type('53');
		cy.contains('Рассчитать').click();
	});
});
