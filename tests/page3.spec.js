const{test,expect}=require('@playwright/test');

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

