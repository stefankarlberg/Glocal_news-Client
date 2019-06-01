describe('Visitor can view articles filtered by category', () => {
  beforeEach(function (){
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3002/api/v1/articles',
      response: 'fixture:list_of_articles.json',
      status: 200
    })
    cy.visit('http://localhost:3001')
  })

  it('by seeing a correct page headline', () => {
    cy.get('#Politics').click()
    cy.get('#headline').contains('Politics')
  })

  it('by seeing correct filtered articles', () => {

    let politics = [
      ["#36", "#title_36", "#ingress_36", "#photo_36"],
      ["#37", "#title_37", "#ingress_37", "#photo_37"],
    ]

    let arts = [
      ["#38", "#title_38", "#ingress_38", "#photo_38"],
    ]

    cy.get('#Politics').click()
    cy.get('#38').should('not.exist')
    politics.forEach(article => {
      cy.get(article[0]).within(() => {
        cy.get(article[1]), (article[2])
        cy.get(article[3]).should('have.attr', 'src')
      })
    })

    cy.get('#Arts').click()
    cy.get('#36').should('not.exist')
    cy.get('#37').should('not.exist')
    arts.forEach(article => {
      cy.get(article[0]).within(() => {
        cy.get(article[1]), (article[2])
        cy.get(article[3]).should('have.attr', 'src')
      })
    })
  })  
})
