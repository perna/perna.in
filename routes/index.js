var express = require('express');
var models = require('../models/');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect(301, 'http://andersonmeira.com');
});

/*Testes*/

router.get('/:url', function(req, res, next) {
  
  var url = 'http://'+req.hostname+'/'+ req.params.url;
  var link = models.Link;

  link.find({where: {short_url:url} })
  	.then(function(result){
      	result.click = result.click + 1;
      	result.save();
      	res.redirect(301, result.original_url);
    })
    .error(function(err){
      	res.send('error');
     	next();
    });
});

module.exports = router;


