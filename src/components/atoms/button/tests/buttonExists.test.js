describe(`Button Exists`, () => {
  it(`Checks that a standard button exists in our system`, () => {
    cy.visit(
      `${Cypress.env(`CYPRESS_DOMAIN_URL`)}?id=atoms-button--basic-button`
    )
    cy.get(`button`).should(`exist`)
  })
})
