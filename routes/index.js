var express = require('express');
var router = express.Router();
var chatDB = require("./chatDB.js");

/* GET home page. */
router.get('/', function(req, res, next)
{
  if (req.query.username)
  {
    res.render('chat', { username: req.query.username, chatDB:chatDB});
    console.log(req.query.username);
    // chatDB.init();
  }
  else
  {
    res.render('index', { title: 'Chat Room' });
    console.log("no username");
  }
});

module.exports = router;
