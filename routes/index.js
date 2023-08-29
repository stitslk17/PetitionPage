var express = require('express');
var router = express.Router();
var data = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { data, title: 'Petition' });
});

router.post('/create', function (req, res, next) {
  console.log(req.body.fullname)
  console.log(req.body.city)
  var fullname = req.body.fullname;
  var city = req.body.city;
  data.push({ fullname: fullname, city: city });
  res.redirect('/');
});

module.exports = router;
