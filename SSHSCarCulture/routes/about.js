'use strict';
var express = require('express');
var router = express.Router();
var anakinCar = ["2007 Subaru Impreza 2.5i", "2003 Nissan 350z"]
var venaCar = ["2013 Hyundai Veloster Turbo"]
var ethanCar = ["2016 Subaru WRX"]
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('about.pug', { title: 'Eclipse | About', page: 'about', venaCar: venaCar[Math.floor(Math.random() * venaCar.length)], anakinCar: anakinCar[Math.floor(Math.random() * anakinCar.length)], ethanCar: ethanCar[Math.floor(Math.random() * ethanCar.length)] });
});
module.exports = router;
