"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
class Browser {
    browserName;
    browserVersion;
    constructor(browserName, browserVersion) {
        this.browserName = browserName;
        this.browserVersion = browserVersion;
    }
    openURL() {
        console.log(`${this.browserName} browser is opening the URL`);
    }
    closeBrowser() {
        console.log(`${this.browserName} browser is closed`);
    }
    navigateBack() {
        console.log(`${this.browserName} browser navigated back`);
    }
}
exports.Browser = Browser;
