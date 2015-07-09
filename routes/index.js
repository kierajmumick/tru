var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/tru', function(req, res) {
	
	var tru = "Tru";
	var truuuuuUUUUuuUuUUUuUUUuuuuuU = false;
	while (!truuuuuUUUUuuUuUUUuUUUuuuuuU) {
		// figure out whether the letter shoud be lower case, or the end
		// of the string
		var uCase = Math.random();
		if (uCase < .3333) {tru += "U";}
		else if (uCase < .9) {tru += "u";}
		else {truuuuuUUUUuuUuUUUuUUUuuuuuU = true;}
	}
	res.send({
		'tru': tru
	});
});

module.exports = router;
