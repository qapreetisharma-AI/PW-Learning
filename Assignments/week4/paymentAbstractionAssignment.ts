// Interface
interface Payments {

  cashOnDelivery(): void

  upiPayments(): void

  cardPayments(): void

  internetBanking(): void
}

// Abstract Class
abstract class CanaraBank implements Payments {

  abstract cashOnDelivery(): void

  abstract upiPayments(): void

  abstract cardPayments(): void

  abstract internetBanking(): void

  recordPaymentDetails(): void {
    console.log("Payment details recorded successfully")
  }
}

// Concrete Class
class Amazon extends CanaraBank {

  cashOnDelivery(): void {
    console.log("Cash On Delivery payment selected")
  }

  upiPayments(): void {
    console.log("UPI payment completed successfully")
  }

  cardPayments(): void {
    console.log("Card payment completed successfully")
  }

  internetBanking(): void {
    console.log("Internet Banking payment completed successfully")
  }
}

// Create object
const payment = new Amazon()

// Call methods
payment.cashOnDelivery()
payment.upiPayments()
payment.cardPayments()
payment.internetBanking()
payment.recordPaymentDetails()