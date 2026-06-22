"use strict";
// Abstract Class
class CanaraBank {
    recordPaymentDetails() {
        console.log("Payment details recorded successfully");
    }
}
// Concrete Class
class Amazon extends CanaraBank {
    cashOnDelivery() {
        console.log("Cash On Delivery payment selected");
    }
    upiPayments() {
        console.log("UPI payment completed successfully");
    }
    cardPayments() {
        console.log("Card payment completed successfully");
    }
    internetBanking() {
        console.log("Internet Banking payment completed successfully");
    }
}
// Create object
const payment = new Amazon();
// Call methods
payment.cashOnDelivery();
payment.upiPayments();
payment.cardPayments();
payment.internetBanking();
payment.recordPaymentDetails();
