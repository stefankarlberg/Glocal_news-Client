describe('Visitor can read an article', () => {

  beforeEach(function () {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3002/api/v1/articles',
      response: 'fixture:list_of_articles.json',
      status: 200
    })
    cy.visit('http://localhost:3001')
  })

  it('shows full article when clicked', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3002/api/v1/articles/36',
      response: 'fixture:full_article.json',
      status: 200
    })
    cy.get("#36").click()

    let article = ["#title_36", "#ingress_36", "#body_36", "#photo_36", "#written_36", "#date_36",]

    article.forEach(element => {
      cy.get(element)
    })
  })
})
