var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('under-construction', {
        title: 'Robin Player 2 amiibo'
    });
});

module.exports = router;
