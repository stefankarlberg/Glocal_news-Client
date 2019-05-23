describe('Visitor can view message on the landing page', () => {

  it('if there are no articles in the API database', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: 'fixture:no_list_of_articles.json',
      status: 200
    })
    cy.visit('http://localhost:3001')
    cy.contains('There are no articles at the moment. You can be the first to host his/her article!')
  })
})
