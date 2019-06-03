describe('Visitor can', () => {
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
      url: 'http://localhost:3002/api/v1/articles',
      response: 'fixture:create_article_success.json'
    })
    cy.route({
      method: 'GET',
      url: 'http://localhost:3002/api/v1/articles/36',
      response: 'fixture:full_article.json',
      status: 200
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
    cy.visit('http://localhost:3001')
    cy.get('#write_article').click()
    cy.get('#login-form').within(() => {
      cy.get('#email').type('boa@mail.com')
      cy.get('#password').type('password')
    })
    cy.get('button').click()
    cy.get('#write_article').click()

  })

  it('write an article successfully', () => {

    let form = [
      ["#title", "Rainy Day"],
      ["#ingress", "Today it rained"],
      ["#body", "Rain is good for flowers"],
      ["#written_by", "Boa Matule"],
      ["#image", "https://image.freepik.com/free-photo/sailing-boats-yachts-pier-stockholm-front-city-center_72229-307.jpg"],
      ["#city", "Thessaloniki"]
    ]

    form.forEach(element => {
      cy.get(element[0]).type(element[1])
    })

    cy.get('#category_select').click()
    cy.get('.visible > .selected > .text').click()
    cy.get('#select_country').click()
    cy.get('.visible > .selected > .text').click()
    cy.get('#create').click()

    let text = ["Rainy day", "Politics", "Greece", "Thessaloniki", "Thank you for sharing your story! Your article is awaiting reviews."]

    text.forEach(contain => {
      cy.contains(contain)
    })
  })

  it('not create an article if all fields are not filled in', () => {

    let form2 = [
      ["#title", "Rainy Day"],
      ["#ingress", "Today it rained"],
      ["#written_by", "Boa Matule"],
      ["#image", "https://image.freepik.com/free-photo/sailing-boats-yachts-pier-stockholm-front-city-center_72229-307.jpg"]
    ]

    form2.forEach(element => {
      cy.get(element[0]).type(element[1])
    })

    cy.server();
    cy.route({
      method: 'POST',
      url: 'http://localhost:3002/api/v1/articles',
      response: 'fixture:create_article_no_success.json',
      status: 422
    })

    cy.get('#create').click()

    let text2 = ["Your article could not be created because of following error(s):", "Body can't be blank"]

    text2.forEach(contain => {
      cy.contains(contain)
    })
  })
})
