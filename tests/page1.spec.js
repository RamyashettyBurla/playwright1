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

  
  