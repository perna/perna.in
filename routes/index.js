var express = require('express');
var models = require('../models/');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.redirect(301, 'http://andersonmeira.com');
});

router.get('/:url', function(req, res, next) {
  
  var url = 'http://'+req.hostname+'/'+ req.params.url;
  var Link = models.Link;



  Link.findOne({where: {short_url:url} })
  	.then(function(link){
        link.increment(['click'],{by: 1})
          .then(function(){
      	     res.redirect(301, link.original_url);
          })
    })
    .catch(function(err){
     	res.status(404).send(err);
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
      res.status(500).send(err);
    });
});

module.exports = router;
