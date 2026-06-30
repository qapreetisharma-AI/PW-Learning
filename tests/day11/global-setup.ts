import { chromium } from '@playwright/test'
import path from 'path'

async function globalSetup() {

  const browser = await chromium.launch({ headless: false })

  const page = await browser.newPage()

  await page.goto('http://leaftaps.com/opentaps/control/main')

  await page.locator('#username').fill('democsr')

  await page.locator('#password').fill('crmsfa')

  await page.locator('.decorativeSubmit').click()

  const filePath = path.join(process.cwd(), 'data', 'auth.json')

  await page.context().storageState({ path: filePath })

  console.log('Storage state saved successfully in main data folder')

  await browser.close()
}

globalSetup()