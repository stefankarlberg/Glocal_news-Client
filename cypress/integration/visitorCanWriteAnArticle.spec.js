describe('Visitor can', () => {
  beforeEach(function () {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: 'fixture:list_of_articles.json',
      status: 200
    })
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/articles',
      response: 'fixture:create_article_success.json'
    })
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles/9',
      response: 'fixture:one_article.json',
      status: 200
    })
    cy.visit('http://localhost:3001')
    cy.get('#write_article').click()
  })

  it('write an article successfully', () => {
    cy.get('#title').type('Rainy day')
    cy.get('#ingress').type('Today it rained.')
    cy.get('#body').type('Rain is good for flowers.')
    cy.get('#written_by').type('Boa Matule')
    cy.get('#image').type('https://github.com')
    cy.get('#category_select').click()
    cy.get('#create').click()
    cy.contains('Rainy day')
    cy.contains('Politics')
    cy.contains('Thank you for sharing your story! Your article is awaiting reviews.')
  })

  it('not create an article if all fields are not filled in', () => {
    cy.get('#title').type('Sunny day')
    cy.get('#ingress').type('Today the sun is shining.')
    cy.get('#written_by').type('Boa Matule')
    cy.get('#image').type('https://github.com')
    cy.server();
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/articles',
      response: 'fixture:create_article_no_success.json',
      status: 422
    })
    cy.get('#create').click()
    cy.contains("Your article could not be created because of following error(s):")
    cy.contains("Body can't be blank")
  })
})
