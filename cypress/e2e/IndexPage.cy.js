context('Project index page', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('Get the document object and check charset', () => {
		cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
	})

	it('Test Title', () => {
		cy.title().should('include', 'React testing test')
	})

	it('Should be visible on low resolutions', () => {
		cy.viewport(320, 240)
		cy.get('#root').should('be.visible')
	})

	it('Paragraph on app start should contain "0"', () => {
		cy.get('p').contains("0")
	})

	it('Click "-" button', () => {
		cy.get('button').first().click()
		cy.get('p').contains("-1")
	})

	it('Click "+" button', () => {
		cy.get('button').last().click()
		cy.get('p').contains("1")
	})

})