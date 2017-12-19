const
  express = require('express'),
  router = express.Router(),
  C = require('../config/constants'),
  JSH = require('../helper/component')
/* GET home page. */
router.get('/', function (req, res, next) {
  let index_params = {
    title: 'Listing Page',
    pageList: C.PAGE_LIST,
    breadcrumbs: false
  }
  res.render('docs/', index_params);
});

router.get('/form', (req, res) => {
  let form_params = {
    title: 'Form',
    scripts: ['timepicker', 'datepicker.min','nice-edit'],
    dob_days: [0,1,2,3,4,5,6,7],
    dob_months: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
    breadcrumbs: JSH.breadcrumbs(req.originalUrl)
  }
  res.render('docs/form', form_params)
})

router.get('/breadcrumbs/:level1/:level2', (req, res) => {
  res.render('docs/breadcurmbs', {
    breadcrumbs: JSH.breadcrumbs(req.originalUrl)
  })
})

router.get('/overlay', (req, res) =>{
  let overlay_prams = {
    breadcrumbs: JSH.breadcrumbs(req.originalUrl)
  }
  res.render('docs/overlay',overlay_prams)
})

module.exports = router;
