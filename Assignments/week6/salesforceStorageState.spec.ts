import { test } from '@playwright/test'

test('Create Salesforce storage state', async ({ browser }) => {

    // Create a new browser context
    const context = await browser.newContext()

    // Create a new page
    const page = await context.newPage()

    // Navigate to Salesforce login page
    await page.goto('https://login.salesforce.com/')

    // Enter Salesforce username
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')

    // Enter Salesforce password
    await page.locator('#password').fill('TestLeaf@2025')

    // Click on login button
    await page.locator('#Login').click()

    // Wait for login to complete
    await page.waitForLoadState('load')

    // Verify Salesforce home page using title
    console.log(await page.title())

    // Save the logged in session into storage state file
    await context.storageState({ path: 'sf-storage.json' })

    // Close the browser context
    await context.close()
})