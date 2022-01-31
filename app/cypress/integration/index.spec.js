context('empty-state-test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('show page not found', function () {
    cy.get('.empty-state__image').should('have.length', 1)
    cy.get('.empty-state__title').should('have.length', 1)
    cy.get('.empty-state__text').should('have.length', 1)
    cy.get('.empty-state__children').should('have.length', 1)
  })
})
