describe('Visitor can view a list of articles on the landing page', () => {

  it('successfully', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: 'fixture:list_of_articles.json',
      status: 200
    })
    cy.visit('http://localhost:3001')
    cy.get('#id_1').within(() => {
      cy.get('#title').within(() => {
        cy.contains('A Day in Stockholm')
      })
      cy.get('#ingress').within(() => {
        cy.contains('How to spend 24 hours in Stockholm')
      })
      cy.get('#photo').should('have.attr', 'src')
    })
    cy.get('#id_2').within(() => {
      cy.get('#title').within(() => {
        cy.contains('A Day in Paris')
      })
      cy.get('#ingress').within(() => {
        cy.contains('How to spend 24 hours in Paris')
      })
      cy.get('#photo').should('have.attr', 'src')
    })
    cy.get('#id_3').within(() => {
      cy.get('#title').within(() => {
        cy.contains('A Day in Rome')
      })
      cy.get('#ingress').within(() => {
        cy.contains('How to spend 24 hours in Rome')
      })
      cy.get('#photo').should('have.attr', 'src')
    })
  })
})
