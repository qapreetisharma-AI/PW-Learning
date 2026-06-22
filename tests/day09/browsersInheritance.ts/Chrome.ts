import { Browser } from "./Browser"

export class Chrome extends Browser {

    openIncognito(): void {
        console.log("Chrome incognito window is opened")
    }

    clearCache(): void {
        console.log("Chrome cache is cleared")
    }

    openURL(): void {
        console.log("Chrome is opening URL with fast loading")
    }
}