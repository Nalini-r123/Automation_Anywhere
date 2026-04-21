/*class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(username, password) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[type="password"]', password);
    await this.page.click('button[name="submitLogin"]');
  }
}

module.exports = LoginPage;*/
class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[type="password"]');
    this.loginButton = page.locator('button[name="submitLogin"]');
    this.automationLink = page.locator('a[name="automations"]');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

    // wait for dashboard to load
    await this.automationLink.waitFor({ state: 'visible', timeout: 90000 });
  }
}

module.exports = LoginPage;