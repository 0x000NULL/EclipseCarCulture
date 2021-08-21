'use strict';
var express = require('express');
var router = express.Router();
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('resources.pug', { title: 'Eclipse | Resources', page: 'Resources' });
});
module.exports = router;
