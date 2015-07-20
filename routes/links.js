var express = require('express');
var router = express.Router();
var models = require('../models/');
var shortener = require('../lib/shortener');

router.get('/', function(req, res, next) {
	var data = {status:"online"};
  	res.json(data);
});

router.post('/', function(req, res, next) {

	var link = models.Link;

	link.create({
		original_url: req.body.url,
		click: 0
	})
	.then(function(result) {
		result.short_url = 'http://' + req.hostname + '/' + shortener.createUrl(result.id);
		result.save();
    	res.json({short_url: result.short_url });
	})
	.error(function(err){
    res.json({message: err.message});
  });

});

module.exports = router;
