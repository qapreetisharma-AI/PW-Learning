export class Browser {

    browserName: string
    browserVersion: number

    constructor(browserName: string, browserVersion: number) {
        this.browserName = browserName
        this.browserVersion = browserVersion
    }

    openURL(): void {
        console.log(`${this.browserName} browser is opening the URL`)
    }

    closeBrowser(): void {
        console.log(`${this.browserName} browser is closed`)
    }

    navigateBack(): void {
        console.log(`${this.browserName} browser navigated back`)
    }
}