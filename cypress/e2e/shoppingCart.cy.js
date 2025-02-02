import LoginPage from "../support/pageObjects/loginPage";
import CartPage from "../support/pageObjects/cartPage";
import CheckoutPage from "../support/pageObjects/checkoutPage";

describe("Shopping cart checkout", () => {
  const loginPage = new LoginPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();
  let credentials;
  let userData;

  before(() => {
    // Load credentials and user data
    cy.fixture("creds").then((creds) => {
      credentials = creds;
    });
    cy.fixture("userData").then((data) => {
      userData = data;
    });
  });

  it("As a User, I want to add items to the cart, so that I can finish checkout", () => {
    loginPage.navigate();
    loginPage.login(credentials);

    cartPage.addBikeLightToCart();
    cartPage.addFleeceJacketToCart();

    cartPage.verifyCartBadgeCount(2);

    cartPage.goToCart();
    const expectedItemCount = 2;
    cartPage.verifyItemsInCart(expectedItemCount);

    cartPage.proceedToCheckout();

    checkoutPage.checkout(
      userData.firstName,
      userData.lastName,
      userData.postalCode
    );

    checkoutPage.verifyItemsInCheckout(expectedItemCount);

    checkoutPage.finishCheckout();
  });
});
