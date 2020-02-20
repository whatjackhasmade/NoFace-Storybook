describe(`Footer Form Exists`, () => {
  it(`Checks that a form exits in the footer for the newsletter registration`, () => {
    cy.visit(
      `${Cypress.env(
        `CYPRESS_DOMAIN_URL`
      )}?id=organisms-footer--standard-footer`
    )
    cy.get(`form`).should(`exist`)
  })
})
