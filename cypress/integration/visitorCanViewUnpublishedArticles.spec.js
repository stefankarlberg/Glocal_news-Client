describe('Visitor can view unpublished articles', () => {
  beforeEach(function () {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3002/api/v1/articles',
      response: 'fixture:list_of_articles.json',
      status: 200
    })
    cy.route({
      method: 'POST',
      url: 'http://localhost:3002/api/v1/auth/sign_in',
      response: 'fixture:successful_login.json',
      headers: {
        "uid": "boa@mail.com"
      }
    })
    cy.route({
      method: 'GET',
      url: 'http://localhost:3002/api/v1/categories',
      response: 'fixture:categories_list.json',
      status: 200
    })
    cy.visit('http://localhost:3001')
    cy.get('#review_articles').click()
    cy.get('#login-form').within(() => {
      cy.get('#email').type('boa@mail.com')
      cy.get('#password').type('password')
    })
    cy.get('button').click()
    cy.wait(3000)
  })

  it('by seeing a correct page headline', () => {
    cy.get('#review_articles').click()
    cy.contains('Review an article')
  })

  it('by seeing a list of unpublished articles on Reviews page', () => {
    cy.get('#review_articles').click()

    let articles = [
      ["#36", "#title_36", "#ingress_36"]
    ]

    articles.forEach(article => {
      cy.get(article[0]).within(() => {
        cy.get(article[1]), (article[2])
      })
    })
  })

  it('cannot see articles that are reviewed 3 times with low average score and still unpublished state', () => {
    cy.get('#review_articles').click()
    cy.contains('A Day in Paris').should('not.exist')
  })

  it('by showing full article when clicked on', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3002/api/v1/articles/36',
      response: 'fixture:one_unpublished_article.json',
      status: 200
    })
    cy.get('#review_articles').click()
    cy.get("#36").click()

    let article = ["#title_36", "#ingress_36", "#body_36", "#photo_36", "#written_36", "#date_36",]

    article.forEach(element => {
      cy.get(element)
    })
  })
})
