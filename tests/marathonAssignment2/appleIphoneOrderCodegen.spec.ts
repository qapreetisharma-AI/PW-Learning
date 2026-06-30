import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev296651.service-now.com/');
  await page.getByRole('textbox', { name: 'User name' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('E7i*7wNgX*mM');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('menuitem', { name: 'All' }).click();
  await page.getByRole('textbox', { name: 'Enter search term to filter' }).click();
  await page.getByRole('textbox', { name: 'Enter search term to filter' }).fill('service');
  await page.getByRole('link', { name: 'Service Catalog 3 of' }).click();
  await page.locator('iframe[name="gsft_main"]').contentFrame().getByRole('link', { name: 'Apple iPhone 13 pro' }).click();
  await page.locator('iframe[name="gsft_main"]').contentFrame().locator('div').filter({ hasText: /^Yes$/ }).click();
  await page.locator('iframe[name="gsft_main"]').contentFrame().getByText('Yes').click();
  await page.locator('iframe[name="gsft_main"]').contentFrame().getByRole('textbox', { name: '   What was the original' }).click();
  await page.locator('iframe[name="gsft_main"]').contentFrame().getByRole('textbox', { name: '   What was the original' }).fill('99');
  await page.locator('iframe[name="gsft_main"]').contentFrame().locator('select[name="IO:ff1f478e9747011021983d1e6253af68"]').selectOption('unlimited');
  await page.locator('iframe[name="gsft_main"]').contentFrame().locator('span').filter({ hasText: 'Sierra Blue' }).nth(1).click();
  await page.locator('iframe[name="gsft_main"]').contentFrame().getByText('GB [add $300.00]').click();
  await page.locator('iframe[name="gsft_main"]').contentFrame().getByRole('button', { name: 'Order Now' }).click();
});