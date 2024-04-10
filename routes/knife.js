var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('knife', { title: 'Search Results for Knifes' });
});

module.exports = router;
var express = require('express');
const knife_controlers= require('../controllers/knife');
var router = express.Router();
/* GET knife */
router.get('/', knife_controlers.knife_view_all_Page );
/* GET request for one knife*/
router.get('/knife/:id', knife_controlers.knife_detail);
/* GET detail knife page */
router.get('/detail', knife_controlers.knife_view_one_Page);
module.exports = router;

