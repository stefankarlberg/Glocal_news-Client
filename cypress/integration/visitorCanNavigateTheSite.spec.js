describe('Visitor can navigate the website', () => {
  beforeEach(function() {
    cy.visit('http://localhost:3001');
  })

  it ("by seeing a navbar with logo, 'write an article' and 'review articles'", () => {
    cy.contains('Glocal News');
    cy.contains('WRITE AN ARTICLE');
    cy.contains('REVIEW ARTICLES');
    cy
  })

  it ("by seeing 'Login', 'Sign Up', 'Logout' and 'Welcome Member' when not logged in", () => {
    cy.contains('Sign Up');
    cy.contains('Log In');
    cy.contains('Log Out');
    cy.contains('Welcome Member');
  })

  it ('by seeing a second selection with categories in the navbar', () => {
    cy.contains('News');
    cy.contains('Arts');
    cy.contains('Books');
    cy.contains('Business');
    cy.contains('Food');
    cy.contains('Opinion');
    cy.contains('Politics');
    cy.contains('Real Estate');
    cy.contains('Science');
    cy.contains('Sports');
    cy.contains('Style');
    cy.contains('Tech');
    cy.contains('Travel');
  })
  
})