describe('Visitor can', () => {
  beforeEach(function () {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: 'fixture:list_of_articles_with_published.json',
      status: 200
    })
    cy.visit('http://localhost:3001')
    cy.get('#review_articles').click()
  })

  it('see unpublished article when clicked on and fields for score and comment', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles/1',
      response: 'fixture:full_article.json',
      status: 200
    })

    cy.get("#1").click()

    let article = ["#title_36", "#ingress_36", "#body_36", "#photo_36", "#written_36", "#date_36",]

    article.forEach(element => {
      cy.get(element)
    })
  })

  it('write an review for article successfully', () => {
    cy.get('#score').type('8')
    cy.get('#comment').type('Great article!')
    cy.get('#create').click()
    cy.contains('Thank you for reviewing!')
  })
})