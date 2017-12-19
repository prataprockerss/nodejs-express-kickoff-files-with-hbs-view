const
  express = require('express'),
  router = express.Router(),
  C = require('../config/constants')
/* GET home page. */
router.get('/', function(req, res, next) {
  let index_params = { 
    title: 'Listing Page',
    pageList: C.PAGE_LIST,
    breadcrumbs: false
  }
  res.render('index', index_params);
});

module.exports = router;
