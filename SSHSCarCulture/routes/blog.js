'use strict';
var express = require('express');
var router = express.Router();
/* GET blog page. */
router.get('/', function (req, res, next) {
    res.render('blog.ejs', { title: 'Eclipse | Blog', page: 'blog'});
});
module.exports = router;
