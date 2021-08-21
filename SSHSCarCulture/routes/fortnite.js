'use strict';
var express = require('express');
var router = express.Router();
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('fortnite.pug', { title: 'Eclipse', page: 'fortnite' });
});
module.exports = router;
