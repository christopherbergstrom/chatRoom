var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
{
  if (req.query.username)
  {
    console.log(req.query.username);
    res.render('chat', { username: req.query.username });
  }
  else
  {
    res.render('index', { title: 'Chat Room' });
    console.log("no username");
  }
});

module.exports = router;
