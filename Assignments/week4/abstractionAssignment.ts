interface AbstractionDatabaseConnection {

  connect(): void

  disconnect(): void

  executeUpdate(): void
}

abstract class MySqlConnection implements AbstractionDatabaseConnection {

  abstract connect(): void

  abstract disconnect(): void

  abstract executeUpdate(): void

  executeQuery(): void {
    console.log("Query executed successfully")
  }
}

class PlaywrightDBConnection extends MySqlConnection {

  connect(): void {
    console.log("Database connected successfully")
  }

  disconnect(): void {
    console.log("Database disconnected successfully")
  }

  executeUpdate(): void {
    console.log("Database updated successfully")
  }
}

const db = new PlaywrightDBConnection()

db.connect()
db.executeQuery()
db.executeUpdate()
db.disconnect()