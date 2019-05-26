describe('Visitor can read an article', () => {

  it('shows full article when clicked', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: 'fixture:list_of_articles.json',
      status: 200
    })
    cy.visit('http://localhost:3001')
    cy.get("#1").click()
    cy.contains('A Day in Stockholm')
    cy.contains('How to spend 24 hours in Stockholm')
    cy.contains('body 1')
    cy.contains('George')
    cy.get('photo_1').should('have.attr', 'src')
    cy.contains('2019/05/24')
  })
})
