const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

const mysql = require("mysql");

//* connect database with nodejs
const connection = require("./config/db/db");

//* Get data form API
// const Routers = require('./Routers/routers');
// Routers();

const routers = [
  "home",
  "vowels",
  "diphthongs",
  "consonants",
  "communicate",
  "dictionary",
  "opal",
  "irregular",
  "wordform",
  "users",
];

// routers.map((router) => {
//   return app.get(`/${router}`, (req, res) => {
//     const sql = `SELECT * FROM ${router}`;
//     connection.query(sql, function (err, results) {
//       if (err) throw err;
//       res.json({ router: results });
//     });
//   });
// });

//*

app.get(`/`, (req, res) => {
  const sql = `SELECT * FROM home`;
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ router: results });
  });
});

app.get(`/vowels`, (req, res) => {
  const sql = `SELECT * FROM vowels`;
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ router: results });
  });
});

app.get(`/diphthongs`, (req, res) => {
  const sql = `SELECT * FROM diphthongs`;
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ router: results });
  });
});

app.get(`/consonants`, (req, res) => {
  const sql = `SELECT * FROM consonants`;
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ router: results });
  });
});

app.get(`/communicate`, (req, res) => {
  const sql = `SELECT * FROM communicate`;
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ router: results });
  });
});

app.get(`/dictionary`, (req, res) => {
  const sql = `SELECT * FROM dictionary`;
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ router: results });
  });
});

app.get(`/opal`, (req, res) => {
  const sql = `SELECT * FROM opal`;
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ router: results });
  });
});

app.get(`/irregular`, (req, res) => {
  const sql = `SELECT * FROM irregular`;
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ router: results });
  });
});

app.get(`/wordform`, (req, res) => {
  const sql = `SELECT * FROM wordform`;
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ router: results });
  });
});

app.get(`/users`, (req, res) => {
  const sql = `SELECT * FROM users`;
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ router: results });
  });
});

//* Add data from server

app.post("/users", (req, res) => {
  const { userName, password, fullName, DOB, phone, email, image } = req.body;

  const query = `INSERT INTO USERS (userName, password, fullName, DOB, phone, email, image) VALUES (?, ?, ?, ?, ?, ?, ?);`;

  connection.query(
    query,
    [userName, password, fullName, DOB, phone, email, image],
    function (err, result) {
      if (err) throw err;
      res.json({ router: result });
    }
  );
});

//* Create Home
app.post("/home", (req, res) => {
  const { title, description, slug, image, status } = req.body;

  const query = `INSERT INTO HOME (title, description, link, image, status) VALUES (?, ?, ?, ?, ?);`;

  connection.query(
    query,
    [title, description, slug, image, status],
    function (err, result) {
      if (err) throw err;
      res.json({ router: result });
    }
  );
});

//* Create Communicate English

app.post("/communicate", (req, res) => {
  const { englishName, subName, voice1, voice2 } = req.body;
  console.log(englishName, subName, voice1, voice2);

  const query = `INSERT INTO communicate (englishName, subName, voice1, voice2) VALUES (?, ?, ?, ?);`;

  connection.query(
    query,
    [englishName, subName, voice1, voice2],
    function (err, result) {
      if (err) throw err;
      res.json({ router: result });
    }
  );
});

//* Delete Communicate
app.delete("/communicate/delete/:id", (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM communicate WHERE id = ?`;

  connection.query(query, [id], function (err, result) {
    if (err) throw err;
    res.json({ router: result });
  });
});

//* Create Dictionary
app.post("/dictionary", (req, res) => {
  const { englishName, sign, subName, voice1, voice2 } = req.body;
  console.log(englishName, subName, voice1, voice2);

  const query = `INSERT INTO dictionary (englishName, sign, subName, voice1, voice2) VALUES (?, ?, ?, ?, ?);`;

  connection.query(
    query,
    [englishName, sign, subName, voice1, voice2],
    function (err, result) {
      if (err) throw err;
      res.json({ router: result });
    }
  );
});

//* Delete Dictionary
app.delete("/dictionary/delete/:id", (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM dictionary WHERE id = ?`;

  connection.query(query, [id], function (err, result) {
    if (err) throw err;
    res.json({ router: result });
  });
});

//* Create Opal
app.post("/opal", (req, res) => {
  const { englishName, sign, subName, voice1, voice2 } = req.body;
  console.log(englishName, subName, voice1, voice2);

  const query = `INSERT INTO opal (englishName, sign, subName, voice1, voice2) VALUES (?, ?, ?, ?, ?);`;

  connection.query(
    query,
    [englishName, sign, subName, voice1, voice2],
    function (err, result) {
      if (err) throw err;
      res.json({ router: result });
    }
  );
});

//* Delete Dictionary
app.delete("/opal/delete/:id", (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM opal WHERE id = ?`;

  connection.query(query, [id], function (err, result) {
    if (err) throw err;
    res.json({ router: result });
  });
});

//* Delete Home
app.delete("/courses/delete/:id", (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM HOME WHERE id = ?`;

  connection.query(query, [id], function (err, result) {
    if (err) throw err;
    res.json({ router: result });
  });
});

//* Login user
app.post("/login", (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;

  const query = `SELECT * FROM USERS WHERE userName= ? and password= ?`;
  connection.query(query, [userName, password], function (err, result) {
    if (err) res.send({ err: err });

    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "Wrong username/password combination!" });
    }
  });
});

//* Update
// app.get('/courses/update/:item', (req, res) => {
//   const { title, description, slug, image, status } = req.body;
//   console.log(res.body);
//   const query = `SELECT * FROM HOME WHERE id = ?`;

//   connection.query(query, [title, description, slug, image, status],
//     function (err, result) {
//       if (err) throw err;
//       res.json({ router: result });
//     })
// });

//* Run server
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
