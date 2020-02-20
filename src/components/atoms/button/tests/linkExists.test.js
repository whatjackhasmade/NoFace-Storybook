describe(`Linked Button Exists`, () => {
  it(`Checks that a linked button exists in our system`, () => {
    cy.visit(
      `${Cypress.env(`CYPRESS_DOMAIN_URL`)}?id=atoms-button--linked-button`
    )
    cy.get(`a`).should(`exist`)
  })
})
