class LoginPage {
  elements = {
    usernameField: '[data-test="username"]',
    passwordField: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
  };

  navigate() {
    cy.visit("/");
  }

  login(credentials) {
    cy.get(this.elements.usernameField).type(credentials.username);
    cy.get(this.elements.passwordField).type(credentials.password);
    cy.get(this.elements.loginButton).click();
  }
}
export default LoginPage;
