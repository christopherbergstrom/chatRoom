var express = require('express');
var mysql = require("mysql");
var router = express.Router();
// var chatDB = require("chatDB.js");

/* GET home page. */
router.get('/get', function(req, res, next)
{
  console.log("in chat.js");
  // chatDB.test();
  // chatDB.init();
  init();
  var rows = get();
  // var rows = chatDB.get();
  // res.status("success").send(rows);
  res.status("success").send("rows");
});

var init = function()
{
  console.log("in init");
  con = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root",
    database: "test"
  });
  // con.connect(function(err)
  // {
  //   if(err)
  //   {
  //     console.log('Error connecting to Db');
  //     return false;
  //   }
  //   else
  //   {
  //     console.log('Connection established');
  //     return true;
  //   }
  // });
}
var get = function()
{
  con.query('SELECT * FROM test',function(err,rows)
  {
    if(err)
    {
      throw err;
    }
    else
    {
      console.log('Data received from Db:\n');
      // console.log(rows);
      for (var i = 0; i < rows.length; i++)
      {
        console.log(rows[i].entry);
      };
      // return rows;
    }
  });

}
var post = function(message)
{
  // var message = {entry: 'testing'};
  con.query('INSERT INTO test SET ?', message, function(err,res)
  {
    if(err)
    {
      throw err;
      return false;
    }
    else
    {
      console.log('Last insert ID:', res.insertId);
      return true;
    }
  });
}


module.exports = router;
