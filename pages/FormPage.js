class FormPage {
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

  async dragTextboxToCanvas() {
    const source = this.page.locator('text=Text Box').first();
    const target = this.page.locator('.formcanvas__leftpane').first();

    await source.waitFor({ state: 'visible' });
    await target.waitFor({ state: 'visible' });

    await source.hover();
    await this.page.mouse.down();
    await target.hover();
    await this.page.mouse.up();
}

async dragFileUploadToCanvas() {
    const source = this.page.locator('text=Select File').first();
    const target = this.page.locator('.formcanvas__leftpane').first();

    await source.waitFor({ state: 'visible' });
    await target.waitFor({ state: 'visible' });

    await source.hover();
    await this.page.mouse.down();
    await target.hover();
    await this.page.mouse.up();
}

  // Enter text in textbox
  async enterText(value) {
    const input = this.page.locator('input[type="text"]').first();
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

module.exports = FormPage;