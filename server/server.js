"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var data_1234 = require('../data/data-1234.json');
var data_4321 = require('../data/data-4321.json');
// Create a new express app instance
var app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', function (req, res) {
    res.send('Hello 8080!');
});
app.get('/test', function (req, res) {
    res.send('test view');
});
app.get('/1234', function (req, res) {
    res.json(data_1234);
});
app.get('/4321', function (req, res) {
    res.send(data_4321);
});
app.listen(8080, function () {
    console.log('App is listening on port 8080!');
});
