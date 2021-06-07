﻿'use strict';
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('rankings.pug', { title: 'Silver State Esports', page: 'Power Rankings' });
});
module.exports = router;
