describe('User can log out', () => {
  it('successfully', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3002/api/v1/articles',
      response: 'fixture:list_of_articles.json',
    })
    cy.route({
      method: 'GET',
      url: 'http://localhost:3002/api/v1/categories',
      response: 'fixture:categories_list.json',
      status: 200
    })
    cy.route({
      method: 'POST',
      url: 'http://localhost:3002/api/v1/auth/sign_in',
      response: 'fixture:successful_login.json',
      headers: {
        "uid": "user@mail.com"
      }
    })
    cy.route({
      method: 'DELETE',
      url: 'http://localhost:3002/api/v1/auth/sign_out',
      response: 'fixture:successful_logout.json',
    })
    cy.visit('http://localhost:3001')
    cy.get('#login').click()
    cy.get('#login-form').within(() => {
      cy.get('#email').type('boa@mail.com')
      cy.get('#password').type('password')
    })
    cy.get('#login_form_button').click()
    cy.contains('Welcome Boa')
    cy.get('#logOut').click()
    cy.contains('Welcome Boa').should('not.exist')
  })
})
