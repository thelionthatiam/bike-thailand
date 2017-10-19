const fs = require('fs');
const http = require('http');
const express = require('express')
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.engine('hbs', hbs({extname: 'hbs', defaultLayout:'layout', layoutsDir:__dirname + '/views/layouts'}));
app.set('views', './views');
app.set('view engine', "hbs");
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes/index'))

app.use(function(req, res, next) {
  res.status(404);
  res.render('error', { errName: null, errMessage: "We couldn't find this page." });
});

app.use(function (err, req, res, next) {
  if (err.name === 'PayloadTooLargeError' ) {
    res.status(413);
    res.render('error', { errName: err.message, errMessage: "You entered something over 50kb. Please make your inputs are smaller and try again." });
  } else if (err.name === 'ReferenceError') {
    res.status(500);
    res.render('error', { errName: err.message, errMessage: "Something was missing." });
  } else {
    res.status(500);
    res.render('error', { errName: err.message, errMessage: null });
  }
})

app.listen(8000, function () {
  console.log('app initialized');
})
