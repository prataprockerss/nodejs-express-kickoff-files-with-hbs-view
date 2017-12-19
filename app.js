const
  // contants
  C = require('./config/constants'),
  express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  flash = require('connect-flash'),
  // handlebars
  
  expHbs = require('express-handlebars'),
  helpers = require('handlebars-helpers')(),
  // routues
  index = require('./routes/index'),
  users = require('./routes/users'),
  docs = require('./routes/docs')
  
  app = express(),
  hbsConfig = {
    extname: 'hbs',
    layoutsDir: path.join(__dirname, '/views/layouts/'),
    defaultLayout: 'main',
    partialsDir: {
      dir: path.join(__dirname, '/views/partials/')
    },
    helpers: helpers
  },
  hbs = expHbs.create(hbsConfig);
// view engine setup
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/docs', docs);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error(C.ERROR_MSSAGES._404); //message is importing form Constants
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
