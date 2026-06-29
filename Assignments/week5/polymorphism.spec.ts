import { test } from '@playwright/test'

class Reporter {

    reportStep(msg: string, status: string): void

    reportStep(msg: string, status: string, snap: boolean): void

    reportStep(msg: string, status: string, snap?: boolean): void {

        console.log(`Message: ${msg}`)
        console.log(`Status: ${status}`)

        if (snap !== undefined) {
            console.log(`Take Snapshot: ${snap}`)
        }

        console.log('----------------------')
    }

}

test('Method Overloading Assignment', async () => {

    const report = new Reporter()

    report.reportStep('Login Successful', 'Pass')

    report.reportStep('User Created Successfully', 'Pass', true)

})