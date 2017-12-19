const
  express = require('express'),
  router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  let users_params = { title: 'Express' }
  res.render('pages/users', users_params);
});

router.get('/login',(req,res) => {
  let login_params = {
    title: 'Login',
    layout: false,
    fontAwesome: true,
  }
  res.render('pages/login',login_params)
})

module.exports = router;
