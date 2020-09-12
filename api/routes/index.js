var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json("hello server 2.0 " + process.env.WX_APPID);
});

module.exports = router;
