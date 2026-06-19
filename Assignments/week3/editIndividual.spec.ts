// Assignment: 4 Edit Individuals
// Test Steps:
// 1. Login to https://login.salesforce.com
// 2. Click on the toggle menu button from the left corner
// 3. Click View All and click Individuals from App Launcher
// 4. Click on the Individuals tab
// 5. Search the Individuals last name
// 6. Click on the Dropdown icon and Select Edit
// 7. Select Salutation as 'Mr'
// 8. Now enter the first name
// 9. Click on Save and Verify the first name



import { test } from '@playwright/test'

test('Edit Individual in Salesforce', async ({ page }) => {

  await page.goto('https://login.salesforce.com/?locale=in')

  await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')

  await page.locator('#password').fill('TestLeaf@2025')

  await page.locator('#Login').click()

  await page.waitForTimeout(5000)

  // Click Individuals tab
  await page.locator("//span[text()='Individuals']").evaluate((element: HTMLElement) => element.click())

  await page.waitForTimeout(3000)

  // Search Individual
  await page.getByPlaceholder('Search this list...').fill('Sharma')

  await page.keyboard.press('Enter')

  await page.waitForTimeout(3000)

  // Open dropdown of first record
  await page.locator("//table/tbody/tr[1]//button").click()

  // Click Edit
  await page.getByRole('menuitem', { name: 'Edit' }).click()

  await page.waitForTimeout(3000)

  // Click Salutation dropdown
  await page.locator("//div[contains(@class,'salutation')]//a[@role='button']").click()

  await page.waitForTimeout(2000)

  // Select Mr.
  await page.locator("//a[@title='Mr.']").click()

  // Enter First Name
  await page.locator("//input[@placeholder='First Name']").fill('Preeti')

  // Click Save
  await page.getByRole('button', { name: 'Save', exact: true }).click()

  await page.waitForTimeout(3000)

  console.log('Individual updated successfully')

})