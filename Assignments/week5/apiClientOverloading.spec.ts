import { test } from '@playwright/test'

class APIClient {

    sendRequest(endpoint: string): void

    sendRequest(endpoint: string, requestBody: string, requestStatus: boolean): void

    sendRequest(endpoint: string, requestBody?: string, requestStatus?: boolean): void {

        console.log(`Endpoint: ${endpoint}`)

        if (requestBody !== undefined && requestStatus !== undefined) {
            console.log(`Request Body: ${requestBody}`)
            console.log(`Request Status: ${requestStatus}`)
        }

        console.log('Request sent successfully')
    }
}

test('API Client Method Overloading Assignment', async () => {

    const apiClient = new APIClient()

    apiClient.sendRequest('/users')

    apiClient.sendRequest('/createUser', '{"name": "Preeti"}', true)
})