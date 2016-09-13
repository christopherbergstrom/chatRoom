var mysql = require("mysql");
var con;
function test()
{
  console.log("in chatDB");
}
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
    if(err) throw err;

    console.log('Data received from Db:\n');
    // console.log(rows);
    // for (var i = 0; i < rows.length; i++)
    // {
    //   console.log(rows[i].entry);
    // };
    return rows;
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
