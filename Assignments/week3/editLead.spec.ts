// Assignment: 2 Edit Lead
// http://leaftaps.com/opentaps/control/main
// 1. Launch the browser
// 2. Enter the username
// 3. Enter the password
// 4. Click Login
// 5. Click CRM/SFA link
// 6. Click Leads link
// 7. Click on Create Lead
// 8. Enter company name
// 9. Enter first name
// 10.Enter last name
// 11.Click on Create Lead button
// 12.Click Edit
// 13.Change the company name
// 14.Click Update



import { test } from '@playwright/test'

test('Edit Lead', async ({ page }) => {

  // Launch the application
  await page.goto('http://leaftaps.com/opentaps/control/main')

  // Enter username
  await page.locator('#username').fill('democsr')

  // Enter password
  await page.locator('#password').fill('crmsfa')

  // Click Login button
  await page.locator('.decorativeSubmit').click()

  // Click CRM/SFA link
  await page.locator("//a[contains(text(),'CRM/SFA')]").click()

  // Click Leads tab
  await page.locator("//a[text()='Leads']").click()

  // Click Create Lead link
  await page.locator("//a[text()='Create Lead']").click()

  // Enter company name
  await page.locator('#createLeadForm_companyName').fill('TestLeaf')

  // Enter first name
  await page.locator('#createLeadForm_firstName').fill('Preeti')

  // Enter last name
  await page.locator('#createLeadForm_lastName').fill('Sharma')

  // Click Create Lead button
  await page.locator("//input[@name='submitButton']").click()

  // Click Edit button
  await page.locator("//a[text()='Edit']").click()

  // Clear company name
  await page.locator('#updateLeadForm_companyName').clear()

  // Enter new company name
  await page.locator('#updateLeadForm_companyName').fill('TestLeaf Updated')

  // Click Update button
  await page.locator("//input[@value='Update']").click()

  console.log('Lead updated successfully')
})