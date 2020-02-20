describe(`onClick Button Function`, () => {
  it(`Triggers an alert popup on the click event`, () => {
    cy.visit(
      `${Cypress.env(`CYPRESS_DOMAIN_URL`)}?id=atoms-button--function-button`
    )
    cy.get(`button`).should(`exist`)

    const stub = cy.stub()
    cy.on(`window:alert`, stub)
    cy.get(`button`)
      .contains(`Click me`)
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(`You clicked the button`)
      })
  })
})
