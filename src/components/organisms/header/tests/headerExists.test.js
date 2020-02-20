describe(`Header Exists`, () => {
  it(`Checks that a header exits`, () => {
    cy.visit(
      `${Cypress.env(
        `CYPRESS_DOMAIN_URL`
      )}?id=organisms-header--standard-header`
    )
    cy.get(`header`).should(`exist`)
  })
})
