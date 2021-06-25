'use strict';
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index.pug', { title: 'Eclipse', page: 'home', error: false });
});
module.exports = router;
