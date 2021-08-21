'use strict';
var express = require('express');
var router = express.Router();
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('gallery.pug', { title: 'Eclipse | Gallery', page: 'gallery' });
});
module.exports = router;
