class DashboardPage {
  constructor(page) {
    this.page = page;
  }

  async goToAutomation() {
    await this.page.click('a[name="automations"]');
  }

  async clickCreateTaskBot() {
    await this.page.waitForSelector('button[name="createOptions"]');
    await this.page.click('button[name="createOptions"]');

    await this.page.waitForSelector('button[name="createTaskbot"]');
    await this.page.click('button[name="createTaskbot"]');
  }

  async clickCreateForm() {
    await this.page.waitForSelector('button[name="createOptions"]');
    await this.page.click('button[name="createOptions"]');

    await this.page.waitForSelector('button[name="create-attended-form"]');
    await this.page.click('button[name="create-attended-form"]');
  }
}

module.exports = DashboardPage;