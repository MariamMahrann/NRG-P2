class CheckoutPage {
  elements = {
    firstNameField: '[data-test="firstName"]',
    lastNameField: '[data-test="lastName"]',
    postalCodeField: '[data-test="postalCode"]',
    continueButton: '[data-test="continue"]',
    finishButton: '[data-test="finish"]',
    cartItem: ".cart_item",
  };

  checkout(firstName, lastName, postalCode) {
    cy.get(this.elements.firstNameField).type(firstName);
    cy.get(this.elements.lastNameField).type(lastName);
    cy.get(this.elements.postalCodeField).type(postalCode);
    cy.get(this.elements.continueButton).click();
    cy.url().should(
      "eq",
      `${Cypress.config("baseUrl")}/checkout-step-two.html`
    );
  }

  verifyItemsInCheckout(expectedCount) {
    cy.get(this.elements.cartItem).should("have.length", expectedCount);
  }

  finishCheckout() {
    cy.get(this.elements.finishButton).click();
    cy.url().should(
      "eq",
      `${Cypress.config("baseUrl")}/checkout-complete.html`
    );
  }
}
export default CheckoutPage;
