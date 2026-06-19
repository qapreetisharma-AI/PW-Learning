// Assignment: 3 Create Individuals
// Test Steps:
// 1. Login to https://login.salesforce.com
// 2. Click on the toggle menu button from the left corner
// 3. Click View All and click Individuals from App Launcher
// 4. Click on the Dropdown icon in the Individuals tab
// 5. Click on New Individual
// 6. Enter the Last Name
// 7. Click save and verify Individuals Name


import { test, expect } from '@playwright/test'

test('Create Individual in Salesforce', async ({ page }) => {

  // Login to Salesforce
  await page.goto('https://login.salesforce.com/?locale=in')

  // Enter username
  await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')

  // Enter password
  await page.locator('#password').fill('TestLeaf@2025')

  // Click Login
  await page.locator('#Login').click()

  // Wait for page to load
  await page.waitForLoadState('domcontentloaded')

  // Click Individuals tab
  await page.locator("//span[text()='Individuals']").evaluate((element: HTMLElement) => element.click())

  // Click New button
  await page.getByRole('button', { name: 'New' }).click()

  // Enter Last Name
  await page.locator("//input[@placeholder='Last Name']").fill('Sharma')

  // Click Save
  await page.getByRole('button', { name: 'Save', exact: true }).click()

  // Verify Individual Name
  await expect(page.getByText('Sharma').first()).toBeVisible()

  console.log('Individual created successfully')

})