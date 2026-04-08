class TaskBotPage {
  constructor(page) {
    this.page = page;
  }

  async enterTaskName(name) {
    await this.page.waitForSelector('input[name="name"]');
    await this.page.fill('input[name="name"]', name);
  }

  async clickCreate() {
    await this.page.waitForSelector('button[name="submit"]');
    await this.page.click('button[name="submit"]');
  }

  async quickAddMessageBox() {
    await this.page.waitForSelector('button[name="taskbot-node-quick-add"]', { timeout: 60000 });
    await this.page.click('button[name="taskbot-node-quick-add"]');

    await this.page.waitForSelector('input[name="quick-add-search"]', { timeout: 60000 });
    await this.page.fill('input[name="quick-add-search"]', 'Message Box');

    const firstResult = this.page.locator('div[aria-label="Message box"]').first();
    await firstResult.waitFor({ state: 'visible', timeout: 60000 });
    await firstResult.click();
  }

  async enterMessageContent(message) {
    const editor = this.page.locator('div[name="content"]');

    await editor.waitFor();
    await editor.click();
    await editor.fill(message);
  }

  async saveTask() {
    await this.page.waitForSelector('button[name="save"]');
    await this.page.click('button[name="save"]');
  }
}

module.exports = TaskBotPage;