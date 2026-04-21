/*class TaskBotPage {
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

module.exports = TaskBotPage;*/
const { expect } = require('@playwright/test');

class TaskBotPage {
  constructor(page) {
    this.page = page;

    this.taskNameInput = page.locator('input[name="name"]');
    this.createButton = page.locator('button[name="submit"]');
    this.searchBox = page.locator('input[placeholder*="Search actions"]');

    this.quickAddBtn = page.locator('button[name="taskbot-node-quick-add"]');
    this.searchAction = page.locator('input[name="quick-add-search"]');
    this.messageBox = page.locator('div[aria-label="Message box"]');

    this.editor = page.locator('div[name="content"]');
    this.saveButton = page.locator('button[name="save"]');
  }

  async createTask(name) {
    await this.taskNameInput.fill(name);
    await expect(this.taskNameInput).toHaveValue(name);

    await this.createButton.click();

    // wait for editor screen
    await this.searchBox.waitFor({ timeout: 90000 });
  }

  async addMessageBox(message) {
    await this.quickAddBtn.waitFor({ timeout: 60000 });
    await this.quickAddBtn.click();

    await this.searchAction.fill('Message Box');

    await this.messageBox.first().waitFor({ state: 'visible', timeout: 60000 });
    await this.messageBox.first().click();

    await this.editor.waitFor({ state: 'visible' });
    await this.editor.fill(message);

    await expect(this.editor).toContainText(message);
  }

  async saveTask() {
    await this.saveButton.waitFor({ timeout: 60000 });
    await this.saveButton.click();
  }
}

module.exports = TaskBotPage;