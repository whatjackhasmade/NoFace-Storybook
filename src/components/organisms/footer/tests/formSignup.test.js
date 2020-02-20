// Lib to generate random stuff like email addresses and passwords
const faker = require(`faker`)

describe(`Footer Newsletter Signup`, () => {
  const randomEmail = faker.internet.email()

  it(`Signs up for a newsletter subscription with a random email address`, () => {
    cy.visit(
      `${Cypress.env(
        `CYPRESS_DOMAIN_URL`
      )}?id=organisms-footer--standard-footer`
    )
    cy.get(`form`).should(`exist`)
    cy.get(`input[type="email"]`).type(randomEmail)
    cy.get(`form`).submit()
  })
})
