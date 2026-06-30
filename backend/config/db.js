const mysql = require("mysql2");
require("dotenv").config();

console.log("HOST:", process.env.DB_HOST);
console.log("BASE:", process.env.DB_NAME);

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((error) => {
  if (error) {
    console.error("❌ Error al conectar con MySQL:");
    console.error(error);
    return;
  }

  console.log("✅ Conexión exitosa a MySQL");
});

module.exports = connection;
