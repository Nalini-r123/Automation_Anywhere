class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(username, password) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[type="password"]', password);
    await this.page.click('button[name="submitLogin"]');
  }
}

module.exports = LoginPage;