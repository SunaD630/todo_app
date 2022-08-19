const express = require('express');
const { appendFile } = require('fs');
const router = express.Router();
const http = require('https'); 
const mysql = require('mysql');
// sql connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'serfcx25F&',
  database: 'todo'
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
  }); 

/* GET home page. */
router.get('/', function(req, res, next) {
   
  connection.query(
    "SELECT * FROM todos;", 
    (error, results) => {
      res.render('index', {title: 'TODO app', todo: results});
      console.log(error);
      //res.redirect('/');
    }
  );
});
/* POST */
router.post('/post', function (req, res, next) {
  const form_input = req.body.add;
  const q = "insert into todos SET ?";
  connection.query(
    q, {user_id: 0002, content: form_input}, 
    (error, results) => {
      console.log(error);
      //res.redirect('/');
    }
  );
  connection.query(
    "SELECT * FROM todos;", 
    (error, results) => {
      res.render('index', {title: 'TODO app', todo: results});
      console.log(error);
      //res.redirect('/');
    }
  );
});
module.exports = router;
