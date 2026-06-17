import { test, chromium, firefox } from '@playwright/test'

test('RedBus and Flipkart', async () => {

    const edgeBrowser = await chromium.launch({
        channel: 'msedge',
        headless: false
    })

    const edgePage = await edgeBrowser.newPage()

    await edgePage.goto('https://www.redbus.in')

    console.log(await edgePage.title())
    console.log(edgePage.url())

    const firefoxBrowser = await firefox.launch({
        headless: false
    })

    const firefoxPage = await firefoxBrowser.newPage()

    await firefoxPage.goto('https://www.flipkart.com')

    console.log(await firefoxPage.title())
    console.log(firefoxPage.url())

    await edgeBrowser.close()
    await firefoxBrowser.close()
})