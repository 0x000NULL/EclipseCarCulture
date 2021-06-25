﻿'use strict';
var debug = require('debug');
//var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var fs = require('fs');
var http = require('http');
var https = require('https');
var express = require('express')
    , cons = require('consolidate')
    , app = express();
var engines = require('consolidate');
var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
const transport = nodemailer.createTransport(
    nodemailerSendgrid({
        apiKey: process.env.SENDGRID_API_KEY
    })
);

var routes = require('./routes/index');
var others = require('./routes/others')
var league = require('./routes/league')
var smash = require('./routes/smash-info');
var about = require('./routes/about');
var rankings = require('./routes/rankings');
var mc = require('./routes/mc');
var fortnite = require('./routes/fortnite');
var overwatch = require('./routes/overwatch');
var gallery = require('./routes/gallery');
var leagueinfo = require('./routes/leagueinfo');
var blog = require('./routes/blog');
var help = require('./routes/help');
var resources = require('./routes/resources');
var solo = require('./routes/solo');
var signin = require('./routes/signin');
var oneoff = require('./routes/oneoff');

var app = express();

//const privateKey = fs.readFileSync('/etc/letsencrypt/live/silverstateesports.org/privkey.pem', 'utf8');
//const certificate = fs.readFileSync('/etc/letsencrypt/live/silverstateesports.org/cert.pem', 'utf8');
//const ca = fs.readFileSync('/etc/letsencrypt/live/silverstateesports.org/fullchain.pem', 'utf8');

//const credentials = {
//	key: privateKey,
//	cert: certificate,
// ca: ca
//};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', engines.swig); // take note, using 'html', not 'ejs' or 'pug'..
app.set('view engine', 'html'); // also 'html' here.;

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/smash', smash);
app.use('/about', about);
app.use('/league', league);
app.use('/others', others);
app.use('/rankings', rankings);
app.use('/mc', mc);
app.use('/overwatch', overwatch);
app.use('/fortnite', fortnite);
app.use('/gallery', gallery);
app.use('/leagueinfo', leagueinfo);
app.use('/blog', blog);
app.use('/help', help);
app.use('/resources', resources);
app.use('/signin', signin);
app.use('/solo', solo);
app.use('/oneoff', oneoff);

//DataBaseController
//var connection = mysql.createConnection({
//    host     : 'localhost',
//    user     : 'root',
//    password : 'Painkiller69!',
//    database : 'nodelogin'
//});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error.pug', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error.pug', {
        message: err.message,
        error: {}
    });
});


var httpServer = http.createServer(app);
//const httpsServer = https.createServer(credentials, app);

//httpServer.listen(80);
//httpsServer.listen(443);
app.set('port', process.env.PORT || 80);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});

//httpsServer.listen(443, () => {
//	console.log('HTTPS Server running on port 443');
//});
