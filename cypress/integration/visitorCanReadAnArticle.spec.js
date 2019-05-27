describe('Visitor can read an article', () => {

  beforeEach(function () {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: 'fixture:list_of_articles.json',
      status: 200
    })
    cy.visit('http://localhost:3001')
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles/1',
      response: 'fixture:full_article.json',
      status: 200
    })
  })

  it('shows full article when clicked', () => {

    cy.get("#1").click()
    cy.get("#body_1")
    cy.get('#photo_1').should('have.attr', 'src')

  })
})
