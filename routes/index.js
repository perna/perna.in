var express = require('express');
var models = require('../models/');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect(301, 'http://andersonmeira.com');
});

router.get('/:url', function(req, res, next) {
  
  var url = 'http://'+req.hostname+'/'+ req.params.url;
  var link = models.Link;

  link.findOne({where: {short_url:url} })
  	.then(function(link){
        if(link){
      	 link.click = link.click + 1;
      	 link.save();
      	 res.redirect(301, link.original_url);
        } else {
          res.sendStatus(404);
        }
    })
    .catch(function(err){
     	res.send(500, err);
    });
});

router.get('/:url/_stats', function(req, res, next) {
  
  var url = 'http://'+req.hostname+'/'+ req.params.url;
  var link = models.Link;

  link.findOne({where: {short_url:url} })
    .then(function(link){
        var click = link.click;
        res.json({clicks: click});
    })
    .catch(function(err){
      res.send(500, err);
    });
});

module.exports = router;
