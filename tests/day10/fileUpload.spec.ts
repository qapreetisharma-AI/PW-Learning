import { test, expect } from '@playwright/test'
import path from 'path'

test('Upload a file and verify success message', async ({ page }) => {

  // Navigate to application
  await page.goto('https://the-internet.herokuapp.com/upload')

  // Locate file upload element
  const fileUpload = page.locator('#file-upload')

  // Correct path to sample.txt
  const filePath = 'C:\\Automation\\PW Learning\\.github\\data\\sample.txt'
  // Upload file
  await fileUpload.setInputFiles(filePath)

  // Click Upload button
  await page.locator('#file-submit').click()

  // Verify success message
  await expect(page.locator('h3')).toHaveText('File Uploaded!')

  // Verify uploaded file name
  await expect(page.locator('#uploaded-files')).toHaveText('sample.txt')

  console.log('File uploaded successfully')
})