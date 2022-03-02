const express = require('express');
const app = express();

const connection = require('./../config/db/db');

const Routers = () => {
  const routers = ['home', 'vowels', 'diphthongs', 'consonants', 'communicate', 'dictionary', 'opal', 'irregular', 'wordform', 'users'];

  routers.map(router => {
    return (
      app.get(`/${router}`, (req, res) => {
        const sql = `SELECT * FROM ${router}`;
        connection.query(sql, function (err, results) {
          if (err) throw err;
          res.json({ router: results });
        });
      })
    );
  });
}

module.exports = Routers;