var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('inprogress.pug', { title: 'Silver State Esports', page: 'home' });
});

module.exports = router;


