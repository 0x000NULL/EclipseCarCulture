'use strict';
var express = require('express');
var router = express.Router();
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('help.pug', { title: 'Eclipse | Helps', page: 'help' });
});
module.exports = router;
