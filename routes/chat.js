var express = require('express');
var mysql = require("mysql");
var router = express.Router();
// var chatDB = require("chatDB.js");

/* GET home page. */
router.get('/get', function(req, res, next)
{
  // console.log("in chat.js");
  // chatDB.test();
  // chatDB.init();
  init();
  var rows = get();
  console.log("log 1: "+rows);
  // var wait = setTimeout(function()
  var wait = setInterval(function()
  {
    if(rows)
    {
      console.log("log 2: "+rows);
      // console.log("got rows");
      clearInterval(wait);
      res.status("success").send(rows);
    }
  }, 1000);
  // console.log(rows);
});

var init = function()
{
  // console.log("in init");
  con = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root",
    database: "test"
  });
}
var get = function()
{
  var returnData;
  con.query('SELECT * FROM test',function(err,rows)
  {
    if(err)
    {
      throw err;
    }
    else
    {
      // console.log('Data received from Db:\n');
      // console.log(rows);
      for (var i = 0; i < rows.length; i++)
      {
        console.log(rows[i].entry);
      };
      returnData = rows;
    }
  });
  setTimeout(function()
  {
    console.log("log 3: "+returnData);
    return returnData;
  }, 1000);
  // return "hi";
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
