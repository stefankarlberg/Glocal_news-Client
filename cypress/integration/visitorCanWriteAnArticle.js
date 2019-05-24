describe('Visitor can write an article', () => {
  it ('successfully', () => {
    cy.visit('http://localhost:3001')
    cy.get('#write_article').click()
    cy.get('#title').type('Rainy day')
    cy.get('#ingress').type('Today it rained.')
    cy.get('#body').type('Rain is good for flowers.')
    cy.get('#written_by').type('Boa Matule')
    cy.get('#image').type('https://github.com')
    cy.get('#create').click()
    cy.server();
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/articles',
      response: 'Successfully created',
      status: 200
    })
    cy.contains('Your article is under review process.')
  })
})
