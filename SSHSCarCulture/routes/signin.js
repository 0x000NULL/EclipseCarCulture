'use strict';
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('signin.pug', { title: 'Silver State Esports', page: 'Team Events' });
});
module.exports = router;
