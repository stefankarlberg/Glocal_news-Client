describe('User can log in', () => {

  beforeEach(function () {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3002/api/v1/articles',
      response: 'fixture:list_of_articles.json',
    })
  })

  it('successfully', () => {

    cy.route({
      method: 'POST',
      url: 'http://localhost:3002/api/v1/auth/sign_in',
      response: 'fixture:successful_login.json',
      headers: {
        "uid": "user@mail.com"
      }
    })
    cy.visit('http://localhost:3001')
    cy.get('#login').click()
    cy.get('#login-form').within(() => {
      cy.get('#email').type('boa@mail.com')
      cy.get('#password').type('password')
    })
    cy.get('#login_form_button').click()
    cy.contains('Welcome Boa')
  })

  it('with invalid credentials', () => {

    cy.route({
      method: 'POST',
      url: 'http://localhost:3002/api/v1/auth/sign_in',
      status: "401",
      response: 'fixture:unsuccessful_login.json',
    })
    cy.visit('http://localhost:3001')
    cy.get('#login').click()
    cy.get('#login-form').within(() => {
      cy.get('#email').type('boa@mail.com')
      cy.get('#password').type('wrongpassword')
      cy.get('#login_form_button').click()
    })
    cy.contains('Invalid login credentials. Please try again.')
  })
})
