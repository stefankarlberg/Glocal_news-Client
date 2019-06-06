describe('Visitor can view articles filtered by country', () => {
  beforeEach(function () {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3002/api/v1/articles',
      response: 'fixture:list_of_articles.json',
      status: 200
    })
    cy.visit('http://localhost:3001')
    cy.get('#header').within(() => {
      cy.get('#news').click()
    })
  })

  it('by being able to select any country in drop-down', () => {

    let countryNumbers = [ 86, 111 ]
   

countryNumbers.forEach(country => {
    cy.get('#country > .dropdown').click()
    cy.get(`#country > .visible > .item:nth-child(${country}) > .text`).click()
    cy.get('#country > .dropdown').click()
 })

  })


it('by seeing correct filtered articles', () => {

  let greece = [
    ["#39", "#title_39", "#ingress_39", "#photo_39"],
  ]

  let italy = [
    ["#38", "#title_38", "#ingress_38", "#photo_38"],
  ]

  cy.get('#country > .dropdown').click()
  cy.get('#country > .visible > .item:nth-child(86) > .text').click()
  cy.get('#filtered_articles').within(() => {
    cy.get('#38').should('not.exist')
  })
  greece.forEach(article => {
    cy.get(article[0]).within(() => {
      cy.get(article[1]), (article[2])
      cy.get(article[3]).should('have.attr', 'src')
    })
  })
  cy.get('#country > .dropdown').click()
  
  cy.get('#country > .dropdown').click()
  cy.get('#country > .visible > .item:nth-child(111) > .text').click()
  cy.get('#filtered_articles').within(() => {
    cy.get('#39').should('not.exist')
  })
  italy.forEach(article => {
    cy.get(article[0]).within(() => {
      cy.get(article[1]), (article[2])
      cy.get(article[3]).should('have.attr', 'src')
    })
  })
})
})