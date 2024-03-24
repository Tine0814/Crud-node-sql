import mysql, { Connection } from "mysql2";

const dbConnection: Connection = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "local",
});

dbConnection.connect((err) => {
  if (err) {
    console.error("Error", err);
    return;
  }

  console.log("Connected to MySQL");
});

export default dbConnection;
