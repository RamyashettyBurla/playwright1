const{test,expect}=require('@playwright/test');

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
