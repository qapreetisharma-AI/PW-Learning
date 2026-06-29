import { test } from '@playwright/test'

class WebComponent {
    selector: string

    constructor(selector: string) {
        this.selector = selector
    }

    click() {
        console.log(`Clicked on component with selector: ${this.selector}`)
    }

    focus() {
        console.log(`Focused on component with selector: ${this.selector}`)
    }
}

class Button extends WebComponent {

    click() {
        super.click()
        console.log('Button specific click action performed')
    }

}

class TextInput extends WebComponent {

    value: string = ''

    enterText(text: string) {
        this.value = text
        console.log(`Entered text "${this.value}" in input with selector: ${this.selector}`)
    }

}

test('Inheritance Assignment', async () => {

    const loginButton = new Button('#loginButton')
    const usernameInput = new TextInput('#username')

    loginButton.focus()
    loginButton.click()

    usernameInput.focus()
    usernameInput.enterText('Preeti Sharma')

})