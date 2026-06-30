import { test, expect } from '@playwright/test'

test('Place order for Apple iPhone 13 Pro in ServiceNow', async ({ page }) => {

  test.setTimeout(120000)

  // Step 1: Launch ServiceNow application
  await page.goto('https://dev296651.service-now.com/')

  // Step 2: Enter username
  await page.getByRole('textbox', { name: 'User name' }).fill('admin')

  // Step 3: Enter password
  await page.getByRole('textbox', { name: 'Password' }).fill('E7i*7wNgX*mM')

  // Step 4: Click Log in button
  await page.getByRole('button', { name: 'Log in' }).click()

  // Step 5: Wait for home page to load
  await page.waitForLoadState('networkidle')

  // Step 6: Click All menu
  await page.getByRole('menuitem', { name: 'All' }).click()

  // Step 7: Search Service Catalog
  await page.getByRole('textbox', { name: 'Enter search term to filter' }).fill('service')

  // Step 8: Open Service Catalog
  await page.getByRole('link', { name: /Service Catalog/i }).first().click()

  // Step 9: Switch to ServiceNow iframe
  const frame = page.frameLocator('iframe[name="gsft_main"]')

  // Step 10: Wait for catalog page to load
  await frame.getByText('Top Requests').waitFor({ timeout: 60000 })

  // Step 11: Click Apple iPhone 13 Pro
  await frame.getByRole('link', { name: /Apple iPhone 13 pro/i }).click()

  // Step 12: Choose Yes for lost or broken iPhone
  await frame.getByText('Yes').click()

  // Step 13: Enter Original phone number
  await frame.getByRole('textbox', { name: /What was the original/i }).fill('99')

  // Step 14: Select Unlimited monthly data allowance
  await frame.locator('select').first().selectOption({ label: 'Unlimited' })

  // Step 15: Select Sierra Blue color
  await frame.getByText('Sierra Blue').click()

  // Step 16: Select 512 GB storage
await frame.locator('label[for*="6055feb29792"]').click()

  // Step 17: Click Order Now button
  await frame.getByRole('button', { name: 'Order Now' }).click()

  // Step 18: Verify confirmation message
await expect(frame.getByText(/thank you|submitted/i).first()).toBeVisible({
  timeout: 60000
  })

  // Step 19: Capture full page screenshot
  await page.screenshot({
    path: 'screenshots/serviceNowOrderConfirmation.png',
    fullPage: true
  })
})