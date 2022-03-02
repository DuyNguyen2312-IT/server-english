const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "supportenglish",
});

connection.connect(function (err) {
  err ? console.log(err) : console.log("Connect success");
});

module.exports = connection;
