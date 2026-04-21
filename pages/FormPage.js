/*class FormPage {
  constructor(page) {
    this.page = page;
  }

  async enterFormName(name) {
    await this.page.waitForSelector('input[name="name"]');
    await this.page.fill('input[name="name"]', name);
  }

  async clickCreate() {
    await this.page.waitForSelector('button[name="submit"]');
    await this.page.click('button[name="submit"]');
  }

  //it did not work from here
 async dragTextboxToCanvas() {
    await this.page.dragAndDrop('text=Text Box', '.formcanvas__leftpane');
}

async dragFileUploadToCanvas() {
    await this.page.dragAndDrop('text=Select File', '.formcanvas__leftpane');
}

  // Enter text in textbox
  async enterText(value) {
    const input = this.page.locator('input[type="text"]');
    await input.waitFor({ state: 'visible', timeout: 60000 });
    await input.fill(value);
  }

  // Upload file
  async uploadFile(filePath) {
    const fileInput = this.page.locator('input[type="file"]');
    await fileInput.setInputFiles(filePath);
  }

  async saveForm() {
    await this.page.waitForSelector('button[name="save"]', { timeout: 60000 });
    await this.page.click('button[name="save"]');
  }
}

module.exports = FormPage;*/
const { expect } = require('@playwright/test');

class FormPage {
  constructor(page) {
    this.page = page;

    this.formNameInput = page.locator('input[name="name"]');
    this.createButton = page.locator('button[name="submit"]');

    this.canvas = page.locator('.formcanvas__leftpane');

    this.textInput = page.locator('input[type="text"]').first();
    this.fileInput = page.locator('input[type="file"]');

    this.saveButton = page.locator('button[name="save"]');
  }

  async createForm(name) {
    await this.formNameInput.fill(name);
    await expect(this.formNameInput).toHaveValue(name);

    await this.createButton.click();

    // wait for canvas load
    await this.canvas.waitFor({ state: 'visible', timeout: 90000 });
  }

  async addElements() {
    await this.canvas.waitFor({ timeout: 90000 });

    // stabilization waits (UI heavy)
    await this.page.waitForTimeout(2000);

    await this.page.dragAndDrop('text=Text Box', '.formcanvas__leftpane');

    await this.page.waitForTimeout(1000);

    await this.page.dragAndDrop('text=Select File', '.formcanvas__leftpane');

    await this.page.waitForTimeout(1000);
  }

  async fillForm(text, filePath) {
    await this.textInput.waitFor({ timeout: 60000 });
    await this.textInput.fill(text);

    await this.fileInput.setInputFiles(filePath);

    await this.page.waitForTimeout(2000); // wait for upload UI
  }

  async saveForm() {
    await this.saveButton.waitFor({ timeout: 60000 });
    await this.saveButton.click();
  }
}

module.exports = FormPage;