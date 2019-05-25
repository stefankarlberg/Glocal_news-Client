describe('Visitor can', () => {
  beforeEach(function() {
    cy.visit('http://localhost:3001')
    cy.get('#write_article').click()
  })
  
  it ('write an article successfully', () => {
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
    cy.contains('Thank you for sharing your story! Your article is awaiting reviews.')
  })

  it ('not create an article if all fields are not filled in', () => {
    cy.get('#title').type('Sunny day')
    cy.get('#ingress').type('Today the sun is shining.')
    cy.get('#written_by').type('Boa Matule')
    cy.get('#image').type('https://github.com')
    cy.get('#create').click()
    cy.server();
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/articles',
      response: "Body can't be blank",
      status: 422
    })
    cy.contains("Your article could not be created because of following error(s): Body can't be blank")
  })
})
