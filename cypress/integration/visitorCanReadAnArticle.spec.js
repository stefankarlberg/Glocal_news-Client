describe('Visitor can read an article', () => {

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
      url: 'http://localhost:3002/api/v1/articles/36',
      response: 'fixture:full_article.json',
      status: 200
    })
    cy.visit('http://localhost:3001')
  })

  it('shows full article when clicked', () => {
    
    cy.get("#36").click()
    cy.get('#login-form').within(() => {
      cy.get('#email').type('boa@mail.com')
      cy.get('#password').type('password')
    })
    cy.get('button').click()
    cy.get("#36").click()

    let article = ["#title_36", "#ingress_36", "#body_36", "#photo_36", "#written_36", "#date_36",]

    article.forEach(element => {
      cy.get(element)
    })
  })
})
