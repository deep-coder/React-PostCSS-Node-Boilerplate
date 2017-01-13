require('dotenv').config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require('./webpack.config');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var app = express();
require('./utils/Promisify');




// Run Webpack dev server in development mode
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Request-Headers", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

var staticPath = 'public';

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//middleware that checks if JWT token exists and verifies it if it does exist.
//In all the future routes, this helps to know if the request is authenticated or not.
app.use(function (req, res, next) {
   next();
});


app.use(express.static(staticPath));
app.use('/', express.static(staticPath));


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// app.use(function(err, req, res, next) {
//   console.error(err.stack);
//   console.log(1)
//   res.status(500).send('Uh oh! Something broke!');
// });


// error handlers
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  console.dir(err);
  res.status(err.status || 500);
  if (err.status === 500) {
    console.error(err.stack);
    res.json({ error: 'Internal Server Error' });
  }
  else if (err.status === 404) {
    res.render('error');    //render error page
  } else {
    res.json({ error: err.message })
  }
});

// Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sensor-monitor-db');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function (ref) {
  console.log('Connected to mongo server.');
})

app.listen(process.env.PORT || '3000', (error) => {
  if (!error) {
    console.log(`MERN is running on port: 3000! Build something amazing!`); // eslint-disable-line
  }
});


module.exports = app;

