var express = require('express');
var router = express.Router();
var chatDB = require("./chatDB.js");

/* GET home page. */
router.get('/', function(req, res, next)
{
  console.log("in chat.js");
  res.status("no").send("in chat.js")
});

module.exports = router;
