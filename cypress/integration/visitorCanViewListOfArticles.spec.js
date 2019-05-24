describe('Visitor can view on the landing page', () => {

  it('a list of articles successfully', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: 'fixture:list_of_articles.json',
      status: 200
    })
    cy.visit('http://localhost:3001')

    let articles = [
      ["#id_1", "#title_1", "#ingress_1", "#photo_1"],
      ["#id_2", "#title_2", "#ingress_2", "#photo_2"],
      ["#id_3", "#title_3", "#ingress_3", "#photo_3"]
    ]

    articles.forEach(article => {
      cy.get(article[0]).within(() => {
        cy.get(article[1]), (article[2])
        cy.get(article[3]).should('have.attr', 'src')
      })
    })
  })

  it('a relevant message if there are no articles in the API database', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: 'fixture:no_list_of_articles.json',
      status: 200
    })
    cy.visit('http://localhost:3001')
    cy.contains('There are no articles at the moment. You can be the first to post your own article and become a neighborhood journalist!')
  })
})
