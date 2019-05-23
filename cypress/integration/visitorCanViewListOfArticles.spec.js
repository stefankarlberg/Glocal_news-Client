describe('Visitor can view list of articles', () => {

  before(function() {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: 'fixture:list_of_articles.json',
      status: 200
    })
    cy.visit('http://localhost:3001');
  }) 

  it('on the landing page', () => {
    cy.get('#id_1').within(() => {
      cy.get('#title').within(() => {
        cy.contains('A Day in Stockholm')
      })
      cy.get('#ingress').within(() => {
        cy.contains('How to spend 24 hours in Stockholm')
      })
    })
    cy.get('#id_2').within(() => {
      cy.get('#title').within(() => {
        cy.contains('A Day in Paris')
      })
      cy.get('#ingress').within(() => {
        cy.contains('How to spend 24 hours in Paris')
      })
    })
    cy.get('#id_3').within(() => {
      cy.get('#title').within(() => {
        cy.contains('A Day in Rome')
      })
      cy.get('#ingress').within(() => {
        cy.contains('How to spend 24 hours in Rome')
      })
    })
  })
})
