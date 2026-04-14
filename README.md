# Automation_Anywhere

## 1. Tech Stack

* Playwright
* Node.js
* JavaScript
* Page Object Model (POM) for UI Automation

## 2. Setup

* Clone repository:

```bash
git clone https://github.com/Nalini-r123/Automation-Assignment.git
```

* Install dependencies:

```bash
npm install
```

* Create a `.env` file with:

```env
EMAIL=your_email
PASSWORD=your_password
```

* Install Playwright Browsers:

```bash
npx playwright install
```

## 3. Execution

* UI Tests:

```bash
npx playwright test tests/ui
```

* API Tests:

```bash
npx playwright test tests/api
```

## 4. Test Coverage

### UI Automation

* Login flow
* Message Box creation
* Form creation with text input and file upload
* UI elements visibility, interactions, and functionality

### API Automation

* Login API validation
* Status code checks
* Response schema validation
* Field-level checks
* Functional accuracy
