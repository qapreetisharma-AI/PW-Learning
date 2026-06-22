"use strict";
class MySqlConnection {
    executeQuery() {
        console.log("Query executed successfully");
    }
}
class PlaywrightDBConnection extends MySqlConnection {
    connect() {
        console.log("Database connected successfully");
    }
    disconnect() {
        console.log("Database disconnected successfully");
    }
    executeUpdate() {
        console.log("Database updated successfully");
    }
}
const db = new PlaywrightDBConnection();
db.connect();
db.executeQuery();
db.executeUpdate();
db.disconnect();
