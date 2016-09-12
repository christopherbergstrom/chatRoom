var express = require('express');
var router = express.Router();
// var username = require("javascripts/joinChat.js");

/* GET users listing. */
router.get('/', function(req, res, next)
{
  if (req.query.username)
  {
    res.render('chat', { username: req.query.username });
  }
  else
  {
    console.log("no username");
  }
});

module.exports = router;
