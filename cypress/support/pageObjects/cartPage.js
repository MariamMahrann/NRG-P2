class CartPage {
  elements = {
    addToCartBikeLight: '[data-test="add-to-cart-sauce-labs-bike-light"]',
    addToCartFleeceJacket: '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
    cartBadge: ".shopping_cart_badge",
    cartItem: ".cart_item",
    checkoutButton: '[data-test="checkout"]',
  };

  addItemToCart(itemSelector) {
    cy.get(itemSelector).click();
  }

  addBikeLightToCart() {
    this.addItemToCart(this.elements.addToCartBikeLight);
  }

  addFleeceJacketToCart() {
    this.addItemToCart(this.elements.addToCartFleeceJacket);
  }

  verifyCartBadgeCount(expectedCount) {
    cy.get(this.elements.cartBadge).should(
      "have.text",
      expectedCount.toString()
    );
  }

  goToCart() {
    cy.get(this.elements.cartBadge).click();
    cy.url().should("eq", `${Cypress.config("baseUrl")}/cart.html`);
  }

  verifyItemsInCart(expectedCount) {
    cy.get(this.elements.cartItem).should("have.length", expectedCount);
  }

  proceedToCheckout() {
    cy.get(this.elements.checkoutButton).click();
    cy.url().should(
      "eq",
      `${Cypress.config("baseUrl")}/checkout-step-one.html`
    );
  }
}
export default CartPage;
