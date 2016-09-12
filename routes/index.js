var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
{
  res.render('index', { title: 'Chat Room' });
  if (req.query.username)
  {
    console.log(req.query.username);
    // res.render('chat', { username: req.query.username });
  }
  else
  {
    console.log("no username");
  }
});

module.exports = router;
