var express = require('express');
var router = express.Router();
router.get('/contact', function(request, response) {
	response.render('contact');
});
module.exports = router;