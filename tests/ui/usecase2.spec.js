const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashBoard');
const FormPage = require('../../pages/FormPage');

test('Create Form with Upload Flow', async ({ page }) => {

    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    const form = new FormPage(page);

    await page.goto('https://community.cloud.automationanywhere.digital');

    // Login
    await login.login(process.env.EMAIL, process.env.PASSWORD);

    await page.waitForSelector('a[name="automations"]', { timeout: 90000 });

    // Navigate
    await dashboard.goToAutomation();

    await page.waitForSelector('button[name="createOptions"]', { timeout: 50000 });

    // Create Form
    await dashboard.clickCreateForm(); 

    await form.enterFormName('Test Form');

    await expect(page.locator('input[name="name"]'))
        .toHaveValue('Test Form');

    await form.clickCreate();
    
    await page.waitForSelector('.formcanvas__leftpane', { timeout: 90000 });
    
    // Add elements
    await form.dragFileUploadToCanvas();
    await form.dragTextboxToCanvas();

    await form.enterText('Hello Automation');

    await form.uploadFile('tests/files/sample.pdf');

    // Assertion: check file uploaded
    await expect(page.locator('text=sample.pdf')).toBeVisible();

    // Save form
    await form.saveForm();

});