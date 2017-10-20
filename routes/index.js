var express = require('express');
var router = express.Router();

//render home page
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/article-test', function(req,res,next) {
  res.render('locking');
})

router.post('/search-test', function(req,res,next) {
  var input = req.body.search;
  var thisPage = 'home';
  if (input === 'gear') {
    res.render(thisPage, {gear:"try looking in this topic"});
  } else if (input === 'daily'){
    res.render(thisPage, {daily:"try looking in this topic"});
  } else if (input === 'riding'){
    res.render(thisPage, {riding:"try looking in this topic"});
  } else if (input === 'expenses'){
    res.render(thisPage, {expenses:"try looking in this topic"});
  } else if (input === 'locking') {
    res.render(input);
  } else {
    res.render(thisPage, { error:"Sorry, we couldn't figure out where to take you. Try diggin around."});
  }
})


// general error handling testers
module.exports = router;
