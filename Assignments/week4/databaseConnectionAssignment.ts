interface DatabaseConnection {

  connect(): void

  disconnect(): void

  executeUpdate(): void
}

class PlaywrightConnection implements DatabaseConnection {

  connect(): void {
    console.log("Database connected successfully")
  }

  disconnect(): void {
    console.log("Database disconnected successfully")
  }

  executeUpdate(): void {
    console.log("Database update executed successfully")
  }
}

// Create object of concrete class
const db = new PlaywrightConnection()

// Call methods
db.connect()
db.executeUpdate()
db.disconnect()
export {}