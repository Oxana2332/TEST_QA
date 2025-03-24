describe('Testing Navigation', () => {
	it('Navigation', () => {
		cy.visit('https://trudvsem.ru/');
		cy.viewport(1920, 1080);
		cy.get('.mega-menu__toggle').click();
		cy.contains('2025 год').should('be.visible').click();
		cy.contains('IIВторой Квартал').scrollIntoView();
		cy.wait(3000);
		cy.get(':nth-child(2) > .mega-menu__link').should('be.visible').click();
		cy.get('.search-content__input-control').type('Следователь');
		cy.contains('Найти').click();
		cy.wait(1000);
		cy.contains('Должностные обязанности').scrollIntoView();
		cy.wait(1000);
		cy.contains('Данные по вакансии').scrollIntoView();
		cy.wait(1000);
		cy.contains('Контактная информация').scrollIntoView();
		cy.wait(1000);
		cy.get('[data-target="#about-company"]').click();
		cy.wait(1000);
		cy.contains('Сведения о компании').scrollIntoView();
	});
});
