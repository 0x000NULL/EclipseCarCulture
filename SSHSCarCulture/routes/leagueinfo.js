'use strict';
var express = require('express');
var router = express.Router();
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('leagueinfo.pug', { title: 'Eclipse |Club Info', page: 'leagueinfo' });
});
module.exports = router;
