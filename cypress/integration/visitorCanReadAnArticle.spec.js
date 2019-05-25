describe('Visitor can read an article', () => {

  it('shows full article when clicked', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: 'fixture:full_article.json',
      status: 200
    })
    cy.visit('http://localhost:3001')

    let article = [
      ["#1", "#title_1", "#ingress_1", "#photo_1", "#written_by_1", "#created_at_1"],
    ]

    cy.get(article[0]).click()
    cy.get(article[0]).within(() => {
      cy.get(article[1]), (article[2])
      cy.get(article[3]).should('have.attr', 'src')
      cy.get(article[4]), (article[5])
    })
  })
})
