/*const { test, expect } = require('@playwright/test');

test('Login API Validation', async ({ request }) => {

    // Login API
    const loginResponse = await request.post(
        'https://community.cloud.automationanywhere.digital/v2/authentication',
        {
            data: {
                username: process.env.EMAIL,
                password: process.env.PASSWORD
            }
        }
    );

    // HTTP Status Code Validation
    expect(loginResponse.status()).toBe(200);

    const loginBody = await loginResponse.json();

    // Response Body Schema Validation
    expect(loginBody).toBeDefined();
    expect(loginBody).toHaveProperty('token');

    // Field-level Validation
    expect(typeof loginBody.token).toBe('string');
    expect(loginBody.token.length).toBeGreaterThan(0);

    // Functional Accuracy
    expect(loginBody.token).toBeTruthy();

});*/
const { test, expect } = require('@playwright/test');

test('Login API Validation', async ({ request }) => {

    //Sending login request
    const response = await request.post(
        'https://community.cloud.automationanywhere.digital/v2/authentication',
        {
            data: {
                username: process.env.EMAIL,
                password: process.env.PASSWORD
            }
        }
    );

    //Validating status code
    expect(response.status()).toBe(200);

    //Converting response to JSON
    const body = await response.json();

    //Validating response structure
    expect(body).toBeDefined();
    expect(body).toHaveProperty('token');

    //Validating token datatype, size and if value is valid
    expect(typeof body.token).toBe('string');
    expect(body.token.length).toBeGreaterThan(0);
    expect(body.token).toBeTruthy();

});