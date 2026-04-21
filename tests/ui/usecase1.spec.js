/*const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashBoard');
const TaskBotPage = require('../../pages/TaskBotPage');

test('Create Message Box Task', async ({ page }) => {

    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    const task = new TaskBotPage(page);

    await page.goto('https://community.cloud.automationanywhere.digital');

    // Login
    await login.login(process.env.EMAIL, process.env.PASSWORD);
    
    // check login success
    await page.waitForSelector('a[name="automations"]', { timeout: 90000 });

    // Navigate
    await dashboard.goToAutomation();

    // Assertion
    await page.waitForSelector('button[name="createOptions"]', { timeout: 50000 });

    // Create Task Bot
    await dashboard.clickCreateTaskBot();

    // Enter task name
    await task.enterTaskName('My First Task');

    await expect(page.locator('input[name="name"]'))
        .toHaveValue('My First Task');

    await task.clickCreate();
    
    await page.waitForSelector('input[placeholder*="Search actions"]', { timeout: 90000 });

    // Add Message Box
    await task.quickAddMessageBox();

    // Enter message
    await task.enterMessageContent('Hello from automation');

    await expect(page.locator('div[name="content"]'))
        .toContainText('Hello from automation');

    // Save
    await task.saveTask();

});*/
const { test } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashBoard');
const TaskBotPage = require('../../pages/TaskBotPage');

test('Create Message Box Task', async ({ page }) => {

    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    const task = new TaskBotPage(page);

    await page.goto('https://community.cloud.automationanywhere.digital');

    await login.login(process.env.EMAIL, process.env.PASSWORD);

    await dashboard.navigateToAutomation();

    await dashboard.createTaskBot();

    await task.createTask('My First Task');

    await task.addMessageBox('Hello from automation');

    await task.saveTask();
});