import { test } from '@playwright/test'
import dotenv from 'dotenv'

let environment = ''

if (process.env.envFileName) {
    environment = process.env.envFileName
} else {
    environment = 'QA'
}

dotenv.config({
    path: `data/LF_${environment}.env`
})

const appUrl = process.env.BASE_URL as string
const loginUser = process.env.USER_NAME as string
const loginPassword = process.env.USER_PASSWORD as string

test('Login into Leaftaps using env data', async ({ page }) => {

    await page.goto(appUrl)

    await page.locator('#username').fill(loginUser)

    await page.locator('#password').fill(loginPassword)

    await page.locator('.decorativeSubmit').click()

    await page.locator('text=CRM/SFA').click()

})