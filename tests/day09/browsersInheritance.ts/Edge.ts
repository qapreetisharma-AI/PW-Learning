import { Browser } from "./Browser"

export class Edge extends Browser {

    takeSnap(): void {
        console.log("Screenshot captured in Edge browser")
    }

    clearCookies(): void {
        console.log("Edge cookies are cleared")
    }

    navigateBack(): void {
        console.log("Edge browser navigated back using back button")
    }
}