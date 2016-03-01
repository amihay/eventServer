var express = require('express');
var router = express.Router();

router.route('/').get(function(req, res) {
  res.send('app server is running!!');
});

module.exports = router;
