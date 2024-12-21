/*
File Name : index.server.controller.js
Student No : 301295806
Student Name : Hyewon Ham
Date : 2023.09.30
*/


exports.render = function (req, res) {
    res.render('index', {
        title: 'Hello World'
    })
};
