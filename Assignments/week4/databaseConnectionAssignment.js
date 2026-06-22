"use strict";
class PlaywrightConnection {
    connect() {
        console.log("Database connected successfully");
    }
    disconnect() {
        console.log("Database disconnected successfully");
    }
    executeUpdate() {
        console.log("Database update executed successfully");
    }
}
// Create object of concrete class
const db = new PlaywrightConnection();
// Call methods
db.connect();
db.executeUpdate();
db.disconnect();
export {}
