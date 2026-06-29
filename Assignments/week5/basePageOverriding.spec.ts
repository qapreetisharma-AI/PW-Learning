import { test } from '@playwright/test'

class BasePage {

    findElement() {
        console.log('Finding element on the page')
    }

    clickElement() {
        console.log('Clicking element on the page')
    }

    enterText() {
        console.log('Entering text in the element')
    }

    performCommonTasks() {
        console.log('Performing common tasks from BasePage')
    }
}

class LoginPage extends BasePage {

    performCommonTasks() {
        console.log('Performing login page specific common tasks')
        console.log('Enter username')
        console.log('Enter password')
        console.log('Click login button')
    }
}

test('Method Overriding Assignment', async () => {

    const basePage = new BasePage()
    const loginPage = new LoginPage()

    basePage.findElement()
    basePage.clickElement()
    basePage.enterText()
    basePage.performCommonTasks()

    loginPage.findElement()
    loginPage.clickElement()
    loginPage.enterText()
    loginPage.performCommonTasks()
})