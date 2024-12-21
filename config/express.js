/*
File Name : express.js
Student No : 301295806
Student Name : Hyewon Ham
Date : 2023.09.30
*/

var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');
const path = require('path');


module.exports = function () {
    var app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));

    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    
    app.set('views', path.resolve(__dirname, '../app/views'));
    app.set('view engine', 'ejs');

    app.use(express.static(path.join(__dirname, '../public')));
    app.use(express.static(path.join(__dirname, '../node_modules')));
    app.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap')));   

    app.use('/', require('../app/routes/index.server.routes.js'));
    //require('../app/routes/index.server.routes.js')(app);
    // app.use(express.static('./public'));
    // app.use(express.static("./node_modules"));

    return app;
};
