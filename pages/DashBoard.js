/*class DashboardPage {
  constructor(page) {
    this.page = page;
  }

  async goToAutomation() {
    await this.page.click('a[name="automations"]');
  }

  async clickCreateTaskBot() {
    //await this.page.waitForSelector('button[name="createOptions"]');
    await this.page.click('button[name="createOptions"]');

    await this.page.waitForSelector('button[name="createTaskbot"]');
    await this.page.click('button[name="createTaskbot"]');
  }

  async clickCreateForm() {
    //await this.page.waitForSelector('button[name="createOptions"]');
    await this.page.click('button[name="createOptions"]');

    await this.page.waitForSelector('button[name="create-attended-form"]');
    await this.page.click('button[name="create-attended-form"]');
  }
}

module.exports = DashboardPage;*/
class DashboardPage {
  constructor(page) {
    this.page = page;

    this.automationTab = page.locator('a[name="automations"]');
    this.createOptionsBtn = page.locator('button[name="createOptions"]');
    this.createTaskBotBtn = page.locator('button[name="createTaskbot"]');
    this.createFormBtn = page.locator('button[name="create-attended-form"]');
  }

  async navigateToAutomation() {
    await this.automationTab.click();
    await this.createOptionsBtn.waitFor({ timeout: 60000 });
  }

  async createTaskBot() {
    await this.createOptionsBtn.click();
    await this.createTaskBotBtn.waitFor({ timeout: 60000 });
    await this.createTaskBotBtn.click();
  }

  async createForm() {
    await this.createOptionsBtn.click();
    await this.createFormBtn.waitFor({ timeout: 60000 });
    await this.createFormBtn.click();
  }
}

module.exports = DashboardPage;