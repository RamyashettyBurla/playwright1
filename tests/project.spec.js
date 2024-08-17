const{test,expect}=require('@playwright/test');

test('test', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    await page.waitForTimeout(1000);
    
    await page.getByRole('link', { name: 'Register' }).click();

    await page.locator('[id="customer\\.firstName"]').fill('ramya');
    
    await page.locator('[id="customer\\.lastName"]').fill('burla');
    
    await page.locator('[id="customer\\.address\\.street"]').fill('khammam');
    
    await page.locator('[id="customer\\.address\\.city"]').fill('khammam');
    
    await page.locator('[id="customer\\.address\\.state"]').fill('telagana');
  
    await page.locator('[id="customer\\.address\\.zipCode"]').fill('540033');
    
    await page.locator('[id="customer\\.phoneNumber"]').fill('1234567881');
    
    await page.locator('[id="customer\\.ssn"]').fill('ramya12');
  
    await page.locator('[id="customer\\.username"]').fill('ramya123');
    
    await page.locator('[id="customer\\.password"]').fill('ramya123@');
  
    await page.locator('#repeatedPassword').fill('ramya123@');
  
    await page.getByRole('button', { name: 'Register' }).click();
  
  });

  test('testing', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    await page.waitForTimeout(1000);

    await page.locator('input[name="username"]').fill('ramya123');
    
    await page.locator('input[name="password"]').fill('ramya123@');

    await page.getByRole('button', { name: 'Log In' }).click();

    await page.getByRole('cell', { name: 'Account' }).click();

    await page.getByRole('link', { name: 'Find Transactions' }).click();
    
    await page.locator('#fromDate').fill('12-07-2024');
    
    await page.locator('#toDate').fill('10-08-2024');

    await page.locator('#findByDateRange').click();

    await page.getByRole('link', { name: 'Update Contact Info' }).click();
   
    await page.locator('[id="customer\\.phoneNumber"]').fill('9182157896');

    await page.getByRole('button', { name: 'Update Profile' }).click();

    await page.getByRole('link', { name: 'Request Loan' }).click();

    await page.locator('#amount').fill('50,000');

    await page.locator('#downPayment').fill('5000');

    await page.getByRole('button', { name: 'Apply Now' }).click();

    await page.getByRole('link', { name: 'Transfer Funds' }).click();
    
    await page.locator('#amount').fill('500');

    await page.getByRole('button', { name: 'Transfer' }).click();
  });

  test('tester', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    await page.waitForTimeout(1000);

    await expect(page).toHaveURL("https://parabank.parasoft.com/parabank/index.htm");

    await page.getByRole('link', { name: 'contact', exact: true }).click();
    
    await page.locator('#name').fill('ramya');
    
    await page.locator('#email').fill('ramya123@gmail.com');
    
    await page.locator('#phone').fill('9182356789');
   
    await page.locator('#message').fill('my account was on hold try to rectify my issue');
    
    await page.getByRole('button', { name: 'Send to Customer Care' }).click();
  });

