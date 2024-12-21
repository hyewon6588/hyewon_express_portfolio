/*
File Name : server.js
Student No : 301295806
Student Name : Hyewon Ham
Date : 2023.09.30
*/

// const path = require('path');
// process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var createExpressApp = require('./config/express');
var app = createExpressApp();

// app.listen(3000);
// app.listen(process.env.PORT || 3000, function(){
//     console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
//   });

module.exports = app;

// console.log('Server running at http://localhost:3000/');
